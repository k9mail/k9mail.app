---
title: Content Providers 
nav_hide: true
layout: default
---

{% include development-header.html %}

{% include documentation-header.html %}

# Content Providers

## Requirements

Due to the shared nature of content providers, applications querying a [ContentProvider]( https://developer.android.com/guide/topics/providers/content-providers.html) have to be **fair** in their use of the obtained Cursor instance.

Since K-9 has no way to enforce fair-use of its ContentProviders, it is up to each querying application to obey a short set of rules in order not to step on each other toes:

 * You must **not keep** a hold on the newly obtained Cursor instance (eg. don't assign it to an instance/class variable)
 * You must **close** the Cursor in an early fashion: `query()`, extract data (and possibly store them for later usage) from the Cursor and `close()` the cursor in a row 

Failure to comply to these rules is likely to result in other applications using K-9 content providers to **freeze** (it might even freeze your own application, depending on the way you query the content provider).

Application developers need to keep in mind that each content provider invocation can be a costly and lengthly operation: if you don't want your application to appear to be unresponsive while waiting for a content resolver response (and possibly trigger the *Application Not Responding* (ANR) dialog), you have to properly use multithreading in order not to hog your application UI thread. More on that at http://developer.android.com/guide/practices/design/responsiveness.html.
Please note that just firing up Threads to invoke K-9 content provider isn't enough to properly implement multithreading: chances are that you need to properly serialize/throttle your invocations not to overwhelm the system with fast-paced `query()`.


## URIs

Correct as of **5.203**

### External

#### Accounts

K-9 provides a list of accounts via the ContentProvider:

*URI:* `content://com.fsck.k9.messageprovider/accounts/`

##### Columns:

*`accountNumber`*

Type: int

The number of the account

*`accountName`*

Type: String

The name of the account

*`accountUuid`*

Type: String

The unique ID of the account

*`accountColor`*

Type: int

The colour (see [android.graphics.Color](https://developer.android.com/reference/android/graphics/Color.html)) of the account

#### Unified Inbox Messages

URI: `content://com.fsck.k9.messageprovider/inbox_messages/`

##### Columns

*`_id`*

Type: long<br/>

Description: The unique ID for a row.

*`_count`*

Type: int<br/>

Description:  The count of rows in a directory.

*`date`*

Type: long

Description: The number of milliseconds since Jan. 1, 1970, midnight GMT.

*`sender`*

Type: String
  
*`subject`*

Type: TEXT
  
*`preview`*

Type: TEXT

*`account`*

Type: -

*`uri`*

Type: String

*`delUri`*
  
Type: String
	
#### Unread Messages

URI: `content://com.fsck.k9.messageprovider/account_unread/<AccountNumber>`

##### Columns

*`accountName`*

Type: String

Description: Name of account

*`unread`*
  
Type: Int

Description: Number of unread e-mail.

### Internal

#### EmailProvider

*Used by:* `MessageListFragment`, `com.fsck.k9.Account`, `EmailProviderCache`, `LocalStore`

The EmailProvider is probably the most complex of providers in K-9. Currently it’s only aimed at external usage. It exposes: 

* `MessageColumns`
* `FolderColumns`
* `SpecialColumns`
* `ThreadColumns`
* `StatsColumns`

The URIs it exposes are:

* `content://com.fsck.k9.provider.email/account/*/messages`
* `content://com.fsck.k9.provider.email/account/*/messages/threaded`
* `content://com.fsck.k9.provider.email/account/*/thread/#`
* `content://com.fsck.k9.provider.email/account/*/stats`

In order to return the data it performs some fairly complex SQL queries on the underlying data.

##### Message Columns

* `id`
* `uid`
* `internal_date`
* `subject`
* `date`
* `message_id`
* `sender_list`
* `to_list`
* `cc_list`
* `bcc_list`
* `reply_to_list`
* `flags`
* `attachment_count`
* `folder_id`
* `preview_type`
* `preview`
* `read`
* `flagged`
* `answered`
* `forwarded`



## Motivations behind usage restriction

One of our developers wrote the following e-mail surrounding Content Provider usage:

> **17th December 2010-10-17**
>
> I added mutual exclusion to the content provider to
    prevent resource starvation and that is a way to [implement thread
    safety](http://en.wikipedia.org/wiki/Thread_safety#Implementation)
> 
> Back on the content provider issue, it's a shame that Android
    documentation doesn't focus on the `ContentResolver` side (actually
    that shouldn't need to be explained but that seems to mislead people
    unaware of shared environments): since the `ContentProvider` is a shared
    resource, `ContentResolver`s have to be fair in their use of the shared
    resource and that implicitly mean they shouldn't keep a hold on
    anything that might prevent other resolvers to proceed (regardless of
    any mutual exclusion, Cursor retention is a resource consuming
    operation).
> 
> Since there is no way to actually prevent (from K-9's perspective)
    unfair use of the content provider, mutual exclusion was set to the
    minimum so that implementors can discover quickly enough that
    something's wrong with the resource or their usage of the resource.
    Even with the mutual exclusion minimum limit, chances are that
    implementors don't see problems with wrongly implemented resolvers
    (because they only have 1 single content resolver on their system) but
    we're maximizing the odds that they find out something's wrong.
    If I'd have to summarize all this mutual exclusion thing, I would say
    it's all about fairness.
>         
> One might then wonder why `Cursor` (and its `closeable` concept) was
    chosen for `ContentProvider`s when it was originatively designed for
    database purpose (its actual package name is android.database): my
    understanding is that it was chosen because it offers a lightweight
    transportation channel API that is able to stream data.
    Streaming is expected to be resource friendly, but that only is if the
    actual source is able to be streamed: in K-9, as of now, the source
    cannot be streamed because it has to be a List of objects in order to
    be sorted. Why isn't it a database source? Because the necessary
    business logic to properly build messages isn't implemented in the DB
    layer (I'm not saying it can't be done but could involve logic
    duplication/maintenance issues).
    Moreover, even if using a database as the actual `Cursor` source (which
    is likely to mitigate the `MatrixCursor` memory hog issue), that would
    tightly couple the provider application with the resolver application:
    if the provider application wants (for its own personal reasons) close
    its DB, that would invalidate the cursor used by the resolver and make
    it fail. The fact is that the storage backend (which might be a DB,
    flat files, XML files, network storage, etc.) is an application
    internal and an application should be able to use/open/close that
    backend at its own and sole discretion.
    Such matters (`Cursor` lifecycle/application coupling) go way beyond the
    simple provider/resolver semantic and should be avoided by closing the
    Cursor early (right after `query()` and data extraction). If one needs a
    realtime communication channel, there's an API for that: Intents
    (which can be combined with the provider API). If one needs to keep
    data for later usage (and maintain future latency/CPU usage at its
    minimum), keep the actual data and not the `Cursor` instance.
>
> -- fiouzy

---
title: Intents 
nav_hide: true
layout: doc
---

# Intents

The following [Intents](https://developer.android.com/guide/components/intents-filters.html) are produced by K-9. Third-party apps can listen for these and act accordingly.

## com.fsck.k9.intent.action.EMAIL_RECEIVED

As of [v2.3](/documentation/versionHistory), K-9 package name as changed from `com.android.email` to `com.fsck.k9`. Hence, the intent action and extra were also changed.

* scheme: email _(Neccessary for \<intent-filter\>)_
* host: messages

### EXTRAs
 
* com.fsck.k9.intent.extra.ACCOUNT
* com.fsck.k9.intent.extra.FOLDER
* com.fsck.k9.intent.extra.SENT_DATE
* com.fsck.k9.intent.extra.FROM
* com.fsck.k9.intent.extra.TO
* com.fsck.k9.intent.extra.CC
* com.fsck.k9.intent.extra.BCC
* com.fsck.k9.intent.extra.SUBJECT
* com.fsck.k9.intent.extra.FROM\_SELF _Boolean (version 2.101 and later)_

### Apps Using This Intent

* [Email Popup](https://www.blntsoft.com/email-popup/)
* [LiveView notifications](https://sven.killig.de/android/LiveView/)


# Intent URIs Provided

## Email message URI

Use the URI contained in the `com.fsck.k9.intent.action.EMAIL_RECEIVED` intent, to view an email message

* action: android.intent.action.VIEW
* scheme: email
* host: messages



# Intent Actions Used

## android.intent.action.GET_CONTENT

Used to fetch attach files to email messages

### Apps providing This Intent

* [OI File Manager](https://www.openintents.org/en/node/159)

## android.intent.action.SEND

Used when a message is shared

### EXTRAs

Used in addition to the [documented EXTRAs](https://developer.android.com/reference/android/content/Intent.html#ACTION_SEND):

* com.fsck.k9.intent.extra.SENDER - a String[] holding e-mail addresses of the senders of the original message (version 3.703 and later)




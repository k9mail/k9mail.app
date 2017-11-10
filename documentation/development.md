---
title: Development 
nav_hide: true
layout: default
---

{% include development-header.html %}

{% include documentation-header.html %}

# Development

This section of the documentation covers information for developers.

## Getting Started

To develop K-9 you need a working understanding of:

* Java
* XML
* Android

With just Java knowledge you may be able to make minor logic changes and small fixes. But the Android APIs are used extensively (as well as Android based libraries), particularly in the front-end.

XML provides the translation (however that’s pulled in from Transifex anyway) and some of UI layout.

Once you’ve gained a solid understanding of these we recommend you look at our existing issues and pick one tagged 'good first issue'. If there’s not a tagged one not being worked on then feel free to pick an issue that interests you. If there’s no developer comments on the issue you select (and it’s not marked beginner) feel free to ask about the best approach before you start!

To build the project simply clone the repository and import the project into [Android Studio](https://developer.android.com/studio/index.html). From there you can use the IDE tools to build the k9mail APK and install it. 

## Architecture

The general structure of K-9 is as follows:

### Modules:

* **k9mail** - Main module - includes code for activities, notification, database interaction, settings and encryption
* **k9mail-library** - Back-end code for contacting mail providers and decoding emails from MIME
* **Android-PullToRefresh library** - Library for implementing 'pull to refresh' lists
* **openpgp-api** - Library for interacting with OpenPGP providers (e.g. OpenKeychain)
* **HoloColorPicker** - A colour picker for the Holo Android theme

### Core Design

There are many parts to K-9. This list gives a rough outline of some of them.

* Stores (`.mail.store.*`) - Each receiving protocol (IMAP, POP3 and WebDAV) is implemented as a store (e.g. ImapStore). This store maintains connections (e.g. ImapConnection), and provide access to Folders (e.g. ImapFolder). which correspond to email folders that store messages (ImapMessage).
* Transports (`.mail.transport.*`) - Each sending protocol (SMTP, WebDAV) is implemented as Transport that must establish a connection to send e-mail.
* Messages (`.mail.Message`, `.mail.internet.*`) - A message is comprised of Parts. The type of part actually used depends on whether the message is a RemoteMessage, waiting for download, mid-download (MemoryParts) or stored in the database (LocalPart).
* MessagingController (`.controller.MessagingController`) - This key class is responsible for syncing and handling user actions. For example, it has methods to queue synchronization of messages.
* Activities and Fragments (`.activity` , `.fragments`) - These back the various layout files to react to and display information to the user.
* Notifications (`.notification`) - This comprises the Android notification handling

### Scheduling & System Intents

K-9 currently uses the [`AlarmManager`](https://developer.android.com/reference/android/app/AlarmManager.html) API for scheduling tasks related to fetching email

#### Classes

* `K9AlarmManager` provides a slight abstraction over the `AlarmManager` to use `setAndAllowWhereIdle` where available
* `BootReceiver` and `CoreReceiver` are responsible for receiving `Intent`s from Android 
* `BootReceiver` schedules and receives scheduled intents with the `K9AlarmManager`
* The `MailService` dispatches `Intent`s to the BootReceiver to reschedule polls and refresh push receipt connections
* To create IMAP PUSH email connections, the `MailService` service starts the `PushService` and then instructs the `MessagingController` to start pushing
* The `PushService` does very little. It's purpose is to ensure that K-9 remains running while push connections are established
* The `PollService` performs a poll on the given account - again done as a service to ensure K-9 remains running during this period, regardless of whether UI is visible.
* The `RemoteControlService` also dispatches `Intent`s to refresh pushing and polling as demanded by the remote application.
* The `SleepService` is used to delay push reconnection on error.

#### Intents

* `SCHEDULE_INTENT` - Indicates an application wants the given `ALARMED_INTENT` extra to occur `AT_TIME` in the future
* `FIRE_INTENT` - Dispatched by the `K9AlarmManager` when a scheduled `ALARMED_INTENT` should happen
* `CANCEL_INTENT` - Cancels a previously scheduled `ALARMED_INTENT` from firing.

### Database

Each `LocalStore` has a separate `LockableDatabase` which controls access to an SQLiteDatabase. Hence querying multiple accounts  requires accessing separate database files. The database is stored by a StorageProvider (of which there are several types with specific support for Samsung Galaxy and HTC devices).

#### Tables

* `folders` - Contains the list of folders (and caches various parameters like unread count)
* `messages` - Contains the messages. Has fields to store useful fields like preview, text, subject. References it’s root message part’s id (`message_part_id`).
* `message_parts` - Contains a MIME message part
* `threads` - Stores a message_id, it’s parent message_id and root message_id.
* `pending_commands` - The queued outstanding commands requiring processing.
* Virtual Table: `messages_fulltext` - Used for searching message contents
 

## Third Party Integration

K-9 is built on Android, as such it uses two main methods of providing an interface for external applications:

* [Intents](/documentation/development/intents.html)
* [Content Providers](/documentation/development/contentProviders.html)

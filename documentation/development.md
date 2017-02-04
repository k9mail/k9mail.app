---
title: Development 
nav_hide: true
layout: default
---

{% include development-header.html %}

{% include documentation-header.html %}

# Development

This section of the documentation covers information for developers.

## Architecture

The general structure of K-9 is as follows:

### Modules:

* **k9mail** - Main module - includes code for activities, notification, database interaction, settings and encryption
* **k9mail-library** - Back-end code for contacting mail providers and decoding emails from MIME
* **Android-PullToRefresh library** - Library for implementing 'pull to refresh' lists
* **openpgp-api** - Library for interacting with OpenPGP provides (e.g. OpenKeychain)
* **HoloColorPicker** - A colour picker for the Holo Android theme

### Core Design

There are many parts to K-9. This list gives a rough outline of some of them.

* Stores (`.mail.store.*`) - Each receiving protocol (IMAP, POP3 and WebDAV) is implemented as a store (e.g. ImapStore). This store maintains connections (e.g. ImapConnection), and provide access to Folders (e.g. ImapFolder). which correspond to email folders that store messages (ImapMessage).
* Transports (`.mail.transport.*`) - Each sending protocol (SMTP, WebDAV) is implemented as Transport that must establish a connection to send e-mail.
* Messages (`.mail.Message`, `.mail.internet.*`) - A message is comprised of Parts. The type of part actually used depends on whether the message is a RemoteMessage, waiting for download, mid-download (MemoryParts) or stored in the database (LocalPart).
* MessagingController (`.controller.MessagingController`) - This key class is responsible for syncing and handling user actions. For example, it has methods to queue synchronization of messages.
* Activities and Fragments (`.activity` , `.fragments`) - These back the various layout files to react to and display information to the user.
* Notifications (`.notification`) - This comprises the Android notification handling


## Third Party Integration

K-9 is built on Android, as such it uses two main methods of providing an interface for external applications:

* [Intents](/documentation/development/intents.html)
* [Content Providers](/documentation/development/contentProviders.html)

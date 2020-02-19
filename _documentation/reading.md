---
title: Reading E-mail
layout: doc
level: "1"
icon: "fas fa-book-open"
---

# Reading E-mail

## Fetching E-mail

When you receive new mail, K-9 will retrieve it (POP) or poll for it or receive a PUSH notification about it (IMAP/WebDAV).  If so configured, K-9 will use the Android system notifier facility to alert you to the new messages so you can read them.

K-9 will display a notifier on the window-shade for each mailbox which has new messages.  When you tap on this notifier, you will be taken to either the Folder List or the Unread Message List for that mailbox/account, depending on the setting of Account Settings->Notifications->Notification Opens Unread for that account.  If you have not turned that setting on, you can tap Inbox to be taken into it.

#### Sync Types & K-9 Behaviour

There are two ways of being notified of new mail synchronized to your device, push and poll. Push means that the server notifies you of new email. Poll means you check the server to see if new mail exists.

You can configure synchronization of each folder using Folder Classes.

You can also manually synchronize an account. This performs a poll of subscribed folders.

Various actions may perform a manual poll to ensure that the state is consistent before/after they perform the action.

('Sync' in the app generally refers to polling.)

## Browsing E-mail

<img src="/assets/img/documentation/reading_folder_view.png" width="300" alt="Folder Message List" /> <img src="/assets/img/documentation/reading_email_view.png" width="300" alt="Message View" />

At this point, you're looking at a Message List -- a list of all (or only the unread) messages in a given folder; in this case, the Inbox folder for that email account.  This list will display message titles (in *bold* if not yet read, highlighted if not fully down loaded), a time or date (depending on the age of the message), and either the sender's email address or "real name".  It may also display a short preview of the body text of the message, a Star icon for flagging messages and/or a multi-select checkbox, if you've enabled those options in Global Settings->Display.

At this point, you can tap on a message in the list to open it for reading, or long-press to get the message's Context Menu, which contains these options, on a scrolling pop-up menu with the message's title at its top:

* Select - Select the message for group moving, copying or deleting
* Delete - Delete the message (Move it to the Trash folder [CHECKME])
* Forward - Forward the message by email
* Reply All - Compose a reply to the sender and all other recipients
* Reply - Compose a reply only to the sender
* Send Again - Attempt to send this message again (usually used from the Sent folder)
* Mark as Unread - Unset the Message Read flag
* Add Star - Mark the message as 'special' (\Flagged in IMAP, for example)
* Archive - Archive the message (by moving it to the Archive folder CHECKME)
* Spam - Move the message to the Spam folder
* Move - present a list of folders in the current email account to which the message can be moved; do so if one is selected
* Copy - present a list of folders in the current email account to which the message can be copied; do so if one is selected
* Share - hand the message body off to the Android Sharing facility, so the user can share it with someone in some fashion other than an email forward
* More from this sender - take the user to a new Message List, showing only messages sent From the same email address as the current message

## Keyboard Navigation

<table>
<thead>
<tr><th>Shortcut</th><th>Message List</th><th>Message Details</th></tr>
</thead>
<tbody>
<tr><td><b>Del</b></td><td>delete</td><td>delete</td></tr>
<tr><td><b>Volume up</b></td><td>next message (1)</td><td>next message (1)</td></tr>
<tr><td><b>Volume down</b></td><td>prev message (1)</td><td>prev message (1)</td></tr>
<tr><td><b>Back</b></td><td>managed back (2)</td><td>managed back (2)</td></tr>
<tr><td><b>a</b></td><td>reply-all</td><td>reply-all</td></tr>
<tr><td><b>c</b></td><td>compose</td><td></td></tr>
<tr><td><b>d</b></td><td>delete</td><td>delete</td></tr>
<tr><td><b>f</b></td><td>forward</td><td>forward</td></tr>
<tr><td><b>g</b></td><td>toggle flag</td><td>toggle flag</td></tr>
<tr><td><b>h</b></td><td>show keys help</td><td>show keys help</td></tr>
<tr><td><b>i</b></td><td>toggle sort order</td><td></td></tr>
<tr><td><b>j</b></td><td></td><td>prev message</td></tr>
<tr><td><b>k</b></td><td></td><td>next message</td></tr>
<tr><td><b>m</b></td><td>move</td><td>move</td></tr>
<tr><td><b>n</b></td><td></td><td>next message</td></tr>
<tr><td><b>p</b></td><td></td><td>prev message</td></tr>
<tr><td><b>q</b></td><td>up-to folder list</td><td></td></tr>
<tr><td><b>r</b></td><td>reply</td><td>reply</td></tr>
<tr><td><b>o</b></td><td>cycle sort key</td><td></td></tr>
<tr><td><b>s</b></td><td>toggle selected</td><td>move-to-spam</td></tr>
<tr><td><b>u</b></td><td>mark as unread</td><td>mark as unread</td></tr>
<tr><td><b>v</b></td><td>archive</td><td>archive</td></tr>
<tr><td><b>y</b></td><td>copy</td><td>copy</td></tr>
<tr><td><b>shift-z</b></td><td></td><td>zoom in</td></tr>
<tr><td><b>z</b></td><td>toggle read</td><td>zoom out</td></tr>
</tbody>
</table>

Footnotes:

  * *(1)* - if manage volume keys is turned on
  * *(2)* - if manage back button is turned on

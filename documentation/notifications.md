---
title: Notifications 
nav_hide: true 
layout: default
---

{% include documentation-header.html %}


# Notifications

Notifications are a key part of any communications tool and K-9 has, through it's development put considerable effort into designing a notifications system that both accomodates users and and works as well as possible across a broad range of devices.

In this section, the use of notifications by K-9 is documented.

## New E-mail Notifications

The most commonly seen notification is the new e-mail notification.

<img src="/assets/img/single_email_notification.png" align="right" alt="Single email" width="500" />

A single new e-mail notification will appear as a simple notification, showing the sender, the subject and the start of the e-mail. Actions are provided which are (by default):

* Reply
* Mark Read
* Delete

<div style="clear:both" />
<img src="/assets/img/collapsed_email_notification.png" align="right" alt="Stacked notification" width="500" />

Multiple e-mails to the same account are collapsed, stacked into a single notification, showing the sender and the subject. Dragging down on the stacked notification expands the unread e-mails into separate notifications, which then function as described above.

Tapping on the stacked notification clears it and opens the inbox for that account.

Tapping on an individual e-mail's notification clears it and opens that e-mail.

## Error Notifications

<img src="/assets/img/auth_failed_notification.png" align="right" alt="Authentication failure" width="500" />

If (for example) an account's password changes and K-9 can no longer receive e-mail, a notification will be created informing you of the authentication failure.

Tapping on the notification will open the "Incoming Server settings" section to correct the problem.

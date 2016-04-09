---
title: Documentation 
nav_order: 3 
layout: default
---

<div class="documentation-nav">
			<ul class="submenu">
				<li id="n-mainpage"><a href="/documentation.md">Home Page</a></li>	
				<li><a href="/installation.md">Installation</a></li>
				<li><a href="/setup.md">Initial Set-up</a></li>
				<li><a href="/accounts.md">Accounts</a></li>
				<li><a href="/folders.md">Folders</a></li>
				<li><a href="/reading.md">Reading E-mail</a></li>
				<li><a href="/sending.md">Sending E-mail</a></li>
				<li><a href="/encryption.md">Encryption</a></li>
				<li><a href="/settings.md">Settings</a></li>
			</ul>
		</div>

# Documentation

## Installation

Once you have obtained the APK file from <a href="download.html">one of the app stores</a> it will be installed automatically. Depending on the version of Android you have you may be prompted to accept K-9's use of permissions

## Permissions

We request the following permissions

* Contacts - This allows us to auto-suggest contacts and to allow you to add new senders to contacts via the app
* Photos / Media / Files - This allows you to attach images and save images you receive
* Storage - K-9 needs to store email and attachments to your device in order to work
* Vibration control - We offer the ability to vibrate on receiving an e-mail
* Run at start-up - This allows you to receive e-mail as soon as you turn your device on
* Prevent the device from sleeping - This allows push and poll e-mail to work
* View network connections - This allows us to only make requests when a connection is available
* Read sync settings - This allows us to sync contacts and other information
* Full network access - We need this in order to contact your email server.

## Initial Set-Up / Welcome Screen

When you first launch K-9 you will be shown a welcome screen giving you a run down of the features and then be prompted to add an account.

## Accounts

K-9 supports three main types of account at present:

* IMAP
* POP3
* WebDAV

The account set-up wizard will launch automatically after the Welcome Screen. For any additional accounts they can be added by going to the accounts menu, and then tapping the 'Add account' option in the overflow menu.

You are then prompted for the email address and password. If K-9 recognises the hostname, the setup will be automatically configured with the typical server connection details. If not, you will be prompted for the account type and then the connection details, including the authentication type.

## Fetching E-mail

When you receive new mail, K-9 will retrieve it (POP) or poll for it or receive a PUSH notification about it (IMAP/WebDAV).  If so configured, K-9 will use the Android system notifier facility to alert you to the new messages so you can read them.

K-9 will display a notifier on the window-shade for each mailbox which has new messages.  When you tap on this notifier, you will be taken to either the Folder List or the Unread Message List for that mailbox/account, depending on the setting of Account Settings->Notifications->Notification Opens Unread for that account.  If you have not turned that setting on, you can tap Inbox to be taken into it.

## Browsing E-mail

At this point, you're looking at a Message List -- a list of all (or only the unread) messages in a given folder; in this case, the Inbox folder for that email account.  This list will display message titles (in *bold* if not yet read, highlighted if not fully down loaded), a time or date (depending on the age of the message), and either the sender's email address or "real name".  It may also display a short preview of the body text of the message, a Star icon for flagging messages and/or a multi-select checkbox, if you've enabled those options in Global Settings->Display.

At this point, you can tap on a message in the list to open it for reading, or long-press to get the message's Context Menu, which contains these options, on a scrolling pop-up menu with the message's title at its top:

* Open - Open the message for viewing
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

## Composing E-mail

## Managing Folders

## Encryption

### OpenPGP

### S/MIME

## Settings

In K-9 Mail, settings are grouped under *Global Settings*, *Account Settings* and *Folder Settings*. Which of these you can access via the Menu button depends on where you are within the app.

In addition to the screens used to compose and view messages, K-9 Mail has three main list views, which provide access to settings as follows:

* **Accounts:** A list of your mail accounts, plus special items that apply across multiple accounts, such as Unified Mailbox and All messages. Press *Menu*, then *Settings* to open the *Global Settings*.
* **Folders:** A list of the folders under a selected account. Press *Menu*, *More*, then *Settings*, and you'll get a choice of *Global Settings* and *Account Settings*.
* **Messages:** A list of messages in a selected folder. Press *Menu*, *More*, then *Settings*, and you'll get a choice of *Global Settings*, *Account Settings* and *Folder Settings*.

### Global Settings 

*Global settings* are account-independent settings. Most of them define how the user interface should look like.

#### Display
The Display settings provide a lot of flexibility to control the global appearance of the app, as well as each of the main views, such as the account list, message lists and message display.

##### Global/Language
By default K-9 Mail will display the user interface in the language you're using for your Android system. With this setting you can override the system language, e.g. if your Android version doesn't support your native language but K-9 Mail does.

#### Global/Theme
Available themes:

* Light (default)
* Dark

#### Global/Fixed message theme
When using the dark theme messages can look wrong. This is why K-9 Mail allows you to override the app theme.

Enabling this setting will always use the theme configured in *Message view theme* below for the message view.
Not using a fixed message theme means you can select a theme in the menu of the message view.

#### Global/Message view theme
This setting specifies the theme that is used for the message view.

Available settings:

* Light
* Dark
* Use app theme (default)

#### Global/Composer theme
This setting specifies the theme that is used when composing a message.

Available settings:

* Light
* Dark
* Use app theme (default)

#### Global/Font size
Please see the wiki page [Font size](Manual-globalsettings-fonts) for details on font size settings.

#### Global/Animation
Here you can configure whether or not K-9 Mail will use animations. Currently this is only affects the animation when switching from the message list to the message view and back.

#### Account List/Show account size
This setting controls whether or not the account size is displayed in the list of accounts. Disabling it can speed up the display a bit.

#### Account List/Count search results
Unchecking this will disable counting the number of unread and starred messages in the special accounts (*Unified Inbox* and *All messages*).

#### Account List/Hide special accounts
Here you can disable the special accounts *Unified Inbox* and *All messages*.

**Note:** As of K-9 Mail v4.802, third-party applications can only access information about messages in the *Unified Inbox*. So disabling this can lead to those apps no longer working properly.

### Folder lists/Wrap long folder names
When this setting is enabled folder names that are longer than can be displayed in one line in the folder list will be wrapped and displayed using multiple lines rather than being shortened with "..."

### Message lists/Preview lines
Here you can specify how many lines of preview of a message you want to see in the message list.

**Note:** If you set preview lines to *0* and disable contact pictures (see below) you get a special single line message list view.

#### Message lists/Show stars
With this you can disable the star icon that is used to indicate flagged messages.

#### Message lists/Multi-select checkboxes
Enable this to always show the checkboxes to select a message.

#### Message lists/Show correspondent names
Disable this to display email addresses instead of correspondent names.

#### Message lists/Correspondent above subject
Show correspondent names above the subject line, rather than below it.

#### Message lists/Show contact names
Show correspondent names from Contacts when available.

#### Message lists/Colorize contacs
Here you can select the color to use for correspondent names from your Contacts. All other correspondents will be displayed in the default color.

#### Message lists/Show contact pictures
Disable this if you don't want to display contact pictures (or place holder images) in the message list.

#### Message lists/Colorize contact pictures
If this is checked the place holder images for correspondents with missing contact pictures or ones not in your Contacts will be displayed in different colors.
If this is disabled the images will be displayed with a grey background.

#### Message lists/Dim messages after reading
Disabling this will display read and unread messages using the same background color in the message list. Then bold text in the first line is the only indicator that a message hasn't been read yet.

#### Message lists/Threaded view
Threaded view is enabled by default and groups messages that belong to the same thread. Currently only messages in the same folder are grouped. Specifically, this will not include messages sent by you if those messages are not also stored in the current folder.

Please note that this is not the same as the conversation view you might know from e.g. Gmail. 

To add own messages in threaded view: change *Sent folder* to *INBOX* in *Folder* settings under *Account settings*. Note: own messages are no longer stored (and synced) in *Sent* folder.

#### Message lists/Show split-screen
This setting allows you to display the message list next to the message view. This is mainly useful for devices with a rather large screen, i.e. tablets.

Available settings:

* Always
* Never
* When in Landscape orientation


### Messages/Fixed-width fonts
When this is checked a fixed-width font will be used for plain text messages. The display of HTML messages is not influenced by this setting.

#### Messages/Visible message actions
Configure which message actions will be promoted to the first level of the menu in the message view.

**Note:** Checking an item doesn't mean that this action will be displayed in the action bar. There is only a limited number of actions that will be displayed in the action bar, the rest will move to the so called overflow menu that is accessible using the icon with the three dots.

#### Messages/Auto-fit message
Enable this to shrink messages to fit the screen width.


## Interaction/Start in Unified Inbox
When this setting is enabled K-9 Mail starts in the *Unified Inbox*.

**Note:** You shouldn't use this setting. Pressing the launcher icon when K-9 Mail has been started before will restore the app to its old state rather than starting it again. Put a "K-9 Accounts" shortcut on your home screen to always open the *Unified Inbox*.

### Interaction/Gestures
**Note:** This setting isn't currently used and will be removed soon.

### Interaction/Volume key navigation
Here you can specify whether you want to use the hardware volume keys to move up and down in the message list, or move to the previous and next message in the message view.

### Interaction/Return to list after delete
When this setting is enabled deleting a message in the message view will return to the message list rather than moving to the previous/next message.

### Interaction/Show next message after delete
Enabling this setting always moves to the next message after deleting a message from the message view. When it is disabled you move to the next or previous message depending on your previous travel direction.

### Interaction/Confirm actions
Here you can specify which actions should display a confirmation dialog.

You can enable confirmations for the following actions:

* Delete (in message view)
* Delete Starred (in message view)
* Delete (from notification)
* Spam


## Notifications

Only some options relating to notifications are shown here.
Most of the settings for notifications are under [Account Settings](Manual-AccountSettings), which means you can choose different notification styles for each account.
 
### Quiet Time
You can set a *Quiet Time* to prevent notification from disturbing your sleep.

### Quiet Time starts
Here you can specify the time when notifications will be disabled.

### Quiet Time ends
This time specifies the end of the *Quiet Time*, when notifications will be enabled again.

### Show 'Delete' button
K-9 Mail supports deleting messages directly from a notification (on Android 4.1 and newer).

The available settings are:

* Never (default)
* For single message notifications
* Always


## Network

### Background sync
This setting specifies when K-9 Mail is allowed to synchronize messages in the background.

Available settings are:

* When 'Auto-sync' is checked (in Android's settings)
* Always
* Never (this disables mail checking for all accounts regardless of the account settings)

## Miscellaneous

### Use Gallery bug work-around
An old Android version shipped with a faulty Gallery app that didn't show any selectable items. To work around this bug K-9 Mail adds the options "Add image" and "Add video" to the menu of the message composition screen when this setting is enabled.

**Note:** This setting should be automatically enabled when the faulty Gallery version is found on your device. Most users can ignore this setting and leave it unchecked.


### Save attachments to...
Here you can specify a directory where your attachments are saved to when the "Save" button of an attachment is clicked.
If a compatible file manager is installed (e.g. [OI File Manager](https://play.google.com/store/apps/details?id=org.openintents.filemanager)) you can simply select a directory. Otherwise you'll have to type in its name.


## Privacy

### Hide subject in notifications
This setting allows you to hide the subject of a message in notifications.

Available options:

* Never (default)
* When device is locked
* Always


**Note:** Currently, any value other than *Never* disables rich notifications (on Android versions that support them). This behavior will most likely change in the future to only disable the notification ticker that is visible from the lock screen.


## Debugging

### Enable debug logging
Here you enable the logging of extra diagnostic information – e.g. if you're working with a developer to troubleshoot a problem. See the page on [logging errors](LoggingErrors) for more information.

Remember to disable debug logging once it's no longer required.

### Log sensitive information
By default, sensitive information like passwords are not saved in the logs, but this option enables logging of sensitive information.


## Debugging

---
title: Add Account 
nav_hide: true 
layout: default
---

{% include accounts-header.html %}

{% include documentation-header.html %}

# Add an Account
The account set-up wizard will launch automatically after the [Welcome Screen](/documentation/setup.html). 

For any additional accounts they can be added by going to the accounts menu, 
and then tapping the 'Add account' option in the overflow menu.

First you are asked for your email address and password.

![Screen to enter email address and password](/assets/img/account_setup_step1_empty.png)

The buttons "Manual setup" and "Next" become only activated after a correctly formatted email address and a password have been typed in.

![Email address and password filled in](/assets/img/account_setup_step1_filled_in.png)

If you choose "Next" and the domain part of your email address is known to K-9 Mail, the connection settings for the incoming and outgoing server are automatically set up for you. This is the case for some large email providers, e.g. Gmail, Yahoo!, and AOL.

## Configuring the incoming server

If the domain is unknown to K-9 Mail or the "Manual setup" button is used, you have to manually enter your server settings. But first you are asked for the account type. Available options are POP3, IMAP, and WebDAV (supported by Exchange versions up to 2007).

![Account type selection](/assets/img/account_setup_step2_account_type_selection.png)

All of these are names of protocols to access your mailbox. If your email provider supports it, we strongly recommend you use IMAP. It is superior to the others and well supported by K-9 Mail.

The following chapters describe the steps necessary to set up an account using the given protocol.
Click one of the links below to directly jump to the corresponding chapter:

* [IMAP](#wiki-imap)
* [POP3](#wiki-pop3)
* [WebDAV](#wiki-webdav-exchange)


### IMAP

The following two images show all the IMAP related settings. Later we describe them in detail. Note that on a smartphone, your popped-up soft keyboard may be covering some of these entry fields; don't forget to scroll.

![Incoming server settings (part 1)](/assets/img/account_setup_step3_imap_incoming_server_1.png)
&nbsp;
![Incoming server settings (part 2)](/assets/img/account_setup_step3_imap_incoming_server_2.png)

**Username**: This is the username that's needed to authenticate to the IMAP server. The field is initialized with the user part of your email address. Some servers are okay with this; some, generally those which support multiple domains, require that you fill in your entire email address here. In this case, if you entered the entire email address on the previous screen, you will need to re-enter the hostname part here, as K-9 Mail doesn't know whether you need it and assumes you don't.

**Password**: Here you enter the password to access your emails. The password you entered at the first step of the account creation process is pre-entered here. So you shouldn't need to change it. This password is the one which an administrator set for you or gave to you, which you use to retrieve mail from the mailbox.

**IMAP server**: This is the hostname or IP address of your IMAP server. Note that this address must resolve to your mail server no matter what network you're connected to -- if you provide a name or IP that's only resolvable *inside your private network*, that's the only place you'll be able to pick up email. (If you don't understand the preceding, then you probably don't need to worry about it.) Some firewalls can also cause trouble here.

**Security**: This specifies the cryptographic protocol that should be used when connecting to your IMAP server. Available options are:

* None: This doesn't use any transport security at all.
* SSL/TLS (if available): SSL/TLS is used but the certificate isn't checked.
* **SSL/TLS (always)**: SSL/TLS is used and the certificate presented must be valid.
* STARTTLS (if available): The STARTTLS method is used if available; the certificate isn't checked. If STARTTLS is not available, no encryption is used at all and email will be moved in the clear.
* **STARTTLS (always)**: The STARTTLS method is used and the certificate is checked for validity.

*Note*: Avoid using the options *"None"*, *"SSL/TLS (if available)"*, and *"STARTTLS (if available)"* if you can. Check the chapter [Security](Manual-Security) for more information on this.

**Authentication**: This specifies which authentication method to use after you have a valid, hopefully encrypted, connection. Available options are:

* **PLAIN**: This is the default method. You shouldn't need to change this.
* **CRAM_MD5**: Use this if your server doesn't support transport security but supports the CRAM_MD5 authentication method.

**Port**: This is the port number the IMAP server is listening on. Most of the time you don't want to change this. It will generally be port 143 for non-encrypted connections or 993 for encrypted ones. If your port number is something else, the mail server administrator should have told you.

**IMAP path prefix**: The content of this field is prepended to IMAP folder names before use. The main usage is to manually select which IMAP namespace to use. As the entry field notes, this can be automatically guessed, so usually, you don't need to change this.

**Show only subscribed folders**: If this is enabled K-9 Mail will only display subscribed folders. If you don't know what that means leave it disabled.

**Use compression on network**: If your server supports compression (DEFLATE) it is used on the selected networks to minimize the amount of data transferred. Selecting this, even if your server doesn't support compression, doesn't cause problems. So there should be no need to change these.

After clicking "Next" K-9 Mail tries to connect to the server to verify the settings. This means you need to have a working network connection to continue the setup.

![Checking incoming server settings](/assets/img/account_setup_step3.5_imap_checking_incoming_server_settings.png)

Skip down now to [Configuring the outgoing server](#wiki-configuring-the-outgoing-server).


### POP3

POP3 mailbox setup is almost identical to IMAP, except that there is no path prefix, folder subscription, or compression available, and the port numbers are *110* for non-secure and *995* for secure connections. 


### WebDAV (Exchange)

K-9 Mail supports using the WebDAV protocol to connect to Exchange servers. However, WebDAV is no longer supported by Exchange 2010 and newer, so K-9 Mail is **not compatible** with those Exchange versions.

**Note**: WebDav support in K-9 Mail is not great and it's not under active development. That means if something doesn't work for you, you're mostly on your own.

**Username**: This is the user name that is required to authenticate to your Exchange server. It's usually of the form `domain\username`.

**Password**: Here you enter the password to access your emails.

**Exchange server**: This is the hostname or IP address of your Exchange server. Note that this address must resolve to your mail server no matter what network you're connected to -- if you provide a name or IP that's only resolvable *inside your private network*, that's the only place you'll be able to pick up email. (If you don't understand the preceding, then you probably don't need to worry about it.) Some firewalls can also cause trouble here.

**Security type**: Select your security type, hopefully *SSL (always)*.

**Port**: This is populated automatically. You shouldn't need to change this value.

**Mailbox alias**: Experience shows you should typically set this to your email address. Leaving it blank will use your username, which also works for some Exchange installations.

The following options are "advanced" options, and you should not need to change them from the defaults.

**OWA path**: Leave this field blank; defaults to `/Exchange`

**Authentication path**: Leave this field blank; defaults to
`/exchweb/bin/auth/owaauth.dll`


## Configuring the outgoing server

To be able to send mail K-9 Mail needs to know the settings to your provider's SMTP server. In this step of the account creation process you have to provide those details. Below is an explanation of the different settings. In certain circumstances, you may need to use a different outgoing server than you'd expect; we'll discuss those later.

Because of the nature of email service, you often (if not always, these days) send outgoing mail to one server, but pick up incoming mail from a separate one; this is why many of the items below say "this is often, but not always, the same as the setting for incoming mail".

![Outgoing server settings](/assets/img/account_setup_step4_smtp_outgoing_server.png)

**SMTP server**: This is the hostname or IP address of your SMTP server. As discussed above under **IMAP Server**, this name or IP must be accessible from any network from which you may want to send mail, whether your cellular carrier's WAN or a private LAN via wifi. See below for more details if you have trouble.

**Security type**: This specifies the cryptographic protocol that should be used when connecting to your SMTP server. Available options are:

* None: This doesn't use any transport security at all.
* SSL/TLS (if available): SSL/TLS is used but the certificate isn't checked.
* **SSL/TLS (always)**: SSL/TLS is used and it's checked if the certificate is valid.
* STARTTLS (if available): The STARTTLS method is used if available; the certificate isn't checked. If STARTTLS is not available, no encryption is used at all.
* **STARTTLS (always)**: The STARTTLS method is used and the certificate is checked for validity.

**Port**: The port number your provider's SMTP is listening on. This may be *465* or *587*, and in rare cases *25*, depending on the configuration and transport security settings of your server and K-9.

**Require sign-in**: Tells K-9 Mail whether or not it will be expected to authenticate to the server. In almost all cases this needs to remain checked.

**Authentication type**: This specifies which authentication method to use. Available options are:

* **AUTOMATIC**: This is the default method that will automatically detect which authentication methods are supported. You shouldn't need to change this.
* **LOGIN**: This uses the LOGIN authentication method.
* **PLAIN**: This uses the PLAIN authentication method.
* **CRAM_MD5**: Use this if your server doesn't support transport security but supports the CRAM_MD5 authentication method.

**Username**: The username that's needed to authenticate to the SMTP server. This is usually equal to either the left-hand side of, or the entire, email address; your mail server operator should have told you what to use as an Outgoing username -- and it will commonly be identical to the incoming username, though not always.

**Password**: The password that's needed to authenticate to the SMTP server. This is often, though not always, identical to the password for the incoming server.

To complete the outgoing server configuration click "Next". And again, K-9 Mail tries to connect to the server to verify the settings you just entered.

![Checking outgoing server settings](/assets/img/account_setup_step4.5_smtp_checking_outgoing_server_settings.png)


## Account options

After successfully setting up the incoming and outgoing servers, you can now configure some basic settings on how often K-9 Mail checks for new messages, if you want to be notified of new mail, etc. These settings are specific to each account/mailbox you configure; you can set them differently for different mailboxes.

![Account options](/assets/img/account_setup_step5_account_options.png)

**Folder poll frequency**: Here you specify in what interval K-9 Mail should check the incoming server to see if there are new messages. Available options are:

* Never
* Every minute
* Every 5 minutes
* Every 10 minutes
* Every 15 minutes
* Every 30 minutes
* Every hour
* Every 2 hours
* Every 3 hours
* Every 6 hours
* Every 12 hours
* Every 24 hours

**Enable push mail for this account**: This option is only available for IMAP accounts. When it is enabled a long-lived connection to the IMAP server is established so K-9 Mail can be notified by the server when a new message has arrived. When this is set, you do not need to select a poll frequency, because you do not poll.

This decreases delivery notification delay and thus for some it is worth choosing a mailbox based on the provider support for IMAP IDLE. Note that it may require multiple connections which might not be supported or undesired by the server administration.

For a run-down on battery usage and the difference between the two see the [FAQ](FrequentlyAskedQuestions#anchor14)

**Number of messages to display**: This value determines how many messages are kept locally cached and displayed. Available options are:

* 25 messages
* 50 messages
* 100 messages
* 250 messages
* 500 messages
* 1000 messages
* all messages

Higher values have some performance implications. Read the description of the setting *Local folder size* in chapter [Account settings](Manual-AccountSettings) for more information.

**Notify me when mail arrives**: If this is checked you are notified when a new message was downloaded in this mailbox. Notification type (LED, vibration) and ringtone can be configured later. See *Notifications* in chapter [Account settings](Manual-AccountSettings).

**Notify me while mail is being checked**: If this option is enabled K-9 Mail will inform the user when an account is being synchronized by displaying a message in the Android title bar.


## Last step

To complete the account creation you have to fill out the following two fields:

![Screen to enter account name and your display name](/assets/img/account_setup_step6_account_name.png)

**Give this account a name** (optional): This is the name of the account that will be displayed in the account list. If you leave this field empty the email address associated with this account will be used.

**Type your name**: This will be used as your name for messages sent using this account.

Once you've done this, click "Done", and the account will be completely set up.

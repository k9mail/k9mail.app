---
title: Common Provider Settings 
nav_hide: true 
layout: default
---

{% include accounts-header.html %}

{% include documentation-header.html %}

# Common Provider Settings 

This page provides common settings usable in K-9 for the major e-mail providers:

## AOL Mail

AOL Mail supports both IMAP and POP. K-9 can use either (IMAP is recommended)

### IMAP

        IMAP Username: YourUsername@aol.com (or @love.com, @games.com, etc.)
        Incoming Mail Server: imap.aol.com (Use port 143 for standard or 993 for SSL connections)
        SMTP Outgoing Server Address: smtp.aol.com Set the port to 587
        SMTP Username: YourUsername@aol.com (or @love.com, @games.com, etc.)
        SMTP Password: password you use to login to Mail 

> For a secure connection, check the SSL option for IMAP/POP and TLS for SMTP in your mail program.

### POP

        POP Username:YourUsername@aol.com (or @love.com, @games.com, etc.)
        Incoming Mail Server: pop.aol.com (Use port 110 for standard or 995 for SSL connections)
        Remember to check the option to Leave messages on the server 
        SMTP Outgoing Server Address: smtp.aol.com Set the port to 587
        SMTP Username: YourUsername@aol.com (or @love.com, @games.com, etc.)
        SMTP Password: password you use to login to Mail 

## Gmail (Google Mail)

Gmail supports IMAP. Note that Google also prefers a more secure authentication protocol called XOAuth 2.0 which is currently not supported by K-9.

To configure access to Gmail in K-9, just follow the steps below:

    Enable IMAP in your Gmail settings.
        If you have 2FA enabled for your Google account, visit https://myaccount.google.com/security#signin
        Click on "App Passwords" and generate a new password.
        This is the password you will use for IMAP in lieu of your Gmail password.
    Open K-9 and set up a new account.
    Enter your full Gmail address and password, then select Next.
    On the next screen, you can give the account a nickname and choose the name to display on your outgoing messages. 
    Tap Done.

## Hotmail / MSN / Outlook Live

Hotmail supports IMAP, POP3 and Exchange ActiveSync. Unfortunately, we do not yet support Exchange Active Sync in K-9. 

### IMAP

        Server address: imap-mail.outlook.com
        Port: 993
        Encrypted Connection: SSL
        User name: Your email address
        Password: Your password

### POP3

To use POP3 first enable it in your e-mail settings:

> * Sign in to your Outlook.com account.
> * Click the Options icon Options icon, and then click More mail settings or Options.
> * Under Managing your account, click Connect devices and apps with POP.
> * Under POP, select Enable.
> * Click Save.
    
        Server address: pop-mail.outlook.com
        Port: 995
        Encrypted Connection: SSL
        User name: Your email address
        Password: Your password

### SMTP

        Server address: smtp-mail.outlook.com
        Port: 25 (or 587 if 25 is blocked)
        Authentication: Yes
        Encrypted Connection: TLS
        User name: Your email address
        Password: Your password

## Web.DE

Web.DE supports both IMAP and POP3.

### IMAP

        Server: imap.web.de
        Port: 993
        Verschlüsselung: SSL-Verschlüsselung
>(Steht in einem Programm "SSL" nicht zur Verfügung, genügt es, die Option "Verschlüsselung" zu aktivieren.)

        Server: smtp.web.de
        Port: 587
        Verschlüsselung: STARTTLS
>(Steht in einem Programm "STARTTLS" nicht zur Verfügung, nutzen Sie bitte das Protokoll "TLS". Existiert auch hierfür keine Option, genügt es, die Option "Verschlüsselung" zu aktivieren.)

### POP3

> Steht für die englische Abkürzung "Post Office Protocol Version 3". Per POP3 werden E-Mails von einem Server in ein E-Mail-Programm übertragen und gleichzeitig vom jeweiligen Server gelöscht.

        Server: pop3.web.de
        Port: 995
        Verschlüsselung: SSL-Verschlüsselung
        
> (Steht in einem Programm "SSL" nicht zur Verfügung, genügt es, die Option "Verschlüsselung" zu aktivieren.)

        Server: smtp.web.de
        Port: 587
        Verschlüsselung: STARTTLS

> (Steht in einem Programm "STARTTLS" nicht zur Verfügung, nutzen Sie bitte das Protokoll "TLS". Existiert auch hierfür keine Option, genügt es, die Option "Verschlüsselung" zu aktivieren.)

## Yahoo

Yahoo supports IMAP only for fetching e-mail:

### IMAP

        IMAP Server: imap.mail.yahoo.com
        Port: 993
        Requires SSL: Yes
        Email address: Your full email address (name@domain.com)
        Password: Your account's password

### SMTP

        Server: smtp.mail.yahoo.com
        Port: 465 or 587
        Requires SSL: Yes
        Requires authentication: Yes
        Same password as incoming: Yes

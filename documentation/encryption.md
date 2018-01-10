---
title: OpenPGP End-to-End Encryption
nav_order: 0 
layout: default
nav_hide: true 
---

{% include documentation-header.html %}

# End-to-End Encryption

K-9 Mail supports encrypting mails using OpenPGP, and tries to be compliant with the [Autocrypt](autocrypt.org) specification.
Encryption relies on the external app [OpenKeychain](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain), which takes care of key management and cryptographic operations.

## Encrypting outgoing mail

While composing an e-mail, recipients that can receive encrypted mail will have a little lock next to their e-mail address.
If all recipients can receive encrypted e-mail, you can enable encryption by clicking the lock icon in the top right corner.

[screenshot of compose dialog with recipient dropdown]
[screenshot of compose dialog with green lock]

Recipients can receive encrypted e-mail if either:
- They are using an Autocrypt-compatible client, and you received an e-mail from them before
- You manually imported an end-to-end key for this recipient

## Encryption by Default

An encrypted e-mail is often more inconvenient to use for the recipient than plaintext.
For this reason, encryption usually has to be enabled manually.
However, encryption will be enabled by default if either:
- You are replying to an encrypted e-mail. This means an encrypted thread will try to stay encrypted.
- Both you and all recipients have enabled the setting to always encrypt by default.

[screenshot of setting]

## Decrypting incoming mail

Incoming e-mail that is encrypted to your end-to-end key will be automatically decrypted.
Typically, this is indicated by a green lock.
If some problem occured during decryption, the e-mail will still be displayed, but the lock will be grey with an X.

[screenshot of viewed mail, with encryption]
[screenshot of viewed mail, showing crypto info dialog]
[screenshot of viewed mail, with bad encryption]

## "Signed" E-Mail

In addition to encrypting mails from one end-to-end keys to another, it's also possible to only "sign" them with your own end-to-end key.
This is used by some people to cryptographically authenticate their e-mails.

Signing e-mails using end-to-end keys is an expert use case that is rarely useful for general communication.
For this reason, this is not encouraged in K-9, and support has to be enabled explicitly under Global Settings -> Cryptography.
Please see the related [blog post](https://k9mail.github.io/2016/11/24/OpenPGP-Considerations-Part-I.html) for a more detailed rationale.


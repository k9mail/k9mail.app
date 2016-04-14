---
title: PGP/MIME Encryption 
nav_hide: true 
layout: default
---

{% include security-header.html %}

{% include documentation-header.html %}

# PGP/MIME Encryption

In K-9 we aim to support OpenPGP, a specification of Pretty Good Privacy (PGP), an encryption method developed 
in the early 90s that uses a 'web of trust' to validate certificates.

In previous releases of K-9 Mail we have supported basic integration with 
[Android Privacy Guard (APG)](http://www.thialfihar.org/projects/apg/). 

However with development on the project stalled and with a desire to better support PGP/MIME in the app, 
newer releases move to support [OpenKeychain](https://www.openkeychain.org/) via a public API 
which we hope other apps which want to provide PGP key storage can support.

## Open Keychain & APG Usage

### Signing & Encrypting Mail

When an OpenPGP provider has been set-up in the [account settings](/documentation/settings/account.html) a new set of options are shown in the message compose window:

<img src="/assets/img/encryption_current_compose_dialog.png" alt="Encrypting email" width="300" />

Selecting Sign and Encrypt accordingly allows e-mails to be sent in a verified and secure way (respectively).

### Decrypting & Verifying Signed Mail

Decryption and verification of e-mail is done automatically and corresponding header is shown when viewing the e-mail:

<img src="/assets/img/encryption_current_decryption.png" alt="Viewing encrypted email" width="300" />

## Open Keychain Usage (Beta)

### Set-up

### Signing & Encrypting Mail

When composing e-mail with OpenKeychain setup and installed a new pad-lock icon 
appears in the top left of the composition screen. The icon represents the type of signing 
and encryption that will be applied to the message.

<img src="/assets/img/encryption_openkeychain_compose_dialog.png" alt="Compose Screen" width="300" />

Tapping the icon leads to dialog that allows you to change between one of four states:

* Never Sign or Encrypt
* Always Sign, Never Encrypt
* Always Sign, Encrypt if posssible.
* Always Sign, Always Encrypt

<img src="/assets/img/encryption_openkeychain_crypto_dialog.png" alt="Compose Crypto Dialog" width="300" />

### Decrypting & Verifying Signed Mail

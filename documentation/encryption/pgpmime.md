---
title: PGP/MIME Encryption 
nav_hide: true 
layout: default
---

{% include encryption-header.html %}

{% include documentation-header.html %}

# PGP/MIME Encryption

In K-9 we aim to support OpenPGP, a specification of Pretty Good Privacy (PGP), an encryption method developed 
in the early 90s that uses a 'web of trust' to validate certificates.

In the current release of K-9 Mail we support basic integration with 
<a href="http://www.thialfihar.org/projects/apg/">Android Privacy Guard (APG)</a>. 

However with development on the project stalled and with a desire to better support PGP/MIME in the app, 
the beta and future releases move to support <a href="https://www.openkeychain.org/">OpenKeychain</a> via a public API 
which we hope other apps which want to provide PGP key storage can support.

## APG Usage

### Signing & Encrypting Mail

### Decrypting Mail

### Verifying Signed Mail

## Open Keychain Usage (Beta)

### Set-up

### Signing & Encrypting Mail

When composing e-mail with OpenKeychain setup and installed a new pad-lock icon 
appears in the top left of the composition screen. The icon represents the type of signing 
and encryption that will be applied to the message.

<img src="/assets/img/encryption_openkeychain_compose_dialog.png" alt="Compose Screen" />

Tapping the icon leads to dialog that allows you to change between one of four states:

* Never Sign or Encrypt
* Always Sign, Never Encrypt
* Always Sign, Encrypt if posssible.
* Always Sign, Always Encrypt

<img src="/assets/img/encryption_openkeychain_crypto_dialog.png" alt="Compose Crypto Dialog" />

### Decrypting Mail

### Verifying Signed Mail

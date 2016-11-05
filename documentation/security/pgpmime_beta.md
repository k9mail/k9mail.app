---
title: PGP/MIME Encryption 
nav_hide: true 
layout: default
---

## Open Keychain Usage (Beta)

### Selecting a Key

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

When viewing encrypted mail K-9  will automatically use OpenKeychain to try to decrypt it with your key and check the signature.

For encrypted and trusted signed messages it will look like this.

<img src="/assets/img/pgpmime_encrypted_msg.png" alt="Compose Screen" width="300" />

Tapping on the green lock icon brings up this modal:

<img src="/assets/img/pgpmime_trusted.png" alt="Compose Screen" width="300" />

For trusted signed messages it will look like this. 

<img src="/assets/img/pgpmime_signed_msg.png" alt="Compose Screen" width="300" />

And tapping on the icon brings up this:

<img src="/assets/img/pgpmime_signed.png" alt="Compose Screen" width="300" />

Tapping on the 'View Signer' option will open the contact in OpenKeychain.

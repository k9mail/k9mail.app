---
title: PGP/MIME Encryption 
nav_hide: true 
layout: default
---

## Open Keychain Usage (Beta)

### Selecting OpenKeychain as a Crypto Provider

To start using PGP/MIME you first need to link OpenKeychain with K-9. To do this:

* Go to the account to link
* Select Settings -> Account Settings
* Select Cryptography

<div class="row">
<div class="span4">
You'll see the following options:

<img src="/assets/img/crypto_selection.png" alt="Cryptography Settings" width="300" />
</div>
<div class="span4">
Click on the OpenPGP app option

<img src="/assets/img/pgpmime_app_selection.png" alt="OpenPGP App Selection" width="300" />
</div>
<div class="span4">
Select OpenKeychain
</div>
</div>

## Selecting a Key

Now you'll need to select a key. Click the 'My Key' option.

You'll be sent a screen in the OpenKeychain app:

Select either a key you've already imported/created or create a new key:

<img src="/assets/img/openkeychain_key_selection.png" alt="Key Selection" width="300" />

See the [OpenKeychain](https://www.openkeychain.org/) website for more information on creating and managing keys.

### Signing & Encrypting Mail

When composing e-mail with OpenKeychain setup and installed a new pad-lock icon 
appears in the top left of the composition screen. The icon represents the type of signing 
and encryption that will be applied to the message.

Signing is the process of authenticating who wrote an email. Encrypting is the process of ensuring nobody but the intended recipient can read it. Signing and encryption both guarantee the email hasn't been tampered with.

<img src="/assets/img/encryption_openkeychain_compose_dialog.png" alt="Compose Screen" width="300" />

Tapping the icon leads to dialog that allows you to change between one of four states:

* Never Sign or Encrypt - This means no encryption or signing will be applied
* Always Sign, Never Encrypt - This means the email will be signed, but won't be encrypted.
* Always Sign, Encrypt if Possible - The means the email will be signed, but if it can't be encrypted it will be sent anyway.
* Always Sign, Always Encrypt - This means the email will only be sent if it can be both signed and encrypted.

<img src="/assets/img/encryption_openkeychain_crypto_dialog.png" alt="Compose Crypto Dialog" width="300" />

### Decrypting & Verifying Signed Mail

When viewing encrypted mail, once configured, K-9 will automatically use OpenKeychain to try to decrypt it with your key and check the signature.

For encrypted and trusted signed messages it will look like this.

<img src="/assets/img/pgpmime_encrypted_msg.png" alt="Signed and Encrypted Email Screen" width="300" />

Tapping on the green lock icon brings up this modal:

<img src="/assets/img/pgpmime_trusted.png" alt="Signed and Encrypted Email Details" width="300" />

For trusted signed messages it will look like this. 

<img src="/assets/img/pgpmime_signed_msg.png" alt="Signed Email Screen" width="300" />

And tapping on the icon brings up this:

<img src="/assets/img/pgpmime_signed.png" alt="Signed Email Screen" width="300" />

Tapping on the 'View Signer' option will open the contact in OpenKeychain.

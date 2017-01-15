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
newer releases (5.200 and later) move to support [OpenKeychain](https://www.openkeychain.org/) via a public API 
which we hope other apps which want to provide PGP key storage can support.

## Using a PGP-MIME app

* [Current Instructions](pgpmime_current.html)
* [Open Keychain How To Page](https://www.openkeychain.org/howto/)

## Historical Information

* [Pre 5.2x Instructions](pgpmime_historic.html)



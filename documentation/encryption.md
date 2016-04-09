---
title: Encryption 
nav_off: true
layout: default
---

{% include settings-header.html %}

{% include documentation-header.html %}


# Encryption

Communication security is an increasingly important subject. K-9 Mail aims to provide intuitive e-mail security in many forms, 
both in terms of <a href="accounts/authentication.html">supporting secure login to your e-mail server</a> 
and in the security of the e-mail itself.

To this end, K-9 Mail has had longstanding support for OpenPGP and future plans to support S/MIME.

## OpenPGP

OpenPGP is a specification based around Pretty Good Privacy (PGP), an encryption method developed 
in the early 90s that uses a 'web of trust' to validate certificates.

In the current release of K-9 Mail we support basic integration with 
<a href="http://www.thialfihar.org/projects/apg/">Android Privacy Guard (APG)</a>. 

However with development on the project stalled and with a desire to better support PGP/MIME in the app, 
the beta and future releases move to support <a href="https://www.openkeychain.org/">OpenKeychain</a> via a public API 
which we hope other apps which want to provide PGP key storage can support.

### Signing & Encrypting Mail

### Decrypting Mail

### Verifying Signed Mail

## S/MIME

S/MIME or Secure MIME, is a alternative method of securing e-mail. 
Instead of a web of trust model of verifying the identity of a recipient, 
S/MIME relies on the Trusted Certificate Authority model, similar to the security model for SSL.

K-9 Mail does not currently support S/MIME, however <a href="basedOnK9.html">forks of K-9</a> 
such as <a href="https://github.com/FAU-Inf2/SMile">SMile</a> have implemented it, so there is ongoing work to see 
S/MIME incorporated into the code base.

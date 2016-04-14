---
title: Security 
nav_hide: true 
layout: default
---

{% include security-header.html %}

{% include documentation-header.html %}

# Security

Communication security is an increasingly important subject. K-9 Mail aims to provide intuitive e-mail security in many forms, 
both in terms of supporting secure login to your e-mail server and in the security of the e-mail itself.

To this end,K-9 Mail supports a variety of mail server authentication methods and has had longstanding support for PGP/MIME (OpenPGP) and future plans to support S/MIME.

## Authentication

We currently support the following secure <a href=/documentation/account/authentication.html">authentication</a> methods

* Client-side SSL certificates
* CRAM-MD5 encryption (the most common form)

We support both the STARTTLS and running over SSL. We review our <a href="/documentation/security/ssl.html">SSL protocols and ciphers</a> in response to recent attacks.

## Encryption

* [OpenPGP / PGP/MIME](/documentation/security/pgpmime.html)
* [S/MIME](/documentation/security/smime.html)

---
title: SSL / TLS 
nav_hide: true 
layout: default
---

{% include security-header.html %}

{% include documentation-header.html %}

# SSL / TLS

Secure Sockets Layer (SSL) and it's successor, Transport Layer Security (TLS) is the core protocol that provides encryption between clients and servers over the internet.

In it's most common form it involves a client obtaining a certificate which contains a key that can be used to encrypt messages. This certificate is either already trusted by the client or is signed as being trusted by a certificate that the client trusts to issue certificates (or a 'grand parent' of the certificate).

Over the years the protocol has been refined and the ciphers that are considered secure has changed.

The versions still in some use are:

* TLSv1.2
* TLSv1.1
* TLSv1.0
* SSLv3

SSLv3 is the oldest of them and is considered insecure. Organisations like the <a href="https://tools.ietf.org/html/rfc7568">IETF</a>, <a href="http://csrc.nist.gov/groups/STM/cmvp/documents/fips140-2/FIPS1402IG.pdf">NIST</a> have deprecated / blocked SSLv3 since July 2015. Chrome for Android has disabled SSLv3 by default since v40 and removed it in v44.

As of v5.200 K-9 no longer supports SSLv3.

TLSv1.0, v1.1 and v1.2 are considered secure providing the correct ciphers are used and with various client and server mitigations. 
In terms of mitigations we use the SSL implementation provided on the device. 
Prior to Android 6.0 this is <a href="https://www.openssl.org.">OpenSSL</a>. 
In Android 6.0 and onwards it is Google's <a href="http://developer.android.com/about/versions/marshmallow/android-6.0-changes.html#boringSSL">BoringSSL</a>
 - a fork of OpenSSL that had has various changes to make it less vulnerable to attack.

In BoringSSL for example, there is a change made to protect against the "Logjam" attack, by increasing the minimum length of a parameter in some of the ciphers. This is a server side change. At present we don't allow the user to work-around this error.

For the list of protocols, we regularly update them to exclude weaker ones and ensure the most secure protocols are selected first.

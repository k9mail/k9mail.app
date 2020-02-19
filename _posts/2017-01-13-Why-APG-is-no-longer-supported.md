---
title: "Why APG is no longer supported"
date: "2017-01-13 12:00:00"
image: "assets/img/posts/apg-removed.png"
layout: post
author: valodim
draft: true
---

With the latest major release from December 2016, K-9 Mail dropped support for [APG](https://play.google.com/store/apps/details?id=org.thialfihar.android.apg) as an OpenPGP provider.
The drop-in replacement is [OpenKeychain](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain), which has been actively maintained by Dominik Schürmann and myself since it was originally forked from APG in 2012.

There are two reasons for this decision:

Firstly, development of APG ceased since its last release in March 2014.
Moving forward with PGP/MIME support required a number of changes to the crypto provider API, rendering APG incompatible with K-9 Mail in newer versions.

The second reason, however, is the more important one:
Three years is a very long time for security-relevant software, and no release during this time means no bugs were fixed.
Meanwhile, OpenKeychain had a security audit in 2015 that yielded a [number of issues](https://github.com/open-keychain/open-keychain/wiki/cure53-Security-Audit-2015).
All of these issues were fixed in OpenKeychain, but are still present in APG due to their shared development history.

For some more details, check out the entry in the OpenKeychain FAQ on the [relationship between APG and OpenKeychain](https://www.openkeychain.org/faq/#what-is-the-relationship-between-apg-and-openkeychain).
The FAQ also contains instructions on how to [migrate your keys](https://www.openkeychain.org/faq/#how-to-migrate-from-apg-to-openkeychain).

---
title: "Google Summer of Code 2017 Projects"
layout: post
author: valodim
---

After a couple years break, the K-9 Mail project participates in this year's
Google [Summer of Code](https://summerofcode.withgoogle.com) program. We are
taking two students, who will join us in our ongoing effort to make K-9 Mail a
modern, fully-featured, and easy to use e-mail client!

Our first student is [daquexian](https://github.com/daquexian). He will rewrite
our account setup flow, and first-time wizard. While all of our UI is in need
of an overhaul (and we're also working on that!), this part in particular is
missing improvements that were made by other clients over the years. Applying
the proper techniques, the setup process should ask no more than an e-mail
address and password. We really shouldn't be asking users for their SMTP server
hostname and port in 2017!

The second project is done by [rhari991](https://github.com/rhari991), who is
going to spend the time working on IMAP. While functional, our IMAP
implementation is currently missing support for an extension called CONDSTORE,
that greatly reduces network traffic used for message synchronization. He will
further work on moving messages between different accounts, improvements to
server-side search, and better handling for subfolders and namespaces.

We are looking forward to a great summer and successful projects!

 \- The K-9 Team

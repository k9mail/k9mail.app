---
title: "K-9 Mail is looking for funding"
date: "2021-02-14 08:00:00"
image: "/assets/img/posts/campaign.png"
layout: post
author: cketti
excerpt: K-9 Mail is looking to raise money to fund development.
---


<div style="display: flex;">

<div markdown="1">
K-9 Mail is looking to raise 1,000 EUR per week (~52,000 EUR per year) to fund development.

The app has a lot of users. If everyone who is able to do so donated a small amount we should be able to reach that 
goal in no time.
</div>

<div style="margin-left: 1em; margin-bottom: 1.5em;">
  <style type="text/css" scoped>
    a:hover span { 
      border: none;
    } 
  </style>

  <script src="https://liberapay.com/k9mail/widgets/receiving.js"></script>
</div>

</div>

### Why?

There is a lot of work that needs doing, both on the app and the project in general. Unfortunately, there are currently
not many people around to do it. In the last two years cketti (coincidentally also the author of this post 👋) 
contributed the largest chunk of work. But there were also a lot of 
[contributions](https://github.com/k9mail/k-9/graphs/contributors?from=2019-01-01&to=2021-02-14&type=c)
by other people ❤️

Only a few developers working on the project in their spare time wasn't enough to keep up with the pace of the Android
platform. The latest stable K-9 Mail version (5.600) was released in 2018 and barely works on modern Android versions. 
It's obvious that the project needs more developer time to be able to catch up.


### What will the money be used for?

Introducing money to an open source project can be difficult. Even if people agree that the money should be spent on
developers, the question of how it should be distributed can lead to conflicts. Since right now there's mainly one
person working on the app this is currently not an issue for the K-9 Mail project.

In 2020 I (cketti 👋) decided to work on open source full-time. I've spent most of that time on K-9 Mail. If you're 
interested in how that went, check out the blog post 
[My first year as a full-time open source developer](https://cketti.de/2021/01/14/my-first-year-as-a-full-time-open-source-developer/).

So the money will be used to enable me to continue working on K-9 Mail for about 80% of my time. In particular I intend 
to work on making K-9 Mail's core functionality more reliable and easier to use. The initial roadmap is as follows.

#### Roadmap

- **IMAP IDLE** – This is the last big item blocking the release of a new stable version.
- **Notifications** – Almost every major Android version in the past few years has changed something about how 
notifications work. We have some catching up to do in this area. There are also a few annoying bugs that need to be 
fixed.
- **Account setup** – Most of the time we should be able to automatically detect the email server settings 
given a user's email address. We should probably also add support for the non-standard authentication methods
of some of the large email providers.
- **Message composition** – A lot of things can be improved in this area. To name a few: recipient name/address input,
rich text editing, handling of draft messages, image attachment handling.
- **Folder management** – An often requested feature is properly displaying the folder hierarchy. But also creating,
renaming, and deleting folders is something we want to add.
- **Search** – Both local search and remote search can be improved a lot.
- **Integrate Autocrypt support** –  The creators of [OpenKeychain](https://www.openkeychain.org/) have offered to make 
parts of their source code available under the Apache 2.0 license (currently GPL 3.0) so we can integrate Autocrypt
functionality directly into K-9 Mail.
- **Message viewing** – There's a lot more we can do to optimize displaying emails on a small screen.
- **JMAP support** – [JMAP](https://jmap.io/) is a more modern version of IMAP and will hopefully slowly replace it in
the future.


### What happens if the funding goal isn't reached?

Nothing dramatic. I'll go back to working on K-9 Mail in my spare time.


### What if the funding goal is exceeded?

In that case the money will pile up in the account and we as a community have to figure out what to do with it. If it's
a significant amount maybe a second person can be paid to work on the project. At least in the foreseeable future 
there's no danger of running out of work.


### Okay, you've convinced me. How do I donate to the project?

We're using [Liberapay](https://liberapay.com/), a platform for recurring donations. The platform itself is free 
software and run by a team of volunteers ❤️

Recurring donations are the best way to ensure a relatively stable income. So we'd prefer that. But you can also
use Liberapay to make one-time donations by selecting "manual renewal".

<div style="margin-bottom: 2em">
<script src="https://liberapay.com/k9mail/widgets/button.js"></script>
<noscript><a href="https://liberapay.com/k9mail/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a></noscript>
</div>


### Can I help out in any other way?

The project could always use more help. If you're a developer check out [our source code on GitHub](https://github.com/k9mail/k-9).
If you want to help translating the app head over to [our Transifex page](https://www.transifex.com/k-9/k9mail/). To help
out other users who have questions visit our [support forum](https://forum.k9mail.app/).

Of course we always appreciate when someone spreads the word about K-9 Mail. Feel free to mention our 
[website](https://k9mail.app/), or our accounts on the [Fediverse](https://fosstodon.org/@k9mail) and 
[Twitter](https://twitter.com/k9mail_app).

Also, make sure to check out the latest [beta version of K-9 Mail](https://forum.k9mail.app/t/how-do-i-become-a-beta-tester/68). 

### Comments?

If you have questions or comments, please let us know in this [forum thread](https://forum.k9mail.app/t/k-9-mail-is-looking-for-funding/715).

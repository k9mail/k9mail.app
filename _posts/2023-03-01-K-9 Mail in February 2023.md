---
title: "K-9 Mail in February 2023"
date: "2023-03-02 12:00:00"
image: "/assets/img/posts/2023-02.png"
layout: post
author: cketti
excerpt: New team member, message view redesign, message list tweaks.
---

While K-9 Mail is developed in the open, following its development on GitHub can be somewhat tedious for a casual observer. So we're trying something new and summarize the most notable things that happened in the past month.

## New developer

As [already announced on Mastodon](https://mastodon.online/@thunderbird/109836089113911077), in February [Wolf Montwé](https://github.com/wmontwe) joined the team. He is working full-time on K-9 Mail development 🎉

## What we've been working on

### Message view redesign

In July 2022 [ByteHamster](https://github.com/ByteHamster) proposed a change to the message view header. cketti's decision to take a more holistic approach sent us on a months-long journey redesigning this screen in close cooperation with the Thunderbird design team. A first version finally shipped with [K-9 Mail v6.505 (beta)](https://github.com/thundernest/k-9/releases/tag/6.505) at the start of February. The UI has since been refined based on user feedback.

[![K-9 Mail 6.509 screenshot <](/assets/img/posts/2023-02-screenshot-message-view-thumbnail.png "Message list density setting")](/assets/img/posts/2023-02-screenshot-message-view.png)
[![K-9 Mail 6.509 screenshot](/assets/img/posts/2023-02-screenshot-message-details-thumbnail.png "Message list density setting")](/assets/img/posts/2023-02-screenshot-message-details.png)

The next stable release will most likely ship with what is included in the latest beta version. But during our design sessions we've looked at many other improvements, e.g. selecting which remote images to load (or not load), attachment handling, and more. So expect smaller updates to this screen in the future.

### Message list

We started making small changes to the message list screen. It's mostly about text alignment and whitespace. But we've also enlarged the click areas for the contact image and the star. That should make it much less likely that you accidentally open a message when you meant to select or star it.

We also added three different message list density settings: compact, default, relaxed.

[![K-9 Mail 6.509 screenshot <](/assets/img/posts/2023-02-screenshot-message-list-density-thumbnail.png "Message list density setting")](/assets/img/posts/2023-02-screenshot-message-list-density.png)
[![K-9 Mail 6.509 screenshot <](/assets/img/posts/2023-02-screenshot-message-list-compact-thumbnail.png "Message list density: compact")](/assets/img/posts/2023-02-screenshot-message-list-compact.png)
[![K-9 Mail 6.509 screenshot <](/assets/img/posts/2023-02-screenshot-message-list-default-thumbnail.png "Message list density: default")](/assets/img/posts/2023-02-screenshot-message-list-default.png)
[![K-9 Mail 6.509 screenshot](/assets/img/posts/2023-02-screenshot-message-list-relaxed-thumbnail.png "Message list density: relaxed")](/assets/img/posts/2023-02-screenshot-message-list-relaxed.png)

A first version of these changes can be found in [K-9 Mail v6.509 (beta)](https://github.com/thundernest/k-9/releases/tag/6.509). We're looking forward to getting your feedback on this.

### Bug fixes

Most of the bugs we fixed this month were related to newly added functionality. We also fixed a couple of (rare) crashes that we received via the Google Play Developer Console. Nothing too exciting.

## Releases

* [K-9 Mail v6.505 (beta)](https://github.com/thundernest/k-9/releases/tag/6.505) (2023-02-01)
* [K-9 Mail v6.506 (beta)](https://github.com/thundernest/k-9/releases/tag/6.506) (2023-02-03)
* [K-9 Mail v6.507 (beta)](https://github.com/thundernest/k-9/releases/tag/6.507) (2023-02-10)
* [K-9 Mail v6.508 (beta)](https://github.com/thundernest/k-9/releases/tag/6.508) (2023-02-15)
* [K-9 Mail v6.509 (beta)](https://github.com/thundernest/k-9/releases/tag/6.509) (2023-02-28)

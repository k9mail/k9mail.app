---
title: "September 2023 Progress Report"
date: "2023-10-27 12:00:00"
image: "/assets/img/posts/2023-09.png"
layout: post
author: cketti
excerpt: "Some account setup news and an app maintenance report."
---

Welcome back to your monthly K-9 Mail update! The [previous month](/2023/09/15/K-9-Mail-in-August-2023) ended with [Mozilla’s All-Hands event](https://blog.thunderbird.net/2023/09/thundercast-podcast-4-will-the-real-mozilla-please-stand-up/) in Montreal, Canada. While I used this opportunity for a three weeks long vacation in Canada (it was great, see picture below), Wolf went back to work on your favorite mobile email client as it transforms into Thunderbird for Android.
![Nature shot of a beautiful place in Canada](/assets/img/posts/2023-09-DSC05182a-scaled.jpg)


## Improved account setup

Wolf continued to work on the new and improved account setup code. This mostly involved fixing bugs and improving the internal architecture, so the code will be easier to maintain in the future.

With the switch to the new account setup code, we were able to remove (some of) the old setup code. If you’re software developer, you know that being able to delete a significant amount of old code is one of the best feelings on the job. If you’re not, just take my word for it.

Wolf also started work on using the new server settings screens when editing the incoming and outgoing server of an existing account. Once that work is complete we’ll be able to delete even more old code.

Unfortunately, none of this work resulted in new screens that we could show off in this progress report. But maybe the following stats can give an idea of how busy Wolf was.
![Graph showing Wolf's number of commits in September](/assets/img/posts/2023-09-github-stats-wolf.png)


## App maintenance

These are some of the more notable bugs we fixed in September.

### Vector image as app icon

Some users reported that the [splash screen](https://en.wikipedia.org/wiki/Splash_screen) newer Android versions automatically display, shows a blurry app icon. The reason was that we used a bitmap that looked fine when used as regular-sized icon, but that looked blurry when being scaled up, e.g. for the splash screen.

We fixed this by converting the icon into the vector image format supported by Android. To be able to do that we had to remove some details from the icon. But the result is a sharp app icon on the splash screen.

[![Old blurry splash screen](/assets/img/posts/2023-09-splash-screen-old-thumbnail.png)](/assets/img/posts/2023-09-splash-screen-old.png) [![New sharp splash screen](/assets/img/posts/2023-09-splash-screen-new-thumbnail.png)](/assets/img/posts/2023-09-splash-screen-new.png)


### Fixed OAuth 2.0 for Yahoo and AOL

In our new setup code we accidentally broke OAuth 2.0 support for Yahoo and AOL accounts. Apparently some people still use those email providers. So we fixed the bug.

### Cleaned up “Return to list after delete” setting

K-9 Mail allows the user to specify what is displayed next after a message has been deleted from the message view screen. Available options are:

- return to message list
- show next message
- show previous message

However, those are not the options a user could select in app settings. There were two preferences: Return to list after delete and Show next message after delete.

![Old "after delete" navigation settings](/assets/img/posts/2023-09-old-after-delete-navigation-settings.png)

During one of our design meetings we quickly decided this is not a great user experience and changed it to one setting with three options.

[![New "after delete" navigation setting](/assets/img/posts/2023-09-after-deleting-of-moving-a-message-setting-thumbnail.png)](/assets/img/posts/2023-09-after-deleting-of-moving-a-message-setting.png)

Since the same behavior is also used after moving a message, we also used this opportunity to change the name of the setting.


## Community contributions

In September we merged the following pull requests by external contributors:

- [Add content description for overflow menu icon in message header](https://github.com/thundernest/k-9/pull/7183)
- [Add content description for reply icon in message header](https://github.com/thundernest/k-9/pull/7184)
- [Add content description for the star icon in the message list](https://github.com/thundernest/k-9/pull/7185)
- [Use theme background color in message view and compose screens](https://github.com/thundernest/k-9/pull/7044)

Thank you. Your work is greatly appreciated ❤️


## Releases

We didn’t release any beta or stable versions in September. However, that’s an exception. Usually we publish a couple of beta releases a month. If you want to help shape future versions of the app, [become a beta tester](https://forum.k9mail.app/t/how-do-i-become-a-beta-tester/68) and provide feedback on new features while they are still in development.

---

This progress report was also published in the [Thunderbird blog](https://blog.thunderbird.net/2023/10/thunderbird-for-android-k-9-mail-september-2023-progress-report/).

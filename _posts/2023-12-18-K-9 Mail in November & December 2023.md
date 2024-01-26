---
title: "November/December 2023 Progress Report"
date: "2023-12-28 12:00:00"
image: "/assets/img/posts/2023-11.png"
layout: post
author: cketti
excerpt: "Trying to keep up with the Android platform."
---

In February 2023 we [started](/2023/03/02/K-9-Mail-in-February-2023) publishing monthly reports on the progress of transforming K-9 Mail into Thunderbird for Android. Somewhat to my surprise, we managed to keep this up throughout the entire year.

But since the end of the year company shutdown is coming up and both Wolf and I have some vacation days left, this will be the last progress report of the year, covering both November and December. If you need a refresher on where we left off previously, know that the [progress report for October is only one click away](/2023/11/29/K-9-Mail-in-October-2023).


## New Home On Google Play

If you’ve recently visited [K-9 Mail’s page on Google Play](https://play.google.com/store/apps/details?id=com.fsck.k9) you might have noticed that the developer name changed from “K-9 Dog Walkers” to “Mozilla Thunderbird”. That’s because we finally got around to moving the app to a developer account owned by Thunderbird.

I’d like to use this opportunity to thank [Jesse Vincent](https://metasocial.com/@jesse), who not only founded the K-9 Mail project, but also managed the Google Play developer account for all these years. Thank you ♥️


## Asking For Android permissions

Previously, the app asked the user to grant the permission to access contacts when the message list or compose screens were displayed.

[![Requesting contacts permission from the message list screen](/assets/img/posts/2023-11-message-list-contacts-permission-thumbnail.png)](/assets/img/posts/2023-11-message-list-contacts-permission.png) [![Requesting contacts permission from the message compose screen](/assets/img/posts/2023-11-message-compose-contacts-permission-thumbnail.png)](/assets/img/posts/2023-11-message-compose-contacts-permission.png)

The app asked for the contacts permission every time one of these screens was opened. That’s not as bad as it sounds. Android automatically ignores such a request after the user has selected the “deny” option twice. Unfortunately, dismissing the dialog e.g. by using the back button, doesn’t count as denying the permission request. So users who chose that option to get rid of the dialog were asked again and again. Clearly not a great experience.

So we changed it. Now, the app no longer asks for the contacts permission in those screens. Instead, asking the user to grant permissions is now part of the onboarding flow. After adding the first account, users will see the following screen:

[![New permissions screen](/assets/img/posts/2023-11-new-permissions-screen-thumbnail.png)](/assets/img/posts/2023-11-new-permissions-screen.png)

The keen observer will have noticed that the app is now also asking for the permission to create notifications. Since the introduction of notification categories in Android 8, users have always had the option to disable some or all notifications created by an app. But starting with Android 13, users now have to explicitly grant the permission to create notifications.

While the app will work without the notification permission, you should still grant it to the app, at least for now. Currently, some errors (e.g. when sending an email has failed) are only communicated via a notification. 

And don’t worry, granting the permission doesn’t mean you’ll be bombarded with notifications. You can still configure whether you want to get notifications for new messages on a per account basis.


## Improved Account Setup

This section has been a fixture in the last couple of progress reports. The new account setup code has been a lot of work. And we’re still not quite done yet. However, it already is in a state where it’s a vast improvement over what we had previously.

### Bug fixes

Thanks to feedback from beta testers, we identified and fixed a couple of bugs.

- The app was crashing when trying to display an error message after the user had entered an invalid or unsupported email address.
- While fixing the bug above, we also noticed that some placeholder code to validate email addresses was still used. We replaced that code and improved error messages, e.g. when encountering a syntactically valid, but deliberately unsupported email address like `test@[127.0.0.1]`.
- A user reported a crash when trying to set up an account with a particular email domain. We tracked this down to an MX DNS record containing an underscore. That’s not a valid character for a hostname. The app already checked for that, but the error wasn’t caught and so crashed the app.

### User experience improvements

Thanks to feedback from people who went through the manual setup flow multiple times, we identified a couple of usability issues. We made some changes like disabling auto-correct in the server name text field and copying the password entered in the incoming server settings screen to the outgoing server settings screen.

Hopefully, automatic account setup will just work for you. But if you have to use the manual setup route, at least now it should be a tiny bit less annoying.

### Edit server settings

Editing incoming or outgoing server settings is not strictly part of setting up an account. However, the same screens used in the manual account setup flow are also used when editing server settings of an existing account (e.g. by going to *Settings → [Account] → Fetching mail → Incoming server*).

[![Edit server settings screen, top part](/assets/img/posts/2023-11-incoming-server-settings-1-thumbnail.png)](/assets/img/posts/2023-11-incoming-server-settings-1.png) [![Edit server settings screen, bottom part](/assets/img/posts/2023-11-incoming-server-settings-2-thumbnail.png)](/assets/img/posts/2023-11-incoming-server-settings-2.png)

The screens don’t behave exactly the same in both instances, so some changes were necessary. In November we finally got around to adapting the screens. And now the new UI is also used when editing server settings.


## Targeting Android 13

Every year Google [requires](https://developer.android.com/google/play/requirements/target-sdk) Android developers to change their apps to support the new (security) features and restrictions of the Android version that was released the prior year. This is automatically enforced by only allowing developers to publish app updates on Google Play when they “target” the required Android version. This year’s deadline was August 31.

There was only one change in Android 13 that affected K-9 Mail. Once an app targets this Android version, it has to ask the user for permission before being able to create notifications. Since our plans already included adding a new screen to ask for permissions during onboarding, we didn’t spend too much time worrying about the deadline.

But due to us being busy working on other features, we only got around to adding the permission screen in November. We requested an extension to the deadline, which (to my surprise) seems to have been granted automatically. Still, there was a brief period of time where we weren’t able to publish new beta versions because we missed the extended deadline by a couple of days.

We’ll prioritize updating the app to target the latest Android version in the future.


## Push Not Working On Android 14

When Push is enabled, K-9 Mail uses what the developer documentation calls “exact alarms” to periodically refresh its Push connection to the server. Starting with Android 12, apps need to request a separate permission to use exact alarms. But the permission itself was granted automatically.

In Android 14 (released in October 2023) Google changed the behavior and Android [no longer pre-grants this permission to newly installed apps](https://developer.android.com/about/versions/14/changes/schedule-exact-alarms). However, instead of limiting this to apps targeting Android 14, for some reason they decided to extend this behavior change to apps targeting Android 13.

This unfortunate choice by the creator of Android means that Push is currently not working for users who perform a fresh install of K-9 Mail 6.712 or newer on Android 14. Upgrading from a previous version of K-9 Mail should be fine since the permission was then granted automatically in the past.

At the beginning of next year we’ll be working on adding a screen to guide the user to grant the necessary permission when enabling Push on Android 14. Until then, you can manually grant the permission by opening Android’s *App info* screen for the app, then enable *Allow setting alarms and reminders* under *Alarms & reminders*.


## Community Contributions

In November and December the following contributions by community members were merged into K-9 Mail:

- [@bernhard-fp](https://github.com/bernhard-fp) contributed a patch to [disable autocorrect in server settings input fields](https://github.com/thunderbird/thunderbird-android/pull/7372).
- Another contribution by [@bernhard-fp](https://github.com/bernhard-fp) was to adjust our theme so [rounded corners of buttons in the new setup screens match the ones in the rest of the app](https://github.com/thunderbird/thunderbird-android/pull/7389).
- When composing a message it’s currently not possible to move a recipient from one field to another using drag and drop. [Reza Zarchi](https://github.com/rezazarchi) [added a copy button to the recipient dropdown](https://github.com/thunderbird/thunderbird-android/pull/7407) so users can work around this limitation.

Thanks for the contributions! ❤️


## Releases

- [K-9 Mail v6.712 (beta)](https://github.com/thunderbird/thunderbird-android/releases/tag/6.712) (2023-11-30)
- [K-9 Mail v6.713 (beta)](https://github.com/thunderbird/thunderbird-android/releases/tag/6.713) (2023-12-04)

If you want to help shape future versions of the app, become a beta tester and provide feedback on new features while they are still in development.

---

This progress report was also published in the [Thunderbird blog](https://blog.thunderbird.net/2023/12/thunderbird-for-android-k-9-mail-november-december-2023-progress-report/).

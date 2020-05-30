---
title: "What's up with K-9 Mail?"
date: "2020-06-01 12:00:00"
image: "/assets/img/posts/whats-up-with-k9mail.png"
layout: post
author: cketti
---

The release of the latest stable version of K-9 Mail (5.600) was in September 2018, nearly two years ago. So, of course, many of you have been wondering if K-9 Mail is dead. I'm happy to inform you that this is not the case. Work on K-9 Mail was slow at times, but it has never really stopped.

![K-9 Mail development activity](/assets/img/posts/k9mail_activity_graph_2020.png "K-9 Mail development activity")

So why did we not update the app? It's a combination of things. A major factor was the [API level requirement](https://support.google.com/googleplay/android-developer/answer/113469#targetsdk) by Google Play. It required us to make changes to internals of the app in order to be able to publish updates via the Play Store. At the same time we started the long anticipated modernization of the user interface. All of this was and still is a lot of work, done by only [a few people](/team).

### Beta versions

At the end of 2019 we published the beta version K-9 Mail 5.700. By then the user interface was in a state where most of the functionality was accessible again. Since then we've released 15 more beta versions. And by now the app is again in a state where it is ready for daily usage.  

![K-9 Mail 5.715 screenshot <](/assets/img/posts/k9mail_screenshot_drawer.png "K-9 Mail 5.715 screenshot") ![K-9 Mail 5.715 screenshot](/assets/img/posts/k9mail_screenshot_messages.png "K-9 Mail 5.715 screenshot")

Some features that were available in 5.600 are still missing because we haven't had the time to restore them. Some have been deliberately removed because we didn't consider them important enough to justify the maintenance burden.  
We would like to release a new stable version as soon as possible. There's only one feature that we had to remove, but without which we don't want to ship a new stable version of the app: Push (IMAP IDLE). After it has been added again, we'll spend some time focusing on fixing bugs reported by beta testers, and then we'll release the next stable version of K-9 Mail, 5.800.

### What else is new?

Two years is a long time. What else is new, you ask? Quite a few things…

#### Website

If you have been to our website before, you have probably noticed that it looks much nicer now. That's thanks to [Anxhelo Lushka](https://github.com/AnXh3L0), who redesigned the website. With [k9mail.app](https://k9mail.app/) we now also have a very fancy domain name.

#### Support forum

Under [forum.k9mail.app](https://forum.k9mail.app/) we have set up a support forum where K-9 Mail users can help each other out. You can also use it for discussions on everything that is related to K-9 Mail.

#### Social media

We now have a presence on the [fediverse](https://en.wikipedia.org/wiki/Fediverse) at [@k9mail@fosstodon.org](https://fosstodon.org/@k9mail). We're also on Twitter as [@k9mail_app](https://twitter.com/k9mail_app). We haven't made much use of these accounts yet. But the plan is to at least announce all blog posts and new app releases there.


### Do you want to help? Here's what you can do

* Become a beta tester and help us find and fix bugs before they make it into a stable version.
* Help to create and improve existing documentation. Both for users and new developers who want to contribute to the project.
* More developers are always welcome. At this particular point in time we're not looking to add new features. But help with fixing bugs would certainly shorten the time to a new stable release.
* If you have the means, consider making a [donation via Liberapay](https://liberapay.com/k9mail). In March 2020 I ([cketti](https://github.com/cketti), K-9 Mail lead developer) decided to give working on K-9 Mail full time a try. This is mostly financed by personal savings, but donations help to prolong the time I'm able to keep this up. If you want to, you can also sponsor me via [GitHub sponsors](https://github.com/sponsors/cketti) (they are currently matching donations).

### Thank you ❤️

I would like to use this opportunity to say "thank you" to all the people who regularly contribute to K-9 Mail: the developers, the translators, and the users who help other users with support questions, or continually spread the word about K-9 Mail.  
But over the years there have also been a lot of people who reported a bug, suggested a feature, improved a translation, or developers who only fixed that one bug that has annoyed them for years. That work has accumulated and is a big part of what makes up K-9 Mail these days. Thank you all!  
Finally, thank you to everyone who contributed financially.


### Comments?

If you have questions or comments, please let us know in this [forum thread](https://forum.k9mail.app/t/whats-up-with-k-9-mail/66).

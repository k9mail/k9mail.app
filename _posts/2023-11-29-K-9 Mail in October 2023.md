---
title: "October 2023 Progress Report"
date: "2023-11-29 12:00:00"
image: "/assets/img/posts/2023-10.png"
layout: post
author: cketti
excerpt: "We moved some things around."
---

Welcome to the progress report for October! If you missed the one for September, you’re in luck, because we always try to include a link to the [progress report of the previous month](/2023/10/27/K-9-Mail-in-September-2023) in the introduction.


## Translations

All the translations of the app are provided by volunteers from the community. This work is mostly independent from software development and design work. So sometimes it’s easy for us to forget that a lot more people regularly spend time working on the app.

Dear translators, thank you for all the work you’re putting into making the app more accessible by translating it to so many languages ❤️

### Move to Weblate

In October we switched to Weblate to manage translations of the app. This has a couple of reasons:

- Some of the volunteers providing translations have expressed a strong preference for Weblate. It’s also not uncommon for volunteers to also translate other open source apps. Weblate has become a popular option for that.
- Weblate has good tools to allow us to better integrate it into our development process.
- Unlike the previous translation service we used, Weblate itself is open source software. And you all know we love open source.

### Call for translators

Currently K-9 Mail ships with support for the following 49 languages:

Albanian, Arabic, Basque, Belarusian, Breton, Bulgarian, Catalan, Chinese (Simplified), Chinese (Traditional), Croatian, Czech, Danish, Dutch, English, English (GB), Esperanto, Estonian, Finnish, French, Frisian, Gaelic, Galician, German, Greek, Hebrew, Hungarian, Icelandic, Indonesian, Italian, Japanese, Korean, Latvian, Lithuanian, Malayalam, Norwegian Bokmål, Persian, Polish, Portuguese (Brazil), Portuguese (Portugal), Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swedish, Turkish, Ukrainian, Welsh.

There’s an additional 7 languages where partial translations exist, but are currently not included in the app:

Armenian (36% translated), Azerbaijani (6%), Georgian (51%), Hindi (23%), Norwegian Nynorsk (43%), Tamil (16%), Vietnamese (63%).

However, some of the included translations haven’t been updated in a while. And so in addition to the 7 languages above, there’s quite a few languages that could use the help of new translators. Here’s the list of languages where less than 97% of strings have been translated:

Arabic (88%), Belarusian (89%), Breton (74%), Bulgarian (87%), Croatian (75%), Danish (92%), English (GB) (1%), Esperanto (82%), Gaelic (73%), Galician (82%), Greek (89%), Hebrew (49%), Indonesian (79%), Korean (69%), Latvian (89%), Lithuanian (87%), Malayalam (81%), Norwegian Bokmål (93%), Persian (89%), Portuguese (Portugal) (88%), Russian (88%), Serbian (79%), Slovak (71%), Slovenian (90%), Ukrainian (89%), Welsh (86%).

If you want to help out with translations for any of these, please head over to [our Weblate project](https://hosted.weblate.org/projects/tb-android/).


## GitHub organization renamed

On October 31 our GitHub organization was renamed from *thundernest* to [*thunderbird*](https://github.com/thunderbird/). We also used this opportunity to rename the repository from *k-9* to [*thunderbird-android*](https://github.com/thunderbird/thunderbird-android).

Old links should redirect to the new location. But if you’re maintaining a website that links to our GitHub organization or repository, please update those links.


## Improved account setup

The new account setup is still our main focus. In October most of our work went on behind the scenes. The only user-visible changes were fixing a crash when entering an unsupported email address and respecting the app theme and app language settings in the account setup UI.

We also worked on replacing the screens to edit incoming and outgoing server settings. However, that work is still ongoing and not available in beta releases yet.


## Architecture decision records

We’re trying to get better at documenting decisions we made about the architecture of the app. Wolf started us off by creating the following architecture decision records (ADR):

- [0001 – Switch from Java to Kotlin](https://github.com/thunderbird/thunderbird-android/blob/main/docs/architecture/adr/0001-switch-from-java-to-kotlin.md)
- [0002 – UI – Wrap Material Components in Atomic Design System](https://github.com/thunderbird/thunderbird-android/blob/main/docs/architecture/adr/0002-ui-wrap-material-components-in-atomic-design-system.md)
- [0003 – Switch Test Assertions from Truth to assertk](https://github.com/thunderbird/thunderbird-android/blob/main/docs/architecture/adr/0003-switch-test-assertions-from-truth-to-assertk.md)


## “Make Better Email” meeting

At the end of October cketti attended [Make Better Email](https://makebetter.email/), a meeting to bring together email client authors, email server authors, and email service providers to talk about how to improve the ecosystem through the better use of open standards.

Some of the topics we talked about:

- Modern Authentication – What mechanism do we need to be able to support interoperable modern authentication for clients of open protocols, such as IMAP, JMAP, SMTP, CalDAV, and CardDAV.
- Scheduled Send – How can this feature be implemented in an interoperable way.
- IMAP Extensions – We came up with a recommendation for which existing standards should be targeted by living IMAP code.

In the upcoming months this should result in new RFC drafts and a best current practice (BCP) document at the IETF.


## Community contributions

- [fishchimp](https://github.com/fishchimp) made a change that hopefully makes it harder to accidentally trigger swipe actions in the message list (see [#7280](https://github.com/thunderbird/thunderbird-android/pull/7280)).
- [Marcel M.](https://github.com/marcelmu) fixed a bug that lead to notifications always being silent on Android Wear devices (see [#7284](https://github.com/thunderbird/thunderbird-android/pull/7284)).

Many thanks to both of you! ❤️


---

This progress report was also published in the [Thunderbird blog](https://blog.thunderbird.net/2023/11/thunderbird-for-android-k-9-mail-october-2023-progress-report/).

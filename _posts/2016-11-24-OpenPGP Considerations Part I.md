---
title: "OpenPGP Considerations, Part I: Signed-Only Mails"
excerpt: "Background on the decisions taken in our stab at OpenPGP."
layout: post
author: valodim
---

I have been working [for some time now](https://www.openkeychain.org/k-9) on the OpenPGP support in K-9 Mail.
During this time, I have not only worked on the implementation to get receiving and sending of encrypted emails into a working state.
I also spent a lot of time thinking about use cases, user experience, and usability of OpenPGP as a protocol and as an ecosystem.
I was lucky to meet people who would share their point of view on this subject, including fellow developers, activists, and both hardcore and casual users.
Unfortunately, these groups of people often have conflicting views, and there is no consensus about the direction OpenPGP is going.

The OpenPGP implementation in K-9 Mail is opinionated, and some of the ideas and decisions are different from other implementations.
Some decisions are not obvious to long-time users of OpenPGP implementations, or outright clash with their expectations.
I spent considerable time arguing these decisions on our issue tracker, on our irc channel, and in person.
This is a good thing - if I can't argue my decisions, they probably aren't reasonable.
But I feel like I should make a better effort to keep everyone on the same page, which is why I'm going to write a series of blog posts about the thought processes and considerations that led to the design decisions made in K-9 Mail.

I'll start in this post with one of the later changes I made:

## Signed-Only Mails Considered Harmful

(I apologize for the section title, but it's true!)

In a relatively recent pull request, I decided to demote signed-only mails from an encouraged workflow to a supported workflow.
What this means is that everything related to signed-only mails has been moved into an opt-in feature.
Without enabling this feature, the user will neither see the status of signed-only mails, nor will they find an option to send them.

Secure communication requires both authentication and confidentiality.
It's possible to get one without the other: You can send signed-only mails, giving you only authentication, and you can send encrypted-but-not-signed mails, giving you only confidentiality.
I firmly believe that both of those are *misfeatures*, which stand in the way of getting the *thing to be done* into a usable state.
The *thing to be done* with OpenPGP for email is *secure communication*.
For today, I will stick to the former part, signed-only mails.

### Signed-Only Mails are Useless

No, really.
Signed-Only mails, for general communication, are useless.
Consider a scenario where you know a user who usually signs their emails, and you receive an email from them with content that is reasonable in context.
Now, what happens if that email is not signed?
Or if the signature doesn't check out?
Be honest now: Would this trigger an actual reaction for you, in day-to-day emailing?
Has it, in the past?

The answer for me is, if someone sends an email that is not signed but makes sense in context, I will not question the content.
Even with a broken signature, *especially* on mailing lists, the assumption is going to be that the mail just broke on the way.
If someone wants to send a secure e-mail to me, they will encrypt it.

There are [times](https://riseup.net/en/canary) and [places](https://lists.debian.org/debian-ctte/2014/02/msg00281.html) for signed text, and it's nice that OpenPGP supports this.
But in day-to-day communication, where you just want to *communicate*, it serves no purpose.

### Signed-Only Mails are Not Free

So, what's the issue?
Signatures may not be very useful, but some people really like sending people `signature.asc` attachments!
Where's the harm in that?

The harm is that signed-only mails are not only not free, they come in fact at a very high cost.
That cost is *complexity*.
It is complexity in the implementation, complexity in the user interface, complexity in the ecosystem.

Complexity in the implementation is fine.
Couple hundred, maybe a thousand lines of code, for handling detached signatures and displaying state of signed emails.
Been there, done that.

Complexity in the user interface is *bad*.
For most users, the bearable complexity for a "How secure am I?" indicator is two states: "You are safe", and "You are not safe".
We're already in trouble with handling expired or revoked keys, and insecure algorithms, but those aren't thing we can get rid of easily.
An indicator state for authenticated but non-confidential communication introduces a whole set of states of "I have no idea what is going on" to everyone but the most technical of users.
Right into the place where we really want to inform the user about *important stuff*, in a way that is *as clear and concise* as possible.

Complexity in the ecosystem is *the worst*.
It's fine that OpenPGP as a message format can do a lot of things that most users don't understand or care about.
But what we are building here, on top of this protocol, should be secure communication.
Signatures are a thing that few people understand, that even less people really want to use, yet that many feel pressured into using uncomfortably or use as a point of pride because it feels kinda exclusive, but that is in the end so unreliable that its benefit is nothing short of questionable.

There is a name for this, plain and simple: it's bloat.
It's bloat we've been dragging along in the OpenPGP user experience for far too long.
It's time we got rid of it.

 \- V

---
title: "OpenPGP Considerations, Part II: Encrypted-Only Mails"
layout: post
author: valodim
---

This blog post is the second in my series on design decisions made in the OpenPGP support in K-9 Mail.
Following my first post [on signed-only mails](https://k9mail.github.io/2016/11/24/OpenPGP-Considerations-Part-I.html), this one focuses on encrypted-only mails.

In contrast to signed-only mails, which are still a supported workflow, we believe that the sending of encrypted-only mails reduces the security of the ecosystem as a whole, which is why we decided to drop support for it altogether.
This decision led to a number of reports from disgruntled users who had sent encrypted-only mails from earlier versions of K-9.
We realize it sucks to have your workflow broken, so I will try to explain why we made this decision, and why we are not going to revert it.

The idea of encrypted-only mails is to send messages that are encrypted to the recipient's public key, but not signed with the sender's secret key.
This provides weaker security properties than properly signed-then-encrypted mails, but it loses the requirement of having the signing key available on the sender side, which makes for a deceptively convenient and attractive workflow.
Given more profound cryptographic thought however, it becomes clear that such messages introduce a cost to the ecosystem that greatly outweigh the benefits.

### Use cases

There are two common arguments for encrypted-only mail:

#### No signing key on mobile

A commonly proposed use case for encrypted-only mail are users who don't want to put their signing keys on their phone due to security concerns, but still want to send encrypted mail.
This is a technical possibility after all, and some encryption - even without authentication - is surely better than no encryption.

Unfortunately, it's not quite so easy.

To see why, let's explore what it says about a message's security if the sender doesn't trust the sending device with their signing key:
The sender themself knows that the message can only be read by the intended recipient, so from their perspective all seems well.
But from the recipient's perspective, it's impossible to tell what is going on.
If we regularly receive messages without signature, the user has no way to figure out whether a message was tampered with by an attacker, or sent without a signature because the sender just happened to not have their signing key available.
So what is the mail client supposed to display to the user in this case?
The answer is that we must treat missing signatures as insecure, since otherwise an attacker can simply strip signatures from all messages.
And when they forge a message it will look just like many other messages the recipient saw in the past, encrypted but not signed.

Just like other insecure messages (sent from expired keys, revoked keys, insecure keys, or using insecure algorithms), an encrypted-only message is displayed in K-9 with a full-screen warning.
Users are warned of the security issue at hand, and have to do an extra click to read message content.
In this way, the message now looks more dangerous than a plaintext one.

But this warning dialog leads us straight to the issue of [warning fatigue](http://people.ischool.berkeley.edu/~jensg/research/paper/Grossklags-NSPW11.pdf).
The short version is, users pay very limited attention to any kind of warning message, and every time such a message is displayed to the user, it loses some of its impact.
After only a few times of clicking through a warning message to see the message content, the extra click becomes part of the routine.

But for any kind of authentication to work, it is imperative that authentication failures happen as rarely as possible.
The crux of sending encrypted-only mails is that on the receiving side, genuine mails end up in a state that responsible user agents must treat as an error, eroding its ability to warn the user about cryptographic problems.
Even worse, these warnings aren't *actionable* - there is nothing a user can do to fix the situation, the only possible option is to move on and read the message.
In short, sending encrypted-only mails establishes receiving insecure mail as a common and harmless occurrence for recipients.

You can generate a key to use per device - keys are free, after all!
But if you don't trust a device with any signing key, you can't send secure mails from it.

#### "Plausible deniability"

The second common argument comes from people who consider encrypted-only mails as "anonymous" mails in a sense, similar to not signing letters.

This idea of "deniability" comes from protocols like OTR and Signal, which go to great lengths to provide this property.
Unfortunately, these tricks can't simply be ported: They only work for session-based, synchronous communication.
But what these protocols provide is *deniable authentication*, which is different from *no authentication*.
No protocol for secure communication I'm aware of allows turning off authentication, in fact there is a clear trend in the cryptographic community towards the more integrated [authenticated encryption](https://en.wikipedia.org/wiki/Authenticated_encryption).

Because e-mail as a protocol leaks a lot of metadata, any mail sent without extra measures to obfuscate this metadata is not going to be deniable, regardless of the encryption state of its content.
There are projects that seek to reduce metadata leakage for general use of e-mail (like [OnionMX](https://github.com/ehloonion/onionmx) or [Panoramix](https://panoramix-project.eu/)), but those are hardly deployed.

And yet, sending anonymous mail is simple:
Grab a [Tor Browser](https://www.torproject.org/projects/torbrowser.html.en), sign up for any free mail address, generate a key for this purpose only, send encrypted mail as usual.
That way no one will know your name or identity, you can send more messages (from different addresses even), and the recipient will know they come from the same entity.
You will also be able to prove it was you who sent the mail later on, which - provided you keep that secret key in a safe place and out of the cloud - nobody else can.

That said, Android is not a high-security environment!
For actually important matters it is advisable to stick to a platform that was actually built for whistleblowing, like [Globaleaks](https://www.globaleaks.org/implementations/).
But even there, you will receive a key code that serves to authenticate yourself, to safely communicate later on.

It is misguided to believe that not signing encrypted mails will provide any kind of deniability, and it is incorrect to assume that anonymity and authentication are incompatible properties.

### So why do other implementations allow it?

The UI in many OpenPGP implementations for secure communication via mail has a "sign" and an "encrypt" button.
This was the case in K-9 Mail as well, until version 5.200.
A very common stance of OpenPGP implementations is to just give users the cryptographic operations, then let them make security considerations themselves, given more or less complete information about the system.
But OpenPGP itself is a very general purpose cryptosystem, that can be used for all sorts of tasks besides communication, like package-signing or encryption of backups.
The simple design of two checkboxes is the straightforward way of applying the OpenPGP message format to e-mail.
But that doesn't mean it's a good idea to do so.

### Conclusion

For the reasons outlined above, we dropped support for encrypted-only mails.
We urge other mail clients to do the same.

---
title: Development 
layout: doc
---

# RFCs

RFCs or 'Request for Comment' documents are the way in which internet standards develop. 

K-9 aims to follow internet standards wherever practical. Our support for existing and proposed internet standards is continually evolving.

In this section we cover the areas of internet standardisation that are relevant and how it affects K-9's behaviour.

### Email addresses

* [RFC 3696 - Application Techniques for Checking and Transformation of Names](rfcs/rfc3696)
* RFC 5321 - Internet Message Format (and errata)

We obviously must support valid e-mail address formats.

### Internationalisation

RFC 1468 - Japanese Character Encoding for Internet Messages

We aim to support a global audience.

### MIME

* RFC 822 - STANDARD FOR THE FORMAT OF ARPA INTERNET TEXT MESSAGES
* RFC 2045 - Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies
* RFC 2046 - Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types (obsoletes 1521, 1522, 1590)
* RFC 2047 - MIME (Multipurpose Internet Mail Extensions) Part Three: Message Header Extensions for Non-ASCII Text (obsoletes 1521, 1522, 1590)
* RFC 2048 - Multipurpose Internet Mail Extensions (MIME) Part Four: Registration Procedures
* RFC 2049 - Multipurpose Internet Mail Extensions (MIME) Part Five: Conformance Criteria and Examples
* RFC 2183 - Communicating Presentation Information in Internet Messages: The Content-Disposition Header Field
* RFC 2184 - MIME Parameter Value and Encoded Word Extensions: Character Sets, Languages, and Continuations
* RFC 2369 - The Use of URLs as Meta-Syntax for Core Mail List Commands and their Transport through Message Header Fields
* RFC 4021 - Registration of Mail and MIME Header Fields
* RFC 4288 - Media Type Specifications and Registration Procedures
* RFC 4289 - Multipurpose Internet Mail Extensions (MIME) Part Four: Registration Procedures (obsoletes 2048)

We receive and send MIME formatted e-mail

### IMAP

* RFC 2177 - IMAP4 IDLE command
* RFC 3501 - INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1
* RFC 4551 - IMAP Extension for Conditional STORE Operation or Quick Flag Changes Resynchronization

See also: https://www.imapwiki.org/ImapRFCList for lots more

We support IMAP for receiving e-mail

### SMTP

* RFC 281 - Simple Mail Transfer Protocol
* RFC 1047 - DUPLICATE MESSAGES AND SMTP

We support SMTP for sending e-mail

### POP3

* RFC 918 – POST OFFICE PROTOCOL
* RFC 937 – POST OFFICE PROTOCOL – VERSION 2
* RFC 1081 – Post Office Protocol – Version 3
* RFC 1939 – Post Office Protocol – Version 3 (STD 53)
* RFC 1957 – Some Observations on Implementations of the Post Office Protocol (POP3)
* RFC 2195 – IMAP/POP AUTHorize Extension for Simple Challenge/Response
* RFC 2231 - MIME Parameter Value and Encoded Word Extensions: Character Sets, Languages, and Continuations
* RFC 2384 – POP URL Scheme
* RFC 2449 – POP3 Extension Mechanism
* RFC 2595 – Using TLS with IMAP, POP3 and ACAP
* RFC 3206 – The SYS and AUTH POP Response Codes
* RFC 5034 – The Post Office Protocol (POP3) Simple Authentication and Security Layer (SASL) Authentication Mechanism

We support POP3 for receiving e-mail

### WebDAV

* RFC 2518 - HTTP Extensions for Distributed Authoring -- WEBDAV
* RFC 4918 - HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)

We support WebDAV for receiving e-mail

### PGP/MIME

* RFC 1847 - Security Multiparts for MIME: Multipart/Signed and Multipart/Encrypted
* RFC 3156 - MIME Security with OpenPGP
* RFC 4880 - OpenPGP Message Format

We support OpenPGP for reading and writing encrypted e-mail

### HTML

* RFC 2854 - The 'text/html' Media Type

While we don't parse/write HTML ourselves currently, we do want to support detecting HTML e-mail

### iCalendar

* RFC 2445 - Internet Calendaring and Scheduling Core Object Specification (iCalendar)
* RFC 5545 - Internet Calendaring and Scheduling Core Object Specification (iCalendar)
* RFC 5546 - iCalendar Transport-Independent Interoperability Protocol (iTIP)
* RFC 6648 - Parameter Value Encoding in iCalendar and vCard
* RFC 7529 - Non-Gregorian Recurrence Rules in the Internet Calendaring and Scheduling Core Object Specification (iCalendar)

Again while we don't directly parse iCalendar (text/calendar) attachments ourselves, 
we do aim to support rendering iCal data within the app.

### URLs

* RFC 2368 - The mailto URL scheme
* RFC 3987 - Internationalized Resource Identifiers (IRIs)

E-mails often contain URLs which we want to be able to parse and interpret usefully

### TLS

* RFC 2854 - Transport Layer Security (TLS) Extensions

We support secure transmission of e-mail

### SASL / CRAM / etc

* RFC 2195 - IMAP/POP AUTHorize Extension for Simple Challenge/Response
* RFC 4422 - Simple Authentication and Security Layer (SASL)
* [SASL Mechanisms](https://www.iana.org/assignments/sasl-mechanisms/sasl-mechanisms.xhtml)

We currently support this encryption protocol

### GSSAPI / SCRAM / etc

* RFC 5802 - Salted Challenge Response Authentication Mechanism (SCRAM) SASL and GSS-API Mechanisms
* RFC 1508, RFC 1509, RFC 1964, RFC 2078, RFC 2222, RFC 2743, RFC 2744 - GSSAPI RFCs
* RFC 6749 - OAuth 2.0

We have requests for these encryption protocols

### S/MIME

* RFC 3369 - Cryptographic Message Syntax
* RFC 3370 - Cryptographic Message Syntax (CMS) Algorithms
* RFC 3850 - Secure/Multipurpose Internet Mail Extensions (S/MIME) Version 3.1 Certificate Handling
* RFC 3851 - Secure/Multipurpose Internet Mail Extensions (S/MIME) Version 3.1 Message Specification
* RFC 5751 - Secure/Multipurpose Internet Mail Extensions (S/MIME) Version 3.2 Message Specification

We want to receive and send S/MIME formatted e-mail in the future

### SIEVE

* RFC 3028 - Sieve: A Mail Filtering Language
* RFC 5228 - Sieve: A Mail Filtering Language (obsoletes 3028)
* RFC 5230 - Sieve Email Filtering: Vacation Extension
* RFC 5804 - A Protocol for Remotely Managing Sieve Scripts

See for more: https://en.wikipedia.org/wiki/Sieve_(mail_filtering_language)

There has been requests to support SIEVE for server side filtering. 
However support for SIEVE is not present on any of the major providers - 
Google has not adopted SIEVE for it's own filters for example.

---
title: IMAP Capabilities &amp; Commands
layout: doc
---


# IMAP Capabilities &amp; Commands Extensions

This page provides documentation on known commands extensions and their level of support in K-9:

## Capabilities

| Capability | Description | Support | RFC |
| ------------- | ------------- | ------ | ------ |
| IMAP4rev1 | Support for modern IMAP | Supported | ? |
| ACL | Access Control Lists | No | RFC4314 |
| ANNOTATE-EXPERIMENT-1 | Indicate the support for experimental annotations | No | RFC5257 |
| APPENDLIMIT | ? | ? | RFC7889 |
| AUTH=PLAIN | Authentication via a plain password | Supported | RFC 3501 |
| AUTH=CRAM_MD5 | Authentication via SASL CRAM-MD5 | Supported | RFC 3501 |
| AUTH=EXTERNAL | External authentication | Supported | RFC 3501 |
| AUTH=XOAUTH2 | Authentication via OAuth 2.0 |  No | RFC 3501 |
| BINARY | Binary CTE support | No | RFC3516 |
| CAPABILITY | List available capabilities | Supported | N/A |
| CATENATE | Concatenate data with existing message | No | RFC4469 |
| CHILDREN | Child folder mailbox command | No | RFC3348 |
| COMPRESS=DEFLATE| Support for using DEFLATE to compress data | Supported | RFC4978 |
| CONDSTORE | Conditional STORE operation | No | RFC7162 |
| CONTEXT=SEARCH | ? | No | RFC5267 |
| CONTEXT=SORT | ? | No | RFC5267 |
| CONVERT | ? | No | RFC5259 |
| CREATE-SPECIAL-USE | ? | No | RFC6154 |
| ENABLE | Client notification of extension support | No | RFC 5161 |
| ESEARCH | ? | ? | RFC4731 |
| ESORT | ? | ? | RFC5267 |
| FILTERS | ? | ? | RFC5466 |
| I18NLEVEL=1 | ? | ? | RFC5255 |
| I18NLEVEL=2 | ? | ? | RFC5255 |
| ID | Mail server software identification | No | RFC2971 |
| IDLE | Indicates the server supports IMAP IDLE | Supported | RFC2177 |
| IMAPSIEVE= | ? | ? | RFC6785 |
| LANGUAGE | ? | ? | RFC5255 |
| LIST-EXTENDED | ? | ? | RFC5258 |
| LIST-STATUS | ? | ? | RFC5819 |
| LITERAL+ | Allows alternative form for literals | Unknown | RFC7888 |
| LITERAL- | Allows alternative form for literals | Unknown | RFC7888 |
| LOGIN-REFERRALS | ? | ? | RFC2221 |
| LOGINDISABLED | ? | ? | RFC2595 & RFC3501 |
| MAILBOX-REFERRALS | ? | ? | RFC2193 |
| METADATA | ? | ? | RFC5464 |
| METADATA-SERVER | ? | ? | RFC5464 |
| MOVE | ? | ? | RFC6851 |
| MULTIAPPEND | ? | ? | RFC3502 |
| MULTISEARCH | ? | ? | RFC7377 |
| NAMESPACE | Support for namespaces |  Partial support | RFC 2343 |
| NOTIFY | Request unsolicited notifications | No | RFC5465 |
| QRESYNC | ? | ? | RFC7162 |
| QUOTA | Resource usage restriction information | No | RFC2087 |
| RIGHTS= | ? | ? | RFC4314 |
| SASL-IR | Initial Client Response form of SASL authentication | No | RFC4959 |
| SEARCH=FUZZY | ? | ? | RRFC6203 |
| SEARCHRES | ? | ? | RRFC5182 |
| SORT | ? | ? | RRFC5256 |
| SORT=DISPLAY | ? | ? | RRFC5957 |
| SPECIAL-USE | ? | ? | RRFC6154 |
| STARTTLS | Support for upgrading to TLS | Supported | RFC2595 / RFC3501 |
| THREAD | ? | ? | RFC5256]
| UIDPLUS | UID-based responses | No | RFC4315 |
| UNSELECT | Closing mailboxes without expunging | Unknown | RFC3691 |
| URLFETCH=BINARY | ? | ? | RFC5524 |
| URL-PARTIAL | ? | ? | RFC5550 |
| URLAUTH | ? | ? | RFC4467 |
| UTF8=ACCEPT | ? | ? | RFC6855 |
| UTF8=ALL (OBSOLETE) | ? | ? | RFC5738 / RFC6855 |
| UTF8=APPEND (OBSOLETE) | ? | ? | RFC5738 / RFC6855 |
| UTF8=ONLY | ? | ? | RFC6855 |
| UTF8=USER (OBSOLETE | ? | ? | RFC5738 / RFC6855 |
| WITHIN | ? | ? | RFC5032 |
| XLIST | Google Mail specific deprecated list command | No |
| X-GM-EXT-1 | Google Mail custom behaviour: | No | [GMail](https://developers.google.com/gmail/imap_extensions) |



## Commands

| Command	| Description | Usage |
| ------------- | ------------- | ------ |
| APPEND	| Appends the literal argument as a new message to the end of the specified destination mailbox. | Yes | 
| AUTHENTICATE	| Indicates a Simple Authentication and Security Layer (SASL) authentication mechanism to the server. | Yes |
| CAPABILITY	| Requests a listing of capabilities that the server supports. | Yes |
| CHECK	| Requests a checkpoint of the currently selected mailbox. | No |
| CLOSE	| Permanently removes all messages that have the \Deleted flag set from the currently selected mailbox, and returns to the authenticated state from the selected state. | No |
| COPY/UID COPY	| Copies the specified message(s) to the end of the specified destination mailbox. | Yes |
| CREATE	| Creates a mailbox with the given name. | Yes |
| DELETE	| Permanently removes the mailbox with the given name. | No |
| EXAMINE	| Identical to SELECT and returns the same output; however, the selected mailbox is identified as read-only. | Yes |
| EXPUNGE	| Permanently removes all messages that have the \Deleted flag set from the currently selected mailbox. | Yes |
| FETCH/UID FETCH	| Retrieves data associated with a message in the mailbox. | Yes |
| UID	| Unique identifier. | Yes |
| LIST	| Returns a subset of names from the complete set of all names available to the client. | Yes |
| LOGIN	| Identifies the client to the server and carries the plaintext password authenticating this user. | Yes |
| LOGOUT	| Informs the server that the client is done with the connection. | No |
| LSUB	| Returns a subset of names from the set of names that the user has declared as being "active" or "subscribed". | Yes |
| NOOP	| Does nothing. It always succeeds. | Yes |
| RENAME	| Changes the name of a mailbox. | No |
| SEARCH	| Searches the mailbox for messages that match the given searching criteria. | Yes |
| SELECT	| Selects a mailbox so that messages in the mailbox can be accessed. | Yes |
| STORE	| Alters data associated with a message in the mailbox. | Yes |
| SUBSCRIBE	| Adds the specified mailbox name to the server's set of "active" or "subscribed" mailboxes as returned by the LSUB command. | No |
| UNSUBSCRIBE	| Removes the specified mailbox name from the server's set of "active" or "subscribed" mailboxes as returned by the LSUB command. | No |

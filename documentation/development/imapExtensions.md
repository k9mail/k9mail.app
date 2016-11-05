---
title: IMAP Capabilities &amp; Commands
nav_hide: true
layout: default
---

{% include documentation-header.html %}

{% include development-header.html %}

# IMAP Capabilities &amp; Commands Extensions

This page provides documentation on known commands extensions and their level of support in K-9:

## Capabilities

| Capability | Description | Support |
| ------------- | ------------- | ------ |
| CAPABILITY | List available capabilities | Supported |
| IMAP4rev1 | Support for modern IMAP | Supported |
| IDLE | Indicates the server supports IMAP IDLE | Supported |
| AUTH=CRAM_MD5 | Authentication via SASL CRAM-MD5 | Supported |
| AUTH=PLAIN | Authentication via a plain password | Supported |
| AUTH=EXTERNAL | External authentication|  Supported |
| AUTH=XOAUTH2 | Authentication via OAuth 2.0 |  No |
| NAMESPACE | Support for namespaces - RFC 2342 |  Supported | 
| COMPRESS=DEFLATE| Support for using DEFLATE to compress data | Supported |
| STARTTLS | Support for upgrading to TLS | Supported |
| UNSELECT | Closing mailboxes without expunging - https://tools.ietf.org/html/rfc3691 | Unknown |
| LITERAL+ | Allows alternative form for literals - https://tools.ietf.org/html/rfc7888 | Unknown |
| QUOTA | Resource usage restriction information - https://tools.ietf.org/html/rfc2087 | No |
| ID | Mail server software identification | No |
| XLIST | Google Mail specific deprecated list command | No |
| CHILDREN | Child folder mailbox command - https://www.ietf.org/rfc/rfc3348.txt | No |
| X-GM-EXT-1 | Google Mail custom behaviour: https://developers.google.com/gmail/imap_extensions | No |
| UIDPLUS | UID-based responses - https://tools.ietf.org/html/rfc4315 | No |
| SASL-IR | Initial Client Response form of SASL authentication | No |


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

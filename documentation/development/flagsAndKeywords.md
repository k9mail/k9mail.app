---
title: Flags and Keywords 
nav_hide: true
layout: default
---

{% include development-header.html %}

{% include documentation-header.html %}

# Flags and Keywords

This section provides basic information about flags and keywords.

## Terminology

*   **Internal Flag**: Identified by an internal code. It is used only by k9, defined at 
    compile time, and represented by an object of the class `com.fsck.k9.mail.Flag`.
    
    Examples: `X_SEND_IN_PROGRESS`, `X_DOWNLOADED_FULL`

*   **Server Flag** (abstract): Identified by an internal and an external code. It is used 
    by k9 and on the mail server.

    *   **(IMAP) System Flag**: The external code starts with `\` and is specified in
        [RFC 3501, 2.3.2](https://tools.ietf.org/html/rfc3501#section-2.3.2). A system flag is
        defined at compile time and represented by an object of the class `com.fsck.k9.mail.Flag`.
    
        Examples for external codes: `\Answered`, `\Draft`
        
        As an exception the class `Flag` also defines `$forwarded` as a system flag, although
        it does not start with `\` and is not specified as an IMAP system flag in the RFC.

    *   **(IMAP) Keyword**: May have a display name, a color, etc. and its external code 
        does not start with `\`. It is defined at runtime and represented by an object of the
        class `com.fsck.k9.mail.Keyword`.
        
        Examples for external codes: `Work`, `Personal`
        
        *    **Tag**: A keyword assigned to an email.

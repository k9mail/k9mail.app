---
title: Message Tags 
nav_hide: true
layout: default
---

{% include development-header.html %}

{% include documentation-header.html %}

# Message Tags

This page is work in progress. In the long run it shall document the design of message tags in K-9.

## Requirements

*   There are multiple catalogues of tags on the global level with each account being linked to one catalogue.

## Data Model

### Tag Catalogues

There are one or more catalogues of tags. They are stored in K-9's `preferences_storage` database.
Each catalogue of tags is identified by a UUID. There is always exactly one of the catalogues marked _default_.
Initially one catalogue of tags is created, named "Default tags", and marked _default_.
If the _default_ catalogue is deleted, one of the remaining catalogues is marked _default_.

The following keys always exist in the preferences storage:

Key                     | Description
----------------------- | ------------------------------------------------------------
tagCatalogueUuids       | Comma-separated list of UUIDs of tag catalogues; never empty
defaultTagCatalogueUuid | UUID of default tag catalogue; never empty

Each tag catalogue contains an arbitrary number of ordered tags. Each tag is identified by a UUID.

For each tag catalogue the following keys always exist in the preferences storage:

Key                                        | Description
------------------------------------------ | -----------------------------------------------------------
tagCatalogue.<_tagCatalogueUuid_>.name     | Name of tag catalogue; never empty
tagCatalogue.<_tagCatalogueUuid_>.tagUuids | Comma-separated ordered list of UUIDs of tags; may be empty

For each tag the following keys always exist in the preferences storage:

Key                   | Description
--------------------- | --------------------------------------
tag.<_tagUuid_>.name  | Tag name used for display; never empty
tag.<_tagUuid_>.color | Color int for the tag; never empty

Each account is linked to one of the sets. Initially each account is linked to the _default_ set.

For each account the following key always exists in the preferences storage:

Key                            | Description
------------------------------ | -----------------------------------------------------------
<_accountUuid_>.tagCatalogUuid | UUID of tag catalogue linked with this account; never empty

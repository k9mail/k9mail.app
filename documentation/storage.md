---
title: Storage
nav_hide: true 
layout: default
---

{% include documentation-header.html %}

# Storage

Android's storage has long a complex history.  Ultimately it means that terms like 
'external storage' do not always mean what they might be first thought as.

This page aims to give an overview of:

* How applications use storage
* What permissions are required for storage
* How this changes per device
* What future plans we have for K-9 with regard to storage

We will start by giving an introduction to each type

# Internal storage

Internal storage is where the APK files are stored and can store some data. However it is normally limited in size. 
It is however restricted so that only the application itself can write to it's own internal storage. 
This is useful for security.

K-9 uses internal storage for preferences, passwords and it's APK.

# External storage

This is perhaps the most confusing one. In the early days of Android external storage 
use to mean 'removable storage'. However, these days, external storage often just 
refers to normal non-removable storage that has been mounted on the device.

External storage however has to be considered potientially removable. But large APKs 
can be stored on external storage by request. K-9 doesn't do this - our APK is not large
and most users don't want their e-mail account being removed when they take out an SD card
which has been designated as external storage.

# Removable media / SD cards

With the later releases of Android, Google has started providing permissions for SD cards specifically.
In Android 4.4 it was read only. In Android 5.0 there are write permissions made available.

However the number of devices with SD cards is still quite small, the way they are detected by the 
API varies heavily with each version of Android and the amount of normal storage is normally considerable.

Specifically, the Google Nexus line of phones do not contain SD cards. Google has never seen SD card support 
as a priority and as Google play a huge role in the ecosystem it alters the development priorities.

Hence we don't see strong demand and ability for specifically supporting SD cards on versions where it is actually 
possible without fragile code.

This may change in the future, but is dependent on developers having phones with SD card support to develop 
against (as well as no higher priority issues).


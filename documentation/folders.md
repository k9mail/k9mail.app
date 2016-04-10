---
title: Folders 
nav_hide: true
layout: default
---

{% include documentation-header.html %}

# Folders

Perhaps most confusing aspect of K-9 is the use of Classes to control the display and synchronization behavior of accounts and folders.  The goal of the Class system is to provide an easy way for a person with a large number of folders to accomplish either of these two goals:

* Show only a select few of the available folders
* Show all '''but''' a select few of the available folders

We didn't want either use case to require going through nearly all of the folders, setting a parameter on each folder.  To this end, there are settings to be made on both Account and Folders. If you do not make any Class setting changes, K-9 will display all of your folders, but will not perform automatic synchronization on any of them, until you change the "Email check frequency" in the Account settings.

## Assigning classes

Classes can be used to adjust both the display of your folders and the automatic synchronization. ***Only displayed folders will be synchronized, irrespective of the synchronization class settings.***

You can adjust the Account Class settings through the normal Account Settings Activity.  To adjust the folder Class settings, use the new Folder Settings Activity. In the main folder list, long-press a folder. In Android Email, a long press on a folder does nothing. In K-9, it brings up a context menu, providing "Refresh" and "Folder settings" Click "Folder settings" to adjust the Classes to which the folder is assigned.

### Folder display class

First is the "Folder display class"  A folder can be assigned to be in ''1st Class'', ''2nd Class'' or ''None''. The default is ''None''. If you have a lot of folders, and only want to display a few, then assign those few to ''1st Class''. If you have a lot of folders, and only want to hide a few, assign those few to ''2nd Class'', and leave the multitude set to ''None''.

### Folder sync class

Second, it is also possible to separately set the "Folder sync class". By default, the folder's sync class is the same as the folder's display class. However, there are cases in which it is useful to have a different class for synchronization purposes. For instance, if there is a folder that you want to appear in your normal short list, but you do not want it to be automatically synced. Drafts is a good example of such a folder. In this case, assign the Drafts folder to be ''1st Class'' for display but ''2nd Class'' for sync. You will always have it in your folder list, but will not waste any battery power automatically keeping it in sync.

## Modes

Now, in order to make use of the folder Class assignment, it is necessary to adjust two settings in the "Account settings": "Folder display mode" and "Folder sync mode".

### Display mode

"Folder display mode" determines which folders are to be displayed.
There are four choices:

* '''All''': All folders are displayed.
* '''Only 1st Class folders''': Only folders that were explictly set to be ''1st Class'' for their "display class" are shown.
* '''1st and 2nd Class folders''': Only folders that were explicitly set to be either ''1st Class'' or ''2nd Class'' for their "display class" are shown.
* '''All except 2nd Class folders''': All folders are shown, except those that are selected to be in ''2nd Class'' for their display class.

## Sync mode

"Folder sync mode" determines which folders are to be automatically synchronized at the "Email check frequency".

There are four choices:

* '''All''': All displayed folders are automatically synchronized.
* '''Only 1st Class folders''': Only displayed folders that were explictly set to be ''1st Class'' for their "sync class" are automatically synchronized
* '''1st and 2nd Class folders''': Only displayed folders that were explicitly set to be either ''1st Class'' or ''2nd Class'' for their "sync class" are automatically synchronized.
* '''All except 2nd Class folders''': All displayed folders, except those that are selected to be in ''2nd Class'' for their sync class, are automatically synchronized.

## Examples

To show the utility of the various modes, it is probably best to show some use cases. In all cases, I have four folders available: Inbox, Janet, Carl and John.

### Use case 1: Just a few folders

I want to see just my Inbox, Janet and Carl folders, and want all of those to be automatically synchronized. (Imagine I have 100 other folders that I do not want to see.)

<table>
<tbody><tr>
<th>Setting</th>
<th>Account</th>
<th>Inbox</th>
<th>Janet</th>
<th>Carl</th>
<th>John</th>
</tr>
<tr>
<th>Display mode/class</th>
<td><i>Only 1st Class folders</i></td>
<td><i>1st Class</i></td>
<td><i>1st Class</i></td>
<td><i>1st Class</i></td>
<td><i>None</i></td>
</tr>
<tr>
<th>Sync mode/class</th>
<td><i>Only 1st Class folders</i>*</td>
<td><i>Same as display  class</i></td>
<td><i>Same as display class</i></td>
<td><i>Same as display class</i></td>
<td><i>Same as display class</i></td>
</tr>
</tbody></table>

- You could use ''All'', instead, for the Account "Folder sync mode", because only displayed folders are automatically synchronized. However, if you switched to displaying all folders, K-9 would then automatically sync all folders, which might be time consuming and battery draining.

### Use case 2: All but a few folders

I want to see and sync all of the folders, except for Carl. (Imagine I have 100 other folders I want to see.)

<table>
<tr>
<th>Setting</th>
<th>Account</th>
<th>Inbox</th>
<th>Janet</th>
<th>Carl</th>
<th>John</th>
</tr>
<tr>
<th>Display mode/class</th>
<td>''All except 2nd Class Folders''</td>
<td>''None''</td>
<td>''None''</td>
<td>''2nd Class''</td>
<td>''None''</td>
</tr><tr>
<th>Sync mode/class</th>
<td>''All except 2nd Class Folders''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
</tr>
</tbody>
</table>


### Use case 3: A few folders, only some automatically synchronized

I want to see only my Inbox, Carl and John folders, but I do not want the Carl folder to be automatically synchronized.

<table>
<tr>
<th>Setting</th>
<th>Account</th>
<th>Inbox</th>
<th>Janet</th>
<th>Carl</th>
<th>John</th>
</tr>
<tr>
<th>Display mode/class</th>
<td>''Only 1st Class folders''</td>
<td>''1st Class''</td>
<td>''None’’</td>
<td>''1st Class''</td>
<td>''1st Class''</td>
</tr>
<tr>
<th>Sync mode/class</th>
<td>''Only 1st Class folders''</td>
<td>''Same as display class''</td>
<td>''Same as display class’’</td>
<td>''2nd Class''</td>
<td>''Same as display class''</td>
</tr>
</tbody>
</table>


### Use case 4: A few core folders, sometimes a few more

I want to normally only see my Carl and Janet folders, often want to see my Inbox, but never want to see my John folder.  All displayed folders are automatically synchronized.

<table>
<tr>
<th>Setting</th>
<th>Account</th>
<th>Inbox</th>
<th>Janet</th>
<th>Carl</th>
<th>John</th>
</tr>
<tr>
<th>Display mode/class</th>
<td>''Only 1st Class folders''*</td>
<td>''2nd Class''</td>
<td>''1st Class’’</td>
<td>''1st Class''</td>
<td>''None''</td>
</tr>
<tr>
<th>Sync mode/class</th>
<td>''1st and 2nd Class folders''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
</tr>
</tbody>
</table>


<nowiki>*</nowiki> To easily show the Inbox, and the imaginary other folders I want to sometimes see, just change the Account's "Folder display mode" to ''1st and 2nd Class folders''.


### Use case 5: A few core folders, sometimes a few more, only the core folders are ever synchronized

I want to normally only see my Carl and Janet folders, often want to see my Inbox, never want to see my John folder, but only Carl and Janet are automatically synchronized.

<table>
<tr>
<th>Setting</th>
<th>Account</th>
<th>Inbox</th>
<th>Janet</th>
<th>Carl</th>
<th>John</th>
</tr>
<tr>
<th>Display mode/class</th>
<td>''Only 1st Class folders''*</td>
<td>''2nd Class''</td>
<td>''1st Class''</td>
<td>''1st Class''</td>
<td>''None''</td>
</tr>
<tr>
<th>Sync mode/class</th>
<td>''Only 1st Class folders''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
<td>''Same as display class''</td>
</tr>
</tbody>
</table>

<nowiki>*</nowiki> To easily show the Inbox, and the imaginary other folders I want to sometimes see, just change the Account's "Folder display mode" to ''1st and 2nd Class folders''.

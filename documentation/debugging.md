---
title: Debugging
nav_hide: true 
layout: default
---

{% include documentation-header.html %}

# Debugging 

Unfortunately, despite best efforts to prevent them, K-9 may, like all software occasionally encounter an issue.  

K-9 Mail has controllable debug logging. Users can activate logging to help diagnosing problems and errors.

As an open source privacy-concious project we don't implement an always-on logging system that 
reports all the device's activity to a central server. While this would make issues easier to fix 
it would also be costly to host the server and compromise the privacy of our users.

Instead we ask, if you find an issue, and are willing to help, you provide the logs yourself. 
We realise the procedure is currently complex and difficult on newer devices.

## Details

### Step 1: Activate Debug Logging in K-9 Mail
At the accounts screen of K-9 Mail press the menu button, then choose _"Settings"_. Under the heading _"Debugging"_ check the _"Enable debug logging"_ checkbox. Hit the back button **twice** to save the changes.

If K-9 is crashing, don't worry about about enabling debug logs.

### Step 2: Trigger error
Do whatever causes the problem/error.

### Step 3: Get Debug Log
To fetch the debug log you can either attach the device to your PC and use the tool `adb` from the Android SDK or you can use the application `aLogcat` to display the debug log on the device.

* **Using `adb`**
  1. [Install adb and connect to your device](https://github.com/k9mail/k-9/wiki/Installing-adb).
  2. Find the process ID of k-9:
              adb shell ps -A | grep k9
  3. The output will be similar to:
  
             u0_a153       5191   587 4468612 112380 SyS_epoll_wait      0 S com.fsck.k9.debug
             
  4. In this example the PID is 5191
  5. To capture the debug log in a file named `k9-log.txt`, enter the command:

             adb logcat -d --pid=<PID> > k9-log.txt

* **Using `aLogcat` (from Google Play)**

    0. Make sure your Android version is supported by `aLogCat`. The app **WON'T work with Android 4.1 and newer**. If you have root see here: [CatLog](http://nolanlawson.com/2012/09/02/catlog-jives-with-jelly-bean-goes-open-source/).
    0. Install the application [aLogcat](https://play.google.com/store/apps/details?id=org.jtb.alogcat) via Google Play.
    0. In aLogcat press the menu button and select _"Filter"_. Enter `(k9|AndroidRuntime)`, check `Apply as a regular expression?`, and press _"Okay"_.
    0. Make sure that _"Level"_ is set to _"Verbose"_ (default setting). It's also usually useful to set _"Format"_ to _"Time"_ if logging something that happens over time instead of at some particular moment.

### Step 4: Create an Issue in our Bug Tracker
To be able to fix your problem we need to know about it. Please create a [new issue](https://github.com/k9mail/k-9/issues/new) in our [bug tracker](https://github.com/k9mail/k-9/issues). Attach a copy of the debug log you just created.

It's ok to remove your password from the debug log. Other than that, please give us as much of the log as you possibly can. 

**Important:** Include the exact version number of your installed K-9 Mail in the bug report. Read [GetVersionNumber](https://github.com/k9mail/k-9/wiki/GetVersionNumber) if you need help on finding out which version of K-9 you're running.

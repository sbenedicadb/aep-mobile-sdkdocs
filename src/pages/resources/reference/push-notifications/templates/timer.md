---
title: Adobe Experience Platform SDK timer push template
description: Timer push template supported by Adobe Campaign Classic mobile extension.
keywords:
- Adobe Campaign Classic
- Push
- Push Template
- Timer
---

import Tabs from './tabs/timer.md'

# Push template - timer

Notification containing title, body, image, and timer.<br />Alternate title, body, and image can be configured to be shown upon expiry of the timer.

Templates below show all available properties in their respective payloads for FCM (Android) and APNS (iOS).
<br />
<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

FCM

<Tabs query="platform=fcm&template=timer"/>

APNS

<Tabs query="platform=apns&template=timer"/>

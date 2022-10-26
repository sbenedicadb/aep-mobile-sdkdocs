import Tabs from './tabs/setup.md'

#  Set up AEPMessaging SDK

## Beta instructions

While the in-app messaging feature is in beta, the developer will need to use the Messaging extension on the `staging` branch of this repo.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android (Gradle)

<Tabs query="platform=android&task=install"/>

iOS (Cocoapods)

<Tabs query="platform=ios&task=install"/>

## Import and register the Messaging extension

Import the AEPMessaging framework and its dependencies, then register the Messaging extension and dependencies.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Android

<Tabs query="platform=android&task=register"/>

iOS

<Tabs query="platform=ios&task=register"/>
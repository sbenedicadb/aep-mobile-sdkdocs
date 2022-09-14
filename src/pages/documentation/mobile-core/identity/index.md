import AddIdentityIosACP from './tabs/index/add-identity/ios-acp.md'
import AddIdentityIosAEP from './tabs/index/add-identity/ios-aep.md'
import AddIdentityAndroid from './tabs/index/add-identity/android.md'
import AddIdentityCordova from './tabs/index/add-identity/cordova.md'
import AddIdentityFlutter from './tabs/index/add-identity/flutter.md'
import AddIdentityReactNative from './tabs/index/add-identity/react-native.md'
import AddIdentityUnity from './tabs/index/add-identity/unity.md'
import AddIdentityXamarin from './tabs/index/add-identity/xamarin.md'
import ExtensionVersionIosACP from './tabs/index/extension-version/ios-acp.md'
import ExtensionVersionIosAEP from './tabs/index/extension-version/ios-aep.md'
import ExtensionVersionAndroid from './tabs/index/extension-version/android.md'
import ExtensionVersionCordova from './tabs/index/extension-version/cordova.md'
import ExtensionVersionFlutter from './tabs/index/extension-version/flutter.md'
import ExtensionVersionReactNative from './tabs/index/extension-version/react-native.md'
import ExtensionVersionUnity from './tabs/index/extension-version/unity.md'
import ExtensionVersionXamarin from './tabs/index/extension-version/xamarin.md'
import ImplementVisitorTrackingIosACP from './tabs/index/implement-visitor-tracking/ios-acp.md'
import ImplementVisitorTrackingIosAEP from './tabs/index/implement-visitor-tracking/ios-aep.md'
import ImplementVisitorTrackingAndroid from './tabs/index/implement-visitor-tracking/android.md'
import ImplementVisitorTrackingCordova from './tabs/index/implement-visitor-tracking/cordova.md'
import ImplementVisitorTrackingFlutter from './tabs/index/implement-visitor-tracking/flutter.md'
import ImplementVisitorTrackingReactNative from './tabs/index/implement-visitor-tracking/react-native.md'
import ImplementVisitorTrackingUnity from './tabs/index/implement-visitor-tracking/unity.md'
import ImplementVisitorTrackingXamarin from './tabs/index/implement-visitor-tracking/xamarin.md'
import RegisterIdentityIosACP from './tabs/index/register-identity/ios-acp.md'
import RegisterIdentityIosAEP from './tabs/index/register-identity/ios-aep.md'
import RegisterIdentityAndroid from './tabs/index/register-identity/android.md'
import RegisterIdentityCordova from './tabs/index/register-identity/cordova.md'
import RegisterIdentityFlutter from './tabs/index/register-identity/flutter.md'
import RegisterIdentityReactNative from './tabs/index/register-identity/react-native.md'
import RegisterIdentityUnity from './tabs/index/register-identity/unity.md'
import RegisterIdentityXamarin from './tabs/index/register-identity/xamarin.md'

# Identity

The Identity extension is bundled with [Mobile Core](../index.md) and enables your app with the Experience Cloud ID (ECID). This service helps with the synchronization of Adobe and other customer identifiers.

<InlineAlert variant="warning" slots="text"/>

On web or other platforms, there might situations where this extension might not be required, and the implementation of this SDK extension on mobile apps is required.

To get started with Identity, complete the following steps:

1. Add the **Identity** extension to your app.
2. Implement the SDK APIs to complete the following tasks:
   * Update customer IDs.
   * Append Adobe visitor data to a URL string.
   * Return customer IDs.
   * Retrieve Experience Cloud IDs.
   * Set advertising IDs.
   * Set the device notification for push notifications.

## Add the Identity extension to your app

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<AddIdentityAndroid/>

iOS (AEP 3.x)

<AddIdentityIosAEP/>

iOS (ACP 2.x)

<AddIdentityIosACP/>

React Native

<AddIdentityReactNative/>

Flutter

<AddIdentityFlutter/>

Cordova

<AddIdentityCordova/>

Unity

<AddIdentityUnity/>

Xamarin

<AddIdentityXamarin/>

## Register the Identity extension

The `registerExtension()` API registers the Identity extension with the Mobile Core extension. This API allows the extension to send and receive events to and from the Mobile SDK.

To register the Identity extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<RegisterIdentityAndroid/>

iOS (AEP 3.x)

<RegisterIdentityIosAEP/>

iOS (ACP 2.x)

<RegisterIdentityIosACP/>

React Native

<RegisterIdentityReactNative/>

Flutter

<RegisterIdentityFlutter/>

Cordova

<RegisterIdentityCordova/>

Unity

<RegisterIdentityUnity/>

Xamarin

<RegisterIdentityXamarin/>

<InlineAlert variant="info" slots="text"/>

Previously known as MCID, the Experience Cloud ID (ECID) is a 38 character ID that uniquely identifies each visitor in the Adobe Experience Platform.

After the configuration is complete, an ECID is generated and, where applicable, is included on all Analytics and Audience Manager hits. Other IDs, such as custom and automatically-generated IDs, continue to be sent with each hit.

## Version of the Identity extension

The `extensionVersion()` API returns the version of the Identity extension that is registered with the Mobile Core extension.

To get the version of the Identity extension, use the following code sample:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<ExtensionVersionAndroid/>

iOS (AEP 3.x)

<ExtensionVersionIosAEP/>

iOS (ACP 2.x)

<ExtensionVersionIosACP/>

React Native

<ExtensionVersionReactNative/>

Flutter

<ExtensionVersionFlutter/>

Cordova

<ExtensionVersionCordova/>

Unity

<ExtensionVersionUnity/>

Xamarin

<ExtensionVersionXamarin/>

## Visitor tracking between an app and the mobile web

If your app opens mobile web content, you need to ensure that visitors are not identified separately as they move between the native and mobile web.

### Visitor IDs in apps

The Mobile SDK generates a unique visitor ID when the app is installed. This ECID is stored in persistent memory on the mobile device and is sent with every hit. The ECID is removed when the user uninstalls the app or when the user sets the Mobile SDK global privacy status to `optedout`.

<InlineAlert variant="info" slots="text"/>

When the Mobile SDK privacy status is set to `optedout`, and the ECID is removed, a new unique visitor ID (ECID) is generated when the user sets the global privacy status to `optedin`.

<InlineAlert variant="info" slots="text"/>

App visitor IDs persist through upgrades.

### Visitor IDs in the mobile web

Typical mobile web implementations use the same standard analytics `s_code.js` or `AppMeasurement.js` that is used in desktop sites. The JavaScript libraries have their own methods of generating unique visitor IDs, which causes a different visitor ID to be generated when you open mobile web content from your app.

To use the same visitor ID in the app and mobile web and pass the visitor ID to the mobile web in the URL, complete the following steps:

### Implementing visitor tracking between an app and the mobile web

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<ImplementVisitorTrackingAndroid/>

iOS (AEP 3.x)

<ImplementVisitorTrackingIosAEP/>

iOS (ACP 2.x)

<ImplementVisitorTrackingIosACP/>

React Native

<ImplementVisitorTrackingReactNative/>

Flutter

<ImplementVisitorTrackingFlutter/>

Cordova

<ImplementVisitorTrackingCordova/>

Unity

<ImplementVisitorTrackingUnity/>

Xamarin

<ImplementVisitorTrackingXamarin/>

The ID service code on the destination domain extracts the ECID from the URL instead of sending a request to Adobe for a new ID. The ID service code on the destination page uses this ECID to track the visitor. On hits from the mobile web content, verify that the `mid` parameter exists on each hit, and that this value matches the `mid`value that is being sent by the app code.

import ConfigureWithIosACP from './tabs/index/configure-with/ios-acp.md'
import ConfigureWithIosAEP from './tabs/index/configure-with/ios-aep.md'
import ConfigureWithAndroid from './tabs/index/configure-with/android.md'
import ConfigureWithCordova from './tabs/index/configure-with/cordova.md'
import ConfigureWithUnity from './tabs/index/configure-with/unity.md'
import ConfigureWithXamarin from './tabs/index/configure-with/xamarin.md'
import BundledFileIosACP from './tabs/index/bundled-file/ios-acp.md'
import BundledFileIosAEP from './tabs/index/bundled-file/ios-aep.md'
import BundledFileAndroid from './tabs/index/bundled-file/android.md'
import BundledFileXamarin from './tabs/index/bundled-file/xamarin.md'
import ProgrammaticUpdatesIosACP from './tabs/index/programmatic-updates/ios-acp.md'
import ProgrammaticUpdatesIosAEP from './tabs/index/programmatic-updates/ios-aep.md'
import ProgrammaticUpdatesAndroid from './tabs/index/programmatic-updates/android.md'
import ProgrammaticUpdatesCordova from './tabs/index/programmatic-updates/cordova.md'
import ProgrammaticUpdatesFlutter from './tabs/index/programmatic-updates/flutter.md'
import ProgrammaticUpdatesReactNative from './tabs/index/programmatic-updates/react-native.md'
import ProgrammaticUpdatesUnity from './tabs/index/programmatic-updates/unity.md'
import ProgrammaticUpdatesXamarin from './tabs/index/programmatic-updates/xamarin.md'

# Configuration

The Configuration extension is built into the Mobile Core extension. It provides several different APIs for you to setup the configuration either remotely in the Data Collection UI or locally.

## Configure with App ID per environment

When you configure a mobile property, a unique environment ID is generated that the SDK uses to retrieve your configuration. This ID is generated when an app configuration is created and published to a given environment. The app is first launched and then the SDK retrieves and uses this Adobe-hosted configuration.

<InlineAlert variant="success" slots="text"/>

As best practice, you should configure a mobile property in the Data Collection UI and use environment IDs to configure your application. Follow the steps in the tutorial on [setting up a mobile property](https://aep-sdks.gitbook.io/docs/getting-started/create-a-mobile-property) if you need to create a new Experience Platform App. (FIX LINK)

After the configuration is retrieved when the app is initially launched, the configuration is stored in local cache. The SDK tries to refresh the configuration every cold launch or when a new session is detected. If there is no change or a network request error occurs while downloading the configuration file, the cached configuration will be used.

The unique environment ID from the Data Collection UI can be configured with the SDK using the following:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="6"/>

Android

<ConfigureWithAndroid/>

iOS (AEP 3.x)

<ConfigureWithIosAEP/>

iOS (ACP 2.x)

<ConfigureWithIosACP/>

Cordova

<ConfigureWithCordova/>

Unity

<ConfigureWithUnity/>

Xamarin

<ConfigureWithXamarin/>

## Programmatic updates to configuration

You can also update the configuration programmatically by passing configuration keys and values to override the existing configuration.

<InlineAlert variant="info" slots="text"/>

Keys that are not found on the current configuration are added when this method is followed. Null values are allowed and replace existing configuration values.

<InlineAlert variant="warning" slots="text"/>

Do not use this API to update the build.environment or any key with an environment prefix, because it can lead to unexpected behavior. For more information, read [Environment-aware configuration properties](./#environment-aware-configuration-properties). FIX LINK

<TabsBlock orientation="horizontal" slots="heading, content" repeat="8"/>

Android

<ProgrammaticUpdatesAndroid/>

iOS (AEP 3.x)

<ProgrammaticUpdatesIosAEP/>

iOS (ACP 2.x)

<ProgrammaticUpdatesIosACP/>

React Native

<ProgrammaticUpdatesReactNative/>

Flutter

<ProgrammaticUpdatesFlutter/>

Cordova

<ProgrammaticUpdatesCordova/>

Unity

<ProgrammaticUpdatesUnity/>

Xamarin

<ProgrammaticUpdatesXamarin/>

## Clearing programmatic updates to the configuration

<InlineAlert variant="info" slots="text"/>

This API is only available in Android and iOS (AEP 3.x).

You can clear any programmatic updates made to the configuration via the `clearUpdatedConfiguration` API. This will clear programmatic updates to configuration made via the `updateConfiguration(configMap)`(Android)/ `updateConfigurationWith(configDict:)`(iOS) API. It will also clear any updates to the `MobilePrivacyStatus`(Android)/ `PrivacyStatus`(iOS)  made via `setPrivacyStatus(privacyStatus)`(Android)/ `setPrivacyStatus(_ status:)`(iOS).

For implementation details, please refer to [Configuration API reference](./api-reference.md#clearUpdatedConfiguration).

## Using a bundled file configuration

You can include a bundled JSON configuration file in your app package to replace or complement the configuration that was downloaded by using the [Configure with App ID per environment](./#configure-with-app-id-per-environment) approach. FIX LINK

To download the JSON configuration file, use the following URL:

`https://assets.adobedtm.com/PASTE-ENVIRONMENT-ID.json`

* In iOS, the `ADBMobileConfig.json` file can be placed anywhere that it is accessible in your bundle.
* In Android, the `ADBMobileConfig.json` file must be placed in the assets folder.

You can also load a different `ADBMobileConfig.json` file by using the `ConfigureWithFileInPath` method. The Adobe Experience Platform SDKs will attempt to load the file from the given path and parse its JSON contents. Previous programmatic configuration changes that were set by using the `UpdateConfiguration` method are applied on the bundled file's configuration before setting the new configuration to the Adobe Experience Platform SDKs. If a file-read error or JSON parsing error occurs, no configuration changes are made.

To pass in a bundled path and file name:

<TabsBlock orientation="horizontal" slots="heading, content" repeat="4"/>

Android

<BundledFileAndroid/>

iOS (AEP 3.x)

<BundledFileIosAEP/>

iOS (ACP 2.x)

<BundledFileIosACP/>

Xamarin

<BundledFileXamarin/>

## Environment-aware configuration properties

<InlineAlert variant="info" slots="text"/>

This feature is only available in iOS ACPCore version 2.0.3 or later, and iOS AEPCore version 3.0.0 and above.

Some extension developers might use different configuration values based on their environment, and the generated configuration might have several entries for the same property. For example, the Adobe Campaign Standard extension has different endpoints for development, staging, and production servers. Here is an example of a raw configuration that supports multiple build environments:

```javascript
{
  "myExtension.server": "mydomain.com",
  "__dev__myExtension.server": "mydomain.dev.com",
  "__stage__myExtension.server": "mydomain.stage.com"
}
```

<InlineAlert variant="success" slots="text"/>

Each time a remote configuration is generated in the Data Collection UI, a `build.environment` value is set. This value is based on the environment that you are publishing. When the remote configuration is downloaded, the Configuration extension considers the value in `build.environment` and provides **only** the non-prefixed version for the current environment in the shared state.

Here is a modification of the previous example, which now includes `build.environment`:

```javascript
{
  "build.environment": "dev",
  "myExtension.server": "mydomain.com",
  "__dev__myExtension.server": "mydomain.dev.com",
  "__stage__myExtension.server": "mydomain.stage.com"
}
```

Here is the resulting shared state from the Configuration extension:

```javascript
{
  "build.environment": "dev",
  "myExtension.server": "mydomain.dev.com"  
}
```

### Sample configuration

Here's a sample JSON file for the SDK:

```javascript
{
    "experienceCloud.org": "3CE342C75100435B0A490D4C@AdobeOrg",  
    "target.clientCode": "yourclientcode",  
    "target.timeout": 5,  
    "audience.server": "omniture.demdex.net",  
    "audience.timeout": 5,  
    "analytics.rsids": "mobilersidsample",  
    "analytics.server": "obumobile1.sc.omtrdc.net",  
    "analytics.aamForwardingEnabled": false,  
    "analytics.offlineEnabled": true,  
    "analytics.batchLimit": 0,  
    "analytics.backdatePreviousSessionInfo": false,
    "global.privacy": "optedin",  
    "lifecycle.sessionTimeout": 300,  
    "rules.url": "https://link.to.rules/test.zip"
}
```
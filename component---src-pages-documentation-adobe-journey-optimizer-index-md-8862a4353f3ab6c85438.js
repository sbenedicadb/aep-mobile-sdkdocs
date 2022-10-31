"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4662,636],{60164:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return u}});var n=a(87462),i=a(63366),o=(a(15007),a(64983)),r=a(91515),d=a(28370),m=["components"],p={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",t)}},l=s("InlineAlert"),c=s("TabsBlock"),x={_frontmatter:p},g=r.Z;function u(e){var t=e.components,a=(0,i.Z)(e,m);return(0,o.mdx)(g,(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"adobe-journey-optimizer"},"Adobe Journey Optimizer"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"https://business.adobe.com/products/journey-optimizer/adobe-journey-optimizer.html"},"Adobe Journey Optimizer")," extension for Adobe Experience Platform Mobile SDKs powers push notifications for your mobile apps. This extension helps you collects user push tokens and manages interaction measurement with Adobe Experience Platform services."),(0,o.mdx)("p",null,"The following documentation details how to use the extension and required configurations to get started with push notifications for Adobe Journey Optimizer for Adobe Experience Platform services, app stores, and your apps."),(0,o.mdx)("h2",{id:"before-starting"},"Before starting"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Read the tutorial on ",(0,o.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/journey-optimizer/using/get-started/configuration/push-config/push-gs.html"},"getting started with push configuration")," to learn how to configure push channels in Adobe Journey Optimizer."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("a",{parentName:"li",href:"#update-datastream-with-profile-dataset"},"Update your app's Datastream")," in ",(0,o.mdx)("a",{parentName:"li",href:"https://experience.adobe.com/#/data-collection/"},"Adobe Experience Platform Data Collection")),(0,o.mdx)("li",{parentName:"ol"},"Integrate with following extensions:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../mobile-core/index.md"},"Mobile Core")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../edge-network/index.md"},"Adobe Experience Platform Edge Network")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../identity-for-edge-network/index.md"},"Identity for Edge Network"))))),(0,o.mdx)("h3",{id:"update-datastream-with-a-profile-dataset"},"Update Datastream with a Profile dataset"),(0,o.mdx)("p",null,"Navigate to a previously configured Datastream by following the instructions in the ",(0,o.mdx)("a",{parentName:"p",href:"../../getting-started/configure-datastreams.md"},"configure datastreams tutorial")," in ",(0,o.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/#/data-collection/"},"Adobe Experience Platform Data Collection"),"."),(0,o.mdx)("p",null,"Select the pre-created ",(0,o.mdx)("strong",{parentName:"p"},"CJM Push Profile Dataset")," in ",(0,o.mdx)("strong",{parentName:"p"},"Profile Dataset")," dropdown (under the ",(0,o.mdx)("strong",{parentName:"p"},"Adobe Experience Platform")," section) and select ",(0,o.mdx)("strong",{parentName:"p"},"Save"),"."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"978px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/fd3cc01c85a05113a21e1d615f0ba9e7/5530d/update-datastream.webp 320w","/aep-mobile-sdkdocs/static/fd3cc01c85a05113a21e1d615f0ba9e7/0c8fb/update-datastream.webp 640w","/aep-mobile-sdkdocs/static/fd3cc01c85a05113a21e1d615f0ba9e7/b9625/update-datastream.webp 978w"],sizes:"(max-width: 978px) 100vw, 978px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/fd3cc01c85a05113a21e1d615f0ba9e7/dd4a7/update-datastream.png 320w","/aep-mobile-sdkdocs/static/fd3cc01c85a05113a21e1d615f0ba9e7/0f09e/update-datastream.png 640w","/aep-mobile-sdkdocs/static/fd3cc01c85a05113a21e1d615f0ba9e7/9b76f/update-datastream.png 978w"],sizes:"(max-width: 978px) 100vw, 978px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/fd3cc01c85a05113a21e1d615f0ba9e7/9b76f/update-datastream.png",alt:"update datastream",title:"update datastream",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"setup-adobe-journey-optimizer-extension"},"Setup Adobe Journey Optimizer extension"),(0,o.mdx)("h3",{id:"configure-extension-in-the-data-collection-ui"},"Configure extension in the Data Collection UI"),(0,o.mdx)("p",null,"Go to the ",(0,o.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/#/data-collection/"},"Experience Platform Data Collection UI"),", select mobile property and navigate to ",(0,o.mdx)("strong",{parentName:"p"},"Extensions")," from the left navigation panel:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Navigate to the ",(0,o.mdx)("strong",{parentName:"li"},"Catalog")," tab, locate the ",(0,o.mdx)("strong",{parentName:"li"},"Adobe Journey Optimizer")," extension, and select ",(0,o.mdx)("strong",{parentName:"li"},"Install")),(0,o.mdx)("li",{parentName:"ol"},"Select the pre-created ",(0,o.mdx)("strong",{parentName:"li"},"CJM Push Tracking Event Dataset")," from the ",(0,o.mdx)("strong",{parentName:"li"},"Event Dataset")," dropdown."),(0,o.mdx)("li",{parentName:"ol"},"Select ",(0,o.mdx)("strong",{parentName:"li"},"Save"),"."),(0,o.mdx)("li",{parentName:"ol"},"Follow the publishing process to update SDK configuration.")),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,'The datasets selected should use a schema that uses the "Push Notification Tracking" XDM field group. The pre-created CJM Push Tracking Dataset contains this XDM field group in its schema definition. For more information, please read the tutorial on ',(0,o.mdx)("a",{parentName:"p",href:"../../getting-started/setup-schemas-and-datasets.md"},"setting up schemas and datasets"),"."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.81250000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/5530d/configuration.webp 320w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/0c8fb/configuration.webp 640w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/94b1e/configuration.webp 1280w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/0b34d/configuration.webp 1920w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/712d0/configuration.webp 2062w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/dd4a7/configuration.png 320w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/0f09e/configuration.png 640w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/bbbf7/configuration.png 1280w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/ac7a9/configuration.png 1920w","/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/b61eb/configuration.png 2062w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/9933fd4cd2219b523d611127c71f58f4/bbbf7/configuration.png",alt:"configuration",title:"configuration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"implement-extension-in-mobile-app"},"Implement extension in mobile app"),(0,o.mdx)("p",null,"Follow these steps to integrate the Adobe Journey Optimizer extension."),(0,o.mdx)("h4",{id:"import-the-extension"},"Import the extension"),(0,o.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(d.default,{query:"platform=android&task=import",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS (AEP 3.x)"),(0,o.mdx)(d.default,{query:"platform=ios-aep&task=import",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS (ACP 2.x)"),(0,o.mdx)(d.default,{query:"platform=ios-acp&task=import",mdxType:"Tabs"}),(0,o.mdx)("h4",{id:"register-the-extension-with-mobile-core"},"Register the extension with Mobile Core"),(0,o.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(d.default,{query:"platform=android&task=register",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS (AEP 3.x)"),(0,o.mdx)(d.default,{query:"platform=ios-aep&task=register",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS (ACP 2.x)"),(0,o.mdx)(d.default,{query:"platform=ios-acp&task=register",mdxType:"Tabs"}),(0,o.mdx)("h4",{id:"sync-the-user-push-token-with-adobe"},"Sync the user push token with Adobe"),(0,o.mdx)("p",null,"After importing and registering the extensions with your application, you need to sync the push token with Adobe Experience Platform, by using the setPushIdentifier API."),(0,o.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(d.default,{query:"platform=android&task=sync",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS (AEP 3.x)"),(0,o.mdx)(d.default,{query:"platform=ios-aep&task=sync",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS (ACP 2.x)"),(0,o.mdx)(d.default,{query:"platform=ios-acp&task=sync",mdxType:"Tabs"}),(0,o.mdx)("h2",{id:"next-steps"},"Next steps"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"api-reference.md#addpushtrackingdetails"},"Track Push Interactions"))),(0,o.mdx)("h2",{id:"configuration-keys"},"Configuration keys"),(0,o.mdx)("p",null,"You can update the SDK configuration, including the Messaging configuration values, programatically by using the following information."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Required"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Data Type"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"Operating System"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"messaging.eventDataset"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Experience Event Dataset ID which can be found from Experience Platform"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Android/iOS")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"messaging.useSandbox"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"A variable that lets the ",(0,o.mdx)("inlineCode",{parentName:"td"},"apnsSandbox")," environment be used for receiving push notifications. More details can be found in the ",(0,o.mdx)("a",{parentName:"td",href:"https://github.com/adobe/aepsdk-messaging-ios/blob/dev/Documentation/SetupSDK.md#using-apnssandbox-environment-for-push-notification"},"messaging documentation")),(0,o.mdx)("td",{parentName:"tr",align:"left"},"Boolean"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"iOS")))))}u.isMDXComponent=!0},28370:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return x}});var n,i=a(87462),o=a(63366),r=(a(15007),a(64983)),d=a(91515),m=["components"],p={},s=(n="Variant",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),l={_frontmatter:p},c=d.Z;function x(e){var t=e.components,a=(0,o.Z)(e,m);return(0,r.mdx)(c,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(s,{platform:"android",task:"import",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core, Edge, Edge Identity, and Messaging extensions to your project using the app's Gradle file.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:1.+'\nimplementation 'com.adobe.marketing.mobile:edge:1.+'\nimplementation 'com.adobe.marketing.mobile:edgeidentity:1.+'\nimplementation 'com.adobe.marketing.mobile:messaging:1.+'\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core, Edge, Edge Identity, and Messaging extensions in your application class.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.*;\nimport com.adobe.marketing.mobile.edge.identity.Identity;\n")),(0,r.mdx)(s,{platform:"ios-aep",task:"import",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core, Edge, Edge Identity, and Messaging extensions to your project using Cocoapods. Add the following pods to your ",(0,r.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"use_frameworks!\ntarget 'YourTargetApp' do\n    pod 'AEPCore'\n    pod 'AEPEdge'\n    pod 'AEPEdgeIdentity'\n    pod 'AEPMessaging'\nend\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core, Edge, Edge Identity, and Messaging libraries:")),(0,r.mdx)("h4",{id:"swift"},"Swift"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"// AppDelegate.swift\nimport AEPCore\nimport AEPEdge\nimport AEPEdgeIdentity\nimport AEPMessaging\n")),(0,r.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"// AppDelegate.h\n@import AEPCore;\n@import AEPEdge;\n@import AEPEdgeIdentity;\n@import AEPMessaging;\n")),(0,r.mdx)(s,{platform:"ios-acp",task:"import",repeat:"1",mdxType:"Variant"}),(0,r.mdx)("p",null,"This extension is built on AEPCore (3.x) and is not compatible with ACPCore (2.x). Please follow the ",(0,r.mdx)("a",{parentName:"p",href:"../migrate-to-swift.md"},"guide for migrating to the Swift AEPCore"),"."),(0,r.mdx)(s,{platform:"android",task:"register",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class MobileApp extends Application {\n    @Override\n    public void onCreate() {\n      super.onCreate();\n      MobileCore.setApplication(this);\n      MobileCore.configureWithAppID("yourLaunchEnvironmentID");\n      try {\n        Edge.registerExtension();\n        Identity.registerExtension();\n        Messaging.registerExtension(); // register Messaging\n        MobileCore.start(new AdobeCallback() {\n          @Override\n          public void call(final Object o) {\n            // processing after start\n          }});\n      } catch (Exception e) {\n        //Log the exception\n      }\n    }\n}\n')),(0,r.mdx)(s,{platform:"ios-aep",task:"register",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-1"},"Swift"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    MobileCore.registerExtensions([Identity.self, Edge.self, Messaging.self], {\n        MobileCore.configureWith(appId: "yourLaunchEnvironmentID")\n    })\n  ...\n}\n')),(0,r.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},'// AppDelegate.m\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileEdgeIdentity.class, AEPMobileEdge.class, AEPMobileMessaging.class] completion:^{\n    [AEPMobileCore configureWithAppId: @"yourLaunchEnvironmentID"];\n  }];\n  ...\n}\n')),(0,r.mdx)(s,{platform:"ios-acp",task:"register",repeat:"1",mdxType:"Variant"}),(0,r.mdx)("p",null,"This extension is built on AEPCore (3.x) and is not compatible with ACPCore (2.x). Please follow the ",(0,r.mdx)("a",{parentName:"p",href:"../migrate-to-swift.md"},"guide for migrating to the Swift AEPCore"),"."),(0,r.mdx)(s,{platform:"android",task:"sync",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("p",null,"To retrieve the push token from Firebase Messaging Service, please read the tutorial on ",(0,r.mdx)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/android/client#retrieve-the-current-registration-token"},"retrieving the registration token")," within the Firebase documentation. After retrieving the push token, you can use the following API to sync it with Profile in Platform."),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"public static void setPushIdentifier(final String pushIdentifier);\n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Parameter")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Description")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"pushIdentifier")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The push token value.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"FirebaseMessaging.getInstance().getToken()\n        .addOnCompleteListener(new OnCompleteListener<String>() {\n            @Override\n            public void onComplete(@NonNull Task<String> task) {\n                if (task.isSuccessful()) {\n                    String token = task.getResult();\n                    MobileCore.setPushIdentifier(token);\n                }\n            }\n        });\n")),(0,r.mdx)(s,{platform:"ios-aep",task:"sync",repeat:"13",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-2"},"Swift"),(0,r.mdx)("p",null,"To retrieve the push token in iOS, please read the tutorial on ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns"},"registering your application")," within Apple's documentation. After retrieving the push token, you can use the following API to sync it with Profile in Platform."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"public static func setPushIdentifier(_ deviceToken: Data?)\n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Parameter")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Description")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"deviceToken")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Data"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The push token value.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {\n    MobileCore.setPushIdentifier(deviceToken)\n}\n")),(0,r.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"public static func setPushIdentifier(_ deviceToken: Data?)\n")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Parameter")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Description")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"deviceToken")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Data"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The push token value.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objc"},"- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken { \n    [AEPMobileCore setPushIdentifier:deviceToken];\n}\n")),(0,r.mdx)(s,{platform:"ios-acp",task:"sync",repeat:"1",mdxType:"Variant"}),(0,r.mdx)("p",null,"This extension is built on AEPCore (3.x) and is not compatible with ACPCore (2.x). Please follow the ",(0,r.mdx)("a",{parentName:"p",href:"../migrate-to-swift.md"},"guide for migrating to the Swift AEPCore"),"."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-journey-optimizer-index-md-8862a4353f3ab6c85438.js.map
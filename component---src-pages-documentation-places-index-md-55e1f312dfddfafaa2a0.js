"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3210,8798],{7464:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return s},default:function(){return u}});var t,o=n(87462),i=n(63366),r=(n(15007),n(64983)),l=n(91515),p=n(81669),d=["components"],s={},m=(t="TabsBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),c={_frontmatter:s},x=l.Z;function u(e){var a=e.components,n=(0,i.Z)(e,d);return(0,r.mdx)(x,(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adobe-experience-platform-location-service"},"Adobe Experience Platform Location Service"),(0,r.mdx)("p",null,"Adobe Experience Platform Location Service provides an SDK extension which allows you to act based on the location of your users. This extension is the interface to the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/places/using/web-service-api/places-web-services.html?lang=en"},"Location Service Web Services APIs"),"."),(0,r.mdx)("p",null,"The SDK extension listens for events that contain GPS coordinates and geofence region events, and dispatches new events that are processed by the Rules Engine. The SDK extension also retrieves and delivers a list of the nearest POI for the app data that retrieves from the APIs. The regions returned by the APIs are stored in cache and persistence, which allows limited offline processing."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Places")," is the mobile SDK supporting the Location Service."),(0,r.mdx)("h2",{id:"configure-the-places-extension-in-data-collection-ui"},"Configure the Places extension in Data Collection UI"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"In the Data Collection UI, from your mobile property, select the ",(0,r.mdx)("strong",{parentName:"li"},"Extensions")," tab."),(0,r.mdx)("li",{parentName:"ol"},"On the ",(0,r.mdx)("strong",{parentName:"li"},"Catalog")," tab, locate or search for the ",(0,r.mdx)("strong",{parentName:"li"},"Places")," extension, and select ",(0,r.mdx)("strong",{parentName:"li"},"Install"),"."),(0,r.mdx)("li",{parentName:"ol"},"Select the ",(0,r.mdx)("strong",{parentName:"li"},"POI Library (or libraries)")," you wish to use in the app."),(0,r.mdx)("li",{parentName:"ol"},"Select ",(0,r.mdx)("strong",{parentName:"li"},"Save"),"."),(0,r.mdx)("li",{parentName:"ol"},"Follow the publishing process to update SDK configuration.")),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.28301886792453%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c34d6225e18d81122ebe7d04df80dd16/dda86/config.webp 265w","/aep-mobile-sdkdocs/static/c34d6225e18d81122ebe7d04df80dd16/010e6/config.webp 530w","/aep-mobile-sdkdocs/static/c34d6225e18d81122ebe7d04df80dd16/df77d/config.webp 720w"],sizes:"(max-width: 720px) 100vw, 720px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/c34d6225e18d81122ebe7d04df80dd16/28773/config.png 265w","/aep-mobile-sdkdocs/static/c34d6225e18d81122ebe7d04df80dd16/a0177/config.png 530w","/aep-mobile-sdkdocs/static/c34d6225e18d81122ebe7d04df80dd16/242a6/config.png 720w"],sizes:"(max-width: 720px) 100vw, 720px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/c34d6225e18d81122ebe7d04df80dd16/242a6/config.png",alt:"Places extension configuration",title:"Places extension configuration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"add-the-aep-places-extension-to-your-app"},"Add the AEP Places extension to your app"),(0,r.mdx)("h3",{id:"download-and-import-the-places-extension"},"Download and import the Places extension"),(0,r.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(p.default,{query:"platform=android&task=download",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (AEP 3.x)"),(0,r.mdx)(p.default,{query:"platform=ios-aep&task=download",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (ACP 2.x)"),(0,r.mdx)(p.default,{query:"platform=ios-acp&task=download",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"register-the-places-extension-with-mobile-core"},"Register the Places extension with Mobile Core"),(0,r.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(p.default,{query:"platform=android&task=register",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (AEP 3.x)"),(0,r.mdx)(p.default,{query:"platform=ios-aep&task=register",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (ACP 2.x)"),(0,r.mdx)(p.default,{query:"platform=ios-acp&task=register",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"additional-location-service-resources"},"Additional Location Service resources"),(0,r.mdx)("p",null,"For more information about implementing and using Adobe Experience Platform Location Service, please see the following documentation links:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/places/using/release-notes.html?lang=en"},"Release notes")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/places/using/home.html?lang=en"},"Overview")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-extension/places-extension.html?lang=en"},"Places SDK implementation")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/cordova-acpplaces/blob/master/README.md"},"Cordova Places SDK GitHub readme")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/react-native-acpplaces/blob/master/README.md"},"React Native Places SDK GitHub readme")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/adobe/xamarin-acpplaces/blob/master/README.md"},"Xamarin Places SDK GitHub readme"))))}u.isMDXComponent=!0},81669:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return x}});var t,o=n(87462),i=n(63366),r=(n(15007),n(64983)),l=n(91515),p=["components"],d={},s=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),m={_frontmatter:d},c=l.Z;function x(e){var a=e.components,n=(0,i.Z)(e,p);return(0,r.mdx)(c,(0,o.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(s,{platform:"android",task:"download",repeat:"5",mdxType:"Variant"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Places extensions to your project using the app's Gradle file.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:1.+'\nimplementation 'com.adobe.marketing.mobile:places:1.+'\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core and Places extensions in your Application class.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Places;\n")),(0,r.mdx)(s,{platform:"ios-aep",task:"download",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Places extensions to your project using CocoaPods. Add the following pods in your ",(0,r.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"use_frameworks!\ntarget 'YourTargetApp' do\n   pod 'AEPCore'\n   pod 'AEPPlaces'       \nend\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core and Places modules:")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"// AppDelegate.swift\nimport AEPCore\nimport AEPPlaces\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"// AppDelegate.h\n@import AEPCore;\n@import AEPPlaces;\n")),(0,r.mdx)(s,{platform:"ios-acp",task:"download",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the Mobile Core and Places extensions to your project using CocoaPods. Add the following pods in your ",(0,r.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"use_frameworks!\ntarget 'YourTargetApp' do\n   pod 'ACPCore', '~> 2.0'\n   pod 'ACPPlaces', '~> 1.0'\nend\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Mobile Core and Places modules:")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"// AppDelegate.swift\nimport ACPCore\nimport ACPPlaces\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// AppDelegate.h\n#import "ACPCore.h"\n#import "ACPPlaces.h"\n')),(0,r.mdx)(s,{platform:"android",task:"register",repeat:"2",mdxType:"Variant"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Java")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class MobileApp extends Application {\n\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        MobileCore.setApplication(this);\n        try {            \n            Places.registerExtension();\n            // register other extensions\n            MobileCore.start(new AdobeCallback () {\n                @Override\n                public void call(Object o) {\n                    MobileCore.configureWithAppID("yourAppId");\n                }\n            });    \n        } catch (Exception e) {\n            //Log the exception\n         }\n    }\n}\n')),(0,r.mdx)(s,{platform:"ios-aep",task:"register",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    MobileCore.registerExtensions([Places.self], {\n        MobileCore.configureWith(appId: "yourAppId")\n    })\n    ...\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// AppDelegate.m\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobilePlaces.class] completion:^{\n        ...\n    }];\n    [AEPMobileCore configureWithAppId: @"yourAppId"];\n    ...\n}\n')),(0,r.mdx)(s,{platform:"ios-acp",task:"register",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\nfunc application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    ACPPlaces.registerExtension()\n    ACPCore.configure(withAppId: "yourAppId")\n    ACPCore.start()\n  })\n  ...\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'// AppDelegate.m\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [ACPPlaces registerExtension];\n    [ACPCore configureWithAppId:@"yourAppId"];    \n    [ACPCore start];  \n    ...\n}\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-places-index-md-55e1f312dfddfafaa2a0.js.map
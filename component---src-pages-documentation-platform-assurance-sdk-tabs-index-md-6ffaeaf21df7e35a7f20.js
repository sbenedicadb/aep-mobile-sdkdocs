"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7913],{48761:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return x}});var a=t(87462),i=t(63366),o=(t(15007),t(64983)),s=t(91515),r=["components"],p={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},d=l("Variant"),c=l("InlineNestedAlert"),m={_frontmatter:p},u=s.Z;function x(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.mdx)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(d,{platform:"android",task:"import-library",repeat:"5",mdxType:"Variant"}),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Add the following libraries in your project's ",(0,o.mdx)("inlineCode",{parentName:"li"},"build.gradle")," file:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:2.+'\nimplementation 'com.adobe.marketing.mobile:assurance:2.+'\n")),(0,o.mdx)(c,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,o.mdx)("p",null,"Using dynamic dependency versions is ",(0,o.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,o.mdx)("a",{parentName:"p",href:"../resources/manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information. ")),(0,o.mdx)("ol",{start:2},(0,o.mdx)("li",{parentName:"ol"},"Import the Assurance library along with the other Mobile SDK libraries:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.Assurance;\nimport com.adobe.marketing.mobile.MobileCore;\n")),(0,o.mdx)(d,{platform:"ios",task:"import-library",repeat:"7",mdxType:"Variant"}),(0,o.mdx)("p",null,"Add the library to your project via your ",(0,o.mdx)("a",{parentName:"p",href:"https://cocoapods.org/pods/AEPAssurance"},"Cocoapods")," ",(0,o.mdx)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-pod"},"pod 'AEPCore','~> 3.0'\npod 'AEPAssurance','~> 3.0'\n")),(0,o.mdx)("p",null,"Import the Assurance extension along with the other Adobe Mobile SDK extensions:"),(0,o.mdx)("h4",{id:"swift"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPAssurance\n")),(0,o.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPAssurance;\n")),(0,o.mdx)(d,{platform:"android",task:"register-assurance",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApp extends Application {\n    private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        MobileCore.setApplication(this);\n        MobileCore.setLogLevel(LoggingMode.VERBOSE);\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n        List<Class<? extends Extension>> extensions = Arrays.asList(\n                Assurance.EXTENSION,...);\n        MobileCore.registerExtensions(extensions, o -> {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized");\n        });\n    }\n}\n')),(0,o.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'class MyApp : Application() {\n\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.setLogLevel(LoggingMode.VERBOSE)\n        MobileCore.configureWithAppID("YOUR_APP_ENVIRONMENT_ID")\n\n        val extensions = listOf(Assurance.EXTENSION, ...)\n        MobileCore.registerExtensions(extensions) {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")\n        }\n    }\n}\n')),(0,o.mdx)(d,{platform:"ios",task:"register-assurance",repeat:"5",mdxType:"Variant"}),(0,o.mdx)("p",null,"To start using the extension library, you must first register the extension with the ",(0,o.mdx)("a",{parentName:"p",href:"../mobile-core/index.md"},"Mobile Core")," extension."),(0,o.mdx)("h4",{id:"swift-1"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n\n        let extensions = [Assurance.self, ...]\n        MobileCore.registerExtensions(extensions, {\n            // set app id from the Data Collection UI    \n                MobileCore.configureWith(appId: "yourAppId")  \n        })\n\n        return true\n    }\n')),(0,o.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n\n    NSArray *extensionsToRegister = @[AEPMobileAssurance.class, ...];\n    [AEPMobileCore registerExtensions:extensionsToRegister completion:^{\n        // set app id from the Data Collection UI\n        [AEPMobileCore configureWithAppId: @"yourAppId"];\n    }];\n\n    return YES;\n}\n')),(0,o.mdx)(d,{platform:"android",task:"implement-assurance",repeat:"1",mdxType:"Variant"}),(0,o.mdx)("p",null,"Deep linking is the best way to connnect to an Assurance session when using the Android SDK. Assurance SDK on Android is already setup to handle incoming intents to your app. You can ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking"},"add an intent filter for incoming links in your app")," to complete the deep link configuration. The combination of ",(0,o.mdx)("inlineCode",{parentName:"p"},"android:host")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"android:scheme")," (in the form of ",(0,o.mdx)("inlineCode",{parentName:"p"},"<host>://<scheme>"),") for this intent filter will serve as the Base URL while creating a session in the ",(0,o.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/assurance"},"Adobe Experience Platform Assurance UI")),(0,o.mdx)(d,{platform:"ios",task:"implement-assurance",repeat:"13",mdxType:"Variant"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"./api-reference.md#startsession"},"startSession")," API needs to be called to begin an Adobe Experience Platform Assurance session. You should call this API when the app launches with a URL (see code snippet below for sample usage). When called, SDK displays a PIN authentication overlay to begin a session. "),(0,o.mdx)("h4",{id:"swift-2"},"Swift"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {\n        Assurance.startSession(url: url)\n        return true\n    }\n")),(0,o.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"scene(_:openURLContexts:)")," method as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {\n        // Called when the app in background is opened with a deep link.\n        if let deepLinkURL = URLContexts.first?.url {\n            Assurance.startSession(url: deepLinkURL)\n        }\n    }\n\n    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {\n        // Called when the app launches with the deep link\n        if let deepLinkURL = connectionOptions.urlContexts.first?.url {\n            Assurance.startSession(url: deepLinkURL)\n        }\n    }\n")),(0,o.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Syntax")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"static func startSession(url: URL?)\n")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Example")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {\n    [AEPMobileAssurance startSessionWithUrl:url];\n    return true;\n}\n")),(0,o.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,o.mdx)("inlineCode",{parentName:"p"},"scene(_:openURLContexts:)")," method as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objectivec"},"\n- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {    \n    NSURL *deepLinkURL = connectionOptions.URLContexts.allObjects.firstObject.URL;\n    [AEPMobileAssurance startSessionWithUrl:deepLinkURL];\n}\n\n\n- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {\n    [AEPMobileAssurance startSessionWithUrl:URLContexts.allObjects.firstObject.URL];\n}\n")))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-platform-assurance-sdk-tabs-index-md-6ffaeaf21df7e35a7f20.js.map
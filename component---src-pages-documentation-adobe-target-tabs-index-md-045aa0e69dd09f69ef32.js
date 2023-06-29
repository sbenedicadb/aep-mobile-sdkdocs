"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1227],{71784:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return g}});var r=t(87462),n=t(63366),i=(t(15007),t(64983)),d=t(91515),o=["components"],p={},l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",a)}},m=l("Variant"),c=l("InlineNestedAlert"),s={_frontmatter:p},u=d.Z;function g(e){var a=e.components,t=(0,n.Z)(e,o);return(0,i.mdx)(u,(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)(m,{platform:"android",task:"add",repeat:"4",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Add the Mobile Core, Identity and Target extensions to your project using the app's Gradle file.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:identity'\nimplementation 'com.adobe.marketing.mobile:target'\n")),(0,i.mdx)(c,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,i.mdx)("p",null,"Using dynamic dependency versions is ",(0,i.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,i.mdx)("a",{parentName:"p",href:"../manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,i.mdx)(m,{platform:"ios",task:"add",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Add the AEPCore, AEPIdentity, and AEPTarget CocoaPods to your project via your ",(0,i.mdx)("inlineCode",{parentName:"li"},"Podfile"),".")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'AEPCore','~>3.0'    \npod 'AEPIdentity','~>3.0'\npod 'AEPTarget','~>3.0'\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Import the Target and Identity libraries.")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Swift")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"    import AEPCore\n    import AEPTarget\n    import AEPIdentity\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Objective-C")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"    @import AEPCore\n    @import AEPTarget\n    @import AEPIdentity\n")),(0,i.mdx)(m,{platform:"android",task:"register",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java-1"},"Java"),(0,i.mdx)("p",null,"In your Application's ",(0,i.mdx)("inlineCode",{parentName:"p"},"onCreate()")," method, after calling the ",(0,i.mdx)("inlineCode",{parentName:"p"},"setApplication()")," method, register Target with Mobile Core."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Target;\nimport com.adobe.marketing.mobile.Identity;\nimport com.adobe.marketing.mobile.AdobeCallback;\n\npublic class MainApp extends Application {\n\n  private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        MobileCore.setApplication(this);\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n        MobileCore.registerExtensions(\n            Arrays.asList(Target.EXTENSION, Identity.EXTENSION),\n            o -> Log.d("MainApp", "Adobe Target Mobile SDK was initialized.")\n        );\n    }\n}\n')),(0,i.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Target\nimport com.adobe.marketing.mobile.Identity\nimport com.adobe.marketing.mobile.AdobeCallback\n\nclass MainApp : Application() {\n\n  private var ENVIRONMENT_FILE_ID: String = "YOUR_APP_ENVIRONMENT_ID"\n\n    override fun onCreate() {\n        super.onCreate()\n\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n\n        MobileCore.registerExtensions(\n          listOf(Target.EXTENSION, Identity.EXTENSION)\n        ) {\n          Log.d("MainApp", "Adobe Target Mobile SDK was initialized")\n        }\n    }\n\n}\n')),(0,i.mdx)(m,{platform:"ios",task:"register",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"swift"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {    \n  MobileCore.registerExtensions([Target.self, Identity.self]) {\n       //Completion callback\n       // Use the App id assigned to this application via Adobe Data Collection UI\n       MobileCore.configureWith(appId: "yourAppId")\n  }\n  return true\n}\n')),(0,i.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,i.mdx)("p",null,"In your app's ",(0,i.mdx)("inlineCode",{parentName:"p"},"didFinishLaunchingWithOptions")," function, register the Target extension with Mobile Core:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions: @[AEPMobileTarget.class, AEPMobileIdentity.class] completion:^{\n        //Completion callback\n        // Use the app ID assigned to this application via Data Collection UI\n        [AEPMobileCore configureWithAppId: @"yourAppId"];\n    }];\n\n    return YES;\n}\n')),(0,i.mdx)(m,{platform:"android",task:"target-order",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java-2"},"Java"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"public TargetOrder(final String id, final double total, final List<String> purchasedProductIds)\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'List<String> purchasedProductIds = new ArrayList<String>();\npurchasedProductIds.add("34");\npurchasedProductIds.add("125");\nTargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);\n')),(0,i.mdx)(m,{platform:"ios",task:"target-order",repeat:"10",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"swift-1"},"Swift"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"public init(id: String, total: Double = 0, purchasedProductIds: [String]? = nil)\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'let order = TargetOrder(id: "id1", total: 1.0, purchasedProductIds: ["ppId1"])\n')),(0,i.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (nonnull instancetype) initWithId: (nonnull NSString*) id total: (double) total purchasedProductIds: (nullable NSArray<NSString*>*) purchasedProductIds;\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},'AEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"id1" total:1.0 purchasedProductIds:@[@"ppId1"]];\n')),(0,i.mdx)(m,{platform:"android",task:"target-product",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java-3"},"Java"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"public TargetProduct(final String id, final String categoryId)\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'TargetProduct targetProduct = new TargetProduct("123", "Books");\n')),(0,i.mdx)(m,{platform:"ios",task:"target-product",repeat:"10",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"swift-2"},"Swift"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"public init(productId: String, categoryId: String? = nil)\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'let product = TargetProduct(productId: "pId1", categoryId: "cId1")\n')),(0,i.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (nonnull instancetype) initWithProductId:(nonnull NSString*) productId categoryId:(nullable NSString*) categoryId;\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},'AEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"pId1" categoryId:@"cId1"];\n')),(0,i.mdx)(m,{platform:"android",task:"target-parameters",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"java-4"},"Java"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'TargetParameters targetParameters = new TargetParameters.Builder()\n.parameters(new HashMap<String, String>())\n.profileParameters(new HashMap<String, String>())\n.product(new TargetProduct("productId", "productCategoryId"))\n.order(new TargetOrder("orderId", 0.0, new ArrayList<String>()))\n.build();\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'List<String> purchasedProductIds = new ArrayList<String>();\npurchasedProductIds.add("34");\npurchasedProductIds.add("125");\nTargetOrder targetOrder = new TargetOrder("123", 567.89, purchasedProductIds);\n\nTargetProduct targetProduct = new TargetProduct("123", "Books");\n\nMap<String, String> mboxParameters = new HashMap<String, String>();\nmboxParameters1.put("status", "platinum");\n\nMap<String, String> profileParameters = new HashMap<String, String>();\nprofileParameters1.put("gender", "male");\n\nTargetParameters targetParameters = new TargetParameters.Builder()\n.parameters(mboxParameters)\n.profileParameters(profileParameters)\n.product(targetProduct)\n.order(targetOrder)\n.build();\n')),(0,i.mdx)(m,{platform:"ios",task:"target-parameters",repeat:"10",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"swift-3"},"Swift"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"public init(parameters: [String: String]? = nil, profileParameters: [String: String]? = nil, order: TargetOrder? = nil, product: TargetProduct? = nil)\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'let mboxParameters = [\n"status": "Platinum"\n]\nlet profileParameters = [\n"gender": "female"\n]\n\nlet order = TargetOrder(id: "id1", total: 1.0, purchasedProductIds: ["ppId1"])\n\nlet product = TargetProduct(productId: "pId1", categoryId: "cId1")\n\nlet targetParameters = TargetParameters(parameters: mboxParameters, profileParameters: profileParameters, order: order, product: product))\n')),(0,i.mdx)("h4",{id:"objective-c-3"},"Objective-C"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (nonnull instancetype) initWithParameters:(nullable NSDictionary<NSString*, NSString*>*) parameters profileParameters:(nullable NSDictionary<NSString*, NSString*>*) profileParameters order:(nullable AEPTargetOrder*) order product:(nullable AEPTargetProduct*) product;\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},'NSDictionary *mboxParameters = @{@"status":@"Platinum"};\nNSDictionary *profileParameters = @{@"gender":@"female"};\n\nAEPTargetProduct *product =[[AEPTargetProduct alloc] initWithProductId:@"pId1" categoryId:@"cId1"];\n\nAEPTargetOrder *order = [[AEPTargetOrder alloc] initWithId:@"id1" total:1.0 purchasedProductIds:@[@"ppId1"]];\n\nAEPTargetParameters * targetParams = [[AEPTargetParameters alloc] initWithParameters:mboxParameters profileParameters:profileParameters order:order product:product];\n')),(0,i.mdx)(m,{platform:"android",task:"visual-preview",repeat:"2",mdxType:"Variant"}),(0,i.mdx)("p",null,"On Android, when the application is launched as a result of a deep link, the Mobile Core's ",(0,i.mdx)("a",{parentName:"p",href:"../../mobile-core/api-reference.md#collectlaunchinfo"},"collectLaunchInfo")," API is internally invoked, and the Target activity and deep link information is extracted from the Intent extras."),(0,i.mdx)("p",null,"The SDK can only collect information from the launching Activity if ",(0,i.mdx)("a",{parentName:"p",href:"../../mobile-core/api-reference.md#setapplication"},"setApplication")," has been called. Setting the Application is only necessary on an Activity that is also an entry point for your application. However, setting the Application on each Activity has no negative impact and ensures that the SDK always has the necessary reference to your Application. We recommend that you call ",(0,i.mdx)("inlineCode",{parentName:"p"},"setApplication")," API in each of your Activities."),(0,i.mdx)(m,{platform:"ios",task:"visual-preview",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("p",null,"On iOS, the Mobile Core's ",(0,i.mdx)("a",{parentName:"p",href:"../../mobile-core/api-reference.md#collectlaunchinfo"},"collectLaunchInfo")," API can be invoked with the Target preview deep link as shown below:"),(0,i.mdx)("h4",{id:"swift-4"},"Swift"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'    MobileCore.collectLaunchInfo(["adb_deeplink" : "com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"])\n')),(0,i.mdx)("h4",{id:"objective-c-4"},"Objective-C"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},' [AEPMobileCore collectLaunchInfo:@{@"adb_deeplink" : @"com.adobe.targetpreview://app.adobetarget.com?at_preview_token=tokenFromTarget"}];\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-target-tabs-index-md-045aa0e69dd09f69ef32.js.map
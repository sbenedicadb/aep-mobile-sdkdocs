"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4641],{41528:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return f}});var a=t(87462),i=t(63366),o=(t(15007),t(64983)),r=t(91515),d=["components"],p={},s=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},c=s("Variant"),m=s("InlineNestedAlert"),l={_frontmatter:p},g=r.Z;function f(e){var n=e.components,t=(0,i.Z)(e,d);return(0,o.mdx)(g,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(c,{platform:"android",task:"install",repeat:"3",mdxType:"Variant"}),(0,o.mdx)("p",null,"Add the Mobile Core, Edge, Identity for Edge Network and Optimize dependencies in your app's gradle file."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:2.+'\nimplementation 'com.adobe.marketing.mobile:edge:2.+'\nimplementation 'com.adobe.marketing.mobile:edgeidentity:2.+'\nimplementation 'com.adobe.marketing.mobile:optimize:2.+'\n")),(0,o.mdx)(m,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,o.mdx)("p",null,"Using dynamic dependency versions is ",(0,o.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,o.mdx)("a",{parentName:"p",href:"../manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information. ")),(0,o.mdx)(c,{platform:"ios",task:"install",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("p",null,"Configure your app target to fetch Mobile Core, Edge, Identity for Edge Network and Optimize from Cocoapods by specifying the following pod dependencies in your ",(0,o.mdx)("inlineCode",{parentName:"p"},"Podfile"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"platform :ios, '10.0'\n\nuse_frameworks!\ntarget 'YourAppTarget' do\n    pod 'AEPCore'\n    pod 'AEPEdge'\n    pod 'AEPEdgeIdentity'\n    pod 'AEPOptimize'\nend\n")),(0,o.mdx)(c,{platform:"android",task:"register",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Edge;\nimport com.adobe.marketing.mobile.edge.identity.Identity;\nimport com.adobe.marketing.mobile.optimize.Optimize;\nimport com.adobe.marketing.mobile.AdobeCallback;\n\npublic class MainApp extends Application {\n\n  private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n    @Override\n    public void onCreate() {\n        super.onCreate();\n\n        MobileCore.setApplication(this);\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n        MobileCore.registerExtensions(\n            Arrays.asList(Edge.EXTENSION, Identity.EXTENSION, Optimize.EXTENSION),\n            o -> Log.d("MainApp", "Adobe Journey Optimizer - Decisioning Mobile SDK was initialized.")\n        );\n    }\n}\n')),(0,o.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Edge\nimport com.adobe.marketing.mobile.edge.identity.Identity\nimport com.adobe.marketing.mobile.optimize.Optimize\nimport com.adobe.marketing.mobile.AdobeCallback\n\nclass MainApp : Application() {\n\n  private var ENVIRONMENT_FILE_ID: String = "YOUR_APP_ENVIRONMENT_ID"\n\n    override fun onCreate() {\n        super.onCreate()\n\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n\n        MobileCore.registerExtensions(\n          listOf(Edge.EXTENSION, Identity.EXTENSION, Optimize.EXTENSION)\n        ) {\n          Log.d("MainApp", "Adobe Experience Platform Mobile SDK was initialized")\n        }\n    }\n\n}\n')),(0,o.mdx)(c,{platform:"ios",task:"register",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"// AppDelegate.swift\n\nimport AEPCore\nimport AEPEdge\nimport AEPEdgeIdentity\nimport AEPOptimize\n\n@UIApplicationMain\nfinal class AppDelegate: UIResponder, UIApplicationDelegate {\n  var window: UIWindow?\n\n  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {\n\n      // register the extensions\n      MobileCore.registerExtensions([Edge.self, AEPEdgeIdentity.Identity.self, Optimize.self]) {\n        MobileCore.configureWith(appId: <YOUR_ENVIRONMENT_FILE_ID>) // Replace <YOUR_ENVIRONMENT_FILE_ID> with a String containing your own ID.\n      }\n\n      return true\n  }\n}\n")),(0,o.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},"// AppDelegate.m\n\n@import AEPCore;\n@import AEPEdge;\n@import AEPEdgeIdentity;\n@import AEPOptimize;\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n\n    // register the extensions\n    [AEPMobileCore registerExtensions:@[AEPMobileEdge.class, AEPMobileEdgeIdentity.class, , AEPMobileOptimize.class] completion:^{\n      [AEPMobileCore configureWithAppId: <YOUR_ENVIRONMENT_FILE_ID>]; // Replace <YOUR_ENVIRONMENT_FILE_ID> with a String containing your own ID.\n  }];\n  ...\n}\n")),(0,o.mdx)(c,{platform:"android",task:"decisionscope",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-1"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'final DecisionScope decisionScope = DecisionScope("xcore:offer-activity:1111111111111111", "xcore:offer-placement:1111111111111111", 3);\n')),(0,o.mdx)(c,{platform:"ios",task:"decisionscope",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-1"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'let decisionScope = DecisionScope(activityId: "xcore:offer-activity:1111111111111111", \n                                  placementId: "xcore:offer-placement:1111111111111111",\n                                  itemCount: 3)\n')),(0,o.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},'AEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithActivityId:@"xcore:offer-activity:1111111111111111"         \n                                                                   placementId:@"xcore:offer-placement:1111111111111111" \n                                                                     itemCount:3];\n')),(0,o.mdx)(c,{platform:"android",task:"encodedscope",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-2"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'final DecisionScope decisionScope = DecisionScope("eyJ4ZG06YWN0aXZpdHlJZCI6Inhjb3JlOm9mZmVyLWFjdGl2aXR5OjEyYmEyZjM4MWJjYTY3NWUiLCJ4ZG06cGxhY2VtZW50SWQiOiJ4Y29yZTpvZmZlci1wbGFjZW1lbnQ6MTJiOWEwMDA1NTUwNzM1NyIsICJ4ZG06aXRlbUNvdW50IjozfQ==");\n')),(0,o.mdx)(c,{platform:"ios",task:"encodedscope",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-2"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'let decisionScope = DecisionScope(name: "eyJ4ZG06YWN0aXZpdHlJZCI6Inhjb3JlOm9mZmVyLWFjdGl2aXR5OjEyYmEyZjM4MWJjYTY3NWUiLCJ4ZG06cGxhY2VtZW50SWQiOiJ4Y29yZTpvZmZlci1wbGFjZW1lbnQ6MTJiOWEwMDA1NTUwNzM1NyIsICJ4ZG06aXRlbUNvdW50IjozfQ==")\n')),(0,o.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},'AEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithName:@"eyJ4ZG06YWN0aXZpdHlJZCI6Inhjb3JlOm9mZmVyLWFjdGl2aXR5OjEyYmEyZjM4MWJjYTY3NWUiLCJ4ZG06cGxhY2VtZW50SWQiOiJ4Y29yZTpvZmZlci1wbGFjZW1lbnQ6MTJiOWEwMDA1NTUwNzM1NyIsICJ4ZG06aXRlbUNvdW50IjozfQ=="];\n')),(0,o.mdx)(c,{platform:"android",task:"target-location",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-3"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'final DecisionScope decisionScope = DecisionScope("myTargetLocation");\n')),(0,o.mdx)(c,{platform:"ios",task:"target-location",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-3"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'let decisionScope = DecisionScope(name: "myTargetLocation")\n')),(0,o.mdx)("h4",{id:"objective-c-3"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},'AEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithName:@"myTargetLocation"];\n')),(0,o.mdx)(c,{platform:"android",task:"target-parameters",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-4"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'final Map<String, Object> data = new HashMap<>();\nfinal Map<String, String> targetParameters = new HashMap<>();\n\n// Add mbox parameters\ntargetParameters.put("someKey", "someValue");\n\n// Add profile parameters - prefix with profile.\ntargetParameters.put("profile.membershipLevel", "platinum");\n\n// Add product parameters\ntargetParameters.put("productId", "111");\ntargetParameters.put("categoryId", "Books");\n\n// Add order parameters\ntargetParameters.put("orderId", "10");\ntargetParameters.put("orderTotal", "110.56");\ntargetParameters.put("purchasedProductIds", "111");\n\ndata.put("__adobe", new HashMap<String, Object>() {\n  {\n    put("target", targetParameters);\n  }\n});\n\n\nfinal DecisionScope decisionScope = DecisionScope("myTargetLocation") // Target location (or mbox)\n\nfinal List<DecisionScope> decisionScopes = new ArrayList<>();\ndecisionScopes.add(decisionScope);\n\nOptimize.updatePropositions(decisionScopes, null, data);\n')),(0,o.mdx)(c,{platform:"ios",task:"target-parameters",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-4"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'var data: [String: Any] = [:]\nvar targetParameters: [String: String] = [:]\n\n// Add mbox parameters\ntargetParameters["someKey"] = "someValue"\n\n// Add profile parameters - prefix with profile.\ntargetParameters["profile.membershipLevel"] = "platinum"\n\n// Add product parameters\ntargetParameters["productId"] = "111"\ntargetParameters["categoryId"] = "Books"\n\n// Add order parameters\ntargetParameters["orderId"] = "10"\ntargetParameters["orderTotal"] = "110.56"\ntargetParameters["purchasedProductIds"] = "111"\n\ndata["__adobe"] = [\n  "target": targetParameters\n]\n\nlet decisionScope = DecisionScope(name: "myTargetLocation") // Target location (or mbox)\nOptimize.updatePropositions(for: [decisionScope] withXdm: nil andData: data)\n')),(0,o.mdx)("h4",{id:"objective-c-4"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},'NSMutableDictionary* data = [NSMutableDictionary dictionary];\nNSMutableDictionary* targetParameters = [NSMutableDictionary dictionary];\n\n// Add mbox parameters\ntargetParameters[@"someKey"] = @"someValue";\n\n// Add profile parameters - prefix with profile.\ntargetParameters[@"profile.membershipLevel"] = @"platinum";\n\n// Add product parameters\ntargetParameters[@"productId"] = @"111";\ntargetParameters[@"categoryId"] = @"Books";\n\n// Add order parameters\ntargetParameters[@"orderId"] = @"10";\ntargetParameters[@"orderTotal"] = @"110.56";\ntargetParameters[@"purchasedProductIds"] = @"111";\n\n[data setObject:[NSDictionary dictionaryWithObject:targetParameters forKey:@"target"] forKey:@"__adobe"];\n\nAEPDecisionScope* decisionScope = [[AEPDecisionScope alloc] initWithName:@"myTargetLocation"]; // Target location (or mbox)\n[AEPMobileOptimize updatePropositions:@[decisionScope] withXdm:nil andData:data];\n')),(0,o.mdx)(c,{platform:"android",task:"target-tpid",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-5"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'final IdentityItem item = new IdentityItem("1111", AuthenticatedState.AUTHENTICATED, true);\nfinal IdentityMap identityMap = new IdentityMap();\nidentityMap.addItem(item, "userCRMID") // userCRMID being used as Third Party ID\nIdentity.updateIdentities(identityMap);\n')),(0,o.mdx)(c,{platform:"ios",task:"target-tpid",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-5"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'let identityMap = IdentityMap()\nidentityMap.add(item: IdentityItem(id: "1111", authenticatedState: AuthenticatedState.authenticated, primary: true),\n                withNamespace: "userCRMID") // userCRMID being used as Third Party ID\nIdentity.updateIdentities(with: identityMap)\n')),(0,o.mdx)("h4",{id:"objective-c-5"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},'AEPIdentityItem *item = [[AEPIdentityItem alloc] initWithId:@"1111" authenticatedState:AEPAuthenticatedStateAuthenticated primary:true];\n\nAEPIdentityMap *identityMap = [[AEPIdentityMap alloc] init];\n[identityMap addItem:item withNamespace:@"userCRMID"]; // userCRMID being used as Third Party ID\n\n[AEPMobileEdgeIdentity updateIdentities:identityMap];\n')),(0,o.mdx)(c,{platform:"android",task:"proposition-tracking-offer",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-6"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public class Offer {\n  ...\n  /**\n    * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the display interaction data for the\n    * given {@code Proposition} offer.\n    */\n  public void displayed() {...}\n\n  /**\n    * Dispatches an event for the Edge network extension to send an Experience Event to the Edge network with the tap interaction data for the\n    * given {@code Proposition} offer.\n    */\n  public void tapped() {...}\n}\n")),(0,o.mdx)(c,{platform:"ios",task:"proposition-tracking-offer",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-6"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"public extension Offer {\n    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the display interaction data for the given proposition item.\n    func displayed() {...}\n\n    /// Dispatches an event for the Edge extension to send an Experience Event to the Edge network with the tap interaction data for the given proposition item.\n    func tapped() {...}\n}\n")),(0,o.mdx)(c,{platform:"android",task:"send-event-offer",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-7"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"offer.displayed(); // Sends an Offer display notification to Edge network\n")),(0,o.mdx)(c,{platform:"ios",task:"send-event-offer",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-7"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"offer.displayed() // Sends an Offer display notification to Edge network\n")),(0,o.mdx)("h4",{id:"objective-c-6"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},"[offer displayed]; // Sends an Offer display notification to Edge network\n")),(0,o.mdx)(c,{platform:"android",task:"proposition-tracking-edge",repeat:"3",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-8"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public class Offer {\n  ...\n  /**\n    * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code Proposition} item.\n    *\n    * The returned XDM data does contain the {@code eventType} for the Experience Event with value {@code decisioning.propositionDisplay}.\n    *\n    * Note: The Edge sendEvent API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, and override\n    * dataset identifier.\n    *\n    * @return {@code Map<String, Object>} containing the XDM data for the proposition interaction.\n    */\n  public Map<String, Object> generateDisplayInteractionXdm() {...}\n\n  /**\n    * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Interactions} field group from this {@code Proposition} offer.\n    *\n    * The returned XDM data contains the {@code eventType} for the Experience Event with value {@code decisioning.propositionInteract}.\n    *\n    * Note: The Edge sendEvent API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, and override\n    * dataset identifier.\n    *\n    * @return {@code Map<String, Object>} containing the XDM data for the proposition interaction.\n    */\n  public Map<String, Object> generateTapInteractionXdm() {...}\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},"public class Proposition {\n  ...\n  /**\n    * Generates a map containing XDM formatted data for {@code Experience Event - Proposition Reference} field group from this {@code Proposition}.\n    *\n    * The returned XDM data does not contain {@code eventType} for the Experience Event.\n    *\n    * @return {@code Map<String, Object>} containing the XDM data for the proposition reference.\n    */\n  public Map<String, Object> generateReferenceXdm() {...}\n}\n")),(0,o.mdx)(c,{platform:"ios",task:"proposition-tracking-edge",repeat:"3",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-8"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"public extension Offer {\n  /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.\n  ///\n  /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.\n  ///\n  /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionDisplay`.\n  /// - Returns A dictionary containing XDM data for the propositon interactions.\n  func generateDisplayInteractionXdm() -> [String: Any] {...}\n\n  /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Interactions` field group from the given proposition option.\n  ///\n  /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.\n  ///\n  /// - Note: The returned XDM data also contains the `eventType` for the Experience Event with value `decisioning.propositionInteract`.\n  /// - Returns A dictionary containing XDM data for the propositon interactions.\n  func generateTapInteractionXdm() -> [String: Any] {...}\n}\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"public extension Proposition {\n  /// Creates a dictionary containing XDM formatted data for `Experience Event - Proposition Reference` field group from the given proposition.\n  ///\n  /// The Edge `sendEvent(experienceEvent:_:)` API can be used to dispatch this data in an Experience Event along with any additional XDM, free-form data, or override dataset identifier.\n  ///\n  /// - Note: The returned XDM data does not contain an `eventType` for the Experience Event.\n  /// - Returns A dictionary containing XDM data for the propositon reference.\n  func generateReferenceXdm() -> [String: Any] {...}\n}\n")),(0,o.mdx)(c,{platform:"android",task:"send-event-edge",repeat:"2",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"java-9"},"Java"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-java"},'// When a proposition is retrieved using getPropositions API or onUpdatePropositions API callback \n// and the corresponding offer is displayed, invoke method on Offer object to get the XDM data.\n\nfinal Map<String, Object> displayInteractionXdm = offer.generateDisplayInteractionXdm() // Offer display tracking XDM\nfinal Map<String, Object> additionalData = new HashMap<>();\nadditionalData.put("someDataKey", "someDataValue");\n\nfinal ExperienceEvent experienceEvent = new ExperienceEvent.Builder().setXdmSchema(displayInteractionXdm).setData(additionalData).build();\nEdge.sendEvent(experienceEvent, null)\n')),(0,o.mdx)(c,{platform:"ios",task:"send-event-edge",repeat:"4",mdxType:"Variant"}),(0,o.mdx)("h4",{id:"swift-9"},"Swift"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'// When a proposition is retrieved using getPropositions API or onUpdatePropositions API callback \n// and the corresponding offer is displayed, invoke method on Offer object to get the XDM data.\n\nlet displayInteractionXdm = offer.generateDisplayInteractionXdm() // Offer display tracking XDM\nlet additionalData: [String: Any] = ["someDataKey": "someDataValue"]\n\nlet experienceEvent = ExperienceEvent(xdm: displayInteractionXdm, data: additionalData)\nEdge.sendEvent(experienceEvent)\n')),(0,o.mdx)("h4",{id:"objective-c-7"},"Objective-C"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},'// When a proposition is retrieved using getPropositions API or onUpdatePropositions API callback \n// and the corresponding offer is displayed, invoke method on Offer object to get the XDM data.\n\nNSDictionary* displayInteractionXdm = [offer generateDisplayInteractionXdm];\nNSDictionary* additionalData = @{@"someDataKey": @"someDataValue"};\n\nAEPExperienceEvent* experienceEvent = [[AEPExperienceEvent alloc] initWithXdm:displayInteractionXdm data:additionalData datasetIdentifier:nil];\n[AEPMobileEdge sendExperienceEvent:event completion:nil];\n')))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=3db295acd419caa39db2930d661a1fc4bcb369ef-29f40206f0a9e15d3885.js.map
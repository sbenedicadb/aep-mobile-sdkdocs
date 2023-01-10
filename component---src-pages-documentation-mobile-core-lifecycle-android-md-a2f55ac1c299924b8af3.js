"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9697],{46420:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return u}});var i,n=t(87462),o=t(63366),d=(t(15007),t(64983)),c=t(91515),r=["components"],l={},s=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),p={_frontmatter:l},m=c.Z;function u(e){var a=e.components,t=(0,o.Z)(e,r);return(0,d.mdx)(m,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"lifecycle-extension-in-android"},"Lifecycle extension in Android"),(0,d.mdx)("h2",{id:"implementing-lifecycle-metrics-in-android"},"Implementing Lifecycle Metrics in Android"),(0,d.mdx)("p",null,"For implementation details, please reference the guide on ",(0,d.mdx)("a",{parentName:"p",href:"./index.md#register-lifecycle-with-mobile-core-and-add-appropriate-start-pause-calls"},"registering Lifecycle with Mobile Core and adding the appropriate start/pause calls"),"."),(0,d.mdx)("h2",{id:"tracking-app-crashes-in-android"},"Tracking app crashes in Android"),(0,d.mdx)("p",null,"This information helps you understand how crashes are tracked and the best practices to handle false crashes."),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"App crashes are tracked as part of lifecycle metrics. Before you can track crashes, add the library to your project."),(0,d.mdx)("p",null,"When lifecycle metrics are implemented, a call is made to ",(0,d.mdx)("inlineCode",{parentName:"p"},"MobileCore.lifecycleStart(additionalContextData)")," in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"OnResume")," method of each activity. In the ",(0,d.mdx)("inlineCode",{parentName:"p"},"onPause")," method, a call is made to ",(0,d.mdx)("inlineCode",{parentName:"p"},"MobileCore.lifecyclePause()"),". In the ",(0,d.mdx)("inlineCode",{parentName:"p"},"MobileCore.lifecyclePause()")," method, a flag is set to indicate a graceful exit. When the app is launched again or resumed, ",(0,d.mdx)("inlineCode",{parentName:"p"},"MobileCore.lifecycleStart(additionalContextData)")," checks this flag. If the app did not exit successfully as determined by the flag status, an ",(0,d.mdx)("inlineCode",{parentName:"p"},"a.CrashEvent")," context data is sent with the next call, and a crash event is reported."),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"To ensure accurate crash reporting, you must call ",(0,d.mdx)("inlineCode",{parentName:"p"},"lifecyclePause()")," in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"onPause")," method of each activity."),(0,d.mdx)("p",null,"To understand why this is essential, here is an illustration of the Android activity lifecycle:",(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"652px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.0566037735849%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e30dc92032a4fa0afec3e601408bb0ba/dda86/android-crash.webp 265w","/aep-mobile-sdkdocs/static/e30dc92032a4fa0afec3e601408bb0ba/010e6/android-crash.webp 530w","/aep-mobile-sdkdocs/static/e30dc92032a4fa0afec3e601408bb0ba/9a7b5/android-crash.webp 652w"],sizes:"(max-width: 652px) 100vw, 652px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e30dc92032a4fa0afec3e601408bb0ba/28773/android-crash.png 265w","/aep-mobile-sdkdocs/static/e30dc92032a4fa0afec3e601408bb0ba/a0177/android-crash.png 530w","/aep-mobile-sdkdocs/static/e30dc92032a4fa0afec3e601408bb0ba/43b96/android-crash.png 652w"],sizes:"(max-width: 652px) 100vw, 652px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/e30dc92032a4fa0afec3e601408bb0ba/43b96/android-crash.png",alt:"android crash",title:"android crash",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,"For more information about the Android activity lifecycle, see ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.android.com/guide/components/activities/"},"Activities"),"."),(0,d.mdx)("p",null,"This Android lifecycle illustration was created and shared by the ",(0,d.mdx)("a",{parentName:"p",href:"https://source.android.com/"},"Android Open Source Project")," and used according to terms in the ",(0,d.mdx)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/2.5/"},"Creative Commons 2.5 Attribution License"),"."),(0,d.mdx)("h3",{id:"what-can-cause-a-false-crash-to-be-reported"},"What can cause a false crash to be reported?"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"If you are debugging by using an IDE such as Android Studio, and launching the app again from the IDE while the app is in the foreground causes a crash.",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"You can avoid this crash by backgrounding the app before launching again from the IDE."))),(0,d.mdx)("li",{parentName:"ul"},"If the previous foreground Activity of your app is moved to the background and does not call ",(0,d.mdx)("inlineCode",{parentName:"li"},"MobileCore.lifecyclePause()"),"in ",(0,d.mdx)("inlineCode",{parentName:"li"},"onPause"),", and your app is manually closed or killed by the operating system, the next launch results in a crash.")),(0,d.mdx)("h3",{id:"how-should-fragments-be-handled"},"How should Fragments be handled?"),(0,d.mdx)("p",null,"Fragments have application lifecycle events that are similar to Activities. However, a Fragment cannot be active without being attached to an Activity."),(0,d.mdx)("h2",{id:"implementing-global-lifecycle-callbacks"},"Implementing global lifecycle callbacks"),(0,d.mdx)("p",null,"Starting with API Level 14, Android allows global lifecycle callbacks for activities. For more information, please read the ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.android.com/reference/android/app/Application#registerActivityLifecycleCallbacks%28android.app.Application.ActivityLifecycleCallbacks"},"Android developer guide"),"."),(0,d.mdx)("p",null,"You can use these callbacks to ensure that all of your ",(0,d.mdx)("inlineCode",{parentName:"p"},"Activities")," correctly call ",(0,d.mdx)("inlineCode",{parentName:"p"},"AdobeMobileMarketing.lifecycleStart()"),", and do not need to implement the code for each of the Activity."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.*;\n\npublic class MainActivity extends Activity {    \n\n@Override    \nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);        \n    setContentView(R.layout.activity_main);        \n\n    getApplication().registerActivityLifecycleCallbacks(new Application.ActivityLifecycleCallbacks() {        \n    @Override        \n    public void onActivityResumed(Activity activity) {\n        MobileCore.setApplication(getApplication());\n        MobileCore.lifecycleStart(null);        \n        }        \n        @Override        \n        public void onActivityPaused(Activity activity) { \n            MobileCore.lifecyclePause();        \n        }        \n        // the following methods aren't needed for our lifecycle purposes, but are        \n        // required to be implemented by the ActivityLifecycleCallbacks object        \n        @Override        \n        public void onActivityCreated(Activity activity, Bundle savedInstanceState) {}        \n        @Override        \n        public void onActivityStarted(Activity activity) {}        \n        @Override        \n        public void onActivityStopped(Activity activity) {}        \n        @Override        \n        public void onActivitySaveInstanceState(Activity activity, Bundle outState) {}        \n        @Override        \n        public void onActivityDestroyed(Activity activity) {}        \n        });    \n    }\n ...\n}\n")),(0,d.mdx)("p",null,"To include additional data with lifecycle metric calls, pass an additional parameter to ",(0,d.mdx)("inlineCode",{parentName:"p"},"lifecycleStart")," that contains context data:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'@Overridepublic \nvoid onResume() {    \n  HashMap<String, Object> additionalContextData = new HashMap<String, Object>();    \n  contextData.put("myapp.category", "Game");    \n  MobileCore.lifecycleStart(additionalContextData);}\n')),(0,d.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"You only need to add this code in your main Activity and any other Activity in which your app may be launched."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-mobile-core-lifecycle-android-md-a2f55ac1c299924b8af3.js.map
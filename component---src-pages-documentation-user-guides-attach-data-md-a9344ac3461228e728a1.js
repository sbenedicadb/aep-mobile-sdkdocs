"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9159],{54683:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return f}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),d=a(91515),o=a(80727),l=a(64511),m=["components"],s={},h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},p=h("InlineAlert"),c=h("TabsBlock"),x={_frontmatter:s},u=d.Z;function f(e){var t=e.components,a=(0,i.Z)(e,m);return(0,r.mdx)(u,(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"attach-data-to-sdk-events"},"Attach data to SDK events"),(0,r.mdx)("p",null,"The attach data_rule action is supported in ",(0,r.mdx)("a",{parentName:"p",href:"../mobile-core/index.md"},"Mobile Core")," starting from version 2.1.8 (Launch), 2.3.5 (iOS), and 1.4.5 (Android). This action is powerful, complex, and enables advanced use cases."),(0,r.mdx)("p",null,"To use this action, you need to learn how events flow in the Adobe Experience Platform Mobile SDK and how they interact with the ",(0,r.mdx)("a",{parentName:"p",href:"../mobile-core/rules-engine/index.md"},"rules engine"),"."),(0,r.mdx)("h2",{id:"context"},"Context"),(0,r.mdx)("h3",{id:"what-are-sdk-events"},"What are SDK events?"),(0,r.mdx)("p",null,"In the Experience Platform Mobile SDK, events hold all the data that is required by other extensions to complete the necessary actions. Events have the following properties:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Describes the event. Examples include Adobe Analytics, Adobe Target, and Adobe Lifecycle.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Source"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Indicates the cause or the directionality of the event. For example, a request or a response.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Event data"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The data required to define the event. For example, context data on an Analytics event.")))),(0,r.mdx)("p",null,"Extensions that register with ",(0,r.mdx)("a",{parentName:"p",href:"../mobile-core/index.md"},"Mobile Core")," will also register event listeners. A listener is defined by a combination of event type and source. When the SDK event hub processes an event, it notifies all listeners that match the provided combination."),(0,r.mdx)("h3",{id:"how-are-events-created-in-the-sdk"},"How are events created in the SDK?"),(0,r.mdx)("p",null,"Events are created by an extension and are dispatched to the SDK Event Hub. Each published rule that is created in the Data Collection UI is evaluated against the current event. Finally, the event is passed to each of the listeners for events with the submitted type / source combination."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Events are created and dispatched when an SDK public API is invoked. Attach data action use cases are meant to act on these types of events."),(0,r.mdx)("h3",{id:"what-is-the-rules-engine"},"What is the Rules Engine?"),(0,r.mdx)("p",null,"The Rules Engine lives in the SDK Event Hub. Before listeners are notified, the Rules Engine evaluates each tag rule for mobile properties against the triggering event. A rule is defined by the following properties:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Event"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Trigger for the rule.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Condition"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Definition of the criteria to compare against the triggering event.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Action"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The resulting action if the evaluation of the rule is positive.")))),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"A rule might be read out in the following way: If the SDK ",(0,r.mdx)("strong",{parentName:"p"},"Event")," occurs and ",(0,r.mdx)("strong",{parentName:"p"},"Condition(s)")," are met, then perform the ",(0,r.mdx)("strong",{parentName:"p"},"Action(s)"),"."),(0,r.mdx)("h2",{id:"using-the-attach-data-action"},"Using the attach data action"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Attach Data")," is a type of rule action that lets you add event data to an SDK event. The modification of data happens in the Rules Engine before event listeners are notified of the event."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Attach data rule actions will only add data to the event. These actions never modify or remove data. ",(0,r.mdx)("br",null),(0,r.mdx)("br",null)," If there is a conflict between the data that is defined in your rule and the data in the event, the data in the event always has preference."),(0,r.mdx)("h3",{id:"defining-a-payload-for-the-attach-data-action"},"Defining a payload for the attach data action"),(0,r.mdx)("p",null,"When defining a payload for the attach data action, the payload must match the format of the triggering event. For example, if you want to add context data to an Adobe Analytics event, you need to know where the context data is defined on that event and match the format in your rule."),(0,r.mdx)("p",null,"As a result, it is highly recommended to enable verbose logging in the SDK and carefully study the format of the event to which you will attach the data. If the format does not match, most likely the expected results will not be received."),(0,r.mdx)("h2",{id:"example---attaching-data-to-an-event"},"Example - attaching data to an event"),(0,r.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Analytics"),(0,r.mdx)(o.default,{mdxType:"AttachingDataAnalytics"}),(0,r.mdx)("p",null,"Target"),(0,r.mdx)(l.default,{mdxType:"AttachingDataTarget"}))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-user-guides-attach-data-md-a9344ac3461228e728a1.js.map
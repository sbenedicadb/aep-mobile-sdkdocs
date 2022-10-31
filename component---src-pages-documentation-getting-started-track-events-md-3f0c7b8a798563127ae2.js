"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5380],{62436:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return f}});var n=a(87462),o=a(63366),r=(a(15007),a(64983)),d=a(91515),i=a(25882),l=["components"],s={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},p=m("InlineAlert"),c=m("TabsBlock"),x={_frontmatter:s},u=d.Z;function f(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.mdx)(u,(0,n.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"track-events"},"Track events"),(0,r.mdx)("p",null,"The SDK provides three event tracking APIs to log events for reporting, segmentation, and various other data collection use cases:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#send-events-to-edge-network"},"Send events to Edge Network")," (requires Edge Network extension)"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#track-user-actions-for-adobe-analytics"},"Track user actions")," (requires Adobe Analytics extension)"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#track-app-states-and-screens-for-adobe-analytics"},"Track app states and screens")," (requires Adobe Analytics extension)")),(0,r.mdx)("h2",{id:"send-events-to-edge-network"},"Send events to Edge Network"),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"This step requires knowledge of Experience Data Model (XDM) in Adobe Experience Platform. For more information about XDM, please read the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html"},"XDM documentation"),"."),(0,r.mdx)("p",null,"The Edge Network extension provides an API to send an ",(0,r.mdx)("inlineCode",{parentName:"p"},"ExperienceEvent")," to Edge Network. An Experience Event is an object that contains data conforming to the XDM ",(0,r.mdx)("inlineCode",{parentName:"p"},"ExperienceEvent")," schema definition in Adobe Experience Platform."),(0,r.mdx)("p",null,"In the following reference examples, you'll create an ",(0,r.mdx)("inlineCode",{parentName:"p"},"ExperienceEvent")," and then send it using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sendEvent")," API."),(0,r.mdx)("p",null,"Additionally, you'll need to add the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Environment Details")," field group and create a custom field group for product reviews that contain the following fields:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"productSku"),(0,r.mdx)("li",{parentName:"ul"},"rating"),(0,r.mdx)("li",{parentName:"ul"},"ratingText"),(0,r.mdx)("li",{parentName:"ul"},"reviewerId")),(0,r.mdx)("h3",{id:"create-an-experience-event"},"Create an Experience Event"),(0,r.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&task=create",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (AEP 3.x)"),(0,r.mdx)(i.default,{query:"platform=ios-aep&task=create",mdxType:"Tabs"}),(0,r.mdx)("h3",{id:"send-the-experience-event-to-edge-network"},"Send the Experience Event to Edge Network"),(0,r.mdx)("p",null,"Use the Adobe Experience Platform Edge Mobile Extension to send the Experience Event created in the previous step."),(0,r.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&task=send",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (AEP 3.x)"),(0,r.mdx)(i.default,{query:"platform=ios-aep&task=send",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"track-user-actions-for-adobe-analytics"},"Track user actions (for Adobe Analytics)"),(0,r.mdx)("p",null,"This section shows you how to start track user actions in your mobile app. To view and report on this data in those respective solutions, set up ",(0,r.mdx)("a",{parentName:"p",href:"../adobe-analytics/index.md"},"Adobe Analytics")," or another Experience Cloud solution extensions."),(0,r.mdx)("p",null,"Actions are events that occur in your app. Use this API to track and measure an action, where each action has one or more corresponding metrics that increment each time the event occurs. For example, you might call this API for every new subscription, every time an article is viewed, or every time a level is completed."),(0,r.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"You must call this API when an event that you want to track occurs. In addition to the action name, you can send additional context data with each track action call."),(0,r.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (AEP 3.x)"),(0,r.mdx)(i.default,{query:"platform=ios-aep&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (ACP 2.x)"),(0,r.mdx)(i.default,{query:"platform=ios-acp&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("p",null,"React Native"),(0,r.mdx)(i.default,{query:"platform=react-native&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Flutter"),(0,r.mdx)(i.default,{query:"platform=flutter&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Cordova"),(0,r.mdx)(i.default,{query:"platform=cordova&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Unity"),(0,r.mdx)(i.default,{query:"platform=unity&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Xamarin"),(0,r.mdx)(i.default,{query:"platform=xamarin&task=track-action",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"track-app-states-and-screens-for-adobe-analytics"},"Track app states and screens (for Adobe Analytics)"),(0,r.mdx)("p",null,"States represent screens or views in your app. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"trackState")," method is called every time a new state is displayed in your application. For example, this method would be called when a user navigates from the home page to the news feed. This method also sends an Adobe Analytics state-tracking hit with optional context data."),(0,r.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"8",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(i.default,{query:"platform=android&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (AEP 3.x)"),(0,r.mdx)(i.default,{query:"platform=ios-aep&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS (ACP 2.x)"),(0,r.mdx)(i.default,{query:"platform=ios-acp&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"React Native"),(0,r.mdx)(i.default,{query:"platform=react-native&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Flutter"),(0,r.mdx)(i.default,{query:"platform=flutter&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Cordova"),(0,r.mdx)(i.default,{query:"platform=cordova&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Unity"),(0,r.mdx)(i.default,{query:"platform=unity&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"Xamarin"),(0,r.mdx)(i.default,{query:"platform=xamarin&task=track-state",mdxType:"Tabs"}),(0,r.mdx)("p",null,"For more information, see the ",(0,r.mdx)("a",{parentName:"p",href:"../mobile-core/api-reference.md"},"Mobile Core API Reference"),"."),(0,r.mdx)("h2",{id:"get-help"},"Get help"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Visit the SDK ",(0,r.mdx)("a",{parentName:"li",href:"https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform-sdks/ct-p/platform-sdk"},"community forum")," to ask questions"),(0,r.mdx)("li",{parentName:"ul"},"Contact ",(0,r.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/?support-solution=General#support"},"Adobe Experience Cloud customer care")," for immediate assistance")))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-getting-started-track-events-md-3f0c7b8a798563127ae2.js.map
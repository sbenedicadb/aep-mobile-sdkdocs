"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4354],{37703:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return b}});var i=a(87462),s=a(63366),n=(a(15007),a(64983)),d=a(91515),o=a(53972),p=["components"],c={},r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.mdx)("div",t)}},l=r("InlineAlert"),m=r("TabsBlock"),u={_frontmatter:c},h=d.Z;function b(e){var t=e.components,a=(0,s.Z)(e,p);return(0,n.mdx)(h,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"troubleshooting-push-messaging"},"Troubleshooting push messaging"),(0,n.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"This troubleshooting guide requires Adobe Experience Platform Assurance. For more information about access and how to set up Assurance, see the ",(0,n.mdx)("a",{parentName:"p",href:"../platform-assurance/index.md"},"documentation"),"."),(0,n.mdx)("p",null,"When implementing push messaging via the Adobe Experience Platform Mobile SDK, you can validate the client-side implementation by verifying that you completed the following steps:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},"Pass the device's push token to the SDK."),(0,n.mdx)("li",{parentName:"ol"},"Verify push token sync with the Experience Cloud Identity service."),(0,n.mdx)("li",{parentName:"ol"},"Ensure user opt-in for push in Adobe Analytics."),(0,n.mdx)("li",{parentName:"ol"},"Confirm user ID is correctly set (and is the same as Steps 2 and 3, above).")),(0,n.mdx)("h2",{id:"pass-the-push-identifier-to-the-sdk"},"Pass the Push Identifier to the SDK"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"setPushIdentifier")," API sets the device token for push notifications in the SDK. This results in a few network calls made to the requisite Adobe servers to associate the user with the push token."),(0,n.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,n.mdx)("p",null,"If SDK privacy status isoptedout, the push identifier will not be set."),(0,n.mdx)("h3",{id:"setpushidentifier"},"setPushIdentifier"),(0,n.mdx)(m,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,n.mdx)("p",null,"Android"),(0,n.mdx)(o.default,{query:"platform=android&task=set-push",mdxType:"Tabs"}),(0,n.mdx)("p",null,"iOS"),(0,n.mdx)(o.default,{query:"platform=ios&task=set-push",mdxType:"Tabs"}),(0,n.mdx)("p",null,"React Native"),(0,n.mdx)(o.default,{query:"platform=react-native&task=set-push",mdxType:"Tabs"}),(0,n.mdx)("h2",{id:"verify-push-token-sync-with-the-experience-cloud-identity-service"},"Verify push token sync with the Experience Cloud Identity service"),(0,n.mdx)("p",null,"Launch your app with the device connected to an ",(0,n.mdx)("a",{parentName:"p",href:"../platform-assurance/index.md"},"Adobe Experience Platform Assurance session"),"."),(0,n.mdx)("p",null,"In the list of events, verify that you have an event with type ",(0,n.mdx)("inlineCode",{parentName:"p"},"SetPushIdentifier"),". In the details panel on the right, verify the value of the push token for this device. The value in ",(0,n.mdx)("inlineCode",{parentName:"p"},"pushIdentifier")," is the same value that is sent to the Adobe servers."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.52830188679246%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/dda86/set-push-token-to-identity.webp 265w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/010e6/set-push-token-to-identity.webp 530w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/668f0/set-push-token-to-identity.webp 1060w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/89d57/set-push-token-to-identity.webp 1590w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/64296/set-push-token-to-identity.webp 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/28773/set-push-token-to-identity.png 265w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/a0177/set-push-token-to-identity.png 530w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/ea60f/set-push-token-to-identity.png 1060w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/684d5/set-push-token-to-identity.png 1590w","/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/42cbc/set-push-token-to-identity.png 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/af9de721e60b95da6683e1ac6d5cdfde/ea60f/set-push-token-to-identity.png",alt:"Configuring the Campaign Classic extension",title:"Configuring the Campaign Classic extension",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h2",{id:"ensure-user-opt-in-for-push-in-adobe-analytics"},"Ensure user opt-in for push in Adobe Analytics"),(0,n.mdx)("p",null,"Launch your app with the device connected to an ",(0,n.mdx)("a",{parentName:"p",href:"../platform-assurance/index.md"},"Adobe Experience Platform Assurance session"),"."),(0,n.mdx)("p",null,"In the resulting list of events, verify that you have an event with type ",(0,n.mdx)("inlineCode",{parentName:"p"},"AnalyticsForIdentityRequest"),". In the details panel on the right, you can see that there is a value that was sent to Analytics that opts this user in to receive push notifications."),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.15094339622642%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/dda86/push-analytics-optin.webp 265w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/010e6/push-analytics-optin.webp 530w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/668f0/push-analytics-optin.webp 1060w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/89d57/push-analytics-optin.webp 1590w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/64296/push-analytics-optin.webp 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/28773/push-analytics-optin.png 265w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/a0177/push-analytics-optin.png 530w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/ea60f/push-analytics-optin.png 1060w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/684d5/push-analytics-optin.png 1590w","/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/42cbc/push-analytics-optin.png 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/00b7d3312b1014a135295eca69b8d344/ea60f/push-analytics-optin.png",alt:"Configuring the Campaign Classic extension",title:"Configuring the Campaign Classic extension",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("h2",{id:"confirm-that-the-user-id-is-correctly-set"},"Confirm that the user ID is correctly set"),(0,n.mdx)("p",null,"Launch your app with the device connected to an ",(0,n.mdx)("a",{parentName:"p",href:"../platform-assurance/index.md"},"Adobe Experience Platform Assurance session"),"."),(0,n.mdx)("p",null,"In the list of events, verify that you have an event with type ",(0,n.mdx)("inlineCode",{parentName:"p"},"UPDATED_IDENTITY_RESPONSE"),". In the details panel on the right, confirm that the following values are correct:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The value for ",(0,n.mdx)("inlineCode",{parentName:"li"},"pushidentifier")," should match the value that was sent in step 2 above."),(0,n.mdx)("li",{parentName:"ul"},"The value for mid should match the value for mid that is sent to Analytics. If you are using a ",(0,n.mdx)("a",{parentName:"li",href:"../adobe-analytics/api-reference.md#setidentifier"},"custom visitor identifier"),", this payload should also contain a vid variable with a value that matches the value that was used to identify this user. ")),(0,n.mdx)("p",null,(0,n.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,n.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.88679245283019%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,n.mdx)("picture",{parentName:"span"},"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/dda86/push-identities.webp 265w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/010e6/push-identities.webp 530w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/668f0/push-identities.webp 1060w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/89d57/push-identities.webp 1590w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/64296/push-identities.webp 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,n.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/28773/push-identities.png 265w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/a0177/push-identities.png 530w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/ea60f/push-identities.png 1060w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/684d5/push-identities.png 1590w","/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/42cbc/push-identities.png 1600w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,n.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/a67a44495c210161b89a67026811f2ed/ea60f/push-identities.png",alt:"Configuring the Campaign Classic extension",title:"Configuring the Campaign Classic extension",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,n.mdx)("p",null,"After completing these steps, your app is correctly configured and is ready to send push messages via the SDK and Adobe."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-troubleshooting-guides-push-messaging-md-e827200790246f8963d4.js.map
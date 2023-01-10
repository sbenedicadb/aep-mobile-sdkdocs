"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9408],{8572:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return m},default:function(){return f}});var s,o=t(87462),r=t(63366),i=(t(15007),t(64983)),n=t(91515),d=["components"],m={},c=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:m},l=n.Z;function f(e){var a=e.components,t=(0,r.Z)(e,d);return(0,i.mdx)(l,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"configure-datastreams"},"Configure datastreams"),(0,i.mdx)("p",null,"After you've created a schema and its associated dataset, you may now configure datastreams (also referred to as Edge configurations or Edge Network configurations)."),(0,i.mdx)(c,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"To create a datastream, your organization must be provisioned for this feature in the Data Collection UI. Please contact your Adobe Customer Success Manager (CSM) to be added to the allow list."),(0,i.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The Datastreams tool is available to customers on the ",(0,i.mdx)("em",{parentName:"p"},"allow list")," regardless whether they use the Data Collection UI for web tag management or to manage mobile app configuration. ",(0,i.mdx)("br",null),(0,i.mdx)("br",null),"Users require ",(0,i.mdx)("strong",{parentName:"p"},"Develop")," permissions for the Data Collection UI. See the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/tags/admin/user-permissions.html"},"user permissions")," article for more details."),(0,i.mdx)("h2",{id:"what-is-a-datastream"},"What is a datastream?"),(0,i.mdx)("p",null,"A datastream is a configured instance of the Edge Network that contains settings for your Adobe solutions and services. This configuration ensures that incoming data to the Edge Network is routed to Adobe Experience Platform and Adobe Experience Cloud solutions & services appropriately."),(0,i.mdx)("p",null,"The following steps illustrate how to create a sample datastream for a mobile implementation:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"In the browser, navigate to the ",(0,i.mdx)("a",{parentName:"li",href:"https://experience.adobe.com/#/data-collection"},"Data Collection UI")," and login with your credentials."),(0,i.mdx)("li",{parentName:"ol"},"If your organization is enabled for multiple sandboxes, first select the sandbox from the top right corner. For more details about sandboxes, please read the ",(0,i.mdx)("a",{parentName:"li",href:"https://experienceleague.adobe.com/docs/experience-platform/sandbox/home.html"},"sandboxes overview"),"."),(0,i.mdx)("li",{parentName:"ol"},"From the left panel, select ",(0,i.mdx)("strong",{parentName:"li"},"Datastreams"),"."),(0,i.mdx)("li",{parentName:"ol"},"Select ",(0,i.mdx)("strong",{parentName:"li"},"New Datastream")," (located on top right)."),(0,i.mdx)("li",{parentName:"ol"},"Set a name for the datastream and select ",(0,i.mdx)("strong",{parentName:"li"},"Save"),".")),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.60377358490566%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/dda86/create-datastream.webp 265w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/010e6/create-datastream.webp 530w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/668f0/create-datastream.webp 1060w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/89d57/create-datastream.webp 1590w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/094b8/create-datastream.webp 2120w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/064ce/create-datastream.webp 2267w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/28773/create-datastream.png 265w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/a0177/create-datastream.png 530w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/ea60f/create-datastream.png 1060w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/684d5/create-datastream.png 1590w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/5e85f/create-datastream.png 2120w","/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/fd2a9/create-datastream.png 2267w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/7c79936683071829f90f2e19a5efc1f2/ea60f/create-datastream.png",alt:"Creating a datastream",title:"Creating a datastream",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("ol",{start:5},(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"In the next screen, select ",(0,i.mdx)("strong",{parentName:"p"},"Add Service"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"From the Service drop-down, select ",(0,i.mdx)("strong",{parentName:"p"},"Adobe Experience Platform")," and:"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Make sure the service toggle is ",(0,i.mdx)("strong",{parentName:"p"},"Enabled"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Choose the appropriate ",(0,i.mdx)("strong",{parentName:"p"},"Event Dataset")," as previously created, then select ",(0,i.mdx)("strong",{parentName:"p"},"Save"),"."))))),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1060px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.47169811320755%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/dda86/configure-datastream.webp 265w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/010e6/configure-datastream.webp 530w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/668f0/configure-datastream.webp 1060w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/89d57/configure-datastream.webp 1590w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/094b8/configure-datastream.webp 2120w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/fa17d/configure-datastream.webp 2262w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/28773/configure-datastream.png 265w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/a0177/configure-datastream.png 530w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/ea60f/configure-datastream.png 1060w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/684d5/configure-datastream.png 1590w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/5e85f/configure-datastream.png 2120w","/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/e9762/configure-datastream.png 2262w"],sizes:"(max-width: 1060px) 100vw, 1060px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/71146c2b6594ec4118bcad975d538e56/ea60f/configure-datastream.png",alt:"Configuring your datastream with Adobe Experience Platform",title:"Configuring your datastream with Adobe Experience Platform",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("p",null,"Your datastream is ready to be used now. If different settings are required per environment, create new datastreams with the respective configuration settings."),(0,i.mdx)("p",null,"For additional information on datastreams in the Data Collection UI, see the ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/platform-learn/implement-mobile-sdk/initial-configuration/create-datastream.html"},"configuring a datastream guide"),"."))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-getting-started-configure-datastreams-md-15b16a1d0335a3c3b482.js.map
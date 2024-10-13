"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1230],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const i={title:"Batching",sidebar_custom_props:{sidebarActionTitle:!0}},o="Batching",c={unversionedId:"entities/actions/batching/index",id:"entities/actions/batching/index",title:"Batching",description:"DynamoDB-Toolbox exposes the following actions to perform batch operations:",source:"@site/docs/3-entities/4-actions/6-batching/index.md",sourceDirName:"3-entities/4-actions/6-batching",slug:"/entities/actions/batching/",permalink:"/docs/entities/actions/batching/",draft:!1,tags:[],version:"current",frontMatter:{title:"Batching",sidebar_custom_props:{sidebarActionTitle:!0}},sidebar:"tutorialSidebar",previous:{title:"DeleteItem",permalink:"/docs/entities/actions/delete-item/"},next:{title:"BatchGet",permalink:"/docs/entities/actions/batch-get/"}},s={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"batching"},"Batching"),(0,r.yg)("p",null,"DynamoDB-Toolbox exposes the following actions to perform batch operations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/entities/actions/batch-get/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchGetRequest")),": Builds a request to get an entity item, to be used within ",(0,r.yg)("a",{parentName:"li",href:"/docs/tables/actions/batch-get/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchGetCommands"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/entities/actions/batch-put/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchPutRequest")),": Builds a request to put an entity item, to be used within ",(0,r.yg)("a",{parentName:"li",href:"/docs/tables/actions/batch-write/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchWriteCommands"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/entities/actions/batch-delete/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchDeleteRequest")),": Builds a request to delete an entity item, to be used within ",(0,r.yg)("a",{parentName:"li",href:"/docs/tables/actions/batch-write/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchWriteCommands")))),(0,r.yg)("p",null,"See also the following table actions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/tables/actions/batch-get/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchGetCommand")),": Groups one or several ",(0,r.yg)("inlineCode",{parentName:"li"},"BatchGetRequests")," from the ",(0,r.yg)("inlineCode",{parentName:"li"},"Table")," entities to execute a ",(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html"},"BatchGetItem")," operation"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/tables/actions/batch-write/"},(0,r.yg)("inlineCode",{parentName:"a"},"BatchWriteCommand")),": Groups one or several ",(0,r.yg)("inlineCode",{parentName:"li"},"BatchPutRequests")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"BatchDeleteRequests")," from the ",(0,r.yg)("inlineCode",{parentName:"li"},"Table")," entities to execute a ",(0,r.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html"},"BatchWriteItem")," operation")))}u.isMDXComponent=!0}}]);
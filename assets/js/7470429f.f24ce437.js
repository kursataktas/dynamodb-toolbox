"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8260],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,d=p["".concat(s,".").concat(y)]||p[y]||m[y]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),o=n(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),o=n(96540),r=n(20053),i=n(23104),l=n(56347),s=n(57485),c=n(31682),u=n(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=d({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Dv)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=s??p;return y({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!y({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var h=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},y=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:y,onClick:m},i,{className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function I(e){const t=g(e);return o.createElement("div",{className:(0,r.A)("tabs-container",b.tabList)},o.createElement(f,(0,a.A)({},e,t)),o.createElement(v,(0,a.A)({},e,t)))}function k(e){const t=(0,h.A)();return o.createElement(I,(0,a.A)({key:String(t)},e))}},8300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(58168),o=(n(96540),n(15680)),r=n(11470),i=n(19365);const l={title:"Spy",sidebar_custom_props:{sidebarActionType:"util"}},s="EntitySpy",c={unversionedId:"entities/actions/spy/index",id:"entities/actions/spy/index",title:"Spy",description:"Enables spying the provided Entity.",source:"@site/docs/3-entities/4-actions/21-spy/index.md",sourceDirName:"3-entities/4-actions/21-spy",slug:"/entities/actions/spy/",permalink:"/docs/entities/actions/spy/",draft:!1,tags:[],version:"current",frontMatter:{title:"Spy",sidebar_custom_props:{sidebarActionType:"util"}},sidebar:"tutorialSidebar",previous:{title:"Format",permalink:"/docs/entities/actions/format/"},next:{title:"Usage",permalink:"/docs/schemas/usage/"}},u={},p=[{value:"Methods",id:"methods",level:2},{value:"<code>on(...)</code>",id:"on",level:3},{value:"<code>sent(...)</code>",id:"sent",level:3},{value:"<code>reset()</code>",id:"reset",level:3},{value:"<code>restore()</code>",id:"restore",level:3},{value:"Stub Methods",id:"stub-methods",level:2},{value:"<code>resolve(...)</code>",id:"resolve",level:3},{value:"<code>mock(...)</code>",id:"mock",level:3},{value:"<code>reject(...)</code>",id:"reject",level:3},{value:"Inspector methods",id:"inspector-methods",level:2},{value:"<code>count()</code>",id:"count",level:3},{value:"<code>allArgs()</code>",id:"allargs",level:3},{value:"<code>args(...)</code>",id:"args",level:3}],m={toc:p},y="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"entityspy"},"EntitySpy"),(0,o.yg)("p",null,"Enables ",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mock_object"},"spying")," the provided ",(0,o.yg)("inlineCode",{parentName:"p"},"Entity"),"."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"EntitySpy")," is useful for writing ",(0,o.yg)("strong",{parentName:"p"},"unit tests"),", allowing you to stub sendable actions (e.g. ",(0,o.yg)("a",{parentName:"p",href:"/docs/entities/actions/get-item/"},(0,o.yg)("inlineCode",{parentName:"a"},"GetItemCommand")),", ",(0,o.yg)("a",{parentName:"p",href:"/docs/entities/actions/put-item/"},(0,o.yg)("inlineCode",{parentName:"a"},"PutItemCommand"))," etc.), mock their behavior, and inspect their call history:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { EntitySpy } from 'dynamodb-toolbox/entity/actions/spy'\n\nconst entitySpy = PokemonEntity.build(EntitySpy)\n\n// \ud83d\ude4c Type-safe!\nentitySpy.on(GetItemCommand).resolve({ Item: pokeMock })\n\nconst { Item } = await PokemonEntity.build(GetItemCommand)\n  .key(key)\n  .options({ consistent: true })\n  .send()\n\nexpect(Item).toStrictEqual(pokeMock) // \u2705\n\nconst getCount = entitySpy.sent(GetItemCommand).count()\nexpect(getCount).toBe(1) // \u2705\n\n// Reset history\nentitySpy.reset()\n\n// Stop spying\nentitySpy.restore()\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Non-mocked actions are sent as usual.")),(0,o.yg)("h2",{id:"methods"},"Methods"),(0,o.yg)("h3",{id:"on"},(0,o.yg)("inlineCode",{parentName:"h3"},"on(...)")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"(Action: SENDABLE_ACTION) => Stub<ENTITY, SENDABLE_ACTION>"))),(0,o.yg)("p",null,"Enables stubbing a sendable action (see the ",(0,o.yg)("a",{parentName:"p",href:"#stub-methods"},"stub section")," section for more details):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { GetItemCommand } from 'dynamodb-toolbox/entity/actions/get'\n\nconst getStub = entitySpy.on(GetItemCommand)\n")),(0,o.yg)("h3",{id:"sent"},(0,o.yg)("inlineCode",{parentName:"h3"},"sent(...)")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"(Action: SENDABLE_ACTION) => Inspector<ENTITY, SENDABLE_ACTION>"))),(0,o.yg)("p",null,"Enables inspecting a sendable action call history (see the ",(0,o.yg)("a",{parentName:"p",href:"#inspector-methods"},"inspector section")," section for more details):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"import { GetItemCommand } from 'dynamodb-toolbox/entity/actions/get'\n\nconst getInspector = entitySpy.sent(GetItemCommand)\n")),(0,o.yg)("h3",{id:"reset"},(0,o.yg)("inlineCode",{parentName:"h3"},"reset()")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"() => Spy<ENTITY>"))),(0,o.yg)("p",null,"Reset the call history for all actions:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"expect(getInspector.count()).toBe(1) // \u2705\n\nentitySpy.reset()\n\nexpect(getInspector.count()).toBe(0) // \u2705\n\n// The method returns the spy, so you can chain a new stub:\nentitySpy.reset().on(GetItemCommand).resolve({ Item: ... })\n")),(0,o.yg)("h3",{id:"restore"},(0,o.yg)("inlineCode",{parentName:"h3"},"restore()")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"() => void"))),(0,o.yg)("p",null,"Stop spying the ",(0,o.yg)("inlineCode",{parentName:"p"},"Entity")," altogether:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// After this point, the spy is not able to intercept any action\nentitySpy.restore()\n")),(0,o.yg)("h2",{id:"stub-methods"},"Stub Methods"),(0,o.yg)("h3",{id:"resolve"},(0,o.yg)("inlineCode",{parentName:"h3"},"resolve(...)")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"(responseMock: Response<ACTION>) => Spy<ENTITY>"))),(0,o.yg)("p",null,"Mocks the response of a sendable action ",(0,o.yg)("inlineCode",{parentName:"p"},".send()")," method:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// \ud83d\ude4c Type-safe!\nentitySpy.on(GetItemCommand).resolve({ Item: pokeMock })\n\nconst { Item } = await PokemonEntity.build(GetItemCommand)\n  .key(key)\n  .send()\n\nexpect(Item).toStrictEqual(pokeMock) // \u2705\n")),(0,o.yg)("h3",{id:"mock"},(0,o.yg)("inlineCode",{parentName:"h3"},"mock(...)")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"(mock: ((...args: Args<ACTION>) => Promisable<Response<ACTION>> | undefined)) => Spy<ENTITY>"))),(0,o.yg)("p",null,"Mocks the implementation of a sendable action ",(0,o.yg)("inlineCode",{parentName:"p"},".send()")," method (synchronously or asynchronously), enabling you to return dynamic responses:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"// \ud83d\ude4c Type-safe!\nentitySpy.on(GetItemCommand).mock((key, options) => {\n  if (key.pokemonId === 'pikachu') {\n    return { Item: pikachuMock }\n  }\n})\n\nconst { Item } = await PokemonEntity.build(GetItemCommand)\n  .key({ pokemonId: 'pikachu' })\n  .send()\n\nexpect(Item).toStrictEqual(pikachuMock) // \u2705\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Returning ",(0,o.yg)("inlineCode",{parentName:"p"},"undefined")," is possible and lets the action proceed as usual.")),(0,o.yg)("h3",{id:"reject"},(0,o.yg)("inlineCode",{parentName:"h3"},"reject(...)")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"(error?: string | Error | AwsError) => Spy<ENTITY>"))),(0,o.yg)("p",null,"Simulates an error during the execution of a sendable action ",(0,o.yg)("inlineCode",{parentName:"p"},".send()")," method:"),(0,o.yg)(r.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"any",label:"Any error",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entitySpy.on(GetItemCommand).reject()\n\nawait expect(() =>\n  PokemonEntity.build(GetItemCommand).key(key).send()\n).rejects.toThrow() // \u2705\n"))),(0,o.yg)(i.A,{value:"message",label:"Message",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entitySpy.on(GetItemCommand).reject('Fake error')\n\nawait expect(() =>\n  PokemonEntity.build(GetItemCommand).key(key).send()\n).rejects.toThrow('Fake error') // \u2705\n"))),(0,o.yg)(i.A,{value:"getter",label:"AWS Error",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entitySpy.on(GetItemCommand).reject({\n  Name: 'ServiceUnavailable',\n  Code: '503',\n  Message: 'Service is unable to handle request.',\n  $fault: 'server',\n  $service: 'DynamoDB'\n})\n\nawait expect(() =>\n  PokemonEntity.build(GetItemCommand).key(key).send()\n).rejects.toThrow({ Name: 'ServiceUnavailable' }) // \u2705\n")))),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Stub methods return the original spy, so you can easily chain them:"),(0,o.yg)("pre",{parentName:"admonition"},(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entitySpy\n  .on(GetItemCommand)\n  .resolve({ Item: ... })\n  .on(PutItemCommand)\n  .reject('Some error')\n"))),(0,o.yg)("h2",{id:"inspector-methods"},"Inspector methods"),(0,o.yg)("h3",{id:"count"},(0,o.yg)("inlineCode",{parentName:"h3"},"count()")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"() => number"))),(0,o.yg)("p",null,"Returns the number of times the action was sent:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entitySpy.on(GetItemCommand).resolve({ Item: pokeMock })\n\nconst { Item } =\n  await PokemonEntity.build(GetItemCommand).send()\n\nconst count = entitySpy.sent(GetItemCommand).count()\n\nexpect(count).toBe(1) // \u2705\n")),(0,o.yg)("h3",{id:"allargs"},(0,o.yg)("inlineCode",{parentName:"h3"},"allArgs()")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"() => Args<ACTION>[]"))),(0,o.yg)("p",null,"Returns the arguments of the sendable action call history:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entitySpy.on(GetItemCommand).resolve({})\n\nawait PokemonEntity.build(GetItemCommand)\n  .key({ pokemonId: 'pikachu' })\n  .options({ consistent: true })\n  .send()\nawait PokemonEntity.build(GetItemCommand)\n  .key({ pokemonId: 'charizard' })\n  .send()\n\nconst allArgs = entitySpy.sent(GetItemCommand).allArgs()\n\nexpect(allArgs).toStrictEqual([\n  // First call\n  [{ pokemonId: 'pikachu' }, { consistent: true }],\n  // Second call\n  [{ pokemoneId: 'charizard' }, {}]\n]) // \u2705\n")),(0,o.yg)("h3",{id:"args"},(0,o.yg)("inlineCode",{parentName:"h3"},"args(...)")),(0,o.yg)("p",{style:{marginTop:"-15px"}},(0,o.yg)("i",null,(0,o.yg)("code",null,"(index: number) => Args<ACTION>"))),(0,o.yg)("p",null,"Returns the arguments of the n-th action of the call history:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-ts"},"entitySpy.on(GetItemCommand).resolve({})\n\nawait PokemonEntity.build(GetItemCommand)\n  .key({ pokemonId: 'pikachu' })\n  .options({ consistent: true })\n  .send()\nawait PokemonEntity.build(GetItemCommand)\n  .key({ pokemonId: 'charizard' })\n  .send()\n\nconst firstArgs = entitySpy.sent(GetItemCommand).args(0)\n\nexpect(firstArgs).toStrictEqual([\n  { pokemonId: 'pikachu' },\n  { consistent: true }\n]) // \u2705\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Note that the index is zero-based.")))}d.isMDXComponent=!0}}]);
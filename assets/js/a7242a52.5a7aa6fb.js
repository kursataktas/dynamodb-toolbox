"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6007],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),c=n(31682),u=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=y({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(h,(0,a.A)({},e,t)),r.createElement(N,(0,a.A)({},e,t)))}function k(e){const t=(0,b.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},5311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),i=n(19365);const l={title:"TransactDelete",sidebar_custom_props:{sidebarActionType:"delete"}},s="DeleteTransaction",c={unversionedId:"entities/actions/transact-delete/index",id:"entities/actions/transact-delete/index",title:"TransactDelete",description:"Builds a transaction to delete an entity item, to be used within TransactWriteItems operations:",source:"@site/docs/3-entities/3-actions/14-transact-delete/index.md",sourceDirName:"3-entities/3-actions/14-transact-delete",slug:"/entities/actions/transact-delete/",permalink:"/docs/entities/actions/transact-delete/",draft:!1,tags:[],version:"current",frontMatter:{title:"TransactDelete",sidebar_custom_props:{sidebarActionType:"delete"}},sidebar:"tutorialSidebar",previous:{title:"TransactUpdate",permalink:"/docs/entities/actions/transact-update/"},next:{title:"ConditionCheck",permalink:"/docs/entities/actions/condition-check/"}},u={},p=[{value:"Request",id:"request",level:2},{value:"<code>.key(...)</code>",id:"key",level:3},{value:"<code>.options(...)</code>",id:"options",level:3}],d={toc:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"deletetransaction"},"DeleteTransaction"),(0,r.yg)("p",null,"Builds a transaction to delete an entity item, to be used within ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html"},"TransactWriteItems operations"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { execute } from 'dynamodb-toolbox/entity/actions/transactWrite'\nimport { DeleteTransaction } from 'dynamodb-toolbox/entity/actions/transactDelete'\n\nconst transaction = PokemonEntity.build(DeleteTransaction)\n\nconst params = transaction.params()\nawait execute(transaction, ...otherTransactions)\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"DeleteTransactions")," can be executed in conjunction with ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/transact-put/"},(0,r.yg)("inlineCode",{parentName:"a"},"PutTransactions")),", ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/transact-update/"},(0,r.yg)("inlineCode",{parentName:"a"},"UpdateTransactions"))," and ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/condition-check/"},(0,r.yg)("inlineCode",{parentName:"a"},"ConditionChecks")),"."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Check the ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/transactions/#transactwrite"},"Transaction Documentation")," to learn more about the ",(0,r.yg)("inlineCode",{parentName:"p"},"execute")," function.")),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("h3",{id:"key"},(0,r.yg)("inlineCode",{parentName:"h3"},".key(...)")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,"(required)")),(0,r.yg)("p",null,"The key of the item to delete (i.e. attributes that are tagged as part of the primary key):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transaction = PokemonEntity.build(\n  DeleteTransaction\n).key({ pokemonId: 'pikachu1' })\n")),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyInput")," type from the ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/parse/"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityParser"))," action to explicitly type an object as a ",(0,r.yg)("inlineCode",{parentName:"p"},"BatchDeleteItemRequest")," key object:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import type { KeyInput } from 'dynamodb-toolbox/entity/actions/parse'\n\nconst key: KeyInput<typeof PokemonEntity> = {\n  pokemonId: 'pikachu1'\n}\n\nconst transaction = PokemonEntity.build(\n  DeleteTransaction\n).key(key)\n")),(0,r.yg)("h3",{id:"options"},(0,r.yg)("inlineCode",{parentName:"h3"},".options(...)")),(0,r.yg)("p",null,"Provides additional options:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transaction = PokemonEntity.build(\n  DeleteTransaction\n)\n  .key(...)\n  .options({\n    condition: { attr: 'archived', eq: true }\n  })\n")),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"DeleteTransactionOptions")," type to explicitly type an object as a ",(0,r.yg)("inlineCode",{parentName:"p"},"DeleteTransaction")," options object:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import type { DeleteTransactionOptions } from 'dynamodb-toolbox/entity/actions/transactDelete'\n\nconst options: DeleteTransactionOptions<\n  typeof PokemonEntity\n> = {\n  condition: { attr: 'archived', eq: true }\n}\n\nconst transaction = PokemonEntity.build(\n  DeleteTransaction\n)\n  .key(...)\n  .options(options)\n")),(0,r.yg)("p",null,"Available options (see the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactWriteItems.html#API_TransactWriteItems_RequestParameters"},"DynamoDB documentation")," for more details):"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"condition")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Condition<typeof PokemonEntity>")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"A condition that must be satisfied in order for the ",(0,r.yg)("inlineCode",{parentName:"td"},"DeleteTransaction")," to succeed.",(0,r.yg)("br",null),(0,r.yg)("br",null),"See the ",(0,r.yg)("a",{parentName:"td",href:"/docs/entities/actions/parse-condition/#building-conditions"},(0,r.yg)("inlineCode",{parentName:"a"},"ConditionParser"))," action for more details on how to write conditions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tableName")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Overrides the ",(0,r.yg)("inlineCode",{parentName:"td"},"Table")," name. Mostly useful for ",(0,r.yg)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Multitenancy"},"multitenancy"),".")))),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"condition",label:"Conditional write",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transaction = PokemonEntity.build(DeleteTransaction)\n  .key({ pokemonId: 'pikachu1' })\n  .options({\n    condition: { attr: 'archived', eq: true }\n  })\n"))),(0,r.yg)(i.A,{value:"multitenant",label:"Multitenant",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transaction = PokemonEntity.build(DeleteTransaction)\n  .key({ pokemonId: 'pikachu1' })\n  .options({\n    tableName: `tenant-${tenantId}-pokemons`\n  })\n"))))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Contrary to ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/delete-item/"},(0,r.yg)("inlineCode",{parentName:"a"},"DeleteItemCommands")),", delete transactions cannot return the values of the deleted items.")))}y.isMDXComponent=!0}}]);
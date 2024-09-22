"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1304],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,d=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),s=n(56347),l=n(57485),c=n(31682),u=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,c]=d({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??p;return y({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var b=n(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},y=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:y,onClick:m},i,{className:(0,o.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=g(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(f,(0,a.A)({},e,t)),r.createElement(N,(0,a.A)({},e,t)))}function v(e){const t=(0,b.A)();return r.createElement(T,(0,a.A)({key:String(t)},e))}},84977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),i=n(19365);const s={title:"TransactGet",sidebar_custom_props:{sidebarActionType:"read"}},l="GetTransaction",c={unversionedId:"entities/actions/transact-get/index",id:"entities/actions/transact-get/index",title:"TransactGet",description:"Builds a transaction to get an entity item, to be used within TransactGetItems operations.",source:"@site/docs/3-entities/3-actions/11-transact-get/index.md",sourceDirName:"3-entities/3-actions/11-transact-get",slug:"/entities/actions/transact-get/",permalink:"/docs/entities/actions/transact-get/",draft:!1,tags:[],version:"current",frontMatter:{title:"TransactGet",sidebar_custom_props:{sidebarActionType:"read"}},sidebar:"tutorialSidebar",previous:{title:"Transactions",permalink:"/docs/entities/actions/transactions/"},next:{title:"TransactPut",permalink:"/docs/entities/actions/transact-put/"}},u={},p=[{value:"Request",id:"request",level:2},{value:"<code>.key(...)</code>",id:"key",level:3},{value:"<code>.options(...)</code>",id:"options",level:3},{value:"Execution",id:"execution",level:2},{value:"Options",id:"options-1",level:3},{value:"Response",id:"response",level:3}],m={toc:p},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"gettransaction"},"GetTransaction"),(0,r.yg)("p",null,"Builds a transaction to get an entity item, to be used within ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html"},"TransactGetItems operations"),"."),(0,r.yg)("p",null,"BatchGetItem operations can affect ",(0,r.yg)("strong",{parentName:"p"},"multiple items"),", so ",(0,r.yg)("inlineCode",{parentName:"p"},"GetTransactions")," do not have a ",(0,r.yg)("inlineCode",{parentName:"p"},".send(...)")," method. Instead, they should be performed via the dedicated ",(0,r.yg)("inlineCode",{parentName:"p"},"execute")," function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import {\n  GetTransaction,\n  execute\n} from 'dynamodb-toolbox/entity/actions/transactGet'\n\nconst pikachuTransac =\n  PokemonEntity.build(GetTransaction).key(pikachuKey)\n\nconst params = pikachuTransac.params()\n\nconst ashTransac =\n  TrainerEntity.build(GetTransaction).key(ashKey)\n\nconst { Responses } = await execute(\n  pikachuTransac,\n  ashTransac,\n  ...otherTransacs\n)\n\n// \ud83d\ude4c Correctly typed!\nconst [{ Item: pikachu }, { Item: ash }] = Responses\n")),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("h3",{id:"key"},(0,r.yg)("inlineCode",{parentName:"h3"},".key(...)")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,"(required)")),(0,r.yg)("p",null,"The key of the item to get (i.e. attributes that are tagged as part of the primary key):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const request = PokemonEntity.build(GetTransaction).key({\n  pokemonId: 'pikachu1'\n})\n")),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"KeyInput")," type from the ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/parse/"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityParser"))," action to explicitly type an object as a ",(0,r.yg)("inlineCode",{parentName:"p"},"GetTransaction")," key object:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import type { KeyInput } from 'dynamodb-toolbox/entity/actions/parse'\n\nconst key: KeyInput<typeof PokemonEntity> = {\n  pokemonId: 'pikachu1'\n}\n\nconst request =\n  PokemonEntity.build(BatchGetRequest).key(key)\n")),(0,r.yg)("h3",{id:"options"},(0,r.yg)("inlineCode",{parentName:"h3"},".options(...)")),(0,r.yg)("p",null,"Provides additional options:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'const transaction = PokemonEntity.build(GetTransaction)\n  .key(...)\n  .options({\n    attributes: ["name", "level"]\n  })\n')),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"GetTransactionOptions")," type to explicitly type an object as a ",(0,r.yg)("inlineCode",{parentName:"p"},"GetTransaction")," options object:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import type { GetTransactionOptions } from 'dynamodb-toolbox/entity/actions/transactGet'\n\nconst options: GetTransactionOptions<typeof PokemonEntity> =\n  { attributes: ['name', 'level'] }\n\nconst transaction = PokemonEntity.build(GetTransaction)\n  .key(...)\n  .options(options)\n")),(0,r.yg)("p",null,"Available options (see the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html#API_TransactGetItems_RequestParameters"},"DynamoDB documentation")," for more details):"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"attributes")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Path<Entity>[]")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"To specify a list of attributes to retrieve (improves performances but does not reduce costs).",(0,r.yg)("br",null),(0,r.yg)("br",null),"See the ",(0,r.yg)("a",{parentName:"td",href:"/docs/entities/actions/parse-paths/#paths"},(0,r.yg)("inlineCode",{parentName:"a"},"PathParser"))," action for more details on how to write attribute paths.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tableName")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Overrides the ",(0,r.yg)("inlineCode",{parentName:"td"},"Table")," name. Mostly useful for ",(0,r.yg)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Multitenancy"},"multitenancy"),".")))),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"attributes",label:"Attributes",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transaction = PokemonEntity.build(GetTransaction)\n  .key({ pokemonId: 'pikachu1' })\n  .options({\n    attributes: ['type', 'level']\n  })\n"))),(0,r.yg)(i.A,{value:"multitenant",label:"Multitenant",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const transaction = PokemonEntity.build(GetTransaction)\n  .key({ pokemonId: 'pikachu1' })\n  .options({\n    tableName: `tenant-${tenantId}-pokemons`\n  })\n"))))),(0,r.yg)("h2",{id:"execution"},"Execution"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { execute } from 'dynamodb-toolbox/entity/actions/transactGet'\n\nawait execute(...getTransactions)\n")),(0,r.yg)("p",null,"Note that the transactions can be provided as ",(0,r.yg)("strong",{parentName:"p"},"tuples")," or ",(0,r.yg)("strong",{parentName:"p"},"arrays")," (the output is typed accordingly):"),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"tuple",label:"Tuple",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"await execute(\n  PokemonEntity.build(GetTransaction).key(pikachuKey),\n  TrainerEntity.build(GetTransaction).key(ashKey),\n  ...\n)\n"))),(0,r.yg)(i.A,{value:"array",label:"Array",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const commands: (\n  | GetTransaction<typeof PokemonEntity>\n  | GetTransaction<typeof TrainerEntity>\n)[] = [\n  PokemonEntity.build(GetTransaction).key(pikachuKey),\n  TrainerEntity.build(GetTransaction).key(ashKey),\n  ...\n]\n\nawait execute(...commands)\n"))))),(0,r.yg)("h3",{id:"options-1"},"Options"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"execute")," function accepts an additional object as a first argument for ",(0,r.yg)("strong",{parentName:"p"},"operation-level")," options:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"await execute(options, ...batchGetCommands)\n")),(0,r.yg)("p",null,"Available options (see the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html#API_TransactGetItems_RequestParameters"},"DynamoDB documentation")," for more details):"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"capacity")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"CapacityOption")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},'"NONE"')),(0,r.yg)("td",{parentName:"tr",align:null},"Determines the level of detail about provisioned or on-demand throughput consumption that is returned in the response.",(0,r.yg)("br",null),(0,r.yg)("br",null),"Possible values are ",(0,r.yg)("inlineCode",{parentName:"td"},'"NONE"'),", ",(0,r.yg)("inlineCode",{parentName:"td"},'"TOTAL"')," and ",(0,r.yg)("inlineCode",{parentName:"td"},'"INDEXES"'),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"documentClient")),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"DocumentClient")),(0,r.yg)("td",{parentName:"tr",align:"center"},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"By default, the ",(0,r.yg)("inlineCode",{parentName:"td"},"documentClient")," attached to the ",(0,r.yg)("inlineCode",{parentName:"td"},"Table")," of the first ",(0,r.yg)("inlineCode",{parentName:"td"},"GetTransaction")," entity is used to execute the operation.",(0,r.yg)("br",null),(0,r.yg)("br",null),"Use this option to override this behavior.")))),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"capacity",label:"Capacity",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const { ConsumedCapacity } = await execute(\n  { capacity: 'TOTAL' },\n  ...getTransactions\n)\n"))),(0,r.yg)(i.A,{value:"document-client",label:"Document client",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'\n\nconst documentClient = new DynamoDBDocumentClient(...)\n\nconst { Response } = await execute(\n  { documentClient },\n  ...getTransactions\n)\n"))))),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("p",null,"The data is returned using the same response syntax as the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_TransactGetItems.html#API_TransactGetItems_ResponseSyntax"},"DynamoDB TransactGetItems API"),". If present, the returned items are formatted by their respective entities."))}d.isMDXComponent=!0}}]);
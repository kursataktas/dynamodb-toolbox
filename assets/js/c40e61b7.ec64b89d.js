"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8157],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),y=r,d=p["".concat(l,".").concat(y)]||p[y]||c[y]||o;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),s=n(56347),l=n(57485),u=n(31682),m=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,u]=d({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=l??p;return y({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=m.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},y=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:y,onClick:c},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(h,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function N(e){const t=(0,b.A)();return r.createElement(k,(0,a.A)({key:String(t)},e))}},91730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),i=n(19365);const s={title:"Usage"},l="Entity",u={unversionedId:"entities/usage/index",id:"entities/usage/index",title:"Usage",description:"Entities represent a category of items in your Table.",source:"@site/docs/3-entities/1-usage/index.md",sourceDirName:"3-entities/1-usage",slug:"/entities/usage/",permalink:"/docs/entities/usage/",draft:!1,tags:[],version:"current",frontMatter:{title:"Usage"},sidebar:"tutorialSidebar",previous:{title:"Spy",permalink:"/docs/tables/actions/spy/"},next:{title:"Internal Attributes",permalink:"/docs/entities/internal-attributes/"}},m={},p=[{value:"Constructor",id:"constructor",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>schema</code>",id:"schema",level:3},{value:"<code>table</code>",id:"table",level:3},{value:"<code>computeKey</code>",id:"computekey",level:3},{value:"<code>entityAttributeName</code>",id:"entityattributename",level:3},{value:"<code>timestamps</code>",id:"timestamps",level:3}],c={toc:p},y="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"entity"},"Entity"),(0,r.yg)("p",null,"Entities represent a ",(0,r.yg)("strong",{parentName:"p"},"category of items")," in your ",(0,r.yg)("inlineCode",{parentName:"p"},"Table"),"."),(0,r.yg)("p",null,"An entity must belong to a ",(0,r.yg)("inlineCode",{parentName:"p"},"Table"),", but a ",(0,r.yg)("inlineCode",{parentName:"p"},"Table")," can ",(0,r.yg)("strong",{parentName:"p"},"contain items from several entities"),". DynamoDB-Toolbox is designed with ",(0,r.yg)("a",{parentName:"p",href:"https://www.alexdebrie.com/posts/dynamodb-single-table/"},"Single Tables")," in mind, but works just as well with multiple tables and still makes your life much easier (e.g. for ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/batching/"},"batch operations")," or ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/actions/transactions/"},"transactions"),"):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { Entity } from 'dynamodb-toolbox/entity';\nimport { schema } from 'dynamodb-toolbox/schema';\n\nconst PokemonEntity = new Entity({\n  name: 'POKEMON',\n  table: PokeTable,\n  schema: schema(...)\n});\n")),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," takes a single parameter of type ",(0,r.yg)("inlineCode",{parentName:"p"},"object")," that accepts the following properties:"),(0,r.yg)("h3",{id:"name"},(0,r.yg)("inlineCode",{parentName:"h3"},"name")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,"(required)")),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," that uniquely identifies your entity:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const PokemonEntity = new Entity({\n  name: 'POKEMON',\n  ...\n})\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"DynamoDB-Toolbox automatically tags your items with their respective entity names (see ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/internal-attributes/#entity"},"Internal Attributes"),")."),(0,r.yg)("p",{parentName:"admonition"},"\u261d\ufe0f The consequence is that ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," ",(0,r.yg)("strong",{parentName:"p"},"cannot be updated")," once your ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," has its first items","*"," (at least not without a data migration first), so choose wisely!"),(0,r.yg)("sup",null,(0,r.yg)("i",null,"(* This tag is required for some features to work, so you also have to add it if you migrate existing data to DynamoDB-Toolbox.)"))),(0,r.yg)("h3",{id:"schema"},(0,r.yg)("inlineCode",{parentName:"h3"},"schema")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,"(required)")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity"),". See the ",(0,r.yg)("a",{parentName:"p",href:"/docs/schemas/usage/"},"Schema Section")," for more details on how to define schemas."),(0,r.yg)("h3",{id:"table"},(0,r.yg)("inlineCode",{parentName:"h3"},"table")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,"(required)")),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/tables/usage/"},(0,r.yg)("inlineCode",{parentName:"a"},"Table"))," of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity"),"."),(0,r.yg)("p",null,"DynamoDB-Toolbox must check that an entity ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," matches its ",(0,r.yg)("inlineCode",{parentName:"p"},"Table")," primary key somehow. In simple cases, both schemas can ",(0,r.yg)("strong",{parentName:"p"},"simply fit"),":"),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"direct-match",label:"Direct match",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const PokeTable = new Table({\n  partitionKey: { name: 'pk', type: 'string' },\n  sortKey: { name: 'sk', type: 'number' },\n  ...\n})\n\nconst PokemonEntity = new Entity({\n  table: PokeTable,\n  schema: schema({\n    pk: string().key(),\n    sk: number().key(),\n    ...\n  }),\n})\n"))),(0,r.yg)(i.A,{value:"single-partition",label:"Single partition",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const PokeTable = new Table({\n  partitionKey: { name: 'pk', type: 'string' },\n  sortKey: { name: 'sk', type: 'number' },\n  ...\n})\n\nconst PokemonEntity = new Entity({\n  table: PokeTable,\n  schema: schema({\n    // \ud83d\udc47 constant partition key\n    pk: string().const('POKEMON').key(),\n    sk: number().key(),\n    ...\n  })\n})\n"))),(0,r.yg)(i.A,{value:"saving-as",label:"Renaming",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const PokeTable = new Table({\n  partitionKey: { name: 'pk', type: 'string' },\n  sortKey: { name: 'sk', type: 'number' },\n  ...\n})\n\nconst PokemonEntity = new Entity({\n  table: PokeTable,\n  schema: schema({\n    // \ud83d\udc47 renaming works\n    pokemonId: string().savedAs('pk').key(),\n    level: number().savedAs('sk').key(),\n    ...\n  }),\n})\n"))),(0,r.yg)(i.A,{value:"prefixing",label:"Prefixing",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import { prefix } from 'dynamodb-toolbox/transformers/prefix'\n\nconst PokeTable = new Table({\n  partitionKey: { name: 'pk', type: 'string' },\n  sortKey: { name: 'sk', type: 'number' },\n  ...\n})\n\nconst PokemonEntity = new Entity({\n  table: PokeTable,\n  schema: schema({\n    // \ud83d\udc47 saved as `POKEMON#${pokemonId}`\n    pokemonId: string()\n      .transform(prefix('POKEMON'))\n      .savedAs('pk')\n      .key(),\n    level: number().savedAs('sk').key(),\n    ...\n  })\n})\n")),(0,r.yg)("p",{parentName:"admonition"},"\ud83d\udc49 See the ",(0,r.yg)("a",{parentName:"p",href:"/docs/schemas/transformers/usage"},"transformers section")," for more details on transformers.")))),(0,r.yg)("h3",{id:"computekey"},(0,r.yg)("inlineCode",{parentName:"h3"},"computeKey")),(0,r.yg)("p",{style:{marginTop:"-15px"}},(0,r.yg)("i",null,"(potentially required, depending on ",(0,r.yg)("code",null,"schema"),")")),(0,r.yg)("p",null,"...but ",(0,r.yg)("strong",{parentName:"p"},"using schemas that don't fit is OK"),"."),(0,r.yg)("p",null,"In this case, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," constructor requires a ",(0,r.yg)("inlineCode",{parentName:"p"},"computeKey")," function to derive the primary key from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Entity")," key attributes."),(0,r.yg)("p",null,"This can be useful for more complex cases like mapping several attributes to the same key:"),(0,r.yg)("admonition",{title:"Examples",type:"note"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"renaming",label:"Renaming",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const PokemonEntity = new Entity({\n  table: PokeTable,\n  schema: schema({\n    pokemonId: string().key(),\n    level: number().key(),\n    ...\n  }),\n  // \ud83d\ude4c Types are correctly inferred!\n  computeKey: ({ pokemonId, level }) => ({\n    pk: pokemonId,\n    sk: level\n  })\n})\n"))),(0,r.yg)(i.A,{value:"composing",label:"Composing",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const PokemonEntity = new Entity({\n  table: PokeTable,\n  schema: schema({\n    specifiers: list(string()).key(),\n    sk: number().key(),\n    ...\n  }),\n  computeKey: ({ specifiers, sk }) => ({\n    pk: specifiers.join('#'),\n    sk\n  })\n})\n"))))),(0,r.yg)("h3",{id:"entityattributename"},(0,r.yg)("inlineCode",{parentName:"h3"},"entityAttributeName")),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," to customize the name of the internal entity attribute (see ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/internal-attributes/#entity"},"Internal Attributes"),")."),(0,r.yg)("h3",{id:"timestamps"},(0,r.yg)("inlineCode",{parentName:"h3"},"timestamps")),(0,r.yg)("p",null,"A ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"object")," to customize the internal ",(0,r.yg)("inlineCode",{parentName:"p"},"created")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"modified")," attributes (see ",(0,r.yg)("a",{parentName:"p",href:"/docs/entities/internal-attributes/#timestamp-attributes"},"Internal Attributes"),")."))}d.isMDXComponent=!0}}]);
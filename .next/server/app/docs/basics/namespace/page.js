"use strict";(()=>{var e={};e.id=916,e.ids=[916],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{e.exports=require("path")},7310:e=>{e.exports=require("url")},9318:(e,a,n)=>{n.r(a),n.d(a,{GlobalError:()=>r.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>l,routeModule:()=>h,tree:()=>c});var s=n(7096),o=n(6132),t=n(7284),r=n.n(t),d=n(2564),i={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>d[e]);n.d(a,i);let c=["",{children:["docs",{children:["basics",{children:["namespace",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,9894)),"/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/docs/basics/namespace/page.mdx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,7941)),"/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/docs/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,563))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,4959)),"/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,563))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/docs/basics/namespace/page.mdx"],p="/docs/basics/namespace/page",m={require:n,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/docs/basics/namespace/page",pathname:"/docs/basics/namespace",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9894:(e,a,n)=>{n.r(a),n.d(a,{default:()=>MDXContent});var s=n(1837),o=n(818);function _createMdxContent(e){let a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(a.h1,{children:"What is a Namespace"}),"\n",s.jsx(a.p,{children:"A namespace is a map of the module's name to it's IP address that its served on. The purpose of this is for navigation over modules across the internet. Namespaces can be local to you, between you and a few buds, or global across the network."}),"\n",s.jsx(a.h2,{children:"Local Namespace"}),"\n",s.jsx(a.p,{children:"A local namespace is a namespace that solely exissts on your computer. These consist of your modules that are running locally."}),"\n",s.jsx(a.pre,{children:s.jsx(a.code,{className:"language-python",children:"c.namespace('local')\n"})}),"\n",s.jsx(a.h2,{children:"Remote Namespace"}),"\n",s.jsx(a.p,{children:"A remote namespace is any namespace that is not local. This refers to any modules that exist outside of your module."}),"\n",s.jsx(a.pre,{children:s.jsx(a.code,{className:"language-python",children:"c.namespace('remote')\n"})}),"\n",s.jsx(a.h3,{children:"Adding a Remote Namespace"}),"\n",s.jsx(a.p,{children:"To add a remote namespace, you will need to know the address of a module from another local namepsace. Every module by default has access to the namespace. To add a remote namespace, you need to add a peer's address."}),"\n",s.jsx(a.pre,{children:s.jsx(a.code,{className:"language-python",children:"c.add_peer('123.456.789:8888')\n\n# this merges the namespace on the remote peer to yours\n\n"})}),"\n",s.jsx(a.h3,{children:"Adding a Single Module"}),"\n",s.jsx(a.p,{children:"To add a single module instead of an entire namespace, just add the following"}),"\n",s.jsx(a.pre,{children:s.jsx(a.code,{className:"language-python",children:"# this will add a single module to the remote namespace, not the entire remote namespace that that module consists of\nc.add_module('123.456.789:8888')\n"})}),"\n",s.jsx(a.h1,{children:"Security Considerations"}),"\n",s.jsx(a.p,{children:"You need to be careful for who you add or who can add you. To disable people from adding you, blacklist any functions that give away such information, as seen in step 2 (deploy module)."}),"\n",s.jsx(a.h2,{children:"Global Namespace"}),"\n",s.jsx(a.p,{children:"A global namespace combines both of your local and remote namespaces"})]})}function MDXContent(e={}){let{wrapper:a}={...(0,o.a)(),...e.components};return a?s.jsx(a,{...e,children:s.jsx(_createMdxContent,{...e})}):_createMdxContent(e)}}};var a=require("../../../../webpack-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),n=a.X(0,[975,323,837,429,603,333],()=>__webpack_exec__(9318));module.exports=n})();
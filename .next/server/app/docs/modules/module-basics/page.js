"use strict";(()=>{var e={};e.id=922,e.ids=[922],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{e.exports=require("path")},7310:e=>{e.exports=require("url")},7922:(e,n,s)=>{s.r(n),s.d(n,{GlobalError:()=>a.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>l,routeModule:()=>m,tree:()=>t});var o=s(7096),r=s(6132),i=s(7284),a=s.n(i),c=s(2564),d={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>c[e]);s.d(n,d);let t=["",{children:["docs",{children:["modules",{children:["module-basics",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4325)),"/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/docs/modules/module-basics/page.mdx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,7941)),"/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/docs/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,563))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4959)),"/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,563))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/docs/modules/module-basics/page.mdx"],h="/docs/modules/module-basics/page",u={require:s,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/docs/modules/module-basics/page",pathname:"/docs/modules/module-basics",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:t}})},4325:(e,n,s)=>{s.r(n),s.d(n,{default:()=>MDXContent});var o=s(1837),r=s(818);function _createMdxContent(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[o.jsx(n.h1,{children:"Module Basics"}),"\n",(0,o.jsxs)(n.p,{children:["In this tutorial, we'll explore how to use the ",o.jsx(n.code,{children:"commune"})," library for module management in Python. The ",o.jsx(n.code,{children:"commune"})," library provides functionalities for managing and serving code modules easily."]}),"\n",o.jsx(n.h2,{children:"Table of Contents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",o.jsx(n.li,{children:o.jsx(n.a,{href:"#finding-your-module",children:"Finding Your Module"})}),"\n",o.jsx(n.li,{children:o.jsx(n.a,{href:"#module-management",children:"Module Management"})}),"\n",o.jsx(n.li,{children:o.jsx(n.a,{href:"#serving",children:"Serving"})}),"\n"]}),"\n",o.jsx(n.hr,{}),"\n",o.jsx(n.h2,{children:"Finding Your Module"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the following steps to find and work with modules using the ",o.jsx(n.code,{children:"commune"})," library."]}),"\n",o.jsx(n.h3,{children:"List All Modules"}),"\n",o.jsx(n.p,{children:"You can list all available modules using the following code:"}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"import commune as c\n\nmodules_list = c.modules()[:10]\nc.print(modules_list)\n"})}),"\n",o.jsx(n.h3,{children:"Searching for a Specific Module"}),"\n",(0,o.jsxs)(n.p,{children:["To search for a specific module, you can use the ",o.jsx(n.code,{children:"c.modules()"})," function with a search query:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"search_queries = ['model.llama', 'data', 'demo', 'hf']\nfor query in search_queries:\n    c.print(f'Searching for {query}')\n    c.print(c.modules(query))\n"})}),"\n",o.jsx(n.hr,{}),"\n",o.jsx(n.h2,{children:"Module Management"}),"\n",o.jsx(n.p,{children:"Once you've found your module, you can manage it using the following steps."}),"\n",o.jsx(n.h3,{children:"Accessing a Module"}),"\n",(0,o.jsxs)(n.p,{children:["You can access a module using the ",o.jsx(n.code,{children:"c.module()"})," function:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"demo = c.module('demo')\nc.print('## Code for demo module')\nc.print(demo.code())\n"})}),"\n",o.jsx(n.h3,{children:"Viewing Module Config"}),"\n",(0,o.jsxs)(n.p,{children:["You can view the configuration of a module using the ",o.jsx(n.code,{children:"config()"})," method:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"demo.config()\n"})}),"\n",o.jsx(n.h3,{children:"Listing Module Functions"}),"\n",(0,o.jsxs)(n.p,{children:["To list the functions of a module, use the ",o.jsx(n.code,{children:"fns()"})," method:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"demo_functions = demo.fns()\nc.print(demo_functions)\n"})}),"\n",o.jsx(n.h3,{children:"Searching for a Function"}),"\n",(0,o.jsxs)(n.p,{children:["To search for a specific function within a module, use the ",o.jsx(n.code,{children:"fns()"})," method with a search query:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"function_search_query = 'bro'\nmatching_functions = demo.fns(function_search_query)\nc.print(matching_functions)\n"})}),"\n",o.jsx(n.h3,{children:"Getting Function Schema"}),"\n",(0,o.jsxs)(n.p,{children:["You can retrieve the schema of a specific function using the ",o.jsx(n.code,{children:"schema()"})," method:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"function_name = 'bro'\nfunction_schema = demo.schema(function_name)\nc.print(function_schema)\n"})}),"\n",o.jsx(n.hr,{}),"\n",o.jsx(n.h2,{children:"Serving"}),"\n",o.jsx(n.p,{children:"You can serve a module to make its functions accessible via a server."}),"\n",o.jsx(n.h3,{children:"Serving a Module"}),"\n",(0,o.jsxs)(n.p,{children:["You can serve a module using the ",o.jsx(n.code,{children:"serve()"})," method, optionally providing a tag for versioning:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"demo.serve(tag='tag1')\n"})}),"\n",o.jsx(n.h3,{children:"Viewing Available Servers"}),"\n",(0,o.jsxs)(n.p,{children:["You can view the available servers using the ",o.jsx(n.code,{children:"servers()"})," method:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"c.print(c.servers())\n"})}),"\n",o.jsx(n.h3,{children:"Viewing Server Logs"}),"\n",(0,o.jsxs)(n.p,{children:["To view the logs of a served module, you can use the ",o.jsx(n.code,{children:"logs()"})," method:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"logs = c.logs('demo::tag1', mode='local')\nc.print(logs)\n"})}),"\n",o.jsx(n.h3,{children:"Connecting to a Served Module"}),"\n",(0,o.jsxs)(n.p,{children:["You can connect to a served module using the ",o.jsx(n.code,{children:"connect()"})," method:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"demo_client = c.connect('demo::tag1')\ndemo_client.info()\n"})}),"\n",o.jsx(n.h3,{children:"Restarting and Killing a Served Module"}),"\n",(0,o.jsxs)(n.p,{children:["You can restart or kill a served module using the ",o.jsx(n.code,{children:"restart()"})," and ",o.jsx(n.code,{children:"kill()"})," methods:"]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-python",children:"c.restart('demo::tag1')  # Restart the module\nc.kill('demo::tag1')     # Kill the module\n"})}),"\n",o.jsx(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["This concludes our tutorial on module management using the ",o.jsx(n.code,{children:"commune"})," library. You've learned how to find modules, manage their functions, serve them, and interact with served modules. This library can greatly simplify the process of managing and deploying code modules in your projects."]}),"\n",o.jsx(n.pre,{children:o.jsx(n.code,{children:"\nFeel free to use and adapt this markdown document for your tutorial needs. Make sure to adjust any details as necessary and include code snippets or explanations for each step to ensure clarity and comprehensiveness.\n"})})]})}function MDXContent(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(_createMdxContent,{...e})}):_createMdxContent(e)}}};var n=require("../../../../webpack-runtime.js");n.C(e);var __webpack_exec__=e=>n(n.s=e),s=n.X(0,[975,323,837,429,603,333],()=>__webpack_exec__(7922));module.exports=s})();
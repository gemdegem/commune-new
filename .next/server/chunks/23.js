exports.id=23,exports.ids=[23],exports.modules={6854:(e,s,a)=>{Promise.resolve().then(a.bind(a,2667))},2667:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>ModuleDetailsModal});var t=a(784),d=a(9885),l=a(6240),o=a.n(l),r=a(6944),n=a.n(r),i=a(1440),u=a.n(i);function Popup({className:e,children:s,overlayUrl:a}){return(0,d.useEffect)(()=>{let e=window.innerWidth-document.body.offsetWidth;return document.body.style.overflow="hidden",document.body.style.marginRight=e+"px",()=>{document.body.style.marginRight="",document.body.style.overflow="unset"}},[]),t.jsx(u(),{className:o().overlay,href:a,children:t.jsx("div",{className:n()(o().popup,"my-auto mx-auto z-40 bg-gray-100 rounded-lg border-2 border-zinc-700 dark:border-gray-100 border-solid shadow-md",e),onClick:e=>e.stopPropagation(),children:s})})}var c=a(8494),m=a.n(c);let p=[{image_url:"https://placehold.co/600x400",address:"158.247.70.45:8888",functions:["generate"],attributes:[],name:"model.openai",path:"model.openai",chash:"f789f265b6aa88ea597c4f7ea608fc508a56ca7bd8cb766cbf03c250dff970d2",hash:"e39d8385c6717b89cf3e35600f4643683afea6ad60efca3fc7ccbc2079e58ad2",signature:"d047efac1b7320c9428c51f564a35a029ca687b6cc0b9e7301d4115cf6383755547e084d69aa7024cdbeaef24596be6c7d3c8324008bdfe0ea6183e6c403ec8e",ss58_address:"5HarzAYD37Sp3vJs385CLvhDPN52Cb1Q352yxZnDZchznPaS",schema:{generate:{input:{prompt:"str",model:"str",presence_penalty:"float",frequency_penalty:"float",temperature:"float",max_tokens:"int",top_p:"float",choice_idx:"int",api_key:"str",retry:"bool",role:"str",history:"list"},default:{prompt:"sup?",model:"gpt-3.5-turbo",presence_penalty:0,frequency_penalty:0,temperature:.9,max_tokens:100,top_p:1,choice_idx:0,api_key:null,retry:!0,role:"user",history:null,kwargs:null},output:{},type:"self"}}},{address:"158.247.70.45:8888",functions:["put","get_hash","get"],attributes:[],name:"storage",path:"storage",description:"not available",chash:"45235f1066ab82648abf3da9adccbedebf628d7eff9de1da44a1372556468a3c",hash:"da6a2f603ab3365b779e98a67dc84ce0afd3d69f6b336e698f68a50cdd920c4e",signature:"8c154638f98b3037c720e56281bac5dd0f2141f5ad189588befc3030d6b4b431b164f97365145c2b3c6dde6706b1552115b7759cd06c0a2aecb14cfbf4c6a78a",ss58_address:"5H6P4f9VoFLSsuPnq6KtEbG9VTEP2oTddXEHaJ4BDz9GXUgi",schema:{put:{input:{v:"dict",encrypt:"bool",replicas:"int",k:"str"},default:{k:null,v:null,encrypt:!1,replicas:1},output:{},type:"self"},get_hash:{input:{k:"str",seed:"int",seed_sep:"str"},default:{k:null,seed:null,seed_sep:"<SEED>"},output:"str",type:"self"},get:{input:{deserialize:"bool",k:"NA"},default:{k:null,deserialize:!0},output:"any",type:"self"}}},{address:"158.247.70.45:8888",attributes:["asd","11112222222222222222222","222","33333333333333333"],name:"storage2",path:"storage2",description:"not available"},{name:"Module 2",description:"Another of our modulesassssssssssssssssssssssdadasdaddafav fsdgaergehr rffffffffffffffffffffffffff 234324563t25 gfegdf",attributes:["0asd","11112222222222222222222","222","33333333333333333","4","55","666666666666666666666","777777","888","9&$TYTYRR^TY"],address:"158.247.70.45:8888"},{name:"Module 3",description:"modulesassssssssssssssssssssssdadasdaddafav ",address:"158.247.70.45:8888"},{name:"Module 4",description:"Another of our  fsdgaergehr",address:"158.247.70.45:8888"},{name:"Module 5",description:"rffffffffffffffffffffffffff ",address:"158.247.70.45:8888"},{name:"Module 6",description:"234324563t25",address:"158.247.70.45:8888"},{name:"Module 7",description:"gfegdf",address:"158.247.70.45:8888"},{name:"Module 8",description:"99999999999",address:"158.247.70.45:8888"}];let ModulesService=class ModulesService{static{this.getModulesList=async(e="")=>e?p.filter(s=>s.name.includes(e)||s.description&&s.description.includes(e)):p}static{this.getModuleDetailsByName=async e=>{let s=p.find(s=>s.name===e);return s||null}}};var f=a(7458),h=a.n(f);function Checkbox({name:e,text:s,defaultValue:a}){let[l,o]=(0,d.useState)(!!a);return(0,t.jsxs)("label",{className:h().container,children:[s,t.jsx("input",{className:h().input,type:"checkbox",name:e,checked:l,onChange:()=>o(e=>!e)}),t.jsx("div",{className:h().checkmark})]})}async function ModuleDetailsModal({name:e}){let s=await ModulesService.getModuleDetailsByName(e);return s?(0,t.jsxs)(Popup,{className:n()(m().popup,"bg-teal-100"),overlayUrl:"/modules",children:[t.jsx("span",{className:m().address,children:s.address}),(0,t.jsxs)("div",{className:n()(m().name,"bg-orange-200 rounded-lg border-2 border-solid"),children:["Name: ",s.name]}),s.description&&(0,t.jsxs)("div",{className:n()(m().description,"bg-pink-200 rounded-lg border-2 border-solid"),children:["Description: ",s.description]}),s.schema&&(0,t.jsxs)("section",{className:m().schemas,children:[t.jsx("div",{className:m().schemasSubtitle,children:"Module Playground"}),t.jsx(SchemasList,{schemas:s.schema})]})]}):null}function SchemasList({schemas:e}){return t.jsx("ul",{className:m().schemasList,children:Object.entries(e).map(([e,s])=>t.jsx(SchemaNameElement,{name:e,children:(0,t.jsxs)("ul",{className:m().inputsList,children:[Object.entries(s.input).map(([e,a])=>t.jsx(InputElement,{name:e,type:a,defaultValue:s.default[e]},e)),t.jsx(OutputElement,{outputValue:s.output})]})},e))})}function SchemaNameElement({children:e,name:s}){return(0,t.jsxs)("li",{className:n()(m().schemaNameElement,"bg-gray-200 rounded-lg border-2 border-solid"),children:[s,e,t.jsx(RunButton,{})]})}function InputElement({name:e,type:s,defaultValue:a}){let[l,o]=(0,d.useState)(a??""),r=null;switch(s){case"int":case"float":r=t.jsx("input",{className:n()(m().htmlInputElement,m().numericalInput,"bg-yellow-200 rounded-lg"),type:"number",onChange:e=>o(e.target.value),value:l});break;case"bool":r=t.jsx(Checkbox,{name:e,defaultValue:a,text:""});break;case"str":case"list":case"dict":r=t.jsx("input",{className:n()(m().htmlInputElement,"bg-yellow-200 rounded-lg"),type:"text",onChange:e=>o(e.target.value),value:l})}return(0,t.jsxs)("li",{className:n()(m().inputWrapper),children:[(0,t.jsxs)("div",{className:n()(m().inputDescription,"bg-yellow-300 rounded-lg border-2 border-solid"),children:[e,": ",s]}),t.jsx("div",{className:n()(m().htmlInputElementWrapper,"bg-yellow-200 rounded-lg border-2 border-solid"),children:r})]})}function OutputElement(e){return t.jsx("li",{className:n()(m().output,"bg-purple-200 rounded-lg border-2 border-solid"),children:"object"==typeof e?"void":e})}function RunButton(){return t.jsx("button",{className:n()(m().runButton,"bg-green-400 rounded-lg border-2 border-solid border-black"),onClick:()=>alert("Not implemented."),children:"RUN"})}},8494:e=>{e.exports={popup:"module-details-modal_popup___HmKN",address:"module-details-modal_address___Iv5z",name:"module-details-modal_name__vczBq",description:"module-details-modal_description__H09xI",schemas:"module-details-modal_schemas__l5_ve",schemasSubtitle:"module-details-modal_schemasSubtitle__FDmSI",schemasList:"module-details-modal_schemasList___yq_K",schemaNameElement:"module-details-modal_schemaNameElement__r2hSc",schemaName:"module-details-modal_schemaName__aww70",inputsList:"module-details-modal_inputsList__CRRiH",inputWrapper:"module-details-modal_inputWrapper___2A8U",inputDescription:"module-details-modal_inputDescription__We5KG",htmlInputElementWrapper:"module-details-modal_htmlInputElementWrapper__hXIES",htmlInputElement:"module-details-modal_htmlInputElement__wi20t",numericalInput:"module-details-modal_numericalInput__vCBkA",output:"module-details-modal_output__ohvdq",runButton:"module-details-modal_runButton__C2Kp_"}},7458:e=>{e.exports={container:"checkbox_container__LceXI",checkmark:"checkbox_checkmark__IcrMg"}},6240:e=>{e.exports={overlay:"popup_overlay__KcJkw",popup:"popup_popup__0cFr7"}},4466:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>ModuleDetailsPage});var t=a(4656),d=a(5153);let l=(0,d.createProxy)(String.raw`/Users/bartek/Downloads/Programowanie/Commune-fresh/frontend/src/app/modules/@details/[...moduleName]/components/module-details-modal/module-details-modal.tsx`),{__esModule:o,$$typeof:r}=l,n=l.default;function ModuleDetailsPage({params:e}){let{moduleName:s}=e,a=decodeURIComponent(s[0]);return t.jsx(n,{name:a})}},3810:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d});var t=a(4145);let d=t.default}};
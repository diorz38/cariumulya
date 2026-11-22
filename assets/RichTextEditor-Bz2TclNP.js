import{j as e}from"./index-Bubxj_Wj.js";import{r as b}from"./react-vendor-Cbwl4Lwe.js";import{p as T}from"./purify.es-phcxpGAC.js";import{aF as D,aG as R,aH as M,aI as A,aJ as v,aK as H,a0 as N,a6 as E}from"./icons-7crxegeo.js";const S=`
  .rich-text-editor ul {
    list-style-type: disc !important;
    padding-left: 1.5rem !important;
    margin: 0.5rem 0 !important;
  }
  .rich-text-editor ol {
    list-style-type: decimal !important;
    padding-left: 1.5rem !important;
    margin: 0.5rem 0 !important;
  }
  .rich-text-editor li {
    margin: 0.25rem 0 !important;
  }
  .rich-text-editor p {
    margin: 0.25rem 0;
  }
  .rich-text-editor:empty:before {
    content: attr(data-placeholder);
    color: #9ca3af;
    pointer-events: none;
  }
`,l=({onClick:d,icon:u,title:g,label:m,disabled:h,onMouseDown:x})=>e.jsxs("button",{type:"button",onMouseDown:x,onClick:d,disabled:h,className:"px-2 py-1.5 rounded-md border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed",title:g,children:[u,m&&e.jsx("span",{className:"text-[11px] font-semibold",children:m})]}),F=({value:d,onChange:u,placeholder:g="Ketik di sini...",minHeight:m="180px",className:h="",label:x,showAlignment:C=!1,style:w,disabled:n=!1})=>{const r=b.useRef(null),p=b.useRef(null);b.useEffect(()=>{r.current&&r.current.innerHTML!==d&&(r.current.innerHTML=d||"")},[d]);const y=()=>{var a;const t=window.getSelection();t&&t.rangeCount>0&&((a=r.current)!=null&&a.contains(t.anchorNode))&&(p.current=t.getRangeAt(0).cloneRange())},o=t=>{t.preventDefault()},f=t=>T.sanitize(t||"",{ALLOWED_TAGS:["p","br","strong","b","em","i","u","s","ul","ol","li","a","h1","h2","h3","h4","h5","h6","blockquote"],ALLOWED_ATTR:["href","target","rel"]}).replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi,"").trim(),s=(t,a)=>{var L;if(n)return;const c=r.current;if(!c)return;c.focus();const i=window.getSelection();if(i&&p.current)try{i.removeAllRanges(),i.addRange(p.current)}catch{}(t==="insertUnorderedList"||t==="insertOrderedList")&&(!i||i.rangeCount===0||i.isCollapsed&&((L=c.textContent)==null?void 0:L.trim())==="")&&document.execCommand("insertText",!1,"​"),document.execCommand(t,!1,a),i&&i.rangeCount>0&&(p.current=i.getRangeAt(0).cloneRange()),u(f(c.innerHTML))},k=()=>{r.current&&u(f(r.current.innerHTML))},z=t=>{var j;if(n)return;t.preventDefault();const a=t.clipboardData.getData("text/plain"),c=t.clipboardData.getData("text/html");(j=r.current)==null||j.focus(),!!(c&&/<[a-z][\s\S]*>/i.test(c))?document.execCommand("insertHTML",!1,f(c)):a&&document.execCommand("insertText",!1,a),r.current&&u(f(r.current.innerHTML))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:S}),e.jsxs("div",{className:`space-y-2 ${h}`,style:w,children:[x&&e.jsx("label",{className:"text-sm font-bold text-[#09090b] dark:text-zinc-200",children:x}),e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx(l,{onClick:()=>s("bold"),icon:e.jsx(D,{size:14}),title:"Bold",disabled:n,onMouseDown:o}),e.jsx(l,{onClick:()=>s("italic"),icon:e.jsx(R,{size:14}),title:"Italic",disabled:n,onMouseDown:o}),e.jsx(l,{onClick:()=>s("underline"),icon:e.jsx(M,{size:14}),title:"Underline",disabled:n,onMouseDown:o}),C&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-px h-5 bg-gray-300 dark:bg-zinc-600 mx-1"}),e.jsx(l,{onClick:()=>s("justifyLeft"),icon:e.jsx(A,{size:14}),title:"Align Left",disabled:n,onMouseDown:o}),e.jsx(l,{onClick:()=>s("justifyCenter"),icon:e.jsx(v,{size:14}),title:"Align Center",disabled:n,onMouseDown:o}),e.jsx(l,{onClick:()=>s("justifyRight"),icon:e.jsx(H,{size:14}),title:"Align Right",disabled:n,onMouseDown:o})]}),e.jsx("div",{className:"w-px h-5 bg-gray-300 dark:bg-zinc-600 mx-1"}),e.jsx(l,{onClick:()=>s("insertUnorderedList"),icon:e.jsx(N,{size:14}),title:"Bullet List",label:"UL",disabled:n,onMouseDown:o}),e.jsx(l,{onClick:()=>s("insertOrderedList"),icon:e.jsx(E,{size:14}),title:"Numbered List",label:"OL",disabled:n,onMouseDown:o})]}),e.jsx("div",{ref:r,contentEditable:!n,suppressContentEditableWarning:!0,onInput:k,onPaste:z,onMouseUp:y,onKeyUp:y,"data-placeholder":g,className:`rich-text-editor w-full p-3 rounded-md border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[#09090b] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff5e14]/30 custom-scrollbar overflow-y-auto ${n?"opacity-50 cursor-not-allowed":""}`,style:{minHeight:m}})]})]})};export{F as R};

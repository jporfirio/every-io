(this["webpackJsonpengineer-interview"]=this["webpackJsonpengineer-interview"]||[]).push([[0],{17:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),o=t(8),c=t.n(o),r=(t(17),t(3)),d=t(4),s=t(5),l=t(11),b=t(1);const j=["children","variant","padding"];var p;const g=d.a.button(p||(p=Object(r.a)(["\n  color: white;\n  font-size: 1.5rem;\n  border-radius: 0.5em;\n  border: none;\n\n  cursor: ",";\n  opacity: ",";\n\n  background-color: ",";\n  padding: ",";\n"])),(e=>{let{disabled:n}=e;return n?"not-allowed":"pointer"}),(e=>{let{disabled:n}=e;return n&&"30%"}),(e=>{let{$variant:n}=e;return O[n]}),(e=>{let{$padding:n}=e;return m[n]})),O={primary:"#0066FF",danger:"#C20B0B",success:"#218D1F"},m={compact:".25em .5em",default:".25em 1em"};function u(e){let{children:n,variant:t="primary",padding:i="default"}=e,a=Object(l.a)(e,j);return Object(b.jsx)(g,Object(s.a)(Object(s.a)({$variant:t,$padding:i},a),{},{children:n}))}var x,h,f,v,w,y;const k=d.a.div(x||(x=Object(r.a)(["\n  flex: 1;\n  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 0.75em;\n  padding: 1em;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),C=d.a.h2(h||(h=Object(r.a)(["\n  margin: 0;\n"]))),D=d.a.ul(f||(f=Object(r.a)(["\n  width: 100%;\n  padding-inline-start: 0;\n"]))),F=d.a.li(v||(v=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);\n  padding: 2em 0.75em;\n\n  &:not(:last-child) {\n    margin-bottom: 1em;\n  }\n"]))),M=d.a.span(w||(w=Object(r.a)(["\n  font-size: 1.5rem;\n  padding-block: 1em;\n  text-wrap: balance;\n"]))),N=d.a.span(y||(y=Object(r.a)(["\n  opacity: 50%;\n  font-style: italic;\n"])));function T(e){let{title:n,items:t,onMoveBack:i,onMoveForward:a}=e;return Object(b.jsxs)(k,{children:[Object(b.jsx)(C,{children:n}),Object(b.jsxs)(D,{children:[!t.length&&Object(b.jsxs)(N,{children:["No tasks ",n]}),t.map((e=>Object(b.jsxs)(F,{children:[Object(b.jsx)(u,{variant:"danger",padding:"compact",disabled:!i,onClick:()=>null===i||void 0===i?void 0:i(e),children:"\u2190"}),Object(b.jsx)(M,{children:e}),Object(b.jsx)(u,{variant:"success",padding:"compact",disabled:!a,onClick:()=>null===a||void 0===a?void 0:a(e),children:"\u2192"})]},e)))]})]})}const _={todo:[],doing:[],done:[]},E="NEW_ITEM",I="TO_DOING",B="TO_DONE",R="FROM_DOING",S="FROM_DONE";function A(e,n){const t=(e,t)=>({from:e.filter((e=>e!==n.item)),to:t.concat(n.item)});switch(n.type){case E:return Object(s.a)(Object(s.a)({},e),{},{todo:e.todo.concat(n.item)});case I:{const{from:n,to:i}=t(e.todo,e.doing);return Object(s.a)(Object(s.a)({},e),{},{todo:n,doing:i})}case B:{const{from:n,to:i}=t(e.doing,e.done);return Object(s.a)(Object(s.a)({},e),{},{doing:n,done:i})}case R:{const{from:n,to:i}=t(e.doing,e.todo);return Object(s.a)(Object(s.a)({},e),{},{doing:n,todo:i})}case S:{const{from:n,to:i}=t(e.done,e.doing);return Object(s.a)(Object(s.a)({},e),{},{done:n,doing:i})}default:return e}}var z,L,G,P;const $=d.a.div(z||(z=Object(r.a)(["\n  padding: 2.5em;\n  display: flex;\n  flex-direction: column;\n  gap: 2.5em;\n"]))),W=d.a.div(L||(L=Object(r.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 2.5em;\n  align-items: stretch;\n  min-height: 50vh;\n"]))),J=d.a.form(G||(G=Object(r.a)(["\n  display: flex;\n  gap: 2em;\n"]))),q=d.a.input(P||(P=Object(r.a)(["\n  padding-inline: 1em;\n  font-size: 1.5rem;\n  padding-block: 0.5em;\n"])));function H(){const[e,n]=a.a.useState(""),[t,i]=function(){const[e,n]=a.a.useReducer(A,_);return[e,a.a.useCallback(((e,t)=>n({type:e,item:t})),[n])]}();return Object(b.jsxs)($,{children:[Object(b.jsxs)(W,{children:[Object(b.jsx)(T,{title:"To Do",items:t.todo,onMoveForward:e=>i("TO_DOING",e)}),Object(b.jsx)(T,{title:"In Progress",items:t.doing,onMoveForward:e=>i("TO_DONE",e),onMoveBack:e=>i("FROM_DOING",e)}),Object(b.jsx)(T,{title:"Done",items:t.done,onMoveBack:e=>i("FROM_DONE",e)})]}),Object(b.jsxs)(J,{onSubmit:t=>{t.preventDefault(),i("NEW_ITEM",e),n("")},children:[Object(b.jsx)(q,{placeholder:"Add Task",value:e,onChange:e=>n(e.target.value),required:!0}),Object(b.jsx)(u,{children:"+"})]})]})}t(20);var X=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)("div",{style:{marginLeft:25,display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)("h1",{children:"Welcome To The Every.io Code Challenge."}),Object(b.jsx)("div",{style:{marginLeft:50},children:Object(b.jsx)("a",{target:"_blank",href:"https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1",style:{color:"white",background:"black",padding:8,borderRadius:4,display:"inline-block"},rel:"noreferrer",children:"Checkout the Prototype"})})]})}),Object(b.jsx)("main",{style:{width:"calc(100vw - 50px)",margin:"0 auto",maxHeight:"100%",background:"#fcfcfc",border:"1px solid #000000",boxSizing:"border-box",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:40},children:Object(b.jsx)(H,{})})]})};var K=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((n=>{let{getCLS:t,getFID:i,getFCP:a,getLCP:o,getTTFB:c}=n;t(e),i(e),a(e),o(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(X,{})}),document.getElementById("root")),K()}},[[21,1,2]]]);
//# sourceMappingURL=main.faffb2b8.chunk.js.map
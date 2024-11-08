var Bn=Object.defineProperty;var Un=(e,t,n)=>t in e?Bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(Un(e,typeof t!="symbol"?t+"":t,n),n);import{s as xn,n as yt,o as Vn,p as Gn,b as Hn}from"./scheduler.ydM6q-DU.js";import{S as Wn,i as $n,j as Re,b as at,A as Xn,d as Ce,e as Kn,c as Yn,o as jn,f as St,D as V,B as he,L as zn,M as Jn}from"./index.DrhsS78m.js";import{w as ce}from"./index.B_SVVHSE.js";import{h as fe,B as i,i as qn,j as ye,k as Zn,m as Qn,d as q,n as eo,o as en,p as Ye,b as Se}from"./block.helper.Dp3RpXvF.js";import{d as A,c as E,b as to,a as At,S as no,s as oo,e as io}from"./arduino-component-id.XfWJa0Y3.js";import{_ as g}from"./lodash.CGP4lIDu.js";import{g as ro}from"./entry.Ctv4eMPx.js";import{c as et}from"./code.store.ByWLoW46.js";import{M as so}from"./microcontroller.BVjUfh2V.js";import{d as tn}from"./db.Dxj7bgAl.js";import{w as lo}from"./wait.CTNFjQS8.js";const va=()=>{const e=fe("arduino_loop");e.inputList[0].setVisible(!1),e.inputList[1].setVisible(!0),e.render()},La=()=>{const e=fe("arduino_loop");e.inputList[0].setVisible(!0),e.inputList[1].setVisible(!1),e.render()},ao=()=>+fe("arduino_loop").getFieldValue("LOOP_TIMES"),uo=e=>e.replace(/-_$/g,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z])(?=[a-z])/g,"$1-$2").toLowerCase(),co=(e,t)=>{const o=e.getBoundingClientRect().width+2,r=window.getComputedStyle(e),s=parseInt(r.getPropertyValue("padding-left"),10),l=parseInt(r.getPropertyValue("padding-right"),10),a=s+l,d=o-a;return Math.round(Math.min(t,d||t))},po=(e,t=null,n)=>{const o=e.getBoundingClientRect(),r=window.innerWidth||document.documentElement.clientWidth,s=window.innerHeight||document.documentElement.clientHeight;let l=o.bottom>0&&o.top<s&&o.right>0&&o.left<r;if(t){const a=t.getBoundingClientRect();return n==="top"||n==="bottom"?l=a.bottom+a.height<s&&a.top<s:l=a.right+a.width<r&&a.left<r,l}return l},Tt=(e,t,n,o)=>{if(!e||!t)return o;const r=t.getBoundingClientRect(),s=e.getBoundingClientRect(),l=window.getComputedStyle(e).position;window.getComputedStyle(e);let a=0,d=0,c=0,u=0,p=0,h=e;for(;h&&h!==document.body;){const O=window.getComputedStyle(h),T=O.position,y=h.getBoundingClientRect();T==="fixed"?(c+=y.top+window.scrollY,p+=y.left+window.scrollX):T==="sticky"?(u+=y.top,p+=y.left+window.scrollX):(T==="absolute"||T==="relative")&&(T==="absolute"&&(a-=parseFloat(O.top)||0,d-=parseFloat(O.left)||0),T==="relative"&&(a-=h.offsetTop,d-=h.offsetLeft,n==="bottom"&&(a+=s.height),n==="right"&&(d-=s.width),l==="absolute"&&n==="right"&&(d+=s.width)));const D=O.transform;if(D&&D!=="none"){const P=new DOMMatrix(D);T==="relative"||T==="absolute"?(a-=P.m42,d-=P.m41):(a-=h.offsetTop+P.m42,d-=h.offsetLeft+P.m41)}h=h.parentElement}let f=s.top+a+u-c,N=s.left+d-p;switch(n){case"top":o.top=f,o.left=N+s.width/2;break;case"bottom":o.top=f-r.height,o.left=N+s.width/2;break;case"left":o.left=N,o.top=f+s.height/2;break;case"right":o.left=N+s.width-r.width,o.top=f+s.height/2;break}return o.top+=window.scrollY,o.left+=window.scrollX,o},_o={left:"right",right:"left",top:"bottom",bottom:"top"};function It(e){let t,n,o=!e[11]&&Rt(e);return{c(){t=Kn("div"),o&&o.c(),this.h()},l(r){t=Yn(r,"DIV",{class:!0,style:!0});var s=jn(t);o&&o.l(s),s.forEach(Ce),this.h()},h(){St(t,"class",n="tooltip animation-"+e[8]+" "+e[0]+" "+e[4]+" svelte-16lxf1i"),V(t,"bottom","auto"),V(t,"right","auto"),V(t,"left",e[10].left+"px"),V(t,"min-width",e[7]+"px"),V(t,"max-width",e[3]+"px"),V(t,"text-align",e[2]),V(t,"top",e[10].top+"px"),he(t,"show",e[9]),he(t,"arrowless",!e[5])},m(r,s){at(r,t,s),o&&o.m(t,null),e[20](t)},p(r,s){r[11]?o&&(o.d(1),o=null):o?o.p(r,s):(o=Rt(r),o.c(),o.m(t,null)),s&273&&n!==(n="tooltip animation-"+r[8]+" "+r[0]+" "+r[4]+" svelte-16lxf1i")&&St(t,"class",n),s&1024&&V(t,"left",r[10].left+"px"),s&128&&V(t,"min-width",r[7]+"px"),s&8&&V(t,"max-width",r[3]+"px"),s&4&&V(t,"text-align",r[2]),s&1024&&V(t,"top",r[10].top+"px"),s&785&&he(t,"show",r[9]),s&305&&he(t,"arrowless",!r[5])},d(r){r&&Ce(t),o&&o.d(),e[20](null)}}}function Rt(e){let t,n;return{c(){t=new zn(!1),n=Re(),this.h()},l(o){t=Jn(o,!1),n=Re(),this.h()},h(){t.a=n},m(o,r){t.m(e[1],o,r),at(o,n,r)},p(o,r){r&2&&t.p(o[1])},d(o){o&&(Ce(n),t.d())}}}function mo(e){let t,n,o,r=e[1]&&It(e);return{c(){r&&r.c(),t=Re()},l(s){r&&r.l(s),t=Re()},m(s,l){r&&r.m(s,l),at(s,t,l),n||(o=Xn(window,"resize",e[12]),n=!0)},p(s,[l]){s[1]?r?r.p(s,l):(r=It(s),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null)},i:yt,o:yt,d(s){s&&Ce(t),r&&r.d(s),n=!1,o()}}}function fo(e,t,n){let o,{targetElement:r=null}=t,{action:s="hover"}=t,{content:l=""}=t,{align:a="left"}=t,{position:d="top"}=t,{maxWidth:c=200}=t,{style:u=null}=t,{theme:p=""}=t,{animation:h=""}=t,{delay:f=200}=t,{arrow:N=!0}=t,{autoPosition:O=!1}=t,{show:T=!1}=t,y=null,D=0,P=null,U=null,j=!1,pe={bottom:0,top:0,right:0,left:0};const Ln=h?f:0;Vn(()=>{if(y!==null&&(o&&!P&&(P=new l.component({target:y,props:{action:s,...l.props}})),n(7,D=co(y,c)),u&&typeof u=="object"))for(let I in u){const Fn=uo(I),Mn=u[I];y.style.setProperty(`--tooltip-${Fn}`,Mn)}O&&!po(y,r,d)&&n(0,d=_o[d]),n(10,pe=Tt(r,y,d,pe)),h&&n(8,U=h),setTimeout(()=>n(9,j=!0),Ln)}),Gn(()=>{P&&(P.$destroy(),P=null,n(9,j=!1),n(13,T=!1))});const Pn=()=>{j&&n(10,pe=Tt(r,y,d,pe))};function wn(I){Hn[I?"unshift":"push"](()=>{y=I,n(6,y)})}return e.$$set=I=>{"targetElement"in I&&n(14,r=I.targetElement),"action"in I&&n(15,s=I.action),"content"in I&&n(1,l=I.content),"align"in I&&n(2,a=I.align),"position"in I&&n(0,d=I.position),"maxWidth"in I&&n(3,c=I.maxWidth),"style"in I&&n(16,u=I.style),"theme"in I&&n(4,p=I.theme),"animation"in I&&n(17,h=I.animation),"delay"in I&&n(18,f=I.delay),"arrow"in I&&n(5,N=I.arrow),"autoPosition"in I&&n(19,O=I.autoPosition),"show"in I&&n(13,T=I.show)},e.$$.update=()=>{e.$$.dirty&2&&n(11,o=typeof l=="object"),e.$$.dirty&8256&&(y&&T?setTimeout(()=>n(9,j=!0),0):n(9,j=!1))},[d,l,a,c,p,N,y,D,U,j,pe,o,Pn,T,r,s,u,h,f,O,wn]}class go extends Wn{constructor(t){super(),$n(this,t,fo,mo,xn,{targetElement:14,action:15,content:1,align:2,position:0,maxWidth:3,style:16,theme:4,animation:17,delay:18,arrow:5,autoPosition:19,show:13})}}const Pa=(e,t)=>{let n=null,o=e.getAttribute("title"),r=(t==null?void 0:t.action)||e.getAttribute("action")||"hover";const s=(t==null?void 0:t.hideOnClickOutside)||e.getAttribute("hideOnClickOutside")||!1,l=({target:f})=>{s&&f&&!f.classList.contains("tooltip")&&u()},a={...t,targetElement:e};a.hideOnClickOutside&&delete a.hideOnClickOutside,o&&(e.removeAttribute("title"),a.content=o);const d=()=>{n?r==="click"&&s||u():c()},c=()=>{n||(n=new go({target:e,props:a}))},u=()=>{n&&(n.$destroy(),n=null)},p=()=>{e!==null&&(h(),r==="click"&&(e.addEventListener("click",d),s&&document.addEventListener("click",l,{passive:!0,capture:!0})),r==="hover"&&(e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",u)))},h=()=>{s&&document.removeEventListener("click",l),e!==null&&(e.removeEventListener("click",d),e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",u))};return p(),a.show&&setTimeout(c,0),{destroy(){h(),o&&e.setAttribute("title",o)}}};var ho=(e=>(e.NONE="none",e.MAIN="main",e.SIDE="side",e))(ho||{});const je=ce({type:"none",time:new Date().getTime()}),wa={subscribe:je.subscribe,mainWindow:()=>{je.set({type:"main",time:new Date().getTime()})},sideWindow:()=>{je.set({type:"side",time:new Date().getTime()})}};var m=(e=>(e.SENSOR="#505bda",e.ARDUINO_START_BLOCK="#b063c5",e.COMPONENTS="#512c62",e.ARDUINO="#b063c5",e.DATA="#ffaac3",e.VALUES="#505bda",e.CONTROL="#b063c5",e))(m||{});i.Blocks.arduino_loop={init:function(){var e;this.appendDummyInput().appendField("Цикл шексіз орындалады"),this.appendDummyInput().appendField(" Цикл ").appendField(new i.FieldNumber(3,0,1e3),"LOOP_TIMES").appendField("рет виртуалды түрде орындау"),this.appendStatementInput("loop").setCheck(null),this.setColour(m.ARDUINO_START_BLOCK),this.setTooltip(""),this.setHelpUrl(""),this.setCommentText(`Цикл блогы Arduino қуатын жоғалтқанша қайталанып жұмыс істейді.  Егер сізде бар болса, ол орнату блогынан кейін бірден іске қосылады.

Симуляторды пайдаланып жатсаңыз, оның қанша рет қайталанатынын басқара аласыз.`),(e=this.getIcon("comment"))==null||e.setBubbleSize(new i.utils.Size(460,170))}};i.Blocks.arduino_setup={init:function(){var e;this.appendDummyInput().appendField("Setup (runs once)"),this.appendStatementInput("setup").setCheck(null),this.setColour(m.ARDUINO_START_BLOCK),this.setTooltip(""),this.setHelpUrl(""),this.setCommentText(`Орнату блогы барлық кітапхана блоктарынан кейін жұмыс істейді.  Ол тек бір рет жұмыс істейді.

 орнату блогын пайдаланыңыз кодтағы айнымалыларды инициализациялаңыз.`),(e=this.getIcon("comment"))==null||e.setBubbleSize(new i.utils.Size(460,150))}};const $=()=>g.range(1,ao()+1).map(e=>[e.toString(),e.toString()]);i.defineBlocksWithJsonArray([{type:"bluetooth_get_message",message0:"%1 bluetooth-ге хабарлама алу",args0:[{type:"field_image",src:"./blocks/bluetooth/bluetooth.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"String",colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"bluetooth_has_message",message0:"%1 bluetooth хабарлама алды ма?",args0:[{type:"field_image",src:"./blocks/bluetooth/bluetooth.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"Boolean",colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"bluetooth_send_message",message0:"%1 bluetooth хабарлама жіберу %2",args0:[{type:"field_image",src:"./blocks/bluetooth/bluetooth.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_value",name:"MESSAGE",check:"String"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""}]);const Eo={init:function(){this.appendDummyInput().appendField(new i.FieldImage("/blocks/bluetooth/bluetooth.png",15,15)).appendField("Bluetooth баптаулары"),this.appendDummyInput().appendField("RX Pin# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_RX").appendField("TX Pin#").appendField(new i.FieldDropdown(A().digitalPins),"PIN_TX"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("-----------------------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Хабар қабылдап жатырсыз ба? ").appendField(new i.FieldCheckbox("TRUE",e=>(e==="FALSE"&&this.getField("message").setValue(""),e)),"receiving_message"),this.appendDummyInput().appendField("Хабарлама:").appendField(new i.FieldTextInput("Сәлем Әлем! :)",e=>this.getFieldValue("receiving_message")==="FALSE"?null:e),"message"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.bluetooth_setup=Eo;const Pe=(e,t)=>{const n=qn(e).map(o=>[o.getFieldValue("PIN"),o.getFieldValue("PIN")]);return n.length===0?t:n||[["NO_PINS","NO_PINS"]]},dt=(e,t,n)=>{const o=Pe(e,n);if(g.isEqual(n,o))return n;const r=o.map(([l])=>l),s=n.filter(([l])=>!r.includes(l)||l===t);return g.isEmpty(s)?[["NO_PINS","NO_PINS"]]:s},bo={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/button/button.png",15,15)).appendField("Батырманы орнату"),this.appendDummyInput().appendField("Орнатылған PIN# ").appendField(new i.FieldDropdown(()=>dt("button_setup",this.getFieldValue("PIN"),A().digitalPins)),"PIN"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("-------------------------------------"),this.appendDummyInput().appendField("Қайталау саны ").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Батырма басылулы ма: ").appendField(new i.FieldCheckbox("TRUE"),"is_pressed"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.button_setup=bo;const Oo={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/button/button.png",15,15,"*")).appendField("Батырма").appendField(new i.FieldDropdown(()=>Pe("button_setup",A().digitalPins)),"PIN").appendField("басылған ба?"),this.setOutput(!0,"Boolean"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.is_button_pressed=Oo;/*!
 * iro.js v5.5.2
 * 2016-2021 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */var L,De,nn,tt,on,J={},ut=[],No=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function z(e,t){for(var n in t)e[n]=t[n];return e}function rn(e){var t=e.parentNode;t&&t.removeChild(e)}function k(e,t,n){var o,r,s,l,a=arguments;if(t=z({},t),arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(a[o]);if(n!=null&&(t.children=n),e!=null&&e.defaultProps!=null)for(r in e.defaultProps)t[r]===void 0&&(t[r]=e.defaultProps[r]);return l=t.key,(s=t.ref)!=null&&delete t.ref,l!=null&&delete t.key,nt(e,t,l,s)}function nt(e,t,n,o){var r={type:e,props:t,key:n,ref:o,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return L.vnode&&L.vnode(r),r}function we(e){return e.children}function yo(e){if(e==null||typeof e=="boolean")return null;if(typeof e=="string"||typeof e=="number")return nt(null,e,null,null);if(e.__e!=null||e.__c!=null){var t=nt(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}function ae(e,t){this.props=e,this.context=t}function ke(e,t){if(t==null)return e.__p?ke(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ke(e):null}function sn(e){var t,n;if((e=e.__p)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return sn(e)}}function ze(e){(!e.__d&&(e.__d=!0)&&De.push(e)===1||tt!==L.debounceRendering)&&(tt=L.debounceRendering,(L.debounceRendering||nn)(So))}function So(){var e,t,n,o,r,s,l,a;for(De.sort(function(d,c){return c.__v.__b-d.__v.__b});e=De.pop();)e.__d&&(n=void 0,o=void 0,s=(r=(t=e).__v).__e,l=t.__P,a=t.u,t.u=!1,l&&(n=[],o=pt(l,r,z({},r),t.__n,l.ownerSVGElement!==void 0,null,n,a,s??ke(r)),an(n,r),o!=s&&sn(r)))}function ln(e,t,n,o,r,s,l,a,d){var c,u,p,h,f,N,O,T=n&&n.__k||ut,y=T.length;if(a==J&&(a=s!=null?s[0]:y?ke(n,0):null),c=0,t.__k=ct(t.__k,function(D){if(D!=null){if(D.__p=t,D.__b=t.__b+1,(p=T[c])===null||p&&D.key==p.key&&D.type===p.type)T[c]=void 0;else for(u=0;u<y;u++){if((p=T[u])&&D.key==p.key&&D.type===p.type){T[u]=void 0;break}p=null}if(h=pt(e,D,p=p||J,o,r,s,l,null,a,d),(u=D.ref)&&p.ref!=u&&(O||(O=[])).push(u,D.__c||h,D),h!=null){if(N==null&&(N=h),D.l!=null)h=D.l,D.l=null;else if(s==p||h!=a||h.parentNode==null){e:if(a==null||a.parentNode!==e)e.appendChild(h);else{for(f=a,u=0;(f=f.nextSibling)&&u<y;u+=2)if(f==h)break e;e.insertBefore(h,a)}t.type=="option"&&(e.value="")}a=h.nextSibling,typeof t.type=="function"&&(t.l=h)}}return c++,D}),t.__e=N,s!=null&&typeof t.type!="function")for(c=s.length;c--;)s[c]!=null&&rn(s[c]);for(c=y;c--;)T[c]!=null&&un(T[c],T[c]);if(O)for(c=0;c<O.length;c++)dn(O[c],O[++c],O[++c])}function ct(e,t,n){if(n==null&&(n=[]),e==null||typeof e=="boolean")t&&n.push(t(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)ct(e[o],t,n);else n.push(t?t(yo(e)):e);return n}function Ao(e,t,n,o,r){var s;for(s in n)s in t||Dt(e,s,null,n[s],o);for(s in t)r&&typeof t[s]!="function"||s==="value"||s==="checked"||n[s]===t[s]||Dt(e,s,t[s],n[s],o)}function Ct(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=typeof n=="number"&&No.test(t)===!1?n+"px":n??""}function Dt(e,t,n,o,r){var s,l,a,d,c;if(!((t=r?t==="className"?"class":t:t==="class"?"className":t)==="key"||t==="children"))if(t==="style")if(s=e.style,typeof n=="string")s.cssText=n;else{if(typeof o=="string"&&(s.cssText="",o=null),o)for(l in o)n&&l in n||Ct(s,l,"");if(n)for(a in n)o&&n[a]===o[a]||Ct(s,a,n[a])}else t[0]==="o"&&t[1]==="n"?(d=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(o||e.addEventListener(t,kt,d),(e.t||(e.t={}))[t]=n):e.removeEventListener(t,kt,d)):t!=="list"&&t!=="tagName"&&t!=="form"&&!r&&t in e?e[t]=n??"":typeof n!="function"&&t!=="dangerouslySetInnerHTML"&&(t!==(t=t.replace(/^xlink:?/,""))?n==null||n===!1?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):n==null||n===!1?e.removeAttribute(t):e.setAttribute(t,n))}function kt(e){return this.t[e.type](L.event?L.event(e):e)}function pt(e,t,n,o,r,s,l,a,d,c){var u,p,h,f,N,O,T,y,D,P,U=t.type;if(t.constructor!==void 0)return null;(u=L.__b)&&u(t);try{e:if(typeof U=="function"){if(y=t.props,D=(u=U.contextType)&&o[u.__c],P=u?D?D.props.value:u.__p:o,n.__c?T=(p=t.__c=n.__c).__p=p.__E:("prototype"in U&&U.prototype.render?t.__c=p=new U(y,P):(t.__c=p=new ae(y,P),p.constructor=U,p.render=Io),D&&D.sub(p),p.props=y,p.state||(p.state={}),p.context=P,p.__n=o,h=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),U.getDerivedStateFromProps!=null&&z(p.__s==p.state?p.__s=z({},p.__s):p.__s,U.getDerivedStateFromProps(y,p.__s)),h)U.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&l.push(p);else{if(U.getDerivedStateFromProps==null&&a==null&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(y,P),!a&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(y,p.__s,P)===!1){for(p.props=y,p.state=p.__s,p.__d=!1,p.__v=t,t.__e=d!=null?d!==n.__e?d:n.__e:null,t.__k=n.__k,u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__p=t);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(y,p.__s,P)}for(f=p.props,N=p.state,p.context=P,p.props=y,p.state=p.__s,(u=L.__r)&&u(t),p.__d=!1,p.__v=t,p.__P=e,u=p.render(p.props,p.state,p.context),t.__k=ct(u!=null&&u.type==we&&u.key==null?u.props.children:u),p.getChildContext!=null&&(o=z(z({},o),p.getChildContext())),h||p.getSnapshotBeforeUpdate==null||(O=p.getSnapshotBeforeUpdate(f,N)),ln(e,t,n,o,r,s,l,d,c),p.base=t.__e;u=p.__h.pop();)p.__s&&(p.state=p.__s),u.call(p);h||f==null||p.componentDidUpdate==null||p.componentDidUpdate(f,N,O),T&&(p.__E=p.__p=null)}else t.__e=To(n.__e,t,n,o,r,s,l,c);(u=L.diffed)&&u(t)}catch(j){L.__e(j,t,n)}return t.__e}function an(e,t){for(var n;n=e.pop();)try{n.componentDidMount()}catch(o){L.__e(o,n.__v)}L.__c&&L.__c(t)}function To(e,t,n,o,r,s,l,a){var d,c,u,p,h=n.props,f=t.props;if(r=t.type==="svg"||r,e==null&&s!=null){for(d=0;d<s.length;d++)if((c=s[d])!=null&&(t.type===null?c.nodeType===3:c.localName===t.type)){e=c,s[d]=null;break}}if(e==null){if(t.type===null)return document.createTextNode(f);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),s=null}return t.type===null?h!==f&&(s!=null&&(s[s.indexOf(e)]=null),e.data=f):t!==n&&(s!=null&&(s=ut.slice.call(e.childNodes)),u=(h=n.props||J).dangerouslySetInnerHTML,p=f.dangerouslySetInnerHTML,a||(p||u)&&(p&&u&&p.__html==u.__html||(e.innerHTML=p&&p.__html||"")),Ao(e,f,h,r,a),t.__k=t.props.children,p||ln(e,t,n,o,t.type!=="foreignObject"&&r,s,l,J,a),a||("value"in f&&f.value!==void 0&&f.value!==e.value&&(e.value=f.value==null?"":f.value),"checked"in f&&f.checked!==void 0&&f.checked!==e.checked&&(e.checked=f.checked))),e}function dn(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){L.__e(o,n)}}function un(e,t,n){var o,r,s;if(L.unmount&&L.unmount(e),(o=e.ref)&&dn(o,null,t),n||typeof e.type=="function"||(n=(r=e.__e)!=null),e.__e=e.l=null,(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(l){L.__e(l,t)}o.base=o.__P=null}if(o=e.__k)for(s=0;s<o.length;s++)o[s]&&un(o[s],t,n);r!=null&&rn(r)}function Io(e,t,n){return this.constructor(e,n)}function Ro(e,t,n){var o,r,s;L.__p&&L.__p(e,t),r=(o=n===on)?null:n&&n.__k||t.__k,e=k(we,null,[e]),s=[],pt(t,o?t.__k=e:(n||t).__k=e,r||J,J,t.ownerSVGElement!==void 0,n&&!o?[n]:r?null:ut.slice.call(t.childNodes),s,!1,n||J,o),an(s,e)}L={},ae.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=z({},this.state));(typeof e!="function"||(e=e(n,this.props)))&&z(n,e),e!=null&&this.__v&&(this.u=!1,t&&this.__h.push(t),ze(this))},ae.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,ze(this))},ae.prototype.render=we,De=[],nn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,tt=L.debounceRendering,L.__e=function(e,t,n){for(var o;t=t.__p;)if((o=t.__c)&&!o.__p)try{if(o.constructor&&o.constructor.getDerivedStateFromError!=null)o.setState(o.constructor.getDerivedStateFromError(e));else{if(o.componentDidCatch==null)continue;o.componentDidCatch(e)}return ze(o.__E=o)}catch(r){e=r}throw e},on=J;function vt(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Co(e,t,n){return t&&vt(e.prototype,t),n&&vt(e,n),e}function B(){return B=Object.assign||function(e){for(var t=arguments,n=1;n<arguments.length;n++){var o=t[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},B.apply(this,arguments)}var Do="[-\\+]?\\d+%?",ko="[-\\+]?\\d*\\.\\d+%?",Q="(?:"+ko+")|(?:"+Do+")",cn="[\\s|\\(]+("+Q+")[,|\\s]+("+Q+")[,|\\s]+("+Q+")\\s*\\)?",pn="[\\s|\\(]+("+Q+")[,|\\s]+("+Q+")[,|\\s]+("+Q+")[,|\\s]+("+Q+")\\s*\\)?",vo=new RegExp("rgb"+cn),Lo=new RegExp("rgba"+pn),Po=new RegExp("hsl"+cn),wo=new RegExp("hsla"+pn),Fe="^(?:#?|0x?)",ee="([0-9a-fA-F]{1})",te="([0-9a-fA-F]{2})",Fo=new RegExp(Fe+ee+ee+ee+"$"),Mo=new RegExp(Fe+ee+ee+ee+ee+"$"),Bo=new RegExp(Fe+te+te+te+"$"),Uo=new RegExp(Fe+te+te+te+te+"$"),xo=2e3,Vo=4e4,Ee=Math.log,re=Math.round,_e=Math.floor;function G(e,t,n){return Math.min(Math.max(e,t),n)}function F(e,t){var n=e.indexOf("%")>-1,o=parseFloat(e);return n?t/100*o:o}function M(e){return parseInt(e,16)}function Z(e){return e.toString(16).padStart(2,"0")}var le=function(){function e(n,o){this.$={h:0,s:0,v:0,a:1},n&&this.set(n),this.onChange=o,this.initialValue=B({},this.$)}var t=e.prototype;return t.set=function(o){if(typeof o=="string")/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(o)?this.hexString=o:/^rgba?/.test(o)?this.rgbString=o:/^hsla?/.test(o)&&(this.hslString=o);else if(typeof o=="object")o instanceof e?this.hsva=o.hsva:"r"in o&&"g"in o&&"b"in o?this.rgb=o:"h"in o&&"s"in o&&"v"in o?this.hsv=o:"h"in o&&"s"in o&&"l"in o?this.hsl=o:"kelvin"in o&&(this.kelvin=o.kelvin);else throw new Error("Invalid color value")},t.setChannel=function(o,r,s){var l;this[o]=B({},this[o],(l={},l[r]=s,l))},t.reset=function(){this.hsva=this.initialValue},t.clone=function(){return new e(this)},t.unbind=function(){this.onChange=void 0},e.hsvToRgb=function(o){var r=o.h/60,s=o.s/100,l=o.v/100,a=_e(r),d=r-a,c=l*(1-s),u=l*(1-d*s),p=l*(1-(1-d)*s),h=a%6,f=[l,u,c,c,p,l][h],N=[p,l,l,u,c,c][h],O=[c,c,p,l,l,u][h];return{r:G(f*255,0,255),g:G(N*255,0,255),b:G(O*255,0,255)}},e.rgbToHsv=function(o){var r=o.r/255,s=o.g/255,l=o.b/255,a=Math.max(r,s,l),d=Math.min(r,s,l),c=a-d,u=0,p=a,h=a===0?0:c/a;switch(a){case d:u=0;break;case r:u=(s-l)/c+(s<l?6:0);break;case s:u=(l-r)/c+2;break;case l:u=(r-s)/c+4;break}return{h:u*60%360,s:G(h*100,0,100),v:G(p*100,0,100)}},e.hsvToHsl=function(o){var r=o.s/100,s=o.v/100,l=(2-r)*s,a=l<=1?l:2-l,d=a<1e-9?0:r*s/a;return{h:o.h,s:G(d*100,0,100),l:G(l*50,0,100)}},e.hslToHsv=function(o){var r=o.l*2,s=o.s*(r<=100?r:200-r)/100,l=r+s<1e-9?0:2*s/(r+s);return{h:o.h,s:G(l*100,0,100),v:G((r+s)/2,0,100)}},e.kelvinToRgb=function(o){var r=o/100,s,l,a;return r<66?(s=255,l=-155.25485562709179-.44596950469579133*(l=r-2)+104.49216199393888*Ee(l),a=r<20?0:-254.76935184120902+.8274096064007395*(a=r-10)+115.67994401066147*Ee(a)):(s=351.97690566805693+.114206453784165*(s=r-55)-40.25366309332127*Ee(s),l=325.4494125711974+.07943456536662342*(l=r-50)-28.0852963507957*Ee(l),a=255),{r:G(_e(s),0,255),g:G(_e(l),0,255),b:G(_e(a),0,255)}},e.rgbToKelvin=function(o){for(var r=o.r,s=o.b,l=.4,a=xo,d=Vo,c;d-a>l;){c=(d+a)*.5;var u=e.kelvinToRgb(c);u.b/u.r>=s/r?d=c:a=c}return c},Co(e,[{key:"hsv",get:function(){var o=this.$;return{h:o.h,s:o.s,v:o.v}},set:function(o){var r=this.$;if(o=B({},r,o),this.onChange){var s={h:!1,v:!1,s:!1,a:!1};for(var l in r)s[l]=o[l]!=r[l];this.$=o,(s.h||s.s||s.v||s.a)&&this.onChange(this,s)}else this.$=o}},{key:"hsva",get:function(){return B({},this.$)},set:function(o){this.hsv=o}},{key:"hue",get:function(){return this.$.h},set:function(o){this.hsv={h:o}}},{key:"saturation",get:function(){return this.$.s},set:function(o){this.hsv={s:o}}},{key:"value",get:function(){return this.$.v},set:function(o){this.hsv={v:o}}},{key:"alpha",get:function(){return this.$.a},set:function(o){this.hsv=B({},this.hsv,{a:o})}},{key:"kelvin",get:function(){return e.rgbToKelvin(this.rgb)},set:function(o){this.rgb=e.kelvinToRgb(o)}},{key:"red",get:function(){var o=this.rgb;return o.r},set:function(o){this.rgb=B({},this.rgb,{r:o})}},{key:"green",get:function(){var o=this.rgb;return o.g},set:function(o){this.rgb=B({},this.rgb,{g:o})}},{key:"blue",get:function(){var o=this.rgb;return o.b},set:function(o){this.rgb=B({},this.rgb,{b:o})}},{key:"rgb",get:function(){var o=e.hsvToRgb(this.$),r=o.r,s=o.g,l=o.b;return{r:re(r),g:re(s),b:re(l)}},set:function(o){this.hsv=B({},e.rgbToHsv(o),{a:o.a===void 0?1:o.a})}},{key:"rgba",get:function(){return B({},this.rgb,{a:this.alpha})},set:function(o){this.rgb=o}},{key:"hsl",get:function(){var o=e.hsvToHsl(this.$),r=o.h,s=o.s,l=o.l;return{h:re(r),s:re(s),l:re(l)}},set:function(o){this.hsv=B({},e.hslToHsv(o),{a:o.a===void 0?1:o.a})}},{key:"hsla",get:function(){return B({},this.hsl,{a:this.alpha})},set:function(o){this.hsl=o}},{key:"rgbString",get:function(){var o=this.rgb;return"rgb("+o.r+", "+o.g+", "+o.b+")"},set:function(o){var r,s,l,a,d=1;if((r=vo.exec(o))?(s=F(r[1],255),l=F(r[2],255),a=F(r[3],255)):(r=Lo.exec(o))&&(s=F(r[1],255),l=F(r[2],255),a=F(r[3],255),d=F(r[4],1)),r)this.rgb={r:s,g:l,b:a,a:d};else throw new Error("Invalid rgb string")}},{key:"rgbaString",get:function(){var o=this.rgba;return"rgba("+o.r+", "+o.g+", "+o.b+", "+o.a+")"},set:function(o){this.rgbString=o}},{key:"hexString",get:function(){var o=this.rgb;return"#"+Z(o.r)+Z(o.g)+Z(o.b)},set:function(o){var r,s,l,a,d=255;if((r=Fo.exec(o))?(s=M(r[1])*17,l=M(r[2])*17,a=M(r[3])*17):(r=Mo.exec(o))?(s=M(r[1])*17,l=M(r[2])*17,a=M(r[3])*17,d=M(r[4])*17):(r=Bo.exec(o))?(s=M(r[1]),l=M(r[2]),a=M(r[3])):(r=Uo.exec(o))&&(s=M(r[1]),l=M(r[2]),a=M(r[3]),d=M(r[4])),r)this.rgb={r:s,g:l,b:a,a:d/255};else throw new Error("Invalid hex string")}},{key:"hex8String",get:function(){var o=this.rgba;return"#"+Z(o.r)+Z(o.g)+Z(o.b)+Z(_e(o.a*255))},set:function(o){this.hexString=o}},{key:"hslString",get:function(){var o=this.hsl;return"hsl("+o.h+", "+o.s+"%, "+o.l+"%)"},set:function(o){var r,s,l,a,d=1;if((r=Po.exec(o))?(s=F(r[1],360),l=F(r[2],100),a=F(r[3],100)):(r=wo.exec(o))&&(s=F(r[1],360),l=F(r[2],100),a=F(r[3],100),d=F(r[4],1)),r)this.hsl={h:s,s:l,l:a,a:d};else throw new Error("Invalid hsl string")}},{key:"hslaString",get:function(){var o=this.hsla;return"hsla("+o.h+", "+o.s+"%, "+o.l+"%, "+o.a+")"},set:function(o){this.hslString=o}}]),e}(),Go={sliderShape:"bar",sliderType:"value",minTemperature:2200,maxTemperature:11e3};function _t(e){var t,n=e.width,o=e.sliderSize,r=e.borderWidth,s=e.handleRadius,l=e.padding,a=e.sliderShape,d=e.layoutDirection==="horizontal";return o=(t=o)!=null?t:l*2+s*2,a==="circle"?{handleStart:e.padding+e.handleRadius,handleRange:n-l*2-s*2,width:n,height:n,cx:n/2,cy:n/2,radius:n/2-r/2}:{handleStart:o/2,handleRange:n-o,radius:o/2,x:0,y:0,width:d?o:n,height:d?n:o}}function Ho(e,t){var n=t.hsva,o=t.rgb;switch(e.sliderType){case"red":return o.r/2.55;case"green":return o.g/2.55;case"blue":return o.b/2.55;case"alpha":return n.a*100;case"kelvin":var r=e.minTemperature,s=e.maxTemperature,l=s-r,a=(t.kelvin-r)/l*100;return Math.max(0,Math.min(a,100));case"hue":return n.h/=3.6;case"saturation":return n.s;case"value":default:return n.v}}function Wo(e,t,n){var o=_t(e),r=o.handleRange,s=o.handleStart,l;e.layoutDirection==="horizontal"?l=-1*n+r+s:l=t-s,l=Math.max(Math.min(l,r),0);var a=Math.round(100/r*l);switch(e.sliderType){case"kelvin":var d=e.minTemperature,c=e.maxTemperature,u=c-d;return d+u*(a/100);case"alpha":return a/100;case"hue":return a*3.6;case"red":case"blue":case"green":return a*2.55;default:return a}}function $o(e,t){var n=_t(e),o=n.width,r=n.height,s=n.handleRange,l=n.handleStart,a=e.layoutDirection==="horizontal",d=Ho(e,t),c=a?o/2:r/2,u=l+d/100*s;return a&&(u=-1*u+s+l*2),{x:a?c:u,y:a?u:c}}function Xo(e,t){var n=t.hsv,o=t.rgb;switch(e.sliderType){case"red":return[[0,"rgb(0,"+o.g+","+o.b+")"],[100,"rgb(255,"+o.g+","+o.b+")"]];case"green":return[[0,"rgb("+o.r+",0,"+o.b+")"],[100,"rgb("+o.r+",255,"+o.b+")"]];case"blue":return[[0,"rgb("+o.r+","+o.g+",0)"],[100,"rgb("+o.r+","+o.g+",255)"]];case"alpha":return[[0,"rgba("+o.r+","+o.g+","+o.b+",0)"],[100,"rgb("+o.r+","+o.g+","+o.b+")"]];case"kelvin":for(var r=[],s=e.minTemperature,l=e.maxTemperature,a=8,d=l-s,c=s,u=0;c<l;c+=d/a,u+=1){var p=le.kelvinToRgb(c),h=p.r,f=p.g,N=p.b;r.push([100/a*u,"rgb("+h+","+f+","+N+")"])}return r;case"hue":return[[0,"#f00"],[16.666,"#ff0"],[33.333,"#0f0"],[50,"#0ff"],[66.666,"#00f"],[83.333,"#f0f"],[100,"#f00"]];case"saturation":var O=le.hsvToHsl({h:n.h,s:0,v:n.v}),T=le.hsvToHsl({h:n.h,s:100,v:n.v});return[[0,"hsl("+O.h+","+O.s+"%,"+O.l+"%)"],[100,"hsl("+T.h+","+T.s+"%,"+T.l+"%)"]];case"value":default:var y=le.hsvToHsl({h:n.h,s:n.s,v:100});return[[0,"#000"],[100,"hsl("+y.h+","+y.s+"%,"+y.l+"%)"]]}}var _n=Math.PI*2,Ko=function(t,n){return(t%n+n)%n},mn=function(t,n){return Math.sqrt(t*t+n*n)};function fn(e){return e.width/2-e.padding-e.handleRadius-e.borderWidth}function Yo(e,t,n){var o=Me(e),r=o.cx,s=o.cy,l=e.width/2;return mn(r-t,s-n)<l}function Me(e){var t=e.width/2;return{width:e.width,radius:t-e.borderWidth,cx:t,cy:t}}function gn(e,t,n){var o=e.wheelAngle,r=e.wheelDirection;return n&&r==="clockwise"?t=o+t:r==="clockwise"?t=360-o+t:n&&r==="anticlockwise"?t=o+180-t:r==="anticlockwise"&&(t=o-t),Ko(t,360)}function jo(e,t){var n=t.hsv,o=Me(e),r=o.cx,s=o.cy,l=fn(e),a=(180+gn(e,n.h,!0))*(_n/360),d=n.s/100*l,c=e.wheelDirection==="clockwise"?-1:1;return{x:r+d*Math.cos(a)*c,y:s+d*Math.sin(a)*c}}function Lt(e,t,n){var o=Me(e),r=o.cx,s=o.cy,l=fn(e);t=r-t,n=s-n;var a=gn(e,Math.atan2(-n,-t)*(360/_n)),d=Math.min(mn(t,n),l);return{h:Math.round(a),s:Math.round(100/l*d)}}function mt(e){var t=e.width,n=e.boxHeight,o=e.padding,r=e.handleRadius;return{width:t,height:n??t,radius:o+r}}function Pt(e,t,n){var o=mt(e),r=o.width,s=o.height,l=o.radius,a=l,d=r-l*2,c=s-l*2,u=(t-a)/d*100,p=(n-a)/c*100;return{s:Math.max(0,Math.min(u,100)),v:Math.max(0,Math.min(100-p,100))}}function zo(e,t){var n=mt(e),o=n.width,r=n.height,s=n.radius,l=t.hsv,a=s,d=o-s*2,c=r-s*2;return{x:a+l.s/100*d,y:a+(c-l.v/100*c)}}function Jo(e,t){var n=t.hue;return[[[0,"#fff"],[100,"hsl("+n+",100%,50%)"]],[[0,"rgba(0,0,0,0)"],[100,"#000"]]]}var Je;function qo(e){Je||(Je=document.getElementsByTagName("base"));var t=window.navigator.userAgent,n=/^((?!chrome|android).)*safari/i.test(t),o=/iPhone|iPod|iPad/i.test(t),r=window.location;return(n||o)&&Je.length>0?r.protocol+"//"+r.host+r.pathname+r.search+e:e}function hn(e,t,n,o){for(var r=0;r<o.length;r++){var s=o[r].x-t,l=o[r].y-n,a=Math.sqrt(s*s+l*l);if(a<e.handleRadius)return r}return null}function ft(e){return{boxSizing:"border-box",border:e.borderWidth+"px solid "+e.borderColor}}function ot(e,t,n){return e+"-gradient("+t+", "+n.map(function(o){var r=o[0],s=o[1];return s+" "+r+"%"}).join(",")+")"}function w(e){return typeof e=="string"?e:e+"px"}var Zo={width:300,height:300,color:"#fff",colors:[],padding:6,layoutDirection:"vertical",borderColor:"#fff",borderWidth:0,handleRadius:8,activeHandleRadius:null,handleSvg:null,handleProps:{x:0,y:0},wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderSize:null,sliderMargin:12,boxHeight:null},wt=["mousemove","touchmove","mouseup","touchend"],Be=function(e){function t(n){e.call(this,n),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(o){var r=this.handleEvent.bind(this),s={onMouseDown:r,ontouchstart:r},l=o.layoutDirection==="horizontal",a=o.margin===null?o.sliderMargin:o.margin,d={overflow:"visible",display:l?"inline-block":"block"};return o.index>0&&(d[l?"marginLeft":"marginTop"]=a),k(we,null,o.children(this.uid,s,d))},t.prototype.handleEvent=function(o){var r=this,s=this.props.onInput,l=this.base.getBoundingClientRect();o.preventDefault();var a=o.touches?o.changedTouches[0]:o,d=a.clientX-l.left,c=a.clientY-l.top;switch(o.type){case"mousedown":case"touchstart":var u=s(d,c,0);u!==!1&&wt.forEach(function(p){document.addEventListener(p,r,{passive:!1})});break;case"mousemove":case"touchmove":s(d,c,1);break;case"mouseup":case"touchend":s(d,c,2),wt.forEach(function(p){document.removeEventListener(p,r,{passive:!1})});break}},t}(ae);function oe(e){var t=e.r,n=e.url,o=t,r=t;return k("svg",{className:"IroHandle IroHandle--"+e.index+" "+(e.isActive?"IroHandle--isActive":""),style:{"-webkit-tap-highlight-color":"rgba(0, 0, 0, 0);",transform:"translate("+w(e.x)+", "+w(e.y)+")",willChange:"transform",top:w(-t),left:w(-t),width:w(t*2),height:w(t*2),position:"absolute",overflow:"visible"}},n&&k("use",Object.assign({xlinkHref:qo(n)},e.props)),!n&&k("circle",{cx:o,cy:r,r:t,fill:"none","stroke-width":2,stroke:"#000"}),!n&&k("circle",{cx:o,cy:r,r:t-2,fill:e.fill,"stroke-width":2,stroke:"#fff"}))}oe.defaultProps={fill:"none",x:0,y:0,r:8,url:null,props:{x:0,y:0}};function ve(e){var t=e.activeIndex,n=t!==void 0&&t<e.colors.length?e.colors[t]:e.color,o=_t(e),r=o.width,s=o.height,l=o.radius,a=$o(e,n),d=Xo(e,n);function c(u,p,h){var f=Wo(e,u,p);e.parent.inputActive=!0,n[e.sliderType]=f,e.onInput(h,e.id)}return k(Be,Object.assign({},e,{onInput:c}),function(u,p,h){return k("div",Object.assign({},p,{className:"IroSlider",style:Object.assign({},{position:"relative",width:w(r),height:w(s),borderRadius:w(l),background:"conic-gradient(#ccc 25%, #fff 0 50%, #ccc 0 75%, #fff 0)",backgroundSize:"8px 8px"},h)}),k("div",{className:"IroSliderGradient",style:Object.assign({},{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:w(l),background:ot("linear",e.layoutDirection==="horizontal"?"to top":"to right",d)},ft(e))}),k(oe,{isActive:!0,index:n.index,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a.x,y:a.y}))})}ve.defaultProps=Object.assign({},Go);function Qo(e){var t=mt(e),n=t.width,o=t.height,r=t.radius,s=e.colors,l=e.parent,a=e.activeIndex,d=a!==void 0&&a<e.colors.length?e.colors[a]:e.color,c=Jo(e,d),u=s.map(function(h){return zo(e,h)});function p(h,f,N){if(N===0){var O=hn(e,h,f,u);O!==null?l.setActiveColor(O):(l.inputActive=!0,d.hsv=Pt(e,h,f),e.onInput(N,e.id))}else N===1&&(l.inputActive=!0,d.hsv=Pt(e,h,f));e.onInput(N,e.id)}return k(Be,Object.assign({},e,{onInput:p}),function(h,f,N){return k("div",Object.assign({},f,{className:"IroBox",style:Object.assign({},{width:w(n),height:w(o),position:"relative"},N)}),k("div",{className:"IroBox",style:Object.assign({},{width:"100%",height:"100%",borderRadius:w(r)},ft(e),{background:ot("linear","to bottom",c[1])+","+ot("linear","to right",c[0])})}),s.filter(function(O){return O!==d}).map(function(O){return k(oe,{isActive:!1,index:O.index,fill:O.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[O.index].x,y:u[O.index].y})}),k(oe,{isActive:!0,index:d.index,fill:d.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:u[d.index].x,y:u[d.index].y}))})}var ei="conic-gradient(red, yellow, lime, aqua, blue, magenta, red)",ti="conic-gradient(red, magenta, blue, aqua, lime, yellow, red)";function En(e){var t=Me(e),n=t.width,o=e.colors;e.borderWidth;var r=e.parent,s=e.color,l=s.hsv,a=o.map(function(u){return jo(e,u)}),d={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",boxSizing:"border-box"};function c(u,p,h){if(h===0){if(!Yo(e,u,p))return!1;var f=hn(e,u,p,a);f!==null?r.setActiveColor(f):(r.inputActive=!0,s.hsv=Lt(e,u,p),e.onInput(h,e.id))}else h===1&&(r.inputActive=!0,s.hsv=Lt(e,u,p));e.onInput(h,e.id)}return k(Be,Object.assign({},e,{onInput:c}),function(u,p,h){return k("div",Object.assign({},p,{className:"IroWheel",style:Object.assign({},{width:w(n),height:w(n),position:"relative"},h)}),k("div",{className:"IroWheelHue",style:Object.assign({},d,{transform:"rotateZ("+(e.wheelAngle+90)+"deg)",background:e.wheelDirection==="clockwise"?ei:ti})}),k("div",{className:"IroWheelSaturation",style:Object.assign({},d,{background:"radial-gradient(circle closest-side, #fff, transparent)"})}),e.wheelLightness&&k("div",{className:"IroWheelLightness",style:Object.assign({},d,{background:"#000",opacity:1-l.v/100})}),k("div",{className:"IroWheelBorder",style:Object.assign({},d,ft(e))}),o.filter(function(f){return f!==s}).map(function(f){return k(oe,{isActive:!1,index:f.index,fill:f.hslString,r:e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a[f.index].x,y:a[f.index].y})}),k(oe,{isActive:!0,index:s.index,fill:s.hslString,r:e.activeHandleRadius||e.handleRadius,url:e.handleSvg,props:e.handleProps,x:a[s.index].x,y:a[s.index].y}))})}function ni(e){var t=function(n,o){var r,s=document.createElement("div");Ro(k(e,Object.assign({},{ref:function(a){return r=a}},o)),s);function l(){var a=n instanceof Element?n:document.querySelector(n);a.appendChild(r.base),r.onMount(a)}return document.readyState!=="loading"?l():document.addEventListener("DOMContentLoaded",l),r};return t.prototype=e.prototype,Object.assign(t,e),t.__component=e,t}var bn=function(e){function t(n){var o=this;e.call(this,n),this.colors=[],this.inputActive=!1,this.events={},this.activeEvents={},this.deferredEvents={},this.id=n.id;var r=n.colors.length>0?n.colors:[n.color];r.forEach(function(s){return o.addColor(s)}),this.setActiveColor(0),this.state=Object.assign({},n,{color:this.color,colors:this.colors,layout:n.layout})}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.addColor=function(o,r){r===void 0&&(r=this.colors.length);var s=new le(o,this.onColorChange.bind(this));this.colors.splice(r,0,s),this.colors.forEach(function(l,a){return l.index=a}),this.state&&this.setState({colors:this.colors}),this.deferredEmit("color:init",s)},t.prototype.removeColor=function(o){var r=this.colors.splice(o,1)[0];r.unbind(),this.colors.forEach(function(s,l){return s.index=l}),this.state&&this.setState({colors:this.colors}),r.index===this.color.index&&this.setActiveColor(0),this.emit("color:remove",r)},t.prototype.setActiveColor=function(o){this.color=this.colors[o],this.state&&this.setState({color:this.color}),this.emit("color:setActive",this.color)},t.prototype.setColors=function(o,r){var s=this;r===void 0&&(r=0),this.colors.forEach(function(l){return l.unbind()}),this.colors=[],o.forEach(function(l){return s.addColor(l)}),this.setActiveColor(r),this.emit("color:setAll",this.colors)},t.prototype.on=function(o,r){var s=this,l=this.events;(Array.isArray(o)?o:[o]).forEach(function(a){(l[a]||(l[a]=[])).push(r),s.deferredEvents[a]&&(s.deferredEvents[a].forEach(function(d){r.apply(null,d)}),s.deferredEvents[a]=[])})},t.prototype.off=function(o,r){var s=this;(Array.isArray(o)?o:[o]).forEach(function(l){var a=s.events[l];a&&a.splice(a.indexOf(r),1)})},t.prototype.emit=function(o){for(var r=this,s=[],l=arguments.length-1;l-- >0;)s[l]=arguments[l+1];var a=this.activeEvents,d=a.hasOwnProperty(o)?a[o]:!1;if(!d){a[o]=!0;var c=this.events[o]||[];c.forEach(function(u){return u.apply(r,s)}),a[o]=!1}},t.prototype.deferredEmit=function(o){for(var r,s=[],l=arguments.length-1;l-- >0;)s[l]=arguments[l+1];var a=this.deferredEvents;(r=this).emit.apply(r,[o].concat(s)),(a[o]||(a[o]=[])).push(s)},t.prototype.setOptions=function(o){this.setState(o)},t.prototype.resize=function(o){this.setOptions({width:o})},t.prototype.reset=function(){this.colors.forEach(function(o){return o.reset()}),this.setState({colors:this.colors})},t.prototype.onMount=function(o){this.el=o,this.deferredEmit("mount",this)},t.prototype.onColorChange=function(o,r){this.setState({color:this.color}),this.inputActive&&(this.inputActive=!1,this.emit("input:change",o,r)),this.emit("color:change",o,r)},t.prototype.emitInputEvent=function(o,r){o===0?this.emit("input:start",this.color,r):o===1?this.emit("input:move",this.color,r):o===2&&this.emit("input:end",this.color,r)},t.prototype.render=function(o,r){var s=this,l=r.layout;if(!Array.isArray(l)){switch(l){default:l=[{component:En},{component:ve}]}r.transparency&&l.push({component:ve,options:{sliderType:"alpha"}})}return k("div",{class:"IroColorPicker",id:r.id,style:{display:r.display}},l.map(function(a,d){var c=a.component,u=a.options;return k(c,Object.assign({},r,u,{ref:void 0,onInput:s.emitInputEvent.bind(s),parent:s,index:d}))}))},t}(ae);bn.defaultProps=Object.assign({},Zo,{colors:[],display:"block",id:null,layout:"default",margin:null});var oi=ni(bn),it;(function(e){e.version="5.5.2",e.Color=le,e.ColorPicker=oi,function(t){t.h=k,t.ComponentBase=Be,t.Handle=oe,t.Slider=ve,t.Wheel=En,t.Box=Qo}(e.ui||(e.ui={}))})(it||(it={}));var ii=it;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class ge extends ye.FieldColour{constructor(t,n=150,o={}){super(t),this.color=t,this.width=n,this.options=o}static fromJson(t){return new ge(t.color,t.size||150,t.options||{})}showEditor_(){const t=document.createElement("div");ye.DropDownDiv.getContentDiv().appendChild(t),t.classList.add("blockly-color-wheel-container"),ii.ColorPicker(t,{width:this.width,color:this.getValue(),...this.options}).on("color:change",o=>{this.setValue(o.hexString)}),ye.DropDownDiv.showPositionedByField(this,()=>t.remove())}}ye.fieldRegistry.register("color_wheel",ge);i.Blocks.color_picker_custom={init:function(){this.appendDummyInput().appendField(new ge("#ff00ff"),"COLOR"),this.setOutput(!0,"Colour"),this.setColour(m.VALUES),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.debug_block={init:function(){this.appendDummyInput().appendField("Debug"),this.appendDummyInput().appendField(new i.FieldImage("./blocks/debug/debug.png",70,50)),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.ARDUINO),this.setTooltip(""),this.setHelpUrl("")}};i.defineBlocksWithJsonArray([{type:"ir_remote_has_code_receive",message0:"%1 қашықтан басқару пульті код алды ма?",args0:[{type:"field_image",src:"./blocks/ir_remote/ir_remote.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"Boolean",colour:m.SENSOR,tooltip:"",helpUrl:""},{type:"ir_remote_get_code",message0:"%1 қашықтан кодты алады",args0:[{type:"field_image",src:"./blocks/ir_remote/ir_remote.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"String",colour:m.SENSOR,tooltip:"",helpUrl:""}]);const ri={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/ir_remote/ir_remote.png",15,15)).appendField("IR қашықтан басқару құралын орнату"),this.appendDummyInput().appendField("Аналогты Pin# ").appendField(new i.FieldDropdown(()=>A().analogPins),"PIN"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("-----------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Жаңа код сканерлене ме? ").appendField(new i.FieldCheckbox("TRUE",e=>(e==="FALSE"&&this.getField("code").setValue(""),e)),"scanned_new_code"),this.appendDummyInput().appendField("Код").appendField(new i.FieldTextInput("E932B",e=>this.getFieldValue("scanned_new_code")==="FALSE"?null:e),"code"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.ir_remote_setup=ri;i.Blocks.procedures_defnoreturn={init:function(){var t;var e=new i.FieldTextInput("",i.Procedures.rename);e.setSpellcheck(!1),this.appendDummyInput().appendField("блок жасау").appendField(e,"NAME"),(this.workspace.options.comments||this.workspace.options.parentWorkspace&&this.workspace.options.parentWorkspace.options.comments)&&i.Msg.PROCEDURES_DEFNORETURN_COMMENT&&(this.setCommentText("Бұл блок өз блоктарыңызды жасауға мүмкіндік береді.  Осы блоктың ішіне салған блоктар реттелетін блокты пайдаланған кезде іске қосылады."),(t=this.getIcon("comment"))==null||t.setBubbleSize(new i.utils.Size(460,110))),this.setStyle("procedure_blocks"),this.setTooltip(i.Msg.PROCEDURES_DEFNORETURN_TOOLTIP),this.setHelpUrl(i.Msg.PROCEDURES_DEFNORETURN_HELPURL),this.setStatements_(!0),this.statementConnection_=null},setStatements_:function(e){this.hasStatements_!==e&&(e?this.appendStatementInput("STACK").appendField(i.Msg.PROCEDURES_DEFNORETURN_DO):this.removeInput("STACK",!0),this.hasStatements_=e)},getProcedureDef:function(){return[this.getFieldValue("NAME"),[],!1]},callType_:"procedures_callnoreturn"};i.defineBlocksWithJsonArray([{type:"lcd_scroll",message0:"%1 1 бос орынды жылжытыңыз %2",args0:[{type:"field_image",src:"./blocks/lcd/lcd.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"field_dropdown",name:"DIR",options:[["RIGHT","RIGHT"],["LEFT","LEFT"]]}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"lcd_blink",message0:"%1 %2 %3 Жол %4 Баған %5",args0:[{type:"field_image",src:"./blocks/lcd/lcd.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"field_dropdown",name:"BLINK",options:[["Blink","BLINK"],["No Blink","OFF"]]},{type:"input_dummy"},{type:"input_value",name:"ROW",check:"Number",align:"RIGHT"},{type:"input_value",name:"COLUMN",check:"Number",align:"RIGHT"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"lcd_screen_simple_print",message0:"%1  Print -> Delay -> Clear %2 1-жолға жазу %3 2-жолға жазу %4 3-жолға жазу %5 4-жолға жазу %6 Кідіріс %7",args0:[{type:"field_image",src:"./blocks/lcd/lcd.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_dummy"},{type:"input_value",name:"ROW_1",check:"String",align:"RIGHT"},{type:"input_value",name:"ROW_2",check:"String",align:"RIGHT"},{type:"input_value",name:"ROW_3",check:"String",align:"RIGHT"},{type:"input_value",name:"ROW_4",check:"String",align:"RIGHT"},{type:"input_value",name:"DELAY",check:"Number",align:"RIGHT"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"lcd_backlight",message0:"%1 Артқы жарықты қосыңыз %2",args0:[{type:"field_image",src:"./blocks/lcd/lcd.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"field_dropdown",name:"BACKLIGHT",options:[["on","ON"],["off","OFF"]]}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"lcd_screen_print",message0:"%1 Басып шығару %2 Жол %3 Баған %4 Хабар %5",args0:[{type:"field_image",src:"./blocks/lcd/lcd.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_dummy"},{type:"input_value",name:"ROW",check:"Number",align:"RIGHT"},{type:"input_value",name:"COLUMN",check:"Number",align:"RIGHT"},{type:"input_value",name:"PRINT",check:"String",align:"RIGHT"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"lcd_screen_clear",message0:"%1 Тазалау",args0:[{type:"field_image",src:"./blocks/lcd/lcd.png",width:15,height:15,alt:"*",flipRtl:!1}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""}]);i.Blocks.lcd_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/lcd/lcd.png",15,15)).appendField("СКД орнату"),this.appendDummyInput().appendField("Жад түрі").appendField(new i.FieldDropdown([["0x3F","0x3F"],["0x27","0x27"]]),"MEMORY_TYPE"),this.appendDummyInput().appendField("Өлшемі").appendField(new i.FieldDropdown([["16 x 2","16 x 2"],["20 x 4","20 x 4"]]),"SIZE"),this.appendDummyInput().appendField("SDA").appendField(new i.FieldDropdown(()=>A().sdaPins),"PIN_SDA").appendField("SCL").appendField(new i.FieldDropdown(()=>A().sclPins),"PIN_SCL"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.defineBlocksWithJsonArray([{type:"led_matrix_make_draw",message0:"%1 Жарықдиодты матрицалық сызу %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71 %72 %73",args0:[{type:"field_image",src:"./blocks/led_matrix/led_matrix.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_dummy"},{type:"field_checkbox",name:"1,1",checked:!1},{type:"field_checkbox",name:"1,2",checked:!1},{type:"field_checkbox",name:"1,3",checked:!1},{type:"field_checkbox",name:"1,4",checked:!1},{type:"field_checkbox",name:"1,5",checked:!1},{type:"field_checkbox",name:"1,6",checked:!1},{type:"field_checkbox",name:"1,7",checked:!1},{type:"field_checkbox",name:"1,8",checked:!1},{type:"input_dummy"},{type:"field_checkbox",name:"2,1",checked:!1},{type:"field_checkbox",name:"2,2",checked:!1},{type:"field_checkbox",name:"2,3",checked:!1},{type:"field_checkbox",name:"2,4",checked:!1},{type:"field_checkbox",name:"2,5",checked:!1},{type:"field_checkbox",name:"2,6",checked:!1},{type:"field_checkbox",name:"2,7",checked:!1},{type:"field_checkbox",name:"2,8",checked:!1},{type:"input_dummy"},{type:"field_checkbox",name:"3,1",checked:!1},{type:"field_checkbox",name:"3,2",checked:!1},{type:"field_checkbox",name:"3,3",checked:!1},{type:"field_checkbox",name:"3,4",checked:!1},{type:"field_checkbox",name:"3,5",checked:!1},{type:"field_checkbox",name:"3,6",checked:!1},{type:"field_checkbox",name:"3,7",checked:!1},{type:"field_checkbox",name:"3,8",checked:!1},{type:"input_dummy"},{type:"field_checkbox",name:"4,1",checked:!1},{type:"field_checkbox",name:"4,2",checked:!1},{type:"field_checkbox",name:"4,3",checked:!1},{type:"field_checkbox",name:"4,4",checked:!1},{type:"field_checkbox",name:"4,5",checked:!1},{type:"field_checkbox",name:"4,6",checked:!1},{type:"field_checkbox",name:"4,7",checked:!1},{type:"field_checkbox",name:"4,8",checked:!1},{type:"input_dummy"},{type:"field_checkbox",name:"5,1",checked:!1},{type:"field_checkbox",name:"5,2",checked:!1},{type:"field_checkbox",name:"5,3",checked:!1},{type:"field_checkbox",name:"5,4",checked:!1},{type:"field_checkbox",name:"5,5",checked:!1},{type:"field_checkbox",name:"5,6",checked:!1},{type:"field_checkbox",name:"5,7",checked:!1},{type:"field_checkbox",name:"5,8",checked:!1},{type:"input_dummy"},{type:"field_checkbox",name:"6,1",checked:!1},{type:"field_checkbox",name:"6,2",checked:!1},{type:"field_checkbox",name:"6,3",checked:!1},{type:"field_checkbox",name:"6,4",checked:!1},{type:"field_checkbox",name:"6,5",checked:!1},{type:"field_checkbox",name:"6,6",checked:!1},{type:"field_checkbox",name:"6,7",checked:!1},{type:"field_checkbox",name:"6,8",checked:!1},{type:"input_dummy"},{type:"field_checkbox",name:"7,1",checked:!1},{type:"field_checkbox",name:"7,2",checked:!1},{type:"field_checkbox",name:"7,3",checked:!1},{type:"field_checkbox",name:"7,4",checked:!1},{type:"field_checkbox",name:"7,5",checked:!1},{type:"field_checkbox",name:"7,6",checked:!1},{type:"field_checkbox",name:"7,7",checked:!1},{type:"field_checkbox",name:"7,8",checked:!1},{type:"input_dummy"},{type:"field_checkbox",name:"8,1",checked:!1},{type:"field_checkbox",name:"8,2",checked:!1},{type:"field_checkbox",name:"8,3",checked:!1},{type:"field_checkbox",name:"8,4",checked:!1},{type:"field_checkbox",name:"8,5",checked:!1},{type:"field_checkbox",name:"8,6",checked:!1},{type:"field_checkbox",name:"8,7",checked:!1},{type:"field_checkbox",name:"8,8",checked:!1}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"led_matrix_turn_one_on_off",message0:"%1 Бір жарықдиодты %2 қосу %3 Қатар %4 Бағана %5",args0:[{type:"field_image",src:"./blocks/led_matrix/led_matrix.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"field_dropdown",name:"STATE",options:[["on","ON"],["off","OFF"]]},{type:"input_dummy"},{type:"input_value",name:"ROW",check:"Number",align:"RIGHT"},{type:"input_value",name:"COLUMN",check:"Number",align:"RIGHT"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""}]);i.Blocks.led_matrix_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/led_matrix/led_matrix.png",15,15)).appendField("Жарықдиодты матрицаны орнату"),this.appendDummyInput().appendField("Data Pin#").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_DATA"),this.appendDummyInput().appendField("CLK Pin#").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_CLK"),this.appendDummyInput().appendField("CS Pin#").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_CS"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.rgb_led_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/led/color_led.png",15,15)).appendField("RGB жарықдиодын орнату"),this.appendDummyInput().appendField("Сурет түрі").appendField(new i.FieldDropdown([["Макет платасында","BREADBOARD"],["Аппаратқа кіріктірілген","BUILT_IN"]]),"PICTURE_TYPE"),this.appendDummyInput().appendField("Қызыл").appendField(new i.FieldDropdown(()=>A().pwmPins),"PIN_RED").appendField("Жасыл").appendField(new i.FieldDropdown(()=>A().pwmPins),"PIN_GREEN").appendField("Көк").appendField(new i.FieldDropdown(()=>A().pwmPins),"PIN_BLUE"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.defineBlocksWithJsonArray([{type:"set_color_led",message0:"%1 RGB жарық диоды түсін орнатыңыз %2",args0:[{type:"field_image",src:"./blocks/led/color_led.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_value",name:"COLOUR",check:"Colour"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""}]);i.Blocks.led={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/led/led.png",15,15)).appendField("Жағу ").appendField(new i.FieldColour("red",null,{colourOptions:["#ff0000","#008000","#0000ff","#ffff00","#ffffff","#800080","#ffa500"]}),"COLOR").appendField(" led# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN").appendField(new i.FieldDropdown([["қосу","ON"],["өшіру","OFF"]]),"STATE"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.led_fade={init:function(){this.appendValueInput("Жарықтығы").setCheck("Number").appendField(new i.FieldImage("./blocks/led/led.png",15,15)).appendField("Жарықтығын өзгерту").appendField(new i.FieldColour("red",null,{colourOptions:["#ff0000","#008000","#0000ff","#ffff00","#ffffff","#800080","#ffa500"]}),"COLOR").appendField(" led# ").appendField(new i.FieldDropdown(()=>A().pwmPins),"PIN").appendField(" "),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.defineBlocksWithJsonArray([{type:"neo_pixel_set_color",message0:"%1 Жарықдиодтың түсін орнату %2 Қай жарықдиод: %3 Қандай түс: %4",args0:[{type:"field_image",src:"./blocks/neo_pixel/neo_pixel.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_dummy"},{type:"input_value",name:"POSITION",check:"Number",align:"RIGHT"},{type:"input_value",name:"COLOR",check:"Colour",align:"RIGHT"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""}]);i.Blocks.neo_pixel_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/neo_pixel/neo_pixel.png",15,15)).appendField("Жарықдиодты түсті жолақты орнату"),this.appendDummyInput().appendField("Аналогтық деректер пині").appendField(new i.FieldDropdown(()=>A().pwmPins),"PIN"),this.appendDummyInput().appendField("Жарықдиодтар саны").appendField(new i.FieldNumber(30,1,150),"NUMBER_LEDS"),this.appendDummyInput().appendField("Жарықтық 1-ден 20-ға дейін").appendField(new i.FieldNumber(10,1,20,1),"BRIGHTNESS"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.defineBlocksWithJsonArray([{type:"fastled_set_color",message0:"%1 Жарық диодтың түсін орнату %2 Қай LED? %3 Қандай түс? %4",args0:[{type:"field_image",src:"./blocks/neo_pixel/neo_pixel.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_dummy"},{type:"input_value",name:"POSITION",check:"Number",align:"RIGHT"},{type:"input_value",name:"COLOR",check:"Colour",align:"RIGHT"}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""},{type:"fastled_show_all_colors",message0:"%1 барлық rgb жарықдиодтарын көрсетіңіз",args0:[{type:"field_image",src:"./blocks/neo_pixel/neo_pixel.png",width:15,height:15,alt:"*",flipRtl:!1}],previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""}]);i.Blocks.fastled_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/neo_pixel/neo_pixel.png",15,15)).appendField("Жарықдиодты түсті жолақты орнату"),this.appendDummyInput().appendField("Аналогтық деректер пин").appendField(new i.FieldDropdown(()=>A().pwmPins),"PIN"),this.appendDummyInput().appendField("Type").appendField(new i.FieldDropdown([["WS2811","WS2811"],["WS2801","WS2801"],["WS2803","WS2803"],["APA102","APA102"],["APA104","APA104"],["APA106","APA106"],["DOTSTAR","DOTSTAR"],["GE8822","GE8822"],["GS1903","GS1903"],["GW6205","GW6205"],["GW6205_400","GW6205_400"],["LPD1886","LPD1886"],["LPD1886_8BIT","LPD1886_8BIT"],["LPD6803","LPD6803"],["LPD8806","LPD8806"],["P9813","P9813"],["PL9823","PL9823"],["SK6812","SK6812"],["SK6822","SK6822"],["SK9822","SK9822"],["SM16703","SM16703"],["SM16716","SM16716"],["TM1803","TM1803"],["TM1804","TM1804"],["TM1809","TM1809"],["TM1812","TM1812"],["TM1829","TM1829"],["UCS1903","UCS1903"],["UCS1903B","UCS1903B"],["UCS1904","UCS1904"],["UCS2903","UCS2903"],["WS2811_400","WS2811_400"],["WS2812","WS2812"],["WS2812B","WS2812B"],["WS2813","WS2813"],["WS2852","WS2852"]]),"CHIP_SET"),this.appendDummyInput().appendField("Түс тәртібі").appendField(new i.FieldDropdown([["RGB","RGB"],["GRB","GRB"],["RBG","RBG"],["GBR","GBR"],["BRG","BRG"],["BGR","BGR"]]),"COLOR_ORDER"),this.appendDummyInput().appendField("Жарықдиодтар саны").appendField(new i.FieldNumber(30,1,150),"NUMBER_LEDS"),this.appendDummyInput().appendField("Жарықтық 1-ден 255-ке дейін").appendField(new i.FieldNumber(10,1,255,1),"BRIGHTNESS"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.fastled_set_all_colors={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/neo_pixel/neo_pixel.png",15,15)).appendField("Барлық Түстерді орнату");for(let e=12;e>=1;e-=1){let t=this.appendDummyInput();for(let n=1;n<=12;n+=1){let o=e%2==0?13-n:n;t.appendField(new ge("#000000"),`${e}-${o}`)}}this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.analog_write={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/arduino/analog_write.png",15,15)).appendField("Аналогты пин# ").appendField(new i.FieldDropdown(()=>A().pwmPins),"PIN"),this.appendValueInput("WRITE_VALUE").setCheck("Number").setAlign(i.ALIGN_RIGHT).appendField("Күші"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.digital_write={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/arduino/digital_write.png",15,15)).appendField("Пин күйі: ").appendField(new i.FieldDropdown([["on","ON"],["off","OFF"]]),"STATE").appendField("пин# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};const si={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/arduino/digital_read.png",15,15)).appendField("сандық сенсор ").appendField(new i.FieldDropdown(()=>Pe("digital_read_setup",A().digitalPins)),"PIN").appendField(" бірдеңе таптыңыз ба?"),this.setOutput(!0,"Boolean"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.digital_read=si;const li={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/arduino/digital_read.png",15,15)).appendField("Сандық оқу пинін орнату"),this.appendDummyInput().appendField("PIN #").appendField(new i.FieldDropdown(()=>dt("digital_read_setup",this.getFieldValue("PIN"),A().digitalPins)),"PIN"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("Түрі").appendField(new i.FieldDropdown([["Түрту сенсоры","TOUCH_SENSOR"],["Сенсор","SENSOR"]]),"TYPE"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("------------------------------------"),this.appendDummyInput("LOOP_TIMES").appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Бірдеңе сезіп тұрсың ба? ").appendField(new i.FieldCheckbox("TRUE"),"isOn"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.digital_read_setup=li;[{type:"сан",blockName:"number",variable_type:"List Number"},{type:"жолдық",blockName:"string",variable_type:"List String"},{type:"логикалық",blockName:"boolean",variable_type:"List Boolean"},{type:"түстік",blockName:"colour",variable_type:"List Colour"}].forEach(({type:e,blockName:t,variable_type:n})=>{const o=e==="string"?"text":e;i.Blocks[`create_list_${t}_block`]={init:function(){var s;const r=new i.FieldVariable(null,null,[n],n);r.showOnlyVariableAssigned=!0,r.createNewVariable=!1,this.appendDummyInput().appendField("Тізім").appendField(r,"VAR").appendField(" сақтайды ").appendField(new i.FieldNumber(2,2,1e3),"Өлшемі").appendField(` ${o}`),this.setColour(m.DATA),this.setTooltip(""),this.setHelpUrl(""),this.setCommentText(`Бұл блок ${o} тізімін жасайды. Өлшем тізімдегі ${o} санын анықтайды.`),(s=this.getIcon("comment"))==null||s.setBubbleSize(new i.utils.Size(460,80))}},i.Blocks[`set_${t}_list_block`]={init:function(){var s;const r=new i.FieldVariable(null,null,[n],n);r.showOnlyVariableAssigned=!1,this.appendValueInput("Мән").setCheck(n.replace("Тізім ","")).setAlign(i.ALIGN_RIGHT).appendField(`Енгізілетін мән ${o}`),this.appendValueInput("Орны").setCheck("Number").appendField(" Тізім: ").appendField(r,"мән").appendField(" орны: "),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.DATA),this.setTooltip(""),this.setHelpUrl(""),this.setCommentText(`Бұл блок ${o}ды тізімге қояды. Орны ${o} тізімдегі қай жерде болатынын анықтайды. Тізімдегі бірінші ${o} 1-орыннан басталады..`),(s=this.getIcon("comment"))==null||s.setBubbleSize(new i.utils.Size(460,120))}},i.Blocks[`get_${t}_from_list`]={init:function(){var s;const r=new i.FieldVariable(null,null,[n],n);r.showOnlyVariableAssigned=!1,this.appendDummyInput().appendField(`Тізімнен ${o} өшіру `).appendField(r,"VAR"),this.appendValueInput("POSITION").setCheck("Number").appendField(" Индексі: "),this.setInputsInline(!0),this.setOutput(!0,n.replace("List ","")),this.setColour(m.DATA),this.setTooltip(""),this.setHelpUrl(""),this.setCommentText(`Бұл блок тізімнен ${o} алады. Орны тізімдегі қай жерден ${o} алатыныңызды анықтайды. Тізімдегі бірінші ${o} 1-орыннан басталады.`),(s=this.getIcon("comment"))==null||s.setBubbleSize(new i.utils.Size(460,120))}}});i.defineBlocksWithJsonArray([{type:"control_if",message0:"Егер %1",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"Онда %1",args1:[{type:"input_statement",name:"DO0"}],previousStatement:null,nextStatement:null,colour:m.CONTROL,tooltip:"%{BKYCONTROLS_IF_TOOLTIP_2}",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",extensions:["controls_if_tooltip"]},{type:"controls_ifelse",message0:"Егер %1",args0:[{type:"input_value",name:"IF0",check:"Boolean"}],message1:"Онда %1",args1:[{type:"input_statement",name:"DO0"}],message2:"%{BKY_CONTROLS_IF_MSG_ELSE} %1",args2:[{type:"input_statement",name:"ELSE"}],previousStatement:null,nextStatement:null,colour:m.CONTROL,tooltip:"%{BKYCONTROLS_IF_TOOLTIP_2}",helpUrl:"%{BKY_CONTROLS_IF_HELPURL}",extensions:["controls_if_tooltip"]}]);i.defineBlocksWithJsonArray([{lastDummyAlign0:"RIGHT",type:"controls_for",inputsInline:!0,message0:"%1 айнымалысын пайдаланып %2 ден %3 дейін %4 қадаммен қайталау",args0:[{type:"field_variable",name:"VAR",variable:null,variableTypes:["Number"],defaultType:"Number",createNewVariable:!0,showOnlyVariableAssigned:!1},{type:"input_value",name:"FROM",check:"Number",align:"RIGHT"},{type:"input_value",name:"TO",check:"Number",align:"RIGHT"},{type:"field_number",name:"BY",value:"1",min:1,max:2e5}],message1:"%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:m.CONTROL,helpUrl:"%{BKY_CONTROLS_FOR_HELPURL}",extensions:["contextMenu_newGetVariableBlock","controls_for_tooltip"]}]);i.defineBlocksWithJsonArray([{type:"string_to_number",message0:"Мәтіннен санға %1",args0:[{type:"input_value",name:"VALUE",check:"String"}],output:"Number",colour:m.VALUES,tooltip:"",helpUrl:""},{type:"math_number_property",message0:"%1 %2",args0:[{type:"input_value",name:"NUMBER_TO_CHECK",check:"Number"},{type:"field_dropdown",name:"PROPERTY",options:[["%{BKY_MATH_IS_EVEN}","EVEN"],["%{BKY_MATH_IS_ODD}","ODD"],["%{BKY_MATH_IS_POSITIVE}","POSITIVE"],["%{BKY_MATH_IS_NEGATIVE}","NEGATIVE"],["%{BKY_MATH_IS_DIVISIBLE_BY}","DIVISIBLE_BY"]]}],inputsInline:!0,output:"Boolean",style:"math_blocks",tooltip:"%{BKY_MATH_IS_TOOLTIP}",mutator:"math_is_divisibleby_mutator"}]);i.defineBlocksWithJsonArray([{type:"arduino_receive_message",message0:"%1 Ардуино хабарлама алды ма? ",args0:[{type:"field_image",src:"./blocks/message/message.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"Boolean",colour:m.ARDUINO,tooltip:"",helpUrl:""},{type:"arduino_get_message",message0:"%1 Arduino-дан хабарлама алу",args0:[{type:"field_image",src:"./blocks/message/message.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"String",colour:m.ARDUINO,tooltip:"",helpUrl:""},{type:"arduino_send_message",message0:"%1 Arduino жіберген хабарлама %2",args0:[{type:"field_image",src:"./blocks/message/message.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_value",name:"MESSAGE",check:"String"}],previousStatement:null,nextStatement:null,colour:m.ARDUINO,tooltip:"",helpUrl:""}]);const ai={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/message/message.png",15,15)).appendField("Arduino хабарламаларын баптау"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("-----------------------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Хабарлама қабылдай ма? ").appendField(new i.FieldCheckbox("TRUE",e=>(e==="FALSE"&&this.getField("message").setValue(""),e)),"receiving_message"),this.appendDummyInput().appendField("Хабарлама:").appendField(new i.FieldTextInput("Сәлем Әлем! :)",e=>this.getFieldValue("receiving_message")==="FALSE"?null:e),"message"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.ARDUINO),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.message_setup=ai;i.defineBlocksWithJsonArray([{type:"ultra_sonic_sensor_motion",message0:"%1 қашықтық (cm).",args0:[{type:"field_image",src:"./blocks/motion_sensor/ultrasonic_sensor.png",width:30,height:15,alt:"*",flipRtl:!1}],output:"Number",colour:m.SENSOR,tooltip:"",helpUrl:""}]);const di={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/motion_sensor/ultrasonic_sensor.png",30,15)).appendField("Ультрадыбыстық сенсор баптаулары"),this.appendDummyInput().appendField("Trig Pin# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_TRIG").appendField("Echo Pin# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_ECHO"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("------------------------------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Қашықтық CM").appendField(new i.FieldNumber(1,.1,500,1e-5),"cm"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.ultra_sonic_sensor_setup=di;i.defineBlocksWithJsonArray([{type:"move_motor",message0:"%1 Қозғалтқышты жылжыту %2 Қай қозғалтқыш %3 Бағыт %4 %5 Жылдамдық %6",args0:[{type:"field_image",src:"./blocks/motor/motor.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_dummy"},{type:"field_dropdown",name:"MOTOR",options:[["1","1"],["2","2"]]},{type:"field_dropdown",name:"DIRECTION",options:[["Сағат тілімен","CLOCKWISE"],["Сағат тіліне қарсы","ANTICLOCKWISE"]]},{type:"input_dummy",align:"RIGHT"},{type:"input_value",name:"SPEED",check:"Number",align:"RIGHT"}],inputsInline:!1,previousStatement:null,nextStatement:null,colour:m.COMPONENTS,tooltip:"",helpUrl:""}]);const ui={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/arduino/analog_read.png",15,15)).appendField("Аналогты пинды оқу#").appendField(new i.FieldDropdown(()=>Pe("digital_read_setup",A().analogPins)),"PIN"),this.setOutput(!0,"Number"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.analog_read=ui;const ci={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/arduino/analog_read.png",15,15)).appendField("Аналогты пинды оқуды баптау"),this.appendDummyInput().appendField("Пин #").appendField(new i.FieldDropdown(()=>dt("analog_read_setup",this.getFieldValue("PIN"),A().analogPins)),"PIN"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("Түрі").appendField(new i.FieldDropdown([["Потенциометр","POTENTIOMETER"],["Фото сенсор (фоторезистор)","PHOTO_SENSOR"],["Топырақ сенсоры","SOIL_SENSOR"],["Сенсор","SENSOR"]]),"TYPE"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("------------------------------------"),this.appendDummyInput("LOOP_TIMES").appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput("LEVEL").appendField("Сенсордың көрсеткіші: ").appendField(new i.FieldNumber(512,0,1024,1e-6),"state"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.analog_read_setup=ci;i.defineBlocksWithJsonArray([{type:"rfid_scan",message0:"%1 rfid оқу құралы жаңа картаны тапты ма?",args0:[{type:"field_image",src:"./blocks/rfid/rfid.png",width:15,height:15,alt:"*",flipRtl:!1}],inputsInline:!1,output:"Boolean",colour:m.SENSOR,tooltip:"",helpUrl:""},{type:"rfid_card",lastDummyAlign0:"RIGHT",metadata:"blue",message0:"%1 Карта нөмірін алу",args0:[{type:"field_image",src:"./blocks/rfid/rfid.png",width:15,height:15,alt:"*",flipRtl:!1}],inputsInline:!1,output:"String",colour:m.SENSOR,tooltip:"",helpUrl:""},{type:"rfid_tag",lastDummyAlign0:"RIGHT",metadata:"blue",message0:"%1 Тегті алу",args0:[{type:"field_image",src:"./blocks/rfid/rfid.png",width:15,height:15,alt:"*",flipRtl:!1}],inputsInline:!1,output:"String",colour:m.SENSOR,tooltip:"",helpUrl:""}]);const pi={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/rfid/rfid.png",15,15)).appendField("RFID орнату"),this.appendDummyInput().appendField("TX Pin#").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_TX"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("-----------------------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Карточка сканерленген бе?").appendField(new i.FieldCheckbox("TRUE",e=>(e==="FALSE"&&(this.getField("card_number").setValue(""),this.getField("tag").setValue("")),e)),"scanned_card"),this.appendDummyInput().appendField("Карта #:").appendField(new i.FieldTextInput("card#",e=>this.getFieldValue("scanned_card")==="FALSE"?null:e),"card_number"),this.appendDummyInput().appendField("Тэг#:").appendField(new i.FieldTextInput("tag",e=>this.getFieldValue("scanned_card")==="FALSE"?null:e),"tag"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.rfid_setup=pi;i.Blocks.rotate_servo={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/servo/servo.png",15,15)).appendField("Сервоны айналдыру"),this.appendDummyInput().setAlign(i.ALIGN_RIGHT).appendField("Пин# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN"),this.appendValueInput("DEGREE").setCheck("Number").setAlign(i.ALIGN_RIGHT).appendField("Градус:"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.defineBlocksWithJsonArray([{type:"temp_get_temp",message0:"%1 Температура °C",args0:[{type:"field_image",src:"./blocks/temp/temp.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"Number",colour:m.SENSOR,tooltip:"",helpUrl:""},{type:"temp_get_humidity",message0:"%1 Ылғалдылық %",args0:[{type:"field_image",src:"./blocks/temp/temp.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"Number",colour:m.SENSOR,tooltip:"",helpUrl:""}]);const _i={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/temp/temp.png",15,15)).appendField("Температура сенсорын орнату"),this.appendDummyInput().appendField("Pin# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN"),this.appendDummyInput().appendField("Түрі: ").appendField(new i.FieldDropdown([["DHT11","DHT11"],["DHT21","DHT21"],["DHT22","DHT22"]]),"TYPE"),this.appendDummyInput("SHOW_CODE_VIEW").appendField("------------------------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Tтемпература Цельсий ").appendField(new i.FieldNumber(30,-200,300,1e-5),"temp"),this.appendDummyInput().appendField("Ылғалдылық ").appendField(new i.FieldNumber(5,0,300),"humidity"),this.appendDummyInput("COPY_ALL").appendField("Copy All: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.temp_setup=_i;i.defineBlocksWithJsonArray([{type:"number_to_string",message0:"Ондық орындар %1 %2 Саннан мәтінге %3",args0:[{type:"field_number",name:"PRECISION",value:2,min:0,max:5,precision:1},{type:"input_dummy"},{type:"input_value",name:"NUMBER",check:"Number",align:"RIGHT"}],output:"String",colour:m.VALUES,tooltip:"",helpUrl:""},{type:"parse_string_block",message0:"Мәтін блогының бір бөлігін алу %1 мән %2 таңбаны ажырату %3 %4 орын %5",args0:[{type:"input_dummy",align:"RIGHT"},{type:"input_value",name:"VALUE",check:"String",align:"RIGHT"},{type:"field_dropdown",name:"DELIMITER",options:[[",",","],["-","-"],["*","*"],[":",":"],["#","#"],["$","$"],["^","^"],["|","|"],["@","@"]]},{type:"input_dummy",align:"RIGHT"},{type:"input_value",name:"POSITION",check:"Number",align:"RIGHT"}],inputsInline:!1,output:"String",colour:m.VALUES,tooltip:"",helpUrl:""}]);i.Blocks.text_changeCase={init:function(){var e=[[i.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE,"UPPERCASE"],[i.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE,"LOWERCASE"]];this.setHelpUrl(i.Msg.TEXT_CHANGECASE_HELPURL),this.setStyle("text_blocks"),this.appendValueInput("TEXT").setCheck("String").appendField(new i.FieldDropdown(e),"CASE"),this.setOutput(!0,"String"),this.setTooltip(i.Msg.TEXT_CHANGECASE_TOOLTIP)}};i.defineBlocksWithJsonArray([{type:"time_seconds",message0:"%1 секунд arduino қосылды",args0:[{type:"field_image",src:"./blocks/time/time.png",width:15,height:15,alt:"*",flipRtl:!1}],output:"Number",colour:m.ARDUINO,tooltip:"",helpUrl:""},{type:"delay_block",message0:"%1 күту уақыты  %2 секунд",args0:[{type:"field_image",src:"./blocks/time/time.png",width:15,height:15,alt:"*",flipRtl:!1},{type:"input_value",name:"DELAY",check:"Number"}],previousStatement:null,nextStatement:null,colour:m.ARDUINO,tooltip:"",helpUrl:""}]);const mi={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/time/time.png",15,15)).appendField("Таймер баптауы"),this.appendDummyInput().appendField("Бір циклде қанша секунд").appendField(new i.FieldNumber(.1,0,1e5,1e-5),"time_in_seconds"),this.setColour(m.ARDUINO),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.time_setup=mi;[{type:"сандық",blockName:"number",variable_type:"Number"},{type:"мәтіндік",blockName:"string",variable_type:"String"},{type:"логикалық",blockName:"boolean",variable_type:"Boolean"},{type:"түстік",blockName:"colour",variable_type:"Colour"}].forEach(({type:e,blockName:t,variable_type:n})=>{const o=e==="string"?"text":e;i.Blocks[`variables_get_${t}`]={init:function(){var s;const r=new i.FieldVariable(null,null,[n],n);r.createNewVariable=!1,r.showOnlyVariableAssigned=!1,this.appendDummyInput().appendField(r,"VAR"),this.setOutput(!0,n),this.setColour(m.DATA),this.setTooltip(""),this.setHelpUrl(""),this.setCommentText(`Бұл блок айнымалы сақталатын мәнді алады. Бұл айнымалы ${o} сақтайды.`),(s=this.getIcon("comment"))==null||s.setBubbleSize(new i.utils.Size(460,80))}},i.Blocks[`variables_set_${t}`]={init:function(){var s;const r=new i.FieldVariable(null,null,[n],n);r.createNewVariable=!1,r.showOnlyVariableAssigned=!1,this.appendValueInput("VALUE").setCheck(n).appendField(`${o}`).appendField(r,"VAR").appendField(" = "),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.DATA),this.setTooltip(""),this.setHelpUrl(""),this.setCommentText(`Бұл блок айнымалы сақталатын мәнді орнатады. Бұл айнымалы мән тек ${o} сақтайды.`),(s=this.getIcon("comment"))==null||s.setBubbleSize(new i.utils.Size(460,90))}}});i.Blocks.thermistor_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/thermistor/thermistor.svg",15,15)).appendField("Термисторды орнату"),this.appendDummyInput().appendField("Аналогтық пин #").appendField(new i.FieldDropdown(()=>A().analogPins),"PIN"),this.appendDummyInput().appendField("Әдепкі температура °C: ").appendField(new i.FieldNumber(25,-50,50),"DEFAULT_TEMP"),this.appendDummyInput().appendField("Термистор Ом: ").appendField(new i.FieldNumber(1e4,1e3,1e6,1e3),"THERMISTOR_RESISTANCE"),this.appendDummyInput().appendField("Резистор Ом: ").appendField(new i.FieldNumber(1e4,1e3,1e6,1e3),"NONIMAL_RESISTANCE"),this.appendDummyInput().appendField("B Мәні").appendField(new i.FieldNumber(3950,1e3,1e4,1),"B_VALUE"),this.appendDummyInput().appendField("------------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Температура °C").appendField(new i.FieldNumber(23,-500,500),"TEMP"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.thermistor_read={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/thermistor/thermistor.svg",15,15)).appendField("Температураны оқу"),this.setOutput(!0,"Number"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.passive_buzzer_note={init:function(){this.appendDummyInput().appendField(new i.FieldImage("/blocks/passivebuzzer/passivebuzzer.png",15,15)).appendField("Пассивті дыбыстық ескерту").appendField(new i.FieldDropdown([["No Tone","0"],["C","131"],["C#","139"],["D","147"],["D#","156"],["E","165"],["F","175"],["F#","185"],["G","196"],["G#","208"],["A","220"],["A#","233"],["B","247"]]),"TONE").appendField("Pin").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.passive_buzzer_tone={init:function(){this.appendDummyInput().appendField(new i.FieldImage("/blocks/passivebuzzer/passivebuzzer.png",15,15)).appendField("Пассивті дыбыстық сигнал"),this.appendDummyInput().setAlign(i.ALIGN_RIGHT).appendField("Пин").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN"),this.appendValueInput("TONE").setCheck("Number").setAlign(i.ALIGN_RIGHT).appendField(" Тон"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.stepper_motor_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/steppermotor/steppermotor.png",15,15)).appendField("Қадамдық қозғалтқышты орнату"),this.appendDummyInput().setAlign(i.ALIGN_RIGHT).appendField("PIN 1").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_1").appendField("PIN 2").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_2").appendField("PIN 3").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_3").appendField("PIN 4").appendField(new i.FieldDropdown(()=>A().digitalPins),"PIN_4"),this.appendDummyInput().setAlign(i.ALIGN_RIGHT).appendField("Жылдамдық").appendField(new i.FieldNumber(30,0,1e3),"SPEED"),this.appendDummyInput().setAlign(i.ALIGN_RIGHT).appendField("Қадамдар саны").appendField(new i.FieldNumber(200,0,500),"TOTAL_STEPS"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.stepper_motor_move={init:function(){this.appendValueInput("STEPS").setCheck("Number").setAlign(i.ALIGN_RIGHT).appendField(new i.FieldImage("./blocks/steppermotor/steppermotor.png",15,15)).appendField("Қадамдық қозғалтқыш қадмдар саны:"),this.appendDummyInput().appendField("қадам."),this.setInputsInline(!0),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.digital_display_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("/blocks/digit4display/digit4display.png",20,20)).appendField("Сандық Дисплей"),this.appendDummyInput().appendField("DIO Pin# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"DIO_PIN").appendField("CLK Pin# ").appendField(new i.FieldDropdown(()=>A().digitalPins),"CLK_PIN"),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.digital_display_set={init:function(){this.appendDummyInput().appendField(new i.FieldImage("/blocks/digit4display/digit4display.png",20,20)).appendField("Сандық Дисплейді Орнатыңыз"),this.appendDummyInput().setAlign(i.ALIGN_RIGHT).appendField("Colon: ").appendField(new i.FieldCheckbox("TRUE"),"COLON"),this.appendValueInput("TEXT").setCheck(null).setAlign(i.ALIGN_RIGHT).appendField("Мәтін"),this.setPreviousStatement(!0,null),this.setNextStatement(!0,null),this.setColour(m.COMPONENTS),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.joystick_setup={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/joystick/joystick.png",15,15)).appendField("Джойстик орнату"),this.appendDummyInput().appendField("X Pin: ").appendField(new i.FieldDropdown(()=>A().analogPins),"PIN_X"),this.appendDummyInput().appendField("Y Pin: ").appendField(new i.FieldDropdown(()=>A().analogPins),"PIN_Y"),this.appendDummyInput().appendField("Батырма Pin-і: ").appendField(new i.FieldDropdown(A().digitalPins),"PIN_BUTTON"),this.appendDummyInput().appendField("------------------------------"),this.appendDummyInput().appendField("Қайталау саны").appendField(new i.FieldDropdown(()=>$()),"LOOP"),this.appendDummyInput().appendField("Бос емес").appendField(new i.FieldCheckbox("TRUE"),"ENGAGED"),this.appendDummyInput().appendField("Дәрежесі").appendField(new i.FieldAngle(0),"DEGREE"),this.appendDummyInput().appendField("Батырма Басылды").appendField(new i.FieldCheckbox("TRUE"),"BUTTON_PRESSED"),this.appendDummyInput("COPY_ALL").appendField("Барлығын көшіру: ").appendField(new i.FieldCheckbox(!1),"COPY_SAME"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.joystick_angle={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/joystick/joystick.png",15,15)).appendField("Джойстик Бұрышы"),this.setOutput(!0,"Number"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.joystick_engaged={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/joystick/joystick.png",15,15)).appendField("джойстик қосылды ма?"),this.setOutput(!0,"Boolean"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.Blocks.joystick_button={init:function(){this.appendDummyInput().appendField(new i.FieldImage("./blocks/joystick/joystick.png",15,15)).appendField(" джойстик батырмасы басылды ма?"),this.setOutput(!0,"Boolean"),this.setColour(m.SENSOR),this.setTooltip(""),this.setHelpUrl("")}};i.FieldVariable.prototype.initModel=function(){if(this.variable)return;this.workspace_=this.sourceBlock_.workspace;const e=i.getMainWorkspace().getVariablesOfType(this.defaultType);let t=null;e.length>0&&this.createNewVariable!==!0&&(t=e[e.length-1].getId());const n=i.Variables.getOrCreateVariablePackage(this.workspace_,t,this.defaultVariableName,this.defaultType);i.Events.disable();try{this.setValue(n.getId())}catch(o){console.log(o,"error for")}finally{i.Events.enable()}};i.FieldVariable.dropdownCreate=function(){if(!this.getVariable()){console.log(this.getSourceBlock(),"failed variable");return}const e=this.getText();let t=null;this.getSourceBlock()&&(t=this.getSourceBlock().workspace);let n=[];if(t&&this.showOnlyVariableAssigned===!1){const r=t.getVariableTypes().filter(s=>s!=="");for(let s=0;s<r.length;s++){const l=r[s],a=t.getVariablesOfType(l);n=n.concat(a)}n.sort(i.VariableModel.compareByName)}t&&this.showOnlyVariableAssigned!==!1&&n.push(this.getVariable());const o=[];for(let r=0;r<n.length;r++)o[r]=[n[r].name,n[r].getId()];return o.push([i.Msg.RENAME_VARIABLE,i.RENAME_VARIABLE_ID]),i.Msg.DELETE_VARIABLE&&o.push([i.Msg.DELETE_VARIABLE.replace("%1",e),i.DELETE_VARIABLE_ID]),o};i.FieldVariable.fromJson=function(e){const t=i.utils.parsing.replaceMessageReferences(e.variable),n=e.variableTypes,o=e.defaultType,r=e.showOnlyVariableAssigned||!1,s=e.createNewVariable||!1,l=new i.FieldVariable(t,null,n,o);return l.showOnlyVariableAssigned=r,l.createNewVariable=s,l};i.Procedures.flyoutCategory=e=>{const t=[];if(i.Blocks.procedures_defnoreturn){const r=i.utils.xml.createElement("block");r.setAttribute("type","procedures_defnoreturn"),r.setAttribute("gap","16");const s=i.utils.xml.createElement("field");s.setAttribute("name","NAME"),s.appendChild(i.utils.xml.createTextNode(i.Msg.PROCEDURES_DEFNORETURN_PROCEDURE)),r.appendChild(s),t.push(r)}t.length&&t[t.length-1].setAttribute("gap",24);function n(r,s){for(let l=0;l<r.length;l++){const a=r[l][0],d=i.utils.xml.createElement("block");d.setAttribute("type",s),d.setAttribute("gap","16");const c=i.utils.xml.createElement("mutation");c.setAttribute("name",a),d.appendChild(c),t.push(d)}}const o=i.Procedures.allProcedures(e);return n(o[0],"procedures_callnoreturn"),t};i.BlockSvg.prototype.showHelp=function(){var e=typeof this.helpUrl=="function"?this.helpUrl():this.helpUrl;e&&ro(e)};i.Arduino=new i.Generator("Arduino");i.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,ultraSonicDistance,parseDouble,setNeoPixelColor,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts","short","isBtnPressed");i.Arduino.ORDER_ATOMIC=0;i.Arduino.ORDER_UNARY_POSTFIX=1;i.Arduino.ORDER_UNARY_PREFIX=2;i.Arduino.ORDER_MULTIPLICATIVE=3;i.Arduino.ORDER_ADDITIVE=4;i.Arduino.ORDER_LOGICAL_NOT=4.4;i.Arduino.ORDER_SHIFT=5;i.Arduino.ORDER_MODULUS=5.3;i.Arduino.ORDER_RELATIONAL=6;i.Arduino.ORDER_EQUALITY=7;i.Arduino.ORDER_BITWISE_AND=8;i.Arduino.ORDER_BITWISE_XOR=9;i.Arduino.ORDER_BITWISE_OR=10;i.Arduino.ORDER_LOGICAL_AND=11;i.Arduino.ORDER_LOGICAL_OR=12;i.Arduino.ORDER_CONDITIONAL=13;i.Arduino.ORDER_ASSIGNMENT=14;i.Arduino.ORDER_COMMA=18;i.Arduino.ORDER_NONE=99;i.Arduino.init=function(e){this.nameDB_?this.nameDB_.reset():this.nameDB_=new i.Names(this.RESERVED_WORDS_),this.nameDB_.setVariableMap(e.getVariableMap()),this.nameDB_.populateVariables(e),this.nameDB_.populateProcedures(e),i.Arduino.libraries_=Object.create(null),i.Arduino.setupCode_=Object.create(null),i.Arduino.information_=Object.create(null),i.Arduino.functionNames_=Object.create(null),i.Arduino.variablesInitCode_="",i.Arduino.variableDB_?i.Arduino.variableDB_.reset():i.Arduino.variableDB_=new i.Names(i.Arduino.RESERVED_WORDS_),i.Arduino.variableDB_.setVariableMap(e.getVariableMap());const t=e.getVariablesOfType("Number");let n=0,o="";for(n=0;n<t.length;n+=1)o+="double "+i.Arduino.getVariableName(t[n].getId())+` = 0; 

`;const r=e.getVariablesOfType("String");for(n=0;n<r.length;n+=1)o+="String "+i.Arduino.getVariableName(r[n].getId())+` = ""; 

`;const s=e.getVariablesOfType("Boolean");for(n=0;n<s.length;n+=1)o+="boolean "+i.Arduino.getVariableName(s[n].getId())+` = false; 

`;const l=e.getVariablesOfType("Colour");for(n=0;n<l.length;n+=1)o+="struct RGB "+i.Arduino.getVariableName(l[n].getId())+` = {0, 0, 0}; 

`;i.Arduino.variablesInitCode_=o};i.Arduino.finish=function(e){let t="",n="",o="";for(const l in i.Arduino.libraries_)t+=i.Arduino.libraries_[l]+`
`;for(const l in i.Arduino.functionNames_)n+=i.Arduino.functionNames_[l]+`
`;g.isEmpty(i.Arduino.setupCode_.bluetooth_setup)||(o+=`String bluetoothMessageDEV = ""; 
`),g.isEmpty(i.Arduino.setupCode_.serial_begin)||(o+=`String serialMessageDEV = ""; 
`),g.isEmpty(i.Arduino.functionNames_.double_to_string_debug)||(o+=`boolean stopDebugging = false; 
`);let r="",s="";for(const l in i.Arduino.setupCode_)s+=i.Arduino.setupCode_[l]||"";return fe("arduino_setup")===void 0&&!g.isEmpty(i.Arduino.setupCode_)?r=`
void setup() { 
`+s+`
}
`:fe("arduino_setup")===void 0&&g.isEmpty(i.Arduino.setupCode_)&&(r=`
void setup() { 

}
`),e=o+t+`
`+i.Arduino.variablesInitCode_+`
`+n+`
`+r+`
`+e,e=e.replace("__REPLACE_WITH_SETUP_CODE",s),delete i.Arduino.definitions_,delete i.Arduino.functionNames_,delete i.Arduino.variablesInitCode_,delete i.Arduino.libraries_,i.Arduino.variableDB_.reset(),e};i.Arduino.scrubNakedValue=function(e){return e+`;
`};i.Arduino.quote_=function(e){return e=e.replace(/\\/g,"\\\\").replace(/\n/g,`\\
`).replace(/'/g,"\\'"),'"'+e+'"'};i.Arduino.scrub_=function(e,t){let n="";if((!e.outputConnection||!e.outputConnection.targetConnection)&&e.nextConnection!==null){let s=e.getCommentText();s=s?i.utils.string.wrap(s,i.Arduino.COMMENT_WRAP-3):null,s&&(e.getProcedureDef?n+=`/**
`+i.Arduino.prefixLines(s+`
`," * ")+` */
`:n+=i.Arduino.prefixLines(s+`
`,"// "));for(let l=0;l<e.inputList.length;l++)if(e.inputList[l].type===i.INPUT_VALUE){const a=e.inputList[l].connection.targetBlock();if(a){const d=i.Arduino.allNestedComments(a);d&&(n+=i.Arduino.prefixLines(d,"// "))}}}const o=e.nextConnection&&e.nextConnection.targetBlock(),r=i.Arduino.blockToCode(o);return n+t+r};i.Arduino.arduino_setup=function(e){return`
void setup() { 
__REPLACE_WITH_SETUP_CODE`+i.Arduino.statementToCode(e,"setup")+`}
`};i.Arduino.arduino_loop=function(e){const t=i.Arduino.statementToCode(e,"loop");let n="",o="",r="",s="",l="",a="";return g.isEmpty(i.Arduino.setupCode_.bluetooth_setup)||(n=`	bluetoothMessageDEV = ""; 
`),g.isEmpty(i.Arduino.setupCode_.joystick)||(l=`	setJoyStickValues(); 
`),!g.isEmpty(i.Arduino.setupCode_.serial_begin)&&i.Arduino.information_.message_recieve_block&&(o=` serialMessageDEV= ""; 
`,a=`  setSerialMessage();
`),g.isEmpty(i.Arduino.setupCode_.setup_ir_remote)||(r=`	irReceiver.resume(); 
`),g.isEmpty(i.Arduino.functionNames_.takeTempReading)||(s=`	takeTempReading(); 
`),`
void loop() { 
`+a+t+`
`+n+o+r+s+l+"}"};i.Arduino.bluetooth_setup=function(e){const t=e.getFieldValue("PIN_RX"),n=e.getFieldValue("PIN_TX");return i.Arduino.libraries_.define_bluetooth=`
#include <SoftwareSerial.h>;
SoftwareSerial blueToothSerial(`+n+", "+t+`); 

`,i.Arduino.functionNames_.getBluetoothMessage=`String getBluetoothMessage() {
   if (bluetoothMessageDEV.length() > 0) {
     return bluetoothMessageDEV;
   }

   bluetoothMessageDEV = blueToothSerial.readStringUntil('|');

   return bluetoothMessageDEV;
};`,i.Arduino.setupCode_.bluetooth_setup="	blueToothSerial.begin("+A().serial_baud_rate+`); 
	delay(1000); 
`,""};i.Arduino.bluetooth_get_message=function(e){return["getBluetoothMessage()",i.Arduino.ORDER_ATOMIC]};i.Arduino.bluetooth_has_message=function(e){return["getBluetoothMessage().length() > 0",i.Arduino.ORDER_ATOMIC]};i.Arduino.bluetooth_send_message=function(e){return"blueToothSerial.println("+i.Arduino.valueToCode(e,"MESSAGE",i.Arduino.ORDER_ATOMIC)+`);
`};i.Arduino.button_setup=function(e){const t=e.getFieldValue("PIN");return i.Arduino.setupCode_["btn_pin_"+t]="	pinMode("+t+`, INPUT_PULLUP); 
`,""};i.Arduino.is_button_pressed=function(e){return["(digitalRead("+e.getFieldValue("PIN")+") == LOW)",i.Arduino.ORDER_ATOMIC]};function fi(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function gt(){i.Arduino.libraries_.color_struct=`struct RGB {
    int red;
    int green;
    int blue;
};`}i.Arduino.color_picker_custom=function(e){const t=fi(e.getFieldValue("COLOR"));return gt(),["{ "+t.r+", "+t.g+", "+t.b+"}",i.Arduino.ORDER_ATOMIC]};i.Arduino.colour_random=function(e){return gt(),["{ random(0, 255), random(0, 255), random(0, 255)}",i.Arduino.ORDER_ATOMIC]};i.Arduino.colour_rgb=function(e){gt();const t=i.Arduino.valueToCode(e,"RED",i.Arduino.ORDER_ATOMIC),n=i.Arduino.valueToCode(e,"GREEN",i.Arduino.ORDER_ATOMIC),o=i.Arduino.valueToCode(e,"BLUE",i.Arduino.ORDER_ATOMIC);return["{ "+t+", "+n+", "+o+"}",i.Arduino.ORDER_ATOMIC]};const Ae=["Number","String","Boolean","Colour"];function On(){i.Arduino.setupCode_.serial_begin="	Serial.begin("+A().serial_baud_rate+`); 
	Serial.setTimeout(10);
`}i.Arduino.message_setup=function(){return On(),""};i.Arduino.arduino_get_message=function(e){return i.Arduino.information_.message_recieve_block=!0,i.Arduino.functionNames_.setSerialMessage=`void setSerialMessage() {
  if (Serial.available() > 0) {
      serialMessageDEV = Serial.readString();
      serialMessageDEV.trim();      
  }
};
  `,["serialMessageDEV",i.Arduino.ORDER_ATOMIC]};i.Arduino.arduino_receive_message=function(e){return i.Arduino.information_.message_recieve_block=!0,i.Arduino.functionNames_.setSerialMessage=`void setSerialMessage() {
  if (Serial.available() > 0) {
      serialMessageDEV = Serial.readString();
      serialMessageDEV.trim();      
  }
};
  `,["(serialMessageDEV.length() > 0)",i.Arduino.ORDER_ATOMIC]};i.Arduino.arduino_send_message=function(e){return"	Serial.println("+i.Arduino.valueToCode(e,"MESSAGE",i.Arduino.ORDER_ATOMIC)+`);
	delay(200); // must have some delay always 
`};i.Arduino.debug_block=function(e){On(),i.Arduino.setupCode_.debug_clean_pipes=`	delay(200); // to prevent noise after uploading code 
`,i.Arduino.setupCode_.debug_wait_til_ok=`while(Serial.readStringUntil('|').indexOf("START_DEBUG") == -1) {
      Serial.println("C_D_B_C_D_B_C_D_B_C_D_B_C_D_B_");
      delay(100);
  }

`,i.Arduino.functionNames_.double_to_string_debug=Nn(),i.Arduino.functionNames_.color_struct_string=bi();for(let n=0;n<Ae.length;n+=1)i.Arduino.functionNames_["print_array_"+Ae[n].replace(" ","")]=Ei(Ae[n].replace(" ",""))+`

`;let t=`

void debug(String blockNumber) { 
		if(stopDebugging) {
			return; 
		}
		String stopDebug = ""; 
`;return t+=gi(),t+=`		Serial.println("DEBUG_BLOCK_" + blockNumber);
		delay(400);

`,t+=`		while (stopDebug != "continue_debug" && !stopDebugging) { 
			stopDebug = Serial.readStringUntil('|'); 
			if (stopDebug == "stop_debug") { 
				stopDebugging = true; 
			} 
			delay(1000);  
		}
`,t+=`}
`,i.Arduino.functionNames_.debug_function=t,'debug("'+e.id+`"); 
`};function gi(){let e="";const t=i.getMainWorkspace().getAllVariables();for(let n=0;n<t.length;n+=1){const o=i.Arduino.variableDB_.getName(t[n].getId());if(Ae.indexOf(t[n].type)>-1){if(e+='		Serial.println("**(|)'+o+"_|_"+t[n].type+'_|_" +',t[n].type==="Number"){e+="double2string("+o+`, 5));
`;continue}if(t[n].type==="Colour"){e+="colorToString("+o+`));
`;continue}if(t[n].type==="Boolean"){e+=(o?'String("true")':'String("false")')+`);
`;continue}e+="String("+o+`)); 
`;continue}let r=t[n].type.replace("List ","");r==="Colour"?r="RGB":r==="Number"?r="double":r==="Boolean"&&(r="boolean"),e+='		Serial.println("**(|)'+t[n].name+"_|_"+t[n].type+'_|_" +printArray'+r+"("+o+","+hi(t[n])+`)); 
		delay(400);
`}return e}function hi(e){const t=e.getId();let n="";e.type==="List String"?n="create_list_string_block":e.type==="List Number"?n="create_list_number_block":e.type==="List Boolean"?n="create_list_boolean_block":e.type==="List Colour"&&(n="create_list_colour_block");const o=i.getMainWorkspace().getBlocksByType(n,!0).find(r=>r.getFieldValue("VAR")===t);return o?o.getFieldValue("SIZE"):1}function Ei(e){(e==="Colour"||e==="List Colour")&&(e="RGB");let t=`String printArrayREPLATEWITHTYPE(REPLATEWITHTYPE arr[], int sizeOfArray) {
		String returnValue = "[";
		for (unsigned int i = 0; i < sizeOfArray; i += 1) {
`;return e.toLowerCase()==="number"?t+=`		returnValue +=  double2string(arr[i], 5);
`:e.toLowerCase()==="boolean"?t+=`		returnValue += arr[i] ? "true" : "false"; 
`:e.toLowerCase()==="rgb"?t+=`		returnValue += colorToString(arr[i]); 
`:t+=`		returnValue +=  String(arr[i]);
`,t+=`			if (i < sizeOfArray -1) {
				returnValue += ",";
			}
		}
		returnValue += "]";
		return returnValue;
}
`,e==="Number"?e="double":e==="Boolean"&&(e="boolean"),t.replace(/REPLATEWITHTYPE/g,e)}function Nn(){return` String double2string(double n, int ndec) {                         
		 String r = "";                                                 
		 int v = n;                                                     
		 r += v;     // whole number part                               
		 r += '.';   // decimal point                                   
		 int i;                                                         
		 for (i = 0; i < ndec; i++) {                                   
		     // iterate through each decimal digit for 0..ndec          
		     n -= v;                                                    
		     n *= 10;                                                   
		     v = n;                                                     
		     r += v;                                                    
		 }                                                              
		                                                                
		 return r;                                                      
}`}function bi(){return`String colorToString(RGB color) {
	return "{" + String(color.red) + "-" + String(color.green) + "-" + String(color.blue) + "}";
}
`}i.Arduino.ir_remote_setup=function(e){const t=e.getFieldValue("PIN")||"A1";return i.Arduino.libraries_.define_ir_remote=`#include <IRremote.h>; 
IRrecv irReceiver(`+t+`);
decode_results result;
`,i.Arduino.setupCode_.setup_ir_remote=`	irReceiver.enableIRIn(); 
`,""};i.Arduino.ir_remote_has_code_receive=function(){return["irReceiver.decode(&result)",i.Arduino.ORDER_ATOMIC]};i.Arduino.ir_remote_get_code=function(){return["String(result.value, HEX)",i.Arduino.ORDER_ATOMIC]};const ue=e=>g.isNumber(e)?+e>0?+e-1:0:`(${e} - 1)`;i.Arduino.lcd_setup=function(e){const t=e.getFieldValue("SIZE"),n=e.getFieldValue("MEMORY_TYPE").toUpperCase(),o=t==="16 x 2"?2:4,r=t==="16 x 2"?16:20;return i.Arduino.libraries_.define_wire=`#include <Wire.h>;
`,i.Arduino.libraries_.define_liquid_crystal_i2c_big=`#include <LiquidCrystal_I2C.h>;
`,i.Arduino.libraries_.liquid_crystal_ic2_lcd_object="LiquidCrystal_I2C lcd("+n+","+o+","+r+");",i.Arduino.setupCode_.liquid_crystal_ic2_lcd=`	lcd.init();
	lcd.backlight(); 
`,""};i.Arduino.lcd_scroll=function(e){return e.getFieldValue("DIR")==="RIGHT"?`lcd.scrollDisplayRight(); 
`:`lcd.scrollDisplayLeft(); 
`};i.Arduino.lcd_screen_simple_print=function(e,t){const n=i.Arduino.valueToCode(e,"ROW_1",i.Arduino.ORDER_ATOMIC),o=i.Arduino.valueToCode(e,"ROW_2",i.Arduino.ORDER_ATOMIC),s=i.getMainWorkspace().getAllBlocks().find(f=>f.type==="lcd_setup");let l=2;s&&(l=s.getFieldValue("SIZE")==="16 x 2"?2:4);const a=i.Arduino.valueToCode(e,"ROW_3",i.Arduino.ORDER_ATOMIC),d=i.Arduino.valueToCode(e,"ROW_4",i.Arduino.ORDER_ATOMIC),c=i.Arduino.valueToCode(e,"DELAY",i.Arduino.ORDER_ATOMIC);function u(f,N){return N!=='""'?"lcd.setCursor(0, "+f+`); 
lcd.print(`+N+`); 
`:""}const p=l===2?"":u(2,a),h=l===2?"":u(3,d);return`lcd.clear(); 
`+u(0,n)+u(1,o)+p+h+"delay("+c*1e3+`); 
lcd.clear(); 
`};i.Arduino.lcd_backlight=function(e){return e.getFieldValue("BACKLIGHT").toUpperCase()==="ON"?`	lcd.backlight();
`:`	lcd.noBacklight();
`};i.Arduino.lcd_screen_clear=function(e){return`	lcd.clear();
`};i.Arduino.lcd_screen_print=function(e){let t=ue(i.Arduino.valueToCode(e,"ROW",i.Arduino.ORDER_ATOMIC)),n=ue(i.Arduino.valueToCode(e,"COLUMN",i.Arduino.ORDER_ATOMIC));const o=i.Arduino.valueToCode(e,"PRINT",i.Arduino.ORDER_ATOMIC);return"	lcd.setCursor("+n+", "+t+`);
	lcd.print(`+o+`); 
`};i.Arduino.lcd_blink=function(e){let t=ue(i.Arduino.valueToCode(e,"ROW",i.Arduino.ORDER_ATOMIC)),n=ue(i.Arduino.valueToCode(e,"COLUMN",i.Arduino.ORDER_ATOMIC));const o=e.getFieldValue("BLINK").toUpperCase()==="BLINK";let r="	lcd.setCursor("+n+", "+t+`);
`;return r+=o?`	lcd.blink();
`:`	lcd.noBlink();
`,r};i.Arduino.led_matrix_setup=function(e){const t=e.getFieldValue("PIN_DATA"),n=e.getFieldValue("PIN_CLK"),o=e.getFieldValue("PIN_CS");return i.Arduino.libraries_.define_led_matrix=`#include <LedControlMS.h>;
`,i.Arduino.libraries_.led_matrix_setup=`LedControl lc = LedControl(${t},${n},${o},1);
`,i.Arduino.setupCode_.led_matrix=`	lc.shutdown(0,false); 
	lc.setIntensity(0,8);
	lc.clearDisplay(0);
`,""};i.Arduino.led_matrix_make_draw=function(e){let t=`
	//START CODE TO DRAW BLOCK `+e.id+`
`;for(let n=1;n<=8;n+=1)for(let o=1;o<=8;o+=1){const r=e.getFieldValue(n+","+o).toLowerCase();t+="	lc.setLed(0, "+(o-1)+", "+(7-(n-1))+", "+r+`);
`}return t+=`
	//FINISH CODE TO DRAW BLOCK `+e.id+`
`,t};i.Arduino.led_matrix_turn_one_on_off=function(e){const t=i.Arduino.valueToCode(e,"ROW",i.Arduino.ORDER_ATOMIC);let n=i.Arduino.valueToCode(e,"COLUMN",i.Arduino.ORDER_ATOMIC);const o=e.getFieldValue("STATE")==="ON"?"true":"false";return"	lc.setLed(0, "+ue(n)+",(7 - "+ue(t)+" ), "+o+`);
`};i.Arduino.rgb_led_setup=function(e){const t=e.getFieldValue("PIN_RED"),n=e.getFieldValue("PIN_GREEN"),o=e.getFieldValue("PIN_BLUE");return i.Arduino.setupCode_["led_pin_"+t]=`	pinMode(RED_PIN, OUTPUT); 
`,i.Arduino.setupCode_["led_pin_"+n]=`	pinMode(GREEN_PIN, OUTPUT); 
`,i.Arduino.setupCode_["led_pin_"+o]=`	pinMode(BLUE_PIN, OUTPUT); 
`,i.Arduino.libraries_.color_pin_blue="int BLUE_PIN = "+o+`;
`,i.Arduino.libraries_.color_pin_red="int RED_PIN = "+t+`;
`,i.Arduino.libraries_.color_pin_green="int GREEN_PIN = "+n+`;
`,i.Arduino.functionNames_._setLedColor=`void setLedColor(RGB color) {
	analogWrite(GREEN_PIN, color.green); 
	analogWrite(BLUE_PIN, color.blue); 
	analogWrite(RED_PIN, color.red); 
}
`,""};i.Arduino.set_color_led=function(e){let t=i.Arduino.valueToCode(e,"COLOUR",i.Arduino.ORDER_ATOMIC);return g.isEmpty(t)&&(t="{ 0, 0, 0 }"),"setLedColor("+t+`);
`};i.Arduino.led=function(e){const t=e.getFieldValue("PIN"),n=e.getFieldValue("STATE");i.Arduino.setupCode_["led_pin"+t]="	pinMode("+t+`, OUTPUT); 
`;const o=n==="ON"?"HIGH":"LOW";return"digitalWrite("+t+", "+o+`); 
`};i.Arduino.led_fade=function(e){const t=e.getFieldValue("PIN"),n=i.Arduino.valueToCode(e,"FADE",i.Arduino.ORDER_ATOMIC);return i.Arduino.setupCode_["led_pin"+t]="	pinMode("+t+`, OUTPUT); 
`,"analogWrite("+t+", "+(n||1)+`); 
`};i.Arduino.digital_write=function(e){const t=e.getFieldValue("PIN"),n=e.getFieldValue("STATE")==="ON"?"HIGH":"LOW";return"digitalWrite("+t+", "+n+`); 
`};i.Arduino.analog_write=function(e){const t=e.getFieldValue("PIN"),n=i.Arduino.valueToCode(e,"WRITE_VALUE",i.Arduino.ORDER_ATOMIC);return"analogWrite("+t+", "+n+`); 
`};i.Arduino.digital_read_setup=function(e){const t=e.getFieldValue("PIN");return i.Arduino.setupCode_["digital_read"+t]="	pinMode("+t+`, INPUT); 
`,""};i.Arduino.digital_read=function(e){return["digitalRead("+e.getFieldValue("PIN")+")",i.Arduino.ORDER_ATOMIC]};const Oi=()=>{i.Arduino.functionNames_.zeroIndexAdjustNumber=`

int zeroIndexAdjustNumber(double pos) {
	pos = pos <= 0 ? 0 : pos;
	return pos >= 1 ? pos - 1 : pos;
}
`},Ue=function(e,t){Oi();const n=["RGB"].includes(t)?"struct ":"",o=e.getFieldValue("SIZE"),r=e.getFieldValue("VAR");return i.Arduino.variablesInitCode_+=n+t.replace(" list","")+" "+i.Arduino.getVariableName(r)+"["+o+`];
`,""},xe=function(e){const t=i.Arduino.valueToCode(e,"POSITION",i.Arduino.ORDER_ATOMIC),n=e.getFieldValue("VAR"),o=i.Arduino.valueToCode(e,"VALUE",i.Arduino.ORDER_ATOMIC);return i.Arduino.getVariableName(n)+"[zeroIndexAdjustNumber("+t+")] = "+o+`;
`},Ve=function(e){const t=e.getFieldValue("VAR"),n=i.Arduino.valueToCode(e,"POSITION",i.Arduino.ORDER_ATOMIC);return[i.Arduino.getVariableName(t)+"[zeroIndexAdjustNumber("+n+")]",i.Arduino.ORDER_ATOMIC]};i.Arduino.create_list_number_block=function(e){return Ue(e,"double")};i.Arduino.create_list_string_block=function(e){return Ue(e,"String")};i.Arduino.create_list_boolean_block=function(e){return Ue(e,"boolean")};i.Arduino.create_list_colour_block=function(e){return Ue(e,"RGB")};i.Arduino.set_string_list_block=xe;i.Arduino.set_boolean_list_block=xe;i.Arduino.set_number_list_block=xe;i.Arduino.set_colour_list_block=xe;i.Arduino.get_string_from_list=Ve;i.Arduino.get_boolean_from_list=Ve;i.Arduino.get_number_from_list=Ve;i.Arduino.get_colour_from_list=Ve;i.Arduino.logic_boolean=function(e){return[e.getFieldValue("BOOL")==="TRUE"?"true":"false",i.Arduino.ORDER_ATOMIC]};i.Arduino.logic_compare=function(e){const n={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[e.getFieldValue("OP")],o=n==="=="||n==="!="?i.Arduino.ORDER_EQUALITY:i.Arduino.ORDER_RELATIONAL,r=i.Arduino.valueToCode(e,"A",o)||"0",s=i.Arduino.valueToCode(e,"B",o)||"0";return["( "+r+" "+n+" "+s+")",o]};i.Arduino.logic_operation=function(e){const t=e.getFieldValue("OP")==="AND"?"&&":"||",n=t==="&&"?i.Arduino.ORDER_LOGICAL_AND:i.Arduino.ORDER_LOGICAL_OR;let o=i.Arduino.valueToCode(e,"A",n),r=i.Arduino.valueToCode(e,"B",n);if(!o&&!r)o="false",r="false";else{const l=t==="&&"?"true":"false";o||(o=l),r||(r=l)}return[o+" "+t+" "+r,n]};i.Arduino.control_if=function(e){let t=0,n="",o,r;do r=i.Arduino.valueToCode(e,"IF"+t,i.Arduino.ORDER_NONE)||"false",o=i.Arduino.statementToCode(e,"DO"+t),n+=(t>0?" else ":"")+"if ("+r+`) {
`+o+"}",++t;while(e.getInput("IF"+t));return e.getInput("ELSE")&&(o=i.Arduino.statementToCode(e,"ELSE"),n+=` else {
`+o+"}"),n+`
`};i.Arduino.controls_ifelse=i.Arduino.control_if;i.Arduino.logic_negate=function(e){const t=i.Arduino.ORDER_UNARY_PREFIX;return["!"+(i.Arduino.valueToCode(e,"BOOL",t)||"true"),t]};i.Arduino.controls_repeat_ext=function(e){i.Arduino.libraries_.controls_repeat_ext="int simple_loop_variable = 0;";const t=i.Arduino.valueToCode(e,"TIMES",i.Arduino.ORDER_ASSIGNMENT)||"0";let n=i.Arduino.statementToCode(e,"DO");n=i.Arduino.addLoopTrap(n,e.id);let o="";const r="simple_loop_variable";return o+="for ("+r+" = 1; "+r+" <= "+t+"; "+r+` += 1) {
`+n+`}
`,o};i.Arduino.controls_for=function(e){const t=i.getMainWorkspace().getVariableById(e.getFieldValue("VAR")).name,n=i.Arduino.statementToCode(e,"DO"),o=+i.Arduino.valueToCode(e,"FROM",i.Arduino.ORDER_ASSIGNMENT)||"0",r=+i.Arduino.valueToCode(e,"TO",i.Arduino.ORDER_ASSIGNMENT)||"0";let s=Math.abs(parseInt(e.getFieldValue("BY")));s=s===0?1:s;const l=o<r?" +":" -",a=o<r?" <= ":" >= ";return"for ("+t+" = "+o+"; "+t+a+r+"; "+t+l+"= "+s+`) {
`+n+`}
`};i.Arduino.controls_whileUntil=function(e){const t=e.getFieldValue("MODE")==="UNTIL";let n=i.Arduino.valueToCode(e,"BOOL",i.Arduino.ORDER_LOGICAL_AND)||"false",o=i.Arduino.statementToCode(e,"DO");return o=i.Arduino.addLoopTrap(o,e.id),t&&(n="!"+n),"	while ("+n+`) {
`+o+`	}
`};i.Arduino.controls_flow_statements=function(e){switch(e.getFieldValue("FLOW")){case"BREAK":return`break;
`;case"CONTINUE":return`continue;
`}throw Error("Unknown flow statement.")};i.Arduino.math_number=function(e){return[parseFloat(e.getFieldValue("NUM")),i.Arduino.ORDER_ATOMIC]};i.Arduino.math_arithmetic=function(e){const n={ADD:[" + ",i.Arduino.ORDER_ASSIGNMENT],MINUS:[" - ",i.Arduino.ORDER_ASSIGNMENT],MULTIPLY:[" * ",i.Arduino.ORDER_ASSIGNMENT],DIVIDE:[" / ",i.Arduino.ORDER_ASSIGNMENT],POWER:[null,i.Arduino.ORDER_ASSIGNMENT]}[e.getFieldValue("OP")],o=n[0],r=n[1],s=i.Arduino.valueToCode(e,"A",r)||"0",l=i.Arduino.valueToCode(e,"B",r)||"0";let a;return o?(a=s+o+l,[a,r]):(a="pow("+s+", "+l+")",[a,i.Arduino.ORDER_ASSIGNMENT])};i.Arduino.math_round=function(e){const t=e.getFieldValue("OP"),n=i.Arduino.valueToCode(e,"NUM",i.Arduino.ORDER_NONE)||"0";let o="";switch(t){case"ROUND":o="(double)round("+n+")";break;case"ROUNDUP":o="(double)ceil("+n+")";break;case"ROUNDDOWN":o="(double)floor("+n+")";break;default:throw Error("No option for this operator: "+t)}return[o,i.Arduino.ORDER_UNARY_PREFIX]};i.Arduino.math_modulo=function(e){const t=i.Arduino.valueToCode(e,"DIVIDEND",i.Arduino.ORDER_MODULUS)||"0",n=i.Arduino.valueToCode(e,"DIVISOR",i.Arduino.ORDER_MODULUS)||"0";return["(double)("+t+" % "+n+")",i.Arduino.ORDER_MODULUS]};i.Arduino.math_number_property=function(e){const t=i.Arduino.valueToCode(e,"NUMBER_TO_CHECK",i.Arduino.ORDER_MODULUS)||1,n=e.getFieldValue("PROPERTY");if(n==="EVEN")return["((int)"+t+" % 2 == 0)",i.Arduino.ORDER_MODULUS];if(n==="ODD")return["((int)"+t+" % 2 == 1)",i.Arduino.ORDER_MODULUS];if(n==="POSITIVE")return["("+t+" > 0)",i.Arduino.ORDER_MODULUS];if(n==="NEGATIVE")return["("+t+" < 0)",i.Arduino.ORDER_MODULUS];if(n==="DIVISIBLE_BY"){const o=i.Arduino.valueToCode(e,"DIVISOR",i.Arduino.ORDER_MODULUS)||1;return["((int)"+t+" % (int)"+o+" == 0)",i.Arduino.ORDER_MODULUS]}return["false",i.Arduino.ORDER_MODULUS]};i.Arduino.math_random_int=function(e){const t=i.Arduino.valueToCode(e,"FROM",i.Arduino.ORDER_MODULUS)||0,n=i.Arduino.valueToCode(e,"TO",i.Arduino.ORDER_MODULUS)||1;let o="";return t>n?o="(double)random("+n+", "+t+")":o="(double)random("+t+", "+n+")",[o,i.Arduino.ORDER_UNARY_POSTFIX]};i.Arduino.string_to_number=function(e){return i.Arduino.functionNames_.parseDouble=`
double parseDouble(String num) {
	 // Use num.toDouble() instead of this.  Doing this because of arduino is compiling on a linux server.  
	char str[40];
	num.toCharArray(str, num.length() + 1);
	return atof(str);
}
`,["parseDouble("+i.Arduino.valueToCode(e,"VALUE",i.Arduino.ORDER_ATOMIC)+")",i.Arduino.ORDER_ATOMIC]};i.Arduino.ultra_sonic_sensor_motion=function(e){return["ultraSonicDistance()",i.Arduino.ORDER_ATOMIC]};i.Arduino.ultra_sonic_sensor_setup=function(e){const t=e.getFieldValue("PIN_ECHO"),n=e.getFieldValue("PIN_TRIG");return i.Arduino.setupCode_["setup_input_"+t]="	pinMode("+t+`, INPUT);
`,i.Arduino.setupCode_["setup_input_"+n]="	pinMode("+n+`, OUTPUT);
`,i.Arduino.functionNames_.pulse_in_function=`double ultraSonicDistance() { 
	digitalWrite(${n}, LOW);
	delayMicroseconds(2); 
	digitalWrite(${n}, HIGH); 
	delayMicroseconds(10); 
	digitalWrite(${n}, LOW); 
	long microseconds = pulseIn(${t}, HIGH); 
	return (double)(microseconds / 29 / 2); 
} 

`,""};i.Arduino.move_motor=function(e){const t=e.getFieldValue("MOTOR"),n=e.getFieldValue("DIRECTION").toUpperCase();let o;n==="CLOCKWISE"?o="FORWARD":o="BACKWARD";const r=i.Arduino.valueToCode(e,"SPEED",i.Arduino.ORDER_ATOMIC);i.Arduino.libraries_.include_motor_library=`#include <AFMotor.h>;
`,i.Arduino.libraries_["include_motor_init_"+t]="AF_DCMotor motor_"+t+"("+t+`);
`;let s="motor_"+t+'.run("'+o+`");
`;return s+="motor_"+t+".setSpeed("+r+`);
`,s};i.Arduino.neo_pixel_setup=function(e){const t=e.getFieldValue("NUMBER_LEDS"),n=e.getFieldValue("PIN");return i.Arduino.libraries_.define_neo_pixel=`#include <Adafruit_NeoPixel.h>;
#ifdef __AVR__ 
	#include <avr/power.h>; 
#endif
`,i.Arduino.libraries_.neo_pixel_setup=`double brightness = ${e.getFieldValue("BRIGHTNESS")}.0 / 20.0;

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(`+t+", "+n+`, NEO_GRB + NEO_KHZ800);

`,i.Arduino.setupCode_.neo_pixel=`	pixels.begin();
`,""};i.Arduino.neo_pixel_set_color=function(e){i.Arduino.functionNames_.set_color=`

void setNeoPixelColor(double pos, RGB color) {
	pos = pos <= 0 ? 0 : pos;
	pos = pos >= 1 ? pos - 1 : pos;
	pixels.setPixelColor((int)pos, color.red * brightness, color.green * brightness, color.blue * brightness);
	pixels.show();
}
`;const t=i.Arduino.valueToCode(e,"COLOR",i.Arduino.ORDER_ATOMIC);return"	setNeoPixelColor("+i.Arduino.valueToCode(e,"POSITION",i.Arduino.ORDER_ATOMIC)+","+t+`);
`};const ht=e=>{var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(o,r,s,l){return r+r+s+s+l+l});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return{red:parseInt(n[1],16),green:parseInt(n[2],16),blue:parseInt(n[3],16)}},Fa=e=>"#"+qe(e.red)+qe(e.green)+qe(e.blue);function qe(e){var t=e.toString(16);return t.length==1?"0"+t:t}i.Arduino.fastled_setup=function(e){const t=e.getFieldValue("NUMBER_LEDS"),n=e.getFieldValue("PIN"),o=e.getFieldValue("BRIGHTNESS"),r=e.getFieldValue("COLOR_ORDER"),s=e.getFieldValue("CHIP_SET");return i.Arduino.fastled_info={numberOfLeds:t},i.Arduino.libraries_.define_fastled=`
#include <FastLED.h>
#define NUM_LEDS ${t}
#define DATA_PIN ${n} 
CRGB leds[NUM_LEDS];

`,i.Arduino.functionNames_.fastled_setColorFunction=`
void setFastLEDColor(int pos, struct RGB color) {
    pos = pos <= 0 ? 0 : pos;
    pos = pos >= 1 ? pos - 1 : pos;
    leds[pos].setRGB(color.red, color.green, color.blue);
}
`,i.Arduino.setupCode_.fastled=`
    FastLED.addLeds<${s}, DATA_PIN, ${r}>(leds, NUM_LEDS);
    FastLED.setBrightness(${o});    
`,""};const Ni=e=>{const t=Math.ceil(e/12);return`${t}-${e-(t-1)*12}`};i.Arduino.fastled_set_all_colors=function(e){const t=i.Arduino.fastled_info.numberOfLeds,n=[`// Colors for block ${e.id} 
`];for(let o=1;o<=t;o+=1){const r=e.getFieldValue(Ni(o)),s=ht(r);n.push("	setFastLEDColor("+o+`,{${s.red}, ${s.green}, ${s.blue}});
`)}return n.join("")};i.Arduino.fastled_show_all_colors=function(e){return`FastLED.show();
`};i.Arduino.fastled_set_color=function(e){const t=i.Arduino.valueToCode(e,"COLOR",i.Arduino.ORDER_ATOMIC);return"	setFastLEDColor("+i.Arduino.valueToCode(e,"POSITION",i.Arduino.ORDER_ATOMIC)+","+t+`);
`};i.Arduino.analog_read_setup=function(e){const t=e.getFieldValue("PIN");return i.Arduino.setupCode_["analog_read"+t]="	pinMode("+t+`, INPUT); 
`,""};i.Arduino.analog_read=function(e){return["(double)analogRead("+e.getFieldValue("PIN")+")",i.Arduino.ORDER_ATOMIC]};i.Arduino.procedures_defreturn=function(e){const t=i.Arduino.variableDB_.getName(e.getFieldValue("NAME")),n=i.Arduino.statementToCode(e,"STACK"),o=e.getFieldValue("RETURN TYPE")||"void";let r=i.Arduino.valueToCode(e,"RETURN",i.Arduino.ORDER_NONE)||"";r&&(r=i.Arduino.INDENT+"return "+r+`;
`);let s=yi(o)+" "+t+`() {
`+n+r+"}";return s=i.Arduino.scrub_(e,s),i.Arduino.functionNames_["%"+t]=s,null};function yi(e){switch(e){case"Number":return"double";case"String":return"String";case"Boolean":return"boolean";case"void":return"void";default:throw new Error("Invalid Parameter Type")}}i.Arduino.procedures_defnoreturn=i.Arduino.procedures_defreturn;i.Arduino.procedures_callnoreturn=function(e){return i.Arduino.variableDB_.getName(e.getFieldValue("NAME"),i.Procedures.DEFAULT_ARG)+`();
`};i.Arduino.rfid_scan=function(){return["rfidReader.isAvailable()",i.Arduino.ORDER_ATOMIC]};i.Arduino.rfid_tag=function(){return["String(rfidReader.getTag().getTag())",i.Arduino.ORDER_ATOMIC]};i.Arduino.rfid_card=function(){return["String(rfidReader.getTag().getCardNumber())",i.Arduino.ORDER_ATOMIC]};i.Arduino.rfid_setup=function(){return i.Arduino.libraries_.define_rfid=`#include "RFIDRdm630.h"
`,i.Arduino.libraries_.setup_rfid=`RFIDRdm630 rfidReader = RFIDRdm630(6,7);
`,""};function yn(e){i.Arduino.libraries_.define_servo=`#include <Servo.h>
`,i.Arduino.libraries_["var_servo"+e]="Servo servo_"+e+`;
`,i.Arduino.setupCode_["setup_servo_"+e]="	servo_"+e+".attach("+e+`);
`}i.Arduino.rotate_servo=function(e){const t=e.getFieldValue("PIN"),n=i.Arduino.valueToCode(e,"DEGREE",i.Arduino.ORDER_ATOMIC);return yn(t),"servo_"+t+".write("+n+`);
`};i.Arduino.servo_read_degrees=function(e){const t=e.getFieldValue("PIN");return yn(t),["servo_"+t+".read()",i.Arduino.ORDER_ATOMIC]};i.Arduino.servo_move_adafruit_tico=function(e){const t=e.getFieldValue("PIN"),n=i.Arduino.valueToCode(e,"DEGREE",i.Arduino.ORDER_ATOMIC);return i.Arduino.libraries_.servo_move_adafruit_=`#include <Adafruit_TiCoServo.h>
`,i.Arduino.libraries_["var_servo_adafruit_"+t]="Adafruit_TiCoServo servo_adafruit"+t+`;
`,i.Arduino.setupCode_["setup_servo_adafruit"+t]="	servo_adafruit"+t+".attach("+t+`);
`,"servo_adafruit"+t+".write("+n+`);
`};i.Arduino.temp_setup=function(e){return i.Arduino.libraries_.temp_setup=`#define DHTPIN ${e.getFieldValue("PIN")}
#define DHTTYPE ${e.getFieldValue("TYPE")}
#include <DHT.h>;
DHT dht(DHTPIN, DHTTYPE);`,i.Arduino.setupCode_.temp_setup=`dht.begin();

  `,""};i.Arduino.temp_get_temp=function(){return["(double)dht.readTemperature()",i.Arduino.ORDER_ATOMIC]};i.Arduino.temp_get_humidity=function(){return["(double)dht.readHumidity()",i.Arduino.ORDER_ATOMIC]};i.Arduino.text=function(e){return["String("+i.Arduino.quote_(e.getFieldValue("TEXT"))+")",i.Arduino.ORDER_ATOMIC]};i.Arduino.text.forceString_=function(e){return i.Arduino.text.forceString_.strRegExp.it(e)?e:"String("+e+")"};i.Arduino.text.forceString_.strRegExp=/^\s*'([^']|\\')*'\s*$/;i.Arduino.text_join=function(e){if(e.itemCount_===0)return['""',i.Arduino.ORDER_ATOMIC];if(e.itemCount_===1){const o=i.Arduino.valueToCode(e,"ADD0",i.Arduino.ORDER_NONE)||'""';return[i.Arduino.text.forceString_(o),i.Arduino.ORDER_ATOMIC]}const t=[];for(let o=0;o<e.itemCount_;o+=1){const r=i.Arduino.valueToCode(e,"ADD"+o,i.Arduino.ORDER_COMMA);r.length>0&&t.push(r)}return[t.join(" + "),i.Arduino.ORDER_ATOMIC]};i.Arduino.text_length=function(e){return i.Arduino.functionNames_.textLength=`double textLength(String str) {
	 return (double)str.length(); 
}
`,["textLength("+i.Arduino.valueToCode(e,"VALUE",i.Arduino.ORDER_COMMA)+")",i.Arduino.ORDER_ATOMIC]};i.Arduino.text_isEmpty=function(e){return i.Arduino.functionNames_.textLength=`double textLength(String str) {
	 return (double)str.length(); 
}
`,["(textLength("+i.Arduino.valueToCode(e,"VALUE",i.Arduino.ORDER_COMMA)+") > 0)",i.Arduino.ORDER_ATOMIC]};i.Arduino.number_to_string=function(e){i.Arduino.functionNames_.double_to_string_debug=Nn();const t=e.getFieldValue("PRECISION");return["double2string("+i.Arduino.valueToCode(e,"NUMBER",i.Arduino.ORDER_ATOMIC)+", "+t+")",i.Arduino.ORDER_NONE]};i.Arduino.text_changeCase=function(e){i.Arduino.functionNames_.upperCaseString=`
String upperCaseString(String str) {
	str.toUpperCase(); 
	return str;
}
`,i.Arduino.functionNames_.lowerCaseString=`
String lowerCaseString(String str) {
	str.toLowerCase(); 
	return str;
}
`;const t=e.getFieldValue("CASE"),n=i.Arduino.valueToCode(e,"TEXT",i.Arduino.ORDER_ATOMIC);return t==="UPPERCASE"?["upperCaseString("+n+")",i.Arduino.ORDER_ATOMIC]:["lowerCaseString("+n+")",i.Arduino.ORDER_ATOMIC]};i.Arduino.parse_string_block=function(e){i.Arduino.functionNames_.text_get_part_of_string=`
String getParseValue(String data, char separator, int index) { 
	int found = 0;	int strIndex[] = {0, -1}; 
	int maxIndex = data.length()-1; 
	for(int i=0; i<=maxIndex && found<=index; i++){   
	    if(data.charAt(i) == separator || i == maxIndex){    
	        found++;                      
	        strIndex[0] = strIndex[1]+1;    
	        strIndex[1] = (i == maxIndex) ? i+1 : i;    
	    }                            
	}                     
	return found>index ? data.substring(strIndex[0], strIndex[1]) : ""; 
}
`;const t=i.Arduino.valueToCode(e,"VALUE",i.Arduino.ORDER_ATOMIC),n="'"+e.getFieldValue("DELIMITER")+"'";let o=+i.Arduino.valueToCode(e,"POSITION",i.Arduino.ORDER_ATOMIC);return o=Math.abs(o),o=o>0?o-1:o,["getParseValue("+t+", "+n+", "+o+")",i.Arduino.ORDER_ATOMIC]};i.Arduino.time_seconds=function(e){return i.Arduino.functionNames_.secondsArduinoBeenOn=`double secondsArduinoBeenOn() {
	return millis() / 1000;
}
`,["secondsArduinoBeenOn()",i.Arduino.ORDER_ATOMIC]};i.Arduino.delay_block=function(e){let t=i.Arduino.valueToCode(e,"DELAY",i.Arduino.ORDER_ATOMIC)||1;return t=Math.ceil(Math.abs(t)*1e3),"delay("+t+`);
`};i.Arduino.time_setup=function(){return""};const Ge=function(e){return function(t,n){const o=n.getVariableName(t.getFieldValue("VAR")),r=i.Arduino.valueToCode(t,"VALUE",i.Arduino.ORDER_ATOMIC);return o+" = "+(r||e)+`;
`}},He=function(e,t){return[t.getVariableName(e.getFieldValue("VAR")),i.Arduino.ORDER_ATOMIC]};i.Arduino.variables_set_number=Ge(10);i.Arduino.variables_set_boolean=Ge("true");i.Arduino.variables_set_string=Ge('" "');i.Arduino.variables_set_colour=Ge("{ 22,  0,  22}");i.Arduino.variables_get_number=He;i.Arduino.variables_get_boolean=He;i.Arduino.variables_get_string=He;i.Arduino.variables_get_colour=He;i.Arduino.thermistor_setup=function(e){const t=e.getFieldValue("PIN"),n=e.getFieldValue("THERMISTOR_RESISTANCE"),o=e.getFieldValue("NONIMAL_RESISTANCE"),r=e.getFieldValue("DEFAULT_TEMP"),s=e.getFieldValue("B_VALUE");return i.Arduino.libraries_.include_motor_library=`
#include <Thermistor.h>
#include <NTC_Thermistor.h>

#define SENSOR_PIN             ${t}
#define REFERENCE_RESISTANCE   ${o}
#define NOMINAL_RESISTANCE     ${n}
#define NOMINAL_TEMPERATURE    ${r}
#define B_VALUE                ${s}

Thermistor* thermistor;
`,i.Arduino.setupCode_["thermistor_setup_"+t]=`	thermistor = new NTC_Thermistor(
        SENSOR_PIN,
        REFERENCE_RESISTANCE,
        NOMINAL_RESISTANCE,
        NOMINAL_TEMPERATURE,
        B_VALUE
      );
      
      `,""};i.Arduino.thermistor_read=function(e){return["thermistor->readCelsius()",i.Arduino.ORDER_ATOMIC]};i.Arduino.passive_buzzer_note=function(e){var t=+e.getFieldValue("TONE"),n=e.getFieldValue("PIN");return t===0?`noTone(${n});`:`tone(${n}, ${t});`};i.Arduino.passive_buzzer_tone=function(e){var t=+i.Arduino.valueToCode(e,"TONE",i.Arduino.ORDER_ATOMIC),n=e.getFieldValue("PIN");return t===0?`noTone(${n});`:`tone(${n}, ${t});`};i.Arduino.stepper_motor_setup=function(e){const t=e.getFieldValue("TOTAL_STEPS"),n=e.getFieldValue("SPEED"),o=e.getFieldValue("PIN_1"),r=e.getFieldValue("PIN_2"),s=e.getFieldValue("PIN_3"),l=e.getFieldValue("PIN_4");return i.Arduino.libraries_.stepper_motor=`
#include <Stepper.h>
const int stepsPerRevolution = ${t};

Stepper stepperMotor(stepsPerRevolution, ${o}, ${r}, ${s}, ${l});

  `,i.Arduino.setupCode_.stepper_motor_set_speed=`stepperMotor.setSpeed(${n});`,""};i.Arduino.stepper_motor_move=function(e){return`stepperMotor.step(${i.Arduino.valueToCode(e,"STEPS",i.Arduino.ORDER_ATOMIC)}); 
`};i.Arduino.digital_display_setup=function(e){let t=e.getFieldValue("DIO_PIN"),n=e.getFieldValue("CLK_PIN");return i.Arduino.libraries_.define_digital_display=`
#include "SevenSegmentTM1637.h"
const byte PIN_CLK = ${t};   // define CLK pin (any digital pin)
const byte PIN_DIO = ${n};   // define DIO pin (any digital pin)
SevenSegmentTM1637    digitalDisplay(PIN_CLK, PIN_DIO);
`,i.Arduino.setupCode_.digital_display_setup=`  digitalDisplay.begin();
    digitalDisplay.setBacklight(100);
`,""};i.Arduino.digital_display_set=function(e){let t=i.Arduino.valueToCode(e,"TEXT",i.Arduino.ORDER_ATOMIC);return`
  digitalDisplay.clear();
  digitalDisplay.setColonOn(${e.getFieldValue("COLON")=="TRUE"});
  digitalDisplay.print(${t});
`};i.Arduino.joystick_setup=function(e){var t=e.getFieldValue("PIN_X"),n=e.getFieldValue("PIN_Y"),o=e.getFieldValue("PIN_BUTTON");return i.Arduino.libraries_.joystick=`
#include <math.h>

#define Y_PIN ${n}  
#define X_PIN ${t} 
#define SW_PIN ${o}

boolean internal_variable_isJoystickButtonPressed = false;
boolean internal_variable_isJoyStickEngaged = false;
int internal_variable_degrees = 0;

void setJoyStickValues() {

  // https://medium.com/@melaniechow/using-a-joystick-sensor-on-an-arduino-3498d7399464
  // This function was inspired by this Article
  int y = (analogRead(Y_PIN) * 4.9);   
  delay(50); // small pause needed between reading
  int x = (analogRead(X_PIN) * 4.9 );  
  delay(50);  
  
  x = (x - 2457);
  y = (y - 2541);
  
  double val = atan2(y, x) * 180/3.14159265358979; 
  
  if (val < 0) {
    val += 360;
  }
  
  //convert to a double
  double new_x = x / 100.0;
  double new_y = y / 100.0;
  double distance = sqrt((new_x * new_x) + (new_y * new_y));

  internal_variable_degrees = distance > 15 ? val : 0;
  internal_variable_isJoyStickEngaged = distance > 15;
  internal_variable_isJoystickButtonPressed = digitalRead(SW_PIN) == LOW;
  
}

  `,i.Arduino.setupCode_.joystick=`
    pinMode(SW_PIN, INPUT);
    pinMode(Y_PIN, INPUT);
    pinMode(X_PIN, INPUT);
    digitalWrite(SW_PIN, HIGH);
  `,""};i.Arduino.joystick_angle=function(e){return["internal_variable_degrees",i.Arduino.ORDER_ATOMIC]};i.Arduino.joystick_button=function(e){return["internal_variable_isJoystickButtonPressed",i.Arduino.ORDER_ATOMIC]};i.Arduino.joystick_engaged=function(e){return["internal_variable_isJoyStickEngaged",i.Arduino.ORDER_ATOMIC]};const Ma={blockStyles:{logic_blocks:{colourPrimary:m.CONTROL,colourSecondary:m.CONTROL,colourTertiary:m.CONTROL,hat:""},loop_blocks:{colourPrimary:m.CONTROL,colourSecondary:m.CONTROL,colourTertiary:m.CONTROL,hat:""},procedure_blocks:{colourPrimary:m.CONTROL,colourSecondary:m.CONTROL,colourTertiary:m.CONTROL,hat:""},math_blocks:{colourPrimary:m.VALUES,colourSecondary:m.VALUES,colourTertiary:m.VALUES,hat:""},text_blocks:{colourPrimary:m.VALUES,colourSecondary:m.VALUES,colourTertiary:m.VALUES,hat:""},colour_blocks:{colourPrimary:m.VALUES,colourSecondary:m.VALUES,colourTertiary:m.VALUES,hat:""},variable_blocks:{colourPrimary:m.DATA,colourSecondary:m.DATA,colourTertiary:m.DATA,hat:""},list_blocks:{colourPrimary:m.DATA,colourSecondary:m.DATA,colourTertiary:m.DATA,hat:""}}};var R=(e=>(e.FOR_LOOP_BLOCK_CHANGE="FOR_LOOP_CHANGE",e.LCD_SIMPLE_PRINT_CHANGE="LCD_SIMPLE_PRINT_CHANGE",e.SETUP_SENSOR_BLOCK_FIELD_UPDATE="SETUP_SENSOR_BLOCK_FIELD_UPDATE",e.SETUP_SENSOR_BLOCK_LOOP_FIELD_UPDATE="SETUP_SENSOR_BLOCK_LOOP_FIELD_UPDATE",e.SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA="SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA",e.DISABLE_BLOCK="DISABLE_BLOCK",e.ENABLE_BLOCK="ENABLE_BLOCK",e.DELETE_VARIABLE="DELETE_VARIABLE",e.UPDATE_LED_COLOR="UPDATE_LED_COLOR",e))(R||{});const Si=e=>e.blocks.filter(n=>n.blockName==="controls_for").map(n=>{const o=n.inputBlocks.find(u=>u.name==="FROM"),r=n.inputBlocks.find(u=>u.name==="TO");if(g.isEmpty(r.blockId)||g.isEmpty(o.blockId))return{blockId:n.id,changeText:"by",type:R.FOR_LOOP_BLOCK_CHANGE};const s=e.blocks.find(u=>u.id==o.blockId),l=e.blocks.find(u=>u.id==r.blockId);if(s.blockName!=="math_number"||l.blockName!=="math_number")return{blockId:n.id,changeText:"by",type:R.FOR_LOOP_BLOCK_CHANGE};const a=+l.fieldValues.find(u=>u.name=="NUM").value,c=+s.fieldValues.find(u=>u.name=="NUM").value>a?"by subtracting":"by adding";return{blockId:n.id,changeText:c,type:R.FOR_LOOP_BLOCK_CHANGE}}),Ze=ce({frames:[],board:so.ARDUINO_UNO,error:!1,settings:tn}),rt={subscribe:Ze.subscribe,set:Ze.set,update:Ze.update};var H=(e=>(e.SETUP="SETUP",e.SENSOR_SETUP="SENSOR_SETUP",e.SENSOR_READ="SENSOR_READ",e.STATE="STATE",e.VALUE="VALUE",e.ARDUINO="ARDUINO",e.FUNCTION="FUNCTION",e.LIST_CREATE="LIST_CREATE",e))(H||{}),Sn=(e=>(e.NONE="NONE",e.BLUETOOTH="BLUETOOH",e.BUTTON="BUTTON",e.IR_REMOTE="IR_REMOTE",e.LCD_SCREEN="LCD_SCREEN",e.NEO_PIXEL="NEO_PIXEL",e.FAST_LED="FAST_LED",e.LED_MATRIX="LED_MATRIX",e.LED_COLOR="LED_COLOR",e.ULTRA_SONIC="ULTRA_SONIC",e.LED="LED",e.DIGITAL_WRITE="DIGITAL_WRITE",e.ANALOG_WRITE="ANALOG_WRITE",e.DIGITAL_READ_SETUP="DIGITAL_READ_SETUP",e.ANALOG_READ_SETUP="ANALOG_READ_SETUP",e.RFID="RFID",e.SERVO="SERVO",e.TEMP="TEMP",e.THERMISTOR="THERMISTOR",e.PASSIVE_BUZZER="PASSIVE_BUZZER",e.STEPPER_MOTOR="STEPPER_MOTOR",e.DIGITAL_DISPLAY="DIGITAL_DISPLAY",e.JOYSTICK="JOYSTICK",e))(Sn||{});const st=["STATE","VALUE","SENSOR_READ"];var Et=(e=>(e[e.INPUT_STATEMENT=3]="INPUT_STATEMENT",e[e.INPUT_BLOCK=1]="INPUT_BLOCK",e))(Et||{});const We=["button_setup","digital_read_setup","analog_read_setup","procedures_defnoreturn"],ne={bluetooth_send_message:"bluetooth_setup",bluetooth_has_message:"bluetooth_setup",bluetooth_get_message:"bluetooth_setup",lcd_screen_simple_print:"lcd_setup",led_matrix_make_draw:"led_matrix_setup",led_matrix_turn_one_on_off:"led_matrix_setup",lcd_screen_clear:"lcd_setup",lcd_screen_print:"lcd_setup",lcd_screen_blink:"lcd_setup",neo_pixel_set_color:"neo_pixel_setup",fastled_set_color:"fastled_setup",fastled_set_all_colors:"fastled_setup",fastled_show_all_colors:"fastled_setup",soil_humidity_percentage:"soil_sensor_setup",soil_humidity_value:"soil_sensor_setup",soil_is_raining:"soil_sensor_setup",ir_remote_has_code_receive:"ir_remote_setup",ir_remote_get_code:"ir_remote_setup",temp_get_temp:"temp_setup",temp_get_humidity:"temp_setup",set_color_led:"rgb_led_setup",rfid_scan:"rfid_setup",rfid_tag:"rfid_setup",rfid_card:"rfid_setup",is_button_pressed:"button_setup",arduino_send_message:"message_setup",arduino_get_message:"message_setup",arduino_receive_message:"message_setup",digital_read:"digital_read_setup",analog_read:"analog_read_setup",ultra_sonic_sensor_motion:"ultra_sonic_sensor_setup",time_seconds:"time_setup",thermistor_read:"thermistor_setup",stepper_motor_move:"stepper_motor_setup",digital_display_set:"digital_display_setup",joystick_button:"joystick_setup",joystick_angle:"joystick_setup",joystick_engaged:"joystick_setup"},Ai={bluetooth_setup:"bluetooth setup block",lcd_setup:"LCD setup block",neo_pixel_setup:"LED light strip setup block",fastled_setup:"LED light strip setup block",soil_sensor_setup:"soil sensor setup block",ir_remote_setup:"IR remote setup block",temp_setup:"temperature sensor setup block",rgb_led_setup:"LED color setup block",rfid_setup:"RFID setup block",button_setup:"button setup block",message_setup:"message setup block",digital_read_setup:"digital read setup block",analog_read_setup:"analog read setup block",ultra_sonic_sensor_setup:"ultra sonic sensor setup block",led_matrix_setup:"led matrix setup block",time_setup:"time setup block",thermistor_setup:"thermistor setup block",stepper_motor_setup:"stepper motor setup block",digital_display_setup:"digital display setup block",joystick_setup:"joystick setup block"},Ft={arduino_loop:{type:"ARDUINO",pinCategory:"NONE"},arduino_setup:{type:"ARDUINO",pinCategory:"NONE"},create_list_number_block:{type:"LIST_CREATE",pinCategory:"NONE"},create_list_boolean_block:{type:"LIST_CREATE",pinCategory:"NONE"},create_list_string_block:{type:"LIST_CREATE",pinCategory:"NONE"},create_list_colour_block:{type:"LIST_CREATE",pinCategory:"NONE"},led_matrix_setup:{type:"SETUP",pinCategory:"LED_MATRIX"},led_matrix_make_draw:{type:"STATE",pinCategory:"NONE"},led_matrix_turn_one_on_off:{type:"STATE",pinCategory:"NONE"},get_number_from_list:{type:"VALUE",pinCategory:"NONE"},get_string_from_list:{type:"VALUE",pinCategory:"NONE"},get_boolean_from_list:{type:"VALUE",pinCategory:"NONE"},get_colour_from_list:{type:"VALUE",pinCategory:"NONE"},set_number_list_block:{type:"STATE",pinCategory:"NONE"},set_boolean_list_block:{type:"STATE",pinCategory:"NONE"},set_colour_list_block:{type:"STATE",pinCategory:"NONE"},set_string_list_block:{type:"STATE",pinCategory:"NONE"},variables_get_number:{type:"VALUE",pinCategory:"NONE"},variables_get_string:{type:"VALUE",pinCategory:"NONE"},variables_get_boolean:{type:"VALUE",pinCategory:"NONE"},variables_get_colour:{type:"VALUE",pinCategory:"NONE"},variables_set_boolean:{type:"STATE",pinCategory:"NONE"},variables_set_string:{type:"VALUE",pinCategory:"NONE"},variables_set_number:{type:"STATE",pinCategory:"NONE"},variables_set_colour:{type:"STATE",pinCategory:"NONE"},colour_random:{type:"VALUE",pinCategory:"NONE"},colour_rgb:{type:"VALUE",pinCategory:"NONE"},color_picker_custom:{type:"VALUE",pinCategory:"NONE"},math_number:{type:"VALUE",pinCategory:"NONE"},math_arithmetic:{type:"VALUE",pinCategory:"NONE"},string_to_number:{type:"VALUE",pinCategory:"NONE"},math_round:{type:"VALUE",pinCategory:"NONE"},math_modulo:{type:"VALUE",pinCategory:"NONE"},math_random_int:{type:"VALUE",pinCategory:"NONE"},math_number_property:{type:"VALUE",pinCategory:"NONE"},text_join:{type:"VALUE",pinCategory:"NONE"},text:{type:"VALUE",pinCategory:"NONE"},text_length:{type:"VALUE",pinCategory:"NONE"},parse_string_block:{type:"VALUE",pinCategory:"NONE"},number_to_string:{type:"VALUE",pinCategory:"NONE"},text_isEmpty:{type:"VALUE",pinCategory:"NONE"},text_changeCase:{type:"VALUE",pinCategory:"NONE"},procedures_defnoreturn:{type:"FUNCTION",pinCategory:"NONE"},procedures_callnoreturn:{type:"STATE",pinCategory:"NONE"},passive_buzzer_note:{type:"STATE",pinCategory:"PASSIVE_BUZZER"},passive_buzzer_tone:{type:"STATE",pinCategory:"PASSIVE_BUZZER"},controls_ifelse:{type:"STATE",pinCategory:"NONE"},control_if:{type:"STATE",pinCategory:"NONE"},logic_compare:{type:"VALUE",pinCategory:"NONE"},logic_negate:{type:"VALUE",pinCategory:"NONE"},logic_operation:{type:"VALUE",pinCategory:"NONE"},logic_boolean:{type:"VALUE",pinCategory:"NONE"},controls_for:{type:"STATE",pinCategory:"NONE"},controls_repeat_ext:{type:"STATE",pinCategory:"NONE"},debug_block:{type:"STATE",pinCategory:"NONE"},message_setup:{type:"SENSOR_SETUP",pinCategory:"NONE"},arduino_get_message:{type:"SENSOR_READ",pinCategory:"NONE"},arduino_receive_message:{type:"SENSOR_READ",pinCategory:"NONE"},arduino_send_message:{type:"STATE",pinCategory:"NONE"},time_setup:{type:"SENSOR_SETUP",pinCategory:"NONE"},time_seconds:{type:"SENSOR_READ",pinCategory:"NONE"},delay_block:{type:"STATE",pinCategory:"NONE"},bluetooth_setup:{type:"SENSOR_SETUP",pinCategory:"BLUETOOH"},bluetooth_send_message:{type:"STATE",pinCategory:"NONE"},bluetooth_has_message:{type:"SENSOR_READ",pinCategory:"NONE"},bluetooth_get_message:{type:"SENSOR_READ",pinCategory:"NONE"},lcd_setup:{type:"SETUP",pinCategory:"LCD_SCREEN"},lcd_screen_print:{type:"STATE",pinCategory:"NONE"},lcd_screen_clear:{type:"STATE",pinCategory:"NONE"},lcd_scroll:{type:"STATE",pinCategory:"NONE"},lcd_screen_simple_print:{type:"STATE",pinCategory:"NONE"},lcd_blink:{type:"STATE",pinCategory:"NONE"},lcd_backlight:{type:"STATE",pinCategory:"NONE"},led:{type:"STATE",pinCategory:"LED"},led_fade:{type:"STATE",pinCategory:"LED"},neo_pixel_setup:{type:"SETUP",pinCategory:"NEO_PIXEL"},neo_pixel_set_color:{type:"STATE",pinCategory:"NONE"},fastled_setup:{type:"SETUP",pinCategory:"FAST_LED"},fastled_set_color:{type:"STATE",pinCategory:"NONE"},fastled_set_all_colors:{type:"STATE",pinCategory:"NONE"},fastled_show_all_colors:{type:"STATE",pinCategory:"NONE"},rotate_servo:{type:"STATE",pinCategory:"SERVO"},move_motor:{type:"STATE",pinCategory:"NONE"},set_color_led:{type:"STATE",pinCategory:"LED_COLOR"},rgb_led_setup:{type:"SETUP",pinCategory:"LED_COLOR"},digital_write:{type:"STATE",pinCategory:"DIGITAL_WRITE"},analog_write:{type:"STATE",pinCategory:"ANALOG_WRITE"},analog_read_setup:{type:"SENSOR_SETUP",pinCategory:"ANALOG_READ_SETUP"},analog_read:{type:"SENSOR_READ",pinCategory:"NONE"},button_setup:{type:"SENSOR_SETUP",pinCategory:"BUTTON"},is_button_pressed:{type:"SENSOR_READ",pinCategory:"NONE"},digital_read_setup:{type:"SENSOR_SETUP",pinCategory:"DIGITAL_READ_SETUP"},digital_read:{type:"ARDUINO",pinCategory:"NONE"},ir_remote_setup:{type:"SENSOR_SETUP",pinCategory:"IR_REMOTE"},ir_remote_has_code_receive:{type:"SENSOR_READ",pinCategory:"NONE"},ir_remote_get_code:{type:"SENSOR_READ",pinCategory:"NONE"},ultra_sonic_sensor_setup:{type:"SENSOR_SETUP",pinCategory:"ULTRA_SONIC"},ultra_sonic_sensor_motion:{type:"SENSOR_READ",pinCategory:"NONE"},rfid_setup:{type:"SENSOR_SETUP",pinCategory:"RFID"},rfid_card:{type:"SENSOR_READ",pinCategory:"NONE"},rfid_tag:{type:"SENSOR_READ",pinCategory:"NONE"},rfid_scan:{type:"SENSOR_READ",pinCategory:"NONE"},temp_setup:{type:"SENSOR_SETUP",pinCategory:"TEMP"},temp_get_temp:{type:"SENSOR_READ",pinCategory:"NONE"},temp_get_humidity:{type:"SENSOR_READ",pinCategory:"NONE"},thermistor_setup:{type:"SENSOR_SETUP",pinCategory:"THERMISTOR"},thermistor_read:{type:"SENSOR_READ",pinCategory:"NONE"},stepper_motor_setup:{type:"SETUP",pinCategory:"STEPPER_MOTOR"},stepper_motor_move:{type:"STATE",pinCategory:"NONE"},digital_display_setup:{type:"SETUP",pinCategory:"DIGITAL_DISPLAY"},digital_display_set:{type:"STATE",pinCategory:"NONE"},joystick_setup:{type:"SENSOR_SETUP",pinCategory:"JOYSTICK"},joystick_angle:{type:"SENSOR_READ",pinCategory:"NONE"},joystick_engaged:{type:"SENSOR_READ",pinCategory:"NONE"},joystick_button:{type:"SENSOR_READ",pinCategory:"NONE"}},Ti=e=>{if(!g.isEmpty(e.nextConnection)&&!g.isEmpty(e.nextConnection.targetBlock()))return e.nextConnection.targetBlock().id},Ii=e=>{const t=e.getRootBlock();return t&&t.id!==e.id?t.id:void 0},An=e=>e.inputList.map(t=>t.fieldRow.filter(n=>n.EDITABLE||e.type==="procedures_callnoreturn"&&n.name==="NAME").map(n=>{let o;return n instanceof i.FieldDropdown&&(o=n.getOptions().map(([r,s])=>({name:r,value:s}))),{name:n.name,value:n.getValue(),validOptions:o}})).reduce((t,n)=>[...t,...n],[]),Ri=e=>An(e).filter(t=>t.name.includes("PIN")).map(t=>t.value),Ci=e=>e.inputList.filter(t=>t.type===+Et.INPUT_BLOCK).map(t=>{const n=t.connection.targetBlock(),o=t.name,r=n?n.id:void 0;return{name:o,blockId:r}}),Di=e=>e.inputList.filter(t=>t.type===+Et.INPUT_STATEMENT).map(t=>{const n=e.getInputTargetBlock(t.name),o=t.name,r=n?n.id:void 0;return{name:o,blockId:r}}),Tn=e=>({id:e.id,blockName:e.type,type:Ft[e.type].type,inputBlocks:Ci(e),inputStatements:Di(e),fieldValues:An(e),nextBlockId:Ti(e),rootBlockId:Ii(e),pinCategory:Ft[e.type].pinCategory,pins:Ri(e),metaData:e.data,disabled:!e.isEnabled()}),ki=e=>({isBeingUsed:Zn(e.getId()),name:e.name,id:e.getId(),type:e.type}),Qe=(e,t,n,o)=>{const r=e.map(Tn);return{blockId:g.get(n,"blockId",void 0),type:n.type,blocks:r,microController:o,variables:t.map(ki),fieldName:g.get(n,"name",void 0),fieldType:g.get(n,"element",void 0),newValue:g.get(n,"newValue",void 0),oldValue:g.get(n,"oldValue",void 0)}},vi=e=>{const{variables:t}=e;return t.filter(n=>!n.isBeingUsed).map(n=>({variableId:n.id,actionType:"delete",type:R.DELETE_VARIABLE}))},_=(e,t)=>{const n=e.fieldValues.find(o=>o.name===t);return n?n.value:void 0},In=e=>e.find(t=>t.blockName=="arduino_loop"),Li=e=>e.find(t=>t.blockName=="arduino_setup"),bt=(e,t)=>e.find(n=>n.id===t),Pi=(e,t,n)=>{const o=t.inputStatements.find(r=>r.name==n).blockId;return bt(e,o)},Rn=e=>+In(e).fieldValues.find(t=>t.name==="LOOP_TIMES").value,wi=(e,t)=>t.find(n=>e.rootBlockId===n.id),Fi=e=>({receiving_message:_(e,"receiving_message")==="TRUE",message:_(e,"message"),loop:+_(e,"LOOP"),blockName:e.blockName}),Mi=e=>({is_pressed:_(e,"is_pressed")==="TRUE",loop:+_(e,"LOOP"),blockName:e.blockName}),X=(e,t)=>JSON.parse(e.metaData).find(o=>o.loop===t.iteration||(t.function==="pre-setup"||t.function==="setup")&&o.loop===1),Bi=(e,t)=>{const n=X(e,t);return{type:E.BLUE_TOOTH,rxPin:_(e,"PIN_RX"),txPin:_(e,"PIN_TX"),pins:[_(e,"PIN_TX"),_(e,"PIN_RX")],hasMessage:n.receiving_message,message:n.message,sendMessage:""}},Ui=(e,t)=>{const n=X(e,t);return{type:E.BUTTON,pins:[_(e,"PIN")],isPressed:n.is_pressed}},xi=e=>({scanned_new_code:_(e,"scanned_new_code")==="TRUE",code:_(e,"code"),loop:+_(e,"LOOP"),blockName:e.blockName}),Vi=(e,t)=>{const n=X(e,t);return{type:E.IR_REMOTE,analogPin:_(e,"PIN"),pins:[_(e,"PIN")],code:n.code,hasCode:n.scanned_new_code}},Gi=(e,t)=>{const n=X(e,t),o=_(e,"PIN");return{type:E.DIGITAL_SENSOR,pins:[o],pin:o,pictureType:_(e,"TYPE"),isOn:n.isOn}},Hi=e=>({isOn:_(e,"isOn")==="TRUE",loop:+_(e,"LOOP"),blockName:e.blockName}),Wi=(e,t)=>{const n=X(e,t),o=_(e,"PIN");return n?{type:E.ANALOG_SENSOR,pins:[o],pin:o,pictureType:_(e,"TYPE"),state:n.state}:{type:E.ANALOG_SENSOR,pins:[o],pin:o,pictureType:_(e,"TYPE"),state:0}},$i=e=>({state:+_(e,"state"),loop:+_(e,"LOOP"),blockName:e.blockName}),Xi=(e,t)=>{const n=X(e,t);return{type:E.MESSAGE,pins:[],hasMessage:(n==null?void 0:n.receiving_message)||!1,message:(n==null?void 0:n.message)||""}},Ki=e=>({receiving_message:_(e,"receiving_message")==="TRUE",message:_(e,"message"),loop:+_(e,"LOOP"),blockName:e.blockName}),Yi=e=>({time_in_seconds:+_(e,"time_in_seconds"),loop:+_(e,"LOOP"),blockName:e.blockName}),ji=(e,t)=>({type:E.TIME,pins:[],timeInSeconds:+t.iteration*+_(e,"time_in_seconds")}),zi=e=>({cm:+_(e,"cm"),loop:+_(e,"LOOP"),blockName:e.blockName}),Ji=(e,t)=>{const n=X(e,t);return{type:E.ULTRASONICE_SENSOR,trigPin:_(e,"PIN_TRIG"),echoPin:_(e,"PIN_ECHO"),pins:[_(e,"PIN_TRIG"),_(e,"PIN_ECHO")],cm:n.cm}},qi=e=>({scanned_card:_(e,"scanned_card")==="TRUE",card_number:_(e,"card_number"),tag:_(e,"tag"),loop:+_(e,"LOOP"),blockName:e.blockName}),Zi=(e,t)=>{const n=X(e,t);return{type:E.RFID,txPin:_(e,"PIN_TX"),pins:[_(e,"PIN_TX")],scannedCard:n.scanned_card,cardNumber:n.card_number,tag:n.tag}},Qi=e=>({temp:+_(e,"temp"),humidity:+_(e,"humidity"),loop:+_(e,"LOOP"),blockName:e.blockName}),er=(e,t)=>{const n=X(e,t);return{type:E.TEMPERATURE_SENSOR,pins:[_(e,"PIN")],temperature:n.temp,humidity:n.humidity}},tr=e=>({temp:+_(e,"TEMP"),loop:+_(e,"LOOP"),blockName:e.blockName}),nr=(e,t)=>{const n=X(e,t);return{type:E.THERMISTOR,pins:[_(e,"PIN")],temp:n.temp,externalResistorsOhms:+_(e,"NONIMAL_RESISTANCE")}},or=e=>({buttonPressed:_(e,"BUTTON_PRESSED")==="TRUE",degree:+_(e,"DEGREE"),engaged:_(e,"ENGAGED")==="TRUE",loop:+_(e,"LOOP"),blockName:e.blockName}),ir=(e,t)=>{const n=_(e,"PIN_X"),o=_(e,"PIN_Y"),r=_(e,"PIN_BUTTON"),s=X(e,t);return{type:E.JOYSTICK,pins:[n,o,r],buttonPin:r,xPin:n,yPin:o,buttonPressed:s.buttonPressed,engaged:s.engaged,degree:s.degree}},Mt={bluetooth_setup:Fi,button_setup:Mi,ir_remote_setup:xi,digital_read_setup:Hi,analog_read_setup:$i,rfid_setup:qi,temp_setup:Qi,time_setup:Yi,ultra_sonic_sensor_setup:zi,message_setup:Ki,thermistor_setup:tr,joystick_setup:or},Te={bluetooth_setup:Bi,button_setup:Ui,ir_remote_setup:Vi,digital_read_setup:Gi,analog_read_setup:Wi,rfid_setup:Zi,temp_setup:er,time_setup:ji,ultra_sonic_sensor_setup:Ji,message_setup:Xi,thermistor_setup:nr,joystick_setup:ir},rr=g.keys(Te),sr=(e,t)=>{if(!g.isFunction(Te[e.blockName]))throw new Error("No Sensor Data function found for "+e.blockName);try{return Te[e.blockName](e,t)}catch{return Te[e.blockName](e,{iteration:0,function:"pre-setup"})}},lr=e=>{if(!g.isFunction(Mt[e.blockName]))throw new Error("No Sensor Data function found for "+e.blockName);return Mt[e.blockName](e)},ar=e=>{const{fieldName:t,blockId:n,blocks:o,fieldType:r}=e;if(t=="LOOP"&&r==="field")return[];const s=o.find(p=>p.id==n);if(!s||s.type!==H.SENSOR_SETUP||s.blockName==="time_setup")return[];const l=Rn(o);console.log({executionTimes:l});const a=g.range(1,l+1),d=lr(s),c=_(s,"COPY_SAME")=="TRUE";if(!g.isEmpty(s.metaData)&&!c){const p=JSON.parse(s.metaData),f=[...a.map(N=>{const O=p.find(T=>T.loop===N);return O||{...d,loop:N}}).filter(N=>N.loop!==d.loop),d];return[{blockId:s.id,data:JSON.stringify(f),type:R.SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA}]}const u=a.map(p=>({...d,loop:p}));return console.log({metadata:u}),[{blockId:s.id,data:JSON.stringify(u),type:R.SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA}]},dr=e=>{const{blocks:t,newValue:n,fieldName:o,blockId:r}=e,s=t.find(a=>a.id===r);if(!s||s.blockName!=="arduino_loop")return[];if(o!=="LOOP_TIMES"&&!n)return[];const l=+n>0?+n:1;return t.filter(a=>a.type===H.SENSOR_SETUP).filter(a=>+a.fieldValues.find(d=>d.name==="LOOP").value>l).map(a=>({blockId:a.id,loop:l,type:R.SETUP_SENSOR_BLOCK_LOOP_FIELD_UPDATE}))},ur=e=>{const{fieldName:t,fieldType:n,newValue:o,oldValue:r,blockId:s,blocks:l}=e;if(!t||!n||!o||!r)return[];if(!(n==="field"&&t==="LOOP"))return[];const a=l.find(p=>p.id===s);if(!a||a.type!==H.SENSOR_SETUP)return[];if(g.isEmpty(a.metaData))return[];const d=+o,c=JSON.parse(a.metaData).find(p=>p.loop===d),u=g.keys(c).filter(p=>p!=="loop").map(p=>({name:p,value:c[p]}));return[{blockId:a.id,fields:u,type:R.SETUP_SENSOR_BLOCK_FIELD_UPDATE}]},Bt=e=>{const{blocks:t}=e;return t.filter(n=>We.includes(n.blockName)).filter(n=>n.blockName!=="procedures_defnoreturn").filter(n=>n.pins.includes(to.NO_PINS)).map(n=>({blockId:n.id,warningText:"Arduino-да бос пин жоқ",type:R.DISABLE_BLOCK,stopCompiling:!0}))},Ut=e=>{const{blocks:t}=e;return t.filter(n=>g.uniq(n.pins).length!==n.pins.length).map(n=>({type:R.DISABLE_BLOCK,warningText:"Блок 1 пинді 2 рет пайдалануда",blockId:n.id,stopCompiling:!0}))},xt=e=>{const{blocks:t}=e;return t.filter(n=>[H.SETUP,H.SENSOR_SETUP].includes(n.type)).filter(n=>!We.includes(n.blockName)).filter(n=>t.filter(o=>o.blockName===n.blockName).length>1).map(n=>({blockId:n.id,type:R.DISABLE_BLOCK,warningText:"Қайталанатын орнату блоктары, біреуін жойыңыз",stopCompiling:!0}))},Vt=e=>{const{blocks:t}=e;return t.filter(n=>st.includes(n.type)).filter(n=>n.rootBlockId===void 0||st.includes(t.find(o=>o.id===n.rootBlockId).type)).map(n=>({blockId:n.id,type:R.DISABLE_BLOCK,warningText:null,stopCompiling:!1}))},Gt=e=>{const{blocks:t}=e,n=cr(t),o=g.keys(n).map(s=>({category:s,pins:pr(n,s)})),r=o.map(s=>s.category);return t.filter(s=>r.includes(s.pinCategory)).filter(s=>g.intersection(o.find(l=>l.category===s.pinCategory).pins,s.pins).length>0).map(s=>{const l=o.find(a=>a.category===s.pinCategory).pins;return{blockId:s.id,warningText:`Бұл блоктарда осы қайталанатын пиндер бар: ${g.intersection(s.pins,l).join(", ")}`,type:R.DISABLE_BLOCK,stopCompiling:!0}})},cr=e=>e.reduce((t,n)=>{if(g.isEmpty(n.pins)||n.pinCategory===Sn.NONE)return t;const o=wi(n,e),r=o&&[H.ARDUINO,H.FUNCTION].includes(o.type);return st.includes(n.type)&&!r?t:t[n.pinCategory]?{...t,[n.pinCategory]:g.union(n.pins,t[n.pinCategory])}:{...t,[n.pinCategory]:n.pins}},{}),pr=(e,t)=>g.keys(e).filter(n=>t!==n).reduce((n,o)=>{const r=g.intersection(e[t],e[o]);return g.union(r,n)},[]),_r=e=>{e.actionType==="delete"&&Qn(e.variableId)},mr=e=>{q(e.blockId).inputList[2].fieldRow[0].setValue(e.changeText)},fr=e=>{const t=q(e.blockId);e.fields.filter(n=>t.getField(n.name)).forEach(n=>{if(t.getField(n.name)instanceof i.FieldCheckbox){t.setFieldValue(n.value===1||n.value===!0?"TRUE":"FALSE",n.name);return}t.setFieldValue(n.value,n.name)})},gr=e=>{q(e.blockId).setFieldValue(e.loop.toString(),"LOOP")},hr=e=>{const t=q(e.blockId);t.isEnabled()&&t.setEnabled(!1),t.setWarningText(e.warningText)},Er=e=>{const t=q(e.blockId);t.isEnabled()||(t.setEnabled(!0),t.setWarningText(null))},br=e=>{const t=q(e.blockId);t.data=e.data},Or=e=>{const t=q(e.blockId);e.numberOfRows==2?(t.getInput("ROW_3").setVisible(!1),t.getInput("ROW_4").setVisible(!1)):(t.getInput("ROW_3").setVisible(!0),t.getInput("ROW_4").setVisible(!0)),t.render()},Nr=e=>{const t=q(e.blockId);t.setFieldValue(e.color,"COLOR"),t.render()},Ht={[R.DELETE_VARIABLE]:_r,[R.DISABLE_BLOCK]:hr,[R.ENABLE_BLOCK]:Er,[R.FOR_LOOP_BLOCK_CHANGE]:mr,[R.SETUP_SENSOR_BLOCK_FIELD_UPDATE]:fr,[R.SETUP_SENSOR_BLOCK_LOOP_FIELD_UPDATE]:gr,[R.SETUP_SENSOR_BLOCK_SAVE_DEBUG_DATA]:br,[R.LCD_SIMPLE_PRINT_CHANGE]:Or,[R.UPDATE_LED_COLOR]:Nr},Ie=e=>{if(!Ht[e.type])throw new Error("No updater found for action type: "+e.type);return Ht[e.type](e)},Wt=e=>{const{blocks:t}=e,n=t.filter(s=>s.type===H.SENSOR_READ).filter(s=>We.includes(ne[s.blockName])).filter(s=>{const l=ne[s.blockName];return t.find(a=>a.blockName==l)!==void 0}),o=n.map(s=>ne[s.blockName]),r=t.filter(s=>o.includes(s.blockName));return n.filter(s=>{const l=r.filter(a=>ne[s.blockName]===a.blockName).reduce((a,d)=>g.union(a,d.pins),[]);return g.intersection(s.pins,l).length===0}).map(s=>({blockId:s.id,type:R.DISABLE_BLOCK,warningText:"Орнату блогына сәйкес болу үшін PIN нөмірін өзгертіңіз",stopCompiling:!0}))},$t=e=>{const{blocks:t}=e;return t.filter(n=>g.keys(ne).includes(n.blockName)).filter(n=>yr(n,t)).map(n=>({blockId:n.id,type:R.DISABLE_BLOCK,warningText:`Бұл блок келесі үшін қажет ${Ai[ne[n.blockName]]}.`,stopCompiling:!0}))},yr=(e,t)=>{const n=ne[e.blockName],o=t.filter(r=>r.blockName===n&&!r.disabled).length;return o==1?!1:o<1?!0:!We.includes(n)},Sr=(e,t,n,o,r)=>+_(t,"NUM"),Ar=(e,t,n,o,r)=>{const s=+b(e,t,n,o,"A",0,r),l=+b(e,t,n,o,"B",0,r);switch(_(t,"OP")){case"ADD":return s+l;case"MINUS":return s-l;case"MULTIPLY":return s*l;case"DIVIDE":return s/l;case"POWER":return Math.pow(s,l);default:return 1}},Tr=(e,t,n,o,r)=>{const s=+b(e,t,n,o,"NUM",1,r);switch(_(t,"OP")){case"ROUND":return Math.round(s);case"ROUNDUP":return Math.ceil(s);case"ROUNDDOWN":return Math.floor(s);default:return 1}},Ir=(e,t,n,o,r)=>{const s=+b(e,t,n,o,"DIVIDEND",1,r),l=+b(e,t,n,o,"DIVISOR",1,r);return s%l},Rr=(e,t,n,o,r)=>{const s=+b(e,t,n,o,"FROM",1,r),l=+b(e,t,n,o,"TO",1,r);return kr(s,l)},Cr=(e,t,n,o,r)=>+b(e,t,n,o,"VALUE",1,r),Dr=(e,t,n,o,r)=>{const s=+b(e,t,n,o,"NUMBER_TO_CHECK",1,r),l=_(t,"PROPERTY");if(l==="EVEN")return s%2===0;if(l==="ODD")return s%2===1;if(l==="POSITIVE")return s>0;if(l==="NEGATIVE")return s<0;if(l==="DIVISIBLE_BY"){const a=+b(e,t,n,o,"DIVISOR",1,r);return s%a===0}throw new Error(`Бұл чек үшін тексеру табылмады: ${l}.`)};function kr(e,t){if(e>t){let n=e;e=t,t=n}return Math.floor(Math.random()*(t-e+1)+e)}const vr=(e,t,n,o,r)=>_(t,"BOOL")==="TRUE",Lr=(e,t,n,o,r)=>{const s=_(t,"OP"),l=b(e,t,n,o,"A",void 0,r),a=b(e,t,n,o,"B",void 0,r);if(l===void 0||a===void 0)return!1;switch(s){case"EQ":return l===a;case"NEQ":return l!==a;case"LT":return l<a;case"LTE":return l<=a;case"GT":return l>a;case"GTE":return l>=a;default:return!1}},Pr=(e,t,n,o,r)=>{const s=_(t,"OP"),l=b(e,t,n,o,"A",void 0,r),a=b(e,t,n,o,"B",void 0,r);if(l===void 0||a===void 0)return!1;switch(s){case"AND":return l&&a;case"OR":return l||a;default:return!1}},wr=(e,t,n,o,r)=>!b(e,t,n,o,"BOOL",!1,r),be=(e,t,n,o,r=void 0)=>{const s=n.find(d=>d.id===_(t,"VAR")).name,l=g.cloneDeep([...r.variables[s].value]);let a=b(e,t,n,o,"POSITION",1,r);return a=a>=1?a-1:0,a=a<0?0:a,a=a>l.length-1?l.length-1:a,l[a]},Fr=(e,t,n,o,r)=>_(t,"TEXT"),Mr=(e,t,n,o,r)=>t.inputBlocks.reduce((s,l)=>!l.blockId||!l.name.includes("ADD")?s:s+b(e,t,n,o,l.name,"",r),""),Br=(e,t,n,o,r)=>b(e,t,n,o,"VALUE","",r).length,Ur=(e,t,n,o,r)=>{const s=_(t,"DELIMITER");let l=+b(e,t,n,o,"POSITION",1,r);if(l<0)return"";l=l==0?1:l;const a=b(e,t,n,o,"VALUE","",r);if(!a.includes(s))return"";const d=a.split(s);return d.length<l?"":d[l-1]},xr=(e,t,n,o,r)=>{const s=b(e,t,n,o,"VALUE","",r);return g.isEmpty(s)},Vr=(e,t,n,o,r)=>{const s=+_(t,"PRECISION"),l=b(e,t,n,o,"NUMBER","",r);return l===""||!l?0 .toFixed(s):l.toFixed(s)},Gr=(e,t,n,o,r)=>{const s=b(e,t,n,o,"TEXT","",r);switch(_(t,"CASE")){case"UPPERCASE":return s.toUpperCase();case"LOWERCASE":return s.toLowerCase();default:return""}},Hr=(e,t,n,o,r)=>{const s=_(t,"COLOR");return ht(s)},Wr=(e,t,n,o,r)=>({red:g.random(1,256),green:g.random(1,256),blue:g.random(1,256)}),$r=(e,t,n,o,r)=>{const s=b(e,t,n,o,"RED",0,r),l=b(e,t,n,o,"GREEN",0,r),a=b(e,t,n,o,"BLUE",0,r);return{red:s,green:l,blue:a}};var v=(e=>(e.NUMBER="Number",e.STRING="String",e.BOOLEAN="Boolean",e.COLOUR="Colour",e.LIST_STRING="List String",e.LIST_NUMBER="List Number",e.LIST_BOOLEAN="List Boolean",e.LIST_COLOUR="List Colour",e))(v||{});const $e=(e,t,n,o,r,s=void 0,l=!1,a=!1,d=0)=>{const c=s?g.cloneDeep(s.variables):{};c[o.name]=o;const u=s?g.cloneDeep(s.components):[];return{blockId:e,blockName:t,sendMessage:"",timeLine:{...n},variables:c,txLedOn:l,builtInLedOn:a,components:u,explanation:r,delay:d,powerLedOn:!0,frameNumber:s?s.frameNumber+1:1}},Xr=(e,t,n)=>{const o=t.inputBlocks.find(r=>r.name==n);if(!(!o||!o.blockId))return bt(e,o.blockId)},de=(e,t,n,o,r=void 0,s=!1,l=!1,a=0)=>{const d=r?g.cloneDeep(r.components):[],c=r?{...r.variables}:{};return{blockId:e,blockName:t,sendMessage:"",timeLine:{...n},variables:c,txLedOn:s,builtInLedOn:l,components:d,explanation:o,delay:a,powerLedOn:!0,frameNumber:r?r.frameNumber+1:1}},W=(e,t,n)=>n<e?e:n>t?t:n,S=(e,t,n,o,r,s=void 0,l=!1,a=!1,d=0)=>{const c=s?{...s.variables}:{},p=[...(s?[...s.components]:[]).filter(h=>At(h)!==At(o)),o];return{blockId:e,blockName:t,sendMessage:"",timeLine:{...n},variables:c,txLedOn:l,builtInLedOn:a,components:p,explanation:r,delay:d,powerLedOn:!0,frameNumber:s?s.frameNumber+1:1}},Kr=e=>{switch(e){case v.COLOUR:return{red:0,green:0,blue:0};case v.STRING:return"";case v.BOOLEAN:return!0;case v.NUMBER:return 0;default:return}},Yr=e=>{switch(e){case v.COLOUR:return{red:0,green:0,blue:0};case v.STRING:return"";case v.BOOLEAN:return!1;case v.NUMBER:return 0;default:return}},Cn=(e,t)=>{if(t===v.COLOUR){const n=e;return e?`(red=${n.red},green=${n.green},blue=${n.blue})`:"(red=0,green=0,blue=0)"}return t===v.STRING?`"${e}"`:e},C=(e,t,n=void 0)=>n!==void 0?e.components.find(o=>o.type===t&&o.pins.includes(n)):e.components.find(o=>o.type===t),jr=(e,t,n,o,r)=>C(r,E.RFID).scannedCard,zr=(e,t,n,o,r)=>C(r,E.RFID).tag,Jr=(e,t,n,o,r)=>C(r,E.RFID).cardNumber,qr=(e,t,n,o,r)=>C(r,E.TEMPERATURE_SENSOR).temperature,Zr=(e,t,n,o,r)=>C(r,E.TEMPERATURE_SENSOR).humidity,Qr=(e,t,n,o,r)=>C(r,E.BLUE_TOOTH).message,es=(e,t,n,o,r)=>C(r,E.BLUE_TOOTH).hasMessage,ts=(e,t,n,o,r)=>C(r,E.BUTTON,_(t,"PIN")).isPressed,ns=(e,t,n,o,r)=>C(r,E.IR_REMOTE).hasCode,os=(e,t,n,o,r)=>C(r,E.IR_REMOTE).code,is=(e,t,n,o,r)=>C(r,E.DIGITAL_SENSOR,_(t,"PIN")).isOn,rs=(e,t,n,o,r)=>C(r,E.ANALOG_SENSOR,_(t,"PIN")).state,ss=(e,t,n,o,r)=>{const s=r.components.find(l=>l.type===E.TIME);return Math.floor(Math.round(s.timeInSeconds*100))/100},ls=(e,t,n,o,r)=>C(r,E.MESSAGE).message,as=(e,t,n,o,r)=>C(r,E.MESSAGE).hasMessage,ds=(e,t,n,o,r)=>C(r,E.ULTRASONICE_SENSOR).cm,Oe=(e,t,n,o,r)=>{const s=_(t,"VAR"),l=n.find(a=>a.id==s);return r&&g.keys(r.variables).includes(l.name)?r.variables[l.name].value:void 0},us=(e,t,n,o,r)=>C(r,E.THERMISTOR).temp,cs=(e,t,n,o,r)=>C(r,E.JOYSTICK).engaged,ps=(e,t,n,o,r)=>C(r,E.JOYSTICK).degree,_s=(e,t,n,o,r)=>C(r,E.JOYSTICK).buttonPressed,ms={math_number:Sr,math_arithmetic:Ar,math_modulo:Ir,math_round:Tr,math_random_int:Rr,math_number_property:Dr,logic_boolean:vr,logic_compare:Lr,logic_operation:Pr,logic_negate:wr,variables_get_number:Oe,variables_get_string:Oe,variables_get_boolean:Oe,variables_get_colour:Oe,get_colour_from_list:be,get_string_from_list:be,get_number_from_list:be,get_boolean_from_list:be,string_to_number:Cr,text_join:Mr,text_length:Br,text:Fr,parse_string_block:Ur,text_isEmpty:xr,number_to_string:Vr,text_changeCase:Gr,color_picker_custom:Hr,colour_random:Wr,colour_rgb:$r,arduino_get_message:ls,arduino_receive_message:as,time_seconds:ss,bluetooth_has_message:es,bluetooth_get_message:Qr,digital_read:is,analog_read:rs,is_button_pressed:ts,ir_remote_get_code:os,ir_remote_has_code_receive:ns,ultra_sonic_sensor_motion:ds,rfid_scan:jr,rfid_card:Jr,rfid_tag:zr,temp_get_humidity:Zr,temp_get_temp:qr,thermistor_read:us,joystick_angle:ps,joystick_button:_s,joystick_engaged:cs},b=(e,t,n,o,r,s,l=void 0)=>{const a=Xr(e,t,r);if(!a)return s;const d=fs(e,a,n,o,l);return d===void 0?s:d},fs=(e,t,n,o,r)=>{try{return ms[t.blockName](e,t,n,o,r)}catch(s){throw console.trace(),console.log(t),console.log(s),s}};var Ot=(e=>(e.DIGITAL_OUTPUT="DIGITAL_OUTPUT",e.ANALOG_OUTPUT="ANALOG_OUTPUT",e))(Ot||{});const gs=(e,t,n,o,r)=>{const s=_(t,"PIN"),l=_(t,"STATE")==="ON"?"on":"off",a=_(t,"STATE")==="ON"?1:0,d={type:E.WRITE_PIN,pins:[s],pin:s,state:a,pinType:Ot.DIGITAL_OUTPUT},c=`Айналмалы пин ${s} ${l}.`;return[S(t.id,t.blockName,o,d,c,r)]},hs=(e,t,n,o,r)=>{const s=_(t,"PIN"),l=b(e,t,n,o,"WRITE_VALUE",1,r),a={type:E.WRITE_PIN,pins:[s],pin:s,state:l,pinType:Ot.ANALOG_OUTPUT},d=`${s} пинге ${l} сигналы жіберілуде.`;return[S(t.id,t.blockName,o,a,d,r)]},Es=(e,t,n,o,r)=>{const s=_(t,"SIZE")==="20 x 4"?4:2,l=_(t,"SIZE")==="20 x 4"?20:16,a=_(t,"PIN_SDA"),d=_(t,"PIN_SCL"),c={pins:t.pins.sort(),rows:s,columns:l,type:E.LCD_SCREEN,memoryType:_(t,"MEMORY_TYPE"),blink:{row:0,column:0,blinking:!1},backLightOn:!0,rowsOfText:["                    ","                    ","                    ","                    "],sdaPin:a,sclPin:d};return[S(t.id,t.blockName,o,c,"СКД экранын орнату.",r)]},bs=(e,t,n,o,r)=>{const s=_(t,"BLINK")==="BLINK",l=g.cloneDeep(C(r,E.LCD_SCREEN));if(!s){const u={...l,blink:{row:0,column:0,blinking:!1}};return[S(t.id,t.blockName,o,u,"Жыпылықтауды өшіру.",r)]}const a=W(1,4,b(e,t,n,o,"ROW",1,r)),d=W(1,20,b(e,t,n,o,"COLUMN",1,r)),c={...l,blink:{row:a,column:d,blinking:!0}};return[S(t.id,t.blockName,o,c,`Жыпылықтауды қосу (${d}, ${a}).`,r)]},Os=(e,t,n,o,r)=>{const s=g.cloneDeep(C(r,E.LCD_SCREEN)),l=_(t,"DIR"),a=s.rowsOfText.map(c=>l==="RIGHT"?" "+c.substr(0,19):c.substr(1,19)+" "),d={...s,rowsOfText:a};return[S(t.id,t.blockName,o,d,`Мәтінді жылжыту ${l.toLowerCase()}.`,r)]},Ns=(e,t,n,o,r)=>{const s=g.cloneDeep(C(r,E.LCD_SCREEN)),l=W(1,4,b(e,t,n,o,"ROW",1,r)),a=W(1,20,b(e,t,n,o,"COLUMN",1,r)),d=b(e,t,n,o,"PRINT","",r),c=s.rowsOfText.map((p,h)=>{if(h+1!==l)return p;const f=a-1;return g.range(f,f+d.length).forEach((N,O)=>{p=ys(p,N,d[O])}),p.substr(0,20)}),u={...s,rowsOfText:c};return[S(t.id,t.blockName,o,u,`Экранға "${d}" орнын басып шығару (${a}, ${l}).`,r)]};function ys(e,t,n){return e.substring(0,t)+n+e.substring(t+1)}const Ss=(e,t,n,o,r)=>{const s=g.cloneDeep(r.components.find(a=>a.type==E.LCD_SCREEN)),l={...g.cloneDeep(s),rowsOfText:["                    ","                    ","                    ","                    "]};return[S(t.id,t.blockName,o,l,"Экранды тазалау.",r,!1,!1,0)]},As=(e,t,n,o,r)=>{const s=g.cloneDeep(r.components.find(d=>d.type==E.LCD_SCREEN)),l=_(t,"BACKLIGHT")=="ON",a={...s,backLightOn:l};return[S(t.id,t.blockName,o,a,`Turning ${l?"on":"off"} backlight.`,r)]},Ts=(e,t,n,o,r)=>{const s=g.cloneDeep(r.components.find(u=>u.type==E.LCD_SCREEN)),l=g.range(1,5).map(u=>b(e,t,n,o,"ROW_"+u,"",r)),a=b(e,t,n,o,"DELAY",1,r),d={...g.cloneDeep(s),rowsOfText:l.map(u=>u.length>=20?u.slice(0,20):u+g.range(0,s.columns-u.length).map(()=>" ").join(""))},c={...g.cloneDeep(d),rowsOfText:["                    ","                    ","                    ","                    "]};return[S(t.id,t.blockName,o,d,`Хабар ${a.toFixed(2)} секундқа басып шығарылуда.`,r,!1,!1,a*1e3),S(t.id,t.blockName,o,c,"Экранды тазалау.",r,!1,!1,0)]},Xe=(e,t,n,o,r=void 0)=>{const s=Cs(t,n,e);return[$e(t.id,t.blockName,o,s,Is(s,+_(t,"SIZE")),r)]},Ke=(e,t,n,o,r,s=void 0)=>{const l=o.find(f=>f.id===_(n,"VAR")).name,a=g.cloneDeep([...s.variables[l].value]);let d=b(t,n,o,r,"POSITION",1,s);d=d>=1?d-1:0,d=d<0?0:d,d=d>a.length-1?a.length-1:d;const c=b(t,n,o,r,"VALUE",Yr(e),s);a[d]=c;const u={type:s.variables[l].type,value:g.cloneDeep(a),name:s.variables[l].name,id:s.variables[l].id},p=Cn(c,s.variables[l].type.replace("List ","")),h=`Тізім "${u.name}" ${p}-ды ${d+1}-орында сақтайды.`;return[$e(n.id,n.blockName,r,u,h,s)]},Is=(e,t)=>`${e.name}" деп аталатын ${Rs(e.type)} айнымалысын жасап, ${t} элементті сақтайды.`,Rs=e=>{switch(e){case v.LIST_BOOLEAN:return"boolean list";case v.LIST_NUMBER:return"number list";case v.LIST_STRING:return"text list";case v.LIST_COLOUR:return"color list";default:return"list"}},Cs=(e,t,n)=>{const o=_(e,"VAR"),r=+_(e,"SIZE"),s=t.find(l=>l.id===o);return{id:o,type:n,name:s.name,value:g.range(0,r).map(()=>null)}},Ds=(e,t,n,o,r)=>Ke(v.STRING,e,t,n,o,r),ks=(e,t,n,o,r)=>Ke(v.BOOLEAN,e,t,n,o,r),vs=(e,t,n,o,r)=>Ke(v.NUMBER,e,t,n,o,r),Ls=(e,t,n,o,r)=>Ke(v.COLOUR,e,t,n,o,r),Ps=(e,t,n,o,r)=>Xe(v.LIST_NUMBER,t,n,o,r),ws=(e,t,n,o,r)=>Xe(v.LIST_STRING,t,n,o,r),Fs=(e,t,n,o,r)=>Xe(v.LIST_BOOLEAN,t,n,o,r),Ms=(e,t,n,o,r)=>Xe(v.LIST_COLOUR,t,n,o,r),Bs=(e,t,n,o,r)=>{const s={type:E.DIGITAL_DISPLAY,pins:t.pins.sort(),dioPin:_(t,"DIO_PIN"),clkPin:_(t,"CLK_PIN"),chars:"",colonOn:!1};return[S(t.id,t.blockName,o,s,"Сандық дисплейді орнату.",r)]},Us=(e,t,n,o,r)=>{const s=g.cloneDeep(C(r,E.DIGITAL_DISPLAY));s.colonOn=_(t,"COLON")==="TRUE";const l=b(e,t,n,o,"TEXT","",r);return s.chars=l.slice(0,4),[S(t.id,t.blockName,o,s,`Сандық дисплейге келесі текстті жаз "${s.chars}" және нүкте ${s.colonOn?"on":"off"}.`,r)]},xs=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(d=>d.loop===1),a={pins:t.pins.sort(),type:E.BLUE_TOOTH,rxPin:_(t,"PIN_RX"),txPin:_(t,"PIN_TX"),hasMessage:l.receiving_message,message:l.message,sendMessage:""};return[S(t.id,t.blockName,o,a,"Bluetooth орнату.",r)]},Vs=(e,t,n,o,r)=>{const s=b(e,t,n,o,"MESSAGE","",r),l=r.components.find(d=>d.type===E.BLUE_TOOTH),a=g.cloneDeep(l);return a.sendMessage=s,[S(t.id,t.blockName,o,a,`Bluetooth-дан компьютерге "${s}" жіберу.`,r)]},Gs=(e,t,n,o,r)=>[de(t.id,t.blockName,o,"Түзету [Arduino Кодында кідіртіледі.]",r)],Hs=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(c=>c.loop===1),[a]=t.pins,d={type:E.BUTTON,pins:t.pins,isPressed:l.is_pressed};return[S(t.id,t.blockName,o,d,`Батырма ${a} пинінде бапталуда.`,r)]},Ws=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(c=>c.loop==1),[a]=t.pins,d={hasCode:l.scanned_new_code,code:l.code,type:E.IR_REMOTE,pins:t.pins,analogPin:a};return[S(t.id,t.blockName,o,d,"Қашықтан басқару құралын орнату.",r)]},$s=(e,t,n,o,r)=>{const s=_(t,"NAME"),l=de(t.id,t.blockName,o,`Шақыру функциясы: ${s}.`,r),a=e.find(d=>d.blockName==="procedures_defnoreturn"&&_(d,"NAME")===s);return[l,...ie(a,e,n,o,"STACK",l)]},Xs=(e,t,n,o,r)=>{const s=+_(t,"NUMBER_LEDS"),l={pins:t.pins,type:E.NEO_PIXEL_STRIP,numberOfLeds:s,neoPixels:g.range(0,s).map(a=>({position:a,color:{red:0,green:0,blue:0}}))};return[S(t.id,t.blockName,o,l,"Жарықдиодты жарық жолағын орнату.",r)]},Ks=(e,t,n,o,r)=>{const s=C(r,E.NEO_PIXEL_STRIP),l=b(e,t,n,o,"COLOR",{red:0,green:0,blue:0},r),a=W(1,1/0,b(e,t,n,o,"POSITION",1,r));s.neoPixels[a-1]={position:a-1,color:l};const d=g.cloneDeep(s);return[S(t.id,t.blockName,o,d,`LED ${a} жарық жолағында түсін орнату (қызыл=${l.red}, жасыл=${l.green}, көк=${l.blue})`,r)]},Ys=(e,t,n,o,r)=>{const s=+_(t,"NUMBER_LEDS"),l={pins:t.pins,type:E.FASTLED_STRIP,numberOfLeds:s,preShowLEDs:g.range(0,s).map(a=>({position:a,color:{red:0,green:0,blue:0}})),fastLEDs:g.range(0,s).map(a=>({position:a,color:{red:0,green:0,blue:0}}))};return[S(t.id,t.blockName,o,l,"Жарықдиодты жарық жолағын орнату.",r)]},js=(e,t,n,o,r)=>{const s=C(r,E.FASTLED_STRIP),l=s.preShowLEDs;s.fastLEDs=l;const a=g.cloneDeep(s);return[S(t.id,t.blockName,o,a,"Жарық жолағындағы барлық rgb жарық диодтарын көрсету.",r)]},zs=(e,t,n,o,r)=>{const s=C(r,E.FASTLED_STRIP),l=[];for(let d=1;d<=s.numberOfLeds;d+=1){const c=_(t,Js(d)),u=ht(c);l.push({position:d-1,color:u})}s.preShowLEDs=l;const a=g.cloneDeep(s);return[S(t.id,t.blockName,o,a,"Rgb жарықдиодты жолағындағы барлық түстерді орнату.",r)]},Js=e=>{const t=Math.ceil(e/12);return`${t}-${e-(t-1)*12}`},qs=(e,t,n,o,r)=>{const s=C(r,E.FASTLED_STRIP),l=b(e,t,n,o,"COLOR",{red:0,green:0,blue:0},r),a=W(1,1/0,b(e,t,n,o,"POSITION",1,r));s.preShowLEDs[a-1]={position:a-1,color:l};const d=g.cloneDeep(s);return[S(t.id,t.blockName,o,d,`Жарық жолағындағы жарық диодты ${a} түсті етіп орнату (қызыл=${l.red}, жасыл=${l.green}, көк=${l.blue})`,r)]},Zs=(e,t,n,o,r)=>{const s=g.range(1,9).reduce((a,d)=>[...a,...g.range(1,9).map(c=>({row:d,col:c,isOn:!1}))],[]),l={type:E.LED_MATRIX,pins:[_(t,"PIN_CLK"),_(t,"PIN_CS"),_(t,"PIN_DATA")],leds:s,clkPin:_(t,"PIN_CLK"),csPin:_(t,"PIN_CS"),dataPin:_(t,"PIN_DATA")};return[S(t.id,t.blockName,o,l,"Жарықдиодты матрицаны орнату.",r)]},Qs=(e,t,n,o,r)=>{const s=g.range(1,9).reduce((h,f)=>[...h,...g.range(1,9).map(N=>({row:f,col:N,isOn:_(t,`${f},${N}`)==="TRUE"}))],[]),{pins:l,type:a,dataPin:d,csPin:c,clkPin:u}=Dn(r),p={type:a,pins:l,leds:s,clkPin:u,csPin:c,dataPin:d};return[S(t.id,t.blockName,o,p,"Жарықдиодты матрицада сурет салу.",r)]},el=(e,t,n,o,r)=>{const{pins:s,type:l,leds:a,dataPin:d,csPin:c,clkPin:u}=Dn(r),p=W(1,8,b(e,t,n,o,"ROW",1,r)),h=W(1,8,b(e,t,n,o,"COLUMN",1,r)),f=_(t,"STATE")==="ON",N=a.map(T=>T.col===h&&T.row===p?{col:h,row:p,isOn:f}:T),O={pins:s,type:l,leds:N,dataPin:d,csPin:c,clkPin:u};return[S(t.id,t.blockName,o,O,`Жарықдиодты матрица: (${p},${h}) ${f?"қосу":"сөндіру"}.`,r)]},Dn=e=>C(e,E.LED_MATRIX),tl=(e,t,n,o,r)=>{const s=_(t,"PIN_RED"),l=_(t,"PIN_GREEN"),a=_(t,"PIN_BLUE"),d=_(t,"PICTURE_TYPE"),c={type:E.LED_COLOR,pins:t.pins.sort(),redPin:s,greenPin:l,bluePin:a,color:{green:0,red:0,blue:0},pictureType:d};return[S(t.id,t.blockName,o,c,"Түсті жарықдиодты орнату.",r)]},nl=(e,t,n,o,r)=>{const s=b(e,t,n,o,"COLOUR",{red:0,green:0,blue:0},r),a={...C(r,E.LED_COLOR),color:s};return[S(t.id,t.blockName,o,a,`Жарық диодының түсін орнату (қызыл=${s.red}, жасыл=${s.green}, blue=${s.blue}).`,r)]},ol=(e,t,n,o,r)=>{const s=_(t,"PIN"),l=_(t,"COLOR"),a=_(t,"STATE")==="ON"?1:0,d={type:E.LED,pins:[s],pin:s,state:a,fade:!1,color:l},c=`Жарықдиодты шамды ${a===1?"қосу":"сөндіру"} ${s}.`;return[S(t.id,t.blockName,o,d,c,r)]},il=(e,t,n,o,r)=>{const s=_(t,"PIN"),l=_(t,"COLOR"),a=+b(e,t,n,o,"FADE",1,r),d={type:E.LED,pins:[s],pin:s,state:a,fade:!0,color:l},c=`Жарықдиодты шамның жарықтығын өзгерту: ${s} - ${a}.`;return[S(t.id,t.blockName,o,d,c,r)]};var kn=(e=>(e.SENSOR="SENSOR",e.TOUCH_SENSOR="TOUCH_SENSOR",e))(kn||{});const rl=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(h=>h.loop===1),a=_(t,"PIN"),d=_(t,"TYPE"),u=`${d===kn.TOUCH_SENSOR?"touch":"digital"} сенсоры ${a} реттелуде.`,p={type:E.DIGITAL_SENSOR,pin:a,pins:[a],isOn:l.isOn,pictureType:d};return[S(t.id,t.blockName,o,p,u,r)]};var lt=(e=>(e.SENSOR="SENSOR",e.PHOTO_SENSOR="PHOTO_SENSOR",e.SOIL_SENSOR="SOIL_SENSOR",e.POTENTIOMETER="POTENTIOMETER",e))(lt||{});const sl=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(h=>h.loop===1),a=_(t,"PIN"),d=_(t,"TYPE"),u=`${ll(d)} сенсоры ${a} пинға жалғанды.`,p={type:E.ANALOG_SENSOR,pin:a,pins:[a],state:l.state,pictureType:d};return[S(t.id,t.blockName,o,p,u,r)]},ll=e=>{switch(e){case lt.PHOTO_SENSOR:return"Фото";case lt.SOIL_SENSOR:return"Топырақ";default:return"Аналог"}},Xt=(e,t,n,o,r)=>b(e,t,n,o,"IF0",!1,r)?[de(t.id,t.blockName,o,"«DO» ішіндегі блоктарды орындау, себебі қосылған нәрсе ақиқат.",r),...ie(t,e,n,o,"DO0",r)]:t.inputStatements.find(a=>a.name==="ELSE")?[de(t.id,t.blockName,o,'"ELSE" ішіндегі блоктарды орындау, себебі жалғанған нәрсе жалған.',r),...ie(t,e,n,o,"ELSE",r)]:[de(t.id,t.blockName,o,"«DO» ішіндегі блоктарды орындамау, себебі қосылған нәрсе жалған.",r)],al=(e,t,n,o,r)=>{const s=+b(e,t,n,o,"DELAY",1,r),l=s*1e3,a=`Күту ${s.toFixed(2)} секунд.`,d=r?{...g.cloneDeep(r.variables)}:{},c=r?[...g.cloneDeep(r.components)]:[];return[{blockId:t.id,blockName:t.blockName,sendMessage:"",timeLine:{...o},variables:d,txLedOn:!1,builtInLedOn:!1,components:c,explanation:a,delay:l,powerLedOn:!0,frameNumber:r?r.frameNumber+1:1}]},dl=(e,t,n,o,r)=>{const s={pins:t.pins,timeInSeconds:+_(t,"time_in_seconds"),type:E.TIME};return[S(t.id,t.blockName,o,s,"Arduino уақытын орнату.",r)]},ul=(e,t,n,o,r)=>{const s=Math.abs(b(e,t,n,o,"TIMES",1,r));return g.range(1,s+1).reduce((l,a)=>{const d=g.isEmpty(l)?r:l[l.length-1],c=de(t.id,t.blockName,o,`${a} циклі ${s} рет орындалуда.`,d);return[...l,c,...ie(t,e,n,o,"DO",c)]},[])},cl=(e,t,n,o,r)=>{const s=b(e,t,n,o,"FROM",1,r),l=b(e,t,n,o,"TO",1,r),a=Math.abs(+_(t,"BY")),d=s>l?-1:1;let c=r;return g.range(s,l+d,a*d).map((u,p,h)=>{const f=n.find(y=>y.id===_(t,"VAR")),N={id:f.id,name:f.name,value:u,type:v.NUMBER},O=$e(t.id,t.blockName,o,N,`${p+1} циклі ${h.length} рет орындалуда; ${N.name} = ${u}`,c),T=[O,...ie(t,e,n,o,"DO",O)];return c=g.cloneDeep(T[T.length-1]),T}).flat(2)},pl=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(d=>d.loop==1),a={pins:t.pins,hasMessage:l.receiving_message,message:l.message,type:E.MESSAGE};return[S(t.id,t.blockName,o,a,"Arduino хабарлама жіберу модулін іске қосу.",r)]},_l=(e,t,n,o,r)=>{const s=b(e,t,n,o,"MESSAGE","",r),l=r?g.cloneDeep(r.components):[],a=r?{...r.variables}:{};return[{blockId:t.id,blockName:t.blockName,sendMessage:s,timeLine:{...o},variables:a,txLedOn:!0,builtInLedOn:!1,components:l,explanation:`Arduino жіберген хабарлама: "${s}".`,delay:0,powerLedOn:!0,frameNumber:r?r.frameNumber+1:1}]},ml=(e,t,n,o,r)=>{const a={cm:JSON.parse(t.metaData).find(d=>d.loop===1).cm,pins:t.pins.sort(),trigPin:_(t,"PIN_TRIG"),echoPin:_(t,"PIN_ECHO"),type:E.ULTRASONICE_SENSOR};return[S(t.id,t.blockName,o,a,"Ультра дыбыстық сенсорды орнату.",r)]},fl=(e,t,n,o,r)=>{W(1,4,parseInt(b(e,t,n,o,"MOTOR",1,r)));const s=W(0,4e3,b(e,t,n,o,"SPEED",1,r)),l=gl(r,_(t,"MOTOR"),s,_(t,"DIRECTION"));return[S(t.id,t.blockName,o,l,`Қозғалтқыш ${l.motorNumber} ${l.direction.toLowerCase()} бағытында жылжиды ${l.speed} жылдамдықта.`,r)]},gl=(e,t,n,o)=>{if(!e)return{pins:[],type:E.MOTOR,direction:o,speed:n,motorNumber:t};const r=hl(e,t);return r?{...r,direction:o,speed:n,motorNumber:t}:{pins:[],type:E.MOTOR,direction:o,speed:n,motorNumber:t}},hl=(e,t)=>e.components.find(n=>n.type===E.MOTOR&&n.motorNumber===t),Ne=(e,t,n,o,r)=>{const s=_(t,"VAR"),l=n.find(p=>p.id===s),a=Kr(l.type),d=b(e,t,n,o,"VALUE",a,r),c={type:l.type,value:d,name:l.name,id:s},u=`"${l.name}" айнымалысы ${Cn(d,l.type)} сақтайды.`;return[$e(t.id,t.blockName,o,c,u,r)]},El=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(d=>d.loop===1),a={pins:t.pins,type:E.RFID,txPin:_(t,"PIN_TX"),scannedCard:l.scanned_card,tag:l.tag,cardNumber:l.card_number};return[S(t.id,t.blockName,o,a,"RFID орнату.",r)]},bl=(e,t,n,o,r)=>{const s=W(0,5e3,b(e,t,n,o,"DEGREE",1,r)),l=Ol(s,_(t,"PIN"),r);return[S(t.id,t.blockName,o,l,`${l.pins[0]} сервосы ${l.degree} градусқа айналады.`,r)]},Ol=(e,t,n)=>{if(!n)return{pins:[t],degree:e,type:E.SERVO};const o=C(n,E.SERVO,t);return o?{...o,degree:e}:{pins:[t],degree:e,type:E.SERVO}},Nl=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(d=>d.loop===1),a={pins:t.pins,temperature:l.temp,humidity:l.humidity,type:E.TEMPERATURE_SENSOR};return[S(t.id,t.blockName,o,a,"Температура сенсорын орнату.",r)]},yl=(e,t,n,o,r)=>{const l=JSON.parse(t.metaData).find(d=>d.loop===1),a={pins:t.pins,type:E.THERMISTOR,temp:l.temp,externalResistorsOhms:+_(t,"NONIMAL_RESISTANCE")};return[S(t.id,t.blockName,o,a,"Термисторды орнату",r)]},Kt=(e,t,n,o,r)=>{const s=_(t,"PIN");let l=0;t.blockName==="passive_buzzer_note"?l=+_(t,"TONE"):l=b(e,t,n,o,"TONE",131,r);const a={type:E.PASSIVE_BUZZER,pins:[s],tone:l},d=l===0?`${s} пассивті сигналды өшіру.`:`${s} дыбысының пассивті сигналы ${l} мәніне орнатылуда.`;return[S(t.id,t.blockName,o,a,d,r)]},Sl=(e,t,n,o,r)=>{const s=_(t,"PIN_1"),l=_(t,"PIN_2"),a=_(t,"PIN_3"),d=_(t,"PIN_4"),c=_(t,"TOTAL_STEPS"),u={type:E.STEPPER_MOTOR,pins:[s,l,a,d],pin1:s,pin2:l,pin3:a,pin4:d,currentRotation:0,totalSteps:c,steps:0};return[S(t.id,t.blockName,o,u,"Қадамдық қозғалтқышты орнату.",r)]},Al=(e,t,n,o,r)=>{const s=b(e,t,n,o,"STEPS",0,r),l=C(r,E.STEPPER_MOTOR),a={...l,steps:s,currentRotation:l.currentRotation+s};return[S(t.id,t.blockName,o,a,`Қадамдық қозғалтқыш ${s} қадам жылжытады.`,r)]},Tl=(e,t,n,o,r)=>{const s=_(t,"PIN_X"),l=_(t,"PIN_Y"),a=_(t,"PIN_BUTTON"),d=JSON.parse(t.metaData),{buttonPressed:c,engaged:u,degree:p}=d.find(f=>f.loop===1),h={type:E.JOYSTICK,pins:[s,l,a],buttonPin:a,xPin:s,yPin:l,buttonPressed:c,engaged:u,degree:p};return[S(t.id,t.blockName,o,h,"Джойстик орнату.",r)]},Il={rfid_setup:El,bluetooth_setup:xs,message_setup:pl,time_setup:dl,lcd_setup:Es,neo_pixel_setup:Xs,fastled_setup:Ys,rgb_led_setup:tl,analog_read_setup:sl,digital_read_setup:rl,button_setup:Hs,ir_remote_setup:Ws,ultra_sonic_sensor_setup:ml,temp_setup:Nl,create_list_number_block:Ps,create_list_string_block:ws,create_list_boolean_block:Fs,create_list_colour_block:Ms,set_string_list_block:Ds,set_boolean_list_block:ks,set_colour_list_block:Ls,set_number_list_block:vs,variables_set_number:Ne,variables_set_string:Ne,variables_set_boolean:Ne,variables_set_colour:Ne,debug_block:Gs,control_if:Xt,controls_ifelse:Xt,controls_repeat_ext:ul,controls_for:cl,procedures_callnoreturn:$s,delay_block:al,arduino_send_message:_l,bluetooth_send_message:Vs,lcd_screen_simple_print:Ts,lcd_scroll:Os,lcd_screen_print:Ns,lcd_blink:bs,lcd_screen_clear:Ss,lcd_backlight:As,led:ol,digital_write:gs,analog_write:hs,led_fade:il,set_color_led:nl,neo_pixel_set_color:Ks,fastled_set_color:qs,fastled_set_all_colors:zs,fastled_show_all_colors:js,led_matrix_make_draw:Qs,led_matrix_turn_one_on_off:el,led_matrix_setup:Zs,rotate_servo:bl,move_motor:fl,thermistor_setup:yl,passive_buzzer_note:Kt,passive_buzzer_tone:Kt,stepper_motor_setup:Sl,stepper_motor_move:Al,digital_display_setup:Bs,digital_display_set:Us,joystick_setup:Tl},vn=(e,t,n,o,r)=>{try{return Il[t.blockName](e,t,n,o,r)}catch(s){throw console.log(t.blockName,"block name"),s}},ie=(e,t,n,o,r,s)=>{s=s?g.cloneDeep(s):void 0;const l=Pi(t,e,r);if(!l)return[];const a=[];let d=l;do{const c=vn(t,d,n,o,s);a.push(...c);const u=c[c.length-1];s=g.cloneDeep(u),d=bt(t,d.nextBlockId)}while(d!==void 0);return a},Rl=(e,t=tn)=>{const{blocks:n}=e,o=[H.SENSOR_SETUP,H.SETUP,H.LIST_CREATE],s=n.filter(f=>o.includes(f.type)).reduce((f,N)=>{const O=f.length===0?void 0:g.cloneDeep(f[f.length-1]);return[...f,...vn(n,N,e.variables,{iteration:0,function:"pre-setup"},O)]},[]),l=Li(n),a=g.isEmpty(s)?void 0:s[s.length-1];(l?ie(l,n,e.variables,{iteration:0,function:"setup"},"setup",Yt(n,{iteration:0,function:"pre-setup"},a)):[]).forEach(f=>s.push(f));const c=In(n),u=Rn(n);let p=!1;const h=g.range(1,u+1).reduce((f,N)=>{if(p)return f;const O={iteration:N,function:"loop"},T=g.isEmpty(f)?void 0:f[f.length-1],y=ie(c,n,e.variables,O,"loop",Yt(n,O,g.cloneDeep(T)));if(y.length>0&&y[y.length-1].frameNumber>5e3){p=!0,alert("Reached maximun steps for simulation.");const P=5e3-f.length;return[...f,...y.slice(0,P)]}return[...f,...y]},s);return{board:e.microController,frames:h,error:!1,settings:t}},Yt=(e,t,n=void 0)=>{if(n===void 0)return;const o=n.components.filter(l=>!Cl(l)),r=e.filter(l=>rr.includes(l.blockName)),s=[...o,...r.map(l=>sr(l,t))];return{...n,components:s}},Cl=e=>no.includes(e.type),jt=e=>e.blocks.filter(t=>t.pins.find(n=>!t.fieldValues.filter(o=>o.validOptions).reduce((o,r)=>[...o,...r.validOptions.map(s=>s.value)],[]).includes(n))).map(t=>({type:R.DISABLE_BLOCK,warningText:"Сіз пайдаланып жатқан микроконтроллер үшін PIN коды қолжетімді емес.",blockId:t.id,stopCompiling:!0})),Dl=e=>{const t=e.blocks.find(r=>r.blockName=="lcd_setup");if(!t)return[];const n=_(t,"SIZE")==="20 x 4"?4:2;return e.blocks.filter(r=>r.blockName==="lcd_screen_simple_print").map(r=>({type:R.LCD_SIMPLE_PRINT_CHANGE,numberOfRows:n,blockId:r.id}))},kl=e=>{const{blocks:t,blockId:n}=e,o=t.find(s=>s.id===n);return o?o.blockName!="led"&&o.blockName!="led_fade"?[]:t.filter(s=>(s.blockName=="led"||s.blockName=="led_fade")&&s.pins.includes(o.pins[0])&&s.id!=n).map(s=>({blockId:s.id,color:_(o,"COLOR"),type:R.UPDATE_LED_COLOR})):[]};let se,me;oo.subscribe(e=>{me=e,rt.update(t=>{const n=g.cloneDeep(t);return n.board=me.boardType,eo()&&et.set({code:en(),boardType:me.boardType}),n})});const vl=async e=>{if(i.getMainWorkspace().isDragging()||!new Set([i.Events.BLOCK_CHANGE,i.Events.BLOCK_CREATE,i.Events.BLOCK_DELETE,i.Events.BLOCK_MOVE,i.Events.VAR_CREATE,i.Events.VAR_DELETE,i.Events.VAR_RENAME]).has(e.type))return;const n=io(),o=Qe(Se(),Ye(),e,n),r=[...jt(o),...Bt(o),...Ut(o),...xt(o),...Vt(o),...Gt(o),...Wt(o),...$t(o)];r.forEach(u=>Ie(u)),zt(r.filter(u=>u.type===R.DISABLE_BLOCK));const s=Qe(Se(),Ye(),e,n),l=[...jt(s),...Bt(s),...Ut(s),...xt(s),...Vt(s),...Gt(s),...Wt(s),...$t(s)];if(l.forEach(u=>Ie(u)),zt(l.filter(u=>u.type===R.DISABLE_BLOCK)),l.filter(u=>u.stopCompiling).length>=1){se={error:!0,frames:[],board:o.microController,settings:me},rt.set(se),et.resetCode(n);return}[...vi(s),...ar(s),...ur(s),...Si(s),...Dl(s),...dr(s),...kl(s)].forEach(u=>Ie(u));const d=Qe(Se(),Ye(),e,n),c=Rl(d,me);(se===void 0||JSON.stringify(c)!==JSON.stringify(se))&&(se=c,rt.set(se)),et.set({code:en(),boardType:n})},zt=e=>{const t=e.filter(o=>o.type===R.DISABLE_BLOCK).map(o=>o.blockId);Se().map(Tn).filter(o=>!t.includes(o.id)).map(o=>({type:R.ENABLE_BLOCK,blockId:o.id})).forEach(o=>Ie(o))},Ba=e=>{e.addChangeListener(vl)},K=`

Төменде ---- виртуалды схема қабылдайтын мәндерді орнатуға болады.`,Y=`

Пин - электр қуатын басқару немесе сезу үшін қолданылатын Arduino-ға қосылған металл бөлігі.`,Ll=`<category name="Bluetooth" colour="${m.COMPONENTS}">
  <block type="bluetooth_setup">
      <comment pinned="false" h="150" w="460">Бұл блок (Bluetooth орнату блогы) Arduino-Ға Bluetooth құрылғыларын пайдаланып жатқанымызды айтады.${K}</comment>

    <field name="PIN_RX">11</field>
    <field name="PIN_TX">10</field>
  </block>
  <block type="bluetooth_send_message">
  <comment pinned="false" h="60" w="460">Бұл блок Bluetooth арқылы хабарлама жібереді.</comment>
    <value name="MESSAGE">
      <block type="text">
        <field name="TEXT">Сәлем</field>
      </block>
    </value>
  </block>

  <block type="bluetooth_has_message">
    <comment pinned="false" h="60" w="460">Егер Bluetooth хабарлама алған болса, true мәнін қайтарады.</comment>

  </block>
  <block type="bluetooth_get_message">
      <comment pinned="false" h="60" w="460">Bluetooth алған хабарды алыңыз.</comment>
  </block>
  </category>`,Pl=`<category name="Button" colour="${m.SENSOR}">       
<block type="button_setup">
      <comment pinned="false" h="200" w="460">Бұл блок (Bluetooth орнату блогы) Arduino-Ға Bluetooth құрылғыларын пайдаланып жатқанымызды айтады.${Y}${K}</comment>
</block>
<block type="is_button_pressed">
  <comment pinned="false" h="60" w="460">Егер батырма басылса, true мәнін қайтарады.</comment>
</block>
</category>`,wl=`<category name="IR қашықтан басқару" colour="${m.SENSOR}" >
<block type="ir_remote_setup">
       <comment pinned="false" h="200" w="460">Бұл блок ir қашықтан басқару сенсорын орнатады.${K}</comment>
</block>
<block type="ir_remote_has_code_receive">
       <comment pinned="false" h="60" w="460">Егер ir сенсоры хабарлама алған болса, true мәнін қайтарады.</comment>
</block>
<block type="ir_remote_get_code">
       <comment pinned="false" h="60" w="460">Ir қашықтан басқару пульті алған хабарды алыңыз.</comment>
</block>
</category>`,Fl=`<category name="FastLED" colour="${m.COMPONENTS}">
       <block type="fastled_setup">
              <comment pinned="false" h="110" w="460">Бұл блок Arduino-ға деректерді пикселдерге жіберу үшін қандай аналогтық түйреуішті пайдалану керектігін айтады.  Аналогтық түйреуіштер әдетте A1, A2, A2 және т.б.</comment>

             <field name="PIN">A0</field>
       </block>
       <block type="fastled_set_all_colors">
                     <comment pinned="false" h="80" w="460">Бұл блок неопиксельдердегі барлық түстерді орнатады.</comment>
       </block>
       <block type="fastled_show_all_colors">
          <comment pinned="false" h="80" w="460">Барлық RGB LED жолақтарын көрсету үшін блокты пайдаланыңыз</comment>
       </block>
       <block type="fastled_set_color">
              <comment pinned="false" h="80" w="460">Бұл блок сіздің жарық жолағындағы бір жарықдиодтың түсін орнатады. Бұл блок бірінші пиксел ретінде 1 пайдаланады.</comment>

         <value name="POSITION">
           <block type="math_number">
             <field name="NUM">1</field>
           </block>
         </value>
         <value name="COLOR">
           <block type="color_picker_custom"> </block>
         </value>
       </block>
   </category>`,Ml=`<category colour="${m.COMPONENTS}" name="Жарықдиодты матрица">
     <block type="led_matrix_setup">
    <comment pinned="false" h="60" w="460">Бұл блок рұқсат матрицасын орнатады.</comment>
                           <field name="PIN_DATA">10</field>
                           <field name="PIN_CLK">12</field>
                           <field name="PIN_CS">11</field>

     </block>

     <block type="led_matrix_make_draw">
        <comment pinned="false" h="80" w="460">Жарық диодты матрицаға үлгі салу үшін құсбелгілерді қойыңыз.</comment>
     </block>
   <block type="led_matrix_turn_one_on_off">
   <comment pinned="false" h="150" w="460" >Жарық диодты матрицадағы бір жарықдиодты өшіреді немесе өшіреді.

Бағанның саны неғұрлым жоғары болса, жарық диоды соғұрлым оң болады. Жолдың саны неғұрлым жоғары болса, соғұрлым төмен болады.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   </category>`,Bl=`<category name="Жүйелік код" colour="${m.ARDUINO}" custom="CODE"></category>`,Ul=`<category name="Тізімдер" colour="${m.DATA}" custom="LIST"> </category>`,xl=`<category  name="Менің блоктарым" colour="${m.CONTROL}"
 custom="ELECTROBLOCKS_FUNCTIONS"></category>`,Vl=`<category colour="${m.COMPONENTS}" name="СКД экраны">
   <block type="lcd_setup">
    <comment pinned="false" h="240" w="460">Бұл блок СКД экранын орнатады.

Чип жад түрін анықтайды. Чипті қай жерден сатып алғаныңызды тексеріңіз; егер сіз білмесеңіз, екеуін де қолданып көріңіз және оны көру оңай болады.

Өлшем үшін біз бірінші сан - ені, ал екінші сан - биіктік. 16 x 2, 16 солдан оңға қарай бос орындар, ал 2 жоғары және төмен 2 бос орын болады.</comment>
   </block>
   <block type="lcd_screen_simple_print">
    <comment pinned="false" h="120" w="460">СКД экрандарында бірдеңені басып шығарады, содан кейін оны өшіреді. "Көрсетілетін секундтар" блогы СКД экраны хабарламаны қанша секунд көрсететінін көрсетеді.</comment>
   <value name="ROW_1">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_2">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_3">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="ROW_4">
                   <block type="text">
                       <field name="TEXT"></field>
                   </block>
               </value>
               <value name="DELAY">
                   <block type="math_number">
                       <field name="NUM">3</field>
                   </block>
               </value>
   </block>
   <block type="lcd_screen_print">
   <comment pinned="false" h="190" w="460">Бұл блок СКД экранында бірдеңені басып шығарады. Баған нөмірі x орнын басқарады, ал жол нөмірі y орнын басқарады. X солдан оңға қарай, ал Y жоғары және төмен дегенді білдіреді.

Y үшін төмендеген сайын сандар жоғарылайды. Сонымен, бірінші баған 1, ал келесі төмен баған 2.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="PRINT">
                   <block type="text">
                       <field name="TEXT">Hi</field>
                   </block>
               </value>
   </block>
   <block type="lcd_screen_clear">
        <comment pinned="false" h="60" w="460">Бұл блок СКД экранындағы барлық мәтінді өшіреді.</comment>
   </block>
   <block type="lcd_scroll">
    <comment pinned="false" h="70" w="460">Бұл блок барлық мәтінді солға немесе оңға жылжытады.</comment>
   </block>
   <block type="lcd_blink">
        <comment pinned="false" h="80" w="460">Бұл блок СКД экранындағы жыпылықтайтын орынды қосады немесе өшіреді.</comment>
   <value name="ROW">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
               <value name="COLUMN">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   <block type="lcd_backlight">
    <comment pinned="false" h="80" w="460">Бұл блок СКД экранындағы артқы жарықты қосады және өшіреді.</comment>
   </block>
   </category>
   `,Gl=`<category name="RGB Жарықдиод" colour="${m.COMPONENTS}">
   
   <block type="rgb_led_setup">
    <comment pinned="false" h="100" w="460">Бұл блок Arduino-ға әр түс үшін қай түйреуішті пайдалану керектігін айтады. RGB қызыл, жасыл және көк дегенді білдіреді. Түстерді біріктіру арқылы сіз басқа түстерді жасай аласыз.</comment>

                           <field name="PIN_RED">11</field>
                         <field name="PIN_GREEN">10</field>
                         <field name="PIN_BLUE">9</field>
 </block>

   <block type="set_color_led">
      <comment pinned="false" h="130" w="460">Бұл блок RGB светодиодының түсін орнатады. RGB қызыл, жасыл және көк дегенді білдіреді. Пайдаланушы түсін пайдалану үшін деректер->түс астындағы құралдар тақтасына өтіп, ең үлкен блокты таңдаңыз. Содан кейін әртүрлі түстерді көру үшін Google RGB түс таңдау құралын пайдаланыңыз.</comment>

   <value name="COLOUR">

                   <block type="color_picker_custom">
                   </block>
   </value>
   </block>
   </category>`,Hl=`Ашылмалы терезедегі түйреуішке бекітілген жарық диодты қосыңыз немесе өшіріңіз.${Y}`,Wl=`<category name="Жарықдиод" colour="${m.COMPONENTS}">
   <block type="led">
    <comment pinned="false" h="145" w="460" >${Hl}</comment>
   </block>

   <block type="led_fade">
    <comment pinned="false" h="175" w="460" >Бұл блок жарықдиодқа жалғанған түйреуішке электр тогының мөлшерін реттейді. Ол жарықдиодты шамға жай өшу және қосылу әсерін береді.${Y}</comment>
   <value name="FADE">
                   <block type="math_number">
                       <field name="NUM">125</field>
                   </block>
               </value>
   </block>
</category>`,$l=`
<category name="Пинмен жұмыс" colour="${m.COMPONENTS}">
   <block type="digital_write">
    <comment pinned="false" h="130" w="460">Бұл блок (сандық жазу) түйреуішті қосады және өшіреді.${Y}</comment>
   </block>
   <block type="analog_write">
    <comment pinned="false" h="200" w="400" >Бұл блок (аналогтық жазу) 0-ден 255-ке дейінгі санды түйреуішке жібереді.
255 түйреуіштер толығымен қосулы, ал 0 түйреуіш өшірулі дегенді білдіреді.${Y}</comment>
       <value name="WRITE_VALUE">
                   <block type="math_number">
                       <field name="NUM">150</field>
                   </block>
        </value>
    </block>
</category>
`,Xl=`<category name="Цифрлық/Сандық" colour="${m.SENSOR}">
       <block type="digital_read_setup">
            <comment pinned="false" h="150" w="460">Бұл блок (сандық оқуды орнату) Arduino-ға қай пиннің сезімтал екенін айтады.${Y}${K}</comment>
       </block>
       <block type="digital_read">
            <comment pinned="false" h="70" w="460">Егер сенсор бірдеңені сезсе, true мәнін қайтарады.</comment>
       </block>
   </category>`,Kl=`
<category name="Аналогты" colour="${m.SENSOR}" >
       <block type="analog_read_setup">
            <comment pinned="false" h="200" w="501">Бұл блок (analogread setup) Arduino-ға қай пиннің электр сезімтал екенін айтады.${Y}${K}</comment>
        </block>
       <block type="analog_read">
            <comment pinned="false" h="140" w="460">Бұл блок (аналогтық оқу) түйреуіш арқылы өтетін электр энергиясының мөлшерін сезеді.${Y}</comment>
       </block>
   </category>
`,Yl=`
<category name="Логика" colour="${m.CONTROL}">
    <block type="control_if">
        <comment pinned="false" h="150" w="460">"«Егер блоктар» «Егер» бөлімінде не бар болса, онда «Егер» бөлімінде не бар болса, «ақиқат» болса, онда кодты іске қосады. «Егер» бөліміне is_button_pressed блогын қоссаңыз және түйме басылса, онда бөлімнің коды іске қосылады..</comment>
    </block>
    <block type="controls_ifelse">
<comment pinned="false" h="150" w="460">If Else блоктары" "Егер" бөліміндегі нәрсе "Егер" бөліміне тіркелгені "ақиқатқа" тең болса, онда "Сосын" бөліміндегі кодты іске қосады. Егер сіз is_button_pressed блогын IF бөліміне қоссаңыз және түйме басылса, онда бөлімнің коды іске қосылады. Түйме басылмаса, басқа бөлім іске қосылады.</comment>
    </block>
    <block type="logic_compare">
    <comment pinned="false" h="140" w="527">Сол және оң жақ тесіктердегі нәрсені салыстырады және ақиқат немесе жалғанды ​​қайтарады.

Егер оператор = болса, ол екі мәннің де бірдей екенін тексереді.
Оператор ≠ болса, ол екі мәннің де әртүрлі екенін тексереді.</comment>
    </block>
    <block type="logic_operation">
<comment pinned="false" h="170" w="527">Сол және оң жақ тесіктердегі нәрсені салыстырады және ақиқат немесе жалғанды ​​қайтарады.

Оператор «және» болса, ол екі мәннің ақиқатқа тең екенін тексереді.
Егер оператор «немесе» болса, ол мәндердің біреуінің ақиқат екенін тексереді.</comment>
    </block>
    <block type="logic_negate">
    <comment pinned="false" h="80" w="460">Шындықты қабылдап, оны жалғанға айналдырады, ал жалғанды ​​қабылдап, оны шындыққа айналдырады.</comment>
    </block>
    <block type="logic_boolean"></block>
</category>
`,jl=`<category name="Циклдар" colour="${m.CONTROL}">
     <block type="controls_repeat_ext">
       <value name="TIMES">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
     </block>
     <block type="controls_for">
         <comment pinned="false" h="140" w="460">A for «блокпен санау» айнымалы «to» нүктесіне жеткеннен кейін циклды тоқтататын цикл жасайды. Бұл блокты үйренудің ең жақсы жолы - оны сүйреп апарып, симуляторда оның мәндерімен ойнау.</comment>

       <value name="FROM">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
       <value name="TO">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
       <value name="BY">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
     </block>
   </category>
`,zl="Бұл блок Arduino-ны х секундқа кідіртеді. Кешігу жүріп жатқанда ештеңе сезілмейді.",Jl=`<category colour="${m.ARDUINO}" name="Таймер">
   <block type="time_setup">
   <comment pinned="false" h="80" w="460">Бұл блок бір цикл үшін виртуалды тізбекте қанша уақыт өтетінін орнатады.</comment>
   </block>
   <block type="delay_block">
      <comment pinned="false" h="90" w="460">
      ${zl}</comment>

   <value name="DELAY">

       <block type="math_number">
           <field name="NUM">0.2</field>
       </block>
   </value>
   </block>
   <block type="time_seconds">
      <comment pinned="false" h="80" w="460">Arduino қосылған секундтар санын алады.</comment>

   </block>

   </category>`,ql=`
<category name="Математика" colour="${m.VALUES}">
     <block type="math_number">
       <field name="NUM">123</field>
     </block>
     <block type="math_number_property">
     <value name="NUMBER_TO_CHECK">
         <block type="math_number">
           <field name="NUM">3</field>
         </block>
       </value>
    </block>
     <block type="math_arithmetic">
       <value name="A">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
       <value name="B">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
     </block>
     <block type="string_to_number">
          <comment pinned="false" h="60" w="460">Бұл блок мәтіндік деректерді алып, оны санға айналдырады.</comment>

       <value name="VALUE">
         <block type="text">
           <field name="TEXT">5.35</field>
         </block>
       </value>
     </block>

     <block type="math_round">
       <value name="NUM">
         <block type="math_number">
           <field name="NUM">3.1</field>
         </block>
       </value>
     </block>
     <block type="math_modulo">
       <value name="DIVIDEND">
         <block type="math_number">
           <field name="NUM">64</field>
         </block>
       </value>
       <value name="DIVISOR">
         <block type="math_number">
           <field name="NUM">10</field>
         </block>
       </value>
     </block>
     <block type="math_random_int">
       <value name="FROM">
         <block type="math_number">
           <field name="NUM">1</field>
         </block>
       </value>
       <value name="TO">
         <block type="math_number">
           <field name="NUM">100</field>
         </block>
       </value>
     </block>
   </category>
`,Zl=`
<category name="Түстер" colour="${m.VALUES}">
<block type="color_picker_custom"></block>
<block type="colour_random"></block>
       <block type="colour_rgb">
         <comment pinned="false" h="70" w="460">Бұл реттелетін түсті жасау үшін пайдаланылады.  Реттелетін түсті табу үшін Google "RGB color picker" пайдаланыңыз.</comment>

         <value name="RED">
           <block type="math_number">
             <field name="NUM">100</field>
           </block>
         </value>
         <value name="GREEN">
           <block type="math_number">
             <field name="NUM">50</field>
           </block>
         </value>
         <value name="BLUE">
           <block type="math_number">
             <field name="NUM">0</field>
           </block>
         </value>
       </block>
     </category>
`,Ql=`
<category name="Хабарламалар" colour="${m.ARDUINO}">
   <block type="message_setup">
    <comment pinned="false" h="100" w="460">Бұл блок Компьютер хабарларын жіберу Үшін Arduino және Arduino-дан хабарламалар жіберуге мүмкіндік береді.</comment>

   </block>
   <block type="arduino_send_message">
       <comment pinned="false" h="80" w="460">Бұл блок Arduino-дан компьютерге хабарлама жібереді.</comment>

        <value name="MESSAGE">
            <block type="text">
                <field name="TEXT">Сәлем!</field>
            </block>
        </value>
   </block>
   <block type="arduino_get_message">
    <comment pinned="false" h="80" w="460">Arduino компьютерден алған хабарламаны қайтарады.</comment>
   </block>
   <block type="arduino_receive_message">
       <comment pinned="false" h="80" w="460">Егер Arduino хабарлама алса, true мәнін қайтарады.</comment>

   </block>
   </category>
`,ea=`
<category name="Ултрадыбыстық сенсор" colour="${m.SENSOR}" >
       <block type="ultra_sonic_sensor_setup">
       <comment pinned="false" h="180" w="460">Бұл блок қашықтықты өлшейтін Ультрадыбыстық сенсорды орнатады. Ол үшін ультрадыбыстық дыбыс толқындарын пайдаланады.${K}</comment>
         <field name="PIN_TRIG">11</field>
         <field name="PIN_ECHO">10</field>
       </block>
       <block type="ultra_sonic_sensor_motion">
        <comment pinned="false" h="60" w="460">Сенсор сезінген сантиметр санын қайтарады.</comment>
       </block>
       </category>
`,ta=`
<category name="Қозғалтқыш" colour="${m.COMPONENTS}">
   <block type="move_motor">
    <comment pinned="false" h="220" w="460">Мотор нөмірі мотор қалқанында. Жылдамдық қозғалтқыш арқылы қанша электр тоғы өтетінін анықтайды. Қозғалтқышыңыздың қаншалықты үлкен екеніне байланысты нақты жылдамдықты шешеді.

Дәл қазір мотор қозғалысы тек Adafruit мотор қалқанының 1 нұсқасымен жұмыс істейді. Жақында біз 2-нұсқасын және басқа мотор қалқанының кітапханаларын қосатын боламыз.</comment>

   <value name="SPEED">
                   <block type="math_number">
                       <field name="NUM">50</field>
                   </block>
               </value>
               <value name="MOTOR">
                   <block type="math_number">
                       <field name="NUM">1</field>
                   </block>
               </value>
   </block>
   </category>
`,na=`
<category name="Айнымалылар" colour="${m.DATA}" custom="ELECTROBLOCKS_VARIABLES"></category>
`,oa=`
<category name="RFID" colour="${m.SENSOR}" >
           <block type="rfid_setup">
            <comment pinned="false" h="150" w="460">Бұл блок RFID сенсорын орнатады және Arduino-ға RFID деректерін жіберу үшін қай түйреуішті пайдалану керектігін айтады..${K}</comment>
               <field name="PIN_TX">6</field>
           </block>
           <block type="rfid_card">
           <comment pinned="false" h="60" w="460">RFID чипінің карта нөмірін (мәтіндік деректер) қайтарады.</comment>
           </block>
           <block type="rfid_tag">
                <comment pinned="false" h="60" w="460">RFID чипінің тегін қайтарады.</comment>
           </block>
           <block type="rfid_scan">
                <comment pinned="false" h="80" w="460">Жаңа RFID картасын іздейді. Жаңа RFID чипі табылса, шын мәнін қайтарады.</comment>
           </block>
       </category>
`,ia=`
<category name="Серво қозғалтқыш" colour="${m.COMPONENTS}">

   <block type="rotate_servo">
    <comment pinned="false" h="180" w="460">Бұл блок сервоның бұрышы мен түйреуіштерін орнатады. Серво - бұл оның қаншалықты айналатынын басқаруға мүмкіндік беретін қозғалтқыш. Сіз болып табылатын түйреуіш Бұл блок серво үшін бұрыш пен түйреуішті орнатады. Серво - бұл оның қаншалықты айналатынын басқаруға мүмкіндік беретін қозғалтқыш. Сіз көрсеткен түйреуіш Arduino сервоның бұрышын басқару үшін пайдаланатын деректер түйреуіш болып табылады..</comment>
   <value name="DEGREE">
   <block type="math_number">
       <field name="NUM">50</field>
   </block>
   </value>
   </block>
   </category>
`,ra=`
<category name="Температура сенсоры" colour="${m.SENSOR}"  >
         <block type="temp_setup">
         <comment pinned="false" h="160" w="460">Бұл сенсор температура мен ылғалдылықты Цельсий бойынша оқиды. Сенсор түрін көрсетуді ұмытпаңыз.${K}</comment>
         </block>
         <block type="temp_get_temp">
          <comment pinned="false" h="60" w="460">Температураны Цельсий бойынша қайтарады.</comment>
         </block>
         <block type="temp_get_humidity">
            <comment pinned="false" h="60" w="460">Ылғалдылық пайызын қайтарады.</comment>
         </block>
       </category>
`,sa=`
<category name="Мәтін" colour="${m.VALUES}">
   <block type="text"></block>
   <block type="text_join">
      <comment pinned="false" h="60" w="460">Бірнеше мәтін блоктарын бір мәтін блогына айналдырады.</comment>
   </block>
   <block type="text_length">
   <comment pinned="false" h="80" w="460">Мәтін блогының ішіндегі әріптер санын алады.  Мысалы, "робот" сақтайтын мәтіндік блок 5 қайтарады.</comment>
     <value name="VALUE">
       <block type="text">
         <field name="TEXT">abc</field>
       </block>
     </value>
   </block>
   <block type="parse_string_block">
   <comment pinned="false" h="220" w="460">Бұл блок мәтіндік блокты бөлімдерге бөліп, сол бөлімдердің бірін қайтарады.  Ол мәтіндік блокты бөлгіш таңба бойынша бөледі.  

Сізде "12-0-40" сақтайтын мәтіндік блок бар делік, ал сіздің бөлетін таңбаңыз "-".  Егер сіз позицияға 1 қойсаңыз, ол 12-ні қайтарады.  Егер сіз 40 алғыңыз келсе, онда сіз позицияға 2-ден өтесіз.</comment>

     <value name="VALUE">
       <block type="text">
         <field name="TEXT">blue,red,green</field>
       </block>
     </value>
     <value name="POSITION">
       <block type="math_number">
         <field name="NUM">1</field>
       </block>
     </value>
   </block>

   <block type="number_to_string">
   <comment pinned="false" h="190" w="460">Бұл блок санды мәтіндік блокқа айналдырады.  Дәлдік санның қанша ондық бөлшегі мәтінге айналатынын басқарады.    
   
Айталық, сізде 5.23234 бар, ал дәлдік үшін 2-ні көрсетесіз.  Бұл блок "5.23"қайтаратын мәтіндік блок.</comment>
     <value name="NUMBER">
       <block type="math_number">
         <field name="NUM">5.23234</field>
       </block>
     </value>
   </block>
   <block type="text_isEmpty">
   <comment pinned="false" h="60" w="460">Мәтін блогының ішінде ештеңе болмаса, true мәнін қайтарады.</comment>
     <value name="VALUE">
       <block type="text">
         <field name="TEXT"></field>
       </block>
     </value>
   </block>
   <block type="text_changeCase">
     <value name="TEXT">
       <block type="text">
         <field name="TEXT">abc</field>
       </block>
     </value>
   </block>
   </category>
`,la=`
<category name="Пассивті дыбыстық сигнал" colour="${m.COMPONENTS}" >
       
       <block type="passive_buzzer_tone">
       <value name="TONE">
                   <block type="math_number">
                       <field name="NUM">123</field>
                   </block>
               </value>
        <comment pinned="false" h="60" w="460">Бұл пассивті дыбыстық сигналды қалаған кез келген тонға орнатады. </comment>
       </block>

       <block type="passive_buzzer_note">
       <field name="TONE">131</field>
        <comment pinned="false" h="60" w="460">Бұл пассивті сигналды қалаған жазбаға орнатады..</comment>
       </block>
       </category>
`,aa=`
<category name="Қадамдық қозғалтқыш" colour="${m.COMPONENTS}" >
       
       <block type="stepper_motor_setup">
             <field name="PIN_1">11</field>
             <field name="PIN_2">10</field>
             <field name="PIN_3">9</field>
             <field name="PIN_4">8</field>
             <field name="SPEED">10</field>
             <field name="TOTAL_STEPS">200</field>

        <comment pinned="false" h="140" w="460">Бұл блок қадамдық қозғалтқышты орнатады. Қадамдық қозғалтқыш оның айналу күйін басқаруға мүмкіндік береді.

Әрбір қадамның қаншалықты үлкен болатынын бақылау үшін қадамдар санын пайдаланыңыз. Сан неғұрлым аз болса, қадам соғұрлым үлкен болады.   </comment>
       </block>

       <block type="stepper_motor_move">
       <value name="STEPS">
                   <block type="math_number">
                       <field name="NUM">3</field>
                   </block>
               </value>
        <comment pinned="false" h="80" w="460">Бұл блоктар қадамдық қозғалтқыш қозғалатын көптеген қадамдарды басқарады</comment>
       </block>
       </category>

`,da=`<category name="Digit Display" colour="${m.COMPONENTS}">
       <block type="digital_display_setup">
            <comment pinned="false" h="150" w="460">Сандық дисплейде сандар мен әріптер көрсетіледі.  Тек 7 жарықдиодты сызық болғандықтан, кейбір таңбалар шектеулі болуы мүмкін</comment>
           <field name="CLK_PIN">10</field>
    <field name="DIO_PIN">11</field>

       </block>
       <block type="digital_display_set">
            <comment pinned="false" h="70" w="460">Мәтінді орнатады және түстерді қосады және өшіреді.</comment>
            <value name="TEXT">
                <block type="text">
                    <field name="TEXT">Робот</field>
                </block>
            </value>
       </block>
   </category>`,ua=`<category name="Джойстик" colour="${m.SENSOR}">
   <block type="joystick_setup">
    <field name="PIN_X">A1</field>
    <field name="PIN_Y">A3</field>
    <field name="PIN_BUTTON">9</field>

    <comment pinned="false" h="400" w="460" >X және Y түйреуіштері қуаныш таяқшасының қай жерде орналасқанын анықтау үшін пайдаланылады. Түймешік түйреуіш джойстик басылып жатқанын анықтау үшін қолданылады.
    ${Y}${K}
    </comment>
   </block>

    <block type="joystick_angle">
            <comment pinned="false" h="70" w="460" >Джойстик орналасқан бұрышты қайтарыңыз.
        </comment>
    </block>

    <block type="joystick_engaged">
            <comment pinned="false" h="80" w="460" >Біреу джойстикті бір орынға жылжытып жатқанда, шын екенін қайтарады.
        </comment>
    </block>
   <block type="joystick_button">
            <comment pinned="false" h="80" w="460" >Егер біреу джойстикті басып тұрса, шын екенін қайтарады.
        </comment>
    </block>
</category>`,ca=`
<category name="Термистор" colour="${m.SENSOR}" >
       <block type="thermistor_setup">
            <comment pinned="false" h="180" w="460">Бұл блок температураны өлшеу үшін қолданылатын термисторды орнатады.${K}</comment>
            <field name="PIN">A0</field>

       </block>

       <block type="thermistor_read">
        <comment pinned="false" h="60" w="460">Температураны Цельсий бойынша қайтарыңыз.</comment>
       </block>
       </category>
`,pa=[{color:m.CONTROL,category:"NONE",name:"TOP_LEVEL",toolBoxEntries:[{name:"Logic",xml:Yl},{name:"Loop",xml:jl},{name:"My Blocks",xml:xl},{name:"Variables",xml:na},{name:"List",xml:Ul},{name:"Color",xml:Zl},{name:"Math",xml:ql},{name:"Text",xml:sa},{name:"Code",xml:Bl},{name:"Message",xml:Ql},{name:"Time",xml:Jl}]},{color:m.COMPONENTS,category:"Component",name:"Қосымша құрылғылар",toolBoxEntries:[{name:"Bluetooth",xml:Ll},{name:"Digital Display",xml:da},{name:"FastLED",xml:Fl},{name:"LCD Screen",xml:Vl},{name:"Led",xml:Wl},{name:"Led Matrix",xml:Ml},{name:"Motor",xml:ta},{name:"Passive Buzzer",xml:la},{name:"Pins",xml:$l},{name:"RBG Led",xml:Gl},{name:"Servos",xml:ia},{name:"Stepper Motors",xml:aa}]},{color:m.SENSOR,category:"Sensors",name:"Сенсорлар",toolBoxEntries:[{name:"Analog",xml:Kl},{name:"Button",xml:Pl},{name:"Digital Sensor",xml:Xl},{name:"IR Remote",xml:wl},{name:"JoyStick",xml:ua},{name:"Motion Sensor",xml:ea},{name:"RFID",xml:oa},{name:"Temperature/Humidity",xml:ra},{name:"Thermistor",xml:ca}]}],Ua=()=>{const e=pa;let t=`<xml
    xmlns="https://developers.google.com/blockly/xml"
    id="toolbox-simple"
    style="display: none"
  >`;return t+=e.reduce((n,o)=>o.category==="NONE"?n+Jt(o.toolBoxEntries):n+`<category name="${o.name}" colour="${o.color}">
        ${Jt(o.toolBoxEntries)}
      </category>`,""),t+="</xml>",t};function Jt(e){return e.reduce((t,n)=>t+n.xml,"")}const qt=ce(void 0),xa={subscribe:qt.subscribe,set:qt.set};var _a=(e=>(e.CLOSE="CLOSE",e.CLOSING="CLOSING",e.OPEN="OPEN",e.OPENNING="OPENNING",e.UPLOADING="UPLOADING",e))(_a||{});const Zt=ce("CLOSE"),Va={subscribe:Zt.subscribe,set:Zt.set};class ma{constructor(t,n){x(this,"browser");x(this,"options");x(this,"path");x(this,"isOpen");x(this,"port");x(this,"writer");x(this,"reader");x(this,"baudRate");x(this,"requestOptions");x(this,"messageRaw");x(this,"chunks","");this.onMessage=n,this.options=t||{},this.browser=!0,this.path=this.options.path,this.isOpen=!1,this.port=null,this.writer=null,this.reader=null,this.baudRate=this.options.baudRate,this.requestOptions=this.options.requestOptions||{},this.messageRaw="",this.options.autoOpen&&this.open()}list(t){return navigator.serial.getPorts().then(n=>{if(t)return t(null,n)}).catch(n=>{if(t)return t(n)})}open(t){window.navigator.serial.requestPort(this.requestOptions).then(n=>{if(this.port=n,!this.isOpen)return this.port.open({baudRate:this.baudRate||57600,baudrate:this.baudRate||57600})}).then(()=>this.writer=this.port.writable.getWriter()).then(()=>this.reader=this.port.readable.getReader()).then(async()=>{for(this.isOpen=!0,t(null);this.port.readable.locked;)try{const{value:n,done:o}=await this.reader.read();if(o)break;let r=new TextDecoder;this.chunks+=r.decode(n);const s=this.chunks.split(`
`);this.chunks=s.pop(),s.forEach(l=>this.onMessage(l))}catch(n){console.error(n)}}).catch(n=>{t(n)})}async close(t){try{await this.reader.cancel(),await this.reader.releaseLock(),await this.writer.releaseLock(),await this.port.close(),this.isOpen=!1,this.chunks=""}catch(n){if(t)return t(n);throw n}t&&t(null)}async set(t={},n){try{const o={};Object.prototype.hasOwnProperty.call(t,"dtr")&&(o.dataTerminalReady=t.dtr),Object.prototype.hasOwnProperty.call(t,"rts")&&(o.requestToSend=t.rts),Object.prototype.hasOwnProperty.call(t,"brk")&&(o.break=t.brk),Object.keys(o).length>0&&await this.port.setSignals(o)}catch(o){if(n)return n(o);throw o}if(n)return n(null)}write(t,n){let o=new TextEncoder;if(this.writer.write(o.encode(t)),n)return n(null)}async read(t){let n;try{n=await this.reader.read()}catch(o){if(t)return t(o);throw o}t&&t(null,n)}flush(t){if(console.warn("flush method is a NOP right now"),t)return t(null)}drain(t){if(console.warn("drain method is a NOP right now"),t)return t(null)}}let Le;const Nt=ce(void 0),fa=e=>{Nt.set({message:e,type:"Arduino",id:new Date().getTime()+"_"+Math.random().toString(),time:new Date().toLocaleTimeString()}),lo(20)},ga=async e=>(Le=new ma({requestOptions:{},baudRate:e},fa),new Promise((t,n)=>{Le.open(o=>{if(console.log(o),!o){t(void 0);return}n(o)})})),ha=async()=>{await Le.close(e=>console.log("closed",e))},Ea=async e=>{await Le.write(e,t=>{t&&console.log(t,"sendmessage"),Nt.set({message:e,type:"Computer",id:new Date().getTime()+"_"+Math.random().toString(),time:new Date().toLocaleTimeString()})})},Ga={subscribe:Nt.subscribe,connect:ga,closePort:ha,sendMessage:Ea},Qt=ce(1),Ha={subscribe:Qt.subscribe,update:Qt.update};export{lt as A,zl as D,Hl as L,_a as P,v as V,ho as W,Va as a,Ga as b,Fa as c,va as d,La as e,Ba as f,vl as g,Ua as h,Ma as i,xa as j,rt as k,C as l,Ot as m,kn as n,wa as r,Pa as t,Ha as u};

import{s as me,c as te,w as $,r as Ke,q as cs,b as Xe,n as Z,o as Rt,p as us,a as Se,d as fs,v as be,e as ds,u as ps,g as ms,h as gs}from"../chunks/scheduler.ydM6q-DU.js";import{S as ge,i as he,e as S,s as V,j as fe,c as E,o as P,a as O,d as m,f as p,B as L,b as w,q as B,l as M,m as de,t as j,k as pe,g as x,A as K,D as J,E as ot,w as Ee,x as Ae,z as Nt,n as ne,p as ie,r as oe,u as ae,v as hs,K as Pt,C as at}from"../chunks/index.DrhsS78m.js";import{g as bs}from"../chunks/globals.D0QH3NT1.js";import{_ as lt}from"../chunks/lodash.CGP4lIDu.js";import{g as vs,o as _s}from"../chunks/index-454a0f5f.DKKA-n_3.js";import{u as ze,o as Te,r as Ce,_ as Le,C as Be,k as Ye,E as Mt,F as Dt,y as ks,L as Ts,d as Is,b as ws,z as rt,A as ys,B as Ss,D as Es,n as As,G as Cs,H as De}from"../chunks/alerts.DcEBuQUd.js";import{c as Ls}from"../chunks/env.BVG2RuTF.js";import{a as ye,c as ct,i as Bs,j as Vs}from"../chunks/db.Dxj7bgAl.js";import{p as ve}from"../chunks/project.store.DhP4I5K-.js";import{f as ut}from"../chunks/index.DP76kcN4.js";import{a as Os}from"../chunks/auth.BEssaHes.js";import{l as He,c as Q,r as ft,B as A,g as Ve,a as Ut,b as dt,d as pt,e as Fs}from"../chunks/block.helper.Dp3RpXvF.js";import{t as q,d as Oe,e as Fe,f as Rs,g as Ns,L as Ps,D as Ms,h as Ds,i as Us,j as js,u as jt,r as _e,W as xs,a as zs,b as Hs}from"../chunks/Blockly.svelte_svelte_type_style_lang.Dxe9craf.js";import{w as $s}from"../chunks/wait.CTNFjQS8.js";import{g as mt}from"../chunks/entry.Ctv4eMPx.js";import{p as $e}from"../chunks/stores.CUdzdMBy.js";import{b as qs}from"../chunks/arduino-component-id.XfWJa0Y3.js";import{s as qe}from"../chunks/showLessons.store.4-rUFg3j.js";import{e as Re}from"../chunks/each.Di7i0pvy.js";import{F as Gs}from"../chunks/FormGroup.D8-lUVa-.js";import{I as Ws}from"../chunks/Input.BGMucF5x.js";import"../chunks/Theme.svelte_svelte_type_style_lang.B3rBZJtQ.js";function le(t){if(t==="/"||t===void 0)return!0;const e=t.split("/").slice(1);return e.length===2&&e[0]==="project"}async function Ks(t){if(!await ze(`Do you want to load ${t.name}, this will erase everything that you have done.`))return;const e=new FileReader;return new Promise((s,n)=>{e.readAsText(t),e.onload=function(i){if(i.target.readyState==2){if(i.target.error){n(!1);return}try{He(i.target.result),s(!0)}catch(a){console.log(a,"error loading project"),Q("arduino_loop",50,150,!1),n(!1)}}}})}function gt(t){let e,s,n,i,a,r,o,c,l,u,d,v,_,b,f,h,I='<i class="fa fa-file-o svelte-sf3700"></i>',g,k,D='<i class="fa fa-floppy-o svelte-sf3700"></i>',R,z,Y='<i class="fa fa-wrench svelte-sf3700" aria-hidden="true"></i>',U,H,N='<i class="fa fa-gears svelte-sf3700"></i>',G,T,C='<i class="fa fa-sign-out svelte-sf3700" title="Sign Out" aria-hidden="true"></i>',ee,ue;return{c(){e=S("a"),s=S("i"),i=V(),a=S("a"),r=S("i"),c=V(),l=S("a"),u=S("i"),v=V(),_=S("a"),b=S("i"),f=V(),h=S("span"),h.innerHTML=I,g=V(),k=S("span"),k.innerHTML=D,R=V(),z=S("a"),z.innerHTML=Y,U=V(),H=S("a"),H.innerHTML=N,G=V(),T=S("span"),T.innerHTML=C,this.h()},l(y){e=E(y,"A",{title:!0,href:!0,class:!0});var F=P(e);s=E(F,"I",{class:!0,title:!0}),P(s).forEach(m),F.forEach(m),i=O(y),a=E(y,"A",{href:!0,title:!0,class:!0});var st=P(a);r=E(st,"I",{class:!0}),P(r).forEach(m),st.forEach(m),c=O(y),l=E(y,"A",{href:!0,title:!0,class:!0});var nt=P(l);u=E(nt,"I",{class:!0}),P(u).forEach(m),nt.forEach(m),v=O(y),_=E(y,"A",{href:!0,title:!0,class:!0});var it=P(_);b=E(it,"I",{class:!0}),P(b).forEach(m),it.forEach(m),f=O(y),h=E(y,"SPAN",{title:!0,class:!0,"data-svelte-h":!0}),x(h)!=="svelte-1w5bhaj"&&(h.innerHTML=I),g=O(y),k=E(y,"SPAN",{title:!0,class:!0,"data-svelte-h":!0}),x(k)!=="svelte-1j693r7"&&(k.innerHTML=D),R=O(y),z=E(y,"A",{title:!0,href:!0,class:!0,"data-svelte-h":!0}),x(z)!=="svelte-1jnpyfz"&&(z.innerHTML=Y),U=O(y),H=E(y,"A",{title:!0,href:!0,class:!0,"data-svelte-h":!0}),x(H)!=="svelte-1bufgy0"&&(H.innerHTML=N),G=O(y),T=E(y,"SPAN",{title:!0,class:!0,"data-svelte-h":!0}),x(T)!=="svelte-z0x391"&&(T.innerHTML=C),this.h()},h(){p(s,"class","fa fa-home svelte-sf3700"),p(s,"title","Simulator"),p(e,"title","Home"),p(e,"href",n="/"+t[4]),p(e,"class","svelte-sf3700"),L(e,"active",le(t[5].url.pathname)),p(r,"class","fa fa-code svelte-sf3700"),p(a,"href",o="/code"+t[4]),p(a,"title","Code"),p(a,"class","svelte-sf3700"),L(a,"active",t[5].url.pathname.includes("code")),p(u,"class","fa fa-microchip svelte-sf3700"),p(l,"href",d="/arduino"+t[4]),p(l,"title","Upload"),p(l,"class","svelte-sf3700"),L(l,"active",t[5].url.pathname.includes("arduino")),p(b,"class","fa svelte-sf3700"),L(b,"fa-folder-open-o",t[0]!=="open"),L(b,"fa-folder-open",t[0]==="open"),p(_,"href","/open"),p(_,"title","My Projects"),p(_,"class","svelte-sf3700"),L(_,"active",t[0]==="open"),p(h,"title","New File/Blank File"),p(h,"class","svelte-sf3700"),p(k,"title","Save Project"),p(k,"class","svelte-sf3700"),p(z,"title","Project Settings"),p(z,"href","/project-settings"),p(z,"class","svelte-sf3700"),L(z,"active",t[5].url.pathname.includes("project-settings")),p(H,"title","Settings"),p(H,"href","/settings"),p(H,"class","svelte-sf3700"),L(H,"active",t[0]==="settings"),p(T,"title","Sign Out"),p(T,"class","svelte-sf3700")},m(y,F){w(y,e,F),B(e,s),w(y,i,F),w(y,a,F),B(a,r),w(y,c,F),w(y,l,F),B(l,u),w(y,v,F),w(y,_,F),B(_,b),w(y,f,F),w(y,h,F),w(y,g,F),w(y,k,F),w(y,R,F),w(y,z,F),w(y,U,F),w(y,H,F),w(y,G,F),w(y,T,F),ee||(ue=[$(q.call(null,s,t[7])),$(q.call(null,e,t[7])),$(q.call(null,a,t[7])),$(q.call(null,l,t[7])),$(q.call(null,_,t[7])),$(q.call(null,h,t[7])),K(h,"click",t[8]),$(q.call(null,k,t[7])),K(k,"click",t[10]),$(q.call(null,z,t[7])),$(q.call(null,H,t[7])),$(q.call(null,T,t[7])),K(T,"click",t[11])],ee=!0)},p(y,F){F&16&&n!==(n="/"+y[4])&&p(e,"href",n),F&32&&L(e,"active",le(y[5].url.pathname)),F&16&&o!==(o="/code"+y[4])&&p(a,"href",o),F&32&&L(a,"active",y[5].url.pathname.includes("code")),F&16&&d!==(d="/arduino"+y[4])&&p(l,"href",d),F&32&&L(l,"active",y[5].url.pathname.includes("arduino")),F&1&&L(b,"fa-folder-open-o",y[0]!=="open"),F&1&&L(b,"fa-folder-open",y[0]==="open"),F&1&&L(_,"active",y[0]==="open"),F&32&&L(z,"active",y[5].url.pathname.includes("project-settings")),F&1&&L(H,"active",y[0]==="settings")},d(y){y&&(m(e),m(i),m(a),m(c),m(l),m(v),m(_),m(f),m(h),m(g),m(k),m(R),m(z),m(U),m(H),m(G),m(T)),ee=!1,Ke(ue)}}}function ht(t){let e,s='<i class="fa fa-home svelte-sf3700"></i>',n,i,a='<i class="fa fa-code svelte-sf3700"></i>',r,o,c='<i class="fa fa-microchip svelte-sf3700"></i>',l,u,d,v,_,b,f,h='<i class="fa fa-file-o svelte-sf3700"></i>',I,g,k='<i class="fa fa-download svelte-sf3700"></i>',D,R,z='<i class="fa fa-gears svelte-sf3700"></i>',Y,U,H='<i class="fa fa-sign-in svelte-sf3700"></i>',N,G;return{c(){e=S("a"),e.innerHTML=s,n=V(),i=S("a"),i.innerHTML=a,r=V(),o=S("a"),o.innerHTML=c,l=V(),u=S("label"),d=S("i"),v=V(),_=S("input"),b=V(),f=S("span"),f.innerHTML=h,I=V(),g=S("a"),g.innerHTML=k,D=V(),R=S("a"),R.innerHTML=z,Y=V(),U=S("a"),U.innerHTML=H,this.h()},l(T){e=E(T,"A",{href:!0,title:!0,class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1d8pni2"&&(e.innerHTML=s),n=O(T),i=E(T,"A",{href:!0,title:!0,class:!0,"data-svelte-h":!0}),x(i)!=="svelte-1erxqun"&&(i.innerHTML=a),r=O(T),o=E(T,"A",{href:!0,title:!0,class:!0,"data-svelte-h":!0}),x(o)!=="svelte-kjd7g2"&&(o.innerHTML=c),l=O(T),u=E(T,"LABEL",{title:!0,class:!0});var C=P(u);d=E(C,"I",{class:!0}),P(d).forEach(m),v=O(C),_=E(C,"INPUT",{type:!0,accept:!0,style:!0}),C.forEach(m),b=O(T),f=E(T,"SPAN",{title:!0,class:!0,"data-svelte-h":!0}),x(f)!=="svelte-1vo0nwf"&&(f.innerHTML=h),I=O(T),g=E(T,"A",{href:!0,title:!0,class:!0,"data-svelte-h":!0}),x(g)!=="svelte-1rmmqh5"&&(g.innerHTML=k),D=O(T),R=E(T,"A",{href:!0,title:!0,class:!0,"data-svelte-h":!0}),x(R)!=="svelte-9865yu"&&(R.innerHTML=z),Y=O(T),U=E(T,"A",{href:!0,title:!0,class:!0,"data-svelte-h":!0}),x(U)!=="svelte-55ku19"&&(U.innerHTML=H),this.h()},h(){p(e,"href","/"),p(e,"title","Home"),p(e,"class","svelte-sf3700"),L(e,"active",le(t[5].url.pathname)),p(i,"href","/code"),p(i,"title","Code"),p(i,"class","svelte-sf3700"),L(i,"active",t[5].url.pathname.includes("code")),p(o,"href","/arduino"),p(o,"title","Upload"),p(o,"class","svelte-sf3700"),L(o,"active",t[5].url.pathname.includes("arduino")),p(d,"class","fa svelte-sf3700"),L(d,"fa-folder-open-o",!t[1]),L(d,"fa-folder-open",t[1]),p(_,"type","file"),p(_,"accept","text/xml"),J(_,"display","none"),p(u,"title","Open File"),p(u,"class","svelte-sf3700"),L(u,"active",t[0]==="open"),p(f,"title","New File/Blank File"),p(f,"class","active svelte-sf3700"),p(g,"href","/download"),p(g,"title","Download"),p(g,"class","svelte-sf3700"),L(g,"active",t[5].url.pathname.includes("download")),p(R,"href","/settings"),p(R,"title","Settings"),p(R,"class","svelte-sf3700"),L(R,"active",t[5].url.pathname.includes("settings")),p(U,"href","/login"),p(U,"title","Login"),p(U,"class","svelte-sf3700"),L(U,"active",t[5].url.pathname.includes("login"))},m(T,C){w(T,e,C),w(T,n,C),w(T,i,C),w(T,r,C),w(T,o,C),w(T,l,C),w(T,u,C),B(u,d),B(u,v),B(u,_),t[13](_),w(T,b,C),w(T,f,C),w(T,I,C),w(T,g,C),w(T,D,C),w(T,R,C),w(T,Y,C),w(T,U,C),N||(G=[$(q.call(null,e,t[7])),$(q.call(null,i,t[7])),$(q.call(null,o,t[7])),K(_,"change",t[12]),$(q.call(null,u,t[7])),$(q.call(null,f,t[7])),K(f,"click",t[9]),$(q.call(null,g,t[7])),$(q.call(null,R,t[7])),$(q.call(null,U,t[7]))],N=!0)},p(T,C){C&32&&L(e,"active",le(T[5].url.pathname)),C&32&&L(i,"active",T[5].url.pathname.includes("code")),C&32&&L(o,"active",T[5].url.pathname.includes("arduino")),C&2&&L(d,"fa-folder-open-o",!T[1]),C&2&&L(d,"fa-folder-open",T[1]),C&1&&L(u,"active",T[0]==="open"),C&32&&L(g,"active",T[5].url.pathname.includes("download")),C&32&&L(R,"active",T[5].url.pathname.includes("settings")),C&32&&L(U,"active",T[5].url.pathname.includes("login"))},d(T){T&&(m(e),m(n),m(i),m(r),m(o),m(l),m(u),m(b),m(f),m(I),m(g),m(D),m(R),m(Y),m(U)),t[13](null),N=!1,Ke(G)}}}function bt(t){let e,s="project saved",n,i;return{c(){e=S("p"),e.textContent=s,this.h()},l(a){e=E(a,"P",{id:!0,class:!0,"data-svelte-h":!0}),x(e)!=="svelte-2aafo4"&&(e.textContent=s),this.h()},h(){p(e,"id","saved"),p(e,"class","svelte-sf3700")},m(a,r){w(a,e,r),i=!0},i(a){i||(a&&cs(()=>{i&&(n||(n=ot(e,ut,{},!0)),n.run(1))}),i=!0)},o(a){a&&(n||(n=ot(e,ut,{},!1)),n.run(0)),i=!1},d(a){a&&m(e),a&&n&&n.end()}}}function Xs(t){let e,s,n,i,a=t[6].isLoggedIn&&gt(t),r=!t[6].isLoggedIn&&ht(t),o=t[3]&&bt();return{c(){e=S("nav"),a&&a.c(),s=V(),r&&r.c(),n=V(),o&&o.c(),i=fe(),this.h()},l(c){e=E(c,"NAV",{class:!0});var l=P(e);a&&a.l(l),s=O(l),r&&r.l(l),l.forEach(m),n=O(c),o&&o.l(c),i=fe(),this.h()},h(){p(e,"class","svelte-sf3700"),L(e,"small",!t[6].isLoggedIn)},m(c,l){w(c,e,l),a&&a.m(e,null),B(e,s),r&&r.m(e,null),w(c,n,l),o&&o.m(c,l),w(c,i,l)},p(c,[l]){c[6].isLoggedIn?a?a.p(c,l):(a=gt(c),a.c(),a.m(e,s)):a&&(a.d(1),a=null),c[6].isLoggedIn?r&&(r.d(1),r=null):r?r.p(c,l):(r=ht(c),r.c(),r.m(e,null)),l&64&&L(e,"small",!c[6].isLoggedIn),c[3]?o?l&8&&M(o,1):(o=bt(),o.c(),M(o,1),o.m(i.parentNode,i)):o&&(de(),j(o,1,1,()=>{o=null}),pe())},i(c){M(o)},o(c){j(o)},d(c){c&&(m(e),m(n),m(i)),a&&a.d(),r&&r.d(),o&&o.d(c)}}}function Ys(t,e,s){let n,i,a;te(t,$e,k=>s(5,n=k)),te(t,ve,k=>s(15,i=k)),te(t,ye,k=>s(6,a=k));let{segment:r}=e;const o={position:"bottom",align:"center",animation:"slide",theme:"nav-tooltip"};let c=!1,l,u=!0,d=!1,v="";ve.subscribe(k=>{k.projectId?s(4,v=`?projectid=${k.projectId}`):s(4,v="")});async function _(){if(!i.project){b();return}if(await ze("We are about to save your current project and create a new one? Would you like to continue?"))try{await ct(i.project,i.projectId),ve.set({projectId:null,project:null}),await mt("/"),ft()}catch(D){Te("Error saving your project please try agian.",D)}}async function b(){await ze("You are creating a new file, which will delete your work.  Would you like to continue?")&&ft()}async function f(){if(!i.projectId){await mt("/project-settings");return}if(u)try{await ct(i.project,i.projectId),s(3,d=!0),await $s(1500),u=!0,s(3,d=!1)}catch(k){Te("Error saving your project please try agian.",k)}}async function h(){try{await Os()}catch(k){Te("Please try again in 5 minutes",k)}}async function I(k){s(1,c=!0);const D=l.files[0];if(D){try{await Ks(D)}catch(R){Te("Please make sure you uploaded a valid file.",R)}s(1,c=!1),le(n.url.pathname)?Oe():Fe()}}function g(k){Xe[k?"unshift":"push"](()=>{l=k,s(2,l)})}return t.$$set=k=>{"segment"in k&&s(0,r=k.segment)},[r,c,l,d,v,n,a,o,_,b,f,h,I,g]}class Js extends ge{constructor(e){super(),he(this,e,Ys,Xs,me,{segment:0})}}const Zs=t=>{t.registerToolboxCategoryCallback("ELECTROBLOCKS_FUNCTIONS",()=>{const e=[];if(A.Blocks.procedures_defnoreturn){const i=A.utils.xml.createElement("block");i.setAttribute("type","procedures_defnoreturn"),i.setAttribute("gap","16");const a=A.utils.xml.createElement("field");a.setAttribute("name","NAME"),a.appendChild(A.utils.xml.createTextNode(A.Msg.PROCEDURES_DEFNORETURN_PROCEDURE)),i.appendChild(a),e.push(i)}e.length&&e[e.length-1].setAttribute("gap","24");function s(i,a){for(let r=0;r<i.length;r++){const o=i[r][0],c=A.utils.xml.createElement("block");c.setAttribute("type",a),c.setAttribute("gap","40");const l=A.utils.xml.createElement("mutation");l.setAttribute("name",o),c.appendChild(l),e.push(c)}}const n=A.Procedures.allProcedures(t);return s(n[0],"procedures_callnoreturn"),s(n[1],"procedures_callreturn"),e})},Qs=t=>{var e=new DOMParser;t.registerToolboxCategoryCallback("LIST",()=>{const s=[],n=document.createElement("button");n.setAttribute("text","Сандар тізімін жасау"),n.setAttribute("callbackKey","CREATE_NUMBER_LIST");const i=new XMLSerializer;t.registerButtonCallback("CREATE_NUMBER_LIST",()=>{A.Variables.createVariableButtonHandler(t,Ie("create_list_number_block"),"List Number")}),s.push(n);const a=document.createElement("button");a.setAttribute("text","Жолдар тізімін жасау"),a.setAttribute("callbackKey","CREATE_STRING_LIST"),t.registerButtonCallback("CREATE_STRING_LIST",()=>{A.Variables.createVariableButtonHandler(t,Ie("create_list_string_block"),"List String")}),s.push(a);const r=document.createElement("button");r.setAttribute("text","Логикалық тізімді жасау"),r.setAttribute("callbackKey","CREATE_BOOLEAN_LIST"),t.registerButtonCallback("CREATE_BOOLEAN_LIST",()=>{A.Variables.createVariableButtonHandler(t,Ie("create_list_boolean_block"),"List Boolean")}),s.push(r);const o=document.createElement("button");o.setAttribute("text","Түстер тізімін жасау"),o.setAttribute("callbackKey","CREATE_COLOUR_LIST"),t.registerButtonCallback("CREATE_COLOUR_LIST",()=>{A.Variables.createVariableButtonHandler(t,Ie("create_list_colour_block"),"List Colour")}),s.push(o);const c=t.getVariablesOfType("List Number");if(c.length>0){const v='<xml><block type="set_number_list_block" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(c[0]))+'<value name="VALUE"> <block type="math_number"> <field name="NUM">10</field></block> </value><value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',_=e.parseFromString(v,"application/xml").documentElement.firstChild;s.push(_);const b='<xml><block type="get_number_from_list" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(c[0]))+'<value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',f=e.parseFromString(b,"application/xml").documentElement.firstChild;s.push(f)}const l=t.getVariablesOfType("List String");if(l.length>0){const v='<xml><block type="set_string_list_block" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(l[0]))+'<value name="VALUE"> <block type="text"> <field name="TEXT">abc</field></block> </value><value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',_=e.parseFromString(v,"application/xml").documentElement.firstChild;s.push(_);const b='<xml><block type="get_string_from_list" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(l[0]))+'<value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',f=e.parseFromString(b,"application/xml").documentElement.firstChild;s.push(f)}const u=t.getVariablesOfType("List Boolean");if(u.length>0){const v='<xml><block type="set_boolean_list_block" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(u[0]))+'<value name="VALUE"><block type="logic_boolean"></block></value><value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',_=e.parseFromString(v,"application/xml").documentElement.firstChild;s.push(_);const b='<xml><block type="get_boolean_from_list" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(u[0]))+'<value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',f=e.parseFromString(b,"application/xml").documentElement.firstChild;s.push(f)}const d=t.getVariablesOfType("List Colour");if(d.length>0){const v='<xml><block type="set_colour_list_block" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(d[0]))+'<value name="VALUE"><block type="color_picker_custom"></block></value><value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',_=e.parseFromString(v,"application/xml").documentElement.firstChild;s.push(_);const b='<xml><block type="get_colour_from_list" gap="24">'+i.serializeToString(A.Variables.generateVariableFieldDom(d[0]))+'<value name="POSITION"> <block type="math_number"> <field name="NUM">1</field></block> </value></block></xml>',f=e.parseFromString(b,"application/xml").documentElement.firstChild;s.push(f)}return s})},Ie=t=>e=>{if(e===void 0||!Ve(e))return;const s=Ve(e),n=s?s.getId():"";Q(t,20,20,!1).setFieldValue(n,"VAR")},en=t=>{t.registerToolboxCategoryCallback("ELECTROBLOCKS_VARIABLES",e=>{let s=[];const n=t,i=document.createElement("button");i.setAttribute("text","Сандық айнымалысын құру"),i.setAttribute("callbackKey","CREATE_NUM_VARIABLE"),n.registerButtonCallback("CREATE_NUM_VARIABLE",function(f){A.Variables.createVariableButtonHandler(f.getTargetWorkspace(),we("variables_set_number","math_number","NUM","33"),"Number")}),s.push(i);const a=document.createElement("button");a.setAttribute("text","Мәтін айнымалысын құру"),a.setAttribute("callbackKey","CREATE_STRING_VARIABLE"),n.registerButtonCallback("CREATE_STRING_VARIABLE",function(f){A.Variables.createVariableButtonHandler(f.getTargetWorkspace(),we("variables_set_string","text","TEXT","abc"),"String")}),s.push(a);const r=document.createElement("button");r.setAttribute("text","Логикалық айнымалыны құру"),r.setAttribute("callbackKey","CREATE_BOOLEAN_VARIABLE"),n.registerButtonCallback("CREATE_BOOLEAN_VARIABLE",function(f){A.Variables.createVariableButtonHandler(f.getTargetWorkspace(),we("variables_set_boolean","logic_boolean"),"Boolean")}),s.push(r);const o=document.createElement("button");o.setAttribute("text","Түс айнымалысын құру"),o.setAttribute("callbackKey","CREATE_COLOUR_VARIABLE"),n.registerButtonCallback("CREATE_COLOUR_VARIABLE",function(f){A.Variables.createVariableButtonHandler(f.getTargetWorkspace(),we("variables_set_colour","color_picker_custom"),"Colour")}),s.push(o);const c=A.Variables.flyoutCategoryBlocks(t);s=s.concat(c);const l=t.getVariablesOfType("Number"),u=t.getVariablesOfType("String"),d=t.getVariablesOfType("Boolean"),v=t.getVariablesOfType("Colour"),_=new XMLSerializer,b=new DOMParser;if(l.length>0){const f='<xml><block type="variables_set_number" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(l[0]))+'<value name="VALUE"> <block type="math_number"> <field name="NUM">10</field></block> </value></block></xml>',h=b.parseFromString(f,"application/xml").documentElement.firstChild;s.push(h);const I='<xml><block type="variables_get_number" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(l[0]))+"</block></xml>",g=b.parseFromString(I,"application/xml").documentElement.firstChild;s.push(g)}if(u.length>0){const f='<xml><block type="variables_set_string" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(u[0]))+'<value name="VALUE"> <block type="text"> <field name="TEXT">abc</field> </block> </value></block></xml>',h=b.parseFromString(f,"application/xml").documentElement.firstChild;s.push(h);const I='<xml><block type="variables_get_string" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(u[0]))+"</block></xml>",g=b.parseFromString(I,"application/xml").documentElement.firstChild;s.push(g)}if(d.length>0){const f='<xml><block type="variables_set_boolean" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(d[0]))+'<value name="VALUE"> <block type="logic_boolean"> </block> </value></block></xml>',h=b.parseFromString(f,"application/xml").documentElement.firstChild;s.push(h);const I='<xml><block type="variables_get_boolean" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(d[0]))+"</block></xml>",g=b.parseFromString(I,"application/xml").documentElement.firstChild;s.push(g)}if(v.length>0){const f='<xml><block type="variables_set_colour" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(v[0]))+'<value name="VALUE"> <block type="color_picker_custom"> </block> </value></block></xml>',h=b.parseFromString(f,"application/xml").documentElement.firstChild;s.push(h);const I='<xml><block type="variables_get_colour" gap="24">'+_.serializeToString(A.Variables.generateVariableFieldDom(v[0]))+"</block></xml>",g=b.parseFromString(I,"application/xml").documentElement.firstChild;s.push(g)}return s})},we=(t,e,s,n)=>i=>{if(i===null||!Ve(i))return;const a=Ve(i),r=Q(t,0,0,!0),o=Q(e,0,0,!0);o.setShadow(!1),s&&n&&o.setFieldValue(n,s),r.getInput("VALUE").connection.connect(o.outputConnection);const c=a?a.getId():"";r.setFieldValue(c,"VAR"),Ut(r)},tn=t=>{t.registerToolboxCategoryCallback("CODE",()=>{const e=[];if(t.getAllBlocks(!0).filter(i=>i.type==="arduino_setup").length===0){const i=A.utils.xml.createElement("block");i.setAttribute("type","arduino_setup"),e.push(i)}const n=A.utils.xml.createElement("block");return n.setAttribute("type","debug_block"),e.push(n),e})},sn=t=>{const e=nn(t);Qs(e),en(e),Zs(e),Rs(e),tn(e);const s=Q("arduino_loop",50,151,!1);vt(.2,!1),vt(.2,!0),Ns({type:A.Events.MOVE,blockId:s.id})},nn=t=>(A.inject(t,on()),A.getMainWorkspace()),vt=(t=1,e=!0)=>{var a,r;const s=Q("led",0,0,!0);s.setCommentText(Ps),(a=s.getIcon("comment"))==null||a.setBubbleSize(new A.utils.Size(460,90)),s.setFieldValue(qs.PIN_13,"PIN"),s.setFieldValue(e?"ON":"OFF","STATE"),Ut(s);const n=Q("delay_block",0,0,!0);n.setCommentText(Ms),(r=n.getIcon("comment"))==null||r.setBubbleSize(new A.utils.Size(460,90));const i=Q("math_number",0,0,!0);i.setFieldValue(t.toString(),"NUM"),n.getInput("DELAY").connection.connect(i.outputConnection),s.nextConnection.connect(n.previousConnection)},on=()=>({toolbox:Ds(),collapse:!0,comments:!0,disable:!1,trashcan:!0,horizontalLayout:!1,toolboxPosition:"start",css:!0,media:"https://blockly-demo.appspot.com/static/media/",rtl:!1,sounds:!0,theme:Us,oneBasedIndex:!0,grid:{spacing:20,length:1,colour:"#888",snap:!1},zoom:{controls:!0,wheel:!0,startScale:1,maxScale:3,minScale:.3,scaleSpeed:1.2}});function an(t){let e;return{c(){e=S("section"),this.h()},l(s){e=E(s,"SECTION",{id:!0,class:!0}),P(e).forEach(m),this.h()},h(){p(e,"id","blockly"),p(e,"class","svelte-3hr48s")},m(s,n){w(s,e,n),t[3](e)},p:Z,i:Z,o:Z,d(s){s&&m(e),t[3](null)}}}function ln(t,e,s){let{showLoopExecutionTimesArduinoStartBlock:n=!0}=e,i,a=!1;const r=[];Rt(()=>{window.Blockly=A,sn(i),s(2,a=!0),setTimeout(()=>{o()},200),r.push(js.subscribe(l=>{if(!l)return;dt().forEach(d=>d.unselect());const u=pt(l.blockId);u&&u.select()})),r.push(jt.subscribe(()=>{n&&a?Oe():a&&Fe()}))}),r.push(_e.subscribe(l=>{if(l.type==xs.MAIN){o();return}})),r.push(zs.subscribe(l=>console.log(l,"arduino store blockly component"))),r.push(Hs.subscribe(l=>{if(!l||l.type==="Computer"||l.message.indexOf("DEBUG_BLOCK_")===-1)return;const u=l.message.replace("DEBUG_BLOCK_","").trim();dt().forEach(v=>v.unselect());const d=pt(u);d?d.select():console.log(u,"blockId")}));function o(){A.svgResize(A.getMainWorkspace())}us(()=>{r.forEach(l=>l())});function c(l){Xe[l?"unshift":"push"](()=>{i=l,s(0,i)})}return t.$$set=l=>{"showLoopExecutionTimesArduinoStartBlock"in l&&s(1,n=l.showLoopExecutionTimesArduinoStartBlock)},t.$$.update=()=>{t.$$.dirty&6&&(n&&a?Oe():a&&Fe())},[i,n,a,c]}class rn extends ge{constructor(e){super(),he(this,e,ln,an,me,{showLoopExecutionTimesArduinoStartBlock:1})}}const cn=[{id:"introduction",title:"Кіріспе",videoUrl:"https://storage.googleapis.com/electroblocks/videos/1-introduction.mp4",lessonUrl:"https://electroblocks.github.io/docs/"},{id:"what-is-arduino",title:"What's an Arduino?",videoUrl:"https://storage.googleapis.com/electroblocks/videos/2-arduino.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/what-is-an-arduino/"},{id:"blink",title:"LED Blink",videoUrl:"https://storage.googleapis.com/electroblocks/videos/3-blink.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/blink/"},{id:"sending-messages",title:"Sending Messages",videoUrl:"https://storage.googleapis.com/electroblocks/videos/4-sending-messages.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/sending-messages/"},{id:"high-five",title:"Servo - High Five",videoUrl:"https://storage.googleapis.com/electroblocks/videos/5-high-five.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/highfive/"},{id:"wave",title:"Servo - Wave",videoUrl:"https://storage.googleapis.com/electroblocks/videos/6-wave.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/wave/"},{id:"rgbled",title:"RGB LED",videoUrl:"https://storage.googleapis.com/electroblocks/videos/7-rbgled.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/rgbled/"},{id:"intro-FastLED",title:"Intro - FastLED",videoUrl:"https://storage.googleapis.com/electroblocks/videos/8-intro-rgb-light-strip.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/fastled/"},{id:"fastLED-alternating-pattern",title:"FastLED - Alternating Colors",videoUrl:"https://storage.googleapis.com/electroblocks/videos/9-FastLED-Alternating-Pattern.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/fastled/"},{id:"fastLED-snake-pattern",title:"FastLED - Snake",videoUrl:"https://storage.googleapis.com/electroblocks/videos/9-FastLED-Alternating-Pattern.mp4",lessonUrl:"https://electroblocks.github.io/docs/lessons/fastled/"}],un=[{id:"blink",title:"Blink",pictureUrl:"https://storage.googleapis.com/electroblocks/starters/blink/picture.png",projectUrl:"https://storage.googleapis.com/electroblocks/starters/blink/project.xml",lessonUrl:"https://electroblocks.github.io/docs/lessons/blink/"},{id:"double-blink",title:"Double Blink",pictureUrl:"https://storage.googleapis.com/electroblocks/starters/double-blink/picture.png",projectUrl:"https://storage.googleapis.com/electroblocks/starters/double-blink/project.xml",lessonUrl:"https://electroblocks.github.io/docs/lessons/blink/"},{id:"alernating-blink",title:"Alternating Blink",pictureUrl:"https://storage.googleapis.com/electroblocks/starters/alternating-blink/picture.png",projectUrl:"https://storage.googleapis.com/electroblocks/starters/alternating-blink/project.xml",lessonUrl:"https://electroblocks.github.io/docs/lessons/blink/"},{id:"high-five",title:"High Five",pictureUrl:"https://storage.googleapis.com/electroblocks/starters/highfive/picture.png",projectUrl:"https://storage.googleapis.com/electroblocks/starters/highfive/project.xml",lessonUrl:"https://electroblocks.github.io/docs/lessons/highfive/"}];function fn(t){let e,s,n=t[0].title+"",i,a,r,o,c,l,u,d,v,_,b;return{c(){e=S("div"),s=S("h2"),i=Ee(n),a=V(),r=S("img"),l=V(),u=S("a"),d=Ee("Support Page"),this.h()},l(f){e=E(f,"DIV",{class:!0});var h=P(e);s=E(h,"H2",{});var I=P(s);i=Ae(I,n),I.forEach(m),a=O(h),r=E(h,"IMG",{src:!0,alt:!0,class:!0}),l=O(h),u=E(h,"A",{target:!0,href:!0,class:!0});var g=P(u);d=Ae(g,"Support Page"),g.forEach(m),h.forEach(m),this.h()},h(){Se(r.src,o=t[0].pictureUrl)||p(r,"src",o),p(r,"alt",c=t[0].title),p(r,"class","svelte-ufdal9"),p(u,"target","_blank"),p(u,"href",v=t[0].lessonUrl),p(u,"class","svelte-ufdal9"),p(e,"class","lesson svelte-ufdal9")},m(f,h){w(f,e,h),B(e,s),B(s,i),B(e,a),B(e,r),B(e,l),B(e,u),B(u,d),_||(b=K(r,"click",t[1]),_=!0)},p(f,[h]){h&1&&n!==(n=f[0].title+"")&&Nt(i,n),h&1&&!Se(r.src,o=f[0].pictureUrl)&&p(r,"src",o),h&1&&c!==(c=f[0].title)&&p(r,"alt",c),h&1&&v!==(v=f[0].lessonUrl)&&p(u,"href",v)},i:Z,o:Z,d(f){f&&m(e),_=!1,b()}}}function dn(t,e,s){let{lesson:n}=e;async function i(){await Fs(n.projectUrl),jt.update(a=>a+1)}return t.$$set=a=>{"lesson"in a&&s(0,n=a.lesson)},[n,i]}class pn extends ge{constructor(e){super(),he(this,e,dn,fn,me,{lesson:0})}}function mn(t){let e,s,n=t[0].title+"",i,a,r,o,c,l,u,d,v,_,b;return{c(){e=S("div"),s=S("h2"),i=Ee(n),r=V(),o=S("video"),c=S("track"),l=S("source"),d=V(),v=S("a"),_=Ee("Support Page"),this.h()},l(f){e=E(f,"DIV",{class:!0});var h=P(e);s=E(h,"H2",{id:!0});var I=P(s);i=Ae(I,n),I.forEach(m),r=O(h),o=E(h,"VIDEO",{class:!0});var g=P(o);c=E(g,"TRACK",{kind:!0}),l=E(g,"SOURCE",{src:!0}),g.forEach(m),d=O(h),v=E(h,"A",{target:!0,href:!0,class:!0});var k=P(v);_=Ae(k,"Support Page"),k.forEach(m),h.forEach(m),this.h()},h(){p(s,"id",a="lesson-video-"+t[0].id),p(c,"kind","captions"),Se(l.src,u=t[0].videoUrl)||p(l,"src",u),o.controls=!0,p(o,"class","svelte-lspdq3"),p(v,"target","_blank"),p(v,"href",b=t[0].lessonUrl),p(v,"class","svelte-lspdq3"),p(e,"class","lesson svelte-lspdq3")},m(f,h){w(f,e,h),B(e,s),B(s,i),B(e,r),B(e,o),B(o,c),B(o,l),B(e,d),B(e,v),B(v,_)},p(f,[h]){h&1&&n!==(n=f[0].title+"")&&Nt(i,n),h&1&&a!==(a="lesson-video-"+f[0].id)&&p(s,"id",a),h&1&&!Se(l.src,u=f[0].videoUrl)&&p(l,"src",u),h&1&&b!==(b=f[0].lessonUrl)&&p(v,"href",b)},i:Z,o:Z,d(f){f&&m(e)}}}function gn(t,e,s){let{lesson:n}=e;return t.$$set=i=>{"lesson"in i&&s(0,n=i.lesson)},[n]}class hn extends ge{constructor(e){super(),he(this,e,gn,mn,me,{lesson:0})}}function _t(t,e,s){const n=t.slice();return n[5]=e[s],n}function kt(t,e,s){const n=t.slice();return n[8]=e[s],n}function bn(t){let e,s="Videos",n,i,a="Starters";return{c(){e=S("option"),e.textContent=s,n=V(),i=S("option"),i.textContent=a,this.h()},l(r){e=E(r,"OPTION",{"data-svelte-h":!0}),x(e)!=="svelte-tm9mt7"&&(e.textContent=s),n=O(r),i=E(r,"OPTION",{"data-svelte-h":!0}),x(i)!=="svelte-9okg9z"&&(i.textContent=a),this.h()},h(){e.__value="video",at(e,e.__value),i.__value="starter",at(i,i.__value)},m(r,o){w(r,e,o),w(r,n,o),w(r,i,o)},p:Z,d(r){r&&(m(e),m(n),m(i))}}}function vn(t){let e,s,n;function i(r){t[4](r)}let a={type:"select",name:"select",id:"Category",$$slots:{default:[bn]},$$scope:{ctx:t}};return t[0]!==void 0&&(a.value=t[0]),e=new Ws({props:a}),Xe.push(()=>hs(e,"value",i)),{c(){ne(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,o){oe(e,r,o),n=!0},p(r,o){const c={};o&2048&&(c.$$scope={dirty:o,ctx:r}),!s&&o&1&&(s=!0,c.value=r[0],fs(()=>s=!1)),e.$set(c)},i(r){n||(M(e.$$.fragment,r),n=!0)},o(r){j(e.$$.fragment,r),n=!1},d(r){ae(e,r)}}}function Tt(t){let e,s=`Instructions for building the circuit are on the support page linkd.
      Please consider taking our
      <a target="_blank" href="https://docs.google.com/forms/d/1LngdF9DGPjRZfSl4uLvGfpX4WK_7CHlUw2y9-vIg1fY/prefill" class="svelte-17f88k9">anonymous survey</a>.`,n,i,a,r=Re(t[1]),o=[];for(let l=0;l<r.length;l+=1)o[l]=It(kt(t,r,l));const c=l=>j(o[l],1,1,()=>{o[l]=null});return{c(){e=S("p"),e.innerHTML=s,n=V();for(let l=0;l<o.length;l+=1)o[l].c();i=fe()},l(l){e=E(l,"P",{"data-svelte-h":!0}),x(e)!=="svelte-116oz6"&&(e.innerHTML=s),n=O(l);for(let u=0;u<o.length;u+=1)o[u].l(l);i=fe()},m(l,u){w(l,e,u),w(l,n,u);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,u);w(l,i,u),a=!0},p(l,u){if(u&2){r=Re(l[1]);let d;for(d=0;d<r.length;d+=1){const v=kt(l,r,d);o[d]?(o[d].p(v,u),M(o[d],1)):(o[d]=It(v),o[d].c(),M(o[d],1),o[d].m(i.parentNode,i))}for(de(),d=r.length;d<o.length;d+=1)c(d);pe()}},i(l){if(!a){for(let u=0;u<r.length;u+=1)M(o[u]);a=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)j(o[u]);a=!1},d(l){l&&(m(e),m(n),m(i)),Pt(o,l)}}}function It(t){let e,s;return e=new hn({props:{lesson:t[8]}}),{c(){ne(e.$$.fragment)},l(n){ie(e.$$.fragment,n)},m(n,i){oe(e,n,i),s=!0},p:Z,i(n){s||(M(e.$$.fragment,n),s=!0)},o(n){j(e.$$.fragment,n),s=!1},d(n){ae(e,n)}}}function wt(t){let e,s=`Click on the picture to see code. Instructions for building the circuit
      are on the support page linked.`,n,i,a,r=Re(t[2]),o=[];for(let l=0;l<r.length;l+=1)o[l]=yt(_t(t,r,l));const c=l=>j(o[l],1,1,()=>{o[l]=null});return{c(){e=S("p"),e.textContent=s,n=V();for(let l=0;l<o.length;l+=1)o[l].c();i=fe()},l(l){e=E(l,"P",{"data-svelte-h":!0}),x(e)!=="svelte-18p7bp8"&&(e.textContent=s),n=O(l);for(let u=0;u<o.length;u+=1)o[u].l(l);i=fe()},m(l,u){w(l,e,u),w(l,n,u);for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,u);w(l,i,u),a=!0},p(l,u){if(u&4){r=Re(l[2]);let d;for(d=0;d<r.length;d+=1){const v=_t(l,r,d);o[d]?(o[d].p(v,u),M(o[d],1)):(o[d]=yt(v),o[d].c(),M(o[d],1),o[d].m(i.parentNode,i))}for(de(),d=r.length;d<o.length;d+=1)c(d);pe()}},i(l){if(!a){for(let u=0;u<r.length;u+=1)M(o[u]);a=!0}},o(l){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)j(o[u]);a=!1},d(l){l&&(m(e),m(n),m(i)),Pt(o,l)}}}function yt(t){let e,s;return e=new pn({props:{lesson:t[5]}}),{c(){ne(e.$$.fragment)},l(n){ie(e.$$.fragment,n)},m(n,i){oe(e,n,i),s=!0},p:Z,i(n){s||(M(e.$$.fragment,n),s=!0)},o(n){j(e.$$.fragment,n),s=!1},d(n){ae(e,n)}}}function _n(t){let e,s,n="X",i,a,r="Lessons",o,c,l,u,d,v,_;c=new Gs({props:{$$slots:{default:[vn]},$$scope:{ctx:t}}});let b=t[0]=="video"&&Tt(t),f=t[0]=="starter"&&wt(t);return{c(){e=S("div"),s=S("div"),s.textContent=n,i=V(),a=S("h2"),a.textContent=r,o=V(),ne(c.$$.fragment),l=V(),b&&b.c(),u=V(),f&&f.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var I=P(e);s=E(I,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),x(s)!=="svelte-17qe4v2"&&(s.textContent=n),i=O(I),a=E(I,"H2",{"data-svelte-h":!0}),x(a)!=="svelte-1vphqod"&&(a.textContent=r),o=O(I),ie(c.$$.fragment,I),l=O(I),b&&b.l(I),u=O(I),f&&f.l(I),I.forEach(m),this.h()},h(){p(s,"id","close"),p(s,"class","svelte-17f88k9"),p(e,"class","lessons-container svelte-17f88k9")},m(h,I){w(h,e,I),B(e,s),B(e,i),B(e,a),B(e,o),oe(c,e,null),B(e,l),b&&b.m(e,null),B(e,u),f&&f.m(e,null),d=!0,v||(_=K(s,"click",t[3]),v=!0)},p(h,[I]){const g={};I&2049&&(g.$$scope={dirty:I,ctx:h}),c.$set(g),h[0]=="video"?b?(b.p(h,I),I&1&&M(b,1)):(b=Tt(h),b.c(),M(b,1),b.m(e,u)):b&&(de(),j(b,1,1,()=>{b=null}),pe()),h[0]=="starter"?f?(f.p(h,I),I&1&&M(f,1)):(f=wt(h),f.c(),M(f,1),f.m(e,null)):f&&(de(),j(f,1,1,()=>{f=null}),pe())},i(h){d||(M(c.$$.fragment,h),M(b),M(f),d=!0)},o(h){j(c.$$.fragment,h),j(b),j(f),d=!1},d(h){h&&m(e),ae(c),b&&b.d(),f&&f.d(),v=!1,_()}}}function kn(t,e,s){let n="video",i=cn,a=un;async function r(){qe.set(!1),await be(),await be(),_e.mainWindow()}function o(c){n=c,s(0,n)}return[n,i,a,r,o]}class Tn extends ge{constructor(e){super(),he(this,e,kn,_n,me,{})}}const xt="@firebase/installations",Je="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=1e4,Ht=`w:${Je}`,$t="FIS_v2",In="https://firebaseinstallations.googleapis.com/v1",wn=60*60*1e3,yn="installations",Sn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},re=new Mt(yn,Sn,En);function qt(t){return t instanceof Dt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt({projectId:t}){return`${In}/projects/${t}/installations`}function Wt(t){return{token:t.token,requestStatus:2,expiresIn:Cn(t.expiresIn),creationTime:Date.now()}}async function Kt(t,e){const n=(await e.json()).error;return re.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Xt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function An(t,{refreshToken:e}){const s=Xt(t);return s.append("Authorization",Ln(e)),s}async function Yt(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Cn(t){return Number(t.replace("s","000"))}function Ln(t){return`${$t} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn({appConfig:t,heartbeatServiceProvider:e},{fid:s}){const n=Gt(t),i=Xt(t),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={fid:s,authVersion:$t,appId:t.appId,sdkVersion:Ht},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await Yt(()=>fetch(n,o));if(c.ok){const l=await c.json();return{fid:l.fid||s,registrationStatus:2,refreshToken:l.refreshToken,authToken:Wt(l.authToken)}}else throw await Kt("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=/^[cdef][\w-]{21}$/,Ge="";function Fn(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const s=Rn(t);return On.test(s)?s:Ge}catch{return Ge}}function Rn(t){return Vn(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Map;function Qt(t,e){const s=Pe(t);es(s,e),Nn(s,e)}function es(t,e){const s=Zt.get(t);if(s)for(const n of s)n(e)}function Nn(t,e){const s=Pn();s&&s.postMessage({key:t,fid:e}),Mn()}let se=null;function Pn(){return!se&&"BroadcastChannel"in self&&(se=new BroadcastChannel("[Firebase] FID Change"),se.onmessage=t=>{es(t.data.key,t.data.fid)}),se}function Mn(){Zt.size===0&&se&&(se.close(),se=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="firebase-installations-database",Un=1,ce="firebase-installations-store";let Ue=null;function Ze(){return Ue||(Ue=ks(Dn,Un,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ce)}}})),Ue}async function Ne(t,e){const s=Pe(t),i=(await Ze()).transaction(ce,"readwrite"),a=i.objectStore(ce),r=await a.get(s);return await a.put(e,s),await i.done,(!r||r.fid!==e.fid)&&Qt(t,e.fid),e}async function ts(t){const e=Pe(t),n=(await Ze()).transaction(ce,"readwrite");await n.objectStore(ce).delete(e),await n.done}async function Me(t,e){const s=Pe(t),i=(await Ze()).transaction(ce,"readwrite"),a=i.objectStore(ce),r=await a.get(s),o=e(r);return o===void 0?await a.delete(s):await a.put(o,s),await i.done,o&&(!r||r.fid!==o.fid)&&Qt(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(t){let e;const s=await Me(t.appConfig,n=>{const i=jn(n),a=xn(t,i);return e=a.registrationPromise,a.installationEntry});return s.fid===Ge?{installationEntry:await e}:{installationEntry:s,registrationPromise:e}}function jn(t){const e=t||{fid:Fn(),registrationStatus:0};return ss(e)}function xn(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(re.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const s={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=zn(t,s);return{installationEntry:s,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Hn(t)}:{installationEntry:e}}async function zn(t,e){try{const s=await Bn(t,e);return Ne(t.appConfig,s)}catch(s){throw qt(s)&&s.customData.serverCode===409?await ts(t.appConfig):await Ne(t.appConfig,{fid:e.fid,registrationStatus:0}),s}}async function Hn(t){let e=await St(t.appConfig);for(;e.registrationStatus===1;)await Jt(100),e=await St(t.appConfig);if(e.registrationStatus===0){const{installationEntry:s,registrationPromise:n}=await Qe(t);return n||s}return e}function St(t){return Me(t,e=>{if(!e)throw re.create("installation-not-found");return ss(e)})}function ss(t){return $n(t)?{fid:t.fid,registrationStatus:0}:t}function $n(t){return t.registrationStatus===1&&t.registrationTime+zt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn({appConfig:t,heartbeatServiceProvider:e},s){const n=Gn(t,s),i=An(t,s),a=e.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={installation:{sdkVersion:Ht,appId:t.appId}},o={method:"POST",headers:i,body:JSON.stringify(r)},c=await Yt(()=>fetch(n,o));if(c.ok){const l=await c.json();return Wt(l)}else throw await Kt("Generate Auth Token",c)}function Gn(t,{fid:e}){return`${Gt(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e=!1){let s;const n=await Me(t.appConfig,a=>{if(!ns(a))throw re.create("not-registered");const r=a.authToken;if(!e&&Xn(r))return a;if(r.requestStatus===1)return s=Wn(t,e),a;{if(!navigator.onLine)throw re.create("app-offline");const o=Jn(a);return s=Kn(t,o),o}});return s?await s:n.authToken}async function Wn(t,e){let s=await Et(t.appConfig);for(;s.authToken.requestStatus===1;)await Jt(100),s=await Et(t.appConfig);const n=s.authToken;return n.requestStatus===0?et(t,e):n}function Et(t){return Me(t,e=>{if(!ns(e))throw re.create("not-registered");const s=e.authToken;return Zn(s)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Kn(t,e){try{const s=await qn(t,e),n=Object.assign(Object.assign({},e),{authToken:s});return await Ne(t.appConfig,n),s}catch(s){if(qt(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await ts(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ne(t.appConfig,n)}throw s}}function ns(t){return t!==void 0&&t.registrationStatus===2}function Xn(t){return t.requestStatus===2&&!Yn(t)}function Yn(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+wn}function Jn(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Zn(t){return t.requestStatus===1&&t.requestTime+zt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(t){const e=t,{installationEntry:s,registrationPromise:n}=await Qe(e);return n?n.catch(console.error):et(e).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t,e=!1){const s=t;return await ti(s),(await et(s,e)).token}async function ti(t){const{registrationPromise:e}=await Qe(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(!t||!t.options)throw je("App Configuration");if(!t.name)throw je("App Name");const e=["projectId","apiKey","appId"];for(const s of e)if(!t.options[s])throw je(s);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function je(t){return re.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="installations",ni="installations-internal",ii=t=>{const e=t.getProvider("app").getImmediate(),s=si(e),n=Ye(e,"heartbeat");return{app:e,appConfig:s,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},oi=t=>{const e=t.getProvider("app").getImmediate(),s=Ye(e,is).getImmediate();return{getId:()=>Qn(s),getToken:i=>ei(s,i)}};function ai(){Le(new Be(is,ii,"PUBLIC")),Le(new Be(ni,oi,"PRIVATE"))}ai();Ce(xt,Je);Ce(xt,Je,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="analytics",li="firebase_id",ri="origin",ci=60*1e3,ui="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tt="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=new Ts("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},X=new Mt("analytics","Analytics",fi);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(!t.startsWith(tt)){const e=X.create("invalid-gtag-resource",{gtagURL:t});return W.warn(e.message),""}return t}function os(t){return Promise.all(t.map(e=>e.catch(s=>s)))}function pi(t,e){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(t,e)),s}function mi(t,e){const s=pi("firebase-js-sdk-policy",{createScriptURL:di}),n=document.createElement("script"),i=`${tt}?l=${t}&id=${e}`;n.src=s?s==null?void 0:s.createScriptURL(i):i,n.async=!0,document.head.appendChild(n)}function gi(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hi(t,e,s,n,i,a){const r=n[i];try{if(r)await e[r];else{const c=(await os(s)).find(l=>l.measurementId===i);c&&await e[c.appId]}}catch(o){W.error(o)}t("config",i,a)}async function bi(t,e,s,n,i){try{let a=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const o=await os(s);for(const c of r){const l=o.find(d=>d.measurementId===c),u=l&&e[l.appId];if(u)a.push(u);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",n,i||{})}catch(a){W.error(a)}}function vi(t,e,s,n){async function i(a,...r){try{if(a==="event"){const[o,c]=r;await bi(t,e,s,o,c)}else if(a==="config"){const[o,c]=r;await hi(t,e,s,n,o,c)}else if(a==="consent"){const[o,c]=r;t("consent",o,c)}else if(a==="get"){const[o,c,l]=r;t("get",o,c,l)}else if(a==="set"){const[o]=r;t("set",o)}else t(a,...r)}catch(o){W.error(o)}}return i}function _i(t,e,s,n,i){let a=function(...r){window[n].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=vi(a,t,e,s),{gtagCore:a,wrappedGtag:window[i]}}function ki(t){const e=window.document.getElementsByTagName("script");for(const s of Object.values(e))if(s.src&&s.src.includes(tt)&&s.src.includes(t))return s;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=30,Ii=1e3;class wi{constructor(e={},s=Ii){this.throttleMetadata=e,this.intervalMillis=s}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,s){this.throttleMetadata[e]=s}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const as=new wi;function yi(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Si(t){var e;const{appId:s,apiKey:n}=t,i={method:"GET",headers:yi(n)},a=ui.replace("{app-id}",s),r=await fetch(a,i);if(r.status!==200&&r.status!==304){let o="";try{const c=await r.json();!((e=c.error)===null||e===void 0)&&e.message&&(o=c.error.message)}catch{}throw X.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function Ei(t,e=as,s){const{appId:n,apiKey:i,measurementId:a}=t.options;if(!n)throw X.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:n};throw X.create("no-api-key")}const r=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Li;return setTimeout(async()=>{o.abort()},s!==void 0?s:ci),ls({appId:n,apiKey:i,measurementId:a},r,o,e)}async function ls(t,{throttleEndTimeMillis:e,backoffCount:s},n,i=as){var a;const{appId:r,measurementId:o}=t;try{await Ai(n,e)}catch(c){if(o)return W.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:r,measurementId:o};throw c}try{const c=await Si(t);return i.deleteThrottleMetadata(r),c}catch(c){const l=c;if(!Ci(l)){if(i.deleteThrottleMetadata(r),o)return W.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:r,measurementId:o};throw c}const u=Number((a=l==null?void 0:l.customData)===null||a===void 0?void 0:a.httpStatus)===503?rt(s,i.intervalMillis,Ti):rt(s,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:s+1};return i.setThrottleMetadata(r,d),W.debug(`Calling attemptFetch again in ${u} millis`),ls(t,d,n,i)}}function Ai(t,e){return new Promise((s,n)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(s,i);t.addEventListener(()=>{clearTimeout(a),n(X.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ci(t){if(!(t instanceof Dt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Li{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Bi(t,e,s,n,i){if(i&&i.global){t("event",s,n);return}else{const a=await e,r=Object.assign(Object.assign({},n),{send_to:a});t("event",s,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(){if(ys())try{await Ss()}catch(t){return W.warn(X.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return W.warn(X.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Oi(t,e,s,n,i,a,r){var o;const c=Ei(t);c.then(_=>{s[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&W.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>W.error(_)),e.push(c);const l=Vi().then(_=>{if(_)return n.getId()}),[u,d]=await Promise.all([c,l]);ki(a)||mi(a,u.measurementId),i("js",new Date);const v=(o=r==null?void 0:r.config)!==null&&o!==void 0?o:{};return v[ri]="firebase",v.update=!0,d!=null&&(v[li]=d),i("config",u.measurementId,v),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.app=e}_delete(){return delete ke[this.app.options.appId],Promise.resolve()}}let ke={},At=[];const Ct={};let xe="dataLayer",Ri="gtag",Lt,rs,Bt=!1;function Ni(){const t=[];if(ws()&&t.push("This is a browser extension environment."),Es()||t.push("Cookies are not available."),t.length>0){const e=t.map((n,i)=>`(${i+1}) ${n}`).join(" "),s=X.create("invalid-analytics-context",{errorInfo:e});W.warn(s.message)}}function Pi(t,e,s){Ni();const n=t.options.appId;if(!n)throw X.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)W.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw X.create("no-api-key");if(ke[n]!=null)throw X.create("already-exists",{id:n});if(!Bt){gi(xe);const{wrappedGtag:a,gtagCore:r}=_i(ke,At,Ct,xe,Ri);rs=a,Lt=r,Bt=!0}return ke[n]=Oi(t,At,Ct,e,Lt,xe,s),new Fi(t)}function Mi(t,e={}){const s=Ye(t,We);if(s.isInitialized()){const i=s.getImmediate();if(As(e,s.getOptions()))return i;throw X.create("already-initialized")}return s.initialize({options:e})}function Di(t,e,s,n){t=Is(t),Bi(rs,ke[t.app.options.appId],e,s,n).catch(i=>W.error(i))}const Vt="@firebase/analytics",Ot="0.10.4";function Ui(){Le(new Be(We,(e,{options:s})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Pi(n,i,s)},"PUBLIC")),Le(new Be("analytics-internal",t,"PRIVATE")),Ce(Vt,Ot),Ce(Vt,Ot,"esm2017");function t(e){try{const s=e.getProvider(We).getImmediate();return{logEvent:(n,i,a)=>Di(s,n,i,a)}}catch(s){throw X.create("interop-component-reg-failed",{reason:s})}}}Ui();const{window:ji}=bs;function Ft(t){let e,s,n,i,a,r,o;return s=new Tn({}),{c(){e=S("div"),ne(s.$$.fragment),n=V(),i=S("div"),this.h()},l(c){e=E(c,"DIV",{style:!0});var l=P(e);ie(s.$$.fragment,l),l.forEach(m),n=O(c),i=E(c,"DIV",{class:!0}),P(i).forEach(m),this.h()},h(){J(e,"flex",t[6]),J(e,"overflow-y","scroll"),p(i,"class","grabber svelte-1kz1uk9")},m(c,l){w(c,e,l),oe(s,e,null),w(c,n,l),w(c,i,l),a=!0,r||(o=K(i,"mousedown",t[16]),r=!0)},p(c,l){(!a||l&64)&&J(e,"flex",c[6])},i(c){a||(M(s.$$.fragment,c),a=!0)},o(c){j(s.$$.fragment,c),a=!1},d(c){c&&(m(e),m(n),m(i)),ae(s),r=!1,o()}}}function xi(t){let e,s,n,i,a,r,o,c,l,u,d,v,_,b;e=new Js({props:{segment:t[0]}});let f=t[7]&&Ft(t);o=new rn({props:{showLoopExecutionTimesArduinoStartBlock:t[2]}});const h=t[15].default,I=ds(h,t,t[14],null);return{c(){ne(e.$$.fragment),s=V(),n=V(),i=S("main"),f&&f.c(),a=V(),r=S("div"),ne(o.$$.fragment),c=V(),l=S("div"),u=V(),d=S("div"),I&&I.c(),this.h()},l(g){ie(e.$$.fragment,g),s=O(g),n=O(g),i=E(g,"MAIN",{style:!0,class:!0});var k=P(i);f&&f.l(k),a=O(k),r=E(k,"DIV",{style:!0,id:!0});var D=P(r);ie(o.$$.fragment,D),D.forEach(m),c=O(k),l=E(k,"DIV",{class:!0}),P(l).forEach(m),u=O(k),d=E(k,"DIV",{style:!0,id:!0,class:!0});var R=P(d);I&&I.l(R),R.forEach(m),k.forEach(m),this.h()},h(){J(r,"flex",t[4]),p(r,"id","middle_panel"),p(l,"class","grabber svelte-1kz1uk9"),J(d,"flex",t[5]),p(d,"id","right_panel"),p(d,"class","svelte-1kz1uk9"),L(d,"scroll",t[1]),L(d,"hide",t[5]<15),J(i,"height",t[3]),p(i,"class","svelte-1kz1uk9")},m(g,k){oe(e,g,k),w(g,s,k),w(g,n,k),w(g,i,k),f&&f.m(i,null),B(i,a),B(i,r),oe(o,r,null),B(i,c),B(i,l),B(i,u),B(i,d),I&&I.m(d,null),v=!0,_||(b=[K(ji,"resize",t[12]),K(document.body,"mouseup",t[9]),K(l,"mousedown",t[17]),K(i,"mousemove",t[11]),K(i,"mousemove",t[10])],_=!0)},p(g,[k]){const D={};k&1&&(D.segment=g[0]),e.$set(D),g[7]?f?(f.p(g,k),k&128&&M(f,1)):(f=Ft(g),f.c(),M(f,1),f.m(i,a)):f&&(de(),j(f,1,1,()=>{f=null}),pe());const R={};k&4&&(R.showLoopExecutionTimesArduinoStartBlock=g[2]),o.$set(R),(!v||k&16)&&J(r,"flex",g[4]),I&&I.p&&(!v||k&16384)&&ps(I,h,g,g[14],v?gs(h,g[14],k,null):ms(g[14]),null),(!v||k&32)&&J(d,"flex",g[5]),(!v||k&2)&&L(d,"scroll",g[1]),(!v||k&32)&&L(d,"hide",g[5]<15),(!v||k&8)&&J(i,"height",g[3])},i(g){v||(M(e.$$.fragment,g),M(f),M(o.$$.fragment,g),M(I,g),v=!0)},o(g){j(e.$$.fragment,g),j(f),j(o.$$.fragment,g),j(I,g),v=!1},d(g){g&&(m(s),m(n),m(i)),ae(e,g),f&&f.d(),ae(o),I&&I.d(g),_=!1,Ke(b)}}}function zi(t,e,s){let n,i,a,r;te(t,$e,N=>s(13,n=N)),te(t,ye,N=>s(20,i=N)),te(t,ve,N=>s(21,a=N)),te(t,qe,N=>s(7,r=N));let{$$slots:o={},$$scope:c}=e,{segment:l=""}=e,u=!1,d,v="500px",_=59.5,b=39.5,f=0,h=!1,I=!1;function g(N){N=="right"?I=!0:h=!0}function k(){I=!1,h=!1}const D=N=>G=>{if(!h&&N=="left"||!I&&N=="right")return;const T=window.innerWidth;G.clientX<20||T-G.clientX<20||(N=="right"?s(5,b=(T-G.clientX)/T*100):s(6,f=G.clientX/T*100),r||s(6,f=0),s(4,_=100-b-f-1),_e.mainWindow())},R=lt.debounce(D("right"),2),z=lt.debounce(D("left"),2);function Y(){s(3,v=window.innerHeight-56+"px"),setTimeout(()=>{_e.mainWindow()},5)}Rt(()=>{const N=Cs(Ls.firebase);Mi(N),localStorage.removeItem("no_alert"),$e.subscribe(({url:C})=>{["open","settings","lessons","code"].reduce((ee,ue)=>ee||C.pathname.indexOf(ue)>=0,!1)?s(1,u=!0):s(1,u=!1),Y()}),qe.subscribe(async C=>{C?(s(4,_=39),s(5,b=29),s(6,f=31)):(s(4,_=59.5),s(5,b=39.5),s(6,f=0)),await be(),await be(),await be(),_e.mainWindow()});let G=!1;if(localStorage.getItem("reload_once_workspace")){const C=localStorage.getItem("reload_once_workspace");localStorage.removeItem("reload_once_workspace"),He(C),G=!0}const T=vs();_s(T,async C=>{if(!C){ye.set({isLoggedIn:!1,uid:null,firebaseControlled:!0});return}if(ye.set({isLoggedIn:!0,uid:C.uid,firebaseControlled:!0}),a.projectId===n.url.searchParams.get("projectid")||!n.url.searchParams.get("projectid")||G)return;De({title:"Loading your project",allowEscapeKey:!1,allowOutsideClick:!1,onOpen:()=>{De.showLoading()}});const ee=await Bs(n.url.searchParams.get("projectid")),ue=await Vs(n.url.searchParams.get("projectid"),i.uid);He(ue),ve.set({project:ee,projectId:n.url.searchParams.get("projectid")}),le(n.url.pathname)?Oe():Fe(),De.close()})});const U=()=>g("left"),H=()=>g("right");return t.$$set=N=>{"segment"in N&&s(0,l=N.segment),"$$scope"in N&&s(14,c=N.$$scope)},t.$$.update=()=>{t.$$.dirty&8192&&s(2,d=le(n.url.pathname))},[l,u,d,v,_,b,f,r,g,k,R,z,Y,n,c,o,U,H]}class fo extends ge{constructor(e){super(),he(this,e,zi,xi,me,{segment:0})}}export{fo as component};

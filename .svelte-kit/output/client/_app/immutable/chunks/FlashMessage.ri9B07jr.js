import{s as y,q as b}from"./scheduler.ydM6q-DU.js";import{S as k,i as v,j as u,b as g,l as f,m as p,t as c,k as q,d as o,e as M,w as S,c as E,o as F,x as j,f as d,q as x,z,E as m}from"./index.DrhsS78m.js";import{f as _}from"./index.DP76kcN4.js";function h(r){let t,e,s,i;return{c(){t=M("div"),e=S(r[0]),this.h()},l(a){t=E(a,"DIV",{class:!0,id:!0});var n=F(t);e=j(n,r[0]),n.forEach(o),this.h()},h(){d(t,"class","row svelte-1n219rv"),d(t,"id","message")},m(a,n){g(a,t,n),x(t,e),i=!0},p(a,n){(!i||n&1)&&z(e,a[0])},i(a){i||(a&&b(()=>{i&&(s||(s=m(t,_,{},!0)),s.run(1))}),i=!0)},o(a){a&&(s||(s=m(t,_,{},!1)),s.run(0)),i=!1},d(a){a&&o(t),a&&s&&s.end()}}}function C(r){let t,e=r[1].length>0&&h(r);return{c(){e&&e.c(),t=u()},l(s){e&&e.l(s),t=u()},m(s,i){e&&e.m(s,i),g(s,t,i)},p(s,[i]){s[1].length>0?e?(e.p(s,i),i&2&&f(e,1)):(e=h(s),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(p(),c(e,1,1,()=>{e=null}),q())},i(s){f(e)},o(s){c(e)},d(s){s&&o(t),e&&e.d(s)}}}function D(r,t,e){let{message:s}=t,{delay:i=2e3}=t,{show:a=!1}=t,n=[];function w(){e(1,n=[1,...n]),setTimeout(()=>{n.pop(),e(1,n)},i)}return r.$$set=l=>{"message"in l&&e(0,s=l.message),"delay"in l&&e(3,i=l.delay),"show"in l&&e(2,a=l.show)},r.$$.update=()=>{r.$$.dirty&4&&a&&(w(),e(2,a=!1))},[s,n,a,i]}class T extends k{constructor(t){super(),v(this,t,D,C,y,{message:0,delay:3,show:2})}}export{T as F};

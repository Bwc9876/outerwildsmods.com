import{S as F,i as Y,s as x,J as oe,e as O,c as S,a as E,d as g,b as $,g as L,K as ae,L as ne,M as ie,q as C,o as q,t as N,h as T,H as k,I as ee,X as z,k as U,w as te,m as V,x as le,Z as G,_ as H,y as re,j as ce,$ as ue,B as se,a0 as fe,Q as _e,v as de,l as P,n as he,N as me,W as pe,p as ge}from"./vendor-e2160a72.js";import{p as ve}from"./stores-d21b4cba.js";import{r as be}from"./singletons-a6a7384f.js";import{M as ke}from"./mod-card-377a38ba.js";import{b as J,s as K,i as Q,a as Oe}from"./mod-sorting-eeff08c8.js";const Se=ye;async function ye(a,e){return be.goto(a,e,[])}function $e(a){let e,l;const r=a[1].default,o=oe(r,a,a[0],null);return{c(){e=O("ol"),o&&o.c(),this.h()},l(t){e=S(t,"OL",{class:!0});var n=E(e);o&&o.l(n),n.forEach(g),this.h()},h(){$(e,"class","grid grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-3 svelte-1ekffit")},m(t,n){L(t,e,n),o&&o.m(e,null),l=!0},p(t,[n]){o&&o.p&&(!l||n&1)&&ae(o,r,t,t[0],l?ie(r,t[0],n,null):ne(t[0]),null)},i(t){l||(C(o,t),l=!0)},o(t){q(o,t),l=!1},d(t){t&&g(e),o&&o.d(t)}}}function Ee(a,e,l){let{$$slots:r={},$$scope:o}=e;return a.$$set=t=>{"$$scope"in t&&l(0,o=t.$$scope)},[o,r]}class Le extends F{constructor(e){super();Y(this,e,Ee,$e,x,{})}}function R(a,e,l){const r=a.slice();return r[10]=e[l],r[12]=l,r}function W(a,e,l){const r=a.slice();return r[13]=e[l][0],r[3]=e[l][1],r}function X(a){let e,l=a[3].title+"",r,o;return{c(){e=O("option"),r=N(l),this.h()},l(t){e=S(t,"OPTION",{});var n=E(e);r=T(n,l),n.forEach(g),this.h()},h(){e.__value=o=a[13],e.value=e.__value},m(t,n){L(t,e,n),k(e,r)},p:ee,d(t){t&&g(e)}}}function Z(a){let e,l,r,o;return{c(){e=O("button"),l=N("\u274C"),this.h()},l(t){e=S(t,"BUTTON",{class:!0});var n=E(e);l=T(n,"\u274C"),n.forEach(g),this.h()},h(){$(e,"class","absolute right-1 top-2 p-1 leading-none text-xs grayscale bg-dark")},m(t,n){L(t,e,n),k(e,l),r||(o=z(e,"click",a[9]),r=!0)},p:ee,d(t){t&&g(e),r=!1,o()}}}function A(a,e){let l,r,o;return r=new ke({props:{lazy:e[12]>3,mod:e[10]}}),{key:a,first:null,c(){l=P(),te(r.$$.fragment),this.h()},l(t){l=P(),le(r.$$.fragment,t),this.h()},h(){this.first=l},m(t,n){L(t,l,n),re(r,t,n),o=!0},p(t,n){e=t;const s={};n&4&&(s.lazy=e[12]>3),n&4&&(s.mod=e[10]),r.$set(s)},i(t){o||(C(r.$$.fragment,t),o=!0)},o(t){q(r.$$.fragment,t),o=!1},d(t){t&&g(l),se(r,t)}}}function we(a){let e=[],l=new Map,r,o,t=a[2];const n=s=>s[10].uniqueName;for(let s=0;s<t.length;s+=1){let c=R(a,t,s),f=n(c);l.set(f,e[s]=A(f,c))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();r=P()},l(s){for(let c=0;c<e.length;c+=1)e[c].l(s);r=P()},m(s,c){for(let f=0;f<e.length;f+=1)e[f].m(s,c);L(s,r,c),o=!0},p(s,c){c&4&&(t=s[2],he(),e=me(e,c,n,1,s,t,l,r.parentNode,pe,A,r,R),ge())},i(s){if(!o){for(let c=0;c<t.length;c+=1)C(e[c]);o=!0}},o(s){for(let c=0;c<e.length;c+=1)q(e[c]);o=!1},d(s){for(let c=0;c<e.length;c+=1)e[c].d(s);s&&g(r)}}}function Ie(a){let e,l,r,o=a[0].length+"",t,n,s,c,f,b,M,w,u,d,D,B,I=Object.entries(J),h=[];for(let i=0;i<I.length;i+=1)h[i]=X(W(a,I,i));let m=a[1]&&Z(a);return u=new Le({props:{$$slots:{default:[we]},$$scope:{ctx:a}}}),{c(){e=O("div"),l=O("div"),r=N("Sort "),t=N(o),n=N(` items:
		`),s=O("select");for(let i=0;i<h.length;i+=1)h[i].c();c=U(),f=O("div"),b=O("input"),M=U(),m&&m.c(),w=U(),te(u.$$.fragment),this.h()},l(i){e=S(i,"DIV",{class:!0});var _=E(e);l=S(_,"DIV",{});var v=E(l);r=T(v,"Sort "),t=T(v,o),n=T(v,` items:
		`),s=S(v,"SELECT",{class:!0});var p=E(s);for(let j=0;j<h.length;j+=1)h[j].l(p);p.forEach(g),v.forEach(g),c=V(_),f=S(_,"DIV",{class:!0});var y=E(f);b=S(y,"INPUT",{class:!0,placeholder:!0}),M=V(y),m&&m.l(y),y.forEach(g),_.forEach(g),w=V(i),le(u.$$.fragment,i),this.h()},h(){$(s,"class","input"),$(b,"class","input px-2 grayscale flex-1"),$(b,"placeholder","Search \u{1F50E}"),$(f,"class","relative flex"),$(e,"class","flex items-top sm:flex-row flex-col sm:gap-4")},m(i,_){L(i,e,_),k(e,l),k(l,r),k(l,t),k(l,n),k(l,s);for(let v=0;v<h.length;v+=1)h[v].m(s,null);G(s,a[3]),k(e,c),k(e,f),k(f,b),H(b,a[1]),k(f,M),m&&m.m(f,null),L(i,w,_),re(u,i,_),d=!0,D||(B=[z(s,"change",a[7]),z(b,"input",a[8])],D=!0)},p(i,[_]){if((!d||_&1)&&o!==(o=i[0].length+"")&&ce(t,o),_&0){I=Object.entries(J);let p;for(p=0;p<I.length;p+=1){const y=W(i,I,p);h[p]?h[p].p(y,_):(h[p]=X(y),h[p].c(),h[p].m(s,null))}for(;p<h.length;p+=1)h[p].d(1);h.length=I.length}(!d||_&8)&&G(s,i[3]),_&2&&b.value!==i[1]&&H(b,i[1]),i[1]?m?m.p(i,_):(m=Z(i),m.c(),m.m(f,null)):m&&(m.d(1),m=null);const v={};_&65540&&(v.$$scope={dirty:_,ctx:i}),u.$set(v)},i(i){d||(C(u.$$.fragment,i),d=!0)},o(i){q(u.$$.fragment,i),d=!1},d(i){i&&g(e),ue(h,i),m&&m.d(),i&&g(w),se(u,i),D=!1,fe(B)}}}function Me(a,e){for(const l of e)if(!!l&&l.toLocaleLowerCase().includes(a.toLocaleLowerCase()))return!0;return!1}function Ne(a,e,l){let r;_e(a,ve,u=>l(4,r=u));let{mods:o=[]}=e,{defaultSortOrder:t="hot"}=e,n=t,s="",c=o;de(()=>{const u=r.url.searchParams.get(K)||"";Q(u)&&l(3,n=u)});function f(u){Q(u)&&l(3,n=u)}const b=u=>{if(!u||!u.currentTarget)return;const d=new URL(r.url);d.searchParams.set(K,u.currentTarget.value),f(u.currentTarget.value),Se(d.href)};function M(){s=this.value,l(1,s)}const w=()=>l(1,s="");return a.$$set=u=>{"mods"in u&&l(0,o=u.mods),"defaultSortOrder"in u&&l(6,t=u.defaultSortOrder)},a.$$.update=()=>{if(a.$$.dirty&15){let u=function(d){return Me(s,[d.author,d.description,d.name,d.repo,d.uniqueName,d.authorDisplay])};l(2,c=Oe(o,n)),s&&l(2,c=c.filter(u))}},[o,s,c,n,r,f,t,b,M,w]}class je extends F{constructor(e){super();Y(this,e,Ne,Ie,x,{mods:0,defaultSortOrder:6})}}export{je as S};

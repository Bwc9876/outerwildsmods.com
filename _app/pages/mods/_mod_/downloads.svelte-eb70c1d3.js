import{S as fe,i as ue,s as me,F as ee,G as te,a as y,d as m,b as _,g as U,k as A,l as oe,m as B,I as Y,e as M,c as E,f as le,H as d,t as T,h as N,j as L,w as Q,x as J,y as K,X as se,q as Z,o as x,B as $,a0 as Ne,a2 as He,a3 as Ie,R as Ue,Q as Se,$ as We}from"../../../chunks/vendor-e2160a72.js";import{P as Ve,a as je}from"../../../chunks/page-section-title-6f757fcb.js";import{r as qe}from"../../../chunks/read-from-store-3d1980e1.js";import{L as Ae}from"../../../chunks/link-button-50649a85.js";import{g as Be}from"../../../chunks/mod-path-name-10fc7192.js";import{m as Ce}from"../../../chunks/store-43b550ac.js";function pe(o){let e,t,i,l;return{c(){e=ee("circle"),this.h()},l(n){e=te(n,"circle",{cy:!0,cx:!0,r:!0,fill:!0}),y(e).forEach(m),this.h()},h(){_(e,"cy",t=o[3](o[1])),_(e,"cx",i=o[4](o[1])),_(e,"r",l=3),_(e,"fill",o[2])},m(n,s){U(n,e,s)},p(n,s){s&10&&t!==(t=n[3](n[1]))&&_(e,"cy",t),s&18&&i!==(i=n[4](n[1]))&&_(e,"cx",i),s&4&&_(e,"fill",n[2])},d(n){n&&m(e)}}}function Le(o){let e,t,i,l,n=o[1]&&pe(o);return{c(){e=ee("polyline"),i=A(),n&&n.c(),l=oe(),this.h()},l(s){e=te(s,"polyline",{fill:!0,class:!0,"stroke-width":!0,stroke:!0,points:!0}),y(e).forEach(m),i=B(s),n&&n.l(s),l=oe(),this.h()},h(){_(e,"fill","none"),_(e,"class","opacity-80"),_(e,"stroke-width","1"),_(e,"stroke",o[2]),_(e,"points",t=o[0].map(o[10]).join(" "))},m(s,a){U(s,e,a),U(s,i,a),n&&n.m(s,a),U(s,l,a)},p(s,[a]){a&4&&_(e,"stroke",s[2]),a&25&&t!==(t=s[0].map(s[10]).join(" "))&&_(e,"points",t),s[1]?n?n.p(s,a):(n=pe(s),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},i:Y,o:Y,d(s){s&&m(e),s&&m(i),n&&n.d(s),s&&m(l)}}}function Re(o,e,t){let i,l,{historyPoints:n=[]}=e,{firstPoint:s}=e,{widthMultiplier:a}=e,{minDownloads:r}=e,{heightMuliplier:f}=e,{chartHeight:u}=e,{hoveredPoint:v=null}=e,{color:p}=e;const w=h=>`${i(h)},${l(h)}`;return o.$$set=h=>{"historyPoints"in h&&t(0,n=h.historyPoints),"firstPoint"in h&&t(5,s=h.firstPoint),"widthMultiplier"in h&&t(6,a=h.widthMultiplier),"minDownloads"in h&&t(7,r=h.minDownloads),"heightMuliplier"in h&&t(8,f=h.heightMuliplier),"chartHeight"in h&&t(9,u=h.chartHeight),"hoveredPoint"in h&&t(1,v=h.hoveredPoint),"color"in h&&t(2,p=h.color)},o.$$.update=()=>{o.$$.dirty&96&&t(4,i=h=>(h.UnixTimestamp-s.UnixTimestamp)*a),o.$$.dirty&896&&t(3,l=h=>(h.DownloadCount-r)*f+u)},[n,v,p,l,i,s,a,r,f,u,w]}class ve extends fe{constructor(e){super();ue(this,e,Re,Le,me,{historyPoints:0,firstPoint:5,widthMultiplier:6,minDownloads:7,heightMuliplier:8,chartHeight:9,hoveredPoint:1,color:2})}}const Te={DownloadCount:0,UnixTimestamp:0},Fe=(o,e)=>{const t=o[o.length-1],i=e[e.length-1];return!t&&i?i:!i&&t?t:i&&t?t.UnixTimestamp<i.UnixTimestamp?t:i:Te},Oe=(o,e)=>{const t=o[0],i=e[0];return!t&&i?i:!i&&t?t:t&&i?t.UnixTimestamp>i.UnixTimestamp?t:i:Te},ge=(o,e,t,i)=>{let l=null;for(const n of o)Math.abs(e-n.UnixTimestamp)*t>i||(!l||Math.abs(e-n.UnixTimestamp)<Math.abs(e-l.UnixTimestamp))&&(l=n);return l},Xe=o=>new Date(o.UnixTimestamp*1e3),G=o=>Xe(o).toLocaleDateString(void 0,{day:"2-digit",month:"short",year:"numeric"});function Pe(o){let e,t,i,l,n,s,a=o[3]&&we(o),r=o[4]&&o[1]&&De(o),f=o[3]&&ye(o),u=o[4]&&!o[3]&&ke(o);return{c(){e=M("span"),t=M("div"),a&&a.c(),i=A(),r&&r.c(),l=A(),n=M("div"),f&&f.c(),s=A(),u&&u.c(),this.h()},l(v){e=E(v,"SPAN",{class:!0,style:!0});var p=y(e);t=E(p,"DIV",{class:!0});var w=y(t);a&&a.l(w),i=B(w),r&&r.l(w),w.forEach(m),l=B(p),n=E(p,"DIV",{class:!0});var h=y(n);f&&f.l(h),s=B(h),u&&u.l(h),h.forEach(m),p.forEach(m),this.h()},h(){_(t,"class","justify-center"),_(n,"class","text-light"),_(e,"class","absolute text-center bg-darker bg-opacity-60 p-2 rounded z-10 min-w-max"),le(e,"left",o[2].x+o[5].x+"px"),le(e,"top",o[2].y+o[5].y+"px")},m(v,p){U(v,e,p),d(e,t),a&&a.m(t,null),d(t,i),r&&r.m(t,null),d(e,l),d(e,n),f&&f.m(n,null),d(n,s),u&&u.m(n,null)},p(v,p){v[3]?a?a.p(v,p):(a=we(v),a.c(),a.m(t,i)):a&&(a.d(1),a=null),v[4]&&v[1]?r?r.p(v,p):(r=De(v),r.c(),r.m(t,null)):r&&(r.d(1),r=null),v[3]?f?f.p(v,p):(f=ye(v),f.c(),f.m(n,s)):f&&(f.d(1),f=null),v[4]&&!v[3]?u?u.p(v,p):(u=ke(v),u.c(),u.m(n,null)):u&&(u.d(1),u=null),p&4&&le(e,"left",v[2].x+v[5].x+"px"),p&4&&le(e,"top",v[2].y+v[5].y+"px")},d(v){v&&m(e),a&&a.d(),r&&r.d(),f&&f.d(),u&&u.d()}}}function we(o){let e,t=o[0].name+"",i,l,n=o[3].DownloadCount+"",s;return{c(){e=M("div"),i=T(t),l=T(": "),s=T(n),this.h()},l(a){e=E(a,"DIV",{class:!0});var r=y(e);i=N(r,t),l=N(r,": "),s=N(r,n),r.forEach(m),this.h()},h(){_(e,"class","text-accent")},m(a,r){U(a,e,r),d(e,i),d(e,l),d(e,s)},p(a,r){r&1&&t!==(t=a[0].name+"")&&L(i,t),r&8&&n!==(n=a[3].DownloadCount+"")&&L(s,n)},d(a){a&&m(e)}}}function De(o){let e,t=o[1].name+"",i,l,n=o[4].DownloadCount+"",s;return{c(){e=M("div"),i=T(t),l=T(": "),s=T(n),this.h()},l(a){e=E(a,"DIV",{class:!0});var r=y(e);i=N(r,t),l=N(r,": "),s=N(r,n),r.forEach(m),this.h()},h(){_(e,"class","text-cta")},m(a,r){U(a,e,r),d(e,i),d(e,l),d(e,s)},p(a,r){r&2&&t!==(t=a[1].name+"")&&L(i,t),r&16&&n!==(n=a[4].DownloadCount+"")&&L(s,n)},d(a){a&&m(e)}}}function ye(o){let e=G(o[3])+"",t;return{c(){t=T(e)},l(i){t=N(i,e)},m(i,l){U(i,t,l)},p(i,l){l&8&&e!==(e=G(i[3])+"")&&L(t,e)},d(i){i&&m(t)}}}function ke(o){let e=G(o[4])+"",t;return{c(){t=T(e)},l(i){t=N(i,e)},m(i,l){U(i,t,l)},p(i,l){l&16&&e!==(e=G(i[4])+"")&&L(t,e)},d(i){i&&m(t)}}}function ze(o){let e,t=(o[3]||o[4])&&Pe(o);return{c(){t&&t.c(),e=oe()},l(i){t&&t.l(i),e=oe()},m(i,l){t&&t.m(i,l),U(i,e,l)},p(i,[l]){i[3]||i[4]?t?t.p(i,l):(t=Pe(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Y,o:Y,d(i){t&&t.d(i),i&&m(e)}}}function Ye(o,e,t){const i={x:-40,y:30};let{mod:l}=e,{compareWithMod:n}=e,{mousePosition:s={x:0,y:0}}=e,{hoveredPoint:a=null}=e,{hoveredPointCompare:r=null}=e;return o.$$set=f=>{"mod"in f&&t(0,l=f.mod),"compareWithMod"in f&&t(1,n=f.compareWithMod),"mousePosition"in f&&t(2,s=f.mousePosition),"hoveredPoint"in f&&t(3,a=f.hoveredPoint),"hoveredPointCompare"in f&&t(4,r=f.hoveredPointCompare)},[l,n,s,a,r,i]}class Ge extends fe{constructor(e){super();ue(this,e,Ye,ze,me,{mod:0,compareWithMod:1,mousePosition:2,hoveredPoint:3,hoveredPointCompare:4})}}function Qe(o){let e,t,i,l,n,s,a,r,f,u,v,p,w,h,H,C,S,z,q,V,g=G(o[4])+"",c,k,I,j=G(o[5])+"",W,b,O,ie;return u=new Ge({props:{compareWithMod:o[3],mod:o[2],hoveredPoint:o[9],hoveredPointCompare:o[10],mousePosition:o[8]}}),C=new ve({props:{chartHeight:o[13].y,firstPoint:o[4],heightMuliplier:o[12],minDownloads:o[6],widthMultiplier:o[11],historyPoints:o[0],hoveredPoint:o[9],color:"#ffab8a"}}),S=new ve({props:{chartHeight:o[13].y,firstPoint:o[4],heightMuliplier:o[12],minDownloads:o[6],widthMultiplier:o[11],historyPoints:o[1],hoveredPoint:o[10],color:"#35823f"}}),{c(){e=M("div"),t=M("div"),i=M("div"),l=M("span"),n=T(o[7]),s=M("span"),a=T(o[6]),r=A(),f=M("div"),Q(u.$$.fragment),v=A(),p=ee("svg"),w=ee("g"),h=ee("line"),H=ee("line"),Q(C.$$.fragment),Q(S.$$.fragment),z=A(),q=M("div"),V=M("span"),c=T(g),k=A(),I=M("span"),W=T(j),this.h()},l(P){e=E(P,"DIV",{class:!0});var D=y(e);t=E(D,"DIV",{class:!0});var R=y(t);i=E(R,"DIV",{class:!0,style:!0});var F=y(i);l=E(F,"SPAN",{});var X=y(l);n=N(X,o[7]),X.forEach(m),s=E(F,"SPAN",{});var he=y(s);a=N(he,o[6]),he.forEach(m),F.forEach(m),r=B(R),f=E(R,"DIV",{class:!0});var ae=y(f);J(u.$$.fragment,ae),v=B(ae),p=te(ae,"svg",{viewBox:!0,class:!0});var de=y(p);w=te(de,"g",{class:!0});var ne=y(w);h=te(ne,"line",{class:!0,"stroke-width":!0,x1:!0,y1:!0,x2:!0,y2:!0}),y(h).forEach(m),H=te(ne,"line",{class:!0,"stroke-width":!0,x1:!0,y1:!0,x2:!0,y2:!0}),y(H).forEach(m),J(C.$$.fragment,ne),J(S.$$.fragment,ne),ne.forEach(m),de.forEach(m),ae.forEach(m),R.forEach(m),z=B(D),q=E(D,"DIV",{class:!0});var re=y(q);V=E(re,"SPAN",{});var ce=y(V);c=N(ce,g),ce.forEach(m),k=B(re),I=E(re,"SPAN",{class:!0});var _e=y(I);W=N(_e,j),_e.forEach(m),re.forEach(m),D.forEach(m),this.h()},h(){_(i,"class","flex flex-col justify-between text-right"),le(i,"line-height","0"),_(h,"class","stroke-light opacity-80"),_(h,"stroke-width","1"),_(h,"x1","0"),_(h,"y1","100%"),_(h,"x2","0"),_(h,"y2","0"),_(H,"class","stroke-light opacity-80"),_(H,"stroke-width","1"),_(H,"x1","0"),_(H,"y1","100%"),_(H,"x2","100%"),_(H,"y2","100%"),_(w,"class","pointer-events-none"),_(p,"viewBox","0 0 "+o[13].x+" "+o[13].y),_(p,"class","block overflow-visible"),_(f,"class","relative flex-1"),_(t,"class","flex gap-4"),_(I,"class","float-right"),_(q,"class","mt-2"),_(e,"class","bg-dark p-4 rounded text-sm")},m(P,D){U(P,e,D),d(e,t),d(t,i),d(i,l),d(l,n),d(i,s),d(s,a),d(t,r),d(t,f),K(u,f,null),d(f,v),d(f,p),d(p,w),d(w,h),d(w,H),K(C,w,null),K(S,w,null),d(e,z),d(e,q),d(q,V),d(V,c),d(q,k),d(q,I),d(I,W),b=!0,O||(ie=[se(p,"mousemove",o[15]),se(p,"focus",o[16]),se(p,"mouseout",o[14]),se(p,"blur",o[14])],O=!0)},p(P,[D]){(!b||D&128)&&L(n,P[7]),(!b||D&64)&&L(a,P[6]);const R={};D&8&&(R.compareWithMod=P[3]),D&4&&(R.mod=P[2]),D&512&&(R.hoveredPoint=P[9]),D&1024&&(R.hoveredPointCompare=P[10]),D&256&&(R.mousePosition=P[8]),u.$set(R);const F={};D&16&&(F.firstPoint=P[4]),D&4096&&(F.heightMuliplier=P[12]),D&64&&(F.minDownloads=P[6]),D&2048&&(F.widthMultiplier=P[11]),D&1&&(F.historyPoints=P[0]),D&512&&(F.hoveredPoint=P[9]),C.$set(F);const X={};D&16&&(X.firstPoint=P[4]),D&4096&&(X.heightMuliplier=P[12]),D&64&&(X.minDownloads=P[6]),D&2048&&(X.widthMultiplier=P[11]),D&2&&(X.historyPoints=P[1]),D&1024&&(X.hoveredPoint=P[10]),S.$set(X),(!b||D&16)&&g!==(g=G(P[4])+"")&&L(c,g),(!b||D&32)&&j!==(j=G(P[5])+"")&&L(W,j)},i(P){b||(Z(u.$$.fragment,P),Z(C.$$.fragment,P),Z(S.$$.fragment,P),b=!0)},o(P){x(u.$$.fragment,P),x(C.$$.fragment,P),x(S.$$.fragment,P),b=!1},d(P){P&&m(e),$(u),$(C),$(S),O=!1,Ne(ie)}}}function Je(o,e,t){let i,l,n,s,a,r,{historyPoints:f=[]}=e,{comparePoints:u=[]}=e,{mod:v}=e,{compareWithMod:p}=e;const w={y:100,x:500};let h={x:0,y:0},H=null,C=null;const S=(g,c,k)=>{const I=g/k;t(8,h={x:g,y:c});const j=i.UnixTimestamp+I*(l.UnixTimestamp-i.UnixTimestamp);t(9,H=ge(f,j,a,w.x/100)),t(10,C=ge(u,j,a,w.x/100))},z=()=>{t(9,H=null),t(10,C=null)},q=g=>{S(g.offsetX,g.offsetY,g.currentTarget.getBoundingClientRect().width)},V=g=>{const c=g.currentTarget.getBoundingClientRect();S(c.width/2,c.height/2,c.width)};return o.$$set=g=>{"historyPoints"in g&&t(0,f=g.historyPoints),"comparePoints"in g&&t(1,u=g.comparePoints),"mod"in g&&t(2,v=g.mod),"compareWithMod"in g&&t(3,p=g.compareWithMod)},o.$$.update=()=>{o.$$.dirty&3&&t(4,i=Fe(f,u)),o.$$.dirty&3&&t(5,l=Oe(f,u)),o.$$.dirty&3&&t(7,s=He(Ie([...f,...u],"DownloadCount"))||0),o.$$.dirty&48&&t(11,a=w.x/(l.UnixTimestamp-i.UnixTimestamp)),o.$$.dirty&192&&t(12,r=-w.y/(s-n))},t(6,n=0),[f,u,v,p,i,l,n,s,h,H,C,a,r,w,z,q,V]}class Ke extends fe{constructor(e){super();ue(this,e,Je,Qe,me,{historyPoints:0,comparePoints:1,mod:2,compareWithMod:3})}}function be(o,e,t){const i=o.slice();return i[1]=e[t],i}function Me(o){return document.title=o[1].name+" - Downloads Chart",{c:Y,l:Y,m:Y,d:Y}}function Ze(o){let e,t=o[1].name+"",i;return{c(){e=T("\u2039 Back to "),i=T(t)},l(l){e=N(l,"\u2039 Back to "),i=N(l,t)},m(l,n){U(l,e,n),U(l,i,n)},p(l,n){n&2&&t!==(t=l[1].name+"")&&L(i,t)},d(l){l&&m(e),l&&m(i)}}}function xe(o){let e=o[1].name+"",t,i;return{c(){t=T(e),i=T(" downloads over time")},l(l){t=N(l,e),i=N(l," downloads over time")},m(l,n){U(l,t,n),U(l,i,n)},p(l,n){n&2&&e!==(e=l[1].name+"")&&L(t,e)},d(l){l&&m(t),l&&m(i)}}}function Ee(o){let e,t=o[1].name+"",i,l;return{c(){e=M("option"),i=T(t),this.h()},l(n){e=E(n,"OPTION",{});var s=y(e);i=N(s,t),s.forEach(m),this.h()},h(){e.__value=l=o[1].uniqueName,e.value=e.__value},m(n,s){U(n,e,s),d(e,i)},p:Y,d(n){n&&m(e)}}}function $e(o){let e,t,i,l,n,s,a,r,f,u,v,p,w,h,H,C,S,z,q;i=new Ae({props:{href:"..",isSmall:!0,$$slots:{default:[Ze]},$$scope:{ctx:o}}}),n=new je({props:{id:"downloads",$$slots:{default:[xe]},$$scope:{ctx:o}}});let V=o[4],g=[];for(let c=0;c<V.length;c+=1)g[c]=Ee(be(o,V,c));return C=new Ke({props:{historyPoints:o[0],comparePoints:o[3],mod:o[1],compareWithMod:o[2]}}),{c(){e=M("div"),t=M("div"),Q(i.$$.fragment),l=A(),Q(n.$$.fragment),s=A(),a=M("div"),r=M("div"),f=M("span"),u=T("Compare with:"),v=A(),p=M("select"),w=M("option"),h=T("None");for(let c=0;c<g.length;c+=1)g[c].c();H=A(),Q(C.$$.fragment),this.h()},l(c){e=E(c,"DIV",{});var k=y(e);t=E(k,"DIV",{class:!0});var I=y(t);J(i.$$.fragment,I),I.forEach(m),l=B(k),J(n.$$.fragment,k),s=B(k),a=E(k,"DIV",{class:!0});var j=y(a);r=E(j,"DIV",{});var W=y(r);f=E(W,"SPAN",{});var b=y(f);u=N(b,"Compare with:"),b.forEach(m),v=B(W),p=E(W,"SELECT",{class:!0});var O=y(p);w=E(O,"OPTION",{});var ie=y(w);h=N(ie,"None"),ie.forEach(m);for(let P=0;P<g.length;P+=1)g[P].l(O);O.forEach(m),W.forEach(m),j.forEach(m),H=B(k),J(C.$$.fragment,k),k.forEach(m),this.h()},h(){_(t,"class","flex mb-4"),w.__value=null,w.value=w.__value,_(p,"class","input"),_(a,"class","flex justify-between flex-wrap")},m(c,k){U(c,e,k),d(e,t),K(i,t,null),d(e,l),K(n,e,null),d(e,s),d(e,a),d(a,r),d(r,f),d(f,u),d(r,v),d(r,p),d(p,w),d(w,h);for(let I=0;I<g.length;I+=1)g[I].m(p,null);d(e,H),K(C,e,null),S=!0,z||(q=se(p,"change",o[5]),z=!0)},p(c,k){const I={};k&514&&(I.$$scope={dirty:k,ctx:c}),i.$set(I);const j={};if(k&514&&(j.$$scope={dirty:k,ctx:c}),n.$set(j),k&16){V=c[4];let b;for(b=0;b<V.length;b+=1){const O=be(c,V,b);g[b]?g[b].p(O,k):(g[b]=Ee(O),g[b].c(),g[b].m(p,null))}for(;b<g.length;b+=1)g[b].d(1);g.length=V.length}const W={};k&1&&(W.historyPoints=c[0]),k&8&&(W.comparePoints=c[3]),k&2&&(W.mod=c[1]),k&4&&(W.compareWithMod=c[2]),C.$set(W)},i(c){S||(Z(i.$$.fragment,c),Z(n.$$.fragment,c),Z(C.$$.fragment,c),S=!0)},o(c){x(i.$$.fragment,c),x(n.$$.fragment,c),x(C.$$.fragment,c),S=!1},d(c){c&&m(e),$(i),$(n),We(g,c),$(C),z=!1,q()}}}function et(o){let e,t,i,l,n=o[1]&&Me(o);return i=new Ve({props:{$$slots:{default:[$e]},$$scope:{ctx:o}}}),{c(){n&&n.c(),e=oe(),t=A(),Q(i.$$.fragment)},l(s){const a=Ue('[data-svelte="svelte-1ko4b2e"]',document.head);n&&n.l(a),e=oe(),a.forEach(m),t=B(s),J(i.$$.fragment,s)},m(s,a){n&&n.m(document.head,null),d(document.head,e),U(s,t,a),K(i,s,a),l=!0},p(s,[a]){s[1]?n||(n=Me(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null);const r={};a&527&&(r.$$scope={dirty:a,ctx:s}),i.$set(r)},i(s){l||(Z(i.$$.fragment,s),l=!0)},o(s){x(i.$$.fragment,s),l=!1},d(s){n&&n.d(s),m(e),s&&m(t),$(i,s)}}}const rt=!0,ft=async({fetch:o,params:e})=>{const i=(await qe(Ce)).find(({name:s})=>e.mod===Be(s));if(!i)return{status:404,error:new Error(`Could not find mod ${e.mod}`)};const l=await o(`/api/${i.uniqueName}/downloads.json`);return l.status!==200?(console.error(`Failed to get mod download history from local API: ${l.status}. ${l.statusText}`),{props:{modDownloadHistory:[],mod:i}}):{props:{modDownloadHistory:await l.json(),mod:i}}};function tt(o,e,t){let i;Se(o,Ce,u=>t(6,i=u));let{modDownloadHistory:l=[]}=e,{mod:n}=e,s=null,a=[];const r=i.filter(({uniqueName:u})=>u!==n.uniqueName),f=u=>{t(2,s=r.find(v=>v.uniqueName===u.currentTarget.value)||null)};return o.$$set=u=>{"modDownloadHistory"in u&&t(0,l=u.modDownloadHistory),"mod"in u&&t(1,n=u.mod)},o.$$.update=()=>{o.$$.dirty&4&&(async()=>{if(s){const u=await fetch(`/api/${s.uniqueName}/downloads.json`);u.ok&&t(3,a=await u.json())}else t(3,a=[])})()},[l,n,s,a,r,f]}class ut extends fe{constructor(e){super();ue(this,e,tt,et,me,{modDownloadHistory:0,mod:1})}}export{ut as default,ft as load,rt as prerender};

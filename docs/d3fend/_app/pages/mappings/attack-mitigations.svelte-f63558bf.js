import{S as At,i as wt,s as Nt,e as _,k as A,c as h,a as m,m as w,d as s,g,I as o,w as Ct,t as N,x as It,h as C,b as K,y as Mt,N as ot,q as Kt,o as St,B as qt,X as kt,E as Z,f as P,l as Tt}from"../../chunks/index-a02da30e.js";import"../../chunks/marked.esm-8ab30116.js";import{T as Ft}from"../../chunks/Title-1d23c88f.js";import{G as Rt,c as yt}from"../../chunks/lib-88dd6a45.js";function Et(r,t,i){const l=r.slice();return l[6]=t[i],l}function bt(r,t,i){const l=r.slice();return l[9]=t[i],l}function Bt(r){let t,i,l,n;return{c(){t=_("button"),i=N("select"),this.h()},l(a){t=h(a,"BUTTON",{class:!0});var e=m(t);i=C(e,"select"),e.forEach(s),this.h()},h(){K(t,"class","selector")},m(a,e){g(a,t,e),o(t,i),l||(n=ot(t,"click",r[2]),l=!0)},p:Z,d(a){a&&s(t),l=!1,n()}}}function Ht(r){let t,i,l,n;return{c(){t=_("button"),i=N("deselect"),this.h()},l(a){t=h(a,"BUTTON",{class:!0});var e=m(t);i=C(e,"deselect"),e.forEach(s),this.h()},h(){K(t,"class","selector")},m(a,e){g(a,t,e),o(t,i),l||(n=ot(t,"click",r[3]),l=!0)},p:Z,d(a){a&&s(t),l=!1,n()}}}function Vt(r){let t,i,l=r[6]["@id"]+"",n,a,e,u,y,v,T,D;return{c(){t=_("td"),i=_("a"),n=N(l),a=A(),e=_("td"),u=N("not found"),y=A(),v=_("td"),T=_("div"),D=N("not found"),this.h()},l(c){t=h(c,"TD",{});var p=m(t);i=h(p,"A",{style:!0,href:!0});var E=m(i);n=C(E,l),E.forEach(s),p.forEach(s),a=w(c),e=h(c,"TD",{style:!0});var q=m(e);u=C(q,"not found"),q.forEach(s),y=w(c),v=h(c,"TD",{style:!0});var b=m(v);T=h(b,"DIV",{});var d=m(T);D=C(d,"not found"),d.forEach(s),b.forEach(s),this.h()},h(){P(i,"color","red"),K(i,"href",yt(r[6]["@id"])),P(e,"color","red"),P(v,"color","red")},m(c,p){g(c,t,p),o(t,i),o(i,n),g(c,a,p),g(c,e,p),o(e,u),g(c,y,p),g(c,v,p),o(v,T),o(T,D)},p:Z,d(c){c&&s(t),c&&s(a),c&&s(e),c&&s(y),c&&s(v)}}}function Ot(r){let t,i=r[6]["@id"].split(":")[1]+"",l,n,a,e,u=r[6]["rdfs:label"]+"",y,v,T,D,c,p,E=(r[6]["d3f:d3fend-comment"]||"")+"",q,b=r[6]["d3f:related"]&&$t(r);return{c(){t=_("td"),l=N(i),n=A(),a=_("td"),e=_("a"),y=N(u),v=A(),T=_("td"),b&&b.c(),D=A(),c=_("td"),p=_("small"),q=N(E),this.h()},l(d){t=h(d,"TD",{class:!0});var I=m(t);l=C(I,i),I.forEach(s),n=w(d),a=h(d,"TD",{class:!0});var R=m(a);e=h(R,"A",{href:!0});var F=m(e);y=C(F,u),F.forEach(s),R.forEach(s),v=w(d),T=h(d,"TD",{});var H=m(T);b&&b.l(H),H.forEach(s),D=w(d),c=h(d,"TD",{style:!0});var O=m(c);p=h(O,"SMALL",{});var $=m(p);q=C($,E),$.forEach(s),O.forEach(s),this.h()},h(){K(t,"class","text-center"),K(e,"href",yt(r[6]["@id"].split(":")[1])),K(a,"class",""),P(c,"width","15rem")},m(d,I){g(d,t,I),o(t,l),g(d,n,I),g(d,a,I),o(a,e),o(e,y),g(d,v,I),g(d,T,I),b&&b.m(T,null),g(d,D,I),g(d,c,I),o(c,p),o(p,q)},p(d,I){d[6]["d3f:related"]&&b.p(d,I)},d(d){d&&s(t),d&&s(n),d&&s(a),d&&s(v),d&&s(T),b&&b.d(),d&&s(D),d&&s(c)}}}function $t(r){let t,i=r[6]["d3f:related"],l=[];for(let n=0;n<i.length;n+=1)l[n]=gt(bt(r,i,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();t=Tt()},l(n){for(let a=0;a<l.length;a+=1)l[a].l(n);t=Tt()},m(n,a){for(let e=0;e<l.length;e+=1)l[e].m(n,a);g(n,t,a)},p(n,a){if(a&2){i=n[6]["d3f:related"];let e;for(e=0;e<i.length;e+=1){const u=bt(n,i,e);l[e]?l[e].p(u,a):(l[e]=gt(u),l[e].c(),l[e].m(t.parentNode,t))}for(;e<l.length;e+=1)l[e].d(1);l.length=i.length}},d(n){kt(l,n),n&&s(t)}}}function gt(r){let t,i,l=r[1].get_and_cache("@id",r[9]["@id"])["d3f:d3fend-id"]+"",n,a,e,u,y=r[1].current_node["rdfs:label"]+"",v,T,D,c;return{c(){t=_("div"),i=_("span"),n=N(l),a=A(),e=_("span"),u=_("a"),v=N(y),c=A(),this.h()},l(p){t=h(p,"DIV",{class:!0});var E=m(t);i=h(E,"SPAN",{style:!0});var q=m(i);n=C(q,l),q.forEach(s),a=w(E),e=h(E,"SPAN",{});var b=m(e);u=h(b,"A",{href:!0,title:!0});var d=m(u);v=C(d,y),d.forEach(s),b.forEach(s),c=w(E),E.forEach(s),this.h()},h(){P(i,"width","5rem"),P(i,"display","inline-block"),K(u,"href",T="/technique/"+r[9]["@id"]),K(u,"title",D=r[1].get("@id",r[9]["@id"])["d3f:definition"]),K(t,"class","center")},m(p,E){g(p,t,E),o(t,i),o(i,n),o(t,a),o(t,e),o(e,u),o(u,v),o(t,c)},p:Z,d(p){p&&s(t)}}}function Dt(r){let t,i;function l(e,u){return e[6]?Ot:Vt}let a=l(r)(r);return{c(){t=_("tr"),a.c(),i=A()},l(e){t=h(e,"TR",{});var u=m(t);a.l(u),i=w(u),u.forEach(s)},m(e,u){g(e,t,u),a.m(t,null),o(t,i)},p(e,u){a.p(e,u)},d(e){e&&s(t),a.d()}}}function Lt(r){let t,i,l,n,a,e,u,y,v,T,D,c,p,E,q,b,d,I,R,F,H,O,$,U,x,tt,j,et,lt,G,st,it,z,at,rt;t=new Ft({props:{title:"ATT&CK Mitigations to D3FEND Mappings"}});function ct(f,S){return f[0]?Ht:Bt}let J=ct(r),B=J(r),L=r[1].get_by_type("d3f:ATTACKMitigation"),M=[];for(let f=0;f<L.length;f+=1)M[f]=Dt(Et(r,L,f));return{c(){Ct(t.$$.fragment),i=A(),l=_("section"),n=_("h1"),a=N("ATT&CK Mitigations to D3FEND Technique Mappings"),e=A(),u=_("p"),y=N(`The D3FEND team created this mapping in order to help users navigate between
    the two knowledgebases.`),v=A(),T=_("section"),D=_("div"),c=_("div"),p=_("div"),E=_("div"),B.c(),q=A(),b=_("button"),d=N("copy"),I=A(),R=_("table"),F=_("thead"),H=_("th"),O=N("ATT&CK ID"),$=A(),U=_("th"),x=N("ATT&CK Mitigation"),tt=A(),j=_("th"),et=N("Related D3FEND Techniques"),lt=A(),G=_("th"),st=N("Comment"),it=A();for(let f=0;f<M.length;f+=1)M[f].c();this.h()},l(f){It(t.$$.fragment,f),i=w(f),l=h(f,"SECTION",{class:!0});var S=m(l);n=h(S,"H1",{});var k=m(n);a=C(k,"ATT&CK Mitigations to D3FEND Technique Mappings"),k.forEach(s),e=w(S),u=h(S,"P",{});var X=m(u);y=C(X,`The D3FEND team created this mapping in order to help users navigate between
    the two knowledgebases.`),X.forEach(s),S.forEach(s),v=w(f),T=h(f,"SECTION",{});var ft=m(T);D=h(ft,"DIV",{class:!0});var dt=m(D);c=h(dt,"DIV",{class:!0});var ut=m(c);p=h(ut,"DIV",{class:!0});var Q=m(p);E=h(Q,"DIV",{class:!0});var W=m(E);B.l(W),q=w(W),b=h(W,"BUTTON",{});var _t=m(b);d=C(_t,"copy"),_t.forEach(s),W.forEach(s),I=w(Q),R=h(Q,"TABLE",{id:!0,class:!0});var Y=m(R);F=h(Y,"THEAD",{});var V=m(F);H=h(V,"TH",{});var ht=m(H);O=C(ht,"ATT&CK ID"),ht.forEach(s),$=w(V),U=h(V,"TH",{});var mt=m(U);x=C(mt,"ATT&CK Mitigation"),mt.forEach(s),tt=w(V),j=h(V,"TH",{});var pt=m(j);et=C(pt,"Related D3FEND Techniques"),pt.forEach(s),lt=w(V),G=h(V,"TH",{});var vt=m(G);st=C(vt,"Comment"),vt.forEach(s),V.forEach(s),it=w(Y);for(let nt=0;nt<M.length;nt+=1)M[nt].l(Y);Y.forEach(s),Q.forEach(s),ut.forEach(s),dt.forEach(s),ft.forEach(s),this.h()},h(){K(l,"class","content"),K(E,"class","text-right"),K(R,"id","mappings"),K(R,"class","table-auto"),K(p,"class","results-wrap"),K(c,"class","card stretch shrink center"),K(D,"class","")},m(f,S){Mt(t,f,S),g(f,i,S),g(f,l,S),o(l,n),o(n,a),o(l,e),o(l,u),o(u,y),g(f,v,S),g(f,T,S),o(T,D),o(D,c),o(c,p),o(p,E),B.m(E,null),o(E,q),o(E,b),o(b,d),o(p,I),o(p,R),o(R,F),o(F,H),o(H,O),o(F,$),o(F,U),o(U,x),o(F,tt),o(F,j),o(j,et),o(F,lt),o(F,G),o(G,st),o(R,it);for(let k=0;k<M.length;k+=1)M[k].m(R,null);z=!0,at||(rt=ot(b,"click",Pt),at=!0)},p(f,[S]){if(J===(J=ct(f))&&B?B.p(f,S):(B.d(1),B=J(f),B&&(B.c(),B.m(E,q))),S&2){L=f[1].get_by_type("d3f:ATTACKMitigation");let k;for(k=0;k<L.length;k+=1){const X=Et(f,L,k);M[k]?M[k].p(X,S):(M[k]=Dt(X),M[k].c(),M[k].m(R,null))}for(;k<M.length;k+=1)M[k].d(1);M.length=L.length}},i(f){z||(Kt(t.$$.fragment,f),z=!0)},o(f){St(t.$$.fragment,f),z=!1},d(f){qt(t,f),f&&s(i),f&&s(l),f&&s(v),f&&s(T),B.d(),kt(M,f),at=!1,rt()}}}async function Jt({fetch:r}){const t=await r("/api/mappings/attack-mitigations.json"),i=await t.json();return t.status===200?{props:{mitigations:i}}:{status:t.status,error:new Error(i.message)}}function Pt(){document.execCommand("copy")}function Ut(r,t,i){let{mitigations:l}=t,n=new Rt(l),a=!1;function e(){y("mappings")}function u(){window.getSelection().removeAllRanges(),i(0,a=!1)}function y(v){const T=window.getSelection();T.removeAllRanges();let D=document.getElementById(v);const c=document.createRange();c.selectNodeContents(D),T.addRange(c),i(0,a=!0)}return r.$$set=v=>{"mitigations"in v&&i(4,l=v.mitigations)},[a,n,e,u,l]}class Qt extends At{constructor(t){super(),wt(this,t,Ut,Lt,Nt,{mitigations:4})}}export{Qt as default,Jt as load};

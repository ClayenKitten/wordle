var at=Object.defineProperty;var ot=(r,e,s)=>e in r?at(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var ee=(r,e,s)=>(ot(r,typeof e!="symbol"?e+"":e,s),s);import{A as ct,s as ne,f as $,l as q,g as k,h as S,m as x,d,j as p,B as Se,i as V,x as w,C as _e,n as fe,y as ge,D as Te,a as A,c as M,E as pe,F as ve,G as nt,p as it,k as Ce,H as ut,I as ht,r as ft,u as _t,v as gt,w as dt,e as Fe,J as Be,K as mt}from"../chunks/scheduler.cbe34d34.js";import{S as ie,i as ae,a as b,g as de,c as me,t as C,b as L,d as R,m as G,e as F,f as wt,h as pt}from"../chunks/index.46be5f36.js";import{w as Ve}from"../chunks/index.8c839376.js";function te(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const vt=async({fetch:r})=>({list:(await(await r("list.txt")).text()).split(`
`)}),ls=Object.freeze(Object.defineProperty({__proto__:null,load:vt},Symbol.toStringTag,{value:"Module"})),ue=class ue{constructor(e,s){ee(this,"wordList");ee(this,"answer");ee(this,"words");ee(this,"_result",Ve(void 0));ee(this,"_highlights");ee(this,"cells_store");this.answer=(s||e[Math.floor(Math.random()*e.length)]).toUpperCase(),this.wordList=new Set(e),this.words=[""],this._highlights=Ve(new Map),this.cells_store=Ve([])}get cells(){return this.cells_store}get highlights(){return this._highlights}get result(){return this._result}insert(e){return this.is_completed||this.is_row_full?!1:(this.current_row+=e,this.cells_store.update(s=>(s.push({char:e,highlight:void 0}),s)),!0)}confirm(){if(this.is_completed)return"completed";if(!this.is_row_full)return"not_enough_letters";if(!this.wordList.has(this.current_row.toLowerCase()))return"not_in_list";for(let e=0;e<ue.wordSize;e++){let s=this.answer[e],t=this.current_row[e];this.cells_store.update(l=>{let n=l[ue.wordSize*(this.words.length-1)+e];return s==t?n.highlight="correct":this.answer.includes(t)?n.highlight="missed":n.highlight="wrong",l}),this._highlights.update(l=>(s==t?l.set(t,"correct"):this.answer.includes(t)?l.get(t)!=="correct"&&l.set(t,"missed"):l.set(t,"wrong"),l))}return this.current_row===this.answer?this._result.set("won"):this.words.length===ue.attemptNumber?this._result.set("lost"):this.words.push(""),"ok"}backspace(){return this.is_completed||this.is_row_empty?!1:(this.current_row=this.current_row.slice(0,-1),this.cells_store.update(e=>(e.pop(),e)),!0)}get is_completed(){return ct(this._result)!==void 0}get is_row_full(){return this.current_row.length===ue.wordSize}get is_row_empty(){return this.current_row.length===0}get current_row(){return this.words[this.words.length-1]}set current_row(e){this.words[this.words.length-1]=e}};ee(ue,"wordSize",5),ee(ue,"attemptNumber",6);let re=ue;function bt(r){let e,s=r[0].char+"",t,l,n,i;return{c(){e=$("button"),t=q(s),this.h()},l(o){e=k(o,"BUTTON",{class:!0});var a=S(e);t=x(a,s),a.forEach(d),this.h()},h(){p(e,"class",l=Se(r[1]?r[1]:"")+" svelte-1t72e3x")},m(o,a){V(o,e,a),w(e,t),n||(i=_e(e,"click",r[2]),n=!0)},p(o,[a]){a&1&&s!==(s=o[0].char+"")&&fe(t,s),a&2&&l!==(l=Se(o[1]?o[1]:"")+" svelte-1t72e3x")&&p(e,"class",l)},i:ge,o:ge,d(o){o&&d(e),n=!1,i()}}}function $t(r,e,s){let{key:t}=e,{highlight:l}=e;const n=Te();function i(){n("insert",t.char)}return r.$$set=o=>{"key"in o&&s(0,t=o.key),"highlight"in o&&s(1,l=o.highlight)},[t,l,i]}class Ae extends ie{constructor(e){super(),ae(this,e,$t,bt,ne,{key:0,highlight:1})}}function Je(r,e,s){const t=r.slice();return t[8]=e[s],t}function Ze(r,e,s){const t=r.slice();return t[8]=e[s],t}function Qe(r,e,s){const t=r.slice();return t[8]=e[s],t}function Xe(r){let e,s;return e=new Ae({props:{highlight:r[0].get(r[8]),key:{char:r[8]}}}),e.$on("insert",r[4]),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){G(e,t,l),s=!0},p(t,l){const n={};l&1&&(n.highlight=t[0].get(t[8])),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Ye(r){let e,s;return e=new Ae({props:{highlight:r[0].get(r[8]),key:{char:r[8]}}}),e.$on("insert",r[4]),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){G(e,t,l),s=!0},p(t,l){const n={};l&1&&(n.highlight=t[0].get(t[8])),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function qe(r){let e,s;return e=new Ae({props:{highlight:r[0].get(r[8]),key:{char:r[8]}}}),e.$on("insert",r[4]),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){G(e,t,l),s=!0},p(t,l){const n={};l&1&&(n.highlight=t[0].get(t[8])),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function kt(r){let e,s,t,l,n,i,o,a="Enter",u,f,m,Z="⌫",D,_,j,I,T=te("QWERTYUIOP"),v=[];for(let h=0;h<T.length;h+=1)v[h]=Xe(Qe(r,T,h));const H=h=>C(v[h],1,1,()=>{v[h]=null});let Q=te("ASDFGHJKL"),E=[];for(let h=0;h<Q.length;h+=1)E[h]=Ye(Ze(r,Q,h));const X=h=>C(E[h],1,1,()=>{E[h]=null});let K=te("ZXCVBNM"),y=[];for(let h=0;h<K.length;h+=1)y[h]=qe(Je(r,K,h));const N=h=>C(y[h],1,1,()=>{y[h]=null});return{c(){e=$("div"),s=$("div");for(let h=0;h<v.length;h+=1)v[h].c();t=A(),l=$("div");for(let h=0;h<E.length;h+=1)E[h].c();n=A(),i=$("div"),o=$("button"),o.textContent=a,u=A();for(let h=0;h<y.length;h+=1)y[h].c();f=A(),m=$("button"),D=q(Z),this.h()},l(h){e=k(h,"DIV",{id:!0,class:!0});var g=S(e);s=k(g,"DIV",{class:!0});var c=S(s);for(let O=0;O<v.length;O+=1)v[O].l(c);c.forEach(d),t=M(g),l=k(g,"DIV",{class:!0});var P=S(l);for(let O=0;O<E.length;O+=1)E[O].l(P);P.forEach(d),n=M(g),i=k(g,"DIV",{class:!0});var W=S(i);o=k(W,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),pe(o)!=="svelte-33ru7o"&&(o.textContent=a),u=M(W);for(let O=0;O<y.length;O+=1)y[O].l(W);f=M(W),m=k(W,"BUTTON",{id:!0,class:!0});var se=S(m);D=x(se,Z),se.forEach(d),W.forEach(d),g.forEach(d),this.h()},h(){p(s,"class","row svelte-13rw94d"),p(l,"class","row svelte-13rw94d"),p(o,"id","enter-key"),p(o,"class","svelte-13rw94d"),p(m,"id","delete-key"),p(m,"class","svelte-13rw94d"),p(i,"class","row svelte-13rw94d"),p(e,"id","keyboard"),p(e,"class","svelte-13rw94d")},m(h,g){V(h,e,g),w(e,s);for(let c=0;c<v.length;c+=1)v[c]&&v[c].m(s,null);w(e,t),w(e,l);for(let c=0;c<E.length;c+=1)E[c]&&E[c].m(l,null);w(e,n),w(e,i),w(i,o),w(i,u);for(let c=0;c<y.length;c+=1)y[c]&&y[c].m(i,null);w(i,f),w(i,m),w(m,D),r[6](e),_=!0,j||(I=[_e(window,"keydown",r[5]),_e(o,"click",r[2]),_e(m,"click",r[3])],j=!0)},p(h,[g]){if(g&17){T=te("QWERTYUIOP");let c;for(c=0;c<T.length;c+=1){const P=Qe(h,T,c);v[c]?(v[c].p(P,g),b(v[c],1)):(v[c]=Xe(P),v[c].c(),b(v[c],1),v[c].m(s,null))}for(de(),c=T.length;c<v.length;c+=1)H(c);me()}if(g&17){Q=te("ASDFGHJKL");let c;for(c=0;c<Q.length;c+=1){const P=Ze(h,Q,c);E[c]?(E[c].p(P,g),b(E[c],1)):(E[c]=Ye(P),E[c].c(),b(E[c],1),E[c].m(l,null))}for(de(),c=Q.length;c<E.length;c+=1)X(c);me()}if(g&17){K=te("ZXCVBNM");let c;for(c=0;c<K.length;c+=1){const P=Je(h,K,c);y[c]?(y[c].p(P,g),b(y[c],1)):(y[c]=qe(P),y[c].c(),b(y[c],1),y[c].m(i,f))}for(de(),c=K.length;c<y.length;c+=1)N(c);me()}},i(h){if(!_){for(let g=0;g<T.length;g+=1)b(v[g]);for(let g=0;g<Q.length;g+=1)b(E[g]);for(let g=0;g<K.length;g+=1)b(y[g]);_=!0}},o(h){v=v.filter(Boolean);for(let g=0;g<v.length;g+=1)C(v[g]);E=E.filter(Boolean);for(let g=0;g<E.length;g+=1)C(E[g]);y=y.filter(Boolean);for(let g=0;g<y.length;g+=1)C(y[g]);_=!1},d(h){h&&d(e),ve(v,h),ve(E,h),ve(y,h),r[6](null),j=!1,nt(I)}}}function yt(r){return/^[a-zA-Z]$/.test(r)}function jt(r,e,s){let{highlights:t}=e;const l=Te();let n;const i=()=>l("confirm"),o=()=>l("backspace"),a=m=>{l("insert",m.detail)},u=m=>{yt(m.key)?l("insert",m.key.toUpperCase()):m.key=="Enter"?(m.preventDefault(),l("confirm")):m.key==="Backspace"&&l("backspace")};function f(m){it[m?"unshift":"push"](()=>{n=m,s(1,n)})}return r.$$set=m=>{"highlights"in m&&s(0,t=m.highlights)},[t,n,i,o,a,u,f]}class Et extends ie{constructor(e){super(),ae(this,e,jt,kt,ne,{highlights:0})}}function xe(r){let e=r[0].char+"",s;return{c(){s=q(e)},l(t){s=x(t,e)},m(t,l){V(t,s,l)},p(t,l){l&1&&e!==(e=t[0].char+"")&&fe(s,e)},d(t){t&&d(s)}}}function Ct(r){let e,s,t=r[0]&&xe(r);return{c(){e=$("div"),t&&t.c(),this.h()},l(l){e=k(l,"DIV",{class:!0});var n=S(e);t&&t.l(n),n.forEach(d),this.h()},h(){p(e,"class",s=Se(r[1])+" svelte-1rxeahe")},m(l,n){V(l,e,n),t&&t.m(e,null)},p(l,[n]){l[0]?t?t.p(l,n):(t=xe(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&2&&s!==(s=Se(l[1])+" svelte-1rxeahe")&&p(e,"class",s)},i:ge,o:ge,d(l){l&&d(e),t&&t.d()}}}function St(r,e,s){let t,{cell:l}=e;return r.$$set=n=>{"cell"in n&&s(0,l=n.cell)},r.$$.update=()=>{r.$$.dirty&1&&s(1,t=l&&l.highlight?`cell ${l.highlight}`:"cell")},[l,t]}class Dt extends ie{constructor(e){super(),ae(this,e,St,Ct,ne,{cell:0})}}function et(r,e,s){const t=r.slice();return t[5]=e[s],t[7]=s,t}function tt(r){let e,s;return e=new Dt({props:{cell:r[3](r[0],r[7],r[2])}}),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){G(e,t,l),s=!0},p(t,l){const n={};l&5&&(n.cell=t[3](t[0],t[7],t[2])),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function It(r){let e,s,t,l,n=te({length:r[1].row*r[1].col}),i=[];for(let a=0;a<n.length;a+=1)i[a]=tt(et(r,n,a));const o=a=>C(i[a],1,1,()=>{i[a]=null});return{c(){e=$("div");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=k(a,"DIV",{id:!0,class:!0});var u=S(e);for(let f=0;f<i.length;f+=1)i[f].l(u);u.forEach(d),this.h()},h(){p(e,"id","grid"),p(e,"class","svelte-1to4j51"),Ce(e,"--row-number",r[1].row),Ce(e,"--col-number",r[1].col)},m(a,u){V(a,e,u);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(e,null);s=!0,t||(l=_e(e,"click",r[4]),t=!0)},p(a,[u]){if(u&15){n=te({length:a[1].row*a[1].col});let f;for(f=0;f<n.length;f+=1){const m=et(a,n,f);i[f]?(i[f].p(m,u),b(i[f],1)):(i[f]=tt(m),i[f].c(),b(i[f],1),i[f].m(e,null))}for(de(),f=n.length;f<i.length;f+=1)o(f);me()}u&2&&Ce(e,"--row-number",a[1].row),u&2&&Ce(e,"--col-number",a[1].col)},i(a){if(!s){for(let u=0;u<n.length;u+=1)b(i[u]);s=!0}},o(a){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)C(i[u]);s=!1},d(a){a&&d(e),ve(i,a),t=!1,l()}}}function Nt(r,e,s){let{cells:t}=e,{size:l}=e,{hide_letters:n=!1}=e;const i=(a,u,f)=>{let m=a.at(u);return m&&f?{char:"",highlight:m.highlight}:m};function o(a){ut.call(this,r,a)}return r.$$set=a=>{"cells"in a&&s(0,t=a.cells),"size"in a&&s(1,l=a.size),"hide_letters"in a&&s(2,n=a.hide_letters)},[t,l,n,i,o]}class Me extends ie{constructor(e){super(),ae(this,e,Nt,It,ne,{cells:0,size:1,hide_letters:2})}}function zt(r,{delay:e=0,duration:s=400,easing:t=ht}={}){const l=+getComputedStyle(r).opacity;return{delay:e,duration:s,easing:t,css:n=>`opacity: ${n*l}`}}function st(r,e,s){const t=r.slice();return t[2]=e[s],t}function lt(r){let e,s=r[2]+"",t,l,n;return{c(){e=$("div"),t=q(s),this.h()},l(i){e=k(i,"DIV",{class:!0});var o=S(e);t=x(o,s),o.forEach(d),this.h()},h(){p(e,"class","message svelte-1u39b2m")},m(i,o){V(i,e,o),w(e,t),n=!0},p(i,o){(!n||o&1)&&s!==(s=i[2]+"")&&fe(t,s)},i(i){n||(l&&l.end(1),n=!0)},o(i){i&&(l=wt(e,zt,{})),n=!1},d(i){i&&d(e),i&&l&&l.end()}}}function Bt(r){let e,s,t=te(r[0]),l=[];for(let i=0;i<t.length;i+=1)l[i]=lt(st(r,t,i));const n=i=>C(l[i],1,1,()=>{l[i]=null});return{c(){e=$("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=k(i,"DIV",{class:!0});var o=S(e);for(let a=0;a<l.length;a+=1)l[a].l(o);o.forEach(d),this.h()},h(){p(e,"class","message-wrapper svelte-1u39b2m")},m(i,o){V(i,e,o);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(e,null);s=!0},p(i,[o]){if(o&1){t=te(i[0]);let a;for(a=0;a<t.length;a+=1){const u=st(i,t,a);l[a]?(l[a].p(u,o),b(l[a],1)):(l[a]=lt(u),l[a].c(),b(l[a],1),l[a].m(e,null))}for(de(),a=t.length;a<l.length;a+=1)n(a);me()}},i(i){if(!s){for(let o=0;o<t.length;o+=1)b(l[o]);s=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)C(l[o]);s=!1},d(i){i&&d(e),ve(l,i)}}}function Vt(r,e,s){let t=[];return[t,n=>{t.push(n),s(0,t),setTimeout(()=>{t.splice(0,1),s(0,t)},1e3)}]}class Tt extends ie{constructor(e){super(),ae(this,e,Vt,Bt,ne,{add_message:1})}get add_message(){return this.$$.ctx[1]}}function At(r){let e,s;const t=r[1].default,l=ft(t,r,r[0],null);return{c(){e=$("h1"),l&&l.c(),this.h()},l(n){e=k(n,"H1",{class:!0});var i=S(e);l&&l.l(i),i.forEach(d),this.h()},h(){p(e,"class","svelte-zldl3x")},m(n,i){V(n,e,i),l&&l.m(e,null),s=!0},p(n,[i]){l&&l.p&&(!s||i&1)&&_t(l,t,n,n[0],s?dt(t,n[0],i,null):gt(n[0]),null)},i(n){s||(b(l,n),s=!0)},o(n){C(l,n),s=!1},d(n){n&&d(e),l&&l.d(n)}}}function Mt(r,e,s){let{$$slots:t={},$$scope:l}=e;return r.$$set=n=>{"$$scope"in n&&s(0,l=n.$$scope)},[l,t]}class Oe extends ie{constructor(e){super(),ae(this,e,Mt,At,ne,{})}}function Ot(r){let e;return{c(){e=q("The answer was:")},l(s){e=x(s,"The answer was:")},m(s,t){V(s,e,t)},d(s){s&&d(e)}}}function Kt(r){let e,s,t,l,n;return s=new Oe({props:{$$slots:{default:[Ot]},$$scope:{ctx:r}}}),l=new Me({props:{cells:r[0],size:{row:1,col:re.wordSize}}}),{c(){e=$("section"),L(s.$$.fragment),t=A(),L(l.$$.fragment),this.h()},l(i){e=k(i,"SECTION",{class:!0});var o=S(e);R(s.$$.fragment,o),t=M(o),R(l.$$.fragment,o),o.forEach(d),this.h()},h(){p(e,"class","svelte-i1me8f")},m(i,o){V(i,e,o),G(s,e,null),w(e,t),G(l,e,null),n=!0},p(i,[o]){const a={};o&4&&(a.$$scope={dirty:o,ctx:i}),s.$set(a);const u={};o&1&&(u.cells=i[0]),l.$set(u)},i(i){n||(b(s.$$.fragment,i),b(l.$$.fragment,i),n=!0)},o(i){C(s.$$.fragment,i),C(l.$$.fragment,i),n=!1},d(i){i&&d(e),F(s),F(l)}}}function Pt(r,e,s){let{answer:t}=e,l;return r.$$set=n=>{"answer"in n&&s(1,t=n.answer)},r.$$.update=()=>{r.$$.dirty&2&&s(0,l=[{char:t.at(0),highlight:"correct"},{char:t.at(1),highlight:"correct"},{char:t.at(2),highlight:"correct"},{char:t.at(3),highlight:"correct"},{char:t.at(4),highlight:"correct"}])},[l,t]}class Wt extends ie{constructor(e){super(),ae(this,e,Pt,Kt,ne,{answer:1})}}function Ut(r){let e;return{c(){e=q("Success!")},l(s){e=x(s,"Success!")},m(s,t){V(s,e,t)},d(s){s&&d(e)}}}function Ht(r){let e;return{c(){e=q("Maybe another time!")},l(s){e=x(s,"Maybe another time!")},m(s,t){V(s,e,t)},d(s){s&&d(e)}}}function Lt(r){let e;function s(n,i){return n[2]=="lost"?Ht:Ut}let t=s(r),l=t(r);return{c(){l.c(),e=Fe()},l(n){l.l(n),e=Fe()},m(n,i){l.m(n,i),V(n,e,i)},p(n,i){t!==(t=s(n))&&(l.d(1),l=t(n),l&&(l.c(),l.m(e.parentNode,e)))},d(n){n&&d(e),l.d(n)}}}function rt(r){let e,s;return e=new Wt({props:{answer:r[1]}}),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){G(e,t,l),s=!0},p(t,l){const n={};l&2&&(n.answer=t[1]),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Rt(r){let e,s,t,l,n,i,o,a=r[3].played+"",u,f,m,Z="Played",D,_,j,I=r[3].win_percent+"",T,v,H,Q="Win %",E,X,K,y=r[3].current_streak+"",N,h,g,c="Current Streak",P,W,se,O=r[3].max_streak+"",be,De,he,Ke="Max Streak",Ie,le,Ne,$e,we,oe,Pe="New Game",ce,ze,We;t=new Oe({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),le=new Me({props:{cells:r[0],size:r[6],hide_letters:r[4]}}),le.$on("click",r[8]);let B=r[2]=="lost"&&rt(r);return{c(){e=$("dialog"),s=$("div"),L(t.$$.fragment),l=A(),n=$("div"),i=$("div"),o=$("b"),u=q(a),f=A(),m=$("span"),m.textContent=Z,D=A(),_=$("div"),j=$("b"),T=q(I),v=A(),H=$("span"),H.textContent=Q,E=A(),X=$("div"),K=$("b"),N=q(y),h=A(),g=$("span"),g.textContent=c,P=A(),W=$("div"),se=$("b"),be=q(O),De=A(),he=$("span"),he.textContent=Ke,Ie=A(),L(le.$$.fragment),Ne=A(),B&&B.c(),$e=A(),we=$("div"),oe=$("button"),oe.textContent=Pe,this.h()},l(z){e=k(z,"DIALOG",{class:!0});var U=S(e);s=k(U,"DIV",{class:!0});var J=S(s);R(t.$$.fragment,J),l=M(J),n=k(J,"DIV",{class:!0});var Y=S(n);i=k(Y,"DIV",{class:!0});var ke=S(i);o=k(ke,"B",{class:!0});var Ue=S(o);u=x(Ue,a),Ue.forEach(d),f=M(ke),m=k(ke,"SPAN",{class:!0,"data-svelte-h":!0}),pe(m)!=="svelte-c5nadx"&&(m.textContent=Z),ke.forEach(d),D=M(Y),_=k(Y,"DIV",{class:!0});var ye=S(_);j=k(ye,"B",{class:!0});var He=S(j);T=x(He,I),He.forEach(d),v=M(ye),H=k(ye,"SPAN",{class:!0,"data-svelte-h":!0}),pe(H)!=="svelte-1u867d5"&&(H.textContent=Q),ye.forEach(d),E=M(Y),X=k(Y,"DIV",{class:!0});var je=S(X);K=k(je,"B",{class:!0});var Le=S(K);N=x(Le,y),Le.forEach(d),h=M(je),g=k(je,"SPAN",{class:!0,"data-svelte-h":!0}),pe(g)!=="svelte-c68e1r"&&(g.textContent=c),je.forEach(d),P=M(Y),W=k(Y,"DIV",{class:!0});var Ee=S(W);se=k(Ee,"B",{class:!0});var Re=S(se);be=x(Re,O),Re.forEach(d),De=M(Ee),he=k(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),pe(he)!=="svelte-1fsj3mu"&&(he.textContent=Ke),Ee.forEach(d),Y.forEach(d),Ie=M(J),R(le.$$.fragment,J),Ne=M(J),B&&B.l(J),$e=M(J),we=k(J,"DIV",{class:!0});var Ge=S(we);oe=k(Ge,"BUTTON",{class:!0,"data-svelte-h":!0}),pe(oe)!=="svelte-fyos2h"&&(oe.textContent=Pe),Ge.forEach(d),J.forEach(d),U.forEach(d),this.h()},h(){p(o,"class","svelte-1jwb3j5"),p(m,"class","svelte-1jwb3j5"),p(i,"class","svelte-1jwb3j5"),p(j,"class","svelte-1jwb3j5"),p(H,"class","svelte-1jwb3j5"),p(_,"class","svelte-1jwb3j5"),p(K,"class","svelte-1jwb3j5"),p(g,"class","svelte-1jwb3j5"),p(X,"class","svelte-1jwb3j5"),p(se,"class","svelte-1jwb3j5"),p(he,"class","svelte-1jwb3j5"),p(W,"class","svelte-1jwb3j5"),p(n,"class","stats svelte-1jwb3j5"),p(oe,"class","svelte-1jwb3j5"),p(we,"class","buttons svelte-1jwb3j5"),p(s,"class","svelte-1jwb3j5"),p(e,"class","modal svelte-1jwb3j5")},m(z,U){V(z,e,U),w(e,s),G(t,s,null),w(s,l),w(s,n),w(n,i),w(i,o),w(o,u),w(i,f),w(i,m),w(n,D),w(n,_),w(_,j),w(j,T),w(_,v),w(_,H),w(n,E),w(n,X),w(X,K),w(K,N),w(X,h),w(X,g),w(n,P),w(n,W),w(W,se),w(se,be),w(W,De),w(W,he),w(s,Ie),G(le,s,null),w(s,Ne),B&&B.m(s,null),w(s,$e),w(s,we),w(we,oe),ce=!0,ze||(We=[_e(window,"keypress",r[7]),_e(oe,"click",r[9])],ze=!0)},p(z,[U]){const J={};U&1028&&(J.$$scope={dirty:U,ctx:z}),t.$set(J),(!ce||U&8)&&a!==(a=z[3].played+"")&&fe(u,a),(!ce||U&8)&&I!==(I=z[3].win_percent+"")&&fe(T,I),(!ce||U&8)&&y!==(y=z[3].current_streak+"")&&fe(N,y),(!ce||U&8)&&O!==(O=z[3].max_streak+"")&&fe(be,O);const Y={};U&1&&(Y.cells=z[0]),U&16&&(Y.hide_letters=z[4]),le.$set(Y),z[2]=="lost"?B?(B.p(z,U),U&4&&b(B,1)):(B=rt(z),B.c(),b(B,1),B.m(s,$e)):B&&(de(),C(B,1,1,()=>{B=null}),me())},i(z){ce||(b(t.$$.fragment,z),b(le.$$.fragment,z),b(B),ce=!0)},o(z){C(t.$$.fragment,z),C(le.$$.fragment,z),C(B),ce=!1},d(z){z&&d(e),F(t),F(le),B&&B.d(),ze=!1,nt(We)}}}function Gt(r,e,s){let{cells:t}=e,{answer:l}=e,{result:n}=e,{stats:i}=e,o=Te();const a={row:re.attemptNumber,col:re.wordSize};let u=!0;const f=D=>{D.repeat||D.key==" "&&s(4,u=!u)},m=()=>s(4,u=!u),Z=()=>o("try_again");return r.$$set=D=>{"cells"in D&&s(0,t=D.cells),"answer"in D&&s(1,l=D.answer),"result"in D&&s(2,n=D.result),"stats"in D&&s(3,i=D.stats)},[t,l,n,i,u,o,a,f,m,Z]}class Ft extends ie{constructor(e){super(),ae(this,e,Gt,Rt,ne,{cells:0,answer:1,result:2,stats:3})}}class Jt{constructor(){ee(this,"games",[])}add_result(e){this.games.push(e==="won")}get played(){return this.games.length}get win_percent(){return Math.round(100*this.wins/this.played)}get wins(){let e=0;for(let s=0;s<this.games.length;s++)this.games[s]&&(e+=1);return e}get current_streak(){let e=0;for(let s=this.games.length-1;s>=0&&this.games[s];s--)e+=1;return e}get max_streak(){let e=0,s=0;for(let t=0;t<this.games.length;t++)this.games[t]?(s+=1,e=Math.max(s,e)):s=0;return e}}function Zt(r){let e,s,t,l,n,i,o,a,u,f,m;s=new Oe({props:{$$slots:{default:[Xt]},$$scope:{ctx:r}}}),n=new Me({props:{cells:r[7],size:r[11]}}),o=new Et({props:{highlights:r[8]}}),o.$on("insert",r[13]),o.$on("confirm",r[9]),o.$on("backspace",r[14]);function Z(_){r[15](_)}let D={};return r[3]!==void 0&&(D.add_message=r[3]),u=new Tt({props:D}),it.push(()=>pt(u,"add_message",Z)),{c(){e=$("header"),L(s.$$.fragment),t=A(),l=$("main"),L(n.$$.fragment),i=A(),L(o.$$.fragment),a=A(),L(u.$$.fragment),this.h()},l(_){e=k(_,"HEADER",{class:!0});var j=S(e);R(s.$$.fragment,j),j.forEach(d),t=M(_),l=k(_,"MAIN",{class:!0});var I=S(l);R(n.$$.fragment,I),i=M(I),R(o.$$.fragment,I),I.forEach(d),a=M(_),R(u.$$.fragment,_),this.h()},h(){p(e,"class","svelte-vtibxp"),p(l,"class","svelte-vtibxp")},m(_,j){V(_,e,j),G(s,e,null),V(_,t,j),V(_,l,j),G(n,l,null),w(l,i),G(o,l,null),V(_,a,j),G(u,_,j),m=!0},p(_,j){const I={};j&65536&&(I.$$scope={dirty:j,ctx:_}),s.$set(I);const T={};j&128&&(T.cells=_[7]),n.$set(T);const v={};j&256&&(v.highlights=_[8]),o.$set(v);const H={};!f&&j&8&&(f=!0,H.add_message=_[3],mt(()=>f=!1)),u.$set(H)},i(_){m||(b(s.$$.fragment,_),b(n.$$.fragment,_),b(o.$$.fragment,_),b(u.$$.fragment,_),m=!0)},o(_){C(s.$$.fragment,_),C(n.$$.fragment,_),C(o.$$.fragment,_),C(u.$$.fragment,_),m=!1},d(_){_&&(d(e),d(t),d(l),d(a)),F(s),F(n),F(o),F(u,_)}}}function Qt(r){let e,s;return e=new Ft({props:{result:r[2],cells:r[7],answer:r[0].answer,stats:r[1]}}),e.$on("try_again",r[10]),{c(){L(e.$$.fragment)},l(t){R(e.$$.fragment,t)},m(t,l){G(e,t,l),s=!0},p(t,l){const n={};l&4&&(n.result=t[2]),l&128&&(n.cells=t[7]),l&1&&(n.answer=t[0].answer),l&2&&(n.stats=t[1]),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){F(e,t)}}}function Xt(r){let e;return{c(){e=q("WordleSvelte")},l(s){e=x(s,"WordleSvelte")},m(s,t){V(s,e,t)},d(s){s&&d(e)}}}function Yt(r){let e,s,t,l;const n=[Qt,Zt],i=[];function o(a,u){return a[2]?0:1}return s=o(r),t=i[s]=n[s](r),{c(){e=$("div"),t.c(),this.h()},l(a){e=k(a,"DIV",{id:!0,class:!0});var u=S(e);t.l(u),u.forEach(d),this.h()},h(){p(e,"id","wrapper"),p(e,"class","svelte-vtibxp")},m(a,u){V(a,e,u),i[s].m(e,null),l=!0},p(a,[u]){let f=s;s=o(a),s===f?i[s].p(a,u):(de(),C(i[f],1,1,()=>{i[f]=null}),me(),t=i[s],t?t.p(a,u):(t=i[s]=n[s](a),t.c()),b(t,1),t.m(e,null))},i(a){l||(b(t),l=!0)},o(a){C(t),l=!1},d(a){a&&d(e),i[s].d()}}}function qt(r,e,s){let t,l,n,i,o=ge,a=()=>(o(),o=Be(n,N=>s(2,i=N)),n),u,f=ge,m=()=>(f(),f=Be(t,N=>s(7,u=N)),t),Z,D=ge,_=()=>(D(),D=Be(l,N=>s(8,Z=N)),l);r.$$.on_destroy.push(()=>o()),r.$$.on_destroy.push(()=>f()),r.$$.on_destroy.push(()=>D());let{data:j}=e,I=new re(j.list),T=new Jt,v;const H=()=>{let N=I.confirm();N=="ok"||N=="completed"||v&&(N=="not_in_list"?v("Not in word list"):N=="not_enough_letters"&&v("Not enough letters"))},Q=()=>{s(3,v=void 0),s(0,I=new re(j.list))},E={row:re.attemptNumber,col:re.wordSize},X=N=>I.insert(N.detail),K=()=>I.backspace();function y(N){v=N,s(3,v)}return r.$$set=N=>{"data"in N&&s(12,j=N.data)},r.$$.update=()=>{r.$$.dirty&1&&m(s(6,t=I.cells)),r.$$.dirty&1&&_(s(5,l=I.highlights)),r.$$.dirty&1&&a(s(4,n=I.result)),r.$$.dirty&6&&i!==void 0&&(T.add_result(i),s(1,T),s(2,i))},[I,T,i,v,n,l,t,u,Z,H,Q,E,j,X,K,y]}class rs extends ie{constructor(e){super(),ae(this,e,qt,Yt,ne,{data:12})}}export{rs as component,ls as universal};
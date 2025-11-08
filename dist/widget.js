(function(){"use strict";var Gp,Qp;var Ac=document.createElement("style");Ac.textContent=`*{margin:0;padding:0;box-sizing:border-box}#framer-survey-widget{position:fixed;z-index:999999;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.feedback-button{position:fixed;padding:12px 24px;background:#06f;color:#fff;border:none;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px #00000026;transition:all .3s ease;z-index:999998}.feedback-button:hover{transform:translateY(-2px);box-shadow:0 6px 16px #0003}.feedback-button:active{transform:translateY(0)}.survey-modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:999999;padding:20px}.survey-modal{background:#fff;border-radius:12px;max-width:600px;width:100%;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px #0000004d;animation:slideUp .3s ease}@keyframes slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.survey-header{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid #e0e0e0}.survey-header h2{font-size:20px;font-weight:600;color:#333;margin:0}.close-button{background:transparent;border:none;font-size:24px;color:#999;cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:6px;transition:all .2s}.close-button:hover{background:#f0f0f0;color:#333}.survey-form{padding:24px}.question-section{margin-bottom:24px}.question-label{display:block;font-size:15px;font-weight:600;color:#333;margin-bottom:12px}.options{display:flex;flex-direction:column;gap:10px}.option-label{display:flex;align-items:center;gap:10px;padding:12px;border:1px solid #e0e0e0;border-radius:8px;cursor:pointer;transition:all .2s}.option-label:hover{background:#f8f9fa;border-color:#06f}.option-label input[type=radio]{width:18px;height:18px;cursor:pointer}.option-label span{flex:1;font-size:14px;color:#333}textarea{width:100%;padding:12px;border:1px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:inherit;resize:vertical}textarea:focus{outline:none;border-color:#06f;box-shadow:0 0 0 2px #0066ff1a}.rating{display:flex;gap:8px}.rating-button{background:transparent;border:2px solid #e0e0e0;border-radius:8px;padding:12px;font-size:24px;cursor:pointer;transition:all .2s}.rating-button:hover{border-color:#06f;transform:scale(1.1)}.rating-button.active{border-color:#06f;background:#0066ff1a}.form-actions{display:flex;gap:12px;justify-content:flex-end;padding-top:20px;border-top:1px solid #e0e0e0;margin-top:24px}.framer-button-primary{background:#06f;border:none;color:#fff;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all .2s}.framer-button-primary:hover{background:#0052cc}.framer-button-primary:disabled{opacity:.5;cursor:not-allowed}.framer-button-secondary{background:#f0f0f0;border:1px solid #ddd;color:#333;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all .2s}.framer-button-secondary:hover{background:#e0e0e0}.loading,.error{padding:40px;text-align:center}.spinner{width:40px;height:40px;border:4px solid #f0f0f0;border-top-color:#06f;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 16px}@keyframes spin{to{transform:rotate(360deg)}}.error p{color:#c33;margin-bottom:16px}.success-message{padding:40px;text-align:center}.success-icon{width:60px;height:60px;border-radius:50%;background:#4caf50;color:#fff;display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:700;margin:0 auto 20px}.success-message h3{font-size:20px;font-weight:600;color:#333;margin-bottom:12px}.success-message p{color:#666;margin-bottom:24px}
/*$vite$:1*/`,document.head.appendChild(Ac);/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Te={},cr=[],Pt=()=>{},bc=()=>!1,si=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ko=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jg=Object.prototype.hasOwnProperty,ye=(t,e)=>jg.call(t,e),ne=Array.isArray,ur=t=>Gr(t)==="[object Map]",Rc=t=>Gr(t)==="[object Set]",Sc=t=>Gr(t)==="[object Date]",ie=t=>typeof t=="function",Ce=t=>typeof t=="string",Ct=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",Pc=t=>(we(t)||ie(t))&&ie(t.then)&&ie(t.catch),Cc=Object.prototype.toString,Gr=t=>Cc.call(t),$g=t=>Gr(t).slice(8,-1),kc=t=>Gr(t)==="[object Object]",Qo=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qr=Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ii=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},qg=/-\w/g,fn=ii(t=>t.replace(qg,e=>e.slice(1).toUpperCase())),Hg=/\B([A-Z])/g,Un=ii(t=>t.replace(Hg,"-$1").toLowerCase()),Vc=ii(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yo=ii(t=>t?`on${Vc(t)}`:""),dn=(t,e)=>!Object.is(t,e),oi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Dc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let xc;const ai=()=>xc||(xc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function li(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ce(r)?Gg(r):li(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ce(t)||we(t))return t}const zg=/;(?![^(]*\))/g,Wg=/:([^]+)/,Kg=/\/\*[^]*?\*\//g;function Gg(t){const e={};return t.replace(Kg,"").split(zg).forEach(n=>{if(n){const r=n.split(Wg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ci(t){let e="";if(Ce(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const r=ci(t[n]);r&&(e+=r+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Qg=Wo("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function Nc(t){return!!t||t===""}function Yg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ui(t[r],e[r]);return n}function ui(t,e){if(t===e)return!0;let n=Sc(t),r=Sc(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ct(t),r=Ct(e),n||r)return t===e;if(n=ne(t),r=ne(e),n||r)return n&&r?Yg(t,e):!1;if(n=we(t),r=we(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!ui(t[a],e[a]))return!1}}return String(t)===String(e)}const Oc=t=>!!(t&&t.__v_isRef===!0),pn=t=>Ce(t)?t:t==null?"":ne(t)||we(t)&&(t.toString===Cc||!ie(t.toString))?Oc(t)?pn(t.value):JSON.stringify(t,Mc,2):String(t),Mc=(t,e)=>Oc(e)?Mc(t,e.value):ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Xo(r,i)+" =>"]=s,n),{})}:Rc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xo(n))}:Ct(e)?Xo(e):we(e)&&!ne(e)&&!kc(e)?String(e):e,Xo=(t,e="")=>{var n;return Ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class Jg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ut,!e&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){++this._on===1&&(this.prevScope=ut,ut=this)}off(){this._on>0&&--this._on===0&&(ut=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xg(){return ut}let Ae;const Zo=new WeakSet;class Lc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ut&&ut.active&&ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zo.has(this)&&(Zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hc(this),Bc(this);const e=Ae,n=wt;Ae=this,wt=!0;try{return this.fn()}finally{jc(this),Ae=e,wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ra(e);this.deps=this.depsTail=void 0,Hc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){na(this)&&this.run()}get dirty(){return na(this)}}let Fc=0,Yr,Jr;function Uc(t,e=!1){if(t.flags|=8,e){t.next=Jr,Jr=t;return}t.next=Yr,Yr=t}function ea(){Fc++}function ta(){if(--Fc>0)return;if(Jr){let e=Jr;for(Jr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Yr;){let e=Yr;for(Yr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Bc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ra(r),Zg(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function na(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&($c(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function $c(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xr)||(t.globalVersion=Xr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!na(t))))return;t.flags|=2;const e=t.dep,n=Ae,r=wt;Ae=t,wt=!0;try{Bc(t);const s=t.fn(t._value);(e.version===0||dn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,wt=r,jc(t),t.flags&=-3}}function ra(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ra(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wt=!0;const qc=[];function kt(){qc.push(wt),wt=!1}function Vt(){const t=qc.pop();wt=t===void 0?!0:t}function Hc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let Xr=0;class em{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ae||!wt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new em(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,zc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,Xr++,this.notify(e)}notify(e){ea();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ta()}}}function zc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)zc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ia=new WeakMap,Bn=Symbol(""),oa=Symbol(""),Zr=Symbol("");function Ye(t,e,n){if(wt&&Ae){let r=ia.get(t);r||ia.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new sa),s.map=r,s.key=n),s.track()}}function qt(t,e,n,r,s,i){const a=ia.get(t);if(!a){Xr++;return}const l=c=>{c&&c.trigger()};if(ea(),e==="clear")a.forEach(l);else{const c=ne(t),f=c&&Qo(n);if(c&&n==="length"){const d=Number(r);a.forEach((g,E)=>{(E==="length"||E===Zr||!Ct(E)&&E>=d)&&l(g)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),f&&l(a.get(Zr)),e){case"add":c?f&&l(a.get("length")):(l(a.get(Bn)),ur(t)&&l(a.get(oa)));break;case"delete":c||(l(a.get(Bn)),ur(t)&&l(a.get(oa)));break;case"set":ur(t)&&l(a.get(Bn));break}}ta()}function hr(t){const e=de(t);return e===t?e:(Ye(e,"iterate",Zr),mt(t)?e:e.map(Fe))}function hi(t){return Ye(t=de(t),"iterate",Zr),t}const tm={__proto__:null,[Symbol.iterator](){return aa(this,Symbol.iterator,Fe)},concat(...t){return hr(this).concat(...t.map(e=>ne(e)?hr(e):e))},entries(){return aa(this,"entries",t=>(t[1]=Fe(t[1]),t))},every(t,e){return Ht(this,"every",t,e,void 0,arguments)},filter(t,e){return Ht(this,"filter",t,e,n=>n.map(Fe),arguments)},find(t,e){return Ht(this,"find",t,e,Fe,arguments)},findIndex(t,e){return Ht(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ht(this,"findLast",t,e,Fe,arguments)},findLastIndex(t,e){return Ht(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ht(this,"forEach",t,e,void 0,arguments)},includes(...t){return la(this,"includes",t)},indexOf(...t){return la(this,"indexOf",t)},join(t){return hr(this).join(t)},lastIndexOf(...t){return la(this,"lastIndexOf",t)},map(t,e){return Ht(this,"map",t,e,void 0,arguments)},pop(){return es(this,"pop")},push(...t){return es(this,"push",t)},reduce(t,...e){return Wc(this,"reduce",t,e)},reduceRight(t,...e){return Wc(this,"reduceRight",t,e)},shift(){return es(this,"shift")},some(t,e){return Ht(this,"some",t,e,void 0,arguments)},splice(...t){return es(this,"splice",t)},toReversed(){return hr(this).toReversed()},toSorted(t){return hr(this).toSorted(t)},toSpliced(...t){return hr(this).toSpliced(...t)},unshift(...t){return es(this,"unshift",t)},values(){return aa(this,"values",Fe)}};function aa(t,e,n){const r=hi(t),s=r[e]();return r!==t&&!mt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const nm=Array.prototype;function Ht(t,e,n,r,s,i){const a=hi(t),l=a!==t&&!mt(t),c=a[e];if(c!==nm[e]){const g=c.apply(t,i);return l?Fe(g):g}let f=n;a!==t&&(l?f=function(g,E){return n.call(this,Fe(g),E,t)}:n.length>2&&(f=function(g,E){return n.call(this,g,E,t)}));const d=c.call(a,f,r);return l&&s?s(d):d}function Wc(t,e,n,r){const s=hi(t);let i=n;return s!==t&&(mt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,Fe(l),c,t)}),s[e](i,...r)}function la(t,e,n){const r=de(t);Ye(r,"iterate",Zr);const s=r[e](...n);return(s===-1||s===!1)&&fa(n[0])?(n[0]=de(n[0]),r[e](...n)):s}function es(t,e,n=[]){kt(),ea();const r=de(t)[e].apply(t,n);return ta(),Vt(),r}const rm=Wo("__proto__,__v_isRef,__isVue"),Kc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ct));function sm(t){Ct(t)||(t=String(t));const e=de(this);return Ye(e,"has",t),e.hasOwnProperty(t)}class Gc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?eu:Zc:i?Xc:Jc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ne(e);if(!s){let c;if(a&&(c=tm[n]))return c;if(n==="hasOwnProperty")return sm}const l=Reflect.get(e,n,Ue(e)?e:r);if((Ct(n)?Kc.has(n):rm(n))||(s||Ye(e,"get",n),i))return l;if(Ue(l)){const c=a&&Qo(n)?l:l.value;return s&&we(c)?ha(c):c}return we(l)?s?ha(l):ua(l):l}}class Qc extends Gc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=gn(i);if(!mt(r)&&!gn(r)&&(i=de(i),r=de(r)),!ne(e)&&Ue(i)&&!Ue(r))return c||(i.value=r),!0}const a=ne(e)&&Qo(n)?Number(n)<e.length:ye(e,n),l=Reflect.set(e,n,r,Ue(e)?e:s);return e===de(s)&&(a?dn(r,i)&&qt(e,"set",n,r):qt(e,"add",n,r)),l}deleteProperty(e,n){const r=ye(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ct(n)||!Kc.has(n))&&Ye(e,"has",n),r}ownKeys(e){return Ye(e,"iterate",ne(e)?"length":Bn),Reflect.ownKeys(e)}}class Yc extends Gc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const im=new Qc,om=new Yc,am=new Qc(!0),lm=new Yc(!0),ca=t=>t,fi=t=>Reflect.getPrototypeOf(t);function cm(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),a=ur(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,f=s[t](...r),d=n?ca:e?mi:Fe;return!e&&Ye(i,"iterate",c?oa:Bn),{next(){const{value:g,done:E}=f.next();return E?{value:g,done:E}:{value:l?[d(g[0]),d(g[1])]:d(g),done:E}},[Symbol.iterator](){return this}}}}function di(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function um(t,e){const n={get(s){const i=this.__v_raw,a=de(i),l=de(s);t||(dn(s,l)&&Ye(a,"get",s),Ye(a,"get",l));const{has:c}=fi(a),f=e?ca:t?mi:Fe;if(c.call(a,s))return f(i.get(s));if(c.call(a,l))return f(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ye(de(s),"iterate",Bn),s.size},has(s){const i=this.__v_raw,a=de(i),l=de(s);return t||(dn(s,l)&&Ye(a,"has",s),Ye(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=de(l),f=e?ca:t?mi:Fe;return!t&&Ye(c,"iterate",Bn),l.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return Qe(n,t?{add:di("add"),set:di("set"),delete:di("delete"),clear:di("clear")}:{add(s){!e&&!mt(s)&&!gn(s)&&(s=de(s));const i=de(this);return fi(i).has.call(i,s)||(i.add(s),qt(i,"add",s,s)),this},set(s,i){!e&&!mt(i)&&!gn(i)&&(i=de(i));const a=de(this),{has:l,get:c}=fi(a);let f=l.call(a,s);f||(s=de(s),f=l.call(a,s));const d=c.call(a,s);return a.set(s,i),f?dn(i,d)&&qt(a,"set",s,i):qt(a,"add",s,i),this},delete(s){const i=de(this),{has:a,get:l}=fi(i);let c=a.call(i,s);c||(s=de(s),c=a.call(i,s)),l&&l.call(i,s);const f=i.delete(s);return c&&qt(i,"delete",s,void 0),f},clear(){const s=de(this),i=s.size!==0,a=s.clear();return i&&qt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cm(s,t,e)}),n}function pi(t,e){const n=um(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ye(n,s)&&s in r?n:r,s,i)}const hm={get:pi(!1,!1)},fm={get:pi(!1,!0)},dm={get:pi(!0,!1)},pm={get:pi(!0,!0)},Jc=new WeakMap,Xc=new WeakMap,Zc=new WeakMap,eu=new WeakMap;function gm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mm(t){return t.__v_skip||!Object.isExtensible(t)?0:gm($g(t))}function ua(t){return gn(t)?t:gi(t,!1,im,hm,Jc)}function _m(t){return gi(t,!1,am,fm,Xc)}function ha(t){return gi(t,!0,om,dm,Zc)}function eb(t){return gi(t,!0,lm,pm,eu)}function gi(t,e,n,r,s){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=mm(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function fr(t){return gn(t)?fr(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function mt(t){return!!(t&&t.__v_isShallow)}function fa(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function ym(t){return!ye(t,"__v_skip")&&Object.isExtensible(t)&&Dc(t,"__v_skip",!0),t}const Fe=t=>we(t)?ua(t):t,mi=t=>we(t)?ha(t):t;function Ue(t){return t?t.__v_isRef===!0:!1}function Dt(t){return vm(t,!1)}function vm(t,e){return Ue(t)?t:new Em(t,e)}class Em{constructor(e,n){this.dep=new sa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:Fe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||mt(e)||gn(e);e=r?e:de(e),dn(e,n)&&(this._rawValue=e,this._value=r?e:Fe(e),this.dep.trigger())}}function Tm(t){return Ue(t)?t.value:t}const Im={get:(t,e,n)=>e==="__v_raw"?t:Tm(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tu(t){return fr(t)?t:new Proxy(t,Im)}class wm{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new sa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Uc(this,!0),!0}get value(){const e=this.dep.track();return $c(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Am(t,e,n=!1){let r,s;return ie(t)?r=t:(r=t.get,s=t.set),new wm(r,s,n)}const _i={},yi=new WeakMap;let jn;function bm(t,e=!1,n=jn){if(n){let r=yi.get(n);r||yi.set(n,r=[]),r.push(t)}}function Rm(t,e,n=Te){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,f=z=>s?z:mt(z)||s===!1||s===0?zt(z,1):zt(z);let d,g,E,S,V=!1,L=!1;if(Ue(t)?(g=()=>t.value,V=mt(t)):fr(t)?(g=()=>f(t),V=!0):ne(t)?(L=!0,V=t.some(z=>fr(z)||mt(z)),g=()=>t.map(z=>{if(Ue(z))return z.value;if(fr(z))return f(z);if(ie(z))return c?c(z,2):z()})):ie(t)?e?g=c?()=>c(t,2):t:g=()=>{if(E){kt();try{E()}finally{Vt()}}const z=jn;jn=d;try{return c?c(t,3,[S]):t(S)}finally{jn=z}}:g=Pt,e&&s){const z=g,te=s===!0?1/0:s;g=()=>zt(z(),te)}const F=Xg(),G=()=>{d.stop(),F&&F.active&&Go(F.effects,d)};if(i&&e){const z=e;e=(...te)=>{z(...te),G()}}let q=L?new Array(t.length).fill(_i):_i;const W=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const te=d.run();if(s||V||(L?te.some((ge,T)=>dn(ge,q[T])):dn(te,q))){E&&E();const ge=jn;jn=d;try{const T=[te,q===_i?void 0:L&&q[0]===_i?[]:q,S];q=te,c?c(e,3,T):e(...T)}finally{jn=ge}}}else d.run()};return l&&l(W),d=new Lc(g),d.scheduler=a?()=>a(W,!1):W,S=z=>bm(z,!1,d),E=d.onStop=()=>{const z=yi.get(d);if(z){if(c)c(z,4);else for(const te of z)te();yi.delete(d)}},e?r?W(!0):q=d.run():a?a(W.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function zt(t,e=1/0,n){if(e<=0||!we(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ue(t))zt(t.value,e,n);else if(ne(t))for(let r=0;r<t.length;r++)zt(t[r],e,n);else if(Rc(t)||ur(t))t.forEach(r=>{zt(r,e,n)});else if(kc(t)){for(const r in t)zt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&zt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ts=[];let da=!1;function tb(t,...e){if(da)return;da=!0,kt();const n=ts.length?ts[ts.length-1].component:null,r=n&&n.appContext.config.warnHandler,s=Sm();if(r)dr(r,n,11,[t+e.map(i=>{var a,l;return(l=(a=i.toString)==null?void 0:a.call(i))!=null?l:JSON.stringify(i)}).join(""),n&&n.proxy,s.map(({vnode:i})=>`at <${Qu(n,i.type)}>`).join(`
`),s]);else{const i=[`[Vue warn]: ${t}`,...e];s.length&&i.push(`
`,...Pm(s)),console.warn(...i)}Vt(),da=!1}function Sm(){let t=ts[ts.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function Pm(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...Cm(n))}),e}function Cm({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,s=` at <${Qu(t.component,t.type,r)}`,i=">"+n;return t.props?[s,...km(t.props),i]:[s+i]}function km(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...nu(r,t[r]))}),n.length>3&&e.push(" ..."),e}function nu(t,e,n){return Ce(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:Ue(e)?(e=nu(t,de(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):ie(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=de(e),n?e:[`${t}=`,e])}function dr(t,e,n,r){try{return r?t(...r):t()}catch(s){vi(s,e,n)}}function xt(t,e,n,r){if(ie(t)){const s=dr(t,e,n,r);return s&&Pc(s)&&s.catch(i=>{vi(i,e,n)}),s}if(ne(t)){const s=[];for(let i=0;i<t.length;i++)s.push(xt(t[i],e,n,r));return s}}function vi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Te;if(e){let l=e.parent;const c=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,c,f)===!1)return}l=l.parent}if(i){kt(),dr(i,null,10,[t,c,f]),Vt();return}}Vm(t,n,s,r,a)}function Vm(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const it=[];let Nt=-1;const pr=[];let mn=null,gr=0;const ru=Promise.resolve();let Ei=null;function Dm(t){const e=Ei||ru;return t?e.then(this?t.bind(this):t):e}function xm(t){let e=Nt+1,n=it.length;for(;e<n;){const r=e+n>>>1,s=it[r],i=ns(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function pa(t){if(!(t.flags&1)){const e=ns(t),n=it[it.length-1];!n||!(t.flags&2)&&e>=ns(n)?it.push(t):it.splice(xm(e),0,t),t.flags|=1,su()}}function su(){Ei||(Ei=ru.then(au))}function Nm(t){ne(t)?pr.push(...t):mn&&t.id===-1?mn.splice(gr+1,0,t):t.flags&1||(pr.push(t),t.flags|=1),su()}function iu(t,e,n=Nt+1){for(;n<it.length;n++){const r=it[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;it.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ou(t){if(pr.length){const e=[...new Set(pr)].sort((n,r)=>ns(n)-ns(r));if(pr.length=0,mn){mn.push(...e);return}for(mn=e,gr=0;gr<mn.length;gr++){const n=mn[gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mn=null,gr=0}}const ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function au(t){try{for(Nt=0;Nt<it.length;Nt++){const e=it[Nt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),dr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nt<it.length;Nt++){const e=it[Nt];e&&(e.flags&=-2)}Nt=-1,it.length=0,ou(),Ei=null,(it.length||pr.length)&&au()}}let _t=null,lu=null;function Ti(t){const e=_t;return _t=t,lu=t&&t.type.__scopeId||null,e}function Om(t,e=_t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ju(-1);const i=Ti(e);let a;try{a=t(...s)}finally{Ti(i),r._d&&ju(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function cu(t,e){if(_t===null)return t;const n=ki(_t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Te]=e[s];i&&(ie(i)&&(i={mounted:i,updated:i}),i.deep&&zt(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(kt(),xt(c,n,8,[t.el,l,t,e]),Vt())}}const Mm=Symbol("_vte"),Lm=t=>t.__isTeleport,Fm=Symbol("_leaveCb");function ga(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ga(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Um(t,e){return ie(t)?Qe({name:t.name},e,{setup:t}):t}function uu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ii=new WeakMap;function rs(t,e,n,r,s=!1){if(ne(t)){t.forEach((V,L)=>rs(V,e&&(ne(e)?e[L]:e),n,r,s));return}if(ss(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&rs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ki(r.component):r.el,a=s?null:i,{i:l,r:c}=t,f=e&&e.r,d=l.refs===Te?l.refs={}:l.refs,g=l.setupState,E=de(g),S=g===Te?bc:V=>ye(E,V);if(f!=null&&f!==c){if(hu(e),Ce(f))d[f]=null,S(f)&&(g[f]=null);else if(Ue(f)){f.value=null;const V=e;V.k&&(d[V.k]=null)}}if(ie(c))dr(c,l,12,[a,d]);else{const V=Ce(c),L=Ue(c);if(V||L){const F=()=>{if(t.f){const G=V?S(c)?g[c]:d[c]:c.value;if(s)ne(G)&&Go(G,i);else if(ne(G))G.includes(i)||G.push(i);else if(V)d[c]=[i],S(c)&&(g[c]=d[c]);else{const q=[i];c.value=q,t.k&&(d[t.k]=q)}}else V?(d[c]=a,S(c)&&(g[c]=a)):L&&(c.value=a,t.k&&(d[t.k]=a))};if(a){const G=()=>{F(),Ii.delete(t)};G.id=-1,Ii.set(t,G),ht(G,n)}else hu(t),F()}}}function hu(t){const e=Ii.get(t);e&&(e.flags|=8,Ii.delete(t))}ai().requestIdleCallback,ai().cancelIdleCallback;const ss=t=>!!t.type.__asyncLoader,fu=t=>t.type.__isKeepAlive;function Bm(t,e){du(t,"a",e)}function jm(t,e){du(t,"da",e)}function du(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wi(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fu(s.parent.vnode)&&$m(r,e,n,s),s=s.parent}}function $m(t,e,n,r){const s=wi(e,t,r,!0);gu(()=>{Go(r[e],s)},n)}function wi(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{kt();const l=hs(n),c=xt(e,n,t,a);return l(),Vt(),c});return r?s.unshift(i):s.push(i),i}}const Wt=t=>(e,n=lt)=>{(!fs||t==="sp")&&wi(t,(...r)=>e(...r),n)},qm=Wt("bm"),pu=Wt("m"),Hm=Wt("bu"),zm=Wt("u"),Wm=Wt("bum"),gu=Wt("um"),Km=Wt("sp"),Gm=Wt("rtg"),Qm=Wt("rtc");function Ym(t,e=lt){wi("ec",t,e)}const Jm=Symbol.for("v-ndc");function ma(t,e,n,r){let s;const i=n,a=ne(t);if(a||Ce(t)){const l=a&&fr(t);let c=!1,f=!1;l&&(c=!mt(t),f=gn(t),t=hi(t)),s=new Array(t.length);for(let d=0,g=t.length;d<g;d++)s[d]=e(c?f?mi(Fe(t[d])):Fe(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(we(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,f=l.length;c<f;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const _a=t=>t?Wu(t)?ki(t):_a(t.parent):null,is=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_a(t.parent),$root:t=>_a(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vu(t),$forceUpdate:t=>t.f||(t.f=()=>{pa(t.update)}),$nextTick:t=>t.n||(t.n=Dm.bind(t.proxy)),$watch:t=>v_.bind(t)}),ya=(t,e)=>t!==Te&&!t.__isScriptSetup&&ye(t,e),Xm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let f;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ya(r,e))return a[e]=1,r[e];if(s!==Te&&ye(s,e))return a[e]=2,s[e];if((f=t.propsOptions[0])&&ye(f,e))return a[e]=3,i[e];if(n!==Te&&ye(n,e))return a[e]=4,n[e];va&&(a[e]=0)}}const d=is[e];let g,E;if(d)return e==="$attrs"&&Ye(t.attrs,"get",""),d(t);if((g=l.__cssModules)&&(g=g[e]))return g;if(n!==Te&&ye(n,e))return a[e]=4,n[e];if(E=c.config.globalProperties,ye(E,e))return E[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ya(s,e)?(s[e]=n,!0):r!==Te&&ye(r,e)?(r[e]=n,!0):ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},l){let c,f;return!!(n[l]||t!==Te&&l[0]!=="$"&&ye(t,l)||ya(e,l)||(c=i[0])&&ye(c,l)||ye(r,l)||ye(is,l)||ye(s.config.globalProperties,l)||(f=a.__cssModules)&&f[l])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function mu(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let va=!0;function Zm(t){const e=vu(t),n=t.proxy,r=t.ctx;va=!1,e.beforeCreate&&_u(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:f,created:d,beforeMount:g,mounted:E,beforeUpdate:S,updated:V,activated:L,deactivated:F,beforeDestroy:G,beforeUnmount:q,destroyed:W,unmounted:z,render:te,renderTracked:ge,renderTriggered:T,errorCaptured:m,serverPrefetch:y,expose:I,inheritAttrs:A,components:R,directives:v,filters:pt}=e;if(f&&e_(f,r,null),a)for(const Ee in a){const me=a[Ee];ie(me)&&(r[Ee]=me.bind(n))}if(s){const Ee=s.call(n,n);we(Ee)&&(t.data=ua(Ee))}if(va=!0,i)for(const Ee in i){const me=i[Ee],Rt=ie(me)?me.bind(n,n):ie(me.get)?me.get.bind(n,n):Pt,nr=!ie(me)&&ie(me.set)?me.set.bind(n):Pt,ln=Yu({get:Rt,set:nr});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Oe=>ln.value=Oe})}if(l)for(const Ee in l)yu(l[Ee],r,n,Ee);if(c){const Ee=ie(c)?c.call(n):c;Reflect.ownKeys(Ee).forEach(me=>{o_(me,Ee[me])})}d&&_u(d,t,"c");function He(Ee,me){ne(me)?me.forEach(Rt=>Ee(Rt.bind(n))):me&&Ee(me.bind(n))}if(He(qm,g),He(pu,E),He(Hm,S),He(zm,V),He(Bm,L),He(jm,F),He(Ym,m),He(Qm,ge),He(Gm,T),He(Wm,q),He(gu,z),He(Km,y),ne(I))if(I.length){const Ee=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(Ee,me,{get:()=>n[me],set:Rt=>n[me]=Rt,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===Pt&&(t.render=te),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),v&&(t.directives=v),y&&uu(t)}function e_(t,e,n=Pt){ne(t)&&(t=Ea(t));for(const r in t){const s=t[r];let i;we(s)?"default"in s?i=bi(s.from||r,s.default,!0):i=bi(s.from||r):i=bi(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function _u(t,e,n){xt(ne(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yu(t,e,n,r){let s=r.includes(".")?Mu(n,r):()=>n[r];if(Ce(t)){const i=e[t];ie(i)&&ba(s,i)}else if(ie(t))ba(s,t.bind(n));else if(we(t))if(ne(t))t.forEach(i=>yu(i,e,n,r));else{const i=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(i)&&ba(s,i,t)}}function vu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(f=>Ai(c,f,a,!0)),Ai(c,e,a)),we(e)&&i.set(e,c),c}function Ai(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ai(t,i,n,!0),s&&s.forEach(a=>Ai(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=t_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const t_={data:Eu,props:Tu,emits:Tu,methods:os,computed:os,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:os,directives:os,watch:r_,provide:Eu,inject:n_};function Eu(t,e){return e?t?function(){return Qe(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function n_(t,e){return os(Ea(t),Ea(e))}function Ea(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?Qe(Object.create(null),t,e):e}function Tu(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:Qe(Object.create(null),mu(t),mu(e??{})):e}function r_(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function Iu(){return{app:null,config:{isNativeTag:bc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let s_=0;function i_(t,e){return function(r,s=null){ie(r)||(r=Qe({},r)),s!=null&&!we(s)&&(s=null);const i=Iu(),a=new WeakSet,l=[];let c=!1;const f=i.app={_uid:s_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:W_,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&ie(d.install)?(a.add(d),d.install(f,...g)):ie(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,E){if(!c){const S=f._ceVNode||Kt(r,s);return S.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),t(S,d,E),c=!0,f._container=d,d.__vue_app__=f,ki(S.component)}},onUnmount(d){l.push(d)},unmount(){c&&(xt(l,f._instance,16),t(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=mr;mr=f;try{return d()}finally{mr=g}}};return f}}let mr=null;function o_(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function bi(t,e,n=!1){const r=L_();if(r||mr){let s=mr?mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}const wu={},Au=()=>Object.create(wu),bu=t=>Object.getPrototypeOf(t)===wu;function a_(t,e,n,r=!1){const s={},i=Au();t.propsDefaults=Object.create(null),Ru(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:_m(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function l_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=de(s),[c]=t.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let E=d[g];if(Ri(t.emitsOptions,E))continue;const S=e[E];if(c)if(ye(i,E))S!==i[E]&&(i[E]=S,f=!0);else{const V=fn(E);s[V]=Ta(c,l,V,S,t,!1)}else S!==i[E]&&(i[E]=S,f=!0)}}}else{Ru(t,e,s,i)&&(f=!0);let d;for(const g in l)(!e||!ye(e,g)&&((d=Un(g))===g||!ye(e,d)))&&(c?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=Ta(c,l,g,void 0,t,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!ye(e,g))&&(delete i[g],f=!0)}f&&qt(t.attrs,"set","")}function Ru(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Qr(c))continue;const f=e[c];let d;s&&ye(s,d=fn(c))?!i||!i.includes(d)?n[d]=f:(l||(l={}))[d]=f:Ri(t.emitsOptions,c)||(!(c in r)||f!==r[c])&&(r[c]=f,a=!0)}if(i){const c=de(n),f=l||Te;for(let d=0;d<i.length;d++){const g=i[d];n[g]=Ta(s,c,g,f[g],t,!ye(f,g))}}return a}function Ta(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=ye(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ie(c)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=hs(s);r=f[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Un(n))&&(r=!0))}return r}const c_=new WeakMap;function Su(t,e,n=!1){const r=n?c_:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ie(t)){const d=g=>{c=!0;const[E,S]=Su(g,e,!0);Qe(a,E),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return we(t)&&r.set(t,cr),cr;if(ne(i))for(let d=0;d<i.length;d++){const g=fn(i[d]);Pu(g)&&(a[g]=Te)}else if(i)for(const d in i){const g=fn(d);if(Pu(g)){const E=i[d],S=a[g]=ne(E)||ie(E)?{type:E}:Qe({},E),V=S.type;let L=!1,F=!0;if(ne(V))for(let G=0;G<V.length;++G){const q=V[G],W=ie(q)&&q.name;if(W==="Boolean"){L=!0;break}else W==="String"&&(F=!1)}else L=ie(V)&&V.name==="Boolean";S[0]=L,S[1]=F,(L||ye(S,"default"))&&l.push(g)}}const f=[a,l];return we(t)&&r.set(t,f),f}function Pu(t){return t[0]!=="$"&&!Qr(t)}const Ia=t=>t==="_"||t==="_ctx"||t==="$stable",wa=t=>ne(t)?t.map(Ot):[Ot(t)],u_=(t,e,n)=>{if(e._n)return e;const r=Om((...s)=>wa(e(...s)),n);return r._c=!1,r},Cu=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ia(s))continue;const i=t[s];if(ie(i))e[s]=u_(s,i,r);else if(i!=null){const a=wa(i);e[s]=()=>a}}},ku=(t,e)=>{const n=wa(e);t.slots.default=()=>n},Vu=(t,e,n)=>{for(const r in e)(n||!Ia(r))&&(t[r]=e[r])},h_=(t,e,n)=>{const r=t.slots=Au();if(t.vnode.shapeFlag&32){const s=e._;s?(Vu(r,e,n),n&&Dc(r,"_",s,!0)):Cu(e,r)}else e&&ku(t,e)},f_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Te;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Vu(s,e,n):(i=!e.$stable,Cu(e,s)),a=e}else e&&(ku(t,e),a={default:1});if(i)for(const l in s)!Ia(l)&&a[l]==null&&delete s[l]},ht=S_;function d_(t){return p_(t)}function p_(t,e){const n=ai();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:f,setElementText:d,parentNode:g,nextSibling:E,setScopeId:S=Pt,insertStaticContent:V}=t,L=(_,w,C,M=null,D=null,x=null,$=void 0,B=null,U=!!w.dynamicChildren)=>{if(_===w)return;_&&!cs(_,w)&&(M=cn(_),Oe(_,D,x,!0),_=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:N,ref:X,shapeFlag:H}=w;switch(N){case Si:F(_,w,C,M);break;case _n:G(_,w,C,M);break;case Ra:_==null&&q(w,C,M,$);break;case yt:R(_,w,C,M,D,x,$,B,U);break;default:H&1?te(_,w,C,M,D,x,$,B,U):H&6?v(_,w,C,M,D,x,$,B,U):(H&64||H&128)&&N.process(_,w,C,M,D,x,$,B,U,$t)}X!=null&&D?rs(X,_&&_.ref,x,w||_,!w):X==null&&_&&_.ref!=null&&rs(_.ref,null,x,_,!0)},F=(_,w,C,M)=>{if(_==null)r(w.el=l(w.children),C,M);else{const D=w.el=_.el;w.children!==_.children&&f(D,w.children)}},G=(_,w,C,M)=>{_==null?r(w.el=c(w.children||""),C,M):w.el=_.el},q=(_,w,C,M)=>{[_.el,_.anchor]=V(_.children,w,C,M,_.el,_.anchor)},W=({el:_,anchor:w},C,M)=>{let D;for(;_&&_!==w;)D=E(_),r(_,C,M),_=D;r(w,C,M)},z=({el:_,anchor:w})=>{let C;for(;_&&_!==w;)C=E(_),s(_),_=C;s(w)},te=(_,w,C,M,D,x,$,B,U)=>{if(w.type==="svg"?$="svg":w.type==="math"&&($="mathml"),_==null)ge(w,C,M,D,x,$,B,U);else{const N=_.el&&_.el._isVueCE?_.el:null;try{N&&N._beginPatch(),y(_,w,D,x,$,B,U)}finally{N&&N._endPatch()}}},ge=(_,w,C,M,D,x,$,B)=>{let U,N;const{props:X,shapeFlag:H,transition:Y,dirs:ee}=_;if(U=_.el=a(_.type,x,X&&X.is,X),H&8?d(U,_.children):H&16&&m(_.children,U,null,M,D,Aa(_,x),$,B),ee&&$n(_,null,M,"created"),T(U,_,_.scopeId,$,M),X){for(const le in X)le!=="value"&&!Qr(le)&&i(U,le,null,X[le],x,M);"value"in X&&i(U,"value",null,X.value,x),(N=X.onVnodeBeforeMount)&&Mt(N,M,_)}ee&&$n(_,null,M,"beforeMount");const Z=g_(D,Y);Z&&Y.beforeEnter(U),r(U,w,C),((N=X&&X.onVnodeMounted)||Z||ee)&&ht(()=>{N&&Mt(N,M,_),Z&&Y.enter(U),ee&&$n(_,null,M,"mounted")},D)},T=(_,w,C,M,D)=>{if(C&&S(_,C),M)for(let x=0;x<M.length;x++)S(_,M[x]);if(D){let x=D.subTree;if(w===x||Bu(x.type)&&(x.ssContent===w||x.ssFallback===w)){const $=D.vnode;T(_,$,$.scopeId,$.slotScopeIds,D.parent)}}},m=(_,w,C,M,D,x,$,B,U=0)=>{for(let N=U;N<_.length;N++){const X=_[N]=B?yn(_[N]):Ot(_[N]);L(null,X,w,C,M,D,x,$,B)}},y=(_,w,C,M,D,x,$)=>{const B=w.el=_.el;let{patchFlag:U,dynamicChildren:N,dirs:X}=w;U|=_.patchFlag&16;const H=_.props||Te,Y=w.props||Te;let ee;if(C&&qn(C,!1),(ee=Y.onVnodeBeforeUpdate)&&Mt(ee,C,w,_),X&&$n(w,_,C,"beforeUpdate"),C&&qn(C,!0),(H.innerHTML&&Y.innerHTML==null||H.textContent&&Y.textContent==null)&&d(B,""),N?I(_.dynamicChildren,N,B,C,M,Aa(w,D),x):$||me(_,w,B,null,C,M,Aa(w,D),x,!1),U>0){if(U&16)A(B,H,Y,C,D);else if(U&2&&H.class!==Y.class&&i(B,"class",null,Y.class,D),U&4&&i(B,"style",H.style,Y.style,D),U&8){const Z=w.dynamicProps;for(let le=0;le<Z.length;le++){const fe=Z[le],ze=H[fe],We=Y[fe];(We!==ze||fe==="value")&&i(B,fe,ze,We,D,C)}}U&1&&_.children!==w.children&&d(B,w.children)}else!$&&N==null&&A(B,H,Y,C,D);((ee=Y.onVnodeUpdated)||X)&&ht(()=>{ee&&Mt(ee,C,w,_),X&&$n(w,_,C,"updated")},M)},I=(_,w,C,M,D,x,$)=>{for(let B=0;B<w.length;B++){const U=_[B],N=w[B],X=U.el&&(U.type===yt||!cs(U,N)||U.shapeFlag&198)?g(U.el):C;L(U,N,X,null,M,D,x,$,!0)}},A=(_,w,C,M,D)=>{if(w!==C){if(w!==Te)for(const x in w)!Qr(x)&&!(x in C)&&i(_,x,w[x],null,D,M);for(const x in C){if(Qr(x))continue;const $=C[x],B=w[x];$!==B&&x!=="value"&&i(_,x,B,$,D,M)}"value"in C&&i(_,"value",w.value,C.value,D)}},R=(_,w,C,M,D,x,$,B,U)=>{const N=w.el=_?_.el:l(""),X=w.anchor=_?_.anchor:l("");let{patchFlag:H,dynamicChildren:Y,slotScopeIds:ee}=w;ee&&(B=B?B.concat(ee):ee),_==null?(r(N,C,M),r(X,C,M),m(w.children||[],C,X,D,x,$,B,U)):H>0&&H&64&&Y&&_.dynamicChildren?(I(_.dynamicChildren,Y,C,D,x,$,B),(w.key!=null||D&&w===D.subTree)&&Du(_,w,!0)):me(_,w,C,X,D,x,$,B,U)},v=(_,w,C,M,D,x,$,B,U)=>{w.slotScopeIds=B,_==null?w.shapeFlag&512?D.ctx.activate(w,C,M,$,U):pt(w,C,M,D,x,$,U):Nn(_,w,U)},pt=(_,w,C,M,D,x,$)=>{const B=_.component=M_(_,M,D);if(fu(_)&&(B.ctx.renderer=$t),F_(B,!1,$),B.asyncDep){if(D&&D.registerDep(B,He,$),!_.el){const U=B.subTree=Kt(_n);G(null,U,w,C),_.placeholder=U.el}}else He(B,_,w,C,D,x,$)},Nn=(_,w,C)=>{const M=w.component=_.component;if(b_(_,w,C))if(M.asyncDep&&!M.asyncResolved){Ee(M,w,C);return}else M.next=w,M.update();else w.el=_.el,M.vnode=w},He=(_,w,C,M,D,x,$)=>{const B=()=>{if(_.isMounted){let{next:H,bu:Y,u:ee,parent:Z,vnode:le}=_;{const nt=xu(_);if(nt){H&&(H.el=le.el,Ee(_,H,$)),nt.asyncDep.then(()=>{_.isUnmounted||B()});return}}let fe=H,ze;qn(_,!1),H?(H.el=le.el,Ee(_,H,$)):H=le,Y&&oi(Y),(ze=H.props&&H.props.onVnodeBeforeUpdate)&&Mt(ze,Z,H,le),qn(_,!0);const We=Fu(_),Tt=_.subTree;_.subTree=We,L(Tt,We,g(Tt.el),cn(Tt),_,D,x),H.el=We.el,fe===null&&R_(_,We.el),ee&&ht(ee,D),(ze=H.props&&H.props.onVnodeUpdated)&&ht(()=>Mt(ze,Z,H,le),D)}else{let H;const{el:Y,props:ee}=w,{bm:Z,m:le,parent:fe,root:ze,type:We}=_,Tt=ss(w);qn(_,!1),Z&&oi(Z),!Tt&&(H=ee&&ee.onVnodeBeforeMount)&&Mt(H,fe,w),qn(_,!0);{ze.ce&&ze.ce._def.shadowRoot!==!1&&ze.ce._injectChildStyle(We);const nt=_.subTree=Fu(_);L(null,nt,C,M,_,D,x),w.el=nt.el}if(le&&ht(le,D),!Tt&&(H=ee&&ee.onVnodeMounted)){const nt=w;ht(()=>Mt(H,fe,nt),D)}(w.shapeFlag&256||fe&&ss(fe.vnode)&&fe.vnode.shapeFlag&256)&&_.a&&ht(_.a,D),_.isMounted=!0,w=C=M=null}};_.scope.on();const U=_.effect=new Lc(B);_.scope.off();const N=_.update=U.run.bind(U),X=_.job=U.runIfDirty.bind(U);X.i=_,X.id=_.uid,U.scheduler=()=>pa(X),qn(_,!0),N()},Ee=(_,w,C)=>{w.component=_;const M=_.vnode.props;_.vnode=w,_.next=null,l_(_,w.props,M,C),f_(_,w.children,C),kt(),iu(_),Vt()},me=(_,w,C,M,D,x,$,B,U=!1)=>{const N=_&&_.children,X=_?_.shapeFlag:0,H=w.children,{patchFlag:Y,shapeFlag:ee}=w;if(Y>0){if(Y&128){nr(N,H,C,M,D,x,$,B,U);return}else if(Y&256){Rt(N,H,C,M,D,x,$,B,U);return}}ee&8?(X&16&&sr(N,D,x),H!==N&&d(C,H)):X&16?ee&16?nr(N,H,C,M,D,x,$,B,U):sr(N,D,x,!0):(X&8&&d(C,""),ee&16&&m(H,C,M,D,x,$,B,U))},Rt=(_,w,C,M,D,x,$,B,U)=>{_=_||cr,w=w||cr;const N=_.length,X=w.length,H=Math.min(N,X);let Y;for(Y=0;Y<H;Y++){const ee=w[Y]=U?yn(w[Y]):Ot(w[Y]);L(_[Y],ee,C,null,D,x,$,B,U)}N>X?sr(_,D,x,!0,!1,H):m(w,C,M,D,x,$,B,U,H)},nr=(_,w,C,M,D,x,$,B,U)=>{let N=0;const X=w.length;let H=_.length-1,Y=X-1;for(;N<=H&&N<=Y;){const ee=_[N],Z=w[N]=U?yn(w[N]):Ot(w[N]);if(cs(ee,Z))L(ee,Z,C,null,D,x,$,B,U);else break;N++}for(;N<=H&&N<=Y;){const ee=_[H],Z=w[Y]=U?yn(w[Y]):Ot(w[Y]);if(cs(ee,Z))L(ee,Z,C,null,D,x,$,B,U);else break;H--,Y--}if(N>H){if(N<=Y){const ee=Y+1,Z=ee<X?w[ee].el:M;for(;N<=Y;)L(null,w[N]=U?yn(w[N]):Ot(w[N]),C,Z,D,x,$,B,U),N++}}else if(N>Y)for(;N<=H;)Oe(_[N],D,x,!0),N++;else{const ee=N,Z=N,le=new Map;for(N=Z;N<=Y;N++){const Ke=w[N]=U?yn(w[N]):Ot(w[N]);Ke.key!=null&&le.set(Ke.key,N)}let fe,ze=0;const We=Y-Z+1;let Tt=!1,nt=0;const On=new Array(We);for(N=0;N<We;N++)On[N]=0;for(N=ee;N<=H;N++){const Ke=_[N];if(ze>=We){Oe(Ke,D,x,!0);continue}let It;if(Ke.key!=null)It=le.get(Ke.key);else for(fe=Z;fe<=Y;fe++)if(On[fe-Z]===0&&cs(Ke,w[fe])){It=fe;break}It===void 0?Oe(Ke,D,x,!0):(On[It-Z]=N+1,It>=nt?nt=It:Tt=!0,L(Ke,w[It],C,null,D,x,$,B,U),ze++)}const zs=Tt?m_(On):cr;for(fe=zs.length-1,N=We-1;N>=0;N--){const Ke=Z+N,It=w[Ke],ko=w[Ke+1],qr=Ke+1<X?ko.el||ko.placeholder:M;On[N]===0?L(null,It,C,qr,D,x,$,B,U):Tt&&(fe<0||N!==zs[fe]?ln(It,C,qr,2):fe--)}}},ln=(_,w,C,M,D=null)=>{const{el:x,type:$,transition:B,children:U,shapeFlag:N}=_;if(N&6){ln(_.component.subTree,w,C,M);return}if(N&128){_.suspense.move(w,C,M);return}if(N&64){$.move(_,w,C,$t);return}if($===yt){r(x,w,C);for(let H=0;H<U.length;H++)ln(U[H],w,C,M);r(_.anchor,w,C);return}if($===Ra){W(_,w,C);return}if(M!==2&&N&1&&B)if(M===0)B.beforeEnter(x),r(x,w,C),ht(()=>B.enter(x),D);else{const{leave:H,delayLeave:Y,afterLeave:ee}=B,Z=()=>{_.ctx.isUnmounted?s(x):r(x,w,C)},le=()=>{x._isLeaving&&x[Fm](!0),H(x,()=>{Z(),ee&&ee()})};Y?Y(x,Z,le):le()}else r(x,w,C)},Oe=(_,w,C,M=!1,D=!1)=>{const{type:x,props:$,ref:B,children:U,dynamicChildren:N,shapeFlag:X,patchFlag:H,dirs:Y,cacheIndex:ee}=_;if(H===-2&&(D=!1),B!=null&&(kt(),rs(B,null,C,_,!0),Vt()),ee!=null&&(w.renderCache[ee]=void 0),X&256){w.ctx.deactivate(_);return}const Z=X&1&&Y,le=!ss(_);let fe;if(le&&(fe=$&&$.onVnodeBeforeUnmount)&&Mt(fe,w,_),X&6)rr(_.component,C,M);else{if(X&128){_.suspense.unmount(C,M);return}Z&&$n(_,null,w,"beforeUnmount"),X&64?_.type.remove(_,w,C,$t,M):N&&!N.hasOnce&&(x!==yt||H>0&&H&64)?sr(N,w,C,!1,!0):(x===yt&&H&384||!D&&X&16)&&sr(U,w,C),M&&Me(_)}(le&&(fe=$&&$.onVnodeUnmounted)||Z)&&ht(()=>{fe&&Mt(fe,w,_),Z&&$n(_,null,w,"unmounted")},C)},Me=_=>{const{type:w,el:C,anchor:M,transition:D}=_;if(w===yt){cc(C,M);return}if(w===Ra){z(_);return}const x=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:B}=D,U=()=>$(C,x);B?B(_.el,x,U):U()}else x()},cc=(_,w)=>{let C;for(;_!==w;)C=E(_),s(_),_=C;s(w)},rr=(_,w,C)=>{const{bum:M,scope:D,job:x,subTree:$,um:B,m:U,a:N}=_;Nu(U),Nu(N),M&&oi(M),D.stop(),x&&(x.flags|=8,Oe($,_,w,C)),B&&ht(B,w),ht(()=>{_.isUnmounted=!0},w)},sr=(_,w,C,M=!1,D=!1,x=0)=>{for(let $=x;$<_.length;$++)Oe(_[$],w,C,M,D)},cn=_=>{if(_.shapeFlag&6)return cn(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const w=E(_.anchor||_.el),C=w&&w[Mm];return C?E(C):w};let qs=!1;const Co=(_,w,C)=>{_==null?w._vnode&&Oe(w._vnode,null,null,!0):L(w._vnode||null,_,w,null,null,null,C),w._vnode=_,qs||(qs=!0,iu(),ou(),qs=!1)},$t={p:L,um:Oe,m:ln,r:Me,mt:pt,mc:m,pc:me,pbc:I,n:cn,o:t};return{render:Co,hydrate:void 0,createApp:i_(Co)}}function Aa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function g_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Du(t,e,n=!1){const r=t.children,s=e.children;if(ne(r)&&ne(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=yn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Du(a,l)),l.type===Si&&l.patchFlag!==-1&&(l.el=a.el),l.type===_n&&!l.el&&(l.el=a.el)}}function m_(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const f=t[r];if(f!==0){if(s=n[n.length-1],t[s]<f){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<f?i=l+1:a=l;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function xu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:xu(e)}function Nu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const __=Symbol.for("v-scx"),y_=()=>bi(__);function ba(t,e,n){return Ou(t,e,n)}function Ou(t,e,n=Te){const{immediate:r,deep:s,flush:i,once:a}=n,l=Qe({},n),c=e&&r||!e&&i!=="post";let f;if(fs){if(i==="sync"){const S=y_();f=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=Pt,S.resume=Pt,S.pause=Pt,S}}const d=lt;l.call=(S,V,L)=>xt(S,d,V,L);let g=!1;i==="post"?l.scheduler=S=>{ht(S,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(S,V)=>{V?S():pa(S)}),l.augmentJob=S=>{e&&(S.flags|=4),g&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const E=Rm(t,e,l);return fs&&(f?f.push(E):c&&E()),E}function v_(t,e,n){const r=this.proxy,s=Ce(t)?t.includes(".")?Mu(r,t):()=>r[t]:t.bind(r,r);let i;ie(e)?i=e:(i=e.handler,n=e);const a=hs(this),l=Ou(s,i.bind(r),n);return a(),l}function Mu(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const E_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${fn(e)}Modifiers`]||t[`${Un(e)}Modifiers`];function T_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;let s=n;const i=e.startsWith("update:"),a=i&&E_(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Ce(d)?d.trim():d)),a.number&&(s=n.map(Jo)));let l,c=r[l=Yo(e)]||r[l=Yo(fn(e))];!c&&i&&(c=r[l=Yo(Un(e))]),c&&xt(c,t,6,s);const f=r[l+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,xt(f,t,6,s)}}const I_=new WeakMap;function Lu(t,e,n=!1){const r=n?I_:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ie(t)){const c=f=>{const d=Lu(f,e,!0);d&&(l=!0,Qe(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(we(t)&&r.set(t,null),null):(ne(i)?i.forEach(c=>a[c]=null):Qe(a,i),we(t)&&r.set(t,a),a)}function Ri(t,e){return!t||!si(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(t,e[0].toLowerCase()+e.slice(1))||ye(t,Un(e))||ye(t,e))}function nb(){}function Fu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:f,renderCache:d,props:g,data:E,setupState:S,ctx:V,inheritAttrs:L}=t,F=Ti(t);let G,q;try{if(n.shapeFlag&4){const z=s||r,te=z;G=Ot(f.call(te,z,d,g,S,E,V)),q=l}else{const z=e;G=Ot(z.length>1?z(g,{attrs:l,slots:a,emit:c}):z(g,null)),q=e.props?l:w_(l)}}catch(z){as.length=0,vi(z,t,1),G=Kt(_n)}let W=G;if(q&&L!==!1){const z=Object.keys(q),{shapeFlag:te}=W;z.length&&te&7&&(i&&z.some(Ko)&&(q=A_(q,i)),W=_r(W,q,!1,!0))}return n.dirs&&(W=_r(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&ga(W,n.transition),G=W,Ti(F),G}const w_=t=>{let e;for(const n in t)(n==="class"||n==="style"||si(n))&&((e||(e={}))[n]=t[n]);return e},A_=(t,e)=>{const n={};for(const r in t)(!Ko(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function b_(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Uu(r,a,f):!!a;if(c&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const E=d[g];if(a[E]!==r[E]&&!Ri(f,E))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Uu(r,a,f):!0:!!a;return!1}function Uu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ri(n,i))return!0}return!1}function R_({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bu=t=>t.__isSuspense;function S_(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):Nm(t)}const yt=Symbol.for("v-fgt"),Si=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),Ra=Symbol.for("v-stc"),as=[];let ft=null;function Je(t=!1){as.push(ft=t?null:[])}function P_(){as.pop(),ft=as[as.length-1]||null}let ls=1;function ju(t,e=!1){ls+=t,t<0&&ft&&e&&(ft.hasOnce=!0)}function $u(t){return t.dynamicChildren=ls>0?ft||cr:null,P_(),ls>0&&ft&&ft.push(t),t}function at(t,e,n,r,s,i){return $u(ke(t,e,n,r,s,i,!0))}function C_(t,e,n,r,s){return $u(Kt(t,e,n,r,s,!0))}function qu(t){return t?t.__v_isVNode===!0:!1}function cs(t,e){return t.type===e.type&&t.key===e.key}const Hu=({key:t})=>t??null,Pi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Ue(t)||ie(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function ke(t,e=null,n=null,r=0,s=null,i=t===yt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hu(e),ref:e&&Pi(e),scopeId:lu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return l?(Sa(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),ls>0&&!a&&ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ft.push(c),c}const Kt=k_;function k_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Jm)&&(t=_n),qu(t)){const l=_r(t,e,!0);return n&&Sa(l,n),ls>0&&!i&&ft&&(l.shapeFlag&6?ft[ft.indexOf(t)]=l:ft.push(l)),l.patchFlag=-2,l}if(z_(t)&&(t=t.__vccOpts),e){e=V_(e);let{class:l,style:c}=e;l&&!Ce(l)&&(e.class=ci(l)),we(c)&&(fa(c)&&!ne(c)&&(c=Qe({},c)),e.style=li(c))}const a=Ce(t)?1:Bu(t)?128:Lm(t)?64:we(t)?4:ie(t)?2:0;return ke(t,e,n,r,s,a,i,!0)}function V_(t){return t?fa(t)||bu(t)?Qe({},t):t:null}function _r(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,f=e?x_(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:f,key:f&&Hu(f),ref:e&&e.ref?n&&i?ne(i)?i.concat(Pi(e)):[i,Pi(e)]:Pi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_r(t.ssContent),ssFallback:t.ssFallback&&_r(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ga(d,c.clone(d)),d}function D_(t=" ",e=0){return Kt(Si,null,t,e)}function us(t="",e=!1){return e?(Je(),C_(_n,null,t)):Kt(_n,null,t)}function Ot(t){return t==null||typeof t=="boolean"?Kt(_n):ne(t)?Kt(yt,null,t.slice()):qu(t)?yn(t):Kt(Si,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_r(t)}function Sa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!bu(e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),r&64?(n=16,e=[D_(e)]):n=8);t.children=e,t.shapeFlag|=n}function x_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ci([e.class,r.class]));else if(s==="style")e.style=li([e.style,r.style]);else if(si(s)){const i=e[s],a=r[s];a&&i!==a&&!(ne(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Mt(t,e,n,r=null){xt(t,e,7,[n,r])}const N_=Iu();let O_=0;function M_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||N_,i={uid:O_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Su(r,s),emitsOptions:Lu(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=T_.bind(null,i),t.ce&&t.ce(i),i}let lt=null;const L_=()=>lt||_t;let Ci,Pa;{const t=ai(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ci=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),Pa=e("__VUE_SSR_SETTERS__",n=>fs=n)}const hs=t=>{const e=lt;return Ci(t),t.scope.on(),()=>{t.scope.off(),Ci(e)}},zu=()=>{lt&&lt.scope.off(),Ci(null)};function Wu(t){return t.vnode.shapeFlag&4}let fs=!1;function F_(t,e=!1,n=!1){e&&Pa(e);const{props:r,children:s}=t.vnode,i=Wu(t);a_(t,r,i,e),h_(t,s,n||e);const a=i?U_(t,e):void 0;return e&&Pa(!1),a}function U_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xm);const{setup:r}=n;if(r){kt();const s=t.setupContext=r.length>1?j_(t):null,i=hs(t),a=dr(r,t,0,[t.props,s]),l=Pc(a);if(Vt(),i(),(l||t.sp)&&!ss(t)&&uu(t),l){if(a.then(zu,zu),e)return a.then(c=>{Ku(t,c)}).catch(c=>{vi(c,t,0)});t.asyncDep=a}else Ku(t,a)}else Gu(t)}function Ku(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=tu(e)),Gu(t)}function Gu(t,e,n){const r=t.type;t.render||(t.render=r.render||Pt);{const s=hs(t);kt();try{Zm(t)}finally{Vt(),s()}}}const B_={get(t,e){return Ye(t,"get",""),t[e]}};function j_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,B_),slots:t.slots,emit:t.emit,expose:e}}function ki(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tu(ym(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in is)return is[n](t)},has(e,n){return n in e||n in is}})):t.proxy}const $_=/(?:^|[-_])\w/g,q_=t=>t.replace($_,e=>e.toUpperCase()).replace(/[-_]/g,"");function H_(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function Qu(t,e,n=!1){let r=H_(e);if(!r&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(r=s[1])}if(!r&&t&&t.parent){const s=i=>{for(const a in i)if(i[a]===e)return a};r=s(t.components||t.parent.type.components)||s(t.appContext.components)}return r?q_(r):n?"App":"Anonymous"}function z_(t){return ie(t)&&"__vccOpts"in t}const Yu=(t,e)=>Am(t,e,fs),W_="3.5.24";/**
* @vue/runtime-dom v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ca;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{Ca=Ju.createPolicy("vue",{createHTML:t=>t})}catch{}const Xu=Ca?t=>Ca.createHTML(t):t=>t,K_="http://www.w3.org/2000/svg",G_="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,Zu=Gt&&Gt.createElement("template"),Q_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Gt.createElementNS(K_,t):e==="mathml"?Gt.createElementNS(G_,t):n?Gt.createElement(t,{is:n}):Gt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Gt.createTextNode(t),createComment:t=>Gt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Gt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zu.innerHTML=Xu(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Zu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Y_=Symbol("_vtc");function J_(t,e,n){const r=t[Y_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const eh=Symbol("_vod"),X_=Symbol("_vsh"),Z_=Symbol(""),ey=/(?:^|;)\s*display\s*:/;function ty(t,e,n){const r=t.style,s=Ce(n);let i=!1;if(n&&!s){if(e)if(Ce(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Vi(r,l,"")}else for(const a in e)n[a]==null&&Vi(r,a,"");for(const a in n)a==="display"&&(i=!0),Vi(r,a,n[a])}else if(s){if(e!==n){const a=r[Z_];a&&(n+=";"+a),r.cssText=n,i=ey.test(n)}}else e&&t.removeAttribute("style");eh in t&&(t[eh]=i?r.display:"",t[X_]&&(r.display="none"))}const th=/\s*!important$/;function Vi(t,e,n){if(ne(n))n.forEach(r=>Vi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ny(t,e);th.test(n)?t.setProperty(Un(r),n.replace(th,""),"important"):t[r]=n}}const nh=["Webkit","Moz","ms"],ka={};function ny(t,e){const n=ka[e];if(n)return n;let r=fn(e);if(r!=="filter"&&r in t)return ka[e]=r;r=Vc(r);for(let s=0;s<nh.length;s++){const i=nh[s]+r;if(i in t)return ka[e]=i}return e}const rh="http://www.w3.org/1999/xlink";function sh(t,e,n,r,s,i=Qg(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rh,e.slice(6,e.length)):t.setAttributeNS(rh,e,n):n==null||i&&!Nc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ct(n)?String(n):n)}function ih(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xu(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Nc(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Hn(t,e,n,r){t.addEventListener(e,n,r)}function ry(t,e,n,r){t.removeEventListener(e,n,r)}const oh=Symbol("_vei");function sy(t,e,n,r,s=null){const i=t[oh]||(t[oh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=iy(e);if(r){const f=i[e]=ly(r,s);Hn(t,l,f,c)}else a&&(ry(t,l,a,c),i[e]=void 0)}}const ah=/(?:Once|Passive|Capture)$/;function iy(t){let e;if(ah.test(t)){e={};let r;for(;r=t.match(ah);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Un(t.slice(2)),e]}let Va=0;const oy=Promise.resolve(),ay=()=>Va||(oy.then(()=>Va=0),Va=Date.now());function ly(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;xt(cy(r,n.value),e,5,[r])};return n.value=t,n.attached=ay(),n}function cy(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uy=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?J_(t,r,a):e==="style"?ty(t,n,r):si(e)?Ko(e)||sy(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hy(t,e,r,a))?(ih(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ce(r))?ih(t,fn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sh(t,e,r,a))};function hy(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lh(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lh(e)&&Ce(n)?!1:e in t}const Di=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>oi(e,n):e};function fy(t){t.target.composing=!0}function ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yr=Symbol("_assign");function uh(t,e,n){return e&&(t=t.trim()),n&&(t=Jo(t)),t}const dy={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[yr]=Di(s);const i=r||s.props&&s.props.type==="number";Hn(t,e?"change":"input",a=>{a.target.composing||t[yr](uh(t.value,n,i))}),(n||i)&&Hn(t,"change",()=>{t.value=uh(t.value,n,i)}),e||(Hn(t,"compositionstart",fy),Hn(t,"compositionend",ch),Hn(t,"change",ch))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[yr]=Di(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Jo(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},py={created(t,{value:e},n){t.checked=ui(e,n.props.value),t[yr]=Di(n),Hn(t,"change",()=>{t[yr](gy(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[yr]=Di(r),e!==n&&(t.checked=ui(e,r.props.value))}};function gy(t){return"_value"in t?t._value:t.value}const my=["ctrl","shift","alt","meta"],_y={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>my.some(n=>t[`${n}Key`]&&!e.includes(n))},hh=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let a=0;a<e.length;a++){const l=_y[e[a]];if(l&&l(s,e))return}return t(s,...i)}))},yy=Qe({patchProp:uy},Q_);let fh;function vy(){return fh||(fh=d_(yy))}const Ey=((...t)=>{const e=vy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Iy(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Ty(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Ty(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Iy(t){return Ce(t)?document.querySelector(t):t}var dh={};/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ph=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wy=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},gh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let E=(l&15)<<2|f>>6,S=f&63;c||(S=64,a||(E=64)),r.push(n[d],n[g],n[E],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ph(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wy(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||f==null||g==null)throw new Ay;const E=i<<2|l>>4;if(r.push(E),f!==64){const S=l<<4&240|f>>2;if(r.push(S),g!==64){const V=f<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ay extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const by=function(t){const e=ph(t);return gh.encodeByteArray(e,!0)},xi=function(t){return by(t).replace(/\./g,"")},mh=function(t){try{return gh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Ry(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Sy=()=>Ry().__FIREBASE_DEFAULTS__,Py=()=>{if(typeof process>"u"||typeof dh>"u")return;const t=dh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mh(t[1]);return e&&JSON.parse(e)},Ni=()=>{try{return Sy()||Py()||Cy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_h=t=>{var e,n;return(n=(e=Ni())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ky=t=>{const e=_h(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yh=()=>{var t;return(t=Ni())===null||t===void 0?void 0:t.config},vh=t=>{var e;return(e=Ni())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Dy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[xi(JSON.stringify(n)),xi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Ny(){var t;const e=(t=Ni())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Oy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function My(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fy(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uy(){return!Ny()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function By(){try{return typeof indexedDB=="object"}catch{return!1}}function jy(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const $y="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$y,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?qy(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Qt(s,l,r)}}function qy(t,e){return t.replace(Hy,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hy=/\{\$([^}]+)}/g;function zy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Eh(i)&&Eh(a)){if(!Oi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Eh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ps(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wy(t,e){const n=new Ky(t,e);return n.subscribe.bind(n)}class Ky{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gy(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Da),s.error===void 0&&(s.error=Da),s.complete===void 0&&(s.complete=Da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gy(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Da(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wn="[DEFAULT]";/**
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
 */class Qy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jy(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yy(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yy(t){return t===Wn?void 0:t}function Jy(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Zy={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},ev=ue.INFO,tv={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},nv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=tv[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xa{constructor(e){this.name=e,this._logLevel=ev,this._logHandler=nv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const rv=(t,e)=>e.some(n=>t instanceof n);let Th,Ih;function sv(){return Th||(Th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iv(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wh=new WeakMap,Na=new WeakMap,Ah=new WeakMap,Oa=new WeakMap,Ma=new WeakMap;function ov(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(vn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&wh.set(n,t)}).catch(()=>{}),Ma.set(e,t),e}function av(t){if(Na.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Na.set(t,e)}let La={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Na.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ah.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lv(t){La=t(La)}function cv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fa(this),e,...n);return Ah.set(r,e.sort?e.sort():[e]),vn(r)}:iv().includes(t)?function(...e){return t.apply(Fa(this),e),vn(wh.get(this))}:function(...e){return vn(t.apply(Fa(this),e))}}function uv(t){return typeof t=="function"?cv(t):(t instanceof IDBTransaction&&av(t),rv(t,sv())?new Proxy(t,La):t)}function vn(t){if(t instanceof IDBRequest)return ov(t);if(Oa.has(t))return Oa.get(t);const e=uv(t);return e!==t&&(Oa.set(t,e),Ma.set(e,t)),e}const Fa=t=>Ma.get(t);function hv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=vn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(vn(a.result),c.oldVersion,c.newVersion,vn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const fv=["get","getKey","getAll","getAllKeys","count"],dv=["put","add","delete","clear"],Ua=new Map;function bh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ua.get(e))return Ua.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fv.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[n](...l),s&&c.done]))[0]};return Ua.set(e,i),i}lv(t=>({...t,get:(e,n,r)=>bh(e,n)||t.get(e,n,r),has:(e,n)=>!!bh(e,n)||t.has(e,n)}));/**
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
 */class pv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ba="@firebase/app",Rh="0.10.13";/**
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
 */const Yt=new xa("@firebase/app"),mv="@firebase/app-compat",_v="@firebase/analytics-compat",yv="@firebase/analytics",vv="@firebase/app-check-compat",Ev="@firebase/app-check",Tv="@firebase/auth",Iv="@firebase/auth-compat",wv="@firebase/database",Av="@firebase/data-connect",bv="@firebase/database-compat",Rv="@firebase/functions",Sv="@firebase/functions-compat",Pv="@firebase/installations",Cv="@firebase/installations-compat",kv="@firebase/messaging",Vv="@firebase/messaging-compat",Dv="@firebase/performance",xv="@firebase/performance-compat",Nv="@firebase/remote-config",Ov="@firebase/remote-config-compat",Mv="@firebase/storage",Lv="@firebase/storage-compat",Fv="@firebase/firestore",Uv="@firebase/vertexai-preview",Bv="@firebase/firestore-compat",jv="firebase",$v="10.14.1";/**
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
 */const ja="[DEFAULT]",qv={[Ba]:"fire-core",[mv]:"fire-core-compat",[yv]:"fire-analytics",[_v]:"fire-analytics-compat",[Ev]:"fire-app-check",[vv]:"fire-app-check-compat",[Tv]:"fire-auth",[Iv]:"fire-auth-compat",[wv]:"fire-rtdb",[Av]:"fire-data-connect",[bv]:"fire-rtdb-compat",[Rv]:"fire-fn",[Sv]:"fire-fn-compat",[Pv]:"fire-iid",[Cv]:"fire-iid-compat",[kv]:"fire-fcm",[Vv]:"fire-fcm-compat",[Dv]:"fire-perf",[xv]:"fire-perf-compat",[Nv]:"fire-rc",[Ov]:"fire-rc-compat",[Mv]:"fire-gcs",[Lv]:"fire-gcs-compat",[Fv]:"fire-fst",[Bv]:"fire-fst-compat",[Uv]:"fire-vertex","fire-js":"fire-js",[jv]:"fire-js-all"};/**
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
 */const Mi=new Map,Hv=new Map,$a=new Map;function Sh(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vr(t){const e=t.name;if($a.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,t);for(const n of Mi.values())Sh(n,t);for(const n of Hv.values())Sh(n,t);return!0}function qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
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
 */const zv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new ds("app","Firebase",zv);/**
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
 */class Wv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const Er=$v;function Ph(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ja,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw En.create("bad-app-name",{appName:String(s)});if(n||(n=yh()),!n)throw En.create("no-options");const i=Mi.get(s);if(i){if(Oi(n,i.options)&&Oi(r,i.config))return i;throw En.create("duplicate-app",{appName:s})}const a=new Xy(s);for(const c of $a.values())a.addComponent(c);const l=new Wv(n,r,a);return Mi.set(s,l),l}function Ch(t=ja){const e=Mi.get(t);if(!e&&t===ja&&yh())return Ph();if(!e)throw En.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let s=(r=qv[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(l.join(" "));return}vr(new zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Kv="firebase-heartbeat-database",Gv=1,gs="firebase-heartbeat-store";let Ha=null;function kh(){return Ha||(Ha=hv(Kv,Gv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function Qv(t){try{const n=(await kh()).transaction(gs),r=await n.objectStore(gs).get(Dh(t));return await n.done,r}catch(e){if(e instanceof Qt)Yt.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function Vh(t,e){try{const r=(await kh()).transaction(gs,"readwrite");await r.objectStore(gs).put(e,Dh(t)),await r.done}catch(n){if(n instanceof Qt)Yt.warn(n.message);else{const r=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(r.message)}}}function Dh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Yv=1024,Jv=720*60*60*1e3;class Xv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Jv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xh(),{heartbeatsToSend:r,unsentEntries:s}=Zv(this._heartbeatsCache.heartbeats),i=xi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Yt.warn(n),""}}}function xh(){return new Date().toISOString().substring(0,10)}function Zv(t,e=Yv){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return By()?jy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nh(t){return xi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tE(t){vr(new zn("platform-logger",e=>new pv(e),"PRIVATE")),vr(new zn("heartbeat",e=>new Xv(e),"PRIVATE")),Tn(Ba,Rh,t),Tn(Ba,Rh,"esm2017"),Tn("fire-js","")}tE("");var nE="firebase",rE="10.14.1";/**
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
 */Tn(nE,rE,"app");var Oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kn,Mh;(function(){var t;/** @license

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(I,A,R){for(var v=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)v[pt-2]=arguments[pt];return m.prototype[A].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(A=0;16>A;++A)I[A]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],A=T.g[2];var R=T.g[3],v=m+(R^y&(A^R))+I[0]+3614090360&4294967295;m=y+(v<<7&4294967295|v>>>25),v=R+(A^m&(y^A))+I[1]+3905402710&4294967295,R=m+(v<<12&4294967295|v>>>20),v=A+(y^R&(m^y))+I[2]+606105819&4294967295,A=R+(v<<17&4294967295|v>>>15),v=y+(m^A&(R^m))+I[3]+3250441966&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(R^y&(A^R))+I[4]+4118548399&4294967295,m=y+(v<<7&4294967295|v>>>25),v=R+(A^m&(y^A))+I[5]+1200080426&4294967295,R=m+(v<<12&4294967295|v>>>20),v=A+(y^R&(m^y))+I[6]+2821735955&4294967295,A=R+(v<<17&4294967295|v>>>15),v=y+(m^A&(R^m))+I[7]+4249261313&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(R^y&(A^R))+I[8]+1770035416&4294967295,m=y+(v<<7&4294967295|v>>>25),v=R+(A^m&(y^A))+I[9]+2336552879&4294967295,R=m+(v<<12&4294967295|v>>>20),v=A+(y^R&(m^y))+I[10]+4294925233&4294967295,A=R+(v<<17&4294967295|v>>>15),v=y+(m^A&(R^m))+I[11]+2304563134&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(R^y&(A^R))+I[12]+1804603682&4294967295,m=y+(v<<7&4294967295|v>>>25),v=R+(A^m&(y^A))+I[13]+4254626195&4294967295,R=m+(v<<12&4294967295|v>>>20),v=A+(y^R&(m^y))+I[14]+2792965006&4294967295,A=R+(v<<17&4294967295|v>>>15),v=y+(m^A&(R^m))+I[15]+1236535329&4294967295,y=A+(v<<22&4294967295|v>>>10),v=m+(A^R&(y^A))+I[1]+4129170786&4294967295,m=y+(v<<5&4294967295|v>>>27),v=R+(y^A&(m^y))+I[6]+3225465664&4294967295,R=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(R^m))+I[11]+643717713&4294967295,A=R+(v<<14&4294967295|v>>>18),v=y+(R^m&(A^R))+I[0]+3921069994&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(A^R&(y^A))+I[5]+3593408605&4294967295,m=y+(v<<5&4294967295|v>>>27),v=R+(y^A&(m^y))+I[10]+38016083&4294967295,R=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(R^m))+I[15]+3634488961&4294967295,A=R+(v<<14&4294967295|v>>>18),v=y+(R^m&(A^R))+I[4]+3889429448&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(A^R&(y^A))+I[9]+568446438&4294967295,m=y+(v<<5&4294967295|v>>>27),v=R+(y^A&(m^y))+I[14]+3275163606&4294967295,R=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(R^m))+I[3]+4107603335&4294967295,A=R+(v<<14&4294967295|v>>>18),v=y+(R^m&(A^R))+I[8]+1163531501&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(A^R&(y^A))+I[13]+2850285829&4294967295,m=y+(v<<5&4294967295|v>>>27),v=R+(y^A&(m^y))+I[2]+4243563512&4294967295,R=m+(v<<9&4294967295|v>>>23),v=A+(m^y&(R^m))+I[7]+1735328473&4294967295,A=R+(v<<14&4294967295|v>>>18),v=y+(R^m&(A^R))+I[12]+2368359562&4294967295,y=A+(v<<20&4294967295|v>>>12),v=m+(y^A^R)+I[5]+4294588738&4294967295,m=y+(v<<4&4294967295|v>>>28),v=R+(m^y^A)+I[8]+2272392833&4294967295,R=m+(v<<11&4294967295|v>>>21),v=A+(R^m^y)+I[11]+1839030562&4294967295,A=R+(v<<16&4294967295|v>>>16),v=y+(A^R^m)+I[14]+4259657740&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(y^A^R)+I[1]+2763975236&4294967295,m=y+(v<<4&4294967295|v>>>28),v=R+(m^y^A)+I[4]+1272893353&4294967295,R=m+(v<<11&4294967295|v>>>21),v=A+(R^m^y)+I[7]+4139469664&4294967295,A=R+(v<<16&4294967295|v>>>16),v=y+(A^R^m)+I[10]+3200236656&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(y^A^R)+I[13]+681279174&4294967295,m=y+(v<<4&4294967295|v>>>28),v=R+(m^y^A)+I[0]+3936430074&4294967295,R=m+(v<<11&4294967295|v>>>21),v=A+(R^m^y)+I[3]+3572445317&4294967295,A=R+(v<<16&4294967295|v>>>16),v=y+(A^R^m)+I[6]+76029189&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(y^A^R)+I[9]+3654602809&4294967295,m=y+(v<<4&4294967295|v>>>28),v=R+(m^y^A)+I[12]+3873151461&4294967295,R=m+(v<<11&4294967295|v>>>21),v=A+(R^m^y)+I[15]+530742520&4294967295,A=R+(v<<16&4294967295|v>>>16),v=y+(A^R^m)+I[2]+3299628645&4294967295,y=A+(v<<23&4294967295|v>>>9),v=m+(A^(y|~R))+I[0]+4096336452&4294967295,m=y+(v<<6&4294967295|v>>>26),v=R+(y^(m|~A))+I[7]+1126891415&4294967295,R=m+(v<<10&4294967295|v>>>22),v=A+(m^(R|~y))+I[14]+2878612391&4294967295,A=R+(v<<15&4294967295|v>>>17),v=y+(R^(A|~m))+I[5]+4237533241&4294967295,y=A+(v<<21&4294967295|v>>>11),v=m+(A^(y|~R))+I[12]+1700485571&4294967295,m=y+(v<<6&4294967295|v>>>26),v=R+(y^(m|~A))+I[3]+2399980690&4294967295,R=m+(v<<10&4294967295|v>>>22),v=A+(m^(R|~y))+I[10]+4293915773&4294967295,A=R+(v<<15&4294967295|v>>>17),v=y+(R^(A|~m))+I[1]+2240044497&4294967295,y=A+(v<<21&4294967295|v>>>11),v=m+(A^(y|~R))+I[8]+1873313359&4294967295,m=y+(v<<6&4294967295|v>>>26),v=R+(y^(m|~A))+I[15]+4264355552&4294967295,R=m+(v<<10&4294967295|v>>>22),v=A+(m^(R|~y))+I[6]+2734768916&4294967295,A=R+(v<<15&4294967295|v>>>17),v=y+(R^(A|~m))+I[13]+1309151649&4294967295,y=A+(v<<21&4294967295|v>>>11),v=m+(A^(y|~R))+I[4]+4149444226&4294967295,m=y+(v<<6&4294967295|v>>>26),v=R+(y^(m|~A))+I[11]+3174756917&4294967295,R=m+(v<<10&4294967295|v>>>22),v=A+(m^(R|~y))+I[2]+718787259&4294967295,A=R+(v<<15&4294967295|v>>>17),v=y+(R^(A|~m))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+R&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,I=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=y;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<m;)if(I[A++]=T.charCodeAt(R++),A==this.blockSize){s(this,I),A=0;break}}else for(;R<m;)if(I[A++]=T[R++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var I=0;32>I;I+=8)T[y++]=this.g[m]>>>I&255;return T};function i(T,m){var y=l;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],I=!0,A=T.length-1;0<=A;A--){var R=T[A]|0;I&&R==m||(y[A]=R,I=!1)}this.g=y}var l={};function c(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return F(f(-T));for(var m=[],y=1,I=0;T>=y;I++)m[I]=T/y|0,y*=4294967296;return new a(m,0)}function d(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return F(d(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(m,8)),I=g,A=0;A<T.length;A+=8){var R=Math.min(8,T.length-A),v=parseInt(T.substring(A,A+R),m);8>R?(R=f(Math.pow(m,R)),I=I.j(R).add(f(v))):(I=I.j(y),I=I.add(f(v)))}return I}var g=c(0),E=c(1),S=c(16777216);t=a.prototype,t.m=function(){if(L(this))return-F(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var I=this.i(y);T+=(0<=I?I:4294967296+I)*m,m*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(L(this))return"-"+F(this).toString(T);for(var m=f(Math.pow(T,6)),y=this,I="";;){var A=z(y,m).g;y=G(y,A.j(m));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=A,V(y))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function L(T){return T.h==-1}t.l=function(T){return T=G(this,T),L(T)?-1:V(T)?0:1};function F(T){for(var m=T.g.length,y=[],I=0;I<m;I++)y[I]=~T.g[I];return new a(y,~T.h).add(E)}t.abs=function(){return L(this)?F(this):this},t.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0,A=0;A<=m;A++){var R=I+(this.i(A)&65535)+(T.i(A)&65535),v=(R>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);I=v>>>16,R&=65535,v&=65535,y[A]=v<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(F(m))}t.j=function(T){if(V(this)||V(T))return g;if(L(this))return L(T)?F(this).j(F(T)):F(F(this).j(T));if(L(T))return F(this.j(F(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<T.g.length;A++){var R=this.i(I)>>>16,v=this.i(I)&65535,pt=T.i(A)>>>16,Nn=T.i(A)&65535;y[2*I+2*A]+=v*Nn,q(y,2*I+2*A),y[2*I+2*A+1]+=R*Nn,q(y,2*I+2*A+1),y[2*I+2*A+1]+=v*pt,q(y,2*I+2*A+1),y[2*I+2*A+2]+=R*pt,q(y,2*I+2*A+2)}for(I=0;I<m;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=m;I<2*m;I++)y[I]=0;return new a(y,0)};function q(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function W(T,m){this.g=T,this.h=m}function z(T,m){if(V(m))throw Error("division by zero");if(V(T))return new W(g,g);if(L(T))return m=z(F(T),m),new W(F(m.g),F(m.h));if(L(m))return m=z(T,F(m)),new W(F(m.g),m.h);if(30<T.g.length){if(L(T)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var y=E,I=m;0>=I.l(T);)y=te(y),I=te(I);var A=ge(y,1),R=ge(I,1);for(I=ge(I,2),y=ge(y,2);!V(I);){var v=R.add(I);0>=v.l(T)&&(A=A.add(y),R=v),I=ge(I,1),y=ge(y,1)}return m=G(T,A.j(m)),new W(A,m)}for(A=g;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=f(y),v=R.j(m);L(v)||0<v.l(T);)y-=I,R=f(y),v=R.j(m);V(R)&&(R=E),A=A.add(R),T=G(T,v)}return new W(A,T)}t.A=function(T){return z(this,T).h},t.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)&T.i(I);return new a(y,this.h&T.h)},t.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)|T.i(I);return new a(y,this.h|T.h)},t.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],I=0;I<m;I++)y[I]=this.i(I)^T.i(I);return new a(y,this.h^T.h)};function te(T){for(var m=T.g.length+1,y=[],I=0;I<m;I++)y[I]=T.i(I)<<1|T.i(I-1)>>>31;return new a(y,T.h)}function ge(T,m){var y=m>>5;m%=32;for(var I=T.g.length-y,A=[],R=0;R<I;R++)A[R]=0<m?T.i(R+y)>>>m|T.i(R+y+1)<<32-m:T.i(R+y);return new a(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Mh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,Kn=a}).apply(typeof Oh<"u"?Oh:typeof self<"u"?self:typeof window<"u"?window:{});var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lh,ms,Fh,Fi,za,Uh,Bh,jh;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Li=="object"&&Li];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var P=h++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function f(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function E(o,u,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,E.apply(null,arguments)}function S(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,P){for(var j=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)j[Ie-2]=arguments[Ie];return u.prototype[b].apply(p,j)}}function L(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function F(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const b=o.length||0,P=p.length||0;o.length=b+P;for(let j=0;j<P;j++)o[b+j]=p[j]}else o.push(p)}}class G{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function q(o){return/^[\s\xa0]*$/.test(o)}function W(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var te=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function ge(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function T(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let P=0;P<y.length;P++)h=y[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function R(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class pt{constructor(){this.h=this.g=null}add(u,h){const p=Nn.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Nn=new G(()=>new He,o=>o.reset());class He{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,me=!1,Rt=new pt,nr=()=>{const o=l.Promise.resolve(void 0);Ee=()=>{o.then(ln)}};var ln=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){R(h)}var u=Nn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var cc=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o})();function rr(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(te){e:{try{z(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:sr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rr.aa.h.call(this)}}V(rr,Me);var sr={2:"touch",3:"pen",4:"mouse"};rr.prototype.h=function(){rr.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),qs=0;function Co(o,u,h,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=b,this.key=++qs,this.da=this.fa=!1}function $t(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Hs(o){this.src=o,this.g={},this.h=0}Hs.prototype.add=function(o,u,h,p,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=w(o,u,p,b);return-1<j?(u=o[j],h||(u.fa=!1)):(u=new Co(u,this.src,P,!!p,b),u.fa=h,o.push(u)),u};function _(o,u){var h=u.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(p,b,1),P&&($t(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function w(o,u,h,p){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==u&&P.capture==!!h&&P.ha==p)return b}return-1}var C="closure_lm_"+(1e6*Math.random()|0),M={};function D(o,u,h,p,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)D(o,u[P],h,p,b);return null}return h=ee(h),o&&o[cn]?o.K(u,h,f(p)?!!p.capture:!1,b):x(o,u,h,!1,p,b)}function x(o,u,h,p,b,P){if(!u)throw Error("Invalid event type");var j=f(b)?!!b.capture:!!b,Ie=H(o);if(Ie||(o[C]=Ie=new Hs(o)),h=Ie.add(u,h,p,j,P),h.proxy)return h;if(p=$(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)cc||(b=j),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(N(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function $(){function o(h){return u.call(o.src,o.listener,h)}const u=X;return o}function B(o,u,h,p,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(o,u[P],h,p,b);else p=f(p)?!!p.capture:!!p,h=ee(h),o&&o[cn]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],h=w(P,h,p,b),-1<h&&($t(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,h,p,b)),(h=-1<o?u[o]:null)&&U(h))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[cn])_(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(N(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=H(u))?(_(h,o),h.h==0&&(h.src=null,u[C]=null)):$t(o)}}}function N(o){return o in M?M[o]:M[o]="on"+o}function X(o,u){if(o.da)o=!0;else{u=new rr(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&U(o),o=h.call(p,u)}return o}function H(o){return o=o[C],o instanceof Hs?o:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(o){return typeof o=="function"?o:(o[Y]||(o[Y]=function(u){return o.handleEvent(u)}),o[Y])}function Z(){Oe.call(this),this.i=new Hs(this),this.M=this,this.F=null}V(Z,Oe),Z.prototype[cn]=!0,Z.prototype.removeEventListener=function(o,u,h,p){B(this,o,u,h,p)};function le(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var b=u;u=new Me(p,o),I(u,b)}if(b=!0,h)for(var P=h.length-1;0<=P;P--){var j=u.g=h[P];b=fe(j,p,!0,u)&&b}if(j=u.g=o,b=fe(j,p,!0,u)&&b,b=fe(j,p,!1,u)&&b,h)for(P=0;P<h.length;P++)j=u.g=h[P],b=fe(j,p,!1,u)&&b}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)$t(h[p]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},Z.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function fe(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==h){var Ie=j.listener,Ge=j.ha||j.src;j.fa&&_(o.i,j),b=Ie.call(Ge,p)!==!1&&b}}return b&&!p.defaultPrevented}function ze(o,u,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function We(o){o.g=ze(()=>{o.g=null,o.i&&(o.i=!1,We(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Tt extends Oe{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){Oe.call(this),this.h=o,this.g={}}V(nt,Oe);var On=[];function zs(o){ge(o.g,function(u,h){this.g.hasOwnProperty(h)&&U(u)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),zs(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ke=l.JSON.stringify,It=l.JSON.parse,ko=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function qr(){}qr.prototype.h=null;function Yp(o){return o.h||(o.h=o.i())}function Jp(){}var Ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uc(){Me.call(this,"d")}V(uc,Me);function hc(){Me.call(this,"c")}V(hc,Me);var ir={},Xp=null;function Vo(){return Xp=Xp||new Z}ir.La="serverreachability";function Zp(o){Me.call(this,ir.La,o)}V(Zp,Me);function Ks(o){const u=Vo();le(u,new Zp(u))}ir.STAT_EVENT="statevent";function eg(o,u){Me.call(this,ir.STAT_EVENT,o),this.stat=u}V(eg,Me);function ct(o){const u=Vo();le(u,new eg(u,o))}ir.Ma="timingevent";function tg(o,u){Me.call(this,ir.Ma,o),this.size=u}V(tg,Me);function Gs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Qs(){this.g=!0}Qs.prototype.xa=function(){this.g=!1};function k0(o,u,h,p,b,P){o.info(function(){if(o.g)if(P)for(var j="",Ie=P.split("&"),Ge=0;Ge<Ie.length;Ge++){var _e=Ie[Ge].split("=");if(1<_e.length){var rt=_e[0];_e=_e[1];var st=rt.split("_");j=2<=st.length&&st[1]=="type"?j+(rt+"="+_e+"&"):j+(rt+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+h+`
`+j})}function V0(o,u,h,p,b,P,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+h+`
`+P+" "+j})}function Hr(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+x0(o,h)+(p?" "+p:"")})}function D0(o,u){o.info(function(){return"TIMEOUT: "+u})}Qs.prototype.info=function(){};function x0(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<b.length;j++)b[j]=""}}}}return Ke(h)}catch{return u}}var Do={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ng={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fc;function xo(){}V(xo,qr),xo.prototype.g=function(){return new XMLHttpRequest},xo.prototype.i=function(){return{}},fc=new xo;function Mn(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rg}function rg(){this.i=null,this.g="",this.h=!1}var sg={},dc={};function pc(o,u,h){o.L=1,o.v=Lo(un(u)),o.m=h,o.P=!0,ig(o,null)}function ig(o,u){o.F=Date.now(),No(o),o.A=un(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),vg(h.i,"t",p),o.C=0,h=o.j.J,o.h=new rg,o.g=Lg(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Tt(E(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(On[0]=b.toString()),b=On);for(var P=0;P<b.length;P++){var j=D(h,b[P],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ks(),k0(o.i,o.u,o.A,o.l,o.R,o.m)}Mn.prototype.ca=function(o){o=o.target;const u=this.M;u&&hn(o)==3?u.j():this.Y(o)},Mn.prototype.Y=function(o){try{if(o==this.g)e:{const st=hn(this.g);var u=this.g.Ba();const Kr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Rg(this.g)))){this.J||st!=4||u==7||(u==8||0>=Kr?Ks(3):Ks(2)),gc(this);var h=this.g.Z();this.X=h;t:if(og(this)){var p=Rg(this.g);o="";var b=p.length,P=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Ys(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,V0(this.i,this.u,this.A,this.l,this.R,st,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,Ge=this.g;if((Ie=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Ie)){var _e=Ie;break t}}_e=null}if(h=_e)Hr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mc(this,h);else{this.o=!1,this.s=3,ct(12),or(this),Ys(this);break e}}if(this.P){h=!0;let St;for(;!this.J&&this.C<j.length;)if(St=N0(this,j),St==dc){st==4&&(this.s=4,ct(14),h=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(St==sg){this.s=4,ct(15),Hr(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else Hr(this.i,this.l,St,null),mc(this,St);if(og(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||j.length!=0||this.h.h||(this.s=1,ct(16),h=!1),this.o=this.o&&h,!h)Hr(this.i,this.l,j,"[Invalid Chunked Response]"),or(this),Ys(this);else if(0<j.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ic(rt),rt.M=!0,ct(11))}}else Hr(this.i,this.l,j,null),mc(this,j);st==4&&or(this),this.o&&!this.J&&(st==4?xg(this.j,this):(this.o=!1,No(this)))}else J0(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),or(this),Ys(this)}}}catch{}finally{}};function og(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function N0(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?dc:(h=Number(u.substring(h,p)),isNaN(h)?sg:(p+=1,p+h>u.length?dc:(u=u.slice(p,p+h),o.C=p+h,u)))}Mn.prototype.cancel=function(){this.J=!0,or(this)};function No(o){o.S=Date.now()+o.I,ag(o,o.I)}function ag(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Gs(E(o.ba,o),u)}function gc(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Mn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(D0(this.i,this.A),this.L!=2&&(Ks(),ct(17)),or(this),this.s=2,Ys(this)):ag(this,this.S-o)};function Ys(o){o.j.G==0||o.J||xg(o.j,o)}function or(o){gc(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,zs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function mc(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||_c(h.h,o))){if(!o.K&&_c(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)qo(h),jo(h);else break e;Tc(h),ct(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Gs(E(h.Za,h),6e3));if(1>=ug(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else lr(h,11)}else if((o.K||h.g==o)&&qo(h),!q(u))for(b=h.Da.g.parse(u),u=0;u<b.length;u++){let _e=b[u];if(h.T=_e[0],_e=_e[1],h.G==2)if(_e[0]=="c"){h.K=_e[1],h.ia=_e[2];const rt=_e[3];rt!=null&&(h.la=rt,h.j.info("VER="+h.la));const st=_e[4];st!=null&&(h.Aa=st,h.j.info("SVER="+h.Aa));const Kr=_e[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(p=1.5*Kr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const St=o.g;if(St){const zo=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zo){var P=p.h;P.g||zo.indexOf("spdy")==-1&&zo.indexOf("quic")==-1&&zo.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(yc(P,P.h),P.h=null))}if(p.D){const wc=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;wc&&(p.ya=wc,Re(p.I,p.D,wc))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var j=o;if(p.qa=Mg(p,p.J?p.ia:null,p.W),j.K){hg(p.h,j);var Ie=j,Ge=p.L;Ge&&(Ie.I=Ge),Ie.B&&(gc(Ie),No(Ie)),p.g=j}else Vg(p);0<h.i.length&&$o(h)}else _e[0]!="stop"&&_e[0]!="close"||lr(h,7);else h.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?lr(h,7):Ec(h):_e[0]!="noop"&&h.l&&h.l.ta(_e),h.v=0)}}Ks(4)}catch{}}var O0=class{constructor(o,u){this.g=o,this.map=u}};function lg(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cg(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ug(o){return o.h?1:o.g?o.g.size:0}function _c(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function yc(o,u){o.g?o.g.add(u):o.h=u}function hg(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}lg.prototype.cancel=function(){if(this.i=fg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fg(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return L(o.i)}function M0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function L0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function dg(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=L0(o),p=M0(o),b=p.length,P=0;P<b;P++)u.call(void 0,p[P],h&&h[P],o)}var pg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F0(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var P=o[h].substring(0,p);b=o[h].substring(p+1)}else P=o[h];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,Oo(this,o.j),this.o=o.o,this.g=o.g,Mo(this,o.s),this.l=o.l;var u=o.i,h=new Zs;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),gg(this,h),this.m=o.m}else o&&(u=String(o).match(pg))?(this.h=!1,Oo(this,u[1]||"",!0),this.o=Js(u[2]||""),this.g=Js(u[3]||"",!0),Mo(this,u[4]),this.l=Js(u[5]||"",!0),gg(this,u[6]||"",!0),this.m=Js(u[7]||"")):(this.h=!1,this.i=new Zs(null,this.h))}ar.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Xs(u,mg,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Xs(u,mg,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Xs(h,h.charAt(0)=="/"?j0:B0,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Xs(h,q0)),o.join("")};function un(o){return new ar(o)}function Oo(o,u,h){o.j=h?Js(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Mo(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function gg(o,u,h){u instanceof Zs?(o.i=u,H0(o.i,o.h)):(h||(u=Xs(u,$0)),o.i=new Zs(u,o.h))}function Re(o,u,h){o.i.set(u,h)}function Lo(o){return Re(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Js(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xs(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,U0),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function U0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var mg=/[#\/\?@]/g,B0=/[#\?:]/g,j0=/[#\?]/g,$0=/[#\?@]/g,q0=/#/g;function Zs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Ln(o){o.g||(o.g=new Map,o.h=0,o.i&&F0(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}t=Zs.prototype,t.add=function(o,u){Ln(this),this.i=null,o=zr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function _g(o,u){Ln(o),u=zr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function yg(o,u){return Ln(o),u=zr(o,u),o.g.has(u)}t.forEach=function(o,u){Ln(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(u,b,p,this)},this)},this)},t.na=function(){Ln(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const b=o[p];for(let P=0;P<b.length;P++)h.push(u[p])}return h},t.V=function(o){Ln(this);let u=[];if(typeof o=="string")yg(this,o)&&(u=u.concat(this.g.get(zr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},t.set=function(o,u){return Ln(this),this.i=null,o=zr(this,o),yg(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function vg(o,u,h){_g(o,u),0<h.length&&(o.i=null,o.g.set(zr(o,u),L(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const P=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var b=P;j[p]!==""&&(b+="="+encodeURIComponent(String(j[p]))),o.push(b)}}return this.i=o.join("&")};function zr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function H0(o,u){u&&!o.j&&(Ln(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(_g(this,p),vg(this,b,h))},o)),o.j=u}function z0(o,u){const h=new Qs;if(l.Image){const p=new Image;p.onload=S(Fn,h,"TestLoadImage: loaded",!0,u,p),p.onerror=S(Fn,h,"TestLoadImage: error",!1,u,p),p.onabort=S(Fn,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(Fn,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function W0(o,u){const h=new Qs,p=new AbortController,b=setTimeout(()=>{p.abort(),Fn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(b),P.ok?Fn(h,"TestPingServer: ok",!0,u):Fn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),Fn(h,"TestPingServer: error",!1,u)})}function Fn(o,u,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function K0(){this.g=new ko}function G0(o,u,h){const p=h||"";try{dg(o,function(b,P){let j=b;f(b)&&(j=Ke(b)),u.push(p+P+"="+encodeURIComponent(j))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function Fo(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Fo,qr),Fo.prototype.g=function(){return new Uo(this.l,this.j)},Fo.prototype.i=(function(o){return function(){return o}})({});function Uo(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Uo,Z),t=Uo.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ti(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ti(this)),this.g&&(this.readyState=3,ti(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eg(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eg(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ei(this):ti(this),this.readyState==3&&Eg(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ei(this))},t.Qa=function(o){this.g&&(this.response=o,ei(this))},t.ga=function(){this.g&&ei(this)};function ei(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ti(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function ti(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tg(o){let u="";return ge(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function vc(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Tg(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Re(o,u,h))}function Pe(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Pe,Z);var Q0=/^https?$/i,Y0=["POST","PUT"];t=Pe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fc.g(),this.v=this.o?Yp(this.o):Yp(fc),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Ig(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Y0,u,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bg(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Ig(this,P)}};function Ig(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,wg(o),Bo(o)}function wg(o){o.A||(o.A=!0,le(o,"complete"),le(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,le(this,"complete"),le(this,"abort"),Bo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bo(this,!0)),Pe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ag(this):this.bb())},t.bb=function(){Ag(this)};function Ag(o){if(o.h&&typeof a<"u"&&(!o.v[1]||hn(o)!=4||o.Z()!=2)){if(o.u&&hn(o)==4)ze(o.Ea,0,o);else if(le(o,"readystatechange"),hn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=j===0){var b=String(o.D).match(pg)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!Q0.test(b?b.toLowerCase():"")}h=p}if(h)le(o,"complete"),le(o,"success");else{o.m=6;try{var P=2<hn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",wg(o)}}finally{Bo(o)}}}}function Bo(o,u){if(o.g){bg(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||le(o,"ready");try{h.onreadystatechange=p}catch{}}}function bg(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function hn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),It(u)}};function Rg(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function J0(o){const u={};o=(o.g&&2<=hn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(q(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=u[b]||[];u[b]=P,P.push(h)}T(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ni(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Sg(o){this.Aa=0,this.i=[],this.j=new Qs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ni("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ni("baseRetryDelayMs",5e3,o),this.cb=ni("retryDelaySeedMs",1e4,o),this.Wa=ni("forwardChannelMaxRetries",2,o),this.wa=ni("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new lg(o&&o.concurrentRequestLimit),this.Da=new K0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sg.prototype,t.la=8,t.G=1,t.connect=function(o,u,h,p){ct(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Mg(this,null,this.W),$o(this)};function Ec(o){if(Pg(o),o.G==3){var u=o.U++,h=un(o.I);if(Re(h,"SID",o.K),Re(h,"RID",u),Re(h,"TYPE","terminate"),ri(o,h),u=new Mn(o,o.j,u),u.L=2,u.v=Lo(un(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Lg(u.j,null),u.g.ea(u.v)),u.F=Date.now(),No(u)}Og(o)}function jo(o){o.g&&(Ic(o),o.g.cancel(),o.g=null)}function Pg(o){jo(o),o.u&&(l.clearTimeout(o.u),o.u=null),qo(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function $o(o){if(!cg(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ee||nr(),me||(Ee(),me=!0),Rt.add(u,o),o.B=0}}function X0(o,u){return ug(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Gs(E(o.Ga,o,u),Ng(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new Mn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=kg(this,b,u),h=un(this.I),Re(h,"RID",o),Re(h,"CVER",22),this.D&&Re(h,"X-HTTP-Session-Id",this.D),ri(this,h),P&&(this.O?u="headers="+encodeURIComponent(String(Tg(P)))+"&"+u:this.m&&vc(h,this.m,P)),yc(this.h,b),this.Ua&&Re(h,"TYPE","init"),this.P?(Re(h,"$req",u),Re(h,"SID","null"),b.T=!0,pc(b,h,null)):pc(b,h,u),this.G=2}}else this.G==3&&(o?Cg(this,o):this.i.length==0||cg(this.h)||Cg(this))};function Cg(o,u){var h;u?h=u.l:h=o.U++;const p=un(o.I);Re(p,"SID",o.K),Re(p,"RID",h),Re(p,"AID",o.T),ri(o,p),o.m&&o.o&&vc(p,o.m,o.o),h=new Mn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=kg(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),yc(o.h,h),pc(h,p,u)}function ri(o,u){o.H&&ge(o.H,function(h,p){Re(u,p,h)}),o.l&&dg({},function(h,p){Re(u,p,h)})}function kg(o,u,h){h=Math.min(o.i.length,h);var p=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let P=-1;for(;;){const j=["count="+h];P==-1?0<h?(P=b[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Ie=!0;for(let Ge=0;Ge<h;Ge++){let _e=b[Ge].g;const rt=b[Ge].map;if(_e-=P,0>_e)P=Math.max(0,b[Ge].g-100),Ie=!1;else try{G0(rt,j,"req"+_e+"_")}catch{p&&p(rt)}}if(Ie){p=j.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function Vg(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ee||nr(),me||(Ee(),me=!0),Rt.add(u,o),o.v=0}}function Tc(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Gs(E(o.Fa,o),Ng(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Dg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Gs(E(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),jo(this),Dg(this))};function Ic(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Dg(o){o.g=new Mn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=un(o.qa);Re(u,"RID","rpc"),Re(u,"SID",o.K),Re(u,"AID",o.T),Re(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Re(u,"TO",o.ja),Re(u,"TYPE","xmlhttp"),ri(o,u),o.m&&o.o&&vc(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Lo(un(u)),h.m=null,h.P=!0,ig(h,o)}t.Za=function(){this.C!=null&&(this.C=null,jo(this),Tc(this),ct(19))};function qo(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function xg(o,u){var h=null;if(o.g==u){qo(o),Ic(o),o.g=null;var p=2}else if(_c(o.h,u))h=u.D,hg(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=Vo(),le(p,new tg(p,h)),$o(o)}else Vg(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&X0(o,u)||p==2&&Tc(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),b){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function Ng(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function lr(o,u){if(o.j.info("Error code "+u),u==2){var h=E(o.fb,o),p=o.Xa;const b=!p;p=new ar(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Oo(p,"https"),Lo(p),b?z0(p.toString(),h):W0(p.toString(),h)}else ct(2);o.G=0,o.l&&o.l.sa(u),Og(o),Pg(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Og(o){if(o.G=0,o.ka=[],o.l){const u=fg(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Mg(o,u,h){var p=h instanceof ar?un(h):new ar(h);if(p.g!="")u&&(p.g=u+"."+p.g),Mo(p,p.s);else{var b=l.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new ar(null);p&&Oo(P,p),u&&(P.g=u),b&&Mo(P,b),h&&(P.l=h),p=P}return h=o.D,u=o.ya,h&&u&&Re(p,h,u),Re(p,"VER",o.la),ri(o,p),p}function Lg(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Pe(new Fo({eb:h})):new Pe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fg(){}t=Fg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ho(){}Ho.prototype.g=function(o,u){return new gt(o,u)};function gt(o,u){Z.call(this),this.g=new Sg(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Wr(this)}V(gt,Z),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Ec(this.g)},gt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ke(o),o=h);u.i.push(new O0(u.Ya++,o)),u.G==3&&$o(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,Ec(this.g),delete this.g,gt.aa.N.call(this)};function Ug(o){uc.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Ug,uc);function Bg(){hc.call(this),this.status=1}V(Bg,hc);function Wr(o){this.g=o}V(Wr,Fg),Wr.prototype.ua=function(){le(this.g,"a")},Wr.prototype.ta=function(o){le(this.g,new Ug(o))},Wr.prototype.sa=function(o){le(this.g,new Bg)},Wr.prototype.ra=function(){le(this.g,"b")},Ho.prototype.createWebChannel=Ho.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,jh=function(){return new Ho},Bh=function(){return Vo()},Uh=ir,za={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,Fi=Do,ng.COMPLETE="complete",Fh=ng,Jp.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",Z.prototype.listen=Z.prototype.K,ms=Jp,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,Lh=Pe}).apply(typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{});const $h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Tr="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Gn=new xa("@firebase/firestore");function _s(){return Gn.logLevel}function Q(t,...e){if(Gn.logLevel<=ue.DEBUG){const n=e.map(Wa);Gn.debug(`Firestore (${Tr}): ${t}`,...n)}}function Xt(t,...e){if(Gn.logLevel<=ue.ERROR){const n=e.map(Wa);Gn.error(`Firestore (${Tr}): ${t}`,...n)}}function Ir(t,...e){if(Gn.logLevel<=ue.WARN){const n=e.map(Wa);Gn.warn(`Firestore (${Tr}): ${t}`,...n)}}function Wa(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${Tr}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function ve(t,e){t||re()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zt{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class qh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ze.UNAUTHENTICATED)))}shutdown(){}}class iE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class oE{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zt)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new qh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ze(e)}}class aE{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lE{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new aE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable((()=>n(Ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ve(this.o===void 0);const r=i=>{i.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ve(typeof n.token=="string"),this.R=n.token,new cE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Hh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=hE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function wr(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new De(0,0))}static max(){return new ae(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ys{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ys.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ys?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends ys{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new be(n)}static emptyPath(){return new be([])}}const fE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ys{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return fE.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new K(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(be.fromString(e))}static fromName(e){return new J(be.fromString(e).popFirst(5))}static empty(){return new J(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new be(e.slice()))}}function dE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ae.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new In(s,J.empty(),e)}function pE(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new In(ae.min(),J.empty(),-1)}static max(){return new In(ae.max(),J.empty(),-1)}}function gE(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const mE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _E{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function vs(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==mE)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):O.reject(n)}static resolve(e){return new O(((n,r)=>{n(e)}))}static reject(e){return new O(((n,r)=>{r(e)}))}static waitFor(e){return new O(((n,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&n()}),(c=>r(c)))})),a=!0,i===s&&n()}))}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next((s=>s?O.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new O(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const f=c;n(e[f]).next((d=>{a[f]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new O(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function yE(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ka{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ka.oe=-1;function Ui(t){return t==null}function Bi(t){return t===0&&1/t==-1/0}function vE(t){return typeof t=="number"&&Number.isInteger(t)&&!Bi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function zh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}}class ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??je.RED,this.left=s??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1,je.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $e{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Kh(this.data.getIterator())}getIteratorFrom(e){return new Kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class At{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new At([])}unionWith(e){let n=new $e(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wr(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Gh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Gh("Invalid base64 string: "+i):i}})(e);return new qe(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const EE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=EE.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qn(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function Ga(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qa(t){const e=t.mapValue.fields.__previous_value__;return Ga(e)?Qa(e):e}function Ts(t){const e=wn(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class TE{constructor(e,n,r,s,i,a,l,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=f}}class Is{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Is("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Is&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $i={mapValue:{}};function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ga(t)?4:wE(t)?9007199254740991:IE(t)?10:11:re()}function Lt(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ts(t).isEqual(Ts(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=wn(s.timestampValue),l=wn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ve(s.doubleValue),l=Ve(i.doubleValue);return a===l?Bi(a)===Bi(l):isNaN(a)&&isNaN(l)}return!1})(t,e);case 9:return wr(t.arrayValue.values||[],e.arrayValue.values||[],Lt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(zh(a)!==zh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Lt(a[c],l[c])))return!1;return!0})(t,e);default:return re()}}function ws(t,e){return(t.values||[]).find((n=>Lt(n,e)))!==void 0}function br(t,e){if(t===e)return 0;const n=Yn(t),r=Yn(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Ve(i.integerValue||i.doubleValue),c=Ve(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Qh(t.timestampValue,e.timestampValue);case 4:return Qh(Ts(t),Ts(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return(function(i,a){const l=Qn(i),c=Qn(a);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let f=0;f<l.length&&f<c.length;f++){const d=pe(l[f],c[f]);if(d!==0)return d}return pe(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=pe(Ve(i.latitude),Ve(a.latitude));return l!==0?l:pe(Ve(i.longitude),Ve(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Yh(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var l,c,f,d;const g=i.fields||{},E=a.fields||{},S=(l=g.value)===null||l===void 0?void 0:l.arrayValue,V=(c=E.value)===null||c===void 0?void 0:c.arrayValue,L=pe(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return L!==0?L:Yh(S,V)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===$i.mapValue&&a===$i.mapValue)return 0;if(i===$i.mapValue)return 1;if(a===$i.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),f=a.fields||{},d=Object.keys(f);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const E=pe(c[g],d[g]);if(E!==0)return E;const S=br(l[c[g]],f[d[g]]);if(S!==0)return S}return pe(c.length,d.length)})(t.mapValue,e.mapValue);default:throw re()}}function Qh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=wn(t),r=wn(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function Yh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=br(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function Rr(t){return Ya(t)}function Ya(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=wn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Qn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return J.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ya(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ya(n.fields[a])}`;return s+"}"})(t.mapValue):re()}function Jh(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ja(t){return!!t&&"integerValue"in t}function Xa(t){return!!t&&"arrayValue"in t}function Xh(t){return!!t&&"nullValue"in t}function Zh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qi(t){return!!t&&"mapValue"in t}function IE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function As(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=As(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=As(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wE(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=As(n)}setAll(e){let n=Be.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=As(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ar(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Et(As(this.value))}}function ef(t){const e=[];return Ar(t.fields,((n,r)=>{const s=new Be([n]);if(qi(r)){const i=ef(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class et{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new et(e,0,ae.min(),ae.min(),ae.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,ae.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,ae.min(),ae.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,ae.min(),ae.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Hi{constructor(e,n){this.position=e,this.inclusive=n}}function tf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(a.referenceValue),n.key):r=br(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function AE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class rf{}class xe extends rf{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RE(e,n,r):n==="array-contains"?new CE(e,r):n==="in"?new kE(e,r):n==="not-in"?new VE(e,r):n==="array-contains-any"?new DE(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new SE(e,r):new PE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(br(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(br(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends rf{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new bt(e,n)}matches(e){return sf(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function sf(t){return t.op==="and"}function of(t){return bE(t)&&sf(t)}function bE(t){for(const e of t.filters)if(e instanceof bt)return!1;return!0}function Za(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Rr(t.value);if(of(t))return t.filters.map((e=>Za(e))).join(",");{const e=t.filters.map((n=>Za(n))).join(",");return`${t.op}(${e})`}}function af(t,e){return t instanceof xe?(function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&Lt(r.value,s.value)})(t,e):t instanceof bt?(function(r,s){return s instanceof bt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&af(a,s.filters[l])),!0):!1})(t,e):void re()}function lf(t){return t instanceof xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Rr(n.value)}`})(t):t instanceof bt?(function(n){return n.op.toString()+" {"+n.getFilters().map(lf).join(" ,")+"}"})(t):"Filter"}class RE extends xe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class SE extends xe{constructor(e,n){super(e,"in",n),this.keys=cf("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class PE extends xe{constructor(e,n){super(e,"not-in",n),this.keys=cf("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function cf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>J.fromName(r.referenceValue)))}class CE extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xa(n)&&ws(n.arrayValue,this.value)}}class kE extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ws(this.value.arrayValue,n)}}class VE extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ws(this.value.arrayValue,n)}}class DE extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xa(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>ws(this.value.arrayValue,r)))}}/**
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
 */class xE{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function uf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new xE(t,e,n,r,s,i,a)}function el(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Za(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ui(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Rr(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Rr(r))).join(",")),e.ue=n}return e.ue}function tl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!af(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nf(t.startAt,e.startAt)&&nf(t.endAt,e.endAt)}function nl(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bs{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function NE(t,e,n,r,s,i,a,l){return new bs(t,e,n,r,s,i,a,l)}function rl(t){return new bs(t)}function hf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ff(t){return t.collectionGroup!==null}function Rs(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new $e(Be.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((f=>{f.isInequality()&&(l=l.add(f.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new zi(i,r))})),n.has(Be.keyField().canonicalString())||e.ce.push(new zi(Be.keyField(),r))}return e.ce}function Ft(t){const e=oe(t);return e.le||(e.le=OE(e,Rs(t))),e.le}function OE(t,e){if(t.limitType==="F")return uf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)}));const n=t.endAt?new Hi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hi(t.startAt.position,t.startAt.inclusive):null;return uf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sl(t,e){const n=t.filters.concat([e]);return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function il(t,e,n){return new bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wi(t,e){return tl(Ft(t),Ft(e))&&t.limitType===e.limitType}function df(t){return`${el(Ft(t))}|lt:${t.limitType}`}function Sr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>lf(s))).join(", ")}]`),Ui(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Rr(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Rr(s))).join(",")),`Target(${r})`})(Ft(t))}; limitType=${t.limitType})`}function Ki(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Rs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const f=tf(a,l,c);return a.inclusive?f<=0:f<0})(r.startAt,Rs(r),s)||r.endAt&&!(function(a,l,c){const f=tf(a,l,c);return a.inclusive?f>=0:f>0})(r.endAt,Rs(r),s))})(t,e)}function ME(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function pf(t){return(e,n)=>{let r=!1;for(const s of Rs(t)){const i=LE(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function LE(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):(function(i,a,l){const c=a.data.field(i),f=l.data.field(i);return c!==null&&f!==null?br(c,f):re()})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Pr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ar(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Wh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const FE=new Se(J.comparator);function en(){return FE}const gf=new Se(J.comparator);function Ss(...t){let e=gf;for(const n of t)e=e.insert(n.key,n);return e}function mf(t){let e=gf;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Jn(){return Ps()}function _f(){return Ps()}function Ps(){return new Pr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const UE=new Se(J.comparator),BE=new $e(J.comparator);function ce(...t){let e=BE;for(const n of t)e=e.add(n);return e}const jE=new $e(pe);function $E(){return jE}/**
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
 */function ol(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function yf(t){return{integerValue:""+t}}function qE(t,e){return vE(e)?yf(e):ol(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Gi{constructor(){this._=void 0}}function HE(t,e,n){return t instanceof Qi?(function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ga(i)&&(i=Qa(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}})(n,e):t instanceof Cs?Ef(t,e):t instanceof ks?Tf(t,e):(function(s,i){const a=vf(s,i),l=If(a)+If(s.Pe);return Ja(a)&&Ja(s.Pe)?yf(l):ol(s.serializer,l)})(t,e)}function zE(t,e,n){return t instanceof Cs?Ef(t,e):t instanceof ks?Tf(t,e):n}function vf(t,e){return t instanceof Yi?(function(r){return Ja(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Qi extends Gi{}class Cs extends Gi{constructor(e){super(),this.elements=e}}function Ef(t,e){const n=wf(e);for(const r of t.elements)n.some((s=>Lt(s,r)))||n.push(r);return{arrayValue:{values:n}}}class ks extends Gi{constructor(e){super(),this.elements=e}}function Tf(t,e){let n=wf(e);for(const r of t.elements)n=n.filter((s=>!Lt(s,r)));return{arrayValue:{values:n}}}class Yi extends Gi{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function If(t){return Ve(t.integerValue||t.doubleValue)}function wf(t){return Xa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WE(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Cs&&s instanceof Cs||r instanceof ks&&s instanceof ks?wr(r.elements,s.elements,Lt):r instanceof Yi&&s instanceof Yi?Lt(r.Pe,s.Pe):r instanceof Qi&&s instanceof Qi})(t.transform,e.transform)}class KE{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ji(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xi{}function Af(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cf(t.key,tn.none()):new Ds(t.key,t.data,tn.none());{const n=t.data,r=Et.empty();let s=new $e(Be.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Xn(t.key,r,new At(s.toArray()),tn.none())}}function GE(t,e,n){t instanceof Ds?(function(s,i,a){const l=s.value.clone(),c=Sf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Xn?(function(s,i,a){if(!Ji(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Sf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Rf(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function Vs(t,e,n,r){return t instanceof Ds?(function(i,a,l,c){if(!Ji(i.precondition,a))return l;const f=i.value.clone(),d=Pf(i.fieldTransforms,c,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null})(t,e,n,r):t instanceof Xn?(function(i,a,l,c){if(!Ji(i.precondition,a))return l;const f=Pf(i.fieldTransforms,c,a),d=a.data;return d.setAll(Rf(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(t,e,n,r):(function(i,a,l){return Ji(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(t,e,n)}function QE(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=vf(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wr(r,s,((i,a)=>WE(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ds extends Xi{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends Xi{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rf(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Sf(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,zE(a,l,n[s]))}return r}function Pf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,HE(i,a,e))}return r}class Cf extends Xi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YE extends Xi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class JE{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GE(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_f();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Af(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ae.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ce())}isEqual(e){return this.batchId===e.batchId&&wr(this.mutations,e.mutations,((n,r)=>bf(n,r)))&&wr(this.baseMutations,e.baseMutations,((n,r)=>bf(n,r)))}}class al{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=(function(){return UE})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new al(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class XE{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ZE{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var Ne,he;function eT(t){switch(t){default:return re();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function kf(t){if(t===void 0)return Xt("GRPC error has no .code"),k.UNKNOWN;switch(t){case Ne.OK:return k.OK;case Ne.CANCELLED:return k.CANCELLED;case Ne.UNKNOWN:return k.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return k.INTERNAL;case Ne.UNAVAILABLE:return k.UNAVAILABLE;case Ne.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ne.NOT_FOUND:return k.NOT_FOUND;case Ne.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ne.ABORTED:return k.ABORTED;case Ne.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ne.DATA_LOSS:return k.DATA_LOSS;default:return re()}}(he=Ne||(Ne={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function tT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const nT=new Kn([4294967295,4294967295],0);function Vf(t){const e=tT().encode(t),n=new Mh;return n.update(e),new Uint8Array(n.digest())}function Df(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kn([n,r],0),new Kn([s,i],0)]}class ll{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xs(`Invalid padding: ${n}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Kn.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Kn.fromNumber(r)));return s.compare(nT)===1&&(s=new Kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Vf(e),[r,s]=Df(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ll(i,s,n);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.Ie===0)return;const n=Vf(e),[r,s]=Df(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zi{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ns.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zi(ae.min(),s,new Se(pe),en(),ce())}}class Ns{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ns(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class xf{constructor(e,n){this.targetId=e,this.me=n}}class Nf{constructor(e,n,r=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Of{constructor(){this.fe=0,this.ge=Lf(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ce(),n=ce(),r=ce();return this.ge.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}})),new Ns(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Lf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class rT{constructor(e){this.Le=e,this.Be=new Map,this.ke=en(),this.qe=Mf(),this.Qe=new Se(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,(n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach(((r,s)=>{this.ze(s)&&n(s)}))}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(nl(i))if(r===0){const a=new J(i.path);this.Ue(n,a,et.newNoDocument(a,ae.min()))}else ve(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(n);const f=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,f)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Qn(r).toUint8Array()}catch(c){if(c instanceof Gh)return Ir("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ll(a,s,i)}catch(c){return Ir(c instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)})),s}rt(e){const n=new Map;this.Be.forEach(((i,a)=>{const l=this.Je(a);if(l){if(i.current&&nl(l.target)){const c=new J(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,et.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}}));let r=ce();this.qe.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const f=this.Je(c);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ke.forEach(((i,a)=>a.setReadTime(e)));const s=new Zi(e,n,this.Qe,this.ke,r);return this.ke=en(),this.qe=Mf(),this.Qe=new Se(pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Of,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Of),this.Le.getRemoteKeysForTarget(e).forEach((n=>{this.Ue(e,n,null)}))}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Mf(){return new Se(J.comparator)}function Lf(){return new Se(J.comparator)}const sT={asc:"ASCENDING",desc:"DESCENDING"},iT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oT={and:"AND",or:"OR"};class aT{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cl(t,e){return t.useProto3Json||Ui(e)?e:{value:e}}function to(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ff(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lT(t,e){return to(t,e.toTimestamp())}function Ut(t){return ve(!!t),ae.fromTimestamp((function(n){const r=wn(n);return new De(r.seconds,r.nanos)})(t))}function ul(t,e){return hl(t,e).canonicalString()}function hl(t,e){const n=(function(s){return new be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Uf(t){const e=be.fromString(t);return ve(zf(e)),e}function fl(t,e){return ul(t.databaseId,e.path)}function dl(t,e){const n=Uf(e);if(n.get(1)!==t.databaseId.projectId)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(jf(n))}function Bf(t,e){return ul(t.databaseId,e)}function cT(t){const e=Uf(t);return e.length===4?be.emptyPath():jf(e)}function pl(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jf(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function $f(t,e,n){return{name:fl(t,e),fields:n.value.mapValue.fields}}function uT(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:re()})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(f,d){return f.useProto3Json?(ve(d===void 0||typeof d=="string"),qe.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),qe.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(f){const d=f.code===void 0?k.UNKNOWN:kf(f.code);return new K(d,f.message||"")})(a);n=new Nf(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dl(t,r.document.name),i=Ut(r.document.updateTime),a=r.document.createTime?Ut(r.document.createTime):ae.min(),l=new Et({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,a,l),f=r.targetIds||[],d=r.removedTargetIds||[];n=new eo(f,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dl(t,r.document),i=r.readTime?Ut(r.readTime):ae.min(),a=et.newNoDocument(s,i),l=r.removedTargetIds||[];n=new eo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dl(t,r.document),i=r.removedTargetIds||[];n=new eo([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new ZE(s,i),l=r.targetId;n=new xf(l,a)}}return n}function hT(t,e){let n;if(e instanceof Ds)n={update:$f(t,e.key,e.value)};else if(e instanceof Cf)n={delete:fl(t,e.key)};else if(e instanceof Xn)n={update:$f(t,e.key,e.data),updateMask:ET(e.fieldMask)};else{if(!(e instanceof YE))return re();n={verify:fl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof Qi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Cs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ks)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw re()})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:lT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()})(t,e.precondition)),n}function fT(t,e){return t&&t.length>0?(ve(e!==void 0),t.map((n=>(function(s,i){let a=s.updateTime?Ut(s.updateTime):Ut(i);return a.isEqual(ae.min())&&(a=Ut(i)),new KE(a,s.transformResults||[])})(n,e)))):[]}function dT(t,e){return{documents:[Bf(t,e.path)]}}function pT(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bf(t,s);const i=(function(f){if(f.length!==0)return Hf(bt.create(f,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(f){if(f.length!==0)return f.map((d=>(function(E){return{field:Cr(E.field),direction:_T(E.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=cl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{_t:n,parent:s}}function gT(t){let e=cT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(g){const E=qf(g);return E instanceof bt&&of(E)?E.getFilters():[E]})(n.where));let a=[];n.orderBy&&(a=(function(g){return g.map((E=>(function(V){return new zi(kr(V.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(E)))})(n.orderBy));let l=null;n.limit&&(l=(function(g){let E;return E=typeof g=="object"?g.value:g,Ui(E)?null:E})(n.limit));let c=null;n.startAt&&(c=(function(g){const E=!!g.before,S=g.values||[];return new Hi(S,E)})(n.startAt));let f=null;return n.endAt&&(f=(function(g){const E=!g.before,S=g.values||[];return new Hi(S,E)})(n.endAt)),NE(e,s,a,i,l,"F",c,f)}function mT(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qf(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=kr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=kr(n.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return re()}})(t):t.fieldFilter!==void 0?(function(n){return xe.create(kr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return bt.create(n.compositeFilter.filters.map((r=>qf(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}})(n.compositeFilter.op))})(t):re()}function _T(t){return sT[t]}function yT(t){return iT[t]}function vT(t){return oT[t]}function Cr(t){return{fieldPath:t.canonicalString()}}function kr(t){return Be.fromServerFormat(t.fieldPath)}function Hf(t){return t instanceof xe?(function(n){if(n.op==="=="){if(Zh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NAN"}};if(Xh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NAN"}};if(Xh(n.value))return{unaryFilter:{field:Cr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Cr(n.field),op:yT(n.op),value:n.value}}})(t):t instanceof bt?(function(n){const r=n.getFilters().map((s=>Hf(s)));return r.length===1?r[0]:{compositeFilter:{op:vT(n.op),filters:r}}})(t):re()}function ET(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function zf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class An{constructor(e,n,r,s,i=ae.min(),a=ae.min(),l=qe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new An(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class TT{constructor(e){this.ct=e}}function IT(t){const e=gT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?il(e,e.limit,"L"):e}/**
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
 */class wT{constructor(){this.un=new AT}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(In.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class AT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vr(0)}static kn(){return new Vr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bT{constructor(){this.changes=new Pr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class RT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ST{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Vs(r.mutation,s,At.empty(),De.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ce()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ce()){const s=Jn();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=Ss();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=Jn();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ce())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{n.set(a,l)}))}))}computeViews(e,n,r,s){let i=en();const a=Ps(),l=(function(){return Ps()})();return n.forEach(((c,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof Xn)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),Vs(d.mutation,f,d.mutation.getFieldMask(),De.now())):a.set(f.key,At.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((f,d)=>a.set(f,d))),n.forEach(((f,d)=>{var g;return l.set(f,new RT(d,(g=a.get(f))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,n){const r=Ps();let s=new Se(((a,l)=>a-l)),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const l of a)l.keys().forEach((c=>{const f=n.get(c);if(f===null)return;let d=r.get(c)||At.empty();d=l.applyToLocalView(f,d),r.set(c,d);const g=(s.get(l.batchId)||ce()).add(c);s=s.insert(l.batchId,g)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),f=c.key,d=c.value,g=_f();d.forEach((E=>{if(!i.has(E)){const S=Af(n.get(E),r.get(E));S!==null&&g.set(E,S),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return O.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return J.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ff(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Jn());let l=-1,c=i;return a.next((f=>O.forEach(f,((d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?O.resolve():this.remoteDocumentCache.getEntry(e,d).next((E=>{c=c.insert(d,E)}))))).next((()=>this.populateOverlays(e,f,i))).next((()=>this.computeViews(e,c,f,ce()))).next((d=>({batchId:l,changes:mf(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next((r=>{let s=Ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Ss();return this.indexManager.getCollectionParents(e,i).next((l=>O.forEach(l,(c=>{const f=(function(g,E){return new bs(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next((d=>{d.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((c,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,et.newInvalidDocument(d)))}));let l=Ss();return a.forEach(((c,f)=>{const d=i.get(c);d!==void 0&&Vs(d.mutation,f,At.empty(),De.now()),Ki(n,f)&&(l=l.insert(c,f))})),l}))}}/**
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
 */class PT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}})(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,(function(s){return{name:s.name,query:IT(s.bundledQuery),readTime:Ut(s.readTime)}})(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class CT{constructor(){this.overlays=new Se(J.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jn();return O.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.ht(e,n,i)})),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Jn(),i=n.length+1,a=new J(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,f=c.getKey();if(!n.isPrefixOf(f.path))break;f.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se(((f,d)=>f-d));const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===n&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Jn(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const l=Jn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((f,d)=>l.set(f,d))),!(l.size()>=s)););return O.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new XE(n,r));let i=this.Ir.get(n);i===void 0&&(i=ce(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kT{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class gl{constructor(){this.Tr=new $e(Le.Er),this.dr=new $e(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach((r=>this.removeReference(r,n)))}gr(e){const n=new J(new be([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.dr.forEachInRange([r,s],(a=>{this.Vr(a),i.push(a.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new be([])),r=new Le(n,e),s=new Le(n,e+1);let i=ce();return this.dr.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class VT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Le.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new JE(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new Le(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],(a=>{const l=this.Dr(a.wr);i.push(l)})),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(pe);return n.forEach((s=>{const i=new Le(s,0),a=new Le(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],(l=>{r=r.add(l.wr)}))})),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const a=new Le(new J(i),0);let l=new $e(pe);return this.br.forEachWhile((c=>{const f=c.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(c.wr)),!0)}),a),O.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach((r=>{const s=this.Dr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,(s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.br=r}))}On(e){}containsKey(e,n){const r=new Le(n,0),s=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class DT{constructor(e){this.Mr=e,this.docs=(function(){return new Se(J.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=en();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))})),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=en();const a=n.path,l=new J(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:f,value:{document:d}}=c.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||gE(pE(d),r)<=0||(s.has(d.key)||Ki(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}Or(e,n){return O.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new xT(this)}getSize(e){return O.resolve(this.size)}}class xT extends bT{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)})),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class NT{constructor(e){this.persistence=e,this.Nr=new Pr((n=>el(n)),tl),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gl,this.targetCount=0,this.kr=Vr.Bn()}forEachTarget(e,n){return this.Nr.forEach(((r,s)=>n(s))),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach(((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),O.waitFor(i).next((()=>s))}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class OT{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ka(0),this.Kr=!1,this.Kr=!0,this.$r=new kT,this.referenceDelegate=e(this),this.Ur=new NT(this),this.indexManager=new wT,this.remoteDocumentCache=(function(s){return new DT(s)})((r=>this.referenceDelegate.Wr(r))),this.serializer=new TT(n),this.Gr=new PT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VT(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const s=new MT(this.Qr.next());return this.referenceDelegate.zr(),r(s).next((i=>this.referenceDelegate.jr(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Hr(e,n){return O.or(Object.values(this.qr).map((r=>()=>r.containsKey(e,n))))}}class MT extends _E{constructor(e){super(),this.currentSequenceNumber=e}}class ml{constructor(e){this.persistence=e,this.Jr=new gl,this.Yr=null}static Zr(e){return new ml(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach((s=>this.Xr.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.Xr.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,(r=>{const s=J.fromPath(r);return this.ei(e,s).next((i=>{i||n.removeEntry(s,ae.min())}))})).next((()=>(this.Yr=null,n.apply(e))))}updateLimboDocument(e,n){return this.ei(e,n).next((r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())}))}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _l{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _l(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class LT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=(function(){return Uy()?8:yE(Xe())>0?6:4})()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Zi(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new LT;return this.Xi(e,n,a).next((l=>{if(i.result=l,this.zi)return this.es(e,n,a,l.size)}))})).next((()=>i.result))}es(e,n,r,s){return r.documentReadCount<this.ji?(_s()<=ue.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Sr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(_s()<=ue.DEBUG&&Q("QueryEngine","Query:",Sr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(_s()<=ue.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Sr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(n))):O.resolve())}Yi(e,n){if(hf(n))return O.resolve(null);let r=Ft(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=il(n,null,"F"),r=Ft(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=ce(...i);return this.Ji.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const f=this.ts(n,l);return this.ns(n,f,a,c.readTime)?this.Yi(e,il(n,null,"F")):this.rs(e,f,n,c)}))))})))))}Zi(e,n,r,s){return hf(n)||s.isEqual(ae.min())?O.resolve(null):this.Ji.getDocuments(e,r).next((i=>{const a=this.ts(n,i);return this.ns(n,a,r,s)?O.resolve(null):(_s()<=ue.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sr(n)),this.rs(e,a,n,dE(s,-1)).next((l=>l)))}))}ts(e,n){let r=new $e(pf(e));return n.forEach(((s,i)=>{Ki(e,i)&&(r=r.add(i))})),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return _s()<=ue.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Sr(n)),this.Ji.getDocumentsMatchingQuery(e,n,In.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */class UT{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Se(pe),this._s=new Pr((i=>el(i)),tl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ST(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.os)))}}function BT(t,e,n,r){return new UT(t,e,n,r)}async function Wf(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=ce();for(const f of s){a.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}for(const f of i){l.push(f.batchId);for(const d of f.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next((f=>({hs:f,removedBatchIds:a,addedBatchIds:l})))}))}))}function jT(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return(function(l,c,f,d){const g=f.batch,E=g.keys();let S=O.resolve();return E.forEach((V=>{S=S.next((()=>d.getEntry(c,V))).next((L=>{const F=f.docVersions.get(V);ve(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,f),L.isValidDocument()&&(L.setReadTime(f.commitVersion),d.addEntry(L)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(c,g)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=ce();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(c=c.add(l.batch.mutations[f].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Kf(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Ur.getLastRemoteSnapshotVersion(n)))}function $T(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach(((d,g)=>{const E=s.get(g);if(!E)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,g).next((()=>n.Ur.addMatchingKeys(i,d.addedDocuments,g))));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(qe.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(g,S),(function(L,F,G){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(E,S,d)&&l.push(n.Ur.updateTargetData(i,S))}));let c=en(),f=ce();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(qT(i,a,e.documentUpdates).next((d=>{c=d.Ps,f=d.Is}))),!r.isEqual(ae.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next((g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return O.waitFor(l).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,f))).next((()=>c))})).then((i=>(n.os=s,i)))}function qT(t,e,n){let r=ce(),s=ce();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=en();return n.forEach(((l,c)=>{const f=i.get(l);c.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ae.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!f.isValidDocument()||c.version.compareTo(f.version)>0||c.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):Q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",c.version)})),{Ps:a,Is:s}}))}function HT(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function zT(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Ur.getTargetData(r,e).next((i=>i?(s=i,O.resolve(s)):n.Ur.allocateTargetId(r).next((a=>(s=new An(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r}))}async function yl(t,e,n){const r=oe(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Es(a))throw a;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Gf(t,e,n){const r=oe(t);let s=ae.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,f,d){const g=oe(c),E=g._s.get(d);return E!==void 0?O.resolve(g.os.get(E)):g.Ur.getTargetData(f,d)})(r,a,Ft(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.ss.getDocumentsMatchingQuery(a,e,n?s:ae.min(),n?i:ce()))).next((l=>(WT(r,ME(e),l),{documents:l,Ts:i})))))}function WT(t,e,n){let r=t.us.get(e)||ae.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.us.set(e,r)}class Qf{constructor(){this.activeTargetIds=$E()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KT{constructor(){this.so=new Qf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GT{_o(e){}shutdown(){}}/**
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
 */class Yf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let no=null;function vl(){return no===null?no=(function(){return 268435456+Math.round(2147483648*Math.random())})():no++,"0x"+no.toString(16)}/**
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
 */const QT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class YT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const tt="WebChannelConnection";class JT extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,a){const l=vl(),c=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,a),this.No(n,c,f,s).then((d=>(Q("RestConnection",`Received RPC '${n}' ${l}: `,d),d)),(d=>{throw Ir("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d}))}Lo(n,r,s,i,a,l){return this.Mo(n,r,s,i,a)}Oo(n,r,s){n["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Tr})(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach(((i,a)=>n[a]=i)),s&&s.headers.forEach(((i,a)=>n[a]=i))}xo(n,r){const s=QT[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=vl();return new Promise(((a,l)=>{const c=new Lh;c.setWithCredentials(!0),c.listenOnce(Fh.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case Fi.NO_ERROR:const d=c.getResponseJson();Q(tt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Fi.TIMEOUT:Q(tt,`RPC '${e}' ${i} timed out`),l(new K(k.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const g=c.getStatus();if(Q(tt,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const V=(function(F){const G=F.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(G)>=0?G:k.UNKNOWN})(S.status);l(new K(V,S.message))}else l(new K(k.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new K(k.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Q(tt,`RPC '${e}' ${i} completed.`)}}));const f=JSON.stringify(s);Q(tt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",f,r,15)}))}Bo(e,n,r){const s=vl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=jh(),l=Bh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(c.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Q(tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);let E=!1,S=!1;const V=new YT({Io:F=>{S?Q(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(E||(Q(tt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),Q(tt,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},To:()=>g.close()}),L=(F,G,q)=>{F.listen(G,(W=>{try{q(W)}catch(z){setTimeout((()=>{throw z}),0)}}))};return L(g,ms.EventType.OPEN,(()=>{S||(Q(tt,`RPC '${e}' stream ${s} transport opened.`),V.yo())})),L(g,ms.EventType.CLOSE,(()=>{S||(S=!0,Q(tt,`RPC '${e}' stream ${s} transport closed`),V.So())})),L(g,ms.EventType.ERROR,(F=>{S||(S=!0,Ir(tt,`RPC '${e}' stream ${s} transport errored:`,F),V.So(new K(k.UNAVAILABLE,"The operation could not be completed")))})),L(g,ms.EventType.MESSAGE,(F=>{var G;if(!S){const q=F.data[0];ve(!!q);const W=q,z=W.error||((G=W[0])===null||G===void 0?void 0:G.error);if(z){Q(tt,`RPC '${e}' stream ${s} received error:`,z);const te=z.status;let ge=(function(y){const I=Ne[y];if(I!==void 0)return kf(I)})(te),T=z.message;ge===void 0&&(ge=k.INTERNAL,T="Unknown error status: "+te+" with message "+z.message),S=!0,V.So(new K(ge,T)),g.close()}else Q(tt,`RPC '${e}' stream ${s} received:`,q),V.bo(q)}})),L(l,Uh.STAT_EVENT,(F=>{F.stat===za.PROXY?Q(tt,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===za.NOPROXY&&Q(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.wo()}),0),V}}function El(){return typeof document<"u"?document:null}/**
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
 */function ro(t){return new aT(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Jf{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Xf{constructor(e,n,r,s,i,a,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Jf(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.Yo===n&&this.P_(r,s)}),(r=>{e((()=>{const s=new K(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)}))}))}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo((()=>{r((()=>this.listener.Eo()))})),this.stream.Ro((()=>{r((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((s=>{r((()=>this.I_(s)))})),this.stream.onMessage((s=>{r((()=>++this.e_==1?this.E_(s):this.onNext(s)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget((()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XT extends Xf{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=uT(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ae.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?Ut(a.readTime):ae.min()})(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=pl(this.serializer),n.addTarget=(function(i,a){let l;const c=a.target;if(l=nl(c)?{documents:dT(i,c)}:{query:pT(i,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ff(i,a.resumeToken);const f=cl(i,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(ae.min())>0){l.readTime=to(i,a.snapshotVersion.toTimestamp());const f=cl(i,a.expectedCount);f!==null&&(l.expectedCount=f)}return l})(this.serializer,e);const r=mT(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=pl(this.serializer),n.removeTarget=e,this.a_(n)}}class ZT extends Xf{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=fT(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=pl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>hT(this.serializer,r)))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class eI extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Mo(e,hl(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(k.UNKNOWN,i.toString())}))}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Lo(e,hl(n,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(k.UNKNOWN,a.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class tI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xt(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nI{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((a=>{r.enqueueAndForget((async()=>{Zn(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await(async function(c){const f=oe(c);f.L_.add(4),await Os(f),f.q_.set("Unknown"),f.L_.delete(4),await so(f)})(this))}))})),this.q_=new tI(r,s)}}async function so(t){if(Zn(t))for(const e of t.B_)await e(!0)}async function Os(t){for(const e of t.B_)await e(!1)}function Zf(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Al(n)?wl(n):Dr(n).r_()&&Il(n,e))}function Tl(t,e){const n=oe(t),r=Dr(n);n.N_.delete(e),r.r_()&&ed(n,e),n.N_.size===0&&(r.r_()?r.o_():Zn(n)&&n.q_.set("Unknown"))}function Il(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Dr(t).A_(e)}function ed(t,e){t.Q_.xe(e),Dr(t).R_(e)}function wl(t){t.Q_=new rT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Dr(t).start(),t.q_.v_()}function Al(t){return Zn(t)&&!Dr(t).n_()&&t.N_.size>0}function Zn(t){return oe(t).L_.size===0}function td(t){t.Q_=void 0}async function rI(t){t.q_.set("Online")}async function sI(t){t.N_.forEach(((e,n)=>{Il(t,e)}))}async function iI(t,e){td(t),Al(t)?(t.q_.M_(e),wl(t)):t.q_.set("Unknown")}async function oI(t,e,n){if(t.q_.set("Online"),e instanceof Nf&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))})(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await io(t,r)}else if(e instanceof eo?t.Q_.Ke(e):e instanceof xf?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ae.min()))try{const r=await Kf(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const l=i.Q_.rt(a);return l.targetChanges.forEach(((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(f);d&&i.N_.set(f,d.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,f)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(qe.EMPTY_BYTE_STRING,d.snapshotVersion)),ed(i,c);const g=new An(d.target,c,f,d.sequenceNumber);Il(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await io(t,r)}}async function io(t,e,n){if(!Es(e))throw e;t.L_.add(1),await Os(t),t.q_.set("Offline"),n||(n=()=>Kf(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await so(t)}))}function nd(t,e){return e().catch((n=>io(t,n,e)))}async function oo(t){const e=oe(t),n=bn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;aI(e);)try{const s=await HT(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,lI(e,s)}catch(s){await io(e,s)}rd(e)&&sd(e)}function aI(t){return Zn(t)&&t.O_.length<10}function lI(t,e){t.O_.push(e);const n=bn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function rd(t){return Zn(t)&&!bn(t).n_()&&t.O_.length>0}function sd(t){bn(t).start()}async function cI(t){bn(t).p_()}async function uI(t){const e=bn(t);for(const n of t.O_)e.m_(n.mutations)}async function hI(t,e,n){const r=t.O_.shift(),s=al.from(r,e,n);await nd(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await oo(t)}async function fI(t,e){e&&bn(t).V_&&await(async function(r,s){if((function(a){return eT(a)&&a!==k.ABORTED})(s.code)){const i=r.O_.shift();bn(r).s_(),await nd(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await oo(r)}})(t,e),rd(t)&&sd(t)}async function id(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Zn(n);n.L_.add(3),await Os(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await so(n)}async function dI(t,e){const n=oe(t);e?(n.L_.delete(2),await so(n)):e||(n.L_.add(2),await Os(n),n.q_.set("Unknown"))}function Dr(t){return t.K_||(t.K_=(function(n,r,s){const i=oe(n);return i.w_(),new XT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Eo:rI.bind(null,t),Ro:sI.bind(null,t),mo:iI.bind(null,t),d_:oI.bind(null,t)}),t.B_.push((async e=>{e?(t.K_.s_(),Al(t)?wl(t):t.q_.set("Unknown")):(await t.K_.stop(),td(t))}))),t.K_}function bn(t){return t.U_||(t.U_=(function(n,r,s){const i=oe(n);return i.w_(),new ZT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:cI.bind(null,t),mo:fI.bind(null,t),f_:uI.bind(null,t),g_:hI.bind(null,t)}),t.B_.push((async e=>{e?(t.U_.s_(),await oo(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))}))),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new bl(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rl(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),Es(t))return new K(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ss(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class od{constructor(){this.W_=new Se(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Nr{constructor(e,n,r,s,i,a,l,c,f){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=f}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((l=>{a.push({type:0,doc:l})})),new Nr(e,n,xr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pI{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class gI{constructor(){this.queries=ad(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=ad(),i.forEach(((a,l)=>{for(const c of l.j_)c.onError(r)}))})(this,new K(k.ABORTED,"Firestore shutting down"))}}function ad(){return new Pr((t=>df(t)),Wi)}async function ld(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new pI,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=Rl(a,`Initialization of query '${Sr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Sl(n)}async function cd(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.j_.indexOf(e);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mI(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.j_)l.X_(s)&&(r=!0);a.z_=s}}r&&Sl(n)}function _I(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Sl(t){t.Y_.forEach((e=>{e.next()}))}var Pl,ud;(ud=Pl||(Pl={})).ea="default",ud.Cache="cache";class hd{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Nr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Nr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Pl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fd{constructor(e){this.key=e}}class dd{constructor(e){this.key=e}}class yI{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ce(),this.mutatedKeys=ce(),this.Aa=pf(e),this.Ra=new xr(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new od,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const E=s.get(d),S=Ki(this.query,g)?g:null,V=!!E&&this.mutatedKeys.has(E.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let F=!1;E&&S?E.data.isEqual(S.data)?V!==L&&(r.track({type:3,doc:S}),F=!0):this.ga(E,S)||(r.track({type:2,doc:S}),F=!0,(c&&this.Aa(S,c)>0||f&&this.Aa(S,f)<0)&&(l=!0)):!E&&S?(r.track({type:0,doc:S}),F=!0):E&&!S&&(r.track({type:1,doc:E}),F=!0,(c||f)&&(l=!0)),F&&(S?(a=a.add(S),i=L?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort(((d,g)=>(function(S,V){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return L(S)-L(V)})(d.type,g.type)||this.Aa(d.doc,g.doc))),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,f=c!==this.Ea;return this.Ea=c,a.length!==0||f?{snapshot:new Nr(this.query,e.Ra,i,a,e.mutatedKeys,c===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new od,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((n=>this.Ta=this.Ta.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ta=this.Ta.delete(n))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ce(),this.Ra.forEach((r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))}));const n=[];return e.forEach((r=>{this.da.has(r)||n.push(new dd(r))})),this.da.forEach((r=>{e.has(r)||n.push(new fd(r))})),n}ba(e){this.Ta=e.Ts,this.da=ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Nr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EI{constructor(e){this.key=e,this.va=!1}}class TI{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Pr((l=>df(l)),Wi),this.Ma=new Map,this.xa=new Set,this.Oa=new Se(J.comparator),this.Na=new Map,this.La=new gl,this.Ba={},this.ka=new Map,this.qa=Vr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function II(t,e,n=!0){const r=Td(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await pd(r,e,n,!0),s}async function wI(t,e){const n=Td(t);await pd(n,e,!0,!1)}async function pd(t,e,n,r){const s=await zT(t.localStore,Ft(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await AI(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Zf(t.remoteStore,s),l}async function AI(t,e,n,r,s){t.Ka=(g,E,S)=>(async function(L,F,G,q){let W=F.view.ma(G);W.ns&&(W=await Gf(L.localStore,F.query,!1).then((({documents:T})=>F.view.ma(T,W))));const z=q&&q.targetChanges.get(F.targetId),te=q&&q.targetMismatches.get(F.targetId)!=null,ge=F.view.applyChanges(W,L.isPrimaryClient,z,te);return Ed(L,F.targetId,ge.wa),ge.snapshot})(t,g,E,S);const i=await Gf(t.localStore,e,!0),a=new yI(e,i.Ts),l=a.ma(i.documents),c=Ns.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),f=a.applyChanges(l,t.isPrimaryClient,c);Ed(t,n,f.wa);const d=new vI(e,n,a);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),f.snapshot}async function bI(t,e,n){const r=oe(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter((a=>!Wi(a,e)))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await yl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Tl(r.remoteStore,s.targetId),Cl(r,s.targetId)})).catch(vs)):(Cl(r,s.targetId),await yl(r.localStore,s.targetId,!0))}async function RI(t,e){const n=oe(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tl(n.remoteStore,r.targetId))}async function SI(t,e,n){const r=NI(t);try{const s=await(function(a,l){const c=oe(a),f=De.now(),d=l.reduce(((S,V)=>S.add(V.key)),ce());let g,E;return c.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let V=en(),L=ce();return c.cs.getEntries(S,d).next((F=>{V=F,V.forEach(((G,q)=>{q.isValidDocument()||(L=L.add(G))}))})).next((()=>c.localDocuments.getOverlayedDocuments(S,V))).next((F=>{g=F;const G=[];for(const q of l){const W=QE(q,g.get(q.key).overlayedDocument);W!=null&&G.push(new Xn(q.key,W,ef(W.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(S,f,G,l)})).next((F=>{E=F;const G=F.applyToLocalDocumentSet(g,L);return c.documentOverlayCache.saveOverlays(S,F.batchId,G)}))})).then((()=>({batchId:E.batchId,changes:mf(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,c){let f=a.Ba[a.currentUser.toKey()];f||(f=new Se(pe)),f=f.insert(l,c),a.Ba[a.currentUser.toKey()]=f})(r,s.batchId,n),await Ms(r,s.changes),await oo(r.remoteStore)}catch(s){const i=Rl(s,"Failed to persist write");n.reject(i)}}async function gd(t,e){const n=oe(t);try{const r=await $T(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Na.get(i);a&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?ve(a.va):s.removedDocuments.size>0&&(ve(a.va),a.va=!1))})),await Ms(n,r,e)}catch(r){await vs(r)}}function md(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach(((i,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=oe(a);c.onlineState=l;let f=!1;c.queries.forEach(((d,g)=>{for(const E of g.j_)E.Z_(l)&&(f=!0)})),f&&Sl(c)})(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PI(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let a=new Se(J.comparator);a=a.insert(i,et.newNoDocument(i,ae.min()));const l=ce().add(i),c=new Zi(ae.min(),new Map,new Se(pe),a,l);await gd(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),kl(r)}else await yl(r.localStore,e,!1).then((()=>Cl(r,e,n))).catch(vs)}async function CI(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await jT(n.localStore,e);yd(n,r,null),_d(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ms(n,s)}catch(s){await vs(s)}}async function kI(t,e,n){const r=oe(t);try{const s=await(function(a,l){const c=oe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let d;return c.mutationQueue.lookupMutationBatch(f,l).next((g=>(ve(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(f,g)))).next((()=>c.mutationQueue.performConsistencyCheck(f))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(f,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d))).next((()=>c.localDocuments.getDocuments(f,d)))}))})(r.localStore,e);yd(r,e,n),_d(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ms(r,s)}catch(s){await vs(s)}}function _d(t,e){(t.ka.get(e)||[]).forEach((n=>{n.resolve()})),t.ka.delete(e)}function yd(t,e,n){const r=oe(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach((r=>{t.La.containsKey(r)||vd(t,r)}))}function vd(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Tl(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),kl(t))}function Ed(t,e,n){for(const r of n)r instanceof fd?(t.La.addReference(r.key,e),VI(t,r)):r instanceof dd?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||vd(t,r.key)):re()}function VI(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),kl(t))}function kl(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(be.fromString(e)),r=t.qa.next();t.Na.set(r,new EI(n)),t.Oa=t.Oa.insert(n,r),Zf(t.remoteStore,new An(Ft(rl(n.path)),r,"TargetPurposeLimboResolution",Ka.oe))}}async function Ms(t,e,n){const r=oe(t),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((l,c)=>{a.push(r.Ka(c,e,n).then((f=>{var d;if((f||n)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(f){s.push(f);const g=_l.Wi(c.targetId,f);i.push(g)}})))})),await Promise.all(a),r.Ca.d_(s),await(async function(c,f){const d=oe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>O.forEach(f,(E=>O.forEach(E.$i,(S=>d.persistence.referenceDelegate.addReference(g,E.targetId,S))).next((()=>O.forEach(E.Ui,(S=>d.persistence.referenceDelegate.removeReference(g,E.targetId,S)))))))))}catch(g){if(!Es(g))throw g;Q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of f){const E=g.targetId;if(!g.fromCache){const S=d.os.get(E),V=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(V);d.os=d.os.insert(E,L)}}})(r.localStore,i))}async function DI(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await Wf(n.localStore,e);n.currentUser=e,(function(i,a){i.ka.forEach((l=>{l.forEach((c=>{c.reject(new K(k.CANCELLED,a))}))})),i.ka.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ms(n,r.hs)}}function xI(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return ce().add(r.key);{let s=ce();const i=n.Ma.get(e);if(!i)return s;for(const a of i){const l=n.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Td(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PI.bind(null,e),e.Ca.d_=mI.bind(null,e.eventManager),e.Ca.$a=_I.bind(null,e.eventManager),e}function NI(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kI.bind(null,e),e}class ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ro(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return BT(this.persistence,new FT,e.initialUser,this.serializer)}Ga(e){return new OT(ml.Zr,this.serializer)}Wa(e){return new KT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ao.provider={build:()=>new ao};class Vl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>md(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DI.bind(null,this.syncEngine),await dI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gI})()}createDatastore(e){const n=ro(e.databaseInfo.databaseId),r=(function(i){return new JT(i)})(e.databaseInfo);return(function(i,a,l,c){return new eI(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,l){return new nI(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>md(this.syncEngine,n,0)),(function(){return Yf.D()?new Yf:new GT})())}createSyncEngine(e,n){return(function(s,i,a,l,c,f,d){const g=new TI(s,i,a,l,c,f);return d&&(g.Qa=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=oe(s);Q("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Os(i),i.k_.shutdown(),i.q_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vl.provider={build:()=>new Vl};/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class Id{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class OI{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Hh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{Q("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(Q("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rl(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Dl(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Wf(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function wd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await MI(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>id(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>id(e.remoteStore,s))),t._onlineComponents=e}async function MI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Dl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ir("Error using user provided cache. Falling back to memory cache: "+n),await Dl(t,new ao)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Dl(t,new ao);return t._offlineComponents}async function Ad(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await wd(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await wd(t,new Vl))),t._onlineComponents}function LI(t){return Ad(t).then((e=>e.syncEngine))}async function bd(t){const e=await Ad(t),n=e.eventManager;return n.onListen=II.bind(null,e.syncEngine),n.onUnlisten=bI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RI.bind(null,e.syncEngine),n}function FI(t,e,n={}){const r=new Zt;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,f){const d=new Id({next:E=>{d.Za(),a.enqueueAndForget((()=>cd(i,g)));const S=E.docs.has(l);!S&&E.fromCache?f.reject(new K(k.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&c&&c.source==="server"?f.reject(new K(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(E)},error:E=>f.reject(E)}),g=new hd(rl(l.path),d,{includeMetadataChanges:!0,_a:!0});return ld(i,g)})(await bd(t),t.asyncQueue,e,n,r))),r.promise}function UI(t,e,n={}){const r=new Zt;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,f){const d=new Id({next:E=>{d.Za(),a.enqueueAndForget((()=>cd(i,g))),E.fromCache&&c.source==="server"?f.reject(new K(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(E)},error:E=>f.reject(E)}),g=new hd(l,d,{includeMetadataChanges:!0,_a:!0});return ld(i,g)})(await bd(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Rd(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Sd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Pd(t,e,n){if(!n)throw new K(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function BI(t,e,n,r){if(e===!0&&r===!0)throw new K(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cd(t){if(!J.isDocumentKey(t))throw new K(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kd(t){if(J.isDocumentKey(t))throw new K(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Or(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lo(t);throw new K(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Vd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}BI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rd((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class co{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vd(e),e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new sE;switch(r.type){case"firstParty":return new lE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Sd.get(n);r&&(Q("ComponentProvider","Removing Datastore"),Sd.delete(n),r.terminate())})(this),Promise.resolve()}}function jI(t,e,n,r={}){var s;const i=(t=Or(t,co))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Ze.MOCK_USER;else{l=Dy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new K(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(f)}t._authCredentials=new iE(new qh(l,c))}}/**
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
 */class Mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Rn extends Mr{constructor(e,n,r){super(e,n,rl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new J(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function Dd(t,e,...n){if(t=vt(t),Pd("collection","path",e),t instanceof co){const r=be.fromString(e,...n);return kd(r),new Rn(t,null,r)}{if(!(t instanceof dt||t instanceof Rn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return kd(r),new Rn(t.firestore,null,r)}}function xd(t,e,...n){if(t=vt(t),arguments.length===1&&(e=Hh.newId()),Pd("doc","path",e),t instanceof co){const r=be.fromString(e,...n);return Cd(r),new dt(t,null,new J(r))}{if(!(t instanceof dt||t instanceof Rn))throw new K(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Cd(r),new dt(t.firestore,t instanceof Rn?t.converter:null,new J(r))}}/**
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
 */class Nd{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Jf(this,"async_queue_retry"),this.Vu=()=>{const r=El();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=El();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=El();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const n=new Zt;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Es(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const n=this.mu.then((()=>(this.du=!0,e().catch((r=>{this.Eu=r,this.du=!1;const s=(function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l})(r);throw Xt("INTERNAL UNHANDLED ERROR: ",s),r})).then((r=>(this.du=!1,r))))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=bl.createAndSchedule(this,e,n,r,(i=>this.yu(i)));return this.Tu.push(s),s}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class uo extends co{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Nd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nd(e),this._firestoreClient=void 0,await e}}}function $I(t,e){const n=typeof t=="object"?t:Ch(),r=typeof t=="string"?t:"(default)",s=qa(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ky("firestore");i&&jI(s,...i)}return s}function xl(t){if(t._terminated)throw new K(k.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qI(t),t._firestoreClient}function qI(t){var e,n,r;const s=t._freezeSettings(),i=(function(l,c,f,d){return new TE(l,c,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Rd(d.experimentalLongPollingOptions),d.useFetchStreams)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new OI(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(t._componentsProvider))}/**
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
 */class Lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lr(qe.fromBase64String(e))}catch(n){throw new K(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lr(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Od{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ol{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ml{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const HI=/^__.*__$/;class zI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ds(e,this.data,n,this.fieldTransforms)}}function Md(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Ll{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ho(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Md(this.Cu)&&HI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class WI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ro(e)}Qu(e,n,r,s=!1){return new Ll({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ld(t){const e=t._freezeSettings(),n=ro(t._databaseId);return new WI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KI(t,e,n,r,s,i={}){const a=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Bd("Data must be an object, but it was:",a,r);const l=Fd(r,a);let c,f;if(i.merge)c=new At(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const E=QI(e,g,n);if(!a.contains(E))throw new K(k.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);JI(d,E)||d.push(E)}c=new At(d),f=a.fieldTransforms.filter((g=>c.covers(g.field)))}else c=null,f=a.fieldTransforms;return new zI(new Et(l),c,f)}function GI(t,e,n,r=!1){return Fl(n,t.Qu(r?4:3,e))}function Fl(t,e){if(Ud(t=vt(t)))return Bd("Unsupported field value:",e,t),Fd(t,e);if(t instanceof Od)return(function(r,s){if(!Md(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=Fl(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:to(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:to(s.serializer,i)}}if(r instanceof Ol)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lr)return{bytesValue:Ff(s.serializer,r._byteString)};if(r instanceof dt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ul(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ml)return(function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map((c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return ol(l.serializer,c)}))}}}}}})(r,s);throw s.Bu(`Unsupported field value: ${lo(r)}`)})(t,e)}function Fd(t,e){const n={};return Wh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,((r,s)=>{const i=Fl(s,e.Mu(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Ud(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Ol||t instanceof Lr||t instanceof dt||t instanceof Od||t instanceof Ml)}function Bd(t,e,n){if(!Ud(n)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(n)){const r=lo(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function QI(t,e,n){if((e=vt(e))instanceof Nl)return e._internalPath;if(typeof e=="string")return jd(t,e);throw ho("Field path arguments must be of type string or ",t,!1,void 0,n)}const YI=new RegExp("[~\\*/\\[\\]]");function jd(t,e,n){if(e.search(YI)>=0)throw ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nl(...e.split("."))._internalPath}catch{throw ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ho(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new K(k.INVALID_ARGUMENT,l+t+c)}function JI(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class $d{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ul("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XI extends $d{data(){return super.data()}}function Ul(t,e){return typeof e=="string"?jd(t,e):e instanceof Nl?e._internalPath:e._delegate._internalPath}/**
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
 */function ZI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bl{}class ew extends Bl{}function tw(t,e,...n){let r=[];e instanceof Bl&&r.push(e),r=r.concat(n),(function(i){const a=i.filter((c=>c instanceof jl)).length,l=i.filter((c=>c instanceof fo)).length;if(a>1||a>0&&l>0)throw new K(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class fo extends ew{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fo(e,n,r)}_apply(e){const n=this._parse(e);return Wd(e._query,n),new Mr(e.firestore,e.converter,sl(e._query,n))}_parse(e){const n=Ld(e.firestore);return(function(i,a,l,c,f,d,g){let E;if(f.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){zd(g,d);const S=[];for(const V of g)S.push(Hd(c,i,V));E={arrayValue:{values:S}}}else E=Hd(c,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||zd(g,d),E=GI(l,a,g,d==="in"||d==="not-in");return xe.create(f,d,E)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qd(t,e,n){const r=e,s=Ul("where",t);return fo._create(s,r,n)}class jl extends Bl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jl(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:bt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Wd(a,c),a=sl(a,c)})(e._query,n),new Mr(e.firestore,e.converter,sl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Hd(t,e,n){if(typeof(n=vt(n))=="string"){if(n==="")throw new K(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ff(e)&&n.indexOf("/")!==-1)throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!J.isDocumentKey(r))throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jh(t,new J(r))}if(n instanceof dt)return Jh(t,n._key);throw new K(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lo(n)}.`)}function zd(t,e){if(!Array.isArray(t)||t.length===0)throw new K(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wd(t,e){const n=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class nw{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ar(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Ve(a.doubleValue)));return new Ml(i)}convertGeoPoint(e){return new Ol(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ts(e));default:return null}}convertTimestamp(e){const n=wn(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);ve(zf(r));const s=new Is(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||Xt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function rw(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kd extends $d{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ul("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class po extends Kd{data(e={}){return super.data(e)}}class sw{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ls(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new po(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ls(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ls(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:iw(l.type),doc:c,oldIndex:f,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iw(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function ow(t){t=Or(t,dt);const e=Or(t.firestore,uo);return FI(xl(e),t._key).then((n=>uw(e,t,n)))}class Gd extends nw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function aw(t){t=Or(t,Mr);const e=Or(t.firestore,uo),n=xl(e),r=new Gd(e);return ZI(t._query),UI(n,t._query).then((s=>new sw(e,r,t,s)))}function lw(t,e){const n=Or(t.firestore,uo),r=xd(t),s=rw(t.converter,e);return cw(n,[KI(Ld(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then((()=>r))}function cw(t,e){return(function(r,s){const i=new Zt;return r.asyncQueue.enqueueAndForget((async()=>SI(await LI(r),s,i))),i.promise})(xl(t),e)}function uw(t,e,n){const r=n.docs.get(e._key),s=new Gd(t);return new Kd(t,s,e._key,r,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Tr=s})(Er),vr(new zn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new uo(new oE(r.getProvider("auth-internal")),new uE(r.getProvider("app-check-internal")),(function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new K(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Is(f.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Tn($h,"4.7.3",e),Tn($h,"4.7.3","esm2017")})();function $l(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}typeof SuppressedError=="function"&&SuppressedError;function Qd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hw=Qd,Yd=new ds("auth","Firebase",Qd());/**
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
 */const go=new xa("@firebase/auth");function fw(t,...e){go.logLevel<=ue.WARN&&go.warn(`Auth (${Er}): ${t}`,...e)}function mo(t,...e){go.logLevel<=ue.ERROR&&go.error(`Auth (${Er}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw ql(t,...e)}function Bt(t,...e){return ql(t,...e)}function Jd(t,e,n){const r=Object.assign(Object.assign({},hw()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function Sn(t){return Jd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ql(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yd.create(t,...e)}function se(t,e,...n){if(!t)throw ql(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function sn(t,e){t||rn(e)}/**
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
 */function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dw(){return Xd()==="http:"||Xd()==="https:"}function Xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function pw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dw()||My()||"connection"in navigator)?navigator.onLine:!0}function gw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=xy()||Ly()}get(){return pw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zl(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Zd{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _w=new Fs(3e4,6e4);function _o(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,s={}){return ep(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=ps(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:c},i);return Oy()||(f.referrerPolicy="no-referrer"),Zd.fetch()(np(t,t.config.apiHost,n,l),f)})}async function ep(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mw),e);try{const s=new yw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw yo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,f]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw yo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw yo(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Jd(t,d,f);nn(t,d)}}catch(s){if(s instanceof Qt)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function tp(t,e,n,r,s={}){const i=await Fr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function np(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zl(t.config,s):`${t.config.apiScheme}://${s}`}class yw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),_w.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function vw(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function rp(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ew(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=Kl(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Us(Wl(s.auth_time)),issuedAtTime:Us(Wl(s.iat)),expirationTime:Us(Wl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wl(t){return Number(t)*1e3}function Kl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=mh(n);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sp(t){const e=Kl(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&Tw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Iw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bs(t,rp(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ip(i.providerUserInfo):[],l=Aw(t.providerData,a),c=t.isAnonymous,f=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?f:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Gl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function ww(t){const e=vt(t);await vo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Aw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ip(t){return t.map(e=>{var{providerId:n}=e,r=$l(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bw(t,e){const n=await ep(t,{},async()=>{const r=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=np(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Zd.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rw(t,e){return Fr(t,"POST","/v2/accounts:revokeToken",_o(t,e))}/**
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
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Ur;return r&&(se(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function Pn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=$l(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Iw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ew(this,e)}reload(){return ww(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await Bs(this,vw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,f,d;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(f=n.createdAt)!==null&&f!==void 0?f:void 0,q=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:W,emailVerified:z,isAnonymous:te,providerData:ge,stsTokenManager:T}=n;se(W&&T,e,"internal-error");const m=Ur.fromJSON(this.name,T);se(typeof W=="string",e,"internal-error"),Pn(g,e.name),Pn(E,e.name),se(typeof z=="boolean",e,"internal-error"),se(typeof te=="boolean",e,"internal-error"),Pn(S,e.name),Pn(V,e.name),Pn(L,e.name),Pn(F,e.name),Pn(G,e.name),Pn(q,e.name);const y=new on({uid:W,auth:e,email:E,emailVerified:z,displayName:g,isAnonymous:te,photoURL:V,phoneNumber:S,tenantId:L,stsTokenManager:m,createdAt:G,lastLoginAt:q});return ge&&Array.isArray(ge)&&(y.providerData=ge.map(I=>Object.assign({},I))),F&&(y._redirectEventId=F),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ur;s.updateFromServerResponse(n);const i=new on({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await vo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ip(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ur;l.updateFromIdToken(r);const c=new on({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,f),c}}/**
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
 */const op=new Map;function an(t){sn(t instanceof Function,"Expected a class definition");let e=op.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,op.set(t,e),e)}/**
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
 */class ap{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ap.type="NONE";const lp=ap;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?on._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Br(an(lp),e,r);const s=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||an(lp);const a=Eo(r,e.config.apiKey,e.name);let l=null;for(const f of n)try{const d=await f._get(a);if(d){const g=on._fromJSON(e,d);f!==i&&(l=g),i=f;break}}catch{}const c=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Br(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Br(i,e,r))}}/**
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
 */function cp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(up(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gp(e))return"Blackberry";if(mp(e))return"Webos";if(hp(e))return"Safari";if((e.includes("chrome/")||fp(e))&&!e.includes("edge/"))return"Chrome";if(pp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function up(t=Xe()){return/firefox\//i.test(t)}function hp(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fp(t=Xe()){return/crios\//i.test(t)}function dp(t=Xe()){return/iemobile/i.test(t)}function pp(t=Xe()){return/android/i.test(t)}function gp(t=Xe()){return/blackberry/i.test(t)}function mp(t=Xe()){return/webos/i.test(t)}function Ql(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sw(t=Xe()){var e;return Ql(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pw(){return Fy()&&document.documentMode===10}function _p(t=Xe()){return Ql(t)||pp(t)||mp(t)||gp(t)||/windows phone/i.test(t)||dp(t)}/**
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
 */function yp(t,e=[]){let n;switch(t){case"Browser":n=cp(Xe());break;case"Worker":n=`${cp(Xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Er}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Cw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function kw(t,e={}){return Fr(t,"GET","/v2/passwordPolicy",_o(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Vw=6;class Dw{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Vw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class xw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vp(this),this.idTokenSubscription=new vp(this),this.beforeStateQueue=new Cw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rp(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Sn(this));const n=e?vt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kw(this),n=new Dw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function To(t){return vt(t)}class vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wy(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nw(t){Yl=t}function Ow(t){return Yl.loadJS(t)}function Mw(){return Yl.gapiScript}function Lw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Fw(t,e){const n=qa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Oi(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function Uw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Bw(t,e,n){const r=To(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ep(e),{host:a,port:l}=jw(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),$w()}function Ep(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jw(t){const e=Ep(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Tp(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Tp(a)}}}function Tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $w(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ip{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}/**
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
 */async function jr(t,e){return tp(t,"POST","/v1/accounts:signInWithIdp",_o(t,e))}/**
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
 */const qw="http://localhost";class er extends Ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=$l(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new er(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:qw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ps(n)}return e}}/**
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
 */class wp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class js extends wp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends js{constructor(){super("facebook.com")}static credential(e){return er._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Cn.PROVIDER_ID="facebook.com";/**
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
 */class kn extends js{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return er._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com",kn.PROVIDER_ID="google.com";/**
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
 */class Vn extends js{constructor(){super("github.com")}static credential(e){return er._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com",Vn.PROVIDER_ID="github.com";/**
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
 */class Dn extends js{constructor(){super("twitter.com")}static credential(e,n){return er._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com",Dn.PROVIDER_ID="twitter.com";/**
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
 */async function Hw(t,e){return tp(t,"POST","/v1/accounts:signUp",_o(t,e))}/**
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
 */class xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await on._fromIdTokenResponse(e,r,s),a=Ap(r);return new xn({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ap(r);return new xn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ap(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function zw(t){var e;if(Jt(t.app))return Promise.reject(Sn(t));const n=To(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new xn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Hw(n,{returnSecureToken:!0}),s=await xn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Io extends Qt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Io(e,n,r,s)}}function bp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,i,e,r):i})}async function Ww(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xn._forOperation(t,"link",r)}/**
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
 */async function Kw(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Sn(r));const s="reauthenticate";try{const i=await Bs(t,bp(r,s,e,t),n);se(i.idToken,r,"internal-error");const a=Kl(i.idToken);se(a,r,"internal-error");const{sub:l}=a;return se(t.uid===l,r,"user-mismatch"),xn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function Gw(t,e,n=!1){if(Jt(t.app))return Promise.reject(Sn(t));const r="signIn",s=await bp(t,r,e),i=await xn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Qw(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function Yw(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}const wo="__sak";/**
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
 */class Rp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Jw=1e3,Xw=10;class Sp extends Rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Pw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sp.type="LOCAL";const Zw=Sp;/**
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
 */class Pp extends Rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pp.type="SESSION";const Cp=Pp;/**
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
 */function eA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ao(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async f=>f(n.origin,i)),c=await eA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
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
 */function Jl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const f=Jl("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===f)switch(E.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function jt(){return window}function nA(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function kp(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function rA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iA(){return kp()?self:null}/**
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
 */const Vp="firebaseLocalStorageDb",oA=1,bo="firebaseLocalStorage",Dp="fbase_key";class $s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ro(t,e){return t.transaction([bo],e?"readwrite":"readonly").objectStore(bo)}function aA(){const t=indexedDB.deleteDatabase(Vp);return new $s(t).toPromise()}function Xl(){const t=indexedDB.open(Vp,oA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bo,{keyPath:Dp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bo)?e(r):(r.close(),await aA(),e(await Xl()))})})}async function xp(t,e,n){const r=Ro(t,!0).put({[Dp]:e,value:n});return new $s(r).toPromise()}async function lA(t,e){const n=Ro(t,!1).get(e),r=await new $s(n).toPromise();return r===void 0?null:r.value}function Np(t,e){const n=Ro(t,!0).delete(e);return new $s(n).toPromise()}const cA=800,uA=3;class Op{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(iA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rA(),!this.activeServiceWorker)return;this.sender=new tA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xl();return await xp(e,wo,"1"),await Np(e,wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ro(s,!1).getAll();return new $s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Op.type="LOCAL";const hA=Op;new Fs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function fA(t,e){return e?an(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zl extends Ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dA(t){return Gw(t.auth,new Zl(t),t.bypassAuthState)}function pA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Kw(n,new Zl(t),t.bypassAuthState)}async function gA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Ww(n,new Zl(t),t.bypassAuthState)}/**
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
 */class Mp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dA;case"linkViaPopup":case"linkViaRedirect":return gA;case"reauthViaPopup":case"reauthViaRedirect":return pA;default:nn(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mA=new Fs(2e3,1e4);class $r extends Mp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Jl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mA.get())};e()}}$r.currentPopupAction=null;/**
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
 */const _A="pendingRedirect",So=new Map;class yA extends Mp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await vA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vA(t,e){const n=IA(e),r=TA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EA(t,e){So.set(t._key(),e)}function TA(t){return an(t._redirectPersistence)}function IA(t){return Eo(_A,t.config.apiKey,t.name)}async function wA(t,e,n=!1){if(Jt(t.app))return Promise.reject(Sn(t));const r=To(t),s=fA(r,e),a=await new yA(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const AA=600*1e3;class bA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lp(e))}saveEventToCache(e){this.cachedEventUids.add(Lp(e)),this.lastProcessedEventTime=Date.now()}}function Lp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(t);default:return!1}}/**
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
 */async function SA(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
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
 */const PA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CA=/^https?/;async function kA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SA(t);for(const n of e)try{if(VA(n))return}catch{}nn(t,"unauthorized-domain")}function VA(t){const e=Hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!CA.test(n))return!1;if(PA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const DA=new Fs(3e4,6e4);function Up(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xA(t){return new Promise((e,n)=>{var r,s,i;function a(){Up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Up(),n(Bt(t,"network-request-failed"))},timeout:DA.get()})}if(!((s=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)a();else{const l=Lw("iframefcb");return jt()[l]=()=>{gapi.load?a():n(Bt(t,"network-request-failed"))},Ow(`${Mw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Po=null,e})}let Po=null;function NA(t){return Po=Po||xA(t),Po}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const OA=new Fs(5e3,15e3),MA="__/auth/iframe",LA="emulator/auth/iframe",FA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BA(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zl(e,LA):`https://${t.config.authDomain}/${MA}`,r={apiKey:e.apiKey,appName:t.name,v:Er},s=UA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ps(r).slice(1)}`}async function jA(t){const e=await NA(t),n=jt().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:BA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Bt(t,"network-request-failed"),l=jt().setTimeout(()=>{i(a)},OA.get());function c(){jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qA=500,HA=600,zA="_blank",WA="http://localhost";class Bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KA(t,e,n,r=qA,s=HA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},$A),{width:r.toString(),height:s.toString(),top:i,left:a}),f=Xe().toLowerCase();n&&(l=fp(f)?zA:n),up(f)&&(e=e||WA,c.scrollbars="yes");const d=Object.entries(c).reduce((E,[S,V])=>`${E}${S}=${V},`,"");if(Sw(f)&&l!=="_self")return GA(e||"",l),new Bp(null);const g=window.open(e||"",l,d);se(g,t,"popup-blocked");try{g.focus()}catch{}return new Bp(g)}function GA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const QA="__/auth/handler",YA="emulator/auth/handler",JA=encodeURIComponent("fac");async function jp(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Er,eventId:s};if(e instanceof wp){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",zy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof js){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),f=c?`#${JA}=${encodeURIComponent(c)}`:"";return`${XA(t)}?${ps(l).slice(1)}${f}`}function XA({config:t}){return t.emulator?zl(t,YA):`https://${t.authDomain}/${QA}`}/**
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
 */const ec="webStorageSupport";class ZA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cp,this._completeRedirectFn=wA,this._overrideRedirectResult=EA}async _openPopup(e,n,r,s){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await jp(e,n,r,Hl(),s);return KA(e,a,Jl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jp(e,n,r,Hl(),s);return nA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jA(e),r=new bA(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ec,{type:ec},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ec];a!==void 0&&n(!!a),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _p()||hp()||Ql()}}const e0=ZA;var $p="@firebase/auth",qp="1.7.9";/**
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
 */class t0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function n0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r0(t){vr(new zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;se(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yp(t)},f=new xw(r,s,i,c);return Uw(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vr(new zn("auth-internal",e=>{const n=To(e.getProvider("auth").getImmediate());return(r=>new t0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn($p,qp,n0(t)),Tn($p,qp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const s0=vh("authIdTokenMaxAge")||300;let Hp=null;const i0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s0)return;const s=n==null?void 0:n.token;Hp!==s&&(Hp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function o0(t=Ch()){const e=qa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fw(t,{popupRedirectResolver:e0,persistence:[hA,Zw,Cp]}),r=vh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=i0(i.toString());Yw(n,a,()=>a(n.currentUser)),Qw(n,l=>a(l))}}const s=_h("auth");return s&&Bw(n,`http://${s}`),n}function a0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Nw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",a0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),r0("Browser");const tr=document.currentScript,l0=()=>tr?{apiKey:tr.getAttribute("data-firebase-api-key")||"",authDomain:tr.getAttribute("data-firebase-auth-domain")||"",projectId:tr.getAttribute("data-firebase-project-id")||"",storageBucket:tr.getAttribute("data-firebase-storage-bucket")||"",messagingSenderId:tr.getAttribute("data-firebase-messaging-sender-id")||"",appId:tr.getAttribute("data-firebase-app-id")||""}:null,c0=()=>{var t,e;return(t=window.framerSurveyWidgetConfig)!=null&&t.firebase?window.framerSurveyWidgetConfig.firebase:(e=window.framerSurveyConfig)!=null&&e.firebase?window.framerSurveyConfig.firebase:null},u0=l0(),h0=c0(),zp=u0||h0;if(!zp)throw new Error("Firebase configuration is required");const Wp=Ph(zp),tc=$I(Wp),nc=o0(Wp);async function Kp(){if(nc.currentUser)return nc.currentUser;try{return(await zw(nc)).user}catch(t){throw t}}async function f0(t){try{if(!t||t.trim()==="")throw new Error("Project ID is required but was empty or undefined");const e=xd(tc,"surveys",t.trim()),n=await ow(e);return n.exists()?n.data():null}catch(e){throw e}}async function d0(t){try{return(await lw(Dd(tc,"surveyResponses"),{...t,submittedAt:De.now()})).id}catch(e){throw e}}async function p0(t,e){try{const n=Dd(tc,"surveyResponses"),r=tw(n,qd("projectId","==",t),qd("userId","==",e));return!(await aw(r)).empty}catch(n){return console.error("Error checking survey completion:",n),!1}}const g0={class:"survey-widget"},m0={class:"survey-modal"},_0={class:"survey-header"},y0={key:0,class:"loading"},v0={key:1,class:"error"},E0={class:"question-label"},T0={key:0,class:"options"},I0=["name","value","onUpdate:modelValue"],w0=["onUpdate:modelValue","name"],A0={key:2,class:"rating"},b0=["onClick"],R0={class:"form-actions"},S0=["disabled"],P0={key:3,class:"success-message"},C0=Um({__name:"App",props:{projectId:{},licenseKey:{},position:{},buttonText:{},buttonColor:{}},setup(t){const e=t,n=Dt(!1),r=Dt(null),s=Dt(!1),i=Dt(null),a=Dt({}),l=Dt(!1),c=Dt(!1),f=Dt(!1),d=Dt(null),g=Dt(!1),E=async()=>{try{g.value=!0;const q=await Kp();if(console.log("user",q),d.value=q.uid,e.projectId&&d.value){const W=await p0(e.projectId.trim(),d.value);f.value=W}}catch(q){console.error("Error initializing user:",q),f.value=!1}finally{g.value=!1}},S=Yu(()=>({...{"bottom-right":{bottom:"20px",right:"20px"},"bottom-left":{bottom:"20px",left:"20px"},"top-right":{top:"20px",right:"20px"},"top-left":{top:"20px",left:"20px"}}[e.position],backgroundColor:e.buttonColor})),V=async()=>{n.value=!0,s.value=!0,i.value=null;try{if(!e.projectId||e.projectId.trim()==="")throw new Error("Project ID bulunamadı. Lütfen script element'inde 'data-project-id' attribute'unun olduğundan emin olun.");const q=await f0(e.projectId.trim());q?(r.value=q,q.questions.forEach(W=>{a.value[W.id]=W.type==="rating"?0:""})):i.value="Anket bulunamadı"}catch(q){i.value=q.message||"Anket yüklenirken bir hata oluştu"}finally{s.value=!1}},L=()=>{n.value=!1,c.value=!1,a.value={}},F=async()=>{l.value=!0,i.value=null;try{if(!d.value){const W=await Kp();d.value=W.uid}if(!d.value)throw new Error("Kullanıcı kimliği alınamadı");const q=Object.entries(a.value).map(([W,z])=>({questionId:W,value:z}));await d0({projectId:e.projectId,userId:d.value,responses:q,submittedAt:new Date}),c.value=!0,f.value=!0}catch(q){i.value=q.message||"Yanıt kaydedilirken bir hata oluştu"}finally{l.value=!1}},G=()=>{L()};return pu(()=>{E()}),(q,W)=>{var z;return Je(),at("div",g0,[!n.value&&!f.value?(Je(),at("button",{key:0,class:"feedback-button",style:li(S.value),onClick:V},pn(t.buttonText),5)):us("",!0),n.value?(Je(),at("div",{key:1,class:"survey-modal-overlay",onClick:hh(L,["self"])},[ke("div",m0,[ke("div",_0,[ke("h2",null,pn(((z=r.value)==null?void 0:z.surveyName)||"Anket"),1),ke("button",{class:"close-button",onClick:L},"✕")]),s.value?(Je(),at("div",y0,[...W[0]||(W[0]=[ke("div",{class:"spinner"},null,-1),ke("p",null,"Anket yükleniyor...",-1)])])):i.value?(Je(),at("div",v0,[ke("p",null,pn(i.value),1),ke("button",{class:"framer-button-primary",onClick:L},"Kapat")])):r.value&&!c.value?(Je(),at("form",{key:2,onSubmit:hh(F,["prevent"]),class:"survey-form"},[(Je(!0),at(yt,null,ma(r.value.questions,(te,ge)=>(Je(),at("div",{key:te.id,class:"question-section"},[ke("label",E0,pn(ge+1)+". "+pn(te.text),1),te.type==="multiple-choice"?(Je(),at("div",T0,[(Je(!0),at(yt,null,ma(te.options,(T,m)=>(Je(),at("label",{key:m,class:"option-label"},[cu(ke("input",{type:"radio",name:`question-${te.id}`,value:T,"onUpdate:modelValue":y=>a.value[te.id]=y,required:""},null,8,I0),[[py,a.value[te.id]]]),ke("span",null,pn(T),1)]))),128))])):te.type==="text"?cu((Je(),at("textarea",{key:1,"onUpdate:modelValue":T=>a.value[te.id]=T,name:`question-${te.id}`,placeholder:"Cevabınızı yazın...",rows:"4",required:""},null,8,w0)),[[dy,a.value[te.id]]]):te.type==="rating"?(Je(),at("div",A0,[(Je(),at(yt,null,ma(5,T=>ke("button",{key:T,type:"button",class:ci(["rating-button",{active:a.value[te.id]===T}]),onClick:m=>a.value[te.id]=T}," ⭐ ",10,b0)),64))])):us("",!0)]))),128)),ke("div",R0,[ke("button",{type:"button",class:"framer-button-secondary",onClick:L}," İptal "),ke("button",{type:"submit",class:"framer-button-primary",disabled:l.value},pn(l.value?"Gönderiliyor...":"Gönder"),9,S0)])],32)):us("",!0),c.value?(Je(),at("div",P0,[W[1]||(W[1]=ke("div",{class:"success-icon"},"✓",-1)),W[2]||(W[2]=ke("h3",null,"Teşekkürler!",-1)),W[3]||(W[3]=ke("p",null,"Yanıtınız başarıyla kaydedildi. Anketi tamamladığınız için teşekkür ederiz.",-1)),ke("button",{class:"framer-button-primary",onClick:G},"Kapat")])):us("",!0)])])):us("",!0)])}}});let rc="",sc="",ic="bottom-right",oc="Feedback",ac="#0066ff";if(window.framerSurveyWidgetConfig){const t=window.framerSurveyWidgetConfig;rc=t.projectId||"",sc=t.licenseKey||"",ic=t.position||"bottom-right",oc=t.buttonText||"Feedback",ac=t.buttonColor||"#0066ff"}else{let t=document.currentScript;if(t||(t=document.querySelector("script[data-project-id]")),!t){const e=document.querySelectorAll('script[type="module"]');t=Array.from(e).find(n=>n.getAttribute("data-project-id")!==null)}t&&(rc=((Gp=t.getAttribute("data-project-id"))==null?void 0:Gp.trim())||"",sc=((Qp=t.getAttribute("data-license-key"))==null?void 0:Qp.trim())||"",ic=t.getAttribute("data-position")||"bottom-right",oc=t.getAttribute("data-button-text")||"Feedback",ac=t.getAttribute("data-button-color")||"#0066ff")}const lc=document.createElement("div");lc.id="framer-survey-widget",document.body.appendChild(lc),Ey(C0,{projectId:rc,licenseKey:sc,position:ic,buttonText:oc,buttonColor:ac}).mount(lc)})();

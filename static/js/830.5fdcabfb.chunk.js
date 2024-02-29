/*! For license information please see 830.5fdcabfb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_colors=self.webpackChunkreact_colors||[]).push([[830],{168:(t,e,i)=>{function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}i.d(e,{Z:()=>s})},1493:(t,e,i)=>{i.d(e,{L:()=>r});const s=new Set(["children","localName","ref","style","className"]),n=new WeakMap,o=(t,e,i,s,o)=>{const r=null===o||void 0===o?void 0:o[e];void 0===r||i===s?(t[e]=i,null==i&&e in HTMLElement.prototype&&t.removeAttribute(e)):((t,e,i)=>{let s=n.get(t);void 0===s&&n.set(t,s=new Map);let o=s.get(e);void 0!==i?void 0===o?(s.set(e,o={handleEvent:i}),t.addEventListener(e,o)):o.handleEvent=i:void 0!==o&&(s.delete(e),t.removeEventListener(e,o))})(t,r,i)},r=t=>{let{react:e,tagName:i,elementClass:n,events:r,displayName:l}=t;const a=new Set(Object.keys(null!==r&&void 0!==r?r:{})),h=e.forwardRef(((t,l)=>{const h=e.useRef(null),d=e.useRef(null),c={},u={};for(const[e,i]of Object.entries(t))s.has(e)?c["className"===e?"class":e]=i:a.has(e)||e in n.prototype?u[e]=i:c[e]=i;return e.useLayoutEffect((()=>{if(null!==d.current){for(const e in u)o(d.current,e,t[e],h.current?h.current[e]:void 0,r);h.current=t}})),e.useLayoutEffect((()=>{var t;null===(t=d.current)||void 0===t||t.removeAttribute("defer-hydration")}),[]),c.suppressHydrationWarning=!0,e.createElement(i,{...c,ref:e.useCallback((t=>{d.current=t,"function"==typeof l?l(t):null!==l&&(l.current=t)}),[l])})}));return h.displayName=null!==l&&void 0!==l?l:n.name,h}},2971:(t,e,i)=>{i.d(e,{fl:()=>U,iv:()=>a,Ts:()=>w,Qu:()=>C});const s=globalThis,n=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const a=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];const n=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new l(n,t,o)},h=(t,e)=>{if(n)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=s.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},d=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var c,u,v;const{is:p,defineProperty:$,getOwnPropertyDescriptor:f,getOwnPropertyNames:_,getOwnPropertySymbols:g,getPrototypeOf:y}=Object,m=globalThis,A=m.trustedTypes,b=A?A.emptyScript:"",E=m.reactiveElementPolyfillSupport,S=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},C=(t,e)=>!p(t,e),P={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:C};null!==(c=Symbol.metadata)&&void 0!==c||(Symbol.metadata=Symbol("metadata")),null!==(u=m.litPropertyMetadata)&&void 0!==u||(m.litPropertyMetadata=new WeakMap);class U extends HTMLElement{static addInitializer(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&$(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){var s;const{get:n,set:o}=null!==(s=f(this.prototype,t))&&void 0!==s?s:{get(){return this[e]},set(t){this[e]=t}};return{get(){return null===n||void 0===n?void 0:n.call(this)},set(e){const s=null===n||void 0===n?void 0:n.call(this);o.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:P}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=y(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,e=[..._(t),...g(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const t=this._$Eu(e,i);void 0!==t&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$E_)&&void 0!==e?e:this._$E_=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$E_)||void 0===e||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$E_)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$E_)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){var n;const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:w).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){var n;const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:w;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=arguments.length>4?arguments[4]:void 0;if(void 0!==t){var o,r;if(null!==(o=i)&&void 0!==o||(i=this.constructor.getPropertyOptions(t)),!(null!==(r=i.hasChanged)&&void 0!==r?r:C)(s?n:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){var s;this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(null!==(s=this._$Ej)&&void 0!==s?s:this._$Ej=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],i)}let e=!1;const i=this._$AL;try{var s;e=this.shouldUpdate(i),e?(this.willUpdate(i),null!==(s=this._$E_)&&void 0!==s&&s.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$ET()}catch(i){throw e=!1,this._$ET(),i}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null!==(e=this._$E_)&&void 0!==e&&e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach((t=>this._$EO(t,this[t])))),this._$ET()}updated(t){}firstUpdated(t){}}U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[S("elementProperties")]=new Map,U[S("finalized")]=new Map,null!==E&&void 0!==E&&E({ReactiveElement:U}),(null!==(v=m.reactiveElementVersions)&&void 0!==v?v:m.reactiveElementVersions=[]).push("2.0.2")},508:(t,e,i)=>{i.d(e,{P:()=>r});var s=i(5346),n=i(4316),o=i(3237),r=class extends n.oi{constructor(){super(),Object.entries(this.constructor.dependencies).forEach((t=>{let[e,i]=t;this.constructor.define(e,i)}))}emit(t,e){const i=new CustomEvent(t,(0,s.ih)({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const s=customElements.get(t);if(!s)return void customElements.define(t,class extends e{},i);let n=" (unknown version)",o=n;"version"in e&&e.version&&(n=" v"+e.version),"version"in s&&s.version&&(o=" v"+s.version),n&&o&&n===o||console.warn("Attempted to register <".concat(t,">").concat(n,", but <").concat(t,">").concat(o," has already been registered."))}};r.version="2.12.0",r.dependencies={},(0,s.u2)([(0,o.Cb)()],r.prototype,"dir",2),(0,s.u2)([(0,o.Cb)()],r.prototype,"lang",2)},521:(t,e,i)=>{i.d(e,{N:()=>o});var s,n=i(168),o=(0,i(4316).iv)(s||(s=(0,n.Z)(["\n  :host {\n    box-sizing: border-box;\n  }\n\n  :host *,\n  :host *::before,\n  :host *::after {\n    box-sizing: inherit;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n"])))},5323:(t,e,i)=>{var s;i.d(e,{Jb:()=>P,Ld:()=>U,YP:()=>C,_$LH:()=>I,dy:()=>w,sY:()=>W});const n=globalThis,o=n.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,l="$lit$",a="lit$".concat((Math.random()+"").slice(9),"$"),h="?"+a,d="<".concat(h,">"),c=document,u=()=>c.createComment(""),v=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,$=t=>p(t)||"function"==typeof(null===t||void 0===t?void 0:t[Symbol.iterator]),f="[ \t\n\f\r]",_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,y=/>/g,m=RegExp(">|".concat(f,"(?:([^\\s\"'>=/]+)(").concat(f,"*=").concat(f,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),A=/'/g,b=/"/g,E=/^(?:script|style|textarea|title)$/i,S=t=>function(e){for(var i=arguments.length,s=new Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];return{_$litType$:t,strings:e,values:s}},w=S(1),C=S(2),P=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),x=new WeakMap,O=c.createTreeWalker(c,129);function T(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==r?r.createHTML(e):e}const H=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=_;for(let c=0;c<i;c++){const e=t[c];let i,u,v=-1,p=0;for(;p<e.length&&(r.lastIndex=p,u=r.exec(e),null!==u);){var h;p=r.lastIndex,r===_?"!--"===u[1]?r=g:void 0!==u[1]?r=y:void 0!==u[2]?(E.test(u[2])&&(n=RegExp("</"+u[2],"g")),r=m):void 0!==u[3]&&(r=m):r===m?">"===u[0]?(r=null!==(h=n)&&void 0!==h?h:_,v=-1):void 0===u[1]?v=-2:(v=r.lastIndex-u[2].length,i=u[1],r=void 0===u[3]?m:'"'===u[3]?b:A):r===b||r===A?r=m:r===g||r===y?r=_:(r=m,n=void 0)}const $=r===m&&t[c+1].startsWith("/>")?" ":"";o+=r===_?e+d:v>=0?(s.push(i),e.slice(0,v)+l+e.slice(v)+a+$):e+a+(-2===v?c:$)}return[T(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class N{constructor(t,e){let i,{strings:s,_$litType$:n}=t;this.parts=[];let r=0,d=0;const c=s.length-1,v=this.parts,[p,$]=H(s,n);if(this.el=N.createElement(p,e),O.currentNode=this.el.content,2===n){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=O.nextNode())&&v.length<c;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(l)){const e=$[d++],s=i.getAttribute(t).split(a),n=/([.?@])?(.*)/.exec(e);v.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?j:"?"===n[1]?z:"@"===n[1]?B:L}),i.removeAttribute(t)}else t.startsWith(a)&&(v.push({type:6,index:r}),i.removeAttribute(t));if(E.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=o?o.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],u()),O.nextNode(),v.push({type:2,index:++r});i.append(t[e],u())}}}else if(8===i.nodeType)if(i.data===h)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)v.push({type:7,index:r}),t+=a.length-1}r++}}static createElement(t,e){const i=c.createElement("template");return i.innerHTML=t,i}}function R(t,e){var i,s,n,o,r;let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===P)return e;let h=void 0!==a?null===(i=l._$Co)||void 0===i?void 0:i[a]:l._$Cl;const d=v(e)?void 0:e._$litDirective$;return(null===(s=h)||void 0===s?void 0:s.constructor)!==d&&(null!==(n=h)&&void 0!==n&&null!==(o=n._$AO)&&void 0!==o&&o.call(n,!1),void 0===d?h=void 0:(h=new d(t),h._$AT(t,l,a)),void 0!==a?(null!==(r=l._$Co)&&void 0!==r?r:l._$Co=[])[a]=h:l._$Cl=h),void 0!==h&&(e=R(t,h._$AS(t,e.values),h,a)),e}class M{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null===t||void 0===t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(i,!0);O.currentNode=n;let o=O.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){var h;if(r===a.index){let e;2===a.type?e=new k(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new D(o,this,t)),this._$AV.push(e),a=s[++l]}r!==(null===(h=a)||void 0===h?void 0:h.index)&&(o=O.nextNode(),r++)}return O.currentNode=c,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class k{get _$AU(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}constructor(t,e,i,s){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=null===(n=null===s||void 0===s?void 0:s.isConnected)||void 0===n||n}get parentNode(){var t;let e=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t){t=R(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),v(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==P&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):$(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&v(this._$AH)?this._$AA.nextSibling.data=t:this.$(c.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(T(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new M(n,this),e=t.u(this.options);t.p(i),this.$(e),this._$AH=t}}_$AC(t){let e=x.get(t.strings);return void 0===e&&x.set(t.strings,e=new N(t)),e}T(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new k(this.k(u()),this.k(u()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){var i;const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}_$AI(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,i=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0;const n=this.strings;let o=!1;if(void 0===n)t=R(this,t,e,0),o=!v(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{const s=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++){var r;a=R(this,s[i+l],e,l),a===P&&(a=this._$AH[l]),o||(o=!v(a)||a!==this._$AH[l]),a===U?t=U:t!==U&&(t+=(null!==(r=a)&&void 0!==r?r:"")+n[l+1]),this._$AH[l]=a}}o&&!s&&this.O(t)}O(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!==t&&void 0!==t?t:"")}}class j extends L{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===U?void 0:t}}class z extends L{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==U)}}class B extends L{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t){var e;if((t=null!==(e=R(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:U)===P)return;const i=this._$AH,s=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const I={j:l,P:a,A:h,C:1,M:H,L:M,R:$,V:R,D:k,I:L,H:z,N:B,U:j,B:D},V=n.litHtmlPolyfillSupport;null!==V&&void 0!==V&&V(N,k),(null!==(s=n.litHtmlVersions)&&void 0!==s?s:n.litHtmlVersions=[]).push("3.1.0");const W=(t,e,i)=>{var s;const n=null!==(s=null===i||void 0===i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){var r;const t=null!==(r=null===i||void 0===i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new k(e.insertBefore(u(),t),t,void 0,null!==i&&void 0!==i?i:{})}return o._$AI(t),o}},3237:(t,e,i)=>{i.d(e,{hO:()=>a,Cb:()=>r,IO:()=>d,GC:()=>c,SB:()=>l});var s=i(2971);const n={attribute:!0,type:String,converter:s.Ts,reflect:!1,hasChanged:s.Qu},o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,e=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function r(t){return(e,i)=>"object"==typeof i?o(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function l(t){return r({...t,state:!0,attribute:!1})}function a(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}const h=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function d(t,e){return(i,s,n)=>{const o=e=>{var i,s;return null!==(i=null===(s=e.renderRoot)||void 0===s?void 0:s.querySelector(t))&&void 0!==i?i:null};if(e){const{get:t,set:e}="object"==typeof s?i:null!==n&&void 0!==n?n:(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return h(i,s,{get(){let i=t.call(this);return void 0===i&&(i=o(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return h(i,s,{get(){return o(this)}})}}function c(t){return(e,i)=>h(e,i,{async get(){var e,i;return await this.updateComplete,null!==(e=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==e?e:null}})}},4316:(t,e,i)=>{i.d(e,{oi:()=>l,iv:()=>o.iv,Ts:()=>o.Ts,dy:()=>r.dy});var s,n,o=i(2971),r=i(5323);class l extends o.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,r.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return r.Jb}}l._$litElement$=!0,l.finalized=!0,null===(s=globalThis.litElementHydrateSupport)||void 0===s||s.call(globalThis,{LitElement:l});const a=globalThis.litElementPolyfillSupport;null===a||void 0===a||a({LitElement:l});(null!==(n=globalThis.litElementVersions)&&void 0!==n?n:globalThis.litElementVersions=[]).push("4.0.2")}}]);
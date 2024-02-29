/*! For license information please see 135.481c0487.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_colors=self.webpackChunkreact_colors||[]).push([[135],{6995:(e,t,n)=>{n.d(t,{H:()=>a});var s,i=n(168),o=n(521),a=(0,n(4316).iv)(s||(s=(0,i.Z)(["\n  ","\n\n  :host {\n    --submenu-offset: -2px;\n\n    /* Private */\n    --safe-triangle-cursor-x: 0;\n    --safe-triangle-cursor-y: 0;\n    --safe-triangle-submenu-start-x: 0;\n    --safe-triangle-submenu-start-y: 0;\n    --safe-triangle-submenu-end-x: 0;\n    --safe-triangle-submenu-end-y: 0;\n\n    display: block;\n  }\n\n  :host([inert]) {\n    display: none;\n  }\n\n  .menu-item {\n    position: relative;\n    display: flex;\n    align-items: stretch;\n    font-family: var(--sl-font-sans);\n    font-size: var(--sl-font-size-medium);\n    font-weight: var(--sl-font-weight-normal);\n    line-height: var(--sl-line-height-normal);\n    letter-spacing: var(--sl-letter-spacing-normal);\n    color: var(--sl-color-neutral-700);\n    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);\n    transition: var(--sl-transition-fast) fill;\n    user-select: none;\n    -webkit-user-select: none;\n    white-space: nowrap;\n    cursor: pointer;\n  }\n\n  .menu-item.menu-item--disabled {\n    outline: none;\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  .menu-item .menu-item__label {\n    flex: 1 1 auto;\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  .menu-item .menu-item__prefix {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n  }\n\n  .menu-item .menu-item__prefix::slotted(*) {\n    margin-inline-end: var(--sl-spacing-x-small);\n  }\n\n  .menu-item .menu-item__suffix {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n  }\n\n  .menu-item .menu-item__suffix::slotted(*) {\n    margin-inline-start: var(--sl-spacing-x-small);\n  }\n\n  /* Safe triangle */\n  .menu-item--submenu-expanded::after {\n    content: '';\n    position: fixed;\n    z-index: calc(var(--sl-z-index-dropdown) - 1);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    clip-path: polygon(\n      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),\n      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),\n      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)\n    );\n  }\n\n  :host(:focus-visible) {\n    outline: none;\n  }\n\n  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,\n  .menu-item--submenu-expanded {\n    background-color: var(--sl-color-neutral-100);\n    color: var(--sl-color-neutral-1000);\n  }\n\n  :host(:focus-visible) .menu-item {\n    outline: none;\n    background-color: var(--sl-color-primary-600);\n    color: var(--sl-color-neutral-0);\n    opacity: 1;\n  }\n\n  .menu-item .menu-item__check,\n  .menu-item .menu-item__chevron {\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 1.5em;\n    visibility: hidden;\n  }\n\n  .menu-item--checked .menu-item__check,\n  .menu-item--has-submenu .menu-item__chevron {\n    visibility: visible;\n  }\n\n  /* Add elevation and z-index to submenus */\n  sl-popup::part(popup) {\n    box-shadow: var(--sl-shadow-large);\n    z-index: var(--sl-z-index-dropdown);\n    margin-left: var(--submenu-offset);\n  }\n\n  .menu-item--rtl sl-popup::part(popup) {\n    margin-left: calc(-1 * var(--submenu-offset));\n  }\n\n  @media (forced-colors: active) {\n    :host(:hover:not([aria-disabled='true'])) .menu-item,\n    :host(:focus-visible) .menu-item {\n      outline: dashed 1px SelectedItem;\n      outline-offset: -1px;\n    }\n  }\n"])),o.N)},4135:(e,t,n)=>{var s;n.d(t,{q:()=>l});var i=n(2692),o=n(7313),a=n(1493);i.k.define("sl-menu-item");var l=(0,a.L)({tagName:"sl-menu-item",elementClass:i.k,react:s||(s=n.t(o,2)),events:{},displayName:"SlMenuItem"})},7823:(e,t,n)=>{n.d(t,{h:()=>x});var s=n(168),i=n(5323),o=n(3413),a=n(2816);const l=(e,t)=>{const n=e._$AN;if(void 0===n)return!1;for(const i of n){var s;null!==(s=i._$AO)&&void 0!==s&&s.call(i,t,!1),l(i,t)}return!0},r=e=>{let t,n;do{var s;if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null===(s=n)||void 0===s?void 0:s.size))},h=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),c(t)}};function u(e){void 0!==this._$AN?(r(this),this._$AM=e,h(this)):this._$AM=e}function d(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const s=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(t)if(Array.isArray(s))for(let o=n;o<s.length;o++)l(s[o],!1),r(s[o]);else null!=s&&(l(s,!1),r(s));else l(this,e)}const c=e=>{var t,n;e.type==a.pX.CHILD&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=d),null!==(n=e._$AQ)&&void 0!==n||(e._$AQ=u))};class p extends a.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),h(this),this.isConnected=e._$AU}_$AO(e){var t,n;let s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),s&&(l(this,e),r(this))}setValue(e){if((0,o.OR)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class m{}const v=new WeakMap,f=(0,a.XM)(class extends p{render(e){return i.Ld}update(e,t){var n;let[s]=t;const o=s!==this.G;return o&&void 0!==this.G&&this.ot(void 0),(o||this.rt!==this.lt)&&(this.G=s,this.ct=null===(n=e.options)||void 0===n?void 0:n.host,this.ot(this.lt=e.element)),i.Ld}ot(e){if("function"==typeof this.G){var t;const n=null!==(t=this.ct)&&void 0!==t?t:globalThis;let s=v.get(n);void 0===s&&(s=new WeakMap,v.set(n,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,n;return"function"==typeof this.G?null===(e=v.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(n=this.G)||void 0===n?void 0:n.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var b,g,y=n(4316),x=class{constructor(e,t,n){this.popupRef=new m,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty("--safe-triangle-cursor-x","".concat(e.clientX,"px")),this.host.style.setProperty("--safe-triangle-cursor-y","".concat(e.clientY,"px"))},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(e)}},this.handleClick=e=>{var t;e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&("sl-menu-item"===e.target.tagName||(null==(t=e.target.role)?void 0:t.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{const e=this.host.renderRoot.querySelector("slot[name='submenu']"),t=null==e?void 0:e.assignedElements({flatten:!0}).filter((e=>"sl-menu"===e.localName))[0],n="rtl"===this.localize.dir();if(!t)return;const{left:s,top:i,width:o,height:a}=t.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x","".concat(n?s+o:s,"px")),this.host.style.setProperty("--safe-triangle-submenu-start-y","".concat(i,"px")),this.host.style.setProperty("--safe-triangle-submenu-end-x","".concat(n?s+o:s,"px")),this.host.style.setProperty("--safe-triangle-submenu-end-y","".concat(i+a,"px"))},(this.host=e).addController(this),this.hasSlotController=t,this.localize=n}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let n=null;for(const s of t.assignedElements())if(n=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==n.length)break;if(n&&0!==n.length){n[0].setAttribute("tabindex","0");for(let e=1;e!==n.length;++e)n[e].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then((()=>{n[0]instanceof HTMLElement&&n[0].focus()})),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?this.enableSubmenuTimer=window.setTimeout((()=>{this.setSubmenuState(!0)}),this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!(null==(e=this.host.parentElement)?void 0:e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),n=["padding-top","border-top-width","margin-top"].reduce(((e,n)=>{var s;const i=null!=(s=t.get(n))?s:new CSSUnitValue(0,"px");return e-(i instanceof CSSUnitValue?i:new CSSUnitValue(0,"px")).to("px").value}),0);this.skidding=n}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const e="ltr"===this.localize.dir();return this.isConnected?(0,y.dy)(g||(g=(0,s.Z)(["\n      <sl-popup\n        ","\n        placement=",'\n        anchor="anchor"\n        flip\n        flip-fallback-strategy="best-fit"\n        skidding="','"\n        strategy="fixed"\n      >\n        <slot name="submenu"></slot>\n      </sl-popup>\n    '])),f(this.popupRef),e?"right-start":"left-start",this.skidding):(0,y.dy)(b||(b=(0,s.Z)([' <slot name="submenu" hidden></slot> '])))}}},2692:(e,t,n)=>{n.d(t,{k:()=>b});var s,i=n(168),o=n(6995),a=n(7823),l=n(3020),r=n(3337),h=n(2375),u=n(8699),d=n(4457),c=n(508),p=n(5346),m=n(665),v=n(4316),f=n(3237),b=class extends c.P{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new h.V(this),this.hasSlotController=new r.r(this,"submenu"),this.submenuController=new a.h(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();"undefined"!==typeof this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return(0,r.F)(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e="rtl"===this.localize.dir(),t=this.submenuController.isExpanded();return(0,v.dy)(s||(s=(0,i.Z)(['\n      <div\n        id="anchor"\n        part="base"\n        class=','\n        ?aria-haspopup="','"\n        ?aria-expanded="','"\n      >\n        <span part="checked-icon" class="menu-item__check">\n          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>\n        </span>\n\n        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>\n\n        <slot part="label" class="menu-item__label" @slotchange=','></slot>\n\n        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>\n\n        <span part="submenu-icon" class="menu-item__chevron">\n          <sl-icon name=',' library="system" aria-hidden="true"></sl-icon>\n        </span>\n\n        ',"\n      </div>\n    "])),(0,m.$)({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t}),this.isSubmenu(),!!t,this.handleDefaultSlotChange,e?"chevron-left":"chevron-right",this.submenuController.renderSubmenu())}};b.styles=o.H,b.dependencies={"sl-icon":u.V,"sl-popup":l.l},(0,p.u2)([(0,f.IO)("slot:not([name])")],b.prototype,"defaultSlot",2),(0,p.u2)([(0,f.IO)(".menu-item")],b.prototype,"menuItem",2),(0,p.u2)([(0,f.Cb)()],b.prototype,"type",2),(0,p.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],b.prototype,"checked",2),(0,p.u2)([(0,f.Cb)()],b.prototype,"value",2),(0,p.u2)([(0,f.Cb)({type:Boolean,reflect:!0})],b.prototype,"disabled",2),(0,p.u2)([(0,d.Y)("checked")],b.prototype,"handleCheckedChange",1),(0,p.u2)([(0,d.Y)("disabled")],b.prototype,"handleDisabledChange",1),(0,p.u2)([(0,d.Y)("type")],b.prototype,"handleTypeChange",1)}}]);
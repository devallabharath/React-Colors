"use strict";(self.webpackChunkreact_colors=self.webpackChunkreact_colors||[]).push([[884],{3160:(e,s,n)=>{n.d(s,{Z:()=>o});var a=n(2135),l=n(6589),c=n(3576),t=n.n(c),r=n(6417);const o=e=>{const s=t()(e.hex).luminance()>.4?["black","#ffffff55"]:["white","#00000055"],n=s[0],c=s[1],o=(e,s)=>(0,r.jsxs)("div",{className:"details",style:{color:n,background:c},children:[(0,r.jsx)("span",{className:"color-name",children:e}),s&&(0,r.jsx)(l.VJ,{className:"caret",name:"caret-right-fill"})]});return(()=>{const{Type:s,Format:c,Id:t,name:i,hex:d}=e;return(0,r.jsxs)("div",{style:{background:d},className:"ColorBox",children:[(0,r.jsx)(l.D3,{style:{color:n},className:"copy-button",value:e[c]}),(0,r.jsx)("span",{style:{color:n},className:"color-value",children:e[c]}),"color"===s&&t?(0,r.jsx)(a.rU,{to:"/?mode=shades&id=".concat(t,"&name=").concat(i.slice(0,-4),"&color=").concat(d.replace("#","")),children:(0,r.jsx)(l.Rb,{content:"See More",children:o(i,!0)})}):o(i,!1)]})})()}},3588:(e,s,n)=>{n.d(s,{UB:()=>u,k7:()=>j,ML:()=>m,R6:()=>x});var a=n(7313),l=n(8467),c=n(6417);const t=(0,a.lazy)((()=>Promise.all([n.e(830),n.e(914)]).then(n.bind(n,4914)))),r=(0,a.lazy)((()=>Promise.all([n.e(830),n.e(734),n.e(20),n.e(372),n.e(106)]).then(n.bind(n,7152)))),o=(0,a.lazy)((()=>Promise.all([n.e(830),n.e(756)]).then(n.bind(n,2756)))),i=(0,a.lazy)((()=>Promise.all([n.e(830),n.e(20),n.e(197)]).then(n.bind(n,6197)))),d=(0,a.lazy)((()=>Promise.all([n.e(830),n.e(734),n.e(20),n.e(997),n.e(305),n.e(736),n.e(372),n.e(135),n.e(589),n.e(65)]).then(n.bind(n,8065)))),h=(0,a.lazy)((()=>n.e(930).then(n.bind(n,3930)))),m=()=>{const e=(0,a.useRef)(),[s,n]=(0,a.useState)(window.innerWidth>1280),r=window.innerWidth>1280,o=(0,l.s0)();return(0,a.useEffect)((()=>{function e(){const e=window.innerWidth>1280;n(e)}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d,{ref:e,Contained:s}),(0,c.jsx)("nav",{children:(0,c.jsxs)("div",{className:"top",children:[(0,c.jsx)("div",{className:"nav-part",children:!r&&(0,c.jsx)(t,{className:"ham-menu",name:"list",onClick:()=>{var s;return null===(s=e.current)||void 0===s?void 0:s.show()}})}),(0,c.jsx)("h2",{children:"Palettes"}),(0,c.jsx)("button",{className:"new-button",onClick:()=>o("/?mode=new"),children:"+ Add New"})]})})]})},x=e=>{let{IRef:s,Name:n,goHome:a,changeName:l,onDiscard:r,onSave:o,addBox:d,random:h,clearAll:m}=e;return(0,c.jsxs)("nav",{children:[(0,c.jsxs)("div",{className:"top",children:[(0,c.jsx)("div",{className:"nav-part",children:(0,c.jsx)("button",{className:"home-button",onClick:a,children:(0,c.jsx)(t,{name:"house-fill"})})}),(0,c.jsx)("div",{className:"nav-part",children:(0,c.jsxs)("span",{className:"Name",onClick:l,children:[(0,c.jsx)("span",{ref:s,children:null!==n&&void 0!==n?n:"New Palette"}),(0,c.jsx)(t,{name:"pencil-fill"})]})}),(0,c.jsxs)("div",{className:"nav-part",children:[(0,c.jsx)(i,{content:"Discard",placement:"bottom",children:(0,c.jsx)("button",{className:"del-button",onClick:r,children:(0,c.jsx)(t,{name:"x"})})}),(0,c.jsx)(i,{content:"Save",placement:"bottom",children:(0,c.jsx)("button",{className:"save-button",onClick:o,children:(0,c.jsx)(t,{name:"check-lg"})})})]})]}),(0,c.jsxs)("div",{className:"bottom",children:[(0,c.jsx)("button",{onClick:d,children:"Add New"}),(0,c.jsx)("button",{onClick:h,children:"Random All"}),(0,c.jsx)("button",{onClick:m,children:"Clear All"})]})]})},j=e=>{let{Type:s,onBtnClick:n}=e;const a=(0,l.s0)();return(0,c.jsx)("nav",{children:(0,c.jsxs)("div",{className:"top",children:[(0,c.jsx)("div",{className:"nav-part",children:(0,c.jsx)(t,{className:"home-button",name:"house-fill",onClick:()=>a("/")})}),(0,c.jsx)("h2",{children:s}),(0,c.jsx)("button",{className:"new-button",onClick:n,children:"Clear"})]})})},u=e=>{const{Name:s,Format:n,changeFormat:a,Level:i,changeLevel:d,back:h}=e,m=(0,l.s0)();return(0,c.jsxs)("nav",{children:[(0,c.jsxs)("div",{className:"top",children:[(0,c.jsxs)("div",{className:"nav-part",children:[(0,c.jsx)("button",{className:"back-button",onClick:()=>h&&m(h),children:(0,c.jsx)(t,{name:"arrow-left-circle-fill"})}),(0,c.jsx)("button",{className:"home-button",onClick:()=>m("/"),children:(0,c.jsx)(t,{name:"house-fill"})})]}),(0,c.jsx)("h2",{children:s}),(0,c.jsxs)(r,{className:"color-format",value:n,size:"small",filled:!0,onSlChange:a,children:[(0,c.jsx)(o,{value:"hex",children:" Hex "}),(0,c.jsx)(o,{value:"rgb",children:" RGB "}),(0,c.jsx)(o,{value:"rgba",children:" RGBA "})]})]}),e.isSlider&&i&&v(parseInt(i),d)]})},v=(e,s)=>(0,c.jsx)("div",{className:"bottom",children:(0,c.jsx)(h,{className:"Slider",min:100,max:900,step:100,marks:{100:"100",200:"200",300:"300",400:"400",500:"500",600:"600",700:"700",800:"800",900:"900"},included:!1,defaultValue:e,onChange:s})})},884:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});var a=n(7313),l=n(3588),c=n(3160),t=n(2135),r=n(2017),o=n(6417);const i=()=>{const[e,s]=(0,a.useState)("hex"),[n]=(0,t.lr)(),i=n.get("id"),d=n.get("name"),h=n.get("color"),{paletteName:m,colors:x}=(0,r.xn)("".concat(d),"#".concat(h));return(0,o.jsxs)("div",{className:"Shades",children:[(0,o.jsx)(l.UB,{Type:"shades",Name:m,Format:e,changeFormat:e=>s(e.target.value),back:"/?mode=palette&id=".concat(i),isSlider:!1}),(0,o.jsx)("div",{className:"shades-colors",children:x.map((s=>(0,o.jsx)(c.Z,{Type:"shade",...s,Format:e},s.hex)))})]})}}}]);
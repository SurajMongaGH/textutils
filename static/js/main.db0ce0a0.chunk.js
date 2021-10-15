(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(4),r=a.n(l),o=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"Dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.toogleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(s.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["light"===e.mode?"Disable":"Enable"," Light Mode "]})]})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],l=a[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{style:{color:"dark"===e.mode?"white":"black"},children:e.title}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",style:{backgroundColor:"dark"===e.mode?"#374c6d":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"12",value:n,placeholder:"Enter text here",onChange:function(e){l(e.target.value)}})})}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toUpperCase();l(t),e.showAlert("Text converted to uppercase","success")},children:"Convert to Uppercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toLowerCase();l(t),e.showAlert("Text converted to lowercase","success")},children:"Convert to Lowercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied to clipboard","success")},children:"Copy text"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){l("")},children:"Clear text"}),Object(s.jsxs)("div",{className:"container my-4",children:[Object(s.jsx)("h2",{style:{color:"dark"===e.mode?"white":"black"},children:"Text Summary"}),Object(s.jsxs)("p",{style:{color:"dark"===e.mode?"white":"black"},children:["Word Count = ",0===n.length?0:n.split(" ").length]}),Object(s.jsxs)("p",{style:{color:"dark"===e.mode?"white":"black"},children:["Character Count=",n.length]})]})]})}var b=function(e){return e.alert&&Object(s.jsx)("div",{className:"alert alert-".concat(e.alert.Type," alert-dismissible fade show"),role:"alert",children:e.alert.msg})};var h=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)("light"),r=Object(o.a)(l,2),h=r[0],m=r[1],j=function(e,t){n({msg:e,Type:t}),setTimeout((function(){n(null)}),1e3)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtils",mode:h,toogleMode:function(){"light"===h?(m("dark"),document.body.style.backgroundColor="#374c6d",j("Dark mode enabled","success")):(m("light"),document.body.style.backgroundColor="white",j("Light mode enabled","success"))}}),Object(s.jsx)(b,{alert:a}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(d,{title:"Enter the text to analyze",showAlert:j,mode:h})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.db0ce0a0.chunk.js.map
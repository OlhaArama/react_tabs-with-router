(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(2)),b=(c(0),c(6)),j=c.n(b),r=c(1),l=function(t){var e=t.to,c=t.text;return Object(r.jsx)(n.c,{to:e,className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},children:c})},d=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(l,{to:"/",text:"Home"}),Object(r.jsx)(l,{to:"tabs",text:"Tabs"})]})})})},o=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},x=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},h=function(t){var e=t.tabs,c=Object(i.h)().tabId,a=void 0===c?"":c,s=e.find((function(t){return t.id===a}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":t.id===a}),children:Object(r.jsx)(n.b,{to:"../".concat(t.id),children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:s?s.content:"Please select a tab"})]})},O=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(h,{tabs:O})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(h,{tabs:O})})]}),Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(o,{})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(x,{})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2a15e38f.chunk.js.map
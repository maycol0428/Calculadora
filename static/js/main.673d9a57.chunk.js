(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],{25:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},37:function(e,t){},38:function(e,t,r){"use strict";r.r(t);var n=r(13),c=r.n(n),a=r(20),i=r.n(a),d=(r(25),r(6)),o=r(2),u=(r(26),r(27),r(41)),s=r(1),p="add-digit",O="choose-operation",j="clear",l="delete-digit",b="evaluate";function h(e){var t=e.currentOperand,r=e.previousOperand,n=e.operation,c=parseFloat(r),a=parseFloat(t);if(isNaN(c)||isNaN(a))return"";var i="";switch(n){case"+":i=Object(u.a)(c,a);break;case"-":i=Object(u.e)(c,a);break;case"*":i=Object(u.d)(c,a);break;case"\xf7":i=Object(u.b)(c,a);break;default:return}return Object(u.c)(i,{precision:14}).toString()}function g(e,t){var r=t.type,n=t.payload;switch(r){case p:return e.overwrite?Object(o.a)(Object(o.a)({},e),{},{currentOperand:"."===n.digit?"0.":n.digit,overwrite:!1}):"."!==n.digit||e.currentOperand?"0"===n.digit&&"0"===e.currentOperand||"."===n.digit&&e.currentOperand.includes(".")?e:Object(o.a)(Object(o.a)({},e),{},{currentOperand:"".concat(e.currentOperand||"").concat(n.digit)}):Object(o.a)(Object(o.a)({},e),{},{currentOperand:"0".concat(n.digit)});case O:return null==e.currentOperand&&null==e.previousOperand?e:null==e.currentOperand?Object(o.a)(Object(o.a)({},e),{},{operation:n.operation}):null==e.previousOperand?Object(o.a)(Object(o.a)({},e),{},{operation:n.operation,previousOperand:e.currentOperand,currentOperand:null}):Object(o.a)(Object(o.a)({},e),{},{previousOperand:h(e),operation:n.operation,currentOperand:null});case j:return{};case l:return e.overwrite?{}:null==e.currentOperand||1===e.currentOperand.length?Object(o.a)(Object(o.a)({},e),{},{currentOperand:null}):Object(o.a)(Object(o.a)({},e),{},{currentOperand:e.currentOperand.slice(0,-1)});case b:return null==e.operation||null==e.currentOperand||null==e.previousOperand?e:Object(o.a)(Object(o.a)({},e),{},{overwrite:!0,previousOperand:null,operation:null,currentOperand:h(e)});default:return}}function v(e){var t=e.dispatch,r=e.digit;return Object(s.jsx)("button",{onClick:function(){return t({type:p,payload:{digit:r}})},children:r})}function x(e){var t=e.dispatch,r=e.operation;return Object(s.jsx)("button",{onClick:function(){return t({type:O,payload:{operation:r}})},children:r})}var f=function(){var e=Object(n.useReducer)(g,{}),t=Object(d.a)(e,2),r=t[0],c=r.currentOperand,a=r.previousOperand,i=r.operation,o=t[1];return Object(s.jsxs)("div",{className:"calculator-grid",children:[Object(s.jsxs)("div",{className:"output",children:[Object(s.jsxs)("div",{className:"previous-operand",children:[a,i]}),Object(s.jsx)("div",{className:"current-operand",children:c})]}),Object(s.jsx)("button",{className:"span-two",onClick:function(){return o({type:j})},children:"AC"}),Object(s.jsx)("button",{onClick:function(){return o({type:l})},children:"DEL"}),Object(s.jsx)(x,{operation:"\xf7",dispatch:o}),Object(s.jsx)(v,{digit:"1",dispatch:o}),Object(s.jsx)(v,{digit:"2",dispatch:o}),Object(s.jsx)(v,{digit:"3",dispatch:o}),Object(s.jsx)(x,{operation:"*",dispatch:o}),Object(s.jsx)(v,{digit:"4",dispatch:o}),Object(s.jsx)(v,{digit:"5",dispatch:o}),Object(s.jsx)(v,{digit:"6",dispatch:o}),Object(s.jsx)(x,{operation:"+",dispatch:o}),Object(s.jsx)(v,{digit:"7",dispatch:o}),Object(s.jsx)(v,{digit:"8",dispatch:o}),Object(s.jsx)(v,{digit:"9",dispatch:o}),Object(s.jsx)(x,{operation:"-",dispatch:o}),Object(s.jsx)(v,{digit:".",dispatch:o}),Object(s.jsx)(v,{digit:"0",dispatch:o}),Object(s.jsx)("button",{className:"span-two",onClick:function(){return o({type:b})},children:"="})]})},k=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,42)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.673d9a57.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./packages/modules/src/modules/RichText/RirchText.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),m=n("./packages/modules/src/form/ModulesPlayground/ModulesPlayground.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=s(this,i(t).call(this,e))).layout=null,n}var n,a,p;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;l(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"rich-text-module"}},"Rich Text Module"),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"richtext-properties"}},"RichText properties"),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"type"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Required"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Default"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"type")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"richText")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"true"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"-"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"module type")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"name")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"string"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"true"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"-"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"module name")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"td"},"content")),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"string"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"-"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"-"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"html markup")))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},'{\n  name: "richText",\n  type: "richText",\n  content: "<h3>Lorem ipsum dolor sit amet</h3>"\n}\n')),r.a.createElement(m.a,{form:{modules:[{name:"richText",type:"richText",content:"<h3>Lorem ipsum dolor sit amet</h3>"},{name:"submit",type:"submit",caption:"Next"}]}}))}}])&&c(n.prototype,a),p&&c(n,p),t}();g.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=packages-modules-src-modules-rich-text-rirch-text.8d26915cdb7f19d3d78c.js.map
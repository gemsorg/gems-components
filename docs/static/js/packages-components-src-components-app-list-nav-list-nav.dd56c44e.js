(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/ListNav/ListNav.styl":function(e,n,s){(e.exports=s("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-listnav {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 50px 0;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 660px) {\n  .gem-listnav {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 75px;\n    z-index: 2;\n    padding: 0 0;\n    overflow-x: scroll;\n    background-color: #fff;\n    -webkit-box-shadow: 0px 4px 4px #dfeeff;\n            box-shadow: 0px 4px 4px #dfeeff;\n    border-top: 1px solid #f3f9ff;\n  }\n}\n.gem-listnav-inner {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n@media (max-width: 660px) {\n  .gem-listnav-inner {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n  }\n}\n.gem-listnav-link {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 34px;\n  font-family: 'Avenir';\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 36px;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #1c2541;\n}\n.gem-listnav-link-active {\n  color: #fff;\n  background-color: #1471eb;\n  border-radius: 5px;\n}\n@media (max-width: 660px) {\n  .gem-listnav-link-active {\n    border-radius: 0;\n  }\n}\n","",{version:3,sources:["packages/components/src/components/app/ListNav/ListNav.styl","ListNav.styl","packages/uikit/font.styl"],names:[],mappings:"AAIA;EACE,8BAAY;UAAZ,sBAAY;EACZ,eAAS;EACT,iCAA4B;ACH9B;ADKwC;EAAA;IACpC,eAAS;IACT,OAAM;IACN,QAAO;IACP,SAAK;IAEL,UAAS;IACT,YAAS;IAET,kBAAY;IAGZ,sBAAkB;IAClB,uCAAY;YAAZ,+BAAY;IACZ,6BAAY;ECNd;AACF;ADOE;EACE,8BAAY;UAAZ,sBAAY;EACZ,YAAO;EAEP,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,yBAAa;MAAb,sBAAa;UAAb,mBAAa;EACb,wBAAiB;MAAjB,qBAAiB;UAAjB,uBAAiB;EAEjB,YAAO;ACPX;ADS0C;EAAA;IACpC,uBAAiB;QAAjB,oBAAiB;YAAjB,2BAAiB;ECNrB;AACF;ADOE;EACE,8BAAY;UAAZ,sBAAY;EACZ,eAAS;EElBX,qBAAa;EAEX,gBAAa;EAEb,eAAW;EAEX,iBAAa;EFeb,qBAAiB;EACjB,mBAAY;EAEZ,cAAO;ACJX;ADMI;EACE,WAAO;EACP,yBAAkB;EAClB,kBAAe;ACJrB;ADM4C;EAAA;IACpC,gBAAe;ECHrB;AACF",file:"ListNav.styl",sourcesContent:["@import '~@expandorg/uikit/colors'\n@import '~@expandorg/uikit/font'\n@import '~@expandorg/uikit/size'\n\n.gem-listnav\n  box-sizing: border-box;\n  padding: 50px 0\n  -webkit-overflow-scrolling: touch\n\n  @media(max-width: breakpoint-mobile-sm)\n    position fixed\n    left: 0\n    right: 0\n    top: sz-navbar-height\n\n    z-index: 2\n    padding: 0 0\n\n    overflow-x: scroll;\n\n\n    background-color: color-white\n    box-shadow: light-shadow\n    border-top: 1px solid color-light-blue\n\n  &-inner\n    box-sizing: border-box\n    height 40px\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    height 100%\n\n    @media(max-width: breakpoint-mobile-sm)\n      justify-content: flex-start\n\n  &-link\n    box-sizing: border-box;\n    padding: 0 34px\n\n    font(h4, false, false, 36px)\n    text-decoration: none;\n    white-space nowrap\n\n    color: color-text-dark\n\n    &-active\n      color: color-white\n      background-color: color-primary-blue;\n      border-radius: 5px;\n\n      @media(max-width: breakpoint-mobile-sm)\n        border-radius: 0;\n",".gem-listnav {\n  box-sizing: border-box;\n  padding: 50px 0;\n  -webkit-overflow-scrolling: touch;\n}\n@media (max-width: 660px) {\n  .gem-listnav {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 75px;\n    z-index: 2;\n    padding: 0 0;\n    overflow-x: scroll;\n    background-color: #fff;\n    box-shadow: 0px 4px 4px #dfeeff;\n    border-top: 1px solid #f3f9ff;\n  }\n}\n.gem-listnav-inner {\n  box-sizing: border-box;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n@media (max-width: 660px) {\n  .gem-listnav-inner {\n    justify-content: flex-start;\n  }\n}\n.gem-listnav-link {\n  box-sizing: border-box;\n  padding: 0 34px;\n  font-family: 'Avenir';\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 36px;\n  text-decoration: none;\n  white-space: nowrap;\n  color: #1c2541;\n}\n.gem-listnav-link-active {\n  color: #fff;\n  background-color: #1471eb;\n  border-radius: 5px;\n}\n@media (max-width: 660px) {\n  .gem-listnav-link-active {\n    border-radius: 0;\n  }\n}\n","font-family-base = 'Avenir'\n\nfont-preset = {\n  'h1': (300 36px 1.3),\n\n  'h2-title': (400 24px 1.3),\n  'h2-bold': (600 24px 1.3),\n\n  'h3-title': (400 18px 1.3),\n  'h3-bold': (800 18px 1.3),\n\n  'h4': (500 15px 1.3),\n  'h4-bold': (800 15px 1.3),\n\n  'body': (400 16px 1.3),\n  'body-bold': (800 16px 1.3),\n\n  'oversized': (300 96px 1.2),\n\n  'subtitle': (800 12px 1.3 0.15em),\n\n  'small-text': (400 14px 1.3),\n  'small-text-bold': (900 14px 1.3),\n\n  'navigation': (400 10px normal 0.15em),\n\n  'input-label': (800 11px normal),\n\n}\n\n\nfont-base(weight, size, line-height, letter-spacing)\n  font-family: font-family-base\n  if weight\n    font-weight: weight\n  if size\n    font-size: size\n  if line-height\n    line-height: line-height\n  if letter-spacing\n    letter-spacing: letter-spacing\n\nfont(presetName, override-weight=false, override-size=false, override-line-height=false)\n  preset = font-preset[presetName]\n  weight = preset[0]\n  if override-weight\n    weight = override-weight\n\n  size = preset[1]\n  if override-size\n    size = override-size\n\n  line-height = preset[2]\n  if override-line-height\n    line-height = override-line-height\n\n  font-base(weight, size, line-height, preset[3])\n"]}])},"./packages/components/src/components/app/ListNav/ListNav.js":function(e,n,s){"use strict";s.d(n,"a",function(){return A});var t=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),i=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),a=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),r=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=s("./node_modules/react/index.js"),d=s.n(l),p=s("./node_modules/classnames/index.js"),c=s.n(p),m=s("./node_modules/react-router-dom/esm/react-router-dom.js"),A=(s("./packages/components/src/components/app/ListNav/ListNav.styl"),function(e){function n(){return Object(t.a)(this,n),Object(i.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(r.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){var e=this.props,n=e.className,s=e.navs;return d.a.createElement("div",{className:c()("gem-listnav",n)},d.a.createElement("div",{className:"gem-listnav-inner"},s.map(function(e){var n=e.href,s=e.text;return d.a.createElement(m.b,{key:n,className:"gem-listnav-link",activeClassName:"gem-listnav-link-active",exact:!0,to:n},s)})))}}]),n}(l.Component));A.defaultProps={className:null,navs:[]},"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListNav",filename:"packages/components/src/components/app/ListNav/ListNav.js"}}),"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListNav",filename:"packages/components/src/components/app/ListNav/ListNav.js"}})},"./packages/components/src/components/app/ListNav/ListNav.mdx":function(e,n,s){"use strict";s.r(n),s.d(n,"default",function(){return d});var t=s("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(s("./node_modules/react/index.js"),s("./node_modules/@mdx-js/react/dist/index.es.js")),i=s("./node_modules/docz/dist/index.esm.js"),a=s("./packages/components/src/components/app/ListNav/ListNav.js"),r={},l="wrapper";function d(e){var n=e.components,s=Object(t.a)(e,["components"]);return Object(o.b)(l,Object.assign({},r,s,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"listnav"},"ListNav"),Object(o.b)(i.c,{__position:0,__code:"<ListNav\n  navs={[\n    {\n      href: '/',\n      text: 'All',\n    },\n    {\n      href: '/tasks/scheduled',\n      text: 'Scheduled',\n    },\n    {\n      href: '/tasks/in-progress',\n      text: 'In Progress',\n    },\n    {\n      href: '/tasks/completed',\n      text: 'Completed',\n    },\n  ]}\n/>",__scope:{props:this?this.props:s,Playground:i.c,Props:i.d,ListNav:a.a},__codesandbox:"undefined",mdxType:"Playground"},Object(o.b)(a.a,{navs:[{href:"/",text:"All"},{href:"/tasks/scheduled",text:"Scheduled"},{href:"/tasks/in-progress",text:"In Progress"},{href:"/tasks/completed",text:"Completed"}],mdxType:"ListNav"})),Object(o.b)(i.d,{of:a.a,mdxType:"Props"}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/components/src/components/app/ListNav/ListNav.mdx"}}),d.isMDXComponent=!0},"./packages/components/src/components/app/ListNav/ListNav.styl":function(e,n,s){var t=s("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/ListNav/ListNav.styl");"string"===typeof t&&(t=[[e.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=s("./node_modules/style-loader/lib/addStyles.js")(t,o);t.locals&&(e.exports=t.locals),e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/ListNav/ListNav.styl",function(){var n=s("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/ListNav/ListNav.styl");if("string"===typeof n&&(n=[[e.i,n,""]]),!function(e,n){var s,t=0;for(s in e){if(!n||e[s]!==n[s])return!1;t++}for(s in n)t--;return 0===t}(t.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),e.hot.dispose(function(){i()})}}]);
//# sourceMappingURL=packages-components-src-components-app-list-nav-list-nav.cbc81f1ac4556a27c735.js.map
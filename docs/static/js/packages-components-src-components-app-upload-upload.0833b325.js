(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl":function(e,n,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-panel {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 30px;\n  background: #fff;\n  -webkit-box-shadow: 0px 4px 4px #dfeeff;\n          box-shadow: 0px 4px 4px #dfeeff;\n}\n","",{version:3,sources:["/Users/slava/my/expandorg/expand-components/packages/components/src/components/Panel/packages/components/src/components/Panel/Panel.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/Panel/Panel.styl"],names:[],mappings:"AAGA;EACE,8BAAY;UAAZ,sBAAY;EACZ,aAAS;EAET,gBAAY;EACZ,uCAAY;UAAZ,+BAAY;ACHd",file:"Panel.styl",sourcesContent:["@import '~@expandorg/uikit/colors'\n@import '~@expandorg/uikit/font'\n\n.gem-panel\n  box-sizing: border-box\n  padding: 30px\n\n  background: color-white\n  box-shadow: light-shadow\n",".gem-panel {\n  box-sizing: border-box;\n  padding: 30px;\n  background: #fff;\n  box-shadow: 0px 4px 4px #dfeeff;\n}\n"]}])},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/Upload.styl":function(e,n,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-dropzone {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: 10px;\n  height: 160px;\n  width: 100%;\n  background-color: #f3f9ff;\n  border-radius: 5px;\n  border: 2px dashed #8cbbee;\n  cursor: pointer;\n  outline: none;\n}\n.gem-dropzone input {\n  outline: none;\n}\n.gem-dropzone--uploading {\n  border-color: transparent;\n}\n","",{version:3,sources:["/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/packages/components/src/components/app/Upload/Upload.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/Upload.styl"],names:[],mappings:"AAGA;EACE,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,yBAAa;MAAb,sBAAa;UAAb,mBAAa;EACb,wBAAiB;MAAjB,qBAAiB;UAAjB,uBAAiB;EACjB,kBAAS;EAET,8BAAY;UAAZ,sBAAY;EAEZ,gBAAY;EAEZ,aAAQ;EACR,WAAO;EAEP,yBAAkB;EAClB,kBAAe;EACf,0BAAQ;EAER,eAAQ;EACR,aAAS;ACPX;ADSE;EACE,aAAS;ACPb;ADUE;EACE,yBAAc;ACRlB",file:"Upload.styl",sourcesContent:["@import '~@expandorg/uikit/colors';\n@import '~@expandorg/uikit/font';\n\n.gem-dropzone\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position relative\n\n  box-sizing: border-box;\n\n  margin-top: 10px;\n\n  height: 160px;\n  width: 100%\n\n  background-color: color-light-blue\n  border-radius: 5px;\n  border: 2px dashed color-heavy-blue;\n\n  cursor: pointer;\n  outline: none;\n\n  input\n    outline: none;\n\n\n  &--uploading\n    border-color: transparent;\n\n",".gem-dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  margin-top: 10px;\n  height: 160px;\n  width: 100%;\n  background-color: #f3f9ff;\n  border-radius: 5px;\n  border: 2px dashed #8cbbee;\n  cursor: pointer;\n  outline: none;\n}\n.gem-dropzone input {\n  outline: none;\n}\n.gem-dropzone--uploading {\n  border-color: transparent;\n}\n"]}])},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadImagePreview.styl":function(e,n,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-uploadpreview {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 240px;\n  min-height: 60px;\n  width: 100%;\n  height: 100%;\n}\n.gem-uploadpreview-preview {\n  display: block;\n  width: auto;\n  height: auto;\n  max-width: 300px;\n  max-height: 100px;\n}\n.gem-uploadpreview-hint {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  background-color: #fff;\n  left: calc(50% - 120px);\n  top: calc(50% - 30px);\n  color: #1c2541;\n  border: 1px solid #8cbbee;\n  border-radius: 5px;\n  text-align: center;\n  width: 240px;\n  height: 60px;\n  font-family: 'Avenir';\n  font-weight: 800;\n  font-size: 12px;\n  line-height: 58px;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  visibility: hidden;\n}\n.gem-uploadpreview:hover .gem-uploadpreview-hint {\n  visibility: visible;\n}\n","",{version:3,sources:["/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/packages/components/src/components/app/Upload/UploadImagePreview.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/UploadImagePreview.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/packages/uikit/font.styl"],names:[],mappings:"AAGA;EACE,8BAAY;UAAZ,sBAAY;EACZ,kBAAU;EAEV,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,yBAAa;MAAb,sBAAa;UAAb,mBAAa;EACb,wBAAiB;MAAjB,qBAAiB;UAAjB,uBAAiB;EAEjB,gBAAW;EACX,gBAAY;EAEZ,WAAO;EACP,YAAQ;ACLV;ADOE;EACE,cAAS;EAET,WAAO;EACP,YAAQ;EAER,gBAAW;EACX,iBAAY;ACPhB;ADSE;EACE,8BAAY;UAAZ,sBAAY;EACZ,kBAAU;EAEV,sBAAkB;EAElB,uBAAM;EACN,qBAAK;EAEL,cAAO;EACP,yBAAQ;EACR,kBAAe;EAEf,kBAAY;EAEZ,YAAO;EACP,YAAQ;EEpBV,qBAAa;EAEX,gBAAa;EAEb,eAAW;EAEX,iBAAa;EAEb,sBAAgB;EFehB,yBAAgB;EAChB,kBAAY;ACThB;ADWI;EACE,mBAAW;ACTjB",file:"UploadImagePreview.styl",sourcesContent:["@import '~@expandorg/uikit/colors';\n@import '~@expandorg/uikit/font';\n\n.gem-uploadpreview\n  box-sizing: border-box;\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  min-width: 240px\n  min-height: 60px\n\n  width: 100%\n  height: 100%\n\n  &-preview\n    display: block;\n\n    width: auto;\n    height: auto;\n\n    max-width: 300px\n    max-height: 100px\n\n  &-hint\n    box-sizing: border-box;\n    position: absolute;\n\n    background-color: color-white\n\n    left: calc(50% - 120px)\n    top: calc(50% - 30px)\n\n    color: color-blue-background\n    border: 1px solid color-heavy-blue\n    border-radius: 5px\n\n    text-align: center;\n\n    width: 240px\n    height: 60px\n    font(subtitle, false,false, 58px)\n\n    text-transform: uppercase;\n    visibility: hidden;\n\n    .gem-uploadpreview:hover &\n      visibility visible\n\n",".gem-uploadpreview {\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 240px;\n  min-height: 60px;\n  width: 100%;\n  height: 100%;\n}\n.gem-uploadpreview-preview {\n  display: block;\n  width: auto;\n  height: auto;\n  max-width: 300px;\n  max-height: 100px;\n}\n.gem-uploadpreview-hint {\n  box-sizing: border-box;\n  position: absolute;\n  background-color: #fff;\n  left: calc(50% - 120px);\n  top: calc(50% - 30px);\n  color: #1c2541;\n  border: 1px solid #8cbbee;\n  border-radius: 5px;\n  text-align: center;\n  width: 240px;\n  height: 60px;\n  font-family: 'Avenir';\n  font-weight: 800;\n  font-size: 12px;\n  line-height: 58px;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  visibility: hidden;\n}\n.gem-uploadpreview:hover .gem-uploadpreview-hint {\n  visibility: visible;\n}\n","font-family-base = 'Avenir'\n\nfont-preset = {\n  'h1': (300 36px 1.3),\n\n  'h2-title': (400 24px 1.3),\n  'h2-bold': (500 24px 1.3),\n\n  'h3-title': (400 18px 1.3),\n  'h3-bold': (800 18px 1.3),\n\n  'h4': (500 15px 1.3),\n  'h4-bold': (800 15px 1.3),\n\n  'body': (400 16px 1.3),\n  'body-bold': (800 16px 1.3),\n\n  'oversized': (300 96px 1.2),\n\n  'subtitle': (800 12px 16px 0.15em),\n\n  'small-text': (400 14px 1.3),\n  'small-text-bold': (900 14px 1.3),\n\n  'navigation': (400 10px normal 0.15em),\n\n  'input-label': (800 11px normal),\n}\n\n\nfont-base(weight, size, line-height, letter-spacing)\n  font-family: font-family-base\n  if weight\n    font-weight: weight\n  if size\n    font-size: size\n  if line-height\n    line-height: line-height\n  if letter-spacing\n    letter-spacing: letter-spacing\n\nfont(presetName, override-weight=false, override-size=false, override-line-height=false)\n  preset = font-preset[presetName]\n  weight = preset[0]\n  if override-weight\n    weight = override-weight\n\n  size = preset[1]\n  if override-size\n    size = override-size\n\n  line-height = preset[2]\n  if override-line-height\n    line-height = override-line-height\n\n  font-base(weight, size, line-height, preset[3])\n"]}])},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadProgressIndicator.styl":function(e,n,o){(e.exports=o("./node_modules/css-loader/dist/runtime/api.js")(!0)).push([e.i,".gem-uploadprogress {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 10px;\n}\n.gem-uploadprogress-indicator {\n  position: absolute;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #34a893;\n  color: #fff;\n  -webkit-transition: width 200ms linear, color 50ms linear, background-color 50ms linear;\n  -o-transition: width 200ms linear, color 50ms linear, background-color 50ms linear;\n  transition: width 200ms linear, color 50ms linear, background-color 50ms linear;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 20px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.gem-uploadprogress-indicator--error {\n  background-color: #fbbc05;\n  color: #694c00;\n}\n.gem-uploadprogress-percent {\n  font-family: 'Avenir';\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 1.3;\n  overflow: hidden;\n  -webkit-transition: opacity 1000ms linear;\n  -o-transition: opacity 1000ms linear;\n  transition: opacity 1000ms linear;\n}\n.gem-uploadprogress-cancel {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  color: #2068bc;\n  border: 1px solid #2068bc;\n  border-radius: 2px;\n  text-align: center;\n  width: 100px;\n  height: 40px;\n  font-family: 'Avenir';\n  font-weight: 800;\n  font-size: 12px;\n  line-height: 38px;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n","",{version:3,sources:["/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/packages/components/src/components/app/Upload/UploadProgressIndicator.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/UploadProgressIndicator.styl","/Users/slava/my/expandorg/expand-components/packages/components/src/components/app/Upload/packages/uikit/font.styl"],names:[],mappings:"AAGA;EACE,8BAAY;UAAZ,sBAAY;EACZ,kBAAU;EACV,OAAM;EACN,QAAO;EACP,MAAK;EACL,SAAQ;EAER,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,sBAAa;MAAb,mBAAa;UAAb,qBAAa;EACb,qBAAiB;MAAjB,kBAAiB;UAAjB,yBAAiB;EACjB,aAAS;ACHX;ADKE;EACE,kBAAU;EACV,YAAQ;EACR,8BAAY;UAAZ,sBAAY;EAEZ,OAAM;EACN,MAAK;EACL,SAAQ;EACR,yBAAkB;EAClB,WAAO;EAEP,uFAA8B;EAA9B,kFAA8B;EAA9B,+EAA8B;EAE9B,oBAAS;EAAT,oBAAS;EAAT,aAAS;EACT,yBAAa;MAAb,sBAAa;UAAb,mBAAa;EACb,qBAAiB;MAAjB,kBAAiB;UAAjB,yBAAiB;EACjB,mBAAe;EAEf,2BAAwB;EACxB,8BAA2B;ACP/B;ADSI;EACE,yBAAkB;EAClB,cAAO;ACPb;ADSE;EEnBA,qBAAa;EAEX,gBAAa;EAEb,eAAW;EAEX,gBAAa;EFeb,gBAAU;EACV,yCAAY;EAAZ,oCAAY;EAAZ,iCAAY;ACJhB;ADME;EACE,8BAAY;UAAZ,sBAAY;EACZ,sBAAkB;EAElB,cAAO;EACP,yBAAQ;EACR,kBAAe;EAEf,kBAAY;EAEZ,YAAO;EACP,YAAQ;EEnCV,qBAAa;EAEX,gBAAa;EAEb,eAAW;EAEX,iBAAa;EAEb,sBAAgB;EF6BhB,yBAAgB;EAEhB,eAAQ;ACJZ",file:"UploadProgressIndicator.styl",sourcesContent:["@import '~@expandorg/uikit/colors';\n@import '~@expandorg/uikit/font';\n\n.gem-uploadprogress\n  box-sizing: border-box;\n  position: absolute;\n  left: 0\n  right: 0\n  top: 0\n  bottom: 0\n\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 10px\n\n  &-indicator\n    position: absolute;\n    height: 100%;\n    box-sizing: border-box;\n\n    left: 0\n    top: 0\n    bottom: 0\n    background-color: color-teel-dark\n    color: color-white\n\n    transition: width 200ms linear, color 50ms linear, background-color 50ms linear;\n\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-right: 20px\n\n    border-top-left-radius: 5px\n    border-bottom-left-radius: 5px\n\n    &--error\n      background-color: color-yellow\n      color: color-text-yellow-2\n\n  &-percent\n    font(h3-bold)\n    overflow: hidden;\n    transition: opacity 1000ms linear\n\n  &-cancel\n    box-sizing: border-box;\n    background-color: color-white\n\n    color: color-text-blue\n    border: 1px solid color-text-blue\n    border-radius: 2px\n\n    text-align: center;\n\n    width: 100px\n    height: 40px\n    font(subtitle, false,false, 38px)\n    text-transform: uppercase;\n\n    cursor: pointer;\n",".gem-uploadprogress {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  padding: 10px;\n}\n.gem-uploadprogress-indicator {\n  position: absolute;\n  height: 100%;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #34a893;\n  color: #fff;\n  transition: width 200ms linear, color 50ms linear, background-color 50ms linear;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 20px;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.gem-uploadprogress-indicator--error {\n  background-color: #fbbc05;\n  color: #694c00;\n}\n.gem-uploadprogress-percent {\n  font-family: 'Avenir';\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 1.3;\n  overflow: hidden;\n  transition: opacity 1000ms linear;\n}\n.gem-uploadprogress-cancel {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #2068bc;\n  border: 1px solid #2068bc;\n  border-radius: 2px;\n  text-align: center;\n  width: 100px;\n  height: 40px;\n  font-family: 'Avenir';\n  font-weight: 800;\n  font-size: 12px;\n  line-height: 38px;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n","font-family-base = 'Avenir'\n\nfont-preset = {\n  'h1': (300 36px 1.3),\n\n  'h2-title': (400 24px 1.3),\n  'h2-bold': (500 24px 1.3),\n\n  'h3-title': (400 18px 1.3),\n  'h3-bold': (800 18px 1.3),\n\n  'h4': (500 15px 1.3),\n  'h4-bold': (800 15px 1.3),\n\n  'body': (400 16px 1.3),\n  'body-bold': (800 16px 1.3),\n\n  'oversized': (300 96px 1.2),\n\n  'subtitle': (800 12px 16px 0.15em),\n\n  'small-text': (400 14px 1.3),\n  'small-text-bold': (900 14px 1.3),\n\n  'navigation': (400 10px normal 0.15em),\n\n  'input-label': (800 11px normal),\n}\n\n\nfont-base(weight, size, line-height, letter-spacing)\n  font-family: font-family-base\n  if weight\n    font-weight: weight\n  if size\n    font-size: size\n  if line-height\n    line-height: line-height\n  if letter-spacing\n    letter-spacing: letter-spacing\n\nfont(presetName, override-weight=false, override-size=false, override-line-height=false)\n  preset = font-preset[presetName]\n  weight = preset[0]\n  if override-weight\n    weight = override-weight\n\n  size = preset[1]\n  if override-size\n    size = override-size\n\n  line-height = preset[2]\n  if override-line-height\n    line-height = override-line-height\n\n  font-base(weight, size, line-height, preset[3])\n"]}])},"./packages/components/src/components/Panel/Panel.js":function(e,n,o){"use strict";o.d(n,"a",(function(){return i}));var s=o("./node_modules/react/index.js"),t=o.n(s),a=o("./node_modules/classnames/index.js"),r=o.n(a);o("./packages/components/src/components/Panel/Panel.styl");function i(e){var n=e.children,o=e.className;return t.a.createElement("div",{className:r()("gem-panel",o)},n)}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Panel",filename:"packages/components/src/components/Panel/Panel.js"}}),i.defaultProps={className:null}},"./packages/components/src/components/Panel/Panel.styl":function(e,n,o){var s=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl");"string"===typeof s&&(s=[[e.i,s,""]]);var t={insert:"head",singleton:!1},a=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(s,t);s.locals&&(e.exports=s.locals),s.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl",(function(){var n=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/Panel/Panel.styl");"string"===typeof n&&(n=[[e.i,n,""]]),a(n)})),e.hot.dispose((function(){a()}))},"./packages/components/src/components/app/Upload/Upload.js":function(e,n,o){"use strict";o.d(n,"a",(function(){return u}));var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=o("./node_modules/react/index.js"),p=o.n(l),d=o("./node_modules/classnames/index.js"),c=o.n(d),m=o("./node_modules/react-dropzone/dist/es/index.js"),u=(o("./packages/components/src/components/app/Upload/Upload.styl"),function(e){function n(){var e,o;Object(s.a)(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(o=Object(a.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(i)))).handleDrop=function(e,n){var s=o.props,t=s.onSelect,a=s.onReject,r=s.accept,i=s.multiple;n.length?a(n,r):e.length&&t(i?e:e[0])},o}return Object(i.a)(n,e),Object(t.a)(n,[{key:"render",value:function(){var e=this.props,n=e.children,o=e.file,s=e.isUploading,t=e.className,a=e.accept,r=e.multiple,i=e.maxSize;return p.a.createElement(m.a,{accept:a,maxSize:i,multiple:r,disabled:s,onDrop:this.handleDrop},(function(e){var a=e.getRootProps,r=e.getInputProps,i=e.isDragActive;return p.a.createElement("div",Object.assign({},a(),{className:c()("gem-dropzone",t,{"gem-dropdzone--uploading":s,"gem-dropdzone--active":i})}),p.a.createElement("input",Object.assign({},r(),{className:"gem-dropdzone-input"})),n({file:o}))}))}}]),n}(l.Component));u.defaultProps={file:null,multiple:!1,maxSize:void 0,className:null,accept:void 0,isUploading:!1,onReject:Function.prototype},"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Upload",filename:"packages/components/src/components/app/Upload/Upload.js"}}),"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Upload",filename:"packages/components/src/components/app/Upload/Upload.js"}})},"./packages/components/src/components/app/Upload/Upload.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return A}));var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=o("./node_modules/react/index.js"),r=o("./node_modules/@mdx-js/react/dist/index.es.js"),i=o("./node_modules/docz/dist/index.esm.js"),l=o("./packages/components/src/components/Panel/Panel.js"),p=o("./packages/components/src/components/app/Upload/Upload.js"),d=o("./packages/components/src/components/app/Upload/UploadImagePreview.js"),c=o("./packages/components/src/components/app/Upload/UploadProgressIndicator.js"),m={},u="wrapper";function A(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(r.b)(u,Object.assign({},m,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"upload"},"Upload"),Object(r.b)(i.c,{__position:0,__code:"() => {\n  const [file, setFile] = useState(null)\n  return (\n    <Pane>\n      <Upload onSelect={setFile}>\n        {() =>\n          file ? <UploadImagePreview file={file} /> : <div>Browse</div>\n        }\n      </Upload>\n    </Pane>\n  )\n}",__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,useState:a.useState,Pane:l.a,Upload:p.a,UploadImagePreview:d.a,UploadProgressIndicator:c.a},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),o=n[0],t=n[1];return Object(r.b)(l.a,{mdxType:"Pane"},Object(r.b)(p.a,{onSelect:t,mdxType:"Upload"},(function(){return o?Object(r.b)(d.a,{file:o,mdxType:"UploadImagePreview"}):Object(r.b)("div",null,"Browse")})))})),Object(r.b)(i.c,{__position:1,__code:"() => {\n  const [file, setFile] = useState(null)\n  return (\n    <Pane>\n      <Upload onSelect={setFile} isUploading={!!file}>\n        {() =>\n          file ? (\n            <UploadProgressIndicator\n              isUploading\n              progress={0.5}\n              onAbort={() => setFile(null)}\n            />\n          ) : (\n            <div>Browse</div>\n          )\n        }\n      </Upload>\n    </Pane>\n  )\n}",__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,useState:a.useState,Pane:l.a,Upload:p.a,UploadImagePreview:d.a,UploadProgressIndicator:c.a},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),o=n[0],t=n[1];return Object(r.b)(l.a,{mdxType:"Pane"},Object(r.b)(p.a,{onSelect:t,isUploading:!!o,mdxType:"Upload"},(function(){return o?Object(r.b)(c.a,{isUploading:!0,progress:.5,onAbort:function(){return t(null)},mdxType:"UploadProgressIndicator"}):Object(r.b)("div",null,"Browse")})))})),Object(r.b)("h3",{id:"upload-1"},"Upload"),Object(r.b)(i.d,{of:p.a,mdxType:"Props"}),Object(r.b)("h3",{id:"uploadimagepreview"},"UploadImagePreview"),Object(r.b)(i.d,{of:d.a,mdxType:"Props"}),Object(r.b)("h3",{id:"uploadprogressindicator"},"UploadProgressIndicator"),Object(r.b)(i.d,{of:c.a,mdxType:"Props"}))}A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/components/src/components/app/Upload/Upload.mdx"}}),A.isMDXComponent=!0},"./packages/components/src/components/app/Upload/Upload.styl":function(e,n,o){var s=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/Upload.styl");"string"===typeof s&&(s=[[e.i,s,""]]);var t={insert:"head",singleton:!1},a=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(s,t);s.locals&&(e.exports=s.locals),s.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/Upload.styl",(function(){var n=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/Upload.styl");"string"===typeof n&&(n=[[e.i,n,""]]),a(n)})),e.hot.dispose((function(){a()}))},"./packages/components/src/components/app/Upload/UploadImagePreview.js":function(e,n,o){"use strict";o.d(n,"a",(function(){return m}));var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=o("./node_modules/react/index.js"),p=o.n(l),d=o("./node_modules/classnames/index.js"),c=o.n(d),m=(o("./packages/components/src/components/app/Upload/UploadImagePreview.styl"),function(e){function n(e){var o;return Object(s.a)(this,n),(o=Object(a.a)(this,Object(r.a)(n).call(this,e))).state={file:e.file,preview:e.file?URL.createObjectURL(e.file):null},o}return Object(i.a)(n,e),Object(t.a)(n,[{key:"render",value:function(){var e=this.props,n=e.uploadedUrl,o=e.className,s=e.title,t=this.state.preview;return p.a.createElement("div",{className:c()("gem-uploadpreview",o)},p.a.createElement("img",{className:"gem-uploadpreview-preview",src:t||n,alt:"Preview"}),p.a.createElement("div",{className:"gem-uploadpreview-hint"},s))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var o=e.file;return o!==n.file?(n.preview&&URL.revokeObjectURL(n.preview),{file:o,preview:o?URL.createObjectURL(o):null}):null}}]),n}(l.Component));m.defaultProps={file:null,className:null,uploadedUrl:null,title:"Upload image"},"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UploadImagePreview",filename:"packages/components/src/components/app/Upload/UploadImagePreview.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UploadImagePreview",filename:"packages/components/src/components/app/Upload/UploadImagePreview.js"}})},"./packages/components/src/components/app/Upload/UploadImagePreview.styl":function(e,n,o){var s=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadImagePreview.styl");"string"===typeof s&&(s=[[e.i,s,""]]);var t={insert:"head",singleton:!1},a=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(s,t);s.locals&&(e.exports=s.locals),s.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadImagePreview.styl",(function(){var n=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadImagePreview.styl");"string"===typeof n&&(n=[[e.i,n,""]]),a(n)})),e.hot.dispose((function(){a()}))},"./packages/components/src/components/app/Upload/UploadProgressIndicator.js":function(e,n,o){"use strict";o.d(n,"a",(function(){return m}));var s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),l=o("./node_modules/react/index.js"),p=o.n(l),d=o("./node_modules/classnames/index.js"),c=o.n(d),m=(o("./packages/components/src/components/app/Upload/UploadProgressIndicator.styl"),function(e){function n(){var e,o;Object(s.a)(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(o=Object(a.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(i)))).handleAbort=function(e){e.preventDefault();var n=o.props,s=n.isUploading,t=n.onAbort;s&&t()},o}return Object(i.a)(n,e),Object(t.a)(n,[{key:"render",value:function(){var e=this.props,n=e.isUploading,o=e.isUploaded,s=e.isUploadError,t=e.progress,a=e.className,r=c()("gem-uploadprogress-indicator",{"gem-uploadprogress-indicator--fetching":n,"gem-uploadprogress-indicator--fetched":o,"gem-uploadprogress-indicator--error":s}),i="".concat(Math.floor(100*t),"%"),l=Math.min(10*t,1);return p.a.createElement("div",{className:c()("gem-uploadprogress",a)},p.a.createElement("div",{className:r,style:{width:i}},p.a.createElement("div",{className:"gem-uploadprogress-percent",style:{opacity:l}},Math.ceil(100*t),"%")),n&&p.a.createElement("button",{className:"gem-uploadprogress-cancel",onClick:this.handleAbort},"cancel"))}}]),n}(l.Component));m.defaultProps={isUploading:!1,isUploaded:!1,isUploadError:!1,progress:0,className:null},"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UploadProgressIndicator",filename:"packages/components/src/components/app/Upload/UploadProgressIndicator.js"}}),"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UploadProgressIndicator",filename:"packages/components/src/components/app/Upload/UploadProgressIndicator.js"}})},"./packages/components/src/components/app/Upload/UploadProgressIndicator.styl":function(e,n,o){var s=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadProgressIndicator.styl");"string"===typeof s&&(s=[[e.i,s,""]]);var t={insert:"head",singleton:!1},a=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(s,t);s.locals&&(e.exports=s.locals),s.locals||e.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadProgressIndicator.styl",(function(){var n=o("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?sourceMap!./node_modules/stylus-loader/index.js?paths[]=src!./packages/components/src/components/app/Upload/UploadProgressIndicator.styl");"string"===typeof n&&(n=[[e.i,n,""]]),a(n)})),e.hot.dispose((function(){a()}))}}]);
//# sourceMappingURL=packages-components-src-components-app-upload-upload.264c3cdedeefcb372aa5.js.map
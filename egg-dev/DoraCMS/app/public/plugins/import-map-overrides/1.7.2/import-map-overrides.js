!function(){"use strict";function e(){setTimeout(function(){window.CustomEvent&&window.dispatchEvent(new CustomEvent("import-map-overrides:change"))})}window.importMapOverrides={addOverride:function(t,n){var o="import-map-override:"+t;return localStorage.setItem(o,n),e(),window.importMapOverrides.getOverrideMap()},getOverrideMap:function(){for(var e={imports:{}},t=0;t<localStorage.length;t++){var n=localStorage.key(t);n.startsWith("import-map-override:")&&(e.imports[n.slice("import-map-override:".length)]=localStorage.getItem(n))}return e},removeOverride:function(t){var n="import-map-override:"+t,o=null!==localStorage.getItem(n);return localStorage.removeItem(n),e(),o},resetOverrides:function(){return Object.keys(window.importMapOverrides.getOverrideMap().imports).forEach(function(e){window.importMapOverrides.removeOverride(e)}),e(),window.importMapOverrides.getOverrideMap()},hasOverrides:function(){return Object.keys(window.importMapOverrides.getOverrideMap().imports).length>0}};var t=window.importMapOverrides.getOverrideMap(),n=document.querySelector('meta[name="importmap-type"]'),o=n?n.getAttribute("content"):"import-map";if(Object.keys(t.imports).length>0){var r=document.createElement("script");r.type=o,r.id="import-map-overrides",r.innerHTML=JSON.stringify(t);var i=document.querySelectorAll('script[type="'.concat(o,'"]'));i.length>0?i[i.length-1].insertAdjacentElement("afterend",r):document.head.appendChild(r)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return(m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var r=new(Function.bind.apply(e,o));return n&&c(r,n.prototype),r}).apply(null,arguments)}function f(e){var t="function"==typeof Map?new Map:void 0;return(f=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return m(e,arguments,p(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),c(o,e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?v(e):t}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".imo-unstyled {\n  border: none;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  background: transparent;\n  color: inherit;\n  font: inherit;\n  line-height: normal;\n  cursor: pointer;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  -webkit-appearance: none;\n}\n\n.imo-unstyled::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.imo-trigger {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  margin: 10px;\n  border-radius: 5px;\n  background-color: navajowhite;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-family: sans-serif;\n  z-index: 10500;\n}\n\n.imo-popup {\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  z-index: 10000;\n  background-color: black;\n  color: white;\n  font-family: sans-serif;\n  padding: 24px;\n  overflow-y: auto;\n}\n\n.imo-popup a:visited,\nimo-popup a {\n  color: white;\n}\n\n.imo-popup .imo-module-dialog {\n  left: calc(50% - 200px);\n}\n\n.imo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.imo-list {\n  margin-left: 16px;\n}\n\n.imo-list > *:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.imo-list-container {\n  font-family: sans-serif;\n}\n\n.imo-module-dialog {\n  position: fixed;\n  z-index: 30000000;\n  top: 30%;\n  max-width: 600px;\n  margin: 0 auto;\n  border: 4px solid navajowhite;\n}\n\n.imo-module-dialog input {\n  width: 100%;\n  font-size: 16px;\n  box-sizing: border-box;\n  padding-right: 20px;\n}\n\n.imo-module-dialog table {\n  margin-bottom: 16px;\n}\n\n.imo-module-dialog table td:first-child {\n  text-align: right;\n  padding-right: 16px;\n  word-break: keep-all;\n}\n\n.imo-module-dialog table td {\n  word-break: break-all;\n}\n\n.imo-module-dialog.imo-overridden {\n  border: 4px solid salmon;\n}\n\n.imo-list-container button,\n.imo-modal-container button {\n  padding: 6px 16px;\n  font-size: 16px;\n  text-align: center;\n}\n\nbutton.imo-default {\n  background-color: navajowhite;\n}\n\nbutton.imo-overridden,\n.imo-trigger.imo-overridden {\n  background-color: salmon;\n  font-weight: bold;\n}\n\n.imo-add-new {\n  margin-top: 16px;\n  margin-left: 16px;\n}\n\n.imo-clear-input {\n  position: absolute;\n  top: 0;\n  right: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n\n.imo-modal-container {\n  font-family: sans-serif;\n}\n\n.imo-modal {\n  background-color: rgba(61, 70, 77, 0.6);\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 20000000;\n}\n");var g=function(){},y={},b=[],w=[];function x(e,t){var n,o,r,i,l=w;for(i=arguments.length;i-- >2;)b.push(arguments[i]);for(t&&null!=t.children&&(b.length||b.push(t.children),delete t.children);b.length;)if((o=b.pop())&&void 0!==o.pop)for(i=o.length;i--;)b.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(r=!1)),r&&n?l[l.length-1]+=o:l===w?l=[o]:l.push(o),n=r;var a=new g;return a.nodeName=e,a.children=l,a.attributes=null==t?void 0:t,a.key=null==t?void 0:t.key,a}function _(e,t){for(var n in t)e[n]=t[n];return e}function N(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var k="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,M=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,C=[];function O(e){!e._dirty&&(e._dirty=!0)&&1==C.push(e)&&k(S)}function S(){for(var e;e=C.pop();)e._dirty&&J(e)}function U(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&E(e,t.nodeName):n||e._componentConstructor===t.nodeName}function E(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function P(e){var t=_({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function j(e){var t=e.parentNode;t&&t.removeChild(e)}function T(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)N(n,null),N(o,e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===M.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,D,l):e.removeEventListener(t,D,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var a=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function D(e){return this._listeners[e.type](e)}var I=[],A=0,L=!1,R=!1;function z(){for(var e;e=I.shift();)e.componentDidMount&&e.componentDidMount()}function B(e,t,n,o,r,i){A++||(L=null!=r&&void 0!==r.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var l=function e(t,n,o,r,i){var l=t,a=L;if(null!=n&&"boolean"!=typeof n||(n=""),"string"==typeof n||"number"==typeof n)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||i)?t.nodeValue!=n&&(t.nodeValue=n):(l=document.createTextNode(n),t&&(t.parentNode&&t.parentNode.replaceChild(l,t),W(t,!0))),l.__preactattr_=!0,l;var u,s,d=n.nodeName;if("function"==typeof d)return function(e,t,n,o){for(var r=e&&e._component,i=r,l=e,a=r&&e._componentConstructor===t.nodeName,u=a,s=P(t);r&&!u&&(r=r._parentComponent);)u=r.constructor===t.nodeName;return r&&u&&(!o||r._component)?($(r,s,3,n,o),e=r.base):(i&&!a&&(G(i),e=l=null),r=V(t.nodeName,s,n),e&&!r.nextBase&&(r.nextBase=e,l=null),$(r,s,1,n,o),e=r.base,l&&e!==l&&(l._component=null,W(l,!1))),e}(t,n,o,r);if(L="svg"===d||"foreignObject"!==d&&L,d=String(d),(!t||!E(t,d))&&(u=d,(s=L?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u)).normalizedNodeName=u,l=s,t)){for(;t.firstChild;)l.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(l,t),W(t,!0)}var p=l.firstChild,c=l.__preactattr_,m=n.children;if(null==c){c=l.__preactattr_={};for(var f=l.attributes,v=f.length;v--;)c[f[v].name]=f[v].value}return!R&&m&&1===m.length&&"string"==typeof m[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=m[0]&&(p.nodeValue=m[0]):(m&&m.length||null!=p)&&function(t,n,o,r,i){var l,a,u,s,d,p=t.childNodes,c=[],m={},f=0,v=0,h=p.length,g=0,y=n?n.length:0;if(0!==h)for(var b=0;b<h;b++){var w=p[b],x=w.__preactattr_,_=y&&x?w._component?w._component.__key:x.key:null;null!=_?(f++,m[_]=w):(x||(void 0!==w.splitText?!i||w.nodeValue.trim():i))&&(c[g++]=w)}if(0!==y)for(var b=0;b<y;b++){s=n[b],d=null;var _=s.key;if(null!=_)f&&void 0!==m[_]&&(d=m[_],m[_]=void 0,f--);else if(v<g)for(l=v;l<g;l++)if(void 0!==c[l]&&U(a=c[l],s,i)){d=a,c[l]=void 0,l===g-1&&g--,l===v&&v++;break}d=e(d,s,o,r),u=p[b],d&&d!==t&&d!==u&&(null==u?t.appendChild(d):d===u.nextSibling?j(u):t.insertBefore(d,u))}if(f)for(var b in m)void 0!==m[b]&&W(m[b],!1);for(;v<=g;)void 0!==(d=c[g--])&&W(d,!1)}(l,m,o,r,R||null!=c.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||T(e,o,n[o],n[o]=void 0,L);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||T(e,o,n[o],n[o]=t[o],L)}(l,n.attributes,c),L=a,l}(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--A||(R=!1,i||z()),l}function W(e,t){var n=e._component;n?G(n):(null!=e.__preactattr_&&N(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||j(e),F(e))}function F(e){for(e=e.lastChild;e;){var t=e.previousSibling;W(e,!0),e=t}}var H=[];function V(e,t,n){var o,r=H.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),K.call(o,t,n)):((o=new K(t,n)).constructor=e,o.render=q);r--;)if(H[r].constructor===e)return o.nextBase=H[r].nextBase,H.splice(r,1),o;return o}function q(e,t,n){return this.constructor(e,n)}function $(e,t,n,o,r){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===y.syncComponentUpdates&&e.base?O(e):J(e,1,r)),N(e.__ref,e))}function J(e,t,n,o){if(!e._disable){var r,i,l,a=e.props,u=e.state,s=e.context,d=e.prevProps||a,p=e.prevState||u,c=e.prevContext||s,m=e.base,f=e.nextBase,v=m||f,h=e._component,g=!1,y=c;if(e.constructor.getDerivedStateFromProps&&(u=_(_({},u),e.constructor.getDerivedStateFromProps(a,u)),e.state=u),m&&(e.props=d,e.state=p,e.context=c,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,u,s)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(a,u,s),e.props=a,e.state=u,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){r=e.render(a,u,s),e.getChildContext&&(s=_(_({},s),e.getChildContext())),m&&e.getSnapshotBeforeUpdate&&(y=e.getSnapshotBeforeUpdate(d,p));var b,w,x=r&&r.nodeName;if("function"==typeof x){var N=P(r);(i=h)&&i.constructor===x&&N.key==i.__key?$(i,N,1,s,!1):(b=i,e._component=i=V(x,N,s),i.nextBase=i.nextBase||f,i._parentComponent=e,$(i,N,0,s,!1),J(i,1,n,!0)),w=i.base}else l=v,(b=h)&&(l=e._component=null),(v||1===t)&&(l&&(l._component=null),w=B(l,r,s,n||!m,v&&v.parentNode,!0));if(v&&w!==v&&i!==h){var k=v.parentNode;k&&w!==k&&(k.replaceChild(w,v),b||(v._component=null,W(v,!1)))}if(b&&G(b),e.base=w,w&&!o){for(var M=e,C=e;C=C._parentComponent;)(M=C).base=w;w._component=M,w._componentConstructor=M.constructor}}for(!m||n?I.push(e):g||e.componentDidUpdate&&e.componentDidUpdate(d,p,y);e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);A||o||z()}}function G(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?G(n):t&&(null!=t.__preactattr_&&N(t.__preactattr_.ref,null),e.nextBase=t,j(t),H.push(e),F(t)),N(e.__ref,null)}function K(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function Q(e,t,n){return B(n,e,{},!1,t,!1)}_(K.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=_(_({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),O(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),J(this,2)},render:function(){}});var X=function(e){function t(){var e,n;l(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return s(v(n=h(this,(e=p(t)).call.apply(e,[this].concat(r)))),"getInitialOverrideUrl",function(){var e=new RegExp("//localhost:([0-9]+)/".concat(ee(n.props.module.moduleName))).exec(n.props.module.overrideUrl);return e?e[1]:n.props.module.overrideUrl?n.props.module.overrideUrl:""}),s(v(n),"state",{overrideUrl:n.getInitialOverrideUrl(),moduleName:""}),s(v(n),"inputEl",null),s(v(n),"moduleNameEl",null),s(v(n),"handleInputRef",function(e){n.inputEl=e}),s(v(n),"handleModuleNameRef",function(e){n.moduleNameEl=e}),s(v(n),"dialogRef",function(e){n.dialogEl=e}),s(v(n),"handleSubmit",function(e){e.preventDefault();var t=n.getDerivedUrl();n.props.module.isNew?n.props.addNewModule(n.state.moduleName,t):n.props.updateModuleUrl(t)}),s(v(n),"getDerivedUrl",function(){var e=n.props.module.isNew?n.state.moduleName:n.props.module.moduleName;return Y.test(n.state.overrideUrl)?"//localhost:".concat(n.state.overrideUrl,"/").concat(ee(e)):n.state.overrideUrl}),s(v(n),"keyDown",function(e){"Escape"===e.key&&(e.stopPropagation(),n.props.cancel())}),s(v(n),"focusFirstInput",function(){(n.moduleNameEl||n.inputEl).select()}),s(v(n),"clearModuleName",function(){n.setState({moduleName:""},function(){n.focusFirstInput()})}),s(v(n),"clearInput",function(){n.setState({overrideUrl:""},function(){n.focusFirstInput()})}),n}return d(t,K),u(t,[{key:"componentDidMount",value:function(){this.focusFirstInput(),this.dialogEl.addEventListener("keydown",this.keyDown)}},{key:"componentDidUpdate",value:function(e,t){var n=this;this.props.module!==e.module&&this.setState({overrideUrl:this.props.module.overrideUrl||""},function(){n.focusFirstInput()})}},{key:"componentWillUnmount",value:function(){this.dialogEl.removeEventListener("keydown",this.keyDown)}},{key:"render",value:function(e){var t=this,n=e.module;return x("div",{className:"imo-modal-container"},x("div",{className:"imo-modal"}),x("dialog",{className:"imo-module-dialog ".concat(this.state.overrideUrl.length>0?"imo-overridden":"imo-default"),open:!0,ref:this.dialogRef},x("form",{method:"dialog",onSubmit:this.handleSubmit},x("h3",{style:{marginTop:0}},n.moduleName),x("table",null,x("tbody",null,!n.isNew&&x("tr",null,x("td",null,"Default URL:"),x("td",null,n.defaultUrl)),n.isNew&&x("tr",null,x("td",null,x("span",{id:"module-name-label"},"Module Name:")),x("td",{style:{position:"relative"}},x("input",{type:"text",value:this.state.moduleName,"aria-labelledby":"module-name-label",onInput:function(e){return t.setState({moduleName:e.target.value})},ref:this.handleModuleNameRef,required:!0}),x("div",{role:"button",tabIndex:0,className:"imo-clear-input",onClick:this.clearModuleName},x("div",null,"ⓧ")))),x("tr",null,x("td",null,x("span",{id:"override-url-label"},"Override URL:")),x("td",{style:{position:"relative"}},x("input",{ref:this.handleInputRef,type:"text",value:this.state.overrideUrl,"aria-labelledby":"override-url-label",onInput:function(e){return t.setState({overrideUrl:e.target.value})}}),x("div",{role:"button",tabIndex:0,className:"imo-clear-input",onClick:this.clearInput},x("div",null,"ⓧ")))),Y.test(this.state.overrideUrl)&&x("tr",null,x("td",null,"Derived url:"),x("td",null,this.getDerivedUrl())))),x("div",{className:"imo-dialog-actions"},x("button",{type:"button",onClick:this.props.cancel,style:{marginRight:"16px"}},"Cancel"),x("button",{type:"submit",className:this.state.overrideUrl?"imo-overridden":"imo-default"},this.state.overrideUrl?"Apply override":"Reset to default")))))}}]),t}(),Y=/^\d+$/,Z=/^@.+\/.+$/;function ee(e){return Z.test(e)&&(e=e.slice(e.indexOf("/")+1)),e.replace(/\//g,"")+".js"}var te=function(e){function t(){var e,n;l(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return s(v(n=h(this,(e=p(t)).call.apply(e,[this].concat(r)))),"state",{notOverriddenMap:{imports:{}},dialogModule:null}),s(v(n),"cancel",function(){n.setState({dialogModule:null})}),s(v(n),"updateModuleUrl",function(e){null===(e=e||null)?window.importMapOverrides.removeOverride(n.state.dialogModule.moduleName):window.importMapOverrides.addOverride(n.state.dialogModule.moduleName,e),n.setState({dialogModule:null})}),s(v(n),"addNewModule",function(e,t){e&&t&&window.importMapOverrides.addOverride(e,t),n.setState({dialogModule:null})}),n}return d(t,K),u(t,[{key:"componentDidMount",value:function(){var e=this;Array.prototype.reduce.call(document.querySelectorAll('script[type="'.concat(o,'"]')),function(e,t){return"import-map-overrides"===t.id?e:(n=t.src?fetch(t.src).then(function(e){return e.json()}):Promise.resolve(JSON.parse(t.textContent)),Promise.all([e,n]).then(function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var l,a=e[Symbol.iterator]();!(o=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}());return function(e,t){for(var n in t.imports)e.imports[n]=t.imports[n];for(var o in t.scopes)e.scopes[o]=t.scopes[o];return e}(o[0],o[1])}));var n},Promise.resolve(this.state.notOverriddenMap)).then(function(t){e.setState({notOverriddenMap:t})})}},{key:"componentDidUpdate",value:function(e,t){!t.dialogModule&&this.state.dialogModule?(this.dialogContainer=document.createElement("div"),document.body.appendChild(this.dialogContainer),Q(x(X,{module:this.state.dialogModule,cancel:this.cancel,updateModuleUrl:this.updateModuleUrl,addNewModule:this.addNewModule}),this.dialogContainer)):t.dialogModule&&!this.state.dialogModule&&(Q(null,this.dialogContainer),this.dialogContainer.remove(),delete this.dialogContainer)}},{key:"render",value:function(){var e=this,t=[],n=[],o=window.importMapOverrides.getOverrideMap().imports;return Object.keys(this.state.notOverriddenMap.imports).forEach(function(r){var i={moduleName:r,defaultUrl:e.state.notOverriddenMap.imports[r],overrideUrl:o[r]};o[r]?t.push(i):n.push(i)}),Object.keys(o).forEach(function(e){t.some(function(t){return t.moduleName===e})||t.push({moduleName:e,defaultUrl:null,overrideUrl:o[e]})}),t.sort(ne),n.sort(ne),x("div",{className:"imo-list-container"},x("div",null,x("h3",null,"Overridden Modules"),x("div",{className:"imo-list"},0===t.length&&x("div",null,"(No overridden modules)"),t.map(function(t){return x("div",null,x("button",{className:"imo-overridden",onClick:function(){return e.setState({dialogModule:t})}},t.moduleName))}))),x("div",{className:"imo-add-new"},x("button",{onClick:function(){return e.setState({dialogModule:{moduleName:"New module",isNew:!0}})}},"Add new module")),x("div",null,x("h3",null,"Default Modules"),x("div",{className:"imo-list"},0===n.length&&x("div",null,"(No default modules)"),n.map(function(t){return x("div",null,x("button",{className:"imo-default",onClick:function(){return e.setState({dialogModule:t})}},t.moduleName))}))))}}]),t}();function ne(e,t){return e.moduleName>t.moduleName}var oe=function(e){function t(){var e,n;l(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return s(v(n=h(this,(e=p(t)).call.apply(e,[this].concat(r)))),"keydownListener",function(e){"Escape"===e.key&&n.props.close&&n.props.close()}),n}return d(t,K),u(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keydownListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keydownListener)}},{key:"render",value:function(e){return x("div",{className:"imo-popup"},x("div",{className:"imo-header"},x("div",null,x("h1",null,"Import Map Overrides"),x("p",null,"This developer tool allows you to view and override your import maps."," ",x("a",{target:"_blank",href:"https://github.com/joeldenning/import-map-overrides"},"See documentation for more info"),".")),x("button",{className:"imo-unstyled",onClick:e.close},"ⓧ")),x(te,{importMapChanged:this.props.importMapChanged}))}}]),t}(),re=function(e){function t(){var e,n;l(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return s(v(n=h(this,(e=p(t)).call.apply(e,[this].concat(r)))),"state",{showingPopup:!1}),s(v(n),"toggleTrigger",function(){n.setState(function(e){return{showingPopup:!e.showingPopup}})}),s(v(n),"importMapChanged",function(){n.forceUpdate()}),n}return d(t,K),u(t,[{key:"render",value:function(e,t){if(e.customElement.hasAttribute("show-when-local-storage")&&"true"!==localStorage.getItem(e.customElement.getAttribute("show-when-local-storage")))return null;var n=Object.keys(window.importMapOverrides.getOverrideMap().imports).length>0;return x("div",null,x("button",{onClick:this.toggleTrigger,className:"imo-unstyled imo-trigger ".concat(n?"imo-overridden":"")},"{···}"),t.showingPopup&&x(oe,{close:this.toggleTrigger,importMapChanged:this.importMapChanged}))}}]),t}();function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return function(n){function o(){return l(this,o),h(this,p(o).apply(this,arguments))}return d(o,f(HTMLElement)),u(o,[{key:"connectedCallback",value:function(){this.renderWithPreact()}},{key:"disconnectedCallback",value:function(){Q(null,this),this.renderedEl=null}},{key:"attributeChangedCallback",value:function(){this.renderWithPreact()}},{key:"renderWithPreact",value:function(){this.renderedEl=Q(x(e,{customElement:this}),this,this.renderedEl)}}],[{key:"observedAttributes",get:function(){return t}}]),o}()}window.customElements&&(window.customElements.define("import-map-overrides-full",ie(re,["show-when-local-storage"])),window.customElements.define("import-map-overrides-popup",ie(oe)),window.customElements.define("import-map-overrides-list",ie(te)))}();
//# sourceMappingURL=import-map-overrides.js.map

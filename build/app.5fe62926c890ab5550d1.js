webpackJsonp([0],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=document.createElement("div");document.body.appendChild(e),c["default"].render(a["default"].createElement(f["default"],null),e)}r(1);var u=r(4),a=n(u),i=r(155),c=n(i),l=r(156),f=n(l);o()},1:function(e,t){},156:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;i=l=c=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=u,r=a,n=!0}},c=r(4),l=n(c),f=r(157),s=n(f),p=r(182),d=n(p),v=function(e){function t(){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement(s["default"],null),l["default"].createElement(d["default"],null))}}]),t}(c.Component);t["default"]=v,e.exports=t["default"]},157:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;i=l=c=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=u,r=a,n=!0}},c=r(4),l=n(c),f=r(158),s=n(f),p=r(160),d=n(p),v=r(174),y=n(v),h=r(177),b=n(h),m=function(e){function t(){o(this,r),i(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}u(t,e),a(t,[{key:"componentDidMount",value:function(){y["default"].fetchProducts()}},{key:"render",value:function(){return l["default"].createElement(b["default"],{products:this.props.products})}}],[{key:"getStores",value:function(){return[d["default"]]}},{key:"getPropsFromStores",value:function(){return d["default"].getState()}},{key:"propTypes",value:{products:l["default"].PropTypes.array},enumerable:!0}]);var r=t;return t=s["default"](t)||t}(c.Component);t["default"]=m,e.exports=t["default"]},158:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=arguments.length<=1||void 0===arguments[1]?e:arguments[1];return function(){if(!i.isFunction(e.getStores))throw new Error("connectToStores() expects the wrapped component to have a static getStores() method");if(!i.isFunction(e.getPropsFromStores))throw new Error("connectToStores() expects the wrapped component to have a static getPropsFromStores() method");var r=a["default"].createClass({displayName:"Stateful"+(t.displayName||t.name||"Container"),getInitialState:function(){return e.getPropsFromStores(this.props,this.context)},componentWillReceiveProps:function(t){this.setState(e.getPropsFromStores(t,this.context))},componentDidMount:function(){var t=this,r=e.getStores(this.props,this.context);this.storeListeners=r.map(function(e){return e.listen(t.onChange)}),e.componentDidConnect&&e.componentDidConnect(this.props,this.context)},componentWillUnmount:function(){this.storeListeners.forEach(function(e){return e()})},onChange:function(){this.setState(e.getPropsFromStores(this.props,this.context))},render:function(){return a["default"].createElement(t,i.assign({},this.props,this.state))}});return t.contextTypes&&(r.contextTypes=t.contextTypes),r}()}Object.defineProperty(t,"__esModule",{value:!0});var u=r(4),a=n(u),i=r(159);t["default"]=o,e.exports=t["default"]},160:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(161),i=r(162),c=n(i),l=r(174),f=n(l),s=function(){function e(){o(this,t),this.bindActions(f["default"]),this.products=[],this.errorMessage=null}u(e,[{key:"onUpdateProducts",value:function(e){this.products=e,this.errorMessage=null}},{key:"onFetchProducts",value:function(){this.products=[]}},{key:"onProductsFailed",value:function(e){this.errorMessage=e}}]);var t=e;return e=a.createStore(c["default"])(e)||e}();t["default"]=s,e.exports=t["default"]},161:function(e,t,r){"use strict";function n(){}function o(e,t){return e.value.alt=e.value.alt||{},p.assign(e.value.alt,t),e}function u(e){return function(t){var r=t.prototype,n={},o={};return Object.getOwnPropertyNames(r).forEach(function(t){if(-1===d.indexOf(t)){var u=r[t].alt;u&&(u.actions?o[t]=u.actions:u.actionsWithContext?o[t]=u.actionsWithContext(e):u.publicMethod&&(n[t]=r[t]))}}),t.config=p.assign({bindListeners:o,publicMethods:n},t.config),t}}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];return function(t){return e.createActions.apply(e,[t,{}].concat(r))}}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;t>n;n++)r[n-1]=arguments[n];return function(t){return e.createStore.apply(e,[u(e)(t),void 0].concat(r))}}function c(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return function(e,r,n){return o(n,{actions:t})}}function l(e){return function(t,r,n){return o(n,{actionsWithContext:e})}}function f(e,t,r){return o(r,{publicMethod:!0})}function s(){var e=p.assign.apply(void 0,arguments);return function(t){return t.config=p.assign({datasource:e},t.config),t}}Object.defineProperty(t,"__esModule",{value:!0}),t.decorate=u,t.createActions=a,t.createStore=i,t.bind=c,t.bindWithContext=l,t.expose=f,t.datasource=s;var p=r(159),d=Object.getOwnPropertyNames(n.prototype)},162:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(163),u=n(o),a=new u["default"];t["default"]=a,e.exports=t["default"]},174:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(161),i=r(162),c=n(i),l=r(175),f=n(l),s=function(){function e(){o(this,t),this.generateActions("updateProducts","productsFailed")}u(e,[{key:"fetchProducts",value:function(){var e=this;this.dispatch(),f["default"].fetch().then(function(t){e.actions.updateProducts(t)})["catch"](function(t){e.actions.productsFailed(t)})}}]);var t=e;return e=a.createActions(c["default"])(e)||e}();t["default"]=s,e.exports=t["default"]},175:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(176),i=n(a),c=[{id:i["default"].v4(),name:"Hydrocodone",price:10},{id:i["default"].v4(),name:"Lisinopril",price:20},{id:i["default"].v4(),name:"Medrol",price:30},{id:i["default"].v4(),name:"Prozac",price:40},{id:i["default"].v4(),name:"Xanax",price:50},{id:i["default"].v4(),name:"Zoloft",price:60}],l=function(){function e(){o(this,e)}return u(e,null,[{key:"fetch",value:function(){return new Promise(function(e,t){setTimeout(function(){e(c)},250)})}}]),e}();t["default"]=l,e.exports=t["default"]},177:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;i=l=c=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=u,r=a,n=!0}},c=r(4),l=n(c),f=r(178),s=n(f),p=function(e){function t(){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),a(t,[{key:"renderProduct",value:function(e){return l["default"].createElement("li",{key:"product"+e.id},l["default"].createElement(s["default"],{product:e}))}},{key:"render",value:function(){if(this.props.errorMessage)return l["default"].createElement("div",null,"Something is wrong");var e=this.props.products;return e.length?l["default"].createElement("ul",null,e.map(this.renderProduct)):l["default"].createElement("div",null,"Loading products...")}}],[{key:"propTypes",value:{products:l["default"].PropTypes.array,errorMessage:l["default"].PropTypes.string},enumerable:!0}]),t}(c.Component);t["default"]=p,e.exports=t["default"]},178:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;i=l=c=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=u,r=a,n=!0}},c=r(4),l=n(c),f=r(179),s=n(f),p=r(181),d=n(p),v=function(e){function t(){var e=this;o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments),this.onAddToCartClicked=function(){s["default"].addToCart(e.props.product)}}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement(d["default"],{product:this.props.product,onAddToCartClicked:this.onAddToCartClicked})}}],[{key:"propTypes",value:{product:l["default"].PropTypes.shape({name:l["default"].PropTypes.string,price:l["default"].PropTypes.number}).isRequired},enumerable:!0}]),t}(c.Component);t["default"]=v,e.exports=t["default"]},179:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(161),i=r(162),c=n(i),l=r(180),f=n(l),s=function(){function e(){o(this,t),this.generateActions("addToCart","finishCheckout","cartFailed")}u(e,[{key:"checkout",value:function(e){var t=this;this.dispatch(),f["default"].checkout(e).then(function(){t.actions.finishCheckout(e)})["catch"](function(e){t.actions.cartFailed(e)})}}]);var t=e;return e=a.createActions(c["default"])(e)||e}();t["default"]=s,e.exports=t["default"]},180:function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=function(){function e(){r(this,e)}return n(e,null,[{key:"checkout",value:function(e){return new Promise(function(t,r){setTimeout(function(){t(e)},250)})}}]),e}();t["default"]=o,e.exports=t["default"]},181:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;i=l=c=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=u,r=a,n=!0}},c=r(4),l=n(c),f=function(e){function t(){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),a(t,[{key:"render",value:function(){var e=this.props.product;return l["default"].createElement("div",null,l["default"].createElement("div",null,e.name," - $",e.price),l["default"].createElement("button",{onClick:this.props.onAddToCartClicked},"Add to cart"))}}],[{key:"propTypes",value:{product:l["default"].PropTypes.shape({name:l["default"].PropTypes.string,price:l["default"].PropTypes.number}).isRequired,onAddToCartClicked:l["default"].PropTypes.func.isRequired},enumerable:!0}]),t}(c.Component);t["default"]=f,e.exports=t["default"]},182:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;i=l=c=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=u,r=a,n=!0}},c=r(4),l=n(c),f=r(158),s=n(f),p=r(183),d=n(p),v=r(179),y=n(v),h=r(184),b=n(h),m=function(e){function t(){var e=this;o(this,r),i(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments),this.onCheckoutClicked=function(){var t=e.props.products;t.length&&y["default"].checkout(t)}}u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement(b["default"],{products:this.props.products,total:this.props.total,onCheckoutClicked:this.onCheckoutClicked})}}],[{key:"getStores",value:function(){return[d["default"]]}},{key:"getPropsFromStores",value:function(){return{products:d["default"].getAddedProducts(),total:d["default"].getTotal()}}},{key:"propTypes",value:{products:l["default"].PropTypes.array.isRequired,total:l["default"].PropTypes.number.isRequired},enumerable:!0}]);var r=t;return t=s["default"](t)||t}(c.Component);t["default"]=m,e.exports=t["default"]},183:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(161),i=r(162),c=n(i),l=r(179),f=n(l),s=function(){function e(){o(this,t),this.bindActions(f["default"]),this.products={}}u(e,[{key:"onAddToCart",value:function(e){var t=e.id;e.quantity=t in this.products?this.products[t].quantity+1:1,this.products[t]=Object.assign({},e)}},{key:"onCheckout",value:function(){this.products={}}},{key:"onFinishCheckout",value:function(e){console.log("You bought:",e)}}],[{key:"getAddedProducts",value:function(){var e=this.getState(),t=e.products;return Object.keys(t).map(function(e){return t[e]})}},{key:"getTotal",value:function(){var e=this.getAddedProducts().reduce(function(e,t){return e+t.price*t.quantity},0);return e.toFixed(2)}}]);var t=e;return e=a.createStore(c["default"])(e)||e}();t["default"]=s,e.exports=t["default"]},184:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;i=l=c=void 0,n=!1,null===o&&(o=Function.prototype);var i=Object.getOwnPropertyDescriptor(o,u);if(void 0!==i){if("value"in i)return i.value;var c=i.get;return void 0===c?void 0:c.call(a)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=u,r=a,n=!0}},c=r(4),l=n(c),f=function(e){function t(){o(this,t),i(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),a(t,[{key:"renderProduct",value:function(e){return l["default"].createElement("div",{key:"product"+e.id},e.name," - $",e.price," x ",e.quantity)}},{key:"render",value:function(){var e=this.props.products,t=e.length>0,r=t?e.map(this.renderProduct):l["default"].createElement("div",null,"Your cart is empty!");return l["default"].createElement("div",null,l["default"].createElement("div",null,"Your cart"),l["default"].createElement("div",null,r),l["default"].createElement("div",null,"Total: $",this.props.total),l["default"].createElement("button",{onClick:this.props.onCheckoutClicked,disabled:t?"":"disabled"},"Checkout"))}}],[{key:"propTypes",value:{products:l["default"].PropTypes.array.isRequired,total:l["default"].PropTypes.number.isRequired,onCheckoutClicked:l["default"].PropTypes.func.isRequired},enumerable:!0}]),t}(c.Component);t["default"]=f,e.exports=t["default"]}});
//# sourceMappingURL=app.5fe62926c890ab5550d1.js.map?
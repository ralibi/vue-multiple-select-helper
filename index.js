!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultipleSelectHelper=t():e.VueMultipleSelectHelper=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var l=n[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function i(e){i.installed||(i.installed=!0,e.component(r.default.name,r.default))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var l=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(l)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),l=n.n(i),r=n(4),o=n(2),s=o(l.a,r.a,null,null,null);t.default=s.exports},function(e,t){e.exports=function(e,t,n,i,l){var r,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),i&&(c._scopeId=i);var u;if(l?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},c._ssrRegister=u):n&&(u=n),u){var a=c.functional,f=a?c.render:c.beforeCreate;a?c.render=function(e,t){return u.call(t),f(e,t)}:c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:r,exports:o,options:c}}},function(e,t,n){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"multiple-select-helper",props:{data:{type:Array,required:!0},initialSelection:{required:!0},multiple:{type:Boolean,default:!0},selectionKey:{type:String,default:"id"},value:{type:Object,required:!0}},data:function(){return{multipleSelection:[],singleSelection:{}}},watch:{value:function(e){var t=this;if(void 0!==e[this.selectionKey]){if(this.multiple){var n=this.multipleSelection.findIndex(function(n){return n[t.selectionKey]===e[t.selectionKey]});-1!==n?this.multipleSelection.splice(n,1):this.multipleSelection.push(e),this.$emit("selection-change",this.multipleSelection,e)}else this.singleSelection=this.singleSelection[this.selectionKey]===e[this.selectionKey]?{}:Object.assign({},this.singleSelection,e),this.$emit("selection-change",this.singleSelection,e);this.$emit("input",{})}}},created:function(){if(this.multiple&&this.initialSelection.length){var e;(e=this.multipleSelection).push.apply(e,i(this.initialSelection)),this.$emit("selection-change",this.multipleSelection,[].concat(i(this.initialSelection)).pop())}else Object.getOwnPropertyNames(this.singleSelection).length>=0&&(this.singleSelection=Object.assign({},this.singleSelection,this.initialSelection),this.$emit("selection-change",this.singleSelection,this.singleSelection))}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"c-multiple-select-helper"},[e._t("default")],2)},l=[],r={render:i,staticRenderFns:l};t.a=r}])});
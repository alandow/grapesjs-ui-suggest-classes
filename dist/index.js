/*! grapesjs-ui-suggest-classes - 1.0.1 */
!function(e,o){'object'==typeof exports&&'object'==typeof module?module.exports=o():'function'==typeof define&&define.amd?define([],o):'object'==typeof exports?exports["grapesjs-ui-suggest-classes"]=o():e["grapesjs-ui-suggest-classes"]=o()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})}},o={};e.r(o),e.d(o,{default:()=>n});const t={'grapesjs-ui-suggest-classes':{}},n=function(e){const o={i18n:{},...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};!function(e){e.DomComponents.addType('MY-COMPONENT',{model:{defaults:{}},view:{}})}(e),function(e){e.BlockManager.add('MY-BLOCK',{label:'My block',content:{type:'MY-COMPONENT'}})}(e),e.I18n&&e.I18n.addMessages({en:t,...o.i18n}),e.on('load',(()=>e.addComponents(`<div style="margin:100px; padding:25px;">\n            Content loaded from the plugin\n        </div>`,{at:0})))};return o})()));
//# sourceMappingURL=index.js.map
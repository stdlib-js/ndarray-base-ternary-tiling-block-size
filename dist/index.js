"use strict";var l=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var _=l(function(o,s){
var L={BLOCK_SIZE_IN_BYTES:64,BLOCK_SIZE_IN_ELEMENTS:8};s.exports=L
});var I=l(function(x,S){
var a=require('@stdlib/ndarray-base-bytes-per-element/dist'),v=_();function N(i,e,f,B){var E,t,n,u,r;return E=a(i),t=a(e),n=a(f),u=a(B),E===null||t===null||n===null||u===null?v.BLOCK_SIZE_IN_ELEMENTS:(r=E,t>r&&(r=t),n>r&&(r=n),u>r&&(r=u),v.BLOCK_SIZE_IN_BYTES/r|0)}S.exports=N
});var b=I();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

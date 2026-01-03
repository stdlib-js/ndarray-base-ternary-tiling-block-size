// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function t(t){return n[t]||null}var l=64,u=8;function i(n,i,o,a){var r,e,f,c,b;return r=t(n),e=t(i),f=t(o),c=t(a),null===r||null===e||null===f||null===c?u:(e>(b=r)&&(b=e),f>b&&(b=f),c>b&&(b=c),l/b|0)}export{i as default};
//# sourceMappingURL=mod.js.map

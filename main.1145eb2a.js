parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i,c=!0,d=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return c=e.done,e},e:function(e){d=!0,i=e},f:function(){try{c||null==l.return||l.return()}finally{if(d)throw i}}}}function n(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var t=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),i=document.querySelector(".append-column"),c=document.querySelector(".remove-column"),d=document.querySelector(".container"),o=document.querySelector("tr"),a=document.querySelector(".field");d.addEventListener("click",function(n){if(n.target===c){if(a.children[0].children[0].children.length>=10&&(i.disabled=!1),a.children[0].children[0].children.length>2){var r,d=e(a.children[0].children);try{for(d.s();!(r=d.n()).done;){r.value.lastChild.remove()}}catch(v){d.e(v)}finally{d.f()}}2===a.children[0].children[0].children.length&&(c.disabled=!0)}if(n.target===l&&(a.children[0].children.length>=10&&(t.disabled=!1),a.children[0].children.length>2&&a.children[0].lastChild.remove(),2===a.children[0].children.length&&(l.disabled=!0)),n.target===t){var h=document.createElement("tr");a.children[0].children.length>1&&(l.disabled=!1);for(var u=0;u<o.children.length;u++){var f=document.createElement("td");h.append(f)}a.children[0].children.length<10&&a.children[0].append(h),10===a.children[0].children.length&&(t.disabled=!0)}if(n.target===i){if(a.children[0].children[0].children.length>1&&(c.disabled=!1),a.children[0].children[0].children.length<10){var m,s=e(a.children[0].children);try{for(s.s();!(m=s.n()).done;){var y=m.value,g=document.createElement("td");y.append(g)}}catch(v){s.e(v)}finally{s.f()}}10===a.children[0].children[0].children.length&&(i.disabled=!0)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1145eb2a.js.map
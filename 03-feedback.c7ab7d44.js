function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,l=c||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(t,e,n){var o,r,i,a,f,c,u=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,u=e,a=t.apply(i,n)}function h(t){return u=t,f=setTimeout(E,e),l?b(t):a}function T(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-u>=i}function E(){var t=v();if(T(t))return N(t);f=setTimeout(E,function(t){var n=e-(t-c);return s?m(n,i-(t-u)):n}(t))}function N(t){return f=void 0,g&&o?b(t):(o=r=void 0,a)}function w(){var t=v(),n=T(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(E,e),b(c)}return void 0===f&&(f=setTimeout(E,e)),a}return e=y(e)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=c=r=f=void 0},w.flush=function(){return void 0===f?a:N(v())},w}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form");const h=t(e)((function(){try{const t={};for(const e of b.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||(t[e.name]=e.value);localStorage.setItem("feedback-form-state",JSON.stringify(t))}catch(t){console.error("Error with saveState function",t)}}),500);b.addEventListener("input",h),b.addEventListener("submit",(function(t){t.preventDefault();try{const t={};for(const e of b.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||(t[e.name]=e.value);console.log(t),function(){try{localStorage.removeItem("feedback-form-state")}catch(t){console.error("Error with clearState",t)}}(),b.reset()}catch(t){console.error("Error with handleSubmit",t)}})),function(){try{const t=JSON.parse(localStorage.getItem("feedback-form-state"));if(t)for(const e of b.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||(e.value=t[e.name]||"")}catch(t){console.error("Error with restoreState",t)}}();
//# sourceMappingURL=03-feedback.c7ab7d44.js.map
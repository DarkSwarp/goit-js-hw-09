!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("6JpON");var i=t("h6c0i"),l=document.querySelector(".form"),r=null,u=null,a=null,c=null;l.addEventListener("submit",(function(e){var n=function(e){function n(){var n,o,t;(n=e,o=c,t=Math.random()>.3,new Promise((function(e,i){setTimeout((function(){t?e({position:n,delay:o}):i({position:n,delay:o})}),o)}))).then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}1===e?(c=r,n()):(c+=u,n())};e.preventDefault(),r=Number(l.elements.delay.value),u=Number(l.elements.step.value),a=l.elements.amount.value;for(var o=1;o<=a;o+=1)n(o)}))}();
//# sourceMappingURL=03-promises.f5b19bab.js.map
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},l={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in l){var n=l[e];delete l[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){l[e]=o},e.parcelRequired7c6=n),n("7Y9D8");var t=n("iQIUW");formEl=document.querySelector(".form");let r=null,i=null,u=null,s=null;function f(e,o){const l=Math.random()>.3;return console.log(l),new Promise(((n,t)=>{setTimeout((()=>{l?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}formEl.addEventListener("submit",(e=>{e.preventDefault(),r=Number(formEl.elements.delay.value),i=Number(formEl.elements.step.value),u=formEl.elements.amount.value;for(let l=1;l<=u;l+=1){function o(){f(l,s).then((({position:e,delay:o})=>{t.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{t.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}))}1===l?(s=r,o()):(s+=i,o())}}));
//# sourceMappingURL=03-promises.66733eaf.js.map
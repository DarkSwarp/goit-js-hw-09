const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let o=null,l=!1,n=!0;t.disabled=!0,e.addEventListener("click",(function(){l||(l=!0,n=!1,o=setInterval((()=>{e.disabled=!0,t.disabled=!1;const o=`#${Math.floor(16777215*Math.random()).toString(16)}`;d.style.backgroundColor=o,console.log(o)}),1e3))})),t.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,t.disabled=!0,l=!1,n=!0}));
//# sourceMappingURL=01-color-switcher.b0414245.js.map

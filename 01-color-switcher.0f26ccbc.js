!function(){var e,t=document.querySelector("body"),r=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");n.disabled="true",r.addEventListener("click",(function(r){r.target.disabled="true",r.target.nextElementSibling.removeAttribute("disabled"),e=setInterval((function(){t.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(t){clearInterval(e),t.target.disabled="true",t.target.previousElementSibling.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.0f26ccbc.js.map
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const l={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function i(e,o){const n=Math.random()>.3;return new Promise(((t,r)=>{setTimeout((()=>{n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}function u(e,o){r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function a(e,o){r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}console.log(l),l.form.addEventListener("submit",(function(e){e.preventDefault();let o=Number(l.delay.value);const n=Number(l.step.value),t=Number(l.amount.value);console.log(o,n,t);for(let e=0;e<t;e+=1)i(e,o).then(u).catch(a),o+=n}));
//# sourceMappingURL=03-promises.0e10c765.js.map
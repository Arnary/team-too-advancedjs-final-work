import{a as i}from"./assets/burger-0c5ec441.js";import{i as t}from"./assets/vendor-833ab380.js";const u=new i,m="https://your-energy.b.goit.study/api/subscription",l=document.querySelector(".subscribe-form"),r=document.getElementById("email");l.addEventListener("submit",async e=>{e.preventDefault();const o=r.value;try{const s=await p(o);b(s.message),r.value=""}catch(s){d(s)}});async function p(e){const o=`${m}`,s={email:e};try{return await u.post(o,s)}catch(a){throw a}}function b(e){t.success({message:e,position:"center",timeout:7e3,messageColor:"black"})}function n(e){t.info({message:e,position:"center",timeout:5e3,messageColor:"black"})}function c(e){t.error({message:e,position:"center",timeout:5e3,messageColor:"black"})}function d(e){if(e.response){const{status:o,data:s}=e.response;switch(o){case 400:c(s.message);break;case 404:showNotFoundToast("Requested resource not found.");break;case 409:n("Subscription already exists.");break;case 500:c("Server error. Please try again later.");break;default:n(s.message);break}}}
//# sourceMappingURL=commonHelpers2.js.map

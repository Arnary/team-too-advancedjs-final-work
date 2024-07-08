var V=Object.defineProperty;var W=(e,t,s)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var y=(e,t,s)=>(W(e,typeof t!="symbol"?t+"":t,s),s),H=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var u=(e,t,s)=>(H(e,t,"read from private field"),s?s.call(e):t.get(e)),L=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},h=(e,t,s,o)=>(H(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);import{a as z,l as G}from"./vendor-833ab380.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const Y="modulepreload",X=function(e){return"/team-too-advancedjs-final-work/"+e},_={},A=function(t,s,o){if(!s||s.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=X(i),i in _)return;_[i]=!0;const r=i.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!o)for(let p=n.length-1;p>=0;p--){const w=n[p];if(w.href===i&&(!r||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${l}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Y,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((p,w)=>{a.addEventListener("load",p),a.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=i,window.dispatchEvent(r),!r.defaultPrevented)throw i})};var $,f,v,E;const b=class b{constructor({body:t="",header:s="",actions:o="",className:n=null}={}){L(this,$,void 0);L(this,f,void 0);L(this,v,void 0);L(this,E,"modal");y(this,"onHide",null);y(this,"onOpen",null);h(this,$,s),h(this,f,t),h(this,v,o),h(this,E,u(this,E)+(n?` ${n}`:"")),b.count++,this.render()}get id(){return`modal_${b.count}`}render(){const t=`
      <div id="${this.id}" class="${u(this,E)}">
        <div class="modal-container">
          <div class="modal-header">
            <div class="modal-header__title">${u(this,$)}</div>
            <a role="button" id="closeModal" class="modal-close-btn">
              <svg class="icon">
                <use href="./img/icons.svg#icon-close"></use>
              </svg>
            </a>
          </div>
          <div class="modal-body">
            ${u(this,f)}
          </div>
          <div class="modal-actions">
            ${u(this,v)}
          </div>
        </div>
      </div>`;document.body.insertAdjacentHTML("beforeend",t),this.$el=document.querySelector(`#${this.id}`)}set body(t){if(h(this,f,t),this.$el){const s=this.$el.querySelector(".modal-body");s.innerHTML=u(this,f)}}set actions(t){if(h(this,v,t),this.$el){const s=this.$el.querySelector(".modal-actions");s.innerHTML=u(this,v)}}initEvents(){this.closeHandler=this.close.bind(this),this.outsideClickHandler=s=>{s.target===this.$el&&this.close()},this.escapeKeyHandler=s=>{s.key==="Escape"&&this.close()},this.$el.querySelector(".modal-close-btn").addEventListener("click",this.closeHandler),window.addEventListener("click",this.outsideClickHandler),window.addEventListener("keydown",this.escapeKeyHandler)}removeEvents(){this.$el.querySelector(".modal-close-btn").removeEventListener("click",this.closeHandler),window.removeEventListener("click",this.outsideClickHandler),window.removeEventListener("keydown",this.escapeKeyHandler)}open(){this.$el.classList.remove("hide"),this.$el.classList.add("show"),this.$el.querySelector(".modal-container").classList.remove("hide"),this.initEvents(),typeof this.onOpen=="function"&&this.onOpen(),document.body.style.overflow="hidden"}close(){const t=this.$el.querySelector(".modal-container");this.$el.classList.add("hide"),this.$el.addEventListener("animationend",()=>{this.$el.classList.contains("hide")&&(this.$el.classList.remove("show"),t.classList.add("hide"),typeof this.onHide=="function"&&this.onHide(),this.removeEvents(),this.body="",document.body.style.overflow="auto")},{once:!0})}};$=new WeakMap,f=new WeakMap,v=new WeakMap,E=new WeakMap,y(b,"count",0);let P=b;const x="https://your-energy.b.goit.study/api";class N{constructor(){this.axios=z}get(t="",s={}){return this.request("GET",t,{params:s})}post(t="",s={}){return this.request("POST",t,{data:s})}patch(t="",s={}){return this.request("PATCH",t,{data:s})}request(t,s,o){if(s===""||!s)throw new Error("url is empty");!1==="string"&&(s=String(s)),s.substring(0,x.length)===x&&(s=s.substring(x.length)),s.substring(0,1)!=="/"&&(s=`/${s}`);const{params:n={},data:i}=o,r=new URLSearchParams(n).toString();return this.axios.request(`${x}${s}${r?`?${r}`:""}`,{method:t,data:i}).then(l=>{const{status:g,data:a}=l;if(g>=200&&g<300)return a;throw new Error}).catch(l=>{throw l})}describeError(t){if(t.response){const{status:s}=t.response;return s===400?"Invalid request":s===404?"Not found":s===409?"Already exists":s===500?"Server error":"Unknown error occurred"}else if(t.request)return"No response from server";return"Something went wrong"}}const m=new Proxy({favoritesList:(JSON==null?void 0:JSON.parse(localStorage.getItem("favorites")))??[]},{set(e,t,s){return e[t]=s,t==="favoritesList"&&localStorage.setItem("favorites",JSON.stringify(s)),!0}}),O=new N;let c=null;class Z extends P{constructor(s){super(s);y(this,"itemID");this.itemID=s.itemID}close(){super.close(),this.itemID=null}}const D=(e="")=>(e=e.toString(),(e==null?void 0:e.charAt(0).toUpperCase())+(e==null?void 0:e.slice(1))),S={ratingTemplate:e=>{const t=[...Array(5).keys()].map(s=>`
          <svg class="icon${s+1<=e?" filled":""}">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>`).join("");return`
      <div class="rating">
        <div class="rating-value">${e.toFixed(1)}</div>
        ${t}
      </div>
    `},detailActionBtnsTemplate:e=>`
      <button
        data-fav-${e?"del":"add"}
        type="button"
        class="btn"
        >
        ${e?"Remove from favorites":"Add to favorites"}
        <svg class="icon">
          <use href="./img/icons.svg#icon-${e?"trash":"heart"}"></use>
        </svg>
      </button>`,modalContent:e=>{const{gifUrl:t,name:s,rating:o,description:n,isFav:i}=e,r=D(s),l={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular",burnedCalories:"Burned Calories"},g=Object.keys(l).map(a=>a in e?`<li class="char-item">
              <h4 class="title">${l[a]}</h4>
              <p class="description">${D(e[a])}</p>
            </li>`:null).filter(a=>!!a).join("");return`<div class="card">
        <img class="card-img" src="${t}" alt="${r}">
        <div class="card-body">
          <div class="card-header">
            <h3 class="card-title">${r}</h3>
            ${S.ratingTemplate(o)}
          </div>
          <ul class="char-list">
            ${g}
          </ul>
          <p class="char-info">${n}</p>

        </div>
      </div>`}},ee=e=>t=>{if("favAdd"in t.target.dataset||"favDel"in t.target.dataset){e.isFav=!e.isFav;let s=[...m.favoritesList];"favAdd"in t.target.dataset?s.push(e):"favDel"in t.target.dataset&&(s=s.filter(n=>n._id!==e._id)),m.favoritesList=s;const o=c==null?void 0:c.$el.querySelector(".modal-actions");o&&(o.innerHTML=S.detailActionBtnsTemplate(e.isFav))}},te=async()=>{const e="https://your-energy.b.goit.study/api/exercises/";return c=new Z({className:"exercise-detail"}),document.querySelector("#exercises-list").addEventListener("click",async s=>{const o=s.target.closest("button");if(!o||!o.dataset.exerciseId)return;const{exerciseId:n}=o.dataset;c.itemID=n,c.open();try{const i=await O.get(`${e}${n}`);if(Object.keys(i).length===0)throw new Error;i.isFav=m.favoritesList.findIndex(({_id:l})=>l===n)>-1,c.body=S.modalContent(i),c.actions=S.detailActionBtnsTemplate(i.isFav);const r=ee(i);c.$el.addEventListener("click",r),c.onHide=()=>{c.$el.removeEventListener("click",r)}}catch(i){const r=O.describeError(i);console.error(r),c.body=`<div style="color: red">${r}</div>`}}),{modal:c}};function se(e=""){return e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)}class ie{constructor(t,s){this.element=document.querySelector(t),this.element.addEventListener("click",o=>{o.target.nodeName==="BUTTON"&&(s(parseInt(o.target.dataset.page)),this.scrollToParent())})}render(t,s){this.element.innerHTML="",!(s<1)&&(this.element.innerHTML=G.range(1,s+1).map(o=>`
          <button data-page="${o}" class="pagination-button ${o===t?"active":""}">
          ${o}
          </button>
        `).join(""))}scrollToParent(){this.element.closest("section").scrollIntoView({behavior:"smooth"})}}const ne=()=>`<span class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</span>`,oe=e=>`
  <li class="exercise-card favorite-card" data-exercise-id="${e._id}">
    <div class="exercise-card-header">
      <span class="exercise-card-title">Workout</span>
      <button class="exercise-card-remove btn" type="button" data-fav-del>
        <svg class="icon">
          <use href="./img/icons.svg#icon-trash"></use>
        </svg>
      </button>
      <button class="exercise-card-start" data-exercise-id="${e._id}">
        Start
        <svg class="exercise-start-icon">
          <use href="./img/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>

    <div class="exercise-card-content">
      <img src="./img/figure.svg" alt="figure" class="exercise-name-icon" />
      <div class="exercise-card-name">
        ${se(e.name)}
      </div>
    </div>

    <div class="exercise-card-footer">
      <div class="exercise-card-detail">
        Burned calories: <span class="value">${e.burnedCalories}</span>
      </div>
      <div class="exercise-card-detail">
        Body part: <span class="value">${e.bodyPart}</span>
      </div>
      <div class="exercise-card-detail">
        Target: <span class="value">${e.target}</span>
      </div>
    </div>
  </li>`,d=new Proxy({page:1,itemsPerPage:window.innerWidth>767?10:8},{set(e,t,s){return e[t]=s,t==="page"&&B(),!0}}),re=()=>Math.ceil(m.favoritesList.length/d.itemsPerPage),ae=new ie("#exercises-pagination",async e=>{d.page=e}),j={list:document.querySelector("#exercises-list")},R=(e,t,s)=>{const o=(t-1)*s,n=o+s;return e.slice(o,n)??[]};function B(){let e=ne();const t=R(m.favoritesList,d.page,d.itemsPerPage);t.length&&(e=t.map(s=>oe(s)).join("")),j.list.innerHTML=e,ae.render(d.page,re())}B();const q=e=>{m.favoritesList=m.favoritesList.filter(s=>s._id!==e);const t=R(m.favoritesList,d.page,d.itemsPerPage);d.page>1&&t.length===0&&(d.page-=1),B()};j.list.addEventListener("click",e=>{var t;if("favDel"in e.target.dataset){const{exerciseId:s}=(t=e.target.closest(".exercise-card"))==null?void 0:t.dataset;if(!s)return;q(s)}});const ce=Object.freeze(Object.defineProperty({__proto__:null,removeExercise:q},Symbol.toStringTag,{value:"Module"}));A(()=>Promise.resolve().then(()=>ce),void 0);var C;const U=(C=document.querySelector("body"))==null?void 0:C.classList;U.contains("index")&&A(()=>import("./exercises-8dd9f5ef.js"),["assets/exercises-8dd9f5ef.js","assets/vendor-833ab380.js","assets/vendor-e5212ee8.css"]);const le=async()=>{const{modal:e}=await te();e.$el.addEventListener("click",t=>{"favDel"in t.target.dataset&&U.contains("favorites")?(q(e.itemID),e.close()):"rating"in t.target.dataset&&e.close()})};le();const T="quote",de=()=>{const e=ue();e?M(e):new N().get("/quote").then(M)},ue=()=>{const e=localStorage.getItem(T);if(!e)return;const{expireDate:t,quote:s,author:o}=JSON.parse(e);return Date.now()>t?localStorage.removeItem(T):{quote:s,author:o}},me=e=>{e&&localStorage.setItem(T,JSON.stringify({...e,expireDate:new Date(new Date().setHours(23,59,59,0)).getTime()}))},M=({quote:e,author:t})=>{e&&(document.querySelector(".quote-main-quote").innerHTML=e,document.querySelector(".quote-main-author").innerHTML=t,me({author:t,quote:e}))};de();const he=document.querySelector(".js-open-menu"),fe=document.querySelector(".js-close-menu"),F=document.querySelector("#mobile-menu"),Q=document.querySelector("[data-menu-backdrop]"),ve=document.querySelectorAll(".menu__nav-link");function ge(){F.classList.add("is-open"),Q.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function I(){F.classList.remove("is-open"),Q.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}he.addEventListener("click",()=>{ge()});fe.addEventListener("click",()=>{I()});ve.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("href").substring(1),s=document.getElementById(t);s&&(s.scrollIntoView({behavior:"smooth"}),I())})});const K=window.matchMedia("(min-width: 768px)");function J(e){e.matches&&I()}K.addListener(J);J(K);document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,t=document.getElementById("homeButton"),s=document.getElementById("favoritesButton");e.includes("index.html")?(t.classList.add("active"),t.addEventListener("click",k)):e.includes("favorites.html")?(s.classList.add("active"),s.addEventListener("click",k)):(t.classList.add("active"),t.addEventListener("click",k))});const k=e=>{const t=document.getElementById("homeButton"),s=document.getElementById("favoritesButton");e.currentTarget.classList.contains("active")?e.preventDefault():alert("Button clicked!"),e.currentTarget===s&&t.classList.remove("active")};export{ie as P,N as a,se as c};
//# sourceMappingURL=burger-788d9ee4.js.map

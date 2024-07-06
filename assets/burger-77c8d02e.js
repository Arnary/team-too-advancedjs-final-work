var z=Object.defineProperty;var V=(e,s,t)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var y=(e,s,t)=>(V(e,typeof s!="symbol"?s+"":s,t),t),H=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var u=(e,s,t)=>(H(e,s,"read from private field"),t?t.call(e):s.get(e)),L=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)},h=(e,s,t,n)=>(H(e,s,"write to private field"),n?n.call(e,t):s.set(e,t),t);import{a as G,l as Y}from"./vendor-833ab380.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const X="modulepreload",Z=function(e){return"/advancedjs-final-work/"+e},_={},N=function(s,t,n){if(!t||t.length===0)return s();const i=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Z(o),o in _)return;_[o]=!0;const r=o.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!n)for(let p=i.length-1;p>=0;p--){const w=i[p];if(w.href===o&&(!r||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":X,r||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),r)return new Promise((p,w)=>{a.addEventListener("load",p),a.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})};var $,f,v,E;const b=class b{constructor({body:s="",header:t="",actions:n="",className:i=null}={}){L(this,$,void 0);L(this,f,void 0);L(this,v,void 0);L(this,E,"modal");y(this,"onHide",null);y(this,"onOpen",null);h(this,$,t),h(this,f,s),h(this,v,n),h(this,E,u(this,E)+(i?` ${i}`:"")),b.count++,this.render()}get id(){return`modal_${b.count}`}render(){const s=`
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
      </div>`;document.body.insertAdjacentHTML("beforeend",s),this.$el=document.querySelector(`#${this.id}`)}set body(s){if(h(this,f,s),this.$el){const t=this.$el.querySelector(".modal-body");t.innerHTML=u(this,f)}}set actions(s){if(h(this,v,s),this.$el){const t=this.$el.querySelector(".modal-actions");t.innerHTML=u(this,v)}}initEvents(){this.closeHandler=this.close.bind(this),this.outsideClickHandler=t=>{t.target===this.$el&&this.close()},this.escapeKeyHandler=t=>{t.key==="Escape"&&this.close()},this.$el.querySelector(".modal-close-btn").addEventListener("click",this.closeHandler),window.addEventListener("click",this.outsideClickHandler),window.addEventListener("keydown",this.escapeKeyHandler)}removeEvents(){this.$el.querySelector(".modal-close-btn").removeEventListener("click",this.closeHandler),window.removeEventListener("click",this.outsideClickHandler),window.removeEventListener("keydown",this.escapeKeyHandler)}open(){this.$el.classList.remove("hide"),this.$el.classList.add("show"),this.$el.querySelector(".modal-container").classList.remove("hide"),this.initEvents(),typeof this.onOpen=="function"&&this.onOpen(),document.body.style.overflow="hidden"}close(){const s=this.$el.querySelector(".modal-container");this.$el.classList.add("hide"),this.$el.addEventListener("animationend",()=>{this.$el.classList.contains("hide")&&(this.$el.classList.remove("show"),s.classList.add("hide"),typeof this.onHide=="function"&&this.onHide(),this.removeEvents(),this.body="",document.body.style.overflow="auto")},{once:!0})}};$=new WeakMap,f=new WeakMap,v=new WeakMap,E=new WeakMap,y(b,"count",0);let B=b;const x="https://your-energy.b.goit.study/api";class j{constructor(){this.axios=G}get(s="",t={}){return this.request("GET",s,{params:t})}post(s="",t={}){return this.request("POST",s,{data:t})}patch(s="",t={}){return this.request("PATCH",s,{data:t})}request(s,t,n){if(t===""||!t)throw new Error("url is empty");!1==="string"&&(t=String(t)),t.substring(0,x.length)===x&&(t=t.substring(x.length)),t.substring(0,1)!=="/"&&(t=`/${t}`);const{params:i={},data:o}=n,r=new URLSearchParams(i).toString();return this.axios.request(`${x}${t}${r?`?${r}`:""}`,{method:s,data:o}).then(d=>{const{status:g,data:a}=d;if(g>=200&&g<300)return a;throw new Error}).catch(d=>{throw d})}describeError(s){if(s.response){const{status:t}=s.response;return t===400?"Invalid request":t===404?"Not found":t===409?"Already exists":t===500?"Server error":"Unknown error occurred"}else if(s.request)return"No response from server";return"Something went wrong"}}const m=new Proxy({favoritesList:(JSON==null?void 0:JSON.parse(localStorage.getItem("favorites")))??[]},{set(e,s,t){return e[s]=t,s==="favoritesList"&&localStorage.setItem("favorites",JSON.stringify(t)),!0}}),O=new j;let c=null;class ee extends B{constructor(t){super(t);y(this,"itemID");this.itemID=t.itemID}close(){super.close(),this.itemID=null}}const D=(e="")=>(e=e.toString(),(e==null?void 0:e.charAt(0).toUpperCase())+(e==null?void 0:e.slice(1))),S={ratingTemplate:e=>{const s=[...Array(5).keys()].map(t=>`
          <svg class="icon${t+1<=e?" filled":""}">
            <use href="./img/icons.svg#icon-star"></use>
          </svg>`).join("");return`
      <div class="rating">
        <div class="rating-value">${e.toFixed(1)}</div>
        ${s}
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
      </button>
      <button data-rating type="button" class="btn dark">Give a rating</button>`,modalContent:e=>{const{gifUrl:s,name:t,rating:n,description:i,isFav:o}=e,r=D(t),d={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular",burnedCalories:"Burned Calories"},g=Object.keys(d).map(a=>a in e?`<li class="char-item">
              <h4 class="title">${d[a]}</h4>
              <p class="description">${D(e[a])}</p>
            </li>`:null).filter(a=>!!a).join("");return`<div class="card">
        <img class="card-img" src="${s}" alt="${r}">
        <div class="card-body">
          <div class="card-header">
            <h3 class="card-title">${r}</h3>
            ${S.ratingTemplate(n)}
          </div>
          <ul class="char-list">
            ${g}
          </ul>
          <p class="char-info">${i}</p>

        </div>
      </div>`}},te=e=>s=>{if("favAdd"in s.target.dataset||"favDel"in s.target.dataset){e.isFav=!e.isFav;let t=[...m.favoritesList];"favAdd"in s.target.dataset?t.push(e):"favDel"in s.target.dataset&&(t=t.filter(i=>i._id!==e._id)),m.favoritesList=t;const n=c==null?void 0:c.$el.querySelector(".modal-actions");n&&(n.innerHTML=S.detailActionBtnsTemplate(e.isFav))}},se=async()=>{const e="https://your-energy.b.goit.study/api/exercises/";return c=new ee({className:"exercise-detail"}),document.querySelector("#exercises-list").addEventListener("click",async t=>{if(!t.target.dataset.exerciseId)return;const{exerciseId:n}=t.target.dataset;c.itemID=n,c.open();try{const i=await O.get(`${e}${n}`);if(Object.keys(i).length===0)throw new Error;i.isFav=m.favoritesList.findIndex(({_id:r})=>r===n)>-1,c.body=S.modalContent(i),c.actions=S.detailActionBtnsTemplate(i.isFav);const o=te(i);c.$el.addEventListener("click",o),c.onHide=()=>{c.$el.removeEventListener("click",o)}}catch(i){const o=O.describeError(i);console.error(o),c.body=`<div style="color: red">${o}</div>`}}),{modal:c}};function ie(e=""){return e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)}class ne{constructor(s,t){this.element=document.querySelector(s),this.element.addEventListener("click",n=>{n.target.nodeName==="BUTTON"&&t(parseInt(n.target.dataset.page))})}render(s,t){this.element.innerHTML="",!(t<1)&&(this.element.innerHTML=Y.range(1,t+1).map(n=>`
          <button data-page="${n}" class="pagination-button ${n===s?"active":""}">
          ${n}
          </button>
        `).join(""))}}const oe=()=>"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",re=e=>`
  <div class="exercise-card favorite-card" data-exercise-id="${e._id}">
    <header class="exercise-card-header">
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
    </header>

    <div class="exercise-card-content">
      <img src="./img/figure.svg" alt="figure" class="exercise-name-icon" />
      <div class="exercise-card-name">
        ${ie(e.name)}
      </div>
    </div>

    <footer class="exercise-card-footer">
      <div class="exercise-card-detail">
        Burned calories: <span class="value">${e.burnedCalories}</span>
      </div>
      <div class="exercise-card-detail">
        Body part: <span class="value">${e.bodyPart}</span>
      </div>
      <div class="exercise-card-detail">
        Target: <span class="value">${e.target}</span>
      </div>
    </footer>
  </div>`,l=new Proxy({page:1,itemsPerPage:window.innerWidth>767?10:8},{set(e,s,t){return e[s]=t,s==="page"&&P(),!0}}),M=()=>Math.ceil(m.favoritesList.length/l.itemsPerPage),ae=new ne("#exercises-pagination",async e=>{l.page=e}),R={list:document.querySelector("#exercises-list")},U=(e,s,t)=>{const n=(s-1)*t,i=n+t;return e.slice(n,i)??[]};function P(){let e=oe();const s=U(m.favoritesList,l.page,l.itemsPerPage);s.length&&(e=s.map(t=>re(t)).join("")),R.list.innerHTML=e,M()>1&&ae.render(l.page,M())}P();const T=e=>{m.favoritesList=m.favoritesList.filter(t=>t._id!==e);const s=U(m.favoritesList,l.page,l.itemsPerPage);l.page>1&&s.length===0&&(l.page-=1),P()};R.list.addEventListener("click",e=>{var s;if("favDel"in e.target.dataset){const{exerciseId:t}=(s=e.target.closest(".exercise-card"))==null?void 0:s.dataset;if(!t)return;T(t)}});const ce=Object.freeze(Object.defineProperty({__proto__:null,removeExercise:T},Symbol.toStringTag,{value:"Module"}));N(()=>Promise.resolve().then(()=>ce),void 0);var A;const F=(A=document.querySelector("body"))==null?void 0:A.classList;F.contains("index")&&N(()=>import("./exercises-62c7a254.js"),["assets/exercises-62c7a254.js","assets/vendor-833ab380.js","assets/vendor-e5212ee8.css"]);const le=async()=>{const{modal:e}=await se();e.$el.addEventListener("click",s=>{"favDel"in s.target.dataset&&F.contains("favorites")?(T(e.itemID),e.close()):"rating"in s.target.dataset&&e.close()})};le();const q="quote",de=()=>{const e=ue();e?C(e):new j().get("/quote").then(C)},ue=()=>{const e=localStorage.getItem(q);if(!e)return;const{expireDate:s,quote:t,author:n}=JSON.parse(e);return Date.now()>s?localStorage.removeItem(q):{quote:t,author:n}},me=e=>{e&&localStorage.setItem(q,JSON.stringify({...e,expireDate:new Date(new Date().setHours(23,59,59,0)).getTime()}))},C=({quote:e,author:s})=>{e&&(document.querySelector(".quote-main-quote").innerHTML=e,document.querySelector(".quote-main-author").innerHTML=s,me({author:s,quote:e}))};de();const he=document.querySelector(".js-open-menu"),fe=document.querySelector(".js-close-menu"),Q=document.querySelector("#mobile-menu"),K=document.querySelector("[data-menu-backdrop]"),ve=document.querySelectorAll(".menu__nav-link");function ge(){Q.classList.add("is-open"),K.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function I(){Q.classList.remove("is-open"),K.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}he.addEventListener("click",()=>{ge()});fe.addEventListener("click",()=>{I()});ve.forEach(e=>{e.addEventListener("click",()=>{const s=e.getAttribute("href").substring(1),t=document.getElementById(s);t&&(t.scrollIntoView({behavior:"smooth"}),I())})});const J=window.matchMedia("(min-width: 768px)");function W(e){e.matches&&I()}J.addListener(W);W(J);document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,s=document.getElementById("homeButton"),t=document.getElementById("favoritesButton");e.includes("index.html")?(s.classList.add("active"),s.addEventListener("click",k)):e.includes("favorites.html")?(t.classList.add("active"),t.addEventListener("click",k)):(s.classList.add("active"),s.addEventListener("click",k))});const k=e=>{const s=document.getElementById("homeButton"),t=document.getElementById("favoritesButton");e.currentTarget.classList.contains("active")?e.preventDefault():alert("Button clicked!"),e.currentTarget===t&&s.classList.remove("active")};export{ne as P,j as a,ie as c};
//# sourceMappingURL=burger-77c8d02e.js.map

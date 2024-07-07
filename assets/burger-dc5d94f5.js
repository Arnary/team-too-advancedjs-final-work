var W=Object.defineProperty;var z=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var y=(e,t,s)=>(z(e,typeof t!="symbol"?t+"":t,s),s),H=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var u=(e,t,s)=>(H(e,t,"read from private field"),s?s.call(e):t.get(e)),L=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},h=(e,t,s,n)=>(H(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s);import{a as G,l as Y}from"./vendor-833ab380.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const X="modulepreload",Z=function(e){return"/team-too-advancedjs-final-work/"+e},_={},N=function(t,s,n){if(!s||s.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(s.map(o=>{if(o=Z(o),o in _)return;_[o]=!0;const r=o.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!n)for(let p=i.length-1;p>=0;p--){const w=i[p];if(w.href===o&&(!r||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":X,r||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),r)return new Promise((p,w)=>{a.addEventListener("load",p),a.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})};var $,f,v,E;const b=class b{constructor({body:t="",header:s="",actions:n="",className:i=null}={}){L(this,$,void 0);L(this,f,void 0);L(this,v,void 0);L(this,E,"modal");y(this,"onHide",null);y(this,"onOpen",null);h(this,$,s),h(this,f,t),h(this,v,n),h(this,E,u(this,E)+(i?` ${i}`:"")),b.count++,this.render()}get id(){return`modal_${b.count}`}render(){const t=`
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
      </div>`;document.body.insertAdjacentHTML("beforeend",t),this.$el=document.querySelector(`#${this.id}`)}set body(t){if(h(this,f,t),this.$el){const s=this.$el.querySelector(".modal-body");s.innerHTML=u(this,f)}}set actions(t){if(h(this,v,t),this.$el){const s=this.$el.querySelector(".modal-actions");s.innerHTML=u(this,v)}}initEvents(){this.closeHandler=this.close.bind(this),this.outsideClickHandler=s=>{s.target===this.$el&&this.close()},this.escapeKeyHandler=s=>{s.key==="Escape"&&this.close()},this.$el.querySelector(".modal-close-btn").addEventListener("click",this.closeHandler),window.addEventListener("click",this.outsideClickHandler),window.addEventListener("keydown",this.escapeKeyHandler)}removeEvents(){this.$el.querySelector(".modal-close-btn").removeEventListener("click",this.closeHandler),window.removeEventListener("click",this.outsideClickHandler),window.removeEventListener("keydown",this.escapeKeyHandler)}open(){this.$el.classList.remove("hide"),this.$el.classList.add("show"),this.$el.querySelector(".modal-container").classList.remove("hide"),this.initEvents(),typeof this.onOpen=="function"&&this.onOpen(),document.body.style.overflow="hidden"}close(){const t=this.$el.querySelector(".modal-container");this.$el.classList.add("hide"),this.$el.addEventListener("animationend",()=>{this.$el.classList.contains("hide")&&(this.$el.classList.remove("show"),t.classList.add("hide"),typeof this.onHide=="function"&&this.onHide(),this.removeEvents(),this.body="",document.body.style.overflow="auto")},{once:!0})}};$=new WeakMap,f=new WeakMap,v=new WeakMap,E=new WeakMap,y(b,"count",0);let P=b;const x="https://your-energy.b.goit.study/api";class j{constructor(){this.axios=G}get(t="",s={}){return this.request("GET",t,{params:s})}post(t="",s={}){return this.request("POST",t,{data:s})}patch(t="",s={}){return this.request("PATCH",t,{data:s})}request(t,s,n){if(s===""||!s)throw new Error("url is empty");!1==="string"&&(s=String(s)),s.substring(0,x.length)===x&&(s=s.substring(x.length)),s.substring(0,1)!=="/"&&(s=`/${s}`);const{params:i={},data:o}=n,r=new URLSearchParams(i).toString();return this.axios.request(`${x}${s}${r?`?${r}`:""}`,{method:t,data:o}).then(d=>{const{status:g,data:a}=d;if(g>=200&&g<300)return a;throw new Error}).catch(d=>{throw d})}describeError(t){if(t.response){const{status:s}=t.response;return s===400?"Invalid request":s===404?"Not found":s===409?"Already exists":s===500?"Server error":"Unknown error occurred"}else if(t.request)return"No response from server";return"Something went wrong"}}const m=new Proxy({favoritesList:(JSON==null?void 0:JSON.parse(localStorage.getItem("favorites")))??[]},{set(e,t,s){return e[t]=s,t==="favoritesList"&&localStorage.setItem("favorites",JSON.stringify(s)),!0}}),O=new j;let c=null;class ee extends P{constructor(s){super(s);y(this,"itemID");this.itemID=s.itemID}close(){super.close(),this.itemID=null}}const D=(e="")=>(e=e.toString(),(e==null?void 0:e.charAt(0).toUpperCase())+(e==null?void 0:e.slice(1))),S={ratingTemplate:e=>{const t=[...Array(5).keys()].map(s=>`
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
      </button>
      <button data-rating type="button" class="btn dark">Give a rating</button>`,modalContent:e=>{const{gifUrl:t,name:s,rating:n,description:i,isFav:o}=e,r=D(s),d={target:"Target",bodyPart:"Body Part",equipment:"Equipment",popularity:"Popular",burnedCalories:"Burned Calories"},g=Object.keys(d).map(a=>a in e?`<li class="char-item">
              <h4 class="title">${d[a]}</h4>
              <p class="description">${D(e[a])}</p>
            </li>`:null).filter(a=>!!a).join("");return`<div class="card">
        <img class="card-img" src="${t}" alt="${r}">
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
      </div>`}},te=e=>t=>{if("favAdd"in t.target.dataset||"favDel"in t.target.dataset){e.isFav=!e.isFav;let s=[...m.favoritesList];"favAdd"in t.target.dataset?s.push(e):"favDel"in t.target.dataset&&(s=s.filter(i=>i._id!==e._id)),m.favoritesList=s;const n=c==null?void 0:c.$el.querySelector(".modal-actions");n&&(n.innerHTML=S.detailActionBtnsTemplate(e.isFav))}},se=async()=>{const e="https://your-energy.b.goit.study/api/exercises/";return c=new ee({className:"exercise-detail"}),document.querySelector("#exercises-list").addEventListener("click",async s=>{if(!s.target.dataset.exerciseId)return;const{exerciseId:n}=s.target.dataset;c.itemID=n,c.open();try{const i=await O.get(`${e}${n}`);if(Object.keys(i).length===0)throw new Error;i.isFav=m.favoritesList.findIndex(({_id:r})=>r===n)>-1,c.body=S.modalContent(i),c.actions=S.detailActionBtnsTemplate(i.isFav);const o=te(i);c.$el.addEventListener("click",o),c.onHide=()=>{c.$el.removeEventListener("click",o)}}catch(i){const o=O.describeError(i);console.error(o),c.body=`<div style="color: red">${o}</div>`}}),{modal:c}};function ie(e=""){return e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)}class ne{constructor(t,s){this.element=document.querySelector(t),this.element.addEventListener("click",n=>{n.target.nodeName==="BUTTON"&&(s(parseInt(n.target.dataset.page)),this.scrollToParent())})}render(t,s){this.element.innerHTML="",!(s<1)&&(this.element.innerHTML=Y.range(1,s+1).map(n=>`
          <button data-page="${n}" class="pagination-button ${n===t?"active":""}">
          ${n}
          </button>
        `).join(""))}scrollToParent(){this.element.closest("section").scrollIntoView({behavior:"smooth"})}}const oe=()=>`<span class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</span>`,re=e=>`
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
        ${ie(e.name)}
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
  </li>`,l=new Proxy({page:1,itemsPerPage:window.innerWidth>767?10:8},{set(e,t,s){return e[t]=s,t==="page"&&B(),!0}}),M=()=>Math.ceil(m.favoritesList.length/l.itemsPerPage),ae=new ne("#exercises-pagination",async e=>{l.page=e}),R={list:document.querySelector("#exercises-list")},U=(e,t,s)=>{const n=(t-1)*s,i=n+s;return e.slice(n,i)??[]};function B(){let e=oe();const t=U(m.favoritesList,l.page,l.itemsPerPage);t.length&&(e=t.map(s=>re(s)).join("")),R.list.innerHTML=e,M()>1&&ae.render(l.page,M())}B();const q=e=>{m.favoritesList=m.favoritesList.filter(s=>s._id!==e);const t=U(m.favoritesList,l.page,l.itemsPerPage);l.page>1&&t.length===0&&(l.page-=1),B()};R.list.addEventListener("click",e=>{var t;if("favDel"in e.target.dataset){const{exerciseId:s}=(t=e.target.closest(".exercise-card"))==null?void 0:t.dataset;if(!s)return;q(s)}});const ce=Object.freeze(Object.defineProperty({__proto__:null,removeExercise:q},Symbol.toStringTag,{value:"Module"}));N(()=>Promise.resolve().then(()=>ce),void 0);var A;const F=(A=document.querySelector("body"))==null?void 0:A.classList;F.contains("index")&&N(()=>import("./exercises-1a96e763.js"),["assets/exercises-1a96e763.js","assets/vendor-833ab380.js","assets/vendor-e5212ee8.css"]);const le=async()=>{const{modal:e}=await se();e.$el.addEventListener("click",t=>{"favDel"in t.target.dataset&&F.contains("favorites")?(q(e.itemID),e.close()):"rating"in t.target.dataset&&e.close()})};le();const T="quote",de=()=>{const e=ue();e?C(e):new j().get("/quote").then(C)},ue=()=>{const e=localStorage.getItem(T);if(!e)return;const{expireDate:t,quote:s,author:n}=JSON.parse(e);return Date.now()>t?localStorage.removeItem(T):{quote:s,author:n}},me=e=>{e&&localStorage.setItem(T,JSON.stringify({...e,expireDate:new Date(new Date().setHours(23,59,59,0)).getTime()}))},C=({quote:e,author:t})=>{e&&(document.querySelector(".quote-main-quote").innerHTML=e,document.querySelector(".quote-main-author").innerHTML=t,me({author:t,quote:e}))};de();const he=document.querySelector(".js-open-menu"),fe=document.querySelector(".js-close-menu"),Q=document.querySelector("#mobile-menu"),K=document.querySelector("[data-menu-backdrop]"),ve=document.querySelectorAll(".menu__nav-link");function ge(){Q.classList.add("is-open"),K.classList.remove("is-hidden"),document.body.classList.add("no-scroll")}function I(){Q.classList.remove("is-open"),K.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}he.addEventListener("click",()=>{ge()});fe.addEventListener("click",()=>{I()});ve.forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("href").substring(1),s=document.getElementById(t);s&&(s.scrollIntoView({behavior:"smooth"}),I())})});const J=window.matchMedia("(min-width: 768px)");function V(e){e.matches&&I()}J.addListener(V);V(J);document.addEventListener("DOMContentLoaded",function(){const e=window.location.pathname,t=document.getElementById("homeButton"),s=document.getElementById("favoritesButton");e.includes("index.html")?(t.classList.add("active"),t.addEventListener("click",k)):e.includes("favorites.html")?(s.classList.add("active"),s.addEventListener("click",k)):(t.classList.add("active"),t.addEventListener("click",k))});const k=e=>{const t=document.getElementById("homeButton"),s=document.getElementById("favoritesButton");e.currentTarget.classList.contains("active")?e.preventDefault():alert("Button clicked!"),e.currentTarget===s&&t.classList.remove("active")};export{ne as P,j as a,ie as c};
//# sourceMappingURL=burger-dc5d94f5.js.map

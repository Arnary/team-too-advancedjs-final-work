var G=(i,e,s)=>{if(!e.has(i))throw TypeError("Cannot "+s)};var t=(i,e,s)=>(G(i,e,"read from private field"),s?s.call(i):e.get(i)),r=(i,e,s)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,s)},a=(i,e,s,n)=>(G(i,e,"write to private field"),n?n.call(i,s):e.set(i,s),s);var c=(i,e,s)=>(G(i,e,"access private method"),s);import{a as de,P as ee,c as he}from"./burger-0c5ec441.js";import"./vendor-833ab380.js";const se=new de;async function ue(i,e,s=12){try{return await se.get("filters",{filter:i,page:e,limit:s})}catch(n){console.log(n)}}async function ge(i,e,s,n,_=10){try{return await se.get("exercises",{[i]:e,...s&&{keyword:s},page:n,limit:_})}catch(oe){console.log(oe)}}var g,x,w,p,f,L,b,J,A,te;class xe{constructor({onClickHandler:e}){r(this,b);r(this,A);r(this,g,void 0);r(this,x,void 0);r(this,w,void 0);r(this,p,void 0);r(this,f,void 0);r(this,L,9);a(this,g,document.getElementById("exercises-categories-block")),a(this,x,document.getElementById("exercises-categories-list")),a(this,w,new ee("#exercises-categories-pagination",async s=>{await c(this,b,J).call(this,s)})),a(this,p,e),t(this,x).addEventListener("click",s=>{const n=s.target.closest(".exercises-categories-item");if(!n)return;const{name:_}=n.dataset;t(this,p).call(this,{name:_})}),window.innerWidth>767&&a(this,L,12)}async load(e){a(this,f,e),await c(this,b,J).call(this,1)}hide(){t(this,g).classList.add("hidden")}show(){t(this,g).classList.remove("hidden")}}g=new WeakMap,x=new WeakMap,w=new WeakMap,p=new WeakMap,f=new WeakMap,L=new WeakMap,b=new WeakSet,J=async function(e){const{totalPages:s,results:n}=await ue(t(this,f),e,t(this,L));t(this,x).innerHTML=n.map(c(this,A,te)).join(""),t(this,w).render(e,s)},A=new WeakSet,te=function({filter:e,name:s,imgURL:n}){return`
        <li class="exercises-categories-item" data-name="${s}" data-filter="${e}">
          <img class="exercises-categories-item-img" src="${n}">
          <div class="exercises-categories-item-wrapper">
            <h2 class="exercises-categories-item-title">${he(s)}</h2>
            <p class="exercises-categories-item-text">${e}</p>
          </div>
        </li>
  `};var o,E,k,N;class ve{constructor({onChangeHandler:e}){r(this,k);r(this,o,void 0);r(this,E,void 0);a(this,o,document.querySelectorAll(".exercises-filter-btn")),a(this,E,e),t(this,o).forEach(s=>{s.addEventListener("click",n=>c(this,k,N).call(this,n.target))})}getCurrent(){return t(this,o).values().find(e=>e.classList.contains("active")).innerText}init(){c(this,k,N).call(this,t(this,o)[0])}}o=new WeakMap,E=new WeakMap,k=new WeakSet,N=function(e){t(this,o).forEach(s=>s.classList.remove("active")),e.classList.add("active"),t(this,E).call(this,{category:e.innerText,filterKey:e.dataset.filterKey})};var h;class me{constructor(){r(this,h,void 0);a(this,h,document.querySelector(".exercises-title-sub"))}show(e){t(this,h).querySelector(".exercises-title-sub-text").innerHTML=e,t(this,h).classList.remove("hidden")}hide(){t(this,h).classList.add("hidden")}}h=new WeakMap;var v,C,S,$,B,F,q,H,O,D,ie;class ye{constructor(){r(this,H);r(this,D);r(this,v,void 0);r(this,C,void 0);r(this,S,void 0);r(this,$,void 0);r(this,B,void 0);r(this,F,void 0);r(this,q,8);a(this,v,document.getElementById("exercises-block")),a(this,C,document.getElementById("exercises-list")),a(this,S,new ee("#exercises-pagination",async e=>{await c(this,H,O).call(this,e)})),window.innerWidth>767&&a(this,q,10)}async load({filter:e,category:s,query:n}){a(this,$,e),a(this,B,s),a(this,F,n),await c(this,H,O).call(this,1)}hide(){t(this,v).classList.add("hidden")}show(){t(this,v).classList.remove("hidden")}}v=new WeakMap,C=new WeakMap,S=new WeakMap,$=new WeakMap,B=new WeakMap,F=new WeakMap,q=new WeakMap,H=new WeakSet,O=async function(e){const{totalPages:s,results:n}=await ge(t(this,$),t(this,B),t(this,F),e,t(this,q));t(this,C).innerHTML=n.map(c(this,D,ie)).join(""),t(this,S).render(e,s)},D=new WeakSet,ie=function(e){var s;return`
      <li class="exercise-card">
        <div class="exercise-card-header">
          <span class="exercise-card-title">Workout</span>
          <span class="exercise-card-rating">${(s=e.rating)==null?void 0:s.toFixed(1)}</span>
          <svg class="exercise-rating-icon">
              <use href="./img/icons.svg#icon-star"></use>
          </svg>
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
            ${we(e.name)}
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
      </li>
  `};function we(i){return i.charAt(0).toUpperCase()+i.slice(1)}var l,T,u,d,P,I,R,W,V,m,M,K,re,y,j,Q,ae,U,ce;class pe{constructor({onFormSubmitHandler:e}){r(this,I);r(this,W);r(this,m);r(this,K);r(this,y);r(this,Q);r(this,U);r(this,l,void 0);r(this,T,void 0);r(this,u,void 0);r(this,d,void 0);r(this,P,void 0);a(this,l,document.querySelector(".exercises-search-form")),a(this,T,t(this,l).querySelector(".exercises-search-btn")),a(this,u,t(this,l).querySelector(".exercises-search-clear-btn")),a(this,d,t(this,l).querySelector(".exercises-search-input")),a(this,P,e),t(this,T).addEventListener("click",s=>{s.preventDefault(),c(this,m,M).call(this)}),t(this,d).addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),c(this,m,M).call(this))}),t(this,u).addEventListener("click",s=>{c(this,K,re).call(this)}),t(this,d).addEventListener("input",s=>{c(this,U,ce).call(this)})}hide(){t(this,l).classList.add("hidden"),c(this,I,R).call(this)}show(){t(this,l).classList.remove("hidden")}}l=new WeakMap,T=new WeakMap,u=new WeakMap,d=new WeakMap,P=new WeakMap,I=new WeakSet,R=function(){t(this,d).value="",c(this,y,j).call(this)},W=new WeakSet,V=function(){return t(this,d).value.trim()},m=new WeakSet,M=function(){const e=c(this,W,V).call(this);t(this,P).call(this,{query:e})},K=new WeakSet,re=function(){c(this,I,R).call(this),c(this,y,j).call(this),c(this,m,M).call(this)},y=new WeakSet,j=function(){t(this,u).classList.add("hidden")},Q=new WeakSet,ae=function(){t(this,u).classList.remove("hidden")},U=new WeakSet,ce=function(){c(this,W,V).call(this)!==""?c(this,Q,ae).call(this):c(this,y,j).call(this)};let Z=null,X=null;const ne=new me,z=new ye,le=new pe({onFormSubmitHandler:async({query:i})=>{await z.load({filter:Z,category:X,query:i})}}),Y=new xe({onClickHandler:async({name:i})=>{X=i,await z.load({filter:Z,category:X}),Y.hide(),z.show(),ne.show(i),le.show()}}),fe=new ve({onChangeHandler:async({category:i,filterKey:e})=>{Z=e,await Y.load(i),ne.hide(),z.hide(),le.hide(),Y.show()}});fe.init();
//# sourceMappingURL=exercises-cf2efa4d.js.map

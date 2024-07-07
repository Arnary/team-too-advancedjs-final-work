var _=(r,e,s)=>{if(!e.has(r))throw TypeError("Cannot "+s)};var t=(r,e,s)=>(_(r,e,"read from private field"),s?s.call(r):e.get(r)),i=(r,e,s)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,s)},n=(r,e,s,c)=>(_(r,e,"write to private field"),c?c.call(r,s):e.set(r,s),s);var a=(r,e,s)=>(_(r,e,"access private method"),s);import{a as ue,P as se,c as ge}from"./burger-dc5d94f5.js";import"./vendor-833ab380.js";const te=new ue;async function xe(r,e,s=12){try{return await te.get("filters",{filter:r,page:e,limit:s})}catch(c){console.log(c)}}async function me(r,e,s,c,U=10){try{return await te.get("exercises",{[r]:e,...s&&{keyword:s},page:c,limit:U})}catch(de){console.log(de)}}var g,x,w,f,L,b,E,G,A,ie;class ve{constructor({onClickHandler:e}){i(this,E);i(this,A);i(this,g,void 0);i(this,x,void 0);i(this,w,void 0);i(this,f,void 0);i(this,L,void 0);i(this,b,9);n(this,g,document.getElementById("exercises-categories-block")),n(this,x,document.getElementById("exercises-categories-list")),n(this,w,new se("#exercises-categories-pagination",async s=>{await a(this,E,G).call(this,s)})),n(this,f,e),t(this,x).addEventListener("click",s=>{const c=s.target.closest(".exercises-categories-item");if(!c)return;const{name:U}=c.dataset;t(this,f).call(this,{name:U})}),window.innerWidth>767&&n(this,b,12)}async load(e){n(this,L,e),await a(this,E,G).call(this,1)}hide(){t(this,g).classList.add("hidden")}show(){t(this,g).classList.remove("hidden")}}g=new WeakMap,x=new WeakMap,w=new WeakMap,f=new WeakMap,L=new WeakMap,b=new WeakMap,E=new WeakSet,G=async function(e){const{totalPages:s,results:c}=await xe(t(this,L),e,t(this,b));t(this,x).innerHTML=c.map(a(this,A,ie)).join(""),t(this,w).render(e,s)},A=new WeakSet,ie=function({filter:e,name:s,imgURL:c}){return`
        <li class="exercises-categories-item" data-name="${s}" data-filter="${e}">
          <img class="exercises-categories-item-img" src="${c}">
          <div class="exercises-categories-item-wrapper">
            <h2 class="exercises-categories-item-title">${ge(s)}</h2>
            <p class="exercises-categories-item-text">${e}</p>
          </div>
        </li>
  `};var o,k,C,J;class ye{constructor({onChangeHandler:e}){i(this,C);i(this,o,void 0);i(this,k,void 0);n(this,o,document.querySelectorAll(".exercises-filter-btn")),n(this,k,e),t(this,o).forEach(s=>{s.addEventListener("click",c=>a(this,C,J).call(this,c.target))})}getCurrent(){return t(this,o).values().find(e=>e.classList.contains("active")).innerText}init(){a(this,C,J).call(this,t(this,o)[0])}}o=new WeakMap,k=new WeakMap,C=new WeakSet,J=function(e){t(this,o).forEach(s=>s.classList.remove("active")),e.classList.add("active"),t(this,k).call(this,{category:e.innerText,filterKey:e.dataset.filterKey})};var d;class pe{constructor(){i(this,d,void 0);n(this,d,document.querySelector(".exercises-title-sub"))}show(e){t(this,d).querySelector(".exercises-title-sub-text").innerHTML=e,t(this,d).classList.remove("hidden")}hide(){t(this,d).classList.add("hidden")}}d=new WeakMap;var m,v,S,$,B,F,H,q,O,D,re,K,ae;class we{constructor(){i(this,q);i(this,D);i(this,K);i(this,m,void 0);i(this,v,void 0);i(this,S,void 0);i(this,$,void 0);i(this,B,void 0);i(this,F,void 0);i(this,H,8);n(this,m,document.getElementById("exercises-block")),n(this,v,document.getElementById("exercises-list")),n(this,S,new se("#exercises-pagination",async e=>{await a(this,q,O).call(this,e)})),window.innerWidth>767&&n(this,H,10)}async load({filter:e,category:s,query:c}){n(this,$,e),n(this,B,s),n(this,F,c),await a(this,q,O).call(this,1)}hide(){t(this,m).classList.add("hidden")}show(){t(this,m).classList.remove("hidden")}}m=new WeakMap,v=new WeakMap,S=new WeakMap,$=new WeakMap,B=new WeakMap,F=new WeakMap,H=new WeakMap,q=new WeakSet,O=async function(e){const{totalPages:s,results:c}=await me(t(this,$),t(this,B),t(this,F),e,t(this,H));c!=null&&c.length?t(this,v).innerHTML=c.map(a(this,D,re)).join(""):t(this,v).innerHTML=a(this,K,ae).call(this),t(this,S).render(e,s)},D=new WeakSet,re=function(e){var s;return`
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
            ${fe(e.name)}
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
  `},K=new WeakSet,ae=function(){return'<span class="empty-message">No matching exercises found. Please try adjusting your search criteria.</span>'};function fe(r){return r.charAt(0).toUpperCase()+r.slice(1)}var l,T,u,h,P,I,V,M,X,y,W,N,ce,p,j,Q,ne,R,le;class Le{constructor({onFormSubmitHandler:e}){i(this,I);i(this,M);i(this,y);i(this,N);i(this,p);i(this,Q);i(this,R);i(this,l,void 0);i(this,T,void 0);i(this,u,void 0);i(this,h,void 0);i(this,P,void 0);n(this,l,document.querySelector(".exercises-search-form")),n(this,T,t(this,l).querySelector(".exercises-search-btn")),n(this,u,t(this,l).querySelector(".exercises-search-clear-btn")),n(this,h,t(this,l).querySelector(".exercises-search-input")),n(this,P,e),t(this,T).addEventListener("click",s=>{s.preventDefault(),a(this,y,W).call(this)}),t(this,h).addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),a(this,y,W).call(this))}),t(this,u).addEventListener("click",s=>{a(this,N,ce).call(this)}),t(this,h).addEventListener("input",s=>{a(this,R,le).call(this)})}hide(){t(this,l).classList.add("hidden"),a(this,I,V).call(this)}show(){t(this,l).classList.remove("hidden")}}l=new WeakMap,T=new WeakMap,u=new WeakMap,h=new WeakMap,P=new WeakMap,I=new WeakSet,V=function(){t(this,h).value="",a(this,p,j).call(this)},M=new WeakSet,X=function(){return t(this,h).value.trim()},y=new WeakSet,W=function(){const e=a(this,M,X).call(this);t(this,P).call(this,{query:e})},N=new WeakSet,ce=function(){a(this,I,V).call(this),a(this,p,j).call(this),a(this,y,W).call(this)},p=new WeakSet,j=function(){t(this,u).classList.add("hidden")},Q=new WeakSet,ne=function(){t(this,u).classList.remove("hidden")},R=new WeakSet,le=function(){a(this,M,X).call(this)!==""?a(this,Q,ne).call(this):a(this,p,j).call(this)};let ee=null,Y=null;const oe=new pe,z=new we,he=new Le({onFormSubmitHandler:async({query:r})=>{await z.load({filter:ee,category:Y,query:r})}}),Z=new ve({onClickHandler:async({name:r})=>{Y=r,await z.load({filter:ee,category:Y}),Z.hide(),z.show(),oe.show(r),he.show()}}),be=new ye({onChangeHandler:async({category:r,filterKey:e})=>{ee=e,await Z.load(r),oe.hide(),z.hide(),he.hide(),Z.show()}});be.init();
//# sourceMappingURL=exercises-1a96e763.js.map

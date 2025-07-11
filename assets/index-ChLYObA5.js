(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};async function i(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function a(){let e=await fetch(`/api/categories`);return await e.json()}const o=`HANGHAE_PART1_CART`,s=()=>{try{let e=localStorage.getItem(o);return e?JSON.parse(e):[]}catch(e){return console.error(`장바구니 데이터 FAIL`,e),[]}},c=e=>{localStorage.setItem(o,JSON.stringify(e))},l=(e,t=1)=>{let n=s(),r=n.find(t=>t.productId===e.productId);if(r)r.quantity+=t;else{let r={...e,quantity:t};n.push(r)}c(n)},u=()=>{let e=s(),t=e.length,n=document.querySelector(`#cart-icon-btn`);if(!n)return;let r=n.querySelector(`span`);t>0?(r||(r=document.createElement(`span`),r.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,n.appendChild(r)),r.textContent=t):r&&r.remove()},d=()=>`
      <main class="max-w-md mx-auto px-4 py-4">
        <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
            </filter>
          </defs>
          
          <!-- 404 Numbers -->
          <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
          
          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
          
          <!-- Message -->
          <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
          
          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
        </svg>
        
        <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
      </div>
      </main>
    `;var f=class{constructor(e){this.routes=routes,this.mainStatus=structuredClone(e),this.appRoot=document.querySelector(`#root`),this.BASE_PATH=`/front_6th_chapter1-1`,this.initEventListeners()}getAppPath(e=window.location.pathname){return e.startsWith(this.BASE_PATH)?e.slice(this.BASE_PATH.length)||`/`:e}getFullPath(e){return this.BASE_PATH+e}initEventListeners(){window.addEventListener(`popstate`,()=>this.render()),document.addEventListener(`DOMContentLoaded`,()=>{document.body.addEventListener(`click`,e=>this.handleLinkClick(e)),this.render()})}handleLinkClick(e){let t=e.target.closest(`[data-link]`);t&&(e.preventDefault(),this.navigate(t.getAttribute(`href`)))}_matchRoute(){let e=window.location.pathname,t=new URLSearchParams(window.location.search),n=d,r={},i=!1;for(let t of this.routes){let a=RegExp(`^${t.path.replace(/:\w+/g,`([^/]+)`)}$`),o=e.match(a);if(o){n=t.component,i=t.isDetail||!1;let e=(t.path.match(/:\w+/g)||[]).map(e=>e.substring(1));e.forEach((e,t)=>{r[e]=o[t+1]});break}}for(let[e,n]of t.entries())r[e]=n;return{component:n,params:r,isDetail:i}}async render(){let{component:e,params:t,isDetail:n}=this._matchRoute();this.appRoot.innerHTML=await e({...this.mainStatus,urlParams:t,isDetail:n}),this.setCurrentState({...this.mainStatus,urlParams:t,isDetail:n}),window.location.pathname===`/`?D():O()}navigate(e){let t=window.location.pathname+window.location.search,n=new URL(e,window.location.origin);if(n.pathname===`/`||t.startsWith(`/?`)){let e=this.getCurrentState().params;for(let t in e)e[t]?n.searchParams.set(t,e[t]):n.searchParams.delete(t)}t!==n.pathname+n.search&&window.history.pushState({},``,n.toString()),this.render()}updateStateAndRender(e){this.mainStatus=structuredClone(e),this.render()}getCurrentState(){return this.mainStatus}setCurrentState(e){this.mainStatus=structuredClone(e)}};const p=e=>new f(e),m=(e,t=200)=>{let n;return(...r)=>{n||=setTimeout(()=>{e(...r),n=null},t)}};let h;const g={success:`
    <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p class="text-sm font-medium">장바구니에 추가되었습니다</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `,info:`
    <div class="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
       </svg>
      </div>
      <p class="text-sm font-medium">선택된 상품들이 삭제되었습니다</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `,error:`
    <div class="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <p class="text-sm font-medium">오류가 발생했습니다.</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `},_=(e,t=`success`)=>{let n=document.querySelector(`#toast-container`);n&&(n.remove(),clearTimeout(h));let r=document.createElement(`div`);if(r.id=`toast-container`,r.className=`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 animate-slide-up`,r.innerHTML=g[t]||g.success,e){let t=r.querySelector(`p`);t&&(t.textContent=e)}document.body.appendChild(r);let i=()=>{r.parentElement&&r.remove(),clearTimeout(h)},a=r.querySelector(`#toast-close-btn`);a&&a.addEventListener(`click`,i),h=setTimeout(i,3e3)};function v(e,t){let n=t.getCurrentState();document.body.addEventListener(`change`,n=>{let r=n.target,i=new URL(window.location.href);if(r.id===`limit-select`)e.params.limit=parseInt(r.value,10),i.searchParams.set(`limit`,e.params.limit);else if(r.id===`sort-select`)e.params.sort=r.value,e.params.limit=20,i.searchParams.set(`sort`,e.params.sort),i.searchParams.set(`limit`,e.params.limit);else return;e.params.page=1,i.searchParams.set(`page`,e.params.page),window.history.replaceState({},``,i.toString()),E(e,t)}),document.body.addEventListener(`keydown`,n=>{if(n.key===`Enter`&&n.target.id===`search-input`){let r=new URL(window.location.href);e.params.search=n.target.value,e.params.page=1,r.searchParams.set(`search`,e.params.search),r.searchParams.set(`page`,e.params.page),window.history.replaceState({},``,r.toString()),E(e,t)}else return}),document.body.addEventListener(`click`,n=>{let r=n.target.closest(`.product-card`),i=n.target.closest(`#add-to-cart-btn`),a=n.target.closest(`#quantity-increase`),o=n.target.closest(`#quantity-decrease`),s=n.target.closest(`.breadcrumb-link`);if(r&&!i){let e=r.dataset.productId;e&&t.navigate(`/product/${e}`);return}let c,d;if(window.location.pathname.includes(`/product`)&&(c=document.body.querySelector(`#quantity-input`),d=parseInt(c.value,10)),a&&c){c.value=parseInt(c.value,10)+1;return}if(o&&c){let e=parseInt(c.value,10);e>1&&(c.value=e-1);return}if(i){let t=i.dataset.productId,n=e.products.find(e=>e.productId===t);n&&(l(n,d),_(`장바구니에 추가되었습니다`),u());return}})}const y=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-CQYRGtz5.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));y().then(k);const b={products:[],total:0,loading:!0,params:{page:1,limit:20,search:``,category1:``,category2:``,sort:`price_asc`},categories:{},url:`/`};let x,S=!0;async function C(){if(!(b.loading||b.products.length>=b.total)){b.loading=!0,b.params.page+=1,x.updateStateAndRender(b);try{let e=await i(b.params);b.products.push(...e.products),b.total=e.pagination.total}catch(e){console.error(`loadMoreProducts`,`추가 상품 로딩 중 오류:`,e)}finally{b.loading=!1,x.updateStateAndRender(b)}}}const w=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-300&&C()},T=m(w,200);async function E(){S&&(b.loading=!0),x.updateStateAndRender(b);try{let[e,t]=await Promise.all([a(),i(b.params)]);b.categories=e,b.products=t.products,b.total=t.pagination.total}catch(e){console.error(`loadProductsAndUpdateUI`,`데이터를 불러오는 중 오류가 발생했습니다:`,e)}finally{b.loading=!1,S=!1,x.updateStateAndRender(b)}}function D(){window.addEventListener(`scroll`,T)}function O(){window.removeEventListener(`scroll`,T)}async function k(){if(window.location.search){let e=window.location.search.replace(`?`,``).split(`&`);for(let t of e){let[e,n]=t.split(`=`);b.params[e]=isNaN(n)?decodeURI(n):Number(n)}}x=p(b),await E(),v(b,x),D()}y().then(k);
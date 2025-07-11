(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};async function i(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function a(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function o(){let e=await fetch(`/api/categories`);return await e.json()}const s=`HANGHAE_PART1_CART`,c=()=>{try{let e=localStorage.getItem(s);return e?JSON.parse(e):[]}catch(e){return console.error(`장바구니 데이터 FAIL`,e),[]}},l=e=>{localStorage.setItem(s,JSON.stringify(e))},u=(e,t=1)=>{let n=c(),r=n.find(t=>t.productId===e.productId);if(r)r.quantity+=t;else{let r={...e,quantity:t};n.push(r)}l(n)},d=()=>{let e=c(),t=e.length,n=document.querySelector(`#cart-icon-btn`);if(!n)return;let r=n.querySelector(`span`);t>0?(r||(r=document.createElement(`span`),r.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,n.appendChild(r)),r.textContent=t):r&&r.remove()},f=e=>{let t=c(),n=t.length,r=`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
              </svg>
              ${n>0?`<span id="cartBadge" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  ${n}
            </span>`:``}
            </button>
          </div>
        </div>
      </div>
    </header>
  `,i=`
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
        </div>
        <div class="flex items-center space-x-2">
          <!-- 장바구니 아이콘 -->
          <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            ${n>0?`<span id="cartBadge" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  ${n}
            </span>`:``}
            
          </button>
        </div>
      </div>
    </div>
  </header>`,a=e&&e.isDetail;return a?`${i}`:`${r}`},p=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `,m=e=>{if(e==null)return`가격 정보 없음`;let t=Number(e);return isNaN(t)?`유효하지 않은 가격`:`${t.toLocaleString()}원`},h=e=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card related-product-card" data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${e.image}"
              alt="${e.title}"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              loading="lazy">
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e.title}
          </h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
          <p class="text-lg font-bold text-gray-900">
            ${m(e.lprice)}
          </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button id="add-to-cart-btn" class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
                hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}">
          장바구니 담기
        </button>
      </div>
    </div>
  `,g=()=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `,_=e=>{let{products:t,total:n,loading:r,params:i}=e,a=i?.limit,o=r&&t.length===0,s=t.map(h).join(``),c=o?g(a):``,l=o?``:`
       <div class="mb-4 text-sm text-gray-600">
         총 <span class="font-medium text-gray-900">${n}개</span>의 상품
       </div>`,u=r&&!o?`
       <div class="text-center py-4">
         <div class="inline-flex items-center">
           <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
             <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
             <path class="opacity-75" fill="currentColor"
                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7 0 014 12H0c0
 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
           </svg>
           <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
         </div>
       </div>`:``;return`
     <div class="mb-6">
       <div>
         <!-- 상품 개수 정보 -->
         ${l}
         <!-- 상품 그리드 -->
         <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
           ${s}
           ${c}
         </div>
         ${u}
       </div>
     </div>
   `},v=[{count:10},{count:20},{count:50},{count:100}],y=[{name:`가격 낮은순`,value:`price_asc`},{name:`가격 높은순`,value:`price_desc`},{name:`이름순`,value:`name_asc`},{name:`이름 역순`,value:`name_desc`}],b=e=>{let t=e.loading||!1,n=e.params||{},r=e.categories||{},i=e.urlParams||{},a=r[i.category1]||[],o=Object.keys(r).map(e=>e)||[],s=t?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:o.map(e=>`
        <button class="category-btn text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-full" data-category1="${e}">
          ${e}
        </button>
      `).join(``),c=``;i.category1&&(c+=`<span class="text-xs text-gray-500">&gt;</span>
          <button data-breadcrumb="category1" data-category1="${i.category1}" class="text-xs hover:text-blue-800 hover:underline">${i.category1}</button>`),i.category2&&(c+=`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${i.category2}</span>`);let l=Object.keys(a).length>0?Object.keys(a).map(e=>`
            <button data-category1="${i.category1}" data-category2="${i.category2}" class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors 
              ${i.category2===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                ${e}
            </button>
        `).join(``):``,u=v.map(e=>`
    <option value="${e.count}" ${n.limit===e.count?`selected`:``}>
      ${e.count}개
    </option>`).join(``),d=y.map(e=>`
    <option value="${e.value}" ${n.sort===e.value?`selected`:``}>
      ${e.name}
    </option>`).join(``);return`
  <!-- 검색창 -->
  <div id="filterComp" class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
    <div class="mb-4">
      <div class="relative">
        <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="${n.search?decodeURIComponent(n.search):``}" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- 필터 옵션 -->
    <div class="space-y-3">
      <!-- 카테고리 필터 -->
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">카테고리:</label>
          <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
          ${Object.keys(i).length>0?`
            ${c}
            `:``}
        </div>
        ${Object.keys(i).length>0?`<div class="space-y-2">
          <div class="flex flex-wrap gap-2">
            ${l}
          </div>
        </div>`:`<div class="flex flex-wrap gap-2">
            ${s}
        </div>`}
      </div>
      <!-- 기존 필터들 -->
      <div class="flex gap-2 items-center justify-between">
        <!-- 페이지당 상품 수 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">개수:</label>
          <select id="limit-select"
                  class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            ${u}
          </select>
        </div>
        <!-- 정렬 -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">정렬:</label>
          <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                        focus:ring-1 focus="ring-blue-500 focus:border-blue-500">
            ${d}
          </select>
        </div>
      </div>
    </div>
  </div>
  `},x=e=>`
    ${f(e)} 
    <main class="max-w-md mx-auto px-4 py-4">
      ${b(e)} 
      ${_(e)}
    </main>
    ${p()}
  `,S=()=>`
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
    `,C=e=>{let{urlParams:t}=e,n=t.id,r=1;if(!n)return S();let o=document.querySelector(`#root`),s=`
    ${f(e)}
    <main class="max-w-4xl mx-auto px-4 py-8">
      <div class="py-20 bg-gray-50 flex items-center justify-center">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p class="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
      </div>
    </main>
    ${p()}
  `;return o.innerHTML=s,(async()=>{try{let t=await a(n);e.params.category1=t.category1,e.params.category2=t.category2;let s=`
        ${f(e)}
        <main class="max-w-md mx-auto px-4 py-4">
          <!-- 브레드크럼 -->
          <nav class="mb-4">
            <div class="flex items-center space-x-2 text-sm text-gray-600">
              <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <a href="/?category1=${encodeURIComponent(t.category1)}" data-link="" class="hover:text-blue-600 transition-colors">
                ${t.category1}
              </a>
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <a href="/?category1=${encodeURIComponent(t.category1)}&category2=${encodeURIComponent(t.category2)}" data-link="" class="hover:text-blue-600 transition-colors">
                ${t.category2}
              </a>
            </div>
          </nav>
          <!-- 상품 상세 정보 -->
          <div class="bg-white rounded-lg shadow-sm mb-6">
            <!-- 상품 이미지 -->
            <div class="p-4">
              <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover product-detail-image">
              </div>
              <!-- 상품 정보 -->
              <div>
                <p class="text-sm text-gray-600 mb-1"></p>
                <h1 class="text-xl font-bold text-gray-900 mb-3">${t.title}</h1>
                <!-- 평점 및 리뷰 -->
                <div class="flex items-center mb-3">
                  <div class="flex items-center">
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <span class="ml-2 text-sm text-gray-600">4.0 (${t.reviewCount}개 리뷰)</span>
                </div>
                <!-- 가격 -->
                <div class="mb-4">
                  <span class="text-2xl font-bold text-blue-600">${m(t.lprice)}</span>
                </div>
                <!-- 재고 -->
                <div class="text-sm text-gray-600 mb-4">
                  재고 ${t.stock}개
                </div>
                <!-- 설명 -->
                <div class="text-sm text-gray-700 leading-relaxed mb-6">
                  ${t.description}
                </div>
              </div>
            </div>
            <!-- 수량 선택 및 액션 -->
            <div class="border-t border-gray-200 p-4">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-medium text-gray-900">수량</span>
                <div class="flex items-center">
                  <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                    rounded-l-md bg-gray-50 hover:bg-gray-100">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                    </svg>
                  </button>
                  <input type="number" id="quantity-input" value="${r}" min="1" max="107" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                    focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                    rounded-r-md bg-gray-50 hover:bg-gray-100">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <!-- 액션 버튼 -->
              <button id="add-to-cart-btn" data-product-id="${n}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                  hover:bg-blue-700 transition-colors font-medium">
                장바구니 담기
              </button>
            </div>
          </div>
          <!-- 상품 목록으로 이동 -->
          <div class="mb-6">
            <a href="/" data-link class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
              hover:bg-gray-200 transition-colors go-to-product-list cursor-pointer">
              상품 목록으로 돌아가기
            </a>
          </div>
          <!-- 관련 상품 -->
          <div id="related-products-section" class="bg-white rounded-lg shadow-sm">
            
          </div>
        </main>
        ${p()}
      `;window.location.pathname===`/product/${n}`&&(o.innerHTML=s);let c=await i(e.params),l=c.products.filter(e=>e.productId!==n).map(h).join(``),u=document.querySelector(`#related-products-section`);u&&(u.innerHTML=`
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid">
              ${l}
            </div>
          </div>
        </div>
    
      `)}catch(e){console.error(`상품 정보를 불러오는 데 실패했습니다.`,e),window.location.pathname===`/product/${n}`&&(o.innerHTML=S())}})(),``},w=[{path:`/`,component:x,isDetail:!1},{path:`/product/:id`,component:C,isDetail:!0}];var T=class{constructor(e){this.routes=w,this.mainStatus=structuredClone(e),this.appRoot=document.querySelector(`#root`),this.BASE_PATH=`/front_6th_chapter1-1/`,this.initEventListeners()}getAppPath(e=window.location.pathname){return e.startsWith(this.BASE_PATH)?e.slice(this.BASE_PATH.length)||`/`:e}getFullPath(e){return this.BASE_PATH+e}initEventListeners(){window.addEventListener(`popstate`,()=>this.render()),document.addEventListener(`DOMContentLoaded`,()=>{document.body.addEventListener(`click`,e=>this.handleLinkClick(e)),this.render()})}handleLinkClick(e){let t=e.target.closest(`[data-link]`);t&&(e.preventDefault(),this.navigate(t.getAttribute(`href`)))}_matchRoute(){let e=window.location.pathname,t=new URLSearchParams(window.location.search),n=S,r={},i=!1;for(let t of this.routes){let a=RegExp(`^${this.BASE_PATH}${t.path.replace(/:\w+/g,`([^/]+)`)}$`),o=e.match(a);if(o){n=t.component,i=t.isDetail||!1;let e=(t.path.match(/:\w+/g)||[]).map(e=>e.substring(1));e.forEach((e,t)=>{r[e]=o[t+1]});break}}for(let[e,n]of t.entries())r[e]=n;return{component:n,params:r,isDetail:i}}async render(){let{component:e,params:t,isDetail:n}=this._matchRoute();this.appRoot.innerHTML=await e({...this.mainStatus,urlParams:t,isDetail:n}),this.setCurrentState({...this.mainStatus,urlParams:t,isDetail:n}),window.location.pathname===`/`?B():V()}navigate(e){let t=window.location.pathname+window.location.search,n=new URL(e,window.location.origin);if(n.pathname===`/`||t.startsWith(`/?`)){let e=this.getCurrentState().params;for(let t in e)e[t]?n.searchParams.set(t,e[t]):n.searchParams.delete(t)}t!==n.pathname+n.search&&window.history.pushState({},``,n.toString()),this.render()}updateStateAndRender(e){this.mainStatus=structuredClone(e),this.render()}getCurrentState(){return this.mainStatus}setCurrentState(e){this.mainStatus=structuredClone(e)}};const E=e=>new T(e),D=(e,t=200)=>{let n;return(...r)=>{n||=setTimeout(()=>{e(...r),n=null},t)}};let O;const k={success:`
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
  `},A=(e,t=`success`)=>{let n=document.querySelector(`#toast-container`);n&&(n.remove(),clearTimeout(O));let r=document.createElement(`div`);if(r.id=`toast-container`,r.className=`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 animate-slide-up`,r.innerHTML=k[t]||k.success,e){let t=r.querySelector(`p`);t&&(t.textContent=e)}document.body.appendChild(r);let i=()=>{r.parentElement&&r.remove(),clearTimeout(O)},a=r.querySelector(`#toast-close-btn`);a&&a.addEventListener(`click`,i),O=setTimeout(i,3e3)};function j(e,t){let n=t.getCurrentState();document.body.addEventListener(`change`,n=>{let r=n.target,i=new URL(window.location.href);if(r.id===`limit-select`)e.params.limit=parseInt(r.value,10),i.searchParams.set(`limit`,e.params.limit);else if(r.id===`sort-select`)e.params.sort=r.value,e.params.limit=20,i.searchParams.set(`sort`,e.params.sort),i.searchParams.set(`limit`,e.params.limit);else return;e.params.page=1,i.searchParams.set(`page`,e.params.page),window.history.replaceState({},``,i.toString()),z(e,t)}),document.body.addEventListener(`keydown`,n=>{if(n.key===`Enter`&&n.target.id===`search-input`){let r=new URL(window.location.href);e.params.search=n.target.value,e.params.page=1,r.searchParams.set(`search`,e.params.search),r.searchParams.set(`page`,e.params.page),window.history.replaceState({},``,r.toString()),z(e,t)}else return}),document.body.addEventListener(`click`,n=>{let r=n.target.closest(`.product-card`),i=n.target.closest(`#add-to-cart-btn`),a=n.target.closest(`#quantity-increase`),o=n.target.closest(`#quantity-decrease`),s=n.target.closest(`.breadcrumb-link`);if(r&&!i){let e=r.dataset.productId;e&&t.navigate(`/product/${e}`);return}let c,l;if(window.location.pathname.includes(`/product`)&&(c=document.body.querySelector(`#quantity-input`),l=parseInt(c.value,10)),a&&c){c.value=parseInt(c.value,10)+1;return}if(o&&c){let e=parseInt(c.value,10);e>1&&(c.value=e-1);return}if(i){let t=i.dataset.productId,n=e.products.find(e=>e.productId===t);n&&(u(n,l),A(`장바구니에 추가되었습니다`),d());return}})}const M=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-CQYRGtz5.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));M().then(H);const N={products:[],total:0,loading:!0,params:{page:1,limit:20,search:``,category1:``,category2:``,sort:`price_asc`},categories:{},url:`/`};let P,F=!0;async function I(){if(!(N.loading||N.products.length>=N.total)){N.loading=!0,N.params.page+=1,P.updateStateAndRender(N);try{let e=await i(N.params);N.products.push(...e.products),N.total=e.pagination.total}catch(e){console.error(`loadMoreProducts`,`추가 상품 로딩 중 오류:`,e)}finally{N.loading=!1,P.updateStateAndRender(N)}}}const L=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-300&&I()},R=D(L,200);async function z(){F&&(N.loading=!0),P.updateStateAndRender(N);try{let[e,t]=await Promise.all([o(),i(N.params)]);N.categories=e,N.products=t.products,N.total=t.pagination.total}catch(e){console.error(`loadProductsAndUpdateUI`,`데이터를 불러오는 중 오류가 발생했습니다:`,e)}finally{N.loading=!1,F=!1,P.updateStateAndRender(N)}}function B(){window.addEventListener(`scroll`,R)}function V(){window.removeEventListener(`scroll`,R)}async function H(){if(window.location.search){let e=window.location.search.replace(`?`,``).split(`&`);for(let t of e){let[e,n]=t.split(`=`);N.params[e]=isNaN(n)?decodeURI(n):Number(n)}}P=E(N),await z(),j(N,P),B()}M().then(H);
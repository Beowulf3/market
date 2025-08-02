import{r as e,c as y,t as f,o as h,a as m}from"./assets/storage-CUCbR3F-.js";import{a}from"./assets/vendor-N5iQpiFS.js";async function w(){try{return(await a("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function p(t=1){try{return(await a.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(o){throw console.log(o.message),new Error("Something went wrong!")}}async function L(t,o=1){try{return(await a.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(o-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}async function $(t){try{const s=(await a.get(`https://dummyjson.com/products/${t}`)).data;return console.log("Loading product:",t),s}catch(o){console.log(o)}}async function b(t,o=1){try{return(await a.get(`https://dummyjson.com/products/search?q=${t}&limit=12&skip=${(o-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}function v(t){const o=["All",...t].map(s=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${s}</button>
    </li>
 `).join("");e.categotiesList.insertAdjacentHTML("beforeend",o)}function d(t){const o=t.map(({id:s,title:c,thumbnail:r,brand:n,category:l,price:u})=>`
    <li class="products__item" data-id="${s}">
    <img class="products__image" src="${r}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${n}</span></p>
    <p class="products__category">Category:${l}</p>
    <p class="products__price">Price:${u}$</p>
 </li>
    `).join("");e.productsList.insertAdjacentHTML("beforeend",o)}function i(){e.divNotFound.classList.remove("not-found--visible"),e.productsList.innerHTML=""}async function P(t){if(t.target.classList.contains("categories__btn")){const o=t.target;e.categotiesList.querySelectorAll(".categories__btn").forEach(n=>{n.classList.remove("categories__btn--active")}),o.classList.add("categories__btn--active");const c=o.textContent,r=c==="All"?await p():await L(c);i(),r.products.length!==0?d(r.products):e.divNotFound.classList.add("not-found--visible")}}async function k(t){t.preventDefault();const o=e.input.value.trim().toLowerCase();if(!o){console.log("empty query!");return}const s=await b(o);s.products.length?(i(),console.log(s.products.length),d(s.products)):(i(),e.divNotFound.classList.add("not-found--visible"))}async function E(){e.input.value="",i();const t=await p();d(t.products)}function j(t){const{images:o,description:s,title:c,tags:r="Not specified",shippingInformation:n="Not specified",returnPolicy:l="Not specified",price:u}=t,g=`
<img class="modal-product__img" src="${o[0]}" alt="${c}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${c}</p>
        <ul class="modal-product__tags">
    ${r.map(_=>`<li class="modal-product__tag">${_}</li>`).join("")}</ul>
        <p class="modal-product__description">${s}</p>
        <p class="modal-product__shipping-information">Shipping:${n}</p>
        <p class="modal-product__return-policy">Return Policy:${l}</p>
        <p class="modal-product__price">Price: ${u}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;console.log("Product received:",t),document.querySelector(".modal-product").innerHTML=g}async function B(){v(await w());const t=await p();d(t.products)}y();f();B();e.categotiesList.addEventListener("click",P);e.productsList.addEventListener("click",async t=>{const o=t.target.closest(".products__item");if(!o)return;const s=o.dataset.id;h();try{const c=await $(s);j(c)}catch(c){console.log(c)}});e.closeModalBtn.addEventListener("click",m);e.modalProduct.addEventListener("click",t=>{e.modalProductContent.contains(t.target)||m()});e.form.addEventListener("submit",k);e.clearInputBtn.addEventListener("click",E);
//# sourceMappingURL=index.js.map

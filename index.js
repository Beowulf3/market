import{r as c,c as _,t as y,o as f,a as l}from"./assets/storage-CPUMMhQ4.js";import{a as n}from"./assets/vendor-N5iQpiFS.js";async function h(){try{return(await n("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function p(t=1){try{return(await n.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(o){throw console.log(o.message),new Error("Something went wrong!")}}async function L(t,o=1){try{return(await n.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(o-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}async function $(t){try{const s=(await n.get(`https://dummyjson.com/products/${t}`)).data;return console.log("Loading product:",t),s}catch(o){console.log(o)}}function w(t){const o=["All",...t].map(s=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${s}</button>
    </li>
 `).join("");c.categotiesList.insertAdjacentHTML("beforeend",o)}function u(t){const o=t.map(({id:s,title:e,thumbnail:r,brand:a,category:i,price:d})=>`
    <li class="products__item" data-id="${s}">
    <img class="products__image" src="${r}" alt="${e}"/>
    <p class="products__title">${e}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${a}</span></p>
    <p class="products__category">Category:${i}</p>
    <p class="products__price">Price:${d}$</p>
 </li>
    `).join("");c.productsList.insertAdjacentHTML("beforeend",o)}function b(){c.divNotFound.classList.remove("not-found--visible"),c.productsList.innerHTML=""}async function P(t){if(t.target.classList.contains("categories__btn")){const o=t.target;c.categotiesList.querySelectorAll(".categories__btn").forEach(a=>{a.classList.remove("categories__btn--active")}),o.classList.add("categories__btn--active");const e=o.textContent,r=e==="All"?await p():await L(e);b(),r.products.length!==0?u(r.products):c.divNotFound.classList.add("not-found--visible")}}function v(t){const{images:o,description:s,title:e,tags:r="Not specified",shippingInformation:a="Not specified",returnPolicy:i="Not specified",price:d}=t,g=`
<img class="modal-product__img" src="${o[0]}" alt="${e}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${e}</p>
        <ul class="modal-product__tags">
    ${r.map(m=>`<li class="modal-product__tag">${m}</li>`).join("")}</ul>
        <p class="modal-product__description">${s}</p>
        <p class="modal-product__shipping-information">Shipping:${a}</p>
        <p class="modal-product__return-policy">Return Policy:${i}</p>
        <p class="modal-product__price">Price: ${d}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;console.log("Product received:",t),document.querySelector(".modal-product").innerHTML=g}async function k(){w(await h());const t=await p();u(t.products)}_();y();k();c.categotiesList.addEventListener("click",P);c.productsList.addEventListener("click",async t=>{const o=t.target.closest(".products__item");if(!o)return;const s=o.dataset.id;f();try{const e=await $(s);v(e)}catch(e){console.log(e)}});c.closeModalBtn.addEventListener("click",l);c.modalProduct.addEventListener("click",t=>{c.modalProductContent.contains(t.target)||l()});
//# sourceMappingURL=index.js.map

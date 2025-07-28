import{r as o,c as g,t as p}from"./assets/storage-BrK9zkDr.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";async function m(){try{return(await c("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function i(t=1){try{return(await c.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}async function _(t,s=1){try{return(await c.get(`https://dummyjson.com/products/category/${t}?limit=12&skip=${(s-1)*12}`)).data}catch(e){throw console.log(e.message),new Error("Something went wrong!")}}function y(t){const s=["All",...t].map(e=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${e}</button>
    </li>
 `).join("");o.categotiesList.insertAdjacentHTML("beforeend",s)}function d(t){const s=t.map(({id:e,title:r,thumbnail:a,brand:n,category:l,price:u})=>`
    <li class="products__item" data-id="${e}">
    <img class="products__image" src="${a}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${n}</span></p>
    <p class="products__category">Category:${l}</p>
    <p class="products__price">Price:${u}$</p>
 </li>
    `).join("");o.productsList.insertAdjacentHTML("beforeend",s)}function h(){o.divNotFound.classList.remove("not-found--visible"),o.productsList.innerHTML=""}async function w(t){if(t.target.classList.contains("categories__btn")){const s=t.target;o.categotiesList.querySelectorAll(".categories__btn").forEach(n=>{n.classList.remove("categories__btn--active")}),s.classList.add("categories__btn--active");const r=s.textContent,a=r==="All"?await i():await _(r);h(),a.products.length!==0?d(a.products):o.divNotFound.classList.add("not-found--visible")}}async function f(){y(await m());const t=await i();d(t.products)}g();p();f();o.categotiesList.addEventListener("click",w);
//# sourceMappingURL=index.js.map

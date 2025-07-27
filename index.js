import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";async function d(){try{return(await e("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}async function u(t=1){try{return(await e.get(`https://dummyjson.com/products?limit=12&skip=${(t-1)*12}`)).data}catch(s){throw console.log(s.message),new Error("Something went wrong!")}}const c={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function l(t){const s=["All",...t].map(o=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${o}</button>
    </li>
 `).join("");c.categotiesList.insertAdjacentHTML("beforeend",s)}function m(t){const s=t.map(({id:o,title:r,thumbnail:a,brand:n,category:i,price:p})=>`
    <li class="products__item" data-id="${o}">
    <img class="products__image" src="${a}" alt="${r}"/>
    <p class="products__title">${r}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${n}</span></p>
    <p class="products__category">Category:${i}</p>
    <p class="products__price">Price:${p}$</p>
 </li>
    `).join("");c.productsList.insertAdjacentHTML("beforeend",s)}async function g(){l(await d());const t=await u();m(t.products)}g();
//# sourceMappingURL=index.js.map

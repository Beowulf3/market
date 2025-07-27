import"./assets/styles-JE8YjOlG.js";import{a as r}from"./assets/vendor-N5iQpiFS.js";async function s(){try{return(await r("https://dummyjson.com/products/category-list")).data}catch(t){throw console.log(t.message),new Error("Something went wrong!")}}const a={categotiesList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function n(t){const e=["All",...t].map(o=>`
    <li class="categories__item">
        <button class="categories__btn" type="button">${o}</button>
    </li>
 `).join("");a.categotiesList.insertAdjacentHTML("beforeend",e)}async function c(){n(await s())}c();
//# sourceMappingURL=index.js.map

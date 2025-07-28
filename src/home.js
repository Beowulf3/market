//Логіка сторінки Home
import { handleClickCategories } from './js/handlers';
import { getCategoriesList, getProductsList } from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import { themeToggle } from './js/helpers.js';
import { changeTheme } from './js/storage.js';






async function homePage() {
  renderCategories(await getCategoriesList());
  const response = await getProductsList();
  renderProducts(response.products);
}
changeTheme();
themeToggle();
homePage();

refs.categotiesList.addEventListener("click", handleClickCategories);
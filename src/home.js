//Логіка сторінки Home
import { handleClickCategories } from './js/handlers';
import { getCategoriesList, getProductsList } from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';

async function homePage() {
  renderCategories(await getCategoriesList());
  const response = await getProductsList();
  renderProducts(response.products);
}
homePage();

refs.categotiesList.addEventListener("click", handleClickCategories);

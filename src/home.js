//Логіка сторінки Home
import { getCategoriesList, getProductsList } from './js/products-api';
import { renderCategories, renderProducts } from './js/render-function';

async function homePage() {
  renderCategories(await getCategoriesList());
  const response = await getProductsList();
  renderProducts(response.products);
}
homePage();

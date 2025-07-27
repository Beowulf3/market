//Логіка сторінки Home
import { getCategoriesList } from './js/products-api';
import { renderCategories } from './js/render-function';

async function homePage() {
  renderCategories(await getCategoriesList());
}
homePage();

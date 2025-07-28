//Логіка сторінки Home
import { handleClickCategories } from './js/handlers';
import { getCategoriesList, getProductsList, loadIdProduct } from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import { themeToggle, openModalProduct, closeModalProduct } from './js/helpers.js';
import { changeTheme } from './js/storage.js';
import { modalProductRender } from './js/modal.js';






async function homePage() {
  renderCategories(await getCategoriesList());
  const response = await getProductsList();
  renderProducts(response.products);

}
changeTheme();
themeToggle();
homePage();

refs.categotiesList.addEventListener("click", handleClickCategories);
refs.productsList.addEventListener('click', async (event) => {
  const item = event.target.closest('.products__item');
  if (!item) return;
  const selectProduct = item.dataset.id;
  openModalProduct();
  try {
    const product = await loadIdProduct(selectProduct);
    modalProductRender(product);
  }
  catch (error) {
    console.log(error);

  }
});
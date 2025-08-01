//Логіка сторінки Home
import { handleClickCategories } from './js/handlers';
import {
  getCategoriesList,
  getProductsList,
  loadIdProduct,
} from './js/products-api';
import refs from './js/refs';
import { renderCategories, renderProducts } from './js/render-function';
import {
  themeToggle,
  openModalProduct,
  closeModalProduct,
  checkLsCart,
  updateCartCounter,
} from './js/helpers.js';
import {
  changeTheme,
  initCart,
  removeFromCart,
  saveToCart,
} from './js/storage.js';
import { modalProductRender } from './js/modal.js';

async function homePage() {
  renderCategories(await getCategoriesList());
  const response = await getProductsList();
  renderProducts(response.products);
}
changeTheme();
themeToggle();
homePage();
initCart();

refs.categotiesList.addEventListener('click', handleClickCategories);
refs.productsList.addEventListener('click', async event => {
  const item = event.target.closest('.products__item');
  if (!item) return;
  const selectProduct = item.dataset.id;
  openModalProduct();
  const addToCartBtn = document.querySelector('.modal-product__btn--cart');
  addToCartBtn.textContent = checkLsCart(selectProduct);
  try {
    const product = await loadIdProduct(selectProduct);
    modalProductRender(product);
  } catch (error) {
    console.log(error);
  }
  addToCartBtn.replaceWith(addToCartBtn.cloneNode(true));
  const newAddToCartBtn = document.querySelector('.modal-product__btn--cart');
  newAddToCartBtn.addEventListener('click', () => {
    if (newAddToCartBtn.textContent === 'Add to cart') {
      saveToCart(selectProduct);
      newAddToCartBtn.textContent = 'Remove from cart';
    } else {
      console.log(selectProduct);

      removeFromCart(selectProduct);
      newAddToCartBtn.textContent = 'Add to cart';
    }
  });
});
refs.closeModalBtn.addEventListener('click', closeModalProduct);
refs.modalProduct.addEventListener('click', event => {
  if (!refs.modalProductContent.contains(event.target)) {
    closeModalProduct();
  }
});

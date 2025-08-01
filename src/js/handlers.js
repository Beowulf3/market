import { getProductsListByCategory, getProductsList } from './products-api';
import refs from './refs';
import { clearList, renderProducts } from './render-function';

export async function handleClickCategories(event) {
  if (event.target.classList.contains('categories__btn')) {
    const currentBtn = event.target;
    const allBtn = refs.categotiesList.querySelectorAll('.categories__btn');
    allBtn.forEach(item => {
      item.classList.remove('categories__btn--active');
    });
    currentBtn.classList.add('categories__btn--active');
    const category = currentBtn.textContent;
    const products =
      category === 'All'
        ? await getProductsList()
        : await getProductsListByCategory(category);
    clearList();
    if (products.products.length !== 0) {
      renderProducts(products.products);
    } else {
      refs.divNotFound.classList.add('not-found--visible');
    }
  }
}

export function handleClickCart(event) {
  if (event.target.classList.contains('modal-product__btn--cart')) {
    const currentBtn = event.target;
    if (currentBtn.textContent === 'Add to cart') {
    }
  }
}

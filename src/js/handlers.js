import {
  getProductsListByCategory,
  getProductsList,
  getProductsByName,
} from './products-api';
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

export async function searchProduct(event) {
  event.preventDefault();
  const userQuery = refs.input.value.trim().toLowerCase();
  if (!userQuery) {
    console.log('empty query!');
    return;
  }
  const data = await getProductsByName(userQuery);
  if (data.products.length) {
    clearList();
    console.log(data.products.length);
    renderProducts(data.products);
  } else {
    clearList();
    refs.divNotFound.classList.add('not-found--visible');
  }
}

export async function clearInput() {
  refs.input.value = '';
  clearList();
  const data = await getProductsList();
  renderProducts(data.products);
}

import constants from './constants';
import refs from './refs';
import { updateCartCounter } from './helpers';

//перевірка стану теми в локальному сховищі
export function changeTheme() {
  window.addEventListener(constants.LS_THEME_KEY, () => {
    const saveTheme = localStorage.getItem('site-theme');
    const html = document.documentElement;
    html.dataset.theme = saveTheme || 'light';
  });
}

export function getCartProducts() {
  const data = JSON.parse(localStorage.getItem(constants.LS_CART_KEY));
  return data;
}

export function initCart() {
  const data = getCartProducts() ?? [];
  localStorage.setItem(constants.LS_CART_KEY, JSON.stringify(data));
  updateCartCounter();
}

export function saveToCart(productId) {
  const cartProductsList = getCartProducts();
  cartProductsList.push(productId);
  localStorage.setItem(constants.LS_CART_KEY, JSON.stringify(cartProductsList));
  updateCartCounter();
}

export function removeFromCart(productId) {
  const cartList = JSON.parse(localStorage.getItem(constants.LS_CART_KEY));
  console.log(cartList);
  const filteredList = cartList.filter(id => id !== productId);
  console.log(filteredList);

  localStorage.setItem(constants.LS_CART_KEY, JSON.stringify(filteredList));
  updateCartCounter();
}

import refs from './refs';
import { loadIdProduct } from './products-api.js';

// зміна теми 
export function themeToggle() {
    refs.themeToggleBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.dataset.theme = newTheme;
        localStorage.setItem('site-theme', newTheme);
    });
}

//модальне вікно продукту-->

//вікриття
export function openModalProduct() {
    refs.modalProduct.classList.add('modal--is-open');
}
//закриття
export function closeModalProduct() {
    refs.modalProduct.classList.remove('modal--is-open');
}


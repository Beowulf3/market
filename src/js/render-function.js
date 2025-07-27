import refs from './refs';

export function renderCategories(data) {
  const markup = ['All', ...data]
    .map(item => {
      return `
    <li class="categories__item">
        <button class="categories__btn" type="button">${item}</button>
    </li>
 `;
    })
    .join('');

  refs.categotiesList.insertAdjacentHTML('beforeend', markup);
}

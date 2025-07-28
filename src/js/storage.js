

//перевірка стану теми в локальному сховищі
export function changeTheme() {
    window.addEventListener('DOMContentLoaded', () => {
        const saveTheme = localStorage.getItem('site-theme');
        const html = document.documentElement;
        html.dataset.theme = saveTheme || 'light';
    });
}


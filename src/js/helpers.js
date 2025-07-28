import refs from './refs';


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



const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}

const themeButton = document.querySelector('.theme-toggle');

if (themeButton) {
  const savedTheme = localStorage.getItem('mat-theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light');

    localStorage.setItem(
      'mat-theme',
      document.body.classList.contains('light') ? 'light' : 'dark'
    );
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

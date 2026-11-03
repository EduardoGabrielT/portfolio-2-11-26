// ==================== MENU MOBILE ====================
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

// Abre o menu mobile
btnMenu.addEventListener('click', () => {
    menu.classList.add('menu-abrir');
});

// Fecha o menu ao clicar em qualquer link dentro dele
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-abrir');
    });
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('menu-abrir');
});

// Fecha o menu ao apertar ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('menu-abrir')) {
        menu.classList.remove('menu-abrir');
    }
});
// ==================== MENU MOBILE TESTE ====================
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');

    console.log("Script do menu carregado!"); // Verifica se o JS está a rodar

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            console.log("Botão hambúrguer clicado!"); // Verifica se o clique está a ser detetado
            
            if (menu) {
                menu.classList.toggle('menu-abrir');
            }
            if (overlay) {
                overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
            }
        });
    } else {
        console.error("Elemento #btn-menu não foi encontrado no HTML!");
    }
});

// ==================== MENU MOBILE ====================
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay-menu');
    const btnFechar = document.querySelector('.btn-fechar'); // Seleciona o botão do X

    if (btnMenu && menu) {
        // Abre o menu mobile
        btnMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.add('menu-abrir');
            if (overlay) overlay.style.display = 'block';
        });

        // Fecha o menu ao clicar no botão X (fechar)
        if (btnFechar) {
            btnFechar.addEventListener('click', () => {
                menu.classList.remove('menu-abrir');
                if (overlay) overlay.style.display = 'none';
            });
        }

        // Fecha o menu ao clicar em qualquer link dentro dele
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('menu-abrir');
                if (overlay) overlay.style.display = 'none';
            });
        });
    }

    // Fecha o menu ao clicar no overlay (fundo escuro)
    if (overlay && menu) {
        overlay.addEventListener('click', () => {
            menu.classList.remove('menu-abrir');
            overlay.style.display = 'none';
        });
    }

    // Fecha o menu ao apertar a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menu && menu.classList.contains('menu-abrir')) {
            menu.classList.remove('menu-abrir');
            if (overlay) overlay.style.display = 'none';
        }
    });
});
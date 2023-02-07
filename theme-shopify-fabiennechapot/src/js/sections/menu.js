export const initMenu = () => {
    const menu = document.querySelector('.menu');
    if (menu) {

        const submenus = menu.querySelectorAll('.menu__second');
        const sub_submenus = menu.querySelectorAll('.menu__third');
        let activeLevel = {
            1: null,
            2: null
        };
        const updateSubmenu = (submenu, level) => {
            submenu.closest('li').querySelector('p').addEventListener('click', () => {
                submenu.classList.add('open');
                menu.dataset.level = level;
                activeLevel[level] = submenu
            });
            submenu.querySelector('p').addEventListener('click', () => {
                submenu.classList.remove('open');
                menu.dataset.level = `${level - 1}`;
                activeLevel[level] = null
            })
        };

        submenus.forEach(submenu => updateSubmenu(submenu, 1));
        sub_submenus.forEach(submenu => updateSubmenu(submenu, 2));

        document.querySelectorAll('.header__menu').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                menu.classList.add('open');
                document.body.style.overflowY = 'hidden'
            })
        });

        menu.querySelector('.menu__close').addEventListener('click', e => {
            e.preventDefault();
            menu.classList.remove('open');
            document.body.style.overflowY = 'auto'
        });

        menu.querySelector('.menu__back').addEventListener('click', e => {
            e.preventDefault();
            let i = activeLevel[2] ? 2 : 1;
            activeLevel[i].classList.remove('open');
            activeLevel[i] = null;
            menu.dataset.level = `${i - 1}`
        });

        menu.addEventListener('click', e => {
            if (e.target.classList.contains('menu')) {
                e.preventDefault();
                menu.classList.remove('open');
                document.body.style.overflowY = 'auto'
            }
        })
    }
};

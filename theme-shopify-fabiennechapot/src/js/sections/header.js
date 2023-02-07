import { initStickyHeader } from "../common/sticky-header";

export const initHeader = () => {

    initStickyHeader();

    const headerParent = document.querySelector('#shopify-section-header');
    const header = document.querySelector('.header');
    let maxSize = 0;

    if (header && window.innerWidth > 1024) {
        let isHover = false;

        header.querySelectorAll('.header__submenu').forEach(el => {
            if (el.scrollHeight > maxSize) maxSize = el.scrollHeight;
        });

        header.querySelectorAll('.header__link').forEach(link => {
            link.addEventListener('mouseenter', () => {
                isHover = true;
                header.classList.add('is-hover');
                headerParent.classList.add('display-bg');
                header.style.maxHeight = `${145 + maxSize}px`
            });
            link.addEventListener('mouseleave', () => {
                isHover = false;
                setTimeout(() => {
                    if (!isHover) {
                        header.classList.remove('is-hover');
                        headerParent.classList.remove('display-bg');
                        header.style.maxHeight = '145px'
                    }
                }, 200)
            })
        })
    }
    if (header && window.innerWidth < 1024) {

        const nav = document.querySelector(".header");
        const filter = document.querySelector(".collection__sticky");

        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                if (lastScrollY < 0 || lastScrollY == 0) {
                    nav.classList.remove("nav--hidden");
                    if (filter) { filter.classList.remove("nav--hidden"); }
                } else {
                    nav.classList.add("nav--hidden");
                    if (filter) { filter.classList.add("nav--hidden"); }
                }
            } else {
                nav.classList.remove("nav--hidden");
                if (filter) { filter.classList.remove("nav--hidden"); }
            }
            lastScrollY = window.scrollY;
        });

    }
}
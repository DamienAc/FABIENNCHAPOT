import LazyLoading from "../common/lazy-loading";
import Flickity from "flickity";

export const initProductLightbox = (parent = document) => {
    const lightbox = document.querySelector('.lightbox');
    const container = document.querySelector('.lightbox__images');

    if(lightbox) {

        let slider;
        const images = [...parent.querySelectorAll('.product__main-slider__slide img')];
        const open = () => {
            lightbox.classList.add('visible');
            document.body.style.overflowY = 'hidden';
        }

        container.innerHTML = '';

        images.forEach((img, i) => {
            const el = document.createElement('div');
            el.className = 'lightbox__image';
            el.dataset.zoom = "1";
            el.innerHTML += `<div class="lazy-img-2">
                <img src="${img.dataset.src}" data-src="${img.dataset.src}" alt="Dada sport seconde main" width="1" height="1">
            </div>`;
            container.append(el);

            el.addEventListener('click', e => {
                e.preventDefault();
                if(window.innerWidth < 1024){
                    let zoom = Number(el.dataset.zoom) + 1;
                    el.dataset.zoom = zoom > 2 ? "1" : `${zoom}`;
                    let clickPositionX = 0;
                    let clickPositionY = 0;
                    if(zoom === 2){
                        clickPositionX = e.clientX * 2.25;
                        clickPositionY = e.clientY * 1.25;
                        el.scrollTo(clickPositionX, clickPositionY);
                    } else {
                        el.scrollTo(0, 0);
                    }
                } else {
                    let zoom = Number(el.dataset.zoom) + 1;
                    el.dataset.zoom = zoom > 3 ? "1" : `${zoom}`;
                }
            })


            img.addEventListener('click', () => {
                open();
                if (slider) slider.select(i, false, true)
            })
        });

        slider = new Flickity(container, {
            draggable: false,
            contain: true,
            prevNextButtons: true,
            wrapAround: true,
            pageDots: true
        });

        new LazyLoading(container);

        lightbox.querySelector('.js-close').addEventListener('click', e => {
            e.preventDefault();
            lightbox.classList.remove('visible');
            document.body.style.overflowY = 'auto';
        });
    }
};

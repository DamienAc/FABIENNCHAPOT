import Flickity from "flickity";

export const initProductCardSlider = card => {
    let isMobile = window.innerWidth <= 1024;
    const el = card ? card.querySelector('.product-card__slider') : null;
    let slider;

    if (el && !card.classList.contains('is-slider-init')) {

        card.classList.add('is-slider-init');

        window.addEventListener('resize', () => isMobile = window.innerWidth <= 1024);

        const isInCarousel = !!(card.closest('.carousel') || card.closest('.recently-viewed') || card.closest('.cart-suggestion') || card.closest('.collection__products'));

        const initButtons = () => {
            const next = el.querySelector('.flickity-button.next');
            const previous = el.querySelector('.flickity-button.previous');
            if (next) {
                next.addEventListener('click', e => e.preventDefault())
            }
            if (previous) {
                previous.addEventListener('click', e => e.preventDefault())
            }
        }

        setTimeout(() => {
            slider = new Flickity(el, {
                prevNextButtons: true,
                pageDots: false,
                contain: true,
                draggable: !isInCarousel,
                wrapAround: true,
                on: {
                    ready: () => initButtons()
                }
            });
        }, 100)

        if (isInCarousel) {
            el.addEventListener('mouseenter', () => {
                if (!isMobile) {
                    if (slider.slides.length > 2) {
                        slider.select(2, false, true)
                    } else {
                        slider.select(1, false, true)
                        console.log('malfooy')
                    }
                }
            });
            el.addEventListener('mouseleave', () => {
                if (!isMobile) slider.select(0, false, true)
            });
        }
    }
}
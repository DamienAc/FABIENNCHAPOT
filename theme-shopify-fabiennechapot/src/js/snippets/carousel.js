import Flickity from 'flickity';

export const initCarousel = (container = document) => {
    container.querySelectorAll('.carousel__products').forEach(el => {
        if (el.querySelectorAll('.carousel__product').length) {
            const isHomeHighlight = !!el.closest('.home-highlight');
            new Flickity(el, {
                prevNextButtons: !isHomeHighlight,
                pageDots: isHomeHighlight,
                cellAlign: 'left',
                freeScroll: !isHomeHighlight,
                contain: true,
                on: {
                    ready: () => window.dispatchEvent(new CustomEvent('resize'))
                }
            });
        }
    })
}
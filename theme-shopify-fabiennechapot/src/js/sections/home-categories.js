import Flickity from "flickity";

export const initHomeCategories = () => {
    const el = document.querySelector('.home-categories__slider');
    if (el) {
        new Flickity(el, {
            pageDots: true,
            prevNextButtons: false,
            contain: true,
            wrapAround: false,
            cellAlign: 'left',
            on: {
                ready: () => window.dispatchEvent(new CustomEvent('resize'))
            }
        })
    }
}
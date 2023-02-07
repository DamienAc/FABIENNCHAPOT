import Flickity from "flickity";

export const initHomeBanner = () => {
    const el = document.querySelector('.home-banner__slider');
    if (el) {
        new Flickity(el, {
            pageDots: true,
            prevNextButtons: false,
            contain: true,
            wrapAround: true,
            on: {
                ready: () => window.dispatchEvent(new CustomEvent('resize'))
            }
        })
    }
}
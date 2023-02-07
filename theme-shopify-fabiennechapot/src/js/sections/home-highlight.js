import Flickity from "flickity";

export const initHomeHighlight = () => {
    const section = document.querySelector('.home-highlight');
    if (section) {

        let isMobile = window.innerWidth <= 1024;
        let pauses = 0;
        const list = [...document.querySelectorAll('.home-highlight__products')];
        const sliderEl = document.querySelector('.home-highlight__left');
        const slider = new Flickity(sliderEl, {
            pageDots: false,
            prevNextButtons: true,
            wrapAround: true,
            autoPlay: 3000
        });

        window.addEventListener('resize', () => isMobile = window.innerWidth <= 1024);

        slider.on('change', (i) => {
            list.forEach((item, y) => {
                if (i === y) item.classList.add('is-visible');
                else item.classList.remove('is-visible');
            })
        });

        const right = section.querySelector('.home-highlight__right');
        right.addEventListener('mouseenter', () => {
            if (!isMobile) {
                slider.pausePlayer();
                pauses += 1;
            }
        });
        right.addEventListener('mouseleave', () => {
            if (!isMobile) slider.unpausePlayer();
        });
        
        right.addEventListener('click', () => {
            if (isMobile) {
                slider.pausePlayer();
                let i = pauses + 1;
                pauses = i;
                setTimeout(() => {
                    if (pauses === i) slider.unpausePlayer();
                }, 4000)
            }
        })
    }
}
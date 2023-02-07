import Flickity from "flickity";

export const initCartSuggestion = () => {
    document.querySelectorAll('.cart-suggestion__products').forEach(el => {
        new Flickity(el, {
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            cellAlign: 'left',
            on: {
                ready: () => {
                    window.dispatchEvent(new CustomEvent('resize'))
                }
            }
        })
    })

    const marginNewsletter = document.querySelector('.newsletter')
    const BtnSuggestion = document.getElementById('is-suggestion-cta')
    const BtnRecently = document.getElementById('is-recently-cta')
    const ContainerSuggestion = document.querySelector('.cart-suggestion')

    const recently_viewed = document.querySelector('.recently-viewed')

    if (window.innerWidth < 1024) { marginNewsletter.classList.add('initview'); }


    if (ContainerSuggestion) {
        ContainerSuggestion.classList.add('is-active');
    }

    if (BtnSuggestion) {
        BtnSuggestion.addEventListener('click', () => {
            ContainerSuggestion.classList.add('is-active');
            BtnSuggestion.classList.add('is-active');
            BtnRecently.classList.remove('is-active');
        })
    }

    if (BtnSuggestion) {
        BtnRecently.addEventListener('click', () => {
            ContainerSuggestion.classList.remove('is-active');
            BtnSuggestion.classList.remove('is-active');
            BtnRecently.classList.add('is-active');

            if (window.innerWidth < 1024) { marginNewsletter.classList.remove('initview'); }
            recently_viewed.style.display = 'block'
        })
    }
}
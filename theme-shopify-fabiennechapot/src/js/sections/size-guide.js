export const initSizeGuide = () => {
    const popin = document.querySelector('.size-guide');
    const btn = document.querySelector('.js-open-size');

    if (popin && btn) {
        const contents = popin.querySelectorAll('.size-guide__content');
        const links = popin.querySelectorAll('.size-guide__btn');

        btn.addEventListener('click', e => {
            e.preventDefault();
            popin.classList.add('open')
        });

        popin.querySelector('.js-close').addEventListener('click', e => {
            e.preventDefault();
            popin.classList.remove('open')
        });

        links.forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                links.forEach(l => l.classList.remove('open'));
                link.classList.add('open');
                contents.forEach(c => c.classList.remove('open'));
                popin.querySelector(link.dataset.content).classList.add('open')
            })
        });

        document.querySelectorAll('.size-guide__content').forEach(container => {
            const btns = container.querySelectorAll('button');
            const contents = container.querySelectorAll('.size-guide__text');
            btns.forEach((b, i) => {
                b.addEventListener('click', e => {
                    e.preventDefault();
                    btns.forEach(a => a.classList.remove('open'));
                    contents.forEach(c => c.style.display = 'none');
                    contents[i].style.display = 'block';
                    b.classList.add('open');
                })
            })
        })
    }
};

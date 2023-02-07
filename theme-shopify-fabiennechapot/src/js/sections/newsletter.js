export const initNewsletter = () => {

    const section = document.querySelector('.newsletter');
    if (section) {
        const form = section.querySelector('form');
        const input = form.querySelector('input[type="email"]');
        const error = section.querySelector('.newsletter__error');
        const success = section.querySelector('.newsletter__success');

        input.addEventListener('keydown', () => {
            error.style.display = 'none';
            success.style.display = 'none';
        });

        form.addEventListener('submit', e => {
            e.preventDefault();
            const email = input.value;
            form.classList.add('loading');
            error.style.display = 'none';
            success.style.display = 'none';
            fetch(`//dadasport-app.faume.tech/marketing_subscription/subscribe/${email}`)
                .then(res => res.json())
                .then(() => {
                    success.style.display = 'block';
                    form.style.display = 'none';
                    document.querySelector('.newsletter__infos').style.display = 'none';
                })
                .catch(() => error.style.display = 'block')
                .finally(() => form.classList.remove('loading'));
        })
    }
};

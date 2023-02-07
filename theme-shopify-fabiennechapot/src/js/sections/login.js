export const initLogin = () => {

    if (document.body.classList.contains('template-login')) {

        const login = document.querySelector('.login__col--login');
        const password = document.querySelector('.login__col--password');

        login.querySelector('.js-password-forget').addEventListener('click', e => {
            e.preventDefault();
            login.style.display = 'none';
            password.style.display = 'block';
            window.location.hash = '#recover'
        });

        password.querySelector('.js-back').addEventListener('click', e => {
            e.preventDefault();
            password.style.display = 'none';
            login.style.display = 'block';
            window.location.hash = ''
        });

        if (window.location.hash === '#recover' || document.querySelector('.login__col--password .form__success')) {
            login.style.display = 'none';
            password.style.display = 'block';
        }
    }
}
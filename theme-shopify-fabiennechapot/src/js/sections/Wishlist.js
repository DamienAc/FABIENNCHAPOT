/*
    ATTENTION
    La wishlist ne fonctionne que si les produits ont des ref
 */

export default class Wishlist {

    constructor() {
        this.style = document.createElement('style');
        this.style.type = 'text/css';
        document.documentElement.appendChild(this.style);
        this.products = window.localStorage.getItem('wishlist') ? JSON.parse(window.localStorage.getItem('wishlist')) : [];
        this.token = window.theme.customer ? window.theme.customer.token : null;

        this.popin = document.createElement('div');

        this.init();
    }

    init() {

        this.addCss();

        this.getProducts();

        this.initPopin();

        document.addEventListener('click', e => {
            const btn = e.target.closest('button');
            const id = btn ? btn.getAttribute('data-add-favorite') : null;
            if (id) {

                e.preventDefault();
                
                if (!btn.getAttribute('disabled')) {

                    if (this.token) {

                        btn.setAttribute('disabled', 'disabled');

                        let product = this.products.find(p => p.reference === btn.dataset.ref);
                        if (product) {
                            this.products = this.products.filter(p => p.reference !== btn.dataset.ref);
                            this.setStorage();
                            this.addCss();
                            fetch(`https://dadasport-app.faume.tech/api/v1/membership/${this.token}/wishlist/${product.id}`, {method: 'DELETE'})
                                .then(() => {
                                    this.displayMessage(false)
                                })
                                .finally(() => btn.removeAttribute('disabled'))

                        } else {
                            btn.classList.add('is-active');
                            fetch(`https://dadasport-app.faume.tech/api/v1/membership/${this.token}/wishlist`, {
                                method: 'POST',
                                body: JSON.stringify({
                                    shopifyId: id
                                })
                            })
                                .then(res => res.json())
                                .then(data => {
                                    btn.classList.remove('is-active');
                                    this.products = data;
                                    this.setStorage();
                                    this.addCss();
                                    this.displayMessage(true)
                                })
                                .finally(() => btn.removeAttribute('disabled'))
                        }

                    } else {
                        this.popin.classList.add('is-open')
                    }   
                }

            }
        })

    }

    initPopin() {
        this.popin.className = 'wishlist-popin';
        this.popin.innerHTML = `
            <div class="wishlist-popin__inner">
                <p>Merci d'insérer votre email pour vous identifier ou créer un compte</p>
                <a href="/account/login" class="btn"><span>Me connecter</span></a>
                <button class="js-close"><img src="//cdn.shopify.com/s/files/1/0550/2635/2364/t/2/assets/icon-close.svg?v=89715003652383916561642612529" alt="Fermer la popin" width="1" height="1" loading="lazy"/></button>
            </div>
        `;
        document.body.appendChild(this.popin);
        this.popin.addEventListener('click', e => {
            if (!e.target.closest('.wishlist-popin__inner') || e.target.closest('.js-close')) {
                e.preventDefault();
                this.popin.classList.remove('is-open');
            }
        });
    }

    getProducts() {
        if (this.token) {
            fetch(`https://dadasport-app.faume.tech/api/v1/membership/${this.token}/wishlist`)
                .then(res => res.json())
                .then(products => {
                    this.products = products;
                    this.setStorage();
                    this.addCss();
                    document.body.classList.add('wishlist-ready')
                })
        } else {
            document.body.classList.add('wishlist-ready')
        }
    }

    setStorage() {
        window.localStorage.setItem('wishlist', JSON.stringify(this.products));
    }

    addCss() {
        if (this.products && this.products.length) {
            let styles = '';
            this.products.forEach(p => {
                if (p && p.reference) styles += ` button[data-add-favorite][data-ref="${p.reference}"] svg { stroke: var(--wishlist-color); fill: var(--wishlist-color); }`
            });
            this.style.textContent = styles;
        }
    }

    displayMessage(isAdd = true) {
        const msg = document.querySelector('p');
        msg.className = `wishlist-alert ${isAdd ? '' : 'is-delete'}`;
        msg.innerText = isAdd ? 'Article ajouté à votre wishlist' : 'Article supprimé de votre wishlist';
        document.body.appendChild(msg);
        msg.addEventListener('click', e => {
            e.preventDefault();
            msg.remove();
        })
        setTimeout(() => {
            if (msg) msg.remove()
        }, 5000)
    }
}

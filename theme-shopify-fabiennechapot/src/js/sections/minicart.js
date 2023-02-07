const headers = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
};

const deleteProduct = id => new Promise(resolve => {
    let data = { updates: {} };
    data.updates[id] = 0;
    fetch('/cart/update.js', {
        ...headers,
        body: JSON.stringify(data)
    }).finally(() => resolve())
});

const getProduct = item => {
    let el = document.createElement('div');
    el.className = 'cart-item';
    let state = item.options_with_values.find(e => e.name === 'État');
    let options = state ? `<li>${state.name}: ${state.value}</li>` : '';
    item.options_with_values.filter(e => e.name !== 'État').forEach(e => options += `<li>${e.name}: ${e.value}</li>`);
    el.innerHTML = `
        <div class="lazy-img">
            <img class="load" src="${item.image}" alt="${item.title}" width="1" height="1"/>
        </div>
       <a href="/products/${item.handle}" class="cart-item__infos">
            <h3>${item.product_title}</h3>
            <ul>${options}</ul>
            <p class="cart-item__price">${(item.price / 100).toFixed(2)} €</p>
       </a>
       <a class="js-delete" data-id="${item.variant_id}" href="${item.url_to_remove}">
            <svg viewBox="0 0 438 500"><use xlink:href="#svg-delete"></use></svg> 
        </a>
    `;
    return el;
};

export const initMinicart = () => {
    const minicart = document.querySelector('.minicart');
    if (minicart) {

        const productsContainer = minicart.querySelector('.minicart__items');
        const subTotal = minicart.querySelector('.js-cart-subtotal');
        const total = minicart.querySelector('.js-cart-total');
        const count = minicart.querySelector('.js-cart-count');
        const headerCount = document.querySelector('.header .js-cart-count');

        const updateCart = () => new Promise(resolve => {
            fetch('/cart.js')
                .then(res => res.json())
                .then(cart => {
                    minicart.dataset.count = cart.items ? cart.items.length : 0;
                    if (!cart.items || !cart.items.length) {
                        count.innerText = '';
                        headerCount.innerHTML = '';
                    } else {
                        minicart.classList.add('is-open');
                        subTotal.innerText = `${(cart.total_price / 100).toFixed(2)} €`;
                        total.innerText = `${((cart.total_price + 490) / 100).toFixed(2)} €`;
                        count.innerText = `${cart.items.length} Article${cart.items.length > 1 ? 's' : ''}`;
                        headerCount.innerHTML = `<span>${cart.items.length}</span>`;
                    }
                })
                .finally(() => resolve())
        });

        const initDeleteProduct = el => {
            const btn = el.querySelector('.js-delete');
            btn.addEventListener('click', async e => {
                e.preventDefault();
                await deleteProduct(btn.dataset.id);
                el.remove();
                await updateCart();
            })
        };

        const addToCart = id => {
            let data = { items: [{ id: id, quantity: 1 }] };
            fetch('/cart/add.js', {
                ...headers,
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    const item = data.items ? data.items[0] : null;
                    if (item) {
                        let product = getProduct(item);
                        productsContainer.prepend(product);
                        product.scrollIntoView();
                        initDeleteProduct(product);
                    }
                })
                .finally(async () => {
                    await updateCart();
                    minicart.classList.add('is-open');
                    document.body.style.overflow = "hidden"
                })
        };

        window.addEventListener('add-product', e => {
            addToCart(e.detail)
        });

        minicart.addEventListener('click', e => {
            if (!e.target.closest('.minicart__inner')) {
                e.preventDefault();
                minicart.classList.remove('is-open')
                document.body.style.overflow = "scroll"

            }
        })

        minicart.querySelector('.js-close').addEventListener('click', e => {
            e.preventDefault();
            minicart.classList.remove('is-open');
            document.body.style.overflow = "scroll"
        });

        productsContainer.querySelectorAll('.cart-item').forEach(el => initDeleteProduct(el));

        document.querySelectorAll('.js-product-variant').forEach(input => {
            input.closest('form').addEventListener('submit', e => {
                e.preventDefault();
                addToCart(input.value)
            })
        });

        document.querySelectorAll('.js-open-minicart').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                minicart.classList.add('is-open');
                document.body.style.overflow = "hidden"
            })
        })
    }
};

export default class Search {

    constructor() {
        this.popin = document.querySelector('.search-popin');
        if (this.popin) {
            this.requestIndex = 0;
            this.results = {};
            this.input = this.popin.querySelector('input[name="q"]');
            this.root = window.Shopify.routes.root;
            this.form = this.popin.querySelector('form');
            this.el = {
                empty: this.popin.querySelector('.search-popin__empty'),
                suggestions: this.popin.querySelector('.search-popin__suggestions'),
                products: this.popin.querySelector('.search-popin__products'),
                pages: this.popin.querySelector('.search-popin__pages'),
                collections: this.popin.querySelector('.search-popin__collections'),
            };
            this.ul = {
                pages: this.el.pages.querySelector('ul'),
                products: this.el.products.querySelector('ul'),
                collections: this.el.collections.querySelector('ul'),
            }
            this.init()
        }
    }

    init() {
        this.initOpenClose();

        this.input.addEventListener('keydown', () => {
            setTimeout(() => {
                this.displaySearch(this.input.value)
            }, 100)
        });

        document.querySelectorAll('.js-search-submit').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                this.form.submit();
            })
        })
    }

    displaySearch(term) {
        this.requestIndex += 1;
        const i = this.requestIndex;
        this.search(term)
            .then(results => {
                if (this.requestIndex === i) {
                    this.initResults();
                    const collections = results.collections;
                    const products = results.products.filter(p => p.price > 0 && !p.title.includes('review') && !p.title.includes('ready'));
                    const pages = results.pages;
                    if (!collections.length && !products.length && !pages.length) {
                        this.displayNoResult()
                    } else {
                        this.displayCollections(collections);
                        this.displayProducts(products);
                        this.displayPages(pages);
                    }
                }
            })
            .catch(() => {
                if (this.requestIndex === i) this.displayNoResult()
            })
    }

    search(q) {
        return new Promise((resolve, reject) => {
            const value = q ? q.toLowerCase().trim() : null;
            if (value === '' || !value) reject();
            if (this.results[value]) resolve(this.results[value]);
            else {
                fetch(`${this.root}search/suggest.json?q=${value}&resources[type]=product,page,collection&resources[options][unavailable_products]=hide&resources[options][fields]=title,tag,product_type,variants.title`)
                    .then(res => res.json())
                    .then(res => res.resources)
                    .then(resources => resources.results)
                    .then(results => {
                        this.results[value] = results;
                        resolve(results)
                    })
                    .catch(() => {
                        reject()
                    })
            }
        })
    }

    initResults() {
        ['products', 'collections', 'pages', 'empty', 'suggestions', 'bottom'].forEach(name => {
            if (this.el[name]) this.el[name].style.display = 'none';
        });
        ["pages", "products", "collections"].forEach(name => {
            if(this.ul[name]) this.ul[name].innerHTML = ''
        })
    }

    displayProducts(products) {
        if (products && products.length) {
            this.el.products.style.display = 'block';
            this.ul.products.innerHTML = '';
            let list = [];
            products.forEach(p => {
                if (!list.includes(p.type)) list.push(p)
            });
            list.forEach(product => {
                this.ul.products.innerHTML += `
                    <li>
                        <div class="product-card">
                             <a href="${product.url}" class="product-card__images">
                                <div class="product-card__image visible">
                                    <div class="lazy-img"><img class="load" alt="Dada sport preloved" src="${product.featured_image.url}"></div>
                                </div>
                            </a>
                            <div class="product-card__infos">
                                <a href="${product.url}">
                                    <h3>${product.title}</h3>
                                    <span class="product-card__price">${product.price} €</span>
                                </a>
                            </div>
                        </div>
                    </li>                    
                `
            })
        }
    }

    displayCollections(collections) {
        if (collections && collections.length) {
            this.el.collections.style.display = 'block';
            this.ul.collections.innerHTML = '';
            collections.forEach(col => {
                this.ul.collections.innerHTML += `<li><a href="${col.url}">${col.title}</a></li>`
            })
        }
    }

    displayPages(pages) {
        if (pages && pages.length) {
            this.el.pages.style.display = 'block';
            pages.forEach(page => {
                this.ul.pages.innerHTML += `<li><a href="${page.url}">${page.title}</a></li>`
            })
        }
    }

    displayNoResult() {
        ['empty', 'suggestions'].forEach(name => {
            this.el[name].style.display = 'block';
        });
        ['products', 'collections', 'pages'].forEach(name => {
            this.el[name].style.display = 'none';
        });
        if (this.input.value.trim() === '') this.el.empty.style.display = 'none'
    }

    initOpenClose() {
        document.querySelectorAll('.js-open-search').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                this.popin.classList.add('is-visible');
                this.input.focus();
                document.body.style.overflowY = 'hidden';
                document.body.classList.add('is-search-open');
            })
        });
        this.popin.querySelector('.js-close').addEventListener('click', e => {
            e.preventDefault();
            this.popin.classList.remove('is-visible');
            document.body.style.overflowY = 'auto';
            document.body.classList.remove('is-search-open');
        });
        this.popin.addEventListener('click', e => {
            if (e.target.classList.contains('search-popin')) {
                e.preventDefault();
                this.popin.classList.remove('is-visible');
                document.body.style.overflowY = 'auto';
                document.body.classList.remove('is-search-open');
            }
        })
    }
}
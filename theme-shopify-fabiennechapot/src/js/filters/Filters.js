import Pagination from "./Pagination";
import { getProductsJson } from "./get-products-json";
import LazyLoading from "../common/lazy-loading";
import { getProductCard } from "./get-product-card";
import { updateProductCard } from "../snippets/update-product-card";
import { initProductCardSlider } from "../snippets/update-product-slider";
import { initProductQuickView } from "../sections/product-quick-view";

export default class Filters {

    constructor() {
        this.page = document.querySelector('.collection');
        this.productsContainer = this.page ? this.page.querySelector('.collection__products') : null;
        this.filterPopin = this.page ? this.page.querySelector('.filters') : null;

        if (this.productsContainer && this.filterPopin) {
            this.filtersContainer = document.querySelector('.collection__filters');
            this.countContainer = document.querySelector('.js-filter-count-container');
            this.countBtn = this.filterPopin.querySelector('.js-see-articles');
            this.orderPopin = this.page.querySelector('.order');
            this.header = document.querySelector('.header');
            this.search = document.querySelector('.search');
            this.resume = {
                el: this.page.querySelector('.filters__resume'),
                count: this.page.querySelector('.js-filter-count'),
                list: this.page.querySelector('.filters__resume ul')
            };
            this.inputs = {};
            this.selected = {};
            this.order = 'default';
            this.productsJSON = null;
            this.tags = [];
            this.products = [];
            this.pagination = new Pagination();

            if (window.location.search === '') {
                this.productsContainer.style.display = 'flex';
                document.querySelector('.collection__placeholder').style.display = 'none';
                const existingProducts = [...this.productsContainer.querySelectorAll('.collection__product')];
                existingProducts.forEach(p => {
                    if (existingProducts.find(e => e.dataset.ref === p.dataset.ref && e.dataset.color === p.dataset.color && p.dataset.productId !== e.dataset.productId)) {
                        p.remove()
                    }
                });
                updateProductCard(this.productsContainer);
            }

            this.init();

        } else if (this.productsContainer) {
            this.hidePlaceholder();
            updateProductCard();
            this.initViewToggle();
            initProductQuickView();
        }
    }

    async init() {

        // Get products
        this.productsJSON = await getProductsJson();
        this.productsJSON.forEach((product, i) => {
            this.tags.push(...product.tags);
            this.products.push({
                order: i,
                el: null,
                visible: true,
                ...product
            })
        });

        this.filtersContainer.classList.remove('is-loading');

        this.initFilters();
        this.detectUrlParam();
        this.initOpenCloseFilter();
        this.initOpenCloseOrder();
        this.pagination.init(this.products.length);
        this.hidePlaceholder();
        this.initViewToggle();


        if (window.location.search !== '') {
            this.sortProducts();
        } else {
            if (this.resume.count) this.resume.count.innerText = `(${this.products.length})`;
            this.pagination.updateVisibility(this.products.length);
            const totalDisplay = this.productsContainer.querySelectorAll('.collection__product').length;
            if (totalDisplay < this.pagination.productsPerPage) {
                for (let i = totalDisplay; i < this.pagination.productsPerPage; i++) {
                    const product = this.products[i];
                    if (product) {
                        product.el = getProductCard(product);
                        new LazyLoading(product.el);
                        this.productsContainer.append(product.el);
                    }
                }
            }
        }

        this.pagination.container.addEventListener('update-page', () => {
            this.displayProducts()
        });

        window.onpopstate = () => {
            this.detectUrlParam();
            this.sortProducts();
        };
        document.querySelectorAll('.filters__subtitle').forEach(subtitle => subtitle.addEventListener('click', () => subtitle.classList.toggle('open')))
        this.getRangePrices();
    }

    initViewToggle() {
        const btns = document.querySelectorAll('.collection__switch button');
        btns.forEach((btn, i) => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                this.page.dataset.view = i;
                btns.forEach(b => b.classList.remove('is-active'));
                btn.classList.add('is-active');
                window.dispatchEvent(new CustomEvent('resize'))
            })
        })
    }

    hidePlaceholder() {
        this.productsContainer.style.display = 'flex';
        document.querySelector('.collection__placeholder').remove();
        if (this.countContainer) this.countContainer.style.display = 'inline';
    }

    initFilters() {
        const sortBy = ['Bon état', 'Très bon état', 'Excellent état', 'Etat neuf', 'XXXS', '3XS', 'XXS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXL', 'XXXL', '3XL', 'XXXXL', '4XL', 'T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'TU', 'Unique', 'Taille Unique'];
        const filtersEl = document.querySelectorAll('.filters__item');
        const filtersByTitle = {};

        // Remove duplicated tags
        this.tags = [...new Set(this.tags.filter(t => !t.includes('Reference_') && !t.includes('MISMATCH') && t.includes('_')))];
        this.tags.forEach(tag => {
            const title = `${tag.split('_')[0]}_`;
            const value = tag.replace(title, '');
            filtersByTitle[title] = filtersByTitle[title] ? [...filtersByTitle[title], value] : [value];
        });

        filtersEl.forEach(el => {
            const title = el.dataset.title;
            const isColor = title === 'Couleur_';
            const ul = el.querySelector('ul');
            if (filtersByTitle[title]) {
                filtersByTitle[title].forEach(value => {
                    const tag = `${title}${value}`;
                    if (!el.querySelector(`input[value="${tag}"]`)) {
                        ul.innerHTML += `<li data-value="${value}">
                            <label class="${isColor ? 'is-color' : ''}">
                                <input type="checkbox" value="${tag}" name="${title.replace('_', '')}">
                                ${isColor ? `<span data-color="${value}">${value}</span>` : `<span>${value.replace('Etat', 'État')}</span>`}
                            </label>
                        </li>`
                    }
                })
            }
            let list = [...el.querySelectorAll('li')];
            list = list.sort((a, b) => sortBy.indexOf(a.dataset.value) - sortBy.indexOf(b.dataset.value) || a.dataset.value - b.dataset.value);
            ul.innerHTML = '';
            list.forEach(li => ul.append(li));
        });
        this.page.querySelectorAll('.filters__item').forEach(el => {
            this.inputs[el.dataset.title] = [...el.querySelectorAll('input')];
            this.selected[el.dataset.title] = []
        });
        Object.keys(this.inputs).forEach(key => {
            this.initInputs(key)
        });
    }

    initOpenCloseOrder() {
        const btn = document.querySelector('.js-sort-open > span');
        const close = () => {
            this.orderPopin.classList.remove('open');
            this.header.classList.remove('hide');
            if (this.search) this.search.classList.remove('hide');
        }
        const open = () => {
            this.orderPopin.classList.add('open');
            this.header.classList.add('hide');
            if (this.search) this.search.classList.add('hide');
            this.filterPopin.classList.remove('open');
        }
        document.querySelector('.js-sort-open').addEventListener('click', e => {
            e.preventDefault();
            if (this.orderPopin.classList.contains('open')) {
                close()
            } else {
                open()
            }
        });
        [...this.orderPopin.querySelectorAll('input'), ...this.filterPopin.querySelectorAll('.filters__order input')].forEach(input => {
            if (this.order === input.value) {
                input.checked = 'checked';
                btn.innerText = input.closest('label').querySelector('span').innerText;
            }
            input.addEventListener('click', () => {
                btn.innerText = input.closest('label').querySelector('span').innerText;
                if (input.value !== this.order) {
                    this.order = input.value;
                    this.sortProducts();
                    close()
                }
            })
        });
        document.body.addEventListener('click', e => {
            if (!e.target.closest('.order') && !e.target.closest('.js-sort-open') && this.orderPopin.classList.contains('open')) {
                close()
            }
        })
        document.querySelectorAll('.collection .order span').forEach(orderElement => {
            orderElement.addEventListener('click', e => {
                if (this.orderPopin.classList.contains('open')) {
                    close()
                }
            })
        })
    }

    initOpenCloseFilter() {
        const buttons = {
            remove: this.page.querySelector('.js-filter-remove'),
            close: this.page.querySelectorAll('.js-filter-close'),
            open: this.page.querySelector('.js-filter-open'),
            see: this.filterPopin.querySelector('.js-see-articles')
        };
        const open = () => {
            this.filterPopin.classList.add('open');
            buttons.open.classList.add('open');
            this.header.classList.add('hide');
            if (this.search) this.search.classList.add('hide');
            document.body.style.overflowY = 'hidden';
        }
        const close = () => {
            this.filterPopin.classList.remove('open');
            buttons.open.classList.remove('open');
            this.header.classList.remove('hide');
            if (this.search) this.search.classList.remove('hide');
            document.body.style.overflowY = 'auto';
        }
        if (buttons.open && buttons.close) {
            buttons.open.addEventListener('click', e => {
                e.preventDefault();
                if (this.filterPopin.classList.contains('open')) {
                    close();
                } else {
                    open();
                    this.orderPopin.classList.remove('open');
                }
            });
            buttons.close.forEach(btn => {
                btn.addEventListener('click', e => {
                    e.preventDefault();
                    close()
                })
            });
        }
        if (buttons.remove) {
            buttons.remove.addEventListener('click', e => {
                e.preventDefault();
                [...document.querySelectorAll('.filters__list input')].filter(i => i.checked).forEach(input => {
                    input.checked = false;
                    input.dispatchEvent(new CustomEvent('change'));
                })
            })
        }
        this.filterPopin.addEventListener('click', e => {
            if (e.target.classList.contains('filters')) {
                e.preventDefault();
                close()
            }
        })
    }

    detectUrlParam() {
        const url = new URL(window.location.href);
        let params = url.searchParams.get('filtre');
        params = params ? params.split('+') : null;
        Object.keys(this.inputs).forEach(key => {
            this.inputs[key].forEach(input => {
                if (!params || (params && !params.includes(input.value))) {
                    input.checked = false;
                    this.selected[key] = this.selected[key].filter(t => t !== input.value);
                } else if (params && params.includes(input.value)) {
                    input.checked = true;
                    this.selected[key].push(input.value);
                }
            })
        })
        const order = url.searchParams.get('ordre');
        if (order && ['default', 'nouveautes', 'croissant', 'decroissant'].includes(order)) {
            this.order = order
        }
        this.updateProducts();
    }

    initInputs(key) {
        this.inputs[key].forEach(input => {
            if (input.classList.contains('not-hide')) {
                input.addEventListener('change', () => {
                    this.updateFromPrice();
                })
            } else {
                input.addEventListener('change', () => {
                    if (input.checked) {
                        this.selected[key].push(input.value)
                    } else {
                        this.selected[key] = this.selected[key].filter(t => t !== input.value)
                    }
                    this.updateProducts();
                })
            }
        })
    }

    updateInputsVisibility(type, allowed, names) {
        this.inputs[type].forEach(input => {
            let tag = input.value;
            if (allowed.includes(tag) || input.checked) {
                input.closest('label').classList.remove('hide')
            } else {
                let products = this.products.filter(p => p.tags.includes(tag));
                names.filter(n => n !== type).forEach(name => {
                    if (this.selected[name] && this.selected[name].length) {
                        products = products.filter(p => {
                            let hasTag = false;
                            p.tags.forEach(t => {
                                if (t.includes(name) && this.selected[name].includes(t)) hasTag = true
                            });
                            return hasTag;
                        });
                    }
                });
                if (products.length) {
                    input.closest('label').classList.remove('hide');
                } else {
                    input.closest('label').classList.add('hide')
                }
            }
        });
    }

    showInputs(type) {
        this.inputs[type].forEach(i => i.closest('label').classList.remove('hide'));
    }

    sortProducts() {
        switch (this.order) {
            case 'croissant':
                this.products.sort((a, b) => a.price - b.price);
                break;
            case 'decroissant':
                this.products.sort((a, b) => b.price - a.price || b.date - a.date);
                break;
            case 'nouveautes':
                this.products.sort((a, b) => b.date - a.date);
                break;
            default:
                this.products.sort((a, b) => a.order - b.order)
        }
        this.addTagButton();
        let url = new URL(window.location.href);
        let tags = [];
        Object.keys(this.inputs).forEach(key => {
            tags = [...tags, ...this.selected[key]]
        });
        if (tags.length) {
            this.resume.el.classList.remove('hide');
            url.searchParams.set('filtre', tags.join('+'))
        } else {
            this.resume.el.classList.add('hide');
            url.searchParams.delete('filtre')
        }
        if (this.order === 'default') {
            url.searchParams.delete('ordre')
        } else {
            url.searchParams.set('ordre', this.order)
        }
        window.history.pushState({}, window.location.host, url);
        this.pagination.updateVisibility(this.products.filter(p => p.visible === true).length);
        this.displayProducts();
        // if (window.scrollY < 100) window.scrollTo(0, 70);
    }

    getRangePrices() {
        const allPrice = [];

        this.products.forEach(product => {
            if (product.visible != false) {
                allPrice.push(product.price)
            }
        })

        const maxPrice = Math.max(...allPrice);
        const minPrice = Math.min(...allPrice);
        const fromInput = document.getElementById('fromInput');
        const toInput = document.getElementById('toInput');
        const fromSlider = document.getElementById('fromSlider');
        const toSlider = document.getElementById('toSlider');


        if (maxPrice && minPrice && fromInput && toInput && fromSlider && toSlider) {
            fromInput.min = minPrice
            fromInput.max = maxPrice
            toInput.min = minPrice
            toInput.max = maxPrice
            fromSlider.min = minPrice
            fromSlider.max = maxPrice
            toSlider.min = minPrice
            toSlider.max = maxPrice
            fromInput.value = minPrice
            fromSlider.value = minPrice
            toInput.value = maxPrice
            toSlider.value = maxPrice
        }

        this.initRangePrice()
    }

    initRangePrice() {
        function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
            if (fromSlider && fromInput && toInput && controlSlider) {
                const [from, to] = getParsed(fromInput, toInput);
                fillSlider(fromInput, toInput, '#C6C6C6', '#000', controlSlider);
                if (from > to) {
                    fromSlider.value = to;
                    fromInput.value = to;
                } else {
                    fromSlider.value = from;
                }
            }
        }

        function controlToInput(toSlider, fromInput, toInput, controlSlider) {
            if (toSlider && fromInput && toInput && controlSlider) {
                const [from, to] = getParsed(fromInput, toInput);
                fillSlider(fromInput, toInput, '#C6C6C6', '#000', controlSlider);
                setToggleAccessible(toInput);
                if (from <= to) {
                    toSlider.value = to;
                    toInput.value = to;
                } else {
                    toInput.value = from;
                }
            }
        }

        function controlFromSlider(fromSlider, toSlider, fromInput) {
            if (fromSlider && toSlider && fromInput) {
                const [from, to] = getParsed(fromSlider, toSlider);
                fillSlider(fromSlider, toSlider, '#C6C6C6', '#000', toSlider);
                if (from > to) {
                    fromSlider.value = to;
                    fromInput.value = to;
                } else {
                    fromInput.value = from;
                }
            }
        }

        function controlToSlider(fromSlider, toSlider, toInput) {
            if (fromSlider && toSlider && toInput) {
                const [from, to] = getParsed(fromSlider, toSlider);
                fillSlider(fromSlider, toSlider, '#C6C6C6', '#000', toSlider);
                setToggleAccessible(toSlider);
                if (from <= to) {
                    toSlider.value = to;
                    toInput.value = to;
                } else {
                    toInput.value = from;
                    toSlider.value = from;
                }
            }
        }

        function getParsed(currentFrom, currentTo) {
            if (currentFrom && currentTo) {
                const from = parseInt(currentFrom.value, 10);
                const to = parseInt(currentTo.value, 10);
                return [from, to];
            }
        }

        function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
            if (from && to && sliderColor && rangeColor && controlSlider) {
                const rangeDistance = to.max - to.min;
                const fromPosition = from.value - to.min;
                const toPosition = to.value - to.min;
                controlSlider.style.background = `linear-gradient(
                to right,
                ${sliderColor} 0%,
                ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
                ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
                ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
                ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
                ${sliderColor} 100%)`;
            }
        }

        function setToggleAccessible(currentTarget) {
            if (currentTarget) {
                const toSlider = document.querySelector('#toSlider');
                if (toSlider) {
                    if (Number(currentTarget.value) <= 0) {
                        toSlider.style.zIndex = 2;
                    } else {
                        toSlider.style.zIndex = 0;
                    }
                }
            }
        }

        const fromSlider = document.querySelector('#fromSlider');
        const toSlider = document.querySelector('#toSlider');
        const fromInput = document.querySelector('#fromInput');
        const toInput = document.querySelector('#toInput');
        fillSlider(fromSlider, toSlider, '#C6C6C6', '#000', toSlider);
        setToggleAccessible(toSlider);

        if (fromSlider && toSlider && fromInput && toInput) {
            fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
            toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
            fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
            toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
        }
    }

    addTagButton() {
        this.resume.list.innerHTML = '';
        Object.keys(this.selected).forEach(key => {
            this.selected[key].forEach(tag => this.resume.list.innerHTML += `<li data-value="${tag}">${tag.split('_')[1]}</li>`);
        });
        this.resume.list.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                const value = li.dataset.value;
                const input = this.page.querySelector(`input[value="${value}"]`);
                if (input) {
                    input.click()
                }
            })
        })
    }

    updateProducts() {
        const names = Object.keys(this.selected);
        let allowed = {};
        names.forEach(key => allowed[key] = []);
        this.products.forEach(product => {
            let noSelected = true;
            names.forEach(key => {
                if (this.selected[key].length) noSelected = false
            });
            // If no filter selected, display every products
            if (noSelected) {
                product.visible = true;
            } else {
                let valid = {};
                names.forEach(name => valid[name] = !this.selected[name].length);
                names.forEach(name => {
                    this.selected[name].forEach(tag => {
                        if (product.tags.includes(tag)) valid[name] = true
                    })
                });
                let allValid = true;
                names.forEach(name => {
                    if (!valid[name]) allValid = false
                });
                if (allValid) {
                    names.forEach(name => {
                        allowed[name] = [...allowed[name], ...product.tags.filter(t => t.includes(name))];
                        allowed[name] = [... new Set(allowed[name])];
                    });
                    product.visible = true;
                } else {
                    product.visible = false
                }
            }
        });

        let allEmptySelected = true;
        names.forEach(name => {
            if (this.selected[name].length) allEmptySelected = false
        });
        if (allEmptySelected) {
            names.forEach(name => this.showInputs(name));
        } else {
            names.forEach(name => {
                this.updateInputsVisibility(name, allowed[name], names);
            })
        }
        this.sortProducts();
        this.getRangePrices();

        const ImputRangePrices = document.querySelector('.form_control');
        if (ImputRangePrices) {
            ImputRangePrices.style.opacity = 0;
            setTimeout(() => {
                ImputRangePrices.style.opacity = 1;
            }, 300)
        }
    }

    updateFromPrice() {
        const minPrice = document.getElementById('fromInput').value
        const maxPrice = document.getElementById('toInput').value

        const names = document.querySelectorAll(".filters__list .filters__item input");

        const ArrayFilterActives = []

        names.forEach(filter => {
            if (filter.checked) {
                ArrayFilterActives.push(filter.defaultValue)
            } else {
                //
            }
        })

        this.products.forEach(product => {
            if (ArrayFilterActives.length != 0) {
                ArrayFilterActives.forEach(ArrayFilterActive => {
                    if (product.tags.includes(ArrayFilterActive)) {
                        if (product.price >= minPrice && product.price <= maxPrice) {
                            product.visible = true
                        } else {
                            product.visible = false
                        }
                    } else {
                        product.visible = false
                    }
                })
            } else {
                if (product.price >= minPrice && product.price <= maxPrice) {
                    product.visible = true
                } else {
                    product.visible = false
                }
            }
        })

        this.sortProducts()
    }

    displayProducts() {
        let products = this.products.filter(p => p.visible === true);
        this.countBtn.innerText = products.length ? `Afficher ${products.length} résultat${products.length > 1 ? 's' : ''}` : 'Aucun résultat';
        const firstProductIndex = this.pagination.activePage === 1 ? 0 : (this.pagination.activePage - 1) * this.pagination.productsPerPage;
        let lastProductIndex = firstProductIndex + this.pagination.productsPerPage - 1;
        lastProductIndex = lastProductIndex >= products.length ? products.length : lastProductIndex;
        products = products.slice(firstProductIndex, lastProductIndex);
        this.productsContainer.innerHTML = '';
        products.forEach(product => {
            if (!product.el) {
                product.el = getProductCard(product);
            }
            this.productsContainer.append(product.el);
            initProductCardSlider(product.el);
        });
        initProductQuickView();
        new LazyLoading(this.page);
        if (this.resume.count) this.resume.count.innerHTML = `(${this.products.filter(p => p.visible === true).length})`;

    }
}
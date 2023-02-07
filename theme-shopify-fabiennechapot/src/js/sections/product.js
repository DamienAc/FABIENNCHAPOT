import StickySidebar from "sticky-sidebar";
import Flickity from 'flickity';
import LazyLoading from "../common/lazy-loading";
import {initProductLightbox} from "./product-lightbox";

const initSlider = (parent = document) => {
    const mainSlider = parent.querySelector('.product__main-slider');
    const navElements = parent.querySelectorAll('.product__nav-slider li');
    const images = [...parent.querySelectorAll('.product__main-slider .lazy-img')];
    let slider;
    let isMobile = window.innerWidth < 1024;
    const options = {
        contain: true,
        prevNextButtons: false,
        pageDots: true,
        on: {
            ready: () => window.dispatchEvent(new CustomEvent('resize'))
        }
    }

    const init = () => {
        slider = new Flickity(mainSlider, options);
        slider.on('dragEnd', () => {
            if (navElements[slider.selectedIndex]) {
                navElements.forEach(e => e.classList.remove('active'));
                navElements[slider.selectedIndex].classList.add('active')
            }
        });
        mainSlider.addEventListener('change-slide', () => {
            if (slider.slides.length > 2 && !isMobile) slider.select(2, true, true)
        })
    };

    init();

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 1024;
        //init();
    });

    navElements.forEach((el, index) => {
        el.addEventListener('click', () => {
            navElements.forEach(e => e.classList.remove('active'));
            el.classList.add('active');
            if (slider) slider.select(index);
            else images[index].scrollIntoView();
        })
    });

    initProductLightbox();
};

const initSticky = () => {
    let isMobile = window.innerWidth < 1024;
    const options = {
        normal: {
            containerSelector: '.product:not(.is-init) .product__container',
            innerWrapperSelector: '.product:not(.is-init) .product__description__inner',
            topSpacing: 80,
            bottomSpacing: 20
        },
        mini: {
            containerSelector: '.product:not(.is-init) .product__images',
            innerWrapperSelector: '.product:not(.is-init) .product__nav-slider__inner',
            topSpacing: 80,
            bottomSpacing: 20
        }
    };
    let sidebar;
    let minisidebar;

    const init = () => {
        if (isMobile && sidebar) {
            sidebar.destroy();
            minisidebar.destroy();
        }
        else if (!isMobile && !sidebar) {
            sidebar = new StickySidebar('.product:not(.is-init) .product__description', options.normal)
            minisidebar = new StickySidebar('.product:not(.is-init) .product__nav-slider', options.mini)
        }
    };

    init();

    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 1024;
        init();
    });

    window.addEventListener('update-product-sticky', () => {
        if (sidebar) sidebar.updateSticky();
    })
};

const initTabs = (parent) => {
    parent.querySelectorAll('.product__description li').forEach(li => {
        const content = li.querySelector('div');
        li.addEventListener('click', () => {
            li.classList.toggle('open');
            if (content) {
                if (li.classList.contains('open')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = 0;
                }
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('update-product-sticky'))
                }, 505)
            }
        })
    });
}

const initInfos = (parent) => {
    const page = parent;
    const container = parent.querySelector('.product__infos');
    const product = window.theme.product;
    let products = [];

    if (container && product.reference !== '') {
        const ul = {
            colors: container.querySelector('.product__infos--color ul'),
            conditions: container.querySelector('.product__infos--etat ul'),
            sizes: container.querySelector('.product__infos--size ul')
        }

        const order = {
            conditions: ['Bon état', 'Très bon état', 'Excellent état', 'Etat neuf'],
            sizes: ['XXXS', '3XS', 'XXS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXL', 'XXXL', '3XL', 'XXXXL', '4XL', 'T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'TU', 'Unique', 'Taille Unique']
        }

        fetch(`https://dadasport-app.faume.tech/api/front/reference/${product.reference}`)
            .then(res => res.json())
            .then(data => {
                if (data) {

                    let conditions = [];
                    let sizes = [];
                    let colors = [];
                    let min = product.price;
                    let selected = {
                        condition: product.condition,
                        size: product.size,
                        color: product.color
                    }
                    const inputVariants = document.querySelectorAll('.js-form-add input[name="id"]');
                    const el = {
                        price: page.querySelector('.js-price'),
                        state: page.querySelector('.js-product-state-popin'),
                        images: page.querySelector('.product__images__slider')
                    }

                    for (const [key, item] of Object.entries(data)) {
                        products.push({...item, date: new Date(item.publishedAt.date)})
                    }

                    products = products.filter(p => p.quantity && p.quantity > 0);

                    if (products.length) {

                        products.forEach(p => {
                            colors.push(p.variantColor)
                            conditions.push(p.condition);
                            sizes.push(p.variantSize);
                            min = p.price < product.price ? p.price : min
                            if (!p.idFirstVariant) {
                                fetch(`/products/${p.handle}?view=fake`)
                                    .then(res => res.json())
                                    .then(data => p.idFirstVariant = data.id)
                            }
                        });

                        //el.price.innerText = `${min} €`;

                        conditions = [...new Set(conditions)];
                        sizes = [...new Set(sizes)];
                        colors = [...new Set(colors)];

                        sizes = sizes.sort((a, b) => order.sizes.indexOf(a) - order.sizes.indexOf(b) || a - b);
                        conditions = conditions.sort((a, b) => order.conditions.indexOf(a) - order.conditions.indexOf(b));

                        if (sizes.length && ul.sizes) {
                            ul.sizes.innerHTML = '';
                            sizes.forEach(size => {
                                ul.sizes.innerHTML += `<li><label><input type="radio" name="size" value="${size}" required><span>${size}</span></label></li>`
                            });
                        }

                        if (conditions.length) {
                            ul.conditions.innerHTML = '';
                            conditions.forEach(condition => {
                                ul.conditions.innerHTML += `<li><label><input type="radio" name="condition" value="${condition}" required><span>${condition}</span></label></li>`
                            });
                        }

                        if (colors.length > 1) {
                            ul.colors.innerHTML = '';
                            colors.forEach(color => {
                                let p = products.find(p => p.variantColor === color);
                                ul.colors.innerHTML += `<li ${color === selected.color ? 'class="is-selected"' : ''}><a href="/products/${p.handle}"><span data-color="${p.variantColor}"></span></a></li>`
                            });
                            ul.colors.closest('li').style.display = 'block';
                        }

                        const inputs = {
                            sizes: [...ul.sizes.querySelectorAll('input')],
                            conditions: [...ul.conditions.querySelectorAll('input')],
                        }

                        const updateProduct = existingProduct => {
                            inputVariants.forEach(inputVariant => {
                                inputVariant.value = existingProduct.idFirstVariant;
                            })
                            el.state.innerText = window.theme.productConditions[existingProduct.condition];
                            el.price.innerText = `${existingProduct.price} €`;

                            fetch(`https://${window.location.host}/products/${existingProduct.handle}?view=images`)
                                .then(res => res.text())
                                .then(html => {
                                    const el = document.querySelector('.product__images');
                                    el.innerHTML = html;
                                    new LazyLoading(el);
                                    initSlider();
                                    window.dispatchEvent(new CustomEvent('update-product-sticky'));
                                })
                        }

                        const inputSize = inputs.sizes.find(i => i.value === selected.size);
                        inputSize.checked = 'checked';

                        const inputCondition = inputs.conditions.find(i => i.value === selected.condition);
                        inputCondition.checked = 'checked';

                        const updateInputs = () => {
                            inputs.conditions.forEach(i => {
                                if (products.find(p => p.variantColor === selected.color && p.variantSize === selected.size && p.condition === i.value)) {
                                    i.removeAttribute('disabled')
                                } else {
                                    i.setAttribute('disabled', 'disabled')
                                }
                            });
                            inputs.sizes.forEach(i => {
                                if (products.find(p => p.variantColor === selected.color && p.variantSize === i.value)) {
                                    i.removeAttribute('disabled')
                                } else {
                                    i.setAttribute('disabled', 'disabled')
                                }
                            });
                        }

                        updateInputs();

                        inputs.sizes.forEach(input => {
                            input.addEventListener('change', () => {
                                setTimeout(() => {
                                    selected.size = input.value;
                                    let existingProduct = products.find(p => p.variantSize === selected.size && p.condition === selected.condition && p.variantColor === selected.color);
                                    if (existingProduct) {
                                        updateProduct(existingProduct);
                                        updateInputs();
                                    } else {
                                        existingProduct = products.find(p => p.variantSize === selected.size && p.variantColor === selected.color);
                                        const inputCondition = inputs.conditions.find(i => i.value === existingProduct.condition);
                                        inputCondition.checked = 'checked';
                                        inputCondition.dispatchEvent(new CustomEvent('change'));
                                    }
                                }, 100)
                            })
                        });

                        inputs.conditions.forEach(input => {
                            input.addEventListener('change', () => {
                                setTimeout(() => {
                                    selected.condition = input.value;
                                    let existingProduct = products.find(p => p.variantSize === selected.size && p.condition === selected.condition && p.variantColor === selected.color);
                                    if (existingProduct) {
                                        updateProduct(existingProduct);
                                        updateInputs()
                                    }
                                }, 100)
                            })
                        });

                        const btn = document.querySelector('.product .form .btn');
                        if (btn) {
                            btn.removeAttribute('disabled');
                            btn.type = 'submit';
                            btn.innerHTML = '<span>Ajouter au panier</span>'
                        }
                    }
                }
            })
    }
}

export const initProduct = () => {
    const parent = document.querySelector('.product:not(.is-init)');
    if (parent) {

        initSticky();
        initTabs(parent);
        initSlider(parent);
        initInfos(parent);
        parent.classList.add('is-init');
    }
};

import { getProduct } from "../common/get-product";
import LazyLoading from "../common/lazy-loading";
import Flickity from 'flickity';
import { updateProductCard } from "../snippets/update-product-card";
import { initProductQuickView } from "./product-quick-view";

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index += 1) {
        await callback(array[index], index, array);
    }
};

// eslint-disable-next-line no-async-promise-executor
const getRecentlyViewedProducts = () => new Promise(async resolve => {
    const productsContainer = document.querySelector('.recently-viewed__products');
    let all_products = window.localStorage.getItem('recently_viewed') || '';
    all_products = all_products.split('#');
    let products = all_products.filter(p => p !== window.theme.handle && !window.theme.items.includes(p) && p !== '');
    products = products.reverse().slice(0, 9);

    if (products.length && productsContainer) {
        let deleting = [];
        let count = 0;
        await asyncForEach(products, async (handle) => {
            const productHtml = await getProduct(handle);
            if (productHtml.includes('class="product-card"') && !productHtml.includes('shopify-section-page-404')) {
                count += 1;
                productsContainer.innerHTML += `<div class="recently-viewed__product">${productHtml}</div>`;
            } else {
                deleting.push(handle)
            }
        });
        window.localStorage.setItem('recently_viewed', all_products.filter(p => !deleting.includes(p)).join('#'));
        resolve({
            container: productsContainer,
            count: count
        });
    }
});

export const initRecentlyViewed = () => {
    const section = document.querySelector('.recently-viewed');
    if (section) {
        getRecentlyViewedProducts()
            .then(data => {
                if (data.count > 0) {
                    section.style.display = 'block';
                    new Flickity(data.container, {
                        contain: true,
                        prevNextButtons: true,
                        pageDots: false,
                        cellAlign: 'left',
                        freeScroll: true,
                        on: {
                            ready: () => {
                                window.dispatchEvent(new CustomEvent('resize'));
                                new LazyLoading(data.container);
                                updateProductCard(section);
                                initProductQuickView();
                            }
                        }
                    })
                }
            })
            .finally(() => setTimeout(() => {
                section.style.display = "none"
            }, 750))
    }
};

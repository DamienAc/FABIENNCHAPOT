import Flickity from "flickity";
import {initProductCardSlider} from "./update-product-slider";

export const updateProductCard = (container = document) => {

    const conditionSort = ['Etat neuf', 'Excellent état', 'Très bon état', 'Bon état'];
    const sortBy = ['XXXS', '3XS', 'XXS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXL', 'XXXL', '3XL', 'XXXXL', '4XL', 'T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'TU', 'Unique', 'Taille Unique'];

    container.querySelectorAll('.product-card').forEach(card => {

        initProductCardSlider(card);

        fetch(`https://dadasport-app.faume.tech/api/front/reference/${card.dataset.ref}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    let sizes = [];
                    let products = [];
                    let conditions = [];

                    for (const [key, item] of Object.entries(data)) {
                        products.push(item)
                    }
                    if (card.dataset.color && card.dataset.color !== '') {
                        products = products.filter(p => p.variantColor === card.dataset.color);
                    }

                    if (products.length > 1) {

                        let min = products[0].price;
                        let max = products[0].price;
                        products.forEach(p => {
                            if (p.price < min) min = p.price;
                            if (p.price > max) max = p.price;
                            if (!conditions.find(c => c === p.condition)) conditions.push(p.condition);
                            if (!sizes.find(s => s.value === p.variantSize)) sizes.push({handle: p.handle, value: p.variantSize})
                        });

                        conditions.sort((a,b) => conditionSort.indexOf(a) - conditionSort.indexOf(b));
                        sizes.sort((a,b) => sortBy.indexOf(a.value) - sortBy.indexOf(b.value));

                        if (sizes.length) {
                            let sizeEl = card.querySelector('.product-card__size');
                            sizeEl.innerHTML = '';
                            sizes.forEach(size => sizeEl.innerHTML += `<a href="/products/${size.handle}">${size.value}</a>`)
                        }

                        if (conditions.length && conditions.length > 1) {
                            const conditionEl = card.querySelector('.product-card__states');
                            conditionEl.innerHTML = '';
                            conditions.forEach(c => conditionEl.innerHTML += `<span>${c}</span>`);
                            conditionEl.innerHTML += `<i>+${conditions.length-1}</i>`
                        }

                        if (min < max) {
                            //card.querySelector('.product-card__price').innerHTML = `à partir de ${min}€`
                        }
                    }
                }
            })
    });
}
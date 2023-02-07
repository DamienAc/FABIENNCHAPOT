const getLazyImage = (img, alt) => {
    return `
    <div class="lazy-img">
        <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            data-src="${img}"
            alt="${alt} Dada sport preloved - seconde main"
            width="1"
            height="1"
        >
    </div>
    `
}

export const getProductCard = product => {
    const sortBy = ['XXXS', '3XS', 'XXS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXL', 'XXXL', '3XL', 'XXXXL', '4XL', 'T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'TU', 'Unique', 'Taille Unique'];
    product.sizes.sort((a, b) => sortBy.indexOf(a.value) - sortBy.indexOf(b.value) || a.value - b.value);

    let images = '';
    product.images.forEach(img => {
        images += `<div class="product-card__image">${getLazyImage(img, product.title)}</div>`;
    })

    let colorsList = product.colors.length ? '' : `<a href="/products/${product.handle}" data-color="${product.color}"><span></span></a>`;
    product.colors.forEach(color => colorsList += `<a href="/products/${color.handle}" data-color="${color.value}"><span></span></a>`);

    let sizesList = product.sizes.length || !product.size || product.size === 'Taille unique' ? '' : `<a href="/products/${product.handle}">${product.size}</a>`;
    product.sizes.filter(s => s !== 'Taille unique').forEach(size => sizesList += `<a href="/products/${size.handle}">${size.value}</a>`);

    let condition = '';
    let conditions = product.tags.filter(t => t.includes('Etat_'));
    const conditionsSort = ['Etat_Etat neuf', 'Etat_Excellent état', 'Etat_Très bon état', 'Etat_Bon état'];
    conditions.sort((a,b) => conditionsSort.indexOf(a) - conditionsSort.indexOf(b));
    conditions.forEach(c => condition += `<span>${c.replace('Etat_', '')}</span>`);
    if (conditions.length > 1) condition += `<i>+${conditions.length - 1}</i>`

    const title = product.title.split(' - ');

    let html = `
        <div class="collection__product" data-price="${product.price}" data-product-id="${product.id}" data-tags="${ product.tags.join('#')}" data-color="${product.color}" data-type="${product.type}" data-date="${product.created_at}" data-ref="${product.ref}">
            <div class="product-card product-card--full" data-handle="${product.handle}">
                <a href="/products/${product.handle}" class="product-card__images">
                    <div class="product-card__slider" data-color="${product.color}">
                        ${images}
                    </div>
                </a>
                <span class="product-card__states">
                    ${condition}
                </span>
                <div class="product-card__infos">
                    <a href="/products/${product.handle}">
                        <div>
                            <h2>${title[0]}</h2>
                            ${title[1] ? `<p>${title[1]}</p>` : ''}
                        </div>
                        <p class="product-card__price-container">
                            <span class="product-card__price-percent">
                                ${product.old_price ? `<span>-${ 100 - Math.round((product.price * 100) / product.old_price) }%</span>` : ''}
                                <span class="product-card__price">${ product.price } €</span>
                            </span>
                            ${product.old_price ? `<span class="product-card__price--old">${product.old_price} €</span>` : ''}
                        </p>
                    </a>
                    <span class="product-card__size">${sizesList}</span>
                    <span class="product-card__colors">${colorsList}</span>
                    <button class="product-card__view" data-handle="${product.handle}">
                        <svg viewBox="0 0 512 260"><use xlink:href="#svg-eye"/></svg>
                    </button>
                </div>
                <button class="product-card__wishlist" data-add-favorite="${product.id}" data-ref="${product.ref}">
                    <svg><use xlink:href="#svg-heart" /></svg>
                </button>
            </div>
        </div>
        `;
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.querySelector('.collection__product')
}
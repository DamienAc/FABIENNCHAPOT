async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

export const getProductsJson = () => new Promise(async resolve => {
    let pages = [];
    let products = [];
    for (let i = 1; i<= window.theme.pagination; i++) {
        pages.push(i)
    }
    await asyncForEach(pages, async page => {
        let pathname = window.location.pathname;
        if (window.location.search.includes('?q=') ) {
            const url = new URL(window.location.href);
            let param = url.searchParams.get('q');
            pathname += `?q=${param}&type=product&options%5Bprefix%5D=last&`
        } else {
            pathname += '?'
        }
        const data = await fetch(`https://${window.location.host}${pathname}view=fake2&page=${page}`);
        const json = await data.json();
        products.push(...json);
    });

    products.forEach(product => {
        // Sort by this date
        product.date = new Date(product.published_at);

        // Get Size & color & ref from tags
        //let tagSize = product.tags.find(t => t.includes('Pointure_') || t.includes('Taille_'));
        //let tagColor = product.tags.find(t => t.includes('Couleur_'));
        let tagRef = product.tags.find(t => t.includes('Reference_'));
        //product.size = tagSize ? tagSize.replace('Taille_', '').replace('Pointure_') : '';
        //product.color = tagColor ? tagColor.replace('Couleur_', '') : '';
        product.ref = tagRef ? tagRef.replace('Reference_', '') : '';
    });

    products.forEach(product => {
        let tags = product.tags;
        let min = product.price;
        let max = product.price;
        let colors = [];
        let sizes = [];

        if (product.ref && product.ref !== '') {

            products.filter(p => p.ref === product.ref && p.color === product.color).forEach(p => {
                tags.push(...p.tags);
                if (p.price > max) max = p.price;
                if (p.price < min) min = p.price;
                if (product.size !== '') {
                    let size = sizes.find(s => s.value === p.size);
                    if (!size || (size && size.date < p.date)) {
                        sizes = sizes.filter(s => s.value !== p.size);
                        sizes.push({
                            value: p.size,
                            date: p.date,
                            handle: p.handle
                        })
                    }
                }
            });
            products.filter(p => p.ref === product.ref).forEach(p => {
                let color = colors.find(c => c.value === p.color);
                if (!color || (color && color.date < p.date)) {
                    colors = colors.filter(c => c.value !== p.color);
                    colors.push({
                        value: p.color,
                        date: p.date,
                        handle: p.handle,
                        price: p.price,
                        image: p.images[0]
                    })
                }
            })
        }
        product.colors = colors;
        product.sizes = sizes;
        product.tags = [...new Set(tags)];
        product.price = min; // Use this price to sort
        product.price_min = min;
        product.price_max = max;
    });
    products = products.sort((a, b) => new Date(b) - new Date(a));
    let p = [];
    products.forEach(item => {
        if (!p.find(i => item.ref !== '' && i.ref === item.ref && i.color === item.color)) {
            p.push(item)
        }
    })
    products = p;
    resolve(products);
});

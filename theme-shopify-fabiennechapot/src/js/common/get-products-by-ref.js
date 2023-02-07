export const getProductsByRef = ref => {
    return new Promise((resolve, reject) => {
        if (!ref || ref === '') reject();
        fetch(`https://dadasport-app.faume.tech/api/front/reference/${ref}`)
            .then(res => res.json())
            .then(data => {
                let conditions = [];
                let sizes = [];
                let colors = [];
                let products = [];
                for (const [key, item] of Object.entries(data)) {
                    products.push(item)
                }
                const currentColor = window.theme.product.color;
                const order = {
                    conditions: ['Bon état', 'Très bon état', 'Excellent état', 'Etat neuf'],
                    sizes: ['XXXS', '3XS', 'XXS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXL', 'XXXL', '3XL', 'XXXXL', '4XL', 'T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'TU', 'Unique', 'Taille Unique']
                };

                products.forEach(product => {
                    let color = product.variantColor;
                    if (color === currentColor) {
                        let size = product.variantSize;
                        let condition = product.condition;
                        if (!conditions.includes(condition)) conditions.push(condition);
                        if (!sizes.includes(size)) sizes.push(size);
                    } else {
                        if (!colors.includes(color)) colors.push(color);
                    }
                });

                sizes = sizes.sort((a, b) => order.sizes.indexOf(a) - order.sizes.indexOf(b) || a - b);
                conditions = conditions.sort((a, b) => order.conditions.indexOf(a) - order.conditions.indexOf(b));

                resolve({
                    products: products,
                    colors: colors,
                    conditions: conditions,
                    sizes: sizes
                })

            })
            .catch(() => reject())
    })
}
import Flickity from 'flickity';
import LazyLoading from "../common/lazy-loading";

const order = {
    conditions: ['Bon état', 'Très bon état', 'Excellent état', 'Etat neuf'],
    sizes: ['XXXS', '3XS', 'XXS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXL', 'XXXL', '3XL', 'XXXXL', '4XL', 'T0', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'TU', 'Unique', 'Taille Unique']
}

const initPopin = popin => {

    // On initialise une seule fois la popin
    if (!popin.classList.contains('is-init')) {

        // On ajoute la classe pour détecter si elle a déjà été initialisé
        popin.classList.add('is-init');

        // Fonction pour fermer la popin
        const close = e => {
            e.preventDefault();
            document.body.style.overflowY = 'auto';
            popin.classList.remove('is-visible');
        }

        // On ferme la popin au clic sur la croix
        popin.querySelector('.js-close').addEventListener('click', e => close(e));

        // On ferme au clic sur le fond noir/transparent
        popin.addEventListener('click', e => {
            if (!e.target.closest('.quickview__inner')) close(e)
        });



    }
}

const updateContent = (handle) => {
    const popin = document.querySelector('.quickview');

    // On récupère le contenu html de la popin à partir du template product.view.liquid
    fetch(`/products/${handle}?view=view`)
        .then(res => res.text())
        .then(htmlContent => {

            // On insère le html dans la popin
            const content = document.querySelector('.quickview__content');
            content.innerHTML = htmlContent;

            //ajouter si présent -> 'originprice', 'economie'au tableau

            ['color', 'size', 'state', 'addcart', 'moreproduct'].forEach(name => {
                document.querySelector(`[data-text="${name}"]`).innerText = document.querySelector(`[data-text-${name}]`).getAttribute(`data-text-${name}`);

            })

            const imagesContainer = content.querySelector('.quickview__images');
            const ref = imagesContainer.dataset.ref; // La ref est stockée dans data-ref=""

            const el = {
                price: content.querySelector('.quickview__price--final'),
                input: content.querySelector('.quickview__input'),
                sale: content.querySelector('.quickview__sale em'),
                colorContainer: content.querySelector('.quickview__colors')
            }

            // On charge les images
            new LazyLoading(content);

            // On créé le slider des images
            let slider = new Flickity(imagesContainer, {
                prevNextButtons: true,
                pageDots: true,
                cellAlign: 'left',
                contain: true,
                on: {
                    ready: () => window.dispatchEvent(new CustomEvent('resize')) // Pour éviter un bug flickity
                }
            });

            // On affiche la popin une fois que le contenu est prêt
            popin.classList.add('is-visible');
            document.body.style.overflowY = 'hidden';

            // On déclenche un évènement pour ajouter le produit au panier
            // Dans le minicart, on peut écouter l'évènement window.addEventListener('add-product', e => console.log('Id', e.detail))
            content.querySelector('form').addEventListener('submit', e => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('add-product', { detail: el.input.value }))
            })

            // On récupère es produits avec la même ref pour compléter les selects
            // Car pour l'instant, on affiche une seule taille et condition qui correspondent à l'hanfle du produit
            fetch(`https://dadasport-app.faume.tech/api/front/reference/${ref}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        let products = [];
                        let price_min;
                        let list = {
                            conditions: [],
                            colors: [],
                            sizes: []
                        }

                        let selected = {
                            color: imagesContainer.dataset.color,
                            size: imagesContainer.dataset.size,
                            condition: imagesContainer.dataset.condition,
                        }

                        const selects = {
                            conditions: popin.querySelector('.quickview__conditions'),
                            sizes: popin.querySelector('.quickview__sizes'),
                        }

                        // On transforme la réponse object en array qu'on stock dans products
                        for (const [key, item] of Object.entries(data)) {
                            products.push({ ...item, date: new Date(item.publishedAt.date) })
                        }

                        // On retire les produits plus dispo
                        products = products.filter(p => p.quantity && p.quantity > 0);

                        // On récupère toutes les couleurs, états et tailles
                        products.forEach(p => {
                            list.colors.push(p.variantColor)
                            list.conditions.push(p.condition);
                            list.sizes.push(p.variantSize);
                            price_min = !price_min || p.price < price_min ? p.price : price_min; // prix minimal
                        });

                        // On supprime les doublons
                        list.conditions = [...new Set(list.conditions)];
                        list.sizes = [...new Set(list.sizes)];
                        list.colors = [...new Set(list.colors)];

                        // On trie l'ordre
                        list.sizes = list.sizes.sort((a, b) => order.sizes.indexOf(a) - order.sizes.indexOf(b) || a - b);
                        list.conditions = list.conditions.sort((a, b) => order.conditions.indexOf(a) - order.conditions.indexOf(b));

                        ['conditions', 'sizes'].forEach(name => {
                            const select = selects[name];
                            if (select) {
                                // On supprime toutes les valeurs du select hormis le label en disabled
                                select.querySelectorAll('option:not([disabled])').forEach(o => o.remove());

                                // On ajoute les options au select
                                list[name].forEach(item => select.innerHTML += `<option value="${item}">${item}</option>`)
                            }
                        });

                        if (list.colors.length > 1) {
                            el.colorContainer.innerHTML = '';
                            list.colors.forEach(color => {
                                // On trouve un produit "p" avec cette couleur
                                let p = products.find(p => p.variantColor === color);
                                el.colorContainer.innerHTML += `<li data-color="${color}" ${color === selected.color ? 'class="is-selected"' : ''}><a href="/products/${p.handle}"></a></li>`
                            });
                        }

                        const listOptions = {
                            sizes: [...selects.sizes.querySelectorAll('option:not([value="0"])')],
                            conditions: [...selects.conditions.querySelectorAll('option:not([value="0"])')],
                            colors: [...popin.querySelectorAll('.quickview__colors li')]
                        }

                        // On met à jour les options disponibles dans les selects
                        const updateOptions = () => {
                            ['sizes', 'conditions'].forEach(name => {
                                listOptions[name].forEach(option => {

                                    let productExist = name === 'sizes'
                                        ? products.find(p => p.variantSize === option.value && p.variantColor === selected.color)
                                        : products.find(p => p.condition === option.value && p.variantSize === selected.size && p.variantColor === selected.color);

                                    if (productExist) {
                                        option.removeAttribute('disabled')
                                    } else {
                                        option.setAttribute('disabled', 'disabled')
                                    }
                                })
                            });
                        }

                        const updateActiveProduct = existingProduct => {
                            // On met à jour l'id du produit sélectionné
                            el.input.value = existingProduct.idFirstVariant;

                            // On met à jours les photos produits
                            if (slider) slider.destroy();
                            imagesContainer.innerHTML = '';
                            existingProduct.images.forEach(img => {
                                imagesContainer.innerHTML += `
                                <div class="quickview__image">
                                    <div class="lazy-img">
                                        <img alt="${existingProduct.condition}" data-src="${img}" width="1" height="1" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                                    </div>
                                </div>
                                `
                            });
                            new LazyLoading(imagesContainer);
                            slider = new Flickity(imagesContainer, {
                                prevNextButtons: true,
                                pageDots: true,
                                cellAlign: 'left',
                                contain: true,
                                on: {
                                    ready: () => window.dispatchEvent(new CustomEvent('resize')) // Pour éviter un bug flickity
                                }
                            });
                            el.price.innerHTML = `${existingProduct.price} €`;
                            if (el.sale) {
                                const sale = (existingProduct.price / Number(el.sale.dataset.original)) * 100;
                                el.sale.innerHTML = `${Math.round(100 - sale)}%`;
                            }
                        }

                        // On vérifie que le produit sélectionné existe, autrement on affiche un autre par défaut
                        if (!products.find(p => p.variantColor === selected.color && p.variantSize === selected.size && p.condition === selected.condition)) {
                            selected.condition = products[0].condition;
                            selected.size = products[0].variantSize;
                            selected.color = products[0].variantColor;
                        }

                        // On met à jour la valeur par défaut des selects
                        selects.sizes.value = selected.size;
                        selects.conditions.value = selected.condition;

                        // On met à jour les options des selects
                        updateOptions();

                        selects.sizes.addEventListener('change', e => {
                            setTimeout(() => {
                                selected.size = e.target.value;
                                let existingProduct = products.find(p => p.variantSize === selected.size && p.condition === selected.condition && p.variantColor === selected.color);
                                if (existingProduct) {
                                    updateActiveProduct(existingProduct)
                                    updateOptions();
                                } else {
                                    existingProduct = products.find(p => p.variantSize === selected.size && p.variantColor === selected.color);
                                    selects.conditions.value = existingProduct.condition;
                                    selects.conditions.dispatchEvent(new CustomEvent('change'));
                                }
                            }, 100)
                        });

                        selects.conditions.addEventListener('change', e => {
                            setTimeout(() => {
                                selected.condition = e.target.value;
                                let existingProduct = products.find(p => p.variantSize === selected.size && p.condition === selected.condition && p.variantColor === selected.color);
                                if (existingProduct) {
                                    updateActiveProduct(existingProduct)
                                    updateOptions()
                                }
                            }, 100)
                        });

                        // On affiche la liste des couleurs uniquement si il y a + de 1
                        if (listOptions.colors.length > 1) {
                            el.colorContainer.closest('div').style.display = 'block';
                        }
                        listOptions.colors.forEach(li => {
                            li.addEventListener('click', e => {
                                e.preventDefault();
                                if (!li.classList.contains('is-selected')) {
                                    listOptions.colors.forEach(o => o.classList.remove('is-selected'));
                                    li.classList.add('is-selected');
                                    selected.color = li.dataset.color;
                                    let existingProduct = products.find(p => p.variantColor === selected.color && p.variantSize === selected.size && p.condition === selected.condition)
                                        || products.find(p => p.variantColor === selected.color && p.variantSize === selected.size)
                                        || products.find(p => p.variantColor === selected.color);
                                    selected.color = existingProduct.variantColor;
                                    selected.size = existingProduct.variantSize;
                                    selected.condition = existingProduct.condition;
                                    selects.sizes.value = selected.size;
                                    selects.conditions.value = selected.condition;
                                    updateActiveProduct(existingProduct);
                                    updateOptions();
                                }
                            })
                        })
                    }
                })
        })
}

export const initProductQuickView = (parent = document) => {

    const popin = document.querySelector('.quickview');
    if (popin) {

        initPopin(popin);

        parent.querySelectorAll('.product-card:not(.is-view-init)').forEach(card => {
            card.classList.add('is-view-init');

            const btn = card.querySelector('.product-card__view');
            const handle = card.dataset.handle;

            if (btn && handle) {

                btn.addEventListener('click', e => {
                    e.preventDefault();
                    updateContent(handle);
                })
            }
        });

    }
}
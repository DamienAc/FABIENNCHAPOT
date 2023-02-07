export const getProduct = handle => new Promise((resolve) => {
    if (!handle || handle === '') resolve('')
    fetch(`/products/${handle}?view=card`)
        .then(res => resolve(res.text()))
        .catch(() => resolve(''))
});

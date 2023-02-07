import Account from "@faume-tech/account";

window.addEventListener('DOMContentLoaded', () => {

    new Account({
        shop_name: "Fabienne chapot",
        shop_website: "hhttps://fabiennechapot.com",
        secondhand_shop_name: "Fabienne chapot seconde main",
        secondhand_shop_website: "https://fabienne-chapot-seconde-main.com",
        voucherFromArticle: false,
        apiBaseUrl: 'fabiennechapot-app',
        delayReturn: 14,
        voucherStep: 0.01,
        voucherMin: 1,
        voucherMax: 999
    })

})
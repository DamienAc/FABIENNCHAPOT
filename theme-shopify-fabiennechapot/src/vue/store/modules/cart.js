import API from "../../api/config";

// Data from localStorage
const storage = {
    session: null,
    products: window.localStorage.getItem('products') ? JSON.parse(window.localStorage.getItem('products')) : null,
    employeeToken: window.localStorage.getItem('employeeToken'),
    vouchers: window.localStorage.getItem('vouchers') ? JSON.parse(window.localStorage.getItem('vouchers')) : null,
    cartConfirmation: window.localStorage.getItem('cartConfirmation') ? window.localStorage.getItem('cartConfirmation') === 'true' : false,
    cartId: window.localStorage.getItem('cartId'),
    orderId: window.localStorage.getItem('orderId'),
    printSession: window.localStorage.getItem('printSession'),
    printColissimo: window.localStorage.getItem('printColissimo'),
    cartIsReady: window.localStorage.getItem('cartIsReady') ? window.localStorage.getItem('cartIsReady') === 'true' : false,
    canExchange: window.localStorage.getItem('canExchange') && window.localStorage.getItem('canExchange') === 'true',
    validProducts: window.localStorage.getItem('validProducts') && window.localStorage.getItem('validProducts') === 'true',
};

const state = {
    session: storage.session,
    isLogged: false,
    password: null,
    employeeToken: storage.employeeToken,
    printSession: storage.printSession,
    printColissimo: storage.printColissimo,
    products: storage.products,
    vouchers: storage.vouchers,
    orderId: storage.orderId,
    cartId: storage.cartId,
    cartConfirmation: storage.cartConfirmation,
    cartIsReady: storage.cartIsReady,
    canExchange: storage.canExchange,
    validProducts: storage.validProducts
};

const mutations = {
    SET_VALID_PRODUCTS(state, value) {
        state.products = value
    },
    SET_PASSWORD(state, password) {
        state.password = password;
    },
    SET_EMPLOYEE_TOKEN(state, id) {
        state.employeeToken = id;
        window.localStorage.setItem('employeeToken', id);
    },
    SET_PRODUCTS(state, products) {
        state.products = products;
        window.localStorage.setItem('products', JSON.stringify(products));
    },
    DELETE_PRODUCTS(state) {
        state.products = [];
        window.localStorage.removeItem('products')
    },
    SET_VOUCHERS(state, vouchers) {
        state.vouchers = [...vouchers];
        window.localStorage.setItem('vouchers', JSON.stringify(vouchers));
    },
    CREATE_VOUCHER(state, voucher) {
        state.vouchers = state.vouchers && state.vouchers.length ? [...state.vouchers, voucher] : [voucher];
        window.localStorage.setItem('vouchers', JSON.stringify(state.vouchers));
    },
    SET_PRINT_SESSION(state, url) {
        state.printSession = url
    },
    SET_PRINT_COLISSIMO(state, url) {
        state.printColissimo = url
    },
    SET_CART(state, data) {
        state.session = data.session;
        state.products = data.items;
        state.cartId = data.id;
        window.localStorage.setItem('session', data.session);
        window.localStorage.setItem('sessionDate', new Date().getTime());
        window.localStorage.setItem('cartId', data.id);
        window.localStorage.setItem('products', JSON.stringify(data.items));
    },
    UNSET_CART(state) {
        state.vouchers = [];
        state.products = [];
        state.cartId = null;
        state.session = null;
        state.cartConfirmation = false;
        state.orderId = false;
        state.printSession = null;
        state.printColissimo = null;
        state.cartIsReady = false;
        state.canExchange = false;
        window.localStorage.removeItem('session');
        window.localStorage.removeItem('products');
        window.localStorage.removeItem('vouchers');
        window.localStorage.removeItem('cartId');
        window.localStorage.removeItem('cartConfirmation');
        window.localStorage.removeItem('orderId');
        window.localStorage.removeItem('printSession');
        window.localStorage.removeItem('printColissimo');
        window.localStorage.removeItem('cartIsReady');
        window.localStorage.removeItem('sessionDate');
        window.localStorage.removeItem('canExchange');
        window.localStorage.removeItem('validProducts');
    },
    SET_ORDER(state, order) {
        state.orderId = order.id;
        state.cartConfirmation = true;
        window.localStorage.setItem('orderId', order.id);
        window.localStorage.setItem('cartConfirmation', true);
    },
    SET_CART_IS_READY(state, value) {
        state.cartIsReady = value;
        window.localStorage.setItem('cartIsReady', value)
    },
    SET_SESSION(state, value) {
        state.session = value
    },
    SET_CAN_EXCHANGE(state, value) {
        state.canExchange = value;
        window.localStorage.setItem('canExchange', value)
    }
};

const actions = {
    setPassword({commit}, password) {
        commit('SET_PASSWORD', password)
    },
    setEmployeeToken({commit}, id) {
        return new Promise(resolve => {
            commit('SET_EMPLOYEE_TOKEN', id);
            resolve()
        })
    },
    removeEmployeeToken({commit}) {
        commit('SET_EMPLOYEE_TOKEN', null)
    },
    getProductColors({commit}, number) {
        return new Promise((resolve, reject) => {
            if (!number) reject();
            API.get(`cart/physical-tag/${number.toUpperCase()}`)
                .then(res => res.data)
                .then(data => {
                    if (data && data.color_codes && data.color_codes.length) {
                        resolve(data.color_codes)
                    } else reject();
                })
                .catch(() => reject())
        })
    },
    getProductInfos({commit}, data) {
        return new Promise((resolve, reject) => {
            if (!data || !data.number) reject();
            API.get(`cart/physical-tag/${data.number.toUpperCase()}/${data.color}`)
                .then(res => res.data)
                .then(data => {
                    if (data.status === 'success') resolve(data.color);
                    else reject();
                })
                .catch(() => reject())
        })
    },
    getProducts({commit}) {
        commit('SET_PRODUCTS', [])
    },
    addProduct({commit, state}, data) {
        return new Promise((resolve, reject) => {
            data.session = state.session;
            API.post('cart/physical-tag/add-product', data)
                .then(res => res.data)
                .then(cart => {
                    if (cart && cart.id) {
                        commit('SET_CART', cart);
                        resolve(cart);
                    } else {
                        reject("\"Votre session a expiré. Merci de bien vouloir recommencer.\"");
                    }
                })
                .catch(() => reject("Votre session a expiré. Merci de bien vouloir recommencer."));
        })
    },
    deleteProduct({commit, state}, productHash) {
        API.delete(`cart/remove-product/${productHash}?session=${state.session}`)
            .then(res => {
                if (res.data && res.data.id) {
                    commit('SET_CART', res.data);
                }
            })
    },
    deleteProducts({commit}) {
        commit('SET_PRODUCTS', []);
    },
    getVouchers({commit}) {
        let vouchers = [];
        commit('SET_VOUCHERS', vouchers);
    },
    createVoucher({commit, state}, product) {
        return new Promise((resolve, reject) => {
            API.get(`discount/shop/${state.session}/${product.hash}`)
                .then(res => res.data)
                .then(data => {
                    if (data.message && data.message.code) {
                        const voucher = {
                            code: data.message.code,
                            amount: product.amount,
                            products: [product.hash],
                            for: 'En boutique'
                        };
                        commit('CREATE_VOUCHER', voucher);
                        resolve(voucher)
                    } else {
                        reject(data.message ? data.message : 'Une erreur est survenue, merci d\'essayer à nouveau.')
                    }
                })
                .catch(() => reject('Une erreur est survenue, merci d\'essayer à nouveau.'))
        })
    },
    deleteVouchers({commit}) {
        commit('SET_VOUCHERS', []);
    },
    getPrintSession({commit, state}) {
        let waiting = false;
        const timer = setInterval(() => {
            if (!state.session) clearInterval(timer);
            if (!waiting) {
                waiting = true;
                API.get(`print/voucher/${state.session}`)
                    .then(res => res.data)
                    .then(data => {
                        if (data && data.url) {
                            commit('SET_PRINT_SESSION', data.url);
                            clearInterval(timer)
                        } else {
                            waiting = false
                        }
                    })
                    .catch(() => waiting = false)
            }
        }, 1000);
        setTimeout(() => clearInterval(timer), 60000);
    },
    getPrintColissimo({commit, state}) {
        let waiting = false;
        const timer = setInterval(() => {
            if (!state.session) clearInterval(timer);
            if (!waiting) {
                waiting = true;
                API.get(`print/shipping/${state.session}`)
                    .then(res => res.data)
                    .then(data => {
                        if (data && data.url) {
                            commit('SET_PRINT_COLISSIMO', data.url);
                            clearInterval(timer)
                        } else {
                            waiting = false
                        }
                    })
                    .catch(() => waiting = false)
            }
        }, 1000);
        setTimeout(() => clearInterval(timer), 60000);
    },
    setCartConfirmation({commit, state}, data) {
        return new Promise((resolve, reject) => {
            API.post(`cart/confirm/${state.cartId}`, data)
                .then(res => res.data)
                .then(order => {
                    if (order && order.id) {
                        commit('SET_ORDER', order);
                        resolve();
                    } else {
                        reject("Une erreur est survenue, merci d'essayer à nouveau.")
                    }
                })
                .catch(() => reject("Une erreur est survenue, merci d'essayer à nouveau."))
        })
    },
    unsetCart({commit}) {
        commit('UNSET_CART')
    },
    setCartIsReady({commit, state}) {
        let waiting = false;
        const timer = setInterval(() => {
            if (!state.session) clearInterval(timer);
            if (!waiting) {
                API.get(`cart/list/${state.session}`)
                    .then(res => res.data)
                    .then(data => {
                        if (data && data.status &&  data.status === "success") {
                            clearInterval(timer);
                            commit('SET_CART_IS_READY', true)
                        } else {
                            waiting = false
                        }
                    })
                    .catch(() => waiting = false)
            }
        }, 1000);
        setTimeout(() => clearInterval(timer), 60000)
    },
    getSession({commit}) {
        const session = window.localStorage.getItem('session');
        let sessionDate = window.localStorage.getItem('sessionDate');
        let today = new Date().getTime();
        if (session && sessionDate) {
            sessionDate = Number(sessionDate);
            const minutes = Math.round((today - sessionDate) / 60000);
            if (minutes < 40) {
                commit('SET_SESSION', session)
            } else {
                commit('UNSET_CART');
            }
        } else {
            commit('UNSET_CART');
        }
    },
    setCanExchange({commit}, value) {
        commit('SET_CAN_EXCHANGE', value)
    },

};

const getters = {
    isLogged: state => state.log,
    total: state => {
        let total = 0;
        if (!state.products || !state.products.length) return total;
        state.products.forEach(p => total += p.price);
        return total
    }
};

const cart = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default cart;

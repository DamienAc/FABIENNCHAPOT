import API from "../../api/config";
import md5 from 'md5';

const getUserFromShop = () => {
    if (window.theme.customer) return window.theme.customer;
    let user = window.localStorage.getItem('user');
    return user ? JSON.parse(user) : null
};

const getAddressesFromShop = () => {
    let addresses = window.localStorage.getItem('addresses');
    return addresses ? JSON.parse(addresses) : null
};

const state = {
    user: getUserFromShop(),
    addresses: getAddressesFromShop()
};

const mutations = {
    SET_USER(state, data) {
        let user = {...data};
        delete user.addresses;
        if (!data.token) user.token = md5(`${data.id}${data.email}`);
        state.user = user;
        window.localStorage.setItem('user', JSON.stringify(user));
    },
    DELETE_USER(state) {
        state.user = null;
        window.localStorage.removeItem('user')
    },
    SET_ADDRESSES(state, addresses) {
        state.addresses = addresses.filter(a => a.address1 && a.address1 !== "" && a.city && a.city !== '' && a.zip && a.zip !== '');
        window.localStorage.setItem('addresses', JSON.stringify(state.addresses));
    },
    ADD_ADDRESS(state, address) {
        state.addresses = state.addresses ? [...state.addresses, address] : [address];
        window.localStorage.setItem('addresses', JSON.stringify(state.addresses));
    },
    SELECT_ADDRESS(state, id) {
        if (state.user && state.addresses) {
            state.addresses.forEach(a => a.selected = a.id === id);
            window.localStorage.setItem('selectedAddress', id)
        }
    }
};

const actions = {
    deleteUser({commit}) {
        commit('DELETE_USER');
    },
    setUser({commit, state}, email) {
        window.localStorage.removeItem('user');
        return new Promise((resolve, reject) => {
            API.get(`user/search/${email}/${state.employeeToken}`)
                .then(res => res.data)
                .then(data => {
                    if ( !data || !data.id) {
                        commit('DELETE_USER');
                        reject('Les identifiants sont incorrects')
                    } else {
                        commit('SET_USER', data);
                        commit('SET_ADDRESSES', data.addresses);
                        resolve();
                    }
                })
                .catch(() => {
                    commit('SET_USER', null);
                    commit('SET_ADDRESSES', null);
                    reject('Les identifiants sont incorrects')
                })
        })
    },

    createUser({commit}, user) {
        window.localStorage.removeItem('user');
        return new Promise((resolve, reject) => {
            API.post('user/add', user)
                .then(res => res.data)
                .then(data => {
                    if (data.email) {
                        commit('SET_USER', {...data, isNew: true});
                        commit('SET_ADDRESSES', []);
                        resolve();
                    } else {
                        let error = data.message || 'Une erreur est survenue';
                        reject(typeof error === 'object' && error.length ? error[0] : error)
                    }
                })
                .catch(() => {
                    reject('Une erreur est survenue')
                })
        })
    },
    getAddresses({commit, state}) {
        return new Promise((resolve, reject) => {
            API.get(`user/address/${state.user.token}`)
                .then(res => res.data)
                .then(data => {
                    let addresses = data ? data.filter(a => a.address1 && a.address1 !== "" && a.city && a.city !== '' && a.zip && a.zip !== '') : null;
                    if (addresses) {
                        commit('SET_ADDRESSES', data);
                        resolve();
                    } else {
                        commit('SET_ADDRESSES', []);
                        reject("Aucune adresse n'a été trouvé.")
                    }
                })
                .catch(() => reject("Aucune adresse n'a été trouvé."))
        })
    },
    addAddress({commit, state}, data) {
        return new Promise((resolve, reject) => {
            API.post(`user/${state.user.token}/address/add`, data)
                .then(res => res.data)
                .then(address => {
                    if (address && address.shopifyId) {
                        commit('ADD_ADDRESS', {...data, id: address.shopifyId});
                        resolve()
                    } else {
                        reject("Une erreur est survenue, impossible de créer l'adresse")
                    }
                })
                .catch(() => reject("Une erreur est survenue, impossible de créer l'adresse"))
        })
    },
    deleteAddress({commit, state}, id) {
        return new Promise((resolve, reject) => {
            if (!state.user || !state.user.token) reject("Une erreur est survenue, merci d'essayer à nouveau.");
            API.delete(`user/${state.user.token}/address/delete/${id}`)
                .then(res => res.data)
                .then(addresses => {
                    commit('SET_ADDRESSES', addresses);
                    resolve()
                })
                .catch(() => reject("Une erreur est survenue, merci d'essayer à nouveau."))
        })
    },
    selectAddress({commit}, id) {
      commit('SELECT_ADDRESS', id)
    },
    login({commit}, data) {
        return new Promise((resolve, reject) => {
            API.post('login', {...data})
                .then(res => res.data)
                .then(data => {
                    if (data && data.id) {
                        commit('SET_USER', data);
                        commit('SET_ADDRESSES', data.addresses);
                        resolve();
                    } else {
                        reject();
                    }
                })
                .catch(() => reject())
        })
    }
};

const getters = {
    userToken: state => state.user && state.user.token ? state.user.token : null,
    userIsNew: state => state.user && state.user.isNew ? state.user.isNew : false
};

const users = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default users;

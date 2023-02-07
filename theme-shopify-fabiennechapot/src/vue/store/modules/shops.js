import API from "../../api/config";

const state = {
    shops: null,
    employees: null,
    shopToken: null,
    validShopToken: false
};

const mutations = {
    SET_SHOPS(state, shops) {
        state.shops = [...shops]
    },
    SET_EMPLOYEES(state, data) {
        state.employees = data
    },
    ADD_EMPLOYEE(state, data) {
        state.employees = [...state.employees, data]
    },
    SET_SHOP_TOKEN(state, token) {
        window.localStorage.setItem('shopToken', token);
        state.shopToken = token
    },
    SET_VALID_SHOP_TOKEN(state, value) {
        state.validShopToken = value;
    },
    REMOVE_EMPLOYEE(state, token) {
        state.employees = state.employees.filter(e => e.token !== token)
    }
};

const actions = {
    getShops({commit}) {
        const data = [
            {title: "Isabel Marant Bordeaux", id: 9},
            {title: "Isabel Marant Paris", id: 1},
            {title: "Isabel Marant Lyon", id: 2},
            {title: "Isabel Marant Nice", id: 3}
        ];
        commit('SET_SHOPS', data)
    },
    getEmployees({commit, state}) {
        API.get(`store/${state.shopToken}/sellers`)
            .then(res => res.data)
            .then(data => {
                commit('SET_EMPLOYEES', data)
            })
    },
    createEmployee({commit, state}, name) {
      return new Promise((resolve, reject) => {
          API.post(`store/${state.shopToken}/seller`, {
              name: name,
              token: state.shopToken
          })
              .then(res => res.data)
              .then(data => {
                  if (data.id) {
                      commit('ADD_EMPLOYEE', data);
                  } else {
                      reject("Impossible d'ajouter ce profil, merci d'essayer à nouveau.")
                  }
                  resolve()
              })
              .catch(() => reject("Impossible d'ajouter ce profil, merci d'essayer à nouveau."));
      })
    },
    removeEmployee({commit, state}, tokenSeller) {
        API.delete(`store/${state.shopToken}/seller/${tokenSeller}/delete`)
            .then(() => commit('REMOVE_EMPLOYEE', tokenSeller))
    },
    removeEmployees({commit}) {
        commit('SET_EMPLOYEES', null)
    },
    setShopToken({commit}, token = '123') {
        commit('SET_SHOP_TOKEN', token)
    },
    setValidShopToken({commit, state}) {
        return new Promise((resolve, reject) => {
            if (!state.shopToken) {
                reject();
            } else {
                API.get(`store/auth/${state.shopToken}`)
                    .then(res => res.data)
                    .then(data => {
                        if (data.id) {
                            commit('SET_VALID_SHOP_TOKEN', true);
                            resolve()
                        } else {
                            reject()
                        }
                    })
                    .catch(() => reject())
            }
        })
    }
};

const getters = {
};

const shops = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default shops;

import API from "../../api/config";

const state = {
    settings: null,
    formJson: null,
    conditions: null
};

const mutations = {
    SET_SETTINGS(state, data) {
        state.settings = data
    },
    SET_FORM(state, data) {
        state.formJson = data.form;
        state.conditions = data.conditions
    }
};

const actions = {
    getSettings({ commit }) {
        commit('SET_SETTINGS', window.theme)
    },
    getFormJson({ commit }) {
        let json = window.localStorage.getItem('formJson');
        if (json) json = JSON.parse(json);
        if (json && json.form && json.conditions) {
            commit('SET_FORM', json)
        } else {
            API.get('product/form/json')
                .then(res => {
                    if (res && res.data && res.data.form) {
                        window.localStorage.setItem('formJson', JSON.stringify(res.data));
                        commit('SET_FORM', res.data);
                    }
                })
        }
    }
};

const getters = {
    validConditions: state => {
        if (!state.conditions) {
            return []
        }
        return state.conditions.choices.slice(0, 3)
    },

    linksNav: state => state.settings ? state.settings.repriseCustomer.linksNav.links : null,
    btnContinue: state => state.settings ? state.settings.repriseCustomer.btn.continue : '',
    btnRestart: state => state.settings ? state.settings.repriseCustomer.btn.btnRestart : '',

    conditionTitle: state => state.settings ? state.settings.repriseCustomer.step1.condition.title : '',
    conditionText: state => state.settings ? state.settings.repriseCustomer.step1.condition.text : '',
    conditionBtn: state => state.settings ? state.settings.repriseCustomer.step1.condition.btn : '',
    sizeTitle: state => state.settings ? state.settings.repriseCustomer.step1.size.title : '',
    colorTitle: state => state.settings ? state.settings.repriseCustomer.step1.color.title : '',
    colorTextError: state => state.settings ? state.settings.repriseCustomer.step1.color.error : '',
    etatTitle: state => state.settings ? state.settings.repriseCustomer.step1.etat.title : '',
    etatNeuf: state => state.settings ? state.settings.repriseCustomer.step1.etat.neuf : '',
    etatExcellent: state => state.settings ? state.settings.repriseCustomer.step1.etat.excellent : '',
    etatTresbon: state => state.settings ? state.settings.repriseCustomer.step1.etat.tresbon : '',
    refTitle: state => state.settings ? state.settings.repriseCustomer.step1.ref.title : '',
    refHelp: state => state.settings ? state.settings.repriseCustomer.step1.ref.help : '',
    refImage1: state => state.settings ? state.settings.repriseCustomer.step1.ref.image1 : '',
    refImage2: state => state.settings ? state.settings.repriseCustomer.step1.ref.image2 : '',
    refText: state => state.settings ? state.settings.repriseCustomer.step1.ref.text : '',
    refError: state => state.settings ? state.settings.repriseCustomer.step1.ref.error : '',

    sellReassurances: state => state.settings && state.settings.repriseReassurance ? state.settings.repriseReassurance.reassurances : null,
    faqQuestions: state => state.settings && state.settings.repriseFaq ? state.settings.repriseFaq.questions : null,
    faqTitle: state => state.settings && state.settings.repriseFaq ? state.settings.repriseFaq.title.text : '',

    cartTitle: state => state.settings ? state.settings.repriseCustomer.cart.title : '',
    cartEmptyText: state => state.settings ? state.settings.repriseCustomer.cart.empty_text : '',
    cartArticlesText: state => state.settings ? state.settings.repriseCustomer.cart.articles_text : '',
    cartNoArticlesText: state => state.settings ? state.settings.repriseCustomer.cart.no_articles_text : '',
    cartMoreArticlesText: state => state.settings ? state.settings.repriseCustomer.cart.more_articles_text : '',
    cartLessArticleText: state => state.settings ? state.settings.repriseCustomer.cart.less_article_text : '',
    cartBtnAddArticleText: state => state.settings ? state.settings.repriseCustomer.cart.btn_add_article_text : '',
    cartTitleAmount: state => state.settings ? state.settings.repriseCustomer.cart.cartTitleAmount : '',
    cartTotalArticlesText: state => state.settings ? state.settings.repriseCustomer.cart.cartTotalArticlesText : '',
    cartNumberArticlesText: state => state.settings ? state.settings.repriseCustomer.cart.cartNumberArticlesText : '',
    cartTotalOfferText: state => state.settings ? state.settings.repriseCustomer.cart.cartTotalOfferText : '',
    cartConfirmationText: state => state.settings ? state.settings.repriseCustomer.cart.cartConfirmationText : '',
    cartConfirmationCertifText1: state => state.settings ? state.settings.repriseCustomer.cart.cartConfirmationCertifText1 : '',
    cartConfirmationCertifText2: state => state.settings ? state.settings.repriseCustomer.cart.cartConfirmationCertifText2 : '',
    cartBtnValidation1: state => state.settings ? state.settings.repriseCustomer.cart.cartBtnValidation1 : '',
    cartBtnValidation2: state => state.settings ? state.settings.repriseCustomer.cart.cartBtnValidation2 : '',

    cartItemSize: state => state.settings ? state.settings.repriseCustomer.cart.cartItemSize : '',
    cartItemRef: state => state.settings ? state.settings.repriseCustomer.cart.cartItemRef : '',
    cartItemPrice: state => state.settings ? state.settings.repriseCustomer.cart.cartItemPrice : '',

    logRegistertabs1: state => state.settings ? state.settings.repriseCustomer.log_register.logRegistertabs1 : '',
    logRegistertabs2: state => state.settings ? state.settings.repriseCustomer.log_register.logRegistertabs2 : '',
    logSubtitle: state => state.settings ? state.settings.repriseCustomer.log_register.logSubtitle : '',
    logErrorText: state => state.settings ? state.settings.repriseCustomer.log_register.logErrorText : '',
    logPlaceholderEmail: state => state.settings ? state.settings.repriseCustomer.log_register.logPlaceholderEmail : '',
    logPlaceholderPassword: state => state.settings ? state.settings.repriseCustomer.log_register.logPlaceholderPassword : '',
    logPlaceholderPasswordConfirm: state => state.settings ? state.settings.repriseCustomer.log_register.logPlaceholderPasswordConfirm : '',
    logBtn1: state => state.settings ? state.settings.repriseCustomer.log_register.logBtn1 : '',
    logBtn2: state => state.settings ? state.settings.repriseCustomer.log_register.logBtn2 : '',
    logBtn3: state => state.settings ? state.settings.repriseCustomer.log_register.logBtn3 : '',
    registerSubtitle: state => state.settings ? state.settings.repriseCustomer.log_register.registerSubtitle : '',
    registerFirstname: state => state.settings ? state.settings.repriseCustomer.log_register.registerFirstname : '',
    registerLastname: state => state.settings ? state.settings.repriseCustomer.log_register.registerLastname : '',
    registerPhone: state => state.settings ? state.settings.repriseCustomer.log_register.registerPhone : '',
    registerConfirmationCertifText1: state => state.settings ? state.settings.repriseCustomer.log_register.registerConfirmationCertifText1 : '',
    registerLabelOffer1: state => state.settings ? state.settings.repriseCustomer.log_register.registerLabelOffer1 : '',
    registerLabelOffer2: state => state.settings ? state.settings.repriseCustomer.log_register.registerLabelOffer2 : '',
    registerBtn1: state => state.settings ? state.settings.repriseCustomer.log_register.registerBtn1 : '',
    registerBtn2: state => state.settings ? state.settings.repriseCustomer.log_register.registerBtn2 : '',

    addressTitle: state => state.settings ? state.settings.repriseCustomer.address.title : '',
    addressSubtitle1: state => state.settings ? state.settings.repriseCustomer.address.subtitle1 : '',
    addressSubtitle2_1: state => state.settings ? state.settings.repriseCustomer.address.subtitle2_1 : '',
    addressSubtitle2_2: state => state.settings ? state.settings.repriseCustomer.address.subtitle2_2 : '',
    addressAddBtn: state => state.settings ? state.settings.repriseCustomer.address.add : '',
    addressSuccess: state => state.settings ? state.settings.repriseCustomer.address.success : '',
    addressBtn1: state => state.settings ? state.settings.repriseCustomer.address.btn1 : '',
    addressBtn2: state => state.settings ? state.settings.repriseCustomer.address.btn2 : '',
    addressEmpty: state => state.settings ? state.settings.repriseCustomer.address.empty : '',
    addressPlaceholder1: state => state.settings ? state.settings.repriseCustomer.address.addressPlaceholder1 : '',
    addressPlaceholder2: state => state.settings ? state.settings.repriseCustomer.address.addressPlaceholder2 : '',
    addressPlaceholder3: state => state.settings ? state.settings.repriseCustomer.address.addressPlaceholder3 : '',
    addressPlaceholder4: state => state.settings ? state.settings.repriseCustomer.address.addressPlaceholder4 : '',
    addressPlaceholder5: state => state.settings ? state.settings.repriseCustomer.address.addressPlaceholder5 : '',

    finalTitle: state => state.settings ? state.settings.repriseCustomer.final.title : '',
    finalSubtitle: state => state.settings ? state.settings.repriseCustomer.final.subtitle : '',
    finalSteps: state => state.settings ? state.settings.repriseCustomer.final.finalSteps : null,
    finalBtnPrint1: state => state.settings ? state.settings.repriseCustomer.final.finalBtnPrint1 : '',
    finalBtnPrint2: state => state.settings ? state.settings.repriseCustomer.final.finalBtnPrint2 : '',
    finalTitleTicket: state => state.settings ? state.settings.repriseCustomer.final.finalTitleTicket : '',
    finalTextTicket: state => state.settings ? state.settings.repriseCustomer.final.finalTextTicket : '',
    finalTitleCollis: state => state.settings ? state.settings.repriseCustomer.final.finalTitleCollis : '',
    finalText1Collis: state => state.settings ? state.settings.repriseCustomer.final.finalText1Collis : '',
    finalText2Collis: state => state.settings ? state.settings.repriseCustomer.final.finalText2Collis : '',
    finalText3Collis: state => state.settings ? state.settings.repriseCustomer.final.finalText3Collis : '',
    finalBtnBack: state => state.settings ? state.settings.repriseCustomer.final.finalBtnBack : '',

};

const settings = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};

export default settings;

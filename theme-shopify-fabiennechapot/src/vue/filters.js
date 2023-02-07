export const filters = {

    // Format product price
    money: value => {
        if(!value) return '';
        return `${value}€`
        //return Shopify.formatMoney(value)
    },

    shopify_money: value => {
        if(!value) return '0€';
        return `${value/100}€`
    },

    date: value => {
      const date = new Date(value);
      let day = date.getDate();
      day = day < 10 ? `0${day}` : day;
      let month = date.getMonth();
      month = month < 10 ? `0${month}` : month;
      return `${day}/${month}/${date.getFullYear()}`
    },

    // Translate
    t: value => {
        if(!value || value === '') return '';
        let trans = Shopify.translations;
        let i = 0;
        const keys = value.toLowerCase().split('.');
        keys.forEach(key => trans = trans[key]);
        return trans
    },

    // First letter uppercase
    firstUp: value => {
        if(!value || value === '') return '';
        return value.charAt(0).toUpperCase() + value.slice(1)
    },

    // Remove color from product title
    title: value => {
        if(!value || value === '') return '';
        return value.split('-')[0].trim()
    }
};

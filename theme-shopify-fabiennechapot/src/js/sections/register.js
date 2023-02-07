import {initInputPhone} from "../common/init-input-phone";

export const initRegister = () => {

    const register = document.querySelector('.register');
    if (register) {

        initInputPhone(register.querySelector('.js-input-phone'));

        const form = register.querySelector('form');
        const inputTags = form.querySelector('input[name="customer[tags]"]');
        form.addEventListener('submit', e => {
            if (!form.classList.contains('valid')) {
                e.preventDefault();
                const data = new FormData(form);
                //const gender = data.get('gender');
                const sms = data.get('sms_marketing_consent');
                const phone = data.get('customer[phone]');
                //let tags = `${gender}`;
                let tags = '';
                if (phone && phone !== '') {
                    tags += `phone:${phone}`;
                    if (sms) tags += ','
                }
                if (sms) tags += 'sms_marketing_consent:true';
                inputTags.value = tags;
                form.classList.add('valid');
                form.submit();
            }
        })
    }
}
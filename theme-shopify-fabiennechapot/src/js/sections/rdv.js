import {initInputPhone} from "../common/init-input-phone";

const days = {
    'lundi': 'monday',
    'mardi': 'tuesday',
    'mercredi': 'wednesday',
    'jeudi': 'thursday',
    'vendredi' : 'friday',
    'samedi': 'saturday',
    'dimanche': 'sunday'
}

const headers = {
    method: "POST",
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    }
};

const getStores = () => new Promise(resolve => {
    fetch('https://store.faume.co/dadasport/list')
        .then(res => res.json())
        .then(stores => resolve(stores))
});

const initTextarea = page => {
    const textarea = page.querySelector('.js-textarea textarea');
    if (textarea) {
        const count = textarea.closest('.js-textarea').querySelector('.js-count');
        if (count) {
            textarea.addEventListener('keydown', e => {
                setTimeout(() => count.innerText = 1000 - e.target.value.length, 200)
            })
        }
    }
};

const selectStore = store => {
    document.querySelectorAll('select[name="schedule_date"] option').forEach(option => {
        const day = option.innerText.split(' , ')[1];
        const english_day = days[day];
        if (day === 'dimanche' || day === 'samedi' || store.schedule[english_day] === 'Fermé') {
            option.setAttribute('disabled', 'disabled')
        } 
    })
};

const getStoreEl = (store, checked = false) => {
    const li = document.createElement('li');
    li.className = 'rdv__store';
    if (checked) li.classList.add('rdv__store--select');
    li.innerHTML = `<label>
        <input type="radio" name="store" required value="${store.id}" ${checked ? 'checked="checked"' : ''}>
        <span>${store.name}<br>${store.street}<br>${store.zip} ${store.city}<br>${store.phone}</span>
    </label>`;
    return li
};

const displayError = error => {
    error.classList.add('visible');
    setTimeout(() => error.classList.remove('visible'), 4000)
};

export const initRdv = async () => {
    const page = document.querySelector('.rdv');
    if (page) {

        initTextarea(page);

        let tokens = [];
        window.theme.rdv.split('ARGHJLGVFRTC').forEach(t => {
            let values = t.split('bghvttdret');
            tokens.push({
                id: values[0],
                token: values[1]
            })
        })
        const form = page.querySelector('.js-form-rdv');
        const error = page.querySelector('.js-error-msg');
        let stores = await getStores();

        // Display stores
        const parent = page.querySelector('.rdv__stores');
        let storeId = window.location.search;
        storeId = storeId && storeId.includes("?boutique=") ? Number(storeId.replace("?boutique=", "")) : null;
        const store = storeId ? stores.find(s => s.id === storeId) : null;
        if (store) {
            parent.append(getStoreEl(store, true));
            selectStore(store);
        } else {
            stores.forEach(s => parent.append(getStoreEl(s)));
            document.querySelectorAll('input[name="store"]').forEach(input => {
                input.addEventListener('change', () => {
                    selectStore(stores.find(s => s.id == input.value))
                })
            })
        }

        const inputs = {
            schedule_date: form.querySelector('select[name="schedule_date"]'),
            schedule_time: form.querySelector('select[name="schedule_time"]')
        };
        const options = [...inputs.schedule_time.querySelectorAll('option')].filter(a => a.value !== '')

        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate()+1);
        tomorrow = new Date(tomorrow);
        let hour = new Date().getHours();
        tomorrow = `${tomorrow.getFullYear()}-${tomorrow.getMonth() < 9 ? '0' : ''}${tomorrow.getMonth() + 1}-${tomorrow.getDate() < 10 ? '0' : ''}${tomorrow.getDate()}`;

        inputs.schedule_date.addEventListener('change', () => {
            setTimeout(() => {
                const date = inputs.schedule_date.value;
                options.forEach(o => o.removeAttribute('disabled'))
                if (date === tomorrow) {
                    options.forEach(o => {
                        let value = Number(o.value.replace(':00:00', ''));
                        if (value <= hour) o.setAttribute('disabled', 'disabled');
                    })
                }
            }, 200)
        });

        initInputPhone(form.querySelector('.js-input-phone'));

        form.addEventListener('submit', e => {
            e.preventDefault();

            let json = {
                schedule_date: inputs.schedule_date.value,
                schedule_time: inputs.schedule_time.value,
                firstname: form.querySelector('input[name="firstname"]').value,
                lastname: form.querySelector('input[name="lastname"]').value,
                phone: form.querySelector('input[name="phone"]').value.replace(/\D/g,''),
                message: form.querySelector('textarea[name="message"]').value,
                store: form.querySelector('input[name="store"]').value,
                email: form.querySelector('input[name="email"]').value,
                products: form.querySelector('select[name="products"]').value,
            }
            json.store = tokens.find(t => t.id == json.store).token;

            const formBtn = form.querySelector('button[type="submit"]');
            if (formBtn) formBtn.classList.add('loading');

            fetch('https://store.faume.co/dadasport/booking', {
                ...headers,
                body: JSON.stringify(json)
            })
                .then(res => res.json())
                .then(res => {
                    if(!res || res.error) {
                        if (formBtn) formBtn.classList.remove('loading');
                        displayError(error);
                    } else {
                        
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });

                        page.remove();
                        document.querySelector('.rdv-confirm').style.display = 'block'
                    }
                })
                .catch(() => {
                    if (formBtn) formBtn.classList.remove('loading');
                    displayError(error)
                })


        });
    }
};



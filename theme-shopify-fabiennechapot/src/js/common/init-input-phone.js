export const initInputPhone = field => {
    const input = field ? field.querySelector('input') : null;

    if (input && !input.classList.contains('init')) {
        input.classList.add('init');
        const form = input.closest('form');
        const btn = form.querySelector('button[type="submit"]');

        input.addEventListener('keydown', () => {
            setTimeout(() => {
                let value = input.value.replace(/\D/g,'').slice(0, 10).split('');
                let newValue = '';
                value.forEach((v, i) => {
                    if ( i===0 ) v = '0';
                    if ([2,4,6,8].includes(i)) newValue += ' ';
                    newValue += v;
                });
                input.value = newValue;
                if (newValue && newValue !== '' && newValue.length < 14) {
                    field.classList.add('invalid');
                    btn.setAttribute('disabled', 'disabled')
                } else {
                    field.classList.remove('invalid');
                    btn.removeAttribute("disabled")
                }
            }, 200)
        })
    }
}
let isScrolling;

// Listen for scroll events
window.addEventListener('scroll', () => {

    window.clearTimeout( isScrolling );

    isScrolling = setTimeout(() => {
        window.dispatchEvent(new CustomEvent('scrollend'));
    }, 66);

}, false);

export const initStickyHeader = () => {
    const header = document.querySelector('.header');
    const body = document.body;

    let isSticky = false;
    let disabled = false;

    const setPosition = () => {
        const Y = window.scrollY;

        if (Y > 45 && !isSticky) {
            isSticky = true;
            header.classList.add('sticky');
            body.classList.add('has-sticky-header');
            disabled = true;
            setTimeout(() => {
                disabled = false;
            }, 350);
        } else if (Y <= 45 && isSticky) {
            isSticky = false;
            header.classList.remove('sticky');
            body.classList.remove('has-sticky-header');
        }
    };

    window.addEventListener('scroll', () => {
        if (!disabled) setPosition();
    });
    setPosition();
};

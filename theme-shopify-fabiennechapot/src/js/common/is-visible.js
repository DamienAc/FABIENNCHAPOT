import 'intersection-observer';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.dataset.visible = entry.isIntersecting;
    })
});
observer.POLL_INTERVAL = 500;

export const isVisible = (container = document) => {
    container.querySelectorAll('[data-visible]').forEach(el => {
        observer.observe(el)
    })
};

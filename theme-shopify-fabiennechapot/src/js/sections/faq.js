export const initFaq = () => {
    document.querySelectorAll('.sell-faq li').forEach(li => {
        const title = li.querySelector('h3');
        const answer = li.querySelector('.sell-faq__answer');
        title.addEventListener('click', () => {
            title.classList.toggle('open');
            answer.style.maxHeight = title.classList.contains('open') ? `${answer.scrollHeight}px` : 0;
        });
    })
};

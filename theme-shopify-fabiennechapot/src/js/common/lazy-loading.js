import 'intersection-observer';

export default class LazyLoading {

    constructor(parent = document) {
        this.images = parent.querySelectorAll('.lazy-img img[data-src]:not(.load)');
        if(this.images.length) {
            this.devicePixelRatio = window.devicePixelRatio && window.devicePixelRatio > 0 ? window.devicePixelRatio : 1;
            this.init();
        }
        this.initOthersImages(parent.querySelectorAll('.lazy-img-2 img'))
    }

    initOthersImages(images) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                let image = entry.target;
                if (entry.isIntersecting && image) {
                    if (image.dataset.src) {
                        image.src = image.dataset.src;
                        image.removeAttribute('data-src');
                    }
                    observer.unobserve(image)
                }
            })
        });
        observer.POLL_INTERVAL = 100;
        images.forEach(img => observer.observe(img))
    }

    init() {
        const imageObserver = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                let image = entry.target;
                if(entry.isIntersecting && image && !image.classList.contains('loaded')) {
                    image.src = this.getSrc(image);
                    imageObserver.unobserve(image);
                    image.addEventListener('load', () => image.classList.add('load'));
                }
            })
        });
        imageObserver.POLL_INTERVAL = 100;

        this.images.forEach(image => {
            LazyLoading.setRatio(image);
            imageObserver.observe(image);
        });

        window.addEventListener('resize', () => {
            this.images.forEach(image => {
                const width = Math.ceil(image.closest('.lazy-img').offsetWidth);
                const height = Math.ceil(image.closest('.lazy-img').height);
                if(image.classList.contains('loaded') && (image.dataset.width < width || image.dataset.height < height)) {
                    image.src = this.getSrc(image, width, height)
                }
            })
        })
    }

    static setRatio(image) {
        const ratio = image.dataset.ratio;
        if(ratio && ratio !== '' && ratio > 0) {
            image.closest('.lazy-img').style.paddingBottom = (ratio * 100) + '%'
        }
    }

    getSrc(image, width, height) {
        if(!height || !width) {
            const parent = image.closest('.lazy-img');
            width = Math.ceil(parent.offsetWidth * this.devicePixelRatio);
            height = Math.ceil(parent.offsetHeight * this.devicePixelRatio);
        }
        let src = image.dataset.src;
        image.dataset.width = width;
        image.dataset.height = height;
        let crop = image.dataset.nocrop ? '' : '_crop_top';
        if (image.dataset.crop === 'center') crop = `_crop_${image.dataset.crop}`;
        ['.jpg', '.png', '.jpeg', '.gif'].forEach(format => src = src.replace(format, `_${width}x${height}${crop}${format}`));
        return src
    }
}



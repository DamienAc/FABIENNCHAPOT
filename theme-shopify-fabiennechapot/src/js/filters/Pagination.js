export default class Pagination {

    constructor() {
        this.productsCount = 0;
        this.activePage = 1;
        this.productsPerPage = 30;
        this.listLi = null;
        this.page = document.querySelector('.collection');
        this.container = document.createElement('div');
        this.ul = document.createElement('ul');
        this.point = document.createElement('li');
        this.previous = document.createElement('button');
        this.next = document.createElement('button');
        this.pages = Math.ceil(this.productsCount / this.productsPerPage);

        this.container.className = 'collection-pagination';
        this.container.style.opacity = '0';
        this.previous.className = 'collection-pagination__btn hide';
        this.next.className = 'collection-pagination__btn hide';
        this.point.className = 'collection-pagination__point';

        this.previous.innerHTML = '<img src="//cdn.shopify.com/s/files/1/0550/2635/2364/t/2/assets/icon-right.svg?v=18348180362739095008" alt="Voir la âge précédante" width="1" height="1" loading="lazy"/>';
        this.next.innerHTML = '<img src="//cdn.shopify.com/s/files/1/0550/2635/2364/t/2/assets/icon-right.svg?v=18348180362739095008" alt="Voir la âge précédante" width="1" height="1" loading="lazy"/>';

        this.container.append(this.previous);
        this.container.append(this.ul);
        this.container.append(this.next);
        this.page.append(this.container);
    }

    init(count) {
        this.productsCount = count;
        this.pages = Math.ceil(this.productsCount / this.productsPerPage);
        let pages = [];
        if (this.pages > 1) {
            for (let i = 1; i <= this.pages; i++) {
                pages.push(i)
            }
        }
        pages.forEach(page => this.ul.innerHTML += `<li><a href="${window.location.href}?page=${page}">${page}</a></li>`);
        const url = new URL(window.location.href);
        let paramPage = url.searchParams.get('p') || 1;
        paramPage = Number(paramPage) || 1;
        if (paramPage < 1 || paramPage > this.pages) {
            this.updatePageParam(paramPage < 1 ? 1 : this.pages)
        }
        this.activePage = paramPage;
        this.listLi = this.container.querySelectorAll('li');
        this.listLi.forEach((li, i) => {
            li.addEventListener('click', e => {
                e.preventDefault();
                this.listLi.forEach(l => l.classList.remove('active'));
                li.classList.add('active');
                this.updateActivePage(i + 1);
                this.container.dispatchEvent(new CustomEvent('update-page'));
            })
        });
        this.previous.addEventListener('click', e => {
            e.preventDefault();
            this.updateActivePage(this.activePage - 1)
            this.container.dispatchEvent(new CustomEvent('update-page'));
        });
        this.next.addEventListener('click', e => {
            e.preventDefault();
            this.updateActivePage(this.activePage + 1)
            this.container.dispatchEvent(new CustomEvent('update-page'));
        })
    }

    updateActivePage(page) {
        this.updatePageParam(page);
        this.activePage = page;
        if (window.scrollY > 101) window.scrollTo(0, 101);
        this.updateVisibility(this.productsCount);
    }

    updatePageParam(page) {
        const url = new URL(window.location.href);
        page = page < 1 ? 1 : page > this.pages ? this.pages : page;
        url.searchParams.set('p', `${page}`);
        window.history.pushState({}, window.location.host, url);
        this.activePage = page;
    }

    updateVisibility(count) {
        this.productsCount = count
        const pages = Math.ceil(this.productsCount / this.productsPerPage);
        this.container.style.opacity = pages > 1 ? '1' : '0';
        let active = this.activePage;
        if (active > pages || active < 1) {
            this.updatePageParam(active < 1 ? 1 : pages)
        }
        this.container.querySelectorAll('.collection-pagination__point').forEach(p => p.remove());
        let visiblesPages = [active, active + 1, active - 1, 1, pages];
        if (active === 1) visiblesPages.push(3);
        if (active === pages) visiblesPages.push(pages - 2);
        let valid = true;
        if (this.listLi && this.listLi.length) {
            this.listLi.forEach(li => {
                li.classList.add('hide');
                li.classList.remove('active');
            })
            for (let i = 1; i <= pages; i++) {
                const li = this.listLi[i - 1];
                if (i === active) li.classList.add('active');
                if (visiblesPages.includes(i)) {
                    valid = true;
                    li.classList.remove('hide')
                } else if (valid) {
                    valid = false;
                    this.ul.insertBefore(this.point.cloneNode(), li.nextSibling)
                }
            }
            if (active === 1) {
                this.previous.classList.add('hide')
            } else {
                this.previous.classList.remove('hide')
            }
            if (active === pages || active === pages) {
                this.next.classList.add('hide')
            } else {
                this.next.classList.remove('hide')
            }
        }
    }
}
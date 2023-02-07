import mapboxgl from 'mapbox-gl';

export default class StoreLocator {

    constructor() {
        this.page = document.querySelector('.stores');
        if (this.page) {
            this.mapContainer = this.page.querySelector('.js-stores-map');
            this.storesContainer = this.page.querySelector('.stores__list');
            this.storesCol = this.page.querySelector('.stores__col:first-of-type');
            this.input = this.page.querySelector('.js-search-store');
            this.markers = [];
            this.storesElements = [];
            this.settings = {
                marker_image: '//cdn.shopify.com/s/files/1/0567/4244/5113/t/2/assets/icon-map.png',
                marker_zoom: 15,
            };
            this.map = null;
            this.clustersId = 'clusters';
            this.storeMarkerId = 'unclustered-point';
            this.isMobile = window.innerWidth <= 800;
            this.geoJson = {
                type: 'FeatureCollection',
                features: [],
            };
            this.init();
        }
    }

    init() {
        this.initPopin();
        this.initMobile();
        fetch('https://store.faume.co/dadasport/list')
            .then(res => res.json())
            .then(stores => {

                stores.forEach((store, index) => {
                    let zip = `${store.zip.replaceAll(' ', '')}`;
                    store.zip = zip.length === 4 ? `0${zip}` : zip;
                    Object.keys(store.schedule).forEach(day => {
                        store.schedule[day] = store.schedule[day].replaceAll(':', 'h').replaceAll('h00', 'h')
                    })
                    this.createStoreElement(store, index === (stores.length - 1));
                    this.geoJson.features.push({
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [store.long, store.lat],
                        },
                        properties: {
                            title: store.name,
                            ...store,
                            icon: {
                                className: 'my-icon icon-dc', // class name to style
                                html: '★', // add content inside the marker, in this case a star
                                iconSize: null // size of icon, use null to set the size in CSS
                            }
                        }
                    });
                });
                this.displayMap();
                this.initSearch();
            });
        window.addEventListener('resize', () => this.isMobile = window.innerWidth <= 800)
    }

    initPopin() {
        const popin = document.querySelector('.stores-popin');
        popin.addEventListener('click', e => {
            if (e.target.closest('.btn') || !e.target.closest('.stores-popin__inner')) {
                e.preventDefault();
                popin.classList.remove('visible')
            }
        })
    }

    initMobile() {
        const btns = this.page.querySelectorAll('.stores__links button');
        const cols = this.page.querySelectorAll('.stores__col');
        btns.forEach((btn, i) => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                btns.forEach(b => b.classList.remove('active'));
                cols.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                cols[i].classList.add('active')
            })
        })
    }

    displayMap() {
        // Create map
        //mapboxgl.accessToken = 'pk.eyJ1IjoiZmF1bWUiLCJhIjoiY2t1emp1MTdyMzU2bDJvczdrZnR2dXZ2NiJ9.NH2qBgiddQH_ifmipnhCxw';
        mapboxgl.accessToken = 'pk.eyJ1IjoiZmF1bWUiLCJhIjoiY2t1empyaWszMnpsNjJ1cXZwdXRhb3IwdyJ9.tK1HEZ0y0MpPbpSuBReqbg';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/faume/ckyat5d6d4ig814qkdvokqh58',
            center: [2.3488, 48.8534],
            zoom: 11
        });

        this.map.on('load', () => {
            this.geoJson.features.forEach((marker, i) => {
                let el = document.createElement('div');
                el.className = 'marker';
                const popup = new mapboxgl.Popup({offset: 25}).setHTML(this.getStorePopup(marker.properties));
                const mapMarker = new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .setPopup(popup)
                    .addTo(this.map);
                this.markers.push({
                    city: marker.properties.city,
                    type: marker.properties.type,
                    name: marker.properties.name.toLowerCase(),
                    el: el,
                    mapMarker: mapMarker,
                    popup: popup
                });
            });

            this.initGeolocation();
            this.mapContainer.addEventListener('click', (e) => {
                this.displayStoreEl(e);
            });
        });
    }

    displayStoreEl(e) {
        const popinLink = e.target.closest('.js-store-popin-link');
        if (popinLink) {
            const storeElement = [...this.storesElements].find((store) => store.dataset.id === popinLink.dataset.id);
            if (storeElement) {
                storeElement.classList.remove('hide');
                this.storesElements.forEach(el => {
                    el.classList.remove('active');
                    el.querySelector('.store__schedule').classList.add('hide')
                });
                //if (!this.isMobile) window.scrollTo({ top: storeElement.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
                storeElement.classList.add('active');
            }
        }
    }

    initGeolocation() {
        this.map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
            }),
        );
    }

    getStorePopup(store) {
        return `
            <div class="cluster-popin">
                <a href="#" class="js-store-popin-link" data-id="${store.id}">
                    <p>${store.name}</p>
                    ${store.street}<br>
                    ${store.zip} ${store.city}<br>
                    ${store.phone && store.phone !== '' ? `${store.phone}<br>` : ''}
                </a>
                <a href="/pages/rdv?boutique=${store.id}" class="link-2">Prendre rendez-vous</a>
            </div>`
    }

    centerMap(positions, zoom) {
        this.map.flyTo({
            center: positions,
            zoom: zoom,
            speed: 1,
            curve: 2,
        });
    }

    initSearch() {
        this.input.addEventListener('keydown', () => {
            setTimeout(() => {
                if(this.input.value) {
                    this.storesElements.forEach(store => store.classList.add('is-hidden'));
                    this.displayStore(this.input.value.toLowerCase())
                } else {
                    this.storesElements.forEach(store => store.classList.remove('is-hidden'));
                }
                this.input.focus();
                setTimeout(() => this.input.focus(), 50);
            }, 100)
        })
    }

    displayStore(value) {
        this.storesElements.forEach(store => store.classList.remove('active'));
        this.markers.forEach(marker => marker.el.classList.remove('active'));
        const stores = this.storesElements.filter(e => e.dataset.name.includes(value) || e.dataset.city.includes(value) || e.dataset.street.includes(value) || e.dataset.zip.includes(value));
        stores.forEach(el => el.classList.remove('is-hidden'));
        const store = stores[0];
        if (store) {
            store.classList.add('active');
            this.centerMap([store.dataset.long, store.dataset.lat], 13);
        }
    }

    createStoreElement(store, isLast) {
        const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'friday', 'thursday', 'saturday'];
        const div = document.createElement('div');
        div.className = 'store';
        div.dataset.name = store.name.toLowerCase();
        div.dataset.city = store.city.toLowerCase();
        div.dataset.type = store.type.toLowerCase();
        div.dataset.zip = store.zip.toLowerCase();
        div.dataset.street = store.street.toLowerCase();
        div.dataset.id = store.id;
        div.dataset.lat = store.lat;
        div.dataset.long = store.long;
        const btn = {
            schedule: document.createElement('button'),
        };
        const todaySchedule = store.schedule[week[new Date().getDay()]];
        btn.schedule.innerHTML = 'Horaires';
        btn.schedule.innerHTML = todaySchedule && todaySchedule.includes('h') ? `<span>Ouvert aujourd'hui:</span><span>${todaySchedule}</span>` : '<span>Les Horaires:</span>';
        div.innerHTML = `
            <h2>${store.name}</h2>
            <p>
                ${store.street}<br>
                ${store.zip} ${store.city}<br>
            </p>
            ${store.phone && store.phone !== '' ? `<span class="store__phone">${store.phone}</span>` : ''}
            <a href="/pages/rdv?boutique=${store.id}" class="link-2">Prendre rendez-vous</a>
        `;
        const schedule = document.createElement('div');
        schedule.className = 'store__schedule hide';
        schedule.innerHTML = `
            <div>
            <table>
            <tr><td>Lundi:</td><td>${store.schedule.monday}</td></tr>
            <tr><td>Mardi:</td><td>${store.schedule.tuesday}</td></tr>
            <tr><td>Mecredi:</td><td>${store.schedule.wednesday}</td></tr>
            <tr><td>Jeudi:</td><td>${store.schedule.friday}</td></tr>
            <tr><td>Vendredi:</td><td>${store.schedule.thursday}</td></tr>
            <tr><td>Samedi:</td><td>${store.schedule.saturday}</td></tr>
            <tr><td>Dimanche:</td><td>${store.schedule.sunday || 'Fermé'}</td></tr>
            </table>
            </div>
        `;
        div.append(btn.schedule);
        div.append(schedule);
        this.storesElements.push(div);
        this.storesContainer.append(div);
        div.addEventListener('click', () => {
            //if (!this.isMobile) window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the map
            this.centerMap([store.long, store.lat], this.settings.marker_zoom);
            document.querySelectorAll('.stores .store.active').forEach(s => s.classList.remove('active'));
            div.classList.add('active');
            this.markers.forEach(m => {
                if (m.popup.isOpen()) m.mapMarker.togglePopup();
                if (m.name === div.dataset.name) m.mapMarker.togglePopup();
            })
        });
        btn.schedule.addEventListener('click', e => {
            e.preventDefault();
            schedule.classList.toggle('hide');
            btn.schedule.classList.toggle('open');
            if (isLast) {
                setTimeout(() => {
                    this.storesCol.scrollTo({
                        top: this.storesCol.scrollHeight,
                        behavior: 'smooth'
                    })
                }, 20)
            }
        });
    }
}
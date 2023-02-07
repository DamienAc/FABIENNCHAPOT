import LazyLoading from "./common/lazy-loading";
import { initNewsletter } from "./sections/newsletter";
import { initMinicart } from "./sections/minicart";
import { initHeader } from "./sections/header";
import Search from "./sections/Search";
import { initSizeGuide } from "./sections/size-guide";
import { initMenu } from "./sections/menu";
import { initProduct } from "./sections/product";
import Filters from "./filters/Filters";
import { initCarousel } from "./snippets/carousel";
import { initRecentlyViewed } from "./sections/recently-viewed";
import { initRegister } from "./sections/register";
import { initLogin } from "./sections/login";
import { initFaq } from "./sections/faq";
import Wishlist from "./sections/Wishlist";
import { initHomeBanner } from "./sections/home-banner";
import { initHomeCategories } from "./sections/home-categories";
import { initHomeHighlight } from "./sections/home-highlight";
import { updateProductCard } from "./snippets/update-product-card";
import { initProductQuickView } from "./sections/product-quick-view";
import { initAnnoucement } from "./sections/annoucement";
import { initCartSuggestion } from "./sections/cart-suggestion";
//import {initRdv} from "./sections/rdv";
//import StoreLocator from "./sections/StoreLocator";

const initResaleStorage = () => {
    window.localStorage.removeItem('session');
    window.localStorage.removeItem('products');
    window.localStorage.removeItem('cartConfirmation');
}

window.addEventListener('DOMContentLoaded', () => {
    new LazyLoading();
    initResaleStorage();
    initHeader();
    initAnnoucement();
    initHomeBanner();
    initHomeCategories();
    initNewsletter();
    initMinicart();
    new Search();
    initSizeGuide();
    initMenu();
    initProduct();
    new Filters();
    initCarousel();
    initRecentlyViewed();
    initRegister();
    initLogin();
    initFaq();
    new Wishlist();
    initCartSuggestion();
    initHomeHighlight();
    updateProductCard();
    initProductQuickView();
    //initRdv();
    //new StoreLocator();
});

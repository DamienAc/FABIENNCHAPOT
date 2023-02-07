<template>
    <div class="rp-cart-item">
        <img :src="photo" :alt="product.name">
        <div>
            <h4>{{ product.title.label }}</h4>
            <ul>
                <li>{{ product.label.replaceAll('_', ' ') | firstUp }}</li>
                <li>{{ cartItemSize }} <span>{{ product.size.label }}</span></li>
                <li>{{ product.condition.name.replace('Etat neuf', 'État neuf') }}</li>
            </ul>
            <span>{{ cartItemRef }} <span>{{ product.physical_tag }}</span></span>
            <p>{{ cartItemPrice }} <span>{{ product.price | money }}</span></p>
            <button @click.prevent="remove">
                <svg viewBox="0 0 22.6 22.6"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6 1.4L21.2 0l-9.9 9.9L1.4 0 0 1.4l9.9 9.9L0 21.2l1.4 1.4 9.9-9.9 9.9 9.9 1.4-1.4-9.9-9.9z"></path></svg>
            </button>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: 'CartItem',
    props: {
        product: Object
    },
    computed: {
        ...mapGetters(['cartItemSize','cartItemRef','cartItemPrice']),
        photo() {
            return this.product && this.product.photos && this.product.photos[0] && this.product.photos[0].url
                    ? this.product.photos[0].url
                    : "//cdn.shopify.com/s/files/1/0553/9246/9094/t/4/assets/placeholder.svg"
        }
    },
    methods: {
        ...mapActions(['deleteProduct']),
        remove() {
            this.deleteProduct(this.product.hash)
        }
    }
}
</script>

<style lang="scss">
@import "css/mixins/breakpoints";
.rp-cart-item {
    display: flex;
    position: relative;
    margin: 25px 0;
    font-size: 1.4rem;

    @media screen and (max-width: 800px) {
        margin: 20px 0;
    }

    div {
        position: relative;
        padding-right: 30px;
        flex-grow: 1;

        @include up(md) {
            padding-right: 30px;
        }
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 11px;
            height: auto;
            cursor: pointer;
        }
    }

    img {
        width: 80px;
        height: 123px;
        object-fit: cover;
        flex-shrink: 0;
        margin-right: 15px;
    }

    p,
    h4 {
        font-size: 1.2rem;
        font-weight: 500;
    }

    p {
        padding-top: 10px;
    }

    h4 {
        font-size: 1.5rem;
    }

    span,
    ul {
        font-size: 1.2rem;
        line-height: 1.4;
    }

    li {
        display: inline-block;

        &:not(:last-of-type) {

            &:after {
                content: "";
                display: inline-block;
                width: 1px;
                height: 10px;
                background-color: #aaa;
                margin: 0 10px;
            }
        }
    }
}
</style>
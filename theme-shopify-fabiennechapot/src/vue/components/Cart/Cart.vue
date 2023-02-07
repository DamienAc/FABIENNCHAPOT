<template>
    <section class="rp-resume">
        <h2 class="h3">{{ cartTitle }}</h2>
        <div class="rp-resume__container">
            <div class="rp-resume__products">
                <h3>{{ products && products.length ?  cartArticlesText  : cartNoArticlesText }}<span v-if="products && products.length">, {{products.length}} {{ products.length > 1 ? cartMoreArticlesText : cartLessArticleText }}</span></h3>
                <ul v-if="products && products.length">
                    <li v-for="(product, i) in products" :key="`p-${i}`">
                        <CartItem :product="product"/>
                    </li>
                </ul>
                <p v-else>{{ cartEmptyText }}</p>
                <CustomButton v-if="!cartConfirmation" @click.native.prevent="$router.push({name: 'customer-step-1'})" color="yellow">{{ cartBtnAddArticleText }}</CustomButton>
            </div>
            <form v-if="products && products.length" @submit.prevent="$emit('next')">
                <h3>{{ cartTitleAmount  }}</h3>
                <table>
                    <tr>
                        <th colspan="2">{{ cartTotalArticlesText }}</th>
                    </tr>
                    <tr v-for="product in products">
                        <td>{{ product.title.label }}</td>
                        <td>{{ product.price | money }}</td>
                    </tr>
                    <tr>
                        <th>{{ cartNumberArticlesText }}</th>
                        <th>{{ products.length }}</th>
                    </tr>
                    <tr>
                        <th>{{ cartTotalOfferText }}</th>
                        <th>{{ total | money }}</th>
                    </tr>
                </table>
                <InputCheckbox v-if="!cartConfirmation" name="cvg" :model="cgv" @input="e => cgv = e">
                    <span v-html="cartConfirmationText"></span>
                </InputCheckbox>
                <InputCheckbox name="agree" v-model="agree" v-if="!cartConfirmation">
                    <span v-if="products.length > 1">{{ cartConfirmationCertifText1 }}</span>
                    <span v-else>{{ cartConfirmationCertifText2 }}</span>
                </InputCheckbox>
                <CustomButton v-show="products.length" :invalid="!cartConfirmation && (!cgv || !agree)" :submit="true">{{ cartBtnValidation1 }} {{ total | money }} {{ cartBtnValidation2 }}</CustomButton>
            </form>
        </div>
    </section>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import CartItem from "./CartItem";
import CustomButton from "../Common/Button";
import InputCheckbox from "../Common/InputCheckbox";

export default {
    name: 'Cart',
    components: {CustomButton, CartItem, InputCheckbox},
    data() {
        return {
            cgv: false,
            agree: false
        }
    },
    computed: {
        ...mapState(['products', 'cartConfirmation', 'employeeToken']),
        ...mapGetters([
        'total','cartTitle','cartEmptyText',
        'cartArticlesText','cartNoArticlesText',
        'cartMoreArticlesText','cartLessArticleText',
        'cartBtnAddArticleText','cartTitleAmount',
        'cartTotalArticlesText','cartNumberArticlesText',
        'cartTotalOfferText','cartConfirmationText',
        'cartConfirmationCertifText1','cartConfirmationCertifText2',
        'cartBtnValidation1','cartBtnValidation2'
    ])
    }
}
</script>

<style lang="scss">
@import "css/mixins/breakpoints";

.rp-resume {
    max-width: 1400px;
    margin: auto;

    .btn {
        font-size: 1.4rem;
        margin-left: 0;
    }

    &__container {
        @media screen and (min-width: 1024px) {
            display: flex;
            align-items: flex-start;
        }
    }

    h3 {
        padding-bottom: 15px;
        border-bottom: 1px solid #c1cdd7;
        text-align: left;
        font-weight: 500;

        span {
            font-weight: 100;
        }
    }

    h2 {
        margin-bottom: 60px;
        text-align: center;

        @media screen and (max-width: 800px) {
            margin-bottom: 50px;
        }

        & + p {
            text-align: center;
            margin-bottom: 50px;
        }
    }

    form {
        flex-shrink: 0;
        width: 35%;
        min-width: 350px;

        @media screen and (min-width: 1024px) {
            background-color: #F3F5F8;
            margin-left: 50px;
            padding: 20px;
        }

        @media screen and (max-width: 1023px) {
            margin-top: 70px;
            width: 100%;
        }

        .btn {
            width: 100%;
            margin-top: 40px;
        }

        h3.h4 {
            text-align: center;
        }
    }

    .checkbox {
        margin: 20px 0;

        &:first-of-type {
            margin-top: 30px;
        }

        &:last-of-type {
            margin-bottom: 30px;
        }

        span, p {
            font-size: 1.4rem;
            letter-spacing: normal;
        }
        p{
            display: block;
            color: #000;
        }
    }

    table {
        border-bottom: 1px solid #c1cdd7;
        width: 100%;
        font-size: 1.4rem;
    }

    th {
        font-weight: 500;

        &:nth-of-type(2) {
            font-weight: 100;
        }
    }

    td, th {
        text-align: left;
        padding-bottom: 15px;

        @media screen and (max-width: 800px) {
            font-size: 1.4rem;
        }

        &:nth-of-type(2) {
            text-align: right;
        }

        &[colspan="2"] {
            text-align: left;
        }
    }

    td {
        font-weight: 100;
    }

    tr:first-of-type {
        text-align: left;

        th {
            padding-top: 15px;
        }
    }


    &__products {
        flex-grow: 1;

        & > p {
            margin: 20px 0 ;
        }
    }

    label {
        display: flex;
        align-items: center;

        input {
            border: solid 1px #000;
            width: 17px;
            height: 17px;
            margin-right: 21px;
            box-shadow: none;
            border-radius: 0;
            flex-shrink: 0;
        }
    }
}
</style>
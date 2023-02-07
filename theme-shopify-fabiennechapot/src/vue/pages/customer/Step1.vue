<template>
    <div class="rp-step-1">

        <div class="rp-step-1__error" v-if="error">
            <FormMessage>{{ error }}</FormMessage>
            <Button @click.native.prevent="() => {error = false; step = 1}">{{ btnRestart }}</Button>
        </div>

        <Loader v-else-if="loading"/>

        <StepConditions
                v-else-if="step === 0"
                @next="step = 1"/>

        <StepReference
                v-else-if="step === 1"
                :model="formData.number"
                @next="e => {
                    formData.number = e.ref;
                    colors = e.colors;
                    step = 2
                }"/>

        <StepColor
                v-else-if="step === 2"
                :model="formData.color"
                :colors="colors"
                :number="formData.number"
                @next="e => {
                    formData.color = e.color;
                    conditions = e.conditions;
                    sizes = e.sizes;
                    product = e.product;
                    step = 3
                }"/>

        <StepSize
                v-else-if="step === 3"
                :model="formData.size"
                :sizes="sizes"
                @next="e => {
                    formData.size = e;
                    step = 4
                }"/>

        <StepEtat
                v-else-if="step === 4"
                :model="formData.condition"
                :conditions="conditions"
                @next="e => {
                    formData.condition = e;
                    confirm();
                }"/>

    </div>
</template>

<script>

import {mapActions, mapState, mapGetters} from 'vuex';
import StepReference from "../../components/AddProduct/StepReference";
import StepColor from "../../components/AddProduct/StepColor";
import StepSize from "../../components/AddProduct/StepSize";
import StepEtat from "../../components/AddProduct/StepEtat";
import StepConditions from "../../components/AddProduct/StepConditions";
import Loader from "../../components/Common/Loader";

export default {
    name: 'CustomerStep1',
    components: {StepConditions, StepEtat, StepSize, StepColor, StepReference, Loader},
    data() {
        return {
            step: 0,
            colors: [],
            sizes: [],
            conditions: [],
            loading: false,
            error: false,
            product: null,
            formData: {
                number: null,
                color: null,
                size: null,
                condition: null
            }
        }
    },
    computed: {
        ...mapState(['cartConfirmation', 'products']),
        ...mapGetters([ 'btnRestart'])
    },
    methods: {
        ...mapActions(['unsetCart', 'addProduct']),
        next() {
            this.$router.push({name: 'customer-step-2'})
        },
        confirm() {
            let data = {
                product: {
                    token: `${this.product.id}`,
                    reference: {
                        physical_tag: `${this.formData.number.toUpperCase()}`,
                        color: {
                            code: this.formData.color
                        },
                        size: {
                            id: this.formData.size,
                            label: this.sizes.find(s => s.id === this.formData.size).label
                        }
                    },
                    condition: {
                        id: this.formData.condition,
                        name: this.conditions.find(c => c.id === this.formData.condition).name
                    }
                }
            };
            this.error = false;
            this.loading = true;
            this.addProduct({...data})
                    .then(() => {
                        this.product = null;
                        this.formData = {
                            color: null,
                            size: null,
                            number: null,
                            condition: null
                        };
                        this.next();
                    })
                    .catch(msg => {
                        this.error = msg;
                    })
                    .finally(() => this.loading = false)
        }
    },
    beforeMount() {
        if (this.cartConfirmation) {
            this.unsetCart()
        }
        if (this.products && this.products.length && this.step === 0) this.step = 1;
    }
}

</script>

<style lang="scss">
.rp-step-1 {
    text-align: center;

    .btn:disabled {
        opacity: 0;
    }

    h2 {
        margin-bottom: 60px;

        @media screen and (max-width: 800px) {
            margin-bottom: 50px;
        }

        & + div {
            margin-bottom: 60px;

            @media screen and (max-width: 800px) {
                margin-bottom: 50px;
            }
        }
    }

    form {
        margin-top: 60px;

        @media screen and (max-width: 800px) {
            margin-top: 50px;
        }
    }

    .btn {
        margin-top: 60px;
        margin-right: auto;
        margin-left: auto;
    }
}

.rp-color,
.rp-size,
.rp-etat {
    form {
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            span {
                &:first-of-type {
                    font-weight: 500;
                    font-size: 1.6rem;
                    text-transform: uppercase;
                }

                &:nth-of-type(2) {
                    font-size: 1.4rem;
                    margin-top: 15px;
                }
            }
        }
    }

    label {
        outline: solid 1px #000;
        margin: 10px;
        padding: 10px;
        min-height: 54px;
        min-width: 54px;
        border-radius: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        cursor: pointer;
        background-color: #fff;

        input {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            pointer-events: none;
            width: 100%;
            height: 100%;
        }

        &:hover {
            outline: solid 2px #000;
        }

        &.is-selected {
            background-color: #000;
            color: #fff;
        }
    }
}
</style>

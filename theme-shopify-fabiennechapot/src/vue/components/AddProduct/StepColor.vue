<template>
    <section class="rp-color">
        <h2 class="h3">{{ colorTitle }}</h2>
        <form @submit.prevent="next">
            <FormMessage v-if="error">{{ colorTextError }}</FormMessage>
            <div>
                <label v-for="color in colors" :class="{'is-selected': selected === color.code}">
                    <span class="rp-color__hexa" :style="{ backgroundColor: color.hexa }"></span>
                    <input type="radio" name="color" required :value="color.code" v-model="selected"/>
                    <span>{{ color.label }}</span>
                </label>
            </div>
            <CustomButton :invalid="!selected" :loading="false" :submit="true">{{ btnContinue }}</CustomButton>
        </form>
    </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CustomButton from "../Common/Button";

export default {
    name: 'StepColor',
    components: {CustomButton},
    props: {
        number: [String, Number],
        colors: Array,
        model: [String, Number, NaN]
    },
    data() {
        return {
            loading: false,
            error: false,
            selected: null
        }
    },
    computed: {
        ...mapGetters(['colorTitle','btnContinue','colorTextError']),
        listColors() {
            if (!this.colors || !this.colors.length) return [];
        }
    },
    methods: {
        ...mapActions(['getProductInfos']),
        next() {
            this.loading = true;
            this.error = false;
            this.getProductInfos({color: this.selected, number: this.number})
                    .then(product => {
                        this.product = product;
                        this.loading = false;
                        this.$emit('next', {
                            product: product,
                            color: this.selected,
                            sizes: product.sizes,
                            conditions: product.conditions
                        })
                    })
                    .catch(() => this.error = true)
                    .finally(() => this.loading = false)
        }
    },
    watch: {
        selected() {
            if (this.selected) {
                this.next()
            }
        }
    },
    mounted() {
        if (this.model) this.selected = this.model
    },
    beforeMount() {
        if (this.colors && this.colors.length === 1) {
            this.selected = this.colors[0].code;
            this.next()
        }
    }
}
</script>

<style lang="scss">
.rp-color {
    form > div {
        align-items: flex-start;
    }

    form label {
        outline: none !important;
        padding: 0;
        margin: 5px;
        min-width: 90px;
        background-color: transparent;

        &.is-selected {
            background-color: transparent;
            color: #000;

            span {
                font-weight: 500;
            }
            .rp-color__hexa {
                outline: solid 1px #000;
            }
        }

        @media screen and (min-width: 1025px) {
            &:not(.is-selected):hover {
                .rp-color__hexa {
                    outline: solid 1px #000;
                }
            }
        }

        input + span {
            font-weight: 100;
            font-size: 1.6rem;
            text-transform: uppercase;
        }
    }

    &__hexa {
        position: relative;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: block;
        border: solid 1px rgba(0,0,0,.3);
    }
}
</style>
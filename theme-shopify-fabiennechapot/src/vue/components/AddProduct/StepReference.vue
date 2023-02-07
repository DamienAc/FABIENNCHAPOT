<template>
    <section class="rp-ref">
        <h2 class="h3">{{ refTitle }}</h2>
        <form @submit.prevent="$emit('next', {ref: ref, colors: colors})">
            <input :class="{'is-invalid': invalid}" type="text" v-model="ref" name="ref" required placeholder="2020-08-ALBI"/>
            <FormMessage v-if="invalid">{{ refError }}</FormMessage>
            <p class="rp-ref__subtitle" @click.prevent="isPopinOpen = true">{{ refHelp }}</p>
            <Loader v-if="loading && ref && ref !== ''"/>
            <CustomButton v-else :invalid="!ref || ref === '' || invalid" :submit="true">{{ btnContinue }}</CustomButton>
        </form>
        <Popin v-if="isPopinOpen" @close="isPopinOpen = false">
            <h2 class="h4">{{ refHelp }}</h2>
            <div v-html="refText"/>
            <div class="rp-ref__col">
                <div>
                    <img :src="refImage1" alt="Un nom de modèle">
                </div>
            </div>
        </Popin>
    </section>
</template>

<script>
import CustomButton from "../Common/Button";
import Loader from "../Common/Loader";
import FormMessage from "../Common/FormMessage";
import Popin from "../Common/Popin";
import {mapGetters, mapActions} from 'vuex';

export default {
    name: "StepReference",
    components: {CustomButton, FormMessage, Loader, Popin},
    props: {
        model: [String, Number, NaN]
    },
    data() {
        return {
            colors: null,
            loading: false,
            error: false,
            ref: null,
            isPopinOpen: false,
            index: 0
        }
    },
    watch: {
        ref() {
            const i = this.index + 1;
            this.index = i;
            this.loading = true;
            this.error = false;
            this.getProductColors(this.ref.toUpperCase())
                    .then(colors => {
                        if (this.index === i) this.colors = colors;
                    })
                    .catch(() => {
                        if (this.index === i) this.error = true
                    })
                    .finally(() => {
                        if (this.index === i) this.loading = false
                    })
        }
    },
    computed: {
        ...mapGetters(['refTitle', 'refText', 'refHelp', 'refImage1', 'refImage2','btnContinue','refError']),
        invalid() {
            return this.error && this.ref && this.ref !== ''
        }
    },
    methods: {
        ...mapActions(['getProductColors'])
    },
    mounted() {
        if (this.model) this.ref = this.model
    }
}
</script>

<style lang="scss">
.rp-ref {

    h2 + p {
        text-decoration: underline;
        cursor: pointer;
    }

    &__subtitle {
        margin: 20px 0;
        text-align: center;
        font-size: 1.4rem;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            text-decoration: none;
        }
    }

    &__col {
        margin-top: 60px;

        p {
            margin-bottom: 40px;
            text-align: center;
        }
    }

    .vue-popin {
        font-size: 1.4rem;

        strong, em {
            font-weight: 500;
        }

        h2 {
            margin-bottom: 20px;

            & + div {
                max-width: 550px;
                margin-right: auto;
                margin-left: auto;
            }
        }

        &__inner {
            max-width: 860px;
        }
        img {
            width: 100%;
            height: auto;
            margin-top: 0;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
        }

        .btn-close {
            text-align: center;
            margin: 0 auto 40px;
        }
    }

    .rp-loader {
        width: 60px;
        height: 54px;
    }

    .rp-form-message {

        &.is-hide {
            opacity: 0;
            pointer-events: none;
        }
    }

    input {
        background-color: #fff;
        border: 1px solid #ABB0B2;
        border-radius: 4px;
        font-size: 1.6rem;
        opacity: 1;
        padding: 10px 15px;
        color: #000;
        width: 100%;
        max-width: 400px;
        text-transform: uppercase;
        min-height: 52px;

        &.is-invalid {
            border-color: #a80000;
        }

        &:-webkit-autofill:focus {
            -webkit-box-shadow:0 0 0 50px #fff inset;
        }

        &::placeholder {
            color: #ccc;
        }
    }
}
</style>
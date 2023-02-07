<template>
    <div>
        <div v-if="!displayAddress" class="rp-log-register">
            <div class="wrapper">
                <div class="rp-log-register__header">
                    <div>
                        <h2 @click.prevent="displayLogin = true" :class="{'is-active': displayLogin}" class="h4">{{ logRegistertabs1 }}</h2>
                        <h2 @click.prevent="displayLogin = false" :class="{'is-active': !displayLogin}" class="h4">{{ logRegistertabs2 }}</h2>
                    </div>
                </div>
                <div class="rp-log-register__inner">
                    <Login v-if="displayLogin" @next="displayAddress = true" @register="displayLogin=false"/>
                    <Register v-else @next="displayAddress = true" @login="displayLogin=true"/>
                </div>
            </div>
        </div>
        <div v-else>
            <Loader v-if="loading"/>
            <Addresses v-else @next="addressId => confirm(addressId)"/>
        </div>
    </div>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex';
    import Login from "../../components/Login";
    import Loader from "../../components/Common/Loader";
    import Register from "../../components/Register";
    import Addresses from "../../components/Addresses/Addresses";

    export default {
        name: 'CustomerStep3',
        components: {Addresses, Register, Login, Loader},
        data() {
            return {
                displayLogin: true,
                displayAddress: false,
                loading: false
            }
        },
        computed: {
            ...mapState(['user', 'session', 'canExchange', 'cartConfirmation', 'products']),
            ...mapGetters([
                'userToken','logRegistertabs1',
                'logRegistertabs2'
            ])
        },
        methods: {
            ...mapActions(['setCartConfirmation']),
            next() {
                this.$router.push({name: 'customer-step-4'});
            },
            confirm(addressId) {
                if (this.cartConfirmation) {
                    this.next()
                } else {
                    this.loading = true;
                    const data = {
                        token: this.userToken,
                        session: this.session,
                        address: addressId
                    };
                    this.setCartConfirmation({...data})
                        .then(() => {
                            this.loading = false;
                            this.next()
                        })
                        .catch(() => this.loading = false)
                }
            }
        },
        watch: {
            displayAddress() {
                window.scrollTo(0, 0)
            },
            user(user) {
                if (user) {
                    this.displayAddress = true
                }
            }
        },
        mounted() {
            if (!this.products || !this.products.length) {
                this.$router.push({name: 'customer-step-1'});
            } else if (this.cartConfirmation) {
                this.displayAddress = true
            }
        }
    }

</script>

<style lang="scss">
.rp-log-register {

    .wrapper {
        max-width: 500px;
    }

    &__header {
        margin-bottom: 20px;

        div {
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }

        h2 {
            cursor: pointer;
            transition: opacity ease .3s;

            &:not(.is-active) {
                font-weight: 100;

                @media screen and (max-height: 1021px) {

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            &.is-active {
                text-decoration: underline;
            }

            &:first-of-type {
                margin-right: 20px;
            }
        }
    }

    &__error {
        margin: 20px 0;
        color: #8B161E;
        font-size: 1.4rem;
        text-align: center;
        font-weight: 400;
    }

    &__subtitle {
        margin: 20px 0 40px;
        text-align: center;
    }

    .btn {
        width: 100%;
        max-width: 100%;
        margin-top: 40px;

        & + a {
            text-align: center;
            width: 100%;
            margin-top: 20px;
            display: block;
            font-size: 1.4rem;
            text-decoration: underline;
        }
    }

    .register__check {
        .field {
            margin: 15px 0 0 !important;
        }
    }
}
</style>

<template>
    <section class="rp-addresses">
        <h2 class="h3">{{ addressTitle }}</h2>
        <div class="rp-addresses__container">
            <div class="rp-addresses__add" v-if="!cartConfirmation">
                <h3>{{ addressSubtitle1 }}</h3>
                <form @submit.prevent="add">
                    <FormMessage v-if="error">{{ error }}</FormMessage>
                    <FormMessage v-if="success" :success="true">{{ addressSuccess }}</FormMessage>
                    <InputText :model="newAddress.address1" :placeholder="addressPlaceholder1" name="address1" @input="e => newAddress.address1 = e" :focus="true"/>
                    <InputText :model="newAddress.address2" :placeholder="addressPlaceholder2" name="address2" :required="false" @input="e => newAddress.address2 = e"/>
                    <InputText :model="newAddress.zip"  :placeholder="addressPlaceholder3" name="zip" @input="e => newAddress.zip = e"/>
                    <InputText :model="newAddress.city" :placeholder="addressPlaceholder4" name="zip" @input="e => newAddress.city = e"/>
                    <InputSelect :model="newAddress.country"  :placeholder="addressPlaceholder5" :options="countries" name="stores" @input="e => newAddress.country = e"/>
                    <CustomButton :submit="true" :loading="loading">{{ addressAddBtn }}</CustomButton>
                </form>
            </div>
            <div class="rp-addresses__list">
                <div v-if="addresses && !loadingAddresses">
                    <div v-if="addresses.length">
                        <h3>{{ listAddressTitle }}</h3>
                        <ul>
                            <li v-for="(address, i) in addresses" :key="`address-a-${i}`" v-show="!cartConfirmation || address.id === addressSelected">
                                <AddressItem :address="address" :key="`address-${i}`" @select="id => addressSelected = id" :addressSelected="addressSelected"/>
                            </li>
                        </ul>
                        <CustomButton :invalid="!addressSelected" @click.native="$emit('next', addressSelected)">{{ loginBtn }}</CustomButton>
                    </div>
                    <div v-else>
                        <p class="rp-addresses__empty">{{ addressEmpty }}</p>
                    </div>
                </div>
                <AddressLoader v-else/>
            </div>
        </div>
    </section>
</template>

<script>

    import {mapState, mapGetters, mapActions} from 'vuex';
    import AddressItem from "./AddressItem";
    import AddressLoader from "./AddressLoader";
    import InputText from "../Common/InputText";
    import InputSelect from "../Common/InputSelect";
    import CustomButton from "../Common/Button";
    import FormMessage from "../Common/FormMessage";

    export default {
        name: 'Addresses',
        components: {CustomButton, AddressLoader, AddressItem, InputText, InputSelect, FormMessage},
        data() {
            return {
                success: false,
                error: false,
                loading: false,
                loadingAddresses: true,
                countries: [
                    {
                        id: 'France',
                        title: 'France'
                    }
                ],
                newAddress: {
                    address1: '',
                    address2: '',
                    zip: '',
                    city: '',
                    country: 'France',
                    country_code: 'FR',
                    country_name: 'France'
                },
                addressSelected: null
            }
        },
        computed: {
            ...mapState(['user', 'cartConfirmation', 'addresses']),
            ...mapGetters([
            'addressTitle', 'addressSubtitle1','addressSubtitle2_1','addressSubtitle2_2',
                'addressAddBtn','addressBtn1','addressBtn2', 'addressSuccess' ,'addressEmpty',
                'addressPlaceholder1','addressPlaceholder2','addressPlaceholder3','addressPlaceholder4',
                'addressPlaceholder5'
            ]),
            listAddressTitle() {
                return this.cartConfirmation ? this.addressSubtitle2_1 : this.addressSubtitle2_2
            },
            loginBtn() {
                return this.cartConfirmation ? this.addressBtn1 : this.addressBtn2
            }
        },
        methods: {
            ...mapActions(['addAddress', 'getAddresses']),
            add() {
                this.error = false;
                this.success = false;
                this.loading = true;
                this.addAddress({...this.newAddress})
                    .then(() => {
                        this.success = true;
                        this.newAddress = {
                            address1: '',
                            address2: '',
                            zip: '',
                            city: '',
                            country: 'France',
                            country_code: 'FR',
                            country_name: 'France'
                        }
                    })
                    .catch(msg => this.error = msg)
                    .finally(() => {
                        this.loading = false;
                        window.scrollTo(0, 0);
                    })
            }
        },
        watch: {
            newAddress: {
                immediate: true,
                handler() {
                    this.error = false;
                    this.success = false;
                },
                deep: true
            }
        },
        beforeMount() {
            if (!this.addresses || !this.addresses.length) {
                this.getAddresses().finally(() => this.loadingAddresses = false)
            } else {
                this.loadingAddresses = false;
            }
            const address = window.localStorage.getItem('selectedAddress');
            if (address) this.addressSelected = address;
            if (this.cartConfirmation && address) {
                this.addressSelected = Number(address)
            }
        }
    }
</script>

<style lang="scss">
    .rp-addresses {
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 60px;

        &__container {
            @media screen and (min-width: 800px) {
                display: flex;
                justify-content: space-between;
            }

            & > * {
                @media screen and (min-width: 800px) {
                    flex: 1;
                }
            }
        }

        h2 {
            margin-bottom: 50px;
        }

        h3 {
            margin-bottom: 15px;
            text-transform: uppercase;
            font-size: 1.3rem;
            font-weight: 500;
            letter-spacing: .4px;
        }

        .field:first-of-type {
            margin-top: 0;
        }

        &__list {

            @media screen and (min-width: 800px) {
                margin-left: 8%;
                padding-left: 8%;
                border-left: 1px solid #c1cdd7;
            }

            @media screen and (max-width: 799px) {
                width: calc(100% + var(--page-margin) + var(--page-margin));
                margin-left: calc(var(--page-margin) * -1);
                padding: 40px var(--page-margin);
                margin-top: 40px;
            }
        }


        button {
            width: 100%;
            margin-left: 0;
            margin-top: 40px;
        }

        &__empty {
            font-weight: 400;
            font-size: 1.4rem;
        }

        .btn {
            font-weight: 400;
        }

        input, select {
            background-color: #fff;
        }
    }
</style>

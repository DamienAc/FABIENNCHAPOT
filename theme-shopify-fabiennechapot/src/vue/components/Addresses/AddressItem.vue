<template>
    <div v-if="address" class="rp-address" :class="{'rp-address--selected': selected}">
        <div class="rp-address__details" @click="select">
            <p>{{address.address1}} {{address.address2}}</p>
            <p>{{address.city}} {{address.zip}}</p>
            <p>{{address.country_name}}</p>
        </div>
        <!--<button v-if="!selected" @click="remove" class="rp-address__remove">Supprimer cette adresse</button>-->
    </div>
</template>

<script>

    import {mapActions} from 'vuex';

    export default {
        name: 'AddressItem',
        data() {
            return {
                addressSelectedId: window.localStorage.getItem('selectedAddress') ? Number(window.localStorage.getItem('selectedAddress')) : null
            }
        },
        props: {
            address: Object,
            addressSelected: [Number, String, NaN]
        },
        methods: {
            ...mapActions(['selectAddress', 'deleteAddress']),
            remove() {
                this.deleteAddress(this.address.id)
            },
            select() {
                this.selectAddress(this.address.id);
                this.$emit('select', this.address.id);
            }
        },
        computed: {
            selected() {
                return this.address && this.address.id === this.addressSelectedId
            }
        },
        watch: {
            addressSelected(value) {
                this.addressSelectedId = value
            }
        },
        mounted() {
            const selected = window.localStorage.getItem('selectedAddress');
            if (this.address && this.address.id && selected && selected === this.address.id) {
                this.select()
            }
        }
    }
</script>

<style lang="scss">

    .rp-address {
        //max-width: 375px;
        margin-bottom: 10px;

        &__details {
            padding: 14px 24px 14px 65px;
            cursor: pointer;
            position: relative;
            background-color: #f3f5f8;
            color: #000;
            font-size: 1.4rem;
            line-height: 1.6;

            &:after,
            &:before {
                content: '';
                display: block;
                width: 20px;
                height: 20px;
                position: absolute;
                left: 20px;
                top: calc(50% - 10px);
                border-radius: 50%;
                border: solid 1px #000;
                background-color: #fff;
            }

            &:after {
                background-color: #000;
                transition: opacity ease .3s;
                transform: scale(.5);
                opacity: 0;
            }
        }

        &--selected {
            .rp-address__details {

                &:after {
                    opacity: 1;
                }
            }
        }

        &__remove {
            width: 100%;
            text-decoration: underline;
            cursor: pointer;
            display: block;
            margin-top: 12px;

            &:hover {
                text-decoration: none;
            }
        }
    }

</style>

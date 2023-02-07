<template>
    <Cart  @next="$router.push({name: 'customer-step-3'})"/>
</template>

<script>

    import Cart from "../../components/Cart/Cart";
    import {mapState} from "vuex";
    export default {
        name: 'CustomerStep2',
        components: {Cart},
        methods: {
            next() {
                this.$router.push({name: 'customer-step-3'});
            }
        },
        computed: {
            ...mapState(['products'])
        },
        beforeMount() {
            if (!this.products || !this.products.length) {
                this.$router.push({name: 'customer-step-1'});
            }
        }
    }

</script>

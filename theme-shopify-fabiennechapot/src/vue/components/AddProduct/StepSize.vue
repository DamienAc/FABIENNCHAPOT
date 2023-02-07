<template>
    <section class="rp-size">
        <h2 class="h3">{{ sizeTitle }}</h2>
        <form @submit.prevent="$emit('next', selected)">
            <div>
                <label v-for="size in listSizes" :class="{'is-selected': selected === size.id}">
                    <input type="radio" name="size" required :value="size.id" v-model="selected"/>
                    <span>{{ size.label }}</span>
                </label>
            </div>
            <CustomButton :invalid="!selected" :submit="true">{{ btnContinue }}</CustomButton>
        </form>
    </section>
</template>

<script>
import {mapGetters} from 'vuex'
import CustomButton from "../Common/Button";

export default {
    name: 'StepSize',
    components: {CustomButton},
    props: {
        sizes: Array,
        model: [String, Number, NaN]
    },
    data() {
        return {
            order: ['XXXXS', '4XS', 'XXXS', '3XS', 'XXS', '2XS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '2XL', 'XXXL', '3XL', 'XXXXL', '4XL', 'XXXXXL', '5XL'],
            selected: null
        }
    },
    computed: {
        ...mapGetters(['sizeTitle','btnContinue']),
        listSizes() {
            if (!this.sizes) return [];
            let sizes = [];
            this.sizes.forEach(s => {
                if (!sizes.find(a => a.id === s.id)) sizes.push(s)
            });
            return sizes.sort((a, b) => a.label - b.label).sort((a, b) => this.order.indexOf(a.label) - this.order.indexOf(b.label));
        }
    },
    watch: {
        selected() {
            if (this.selected) {
                this.$emit('next', this.selected)
            }
        }
    },
    mounted() {
        if (this.model) this.selected = this.model
    },
    beforeMount() {
        if (this.sizes && this.sizes.length === 1) {
            this.$emit('next', this.sizes[0].id)
        }
    }
}
</script>
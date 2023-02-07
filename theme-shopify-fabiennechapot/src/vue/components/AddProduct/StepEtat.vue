<template>
    <section class="rp-etat">
        <h2 class="h3">{{ etatTitle }}</h2>
        <form @submit.prevent="$emit('next', selected)">
            <div>
                <label v-for="(condition, i) in listConditions" :class="{'is-selected': selected === condition.id}" :key="`etate-${i}`">
                    <img v-if="i === 0" src="https://cdn.shopify.com/s/files/1/0553/9246/9094/files/PICTOS-ETAT-NEUF-02.svg?v=1668062036" alt="Choix de l'état">
                    <img v-else-if="i === 1" src="https://cdn.shopify.com/s/files/1/0553/9246/9094/files/PICTOS-ETAT-BON-03.svg?v=1668062036" alt="Choix de l'état">
                    <img v-else src="https://cdn.shopify.com/s/files/1/0553/9246/9094/files/PICTOS-ETAT-PORTE-04.svg?v=1668062036" alt="Choix de l'état">
                    <input type="radio" name="etat" required :value="condition.id" v-model="selected"/>
                    <span>{{ condition.name.replace('Etat neuf', 'État neuf') }}</span>
                    <span>{{ i === 0 ? etatNeuf : i === 1 ? etatExcellent : etatTresbon }}</span>
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
    name: 'StepEtat',
    components: {CustomButton},
    props: {
        conditions: Array,
        model: [String, Number, NaN]
    },
    data() {
        return {
            order: ['Etat neuf ', 'Excellent état', 'Très bon état', 'Bon état', 'New', 'Excellent condition', 'Very good condition'],
            selected: null
        }
    },
    computed: {
        ...mapGetters(['etatTitle', 'etatNeuf', 'etatExcellent', 'etatTresbon','btnContinue']),
        listConditions() {
            if (!this.conditions) return [];
            return this.conditions.sort((a,b) => this.order.indexOf(a.name) - this.order.indexOf(b.name))
        }
    },
    watch: {
        selected() {
            if (this.selected) this.$emit('next', this.selected)
        }
    },
    beforeMount() {
        if (this.model) this.selected = this.model
    }
}
</script>

<style lang="scss">
.rp-etat {
    form {
        label {
            justify-content: flex-start;
            padding: 25px 15px;
            max-width: 250px;
            border-radius: 0;

            span:first-of-type {
                font-size: 2rem;
            }

            &.is-selected {
                img,
                svg {
                    filter: invert(1);
                }
            }
        }
    }

    img,
    svg {
        width: auto;
        height: 102px;
        margin: 0 auto 20px;
    }
}
</style>
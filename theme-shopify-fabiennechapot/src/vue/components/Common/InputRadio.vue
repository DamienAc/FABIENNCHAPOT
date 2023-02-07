<template>
    <div>
        <p>{{ title }}</p>
        <div class="list">
            <label class="field-cbx" v-for="(item, i) in items" :key="'value-'+i+'-'+item[value]">
                <input :name="name" :value="item[value]" type="radio" v-model="data" :required="required">
                <!--<span>{{ item[label] }}</span>-->
                <span>{{ getLabel(i) }}</span>
            </label>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex';

    export default {
        name: 'InputRadio',
        props: {
            model: {
                type: [String, Number]
            },
            title: String,
            items: Array,
            name: String,
            required: {
                type: Boolean,
                default: true
            },
            value: {
                type: String,
                default: 'id'
            },
            label: {
                type: String,
                default: 'label'
            }
        },
        data() {
            return {
                data: this.model
            }
        },
        computed: {
            ...mapState(['formJson', 'conditions', 'settings']),
            ...mapGetters(['validConditions']),

        },
        watch: {
            model(e) {
                this.data = e
            },
            data() {
                this.$emit('input', this.data)
            }
        },
        methods: {
             ...mapActions(['getFormJson', 'addProduct']),
            displayForm(i) {
                if (i === 0) return true;
            },
            getLabel(i, defaultText) {
                const text = this.settings.reprise.radio[i+1]; 
                return text && text !== "" ? text : defaultText;
            },
        }
    }

</script>

<style lang="scss">
    .field-cbx {
        margin: 10px 0;
        text-transform: initial;
        letter-spacing: .56px;
    }
    .field-cbx input{
        opacity: 0;
        position: absolute;
        pointer-events: none;
        width: 100%;
        display: block;
        border: solid 1px #000;
        height: 32px;
        line-height: 32px;
        padding: 0 8px;
        font-size: 14px;
        text-transform: none;
    }
    .field-cbx span {
        display: flex;
        align-items: center;
        margin-bottom: 0;
        cursor: pointer;
    }
    .field-cbx span:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        margin-right: 10px;
        border: solid 1px #000;
        flex-shrink: 0;
    }
    .field-cbx input:checked+span:before, .field.radio input:checked+span:before {
    background-color: #000;
}
</style>

<template>
    <label class="field checkbox">
        <input type="checkbox" v-model="value" :required="required" :name="name">
        <span><span v-if="label" v-html="label"></span><slot/></span>
    </label>
</template>

<script>

    export default {
        name: 'InputCheckbox',
        props: {
            model: [String, Number, Boolean],
            label: String,
            name: String,
            required: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                value: this.model
            }
        },
        watch: {
            model(e) {
                this.value = e
            },
            value() {
                this.$emit('input', this.value)
            }
        }
    }

</script>


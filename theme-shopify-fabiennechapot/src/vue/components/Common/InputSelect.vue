<template>
    <div class="field">
        <select v-model="value" :required="required === true" :name="name">
            <option v-for="(option, i) in options" :key="`option-${i}`" :disabled="option.disabled" :value="option.id">{{ option.title }}</option>
        </select>
        <label v-if="label" :for="name">{{ label }}</label>
        <slot/>
    </div>
</template>

<script>

    export default {
        name: 'InputSelect',
        props: {
            model: [String, Number],
            label: String,
            name: String,
            options: Array,
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
        },
    }

</script>



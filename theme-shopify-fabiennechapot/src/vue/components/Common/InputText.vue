<template>
    <div class="field">
        <input :type="activeType" v-model="value" :placeholder="placeholder" :required="required" :name="name" :id="name" :autofocus="focus">
        <i class="field__password" v-if="isPassword">
            <img @click="activeType = 'text'" v-show="this.activeType !== 'text'" src="//cdn.shopify.com/s/files/1/0606/9846/0377/t/2/assets/icon-eye.svg?v=700083824932939545" alt="Voir le mot de passe">
            <img @click="activeType = 'password'" v-show="this.activeType === 'text'" src="//cdn.shopify.com/s/files/1/0606/9846/0377/t/2/assets/icon-eye-close.svg?v=7071710903429890612" alt="Cacher le mot de passe">
        </i>
        <label v-if="label" :for="name">{{ label }}</label>
        <slot/>
    </div>
</template>

<script>

    export default {
        name: 'InputText',
        props: {
            model: [String, Number],
            label: String,
            name: String,
            placeholder: String,
            required: {
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: 'text'
            },
            focus: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                value: this.model,
                isPassword: this.type === 'password',
                activeType: this.type
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

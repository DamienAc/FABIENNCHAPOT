<template>
    <button class="rp-btn btn black"
            :class="[{'is-loading' : loading}, color]"
            :disabled="invalid"
            :type="submit ? 'submit' : null ">
        <span>
            <slot/>
        </span>
    </button>
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        submit: Boolean,
        loading: Boolean,
        invalid: Boolean,
        color: {
            type: String,
            default: "black"
        }
    }
}
</script>
<template>
    <span class="rp-form-message" :class="{'is-success': success}"><slot/></span>
</template>

<script>
    export default {
        name: 'FormMessage',
        props: {
            success: Boolean
        }
    }
</script>

<style lang="scss">
    .rp-form-message {
        margin: 22px 0;
        text-transform: none;
        color: #a80000;
        display: block;
        font-size: 1.4rem;

        &.is-success {
            color: #1A6224;
        }
    }
</style>

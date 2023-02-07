<template>
    <section class="rp-conditions">
        <h2 class="h3">{{ conditionTitle }}</h2>
        <div class="rp-conditions__text" v-html="conditionText"/>
        <CustomButton @click.native.prevent="$emit('next')">{{ conditionBtn }}</CustomButton>
    </section>
</template>

<script>
import {mapGetters} from 'vuex';
import CustomButton from "../Common/Button";

export default {
    name: 'StepConditions',
    components: {CustomButton},
    computed: {
        ...mapGetters(['conditionTitle', 'conditionText', 'conditionBtn'])
    }
}
</script>

<style lang="scss">
.rp-conditions {
    &__text {
        width: fit-content;
        max-width: 100%;
        margin: auto;
    }
}
</style>
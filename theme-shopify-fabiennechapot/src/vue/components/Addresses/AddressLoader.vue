<template>
    <div class="customer-address-loader">
        <div class="address-details">
            <SkeletonBox width="120"/>
            <SkeletonBox width="100"/>
            <SkeletonBox width="60"/>
        </div>
        <div class="delete-address">
            <SkeletonBox width="165"/>
        </div>
    </div>
</template>

<script>

    import SkeletonBox from "../Common/SkeletonBox";

    export default {
        name: 'AddressLoader',
        components: {SkeletonBox}
    }

</script>

<style lang="scss">
    .customer-address-loader {
        pointer-events: none;
        cursor: pointer;
        margin-bottom: 8px;
    }
</style>

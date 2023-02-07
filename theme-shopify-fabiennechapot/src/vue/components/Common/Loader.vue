<template>
    <div class="rp-loader">
        <svg viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Loader'
}
</script>

<style lang="scss">
$width: 100px;

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes color {
    100%,
    0% {
        stroke: #323232;
    }
    40% {
        stroke: #ACABA7;
    }
    66% {
        stroke: #5c5c5c;
    }
    80%,
    90% {
        stroke: #979797;
    }
}

.rp-loader {
    position: relative;
    margin: 50px auto;
    width: $width;

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    svg {
        animation: rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    circle {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
}
</style>
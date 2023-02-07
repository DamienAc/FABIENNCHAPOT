<template>
    <section class="rp-modal" :class="{'visible': visible}" @click.self="$emit('close')">
        <div class="rp-modal__inner">
            <slot/>
            <button class="btn" @click.prevent="$emit('close')">
                <svg viewBox="0 0 22.6 22.6"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6 1.4L21.2 0l-9.9 9.9L1.4 0 0 1.4l9.9 9.9L0 21.2l1.4 1.4 9.9-9.9 9.9 9.9 1.4-1.4-9.9-9.9z"></path></svg>
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    .rp-modal {
        position: fixed;
        z-index: 9999;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(76, 76, 76, .72);
        transition: opacity ease-out .3s;
        top: 0;
        left: 0;

        &:not(.visible) {
            opacity: 0;
            pointer-events: none;
        }

        &__inner {
            background-color: #fff;
            max-width: 540px;
            width: calc(100% - 20px);
            max-height: calc(100% - 20px);
            overflow-y: auto;
            padding: 45px 70px 40px;

            @media screen and (max-width: 800px) {
                padding: 40px 15px;
            }

            svg {
                width: 15px;
                height: auto;
            }
        }
    }
</style>


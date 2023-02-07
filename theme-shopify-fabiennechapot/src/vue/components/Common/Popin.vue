<template>
    <div class="vue-popin" @click.self="close">
        <div class="vue-popin__inner">
            <button class="btn-close" @click.prevent="close">
                <svg viewBox="0 0 22.6 22.6"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.6 1.4L21.2 0l-9.9 9.9L1.4 0 0 1.4l9.9 9.9L0 21.2l1.4 1.4 9.9-9.9 9.9 9.9 1.4-1.4-9.9-9.9z"></path></svg>
            </button>
            <slot/>
        </div>
    </div>
</template>

<script>

    import InputText from "./InputText";
    export default {
        name: 'Popin',
        components: {InputText},
        methods: {
            close() {
                this.$emit('close')
            }
        }
    }

</script>

<style lang="scss">
    .vue-popin { 
        position: fixed;
        z-index: 999;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,.5);
        pointer-events: all;

        &__inner {
            background-color: #fff;
            width: calc(100% - 30px);
            max-width: 700px;
            padding: 40px;
            position: relative;
            max-height: calc(100% - 20px);
            overflow-y: auto;

            @media screen and (max-width: 500px) {
                padding: 40px 15px;
            }
        }

        .btn-close {
            z-index: 2;
            display: flex;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;

            svg {
                width: 15px;
                height: auto;
            }

            @media screen and (max-width: 500px) {
                svg {
                    width: 15px;
                }
            }
        }

        img {
            margin-top: 20px;
        }
    }
</style>

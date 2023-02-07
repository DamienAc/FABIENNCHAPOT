<template>
    <div class="rp-customer-final">
        <section class="rp-customer-final__print">
            <h2 class="h3">{{ finalTitle }}</h2>
            <p v-html="finalSubtitle"></p>
            <ul>
                <li v-for="(step, i) in finalSteps" :key="`step-${i}`">
                    <img :src="step.img" alt="Etape ami for ever" width="1" height="1">
                    <div>
                        <h3>{{ i + 1 }}</h3>
                        <p>{{ step.text }}</p>
                        <a v-if="i===1" class="btn yellow" :class="{'is-loading': !printSession}" :href="printSession" target="_blank"><span>{{ finalBtnPrint1 }}</span></a>
                        <a v-else-if="i===2" class="btn yellow" :class="{'is-loading': !printColissimo}" :href="printColissimo" target="_blank"><span>{{ finalBtnPrint2 }}</span></a>
                    </div>
                </li>
            </ul>
        </section>
        <section class="rp-customer-final__code"> 
            <h3 class="h4 bold">{{ finalTitleTicket }}</h3> 
            <p>{{ finalTextTicket }}</p>
        </section>
        <section class="rp-customer-final__bottom">
            <h3 class="h4 bold">{{ finalTitleCollis }}</h3>
            <ol>
                <li v-html="finalText1Collis"></li>
                <li  v-html="finalText2Collis"></li>
                <li  v-html="finalText3Collis"></li>
            </ol>
            <a href="/" class="btn"><span>{{ finalBtnBack }} {{ url }}</span></a>
        </section>
    </div> 
</template>
 
<script>
    import {mapState, mapActions, mapGetters} from 'vuex';
    export default {
        name: 'CustomerStep4',
        data() {
            return {
                url: window.location.host
            }
        },
        computed: {
            ...mapState(['printSession', 'printColissimo', 'products', 'cartConfirmation', 'user']),
            ...mapGetters([
                'finalTitle','finalSubtitle','finalSteps','finalBtnPrint1','finalBtnPrint2','finalTitleTicket',
                'finalTextTicket','finalTitleCollis','finalText1Collis','finalText2Collis',
                'finalText3Collis','finalBtnBack'
            ])
        },
        methods: {
            ...mapActions(['getPrintSession', 'getPrintColissimo', 'unsetCart'])
        },
        mounted() {
            if (!this.printSession) {
                this.getPrintSession()
            }
            if (!this.printColissimo) {
                this.getPrintColissimo()
            }
        },
        beforeMount() {
            if (!this.products) {
                this.$router.push({name: 'customer-step-1'})
            } else if (!this.cartConfirmation || !this.user) {
                this.$router.push({name: 'customer-step-3'})
            }
        }
    }
</script>

<style lang="scss">
    .rp-customer-final {
        margin-bottom: 80px;

        .btn.yellow {
            background-color: #f3f5f8;
        }

        h2 {
            margin-bottom: 30px;
            text-align: center;

            & + p {
                max-width: 700px;
                margin: auto;
            }
        }

        h3 {
            text-align: center;
        }

        &__print {
            text-align: center;

            ul {
                padding: 25px 0;
                position: relative;
                margin: 40px 0;

                @media screen and (min-width: 1025px) {
                    display: flex;
                    justify-content: center;
                    padding: 37px 0;
                    margin: 60px 0;
                }
            }

            li {
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;

                @media screen and (min-width: 1025px) {
                    max-width: 350px;

                    &:not(:last-of-type) {
                        margin-right: 40px;
                    }
                }

                @media screen and (max-width: 1024px) {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:not(:first-of-type) {
                        margin-top: 40px;
                    }
                }

                div {
                    text-align: center;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                p {
                    max-width: 320px;
                    margin: 15px 0 30px;
                }

                a {
                    margin: auto auto 0;
                    width: 100%;
                }

                &:first-of-type p {
                    margin-bottom: 0;
                }
            }

            img {
                width: 60px;
                height: 80px;
                object-fit: contain;
                margin-left: auto;
                margin-right: auto;

                @media screen and (max-width: 1024px) {
                    width: 60px;
                    height: auto;
                }
            }

            h3 {
                font-weight: bold;
                font-size: 13rem;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                color: #f3f5f8;
            }
        }

        &__bottom {
            margin-top: 120px;

            .btn {
                width: 100%;
                margin: auto;
                text-align: center;
                font-size: 1.4rem;
                max-width: 600px;
            }
            li{
                p{
                    display: inline-block;
                }
                
            }
        }

        &__infos {
            padding: 18px;
            text-align: center;
            border: solid 1px #000;
            background: #fff;
            max-width: 700px;
            margin: 60px auto;

            @media screen and (max-width: 500px) {
                margin: 40px auto;
            }
        }

        ol {
            list-style: disc;
            list-style-position: inside;
            text-align: left;
            width: fit-content;
            margin-bottom: 80px;

            &:before {
                margin-right: 10px;
            }

            li {
                margin-top: 5px;
            }

            a {
                text-decoration: underline;
            }
        }

        &__code,
        &__bottom {
            margin: 80px auto;
            max-width: 700px;
            text-align: center;
            font-size: 1.4rem;

            h3 {
                margin-bottom: 15px;
            }
        }
    }
</style>

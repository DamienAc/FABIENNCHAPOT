<template>
    <section class="sell-reassurance reassurance "> 
        <div class="wrapper">
            <ul v-if="sellReassurances" ref="list">
                <li v-for="(reassurance, i) in sellReassurances" :key="`reassurance-${i}`">
                    <img :src="reassurance.img">
                    <p v-html="reassurance.title"></p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'SellReassurance',
    computed: {
        ...mapGetters(['sellReassurances'])
    },
    methods: {
            ...mapActions(['getSettings']),
        },
        beforeMount() {
            if (!this.sellReassurances) {
                this.getSettings()
            }
        }
}
</script>

<style lang="scss">
.sell-reassurance{

    &.reassurance {
        color: #000;
        margin-top: 120px;
        background: #f3f5f8;
        padding: 3rem 0;

        a{
            text-decoration: underline;
            &:hover{
                color:#000;

            }
        }

        ul {
            padding: 0 16px;
            text-align: center;
            margin: 16px 0;
            display: flex;
            justify-content: center;

            li {
            width: 25%;
            }

            @media screen and (max-width:765px) {
            flex-wrap: wrap;

                li {
                    width: 50%;

                    &:nth-of-type(1),
                    &:nth-of-type(2) {
                    margin-bottom: 50px;
                    }
                }
            }
        }

        img {
            width: auto;
            height: 84px;
            padding-bottom: 0;
            display: block;
            margin: 0 auto 20px;
        }

        p {
            max-width: 130px;
            margin: auto;
            font-weight: 500;
            font-size: 1.4rem;

            
        }

       
        }
   
}
</style>
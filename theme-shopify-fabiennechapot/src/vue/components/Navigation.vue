<template>
    <div class="rp-nav">
        <ul>
            <li v-for="(link, i) in linksNav" :key="`store-link-${i}`">
                <router-link :to="{name: link.navLinkName}" active-class="active">{{ link.navLinks }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
 import {mapGetters} from 'vuex';
    export default {
        name: 'Navigation',
        computed: {
            ...mapGetters(['linksNav' ])
        }
    }

</script>

<style lang="scss">
    .rp-nav {
        //border-top: solid 10px #fff;
        background-color: #f3f5f8;

        a {
            font-size: 1.4rem;
            padding: 10px;
            font-weight: 400;
            text-align: center;
            display: block;
            text-transform: uppercase;
            width: 100%;

            @media screen and (min-width: 1021px) {
                padding: 10px 20px;
            }

            @media screen and (max-width: 500px) {
                padding: 10px 0;
            }

            @media screen and (max-width: 400px) {
                font-size: 1.2rem;
            }
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        li {
            color: #0A2C0A;

            @media screen and (max-width: 500px) {
                &:not(:first-of-type) {
                    margin-left: 10px;
                }
            }

            @media screen and (min-width: 600px) {
                &:nth-of-type(1) a:before {
                    content: '1. ';
                }
                &:nth-of-type(2) a:before {
                    content: '2. ';
                }
                &:nth-of-type(3) a:before {
                    content: '3. ';
                }
                &:nth-of-type(4) a:before {
                    content: '4. ';
                }
            }
        }

        .active {
            text-decoration: underline;
        }
    }
</style>

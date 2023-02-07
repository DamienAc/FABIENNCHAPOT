<template>
    <div id="faq" class="rp-faq">
        <h2 class="h3">{{ faqTitle }}</h2>
        <ul v-if="faqQuestions" ref="list">
            <li v-for="(question, i) in faqQuestions" :key="`question-${i}`">
                <h3>{{ question.title }}</h3>
                <div class="rp-faq__answer">
                    <div v-html="question.answer"></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
        name: 'Faq',
        computed: {
            ...mapGetters(['faqQuestions','faqTitle'])
        },
        methods: {
            ...mapActions(['getSettings']),
            displayAll() {
                fetch('/pages/faq')
                        .then(res => res.text())
                        .then(html => {
                            const parser = new DOMParser();
                            const htmlDocument = parser.parseFromString(html, "text/html");
                            const ul = htmlDocument.documentElement.querySelector('.faq ul').innerHTML;
                            this.$refs.list.innerHTML = ul.replaceAll('<h2 class="h-3">', '<h3>').replaceAll('</h2>', '</h3>').replaceAll('faq__answer', 'rp-faq__answer');
                            this.$refs.btn.remove();
                            this.initQuestions()
                        })
            },
            initQuestions() {
                this.$refs.list.querySelectorAll('li').forEach(li => {
                    const answer = li.querySelector('.rp-faq__answer');
                    const h3 = li.querySelector('h3');
                    h3.addEventListener('click', () => {
                        h3.classList.toggle('open');
                        answer.style.maxHeight = `${ h3.classList.contains('open') ? answer.scrollHeight : 0 }px`;
                    });
                    window.addEventListener('resize', () => {
                        if (h3.classList.contains('open')) {
                            answer.style.maxHeight = `${answer.scrollHeight}px`
                        }
                    })
                })
            }
        },
        beforeMount() {
            if (!this.faqQuestions) {
                this.getSettings()
            }
        },
        mounted() {
            this.initQuestions()
        }
    }
</script>

<style lang="scss">
    .rp-faq {
        margin: 0 auto;
        max-width: 1200px;
        position: relative;
        padding: 80px var(--page-margin);

        &:before {
            content: '';
            display: block;
            width: 100vw;
            position: absolute;
            pointer-events: none;
            left: 50%;
            transform: translateX(-50%);
            border-top: solid 1px #f3f5f8;
            top: 0;
        }

        h2 {
            text-align: center;
            margin-bottom: 60px;
            line-height: 1.4;
            letter-spacing: .04em;
        }

        li {
            border-top: solid 1px #e5e5e5;

            &:last-of-type {
                border-bottom: solid 1px #e5e5e5;
            }
        }

        h3 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.6rem;
            letter-spacing: 1px;
            cursor: pointer;
            font-weight: bold;
            padding: 20px 0;

            &:after {
                content: '+';
                padding-left: 10px;
                font-size: 1.2em;
                transition: opacity ease-out .3s;

            }

            &.open:after {
                content: '-';
            }

            &:hover::after {
                opacity: .5;
            }
        }

        &__answer {
            max-height: 0;
            transition: max-height ease-out .3s;
            overflow: hidden;
            line-height: 1.4;

            a {
                text-decoration: underline;
            }

            & > div {
                padding: 20px 0 40px;
            }
        }

        .btn {
            margin: 40px auto 0;
        }
    }
</style>

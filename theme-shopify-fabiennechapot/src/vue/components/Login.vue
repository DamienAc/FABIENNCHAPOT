<template>
    <form @submit.prevent="submit">
        <p class="rp-log-register__subtitle">{{ logSubtitle }}</p>
        <div v-if="error" class="rp-log-register__error">{{ logErrorText }}</div>
        <InputText :model="formData.email" :placeholder="logPlaceholderEmail" name="email" type="email" @input="e => formData.email = e" :focus="true"/>
        <InputText v-if="!user" :model="formData.password" :placeholder="logPlaceholderPassword" name="password" type="password" @input="e => formData.password = e"/>
        <CustomButton v-if="user" :loading="loading" @click.native.prevent="$emit('next')">{{ logBtn1 }}</CustomButton>
        <CustomButton v-if="!user" :loading="loading" :submit="true">{{ logBtn2 }}</CustomButton>
        <a v-if="!user" href="/account/login#recover" target="_blank">{{ logBtn3 }}</a>
    </form>
</template>

<script>

    import {mapState, mapActions, mapGetters} from 'vuex';
    import InputText from "./Common/InputText";
    import CustomButton from "./Common/Button";

    export default {
        name: 'Login',
        components: {CustomButton, InputText},
        data() {
            return {
                error: false,
                loading: false,
                formData: {
                    email: null,
                    password: null
                }
            }
        },
        computed: {
            ...mapState(['user']),
            ...mapGetters([
                'logSubtitle','logErrorText',
                'logPlaceholderEmail','logPlaceholderPassword',
                'logBtn1','logBtn2','logBtn3'
            ])
        },
        methods: {
            ...mapActions(['login', 'deleteUser']),
            submit() {
                this.deleteUser();
                this.loading = true;
                this.error = false;
                this.login({...this.formData})
                    .then(() => this.$emit('next'))
                    .catch(() => this.error = true)
                    .finally(() => this.loading = false)
            },
            register() {
                window.scrollTo(0, 0);
                this.$emit('register')
            }
        },
        watch: {
            'formData.email': {
                immediate: true,
                handler(newEmail, oldEmail) {
                    if (this.user && oldEmail && oldEmail === this.user.email) this.deleteUser();
                    this.error = false;
                },
                deep: true
            }
        },
        mounted() {
            if (this.user) {
                this.formData.email = this.user.email;
            }
        }
    }
</script>

<style lang="scss">
.rp-login {
    background-color: transparent;

    h2.h4 {
        @media screen and (max-width: 799px) {
            display: none;
        }
    }

    .login__container > div:first-of-type > div {
        @media screen and (max-width: 799px) {
            padding-right: 0;
            padding-left: 0;
            padding-top: 0;
            max-width: 500px;
            margin: auto;
        }
    }
}
</style>

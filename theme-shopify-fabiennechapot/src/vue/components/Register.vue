<template>
    <form @submit.prevent="submit">
        <p class="rp-log-register__subtitle">{{ registerSubtitle }}</p>
        <FormMessage v-if="error">{{ error }}</FormMessage>
        <InputText :model="formData.first_name" :placeholder="registerFirstname" name="first_name" @input="e => formData.first_name = e" :focus="true"/>
        <InputText :model="formData.last_name" :placeholder="registerLastname" name="last_name" @input="e => formData.last_name = e"/>
        <InputText :model="formData.phone" :placeholder="registerPhone" name="phone" type="tel" @input="e => formData.phone = e"/>
        <InputText :model="formData.email" :placeholder="logPlaceholderEmail" name="email" type="email" @input="e => formData.email = e"/>
        <InputText :model="formData.password" :placeholder="logPlaceholderPassword" name="password" type="password" @input="e => formData.password = e"/>
        <InputText :model="formData.passwordConfirmation" :placeholder="logPlaceholderPasswordConfirm" name="password-confirmation" type="password" @input="e => formData.passwordConfirmation = e"/>

        <InputCheckbox name="cvg" :model="cgv" @input="e => cgv = e"><span v-html="registerConfirmationCertifText1"/></InputCheckbox>
        <InputCheckbox :label="registerLabelOffer1" name="accept_marketing" :required="false" :model="formData.accepts_marketing" @input="e => formData.accepts_marketing = e"/>
        <InputCheckbox :label="registerLabelOffer2" name="sms_marketing_consent" :required="false" :model="formData.sms_marketing_consent" @input="e => formData.sms_marketing_consent = e"/>

        <CustomButton :submit="true" :loading="loading">{{ registerBtn1 }}</CustomButton>
        <a href="#" @click.prevent="$emit('login')">{{ registerBtn2 }}</a>

    </form>
</template>

<script>

    import {mapActions, mapGetters } from 'vuex';
    import InputText from "./Common/InputText";
    import InputCheckbox from "./Common/InputCheckbox";
    import CustomButton from "./Common/Button";
    import FormMessage from "./Common/FormMessage";

    export default {
        name: 'Register',
        components: {CustomButton, InputCheckbox, InputText, FormMessage},
        data() {
            return {
                error: false,
                loading: false,
                display: false,
                cgv: false,
                formData: {
                    gender: '',
                    email: null,
                    first_name: null,
                    last_name: null,
                    phone: null,
                    password: null,
                    passwordConfirmation: null,
                    accepts_marketing: false,
                    sms_marketing_consent: false,
                }
            }
        },
        computed: {
            ...mapGetters([
                'registerSubtitle','logPlaceholderPassword',
                'logPlaceholderEmail','logPlaceholderPasswordConfirm',
                'registerLastname','registerFirstname','registerPhone',
                'registerConfirmationCertifText1','registerLabelOffer1',
                'registerLabelOffer2','registerBtn1','registerBtn2'
            ])
        },
        methods: {
            ...mapActions(['createUser']),
            submit() {
                this.loading = true;
                this.error = false;
                this.createUser({...this.formData})
                    .then(() => this.$emit('next'))
                    .catch(msg => this.error = msg || "Une erreur est survenue, merci d'essayer à nouveau.")
                    .finally(() => {
                        this.loading = false;
                        window.scrollTo(0, 0);
                    });
            },
            login() {
                window.scrollTo(0, 0);
                this.$emit('login')
            }
        },
        watch: {
            formData: {
                immediate: true,
                handler() {
                    this.error = false
                },
                deep: true
            }
        }
    }
</script>
<style lang="scss">
@import "css/mixins/breakpoints";

.rp-log-register__inner{
    .checkbox {
        span, p {
            font-size: 1.4rem;
            letter-spacing: normal;
        }
        p{
            display: block;
            color: #000;
        }
    }
}

</style>


import Router from 'vue-router'
import Vue from 'vue'

import CustomerStep1 from '../pages/customer/Step1';
import CustomerStep2 from '../pages/customer/Step2';
import CustomerStep3 from '../pages/customer/Step3';
import CustomerStep4 from '../pages/customer/Step4'

Vue.use(Router);

const router = new Router({
    base: '/module-reprise/',
    routes: [
        {
            path: '/',
            redirect: {
                name: 'customer-step-1'
            }
        },
        {
            path: '/etape-1',
            name: 'customer-step-1',
            component: CustomerStep1
        },
        {
            path: '/etape-2',
            name: 'customer-step-2',
            component: CustomerStep2
        },
        {
            path: '/etape-3',
            name: 'customer-step-3',
            component: CustomerStep3
        },
        {
            path: '/etape-4',
            name: 'customer-step-4',
            component: CustomerStep4
        }
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

export default router

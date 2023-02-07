<template>
    <Layout>
        <router-view/>
    </Layout>
</template>

<script>

    import Layout from "./layouts/Layout";

    export default {
        name: 'App',
        components: {Layout}
    }
</script>

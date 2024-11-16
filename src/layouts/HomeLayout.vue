<template>
    <div class="MainBox">
        <Header/>

        <router-view/>

        <Footer/>
    </div>
</template>


<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>
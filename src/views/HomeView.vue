<script setup lang="ts">
import Contact from '@/components/Contact.vue';
import FileActions from '@/components/FileActions.vue';
import ImageActions from '@/components/ImageActions.vue';
import Header from '@/components/Header.vue';

</script>

<template>
  <Header/>

  <div class="ContentBox">
    <ImageActions/>
    <FileActions/>
  </div>

  <Contact/>
</template>


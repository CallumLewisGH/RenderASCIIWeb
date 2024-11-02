<script setup lang="ts">
import Contact from '@/components/Contact.vue';
import FileActions from '@/components/FileActions.vue';
import ImageActions from '@/components/ImageActions.vue';
import TextPreview from '@/components/TextPreview.vue';

</script>

<template>
  <div class="ContentBox">
    <ImageActions/>
    <FileActions/>
    <TextPreview/>
  </div>

  <Contact/>
</template>


<template>
  <div v-if="ASCIIStore.greyscaledImage">
    <img :src="ASCIIStore.greyscaledImage" alt="Greyscale effect" />
  </div>
  <div>
    <label for="contrast">Contrast: {{ ASCIIStore.contrast }}</label>
    <input
      type="range"
      id="contrast"
      v-model="ASCIIStore.contrast"
      min="0"
      max="3"
      step="0.1"
      @change="updateGreyscaleEffect"
    />
    <br />
    <label for="compression">Compression: {{ ASCIIStore.compression }}</label>
    <input
      type="range"
      id="compression"
      v-model="ASCIIStore.compression"
      min="0"
      max="16"
      step="0.1"
      @change="updateGreyscaleEffect"
    />
  </div>
</template>

<script setup>
import { useASCIStore } from '@/stores/ASCIIStore';

// Access the ASCIStore from Pinia
const ASCIIStore = useASCIStore();

// Method to update greyscale effect manually
const updateGreyscaleEffect = () => {
  ASCIIStore.greyscaleEffect();
};
</script>

<template>
  <div class="Centraliser">
    <div class="ImageActions">
      <div v-if="ASCIIStore.greyscaledImage">
        <div>
          <img :src="ASCIIStore.greyscaledImage" alt="Greyscale effect" style="width: auto; height: 60vh; border-radius: 4%;"/>
        </div>
      </div>

      <div class="Slider">
        <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contrast</label>
        <input
        v-model="ASCIIStore.contrast"
          id="default-range"
          type="range" value="1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          min="0"
          max="3"
          step="0.02"
          @change="updateGreyscaleEffect">
      </div>

      <div class="Slider">
        <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Compression</label>
        <input
          v-model="ASCIIStore.compression"
          id="default-range"
          type="range" value="4"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          min="1"
          max="16"
          step="0.02"
          @change="updateGreyscaleEffect">
      </div>
    </div>
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

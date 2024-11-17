<template>
  <div class="Centraliser" v-if="ASCIIStore.greyscaledImage">
    <div class="ImageActions">
      <div>
        <div>
          <img :src="ASCIIStore.greyscaledImage" alt="Greyscale effect" style="width: auto; height: 60vh; border-radius: 4%;"/>
        </div>
      </div>

      <div class="Slider">
        <label for="default-range" class="block mb-2 text-sm font-medium text-white">Contrast</label>
        <input
        v-model="ASCIIStore.contrast"
          id="default-range"
          type="range" value="1"
          class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
          min="0"
          max="3"
          step="0.02"
          @change="updateGreyscaleEffect">
      </div>

      <div class="Slider">
        <label for="default-range" class="block mb-2 text-sm font-medium text-white">Compression</label>
        <input
          v-model="ASCIIStore.compression"
          id="default-range"
          type="range" value="4"
          class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
          min="1"
          max="16"
          step="0.02"
          @change="updateGreyscaleEffect">
      </div>

    <div class="Toggle">
      <label for="toggle" class="block mb-2 text-sm font-medium text-white">Invert</label>
        <label for="toggle" class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="toggle" class="sr-only peer" @change="updateInverted">
          <div class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
            <div
              class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"
            ></div>
      </label>
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

const updateInverted = () => {
  ASCIIStore.invert();
}
</script>

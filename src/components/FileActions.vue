<template>
  <div class="FileActions">
    <!-- Dropzone for File Upload -->
    <div class="flex items-center justify-center w-full"
        @dragenter.prevent="activeDropzone(true)"
        @dragover.prevent="activeDropzone(true)"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="onDrop($event)">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer bg-gray-700 border-gray-600 hover:bg-gray-800 hover:border-gray-500"
        :class="{'bg-gray-800 border-gray-500': dropzoneIsActive}"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          class="hidden"
          @change="onFileChanged($event)"
        />
      </label>
    </div>

    <div class="flex items-center justify-center" style="margin-top: 4%;">
      <div class="h-16 w-16" v-if="ASCIStore.loading == false"></div>
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-white-100 border-solid border-r-0 border-b-0 border-l-0" v-if="ASCIStore.loading == true"></div>
    </div>

    <!-- Download Button -->
    <div class="flex items-center justify-center w-full" style="margin-top: 4%;">
      <label class="flex flex-col items-center justify-center w-full h-full border-2 border-solid rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 border-gray-600 hover:border-gray-500">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v9m0 0L8 10m2 2 2-2M4 17v-2m0 2h12m0-2v2"/>
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to download</span></p>
          <p class="text-xs text-gray-500 dark:text-gray-400">TXT or Nothing</p>
        </div>
        <button @click="downloadFile"></button>
      </label>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useASCIStore } from '@/stores/ASCIIStore';
import { ref } from 'vue';

const ASCIStore = useASCIStore();
const dropzoneIsActive = ref(false);

const activeDropzone = (status: boolean) => {
  dropzoneIsActive.value = status;
};

// Improve dragleave handling to avoid immediate reset of state
const handleDragLeave = (event: DragEvent) => {
  // Check if the drag event is leaving the dropzone or a child of the dropzone
  const relatedTarget = event.relatedTarget as HTMLElement;
  if (!relatedTarget || !relatedTarget.closest('.FileActions')) {
    dropzoneIsActive.value = false;
  }
};

const onFileChanged = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    ASCIStore.setImage(file);
  }
};

const onDrop = async (event: DragEvent) => {
  // Prevent the default drop behavior
  event.preventDefault();
  dropzoneIsActive.value = false;

  const file = event.dataTransfer?.files[0];  // Get the dropped file
  if (file) {
    ASCIStore.setImage(file); // Call the same method as the file input
  }
};

const downloadFile = async () => {
  await ASCIStore.generateASCIIArt();

  const name = ASCIStore.imageFile?.name.trim() || 'default_file_name';
  const blob = new Blob([ASCIStore.ASCIArray || ""], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = `${name}.txt`;
  link.click();

  URL.revokeObjectURL(url);
};
</script>

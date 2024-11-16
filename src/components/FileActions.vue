<template>
    <div class="FileActions">

      <div>
        <input
          type="file"
          @change="onFileChanged($event)"
          accept="image/*"
        />
      </div>

      <div>
        <button @click="downloadFile">Download Text File</button>
      </div>

      <div>
        <span>Remeber to render the art with one of the following fonts</span>
        <ul>
          <li>Courier New</li>
          <li>Consolas</li>
          <li>Lucida Console</li>
          <li>Monaco</li>
          <li>DejaVu Sans Mono</li>
          <li>Inconsolata</li>
          <li>Fira Code</li>
          <li>Anonymous Pro</li>
        </ul>
      </div>

    </div>
</template>

<script setup lang="ts">
import { useASCIStore } from '@/stores/ASCIIStore';

const ASCIStore = useASCIStore();

const onFileChanged = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (file) {
    ASCIStore.setImage(file);
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

<template>
  <component  :is="$route.meta.layout || 'div'">
      <router-view></router-view>
  </component>

  </template>

  <script setup lang="ts">
  </script>
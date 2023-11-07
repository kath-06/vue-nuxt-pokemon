<template>
  <div class="h-screen flex justify-center items-center bg-yellow-950 text-white">
    <div class="p-7 text-center">
      <p class="m-2 p-4 text-9xl font-bold">{{ error.statusCode }}</p>
      <p class="m-2 p-4 text-4xl text-red-500">{{ error.statusMessage }}</p>
      <VnButton type="default" @click="handleBackBtn">Back to Home</VnButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import VnButton from './components/elements/VnButton.vue';
defineProps(['error'])

const handleBackBtn = () => {
  clearError({ redirect: '/'})
}
</script>

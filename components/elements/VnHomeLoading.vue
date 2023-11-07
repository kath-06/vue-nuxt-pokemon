<template>
  <div
    class="w-full h-screen flex flex-col justify-center items-center"
    role="status"
    v-show="loading"
  >
    <img
      class="w-40 h-40 animate-bounce animate-ease-in-out"
      src="../../assets/pok-mon-go-logo-png-30.png"
    />
    <div class="text-2xl mt-4 font-bold text-yellow-500">
      Loading
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>
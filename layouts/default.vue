<template>
  <div class="h-screen">
    <VnHomeLoading :loading="loading" />
    <header
      v-show="!loading"
      class="shadow-sm bg-red-800 animate-fade-up animate-ease-in-out"
    >
      <nav class="p-4 flex justify-between">
        <NuxtLink
          class="font-bold text-yellow-400"
          to="/"
        >
          Vue-Nuxt-Pokemon
        </NuxtLink>
        <ul class="flex gap-4 text-yellow-500 font-semibold">
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pokemons">
              Pokemons
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <div
      v-show="!loading"
      class="h-full animate-fade-down animate-ease-in-out"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import VnHomeLoading from '~/components/elements/VnHomeLoading.vue'

let loading = ref<boolean>(true)


onMounted(() => {
  loadHome()
})

const loadHome = () => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
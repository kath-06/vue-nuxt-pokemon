<template>
  <div>
    <header class="shadow-sm bg-yellow-500">
      <nav class="p-4 flex justify-between">
        <NuxtLink
          class="font-bold text-red-800"
          to="/"
        >
          Vue-Nuxt-Pokemon
        </NuxtLink>
        <ul class="flex gap-4 text-red-900 font-semibold">
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
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
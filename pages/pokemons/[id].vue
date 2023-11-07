<template>
  <div>
    <Head>
      <Title>Vue-Nuxt Pokemon | {{ pokemonData.name }}</Title>
    </Head>
    <p class="capitalize">
      Pokemon name is {{ pokemonData.name }}
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
let pokemonData = reactive({})

onMounted(() => {
  getPokemonData()
})

const getPokemonData = async () => {
  const uri = 'https://pokeapi.co/api/v2/pokemon/' + id

  await useFetch(uri, { key: id })
  .then(({ data }) => {
    if (!data.value) {
      throw createError({ statusCode: 404, statusMessage: 'Data not found', fatal: true })
    } else {
      Object.assign(pokemonData, data.value)
    }
  })
}
</script>
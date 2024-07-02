<script setup lang="ts">

const search = ref<string>('')

defineProps({
  placeholder: {
    type: String,
    default: 'Search Pokemon...'
  }
})

const emit = defineEmits(['pokeSearch'])



const { data: pokeLists, error, refresh } = await useFetch('/api/pokemon?limit=1400', { query: { type: 'getList' } })

if(pokeLists.value === null) {
  await refresh()
}

const searchPokemon = (search: string) => {
  return pokeLists.value?.results.filter((item: any) => {
    return item.name.includes(search)
  })
}

watchEffect(() => {
  const data = searchPokemon(search.value);
  emit('pokeSearch', data);
  console.log(data)
});
</script>

<template>
  <div>
    <input type="text" name="search" v-model="search" :placeholder="placeholder"  class="outline-none border-b-2" />
  </div>
</template>
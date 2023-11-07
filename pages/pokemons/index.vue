<template>
  <div class="p-4">
    <VnLoading :loading="loading" />
    <div v-show="!loading">
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        <div
          v-for="(item, index) in pokemons"
          :key="index">
          <PokemonCard :pokemon-data="item" />
        </div>
      </div>
      <VnPagination
        :count="count"
        :show-prev="prevOffset == 0 ? false : true"
        @prev="handlePrev"
        @next="handleNext"
        @page="handlePage"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import VnPagination from '~/components/elements/VnPagination.vue'
import VnLoading from '~/components/elements/VnLoading.vue';

useHead({
  title: 'Vue-Nuxt | Pokemon List'
})

let pokemons = reactive<any>([])
let limit = ref<number>(120)
let offset = ref<number>(0)
let count = ref<number>(0)
let nextOffset = ref<any>(0)
let prevOffset = ref<any>(0)
let loading = ref<boolean>(true)

const getPokemon = async (offsetData: any) => {
  let dataResults = []
  const { data, refresh } : any = await useFetch(`/api/pokemon?offset=${offsetData}&limit=${limit.value}`, { query: { type: 'getList' } })
  if (data.value === null) {
    await refresh()
  }
  const nextUrl = data.value.next;
  const prevUrl = data.value.previous;

  if (nextUrl) {
    const nextUrlParams = new URL(nextUrl)
    nextOffset.value = nextUrlParams.searchParams.get("offset") || 0
  }

  if (prevUrl) {
    const prevUrlParams = new URL(prevUrl)
    prevOffset.value = prevUrlParams.searchParams.get("offset") || 0
  }
  dataResults = data.value.results
  dataResults.map((item: any) => {
    const dataId = getId(item.url)
    Object.assign(item, { ...item, id: dataId})
  })

  count.value = 1017
  Object.assign(pokemons, dataResults)
  loading.value = false
}

const getId = (url: string) => {
  const lastSlashindex = url.lastIndexOf('/')
  const secondLastSlashIndex = url.lastIndexOf('/', lastSlashindex - 1)
  const urlId = url.slice(secondLastSlashIndex + 1, lastSlashindex)

  return urlId
}

const loadPage = (offset: any) => {
  loading.value = true
  setTimeout(() => {
    getPokemon(offset)
  }, 2000)
}

const handlePrev = () => {
  loadPage(prevOffset.value)
}

const handleNext = () => {
  loadPage(nextOffset.value)
}

const handlePage = (pageOffset: number) => {
  loadPage(pageOffset)
}

onMounted(() => {
  loadPage(offset.value)
})
</script>
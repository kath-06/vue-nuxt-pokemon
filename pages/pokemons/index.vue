<template>
  <div class="p-4">
    <VnPageHeader text="Pokemon List" />
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
        :show-prev="showPrev"
        :show-next="showNext"
        :active-page="activePage"
        :itemPerPage="itemPerPage"
        @prev="handlePrev"
        @next="handleNext"
        @page="handlePage"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import VnPagination from '~/components/elements/VnPagination.vue'
import VnLoading from '~/components/elements/VnLoading.vue'
import VnPageHeader from '~/components/elements/VnPageHeader.vue'

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
let showPrev = ref<boolean>(true)
let showNext = ref<boolean>(true)
let activePage = ref<number>(0)
let itemPerPage = ref<number>(120)

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
  showNext.value = nextOffset.value > count.value ? false : true
  showPrev.value = prevUrl === null ? false : true
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
  const localActivePage = localStorage.getItem('activePage')
  let offsetValue = offset

  loading.value = true
  if (activePage.value === 0 && localActivePage) {
    setActivePage(parseInt(localActivePage))
    offsetValue = parseInt(localActivePage) * itemPerPage.value
  }
  setTimeout(() => {
    getPokemon(offsetValue)
  }, 2000)
}

const handlePrev = (pageNum: number) => {
  setActivePage(pageNum)
  loadPage(prevOffset.value)
}

const handleNext = (pageNum: number) => {
  setActivePage(pageNum)
  loadPage(nextOffset.value)
}

const handlePage = (pageOffset: number, pageNum: number) => {
  setActivePage(pageNum)
  loadPage(pageOffset)
}

const setActivePage = (pageNum: number) => {
  localStorage.setItem('activePage', pageNum.toString())
  activePage.value = pageNum
}

onMounted(() => {
  loadPage(offset.value)
})
</script>
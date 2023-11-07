<template>
  <div class="flex justify-end">
    <button
      class="pagination-prv-btn"
      @click="handlePrev"
    >
      Prev
    </button>
    <button
      class="pagination-btn"
      v-for="(page, index) in pagesCount"
      :key="index"
      @click="handlePage(index)"
    >
      {{index + 1}}
    </button>
    <button
      class="pagination-nxt-btn"
      @click="handleNext"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    default: 0
  },
  itemPerPage: {
    type: Number,
    default: 120
  },
  showPrev: {
    type: Boolean,
    default: false
  },
  activePage: {
    type: Number,
    default: 1
  }
})
const emits = defineEmits(['prev', 'next', 'page'])

let pagesCount = ref<number>(0)

const handlePrev = () => {
  emits('prev')
}
const handleNext = () => {
  emits('next')
}
const handlePage = (pageNum: number) => {
  emits('page', (pageNum * props.itemPerPage))
}

watch(() => props.count, () => {
  pagesCount.value = Math.ceil(props.count / props.itemPerPage)
})
</script>
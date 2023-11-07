<template>
  <div class="flex justify-end">
    <button
      v-show="showPrev"
      class="pagination-prv-btn"
      @click="handlePrev"
    >
      Prev
    </button>
    <button
      :disabled="activePage === index ? true : false"
      :class="activePage === index ? 'disable-pagination-btn' : 'pagination-btn'"
      v-for="(page, index) in pagesCount"
      :key="index"
      @click="handlePage(index)"
    >
      {{index + 1}}
    </button>
    <button
      v-show="showNext"
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
  showNext: {
    type: Boolean,
    default: false
  },
  activePage: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['prev', 'next', 'page'])

let pagesCount = ref<number>(0)

const handlePrev = () => {
  emits('prev', props.activePage - 1)
}
const handleNext = () => {
  emits('next', props.activePage + 1)
}
const handlePage = (pageNum: number) => {
  emits('page', (pageNum * props.itemPerPage), pageNum)
}

watch(() => props.count, () => {
  pagesCount.value = Math.ceil(props.count / props.itemPerPage)
})
</script>
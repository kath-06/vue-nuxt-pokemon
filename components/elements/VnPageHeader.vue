<template>
  <div>
    <div class="flex justify-between text-title-default">
      <div
        class="flex items-center"
      >
        <p
          v-show="showButton"
          class="mr-2"
        >
          <VnButton
            type="icon-only"
            icon="keyboard_backspace"
            @click="handleBack"
          />
        </p>
        <p class="flex items-center">
          {{ text }}
        </p>
      </div>
      <div
        v-show="showSearch" 
        class="flex items-center"
      >
        <VnSearch @pokeSearch="handleSearch" />
      </div>
      
    </div>
    <hr class="my-4">
  </div>
</template>

<script setup lang="ts">

const pokeSearch = ref<any>(null)


defineProps({
  text: {
    type: String,
    default: 'Header Title'
  },
  showButton: {
    type: Boolean,
    default: false
  },
  showSearch: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['back','pokeSearch'])

const handleBack = () => {
  emits('back')
}

const handleSearch = (data: any) => {
  pokeSearch.value = data
  emits('pokeSearch', data)
  console.log(data)
}

</script>
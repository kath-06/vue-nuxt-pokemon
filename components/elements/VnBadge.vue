<template>
  <span :class="badgeClass">
    {{ text.toUpperCase() }}
  </span>
</template>

<script setup lang="ts">
import { pokemonTypes  } from '../../composables/types'

const props = defineProps({
  text: {
    type: String,
    default: 'normal'
  }
})

let badgeClass = ref<string>('')

const setType = () => {
  if(props.text) {
    pokemonTypes.forEach((item: any) => {
      if (item.name === props.text) {
        badgeClass.value = item.class
      }
    })
  }
}

onMounted(() => {
  setType()
})
</script>

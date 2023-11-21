<template>
  <button
    :class="btnClass"
    @click="handleClick"
  >
    <i
      v-if="icon"
      :class="type === 'icon-only' ? 'material-icons ml-1 mr-1' : 'material-icons ml-4 mr-1'"
    >
      {{ icon }}
    </i>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { btnTypes } from '../../composables/types'
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  icon: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['click'])
let btnClass = ref<string>('')

const setBtnType = () => {
  if(props.type) {
    btnTypes.forEach((item: any) => {
      if (item.name === props.type) {
        btnClass.value = item.class
      }
    })
  }
}
const handleClick = () => {
  emits('click')
}

onMounted(() => {
  setBtnType()
})
</script>

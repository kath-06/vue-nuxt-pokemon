<template>
  <button
    :class="btnClass"
    @click="handleClick"
  >
    <slot>Primary</slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})
const emits = defineEmits(['click'])
const btnTypes = reactive([
  { name: 'primary', class: 'btn-primary' },
  { name: 'default', class: 'btn-default' },
  { name: 'success', class: 'btn-success' },
  { name: 'danger', class: 'btn-danger' },
  { name: 'warning', class: 'btn-warning' }
])
let btnClass = ref<string>('')

const setBtnType = () => {
  if(props.type) {
    btnTypes.forEach((item) => {
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

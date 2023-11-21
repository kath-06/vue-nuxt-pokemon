<template>
  <div>
    <div class="flex text-title-default">
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
    <hr class="my-4">
  </div>
</template>

<script setup lang="ts">
import VnButton from './VnButton.vue'

defineProps({
  text: {
    type: String,
    default: 'Header Title'
  },
  showButton: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['back'])

const handleBack = () => {
  emits('back')
}
</script>
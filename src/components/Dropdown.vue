<template>
<div class="dropdown" ref="dropdownRef">
 <a class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{title}}</a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="{display:'block'}" v-show="isOpen">
    <slot></slot>
  </ul>
</div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    const dropdownRef = ref<null| HTMLElement>(null)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isClickOutside.value) {
        isOpen.value = false
      } else {
        isOpen.value = true
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>
<style>
</style>

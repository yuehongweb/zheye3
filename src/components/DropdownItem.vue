<template>
    <li class="dropdown-item" :class="{ 'is-disabled': disabled }">
        <slot></slot>
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style>
.is-disabled *{
    color: #6c757d;;
    background-color: transparent;
    pointer-events: none;
}
a {
    text-decoration: none !important;
}
</style>

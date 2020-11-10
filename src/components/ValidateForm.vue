<template>
    <form class="validate-form-container">
        <slot></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button class="btn btn-primary" type="submit">submit</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import emitt from 'emitt'
type FuncArr = () => boolean
export const emitter = emitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    let funcArr: FuncArr[] = []
    const submitForm = () => {
      // 点击按钮的时候触发校验
      const res = funcArr.map(func => func()).every(res => res)
      context.emit('form-submit', res)
    }
    const callback = (func: FuncArr) => {
      funcArr.push(func)
    }
    // 自定义事件
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>

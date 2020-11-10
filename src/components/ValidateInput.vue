<template>
<div class="validate-input-container pb-3">
    <input
        v-if="tag==='input'"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        v-model="inputRef.val"
        @blur="validateInput"
        v-bind="$attrs"
    />
    <textarea
        v-else
        rows="10"
        class="form-control"
        :class="{'is-invalid': inputRef.error}"
        v-model="inputRef.val"
        @blur="validateInput"
        v-bind="$attrs"
    >
    </textarea>
    <span
        class="invalid-feedback"
        v-show="inputRef.error"
        >{{ inputRef.message }}</span
    >
</div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, onMounted, computed } from 'vue'
import { emitter } from './ValidateForm.vue'
interface RuleProps {
    type: 'required'|'email';
    message: string;
}
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export type RulesProps=RuleProps[]
export type TagType = 'input' | 'textarea'
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProps>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  },
  setup (props, context) {
    const inputRef = reactive({
      val: computed({
        get: () => props.modelValue || '',
        set: (val) => context.emit('update:modelValue', val)
      }),
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        return allPassed
      }
      return true
    }
    onMounted(() => {
      // 触发父组件自定义事件
      emitter.emit('form-item-created', validateInput)
    })
    return {
      inputRef,
      validateInput
    }
  }
})
</script>
<style>
</style>

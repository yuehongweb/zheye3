<template>
     <validate-form @form-submit="formSubmit">
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <validate-input :rules="emailRules" v-model="emailRef" placeholder="请输入邮箱" type="text" />
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <validate-input :rules="passWordRules" v-model="passWordRef" placeholder="请输入密码" type="password"/>
            </div>
            <template v-slot:submit>
              <span class="btn btn-primary mb-3" type="submit">submit</span>
            </template>
        </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateInput, { RulesProps } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
const emailRules: RulesProps = [
  { type: 'required', message: '电子邮箱地址不能为空' },
  { type: 'email', message: '请输入正确的邮箱地址' }
]
const passWordRules: RulesProps = [
  { type: 'required', message: '密码不能为空' }
]
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailRef = ref('viking@163.com')
    const passWordRef = ref('123')
    const router = useRouter()
    const store = useStore()
    const formSubmit = (arg: boolean) => {
      if (arg) {
        // 校验通过后
        store.commit('login')
        router.push('/')
      }
    }
    return {
      emailRef,
      passWordRef,
      formSubmit,
      emailRules,
      passWordRules
    }
  }
})
</script>

<style scoped>

</style>

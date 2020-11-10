<template>
    <div class="create-page">
        <validate-form @form-submit="submit">
            <div class="mb-3">
                <label class="form-label">文章标题</label>
                <validate-input
                    :rules="titleRules"
                    v-model="titleRef"
                    placeholder="请输入文章标题"
                    type="text"
                />
            </div>
            <div class="mb-3">
                <label class="form-label">文章详情</label>
                <validate-input
                    :rules="detailRules"
                    v-model="detailRef"
                    tag="textarea"
                    placeholder="请输入文章详情"
                    type="text"
                />
            </div>
            <template v-slot:submit>
                <span class="btn btn-primary mb-3" type="submit">发表文章</span>
            </template>
        </validate-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput from '@/components/ValidateInput.vue'
import { useStore } from 'vuex'
import { StoreProps } from '../store'
import { PostProps } from '../testData'
import { useRouter } from 'vue-router'
const titleRules = [
  {
    type: 'required',
    message: '文章标题不能为空'
  }
]
const detailRules = [
  {
    type: 'required',
    message: '文章详情不能为空'
  }
]
export default defineComponent({
  name: 'CreatePosts',
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const titleRef = ref()
    const detailRef = ref()
    const store = useStore<StoreProps>()
    const router = useRouter()
    const submit = (res: boolean) => {
      if (res) {
        // 校验通过
        const newPosts: PostProps = {
          id: new Date().getTime(),
          title: titleRef.value,
          content: detailRef.value,
          createdAt: new Date().toLocaleTimeString(),
          columnId: store.state.user.columnId
        }
        store.commit('newPosts', newPosts)
        router.push(`/detail/${store.state.user.columnId}`)
      }
    }
    return {
      submit,
      titleRules,
      titleRef,
      detailRules,
      detailRef
    }
  }
})
</script>

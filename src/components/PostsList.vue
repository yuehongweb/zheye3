<template>
    <div class="card mt-5" v-for="item in list" :key="item.id">
        <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <div class="row">
                <div class="col-4" v-if="item.image">
                    <img class="rounded-lg w-100" :src="item.image"  alt="" />
                </div>
                <div class="col-8">
                   <p class="text-muted">{{item.content}}</p>
                </div>
            </div>
            <div class="text-muted">{{item.createdAt}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '@/testData.ts'
type PostProp = PostProps[];
export default defineComponent({
  name: 'PostsList',
  props: {
    list: {
      type: Array as PropType<PostProp>,
      required: true
    }
  }
})
</script>

<style scoped>
</style>

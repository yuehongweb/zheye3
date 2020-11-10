<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img
                        :src="column.avatar"
                        :alt="column.title"
                        class="card-img-top border border-light rounded-circle w-25 my-3"
                    />
                    <h5 class="card-title">{{ column.title }}</h5>
                    <p class="card-text text-left">{{ column.description }}</p>
                    <router-link :to="{name:'columnDetail',params:{id:column.id}}" class="btn btn-outline-primary">进入专栏</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { ColumnProps } from '@/testData.ts'
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup (props) {
    // 使用计算属性设置默认图片
    const columnList = computed(() => {
      return props.list.map(columnItem => {
        if (!columnItem.avatar) {
          columnItem.avatar = require('@/assets/column.jpg')
        }
        return columnItem
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style scoped>
</style>

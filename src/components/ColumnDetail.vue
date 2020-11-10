<template>
  <div class="column-detail-page mx-auto mb-3 w-75">
    <div class="column-info row py-3 border-bottom align-items-center" v-if="currentData">
        <div class="col-3">
          <img :src="currentData.avatar" alt="">
        </div>
        <div class="col-9">
          <h4>{{currentData.title}}</h4>
          <p>{{currentData.description}}</p>
        </div>
    </div>
    <posts-list :list='currentPosts' />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { StoreProps } from '../store'
import PostsList from '@/components/PostsList.vue'
export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostsList
  },
  setup () {
    const route = useRoute()
    const currentId = +route.params.id
    const store = useStore<StoreProps>()
    const currentData = computed(() => store.getters.getListById(currentId))
    const currentPosts = computed(() => store.getters.getPostsById(currentId))
    return {
      currentData,
      currentPosts
    }
  }
})
</script>

<style scoped>
</style>

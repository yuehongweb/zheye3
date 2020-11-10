<template>
    <div class="home-page text-center mb-4">
        <section>
            <img class="w-25" src="@/assets/callout.svg" alt />
            <h4>随心写作，自由表达</h4>
            <button type="button" class="btn btn-primary my-3">开始写文章</button>
        </section>
        <h5 class="font-weight-bold">发现精彩</h5>
    </div>
    <column-list :list="list" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ColumnList from '../components/ColumnList.vue'
import { useStore } from 'vuex'
import { StoreProps } from '../store'
export default defineComponent({
  name: 'home',
  components: { ColumnList },
  setup () {
    const store = useStore<StoreProps>()
    const list = computed(() => store.state.testData)
    return {
      list
    }
  }
})
</script>

<style scoped>
</style>

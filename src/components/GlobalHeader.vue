<template>
    <nav
        class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4"
    >
        <!-- Navbar content -->
        <a class="navbar-brand" href="#">者也专栏</a>
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <router-link :to="`/login`" class="btn btn-outline-light my-2">登录</router-link>
            </li>
            <li class="list-inline-item">
                <a class="btn btn-outline-light my-2">注册</a>
            </li>
        </ul>
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <dropdown :title="`你好 ${user.name}`">
                    <dropdown-item><router-link :to="`/create`">新建文章</router-link></dropdown-item>
                    <dropdown-item disabled><a href="#">管理账户</a></dropdown-item>
                    <dropdown-item><a href="#">退出登录</a></dropdown-item>
                </dropdown>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Dropdown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>
<style>
</style>

import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId: number;
}
export interface StoreProps {
  user: UserProps;
  testData: ColumnProps[];
  testPosts: PostProps[];
}
const store = createStore<StoreProps>({
  state: {
    user: { isLogin: true, name: 'zy', columnId: 1 },
    testData,
    testPosts
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, name: 'zy', id: 85, isLogin: true }
      console.log(state.user)
    },
    newPosts (state, newPosts) {
      state.testPosts.push(newPosts)
    }
  },
  getters: {
    getTestDataLength (state) {
      return state.testData.filter(item => item.id > 1).length
    },
    getListById: state => (id: number) =>
      state.testData.find(item => id === item.id),
    getPostsById: state => (id: number) =>
      state.testPosts.filter(item => id === item.columnId)
  }
})
export default store

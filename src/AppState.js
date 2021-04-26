import { reactive } from 'vue'

export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  activeProfile: null,
  userPosts: [],
  ads: []
})

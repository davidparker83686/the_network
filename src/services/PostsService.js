import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    console.log(res.data)
    AppState.posts = res.data.posts
    // add res.data.older and res.data.newer to appstate
  }

  async getPostsByID(id) {
    const res = await api.get('api/profiles/' + id + '/posts')
    AppState.posts = res.data.posts
  }

  async getMyPosts() {
    const res = await api.get(`api/posts?creatorId=${AppState.account.id}`)
    AppState.myPosts = res.data
  }

  async getByProfileId(id) {
    const res = await api.get(`api/posts?creatorId=${id}`)
    AppState.activePosts = res.data
  }

  async search(q) {
    const res = await api.get(`api/posts?query=${q}`)
    AppState.activePosts = res.data
    // router push to search page
  }

  async create(data) {
    const res = await api.post('api/posts', data)
    AppState.posts = [...AppState.posts, res.data]
  }

  async like(post) {
    const res = await api.post('api/posts/:id/like')
    AppState.posts = res.data
  }

  async deletePost(posts) {
    await api.delete('api/posts/' + posts.id)
    AppState.posts = AppState.posts.filter(p => p.id !== posts.id)
  }

  async getOlder() {
    await api.getOlder('api/posts?page=' + 2)
    // AppState.posts = AppState.posts
  }

  // async addPhoto(postId, photo) {
  //   await api.post(`api/posts/${postId}/photos`, photo)
  //   this.getActive(postId)
  // }
}

export const postsService = new PostsService()

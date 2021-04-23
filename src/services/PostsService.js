import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    console.log(res.data)
    AppState.posts = res.data.posts
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

  async create(data) {
    const res = await api.post('api/posts', data)
    AppState.posts = [...AppState.posts, res.data]
  }

  // async addPhoto(postId, photo) {
  //   await api.post(`api/posts/${postId}/photos`, photo)
  //   this.getActive(postId)
  // }
}

export const postsService = new PostsService()

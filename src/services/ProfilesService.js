
import { AppState } from '../AppState'
// import router from '../router'
import { api } from './AxiosService'

class ProfilesService {
//   GET https://bcw-sandbox.herokuapp.com/api/profiles?query=
// GET https://bcw-sandbox.herokuapp.com/api/profiles/:id
//     GET https://bcw-sandbox.herokuapp.com/api/profiles/:id/posts

  async getByProfileId(id) {
    const res = await api.get(`api/posts?creatorId=${id}`)
    AppState.activePosts = res.data
  }
}

export const profilesService = new ProfilesService()

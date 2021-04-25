import { AppState } from '../AppState'
import { api } from './AxiosService'

class AdsService {
  async getAll() {
    const res = await api.get('api/ads')
    console.log(res.data)
    AppState.ads = res.data
  }
}

export const adsService = new AdsService()

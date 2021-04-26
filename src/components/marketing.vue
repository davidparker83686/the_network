<template>
  <div class="">
    <Ads v-for="ads in state.ads" :key="ads.title" :ads="ads" />
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import Notification from '../utils/Notification'
import { adsService } from '../services/AdsService'
import { AppState } from '../AppState'
export default {
  name: 'Marketing',
  setup() {
    const state = reactive({
      ads: computed(() => AppState.ads)
    })
    onMounted(async() => {
      try {
        await adsService.getAll()
      } catch (error) {
        Notification.toast('Error:' + error, 'error')
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>

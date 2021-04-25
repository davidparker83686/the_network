<template>
  <div class="card shadow col-11 col-md-9 m-3">
    <div class="card-body">
      <form @submit.prevent="create">
        <div class="form-group">
          <input type="text"
                 class="form-control"
                 name="body"
                 id="body"
                 aria-describedby="helpId"
                 placeholder="Body"
                 v-model="state.newPost.body"
                 required
          >
          <input type="text"
                 class="form-control"
                 name="imgUrl"
                 id="imgUrl"
                 aria-describedby="helpId"
                 placeholder="Image Url..."
                 v-model="state.newPost.imgUrl"
          >
        </div>
        <button type="submit" class="btn btn-success">
          Create
        </button>
      </form>
    </div>
  </div>
  <!-- BIGADS -->
  <div class="d-none d-md-block col-md-2 bg-info">
    <Ads v-for="ads in state.ads" :key="ads.title" :ads="ads" />
  </div>
  <!-- LITTLE ADS -->
  <div class="d-block d-md-none col-10 bg-info">
    <Ads v-for="ads in state.ads" :key="ads.title" :ads="ads" />
  </div>
  <!-- POSTS -->
  <div class="col-11 col-md-9 bg-warning m-3">
    <Posts v-for="posts in state.posts" :key="posts.id" :posts="posts" />
    <!-- BUTTONS  -->
    <div class="col-12 " style="text-align: center;">
      <button type="button" class="btn btn-none mx-5">
        Newer
      </button>

      <!-- <router-link :to="{name: 'posts?page=2'}">
        <button type="button" class="btn btn-none mx-5">
          Older
        </button>
      </router-link> -->
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import Notification from '../utils/Notification'
import { logger } from '../utils/Logger'
import { postsService } from '../services/PostsService'
import { adsService } from '../services/AdsService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      ads: computed(() => AppState.ads),
      posts: computed(() => AppState.posts),
      newPost: {}
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Notification.toast('Error:' + error, 'error')
      }
    })
    onMounted(async() => {
      try {
        await adsService.getAll()
      } catch (error) {
        Notification.toast('Error:' + error, 'error')
      }
    })
    return {
      state,
      async create() {
        try {
          await postsService.create(state.newPost)
          state.newPost = {}
          Notification.toast('Successfully Created Post', 'success')
        } catch (error) {
          logger.log(error)
          Notification.toast('Error: ' + error, 'error')
        }
      }
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

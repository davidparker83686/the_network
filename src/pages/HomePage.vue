<template>
  <div class="card shadow col-12 m-2">
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

  <div class="col-12">
    <Posts v-for="posts in state.posts" :key="posts.id" :posts="posts" />
  </div>

  <div class="col-12">
    <Ads v-for="ads in state.ads" :key="ads.title" :ads="ads" />
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
      posts: computed(() => AppState.posts),
      newPost: {}
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
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

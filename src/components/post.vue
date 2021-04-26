<template>
  <div class="card m-1 shadow">
    <div class="card-body">
      <button type="button" @click="deletePost (posts) " class="btn btn-none p-0" v-if="state.user.isAuthenticated && state.activeProfile.id === state.account.id">
        -
      </button>

      <div class="post" style="cursor: pointer" v-if="posts.creator">
        <router-link :to="{name: 'Profiles', params: {id: posts.creator.id}}">
          <div class="">
            <img class="rounded-circle small-img" :src="posts.creator.picture" alt="User Photo">
            <span class="mx-3">{{ posts.creator.name }}</span>
            <!-- <br> -->
            <span class="mx-5">{{ posts.creator.createdAt }}</span>
          </div>

          <span>{{ posts.body }}</span>
          <br>
          <img class="post-img img-fluid my-2 rounded" :src="posts.imgUrl" alt="">
          <!-- <span> likes{{ posts.likes }}</span> -->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'
import { postsService } from '../services/PostsService'
import { accountService } from '../services/AccountService'

export default {
  name: 'Posts',
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      posts: computed(() => AppState.posts)
    })
    return {
      state,
      async deletePost(posts) {
        try {
          await postsService.deletePost(posts)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>

<style lang="scss" >
.small-img{
     width: 3em;
}
// .post-img{
//      width: 45em;
// }

.next{
}

</style>

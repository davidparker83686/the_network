<template>
  <div class="card m-1 shadow">
    <div class="card-body">
      <button type="button" class="btn btn-danger">
        delete
      </button>
      <div class="post  bg-success" style="cursor: pointer" v-if="posts.creator">
        <router-link :to="{name: 'Profiles', params: {id: posts.creator.id}}">
          <div>
            <img class="rounded-circle small-img" :src="posts.creator.picture" alt="User Photo">
            <h5>{{ posts.creator.name }}</h5>
          </div>
          <span>{{ posts.creator.createdAt }}</span>
          <span>{{ posts.body }}</span>
          <span> likes{{ posts.likes }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" >
.small-img{
     width: 1em;
}

</style>

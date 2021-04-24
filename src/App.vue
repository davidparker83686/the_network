<template>
  <div class="row ">
    <div class="col-2 bg-danger d-none d-md-block">
      <span>hi</span>
    </div>

    <div class="col-8">
      <header class="">
        <Navbar />
      </header>
      <main class="row justify-content-center">
        <router-view />
      </main>

      <div class="row">
        <button type="button" class="btn btn-primary">
          Newer
        </button>
        <button type="button" class="btn btn-secondary">
          Older
        </button>
      </div>
    </div>

    <!-- <div class="col-11 col-md-2 bg-warning">
      <Marketing />
    </div> -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>

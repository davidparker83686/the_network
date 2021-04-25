<template>
  <div class="row">
    <div class="col-2 bg-danger d-none d-md-block m-0 p-0">
      <span>hi</span>
    </div>

    <div class="col-12 col-md-10 p-0">
      <header class="">
        <Navbar />
      </header>
      <main class="row justify-content-center">
        <router-view />
      </main>
    </div>
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

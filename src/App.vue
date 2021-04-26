<template>
  <div class="row">
    <div class="col-2 d-none d-md-block  p-0" style="text-align: center">
      <Sidebar />
    </div>

    <div class="col-12 col-md-8 p-0">
      <header class="">
        <Navbar />
      </header>
      <main class="row justify-content-center">
        <router-view />
      </main>
    </div>

    <div class="col-md-2 d-none d-md-block p-0">
      <Marketing />
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

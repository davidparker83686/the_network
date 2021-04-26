<template>
  <div class="card rounded shadow">
    <button
      class="p-0 btn btn-outline-primary text-uppercase"
      @click="login"
      v-if="!user.isAuthenticated"
    >
      Login
    </button>

    <div class="dropdown" v-else>
      <div
        class="dropdown"
        @click="state.dropOpen = !state.dropOpen"
      >
        <img
          :src="user.picture"
          alt="user photo"
          height="40"
          class="rounded-circle user-pic mt-5 mb-2"
        />
        <br>
        <!-- <span>{{ user.creator.graduated }}</span> -->
        <span class="p-4"> <b> {{ user.name }}</b> </span>
      </div>
      <div
        class="dropdown-menu p-0 list-group w-100"
        :class="{ show: state.dropOpen }"
        @click="state.dropOpen = false"
      >
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Account
          </div>
        </router-link>
        <div
          class="list-group-item list-group-item-action hoverable"
          @click="logout"
        >
          logout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Sidebar',
  setup() {
    const state = reactive({
      dropOpen: false,
      newSearch: {}
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}

.user-pic{
  width: 100pix,
  /* height: 5em, */
}
</style>

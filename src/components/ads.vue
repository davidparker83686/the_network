<template>
  <div class="ad">
    hello
    <span>{{ ads.tall }}</span>
    <img class="" :src="ads.tall" alt="BCW Ads">
    <span>{{ ads }}</span>
    hate this
  </div>
</template>

<script>
export default {
  name: 'Ads',
  props: {
    ads: {
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

</style>

<template>
  <div class="ad">
    <!-- <img class="" :src="ads.imgUrl" alt=""> -->
    <img class="d-none d-md-block img-fluid my-2" :src="ads.tall" alt="BCW Ads">
    <img class="d-block d-md-none img-fluid my-2" :src="ads.square" alt="BCW Ads">
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

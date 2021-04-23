<template>
  <div>
    hello
    <span>{{ ads }}</span>
    <span>{{ ads }}</span>
  </div>
</template>

<script>
export default {
  name: 'Marketing',
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
.small-img{
     width: 1em;
}

</style>

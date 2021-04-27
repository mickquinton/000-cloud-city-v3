<template>
  <div>
    This is About page.
    <!-- <button @click="isFinished && $router.push({ path: '/sports/judo' }) ">Go to Sports</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFinished: false
    }
  },

  methods: {
    // goToSports() {
    //   if (this.isFinished === true) {
    //     this.$router.push({ path: "/sports/judo" })
    //   }
    // }
  }
}
</script>

<style></style>

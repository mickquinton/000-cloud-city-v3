<template>
  <div class="wrap-home-content">
    <div class="home-content">
      <main-banner class="main-banner">This is the main banner</main-banner>
      <div class="wrap-small-banner">
        <small-banner class="small-banner">This is the small banner.</small-banner>
        <small-banner class="small-banner">This is the small banner.</small-banner>
        <small-banner class="small-banner">This is the small banner.</small-banner>
      </div>
    </div>
  </div>
</template>

<script>
import MainBanner from "../components/home/mainBannerBL.vue"
import SmallBanner from "../components/home/smallBannerBL.vue"

export default {
  components: {
    "main-banner": MainBanner,
    "small-banner": SmallBanner
  },

  props: {
    isLoggedin: Boolean
  }
}
</script>

<style lang="scss">
body {
  color: #111;
  background-color: $clr-baseCanvas-light;
}

.wrap-home-content {
  display: flex;
  justify-content: center;

  .home-content {
    display: flex;
    .main-banner {
      margin: $UI-size-xl $UI-size-reg;
      height: 33.5rem;
    }

    .wrap-small-banner {
      margin: $UI-size-xl $UI-size-reg;
      height: 32rem;
      .small-banner {
        background-color: $clr-white;
        margin: 0 0 $UI-size-lg 0;
        height: 10.5rem;
      }
    }
  }
}
</style>

<template>
  <div class="wrap-home-content">
    <div class="home-content">
      <main-banner class="main-banner"></main-banner>
      <div class="wrap-small-banner">
        <div v-for="banner in bannerContent" :key="banner">
          <div class="small-banner">
            <img class="thumb" :src="banner.icon" />
            <div class="texts">
              <div class="title">{{ banner.title }}</div>
              <div class="subtext">{{ banner.subtext }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBanner from "../components/home/mainBannerBL.vue"

export default {
  data() {
    return {
      bannerContent: [
        {
          icon: require("../assets/home/megaphone.svg"),
          title: "This is title 01",
          subtext: "Ut scelerisque hendrerit dui, et vestibulum odio efficitur vel. Proin dolor nibh, pretium at aliquet nec, molestie ut quam."
        },
        { icon: require("../assets/home/commission-plan-arrows.svg"), title: "This is title 02", subtext: "Pellentesque placerat sapien a justo placerat, sit amet condimentum augue mattis." },
        { icon: require("../assets/home/football.svg"), title: "This is title 03", subtext: "Curabitur felis augue, faucibus non pellentesque ut, elementum non augue." }
      ]
    }
  },

  components: {
    "main-banner": MainBanner
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
  max-width: 100%;

  .home-content {
    display: flex;
    flex-basis: 80%;

    .main-banner {
      margin: $UI-size-xl $UI-size-reg;
      height: 33.5rem;
      flex-basis: 60%;
      background-color: $clr-white;
      border: $UI-size-basic solid $elev-soft-md;
      border-radius: $UI-size-reg;
    }

    .wrap-small-banner {
      margin: $UI-size-xl $UI-size-reg;
      height: 32rem;
      flex-basis: 40%;
      .small-banner {
        display: flex;
        background-color: $clr-white;
        margin: 0 0 $UI-size-lg 0;
        height: 10.5rem;
        border-radius: $UI-size-reg;
        border: $UI-size-basic solid $elev-soft-md;
        align-items: center;
        cursor: pointer;

        .thumb {
          width: $UI-size-mega-lg;
          height: $UI-size-mega-lg;
          margin: 0 $UI-size-xl 0 $UI-size-xxl;
        }

        .texts {
          margin-right: $UI-size-lg;

          .title {
            font-weight: 600;
          }

          .subtext {
            color: rgba($clr-black, 0.5);
          }
        }
      }
    }
  }
}
</style>

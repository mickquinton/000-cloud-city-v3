<template>
  <div class="wrap-control">
    <!-- Logged out -->
    <div class="wrap-logged-out" v-if="isLoggedin == false">
      <base-button class="button" :btnLabel="btnLabels[0]" @click="logInOut"></base-button>
      <div class="icon" @click="toggleDialog"></div>
    </div>

    <!-- Logged in -->
    <div class="wrap-logged-in" v-if="isLoggedin == true">
      <base-button class="button" :btnLabel="btnLabels[1]" @click="logInOut"></base-button>
      <div class="icon" @click="toggleDialog"></div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../components/common/baseButton.vue"

export default {
  data() {
    return {
      btnLabels: ["LOG IN", "LOG OUT"]
    }
  },

  components: {
    "base-button": BaseButton
  },

  props: {
    isLoggedin: Boolean
  },

  inject: ['toggleNav', 'toggleDialog', 'logInOut']
}
</script>

<style lang="scss">
.wrap-control {
  
  // LOGGED OUT //

  .wrap-logged-out {
    display: flex;
    align-items: center;

    .button {
      margin: 0 $UI-size-lg 0 0;
    }

    .icon {
      cursor: pointer;
      background-image: url("../assets/icon-grid-menu-light.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      min-width: $UI-size-xl;
      min-height: $UI-size-xl;
      opacity: 0.8;
      margin: 0 $UI-size-reg 0 0;

      &:hover {
        opacity: 1;
      }
    }
  }

  // LOGGED IN //

  .wrap-logged-in {
    display: flex;
    align-items: center;

    .button {
      margin: 0 $UI-size-lg 0 0;
    }

    .icon {
      cursor: pointer;
      background-image: url("../assets/icon-user-light.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      min-width: $UI-size-xl;
      min-height: $UI-size-xl;
      opacity: 0.8;
      margin: 0 $UI-size-reg 0 0;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>

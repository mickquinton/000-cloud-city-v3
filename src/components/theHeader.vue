<template>
  <base-dialog v-if="isDialogshown" :isLoggedin="isLoggedin"></base-dialog>
  <div class="wrap-header">
    <router-link to="/" v-if="isLoggedin == false"><div class="logo"></div></router-link>
     <router-link to="/homeAL"  v-if="isLoggedin == true"><div class="logo"></div></router-link>
    <div class="wrap-nav" v-if="isLoggedin == true">
      <div class="nav-link" v-for="page in navigation" :key="page" :class="{ selected: page.isSelected === true }" @click="toggleNav(page)">
        <router-link class="link" :to="page.path">{{ page.label }}</router-link>
      </div>
    </div>
    <user-control class="wrap-user-control" :isLoggedin="isLoggedin"></user-control>
    <!-- <user-control class="wrap-user-control"></user-control> -->
  </div>
</template>

<script>
import UserControl from "../components/userControl.vue"
import BaseDialog from "../components/common/baseDialog.vue"

export default {
  components: {
    "user-control": UserControl,
    "base-dialog": BaseDialog
  },

  data() {
    return {
      isDialogshown: false,
      isLoggedin: false,
      navigation: [
        { label: "My account", isSelected: false, path: "/my-account" },
        { label: "Assets", isSelected: false, path: "/assets" },
        { label: "Reports", isSelected: false, path: "/reports" },
        { label: "Payments", isSelected: false, path: "/payments" }
      ]
    }
  },

  methods: {
    toggleNav(page) {
      page.isSelected = !page.isSelected
    },

    toggleDialog() {
      this.isDialogshown = !this.isDialogshown
    },

    logInOut() {
      this.isLoggedin = !this.isLoggedin
      if (this.isLoggedin === false) {
        return this.$router.push({ path: "/" })
      } else {
        return this.$router.push({ path: "/homeAL" })
      }
    },

    linkToHome() {
      if (this.isLoggedin === false) {
        return this.$router.push({ path: "/" })
      } else {
        return this.$router.push({ path: "/homeAL" })
      }
    }
  },

  provide() {
    return {
      toggleDialog: this.toggleDialog,
      logInOut: this.logInOut
    }
  }
}
</script>

<style lang="scss">
.wrap-header {
  display: flex;
  background-color: $clr-dark;
  height: $UI-size-kilo-xxxl;
  color: $clr-white;
  align-items: center;

  .logo {
    background-image: url("../assets/cloudcity-logo-light.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: $UI-size-kilo-xl;
    height: $UI-size-kilo-xl;
    margin: 0 $UI-size-xl 0 $UI-size-xl;
  }

  .wrap-nav {
    display: flex;
    .nav-link {
      cursor: pointer;
      padding: $UI-size-reg;
      margin: $UI-size-reg;

      .link {
        color: rgba($clr-white, 0.8);
        text-decoration: none;

        &:hover {
          color: rgba($clr-white, 1);
        }
      }
    }

    .selected {
      color: rgba($clr-white, 1);
    }
  }
  .wrap-user-control {
    margin: 0 $UI-size-reg 0 auto;
  }
}
</style>

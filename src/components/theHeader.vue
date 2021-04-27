<template>
  <base-dialog v-if="isDialogshown" :isLoggedin="isLoggedin"></base-dialog>
  <div class="wrap-header">
    <div class="logo">Logo</div>
    <div class="wrap-nav">
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

  // props: {
  //   isLoggedin: Boolean
  // },

  data() {
    return {
      isDialogshown: false,
      isLoggedin: false,
      navigation: [{ label: "GPR", isSelected: false, path: "/gpr" }],
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
    }
  },

  provide() {
    return {
      toggleDialog: this.toggleDialog,
      logInOut: this.logInOut
    }
  }

  // inject: ['toggleNav', 'toggleDialog', 'logInOut']
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
    background-color: rgba(#ff9200, 1);
    width: $UI-size-kilo-lg;
    height: $UI-size-kilo-lg;
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

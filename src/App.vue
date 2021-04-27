<template>
  <base-dialog v-if="isDialogshown" :isLoggedin="isLoggedin"></base-dialog>
  <the-header></the-header>
  <router-view />
</template>

<script>
import Header from "./components/theHeader.vue"
import BaseDialog from "./components/common/baseDialog.vue"

export default {
  data() {
    return {
      isDialogshown: false,
      isLoggedin: false
    }
  },

  components: {
    "the-header": Header,
    "base-dialog": BaseDialog
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
    },
  },

  provide() {
    return {
      toggleNav: this.toggleNav,
      toggleDialog: this.toggleDialog,
      logInOut: this.logInOut
    }
  }
}
</script>

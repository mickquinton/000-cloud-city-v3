<template>
  <section class="wrap-dialog" :dialog="isDialogshown">
    <div class="sideSheet">
      <div class="close-icon" @click="toggleDialog"></div>
      <div v-if="isLoggedin == false">Boo! I am logged out.</div>
      <div v-if="isLoggedin == true">Nice! I am logged in.</div>
      <!-- <user-menu-bl></user-menu-bl> -->
    </div>
  </section>
</template>

<script>
// import UserMenuBL from '../../components/userMenuBL.vue'

export default {
  // components: {
  //   'user-menu-bl': UserMenuBL
  // },
  props: {
    isDialogshown: Boolean,
    isLoggedin: Boolean,
  },

  inject: ["toggleDialog"]
}
</script>

<style lang="scss">
.wrap-dialog {
  background-color: rgba($clr-black, 0.7);
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .sideSheet {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 25rem;
    background-color: $clr-primary;
    margin-left: auto;
    color: #fff;

    .close-icon {
      cursor: pointer;
      background-image: url("../../assets/icon-close-light.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      min-width: $UI-size-xl;
      min-height: $UI-size-xl;
      opacity: 0.8;
      height: $UI-size-kilo-xxxl;
      margin: 0 $UI-size-lg 0 auto;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>

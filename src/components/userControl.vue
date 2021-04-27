<template>
  <div class="wrap-control">
    <base-button></base-button>
    <div class="menu" @click="toggleDialog">Burger</div>
  </div>
</template>

<script>
import BaseButton from "../components/common/baseButton.vue"

export default {
  components: {
    "base-button": BaseButton
  },

  props: {
    isDialogshown: Boolean
  },

  inject: ["toggleDialog"]
}
</script>

<style lang="scss">
.wrap-control {
  display: flex;
  align-items: center;

  .menu {
    background-color: rgba(#ff9200, 1);
    width: $UI-size-kilo-lg;
    height: $UI-size-kilo-lg;
    margin: 0 $UI-size-reg 0 $UI-size-xl;
    cursor: pointer;
  }
}
</style>

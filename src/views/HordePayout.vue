<template>
  <div class="wrap-horde-payout">
    <div class="wrap-left-panel">
      <left-panel></left-panel>
    </div>
    <div>This is the Horde Payout page.</div>
  </div>
</template>

<script>
import LeftPanel from "../components/common/leftPanel.vue"

export default {
  components: {
    "left-panel": LeftPanel
  }
}
</script>

<style lang="scss">
body {
  color: #111;
  background-color: rgba($clr-baseCanvas-light, 1);
}

.wrap-horde-payout {
  display: flex;

  .wrap-left-panel {
    margin: $UI-size-xl;
  }
}
</style>
<template>
  <div class="wrap-monthly-loot">
    <div class="wrap-left-panel">
      <left-panel></left-panel>
    </div>
    <div>This is the Monthly Loot page.</div>
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

.wrap-monthly-loot {
  display: flex;

  .wrap-left-panel {
    margin: $UI-size-xl;
  }
}
</style>
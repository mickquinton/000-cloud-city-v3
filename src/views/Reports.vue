<template>
  <div class="wrap-reports">
    <div class="wrap-left-panel">
      <left-panel></left-panel>
    </div>
    <div>This is the Reports Summary.</div>
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

.wrap-reports {
  display: flex;

  .wrap-left-panel {
    margin: $UI-size-xl;
  }
}
</style>
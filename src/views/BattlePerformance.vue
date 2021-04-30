<template>
  <div class="wrap-main">
    <div class="wrap-content">
      <div class="wrap-left-panel">
        <left-panel></left-panel>
      </div>
      <div class="wrap-right-content">This is the Battle Performance Summary.</div>
    </div>
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
  background-color: $clr-baseCanvas-light;
  color: $clr-primary;
}

.wrap-main {
  display: flex;
  justify-content: center;
  max-width: 100%;
  .wrap-content {
    display: flex;
    flex-basis: 90%;
    margin: $UI-size-xl $UI-size-lg;

    .wrap-left-panel {
      flex-basis: 30%;
      margin-right: $UI-size-xl;
    }

    .wrap-right-content {
      flex-basis: 70%;
      background-color: $clr-white;
      border-radius: $UI-size-reg;
    }
  }
}
</style>
<template>
  <div class="wrap-main">
    <div class="wrap-summary">Summary</div>
    <div class="wrap-graphs">
      <div class="graph">
        <div class="line-graph">Line graph 1</div>
        <div class="legend">Legend 1</div>
      </div>
      <div class="graph">
        <div class="line-graph">Line graph 2</div>
        <div class="legend">Legend 2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wrap-main {
  padding: $UI-size-xl;

  .wrap-summary {
    background-color: $clr-swatchPrimary-300;
    border-radius: $UI-size-reg;
    height: $UI-size-mega-xl;
  }

  .wrap-graphs {
    display: flex;
    margin-top: $UI-size-lg;
    justify-content: space-evenly;

    .graph {
      flex-basis: 50%;
      border-radius: $UI-size-reg;
      border: $UI-size-basic solid $clr-swatchPrimary-300;
      padding: $UI-size-xl;
      margin: 0 $UI-size-reg;

      .line-graph {
        height: $UI-size-ext-001;
        background-color: $clr-swatchPrimary-300;
      }

      .legend {
        background-color: $clr-swatchPrimary-300;
        height: $UI-size-xl;
        margin-top: $UI-size-lg;
      }
    }
  }
}
</style>

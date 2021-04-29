<template>
  <div class="wrap-homeAL-content">
    <div class="homeAL-content">
      <summary-box class="wrap-summary-main"></summary-box>
      <div class="wrap-monthly-summary">
        <monthly-summary class="monthly-summary"></monthly-summary>
         <monthly-summary class="monthly-summary"></monthly-summary>
          <monthly-summary class="monthly-summary"></monthly-summary>
      </div>
    </div>
  </div>
</template>

<script>
import SummaryBox from '../components/home/summaryAL.vue'
import MonthlySummary from '../components/home/monthlySummaryAL.vue'
export default {
  components: {
    'summary-box': SummaryBox,
    'monthly-summary': MonthlySummary
  }
}
</script>

<style lang="scss">
.wrap-homeAL-content {
  max-width: 100%;

  .homeAL-content {
    .wrap-summary-main {
      margin: $UI-size-xl;
      background-color: $clr-white;
      border: $UI-size-basic solid $elev-soft-md;
      border-radius: $UI-size-reg;
      height: 25rem;
    }

    .wrap-monthly-summary {
      .monthly-summary {
        background-color: $clr-white;
        border: $UI-size-basic solid $elev-soft-md;
        border-radius: $UI-size-reg;
        height: $UI-size-mega-xxxl;
        margin: 0 $UI-size-xl $UI-size-xl $UI-size-xl;
      }
    }
  }
}
</style>

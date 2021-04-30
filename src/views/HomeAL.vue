<template>
  <div class="wrap-homeAL-content">
    <div class="homeAL-content">
      <summary-box class="wrap-summary-main"></summary-box>
      <div class="wrap-monthly-summary">
        <div class="monthly-summary" v-for="data in monthlyData" :key="data">
          <div class="month">{{ data.month }}</div>
          <div class="wrap-data">Monthly data</div>
        </div>
      </div>
      <!-- <div class="wrap-monthly-summary">
        <monthly-summary class="monthly-summary"></monthly-summary>
         <monthly-summary class="monthly-summary"></monthly-summary>
          <monthly-summary class="monthly-summary"></monthly-summary>
      </div> -->
    </div>
  </div>
</template>

<script>
import SummaryBox from '../components/home/summaryAL.vue'
// import MonthlySummary from '../components/home/monthlySummaryAL.vue'
export default {
  components: {
    'summary-box': SummaryBox,
    // 'monthly-summary': MonthlySummary
  },

  data() {
    return {
      monthlyData:[
        {month: 'January', label1:'Commission balance', value1: 'PHP 999,999,999.99', label2: 'Actives', value2: 999, label3: 'New deposits', value3: 999, label4: 'Sign ups', value4: 999},
        {month: 'February', label1:'Commission balance', value1: 'PHP 999,999,999.99', label2: 'Actives', value2: 999, label3: 'New deposits', value3: 999, label4: 'Sign ups', value4: 999},
        {month: 'March', label1:'Commission balance', value1: 'PHP 999,999,999.99', label2: 'Actives', value2: 999, label3: 'New deposits', value3: 999, label4: 'Sign ups', value4: 999},
      ]
    }
  }
}
</script>

<style lang="scss">
.wrap-homeAL-content {
  display: flex;
  max-width: 100%;
  justify-content: center;

  .homeAL-content {
    flex-basis: 85%;
    margin: $UI-size-xl 0;
    
    .wrap-summary-main {
      // margin: $UI-size-xl;
      background-color: $clr-white;
      border: $UI-size-basic solid $elev-soft-md;
      border-radius: $UI-size-reg;
    }

    .wrap-monthly-summary {
      margin: $UI-size-xl 0;
      .monthly-summary {
        display: flex;
        align-items: center;
        background-color: $clr-white;
        border: $UI-size-basic solid $elev-soft-md;
        border-radius: $UI-size-reg;
        height: $UI-size-mega-xxxl;
        margin: 0 0 $UI-size-lg 0;
        padding: 0 $UI-size-xxl;

        .month {
          font-weight: 600;
        }

        .wrap-data {
          background-color: $clr-swatchPrimary-250;
          margin-left: auto;
        }
      }
    }
  }
}

</style>

<template>
  <div class="wrap-main">
    <div class="main-content">
      <div class="wrap-summary">
        <div class="main-summary">Main Summary</div>
        <div class="main-graphs">
          <div class="graph-box">
            <div class="line-graph-box">Line graph 1</div>
            <div>Legend 1</div>
          </div>
          <div class="graph-box">
            <div class="line-graph-box">Line graph 2</div>
            <div>Legend 2</div>
          </div>
        </div>
      </div>
      <div class="wrap-monthly-data">
        <div class="monthly-data" v-for="(data, index) in monthlyData" :key="index">
          <div class="month">{{ data.month }}</div>
          <div class="wrap-data">Monthly data</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthlyData: [
        { month: "January", label1: "Commission balance", value1: "PHP 999,999,999.99", label2: "Actives", value2: 999, label3: "New deposits", value3: 999, label4: "Sign ups", value4: 999 },
        { month: "February", label1: "Commission balance", value1: "PHP 999,999,999.99", label2: "Actives", value2: 999, label3: "New deposits", value3: 999, label4: "Sign ups", value4: 999 },
        { month: "March", label1: "Commission balance", value1: "PHP 999,999,999.99", label2: "Actives", value2: 999, label3: "New deposits", value3: 999, label4: "Sign ups", value4: 999 }
      ]
    }
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
  .main-content {
    flex-basis: 80%;
    margin: $UI-size-xl 0;

    .wrap-summary {
      background-color: $clr-white;
      border-radius: $UI-size-reg;
      height: 30rem;
      margin-bottom: $UI-size-xl;
      padding: $UI-size-xl;

      .main-summary {
        background-color: $clr-swatchPrimary-250;
        height: $UI-size-mega-xxl;
        border-radius: $UI-size-reg;
        margin-bottom: $UI-size-xl;
      }

      .main-graphs {
        display: flex;
        justify-content: space-between;

        .graph-box {
          flex-basis: 45.5%;
          border-radius: $UI-size-reg;
          border: $UI-size-basic solid $clr-swatchPrimary-300;
          padding: $UI-size-lg;
          margin: 0 $UI-size-reg;

          .line-graph-box {
            height: $UI-size-ext-001;
            background-color: $clr-swatchPrimary-300;
            margin-bottom: $UI-size-lg;
          }
        }
      }
    }

    .wrap-monthly-data {
      .monthly-data {
        display: flex;
        align-items: center;
        background-color: $clr-white;
        border-radius: $UI-size-reg;
        height: $UI-size-mega-xxl;
        margin-bottom: $UI-size-lg;
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

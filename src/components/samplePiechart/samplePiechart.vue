<template>
  <svg style="width:100px;height:100px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="22" width="22" viewBox="0 0 22 22">
    <circle r="10.5" cx="10.5" cy="10.5" fill="#666666" />
    <circle r="10" cx="10" cy="10" fill="#666666" />

    <circle id="value-1" r="5" cx="9.5" cy="10.5" fill="transparent" stroke="#ff9200" stroke-width="10" :stroke-dasharray="calculatePercentage" transform="rotate(-90) translate(-20)" />
    <!--calc in JS like this: stroke-dasharray="calc(XX * 31.4 / 100) 31.4", where XX is 0 to 100 -->


    <!-- <circle id="value-1" r="5" cx="9.5" cy="10.5" fill="transparent" stroke="#ff9200" stroke-width="10" stroke-dasharray="calculatePercentage()" transform="rotate(-90) translate(-20)" /> -->
  </svg>
</template>

<script>
export default {
    data(){
        return {
            sampleNumber: 34343,
            sampleTotal: 43413,
        }
    },

    computed: {
        calculatePercentage(){
            return [((this.sampleNumber / this.sampleTotal) * 100 * 31.4) / 100,  31.4]
        }
    }

// methods: {
//     calculatePie() {
//        for (let XX = i; i >=0);
//         calc(XX * 31.4 / 100) * 31.4);
//     }
// }
}
</script>

<style></style>

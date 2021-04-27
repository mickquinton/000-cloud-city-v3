<template>
  <div>This is the Sports page.</div>
  <!-- <div>What type of Sports: {{ message }}</div> -->
</template>

<script>

export default {

  props: {
    sportsType: String
  },

//   computed: {
//     message(){
//       if (this.sportsType === 'judo'){
//         return 'Judo is cool' 
//       } else if (this.sportsType === 'bjj'){
//         return 'BJJ is way cooler'
//       } else {
//         return 'No sports'
//       }
//     }
//   }
}
</script>

<style></style>

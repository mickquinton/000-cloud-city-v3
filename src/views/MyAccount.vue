<template>
  <div class="wrap-main">
    <div class="main">
      <div class="main-card">Main card</div>
      <div class="details">
        <div>Left grp</div>
        <div>Right grp</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wrap-main {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 100%;

  .main {
    flex-basis: 80%;

    .main-card {
      background-color: $clr-white;
      border-radius: $UI-size-reg;
      height: $UI-size-mega-xl;
    }

    .details {
      display: flex;
    }
  }
}
</style>

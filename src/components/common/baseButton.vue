<template>
  <div class="main-btn">{{ btnLabel }}</div>
</template>

<script>
export default {
  props: {
    btnLabel: String
  }
}
</script>

<style lang="scss">
.main-btn {
  cursor: pointer;
  font-weight: 600;
  background-color: $clr-swatchPrimary-850;
  padding: $UI-size-reg $UI-size-lg $UI-size-reg $UI-size-lg;
  border-radius: $UI-size-reg;
  min-width: $UI-size-kilo-xxl;
  text-align: center;
  font-size: $font-body2;

  &:hover {
    background-color: rgba($clr-swatchPrimary-800, 0.8);
  }
}
</style>

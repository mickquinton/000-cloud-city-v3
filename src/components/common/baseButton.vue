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
}
</style>

<template>
  <div>This is the Cart.</div>
  <div v-for="cartItem in cartItemsShown" :key="cartItem">{{ cartItem.name }}</div>
</template>

<script>
export default {
  props: {
    cartItemsShown: Object
  }
}
</script>

<style></style>

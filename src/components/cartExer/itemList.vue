<template>
  <div>This is the Item list.</div>
  <div v-for="item in itemListShown" :key="item" @click="$emit('placeToCart', 'Where is my Item?')">{{ item.name }}</div>
</template>

<script>
export default {
  props: {
    itemListShown: Object
  },

  emits: ['placeToCart']
}
</script>

<style></style>

<template>
  <the-header></the-header>
  <router-view />
</template>

<script>
import Header from "./components/theHeader.vue"

export default {
  components: {
    "the-header": Header
  }
}
</script>

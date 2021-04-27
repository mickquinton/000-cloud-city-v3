<template>
  <the-header></the-header>
  <router-view />
</template>

<script>
import header from "./components/theHeader.vue"

export default {
  components: {
    "the-header": header
  }
}
</script>

<template>
  <div>This is the Cart page.</div>
  <item-list :itemListShown="itemList" @placeToCart="putToCart"></item-list>
  <cart-items :cartItemsShown="itemList"></cart-items>
</template>

<script>
import ItemList from "../components/cartExer/itemList.vue"
import CartItems from "../components/cartExer/cartItems.vue"

export default {
  data() {
    return {
      itemList: [{ name: "Milk"}]
    }
  },

  methods: {
      putToCart(value) {
          this.itemList[0].name = value
        //   console.log(value)
      }
  },

  components: {
    "item-list": ItemList,
    "cart-items": CartItems
  }
}
</script>

<style></style>

<template>
  <div class="wrap-menu">
    <div class="menu-list" v-for="link in panelLinks" :key="link" @click="$router.push({ path: link.path })">
      <div class="item-list">
        <div>{{ link.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      panelLinks: [
        { label: "Summary", path: "/reports" },
        { label: "Battle Performance", path: "/reports/battle-performance" },
        { label: "Horde", path: "/reports/horde" },
        { label: "GPR", path: "/reports/gpr" },
        { label: "Monthly Loot", path: "/reports/monthly-loot" },
        { label: "Horde Payout", path: "/reports/horde-payout" }
      ]
    }
  },

  props: {
    reportType: String
  }
}

</script>

<style lang="scss">
.wrap-menu {
  border-radius: $UI-size-reg;
  background-color: rgba($clr-white, 1);
  border: $UI-size-basic solid $elev-soft-md;
  .menu-list {
    padding: $UI-size-xl $UI-size-giga-xxxl $UI-size-xl $UI-size-xxl;
    color: rgba($clr-black, 0.5);
    border-bottom: $UI-size-basic solid rgba($clr-swatchPrimary-200, 1);

    &:hover {
      color: rgba($clr-black, 1);
    }

    .item-list {
      display: flex;
      cursor: pointer;
    }
  }
}
</style>

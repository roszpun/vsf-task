<template>
  <div class="sku-component">
    <heading :level="5">SKU: {{sku}}</heading>
  </div>
</template>

<script>
import { heading } from "./../shared.js";
export default {
  name: "Sku",
  components: {
    heading
  },
  props: {
    productId: {
      type: String,
      required: true
    },
    variants: {
      type: Object,
      required: true
    }
  },
  computed: {
    sku() {
      return `${this.productId}-${this.dynamicSkuVariants}`;
    },
    dynamicSkuVariants() {
      return Object.values(this.variants)
        .map(variant => variant.value.value)
        .reverse()
        .join("-");
    }
  },
  watch: {
    sku(newValue, oldValue) {
      if (newValue !== oldValue) this.$emit("skuChanged", newValue);
    }
  }
};
</script>

<style scoped lang="scss">
h5 {
  font-size: 16px;
  color: #828282;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
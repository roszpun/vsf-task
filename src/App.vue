<template>
  <div class="product-app-view">
    <button @click="cartStatus=!cartStatus">show or hide cart</button>
    <div class="product-container">
      <div class="product-images">
        <img :src="productImgUrl" alt="product image">
      </div>
      <div class="product-details">
        <heading :level="1">{{product.title}}</heading>
        <sku :product-id="product.id" :variants="selectedVariants" @skuChanged="onSkuChange"></sku>
        <color-picker
          :label="product.variants.colors.title"
          :values="product.variants.colors.values"
          :type="product.variants.colors.type"
          @pickerSelectedChanged="onPickerChange"
        ></color-picker>
        <picker
          :label="product.variants.sizes.title"
          :values="product.variants.sizes.values"
          :type="product.variants.sizes.type"
          @pickerSelectedChanged="onPickerChange"
        ></picker>
        <number-input @inputValueChanged="onQuantityChange" :initial-value="1" :label="'Quantity'"></number-input>
        <button class="add-to-cart-button" @click="onAddToCartClick">Add to cart</button>
      </div>
    </div>
    <cart
      ref="cartComponent"
      :selected-product="product"
      :selected-product-quantity="productQuantity"
      :selected-product-sku="selectedSku"
      :selected-product-variants="selectedVariants"
      :cart-status="cartStatus"
      @closedCart="cartStatus = false"
    ></cart>
  </div>
</template>
<script>
import { picker, colorPicker, sku } from "./components/product.js";
import { numberInput, heading, price } from "./components/shared.js";
import cart from "./components/cart/cart";
import productData from "./productData.js";

export default {
  data: () => {
    return {
      product: productData,
      selectedVariants: {},
      selectedSku: "",
      productQuantity: 1,
      cartStatus: false
    };
  },
  components: {
    heading,
    price,
    picker,
    sku,
    colorPicker,
    numberInput,
    cart
  },
  methods: {
    onPickerChange(payload) {
      this.$set(this.selectedVariants, payload.type, {
        value: payload.value,
        label: payload.label
      });
    },
    onQuantityChange(payload) {
      this.$set(this, "productQuantity", parseInt(payload));
    },
    onSkuChange(payload) {
      this.$set(this, "selectedSku", payload);
    },
    onAddToCartClick() {
      this.$refs.cartComponent.$emit("addProductToCart");
    }
  },
  computed: {
    productImgUrl() {
      if (!this.selectedVariants.color) return this.product.images.blue;
      return this.product.images[this.selectedVariants.color.value.value];
    }
  }
};
</script>

<style lang="scss">
.product-app-view {
  position: relative;
}
.product-container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}
.product-details {
  display: flex;
  flex-flow: column wrap;
}
.add-to-cart-button {
  background: rgb(39, 39, 39);
  color: #fff;
  padding: 20px;
  font-size: 18px;
  &:hover {
    background: rgb(51, 51, 51);
  }
}
@import "./scss/reset.scss";
@import "./scss/typography.scss";
</style>


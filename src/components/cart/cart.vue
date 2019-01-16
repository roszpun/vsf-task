<template>
  <div class="cart-component" v-if="cartStatus">
    <button class="close-button" @click="$emit('closedCart')">close cart</button>
    <heading :level="1" v-if="isEmpty">Cart is Empty! :(</heading>
    <cart-product
      v-for="(product, index) in products"
      :key="index"
      :product-data="product"
      @removeProductButtonClicked="onRemoveButtonClick"
      :product-index="index"
    ></cart-product>
    <price
      class="total-price"
      :unit-position="'append'"
      v-if="totalPrice"
      level="1"
    >Total price: {{totalPrice}}</price>
  </div>
</template>

<script>
import cartProduct from "./cart-product";
import { heading, price } from "./../shared.js";
export default {
  name: "CartList",
  components: {
    cartProduct,
    heading,
    price
  },
  props: {
    cartStatus: {
      type: Boolean,
      required: true
    },
    selectedProduct: {
      type: Object,
      required: true
    },
    selectedProductSku: {
      type: String,
      required: String
    },
    selectedProductQuantity: {
      type: Number,
      required: true
    },
    selectedProductVariants: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.$on("addProductToCart", this.addProductCartList);
  },
  methods: {
    addProductCartList() {
      this.selectedProductExistsInCart
        ? this.increaseExisitingProductQuantity()
        : this.addNonExistingProductToCart();
      alert("product has been added to your cart");
    },
    productExistsInCart() {
      return this.products.some(
        product => product.sku === this.selectedProductSku
      );
    },
    addNonExistingProductToCart() {
      this.products.push(this.unbindProduct(this.selectedCartProduct));
    },
    unbindProduct(product) {
      return JSON.parse(JSON.stringify(product));
    },
    increaseExisitingProductQuantity() {
      this.products.filter(
        product => product.sku === this.selectedProductSku
      )[0].quantity += this.selectedProductQuantity;
    },
    onRemoveButtonClick(index) {
      this.products.splice(index, 1);
    }
  },
  computed: {
    selectedProductExistsInCart() {
      return this.productExistsInCart();
    },
    isEmpty() {
      return this.products.length === 0;
    },
    totalPrice() {
      if (this.isEmpty) return false;
      return Math.round(
        this.products
          .map(product => parseFloat(product.price.value) * product.quantity)
          .reduce((a, v) => a + parseFloat(v))
      );
    },
    selectedCartProduct() {
      return {
        ...this.selectedProduct,
        sku: this.selectedProductSku,
        variants: this.selectedProductVariants,
        quantity: this.selectedProductQuantity
      };
    }
  }
};
</script>

<style scoped lang="scss">
.total-price {
  border-top: 1px solid lightgrey;
}
.cart-component {
  width: 40vw;
  background: #fff;
  border-left: 1px solid lightgrey;
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
}
.close-button {
  margin-left: auto;
  display: block;
}
</style>
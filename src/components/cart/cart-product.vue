<template>
  <div class="cart-product-element">
    <div class="cart-product-image">
      <img :src="productImgUrl" alt="cart product img">
    </div>
    <div class="cart-product-details">
      <heading :level="3">{{productData.title}}</heading>
      <price :level="5" :unit="productData.price.unit">{{productData.price.value}}</price>
      <ul>
        <li>{{productData.sku}}</li>
        <li
          v-for="(variant, index) in productData.variants"
          :key="index"
        >{{variant.label}}: {{variant.value.text}}</li>
      </ul>
      <heading :level="4">Qty:
        <number-input
          @inputValueChanged="onQuantityChange"
          @blur="onBlur"
          :label="'qty'"
          v-if="quantityEdition"
          :hide-label="true"
          :initial-value="productData.quantity"
        ></number-input>
        <span v-else>{{this.productData.quantity}}</span>
        <div class="cart-product-controls">
          <button @click="onEditQuantityClick">Edit</button>
          <button @click="onProductRemove(productIndex)">remove</button>
        </div>
      </heading>
    </div>
  </div>
</template>


<script>
import { heading, numberInput, price } from "./../shared.js";
export default {
  name: "CartProduct",
  components: {
    price,
    heading,
    numberInput
  },
  props: {
    productData: {
      type: Object,
      required: true
    },
    productIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      quantityEdition: false
    };
  },
  methods: {
    onBlur() {
      this.quantityEdition = false;
    },
    onQuantityChange(payload) {
      this.productData.quantity = parseInt(payload);
    },
    onProductRemove(index) {
      this.$emit("removeProductButtonClicked", index);
    },
    onEditQuantityClick() {
      this.quantityEdition = true;
    }
  },
  computed: {
    productImgUrl() {
      return this.productData.images[
        this.productData.variants.color.value.value
      ];
    }
  }
};
</script>
<style lang="scss">
.cart-product-element {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
}
.cart-product-details {
  width: 80%;
  padding-left: 20px;
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 0;
      padding: 0;
    }
  }
  .number-input {
    margin-top: 10px;
    padding: 0;
    display: inline-block;
    input {
      width: 40px;
      padding: 0;
      height: auto;
    }
  }
}
.cart-product-image {
  width: 20%;
  img {
    width: 100%;
    height: auto;
  }
}
.cart-product-controls {
  width: 100%;
  text-align: right;
}

button {
  margin-left: auto;
}
</style>
<template>
  <div>
    <heading :level="level">
      <span v-if="unitPrepended">{{unit}}</span>
      <slot></slot>
      <span v-if="unitAppeended">{{unit}}</span>
    </heading>
  </div>
</template>

<script>
import { heading } from "./../shared.js";
export default {
  name: "Price",
  extends: heading,
  components: {
    heading
  },
  props: {
    unit: {
      type: String,
      required: false,
      default: "$"
    },
    unitPosition: {
      type: String,
      required: false,
      default: "prepend",
      validator(value) {
        return ["prepend", "append"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    unitPrepended() {
      return this.unitPosition === "prepend";
    },
    unitAppeended() {
      return this.unitPosition === "append";
    }
  }
};
</script>
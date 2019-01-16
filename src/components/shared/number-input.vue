<template>
  <fieldset class="number-input">
    <label v-if="!hideLabel" :for="id">{{this.label}}</label>
    <input
      type="number"
      :id="id"
      :min="min"
      :max="max"
      :name="id"
      v-model="value"
      @blur="$emit('blur')"
    >
  </fieldset>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 99
    },
    label: {
      type: String,
      required: true
    },
    initialValue: {
      type: Number,
      required: true
    },
    hideLabel: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: this.initialValue
    };
  },
  computed: {
    id() {
      return this.label
        .split(" ")
        .join("-")
        .toLowerCase();
    }
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue && Number.isInteger(parseInt(newValue)))
        this.$emit("inputValueChanged", newValue);
    }
  },
  methods: {
    reset() {
      this.value = this.min;
    }
  }
};
</script>

<style scoped lang="scss">
.number-input {
  border: none;

  label {
    display: block;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
  }
  input {
    padding: 10px 0;
    width: 90px;
    font-size: 18px;
    border: none;
    outline: none;
    border-bottom: 1px solid lightgray;
  }
}
</style>
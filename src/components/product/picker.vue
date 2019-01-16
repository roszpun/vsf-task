<template>
  <div :class="['picker-component',componentClass]">
    <strong>
      <span>{{label}}:</span>
      {{this.selectedElement.text}}
    </strong>
    <div class="picker-buttons">
      <picker-button
        v-for="(value, index) in  values"
        :key="index"
        :value="value"
        :selected="isSelected(value)"
        @pickerButtonClicked="onPickerClick"
      ></picker-button>
    </div>
  </div>
</template>

<script>
import pickerButton from "./picker-button";
export default {
  name: "Picker",
  components: {
    "picker-button": pickerButton
  },
  props: {
    values: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: false
    };
  },
  mounted() {
    this.updateSelectedValue(this.values[0]);
  },
  computed: {
    selectedElement() {
      return this.selected;
    },
    componentClass() {
      return `${this.type}-picker`;
    }
  },
  methods: {
    isSelected(value) {
      return this.selected === value;
    },
    updateSelectedValue(value) {
      this.$set(this, "selected", value);
      this.onPickerSelectedUpdate(value);
    },
    onPickerClick(value) {
      this.updateSelectedValue(value);
    },
    onPickerSelectedUpdate(value) {
      this.$emit("pickerSelectedChanged", {
        value: value,
        type: this.type,
        label: this.label
      });
    }
  }
};
</script>

<style lang="scss" scoped>
strong {
  span {
    font-weight: 400;
  }
}
.picker-buttons {
  padding: 15px 0 40px;
}
</style>

<template>
  <div :class="['picker-button-component', componentClasses]">
    <button @click="onClick()" :style="buttonColorStyle"></button>
  </div>
</template>

<script>
import pickerButton from "./../picker-button";

export default {
  name: "ColorPickerButton",
  extends: pickerButton,
  computed: {
    buttonColorStyle() {
      return { backgroundColor: this.value.value };
    }
  }
};
</script>

<style lang="scss">
.color-picker {
  button,
  .picker-button-component {
    padding: 1px;
    border-radius: 50%;
  }
}
</style>


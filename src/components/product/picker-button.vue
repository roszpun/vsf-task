<template>
  <div :class="['picker-button-component', componentClasses]">
    <button @click="onClick">
      <span>{{value.text}}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "PickerButton",
  props: {
    value: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("pickerButtonClicked", this.value);
    }
  },
  computed: {
    componentClasses() {
      return {
        selected: this.selected
      };
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  display: block;
  outline: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.picker-button-component {
  margin-right: 10px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid lightgray;
  }
  &.selected {
    background: #fff;
    border: 1px solid gray;
    button {
      font-weight: 600;
      border: 1px solid gray;
    }
  }
}
</style>
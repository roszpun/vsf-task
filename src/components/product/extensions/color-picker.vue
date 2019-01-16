<script>
import colorPickerButton from "./color-picker-button";
import picker from "./../picker";
export default {
  name: "ColorPicker",
  extends: picker,
  components: {
    "picker-button": colorPickerButton
  }
};
</script>
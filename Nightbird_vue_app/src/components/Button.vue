<!-- HTML code -->
<template>
  <button class="border-2 border-black p-2 hover:bg-black hover:text-white">
    {{ btnText }}
  </button>
</template>

<!-- JavaScript code -->
<script>
import { RouterLink } from "vue-router";

export default {
  name: "Button",
  props: {
    btnText: String,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>

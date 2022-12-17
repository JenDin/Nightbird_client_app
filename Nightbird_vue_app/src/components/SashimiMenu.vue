<!-- HTML code -->
<template>
  <div
    class="container max-w-md text-center"
    v-if="dish.category === 'Sashimi/Nigiri'"
  >
    <h3>
      <span class="font-semibold">{{ dish.title }}</span> |
      <span class="text-right">¥{{ dish.price }}</span>
    </h3>
    <p class="text-sm">{{ dish.description }}</p>
  </div>
</template>

<!-- JavaScript code -->
<script>
export default {
  props: {
    dish: Object,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>

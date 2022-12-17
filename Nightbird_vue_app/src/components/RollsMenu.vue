<!-- HTML code -->
<template>
  <div
    class="container max-w-md text-center mb-2"
    v-if="dish.category === 'Sashimi/Nigiri'"
  >
    <div class="flex flex-wrap justify-between">
      <p class="font-semibold">{{ dish.title }}</p>

      <p>¥{{ dish.price }}</p>
    </div>
    <!-- <h3>
		<span class="font-semibold">{{ dish.title }}</span> |
		<span class="text-right">¥{{ dish.price }}</span>
	  </h3> -->
    <div class="flex justify-start">
      <p class="text-sm">{{ dish.description }}</p>
    </div>
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

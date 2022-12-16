<!-- HTML code -->
<template>
  <Header darkBorder="black" />
  <h1 class="text-3xl text-center uppercase font-bold mt-5">Menu</h1>
  <div class="bg-[#81a58e] p-4 mt-10">
    <article class="flex justify-center items-center max-w-xl m-auto flex-wrap">
      <h2 class="text-xl text-center uppercase font-bold">Ikumi's Sushi</h2>
      <FoodMenu v-for="dish in dishes" :dish="dish" :key="dish.id" />
    </article>
  </div>
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
import FoodMenu from "../components/FoodMenu.vue";
export default {
  components: {
    Header,
    FoodMenu,
  },
  data() {
    return {
      dishes: [],
    };
  },
  methods: {
    async getDishes() {
      try {
        const resp = await fetch("http://localhost:3000/api/dishes");

        const data = await resp.json();

        this.dishes = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDishes();
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>

<!-- HTML code -->
<template>
  <Header />
  <h1 class="text-4xl text-center uppercase font-bold mt-8">Menu</h1>
  <!-- <div class="flex justify-center items-center"> -->
  <div class="p-4 mt-10">
    <article class="flex justify-center items-center max-w-xl m-auto flex-wrap">
      <h2 class="text-2xl text-center uppercase font-bold">Sashimi/Nigiri</h2>
      <SashimiMenu v-for="dish in dishes" :dish="dish" :key="dish.id" />
    </article>
    <article class="flex justify-center items-center max-w-xl m-auto flex-wrap">
      <h2 class="text-2xl text-center uppercase font-bold">Sushi rolls</h2>
      <RollsMenu v-for="dish in dishes" :dish="dish" :key="dish.id" />
    </article>
  </div>

  <!-- <hr class="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 max-w-sm m-auto" /> -->
  <div class="p-4 mb-24">
    <article class="flex justify-center items-center max-w-xl m-auto flex-wrap">
      <h2 class="text-2xl text-center uppercase font-bold">Our drinks</h2>
      <DrinkMenu v-for="drink in drinks" :drink="drink" :key="drink.id" />
    </article>
  </div>

  <Footer />
  <!-- </div> -->
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
import SashimiMenu from "../components/SashimiMenu.vue";
import RollsMenu from "../components/RollsMenu.vue";
import DrinkMenu from "../components/DrinkMenu.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    SashimiMenu,
    RollsMenu,
    DrinkMenu,
    Footer,
  },
  data() {
    return {
      dishes: [],
      drinks: [],
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
    async getDrinks() {
      try {
        const resp = await fetch("http://localhost:3000/api/drinks");

        const data = await resp.json();

        this.drinks = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getDishes();
    this.getDrinks();
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>

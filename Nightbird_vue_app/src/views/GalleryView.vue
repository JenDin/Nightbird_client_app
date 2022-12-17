<!-- HTML code -->
<template>
  <Header />
  <div class="container mx-auto px-4">
    <!-- <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-6">
        <div class="mb-8 md:mb-0 md:block md:w-1/2 px-4">
          <div class="h-full w-full bg-cover">
            <img
              class="h-full w-full"
              src="https://source.unsplash.com/random/1280x720"
              alt=""
            />
          </div>
        </div>
        <div class="md:w-1/2 h-auto px-4">
          <div class="mb-8">
            <img src="https://source.unsplash.com/random/1280x720" alt="" />
          </div>
          <div>
            <img src="https://source.unsplash.com/random/1280x720" alt="" />
          </div>
        </div>
      </div>
    </section> -->

    <section class="py-8 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="hidden md:block md:w-1/2 px-4">
          <div
            class="h-full w-full bg-cover"
            style="background-image: url('src/assets/single_sushi.jpg')"
          ></div>
        </div>
        <div class="md:w-1/2 h-auto px-4">
          <div class="mb-8">
            <img src="src/assets/sushi_chef.jpg" alt="" />
          </div>
          <div>
            <img src="src/assets/sushi_shrimp.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="pb-36 px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="md:w-1/2 px-4 mb-8 md:mb-0">
          <img class="shadow-md" src="src/assets/sashimi_plate2.png" alt="" />
        </div>
        <div class="md:w-1/2 px-4 mb-8 md:mb-0">
          <img class="shadow-md" src="src/assets/sashimi_plate.png" alt="" />
        </div>
      </div>
    </section>
  </div>

  <Footer />
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>

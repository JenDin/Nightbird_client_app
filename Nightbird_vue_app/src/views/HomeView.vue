<!-- HTML code -->
<template>
  <div class="hero-image" :style="{ backgroundImage }">
    <Header />
  </div>
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      backgroundImage: "url('src/assets/background.jpg')",
    };
  },
};
</script>

<!-- CSS styles -->
<style scoped>
.hero-image {
  width: 100%;
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 0;
}

@media screen and (min-width: 300px) and (max-width: 768px) {
  .hero-image {
    width: 100%;
    height: 50vh;
    background-position: left;
    background-size: cover;
  }
}
</style>

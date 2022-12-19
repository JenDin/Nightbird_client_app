<!-- HTML code -->
<template>
  <Header />
  <h1 class="text-4xl text-center uppercase font-bold mt-8 mb-10">
    Reservations
  </h1>

  <div class="w-[90%] container m-auto max-w-2xl mb-4">
    <p>
      Here at Ikumi we offer Edomae sushi like you have never experienced
      before. From high quality ingredients to the technique used by our chefs
      who have mastered the art of sushi. We always highlight ingredients of the
      season and you can watch our chefs create edible art in an intimate
      setting. This is where traditional methods meet innovation.
    </p>
  </div>

  <section class="container m-auto md:flex max-w-[1100px] mb-36">
    <div class="md:w-1/2 p-8">
      <div class="">
        <img src="src/assets/sushi_piece.jpg" alt="" />
      </div>
    </div>

    <div
      class="max-w-[90%] m-auto md:m-0 lg:max-w-full border-2 h-auto relative top-0 border-black"
    ></div>

    <div class="md:w-1/2 flex items-center justify-center p-12">
      <!-- Booking form -->

      <div class="mx-auto w-full lg:max-w-[500px]">
        <h2 class="text-4xl font-bold text-center -mt-4 mb-6">Book here</h2>
        <form class="border-2 border-black p-6">
          <!-- First name/Last name container -->
          <div class="lg:flex flex-wrap justify-between">
            <div class="pr-2 mb-5 lg:w-1/2">
              <label for="name" class="mb-1 block text-base font-medium">
                First name
              </label>
              <input
                type="text"
                name="name"
                class="w-full border border-black bg-white py-1 px-2 text-base"
              />
            </div>
            <div class="mb-5 lg:w-1/2">
              <label for="name" class="mb-1 block text-base font-medium">
                Last name
              </label>
              <input
                type="text"
                name="name"
                class="w-full border border-black bg-white py-1 px-2 text-base"
              />
            </div>
          </div>

          <!-- Email -->
          <div class="mb-5">
            <label for="email" class="mb-1 block text-base font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              class="w-full border border-black bg-white py-1 px-2 text-base"
            />
          </div>

          <!-- Guest amount -->
          <div class="mb-5">
            <label for="subject" class="mb-1 block text-base font-medium">
              Guest amount
            </label>
            <select
              type="text"
              name="subject"
              class="w-full border border-black bg-white py-1 px-2 text-base"
            >
              <option value="">1 guest</option>
              <option value="">2 guests</option>
              <option value="">3 guests</option>
              <option value="">4 guests</option>
              <option value="">5 guests</option>
              <option value="">6 guests</option>
              <option value="">7 guests</option>
              <option value="">8 guests</option>
              <option value="">9 guests</option>
              <option value="">10 guests</option>
            </select>
          </div>

          <!-- Date -->
          <div class="mb-5">
            <label for="email" class="mb-1 block text-base font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              class="w-full border border-black bg-white py-1 px-2 text-base"
            />
          </div>

          <!-- Time -->
          <div class="mb-5">
            <label for="subject" class="mb-1 block text-base font-medium">
              Time
            </label>
            <select
              type="text"
              name="subject"
              class="w-full border border-black bg-white py-1 px-2 text-base"
            >
              <option value="">17:00</option>
              <option value="">17:30</option>
              <option value="">18:00</option>
              <option value="">18:30</option>
              <option value="">19:00</option>
              <option value="">19:30</option>
              <option value="">20:00</option>
              <option value="">20:30</option>
              <option value="">21:00</option>
            </select>
          </div>

          <Button btnText="Book" />
        </form>
      </div>
    </div>
  </section>
  <Footer />
</template>

<!-- JavaScript code -->
<script>
import Header from "../components/Header.vue";
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Button,
    Footer,
  },
};
</script>

<!-- CSS styles -->
<style scoped></style>

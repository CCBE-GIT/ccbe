<template>
  <v-container class="awards-section my-10">
    <h1 class="title text-center mb-6">
      <span class="highlight">Awards & Recognitions</span>
    </h1>

<swiper
  :modules="[Autoplay]"
  :slides-per-view="1"
  :space-between="20"
  :loop="true"
  :autoplay="{ delay: 2500, disableOnInteraction: false }"
  :breakpoints="{
    640: { slidesPerView: 1 },
    960: { slidesPerView: 2 },
    1280: { slidesPerView: 3 }
  }"
>
      <swiper-slide v-for="(award, index) in awards" :key="index">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto award-card" max-width="350" v-bind="props">
            <v-img :src="award.src" height="300px" cover>
              <!-- Hover overlay -->
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex flex-column justify-center align-center bg-orange-darken-2 v-card--reveal text-white text-center"
                  style="height: 100%;"
                >
                  <h3 class="text-h6 font-weight-bold">{{ award.title }}</h3>
                  <p class="text-body-2">{{ award.subtitle }}</p>
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="text-center">
              <h3 class="text-h6 font-weight-bold text-orange mb-1">{{ award.title }}</h3>
              <p class="text-body-2 text-grey-darken-1">{{ award.description }}</p>
            </v-card-text>
          </v-card>
        </v-hover>
      </swiper-slide>
    </swiper>
  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default {
  name: "AwardsSection",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      awards: [
        { src: "https://ik.imagekit.io/u3wbiya66/Awards/Southern.jpg?updatedAt=1757647127985", title: "Highest Regional Contribution", subtitle: "Southern Province Recognition by the British Council for Cambridge English Registration Centres – Cambridge College of British English (2025)", description: "Recognized by the British Council for the highest regional contribution in Cambridge English registrations." },
        { src: "https://ik.imagekit.io/u3wbiya66/Awards/Gold.jpg?updatedAt=1757647128110", title: "Excellence in Performance", subtitle: "Gold Category Recognition by the British Council for Outstanding Registration Centre Achievements – Cambridge College of British English (2024)", description: "Honoured by the British Council for exceptional achievements as a Cambridge English registration centre." },
       
       
      ],
    };
  },
  setup() {
    return { Autoplay };
  },
};
</script>

<style scoped>
.award-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.award-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.v-card--reveal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.95;
}
</style>

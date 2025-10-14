<template>
  <v-container class="awards-section my-10">
    <h1 class="title mt-2" data-aos="fade-up" data-aos-duration="2000">
      <span class="highlight">Highlights</span>
    </h1>

    <div class="swiper-container-wrapper">
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
    </div>
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
        { src: "https://ik.imagekit.io/u3wbiya66/Highlights/1.jpg?updatedAt=1760438874157", title: "Children’s Day Awareness with Sri Lanka Police", subtitle: "Empowering our kids through an insightful “Good Touch and Bad Touch” session to learn, understand, and stay confident in their safety." },
        { src: "https://ik.imagekit.io/u3wbiya66/Highlights/4.jpg?updatedAt=1760438873819", title: "Happy Children’s Day!", subtitle: "To our bright, kind, and curious little stars — keep dreaming big and believing in yourself every step of the way." },
        { src: "https://ik.imagekit.io/u3wbiya66/Highlights/3.jpg?updatedAt=1760438873618", title: "Honoring Our Everyday Heroes", subtitle: "They don’t wear capes, but they build heroes. To all our teachers who inspire, guide, and ignite dreams — we thank you today and always." },
        { src: "https://ik.imagekit.io/u3wbiya66/Highlights/2.jpg?updatedAt=1760438875073", title: "A Decade of Dedication and Blessings", subtitle: "Marking ten years of redefining English education, our institute held a Pirith Chanting and Almsgiving ceremony with the blessings of the Maha Sangha. Heartfelt thanks to all who joined us on this meaningful day."},
        { src: "https://ik.imagekit.io/u3wbiya66/Highlights/5.jpg?updatedAt=1760438875365", title: "Cambridge English Awards 2025", subtitle: "Honoring our Pro School Achievers, High Achievers, and Top Achievers — a night of pride, passion, and excellence that truly lit up the stage."},
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

/* Custom scrollbar styling for the swiper container - LEFT SIDE */
.swiper-container-wrapper {
  position: relative;
  overflow-x: auto;
  padding-top: 10px; /* Space for scrollbar on top */
  direction: rtl; /* This moves scrollbar to left */
}

/* Reverse direction for content to display correctly */
.swiper-container-wrapper .swiper {
  direction: ltr;
}

.swiper-container-wrapper::-webkit-scrollbar {
  height: 8px;
}

.swiper-container-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
  margin: 0 10px;
}

.swiper-container-wrapper::-webkit-scrollbar-thumb {
  background: #ff9800; /* Orange color to match your theme */
  border-radius: 10px;
}

.swiper-container-wrapper::-webkit-scrollbar-thumb:hover {
  background: #f57c00; /* Darker orange on hover */
}

/* For Firefox */
.swiper-container-wrapper {
  scrollbar-width: thin;
  scrollbar-color: #ff9800 #f1f1f1;
}

/* Ensure swiper takes full width */
.swiper-container-wrapper .swiper {
  width: 100%;
}
</style>
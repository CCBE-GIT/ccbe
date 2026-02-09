<template>
  <v-container class="awards-section my-16">
    <!-- Section Header -->
    <div class="section-header text-center mb-12">
      <div class="header-decoration">
        <div class="decoration-line left"></div>
        <div class="decoration-icon">
          <v-icon size="32" color="#ff6b35">mdi-trophy-outline</v-icon>
        </div>
        <div class="decoration-line right"></div>
      </div>
      <h2 class="title mb-4" data-aos="fade-up">
        <span class="highlight">Awards & Recognitions</span>
      </h2>
      <p class="section-subtitle text-grey-darken-1">
        Celebrating excellence and achievements in English education
      </p>
    </div>

    <!-- Carousel Container -->
    <div class="carousel-container">
      <swiper
        :modules="[Autoplay, Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }"
        :pagination="{
          clickable: true,
          el: '.custom-pagination',
          renderBullet: renderCustomBullet
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }"
        :breakpoints="{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }"
        class="awards-carousel"
      >
        <swiper-slide v-for="(award, index) in awards" :key="index">
          <v-hover v-slot="{ isHovering, props }">
            <v-card 
              class="award-card mx-auto" 
              :class="{ 'award-card--hover': isHovering }"
              v-bind="props"
              :elevation="isHovering ? 12 : 4"
            >
              <!-- Award Image with Hover Overlay -->
              <div class="card-image-container">
                <v-img
                  :src="award.src"
                  :alt="`${award.title} award certificate or trophy`"
                  height="280"
                  cover
                  class="card-image"
                  :class="{ 'card-image--zoomed': isHovering }"
                >
                  <!-- Gradient Overlay -->
                  <div class="image-gradient"></div>
                  
                  <!-- Award Badge -->
                  <div class="award-badge">
                    <div class="badge-icon">
                      <v-icon size="20" color="white">mdi-trophy</v-icon>
                    </div>
                    <div class="badge-glow"></div>
                  </div>
                  
                  <!-- Year Tag -->
                  <div class="year-tag">
                    {{ award.year }}
                  </div>
                  
                  <!-- Hover Overlay Content -->
                  <v-expand-transition>
                    <div
                      v-if="isHovering"
                      class="hover-overlay d-flex flex-column justify-center align-center text-white text-center pa-4"
                    >
                      <div class="overlay-icon mb-3">
                        <v-icon size="48" color="white">mdi-medal</v-icon>
                      </div>
                      <h3 class="text-h6 font-weight-bold mb-2">{{ award.title }}</h3>
                      <p class="text-body-2 opacity-90">{{ award.subtitle }}</p>
                      <!-- <v-btn 
                        variant="outlined" 
                        color="white" 
                        size="small"
                        class="mt-4 view-details-btn"
                        rounded
                         :aria-label="`View details about ${award.title}`"
                      >
                        View Details
                        <v-icon right size="16">mdi-arrow-right</v-icon>
                      </v-btn> -->
                    </div>
                  </v-expand-transition>
                </v-img>
              </div>

              <!-- Card Content -->
              <v-card-text class="card-content text-center pa-6">
                <div class="award-category mb-2">
                  <v-chip size="x-small" color="orange" variant="flat" class="text-white">
                    {{ award.category }}
                  </v-chip>
                </div>
                <h3 class="text-h6 font-weight-bold text-grey-darken-4 mb-3">{{ award.title }}</h3>
                <p class="text-body-2 text-grey-darken-2 card-description">{{ award.description }}</p>
                
                <!-- Award Footer -->
                <div class="card-footer mt-4 pt-3">
                  <v-divider class="mb-3"></v-divider>
                  <div class="d-flex justify-space-between align-center">
                    <div class="d-flex align-center">
                      <!-- <v-avatar size="24" class="mr-2">
                        <v-img :src="award.organizationLogo"  :alt="`${award.organization} Organization Logo`"></v-img>
                      </v-avatar> -->
                      <span class="text-caption text-grey-darken-1">{{ award.organization }}</span>
                    </div>
                    <div class="d-flex align-center">
                      <v-icon size="16" color="orange" class="mr-1">mdi-calendar</v-icon>
                      <span class="text-caption text-grey-darken-1">{{ award.year }}</span>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </swiper-slide>
      </swiper>

      <!-- Custom Navigation -->
      <div class="carousel-navigation mt-8">
        <!-- Previous Button -->
        <button class="swiper-button swiper-button-prev" aria-label="Previous award slide">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png" 
            alt="Previous slide" 
            class="nav-image"
          />
        </button>
        
        <!-- Custom Pagination -->
        <div class="custom-pagination-wrapper">
          <div class="custom-pagination"></div>
        </div>
        
        <!-- Next Button -->
        <button class="swiper-button swiper-button-next" aria-label="Next award slide">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/271/271228.png" 
            alt="Next slide" 
            class="nav-image"
          />
        </button>
      </div>
    </div>


  </v-container>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default {
  name: "AwardsSection",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      awards: [
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Awards/AW1.jpeg", 
          title: "CIPM HR Awards 2025", 
          subtitle: "Certificate of Commendation at the CIPM HR Awards 2025 – Cambridge College of British English", 
          description: "Recognized by CIPM Sri Lanka, in collaboration with Mercer, for valuable contributions to human resource management at The Great HR Awards 2025.",
          year: "2025",
          category: "THE GREAT HR AWARDS",
          organization: "CIPM Sri Lanka",
          //organizationLogo: "https://ik.imagekit.io/u3wbiya66/Logos/cipm-logo.png?updatedAt=1757647128110"
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Awards/Platinum.jpg?updatedAt=1757935994777", 
          title: "Excellence Beyond Gold", 
          subtitle: "British Council Platinum Category Recognition for Outstanding Performance – Cambridge College of British English (2025)", 
          description: "Awarded by the British Council for outstanding performance and exclusivity as a Cambridge English registration centre.",
          year: "2025",
          category: "Platinum",
          organization: "British Council",
          //organizationLogo: "https://ik.imagekit.io/u3wbiya66/Logos/bc-logo.png?updatedAt=1757647128110"
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Awards/Gold.jpg?updatedAt=1757647128110", 
          title: "Excellence in Performance", 
          subtitle: "Gold Category Recognition by the British Council for Outstanding Registration Centre Achievements – Cambridge College of British English (2024)", 
          description: "Honoured by the British Council for exceptional achievements as a Cambridge English registration centre.",
          year: "2024",
          category: "Gold",
          organization: "British Council",
          //organizationLogo: "https://ik.imagekit.io/u3wbiya66/Logos/bc-logo.png?updatedAt=1757647128110"
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Awards/Southern.jpg?updatedAt=1757647127985", 
          title: "Highest Regional Contribution", 
          subtitle: "Southern Province Recognition by the British Council for Cambridge English Registration Centres – Cambridge College of British English (2025)", 
          description: "Recognized by the British Council for the highest regional contribution in Cambridge English registrations.",
          year: "2025",
          category: "Regional",
          organization: "British Council",
          //organizationLogo: "https://ik.imagekit.io/u3wbiya66/Logos/bc-logo.png?updatedAt=1757647128110"
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Awards/Star.jpg?updatedAt=1757937143732", 
          title: "Emerging Star of the Year Award", 
          subtitle: "Cambridge University Press & Assessment Recognition – Cambridge College of British English, Ambalangoda (2023)", 
          description: "Recognized as an Emerging Star at the 2023 Annual Coordinators' Conference for outstanding growth in Cambridge English.",
          year: "2023",
          category: "Emerging",
          organization: "British Council",
          //organizationLogo: "https://ik.imagekit.io/u3wbiya66/Logos/cambridge-logo.png?updatedAt=1757647128110"
        },
      ],
    };
  },
  setup() {
    const renderCustomBullet = (index, className) => {
      return `<span class="${className} custom-bullet">
                <span class="bullet-inner"></span>
              </span>`;
    };
    
    return {
      Autoplay,
      Navigation, 
      Pagination,
      renderCustomBullet
    };
  }
}
</script>

<style scoped>
.awards-section {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  position: relative;
  padding: 80px 0;
  overflow: hidden;
}

.awards-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.section-header {
  position: relative;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.decoration-line {
  height: 2px;
  width: 60px;
  background: linear-gradient(90deg, transparent, #ff6b35, transparent);
}

.decoration-icon {
  margin: 0 16px;
  background: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.2);
  border: 1px solid rgba(255, 107, 53, 0.1);
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
}

.highlight {
  color: #ff6b35;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #ff8c00);
  border-radius: 2px;
  transform: scaleX(0.8);
  transform-origin: center;
}

.section-subtitle {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  position: relative;
}

/* Carousel Styles */
.carousel-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.awards-carousel {
  padding: 20px 10px 80px;
  width: 100%;
}

.awards-carousel .swiper-slide {
  height: auto;
  display: flex;
}

.award-card {
  border-radius: 20px;
  background: white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
}

.award-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #ff6b35, #ff8c00);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: 2;
}

.award-card--hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
}

.award-card--hover::before {
  transform: scaleX(1);
}

/* Image Container */
.card-image-container {
  position: relative;
  overflow: hidden;
}

.card-image {
  transition: transform 0.6s ease;
  position: relative;
  width: 100%;
}

.card-image--zoomed {
  transform: scale(1.08);
}

.image-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  z-index: 1;
}

.award-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
}

.badge-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff8c00);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
  position: relative;
  z-index: 2;
}

.badge-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff8c00);
  opacity: 0.6;
  z-index: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
}

.year-tag {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ff6b35;
  z-index: 2;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Hover Overlay */
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.95), rgba(255, 140, 0, 0.9));
  z-index: 3;
  backdrop-filter: blur(2px);
}

.overlay-icon {
  transform: translateY(-10px);
  opacity: 0;
  animation: fadeInUp 0.5s forwards 0.2s;
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.view-details-btn {
  border: 2px solid white;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  transform: translateY(10px);
  opacity: 0;
  animation: fadeInUp 0.5s forwards 0.4s;
}

.view-details-btn:hover {
  background: white !important;
  color: #ff6b35 !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

/* Card Content */
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px !important;
}

.award-category {
  display: flex;
  justify-content: center;
}

.card-description {
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  margin-top: auto;
}

.card-footer .v-divider {
  border-color: rgba(0, 0, 0, 0.1);
}

/* Carousel Navigation */
.carousel-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
}

.swiper-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  padding: 0;
}

.swiper-button:hover {
  background: #ff6b35;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.3);
}

/* Navigation Images */
.nav-image {
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.swiper-button:hover .nav-image {
  filter: brightness(0) invert(1);
  transform: scale(1.1);
}

.swiper-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.swiper-button:disabled:hover {
  background: white;
  transform: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.swiper-button:disabled:hover .nav-image {
  filter: none;
  transform: none;
}

.swiper-button:focus-visible {
  outline: 2px solid #ff6b35;
  outline-offset: 4px;
}

/* Pagination */
.custom-pagination-wrapper {
  position: absolute;
  bottom: -60px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

:deep(.custom-pagination) {
  display: flex;
  justify-content: center;
  gap: 8px;
  position: relative;
  z-index: 5;
}

:deep(.custom-bullet) {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

:deep(.bullet-inner) {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e0e0e0;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active .bullet-inner) {
  width: 12px;
  height: 12px;
  background: #ff6b35;
  box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.3);
}

/* CTA Section */
.cta-section {
  position: relative;
}

.view-all-btn {
  background: linear-gradient(135deg, #ff6b35, #ff8c00);
  color: white;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 16px 32px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
}

/* Responsive Design */
@media (max-width: 960px) {
  .title {
    font-size: 2.25rem;
  }
  
  .section-subtitle {
    font-size: 1.05rem;
  }
  
  .awards-carousel {
    padding: 20px 10px 70px;
  }
  
  .header-decoration {
    margin-bottom: 20px;
  }
  
  .decoration-line {
    width: 40px;
  }
  
  .decoration-icon {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 600px) {
  .awards-section {
    padding: 60px 0;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    padding: 0 16px;
  }
  
  .carousel-container {
    padding: 0 16px;
  }
  
  .carousel-navigation {
    gap: 35px;
  }
  
  .swiper-button {
    width: 48px;
    height: 48px;
    
  }
  
  .nav-image {
    width: 20px;
    height: 20px;
  }
  
  .custom-pagination-wrapper {
    bottom: -50px;
  }
  
  .view-all-btn {
    padding: 14px 28px;
    font-size: 0.85rem;
  }
  
  .header-decoration {
    margin-bottom: 16px;
  }
  
  .decoration-line {
    width: 30px;
  }
  
  .decoration-icon {
    width: 44px;
    height: 44px;
    margin: 0 12px;
  }
  
  .decoration-icon .v-icon {
    font-size: 24px;
  }
}
</style>
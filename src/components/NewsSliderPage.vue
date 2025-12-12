<template>
  <section class="awards-section" aria-labelledby="highlights-heading">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h1 class="section-title">
          Our <span class="highlight">Highlights</span>
        </h1>
        <p class="section-subtitle">Celebrating our achievements and memorable moments</p>
      </div>

      <div class="swiper-container">
        <swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
          :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          class="highlights-swiper"
          aria-label="Highlights and achievements carousel"
        >
          <swiper-slide v-for="(award, index) in awards" :key="index">
            <div class="award-card">
              <div class="card-image">
                <img :src="award.src" :alt="award.title" />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <h3>{{ award.title }}</h3>
                    <p>{{ award.subtitle }}</p>
                    <button class="view-details-btn">View Details</button>
                  </div>
                </div>
              </div>
              <div class="card-content">
                <h3 class="card-title">{{ award.title }}</h3>
                <p class="card-description">{{ award.description }}</p>
                <div class="card-footer">
                  <span class="date-badge">2025</span>
                  <div class="social-icons" aria-label="Social media sharing options">
                    <button class="icon-btn" aria-label="Share on Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </button>
                    <button class="icon-btn"  aria-label="Share on Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Custom Navigation -->
        <div class="swiper-navigation">
          <button class="swiper-button swiper-button-prev" aria-label="Previous highlight">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/271/271220.png" 
              alt="Previous slide" 
              class="nav-image"
            />
          </button>
          <button class="swiper-button swiper-button-next" aria-label="Next highlight">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png" 
              alt="Next slide" 
              class="nav-image"
            />
          </button>
        </div>
      </div>

      <div class="view-all-container">
        <button class="view-all-btn" aria-label="View all highlights">View All Highlights</button>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'AwardsSection',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      awards: [
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Highlights/1.jpg?updatedAt=1760438874157", 
          title: "Children's Day Awareness", 
          subtitle: "Empowering our kids through an insightful session", 
          description: "Collaboration with Sri Lanka Police for a 'Good Touch and Bad Touch' session to help children learn, understand, and stay confident in their safety."
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Highlights/4.jpg?updatedAt=1760438873819", 
          title: "Happy Children's Day!", 
          subtitle: "Celebrating our bright, kind, and curious stars", 
          description: "To our bright, kind, and curious little stars — keep dreaming big and believing in yourself every step of the way."
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Highlights/3.jpg?updatedAt=1760438873618", 
          title: "Honoring Our Everyday Heroes", 
          subtitle: "They don't wear capes, but they build heroes", 
          description: "To all our teachers who inspire, guide, and ignite dreams — we thank you today and always for your dedication and passion."
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Highlights/2.jpg?updatedAt=1760438875073", 
          title: "A Decade of Dedication", 
          subtitle: "Ten years of redefining English education", 
          description: "Marking ten years of excellence, our institute held a Pirith Chanting and Almsgiving ceremony with the blessings of the Maha Sangha."
        },
        { 
          src: "https://ik.imagekit.io/u3wbiya66/Highlights/5.jpg?updatedAt=1760438875365", 
          title: "Cambridge English Awards 2025", 
          subtitle: "Honoring our Pro School Achievers", 
          description: "Celebrating our High Achievers and Top Achievers — a night of pride, passion, and excellence that truly lit up the stage."
        },
      ]
    }
  },
  setup() {
    return {
      Autoplay,
      Navigation,
      Pagination
    }
  },
  mounted() {
    // Ensure equal heights after component is mounted
    this.$nextTick(() => {
      this.equalizeCardHeights();
    });
  },
  methods: {
    equalizeCardHeights() {
      // Set equal height for all cards
      const cards = document.querySelectorAll('.award-card');
      if (cards.length === 0) return;
      
      let maxHeight = 0;
      
      // Reset heights to auto to get actual heights
      cards.forEach(card => {
        card.style.height = 'auto';
      });
      
      // Find the maximum height
      cards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
          maxHeight = cardHeight;
        }
      });
      
      // Set all cards to the maximum height
      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    }
  }
}
</script>

<style scoped>
.awards-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.highlight {
  color: #ff6b35;
  position: relative;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  border-radius: 3px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

.swiper-container {
  position: relative;
  margin-bottom: 40px;
}

.highlights-swiper {
  padding: 20px 10px 50px;
}

/* Ensure all swiper slides have the same height */
:deep(.swiper-slide) {
  height: auto;
  display: flex;
}

.award-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.award-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  flex-shrink: 0; /* Prevent image from shrinking */
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.award-card:hover .card-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 107, 53, 0.85), rgba(247, 147, 30, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  padding: 20px;
}

.award-card:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-content h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.overlay-content p {
  font-size: 0.9rem;
  margin-bottom: 20px;
  line-height: 1.5;
}

.view-details-btn {
  background: white;
  color: #ff6b35;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-details-btn:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
  line-height: 1.3;
}

.card-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
  /* Limit text to 3 lines with ellipsis if needed */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto; /* Push footer to bottom */
  flex-shrink: 0; /* Prevent footer from shrinking */
}

.date-badge {
  background: #ff6b35;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.icon-btn {
  background: #f8f9fa;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6c757d;
}

.icon-btn:hover {
  background: #ff6b35;
  color: white;
  transform: translateY(-2px);
}

.swiper-navigation {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.swiper-button {
  background: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  padding: 0;
}

.swiper-button:hover {
  background: #ff6b35;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.swiper-button:active {
  transform: translateY(-1px);
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

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: #dee2e6;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ff6b35;
}

.view-all-container {
  text-align: center;
  margin-top: 30px;
}

.view-all-btn {
  background: linear-gradient(90deg, #ff6b35, #f7931e);
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
}

.view-all-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
}

.view-all-btn:active {
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .awards-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .card-image {
    height: 200px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .swiper-navigation {
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .card-image {
    height: 180px;
  }
  
  .swiper-button {
    width: 45px;
    height: 45px;
  }
  
  .nav-image {
    width: 20px;
    height: 20px;
  }
}
</style>
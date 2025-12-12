<template>
  <section class="awards-section" aria-labelledby="highlights-heading">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h1 class="section-title">
          Our <span class="highlight">Highlights</span>
        </h1>
        <p class="section-subtitle">Celebrating our achievements and memorable moments</p>
      </div>

      <div class="custom-slider-container">
        <div class="slider-wrapper">
          <div 
            class="slider-track" 
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div 
              v-for="(award, index) in awards" 
              :key="index" 
              class="slide"
              :class="{ 'active': currentSlide === index }"
              :aria-hidden="currentSlide !== index"
            >
              <div class="award-card">
                <div class="card-image">
                  <img :src="award.src" :alt="award.title" loading="lazy" />
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
                      <button class="icon-btn" aria-label="Share on Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Navigation -->
        <div class="slider-navigation">
          <button 
            class="slider-button prev-button" 
            @click="prevSlide"
            :disabled="currentSlide === 0"
            aria-label="Previous highlight"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/512/271/271220.png" 
              alt="Previous slide" 
              class="nav-image"
            />
          </button>
          
          <!-- Pagination Dots -->
          <div class="pagination-dots">
            <button 
              v-for="(_, index) in awards" 
              :key="index" 
              class="pagination-dot"
              :class="{ active: currentSlide === index }"
              @click="goToSlide(index)"
              :aria-label="`Go to slide ${index + 1}`"
            ></button>
          </div>
          
          <button 
            class="slider-button next-button" 
            @click="nextSlide"
            :disabled="currentSlide === awards.length - slidesPerView"
            aria-label="Next highlight"
          >
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
export default {
  name: 'AwardsSection',
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
      ],
      currentSlide: 0,
      slidesPerView: 1,
      touchStartX: 0,
      touchEndX: 0,
      autoSlideInterval: null
    }
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
    this.startAutoSlide();
    
    // Set equal heights after component is mounted
    this.$nextTick(() => {
      this.equalizeCardHeights();
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSlidesPerView);
    this.stopAutoSlide();
  },
  computed: {
    maxSlideIndex() {
      return Math.max(0, this.awards.length - this.slidesPerView);
    }
  },
  methods: {
    updateSlidesPerView() {
      const width = window.innerWidth;
      if (width >= 1024) {
        this.slidesPerView = 3;
      } else if (width >= 768) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 1;
      }
      
      // Ensure currentSlide doesn't go beyond bounds
      if (this.currentSlide > this.maxSlideIndex) {
        this.currentSlide = this.maxSlideIndex;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.maxSlideIndex) {
        this.currentSlide++;
      } else {
        // Loop back to start
        this.currentSlide = 0;
      }
      this.resetAutoSlide();
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        // Loop to end
        this.currentSlide = this.maxSlideIndex;
      }
      this.resetAutoSlide();
    },
    goToSlide(index) {
      // Ensure the slide index is within bounds for current view
      const maxIndex = Math.min(index, this.maxSlideIndex);
      this.currentSlide = maxIndex;
      this.resetAutoSlide();
    },
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
      this.stopAutoSlide();
    },
    handleTouchMove(e) {
      this.touchEndX = e.touches[0].clientX;
    },
    handleTouchEnd() {
      const swipeThreshold = 50;
      const diff = this.touchStartX - this.touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - go to next
          this.nextSlide();
        } else {
          // Swipe right - go to previous
          this.prevSlide();
        }
      }
      this.startAutoSlide();
    },
    startAutoSlide() {
      this.stopAutoSlide();
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 4000);
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
    resetAutoSlide() {
      this.stopAutoSlide();
      this.startAutoSlide();
    },
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

/* Custom Slider Styles */
.custom-slider-container {
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;
}

.slider-wrapper {
  overflow: hidden;
  margin: 0 -15px;
}

.slider-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.slide {
  flex: 0 0 100%;
  padding: 0 15px;
  box-sizing: border-box;
  transition: opacity 0.3s ease;
}

@media (min-width: 768px) {
  .slide {
    flex: 0 0 50%;
  }
}

@media (min-width: 1024px) {
  .slide {
    flex: 0 0 calc(100% / 3);
  }
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
  height: 100%;
}

.award-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  flex-shrink: 0;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  flex-shrink: 0;
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

/* Slider Navigation */
.slider-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
}

.slider-button {
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
  flex-shrink: 0;
}

.slider-button:hover:not(:disabled) {
  background: #ff6b35;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.slider-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-button:active:not(:disabled) {
  transform: translateY(-1px);
}

/* Navigation Images */
.nav-image {
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.slider-button:hover:not(:disabled) .nav-image {
  filter: brightness(0) invert(1);
  transform: scale(1.1);
}

/* Pagination Dots */
.pagination-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-grow: 1;
}

.pagination-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #dee2e6;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.pagination-dot:hover {
  transform: scale(1.2);
}

.pagination-dot.active {
  background: #ff6b35;
  transform: scale(1.2);
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
  
  .slider-navigation {
    margin-top: 20px;
  }
  
  .slider-button {
    width: 45px;
    height: 45px;
  }
  
  .nav-image {
    width: 20px;
    height: 20px;
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
  
  .slider-navigation {
    gap: 15px;
  }
  
  .slider-button {
    width: 40px;
    height: 40px;
  }
  
  .nav-image {
    width: 18px;
    height: 18px;
  }
  
  .pagination-dot {
    width: 10px;
    height: 10px;
  }
}

/* Accessibility improvements */
.slider-button:focus,
.pagination-dot:focus,
.view-all-btn:focus,
.icon-btn:focus,
.view-details-btn:focus {
  outline: 2px solid #ff6b35;
  outline-offset: 2px;
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .slider-track,
  .award-card,
  .slider-button,
  .icon-btn,
  .view-all-btn,
  .view-details-btn {
    transition: none;
  }
  
  .award-card:hover {
    transform: none;
  }
}
</style>
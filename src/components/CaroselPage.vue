<template>
  <div class="parallax-carousel-container">
    <!-- Top Logo -->
    <a href="https://www.topweb.lk" target="_blank" rel="noopener" class="logo-link">
      <img :src="topWebImage" alt="TopWeb Logo" class="top-left-image" />
    </a>

    <!-- Main Carousel -->
    <div class="festive-carousel" @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
      <!-- Slides Track -->
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(item, i) in items" :key="i">
          <!-- Image Slide - Clean professional layout -->
          <div class="parallax-item" :style="{ backgroundImage: `url(${item.src})` }">
            <!-- Clean gradient overlay -->
            <div class="gradient-overlay"></div>
            
            <!-- Minimal Content Overlay -->
            <div class="content-overlay">
              <div class="content-wrapper">
                <!-- Category Badge -->
                <div class="category-badge">{{ item.category }}</div>
                
                <!-- Main Title -->
                <h2 class="slide-title">{{ item.title }}</h2>
                
                <!-- Subtitle -->
                <p class="slide-subtitle">{{ item.subtitle }}</p>
                
                <!-- Features as subtle text -->
                <div class="features-wrapper" v-if="item.features">
                  <div v-for="(feature, fIndex) in item.features" :key="fIndex" class="feature-pill">
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button class="nav-arrow prev-arrow" @click="prev" aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="nav-arrow next-arrow" @click="next" aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <!-- Clean Dots Navigation -->
      <div class="dots-navigation">
        <button
          v-for="(item, index) in items"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goTo(index)"
          :aria-label="`Go to slide ${index + 1}`"
        >
          <span class="dot-inner"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import topWebImage from '@/assets/TopWeb.jpg';

export default {
  name: 'CarouselPage',
  data() {
    return {
      currentSlide: 0,
      topWebImage,
      isMobile: false,
      videoLoaded: false,
      autoPlayTimer: null,
      INTERVAL: 8000,
      items: [
        {
          src: 'https://ik.imagekit.io/a56urydbh7/PXL_202.jpg?updatedAt=1743228744356',
          title: 'Our Recognition',
          subtitle: 'Celebrating Excellence Through the Years.',
          category: 'AWARDS & HONORS',
          features: ['Multiple British Council Awards', 'Platinum Category Recognition', 'Regional Excellence Awards']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/2.jpg?updatedAt=1737779121377',
          title: 'Student-Centric Environment',
          subtitle: 'Empowering Active Participation and Engagement.',
          category: 'LEARNING ENVIRONMENT',
          features: ['Interactive Learning Spaces', 'Collaborative Activities', 'Modern Classroom Setup']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/3.jpg?updatedAt=1737779167089',
          title: 'Individual Attention',
          subtitle: 'Personalized Support in a Safe Space.',
          category: 'STUDENT SUPPORT',
          features: ['One-on-One Mentoring', 'Safe Learning Environment', 'Personalized Progress Tracking']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/6.jpg?updatedAt=1737779168033',
          title: 'Personalized Support',
          subtitle: 'Empowering Confidence and Leadership.',
          category: 'PERSONAL DEVELOPMENT',
          features: ['Confidence Building Programs', 'Leadership Workshops', 'Personal Growth Plans']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/7.jpg?updatedAt=1737779166430',
          title: 'Innovative Learning',
          subtitle: 'Blending Technology and Teaching for Growth.',
          category: 'INNOVATION & TECHNOLOGY',
          features: ['Digital Learning Platforms', 'Interactive Technology', 'Modern Teaching Methods']
        }
      ]
    };
  },
  methods: {
    goTo(index) {
      this.currentSlide = ((index % this.items.length) + this.items.length) % this.items.length;
      this.restartAutoPlay();
    },
    next() {
      this.goTo(this.currentSlide + 1);
    },
    prev() {
      this.goTo(this.currentSlide - 1);
    },
    startAutoPlay() {
      this.stopAutoPlay();
      this.autoPlayTimer = setInterval(() => this.next(), this.INTERVAL);
    },
    stopAutoPlay() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
      }
    },
    pauseAutoPlay() {
      this.stopAutoPlay();
    },
    restartAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    handleKeydown(e) {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    },
    handleTouchStart(e) {
      this._touchStartX = e.touches[0].clientX;
    },
    handleTouchEnd(e) {
      const diff = this._touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
    }
  },
  mounted() {
    this.checkMobile();
    this.startAutoPlay();
    window.addEventListener('resize', this.checkMobile);
    window.addEventListener('keydown', this.handleKeydown);
    this.$el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    this.$el.addEventListener('touchend', this.handleTouchEnd);
  },
  beforeUnmount() {
    this.stopAutoPlay();
    window.removeEventListener('resize', this.checkMobile);
    window.removeEventListener('keydown', this.handleKeydown);
    this.$el.removeEventListener('touchstart', this.handleTouchStart);
    this.$el.removeEventListener('touchend', this.handleTouchEnd);
  }
};
</script>

<style scoped>
/* ===== RESET / BASE ===== */
.parallax-carousel-container {
  width: 100%;
  position: relative;
  overflow: visible;
  background: #000;
}

/* ===== LOGO ===== */
.logo-link {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 30;
  transition: opacity 0.3s ease;
}
.logo-link:hover {
  opacity: 0.9;
}
.top-left-image {
  width: 85px;
  height: 170px;
  border-radius: 4px;
  object-fit: cover;
  display: block;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

/* ===== CAROUSEL WRAPPER ===== */
.festive-carousel {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: visible;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
}

.carousel-slide {
  min-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
  overflow: visible;
}

/* ===== IMAGE SLIDE ===== */
.parallax-item {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Clean gradient overlay */
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
}

/* ===== CONTENT OVERLAY ===== */
.content-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10%;
}

.content-wrapper {
  max-width: 700px;
  color: white;
  animation: fadeInUp 1s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Category Badge */
.category-badge {
  display: inline-block;
  background: rgba(255, 107, 53, 0.9);
  color: white;
  padding: 4px 12px;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
  border-radius: 2px;
}

/* Title */
.slide-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 15px;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* Subtitle */
.slide-subtitle {
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 25px;
  opacity: 0.9;
  font-weight: 500;
  max-width: 600px;
  color: rgba(255,255,255,0.9);
}

/* Features */
.features-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.feature-pill {
  background: linear-gradient(135deg, #FFD700 0%, #FFD700 10%, #FFD700 100%);
  backdrop-filter: blur(5px);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.7rem;
  border: 1px solid rgba(255,255,255,0.2);
  color: black;
  transition: all 0.3s ease;
  }

.feature-pill:hover {
  background: white;
  border-color: rgba(255,107,53,0.5);
}

/* ===== NAVIGATION ARROWS ===== */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 0;
}

.festive-carousel:hover .nav-arrow {
  opacity: 1;
}

.nav-arrow:hover {
  background: rgba(255,107,53,0.8);
  border-color: rgba(255,107,53,0.8);
  transform: translateY(-50%) scale(1.1);
}

.prev-arrow {
  left: 20px;
}

.next-arrow {
  right: 20px;
}

/* ===== DOTS NAVIGATION ===== */
.dots-navigation {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 40px;
  height: 4px;
  border: none;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.dot.active {
  background: #ff6b35;
  width: 60px;
}

.dot:hover {
  background: rgba(255,255,255,0.5);
}

.dot-inner {
  display: none;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
  .festive-carousel {
    height: 500px;
  }
  
  .slide-title {
    font-size: 2.5rem;
  }
  
  .content-overlay {
    padding: 0 8%;
  }
}

@media (max-width: 768px) {
  .festive-carousel {
    height: 450px;
  }
  
  .content-overlay {
    padding: 0 5%;
    justify-content: center;
    text-align: center;
  }
  
  .content-wrapper {
    max-width: 100%;
  }
  
  .slide-title {
    font-size: 2rem;
  }
  
  .slide-subtitle {
    font-size: 1rem;
  }
  
  .features-wrapper {
    justify-content: center;
  }
  
  .nav-arrow {
    opacity: 0.8;
    width: 40px;
    height: 40px;
  }
  
  .top-left-image {
    width: 60px;
    height: 120px;
  }
  
  .dots-navigation {
    bottom: 20px;
  }
  
  .dot {
    width: 30px;
  }
  
  .dot.active {
    width: 45px;
  }
}

@media (max-width: 480px) {
  .festive-carousel {
    height: 400px;
  }
  
  .slide-title {
    font-size: 1.6rem;
  }
  
  .slide-subtitle {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  
  .category-badge {
    font-size: 0.7rem;
    margin-bottom: 12px;
  }
  
  .feature-pill {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
  
  .top-left-image {
    width: 50px;
    height: 100px;
  }
  
  .dot {
    width: 25px;
    height: 3px;
  }
  
  .dot.active {
    width: 35px;
  }
  
  .nav-arrow {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 360px) {
  .slide-title {
    font-size: 1.4rem;
  }
  
  .feature-pill {
    font-size: 0.7rem;
  }
}

/* Landscape orientation */
@media (max-width: 768px) and (orientation: landscape) {
  .festive-carousel {
    height: 300px;
  }
  
  .slide-title {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }
  
  .slide-subtitle {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
  
  .features-wrapper {
    margin-top: 10px;
  }
}

/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .parallax-item {
    image-rendering: -webkit-optimize-contrast;
  }
}
</style>
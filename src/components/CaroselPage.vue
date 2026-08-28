<template>
  <div class="parallax-carousel-container">
    <!-- Badge + Countdown (grouped) -->
    <div class="badge-countdown-group">
      <!-- Top Logo -->
      <a href="https://ebadge.bestweb.lk/api/v1/clicked/ccbe.lk/TopWeb/2026-March/Qualified" target="_blank" rel="noopener" class="logo-link"> 
        <img src="https://ebadge.bestweb.lk/eBadgeSystem/domainNames/ccbe.lk/TopWeb/2026-March/Qualified/image.png" alt="logo" class="badge-img" />
      </a>
      <a href="#" target="_blank" rel="noopener" class="logo-link"> 
        <img src="https://ik.imagekit.io/kp5tixhur/Awards/BestWeb%20Award1%20removed.png" alt="logo" class="badge-img" />
      </a>
      <!-- <a href="#" target="_blank" rel="noopener" class="logo-link"> 
        <img src="https://ik.imagekit.io/kp5tixhur/Awards/BestWeb%20Award2%20removed.png" alt="logo" class="badge-img" />
      </a> -->

      <!-- Countdown Timer -->
      <!-- <div class="countdown-wrapper">
        <div class="voting-status">
          <span class="pulse-dot"></span>
          VOTING OPEN NOW
        </div>
        <div class="countdown-display">
          <div class="countdown-unit">
            <span class="countdown-value">{{ countdown.days }}</span>
            <span class="countdown-label">DAYS</span>
          </div>
          <span class="countdown-separator">:</span>
          <div class="countdown-unit">
            <span class="countdown-value">{{ countdown.hours }}</span>
            <span class="countdown-label">HRS</span>
          </div>
          <span class="countdown-separator">:</span>
          <div class="countdown-unit">
            <span class="countdown-value">{{ countdown.minutes }}</span>
            <span class="countdown-label">MINS</span>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Falling Snowflakes and Santa Caps - Animation from old version -->
    <div class="snow-container">
      <div v-for="(snow, index) in snowCount" :key="index" class="snowflake" :style="generateKokisflakeStyle()"></div>
      <div v-for="(cap, index) in santaCapCount" :key="'cap-' + index" class="santa-cap" :style="generateCashewStyle()"></div>
      <div v-for="(snow, index) in snowCount" :key="index" class="snowflake" :style="generateFlowerStyle()"></div>
      <div v-for="(snow, index) in snowCount" :key="index" class="snowflake" :style="generateFlowerStyle1()"></div>
    </div>

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
//import topWebImage from '@/assets/TopWeb2026.png';
//import snowflakeImage from '@/assets/festivel/snow.png';
//import santaCapImage from '@/assets/festivel/bells.png';
//import kokisImage from '@/assets/festivel/kokis.png';
//import cashewImage from '@/assets/festivel/cashew.png';
//import flowerImage from '@/assets/festivel/flower1.png';
//import flowerImage1 from '@/assets/festivel/flower2.png';


export default {
  name: 'CarouselPage',
  data() {
    return {
      currentSlide: 0,
      //topWebImage,
      //snowflakeImage,
      //santaCapImage,
      //kokisImage,
      //cashewImage,
      //flowerImage,
      //flowerImage1,
      snowCount: 35,
      santaCapCount: 8,
      isMobile: false,
      videoLoaded: false,
      autoPlayTimer: null,
      INTERVAL: 8000,
      countdown: { days: '00', hours: '00', minutes: '00' },
      countdownTimer: null,
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
      this.snowCount = this.isMobile ? 20 : 35;
      this.santaCapCount = this.isMobile ? 5 : 8;
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
    },
    updateCountdown() {
      const target = new Date('2026-07-01T00:00:00');
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        this.countdown = { days: '00', hours: '00', minutes: '00' };
        clearInterval(this.countdownTimer);
        return;
      }

      const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      this.countdown = {
        days:    String(days).padStart(2, '0'),
        hours:   String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
      };
    },
    generateKokisflakeStyle() {
      const isMobile = this.isMobile;
      
      const size = isMobile ? Math.random() * 25 + 20 : Math.random() * 35 + 25;
      const positionX = Math.random() * 80 + 10;
      const duration = isMobile ? Math.random() * 15 + 10 : Math.random() * 20 + 15;
      const delay = Math.random() * 10;
      const driftAmount = isMobile ? Math.random() * 20 - 10 : Math.random() * 30 - 15;
      const opacity = Math.random() * 0.7 + 0.3;
      const rotation = Math.random() * 360;

      return {
        left: `${positionX}%`,
        top: '-20px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${this.kokisImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--drift-distance': `${driftAmount}px`,
        opacity: `${opacity}`,
        transform: `rotate(${rotation}deg)`
      };
    },
    generateCashewStyle() {
      const isMobile = this.isMobile;
      
      const size = isMobile ? Math.random() * 35 + 30 : Math.random() * 45 + 35;
      const positionX = Math.random() * 80 + 10;
      const duration = isMobile ? Math.random() * 20 + 15 : Math.random() * 25 + 20;
      const delay = Math.random() * 15;
      const driftAmount = isMobile ? Math.random() * 25 - 12.5 : Math.random() * 40 - 20;
      const rotation = Math.random() * 180 - 90;

      return {
        left: `${positionX}%`,
        top: '-30px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${this.cashewImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--drift-distance': `${driftAmount}px`,
        opacity: '1',
        transform: `rotate(${rotation}deg)`
      };
    },
    generateFlowerStyle() {
      const isMobile = this.isMobile;
      
      const size = isMobile ? Math.random() * 25 + 20 : Math.random() * 35 + 25;
      const positionX = Math.random() * 80 + 10;
      const duration = isMobile ? Math.random() * 15 + 10 : Math.random() * 20 + 15;
      const delay = Math.random() * 10;
      const driftAmount = isMobile ? Math.random() * 20 - 10 : Math.random() * 30 - 15;
      const opacity = Math.random() * 0.7 + 0.3;
      const rotation = Math.random() * 360;

      return {
        left: `${positionX}%`,
        top: '-20px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${this.flowerImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--drift-distance': `${driftAmount}px`,
        opacity: `${opacity}`,
        transform: `rotate(${rotation}deg)`
      };
    },
    generateFlowerStyle1() {
      const isMobile = this.isMobile;
      
      const size = isMobile ? Math.random() * 25 + 20 : Math.random() * 35 + 25;
      const positionX = Math.random() * 80 + 10;
      const duration = isMobile ? Math.random() * 15 + 10 : Math.random() * 20 + 15;
      const delay = Math.random() * 10;
      const driftAmount = isMobile ? Math.random() * 20 - 10 : Math.random() * 30 - 15;
      const opacity = Math.random() * 0.7 + 0.3;
      const rotation = Math.random() * 360;

      return {
        left: `${positionX}%`,
        top: '-20px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${this.flowerImage1})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--drift-distance': `${driftAmount}px`,
        opacity: `${opacity}`,
        transform: `rotate(${rotation}deg)`
      };
    },
  },
  mounted() {
    this.checkMobile();
    this.startAutoPlay();
    this.updateCountdown();
    this.countdownTimer = setInterval(this.updateCountdown, 1000);
    window.addEventListener('resize', this.checkMobile);
    window.addEventListener('keydown', this.handleKeydown);
    this.$el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    this.$el.addEventListener('touchend', this.handleTouchEnd);
  },
  beforeUnmount() {
    this.stopAutoPlay();
    clearInterval(this.countdownTimer);
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
  overflow: hidden;
  background: #000;
}

/* ===== BADGE + COUNTDOWN GROUP ===== */
.badge-countdown-group {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 160px;
}

.logo-link {
  display: block;
  transition: opacity 0.3s ease;
  line-height: 0;
}
.logo-link:hover {
  opacity: 0.9;
}
.badge-img {
  width: 150px;
  height: 150px;
  display: block;
}

/* ===== COUNTDOWN TIMER ===== */
.countdown-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.voting-status {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.6rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.pulse-dot {
  width: 7px;
  height: 7px;
  background: #00e676;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.8); }
}

.countdown-display {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 6px 10px;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 32px;
}

.countdown-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #FFD700;
  line-height: 1;
}

.countdown-label {
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.countdown-separator {
  font-size: 1rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 12px;
  line-height: 1;
}

/* ===== SNOW CONTAINER - ANIMATION FROM OLD VERSION ===== */
.snow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  animation-name: snowFall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}

.santa-cap {
  position: absolute;
  animation-name: santaCapFall;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}

@keyframes snowFall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: var(--start-opacity, 0.8);
  }
  30% {
    transform: translateY(150px) translateX(var(--drift-distance)) rotate(180deg);
  }
  60% {
    transform: translateY(300px) translateX(calc(-0.5 * var(--drift-distance))) rotate(360deg);
  }
  90% {
    transform: translateY(450px) translateX(calc(var(--drift-distance) * 0.8)) rotate(540deg);
  }
  100% {
    transform: translateY(600px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
    opacity: 0;
  }
}

@keyframes santaCapFall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: var(--start-opacity, 0.9);
  }
  25% {
    transform: translateY(150px) translateX(calc(var(--drift-distance) * 0.5)) rotate(45deg);
  }
  50% {
    transform: translateY(300px) translateX(calc(-0.3 * var(--drift-distance))) rotate(-30deg);
  }
  75% {
    transform: translateY(450px) translateX(calc(var(--drift-distance) * 0.7)) rotate(60deg);
  }
  100% {
    transform: translateY(600px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
    opacity: 0;
  }
}

/* ===== CAROUSEL WRAPPER ===== */
.festive-carousel {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: visible;
  z-index: 1;
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
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10%;
}

.content-wrapper {
  max-width: 700px;
  color: white;
  animation: fadeInUp 1s ease forwards;
  position: relative;
  z-index: 15;
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
  z-index: 20;
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
  z-index: 20;
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
  
  .snow-container {
    height: 500px;
  }
  
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(500px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
      opacity: 0;
    }
  }
  
  @keyframes santaCapFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(500px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
      opacity: 0;
    }
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
  
  .snow-container {
    height: 450px;
  }
  
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(450px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
      opacity: 0;
    }
  }
  
  @keyframes santaCapFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(450px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
      opacity: 0;
    }
  }
  
  .content-overlay {
    padding: 0 5%;
    justify-content: center;
    text-align: center;
  }
  
  .content-wrapper {
    max-width: 100%;
    /* leave space for the badge+countdown on the right */
    padding-right: 120px;
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
  
  .dots-navigation {
    bottom: 20px;
  }
  
  .dot {
    width: 30px;
  }
  
  .dot.active {
    width: 45px;
  }

  /* Badge + countdown group */
  .badge-countdown-group {
    top: 10px;
    right: 10px;
    max-width: 115px;
    gap: 5px;
  }

  .badge-img {
    width: 110px;
    height: 110px;
  }

  .countdown-value {
    font-size: 0.95rem;
  }

  .countdown-unit {
    min-width: 24px;
  }

  .countdown-display {
    padding: 5px 7px;
    gap: 3px;
  }

  .voting-status {
    font-size: 0.52rem;
    padding: 3px 8px;
  }
}

@media (max-width: 480px) {
  .festive-carousel {
    height: 400px;
  }
  
  .snow-container {
    height: 400px;
  }
  
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(400px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
      opacity: 0;
    }
  }
  
  @keyframes santaCapFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(400px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
      opacity: 0;
    }
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

  /* Badge + countdown group */
  .badge-countdown-group {
    top: 8px;
    right: 8px;
    max-width: 95px;
    gap: 4px;
  }

  .badge-img {
    width: 90px;
    height: 90px;
  }

  .countdown-value {
    font-size: 0.82rem;
  }

  .countdown-unit {
    min-width: 20px;
  }

  .countdown-display {
    padding: 4px 5px;
    gap: 2px;
    border-radius: 6px;
  }

  .countdown-separator {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }

  .voting-status {
    font-size: 0.48rem;
    padding: 3px 6px;
    letter-spacing: 0.3px;
  }

  .pulse-dot {
    width: 5px;
    height: 5px;
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
  
  .snow-container {
    height: 300px;
  }
  
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(300px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
      opacity: 0;
    }
  }
  
  @keyframes santaCapFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
    }
    100% {
      transform: translateY(300px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
      opacity: 0;
    }
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

/* Performance optimizations */
.snow-container {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}

.snowflake, .santa-cap {
  will-change: transform, opacity;
}
</style>
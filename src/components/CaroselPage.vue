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

          <!-- Video Slide -->
          <div v-if="item.type === 'video'" class="video-background-wrapper">
            <div class="video-container">
              <video
                :src="item.src"
                autoplay muted loop playsinline
                class="background-video"
                @loadeddata="onVideoLoad"
              ></video>
              <div class="video-overlay"></div>
            </div>

            <div class="content-overlay">
              <div class="icon-badge independence-badge">
                <span :class="['mdi', item.icon]"></span>
              </div>
              <div class="parallax-overlay">
                <div class="title-container">
                  <div class="category-tag independence-tag">{{ item.category }}</div>
                  <h2 class="carousel-title independence-title">{{ item.title }}</h2>
                  <div class="title-decoration">
                    <div class="decoration-line"></div>
                    <span :class="['mdi', item.decorationIcon, 'decoration-icon', 'independence-icon']"></span>
                    <div class="decoration-line"></div>
                  </div>
                  <p class="carousel-subtitle">{{ item.subtitle }}</p>
                  <div class="features-list" v-if="item.features">
                    <div
                      v-for="(feature, fIndex) in item.features"
                      :key="fIndex"
                      class="feature-item independence-feature"
                    >
                      <i class="mdi mdi-star independence-icon feature-icon"></i>
                      <span class="feature-text">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Slide -->
          <div v-else class="parallax-item" :style="{ backgroundImage: `url(${item.src})` }">
            <div class="content-overlay">
              <div class="icon-badge">
                <span :class="['mdi', item.icon]"></span>
              </div>
              <div class="parallax-overlay">
                <div class="title-container">
                  <div class="category-tag">{{ item.category }}</div>
                  <h2 class="carousel-title">{{ item.title }}</h2>
                  <div class="title-decoration">
                    <div class="decoration-line"></div>
                    <span :class="['mdi', item.decorationIcon, 'decoration-icon']"></span>
                    <div class="decoration-line"></div>
                  </div>
                  <p class="carousel-subtitle">{{ item.subtitle }}</p>
                  <div class="features-list" v-if="item.features">
                    <div
                      v-for="(feature, fIndex) in item.features"
                      :key="fIndex"
                      class="feature-item"
                    >
                      <i class="mdi mdi-check-circle feature-icon"></i>
                      <span class="feature-text">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="gradient-overlay"></div>
          </div>

        </div>
      </div>

      <!-- Arrow Buttons -->
      <button class="arrow-btn arrow-prev" @click="prev" aria-label="Previous">&#8249;</button>
      <button class="arrow-btn arrow-next" @click="next" aria-label="Next">&#8250;</button>
    </div>

    <!-- Carousel Indicators -->
    <div class="custom-indicators">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="indicator"
        :class="{ active: currentSlide === index }"
        @click="goTo(index)"
      >
        <div class="indicator-progress">
          <div class="indicator-fill" :class="{ animating: currentSlide === index }"></div>
        </div>
        <span class="indicator-label">{{ item.indicatorLabel }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import topWebImage from '@/assets/TopWeb.jpg';
import anniversaryImage from '@/assets/Aniversary.png';

export default {
  name: 'CarouselPage',
  data() {
    return {
      currentSlide: 0,
      topWebImage,
      anniversaryImage,
      isMobile: false,
      videoLoaded: false,
      autoPlayTimer: null,
      INTERVAL: 10000,
      items: [
        // {
        //   type: 'image',
        //   src: 'https://ik.imagekit.io/u3wbiya66/NFlag.gif',
        //   title: 'Celebrating 78 Years of Independence',
        //   subtitle: 'Strength, Confidence & Unity as One Nation',
        //   category: 'NATIONAL PRIDE',
        //   icon: 'mdi-flag',
        //   decorationIcon: 'mdi-star',
        //   features: ['78 Years of Independence', 'National Heritage Celebration'],
        //   indicatorLabel: 'Independence'
        // },
        {
          type: 'image',
          src: 'https://ik.imagekit.io/a56urydbh7/PXL_202.jpg?updatedAt=1743228744356',
          title: 'Our Recognition',
          subtitle: 'Celebrating Excellence Through the Years.',
          category: 'AWARDS & HONORS',
          icon: 'mdi-trophy',
          decorationIcon: 'mdi-star',
          features: ['Multiple British Council Awards', 'Platinum Category Recognition', 'Regional Excellence Awards'],
          indicatorLabel: 'Awards'
        },
        {
          type: 'image',
          src: 'https://ik.imagekit.io/u3wbiya66/2.jpg?updatedAt=1737779121377',
          title: 'Student-Centric Environment',
          subtitle: 'Empowering Active Participation and Engagement.',
          category: 'LEARNING ENVIRONMENT',
          icon: 'mdi-account-group',
          decorationIcon: 'mdi-heart',
          features: ['Interactive Learning Spaces', 'Collaborative Activities', 'Modern Classroom Setup'],
          indicatorLabel: 'Environment'
        },
        {
          type: 'image',
          src: 'https://ik.imagekit.io/u3wbiya66/3.jpg?updatedAt=1737779167089',
          title: 'Individual Attention',
          subtitle: 'Personalized Support in a Safe Space.',
          category: 'STUDENT SUPPORT',
          icon: 'mdi-shield-account',
          decorationIcon: 'mdi-shield-check',
          features: ['One-on-One Mentoring', 'Safe Learning Environment', 'Personalized Progress Tracking'],
          indicatorLabel: 'Support'
        },
        {
          type: 'image',
          src: 'https://ik.imagekit.io/u3wbiya66/6.jpg?updatedAt=1737779168033',
          title: 'Personalized Support',
          subtitle: 'Empowering Confidence and Leadership.',
          category: 'PERSONAL DEVELOPMENT',
          icon: 'mdi-account-arrow-up',
          decorationIcon: 'mdi-account-star',
          features: ['Confidence Building Programs', 'Leadership Workshops', 'Personal Growth Plans'],
          indicatorLabel: 'Development'
        },
        {
          type: 'image',
          src: 'https://ik.imagekit.io/u3wbiya66/7.jpg?updatedAt=1737779166430',
          title: 'Innovative Learning',
          subtitle: 'Blending Technology and Teaching for Growth.',
          category: 'INNOVATION & TECHNOLOGY',
          icon: 'mdi-laptop',
          decorationIcon: 'mdi-lightbulb',
          features: ['Digital Learning Platforms', 'Interactive Technology', 'Modern Teaching Methods'],
          indicatorLabel: 'Innovation'
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
    onVideoLoad() {
      this.videoLoaded = true;
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
/* ── Container ── */
.parallax-carousel-container {
  padding-top: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  background: linear-gradient(135deg, rgba(26, 42, 58, 0.7) 0%, rgba(44, 62, 80, 0.7) 100%);
}

/* ── Logo ── */
.logo-link {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 25;
  transition: transform 0.3s ease;
  text-decoration: none;
}
.logo-link:hover { transform: scale(1.05); }
.top-left-image {
  width: 80px;
  height: 160px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  display: block;
}

/* ── Carousel wrapper ── */
.festive-carousel {
  position: relative;
  width: 100%;
  height: 550px;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* ── Sliding track ── */
.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.65s cubic-bezier(0.77, 0, 0.175, 1);
  will-change: transform;
}

/* ── Individual slide ── */
.carousel-slide {
  min-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}

/* ── Image slide ── */
.parallax-item {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    transparent 30%,
    transparent 70%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
}

/* ── Video slide ── */
.video-background-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-container {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  overflow: hidden;
  z-index: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}
.background-video {
  position: absolute;
  top: 50%; left: 50%;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
  transform: translate(-50%, -50%);
  min-width: 100%; min-height: 100%;
  backface-visibility: hidden;
}
.video-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 20%,
    rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.2) 60%,
    rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.6) 100%
  );
  z-index: 1;
  pointer-events: none;
}

/* ── Content overlay ── */
.content-overlay {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
}

/* ── Icon badge ── */
.icon-badge {
  width: 70px; height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff8c00);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.2);
  flex-shrink: 0;
}
.icon-badge .mdi { font-size: 28px; color: #fff; }
.icon-badge.independence-badge {
  background: linear-gradient(135deg, #8B0000, #FFB300);
  box-shadow: 0 8px 25px rgba(139, 0, 0, 0.4);
}

/* ── Text card ── */
.parallax-overlay {
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 16px;
  width: 90%;
  max-width: 750px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}
.title-container { width: 100%; }

/* ── Category tag ── */
.category-tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.9), rgba(255, 140, 0, 0.9));
  color: white;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 15px;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
}
.category-tag.independence-tag {
  background: linear-gradient(135deg, #8B0000, #FFB300);
}

/* ── Title ── */
.carousel-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  color: white;
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;
  transition: all 0.3s ease;
}
.carousel-title.independence-title {
  background: linear-gradient(135deg, #FFB300, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Subtitle ── */
.carousel-subtitle {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  opacity: 0.95;
  font-weight: 300;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  transition: all 0.3s ease;
}

/* ── Decoration ── */
.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
}
.decoration-line {
  height: 2px; width: 40px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}
.decoration-icon {
  margin: 0 10px; font-size: 18px; opacity: 0.9; color: white;
}
.decoration-icon.independence-icon { color: #FFB300; }

/* ── Features ── */
.features-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 20px auto 0;
  max-width: 500px;
}
.feature-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  text-align: left;
  font-size: 0.85rem;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  min-height: 36px;
  transition: all 0.3s ease;
}
.feature-item.independence-feature {
  background: rgba(139, 0, 0, 0.2);
  border-left: 3px solid #FFB300;
}
.feature-icon {
  font-size: 18px;
  flex-shrink: 0;
  color: #ff6b35;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.independence-icon.feature-icon { color: #FFB300; }
.feature-text {
  flex: 1;
  line-height: 1.3;
  color: #fff;
  word-break: break-word;
}

/* ── Arrow buttons ── */
.arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  cursor: pointer;
  font-size: 26px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
}
.festive-carousel:hover .arrow-btn { opacity: 1; }
.arrow-btn:hover { background: rgba(0, 0, 0, 0.7); }
.arrow-prev { left: 12px; }
.arrow-next { right: 12px; }

/* ── Indicators ── */
.custom-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
  padding: 0 20px 20px;
  position: relative;
  z-index: 2;
  flex-wrap: wrap;
}
.indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-width: 60px; max-width: 80px;
  flex: 0 1 auto;
  transition: all 0.3s ease;
}
.indicator:hover { transform: translateY(-2px); }
.indicator-progress {
  width: 100%; height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
  position: relative;
}
.indicator-fill {
  height: 100%; width: 0%;
  background: linear-gradient(90deg, #ff6b35, #ff8c00);
  border-radius: 2px;
}
.indicator.active .indicator-fill.animating {
  animation: progress 10s linear forwards;
}
.indicator:first-child.active .indicator-fill.animating {
  background: linear-gradient(90deg, #8B0000, #FFB300);
}
.indicator-label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
.indicator.active .indicator-label { color: #ff6b35; font-weight: 600; }

@keyframes progress {
  0%   { width: 0%; }
  100% { width: 100%; }
}

/* ── Tablet ── */
@media (max-width: 1024px) {
  .parallax-carousel-container { min-height: 450px; }
  .festive-carousel { height: 480px; }
  .carousel-title { font-size: 1.9rem; }
  .carousel-subtitle { font-size: 1rem; }
  .icon-badge { width: 60px; height: 60px; }
  .icon-badge .mdi { font-size: 24px; }
  .parallax-overlay { padding: 20px; max-width: 650px; }
  .top-left-image { width: 70px; height: 140px; }
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .parallax-carousel-container { min-height: 400px; }
  .festive-carousel { height: 420px; }
  .content-overlay { padding: 15px 10px; }
  .parallax-overlay { padding: 18px 15px; width: 95%; max-width: 100%; background: rgba(0,0,0,0.7); border-radius: 12px; }
  .carousel-title { font-size: 1.5rem; margin-bottom: 10px; line-height: 1.3; }
  .carousel-subtitle { font-size: 0.9rem; margin-bottom: 15px; line-height: 1.4; }
  .icon-badge { width: 50px; height: 50px; margin-bottom: 15px; }
  .icon-badge .mdi { font-size: 20px; }
  .category-tag { font-size: 0.65rem; padding: 4px 12px; margin-bottom: 12px; }
  .title-decoration { margin: 12px 0; }
  .decoration-line { width: 30px; }
  .features-list { gap: 6px; margin-top: 15px; }
  .feature-item { font-size: 0.75rem; padding: 6px 8px; }
  .top-left-image { width: 60px; height: 120px; }
  .logo-link { top: 10px; right: 10px; }
  .custom-indicators { gap: 10px; margin-top: 20px; padding: 0 15px 15px; }
  .indicator { min-width: 50px; max-width: 70px; }
  .indicator-label { font-size: 0.65rem; }
  .arrow-btn { opacity: 1; width: 36px; height: 36px; font-size: 20px; }
}

/* ── Small Mobile ── */
@media (max-width: 480px) {
  .parallax-carousel-container { min-height: 380px; }
  .festive-carousel { height: 370px; }
  .content-overlay { padding: 10px 5px; }
  .parallax-overlay { padding: 15px 12px; width: 96%; border-radius: 10px; }
  .carousel-title { font-size: 1.3rem; margin-bottom: 8px; }
  .carousel-subtitle { font-size: 0.85rem; margin-bottom: 12px; }
  .icon-badge { width: 45px; height: 45px; margin-bottom: 12px; }
  .icon-badge .mdi { font-size: 18px; }
  .category-tag { font-size: 0.6rem; padding: 3px 10px; margin-bottom: 10px; }
  .features-list { grid-template-columns: 1fr; gap: 5px; margin-top: 12px; }
  .feature-item { font-size: 0.7rem; padding: 5px 7px; }
  .feature-icon { font-size: 14px; width: 16px; height: 16px; line-height: 16px; }
  .top-left-image { width: 50px; height: 100px; }
  .custom-indicators { gap: 8px; margin-top: 15px; padding: 0 10px 10px; }
  .indicator { min-width: 45px; max-width: 60px; }
  .indicator-label { font-size: 0.6rem; }
  .indicator-progress { height: 3px; margin-bottom: 6px; }
}

/* ── Extra Small ── */
@media (max-width: 360px) {
  .carousel-title { font-size: 1.2rem; }
  .carousel-subtitle { font-size: 0.8rem; }
  .parallax-overlay { padding: 12px 10px; }
  .custom-indicators { gap: 6px; }
  .indicator { min-width: 40px; }
  .indicator-label { font-size: 0.55rem; }
}

/* ── Landscape Mobile ── */
@media (max-width: 768px) and (orientation: landscape) {
  .parallax-carousel-container { min-height: 300px; }
  .festive-carousel { height: 280px; }
  .icon-badge { width: 40px; height: 40px; margin-bottom: 8px; }
  .icon-badge .mdi { font-size: 16px; }
  .parallax-overlay { padding: 12px; }
  .carousel-title { font-size: 1.2rem; }
  .carousel-subtitle { font-size: 0.8rem; margin-bottom: 10px; }
  .features-list { grid-template-columns: repeat(2, 1fr); gap: 4px; margin-top: 8px; }
  .feature-item { font-size: 0.7rem; padding: 4px 6px; }
}

/* ── Touch devices ── */
@media (hover: none) and (pointer: coarse) {
  .arrow-btn { opacity: 1; }
  .indicator:hover { transform: none; }
  .logo-link:hover { transform: none; }
}

/* ── High DPI ── */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .top-left-image { image-rendering: -webkit-optimize-contrast; }
}
</style>
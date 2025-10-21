<template>
  <div class="parallax-carousel-container">
    <!-- Top Logos -->
    <a href="https://www.topweb.lk" target="_blank" rel="noopener" class="logo-link">
      <img :src="topWebImage" alt="TopWeb Logo" class="top-left-image" />
    </a>

    <div class="logo-container">
      <img :src="anniversaryImage" alt="Anniversary Logo" class="top-right-image" />
      <div class="logo-glow"></div>
    </div>

    <!-- Floating Balloons -->
    <div class="up-floating-images">
      <div v-for="(balloon, index) in balloonCount" :key="index" class="floating-up" :style="generateUpImageStyle()">
      </div>
    </div>

    <!-- Main Carousel -->
    <v-carousel v-model="currentSlide" cycle interval="10000" height="500" show-arrows="hover" hide-delimiter-background
      class="festive-carousel">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <div class="parallax-item" :style="{ backgroundImage: `url(${item.src})` }">
          <!-- Content Overlay -->
          <div class="content-overlay">
            <!-- Icon Badge -->
            <div class="icon-badge">
              <v-icon large color="white">{{ item.icon }}</v-icon>
            </div>

            <!-- Main Content -->
            <div class="parallax-overlay">
              <div class="title-container">
                <!-- Category Tag -->
                <div class="category-tag">
                  {{ item.category }}
                </div>

                <h2 class="carousel-title">{{ item.title }}</h2>
                <div class="title-decoration">
                  <div class="decoration-line left"></div>
                  <v-icon color="white" class="decoration-icon">{{ item.decorationIcon }}</v-icon>
                  <div class="decoration-line right"></div>
                </div>
                <p class="carousel-subtitle">{{ item.subtitle }}</p>

                <!-- Features List -->
                <div class="features-list" v-if="item.features">
                  <div v-for="(feature, fIndex) in item.features" :key="fIndex" class="feature-item">
                    <v-icon small color="#ff6b35" class="mr-2">mdi-check-circle</v-icon>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gradient Overlay -->
          <div class="gradient-overlay"></div>
        </div>
      </v-carousel-item>
    </v-carousel>

    <!-- Carousel Indicators -->
    <div class="custom-indicators">
      <div v-for="(item, index) in items" :key="index" class="indicator" :class="{ active: currentSlide === index }"
        @click="currentSlide = index">
        <div class="indicator-progress"></div>
        <span class="indicator-label">{{ item.indicatorLabel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// Import images at the top
import topWebImage from '@/assets/TopWeb.jpg';
import anniversaryImage from '@/assets/Aniversary.png';
import balloon1 from '@/assets/festivel/baloon1.png';
import balloon2 from '@/assets/festivel/baloon2.png';

export default {
  name: 'CarouselPage',
  data() {
    return {
      currentSlide: 0,
      topWebImage: topWebImage,
      anniversaryImage: anniversaryImage,
      upImages: [balloon1, balloon2],
      balloonCount: 6,
      isMobile: false,
      items: [
        {
          src: "https://ik.imagekit.io/a56urydbh7/PXL_202.jpg?updatedAt=1743228744356",
          title: "Our Recognition",
          subtitle: "Celebrating Excellence Through the Years.",
          category: "AWARDS & HONORS",
          icon: "mdi-trophy",
          decorationIcon: "mdi-star",
          features: [
            "Multiple British Council Awards",
            "Platinum Category Recognition",
            "Regional Excellence Awards"
          ],
          ctaPrimary: "View Awards",
          ctaIcon: "mdi-award",
          indicatorLabel: "Awards"
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/2.jpg?updatedAt=1737779121377",
          title: "Student-Centric Environment",
          subtitle: "Empowering Active Participation and Engagement.",
          category: "LEARNING ENVIRONMENT",
          icon: "mdi-account-group",
          decorationIcon: "mdi-heart",
          features: [
            "Interactive Learning Spaces",
            "Collaborative Activities",
            "Modern Classroom Setup"
          ],
          ctaPrimary: "Tour Campus",
          ctaIcon: "mdi-school",
          indicatorLabel: "Environment"
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/3.jpg?updatedAt=1737779167089",
          title: "Individual Attention",
          subtitle: "Personalized Support in a Safe Space.",
          category: "STUDENT SUPPORT",
          icon: "mdi-shield-account",
          decorationIcon: "mdi-shield-check",
          features: [
            "One-on-One Mentoring",
            "Safe Learning Environment",
            "Personalized Progress Tracking"
          ],
          ctaPrimary: "Learn More",
          ctaIcon: "mdi-shield-star",
          indicatorLabel: "Support"
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/6.jpg?updatedAt=1737779168033",
          title: "Personalized Support",
          subtitle: "Empowering Confidence and Leadership.",
          category: "PERSONAL DEVELOPMENT",
          icon: "mdi-account-arrow-up",
          decorationIcon: "mdi-account-star",
          features: [
            "Confidence Building Programs",
            "Leadership Workshops",
            "Personal Growth Plans"
          ],
          ctaPrimary: "Our Programs",
          ctaIcon: "mdi-rocket-launch",
          indicatorLabel: "Development"
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/7.jpg?updatedAt=1737779166430",
          title: "Innovative Learning",
          subtitle: "Blending Technology and Teaching for Growth.",
          category: "INNOVATION & TECHNOLOGY",
          icon: "mdi-laptop",
          decorationIcon: "mdi-lightbulb",
          features: [
            "Digital Learning Platforms",
            "Interactive Technology",
            "Modern Teaching Methods"
          ],
          ctaPrimary: "Explore Tech",
          ctaIcon: "mdi-laptop",
          indicatorLabel: "Innovation"
        }
      ]
    };
  },
  methods: {
    generateUpImageStyle() {
      const isMobile = this.isMobile;
      const size = isMobile ? Math.random() * 25 + 20 : Math.random() * 50 + 30;
      const positionX = Math.random() * (isMobile ? 90 : 85);
      const duration = isMobile ? Math.random() * 6 + 8 : Math.random() * 8 + 10;
      const delay = Math.random() * 5;
      const swingAmount = isMobile ? Math.random() * 20 - 10 : Math.random() * 40 - 20;
      const randomImage = this.upImages[Math.floor(Math.random() * this.upImages.length)];

      return {
        left: `${positionX}vw`,
        bottom: '-100px',
        width: `${size}px`,
        height: `${size * 1.2}px`,
        backgroundImage: `url(${randomImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--swing-distance': `${swingAmount}px`,
        opacity: isMobile ? '0.6' : '0.8'
      };
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
      this.balloonCount = this.isMobile ? 4 : 6;
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);

    console.log('Carousel images loaded:', {
      topWeb: this.topWebImage,
      anniversary: this.anniversaryImage,
      balloons: this.upImages
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  }
};
</script>

<style scoped>
.parallax-carousel-container {
  padding-top: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(26, 42, 58, 0.7) 0%, rgba(44, 62, 80, 0.7) 100%);
}

/* Logo Styles */
.logo-link {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 20;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.top-left-image {
  width: 80px;
  height: 160px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

.logo-container {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}

.top-right-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
  position: relative;
  z-index: 2;
  object-fit: cover;
}

.logo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, transparent 70%);
  z-index: 1;
  animation: pulse 3s infinite alternate;
}

@keyframes pulse {
  0% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(0.95);
  }

  100% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

/* Floating Balloons */
.up-floating-images {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-up {
  position: absolute;
  animation-name: floatUp;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0.8;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: 0.9;
  }

  25% {
    transform: translateY(-25vh) translateX(var(--swing-distance)) rotate(90deg);
  }

  50% {
    transform: translateY(-50vh) translateX(0) rotate(180deg);
  }

  75% {
    transform: translateY(-75vh) translateX(calc(-1 * var(--swing-distance))) rotate(270deg);
  }

  100% {
    transform: translateY(-100vh) translateX(0) rotate(360deg);
    opacity: 0;
  }
}

/* Carousel Styles */
.festive-carousel {
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.parallax-item {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(0, 0, 0, 0.3) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0, 0, 0, 0.3) 100%);
  z-index: 1;
}

.content-overlay {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon-badge {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff8c00);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.parallax-overlay {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 30px;
  border-radius: 16px;
  width: 85%;
  max-width: 800px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.category-tag {
  display: inline-block;
  background: linear-gradient(135deg, #ff6b35, #ff8c00);
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.carousel-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  color: white;
  line-height: 1.1;
}

.carousel-subtitle {
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 25px;
  opacity: 0.95;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.decoration-line {
  height: 2px;
  width: 50px;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
}

.decoration-icon {
  margin: 0 12px;
  font-size: 20px;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 25px auto;
  max-width: 500px;
}

.feature-item {
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 0.9rem;
  padding: 6px 0;
}

.cta-container {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.cta-button.primary {
  background: linear-gradient(135deg, #ff6b35, #ff8c00);
  color: white;
  font-weight: 600;
  padding: 12px 32px;
  transition: all 0.3s ease;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
}

/* Custom Indicators */
.custom-indicators {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  padding: 0 20px;
  position: relative;
  z-index: 5;
}

.indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 70px;
  transition: all 0.3s ease;
}

.indicator-progress {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
}

.indicator.active .indicator-progress {
  background: linear-gradient(90deg, #ff6b35, #ff8c00);
  animation: progress 10s linear;
}

.indicator-label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.indicator.active .indicator-label {
  color: #ff6b35;
  font-weight: 600;
}

.indicator:hover {
  transform: translateY(-2px);
}

@keyframes progress {
  0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
}

/* Enhanced Responsive Design with Mobile Balloons */
@media (max-width: 960px) {
  .carousel-title {
    font-size: 2rem;
  }

  .carousel-subtitle {
    font-size: 1.1rem;
  }

  .features-list {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .top-left-image {
    width: 60px;
    height: 120px;
  }

  .top-right-image {
    width: 100px;
    height: 100px;
  }

  .logo-glow {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 768px) {
  .parallax-carousel-container {
    background: linear-gradient(135deg, rgba(26, 42, 58, 0.6) 0%, rgba(44, 62, 80, 0.6) 100%);
  }

  .festive-carousel {
    height: 350px !important;
  }

  .carousel-title {
    font-size: 1.5rem;
  }

  .carousel-subtitle {
    font-size: 0.95rem;
  }

  .parallax-item {
    background-attachment: scroll;
  }

  .parallax-overlay {
    padding: 20px 15px;
    width: 92%;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon-badge {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  .icon-badge .v-icon {
    font-size: 1.5rem !important;
  }

  .top-left-image {
    width: 45px;
    height: 90px;
    top: 15px;
    right: 15px;
  }

  .top-right-image {
    width: 70px;
    height: 70px;
    top: 15px;
    left: 15px;
  }

  .logo-glow {
    width: 90px;
    height: 90px;
  }

  .category-tag {
    font-size: 0.65rem;
    padding: 4px 12px;
    margin-bottom: 15px;
  }

  .title-decoration {
    margin: 15px 0;
  }

  .decoration-line {
    width: 30px;
  }

  .decoration-icon {
    font-size: 18px;
    margin: 0 8px;
  }

  .features-list {
    margin: 15px auto;
    gap: 6px;
  }

  .feature-item {
    font-size: 0.8rem;
    padding: 4px 0;
  }

  .custom-indicators {
    gap: 8px;
    margin-top: 20px;
  }

  .indicator {
    width: 55px;
  }

  .indicator-label {
    font-size: 0.6rem;
  }

  /* Mobile-optimized balloons */
  .up-floating-images {
    display: block;
  }

  .floating-up {
    opacity: 0.6;
  }
}

@media (max-width: 480px) {
  .parallax-carousel-container {
    background: linear-gradient(135deg, rgba(26, 42, 58, 0.5) 0%, rgba(44, 62, 80, 0.5) 100%);
  }

  .festive-carousel {
    height: 320px !important;
  }

  .carousel-title {
    font-size: 1.4rem;
    margin-bottom: 12px;
  }

  .carousel-subtitle {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }

  .parallax-overlay {
    padding: 18px 12px;
    border-radius: 12px;
    backdrop-filter: blur(5px);
  }

  .icon-badge {
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  }

  .icon-badge .v-icon {
    font-size: 1.3rem !important;
  }

  .top-left-image {
    width: 40px;
    height: 80px;
    top: 12px;
    right: 12px;
  }

  .top-right-image {
    width: 65px;
    height: 65px;
    top: 12px;
    left: 12px;
  }

  .logo-glow {
    width: 85px;
    height: 85px;
  }

  .category-tag {
    font-size: 0.6rem;
    padding: 3px 10px;
    margin-bottom: 12px;
  }

  .title-decoration {
    margin: 12px 0;
  }

  .decoration-line {
    width: 25px;
  }

  .decoration-icon {
    font-size: 16px;
    margin: 0 6px;
  }

  .features-list {
    margin: 12px auto;
  }

  .feature-item {
    font-size: 0.75rem;
  }

  .custom-indicators {
    gap: 6px;
    margin-top: 18px;
  }

  .indicator {
    width: 50px;
  }

  .indicator-label {
    font-size: 0.55rem;
  }

  .indicator-progress {
    height: 3px;
    margin-bottom: 6px;
  }

  /* Smaller balloons for mobile */
  .floating-up {
    opacity: 0.5;
  }
}

@media (max-width: 360px) {
  .festive-carousel {
    height: 300px !important;
  }

  .carousel-title {
    font-size: 1.3rem;
  }

  .carousel-subtitle {
    font-size: 0.85rem;
  }

  .top-left-image {
    width: 35px;
    height: 70px;
  }

  .top-right-image {
    width: 55px;
    height: 55px;
  }

  .logo-glow {
    width: 75px;
    height: 75px;
  }

  .parallax-overlay {
    padding: 15px 10px;
  }

  /* Further optimize balloons for very small screens */
  .up-floating-images {
    pointer-events: none;
  }

  .floating-up {
    opacity: 0.4;
  }
}

/* Performance optimizations for balloons */
.up-floating-images {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}

.floating-up {
  will-change: transform, opacity;
}
</style>
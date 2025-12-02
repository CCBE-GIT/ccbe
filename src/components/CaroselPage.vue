<template>
  <div class="parallax-carousel-container">
    <!-- Top Logos -->
    <a href="https://www.topweb.lk" target="_blank" rel="noopener" class="logo-link">
      <img :src="topWebImage" alt="TopWeb Logo" class="top-left-image" />
    </a>

    <!-- Falling Snowflakes and Santa Caps only on carousel area -->
    <div class="snow-container">
      <!-- Snowflakes -->
      <div v-for="(snow, index) in snowCount" :key="index" class="snowflake" :style="generateSnowflakeStyle()"></div>
      
      <!-- Santa Caps - fewer than snowflakes -->
      <div v-for="(cap, index) in santaCapCount" :key="'cap-' + index" class="santa-cap" :style="generateSantaCapStyle()"></div>
    </div>

    <!-- Main Carousel - Snow will fall only on this area -->
    <v-carousel v-model="currentSlide" cycle interval="10000" height="500" show-arrows="hover" hide-delimiter-background
      class="festive-carousel snow-target-area">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <div class="parallax-item" :style="{ backgroundImage: `url(${item.src})` }">
          <!-- Content Overlay -->
          <div class="content-overlay">
            <!-- Icon Badge -->
            <div class="icon-badge">
              <v-icon large color="white">{{ item.icon }}</v-icon>
            </div>

            <!-- Main Content - Snow will fall on this text area -->
            <div class="parallax-overlay text-content-area">
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
// Import images
import topWebImage from '@/assets/TopWeb.jpg';
import anniversaryImage from '@/assets/Aniversary.png';
import snowflakeImage from '@/assets/festivel/snow.png';
import santaCapImage from '@/assets/festivel/bells.png'; // Add this import

export default {
  name: 'CarouselPage',
  data() {
    return {
      currentSlide: 0,
      topWebImage: topWebImage,
      anniversaryImage: anniversaryImage,
      snowflakeImage: snowflakeImage,
      santaCapImage: santaCapImage, // Add this
      snowCount: 35, // Optimized count for snow
      santaCapCount: 8, // Fewer Santa caps (adjust as needed)
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
    generateSnowflakeStyle() {
      const isMobile = this.isMobile;
      
      // Random size - smaller snowflakes for better effect
      const size = isMobile ? Math.random() * 25 + 20 : Math.random() * 35 + 25;
      
      // Random horizontal position - limited to carousel width
      const positionX = Math.random() * 80 + 10; // 10% to 90% of container
      
      // Random fall duration - slower for natural effect
      const duration = isMobile ? Math.random() * 15 + 10 : Math.random() * 20 + 15;
      
      // Random delay for staggered appearance
      const delay = Math.random() * 10;
      
      // Subtle horizontal drift
      const driftAmount = isMobile ? Math.random() * 20 - 10 : Math.random() * 30 - 15;
      
      // Random opacity for variety
      const opacity = Math.random() * 0.7 + 0.3;
      
      // Random rotation
      const rotation = Math.random() * 360;

      return {
        left: `${positionX}%`,
        top: '-20px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${this.snowflakeImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--drift-distance': `${driftAmount}px`,
        opacity: `${opacity}`,
        transform: `rotate(${rotation}deg)`,
        filter: 'none'
      };
    },
    
    // New method for Santa Caps
    generateSantaCapStyle() {
      const isMobile = this.isMobile;
      
      // Larger size for Santa Caps (bigger than snowflakes)
      const size = isMobile ? Math.random() * 35 + 30 : Math.random() * 45 + 35;
      
      // Random horizontal position
      const positionX = Math.random() * 80 + 10;
      
      // Slower fall duration for Santa Caps (they're heavier)
      const duration = isMobile ? Math.random() * 20 + 15 : Math.random() * 25 + 20;
      
      // Random delay
      const delay = Math.random() * 15;
      
      // More dramatic drift for Santa Caps
      const driftAmount = isMobile ? Math.random() * 25 - 12.5 : Math.random() * 40 - 20;
      
      // Slightly less opacity variation for Santa Caps
      const opacity = 1;
      
      // Less rotation for Santa Caps (more natural falling)
      const rotation = Math.random() * 180 - 90; // -90 to 90 degrees

      return {
        left: `${positionX}%`,
        top: '-30px',
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${this.santaCapImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        '--drift-distance': `${driftAmount}px`,
        opacity: `${opacity}`,
        transform: `rotate(${rotation}deg)`,
        filter: 'none'
      };
    },
    
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
      this.snowCount = this.isMobile ? 20 : 35;
      this.santaCapCount = this.isMobile ? 5 : 8; // Adjust Santa cap count for mobile
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
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

/* Snow Container - Positioned over carousel only */
.snow-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px; /* Match carousel height */
  pointer-events: none;
  z-index: 2; /* Above carousel background but below content */
  overflow: hidden;
}

/* Target area where snow falls */
.snow-target-area {
  position: relative;
  z-index: 1; /* Carousel stays below snow */
}

/* Text content area - snow falls on this */
.text-content-area {
  position: relative;
  z-index: 3; /* Text above snow */
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

/* Santa Cap styles - similar to snowflakes but with different animation */
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
    transform: translateY(500px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
    opacity: 0;
  }
}

/* Different animation for Santa Caps - more bouncy/floaty */
@keyframes santaCapFall {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
    opacity: var(--start-opacity, 0.9);
  }
  25% {
    transform: translateY(125px) translateX(calc(var(--drift-distance) * 0.5)) rotate(45deg);
  }
  50% {
    transform: translateY(250px) translateX(calc(-0.3 * var(--drift-distance))) rotate(-30deg);
  }
  75% {
    transform: translateY(375px) translateX(calc(var(--drift-distance) * 0.7)) rotate(60deg);
  }
  100% {
    transform: translateY(500px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
    opacity: 0;
  }
}

/* Logo Styles - Ensure they stay above snow */
.logo-link {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 25; /* Above snow */
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
  z-index: 25; /* Above snow */
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
  z-index: 10; /* High z-index to ensure content is above snow */
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
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  padding: 25px;
  border-radius: 16px;
  width: 90%;
  max-width: 750px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.title-container {
  width: 100%;
}

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

.carousel-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  color: white;
  line-height: 1.1;
  position: relative; /* Ensure text is above snow */
}

.carousel-subtitle {
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 20px;
  opacity: 0.95;
  font-weight: 300;
  max-width: 550px;
  margin-left: auto;
  margin-right: auto;
  position: relative; /* Ensure text is above snow */
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
  position: relative; /* Ensure decoration is above snow */
}

.decoration-line {
  height: 2px;
  width: 40px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}

.decoration-icon {
  margin: 0 10px;
  font-size: 18px;
  opacity: 0.9;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 20px auto;
  max-width: 450px;
  position: relative; /* Ensure features are above snow */
}

.feature-item {
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 0.85rem;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  position: relative; /* Ensure feature items are above snow */
}

.feature-item .v-icon {
  font-size: 16px;
  margin-right: 6px;
}

/* Custom Indicators - Ensure they stay below snow */
.custom-indicators {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  padding: 0 20px;
  position: relative;
  z-index: 1; /* Below snow container */
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

/* Enhanced Mobile Responsive Design */
@media (max-width: 960px) {
  .snow-container {
    height: 400px; /* Adjust snow container height for tablet */
  }
  
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: var(--start-opacity, 0.8);
    }
    100% {
      transform: translateY(400px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
      opacity: 0;
    }
  }
  
  @keyframes santaCapFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: var(--start-opacity, 0.9);
    }
    100% {
      transform: translateY(400px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
      opacity: 0;
    }
  }
}

@media (max-width: 768px) {
  .snow-container {
    height: 350px; /* Adjust for mobile carousel height */
  }
  
  .snowflake {
    filter: none; /* Removed blur for mobile */
  }
  
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: var(--start-opacity, 0.7);
    }
    100% {
      transform: translateY(350px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
      opacity: 0;
    }
  }
  
  @keyframes santaCapFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: var(--start-opacity, 0.8);
    }
    100% {
      transform: translateY(350px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
      opacity: 0;
    }
  }
  
  .festive-carousel {
    height: 350px !important;
  }
  
  .parallax-overlay {
    padding: 18px 15px;
    width: 92%;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 12px;
  }
  
  .carousel-title {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  
  .carousel-subtitle {
    font-size: 0.95rem;
    margin-bottom: 15px;
    max-width: 450px;
  }
  
  .icon-badge {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }
  
  .icon-badge .v-icon {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 480px) {
  .snow-container {
    height: 320px; /* Adjust for small mobile */
  }
  
  @keyframes snowFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: var(--start-opacity, 0.6);
    }
    100% {
      transform: translateY(320px) translateX(calc(var(--drift-distance) * 1.2)) rotate(720deg);
      opacity: 0;
    }
  }
  
  @keyframes santaCapFall {
    0% {
      transform: translateY(0) translateX(0) rotate(0deg);
      opacity: var(--start-opacity, 0.7);
    }
    100% {
      transform: translateY(320px) translateX(calc(var(--drift-distance) * 1.5)) rotate(-90deg);
      opacity: 0;
    }
  }
  
  .snowflake {
    opacity: 0.5 !important;
  }
  
  .festive-carousel {
    height: 320px !important;
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

/* Smooth transitions for all elements */
.parallax-overlay,
.category-tag,
.carousel-title,
.carousel-subtitle,
.feature-item {
  transition: all 0.3s ease;
}
</style>
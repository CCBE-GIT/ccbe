<template>
  <div class="parallax-carousel-container">
    <!-- Top Logos -->
    <a href="https://www.topweb.lk" target="_blank" rel="noopener" class="logo-link">
      <img :src="topWebImage" alt="TopWeb Logo" class="top-left-image" />
    </a>

    <!-- Main Carousel -->
    <v-carousel v-model="currentSlide" cycle interval="10000" :height="carouselHeight" show-arrows="hover" hide-delimiter-background
      class="festive-carousel">
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <!-- Video Background for Independence Day Slide -->
        <div v-if="item.type === 'video'" class="video-background-wrapper">
          <div class="video-container">
            <video 
              :src="item.src" 
              autoplay 
              muted 
              loop 
              playsinline
              class="background-video"
              ref="videoPlayer"
              @loadeddata="onVideoLoad"
            ></video>
            
            <!-- Video overlay for better text readability -->
            <div class="video-overlay"></div>
          </div>
          
          <!-- Content Overlay for video -->
          <div class="content-overlay">
            <!-- Icon Badge with Independence Day theme -->
            <div class="icon-badge" style="background: linear-gradient(135deg, #8B0000, #FFB300); box-shadow: 0 8px 25px rgba(139, 0, 0, 0.4);">
              <v-icon :large="!isMobile" :small="isMobile" color="white">{{ item.icon }}</v-icon>
            </div>

            <!-- Main Content -->
            <div class="parallax-overlay text-content-area">
              <div class="title-container">
                <!-- Category Tag -->
                <div class="category-tag" style="background: linear-gradient(135deg, #8B0000, #FFB300);">
                  {{ item.category }}
                </div>

                <h2 class="carousel-title" style="background: linear-gradient(135deg, #FFB300, #FFFFFF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                  {{ item.title }}
                </h2>
                <div class="title-decoration">
                  <div class="decoration-line left"></div>
                  <v-icon color="#FFB300" class="decoration-icon">{{ item.decorationIcon }}</v-icon>
                  <div class="decoration-line right"></div>
                </div>
                <p class="carousel-subtitle">{{ item.subtitle }}</p>

                <!-- Features List -->
                <div class="features-list" v-if="item.features">
                  <div v-for="(feature, fIndex) in item.features" :key="fIndex" class="feature-item" style="background: rgba(139, 0, 0, 0.2); border-left: 3px solid #FFB300;">
                    <v-icon small color="#FFB300" class="mr-2">mdi-star</v-icon>
                    <span>{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Regular Image Background for other slides -->
        <div v-else class="parallax-item" :style="{ backgroundImage: `url(${item.src})` }">
          <!-- Content Overlay -->
          <div class="content-overlay">
            <!-- Icon Badge -->
            <div class="icon-badge">
              <v-icon :large="!isMobile" :small="isMobile" color="white">{{ item.icon }}</v-icon>
            </div>

            <!-- Main Content -->
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
        <div class="indicator-progress" :style="currentSlide === 0 && currentSlide === index ? { background: 'linear-gradient(90deg, #8B0000, #FFB300)' } : {}"></div>
        <span class="indicator-label">{{ item.indicatorLabel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// Import images
import topWebImage from '@/assets/TopWeb.jpg';
import anniversaryImage from '@/assets/Aniversary.png';
//import independenceVideo from '@/assets/videos/sri_lanka_independence.mp4';

export default {
  name: 'CarouselPage',
  data() {
    return {
      currentSlide: 0,
      topWebImage: topWebImage,
      anniversaryImage: anniversaryImage,
      //independenceVideo: independenceVideo,
      isMobile: false,
      videoLoaded: false,
      carouselHeight: 500,
      items: [
        {
          //type: 'video',
          //src: independenceVideo,
          src: "https://ik.imagekit.io/u3wbiya66/NFlag.gif",
          title: "Celebrating 78 Years of Independence",
          subtitle: "Strength, Confidence & Unity as One Nation",
          category: "NATIONAL PRIDE",
          icon: "mdi-flag",
          decorationIcon: "mdi-star",
          features: [
            "78 Years of Independence",
            "National Heritage Celebration"
          ],
          ctaPrimary: "View Awards",
          ctaIcon: "mdi-award",
          indicatorLabel: "Independence"
        },  
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
    onVideoLoad() {
      this.videoLoaded = true;
      console.log('Video loaded successfully');
    },
    
    checkMobile() {
      const width = window.innerWidth;
      this.isMobile = width <= 768;
      
      // Adjust carousel height based on screen size
      if (width <= 480) {
        this.carouselHeight = 400;
      } else if (width <= 768) {
        this.carouselHeight = 450;
      } else if (width <= 1024) {
        this.carouselHeight = 500;
      } else {
        this.carouselHeight = 550;
      }
    },
    
    handleResize() {
      this.checkMobile();
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
.parallax-carousel-container {
  padding-top: 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  background: linear-gradient(135deg, rgba(26, 42, 58, 0.7) 0%, rgba(44, 62, 80, 0.7) 100%);
}

/* Video Background Styles - Enhanced */
.video-background-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
  transform: translate(-50%, -50%);
  transition: opacity 0.5s ease-in-out;
  min-width: 100%;
  min-height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
}

/* Video overlay for better text contrast */
.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 20%,
    rgba(0, 0, 0, 0.2) 40%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
  pointer-events: none;
}

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
  background-attachment: scroll;
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
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
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
  flex-shrink: 0;
}

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
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  color: white;
  line-height: 1.2;
  word-wrap: break-word;
  hyphens: auto;
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
  word-wrap: break-word;
}

.title-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0;
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
  margin: 20px auto 0;
  max-width: 500px;
}

.feature-item {
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 0.85rem;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(5px);
  word-wrap: break-word;
  min-height: 36px;
}

.feature-item .v-icon {
  font-size: 16px;
  margin-right: 6px;
  flex-shrink: 0;
}

.feature-item span {
  flex: 1;
  line-height: 1.3;
}

/* Logo Styles */
.logo-link {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 25;
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

/* Carousel Indicators */
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
  position: relative;
  min-width: 60px;
  max-width: 80px;
  flex: 0 1 auto;
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
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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

/* Tablet Responsive Design */
@media (max-width: 1024px) {
  .parallax-carousel-container {
    min-height: 450px;
  }
  
  .carousel-title {
    font-size: 1.9rem;
  }
  
  .carousel-subtitle {
    font-size: 1rem;
  }
  
  .icon-badge {
    width: 60px;
    height: 60px;
  }
  
  .parallax-overlay {
    padding: 20px;
    max-width: 650px;
  }
  
  .top-left-image {
    width: 70px;
    height: 140px;
  }
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .parallax-carousel-container {
    min-height: 400px;
  }
  
  .parallax-item {
    background-attachment: scroll;
  }
  
  .content-overlay {
    padding: 15px 10px;
  }
  
  .parallax-overlay {
    padding: 18px 15px;
    width: 95%;
    max-width: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    border-radius: 12px;
  }
  
  .carousel-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    line-height: 1.3;
  }
  
  .carousel-subtitle {
    font-size: 0.9rem;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  
  .icon-badge {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
  
  .category-tag {
    font-size: 0.65rem;
    padding: 4px 12px;
    margin-bottom: 12px;
  }
  
  .title-decoration {
    margin: 12px 0;
  }
  
  .decoration-line {
    width: 30px;
  }
  
  .features-list {
    gap: 6px;
    margin-top: 15px;
  }
  
  .feature-item {
    font-size: 0.75rem;
    padding: 6px 8px;
  }
  
  .top-left-image {
    width: 60px;
    height: 120px;
  }
  
  .logo-link {
    top: 10px;
    right: 10px;
  }
  
  .custom-indicators {
    gap: 10px;
    margin-top: 20px;
    padding: 0 15px 15px;
  }
  
  .indicator {
    min-width: 50px;
    max-width: 70px;
  }
  
  .indicator-label {
    font-size: 0.65rem;
  }
}

/* Small Mobile Responsive Design */
@media (max-width: 480px) {
  .parallax-carousel-container {
    min-height: 380px;
  }
  
  .content-overlay {
    padding: 10px 5px;
  }
  
  .parallax-overlay {
    padding: 15px 12px;
    width: 96%;
    border-radius: 10px;
  }
  
  .carousel-title {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
  
  .carousel-subtitle {
    font-size: 0.85rem;
    margin-bottom: 12px;
  }
  
  .icon-badge {
    width: 45px;
    height: 45px;
    margin-bottom: 12px;
  }
  
  .category-tag {
    font-size: 0.6rem;
    padding: 3px 10px;
    margin-bottom: 10px;
  }
  
  .features-list {
    grid-template-columns: 1fr;
    gap: 5px;
    margin-top: 12px;
  }
  
  .feature-item {
    font-size: 0.7rem;
    padding: 5px 7px;
  }
  
  .feature-item .v-icon {
    font-size: 14px;
  }
  
  .top-left-image {
    width: 50px;
    height: 100px;
  }
  
  .custom-indicators {
    gap: 8px;
    margin-top: 15px;
    padding: 0 10px 10px;
  }
  
  .indicator {
    min-width: 45px;
    max-width: 60px;
  }
  
  .indicator-label {
    font-size: 0.6rem;
  }
  
  .indicator-progress {
    height: 3px;
    margin-bottom: 6px;
  }
}

/* Extra Small Mobile */
@media (max-width: 360px) {
  .carousel-title {
    font-size: 1.2rem;
  }
  
  .carousel-subtitle {
    font-size: 0.8rem;
  }
  
  .parallax-overlay {
    padding: 12px 10px;
  }
  
  .custom-indicators {
    gap: 6px;
  }
  
  .indicator {
    min-width: 40px;
  }
  
  .indicator-label {
    font-size: 0.55rem;
  }
}

/* Landscape Mobile */
@media (max-width: 768px) and (orientation: landscape) {
  .parallax-carousel-container {
    min-height: 300px;
  }
  
  .icon-badge {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  
  .parallax-overlay {
    padding: 12px;
  }
  
  .carousel-title {
    font-size: 1.2rem;
  }
  
  .carousel-subtitle {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
  
  .features-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
    margin-top: 8px;
  }
  
  .feature-item {
    font-size: 0.7rem;
    padding: 4px 6px;
  }
}

/* Performance optimizations */
.video-container {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}

/* Smooth transitions for all elements */
.parallax-overlay,
.category-tag,
.carousel-title,
.carousel-subtitle,
.feature-item {
  transition: all 0.3s ease;
}

/* Video loading state */
.background-video:not([src]) {
  opacity: 0;
}

.background-video {
  opacity: 1;
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .indicator:hover {
    transform: none;
  }
  
  .logo-link:hover {
    transform: none;
  }
}

/* High DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .top-left-image {
    image-rendering: -webkit-optimize-contrast;
  }
}
</style>
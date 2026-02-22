<template>
  <div class="testimonials-page" aria-label="Student testimonials and success stories">
    <div class="main-container">
      <!-- Header Section -->
      <section class="header-section" aria-labelledby="intro-heading">
        <p class="intro-text" data-aos="fade-up" data-aos-duration="3000">
          Hear from our students about their transformative learning experiences. 
          These testimonials reflect the impact of our comprehensive English programmes 
          and the success stories that inspire us to continue delivering excellence.
        </p>
      </section>

      <!-- Testimonials Carousel Section -->
      <section class="testimonials-section" aria-labelledby="testimonials-heading">
        <div class="carousel-container">
          <div class="testimonials-carousel" aria-label="Testimonials slideshow">
            <button @click="prevSlide" class="nav-button nav-left" aria-label="Previous testimonials">
              <span class="nav-icon">‹</span>
            </button>
            
            <div class="testimonials-grid" aria-label="Testimonial cards">
              <div 
                v-for="(testimonial, index) in visibleTestimonials" 
                :key="index" 
                class="testimonial-card"
                data-aos="fade-up" 
                :data-aos-delay="(index + 1) * 100"
                data-aos-duration="3000"
              >
                <!-- Image Container -->
                <div class="image-container">
                  <img 
                    :src="testimonial.userAvatar" 
                    alt="Testimonial User Avatar" 
                    class="testimonial-avatar" 
                  />
                  <div class="card-overlay">
                    <span class="overlay-icon">👤</span>
                    <span class="overlay-text">{{ testimonial.userRole }}</span>
                  </div>
                </div>
                
                <!-- Card Content -->
                <div class="card-content">
                  <div class="testimonial-badge" aria-label="Student testimonial">Student</div>
                  <h3 class="testimonial-title">{{ testimonial.userName }}</h3>
                  <p class="testimonial-text">
                    "{{ testimonial.text }}"
                  </p>
                </div>
                
                <!-- Card Actions -->
                <div class="card-actions">
                  <a 
                    :href="testimonial.link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="learn-more-btn"
                  >
                    Watch Video
                    <span class="btn-icon">▶</span>
                  </a>
                </div>
              </div>
            </div>
            
            <button @click="nextSlide" class="nav-button nav-right" aria-label="Next testimonials">
              <span class="nav-icon">›</span>
            </button>
          </div>

          <!-- Pagination Dots -->
          <div class="pagination-dots" aria-label="Testimonial slides">
            <button 
              v-for="page in totalPages" 
              :key="page" 
              :class="['pagination-dot', { active: currentSlide === (page - 1) * testimonialsPerPage }]"
              @click="goToPage(page)"
            ></button>
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section" aria-labelledby="videos-heading">
        <h2 class="section-title" data-aos="fade-up" data-aos-duration="3000">
          WATCH THEIR <span class="highlight">STORIES</span>
        </h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-duration="3000">
          Experience the journey through their own words
        </p>
        
        <div class="videos-grid" aria-label="Student video testimonials">
          <div 
            v-for="(video, index) in videos" 
            :key="index" 
            class="video-card"
            data-aos="fade-up" 
            :data-aos-delay="(index + 1) * 100"
            data-aos-duration="3000"
          >
            <div class="video-container">
              <iframe 
                :src="video.link" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                class="video-iframe"
                aria-label="Embedded YouTube video testimonial"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
  </div>
</template>

<script>
import ChatBot from './ChatBot.vue';
import ArrowButton from './ArrowButton.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StudentIcon from '@/assets/icons/User Ave.jpeg'

export default {
  name: 'TestimonialsPage',
  components: {
    ChatBot,
    ArrowButton,
  },
  data() {
    return {
      currentSlide: 0,
      testimonialsPerPage: 3,
      testimonials: [
        {
          text: "English became as natural to me as my mother tongue. Apart from the syllabus, they taught me many valuable life lessons and prepared me with the armor of English.",
          userName: "Thilina Chamod",
          userRole: "Key Intake",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Chamod.PNG?updatedAt=1751604750970',
          link: "https://www.youtube.com/watch?v=Xb9PO6GwpYE&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=1"
        },
        {
          text: "I was able to improve my language skills, including reading, writing, listening, and speaking. The practice exams helped us achieve good grades in the British Council exam.",
          userName: "Rishini Hansani",
          userRole: "IKEY002",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Rishini.PNG?updatedAt=1751604753387',
          link: "https://www.youtube.com/watch?v=QgsrB9n_EVQ&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=2"
        },
        {
          text: "Through the four-month course, we were able to improve the four essential language skills: reading, writing, listening, and speaking.",
          userName: "Hasanga Bingusara",
          userRole: "IKEY002",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Hasanga.PNG?updatedAt=1751604752950',
          link: "https://www.youtube.com/watch?v=X3URJtpSRNc&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=3"
        },
        {
          text: "The dedicated instructors, comprehensive study materials, and interactive learning environment helped me achieve my desired score. I highly recommend it to anyone looking to excel in the IELTS exam",
          userName: "Ranmina Navoth",
          userRole: "IELTS",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Ranmina.PNG?updatedAt=1751604753181',
          link: "https://www.youtube.com/watch?v=5a-CoElEByk&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=4"
        },
        {
          text: "I prefer to recommend the IELTS Fast Track programm in Ambalangoda CCBE as the better place to boots the band who wish to sit the IELTS examination.",
          userName: "Prabhashini Chathurika",
          userRole: "IELTS",
          userAvatar: StudentIcon,
          link: "https://www.youtube.com/watch?v=16SXO8RDb4k&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=5"
        },
        {
          text: "During the course we were able to do lot of activities in English and we could in our four language skills such as reading,writing listning & speaking the evolutions.",
          userName: "Kushani Umanda",
          userRole: "IKEY002",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Kushani.PNG?updatedAt=1751604753146',
          link: "https://www.youtube.com/watch?v=-nBqEGHpnQs&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=6"
        },
        {
          text: "I wanted to improve my speaking skills as I'm expecting to go abroad for my highest studies at CCBE. I was given the best guidance we learn in a stressfree environment.",
          userName: "Jayani Bawathma",
          userRole: "IKF004",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Jayani.PNG?updatedAt=1751604753246',
          link: "https://www.youtube.com/watch?v=iN5WZINOmrk&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=7"
        },
        {
          text: "We could learn and make learned language skills through various academic activities the students entered classrooms help us to improve our confidence in English.",
          userName: "Vinuji Mallawa Arachchi",
          userRole: "IPET002",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Vinuji.PNG?updatedAt=1751604753245',
          link: "https://www.youtube.com/watch?v=ZEyR-mUGTAs&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=8"
        },
        {
          text: "End of the course I faced Cambridge assessment exams confidently. Thanks to all the preparation sessions. I would really recommend CCBE to anyone out there come joing CCBE without hesitation.",
          userName: "Naduni Abeynayaka",
          userRole: "FCE Intake",
          userAvatar: 'https://ik.imagekit.io/u3wbiya66/Testi/Naduni.PNG?updatedAt=1751604753158',
          link: "https://www.youtube.com/watch?v=Lsl_qzKhMjY&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=9"
        },
      ],
      videos: [
        {
          link: "https://www.youtube.com/embed/uSr4JjCtge4?si=64lVPGcTuj4s4C-K",
        },
        {
          link: "https://www.youtube.com/embed/V_riM5h2pOQ?si=LufQypwbQLuMPFF1",
        },
        {
          link: "https://www.youtube.com/embed/uTyP39sO-Q0?si=OvU_rVvdvIeGqNOV",
        },
      ],
    };
  },
  computed: {
    visibleTestimonials() {
      const start = this.currentSlide;
      const end = start + this.testimonialsPerPage;
      return this.testimonials.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.testimonials.length / this.testimonialsPerPage);
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.testimonials.length - this.testimonialsPerPage) {
        this.currentSlide += this.testimonialsPerPage;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide -= this.testimonialsPerPage;
      } else {
        this.currentSlide = this.testimonials.length - this.testimonialsPerPage;
      }
    },
    goToPage(page) {
      this.currentSlide = (page - 1) * this.testimonialsPerPage;
    },
    updateTestimonialsPerPage() {
      const width = window.innerWidth;
      if (width < 768) {
        this.testimonialsPerPage = 1;
      } else if (width < 1024) {
        this.testimonialsPerPage = 2;
      } else {
        this.testimonialsPerPage = 3;
      }
      // Reset current slide if it's out of bounds
      if (this.currentSlide >= this.testimonials.length) {
        this.currentSlide = 0;
      }
    }
  },
  mounted() {
    AOS.init();
    this.updateTestimonialsPerPage();
    window.addEventListener('resize', this.updateTestimonialsPerPage);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateTestimonialsPerPage);
  }
};
</script>

<style scoped>
.testimonials-page {
  background: linear-gradient(135deg, white 0%, white 100%);
  min-height: 100vh;
  color: #ffffff;
}

.main-container {
  background: transparent;
  padding: 1rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* Header Section */
.header-section {
  text-align: center;
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
}

.intro-text {
  /* font-family: 'Inter', sans-serif; */
  font-size: 1.1rem;
  line-height: 1.7;
  color: #6c757d;;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

/* Testimonials Section */
.testimonials-section {
  padding: 1rem 0;
}

.carousel-container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.testimonials-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  width: 100%;
}

.testimonials-grid {
  display: grid;
  gap: 2rem;
  flex: 1;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
}

/* Navigation Buttons */
.nav-button {
  background: linear-gradient(135deg, white 0%, white 100%);
  border: 2px solid #333;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: black;
  flex-shrink: 0;
  font-size: 1.5rem;
  padding: 0;
  outline: none;
}

.nav-button:hover {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  border-color: #FFD700;
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.nav-icon {
  font-size: 2rem;
  line-height: 1;
  display: block;
  margin-top: -2px;
}

/* Testimonial Card */
.testimonial-card {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  border: 2px solid #333;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 500px;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.testimonial-card:hover::before {
  left: 100%;
}

.testimonial-card:hover {
  transform: translateY(-15px);
  border-color: #FFD700;
  box-shadow: 0 25px 50px rgba(255, 215, 0, 0.25);
}

/* Image Container */
.image-container {
  position: relative;
  overflow: hidden;
  height: 200px;
  flex-shrink: 0;
}

.testimonial-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.testimonial-card:hover .testimonial-avatar {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 165, 0, 0.9) 100%);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
}

.overlay-icon {
  font-size: 1.2rem;
  display: block;
}

.overlay-text {
  /* font-family: 'Inter', sans-serif; */
  font-size: 0.8rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
}

/* Card Content */
.card-content {
  padding: 2rem;
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.testimonial-badge {
  /* font-family: 'Inter', sans-serif; */
  font-size: 0.8rem;
  font-weight: 700;
  color: #FFD700;
  background: rgba(255, 215, 0, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 15px;
  display: inline-block;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  align-self: flex-start;
}

.testimonial-title {
  /* font-family: 'Inter', sans-serif; */
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 1rem;
  min-height: 3.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.testimonial-text {
  /* font-family: 'Inter', sans-serif; */
  font-size: 0.95rem;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 0;
  flex: 1;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Card Actions */
.card-actions {
  padding: 0 2rem 2rem;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}

.learn-more-btn {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #000000;
  font-weight: 600;
  /* font-family: 'Inter', sans-serif; */
  border: 2px solid transparent;
  border-radius: 25px;
  padding: 0.75rem 2rem;
  text-transform: none;
  transition: all 0.3s ease;
  min-width: 160px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
}

.learn-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.4);
  border-color: #FFD700;
}

.btn-icon {
  font-size: 1rem;
  display: block;
}

/* Pagination Dots */
.pagination-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.pagination-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #333;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  padding: 0;
  outline: none;
}

.pagination-dot.active {
  background: #FFD700;
  transform: scale(1.2);
  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.3);
}

.pagination-dot:hover {
  background: #FFA500;
}

/* Video Section */
.video-section {
  padding: 4rem 0;
  text-align: center;
}

.section-title {
  /* font-family: 'Inter', 'Poppins', sans-serif; */
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.highlight {
  background: linear-gradient(135deg, #ff6b35 0%, #ff6b35 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

/* .highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FFD700, transparent);
  opacity: 0.7;
} */

.section-subtitle {
  /* font-family: 'Inter', sans-serif; */
  font-size: 1.1rem;
  color: #6c757d;;
  margin-bottom: 3rem;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
  max-width: 1200px;
}

.video-card {
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
  border: 2px solid #333;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  height: 100%;
}

.video-card:hover {
  transform: translateY(-10px);
  border-color: #FFD700;
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
}

.video-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
  transition: transform 0.4s ease;
}

.video-card:hover .video-iframe {
  transform: scale(1.05);
}

/* Floating Animation */
.testimonial-card, .video-card {
  animation: float 6s ease-in-out infinite;
}

.testimonial-card:nth-child(odd), .video-card:nth-child(odd) {
  animation-delay: 0s;
}

.testimonial-card:nth-child(even), .video-card:nth-child(even) {
  animation-delay: 1.5s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.testimonial-card:hover, .video-card:hover {
  animation: none;
}

/* Additional Effects */
.testimonial-card::after, .video-card::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
  border-radius: 22px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.testimonial-card:hover::after, .video-card:hover::after {
  opacity: 0.3;
}

/* ==================== RESPONSIVE DESIGN ==================== */

/* Large Desktop (1200px and above) */
@media (min-width: 1200px) {
  .main-container {
    padding: 0 1rem 1rem;
  }
  
  .testimonials-grid {
    gap: 2.5rem;
  }
  
  .carousel-container {
    padding: 0 2rem;
  }
}

/* Desktop (1024px - 1199px) */
@media (max-width: 1199px) and (min-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .testimonial-title {
    font-size: 1.3rem;
    min-height: 3.2rem;
  }
  
  .testimonial-text {
    font-size: 0.9rem;
  }
}

/* Tablet Landscape (768px - 1023px) */
@media (max-width: 1023px) and (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .videos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .nav-button {
    width: 50px;
    height: 50px;
  }
  
  .intro-text {
    font-size: 1.1rem;
    padding: 0 1rem;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .testimonial-title {
    font-size: 1.2rem;
    min-height: auto;
    -webkit-line-clamp: 2;
  }
  
  .testimonial-text {
    font-size: 0.9rem;
    -webkit-line-clamp: 5;
  }
  
  .video-container {
    height: 220px;
  }
}

/* Tablet Portrait (600px - 767px) */
@media (max-width: 767px) and (min-width: 600px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .videos-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonials-carousel {
    gap: 0.5rem;
  }
  
  .nav-button {
    width: 45px;
    height: 45px;
  }
  
  .intro-text {
    font-size: 1rem;
    padding: 0;
    text-align: center;
  }
  
  .header-section {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .card-content {
    padding: 1.25rem;
  }
  
  .testimonial-title {
    font-size: 1.1rem;
    min-height: auto;
  }
  
  .testimonial-text {
    font-size: 0.85rem;
    -webkit-line-clamp: 4;
  }
  
  .card-actions {
    padding: 0 1.25rem 1.25rem;
  }
  
  .learn-more-btn {
    padding: 0.6rem 1.5rem;
    min-width: 140px;
    font-size: 0.9rem;
  }
  
  .video-container {
    height: 200px;
  }
  
  .image-container {
    height: 180px;
  }
}

/* Mobile (480px - 599px) */
@media (max-width: 599px) and (min-width: 480px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .videos-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-carousel {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
    order: 2;
  }
  
  .nav-left, .nav-right {
    position: static;
    transform: none;
  }
  
  .intro-text {
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.6;
  }
  
  .header-section {
    padding: 1.5rem 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 0.95rem;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .testimonial-title {
    font-size: 1.1rem;
    min-height: auto;
  }
  
  .testimonial-text {
    font-size: 0.85rem;
    -webkit-line-clamp: 5;
  }
  
  .card-actions {
    padding: 0 1rem 1rem;
  }
  
  .learn-more-btn {
    padding: 0.5rem 1.25rem;
    min-width: 130px;
    font-size: 0.85rem;
  }
  
  .video-container {
    height: 180px;
  }
  
  .image-container {
    height: 160px;
  }
  
  .carousel-container {
    padding: 0 0.5rem;
  }
}

/* Small Mobile (below 480px) */
@media (max-width: 479px) {
  .main-container {
    padding: 1rem 0.5rem;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .videos-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .testimonials-carousel {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  .nav-button {
    width: 35px;
    height: 35px;
    order: 2;
  }
  
  .nav-icon {
    font-size: 1.5rem;
  }
  
  .intro-text {
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.5;
  }
  
  .header-section {
    padding: 1rem 0;
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .section-subtitle {
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }
  
  .testimonial-card {
    min-height: 450px;
    border-radius: 15px;
  }
  
  .card-content {
    padding: 0.75rem;
  }
  
  .testimonial-badge {
    font-size: 0.75rem;
    padding: 0.3rem 0.75rem;
  }
  
  .testimonial-title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
  
  .testimonial-text {
    font-size: 0.8rem;
    line-height: 1.5;
    -webkit-line-clamp: 6;
  }
  
  .card-actions {
    padding: 0 0.75rem 0.75rem;
  }
  
  .learn-more-btn {
    padding: 0.4rem 1rem;
    min-width: 120px;
    font-size: 0.8rem;
    border-radius: 20px;
  }
  
  .video-container {
    height: 160px;
  }
  
  .image-container {
    height: 140px;
  }
  
  .card-overlay {
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.3rem 0.75rem;
  }
  
  .overlay-text {
    font-size: 0.7rem;
  }
  
  .pagination-dots {
    gap: 8px;
    margin-top: 1.5rem;
  }
  
  .pagination-dot {
    width: 10px;
    height: 10px;
  }
}

/* Extra Small Mobile (below 360px) */
@media (max-width: 359px) {
  .main-container {
    padding: 0.5rem;
  }
  
  .intro-text {
    font-size: 0.85rem;
    text-align: center;
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .testimonial-card {
    min-height: 420px;
  }
  
  .testimonial-title {
    font-size: 0.95rem;
  }
  
  .testimonial-text {
    font-size: 0.78rem;
  }
  
  .video-container {
    height: 140px;
  }
  
  .image-container {
    height: 120px;
  }
}

/* Hide navigation buttons on very small screens when only one card is shown */
@media (max-width: 479px) {
  .testimonials-carousel {
    position: relative;
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  .nav-left {
    left: 0.5rem;
  }
  
  .nav-right {
    right: 0.5rem;
  }
}

/* Ensure proper spacing for video grid on mobile */
@media (max-width: 599px) {
  .videos-grid {
    gap: 1rem;
    padding: 0 0.5rem;
  }
}

/* Improve touch targets for mobile */
@media (max-width: 767px) {
  .nav-button,
  .pagination-dot,
  .learn-more-btn {
    min-height: 44px;
    min-width: 44px;
  }
  
  .pagination-dot {
    min-height: 12px;
    min-width: 12px;
  }
}
</style>
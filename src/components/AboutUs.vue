<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
        <img :src="logo" alt="Company Logo" width="200" height="150" id="logo">
      </div>
      <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">ABOUT <span class="highlight">CCBE</span>
      </h1>
      <br>

      <!-- Intro: image left, text right -->
      <div class="center-container">
        <div class="row intro-grid">
          <div class="intro-image-wrap" data-aos="fade-right" data-aos-duration="1500">
            <img class="center-image" data-aos="zoom-out" data-aos-duration="2000" src="https://ik.imagekit.io/u3wbiya66/Board.jpg?updatedAt=1737883142390" alt="Board">
          </div>
          <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
            Established on September 3rd, 2015, our institution proudly functions as a distinguished
            Cambridge English
            Exam Preparation Centre (CELA Centre). Recognized as a designated Cambridge Qualifications
            registration
            center for the esteemed British Council in Colombo, Sri Lanka, we specialize in facilitating
            University of
            Cambridge Examinations.
            With a steadfast commitment to academic excellence, we provide comprehensive and tailored
            preparatory
            programs to empower individuals seeking success in Cambridge English exams. Our longstanding
            association
            with the British Council underscores our dedication to upholding the highest standards in
            education,
            ensuring that our students are well-equipped to excel in their academic pursuits.
          </p>
        </div>
      </div>

      <!-- Quick facts band -->
      <div class="stats-strip" data-aos="fade-up" data-aos-duration="1500">
        <div class="stat-item">
          <span class="stat-value">2015</span>
          <span class="stat-label">Established</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ offices.length }}</span>
          <span class="stat-label">Branches</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">CELA</span>
          <span class="stat-label">Cambridge English Centre</span>
        </div>
      </div>

      <div class="divider"></div>

      <!-- FIXED: Vision & Mission Title - Now properly centered -->
      <div class="vision-mission-title">
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
          <span class="highlight">OUR VISION</span> & <span class="highlight">OUR MISSION</span>
        </h1>
      </div>
    </div>
    
    <div class="parallax-section">
      <div class="parallax-content">
        <p class="paragraph mt-2 ml-1 mr-1" data-aos="fade-up" data-aos-duration="3000">
          <b>Our Mission </b>is to excel as a premier Cambridge English Assessment preparation center in Sri Lanka. We are dedicated to providing an exceptional learning experience, fostering language proficiency, critical thinking, and global awareness. Through innovative teaching and a commitment to student success, we aim to be the preferred choice for effective Cambridge English Assessment preparation, making a lasting impact on our students' academic and personal growth.
        </p>
        <br>

        <div class="content">
          <p class="paragraph mt-2 ml-1 mr-1" data-aos="fade-up" data-aos-duration="3000">
            <b>Our Vision </b>is to lead as the top Cambridge English Assessment preparation center in Sri Lanka, dedicated to fostering excellence in language proficiency and academic success. We aim to provide an inspiring learning environment, utilizing innovative teaching methods and resources to empower students for success in a globalized world.
          </p>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="divider"></div>
      <br>
      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        OUR <span class="highlight mt-3">BRANCH NETWORK</span>
      </h1>

      <!-- Branch network: map left, details + branch list right -->
      <div class="branch-layout mt-3">

        <div class="center-container-Branch">
  <!-- Image Container -->
  <div class="image-container">

    <!-- Main Image -->
    <img
      data-aos="zoom-out"
      data-aos-duration="2000"
      width="390"
      height="490"
      :src="branchImage"
      alt="Branch Network"
      class="branch-map"
    />

    <!-- Ambalangoda -->
    <div
      class="point"
      :style="{ top: '74.5%', left: '36%' }"
      @click="navigateTo('/about/ambalangoda')"
    >
      <span class="point-tooltip">
        Ambalangoda College
      </span>
    </div>

    <!-- Galle -->
    <div
      class="point"
      :style="{ top: '82%', left: '42%' }"
      @click="navigateTo('/about/galle')"
    >
      <span class="point-tooltip">
        Galle College
      </span>
    </div>

    <!-- Matara -->
    <div
      class="point"
      :style="{ top: '81%', left: '57%' }"
      @click="navigateTo('/about/matara')"
    >
      <span class="point-tooltip">
        Matara College
      </span>
    </div>

    <!-- Piliyandala -->
    <div
      class="point"
      :style="{ top: '64.8%', left: '36.5%' }"
      @click="navigateTo('/about/piliyandala')"
    >
      <span class="point-tooltip">
        Piliyandala College
      </span>
    </div>

    <!-- Horana -->
    <div
      class="point"
      :style="{ top: '68.5%', left: '34%' }"
      @click="navigateTo('/about/horana')"
    >
      <span class="point-tooltip">
        Horana College
      </span>
    </div>

    <!-- Kalutara -->
    <div
      class="point"
      :style="{ top: '65%', left: '30.5%' }"
      @click="navigateTo('/about/kalutara')"
    >
      <span class="point-tooltip">
        Kalutara College
      </span>
    </div>

    <!-- Matugama -->
    <div
      class="point"
      :style="{ top: '68.5%', left: '38.5%' }"
      @click="navigateTo('/about/matugama')"
    >
      <span class="point-tooltip">
        Matugama College
      </span>
    </div>

    <!-- Beliatta -->
    <div
      class="point"
      :style="{ top: '75.5%', left: '72%' }"
      @click="navigateTo('/about/beliatta')"
    >
      <span class="point-tooltip">
        Beliatta College
      </span>
    </div>

  </div>
        </div>

        <div class="branch-side">
          <div v-if="selectedOffice" class="text-center">
            <h3>{{ selectedOffice.name }}</h3>
            <p>{{ selectedOffice.address }}</p>
            <p><a
                :href="'tel:' + selectedOffice.phone.split('/')[0].replace(/\s/g,'')"
                class="branch-card-phone"
                >
                {{ selectedOffice.phone }}
                </a>
            </p>
            <!-- Only show the second number when one exists -->
            <p v-if="selectedOffice.phone1"><a
                :href="'tel:' + selectedOffice.phone1.split('/')[0].replace(/\s/g,'')"
                class="branch-card-phone"
                >
                {{ selectedOffice.phone1 }}
                </a>
            </p>
          </div>
          <div v-else class="branch-hint">
            Select a branch to see its address and phone number.
          </div>

          <div class="office-buttons">
            <button 
              v-for="(office, index) in offices" 
              :key="index" 
              data-aos="zoom-out" 
              data-aos-duration="2000" 
              class="office-btn" 
              :class="{ active: selectedOffice && selectedOffice.name === office.name }"
              @click="selectOffice(office)"
            >
              {{ office.name }}
            </button>
          </div>
        </div>

      </div>
      <div class="divider"></div>
    </div>
    <!-- ── Back to Home Link ── -->
      <div class="home-link-section" data-aos="fade-up" data-aos-duration="1500">
        <p>Looking for something else?</p>
        <a href="/" class="home-link-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
          Back to Home
        </a>
        <div class="quick-nav-links">
          <a href="/courses" class="qnl">Our Programmes</a>
          <!-- <a href="/about" class="qnl">About CCBE</a> -->
          <a href="/news" class="qnl">News & Events</a>
          <a href="/corevalues" class="qnl">Core Values</a>
        </div>
      </div>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterPage from './FooterPage.vue'
import ChatBot from './ChatBot.vue';
import ArrowButton from './ArrowButton.vue';
// AOS Transition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'AboutPage',
  components: {
    NavBar,
    FooterPage,
    ChatBot,
    ArrowButton
  },
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
  },
  methods: {
    selectOffice(office) {
      this.selectedOffice = office;
    },
    navigateTo(link) {
      console.log('Navigating to:', link);
      if (link) {
        this.$router.push(link);
      } else {
        console.warn("No link provided for this point.");
      }
    },
  },
  data() {
    return {
      logo: require('@/assets/Logo.png'),
      branchImage: require('@/assets/Branch_Network2.png'),
      offices: [
        {
          name: "Galle College",
          address: "No 118, Old Matara Rd, Galle, 80000",
          phone: "+94 91 223 7373",
          phone1: ""
        },
        {
          name: "Ambalangoda College",
          address: "No 97, New Rd, Ambalangoda, 80300",
          phone: "+94 91 225 2452",
          phone1: ""
        },
        {
          name: "Matara College",
          address: "No 352, Kumarathunga Mw, Matara, 81000",
          phone: "+94 41 205 0200",
          phone1: ""
        },
        {
          name: "Piliyandala College",
          address: "No 119, Moratuwa Rd, Suwarapola, Piliyandala, 10300",
          phone: "+94 11 218 0008",
          phone1: ""
        },
        {
          name: "Horana College",
          address: "No 149, Graceland Circular Rd, Horana, 12400",
          phone: "+94 34 220 5503",
          phone1: ""
        },
        {
          name: "Kalutara College",
          address: "No 85, Maha Waskaduwa, Waskaduwa, 12580",
          phone: "+94 34 212 1210",
          phone1: ""
        },
        {
          name: "Matugama College",
          address: "No 57/D, Aluthgama Rd, Matugama, 12100",
          phone: "+94 34 212 1477",
          phone1: "+94 70 506 0666",
        },
        {
          name: "Beliatta College",
          address: "Opposite Bus Stand, No 50 Tangalle Rd, Beliatta 82400",
          phone: "+94 47 225 2175",
          phone1: "",
        },
      ],
      selectedOffice: null,
    }
  }
}
</script>

<style scoped>
/* Container (no page background is set anywhere in this file) */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Row */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

/* Title: centred with a short line on each side */
.title {
  color: #FBB700;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  letter-spacing: 1px;
}

.title::before,
.title::after {
  content: '';
  display: inline-block;
  width: 60px;
  height: 3px;
  border-radius: 3px;
  vertical-align: middle;
  margin: 0 16px;
  background: linear-gradient(90deg, #FBB700, #FF5F15);
}

.title::before {
  background: linear-gradient(270deg, #FBB700, #FF5F15);
}

.highlight {
  color: #FF5F15;
}

/* FIX: Special container for Vision & Mission title to ensure centering */
.vision-mission-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}

.vision-mission-title .title {
  text-align: center;
  display: inline-block;
}

/* Margin Utilities */
.mt-2 { margin-top: 0.5rem !important; }
.mt-3 { margin-top: 1rem !important; }
.mt-5 { margin-top: 3rem !important; }
.ml-1 { margin-left: 0.25rem !important; }
.mr-1 { margin-right: 0.25rem !important; }
.mb-1 { margin-bottom: 0.25rem !important; }

/* Paragraph */
.paragraph {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  text-align: justify;
  line-height: 1.6;
}

#logo {
  display: block;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.center-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

/* Intro split layout */
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin: 0;
  width: 100%;
}

.intro-image-wrap {
  position: relative;
}

/* Offset frame behind the image */
.intro-image-wrap::before {
  content: '';
  position: absolute;
  top: 18px;
  left: -18px;
  right: 18px;
  bottom: -18px;
  border: 3px solid #FBB700;
  border-radius: 14px;
  z-index: 0;
}

.center-image {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 14px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
}

.intro-grid .paragraph {
  margin: 0 !important;
  text-align: left;
  font-size: 18px;
  line-height: 1.8;
  padding-left: 22px;
  border-left: 4px solid #FF5F15;
}

/* Quick facts band */
.stats-strip {
  display: flex;
  justify-content: center;
  margin-top: 56px;
  border-top: 2px solid #FBB700;
  border-bottom: 2px solid #FBB700;
}

.stat-item {
  flex: 1;
  text-align: center;
  padding: 24px 12px;
}

.stat-item + .stat-item {
  border-left: 1px solid rgba(251, 183, 0, 0.5);
}

.stat-value {
  display: block;
  font-size: 2.2rem;
  font-weight: 800;
  color: #FF5F15;
}

.stat-label {
  display: block;
  margin-top: 4px;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

/* Divider */
.divider {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
  margin: 2rem 0;
  width: 100%;
}

/* Parallax Section */
.parallax-section {
  background-image: url('@/assets/BC1.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.parallax-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Mission and Vision side by side */
.parallax-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  align-items: stretch;
}

.parallax-content br {
  display: none;
}

.parallax-content .content {
  display: flex;
}

.parallax-content .paragraph {
  color: white;
  background-color: rgba(89, 79, 0, 0.6);
  padding: 28px;
  border-radius: 5px;
  border-top: 5px solid #FBB700;
  margin: 0 !important;
  width: 100%;
  text-align: left;
  font-size: 18px;
}

.parallax-content .paragraph b {
  display: block;
  color: #FFD54A;
  font-size: 1.4em;
  margin-bottom: 10px;
}

/* Branch network layout */
.branch-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.center-container-Branch {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

/* Image Container for Branch Network */
.image-container {
  position: relative;
  width: 390px;
  height: 490px;
  margin: 0 auto;
}

.branch-map {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Points for interactive map */
.point {
  position: absolute;
  width: 28px;
  height: 28px;

  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Main yellow dot */
.point::before {
  content: '';
  position: absolute;

  width: 15px;
  height: 15px;

  background-color: rgb(255, 230, 0);
  border-radius: 50%;

  box-shadow: 0 0 18px rgba(255, 230, 0, 0.9);

  animation: pulse-grow 2s infinite;
}

/* Glow wave effect */
.point::after {
  content: '';
  position: absolute;

  width: 15px;
  height: 15px;

  border: 2px solid rgba(255, 243, 7, 0.889);
  border-radius: 50%;

  animation: wave 2s infinite;
}

/* Tooltip beside point */
.point-tooltip {
  position: absolute;

  left: 30px;
  top: 50%;

  transform: translateY(-50%);

  background-color: white;
  color: black;

  padding: 10px 18px;

  border: 2px solid #222;
  border-radius: 4px;

  font-size: 14px;
  font-weight: 500;

  white-space: nowrap;

  opacity: 0;
  visibility: hidden;

  transition: all 0.25s ease;

  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}

/* Show tooltip on hover */
.point:hover .point-tooltip {
  opacity: 1;
  visibility: visible;
}

/* Tooltip */
.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 100;
  white-space: nowrap;
  pointer-events: none;
  transform: translateX(-50%);
}

/* Right column: details card + branch list */
.branch-side {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.branch-hint {
  padding: 18px 20px;
  border: 2px dashed rgba(251, 183, 0, 0.7);
  border-radius: 10px;
  color: #777;
  text-align: center;
  font-size: 0.95rem;
}

/* Office Buttons: vertical list */
.office-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
}

.office-btn {
  padding: 12px 24px;
  background-color: transparent;
  color: black;
  border: 2px solid #FBB700;
  border-left-width: 8px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  text-align: left;
}

.office-btn:hover {
  background-color: #FBB700;
  color: white;
  transform: translateX(6px);
  box-shadow: 0 4px 8px rgba(251, 183, 0, 0.3);
}

.office-btn.active {
  background-color: #FF5F15;
  border-color: #FF5F15;
  color: white;
}

.office-btn:active {
  transform: translateX(0);
}

.office-btn:focus {
  outline: 2px solid #FBB700;
  outline-offset: 2px;
}

/* Selected office details card */
.text-center {
  text-align: left;
  padding: 22px 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 6px solid #FF5F15;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  animation: card-in 0.35s ease;
}

.text-center h3 { color: #FBB700; margin-bottom: 10px; }
.text-center p  { color: #555; margin: 5px 0; font-size: 1rem; }

.branch-card-phone {
  color: #FF5F15;
  font-weight: 600;
  text-decoration: none;
}

.branch-card-phone:hover {
  text-decoration: underline;
}

/* ── Back to Home ───────────────────────────────── */
.home-link-section {
  text-align: center;
  padding: 32px 0 16px;
}

.home-link-section > p {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 12px;
}

.home-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 28px;
  background: #FBB700;
  color: #fff;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(251,183,0,0.3);
}

.home-link-btn:hover {
  background: #e0a500;
  transform: translateY(-2px);
}

.quick-nav-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.qnl {
  font-size: 0.85rem;
  color: #FF5F15;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 14px;
  border: 1px solid rgba(255,95,21,0.25);
  border-radius: 30px;
  transition: all 0.25s;
}

.qnl:hover {
  background: #FF5F15;
  color: #fff;
  border-color: #FF5F15;
}

/* Animations */
@keyframes pulse-grow {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes wave {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(3);
  }
}

@keyframes card-in {
  from { opacity: 0; transform: translateX(12px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (prefers-reduced-motion: reduce) {
  .text-center { animation: none; }
}

/* Responsive Styles */
@media (max-width: 992px) {
  .intro-grid,
  .branch-layout,
  .parallax-content {
    grid-template-columns: 1fr;
  }

  .intro-grid {
    gap: 40px;
  }

  .intro-image-wrap {
    padding: 0 18px 18px 18px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
  
  .title {
    font-size: 1.75rem;
  }

  .title::before,
  .title::after {
    width: 30px;
    margin: 0 8px;
  }
  
  .paragraph {
    font-size: 18px;
  }
  
  .center-image {
    max-width: 100%;
  }
  
  .image-container {
    width: 300px;
    height: 385px;
  }
  
  .parallax-section {
    min-height: 450px;
    background-attachment: scroll;
  }
  
  .parallax-content {
    padding: 1rem;
  }
  
  .office-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }

  .title::before,
  .title::after {
    display: none;
  }
  
  .paragraph {
    font-size: 16px;
  }
  
  .image-container {
    width: 250px;
    height: 320px;
  }
  
  #logo {
    width: 150px;
    height: auto;
  }

  .stat-item {
    padding: 16px 6px;
  }

  .stat-value {
    font-size: 1.5rem;
  }
}
</style>
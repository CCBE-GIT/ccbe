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
      <div class="center-container">
        <div class="row">
          <img class="center-image" data-aos="zoom-out" data-aos-duration="2000" src="https://ik.imagekit.io/u3wbiya66/Board.jpg?updatedAt=1737883142390" alt="Board">
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

      <div class="center-container-Branch mt-3">
        <!-- Image Container -->
        <div class="image-container">
          <!-- Main Image -->
          <img data-aos="zoom-out" data-aos-duration="2000" width="390" height="490" :src="branchImage" alt="Branch Network" class="branch-map">
          
          <!-- Interactive Points -->
          <div class="point" :style="{ top: '73%', left: '34%' }" @click="navigateTo('/about/ambalangoda')" @mouseenter="showTooltip($event, 'Ambalangoda College')" @mouseleave="hideTooltip()"></div>
          <div class="point" :style="{ top: '80.5%', left: '40%' }" @click="navigateTo('/about/galle')" @mouseenter="showTooltip($event, 'Galle College')" @mouseleave="hideTooltip()"></div>
          <div class="point" :style="{ top: '79%', left: '55%' }" @click="navigateTo('/about/matara')" @mouseenter="showTooltip($event, 'Matara College')" @mouseleave="hideTooltip()"></div>
          <div class="point" :style="{ top: '63%', left: '35%' }" @click="navigateTo('/about/piliyandala')" @mouseenter="showTooltip($event, 'Piliyandala College')" @mouseleave="hideTooltip()"></div>
          <div class="point" :style="{ top: '67%', left: '32.5%' }" @click="navigateTo('/about/horana')" @mouseenter="showTooltip($event, 'Horana College')" @mouseleave="hideTooltip()"></div>
          <div class="point" :style="{ top: '63.5%', left: '28.5%' }" @click="navigateTo('/about/kalutara')" @mouseenter="showTooltip($event, 'Kalutara College')" @mouseleave="hideTooltip()"></div>
        </div>
        
        <!-- Tooltip -->
        <div v-if="tooltipVisible" class="tooltip" :style="{ top: tooltipTop + 'px', left: tooltipLeft + 'px' }">
          {{ tooltipText }}
        </div>
      </div>
      
      <div v-if="selectedOffice" class="text-center mt-5">
        <h3>{{ selectedOffice.name }}</h3>
        <p>{{ selectedOffice.address }}</p>
        <p>{{ selectedOffice.phone }}</p>
      </div>
      
      <div>
        <div class="office-buttons">
          <button 
            v-for="(office, index) in offices" 
            :key="index" 
            data-aos="zoom-out" 
            data-aos-duration="2000" 
            class="office-btn" 
            @click="selectOffice(office)"
          >
            {{ office.name }}
          </button>
        </div>
      </div>
      <div class="divider"></div>
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
    showTooltip(event, text) {
      this.tooltipText = text;
      this.tooltipVisible = true;
      this.tooltipTop = event.target.getBoundingClientRect().top + window.scrollY - 40;
      this.tooltipLeft = event.target.getBoundingClientRect().left + window.scrollX;
    },
    hideTooltip() {
      this.tooltipVisible = false;
    }
  },
  data() {
    return {
      logo: require('@/assets/Logo.png'),
      branchImage: require('@/assets/Branch_Network.png'),
      offices: [
        {
          name: "Galle College",
          address: "118, Old Matara Rd, Galle, 80000",
          phone: "+94 91 22 37373"
        },
        {
          name: "Ambalangoda College",
          address: "No 97, New Rd, Ambalangoda, 80300",
          phone: "+94 91 2252 452"
        },
        {
          name: "Matara College",
          address: "No 352, Kumarathunga Mw, Matara, 81000",
          phone: "+94 41 2050 200"
        },
        {
          name: "Piliyandala College",
          address: "No Moratuwa Rd, Suwarapola, Piliyandala, 10300",
          phone: "+94 11 2 180 008"
        },
        {
          name: "Horana College",
          address: "No 149, Graceland Circular Rd, Horana, 12400",
          phone: "+94 2 180 008"
        },
        {
          name: "Kalutara College",
          address: "No 85, Maha Waskaduwa, 12580",
          phone: "0342 121 210"
        },
      ],
      selectedOffice: null,
      tooltipVisible: false,
      tooltipText: '',
      tooltipTop: 0,
      tooltipLeft: 0
    }
  }
}
</script>

<style scoped>
/* Container */
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

/* Title */
.title {
  color: #FBB700;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
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

.center-image {
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  display: block;
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

.parallax-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.parallax-content .paragraph {
  color: white;
  background-color: rgba(89, 79, 0, 0.6);
  padding: 20px;
  border-radius: 5px;
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
  width: 15px;
  height: 15px;
  background-color: rgb(255, 230, 0);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
  animation: pulse-grow 2s infinite;
  box-shadow: 0 0 10px rgba(255, 230, 0, 0.8);
}

.point::before,
.point::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 243, 7, 0.889);
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: scale(1);
  animation: wave 2s infinite;
}

.point::after {
  animation-delay: 1s;
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

/* Office Buttons */
.office-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 1.5rem 0 3rem;
}

.office-btn {
  padding: 12px 24px;
  background-color: transparent;
  color: black;
  border: 2px solid #FBB700;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.office-btn:hover {
  background-color: #FBB700;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(251, 183, 0, 0.3);
}

.office-btn:active {
  transform: translateY(0);
}

.office-btn:focus {
  outline: 2px solid #FBB700;
  outline-offset: 2px;
}

.text-center {
  text-align: center;
}

.text-center h3 {
  color: #333;
  margin-bottom: 10px;
}

.text-center p {
  color: #666;
  margin-bottom: 5px;
}

.center-container-Branch {
  position: relative;
  width: 100%;
  margin: 0 auto;
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

/* Responsive Styles */
@media (max-width: 768px) {
  .container {
    padding: 0 10px;
  }
  
  .title {
    font-size: 1.75rem;
  }
  
  .paragraph {
    font-size: 18px;
    padding: 0 10px;
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
  
  .office-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .office-btn {
    width: 90%;
    max-width: 300px;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
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
}
</style>
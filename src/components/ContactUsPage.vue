<template>
  <div>
    <NavBar></NavBar>
    <div class="container">

      <div class="logo-container" data-aos="zoom-in-up" data-aos-duration="2000">
        <img :src="logo" alt="Company Logo" width="200" height="150" id="logo">
      </div>

      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        CONTACT <span class="highlight">US</span>
      </h1>

      <h4 class="subtitle" data-aos="fade-up" data-aos-duration="2000">
        At the heart of our commitment to communication and service lies our dedication to ensuring every interaction is meaningful, responsive, and supportive.
      </h4>

      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        OUR <span class="highlight">BRANCH NETWORK</span>
      </h1>

      <div class="center-container-Branch">
        <!-- Image Container -->
        <div class="image-container">
          <!-- Main Image -->
          <img data-aos="zoom-out" data-aos-duration="2000" width="390" height="490" :src="branchNetworkImage" alt="Branch Network" class="branch-image">
          <!-- Interactive Points -->
          <div class="point" :style="{ top: '73%', left: '34%' }" 
               @click="navigateTo('/about/ambalangoda')"
               @mouseenter="showTooltip('Ambalangoda College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Ambalangoda College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '80.5%', left: '40%' }"
               @click="navigateTo('/about/galle')"
               @mouseenter="showTooltip('Galle College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Galle College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '79%', left: '55%' }"
               @click="navigateTo('/about/matara')"
               @mouseenter="showTooltip('Matara College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Matara College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '63%', left: '35%' }"
               @click="navigateTo('/about/piliyandala')"
               @mouseenter="showTooltip('Piliyandala College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Piliyandala College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '63%', left: '28.5%' }"
               @click="navigateTo('/about/kalutara')"
               @mouseenter="showTooltip('Kalutara College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Kalutara College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '67%', left: '32.5%' }"
               @click="navigateTo('/about/horana')"
               @mouseenter="showTooltip('Horana College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Horana College'">{{ tooltipText }}</div>
          </div>
        </div>
      </div>
      
      <div v-if="selectedOffice" class="text-center">
        <h3>{{ selectedOffice.name }}</h3>
        <p>{{ selectedOffice.address }}</p>
        <p>{{ selectedOffice.phone }}</p>
      </div>

    </div>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import FooterPage from "./FooterPage.vue";
import ChatBot from "./ChatBot.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "ContactUs",
  components: {
    NavBar,
    FooterPage,
    ChatBot
  },
  data() {
    return {
      logo: require('@/assets/Logo.png'),
      branchNetworkImage: require('@/assets/Branch_Network.png'),
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
          phone: "+342 121 210"
        },
      ],
      selectedOffice: null,
      tooltipVisible: false,
      tooltipText: '',
      tooltipTimer: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    showTooltip(text) {
      this.tooltipText = text;
      clearTimeout(this.tooltipTimer);
      this.tooltipVisible = true;
    },
    hideTooltip() {
      this.tooltipTimer = setTimeout(() => {
        this.tooltipVisible = false;
      }, 100);
    },
    formatPhone(phone) {
      return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "+$1 $2 $3 $4");
    }
  },
  mounted() {
    AOS.init();
  },
  beforeUnmount() {
    clearTimeout(this.tooltipTimer);
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
}

.title {
  color: #FBB700;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
}

.highlight {
  color: #FF5F15;
}

.subtitle {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin: 20px 0;
  line-height: 1.5;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

#logo {
  display: block;
}

.center-container-Branch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 390px;
  height: 490px;
  margin: 30px auto;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.branch-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

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
  transition: transform 0.2s ease;
}

.point:hover {
  transform: translate(-50%, -50%) scale(1.3);
  box-shadow: 0 0 15px rgba(255, 230, 0, 1);
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

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  margin-bottom: 8px;
  z-index: 20;
  pointer-events: none;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

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

.text-center {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.text-center h3 {
  color: #FBB700;
  margin-bottom: 10px;
}

.text-center p {
  color: #555;
  margin: 5px 0;
  font-size: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 15px;
    padding-top: 70px;
  }
  
  .title {
    font-size: 1.8rem;
    margin-top: 20px;
  }
  
  .subtitle {
    font-size: 1.1rem;
    padding: 0 10px;
  }
  
  .center-container-Branch {
    width: 300px;
    height: 380px;
  }
  
  #logo {
    width: 180px;
    height: auto;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 10px;
    padding-top: 60px;
  }
  
  .title {
    font-size: 1.6rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .center-container-Branch {
    width: 250px;
    height: 320px;
  }
  
  #logo {
    width: 150px;
    height: auto;
  }
  
  .point {
    width: 12px;
    height: 12px;
  }
  
  .tooltip {
    font-size: 12px;
    padding: 4px 8px;
  }
}
</style>
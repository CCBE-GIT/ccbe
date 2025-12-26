<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        <span class="highlight">IELTS</span>
      </h1>
      <br />
      <h2 class="title" data-aos="fade-up" data-aos-duration="3000">
        What is <span class="highlight">IELTS?</span>
      </h2>
      <br />
      <div class="center-container">
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
          The International English Language Testing System (IELTS) is an exam that measures the language proficiency of people who want to study, work or live abroad in English speaking countries. IELTS is the standard test used for university entry in Australia, New Zealand, Canada, United Kingdom (UK) and the United States (US).
          At CCBE, we have a course to prepare you for the IELTS exams in order to gain access to international colleges or universities, improve career opportunities or for migration purposes in English-speaking countries.
        </p>
      </div>

      <br />
      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        Learning Outcomes
      </h1>
      <br />
      <div class="center-container">
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
          With IELTS you can gain access to universities or colleges, improve employment prospects or migrate to English-speaking countries throughout the world.
        </p>
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
          We can provide you with the appropriate materials to study effectively for the IELTS at a comfortable pace. <strong>Mindset for IELTS</strong> is a comprehensive course designed to develop the learner's language, vocabulary, and grammar skills in an in-depth manner.
        </p>
      </div>

      <div class="full-width-text">
        <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
          Learners can take the Cambridge English exams as they progress through this programme and upon passing, will be awarded valuable certificates that will help open doors to the best colleges, universities and careers worldwide. Starting from a basic English skill level to the highest level, these courses train students on the use of language in real life through meaningful communication. At the end of this programme, students will be able to read, write, listen and speak at a high level of English fluency.
        </p>
      </div>

      <div class="divider"></div>

      <section class="why-choose-us" style="background-color: white !important;">
        <h2 class="title" style="color: #FBB700" data-aos="fade-up" data-aos-duration="3000">
          Course Details
        </h2>
        <div class="course-details-container">
          <div class="stats-row">
            <div class="stats-col">
              <div class="custom-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="card-content">
                  <img 
                    data-aos="zoom-out" 
                    :src="require('@/assets/animation/timer.gif')"
                    alt="Timer Animation"
                    class="card-image"
                  />
                  <h5 class="card-title"><b>Course Duration</b></h5>
                  <p class="card-text">12 Months</p>
                </div>
              </div>
            </div>
            <div class="stats-col">
              <div class="custom-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="card-content">
                  <img 
                    data-aos="zoom-out" 
                    :src="require('@/assets/animation/calender.gif')"
                    alt="Calendar Animation"
                    class="card-image"
                  />
                  <h5 class="card-title"><b>Class Duration</b></h5>
                  <p class="card-text">Contact us to find out</p>
                </div>
              </div>
            </div>
            <div class="stats-col">
              <div class="custom-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="card-content">
                  <img 
                    data-aos="zoom-out" 
                    :src="require('@/assets/animation/fee.gif')"
                    alt="Fee Animation"
                    class="card-image"
                  />
                  <h5 class="card-title"><b>Course Fee</b></h5>
                  <p class="card-text">Contact us to find out</p>
                </div>
              </div>
            </div>
            <div class="stats-col">
              <div class="custom-card age-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div class="card-content">
                  <!-- IELTS Age Animation Container (16+) -->
                  <div class="ielts-age-animation">
                    <!-- Animated Number with Plus -->
                    <div class="number-plus">
                      <div class="number number-16">16</div>
                      <div class="plus-sign">+</div>
                    </div>
                    
                    <!-- Animated Year Indicator -->
                    <div class="year-indicator">
                      <div class="year-text">Years and above</div>
                      <div class="year-underline"></div>
                    </div>
                    
                    <!-- Connection Lines -->
                    <div class="connection-line line-1"></div>
                    <div class="connection-line line-2"></div>
                    <div class="connection-line line-3"></div>
                  </div>
                  
                  <h5 class="card-title"><b>Age Group</b></h5>
                  <p class="card-text">16 and above</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <div class="button-container">
        <a href="/contact" class="custom-btn-contact">
          Contact Us
        </a>
      </div>

      <div class="important-notice">
        <div class="important-header">
          <h1 style="color: red;">IMPORTANT</h1>
        </div>
        <div class="important-text">
          <h5>Before enrolling, all students will take a Placement Test to determine which course is best-suited to their level of English language proficiency.</h5>
        </div>
      </div>
    </div>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavBar from '../NavBar.vue'
import FooterPage from '../FooterPage.vue'
import ChatBot from '../ChatBot.vue';
import ArrowButton from '../ArrowButton.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'IELTSPage',
  components: {
    NavBar,
    FooterPage,
    ChatBot,
    ArrowButton
  },
  mounted() {
    window.scrollTo(0, 0);
    AOS.init();
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #FBB700;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.highlight {
  color: #FF5F15;
}

.center-container {
  width: 100%;
}

.paragraph {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 1.6;
  text-align: justify;
  color: #333;
  margin-bottom: 20px;
}

.full-width-text {
  margin: 20px 0;
}

.divider {
  height: 2px;
  background-color: #e0e0e0;
  margin: 40px 0;
  width: 100%;
}

/* Course Details */
.why-choose-us {
  margin: 40px 0;
}

.course-details-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.stats-col {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-card {
  width: 200px;
  height: 200px;
  border: 2px solid #FF5F15;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* IELTS Age Animation Specific Styles */
.age-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.age-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(255, 95, 21, 0.2);
}

.age-card:hover .ielts-age-animation .number {
  animation: numberPulse 0.5s ease;
}

.age-card:hover .ielts-age-animation .globe {
  animation: globeFloat 3s ease-in-out infinite;
}

.age-card:hover .ielts-age-animation .plus-sign {
  animation: plusSpin 1s ease;
}

.ielts-age-animation {
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}

/* Number with Plus Animation */
.number-plus {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 15px;
}

.number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: white;
  animation: numberGlow 2s infinite alternate;
}

.number-16 {
  background: linear-gradient(135deg, #FF5F15 0%, #FBB700 100%);
}

.plus-sign {
  font-size: 30px;
  font-weight: bold;
  color: #FF5F15;
  animation: plusGlow 2s infinite alternate;
}

/* Year Indicator */
.year-indicator {
  text-align: center;
  margin-bottom: 10px;
}

.year-text {
  font-size: 14px;
  font-weight: bold;
  color: #FF5F15;
  margin-bottom: 3px;
  animation: yearTextGlow 2s infinite alternate;
}

.year-underline {
  width: 80px;
  height: 2px;
  background: linear-gradient(90deg, #FF5F15, #FBB700);
  margin: 0 auto;
  border-radius: 1px;
  animation: underlinePulse 2s infinite;
}

/* Floating Globes */
.floating-globes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.globe {
  position: absolute;
  font-size: 20px;
  opacity: 0.7;
  filter: drop-shadow(0 0 3px rgba(255, 95, 21, 0.5));
}

.globe-1 {
  top: 10px;
  left: 20px;
  animation: globeFloat 4s ease-in-out infinite;
}

.globe-2 {
  top: 30px;
  right: 30px;
  animation: globeFloat 4.5s ease-in-out infinite 0.5s;
}

.globe-3 {
  bottom: 20px;
  left: 40px;
  animation: globeFloat 5s ease-in-out infinite 1s;
}

/* Connection Lines */
.connection-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, #FF5F15, transparent);
  height: 1px;
  opacity: 0.3;
}

.line-1 {
  top: 25px;
  left: 75px;
  width: 50px;
  transform: rotate(30deg);
  animation: linePulse 3s infinite;
}

.line-2 {
  top: 40px;
  left: 60px;
  width: 40px;
  transform: rotate(-15deg);
  animation: linePulse 3.5s infinite 0.3s;
}

.line-3 {
  bottom: 30px;
  right: 60px;
  width: 45px;
  transform: rotate(20deg);
  animation: linePulse 4s infinite 0.6s;
}

/* IELTS Animation Keyframes */
@keyframes numberGlow {
  0% {
    box-shadow: 0 0 5px rgba(255, 95, 21, 0.3);
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 95, 21, 0.6);
    transform: scale(1.1);
  }
}

@keyframes numberPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

@keyframes plusGlow {
  0% {
    color: #FF5F15;
    text-shadow: 0 0 5px rgba(255, 95, 21, 0.3);
    transform: scale(1);
  }
  100% {
    color: #FBB700;
    text-shadow: 0 0 10px rgba(251, 183, 0, 0.5);
    transform: scale(1.2);
  }
}

@keyframes plusSpin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.3);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes yearTextGlow {
  0% {
    color: #FF5F15;
    text-shadow: 0 0 5px rgba(255, 95, 21, 0.3);
  }
  100% {
    color: #FBB700;
    text-shadow: 0 0 10px rgba(251, 183, 0, 0.5);
  }
}

@keyframes underlinePulse {
  0%, 100% {
    width: 70px;
    opacity: 0.8;
  }
  50% {
    width: 90px;
    opacity: 1;
  }
}

@keyframes globeFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-15px) rotate(180deg);
    opacity: 0.9;
  }
}

@keyframes linePulse {
  0%, 100% {
    opacity: 0.2;
    width: 40px;
  }
  50% {
    opacity: 0.6;
    width: 50px;
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.card-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 10px;
}

.card-title {
  font-size: 1rem;
  color: #333;
  margin: 8px 0;
}

.card-text {
  font-size: 0.9rem;
  color: #666;
  margin: 4px 0;
}

/* Button and Notice */
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
}

.custom-btn-contact {
  background-color: #FBB700;
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 12px 30px;
  border-radius: 25px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  border: none;
  cursor: pointer;
}

.custom-btn-contact:hover {
  background-color: #FFCC00;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.important-notice {
  text-align: center;
  margin: 40px 0;
  padding: 20px;
  background-color: #fff8e1;
  border-radius: 10px;
  border-left: 4px solid red;
}

.important-header {
  margin-bottom: 15px;
}

.important-text h5 {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 992px) {
  .stats-row {
    gap: 15px;
  }
  
  .custom-card {
    width: 180px;
    height: 180px;
  }
  
  .card-image {
    width: 70px;
    height: 70px;
  }
  
  .ielts-age-animation {
    height: 85px;
  }
  
  .number {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
  
  .plus-sign {
    font-size: 25px;
  }
  
  .globe {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 15px;
    padding-top: 70px;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .paragraph {
    font-size: 18px;
  }
  
  .stats-row {
    gap: 15px;
  }
  
  .custom-card {
    width: 160px;
    height: 160px;
    padding: 15px;
  }
  
  .ielts-age-animation {
    height: 75px;
    margin-bottom: 8px;
  }
  
  .number {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
  
  .plus-sign {
    font-size: 22px;
  }
  
  .year-text {
    font-size: 13px;
  }
  
  .globe {
    display: none; /* Hide globes on mobile for better performance */
  }
  
  .connection-line {
    display: none;
  }
  
  .card-image {
    width: 60px;
    height: 60px;
  }
  
  .card-title {
    font-size: 0.9rem;
  }
  
  .card-text {
    font-size: 0.8rem;
  }
  
  .custom-btn-contact {
    font-size: 16px;
    padding: 10px 25px;
  }
  
  .important-text h5 {
    font-size: 1rem;
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
  
  .paragraph {
    font-size: 16px;
  }
  
  .stats-row {
    gap: 10px;
  }
  
  .custom-card {
    width: 140px;
    height: 170px;
    padding: 10px;
  }
  
  .ielts-age-animation {
    height: 65px;
    margin-bottom: 5px;
  }
  
  .number {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
  
  .plus-sign {
    font-size: 20px;
  }
  
  .year-text {
    font-size: 12px;
  }
  
  .year-underline {
    width: 60px;
  }
  
  .card-image {
    width: 50px;
    height: 50px;
  }
  
  .card-title {
    font-size: 0.85rem;
  }
  
  .custom-btn-contact {
    font-size: 14px;
    padding: 8px 20px;
  }
  
  .important-text h5 {
    font-size: 0.9rem;
  }
}
</style>
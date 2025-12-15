<template>
  <div>
    <!-- Navigation Component -->
    <NavBar></NavBar>

    <div class="container">
      <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        OUR <span class="highlight">PROGRAMMES</span>
      </h1>
      <br>
      <div class="row">
        <!-- Card 1 -->
        <div class="col-12 col-lg-4">
          <div class="card mx-auto" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-image-container">
              <img class="card-image" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250117_094732824.jpg?updatedAt=1737789273936" alt="Pre Schoolers">
            </div>
            <div class="card-subtitle pt-4"></div>
            <div class="card-text">
              <h3><b>Pre Schoolers</b></h3>
              <div>This program is for children who know their ABCs and are just starting to read or have some familiarity with English.</div>
            </div>
            <div class="card-actions">
              <a href="/courses/preschool" class="custom-btn mt-4">Learn More →</a>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="col-12 col-lg-4">
          <div class="card mx-auto" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-image-container">
              <img class="card-image" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250128_092657658-EDIT.jpg?updatedAt=1738392311029" alt="Young Learners">
            </div>
            <div class="card-subtitle pt-4"></div>
            <div class="card-text">
              <h3><b>Young Learners (Age 6-12)</b></h3>
              <div>Want to customize Elementor image box height? Here we have the Solution!</div>
            </div>
            <div class="card-actions">
              <a href="/courses/younglearners" class="custom-btn mt-3">Learn More →</a>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="col-12 col-lg-4">
          <div class="card mx-auto" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-image-container">
              <img class="card-image" height="200" src="https://ik.imagekit.io/u3wbiya66/IMG-20250127-WA0071.jpg?updatedAt=1737967718437" alt="For Schools">
            </div>
            <div class="card-subtitle pt-4"></div>
            <div class="card-text">
              <h3><b>For Schools (Age 13-18)</b></h3>
              <div>Want to customize Elementor image box height? Here we have the Solution!</div>
            </div>
            <div class="card-actions">
              <a href="/courses/forschool" class="custom-btn mt-5">Learn More →</a>
            </div>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="col-12 col-lg-4">
          <div class="card mx-auto" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-image-container">
              <img class="card-image" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250131_073049442-EDIT.jpg?updatedAt=1738389378296" alt="English Skills For O/L's">
            </div>
            <div class="card-subtitle pt-4"></div>
            <div class="card-text">
              <h3><b>English Skills For O/L's</b></h3>
              <div>Trying to add image box to your WordPress sites? No worries!</div>
            </div>
            <div class="card-actions">
              <a href="/courses/ol" class="custom-btn mt-3">Learn More →</a>
            </div>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="col-12 col-lg-4">
          <div class="card mx-auto" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-image-container">
              <img class="card-image" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250127_083713735-EDIT.jpg?updatedAt=1738393428664" alt="English Skills For A/L's">
            </div>
            <div class="card-subtitle pt-4"></div>
            <div class="card-text">
              <h3><b>English Skills For A/L's</b></h3>
              <div>Want to customize Elementor image box height? Here we have the Solution!</div>
            </div>
            <div class="card-actions">
              <a href="/courses/al" class="custom-btn mt-3">Learn More →</a>
            </div>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="col-12 col-lg-4">
          <div class="card mx-auto" data-aos="fade-up" data-aos-duration="3000">
            <div class="card-image-container">
              <img class="card-image" height="200" src="https://ik.imagekit.io/u3wbiya66/IELTS.jpg?updatedAt=1738050317311" alt="IELTS">
            </div>
            <div class="card-subtitle pt-4"></div>
            <div class="card-text">
              <h3><b>IELTS</b></h3>
              <div>Do you know how to add Elementor image box with button?</div>
            </div>
            <div class="card-actions">
              <a href="/courses/ielts" class="custom-btn mt-3">Learn More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
import ArrowButton from './ArrowButton.vue';

// AOS Transition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'CoursePage',
  components: {
    NavBar,
    FooterPage,
    ChatBot,
    ArrowButton
  },
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
  },
  data() {
    return {
      // Your data properties here
    };
  }
};
</script>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Row and Column Grid */
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-12 {
  width: 100%;
  padding: 15px;
}

.col-lg-4 {
  width: 100%;
}

@media (min-width: 992px) {
  .col-lg-4 {
    width: 33.333333%;
  }
}

/* Title */
.title {
  color: #FBB700;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
}

.mt-5 {
  margin-top: 3rem !important;
}

.highlight {
  color: #FF5F15;
}

/* Card Styles */
.card {
  max-width: 400px;
  height: 450px;
  border-radius: 4px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  background: white;
  margin: 0 auto;
}

.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image-container {
  overflow: hidden;
  height: 200px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-out;
}

.card:hover .card-image {
  transform: scale(1.1);
}

.card-subtitle {
  padding-top: 16px;
}

.card-text {
  padding: 0 16px;
  flex-grow: 1;
  color: #d37400;
  font-size: 15px;
  text-align: justify;
}

.card-text h3 {
  color: #333;
  margin-bottom: 8px;
}

.card-actions {
  padding: 8px 16px 16px;
}

/* Custom Button Styles - Vuetify Button Replacement */
.custom-btn {
  display: inline-block;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #004D40; /* teal-darken-4 */
  border-radius: 4px;
  color: #004D40;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.custom-btn:hover {
  background-color: #004D40;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-btn:active {
  transform: translateY(0);
}

.custom-btn:focus {
  outline: 2px solid #004D40;
  outline-offset: 2px;
}

/* Margin Utilities */
.mt-3 {
  margin-top: 1rem !important;
}

.mt-4 {
  margin-top: 1.5rem !important;
}

.mt-5 {
  margin-top: 3rem !important;
}

.pt-4 {
  padding-top: 1.5rem !important;
}

/* Height adjustments for specific cards */
.card:nth-child(4),
.card:nth-child(5),
.card:nth-child(6) {
  height: 430px;
}

/* Responsive Adjustments */
@media (max-width: 991px) {
  .row {
    justify-content: center;
  }
  
  .col-lg-4 {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.75rem;
  }
  
  .card {
    height: auto;
    min-height: 420px;
  }
  
  .card:nth-child(4),
  .card:nth-child(5),
  .card:nth-child(6) {
    height: auto;
    min-height: 400px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }
  
  .container {
    padding: 0 10px;
  }
  
  .card {
    min-height: 400px;
  }
  
  .custom-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>
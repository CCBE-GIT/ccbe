<template>
  <div>
    <NavBar></NavBar>
    <div class="ccbe-careers-wrapper">
      <h1 class="ccbe-title mt-5" data-aos="fade-up" data-aos-duration="3000">
        <span class="ccbe-highlight">Careers</span>
      </h1>
      <p class="ccbe-paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: justify;">
        <b>Cambridge College of British English (CCBE)</b> Careers is your gateway to a world of possibilities and a launchpad for your professional aspirations. Be part of a prestigious institution that not only prioritizes academic excellence but also nurtures a thriving community of dedicated professionals. Together, we inspire confidence, build futures, and redefine what it means to succeed.
        Your career journey begins here at Cambridge College of British English!
      </p>
      <div class="ccbe-careers-grid mt-5" data-aos="fade-up" data-aos-duration="3000" aria-label="Available career positions">
        <div v-for="(career, index) in careers" :key="index" class="ccbe-career-card">
          <div class="ccbe-image-card">
            <img :src="career.image" :alt="`Career opportunity at Cambridge College of British English - image ${index + 1}`" class="ccbe-career-image">
            <div class="ccbe-card-actions">
              <div class="ccbe-text-center">
                <h3 class="ccbe-image-title">Join Our Team</h3>
                <button @click="openApplicationForm" class="ccbe-apply-btn" :aria-label="`Apply now for career position ${index + 1}`">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Home Link -->
    <div class="home-link-section1" data-aos="fade-up" data-aos-duration="1500">
      <p>Looking for something else?</p>
      <a href="/" class="home-link-btn1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
        Back to Home
      </a>
      <div class="quick-nav-links1">
        <a href="/courses" class="qnl1">Our Programmes</a>
        <a href="/about" class="qnl1">About CCBE</a>
        <a href="/news" class="qnl1">News & Events</a>
        <a href="/corevalues" class="qnl1">Core Values</a>
      </div>
    </div>

    <ChatBot></ChatBot>
    <FooterPage></FooterPage>

    <!-- Application Form Modal -->
    <div v-if="showDialog" class="ccbe-modal-overlay" @click="closeDialog">
      <div class="ccbe-modal-box" @click.stop>
        <div class="ccbe-modal-head">
          <h2 id="application-form-title">Application Form</h2>
          <button class="ccbe-close-btn" @click="closeDialog" aria-label="Close application form">×</button>
        </div>
        <div class="ccbe-modal-body">
          <form @submit.prevent="sendInquiry" id="applicationForm">
            <div class="ccbe-form-grid">
              <div class="ccbe-form-group ccbe-full-width">
                <label for="name">Your Name*</label>
                <input type="text" id="name" v-model="formData.name" required class="ccbe-form-input" placeholder="Enter your full name">
              </div>
              <div class="ccbe-form-group">
                <label for="position">Apply For*</label>
                <select id="position" v-model="formData.position" required class="ccbe-form-select">
                  <option value="" disabled selected>Select position</option>
                  <option value="Teaching">Teaching</option>
                  <option value="Administration">Administration</option>
                  <option value="Management">Management</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Development">Development</option>
                  <option value="Business Development">Business Development</option>
                </select>
              </div>
              <div class="ccbe-form-group">
                <label for="branch">Nearest Branch*</label>
                <select id="branch" v-model="formData.branch" required class="ccbe-form-select">
                  <option value="" disabled selected>Select branch</option>
                  <option value="Ambalangoda">Ambalangoda</option>
                  <option value="Galle">Galle</option>
                  <option value="Horana">Horana</option>
                  <option value="Matara">Matara</option>
                  <option value="Piliyandala">Piliyandala</option>
                </select>
              </div>
              <div class="ccbe-form-group">
                <label for="qualifications">Highest Qualifications*</label>
                <select id="qualifications" v-model="formData.qualifications" required class="ccbe-form-select">
                  <option value="" disabled selected>Select qualification</option>
                  <option value="Masters">Masters</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="HND">HND</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Certificate">Certificate</option>
                </select>
              </div>
              <div class="ccbe-form-group">
                <label for="experience">Experience*</label>
                <select id="experience" v-model="formData.experience" required class="ccbe-form-select">
                  <option value="" disabled selected>Select experience</option>
                  <option value="No Experience">No Experience</option>
                  <option value="Less than 2 Years">Less than 2 Years</option>
                  <option value="Less than 3 Years">Less than 3 Years</option>
                  <option value="Less than 4 Years">Less than 4 Years</option>
                  <option value="4+ Years">4+ Years</option>
                </select>
              </div>
              <div class="ccbe-form-group">
                <label for="source">How did you hear about us?*</label>
                <select id="source" v-model="formData.source" required class="ccbe-form-select">
                  <option value="" disabled selected>Select source</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Website">Website</option>
                  <option value="Friend/Referral">Friend/Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="ccbe-form-group">
                <label for="contact">Contact Number</label>
                <input type="tel" id="contact" v-model="formData.contact" class="ccbe-form-input" placeholder="Enter contact number">
              </div>
              <div class="ccbe-form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="formData.email" class="ccbe-form-input" placeholder="Enter email address">
              </div>
            </div>
            <div class="ccbe-required-note">
              <small>*indicates required field</small>
            </div>
            <div class="ccbe-form-actions">
              <button type="button" class="ccbe-btn-secondary" @click="closeDialog" aria-label="Close application form">CLOSE</button>
              <button type="submit" class="ccbe-btn-primary" aria-label="Submit application">APPLY</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Message Modal -->
    <div v-if="successDialog" class="ccbe-modal-overlay" @click="closeSuccessDialog">
      <div class="ccbe-modal-box ccbe-success-modal" @click.stop>
        <div class="ccbe-modal-head">
          <h2>Application Sent Successfully</h2>
          <button class="ccbe-close-btn" @click="closeSuccessDialog" aria-label="Close success message">×</button>
        </div>
        <div class="ccbe-modal-body ccbe-text-center">
          <div class="ccbe-success-icon">✓</div>
          <p>Your application has been successfully sent. Thank you for applying!</p>
        </div>
        <div class="ccbe-modal-actions">
          <button class="ccbe-btn-primary" @click="closeSuccessDialog" aria-label="Close success message">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
import AOS from 'aos';
import emailjs from "emailjs-com";

export default {
  name: 'CareersPage',
  data() {
    return {
      showDialog: false,
      successDialog: false,
      formData: {
        name: "",
        position: "",
        branch: "",
        qualifications: "",
        experience: "",
        source: "",
        contact: "",
        email: "",
      },
      careers: [
        { image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Careers%2020.jpeg" },
        { image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Careers%2019.jpeg" },
        { image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Careers%2018.jpeg" },
        { image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Careers%2017.jpeg" },
        { image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Careers%2016.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/15.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/14.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/13.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/4.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/10.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/6.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/8.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/5.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/9.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/12.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/7.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/3.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/1.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/2.jpeg" },
        { image: "https://ik.imagekit.io/u3wbiya66/Careers/11.jpeg" },
      ],
    };
  },
  components: { NavBar, FooterPage, ChatBot },
  mounted() {
    AOS.init();
  },
  methods: {
    openApplicationForm() {
      this.showDialog = true;
      document.body.style.overflow = 'hidden';
    },
    closeDialog() {
      this.showDialog = false;
      document.body.style.overflow = 'auto';
    },
    closeSuccessDialog() {
      this.successDialog = false;
      document.body.style.overflow = 'auto';
    },
    sendInquiry() {
      const emailData = {
        name: this.formData.name,
        position: this.formData.position,
        branch: this.formData.branch,
        qualifications: this.formData.qualifications,
        experience: this.formData.experience === "Less than 2 Years" ? "<2 Years" :
                    this.formData.experience === "Less than 3 Years" ? "<3 Years" :
                    this.formData.experience === "Less than 4 Years" ? "<4 Years" :
                    this.formData.experience,
        source: this.formData.source,
        contact: this.formData.contact,
        email: this.formData.email,
      };

      emailjs.send('service_s33obqe', 'template_mz5d1yg', emailData, 'WIB0bG1OPslsktqa2')
        .then(response => console.log('First email sent successfully', response))
        .catch(error => console.error('Error sending first email', error));

      emailjs.send('service_eypw2ip', 'template_ygw1cnq', emailData, 'sW9PkDNeVewlET9FF')
        .then(response => console.log('Second email sent successfully', response))
        .catch(error => console.error('Error sending second email', error));

      this.successDialog = true;
      this.showDialog = false;
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSco34ONLHBhIu6kfET6PNMynrJ-R5x9qRLIfGrYSquXd9tmwQ/viewform?fbzx=5328050623112666009', '_blank');
      this.clearForm();
    },
    clearForm() {
      this.formData = { name: "", position: "", branch: "", qualifications: "", experience: "", source: "", contact: "", email: "" };
    },
  },
};
</script>

<style scoped>
/* ── Wrapper (renamed from .container to avoid Bootstrap conflict) ── */
.ccbe-careers-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* ── Title ── */
.ccbe-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
  color: #FBB700;
}

.ccbe-highlight {
  color: #FF5F15;
}

/* ── Paragraph ── */
.ccbe-paragraph {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  text-align: justify;
  line-height: 1.6;
  margin-top: 1rem;
}

/* ── Careers Grid ── */
.ccbe-careers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* ── Career Card ── */
.ccbe-career-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: none;
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: auto;
  background: transparent;
}

.ccbe-career-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.ccbe-image-card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: transparent;
  border: none;
  box-shadow: none;
}

/* ── Career Image ── */
.ccbe-career-image {
  width: 100%;
  height: auto;
  display: block;
  max-width: 100%;
}

/* ── Card Actions (renamed from .card-actions to avoid Bootstrap conflict) ── */
.ccbe-card-actions {
  padding: 1.5rem;
  background: transparent !important;
  text-align: center;
  flex-shrink: 0;
  margin-top: auto;
  border: none !important;
  box-shadow: none !important;
}

.ccbe-text-center {
  text-align: center;
}

.ccbe-image-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

/* ── Apply Now Button ── */
.ccbe-apply-btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #FF5F15;
  color: white;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: 500;
  margin-top: 10px;
  width: 100%;
  max-width: 200px;
}

.ccbe-apply-btn:hover {
  background-color: #cc4a12;
  transform: translateY(-2px);
}

.ccbe-apply-btn:active {
  transform: translateY(0);
}

/* ── Modal Overlay ── */
.ccbe-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  animation: ccbeFadeIn 0.3s ease;
}

@keyframes ccbeFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ── Modal Box (renamed from .modal-content to avoid Bootstrap conflict) ── */
.ccbe-modal-box {
  background-color: white;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: ccbeSlideIn 0.3s ease;
}

@keyframes ccbeSlideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* ── Modal Header (renamed from .modal-header to avoid Bootstrap conflict) ── */
.ccbe-modal-head {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}

.ccbe-modal-head h2 {
  margin: 0;
  flex: 1;
  color: #333;
  font-size: 1.5rem;
}

.ccbe-close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.ccbe-close-btn:hover {
  background-color: #f0f0f0;
  color: #333;
}

/* ── Modal Body (renamed from .modal-body to avoid Bootstrap conflict) ── */
.ccbe-modal-body {
  padding: 20px;
}

/* ── Form Grid ── */
.ccbe-form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.ccbe-full-width {
  grid-column: 1 / -1;
}

/* ── Form Group ── */
.ccbe-form-group {
  margin-bottom: 15px;
}

.ccbe-form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

/* ── Inputs & Selects (renamed from .form-input/.form-select to avoid Bootstrap conflict) ── */
.ccbe-form-input,
.ccbe-form-select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background-color: white;
  box-sizing: border-box;
}

.ccbe-form-input:focus,
.ccbe-form-select:focus {
  outline: none;
  border-color: #FF5F15;
  box-shadow: 0 0 0 2px rgba(255, 95, 21, 0.1);
}

.ccbe-form-select {
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;
  padding-right: 40px;
}

/* ── Required Note ── */
.ccbe-required-note {
  margin-top: 10px;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}

/* ── Form Actions ── */
.ccbe-form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.ccbe-btn-primary,
.ccbe-btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ccbe-btn-primary {
  background-color: #FF5F15;
  color: white;
}

.ccbe-btn-primary:hover {
  background-color: #cc4a12;
  transform: translateY(-2px);
}

.ccbe-btn-secondary {
  background-color: transparent;
  color: #666;
  border: 1px solid #ddd;
}

.ccbe-btn-secondary:hover {
  background-color: #f5f5f5;
  color: #333;
}

/* ── Success Modal ── */
.ccbe-success-modal {
  max-width: 500px;
}

.ccbe-success-icon {
  font-size: 64px;
  color: #4CAF50;
  margin-bottom: 20px;
}

.ccbe-success-modal .ccbe-modal-body p {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.ccbe-modal-actions {
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

/* ── Back to Home ── */
.home-link-section1 {
  text-align: center;
  padding: 32px 0 16px;
}

.home-link-section1 > p {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 12px;
}

.home-link-btn1 {
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

.home-link-btn1:hover {
  background: #e0a500;
  transform: translateY(-2px);
}

.quick-nav-links1 {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.qnl1 {
  font-size: 0.85rem;
  color: #FF5F15;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 14px;
  border: 1px solid rgba(255,95,21,0.25);
  border-radius: 30px;
  transition: all 0.25s;
}

.qnl1:hover {
  background: #FF5F15;
  color: #fff;
  border-color: #FF5F15;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .ccbe-careers-wrapper {
    padding: 0 10px;
  }

  .ccbe-title {
    font-size: 1.75rem;
  }

  .ccbe-paragraph {
    font-size: 18px;
    padding: 0 10px;
  }

  .ccbe-careers-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  .ccbe-career-card {
    max-width: 100%;
  }

  .ccbe-modal-box {
    margin: 10px;
    max-height: 85vh;
  }

  .ccbe-form-grid {
    grid-template-columns: 1fr;
  }

  .ccbe-form-actions {
    flex-direction: column;
    gap: 10px;
  }

  .ccbe-btn-primary,
  .ccbe-btn-secondary {
    width: 100%;
  }

  .ccbe-apply-btn {
    max-width: 180px;
  }
}

@media (max-width: 480px) {
  .ccbe-title {
    font-size: 1.5rem;
  }

  .ccbe-paragraph {
    font-size: 16px;
  }

  .ccbe-careers-grid {
    grid-template-columns: 1fr;
  }

  .ccbe-image-title {
    font-size: 1.5rem;
  }

  .ccbe-apply-btn {
    padding: 10px 20px;
    font-size: 14px;
    max-width: 160px;
  }

  .ccbe-modal-head h2 {
    font-size: 1.25rem;
  }

  .ccbe-form-input,
  .ccbe-form-select {
    padding: 10px 12px;
    font-size: 14px;
  }
}
</style>
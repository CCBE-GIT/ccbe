<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        <span class="highlight">Careers</span>
      </h1>
      <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>Cambridge College of British English (CCBE)</b> Careers is your gateway to a world of possibilities and a launchpad for your professional aspirations. Be part of a prestigious institution that not only prioritizes academic excellence but also nurtures a thriving community of dedicated professionals. Together, we inspire confidence, build futures, and redefine what it means to succeed.
        Your career journey begins here at Cambridge College of British English!
      </p>
      <div class="careers-grid mt-5" data-aos="fade-up" data-aos-duration="3000" aria-label="Available career positions">
        <!-- Loop through careers array -->
        <div v-for="(career, index) in careers" :key="index" class="career-card">
          <div class="image-card">
            <img :src="career.image" :alt="`Career opportunity at Cambridge College of British English - image ${index + 1}`" class="career-image">
            <div class="card-actions">
              <div class="text-center">
                <h3 class="image-title">Join Our Team</h3>
                <button @click="openApplicationForm" class="apply-now-button mb-2" :aria-label="`Apply now for career position ${index + 1}`">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ChatBot></ChatBot>
    <FooterPage></FooterPage>

    <!-- Application Form Modal -->
    <div v-if="showDialog" class="modal-overlay" @click="closeDialog">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <!-- <div class="modal-icon">💼</div> -->
          <h2 id="application-form-title">Application Form</h2>
          <button class="close-button" @click="closeDialog" aria-label="Close application form">×</button>
        </div>
        
        <div class="modal-body">
          <form @submit.prevent="sendInquiry" id="applicationForm">
            <div class="form-grid">
              <div class="form-group full-width">
                <label for="name">Your Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required 
                  class="form-input"
                  placeholder="Enter your full name"
                >
              </div>
              
              <div class="form-group">
                <label for="position">Apply For*</label>
                <select 
                  id="position" 
                  v-model="formData.position" 
                  required 
                  class="form-select"
                >
                  <option value="" disabled selected>Select position</option>
                  <option value="Teaching">Teaching</option>
                  <option value="Administration">Administration</option>
                  <option value="Management">Management</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Development">Development</option>
                  <option value="Business Development">Business Development</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="branch">Nearest Branch*</label>
                <select 
                  id="branch" 
                  v-model="formData.branch" 
                  required 
                  class="form-select"
                >
                  <option value="" disabled selected>Select branch</option>
                  <option value="Ambalangoda">Ambalangoda</option>
                  <option value="Galle">Galle</option>
                  <option value="Horana">Horana</option>
                  <option value="Matara">Matara</option>
                  <option value="Piliyandala">Piliyandala</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="qualifications">Highest Qualifications*</label>
                <select 
                  id="qualifications" 
                  v-model="formData.qualifications" 
                  required 
                  class="form-select"
                >
                  <option value="" disabled selected>Select qualification</option>
                  <option value="Masters">Masters</option>
                  <option value="Bachelors">Bachelors</option>
                  <option value="HND">HND</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Certificate">Certificate</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="experience">Experience*</label>
                <select 
                  id="experience" 
                  v-model="formData.experience" 
                  required 
                  class="form-select"
                >
                  <option value="" disabled selected>Select experience</option>
                  <option value="No Experience">No Experience</option>
                  <option value="Less than 2 Years">Less than 2 Years</option>
                  <option value="Less than 3 Years">Less than 3 Years</option>
                  <option value="Less than 4 Years">Less than 4 Years</option>
                  <option value="4+ Years">4+ Years</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="source">How did you hear about us?*</label>
                <select 
                  id="source" 
                  v-model="formData.source" 
                  required 
                  class="form-select"
                >
                  <option value="" disabled selected>Select source</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Website">Website</option>
                  <option value="Friend/Referral">Friend/Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="contact">Contact Number</label>
                <input 
                  type="tel" 
                  id="contact" 
                  v-model="formData.contact" 
                  class="form-input"
                  placeholder="Enter contact number"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  class="form-input"
                  placeholder="Enter email address"
                >
              </div>
            </div>
            
            <div class="required-note">
              <small>*indicates required field</small>
            </div>
            
            <div class="form-actions">
              <button type="button" class="btn-secondary" @click="closeDialog" aria-label="Close application form">CLOSE</button>
              <button type="submit" class="btn-primary" aria-label="Submit application">APPLY</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Message Modal -->
    <div v-if="successDialog" class="modal-overlay" @click="closeSuccessDialog">
      <div class="modal-content success-modal" @click.stop>
        <div class="modal-header">
          <h2 class="text-h5">Application Sent Successfully</h2>
          <button class="close-button" @click="closeSuccessDialog" aria-label="Close success message">×</button>
        </div>
        <div class="modal-body text-center">
          <div class="success-icon">✓</div>
          <p>Your application has been successfully sent. Thank you for applying!</p>
        </div>
        <div class="modal-actions">
          <button class="btn-primary" @click="closeSuccessDialog" aria-label="Close success message">Close</button>
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
        {
          image: "https://ik.imagekit.io/u3wbiya66/Careers/C1.jpg?updatedAt=1760439871391",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/Careers/C2.jpg?updatedAt=1760439871237",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/Careers/WhatsApp%20Image%202025-08-22%20at%2008.47.25_0277efb2.jpg?updatedAt=1755832794043",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/Careers/WhatsApp%20Image%202025-08-22%20at%2008.46.00_3a637631.jpg?updatedAt=1755832782647",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/Careers/2.png?updatedAt=1755833509742",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0006.jpg?updatedAt=1737434201584",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0011.jpg?updatedAt=1737435218639",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0009.jpg?updatedAt=1737435218715",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0007.jpg?updatedAt=1737435218724",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0010.jpg?updatedAt=1737435218885",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0012.jpg?updatedAt=1737435219022",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0008.jpg?updatedAt=1737435219045",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0015.jpg?updatedAt=1737435219046",
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG-20250121-WA0014.jpg?updatedAt=1737435219125",
        },
      ],
    };
  },
  components: {
    NavBar,
    FooterPage,
    ChatBot,
  },
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
  },
  methods: {
    openApplicationForm() {
      this.showDialog = true;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    },
    closeDialog() {
      this.showDialog = false;
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    },
    closeSuccessDialog() {
      this.successDialog = false;
      document.body.style.overflow = 'auto'; // Re-enable scrolling
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

      // info@ccbe.lk first email
      emailjs.send('service_s33obqe', 'template_mz5d1yg', emailData, 'WIB0bG1OPslsktqa2')
        .then(response => {
          console.log('First email sent successfully', response);
        })
        .catch(error => {
          console.error('Error sending first email', error);
        });

      // Jobs@ccbe.lk Send the second email
      emailjs.send('service_eypw2ip', 'template_ygw1cnq', emailData, 'sW9PkDNeVewlET9FF')
        .then(response => {
          console.log('Second email sent successfully', response);
        })
        .catch(error => {
          console.error('Error sending second email', error);
        });

      // Show success dialog
      this.successDialog = true;
      this.showDialog = false;
      
      // Open Google Form in new tab
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSco34ONLHBhIu6kfET6PNMynrJ-R5x9qRLIfGrYSquXd9tmwQ/viewform?fbzx=5328050623112666009', '_blank');
      
      // Reset the form
      this.clearForm();
    },
    clearForm() {
      this.formData = {
        name: "",
        position: "",
        branch: "",
        qualifications: "",
        experience: "",
        source: "",
        contact: "",
        email: "",
      };
    },
  },
};
</script>

<style scoped>
/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Title */
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 3rem;
  color: #FBB700;
}

.highlight {
  color: #FF5F15;
}

/* Paragraph */
.paragraph {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  line-height: 1.6;
  margin-top: 1rem;
}

/* Careers Grid */
.careers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 30px;
  margin-top: 3rem;
  max-width: 1200px; 
  margin-left: auto;
  margin-right: auto;
}

/* Career Card */
.career-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column; 
  height: auto; 
}

.career-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.image-card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* ORIGINAL IMAGE SIZE */
.career-image {
  width: 100%;
  height: auto; 
  display: block;
  max-width: 100%; 
}

.card-actions {
  padding: 1.5rem;
  background: white;
  text-align: center;
  flex-shrink: 0; /* Prevent button area from shrinking */
  margin-top: auto; 
}

.image-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

/* Apply Now Button */
.apply-now-button {
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

.apply-now-button:hover {
  background-color: #cc4a12;
  transform: translateY(-2px);
}

.apply-now-button:active {
  transform: translateY(0);
}

/* Modal Overlay */
.modal-overlay {
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
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Modal Content */
.modal-content {
  background-color: white;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Modal Header */
.modal-header {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}

.modal-icon {
  font-size: 24px;
  margin-right: 10px;
}

.modal-header h2 {
  margin: 0;
  flex: 1;
  color: #333;
  font-size: 1.5rem;
}

.close-button {
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

.close-button:hover {
  background-color: #f0f0f0;
  color: #333;
}

/* Modal Body */
.modal-body {
  padding: 20px;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.full-width {
  grid-column: 1 / -1;
}

/* Form Group */
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.form-input, .form-select {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  background-color: white;
}

.form-input:focus, .form-select:focus {
  outline: none;
  border-color: #FF5F15;
  box-shadow: 0 0 0 2px rgba(255, 95, 21, 0.1);
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;
  padding-right: 40px;
}

/* Required Note */
.required-note {
  margin-top: 10px;
  margin-bottom: 20px;
  color: #666;
  font-size: 14px;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #FF5F15;
  color: white;
}

.btn-primary:hover {
  background-color: #cc4a12;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #666;
  border: 1px solid #ddd;
}

.btn-secondary:hover {
  background-color: #f5f5f5;
  color: #333;
}

/* Success Modal */
.success-modal {
  max-width: 500px;
}

.success-icon {
  font-size: 64px;
  color: #4CAF50;
  margin-bottom: 20px;
}

.success-modal .modal-body p {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.modal-actions {
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}

.text-center {
  text-align: center;
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
  
  .careers-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  
  .career-card {
    max-width: 100%;
  }
  
  .modal-content {
    margin: 10px;
    max-height: 85vh;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
  }
  
  .apply-now-button {
    max-width: 180px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 1.5rem;
  }
  
  .paragraph {
    font-size: 16px;
  }
  
  .careers-grid {
    grid-template-columns: 1fr;
  }
  
  .image-title {
    font-size: 1.5rem;
  }
  
  .apply-now-button {
    padding: 10px 20px;
    font-size: 14px;
    max-width: 160px;
  }
  
  .modal-header h2 {
    font-size: 1.25rem;
  }
  
  .form-input, .form-select {
    padding: 10px 12px;
    font-size: 14px;
  }
}
</style>
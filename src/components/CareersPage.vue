<template>
<NavBar></NavBar>
<v-container>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        <span class="highlight">Careers</span>
    </h1>
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>Cambridge College of British English (CCBE)</b> Careers is your gateway to a world of possibilities and a launchpad for your professional aspirations. Be part of a prestigious institution that not only prioritizes academic excellence but also nurtures a thriving community of dedicated professionals. Together, we inspire confidence, build futures, and redefine what it means to succeed.
        Your career journey begins here at Cambridge College of British English!
    </p>
    <v-row justify="center" class="mt-5" data-aos="fade-up" data-aos-duration="3000" aria-label="Available career positions">
        <!-- Loop through careers array -->
        <v-col v-for="(career, index) in careers" :key="index" cols="12" md="6">
            <v-card outlined class="image-card" max-height="auto" aria-label="Career opportunity card">
                <v-img :src="career.image" height="100%" width="100%" cover :alt="`Career opportunity at Cambridge College of British English - image ${index + 1}`"></v-img>
                <v-card-actions class="text-center">
                    <v-spacer></v-spacer>
                    <v-row justify="center" align="center" class="flex-column">
                        <h3 class="image-title">Join Our Team</h3>
                        <a @click="dialog = true" class="apply-now-button mb-2" :aria-label="`Apply now for career position ${index + 1}`">Apply Now</a>
                    </v-row>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>

<ChatBot></ChatBot>
<FooterPage></FooterPage>

<!-- Main Application Form Dialog -->
<v-dialog 
  v-model="dialog" 
  max-width="600"
  :scrim="true"
  scrim-color="black"
  scrim-opacity="0.5"
  transition="dialog-bottom-transition"
  eager
>
  <!-- Removed the unused activator template -->
  
  <v-card class="dialog-card" :elevation="24">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>
        <v-icon start>mdi-briefcase-outline</v-icon>
        Application Form
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="dialog = false" aria-label="Close dialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    
    <v-card-text class="pa-6">
      <v-form ref="form" @submit.prevent="sendInquiry">
        <v-row dense>
          <v-col cols="12" md="6">
            <v-text-field 
              label="Your Name" 
              v-model="formData.name" 
              required 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Name is required']"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select 
              :items="['Teaching', 'Administration', 'Management', 'Marketing', 'Development', 'Business Development']" 
              v-model="formData.position" 
              label="Apply For" 
              required 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Position is required']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select 
              :items="['Ambalangoda', 'Galle', 'Horana', 'Matara', 'Piliyandala']" 
              v-model="formData.branch" 
              label="Nearest Branch" 
              required 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Branch is required']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select 
              :items="['Masters', 'Bachelors', 'HND', 'Diploma', 'Certificate']" 
              v-model="formData.qualifications" 
              label="Highest Qualifications" 
              required 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Qualifications are required']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select 
              :items="['No Experience', '<2 Years', '<3 Years', '<4 Years', '4+ Years']" 
              v-model="formData.experience" 
              label="Experience" 
              required 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Experience is required']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-select 
              :items="['Social Media', 'Website', 'Friend/Referral', 'Other']" 
              v-model="formData.source" 
              label="How did you hear about us?" 
              required 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Source is required']"
            ></v-select>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field 
              label="Contact Number" 
              v-model="formData.contact" 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Contact number is required']"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field 
              label="Email" 
              v-model="formData.email" 
              type="email" 
              variant="outlined"
              density="compact"
              :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'Email must be valid']"
            ></v-text-field>
          </v-col>
        </v-row>
        <small class="text-caption text-medium-emphasis">*indicates required field</small>
      </v-form>
    </v-card-text>
    
    <v-card-actions class="pa-4 pt-0 d-flex justify-end">
      <v-btn 
        color="error" 
        variant="outlined" 
        prepend-icon="mdi-close-circle" 
        @click="dialog = false"
        aria-label="Close application form"
      >
        Close
      </v-btn>
      <v-btn 
        color="primary" 
        variant="flat" 
        @click="sendInquiry" 
        prepend-icon="mdi-check-circle"
        aria-label="Submit application"
        :loading="loading"
      >
        Apply
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

<!-- Success Message Dialog -->
<v-dialog 
  v-model="successDialog" 
  max-width="500"
  :scrim="true"
  scrim-color="black"
  scrim-opacity="0.5"
>
  <v-card class="dialog-card" :elevation="24">
    <v-card-title class="text-h5 pa-4">
      <v-icon color="success" class="mr-2">mdi-check-circle</v-icon>
      Application Sent Successfully
    </v-card-title>
    <v-card-text class="text-center pa-4">
      <v-icon color="success" size="64" class="mb-4">mdi-check-circle</v-icon>
      <p class="text-body-1">Your application has been successfully sent. Thank you for applying!</p>
      <p class="text-caption text-medium-emphasis mt-2">You will be redirected to the Google Form for additional details.</p>
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-spacer></v-spacer>
      <v-btn 
        color="primary" 
        variant="flat" 
        @click="successDialog = false"
        aria-label="Close success message"
      >
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
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
            dialog: false,
            successDialog: false,
            loading: false,
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
        async sendInquiry() {
            // Validate form
            if (!this.validateForm()) {
                return;
            }

            this.loading = true;
            const formData = this.formData;

            try {
                // Send first email
                await emailjs.send('service_s33obqe', 'template_mz5d1yg', formData, 'WIB0bG1OPslsktqa2');
                console.log('First email sent successfully');

                // Send second email
                await emailjs.send('service_eypw2ip', 'template_ygw1cnq', formData, 'sW9PkDNeVewlET9FF');
                console.log('Second email sent successfully');

                // Show success dialog
                this.successDialog = true;
                this.dialog = false;

                // Open Google Form in new tab
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSco34ONLHBhIu6kfET6PNMynrJ-R5x9qRLIfGrYSquXd9tmwQ/viewform?fbzx=5328050623112666009', '_blank');

                // Reset the form
                this.clearForm();

            } catch (error) {
                console.error('Error sending email:', error);
                alert('There was an error submitting your application. Please try again.');
            } finally {
                this.loading = false;
            }
        },
        validateForm() {
            const requiredFields = ['name', 'position', 'branch', 'qualifications', 'experience', 'source', 'contact', 'email'];
            for (const field of requiredFields) {
                if (!this.formData[field] || this.formData[field].trim() === '') {
                    alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
                    return false;
                }
            }
            
            // Email validation
            const emailRegex = /.+@.+\..+/;
            if (!emailRegex.test(this.formData.email)) {
                alert('Please enter a valid email address.');
                return false;
            }
            
            return true;
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
.title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.highlight {
    color: #FF5F15;
}

.paragraph {
    font-family: "Roboto", sans-serif;
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
}

.image-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.image-card:hover {
    transform: translateY(-5px);
}

.image-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}

.apply-now-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #FF5F15;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    transition: all 0.3s ease;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    box-shadow: 0 4px 6px rgba(255, 95, 21, 0.2);
}

.apply-now-button:hover {
    background-color: #e54d00;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(255, 95, 21, 0.3);
}

/* Dialog specific fixes */
.dialog-card {
    background-color: white !important;
    border-radius: 12px !important;
    overflow: hidden !important;
}

/* Ensure proper text visibility */
:deep(.v-card-text) {
    color: rgba(0, 0, 0, 0.87) !important;
}

:deep(.v-card-title) {
    color: rgba(0, 0, 0, 0.87) !important;
}

:deep(.v-label) {
    color: rgba(0, 0, 0, 0.87) !important;
}

:deep(.v-field__input) {
    color: rgba(0, 0, 0, 0.87) !important;
}
</style>

<style>
/* Global styles to fix dialog issues */
.v-dialog--fullscreen,
.v-dialog:not(.v-dialog--fullscreen) {
    background-color: transparent !important;
}

.v-overlay__scrim {
    background-color: rgba(0, 0, 0, 0.5) !important;
    opacity: 1 !important;
}

.v-overlay__content {
    opacity: 1 !important;
}

/* Fix for Vuetify 3 dialog colors */
.v-dialog .v-card {
    background-color: white !important;
    color: rgba(0, 0, 0, 0.87) !important;
}

.v-dialog .v-card-title,
.v-dialog .v-card-text,
.v-dialog .v-label,
.v-dialog .v-field__input,
.v-dialog .v-select__selection-text {
    color: rgba(0, 0, 0, 0.87) !important;
}

/* Ensure proper contrast */
.v-dialog .v-text-field .v-field__input::placeholder {
    color: rgba(0, 0, 0, 0.6) !important;
}

.v-dialog .v-select .v-field__input {
    color: rgba(0, 0, 0, 0.87) !important;
}

/* Fix for dark mode issues */
@media (prefers-color-scheme: dark) {
    .v-dialog .v-card {
        background-color: white !important;
        color: rgba(0, 0, 0, 0.87) !important;
    }
    
    .v-dialog .v-card-title,
    .v-dialog .v-card-text {
        color: rgba(0, 0, 0, 0.87) !important;
    }
}
</style>
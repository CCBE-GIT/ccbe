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

<div class="text-center">
    <v-dialog 
      v-model="dialog" 
      max-width="600" 
      aria-labelledby="application-form-title"
      :scrim="true"
      scrim-color="black"
      scrim-opacity="0.5"
    >
        <v-card prepend-icon="mdi-briefcase-outline" title="Application Form" class="dialog-card">
            <v-card-text>
                <v-row dense>
                    <v-col cols="12">
                        <v-text-field label="Your Name*" v-model="formData.name" required variant="outlined"></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-select :items="['Teaching', 'Administration', 'Management', 'Marketing', 'Development', 'Business Development']" 
                                  v-model="formData.position" 
                                  label="Apply For*" 
                                  required 
                                  variant="outlined"></v-select>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-select :items="['Ambalangoda', 'Galle', 'Horana', 'Matara', 'Piliyandala']" 
                                  v-model="formData.branch" 
                                  label="Nearest Branch*" 
                                  required 
                                  variant="outlined"></v-select>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-select :items="['Masters', 'Bachelors', 'HND', 'Diploma', 'Certificate']" 
                                  v-model="formData.qualifications" 
                                  label="Highest Qualifications*" 
                                  required 
                                  variant="outlined"></v-select>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-select :items="['No Experience', '<2 Years', '<3 Years', '<4 Years', '4+ Years']" 
                                  v-model="formData.experience" 
                                  label="Experience*" 
                                  required 
                                  variant="outlined"></v-select>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-select :items="['Social Media', 'Website', 'Friend/Referral', 'Other']" 
                                  v-model="formData.source" 
                                  label="How did you hear about us?*" 
                                  required 
                                  variant="outlined"></v-select>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-text-field label="Contact Number" v-model="formData.contact" variant="outlined"></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                        <v-text-field label="Email" v-model="formData.email" type="email" variant="outlined"></v-text-field>
                    </v-col>
                </v-row>
                <small class="text-caption text-medium-emphasis">*indicates required field</small>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-between">
                <v-btn text="CLOSE" color="grey-darken-2" variant="text" @click="dialog = false" aria-label="Close application form"></v-btn>
                <v-btn color="primary" text="APPLY" variant="flat" @click="sendInquiry" aria-label="Submit application"></v-btn>
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
        <v-card class="dialog-card">
            <v-card-title class="text-h5">Application Sent Successfully</v-card-title>
            <v-card-text class="text-center">
                <v-icon color="success" size="64">mdi-check-circle</v-icon>
                <p>Your application has been successfully sent. Thank you for applying!</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" color="primary" @click="successDialog = false" aria-label="Close success message"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
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
            dialog: false,
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
        sendInquiry() {
            const emailData = {
                name: this.formData.name,
                position: this.formData.position,
                branch: this.formData.branch,
                qualifications: this.formData.qualifications,
                experience: this.formData.experience,
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
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSco34ONLHBhIu6kfET6PNMynrJ-R5x9qRLIfGrYSquXd9tmwQ/viewform?fbzx=5328050623112666009', '_blank');
            this.dialog = false; // Close the dialog after submission

            // Optionally reset the form
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
}

.image-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.apply-now-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #FF5F15;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-top: 10px;
    cursor: pointer;
}

.apply-now-button:hover {
    background-color: #cc4a12;
}

.title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.highlight {
    color: #FF5F15;
}

.subtitle {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
}

.professionals-grid {
    margin-top: 30px;
}

.name {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 10px 0;
}

.paragraph {
    font-family: "Roboto", sans-serif;
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
}

.horizontal-scroll {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
}

.horizontal-scroll::-webkit-scrollbar {
    display: none;
    /* For Chrome, Safari, and Opera */
}

.why-choose-us {
    padding: 40px 20px;
    background-color: #f9f9f9;
}

.section-title {
    font-size: 2.5rem;
    color: #272643;
    font-family: "Arial", sans-serif;
    margin-bottom: 20px;
}

.stats-row .v-col {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.stats-card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.stats-card-img {
    object-fit: cover;
    border-bottom: 3px solid #FBB700;
}

.card-content {
    padding: 20px;
}

.stat-value {
    font-size: 28px;
    color: #FBB700;
    font-weight: bold;
}

.stat-label {
    font-size: 18px;
    color: rgb(20, 10, 10);
    font-family: 'Roboto', sans-serif;
}

.v-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.stats-row .v-col:hover {
    transform: scale(1.05);
    opacity: 0.9;
}

/* Dialog fixes */
.dialog-card {
    background-color: white !important;
    color: #000000 !important;
}

/* Ensure text is visible in dialogs */
:deep(.v-card-title),
:deep(.v-card-text),
:deep(.v-label),
:deep(.v-field__input) {
    color: #000000 !important;
}
</style>

<style>
/* Global styles to fix dialog transparency in production */
.v-overlay__scrim {
    background-color: rgba(0, 0, 0, 0.5) !important;
    opacity: 1 !important;
}

.v-overlay__content {
    opacity: 1 !important;
}

.v-dialog .v-card {
    background-color: white !important;
    color: #000000 !important;
}

.v-dialog .v-card-title,
.v-dialog .v-card-text {
    color: #000000 !important;
}

.v-dialog .v-text-field .v-field__input,
.v-dialog .v-select .v-field__input {
    color: #000000 !important;
}

.v-dialog .v-label {
    color: #000000 !important;
}
</style>
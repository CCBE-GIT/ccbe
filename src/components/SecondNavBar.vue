<v-app-bar
  scroll-behavior="hide collapse elevate fade-image"
  scroll-threshold="638"
  image="https://picsum.photos/1920/1080?random"
></v-app-bar>
<template>
<nav class="navbar navbar-expand-lg" style="background-color: #FFCC00;">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <li class="nav-item mr-0">
                <a class="nav-link text-black" href="/" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">Home</a>
            </li>
            <li class="nav-item mr-0">
                <a class="nav-link text-black" href="/courses" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">Our Programmes</a>
            </li>
            <li class="nav-item mr-0">
                <a class="nav-link text-black" href="/corevalues" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">Core Values</a>
            </li>
            <li class="nav-item mr-0">
                <a class="nav-link text-black" href="/about" style="font-weight: bold; padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">About Us</a>
            </li>
            <li class="nav-item mr-0">
                <a class="nav-link text-black" href="/contact" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">Contact</a>
            </li>
            <li class="nav-item mr-0">
                <a class="nav-link text-black" href="/news" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">News & Events</a>
            </li>
            <li class="nav-item mr-0">
                <a class="nav-link text-black" @click="dialog = true" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">Inquiry</a>
            </li>
            <li class="nav-item mr-0">
                <a class="nav-link text-black" href="/careers" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">Careers</a>
            </li>
        </div>
    </div>
</nav>
<div class="text-center">
    <v-dialog v-model="dialog" max-width="600">
        <v-card prepend-icon="mdi-account" title="Inquiry Form">
            <v-card-text>
                <v-row dense>
                    <v-col cols="12" md="6">
                        <v-text-field label="Your Name" v-model="formData.name" required variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field label="Contact Number" v-model="formData.contact" variant="outlined"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select :items="['Ambalangoda', 'Galle', 'Horana', 'Matara', 'Piliyandala']" label="Branch" v-model="formData.branch" required variant="outlined"></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select :items="['Social Media', 'Website', 'Friend/Referral', 'Other']" label="How did you hear about us?" v-model="formData.source" required variant="outlined"></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea label="Type your message" v-model="formData.message" required variant="outlined"></v-textarea>
                    </v-col>
                </v-row>
                <small class="text-caption text-medium-emphasis">*indicates required field</small>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" color="red" variant="plain" prepend-icon="mdi-close-circle" @click="dialog = false"></v-btn>
                <v-btn color="primary" text="Submit" variant="tonal" @click="sendInquiry" prepend-icon="mdi-check-circle"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <!-- Success Message Dialog -->
    <v-dialog v-model="successDialog" max-width="500">
        <v-card>
            <v-card-title class="text-h5">Inquiry Sent Successfully</v-card-title>
            <v-card-text class="text-center">
                <v-icon color="success" size="64">mdi-check-circle</v-icon>
                <p>Your inquiry has been successfully sent. Thank you for reaching out!</p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text="Close" color="primary" @click="successDialog = false"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
    data() {
        return {
            logoPath: require("@/assets/Logo.png"),
            lblLMS: require("@/assets/icons/lblLMS.png"),
            lblPAyment: require("@/assets/icons/lblPayments.png"),
            dialog: false,
            successDialog: false,
            formData: {
                name: "",
                contact: "",
                branch: "",
                source: "",
                message: "",
            },
        };
    },
    methods: {
        async sendInquiry() {
            if (!this.formData.name || !this.formData.branch || !this.formData.message) {
                alert("Please fill out all required fields.");
                return;
            }

            const branchConfig = {
                Ambalangoda: {
                    serviceId: "service_lfaw7ig",
                    templateId: "template_2qr8exc",
                    publicKey: "RrKZfdB7O-c_xrVE3",
                },
                Galle: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
                Horana: {
                    serviceId: "service_06df1jl",
                    templateId: "template_2v4t7vx",
                    publicKey: "nK87S7OSoDR3ERF3i",
                },
                Matara: {
                    serviceId: "service_08efz6a",
                    templateId: "template_llhr0ob",
                    publicKey: "GNQ1juP2sOqLepOI6",
                },
                Piliyandala: {
                    serviceId: "service_mdw48kr",
                    templateId: "template_nzbm91b",
                    publicKey: "OOatG6LX2Xmx6_jGO",
                },
            };

            const selectedBranchConfig = branchConfig[this.formData.branch];
            if (!selectedBranchConfig) {
                alert("Invalid branch selected.");
                return;
            }

            console.log("Form Data Branch Selected:", this.formData.branch);
            console.log("Selected Branch Config:", selectedBranchConfig);

            const templateParams = {
                name: this.formData.name,
                contact: this.formData.contact || "Not provided",
                branch: this.formData.branch,
                source: this.formData.source || "Not provided",
                message: this.formData.message,
            };

            try {
                const response = await emailjs.send(
                    selectedBranchConfig.serviceId,
                    selectedBranchConfig.templateId,
                    templateParams,
                    selectedBranchConfig.publicKey
                );
                console.log("EmailJS Response:", response);
                this.dialog = false; // Close the inquiry dialog
                this.successDialog = true;
                this.clearForm();
            } catch (error) {
                console.error("Failed to send inquiry. Error details:", error);
                alert(`Failed to send inquiry. Error: ${error.text || error.message || error}`);
            }
        },

        clearForm() {
            this.formData = {
                name: "",
                contact: "",
                branch: "",
                source: "",
                message: "",
            };
        },
    },
};
</script>

<style scoped>
body {
    font-family: 'YourCustomFont', sans-serif;
    /* Add a fallback font like sans-serif */
}
/* Navbar animation when loading */
.animated-navbar {
    animation: slideDown 1s ease-in-out;
}

@keyframes slideDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Navbar item hover animations */
.nav-item-animated {
    transition: transform 0.3s ease, color 0.3s ease;
}

.nav-item-animated:hover {
    transform: scale(1.1);
    color: #FF6600; /* Changes color on hover */
}
</style>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="d-flex align-items-center w-100" id="navLogo">
        <h1 class="brand-title">CCBE</h1>
        <a class="navbar-brand ml-2" href="#">
            <img :src="logoPath" alt="Company Logo" width="130" height="100" />
        </a>

        <!-- Navbar Toggler -->
        <button class="navbar-toggler" type="button" @click="isMenuOpen = !isMenuOpen">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Content -->
        <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarsecondMarkup">
            <ul class="navbar-nav mr-auto d-none d-lg-flex">
                <li class="nav-item">
                    <a class="nav-link text-black ml-2" href="/contact" style="font-weight: bold; padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger; color: #FF5F15 !important">
                        <v-icon>mdi-phone-outline</v-icon> Contact
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-black ml-2" @click="dialog = true" style="font-weight: bold; padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger; color: #FF5F15 !important">
                        <v-icon>mdi-lifebuoy</v-icon> Inquiry
                    </a>
                </li>
            </ul>
            <ul class="nav-item d-flex justify-content-center mx-auto mt-3">
                
            </ul>
        </div>
    </div>

    <!-- Navbar Items for Mobile -->
    <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
        <ul class="navbar-nav ml-auto">
            <a href="https://classroom.google.com/" target="_blank">
                <img :src="lblLMS" width="120" height="60" class="ml-1" />
            </a>
            <li class="nav-item">
                <img :src="lblPayment" width="115" height="55" class="ml-1" />
            </li>
            <li class="nav-item d-lg-none">
                <a class="nav-link text-black" href="/contact">
                    <v-icon>mdi-phone-outline</v-icon> Contact
                </a>
            </li>
            <li class="nav-item d-lg-none">
                <a class="nav-link text-black" @click="dialog = true" style="font-weight: bold; padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">
                    <v-icon>mdi-lifebuoy</v-icon> Inquiry
                </a>
            </li>
        </ul>
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

<SecondNavBar />
</template>

<script>
import SecondNavBar from "./SecondNavBar.vue";
import emailjs from "emailjs-com";

export default {
    data() {
        return {
            logoPath: require("@/assets/Logo.png"),
            lblLMS: require("@/assets/icons/lblLMS.png"),
            lblPayment: require("@/assets/icons/lblPayments.png"),
            dialog: false,
            successDialog: false,
            isMenuOpen: false,
            formData: {
                name: "",
                contact: "",
                branch: "",
                source: "",
                message: "",
            },
        };
    },
    components: {
        SecondNavBar,
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
.navbar {
    padding-bottom: 0;
    border: none;
    box-shadow: none;
}

.brand-title {
    font-family: Arial, sans-serif;
    font-weight: bold;
    color: #ff5f15;
}

.navbar-toggler {
    border: none;
}

.nav-link {
    color: #ff5f15;
}

.navbar-nav .nav-item {
    white-space: nowrap;
}

@media (max-width: 768px) {  
    .navbar-nav .nav-link {
        color: #FF5F15 !important; /* Change to any color you want */
    }
}
</style>

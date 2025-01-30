<template>
<DigitalLinerPage />
<nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="d-flex align-items-center" id="navLogo">
        <h1 class="brand-title">CCBE</h1>
        <a class="navbar-brand ml-2" href="#">
            <img :src="logoPath" alt="Company Logo" width="130" height="100" />
        </a>
        <ul class="navbar-nav d-none d-lg-flex">
            <li class="nav-item">
                <a class="nav-link text-black ml-2" href="/contact" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">
                    <v-icon>mdi-phone-outline</v-icon> Contact
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black ml-2" @click="dialog = true" style="font-weight: bold;  padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">
                    <v-icon>mdi-lifebuoy</v-icon> Inquiry
                </a>
            </li>
        </ul>
    </div>

    <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <img :src="lblLMS" width="120" height="60" class="ml-3" />
            </li>
            <li class="nav-item">
                <img :src="lblPayment" width="120" height="60" class="ml-3" />
            </li>
            <li class="nav-item d-lg-none">
                <a class="nav-link text-black" href="/contact">
                    <v-icon>mdi-phone-outline</v-icon> Contact
                </a>
            </li>
            <li class="nav-item d-lg-none">
                <a class="nav-link text-black" @click="dialog = true">
                    <v-icon>mdi-lifebuoy</v-icon> Inquiry
                </a>
            </li>
        </ul>
    </div>
</nav>

<v-dialog v-model="dialog" max-width="600">
    <v-card title="Inquiry Form">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="6">
                    <v-text-field label="Your Name" v-model="formData.name" required />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Contact Number" v-model="formData.contact" />
                </v-col>
                <v-col cols="12" md="6">
                    <v-select :items="branches" label="Branch" v-model="formData.branch" required />
                </v-col>
                <v-col cols="12" md="6">
                    <v-select :items="sources" label="How did you hear about us?" v-model="formData.source" required />
                </v-col>
                <v-col cols="12">
                    <v-textarea label="Type your message" v-model="formData.message" required />
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" color="red" @click="dialog = false"></v-btn>
            <v-btn color="primary" text="Submit" @click="sendInquiry"></v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>

<SecondNavBar />
</template>

<script>
import DigitalLinerPage from "./DigitalLinerPage.vue";
import SecondNavBar from "./SecondNavBar.vue";
import emailjs from "emailjs-com";

export default {
    data() {
        return {
            logoPath: require("@/assets/Logo.png"),
            lblLMS: require("@/assets/icons/lblLMS.png"),
            lblPayment: require("@/assets/icons/lblPayments.png"),
            dialog: false,
            isMenuOpen: false,
            formData: {
                name: "",
                contact: "",
                branch: "",
                source: "",
                message: ""
            },
            branches: ["Ambalangoda", "Galle", "Horana", "Matara", "Piliyandala"],
            sources: ["Social Media", "Website", "Friend/Referral", "Other"],
        };
    },
    components: {
        DigitalLinerPage,
        SecondNavBar
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        async sendInquiry() {
            if (!this.formData.name || !this.formData.branch || !this.formData.message) {
                alert("Please fill out all required fields.");
                return;
            }
            try {
                await emailjs.send("service_id", "template_id", this.formData, "public_key");
                this.dialog = false;
                alert("Inquiry sent successfully");
            } catch (error) {
                alert("Failed to send inquiry");
            }
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

.navbar-nav .nav-item {
    white-space: nowrap;
}

</style>

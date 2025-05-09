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
                        <a class="nav-link text-black ml-2" href="/contact"
                            style="font-weight: bold; padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger; color: #FF5F15 !important">
                            <v-icon>mdi-phone-outline</v-icon> Contact
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black ml-2" @click="dialogInq = true"
                            style="font-weight: bold; padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger; color: #FF5F15 !important">
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
                <li class="nav-item" @click="dialogInstructions = true">
                    <img :src="lblPayment" width="115" height="55" class="ml-1" />
                </li>
                <li class="nav-item d-lg-none">
                    <a class="nav-link text-black" href="/contact">
                        <v-icon>mdi-phone-outline</v-icon> Contact
                    </a>
                </li>
                <li class="nav-item d-lg-none">
                    <a class="nav-link text-black" @click="dialog = true"
                        style="font-weight: bold; padding: 10px 15px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: larger;">
                        <v-icon>mdi-lifebuoy</v-icon> Inquiry
                    </a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="text-center">
        <v-dialog v-model="dialogInq" max-width="600">
            <v-card prepend-icon="mdi-account" title="Inquiry Form">
                <v-card-text>
                    <v-row dense>
                        <v-col cols="12" md="6">
                            <v-text-field label="Your Name" v-model="formData.name" required
                                variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field label="Contact Number" v-model="formData.contact"
                                variant="outlined"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select :items="['Ambalangoda', 'Galle', 'Horana', 'Matara', 'Piliyandala', 'Kalutara']"
                                label="Branch" v-model="formData.branch" required variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select :items="['Social Media', 'Website', 'Friend/Referral', 'Other']"
                                label="How did you hear about us?" v-model="formData.source" required
                                variant="outlined"></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea label="Type your message" v-model="formData.message" required
                                variant="outlined"></v-textarea>
                        </v-col>
                    </v-row>
                    <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Close" color="red" variant="plain" prepend-icon="mdi-close-circle"
                        @click="dialogInq = false"></v-btn>
                    <v-btn color="primary" text="Submit" variant="tonal" @click="sendInquiry"
                        prepend-icon="mdi-check-circle"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <!-- Payment Terms Dialog -->
        <v-dialog v-model="dialogInstructions" max-width="600">
            <v-card>
                <v-card-title class="d-flex align-center">
                    <v-icon class="mr-2" color="primary">mdi-certificate</v-icon>
                    Terms and Conditions for Payment Processing
                </v-card-title>

                <v-divider></v-divider>

                <v-card-text class="pt-4">
                    <v-row dense>
                        <v-col cols="12">
                            <p><strong>1. Introduction</strong></p>
                            <p>Welcome to CCBE. By using our services and making payments through our website, you agree
                                to comply with and be bound by the following terms and conditions. Please read them
                                carefully.</p>

                            <p><strong>2. Payment Processing</strong></p>
                            <p>All payments for services provided by CCBE are securely processed through DFCC Bank’s
                                Internet Payment Gateway (IPG). By making a payment, you authorize CCBE to charge the
                                payment method you provide.</p>

                            <p><strong>3. Non-Refundable Payments</strong></p>
                            <p>All payments made through our website are non-refundable. Once a payment is processed, it
                                cannot be refunded, regardless of the transaction outcome.</p>

                            <p><strong>4. Payment Confirmation</strong></p>
                            <p>After a successful payment, you will receive a confirmation receipt from CCBE as proof of
                                payment.</p>

                            <p><strong>5. Payment Methods</strong></p>
                            <p>We accept Visa, Mastercard, and other supported payment methods as listed by DFCC Bank.
                            </p>

                            <p><strong>6. Security and Data Protection</strong></p>
                            <p>All transactions are securely processed using encryption technologies provided by DFCC
                                Bank’s IPG. Your payment details are never stored on our servers.</p>

                            <p><strong>7. Payment Disputes</strong></p>
                            <p>If you have issues with your payment, contact us at <strong>071 3 999 666</strong>.
                                Payments are non-refundable unless required by law or if a system error occurs.</p>

                            <p><strong>8. Changes to Terms</strong></p>
                            <p>CCBE reserves the right to modify these terms at any time. Changes will be posted on this
                                page.</p>

                            <p><strong>9. Governing Law</strong></p>
                            <p>These terms are governed by Sri Lankan law.</p>

                            <p><strong>10. Contact Us</strong></p>
                            <p>Email: <a href="mailto:info@ccbe.lk">info@ccbe.lk</a></p>
                            <p>Phone: 071 3 999 666</p>
                        </v-col>
                        <v-checkbox v-model="agreed" label="I agree to the Terms and Conditions" color="primary"
                            class="mt-4"></v-checkbox>
                    </v-row>
                    <!-- Checkbox for Agreement -->
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Close" color="red" variant="plain" prepend-icon="mdi-close-circle"
                        @click="dialogInstructions = false">
                    </v-btn>
                    <v-btn color="primary" text="Submit" variant="tonal" prepend-icon="mdi-check-circle"
                        :disabled="!agreed" @click="dialogInstructions = false, paymentDialog = true">
                    </v-btn>
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


        <v-dialog v-model="paymentDialog" max-width="500">
            <v-card class="pa-3" width="400">
                <v-card-title class="text-center text-h5 font-weight-bold">
                    <span class="orange--text">CCBE</span>
                    <v-spacer></v-spacer>
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Sampath_Bank_logo.svg/1200px-Sampath_Bank_logo.svg.png"
                        max-height="30" max-width="80" contain></v-img>
                </v-card-title>

                <v-card-subtitle class="text-center text-h6">
                    <v-radio-group v-model="paymentType" inline>
                        <v-radio label="Monthly Payment" value="monthly"></v-radio>
                        <v-radio label="Full Payment" value="full"></v-radio>
                    </v-radio-group>
                </v-card-subtitle>

                <!-- Monthly Amount -->
                <v-select v-if="paymentType === 'monthly'" label="Select Monthly Amount" v-model="monthlyAmount"
                    :items="monthlyOptions" item-text="title" item-value="value" required></v-select>

                <!-- Full Payment Amount -->
                <v-select v-if="paymentType === 'full'" label="Select Full Payment Amount" v-model="fullAmount"
                    :items="fullOptions" item-text="title" item-value="value" required></v-select>

                <v-divider></v-divider>

                <!-- Form -->
                <v-form ref="form" v-model="valid">
                    <v-text-field v-model="name" label="Full Name" :rules="[v => !!v || 'Name is required']"
                        required></v-text-field>

                    <v-text-field v-model="contact" label="Contact Number"
                        :rules="[v => !!v || 'Contact number is required']" required></v-text-field>

                    <v-text-field v-model="email" label="Email"
                        :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']"
                        required></v-text-field>

                    <v-checkbox v-model="agreed" label="I agree to the terms and conditions"
                        :rules="[v => !!v || 'You must agree before submitting']" required></v-checkbox>

                    <v-btn block color="primary" :disabled="!valid || !agreed" @click="submitPayment">
                        Submit
                    </v-btn>
                </v-form>

                <v-divider class="mt-3"></v-divider>
                <p class="text-center mt-2 text-caption">
                    Securely processed and powered by DFCC Bank
                </p>
                <v-img src="https://www.bancstac.com/logo.png" max-height="30" contain class="mx-auto"></v-img>
            </v-card>
        </v-dialog>
    </div>

    <SecondNavBar />
</template>

<script>
import SecondNavBar from "./SecondNavBar.vue";
import emailjs from "emailjs-com";
import axios from 'axios'; 

export default {
    data() {
        return {
            merchantId: "your-merchant-id", // DFCC provided merchant ID
            secretKey: "your-secret-key", // DFCC provided secret key
            paymentUrl: "https://www.dfccpaycorp.com/transaction", // DFCC endpoint

            paymentType: '',
            monthlyAmount: null,
            fullAmount: null,
            name: '',
            contact: '',
            email: '',
            agreed: false,


            logoPath: require("@/assets/Logo.png"),
            lblLMS: require("@/assets/icons/lblLMS.png"),
            lblPayment: require("@/assets/icons/lblPayments.png"),
            dialogInq: false,
            dialogInstructions: false,
            successDialog: false,
            isMenuOpen: false,
            paymentDialog: false,

            monthlyOptions: [
                { title: 'Rs. 3,950', value: 3950 },
            ],

            fullOptions: [
                { title: 'Rs. 13,430', value: 13430 },
                { title: 'Rs. 26,860', value: 26860 },
                { title: 'Rs. 40,300', value: 40300 },
            ],
            valid: false,

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
                Kalutara: {
                    serviceId: "service_mg2271v",
                    templateId: "template_loig6cz",
                    publicKey: "MJPUAdls_w9W5hPaK",
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

        openDialog() {
      this.paymentDialog = true;  // You can use paymentDialog here
    },
    closeDialog() {
      this.paymentDialog = false; // Similarly, close the dialog here
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

        submitTerms() {
            if (this.agreed) {
                this.dialogInstructions = false;
                this.dialogSuccess = true;
            }
        }
    },

    async submitPayment() {
      if (!this.$refs.form.validate()) {
        return;
      }

      const amount = this.paymentType === 'monthly' ? this.monthlyAmount : this.fullAmount;
      if (!amount) {
        alert("Please select a payment amount.");
        return;
      }

      const payload = {
        merchantId: this.merchantId,
        orderId: `ORDER-${Date.now()}`,
        amount: amount,
        currency: 'LKR',
        customerName: this.name,
        customerEmail: this.email,
        customerPhone: this.contact,
        returnUrl: `${window.location.origin}/payment-success`,
        cancelUrl: `${window.location.origin}/payment-cancel`,
        notifyUrl: `${window.location.origin}/payment-notify`
      };

      console.log("Payload:", payload);

      // Generate HMAC-SHA256 signature
      payload.signature = this.generateSignature(payload);

      try {
        const response = await axios.post(this.paymentUrl, payload);

        if (response.data.status === "SUCCESS") {
          console.log("Payment successful:", response.data);
          this.$router.push('/payment-success');
        } else {
          console.error("Payment failed:", response.data.message);
          alert(`Payment failed: ${response.data.message}`);
        }
      } catch (error) {
        console.error("Payment error:", error);
        alert(`Payment error: ${error.message}`);
      }
    },

    // Generate the HMAC signature for payment
    generateSignature(payload) {
      const crypto = require('crypto');
      const dataString = `${payload.merchantId}${payload.orderId}${payload.amount}${payload.currency}${payload.returnUrl}${payload.cancelUrl}`;
      return crypto
        .createHmac('sha256', this.secretKey)
        .update(dataString)
        .digest('hex');
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
        color: #FF5F15 !important;
        /* Change to any color you want */
    }
}

.v-card {
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>

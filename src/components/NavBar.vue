<template>
    <!-- Unified Navigation Bar -->
    <nav class="unified-navbar">
        <!-- Main Navigation Header -->
        <div class="nav-main-header">
            <div class="container-fluid">
                <div class="nav-header-container">
                    <!-- Logo Section -->
                    <div class="logo-section">
                        <div class="logo-wrapper">
                            <div class="brand-main">
                                <h1 class="brand-title">CCBE</h1>
                                <div class="logo-image">
                                    <img :src="logoPath" alt="CCBE Logo" class="logo-img" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="desktop-nav">
                        <!-- Quick Actions -->
                        <div class="quick-actions">
                            <a href="https://classroom.google.com/" target="_blank" class="action-btn lms-btn">
                                <span class="btn-text">LMS Portal</span>
                            </a>
                            <a href="https://pay.ccbe.lk/" target="_blank" class="action-btn payment-btn">
                                <span class="btn-text">Make Payment</span>
                            </a>
                        </div>

                        <!-- Main Navigation Links -->
                        <ul class="nav-links">
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">
                                    <div class="nav-icon">
                                        <v-icon>mdi-phone-outline</v-icon>
                                    </div>
                                    <span class="nav-text">Contact</span>
                                    <div class="nav-hover-effect"></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="dialogInq = true">
                                    <div class="nav-icon">
                                        <v-icon>mdi-lifebuoy</v-icon>
                                    </div>
                                    <span class="nav-text">Inquiry</span>
                                    <div class="nav-hover-effect"></div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-menu-toggle" @click="toggleMobileMenu" :class="{ 'active': isMenuOpen }">
                        <span class="toggle-bar"></span>
                        <span class="toggle-bar"></span>
                        <span class="toggle-bar"></span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Secondary Navigation Menu -->
        <div class="secondary-nav-menu">
            <div class="container-fluid">
                <div class="secondary-nav-container">
                    <div class="nav-scroll-wrapper">
                        <ul class="secondary-nav-links">
                            <li class="secondary-nav-item" v-for="(item, index) in secondaryNavItems" :key="index">
                                <a :href="item.link" class="secondary-nav-link" @mouseenter="activateHover(index)">
                                    <div class="secondary-nav-icon">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </div>
                                    <span class="secondary-nav-text">{{ item.text }}</span>
                                    <div class="nav-underline" :class="{ 'active': activeIndex === index }"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div class="mobile-navigation" :class="{ 'active': isMenuOpen }">
            <!-- Mobile Header with Close Button -->
            <div class="mobile-nav-header">
                <div class="mobile-header-content">
                    <div class="mobile-logo">
                        <h2 class="mobile-brand-title">CCBE</h2>
                    </div>
                    <button class="mobile-close-btn" @click="closeMobileMenu">
                        <v-icon>mdi-close</v-icon>
                    </button>
                </div>
            </div>

            <div class="mobile-nav-content">
                <!-- Mobile Quick Actions -->
                <div class="mobile-quick-actions">
                    <a href="https://classroom.google.com/" target="_blank" class="mobile-action-btn lms-btn" @click="closeMobileMenu">
                        <span>LMS Portal</span>
                    </a>
                    <a href="https://pay.ccbe.lk/" target="_blank" class="mobile-action-btn payment-btn" @click="closeMobileMenu">
                        <span>Make Payment</span>
                    </a>
                </div>

                <!-- Mobile Main Navigation Links -->
                <div class="mobile-nav-section">
                    <h3 class="mobile-section-title">Main Menu</h3>
                    <ul class="mobile-nav-links">
                        <li class="mobile-nav-item">
                            <a class="mobile-nav-link" href="/contact" @click="closeMobileMenu">
                                <v-icon>mdi-phone-outline</v-icon>
                                <span>Contact</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a class="mobile-nav-link" @click="dialogInq = true; closeMobileMenu();">
                                <v-icon>mdi-lifebuoy</v-icon>
                                <span>Inquiry</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Mobile Secondary Navigation Links -->
                <div class="mobile-nav-section">
                    <h3 class="mobile-section-title">Explore</h3>
                    <ul class="mobile-secondary-links">
                        <li class="mobile-secondary-item" v-for="(item, index) in secondaryNavItems" :key="index">
                            <a :href="item.link" class="mobile-secondary-link" @click="closeMobileMenu">
                                <v-icon>{{ item.icon }}</v-icon>
                                <span>{{ item.text }}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Mobile Footer -->
                <div class="mobile-nav-footer">
                    <div class="mobile-contact-info">
                        <div class="mobile-contact-item">
                            <v-icon small>mdi-email</v-icon>
                            <span>info@ccbe.lk</span>
                        </div>
                        <div class="mobile-contact-item">
                            <v-icon small>mdi-phone</v-icon>
                            <span>071 3 999 666</span>
                        </div>
                    </div>
                    <div class="mobile-social-links">
                        <a href="#" class="mobile-social-link">
                            <v-icon small>mdi-facebook</v-icon>
                        </a>
                        <a href="#" class="mobile-social-link">
                            <v-icon small>mdi-twitter</v-icon>
                        </a>
                        <a href="#" class="mobile-social-link">
                            <v-icon small>mdi-linkedin</v-icon>
                        </a>
                        <a href="#" class="mobile-social-link">
                            <v-icon small>mdi-instagram</v-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Dialogs -->
    <div class="dialog-container">
        <!-- Inquiry Dialog -->
        <v-dialog v-model="dialogInq" max-width="600" class="modern-dialog">
            <v-card class="dialog-card inquiry-card">
                <div class="dialog-header">
    <div class="header-graphic">
        <div class="graphic-circle"></div>
        <v-icon class="header-main-icon" color="#FFD700">mdi-account-question</v-icon>
    </div>
    <v-card-title class="dialog-title">Get In Touch</v-card-title>
    <v-card-subtitle class="dialog-subtitle">We'll get back to you within 24 hours</v-card-subtitle>
</div>
                
                <v-card-text class="dialog-body">
                    <v-row dense>
                        <v-col cols="12" md="6">
                            <v-text-field 
                                label="Your Name" 
                                v-model="formData.name" 
                                required
                                variant="outlined"
                                color="#FFD700"
                                bg-color="white"
                                density="comfortable"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field 
                                label="Contact Number" 
                                v-model="formData.contact"
                                variant="outlined"
                                color="#FFD700"
                                bg-color="white"
                                density="comfortable"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select 
                                :items="['Ambalangoda', 'Galle', 'Horana', 'Matara', 'Piliyandala', 'Kalutara']"
                                label="Branch" 
                                v-model="formData.branch" 
                                required 
                                variant="outlined"
                                color="#FFD700"
                                bg-color="white"
                                density="comfortable"
                            ></v-select>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-select 
                                :items="['Social Media', 'Website', 'Friend/Referral', 'Other']"
                                label="How did you hear about us?" 
                                v-model="formData.source" 
                                required
                                variant="outlined"
                                color="#FFD700"
                                bg-color="white"
                                density="comfortable"
                            ></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea 
                                label="Type your message" 
                                v-model="formData.message" 
                                required
                                variant="outlined"
                                color="#FFD700"
                                bg-color="white"
                                rows="4"
                                density="comfortable"
                            ></v-textarea>
                        </v-col>
                    </v-row>
                    <small class="text-caption text-medium-emphasis">*indicates required field</small>
                </v-card-text>
                
                <v-divider></v-divider>
                
                <v-card-actions class="dialog-actions">
                    <v-btn 
                        text="Close" 
                        variant="outlined" 
                        @click="dialogInq = false"
                        class="action-btn-close"
                        size="large"
                    >
                        <v-icon left>mdi-close</v-icon>
                        Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn 
                        color="#FFD700" 
                        text="Submit Inquiry" 
                        variant="flat" 
                        @click="sendInquiry"
                        class="action-btn-submit"
                        size="large"
                        dark
                    >
                        <v-icon left>mdi-send</v-icon>
                        Send Message
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Success Dialog -->
        <v-dialog v-model="successDialog" max-width="500" class="modern-dialog">
            <v-card class="dialog-card success-card">
                <v-card-text class="text-center success-body">
                    <div class="success-animation">
                        <div class="success-circle">
                            <v-icon color="success" size="48">mdi-check</v-icon>
                        </div>
                    </div>
                    <h3 class="success-title">Message Sent Successfully!</h3>
                    <p class="success-message">Thank you for reaching out. Our team will contact you shortly.</p>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="dialog-actions">
                    <v-spacer></v-spacer>
                    <v-btn 
                        text="Close" 
                        color="#FFD700" 
                        variant="flat" 
                        @click="successDialog = false"
                        class="action-btn-ok"
                        size="large"
                        dark
                    >
                        Got It
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Payment Terms Dialog -->
        <v-dialog v-model="dialogInstructions" max-width="700" class="modern-dialog">
            <v-card class="dialog-card terms-card">
                <div class="dialog-header">
    <div class="header-graphic">
        <div class="graphic-circle"></div>
        <v-icon class="header-main-icon" color="#FFD700">mdi-certificate</v-icon>
    </div>
    <v-card-title class="dialog-title">Terms and Conditions</v-card-title>
    <v-card-subtitle class="dialog-subtitle">For Payment Processing</v-card-subtitle>
</div>

                <v-divider></v-divider>

                <v-card-text class="terms-body">
                    <div class="terms-content">
                        <div class="term-section">
                            <p><strong>1. Introduction</strong></p>
                            <p>Welcome to CCBE. By using our services and making payments through our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
                        </div>
                        
                        <div class="term-section">
                            <p><strong>2. Payment Processing</strong></p>
                            <p>All payments for services provided by CCBE are securely processed through DFCC Bank's Internet Payment Gateway (IPG). By making a payment, you authorize CCBE to charge the payment method you provide.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>3. Non-Refundable Payments</strong></p>
                            <p>All payments made through our website are non-refundable. Once a payment is processed, it cannot be refunded, regardless of the transaction outcome.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>4. Payment Confirmation</strong></p>
                            <p>After a successful payment, you will receive a confirmation receipt from CCBE as proof of payment.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>5. Payment Methods</strong></p>
                            <p>We accept Visa, Mastercard, and other supported payment methods as listed by DFCC Bank.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>6. Security and Data Protection</strong></p>
                            <p>All transactions are securely processed using encryption technologies provided by DFCC Bank's IPG. Your payment details are never stored on our servers.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>7. Payment Disputes</strong></p>
                            <p>If you have issues with your payment, contact us at <strong>071 3 999 666</strong>. Payments are non-refundable unless required by law or if a system error occurs.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>8. Changes to Terms</strong></p>
                            <p>CCBE reserves the right to modify these terms at any time. Changes will be posted on this page.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>9. Governing Law</strong></p>
                            <p>These terms are governed by Sri Lankan law.</p>
                        </div>

                        <div class="term-section">
                            <p><strong>10. Contact Us</strong></p>
                            <p>Email: <a href="mailto:info@ccbe.lk" class="contact-link">info@ccbe.lk</a></p>
                            <p>Phone: 071 3 999 666</p>
                        </div>
                    </div>
                    
                    <v-checkbox 
                        v-model="agreed" 
                        label="I agree to the Terms and Conditions" 
                        color="#FFD700"
                        class="terms-checkbox mt-4"
                    ></v-checkbox>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="dialog-actions">
                    <v-btn 
                        text="Close" 
                        variant="outlined" 
                        @click="dialogInstructions = false"
                        class="action-btn-close"
                        size="large"
                    >
                        <v-icon left>mdi-close</v-icon>
                        Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn 
                        color="#FFD700" 
                        text="Continue to Payment" 
                        variant="flat" 
                        :disabled="!agreed" 
                        @click="proceedToPayment"
                        class="action-btn-submit"
                        size="large"
                        dark
                    >
                        <v-icon left>mdi-arrow-right</v-icon>
                        Continue
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
    name: 'UnifiedNavBar',
    data() {
        return {
            // Navigation data
            isMenuOpen: false,
            activeIndex: -1,

            // Assets
            logoPath: require("@/assets/Logo.png"),
            lblLMS: require("@/assets/icons/lblLMS.png"),
            lblPayment: require("@/assets/icons/lblPayments.png"),
            
            // Dialog states
            dialogInq: false,
            dialogInstructions: false,
            successDialog: false,
            agreed: false,

            // Form data
            formData: {
                name: "",
                contact: "",
                branch: "",
                source: "",
                message: "",
            },

            // Secondary navigation items
            secondaryNavItems: [
                {
                    text: "Home",
                    link: "/",
                    icon: "mdi-home"
                },
                {
                    text: "Our Programmes",
                    link: "/courses",
                    icon: "mdi-account-school"
                },
                {
                    text: "Core Values",
                    link: "/corevalues",
                    icon: "mdi-shield-check"
                },
                {
                    text: "About Us",
                    link: "/about",
                    icon: "mdi-target"
                },
                {
                    text: "News & Events",
                    link: "/news",
                    icon: "mdi-newspaper"
                },
                {
                    text: "Careers",
                    link: "/careers",
                    icon: "mdi-briefcase-outline"
                }
            ]
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMobileMenu() {
            this.isMenuOpen = false;
        },
        activateHover(index) {
            this.activeIndex = index;
        },
        
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
                // Use Galle Branch same Ids & Keys for Horana, Matara, Piliyandala
                Horana: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
                Matara: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
                },
                Piliyandala: {
                    serviceId: "service_a0rf5c8",
                    templateId: "template_6bv0ico",
                    publicKey: "5DFKJ881pqi_jmuPZ",
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

            const templateParams = {
                name: this.formData.name,
                contact: this.formData.contact || "Not provided",
                branch: this.formData.branch,
                source: this.formData.source || "Not provided",
                message: this.formData.message,
            };

            try {
                await emailjs.send(
                    selectedBranchConfig.serviceId,
                    selectedBranchConfig.templateId,
                    templateParams,
                    selectedBranchConfig.publicKey
                );
                this.dialogInq = false;
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

        proceedToPayment() {
            this.dialogInstructions = false;
            window.open('https://pay.ccbe.lk/', '_blank');
        },

        openDialog() {
            this.dialogInq = true;
        },
        
        closeDialog() {
            this.dialogInq = false;
        },
    },
};
</script>

<style scoped>
/* Unified Navigation Styles */
.unified-navbar {
    background: transparent;
    position: relative;
    z-index: 1000;
}

/* Main Navigation Header */
.nav-main-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Remove border-bottom on mobile devices */
@media (max-width: 992px) {
    .nav-main-header {
        border-bottom: none !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
}

.nav-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
}

/* Logo Section */
.logo-section {
    flex-shrink: 0;
}

.logo-wrapper {
    display: flex;
    align-items: center;
}

.brand-main {
    display: flex;
    align-items: center;
    gap: 15px;
}

.brand-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 2.5rem;
    background: linear-gradient(135deg, #FF6B00 0%, #FFD700 50%, #FFED4E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    text-shadow: 0 4px 8px rgba(255, 107, 0, 0.3);
    position: relative;
}

.brand-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #FF6B00, #FFD700, #FFED4E);
    border-radius: 2px;
}

.logo-image {
    position: relative;
}

.logo-img {
    height: 70px;
    width: auto;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    transition: all 0.3s ease;
}

.logo-img:hover {
    transform: scale(1.05) rotate(2deg);
}

/* Desktop Navigation */
.desktop-nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

/* Quick Actions */
.quick-actions {
    display: flex;
    gap: 15px;
    align-items: center;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
}

.action-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
}

.action-btn:hover::before {
    left: 100%;
}

.lms-btn {
    background: linear-gradient(135deg, #FFD700 0%, #eb8808 100%);
    color: black;
    border-color: #FFD700;
}

.payment-btn {
    background: linear-gradient(135deg, #0f0f0f 0%, #1c1d1d 100%);
    color: white;
    border-color: #2c2e30;
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.btn-text {
    font-size: 0.9rem;
    white-space: nowrap;
}

/* Navigation Links */
.nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    color: #1a1a1a;
    text-decoration: none;
    border-radius: 25px;
    transition: all 0.3s ease;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow: hidden;
    background: transparent;
    border: 2px solid transparent;
    cursor: pointer;
}

.nav-link:hover {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    color: #1a1a1a;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3);
    border-color: #FFD700;
}

.nav-hover-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transition: left 0.6s ease;
}

.nav-link:hover .nav-hover-effect {
    left: 100%;
}

.nav-icon {
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
}

.nav-link:hover .nav-icon {
    transform: scale(1.2);
}

.nav-text {
    font-size: 0.95rem;
    position: relative;
    z-index: 2;
}

/* Secondary Navigation Menu */
.secondary-nav-menu {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    padding: 0;
    box-shadow: 0 8px 32px rgba(255, 215, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Hide secondary navigation on mobile */
@media (max-width: 992px) {
    .secondary-nav-menu {
        display: none;
    }
}

.secondary-nav-container {
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
}

.nav-scroll-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 0 20px;
}

.nav-scroll-wrapper::-webkit-scrollbar {
    display: none;
}

.secondary-nav-links {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: max-content;
    justify-content: center;
    gap: 5px;
}

.secondary-nav-item {
    position: relative;
    flex-shrink: 0;
}

.secondary-nav-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 18px 25px;
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    border-radius: 0;
    background: transparent;
}

.secondary-nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transition: left 0.6s ease;
}

.secondary-nav-link:hover::before {
    left: 100%;
}

.secondary-nav-link:hover {
    background: rgba(255, 255, 255, 0.9);
    color: #1a1a1a;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.secondary-nav-icon {
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    z-index: 2;
}

.secondary-nav-link:hover .secondary-nav-icon {
    transform: scale(1.3) rotate(5deg);
    color: #FF6B00;
}

.secondary-nav-text {
    white-space: nowrap;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
}

.secondary-nav-link:hover .secondary-nav-text {
    font-weight: 700;
    letter-spacing: 0.5px;
}

.nav-underline {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #FF6B00, #FFD700, #FFED4E);
    border-radius: 3px 3px 0 0;
    transition: all 0.4s ease;
    transform: translateX(-50%);
}

.nav-underline.active {
    width: 80%;
}

/* Mobile Menu Toggle */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    border: none;
    padding: 12px;
    cursor: pointer;
    gap: 4px;
    border-radius: 10px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1001;
}

.mobile-menu-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
}

.toggle-bar {
    width: 25px;
    height: 3px;
    background: #1a1a1a;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.mobile-menu-toggle.active .toggle-bar:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active .toggle-bar:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active .toggle-bar:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation */
.mobile-navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(20px);
    z-index: 999;
    transform: translateX(-100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
}

.mobile-navigation.active {
    transform: translateX(0);
}

/* Mobile Navigation Header */
.mobile-nav-header {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mobile-logo {
    display: flex;
    align-items: center;
}

.mobile-brand-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

.mobile-close-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #1a1a1a;
}

.mobile-close-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
}

/* Mobile Navigation Content */
.mobile-nav-content {
    padding: 20px 30px 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 100%;
    overflow-y: auto;
}

.mobile-nav-section {
    margin-bottom: 15px;
}

.mobile-section-title {
    color: #FFD700;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.3);
}

/* Mobile Quick Actions */
.mobile-quick-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.mobile-action-btn {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 16px 20px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-action-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(10px);
}

/* Mobile Navigation Links */
.mobile-nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mobile-nav-item {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInRight 0.5s ease forwards;
}

.mobile-nav-item:nth-child(1) { animation-delay: 0.1s; }
.mobile-nav-item:nth-child(2) { animation-delay: 0.2s; }

.mobile-nav-link {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 16px 20px;
    color: white;
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

.mobile-nav-link:hover {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    color: #1a1a1a;
    transform: translateX(10px);
}

/* Mobile Secondary Links */
.mobile-secondary-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.mobile-secondary-item {
    opacity: 0;
    transform: translateX(-20px);
    animation: slideInRight 0.5s ease forwards;
}

.mobile-secondary-item:nth-child(1) { animation-delay: 0.3s; }
.mobile-secondary-item:nth-child(2) { animation-delay: 0.4s; }
.mobile-secondary-item:nth-child(3) { animation-delay: 0.5s; }
.mobile-secondary-item:nth-child(4) { animation-delay: 0.6s; }
.mobile-secondary-item:nth-child(5) { animation-delay: 0.7s; }
.mobile-secondary-item:nth-child(6) { animation-delay: 0.8s; }

@keyframes slideInRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.mobile-secondary-link {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 14px 18px;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    transition: all 0.3s ease;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-secondary-link:hover {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    color: #1a1a1a;
    transform: translateX(8px);
}

/* Mobile Navigation Footer */
.mobile-nav-footer {
    margin-top: auto;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-contact-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
}

.mobile-contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #FFD700;
    font-size: 0.9rem;
}

.mobile-contact-item .v-icon {
    color: #FFD700;
}

.mobile-social-links {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.mobile-social-link {
    color: #FFD700;
    padding: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.mobile-social-link:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-2px);
}

/* Dialog Styles */
.modern-dialog {
    font-family: 'Poppins', sans-serif;
}

.dialog-card {
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.inquiry-card .dialog-header {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    padding: 30px 24px 20px;
    text-align: center;
    position: relative;
}

.header-graphic {
    position: relative;
    margin-bottom: 15px;
}

.graphic-circle {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
}

.header-main-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.dialog-title {
    color: #1a1a1a;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 5px;
}

.dialog-subtitle {
    color: #1a1a1a;
    opacity: 0.8;
    font-size: 1rem;
}

.dialog-body {
    padding: 30px;
}

.dialog-actions {
    padding: 20px 30px;
}

.action-btn-close {
    border: 2px solid #666;
    color: #666;
    font-weight: 600;
    border-radius: 12px;
}

.action-btn-submit {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    color: #1a1a1a;
    font-weight: 600;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

/* Success Dialog */
.success-card {
    text-align: center;
}

.success-body {
    padding: 40px 30px;
}

.success-animation {
    margin-bottom: 25px;
}

.success-circle {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #014703 0%, #014b05 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    animation: scaleIn 0.5s ease;
}

@keyframes scaleIn {
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.success-title {
    color: #1a1a1a;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.success-message {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
}

.action-btn-ok {
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    color: #1a1a1a;
    font-weight: 600;
    border-radius: 12px;
}

/* Terms Dialog Styles */
.terms-card {
    max-height: 80vh;
    overflow: hidden;
}

.terms-body {
    padding: 25px;
    max-height: 400px;
    overflow-y: auto;
}

.terms-content {
    padding-right: 10px;
}

.term-section {
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.term-section:last-child {
    border-bottom: none;
}

.term-section p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 8px;
}

.term-section strong {
    color: #FFD700;
}

.contact-link {
    color: #FFD700;
    text-decoration: none;
}

.contact-link:hover {
    text-decoration: underline;
}

.terms-checkbox {
    margin-top: 20px;
}

/* Custom scrollbar for terms */
.terms-body::-webkit-scrollbar {
    width: 6px;
}

.terms-body::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
}

.terms-body::-webkit-scrollbar-thumb {
    background: #FFD700;
    border-radius: 3px;
}

.terms-body::-webkit-scrollbar-thumb:hover {
    background: #FFED4E;
}

/* Responsive Design */
@media (max-width: 1200px) {
    .desktop-nav {
        gap: 20px;
    }
    
    .action-btn {
        padding: 10px 16px;
    }
    
    .nav-link {
        padding: 10px 20px;
    }
    
    .secondary-nav-link {
        padding: 16px 22px;
        font-size: 0.95rem;
    }
}

@media (max-width: 992px) {
    .desktop-nav {
        display: none;
    }
    
    .mobile-menu-toggle {
        display: flex;
    }
    
    .brand-title {
        font-size: 2rem;
    }
    
    .logo-img {
        height: 60px;
    }
    
    .secondary-nav-links {
        justify-content: flex-start;
    }
    
    .secondary-nav-link {
        padding: 14px 20px;
        font-size: 0.9rem;
    }
}

@media (max-width: 768px) {
    .nav-header-container {
        padding: 12px 15px;
    }
    
    .brand-title {
        font-size: 1.8rem;
    }
    
    .logo-img {
        height: 50px;
    }
    
    .mobile-nav-content {
        padding: 20px 20px 30px;
    }
    
    .nav-scroll-wrapper {
        padding: 0 15px;
    }
}

@media (max-width: 576px) {
    .brand-title {
        font-size: 1.5rem;
    }
    
    .logo-img {
        height: 45px;
    }
    
    .mobile-action-btn,
    .mobile-nav-link,
    .mobile-secondary-link {
        padding: 14px 16px;
    }
    
    .dialog-body {
        padding: 20px;
    }
    
    .dialog-actions {
        padding: 15px 20px;
    }
}

/* Scroll Animation */
.unified-navbar {
    animation: slideDown 0.8s ease-out;
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

/* Hover Effects Enhancement */
.nav-link, .action-btn, .secondary-nav-link {
    position: relative;
    overflow: hidden;
}

.nav-link::after, .action-btn::after, .secondary-nav-link::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.nav-link:hover::after, .action-btn:hover::after, .secondary-nav-link:hover::after {
    width: 300px;
    height: 300px;
}

/* Ensure container-fluid has proper padding */
.container-fluid {
    padding: 0;
    margin: 0;
    width: 100%;
}
</style>
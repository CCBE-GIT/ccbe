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
                                <div class="logo-image">
                                    <img :src="logoPath" alt="CCBE Logo" class="logo-img" />
                                </div>
                                <div class="brand-text">
                                    <h2 class="brand-title">CCBE</h2>
                                    <small class="brand-subtext">Cambridge College of British English</small>
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
                            <!-- <a href="https://pay.ccbe.lk/" target="_blank" class="action-btn payment-btn">                                
                                <span class="btn-text">Make Payment</span>
                            </a> -->
                        </div>

                        <!-- Main Navigation Links -->
                        <ul class="nav-links">
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">
                                    <div class="nav-icon">
                                        <i class="material-icons">phone</i>
                                    </div>
                                    <span class="nav-text">Contact</span>
                                    <div class="nav-hover-effect"></div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click.prevent="openInquiryDialog">
                                    <div class="nav-icon">
                                        <i class="material-icons">help</i>
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
                                        <i class="material-icons">{{ item.icon }}</i>
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
                        <i class="material-icons">close</i>
                    </button>
                </div>
            </div>

            <div class="mobile-nav-content">
                <!-- Mobile Quick Actions -->
                <div class="mobile-quick-actions">
                    <a href="https://classroom.google.com/" target="_blank" class="mobile-action-btn lms-btn" @click="closeMobileMenu">
                        <span>LMS Portal</span>
                    </a>
                    <!-- <a href="https://pay.ccbe.lk/" target="_blank" class="mobile-action-btn payment-btn" @click="closeMobileMenu">                        
                        <span>Make Payment</span>
                    </a> -->
                </div>

                <!-- Mobile Main Navigation Links -->
                <div class="mobile-nav-section">
                    <h3 class="mobile-section-title">Main Menu</h3>
                    <ul class="mobile-nav-links">
                        <li class="mobile-nav-item">
                            <a class="mobile-nav-link" href="/contact" @click="closeMobileMenu">
                                <i class="material-icons">phone</i>
                                <span>Contact</span>
                            </a>
                        </li>
                        <li class="mobile-nav-item">
                            <a class="mobile-nav-link" @click.prevent="openInquiryDialog(); closeMobileMenu();">
                                <i class="material-icons">help</i>
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
                                <i class="material-icons">{{ item.icon }}</i>
                                <span>{{ item.text }}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Mobile Footer -->
                <div class="mobile-nav-footer">
                    <div class="mobile-contact-info">
                        <div class="mobile-contact-item">
                            <i class="material-icons">email</i>
                            <span>info@ccbe.lk</span>
                        </div>
                        <div class="mobile-contact-item">
                            <i class="material-icons">phone</i>
                            <span>071 3 999 666</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Inquiry Dialog -->
    <div class="dialog-inquiry" v-show="dialogInq">
        <div class="dialog-overlay" @click="closeInquiryDialog"></div>
        <div class="dialog-content">
            <div class="dialog-card inquiry-card">
                <div class="dialog-header">
                    <div class="header-graphic">
                        <div class="graphic-circle"></div>
                        <i class="material-icons header-main-icon">help_outline</i>
                    </div>
                    <h2 class="dialog-title">Get In Touch</h2>
                    <p class="dialog-subtitle">We'll get back to you within 24 hours</p>
                </div>
                
                <div class="dialog-body">
                    <form @submit.prevent="sendInquiry" class="form-grid">
                        <div class="form-group">
                            <label for="name">Your Name *</label>
                            <input type="text" id="name" class="form-control" v-model="formData.name" required placeholder="Enter your name">
                        </div>
                        
                        <div class="form-group">
                            <label for="contact">Contact Number</label>
                            <input type="tel" id="contact" class="form-control" v-model="formData.contact" placeholder="Enter contact number">
                        </div>
                        
                        <div class="form-group">
                            <label for="branch">Branch *</label>
                            <select id="branch" class="form-control" v-model="formData.branch" required>
                                <option value="">Select a branch</option>
                                <option value="Ambalangoda">Ambalangoda</option>
                                <option value="Galle">Galle</option>
                                <option value="Horana">Horana</option>
                                <option value="Matara">Matara</option>
                                <option value="Piliyandala">Piliyandala</option>
                                <option value="Kalutara">Kalutara</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="source">How did you hear about us? *</label>
                            <select id="source" class="form-control" v-model="formData.source" required>
                                <option value="">Select an option</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Website">Website</option>
                                <option value="Friend/Referral">Friend/Referral</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        <div class="form-group full-width">
                            <label for="message">Type your message *</label>
                            <textarea id="message" class="form-control" v-model="formData.message" required rows="4" placeholder="Enter your message here..."></textarea>
                        </div>
                        
                        <div class="form-group full-width">
                            <small class="required-note">* indicates required field</small>
                        </div>
                        
                        <div class="form-group full-width dialog-actions">
                            <button type="button" class="btn btn-outline action-btn-close" @click="closeInquiryDialog">
                                <i class="material-icons">close</i>
                                Cancel
                            </button>
                            <div class="spacer"></div>
                            <button type="submit" class="btn btn-primary action-btn-submit">
                                <i class="material-icons">send</i>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Success Dialog -->
    <div class="dialog-success" v-show="successDialog">
        <div class="dialog-overlay" @click="closeSuccessDialog"></div>
        <div class="dialog-content">
            <div class="dialog-card success-card">
                <div class="success-body">
                    <div class="success-animation">
                        <div class="success-circle">
                            <i class="material-icons success-icon">check</i>
                        </div>
                    </div>
                    <h3 class="success-title">Message Sent Successfully!</h3>
                    <p class="success-message">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
                <div class="dialog-actions">
                    <div class="spacer"></div>
                    <button class="btn btn-primary action-btn-ok" @click="closeSuccessDialog">
                        Got It
                    </button>
                </div>
            </div>
        </div>
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
            
            // Dialog states
            dialogInq: false,
            successDialog: false,

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
                    icon: "home"
                },
                {
                    text: "Our Programmes",
                    link: "/courses",
                    icon: "school"
                },
                {
                    text: "Core Values",
                    link: "/corevalues",
                    icon: "verified_user"
                },
                {
                    text: "About Us",
                    link: "/about",
                    icon: "info"
                },
                {
                    text: "News & Events",
                    link: "/news",
                    icon: "newspaper"
                },
                {
                    text: "Careers",
                    link: "/careers",
                    icon: "work"
                }
            ]
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        closeMobileMenu() {
            this.isMenuOpen = false;
            document.body.style.overflow = '';
        },
        activateHover(index) {
            this.activeIndex = index;
        },
        openInquiryDialog() {
            this.dialogInq = true;
            document.body.style.overflow = 'hidden';
        },
        closeInquiryDialog() {
            this.dialogInq = false;
            document.body.style.overflow = '';
        },
        closeSuccessDialog() {
            this.successDialog = false;
            document.body.style.overflow = '';
        },
        openDialog() {
            this.dialogInq = true;
        },
        closeDialog() {
            this.dialogInq = false;
        },
        
        async sendInquiry() {
            if (!this.formData.name || !this.formData.branch || !this.formData.message || !this.formData.source) {
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
        }
    },
    mounted() {
        // Add escape key listener to close dialogs
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.dialogInq) {
                    this.closeInquiryDialog();
                }
                if (this.successDialog) {
                    this.closeSuccessDialog();
                }
            }
        });
        
        // Close mobile menu when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && !e.target.closest('.mobile-navigation') && !e.target.closest('.mobile-menu-toggle')) {
                this.closeMobileMenu();
            }
        });
    }
};
</script>

<style>
/* Import Material Icons CSS */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

/* Import Poppins Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}

/* Material Icons styling */
.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
}

/* Material Icons size adjustments */
.nav-icon .material-icons,
.secondary-nav-icon .material-icons {
    font-size: 20px;
}

.mobile-nav-link .material-icons,
.mobile-secondary-link .material-icons {
    font-size: 22px;
    color: #FFD700;
}

/* Success icon color */
.success-icon {
    color: white !important;
}

/* Unified Navigation Styles */
.unified-navbar {
    background: transparent;
    position: relative;
    z-index: 1000;
    width: 100%;
}

/* Main Navigation Header */
.nav-main-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
}

/* Remove border-bottom on mobile devices */
@media (max-width: 992px) {
    .nav-main-header {
        border-bottom: none !important;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
}

.container-fluid {
    width: 100%;
    max-width: 100%;
    padding: 0;
}

.nav-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    max-width: 1400px;
    margin: 0 auto;
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
    gap: 20px;
}

.brand-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.brand-title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    background: linear-gradient(135deg, #FFD700 0%, #FF6B00 50%, #FFD700 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    line-height: 1;
    position: relative;
}

/* .brand-title::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #FF6B00, #FFD700, #FFED4E);
    border-radius: 2px;
} */

.brand-subtext {
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    font-weight: 550;
    color: #666;
    letter-spacing: 0.5px;
    margin-top: 2px;
}

.logo-image {
    position: relative;
}

.logo-img {
    height: 75px;
    width: auto;
    /* filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)); */
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
    cursor: pointer;
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
    width: 100%;
}

/* Hide secondary navigation on mobile */
@media (max-width: 992px) {
    .secondary-nav-menu {
        display: none;
    }
}

.secondary-nav-container {
    max-width: 1400px;
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
    padding: 10px 30px;
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 0.8rem;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    border-radius: 0;
    background: transparent;
    cursor: pointer;
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
    background: linear-gradient(white);
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
    cursor: pointer;
}

.mobile-secondary-link:hover {
    background: linear-gradient(white);
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

.mobile-contact-item .material-icons {
    color: #FFD700;
    font-size: 18px;
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
    text-decoration: none;
}

.mobile-social-link:hover {
    background: rgba(255, 215, 0, 0.2);
    transform: translateY(-2px);
}

/* DIALOG STYLES */
.dialog-inquiry,
.dialog-success {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1;
}

.dialog-content {
    position: relative;
    z-index: 2;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    animation: dialogFadeIn 0.3s ease;
}

@keyframes dialogFadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.dialog-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 100%;
}

/* Header Styles */
.dialog-header {
    padding: 2rem 2rem 1rem;
    text-align: center;
    background: linear-gradient(135deg, #FFD700 0%, #FFED4E 100%);
    color: white;
}

.header-graphic {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 1rem;
}

.graphic-circle {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.header-main-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: bold;
    color: #FFD700;
}

.dialog-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
}

.dialog-subtitle {
    font-size: 1rem;
    opacity: 0.8;
    color: #1a1a1a;
}

/* Form Styles */
.dialog-body {
    padding: 2rem;
}

.form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group.full-width {
    grid-column: span 2;
}

.form-control {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.3s ease;
    background: white;
}

.form-control:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

select.form-control:focus {
    background-color: white;
}

.dialog-body label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
}

.required-note {
    display: block;
    color: #666;
    font-size: 0.85rem;
    margin-top: 1rem;
    font-family: 'Poppins', sans-serif;
}

/* Success Dialog Styles */
.success-body {
    padding: 3rem 2rem;
    text-align: center;
}

.success-animation {
    margin-bottom: 1.5rem;
}

.success-circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #4CAF50;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: scaleIn 0.5s ease-out, pulse 2s infinite;
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

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
    }
}

.success-icon {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
}

.success-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
    font-family: 'Poppins', sans-serif;
}

.success-message {
    color: #666;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 2rem;
}

/* Dialog Actions */
.dialog-actions {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    background: #f8f9fa;
    border-top: 1px solid #e0e0e0;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Poppins', sans-serif;
    min-width: 120px;
}

.btn-outline {
    background: transparent;
    border: 2px solid #e0e0e0;
    color: #666;
}

.btn-outline:hover {
    background: #f5f5f5;
    border-color: #ccc;
}

.btn-primary {
    background: #FFD700;
    color: #000;
    font-weight: 600;
}

.btn-primary:hover {
    background: #ffea00;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.spacer {
    flex: 1;
}

/* Button hover effects */
.action-btn-submit:hover {
    background: #ffea00 !important;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.action-btn-close:hover {
    background: #f5f5f5;
    border-color: #ccc;
}

.action-btn-ok:hover {
    background: #ffea00 !important;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
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
    
    .nav-header-container {
        padding: 15px;
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
    
    .brand-subtext {
        font-size: 0.7rem;
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
    
    .brand-main {
        gap: 15px;
    }
    
    .brand-title {
        font-size: 1.8rem;
    }
    
    .brand-subtext {
        font-size: 0.65rem;
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
    
    .form-grid {
        grid-template-columns: 1fr;
    }
    
    .form-group.full-width {
        grid-column: span 1;
    }
    
    .dialog-content {
        width: 95%;
        margin: 1rem;
        padding: 0.5rem;
    }
    
    .dialog-body {
        padding: 1.5rem;
    }
    
    .dialog-actions {
        padding: 1rem;
        flex-direction: column;
        gap: 10px;
    }
    
    .spacer {
        display: none;
    }
    
    .btn {
        width: 100%;
        min-width: auto;
    }
    
    /* Ensure dialog stays centered on mobile */
    .dialog-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 2rem);
        margin: 0;
    }
}

@media (max-width: 576px) {
    .brand-title {
        font-size: 1.5rem;
    }
    
    .brand-subtext {
        font-size: 0.6rem;
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
        padding: 1rem;
    }
    
    .dialog-actions {
        padding: 0.75rem;
    }
    
    .dialog-title {
        font-size: 1.5rem;
    }
    
    .dialog-subtitle {
        font-size: 0.9rem;
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
</style>
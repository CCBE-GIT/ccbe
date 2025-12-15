<template>
    <div>
        <!-- Footer -->
        <footer class="footer-container" aria-label="Site footer">
            <div class="footer-content">
                <div class="mt-2">
                    <strong class="title-footer">Shaping the Future of Education</strong>
                </div>
                <div class="mt-2">
                    <strong class="contact-info">
                        <span aria-label="Contact information">
                            Hot Line: 071 3 999 666 | Email: info@ccbe.lk
                        </span>
                    </strong>
                </div>
                <div aria-label="Social media links" class="social-links">
                    <button 
                        v-for="icon in icons" 
                        :key="icon.name" 
                        class="social-btn" 
                        @click="navigate(icon.link)"
                        :aria-label="`Visit our ${icon.name} page`"
                        :title="icon.name"
                    >
                        <img :src="icon.icon" :alt="`${icon.name} icon`" width="24" height="24" />
                    </button>
                </div>
                <div class="logos-container">
                    <div class="logos-grid">
                        <div class="logo-item">
                            <img :src="logo" alt="CCBE Company Logo" width="200" height="150" />
                        </div>
                        <div class="logo-item">
                            <img :src="lable1" class="responsive-logo" alt="Cambridge English Qualifications Logo" width="200" height="150" />
                        </div>
                        <div class="logo-item">
                            <img :src="lable2" class="responsive-logo" alt="IELTS Logo" width="200" height="150" />
                        </div>
                        <div class="logo-item">
                            <img :src="lable3" class="responsive-logo" alt="Cambridge English School Logo" width="200" height="150" />
                        </div>
                    </div>
                </div>
                <div class="policy-links">
                    <a href="#" @click.prevent="showPrivacyPolicy = true" class="privacy-link">Privacy Policy</a> |
                    <a href="#" @click.prevent="showTermsOfService = true" class="privacy-link">Terms of Service</a>
                </div>
                <div class="footer-text">
                    At Cambridge College of British English, we are committed to providing students with the tools they
                    need to succeed academically and beyond.
                    <br />Copyright © 2025 Cambridge College of British English. All rights reserved.
                </div>
            </div>
        </footer>

        <!-- Privacy Policy Modal -->
        <div class="modal-overlay" :class="{ active: showPrivacyPolicy }" @click="closeModalOnOverlay">
            <div class="modal" style="max-width: 800px;" @click.stop>
                <div class="modal-header">
                    <h2 class="modal-title">Privacy Policy</h2>
                </div>
                <div class="modal-content">
                    <p>
                        At Cambridge College of British English (CCBE), we are committed to protecting your privacy and
                        ensuring the security of your personal information. This Privacy Policy explains how we collect,
                        use, disclose, and safeguard the information you provide when using our platform, website, and
                        services. By accessing or using our services, you consent to the practices described in this policy.
                    </p>

                    <h4 class="policy-heading">1. Information We Collect</h4>
                    <strong>a. Personal Information</strong>
                    <ul>
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Address</li>
                    </ul>
                    <strong>b. Payment Information</strong>
                    <ul>
                        <li>Payment Card Details</li>
                        <li>Billing Address</li>
                        <li>Transaction History</li>
                    </ul>
                    <p>We do not store payment details directly on our servers. Payments are securely processed through
                        trusted third-party payment gateways.</p>

                    <h4 class="policy-heading">2. How We Use Your Information</h4>
                    <ul>
                        <li>Service Delivery</li>
                        <li>Personalization</li>
                        <li>Communication</li>
                        <li>Marketing</li>
                        <li>Security</li>
                        <li>Research and Improvement</li>
                    </ul>

                    <h4 class="policy-heading">3. Information Sharing and Disclosure</h4>
                    <strong>a. Service Providers</strong>
                    <ul>
                        <li>Payment Processing</li>
                        <li>Data Analysis</li>
                        <li>Platform Maintenance</li>
                        <li>Email and Communication</li>
                    </ul>
                    <strong>b. Legal Requirements</strong>
                    <p>We may disclose your information if required by law, legal process, or regulatory authorities.</p>

                    <h4 class="policy-heading">4. Data Security</h4>
                    <p>We use SSL encryption and other technical measures to protect your data. However, no platform can
                        guarantee 100% security.</p>

                    <h4 class="policy-heading">5. Retention of Information</h4>
                    <p>We retain your information only as long as necessary for operational and legal purposes.</p>

                    <h4 class="policy-heading">6. Your Rights</h4>
                    <ul>
                        <li>Access</li>
                        <li>Correction</li>
                        <li>Deletion</li>
                        <li>Opt-Out</li>
                    </ul>

                    <h4 class="policy-heading">7. Cookies and Tracking Technologies</h4>
                    <p>We use cookies to improve your browsing experience. You can manage cookie settings in your browser.
                    </p>

                    <h4 class="policy-heading">8. Third-Party Links</h4>
                    <p>We are not responsible for third-party privacy practices. Please review their policies.</p>

                    <h4 class="policy-heading">9. Children's Privacy</h4>
                    <p>Our services are not intended for individuals under 13 without parental consent.</p>

                    <h4 class="policy-heading">10. Changes to the Privacy Policy</h4>
                    <p>We may update this policy periodically. Please review it regularly for changes.</p>

                    <h4 class="policy-heading">11. Contact Us</h4>
                    <p>Email: info@ccbe.lk<br>Tel No: 071 3 999 666</p>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-text" @click="showPrivacyPolicy = false" aria-label="Close privacy policy dialog">Close</button>
                </div>
            </div>
        </div>

        <!-- Terms of Service Modal -->
        <div class="modal-overlay" :class="{ active: showTermsOfService }" @click="closeModalOnOverlay">
            <div class="modal" style="max-width: 600px;" @click.stop>
                <div class="modal-header">
                    <h2 class="modal-title">Terms & Conditions</h2>
                </div>
                <div class="modal-content">
                    <h4>Welcome to ccbe.lk!</h4>
                    <p>
                        These terms and conditions outline the rules and regulations for the use of our website. By
                        accessing this website, we assume you accept these terms and conditions. Do not continue to use
                        ccbe.lk if you do not agree to all the terms and conditions stated on this page.
                    </p>

                    <h4 class="policy-heading">1. Use of Site</h4>
                    <ul>
                        <li>Use the site for any illegal activities or violate any local, state, or international laws.</li>
                        <li>Attempt to interfere with the site's security features or its operation.</li>
                        <li>Use the site to distribute harmful content, such as malware or spam.</li>
                    </ul>

                    <h4 class="policy-heading">2. Intellectual Property Rights</h4>
                    <p>
                        All content on ccbe.lk, including text, graphics, logos, images, and any other material, is the
                        property of Cambridge College of British English and is protected by copyright and other
                        intellectual property rights. Unauthorized use or reproduction is prohibited.
                    </p>
                    <ul>
                        <li>You may not modify, distribute, or reproduce any content from this site without our express
                            written consent.</li>
                        <li>Any trademarks or logos displayed on this site are the property of Cambridge College of British
                            English and may not be used without permission.</li>
                    </ul>

                    <h4 class="policy-heading">3. Privacy Policy</h4>
                    <p>
                        Your privacy is very important to us. Please review our Privacy Policy to understand our practices
                        regarding personal information.
                    </p>
                    <ul>
                        <li>We use SSL encryption and industry-standard security measures to protect your data.</li>
                        <li>We will not share your personal information with third parties without your consent, except as
                            required by law.</li>
                    </ul>

                    <h4 class="policy-heading">4. Links to Third-Party Websites</h4>
                    <p>
                        ccbe.lk may include links to third-party websites that are not controlled by us. We do not:
                    </p>
                    <ul>
                        <li>Endorse the content of these third-party websites.</li>
                        <li>Assume any responsibility for the content or practices of third-party websites.</li>
                    </ul>
                    <p>You access these links at your own risk.</p>

                    <h4 class="policy-heading">5. Payment Terms</h4>
                    <ul>
                        <li>Payments are securely processed through trusted third-party gateways.</li>
                        <li>We do not store payment details directly on our servers.</li>
                        <li>Any refunds or exchanges are governed by our Refund Policy.</li>
                    </ul>

                    <h4 class="policy-heading">6. Limitation of Liability</h4>
                    <p>
                        Cambridge College of British English is not liable for any damages or losses related to the use or
                        inability to use the website. This includes, but is not limited to:
                    </p>
                    <ul>
                        <li>Errors, interruptions, or technical issues on the site.</li>
                        <li>Unauthorized access to user data.</li>
                        <li>Loss of data or profits arising from the use of the site.</li>
                    </ul>

                    <h4 class="policy-heading">7. Changes to Terms</h4>
                    <p>
                        We reserve the right to update or change these terms and conditions at any time without prior
                        notice.
                    </p>
                    <ul>
                        <li>Any changes will be posted on this page.</li>
                        <li>Your continued use of the site after changes are posted constitutes your acceptance of the
                            updated terms.</li>
                    </ul>

                    <h4 class="policy-heading">8. Governing Law</h4>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of Sri Lanka.
                    </p>
                    <ul>
                        <li>Any disputes will be resolved under these laws.</li>
                        <li>Any legal action arising out of the use of this site shall be brought exclusively in the courts
                            of Sri Lanka.</li>
                    </ul>

                    <h4 class="policy-heading">9. Contact Information</h4>
                    <p>
                        If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                    <ul>
                        <li><strong>Email:</strong> info@ccbe.lk</li>
                        <li><strong>Phone:</strong> 071 3 999 666</li>
                    </ul>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-text" @click="showTermsOfService = false">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterPage',
    data() {
        return {
            logo: require('@/assets/Logo.png'),
            lable1: require('@/assets/WEP.png'),
            lable2: "https://ik.imagekit.io/u3wbiya66/IELTS.png",
            lable3: require('@/assets/CES.png'),
            icons: [
                { 
                    name: 'instagram', 
                    link: 'https://www.instagram.com/ccbeamb',
                    icon: require('@/assets/social media icon/instagram.png') 
                },
                { 
                    name: 'facebook', 
                    link: 'https://www.facebook.com/ccbe.ambalangoda',
                    icon: require('@/assets/social media icon/facebook.png') 
                },
                { 
                    name: 'youtube', 
                    link: 'https://www.youtube.com/@ccbeinternational',
                    icon: require('@/assets/social media icon/youtube.png') 
                },
                { 
                    name: 'tiktok', 
                    link: 'https://www.tiktok.com/@cambridgecollege9',
                    icon: require('@/assets/social media icon/tiktok.png') 
                },
            ],
            showPrivacyPolicy: false,
            showTermsOfService: false,
        };
    },
    methods: {
        navigate(link) {
            window.open(link, '_blank');
        },
        closeModalOnOverlay(event) {
            if (event.target.classList.contains('modal-overlay')) {
                this.showPrivacyPolicy = false;
                this.showTermsOfService = false;
            }
        }
    },
    mounted() {
        // Add keyboard event listener for Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.showPrivacyPolicy = false;
                this.showTermsOfService = false;
            }
        });
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-container {
    background-color: #FFCC00;
    color: #212121;
    padding: 20px;
    margin-top: 40px;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.title-footer {
    font-size: 25px;
    display: block;
    margin-top: 10px;
    color: #212121;
}

.contact-info {
    font-size: 16px;
    margin: 10px 0;
    color: #212121;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

.social-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.social-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.social-btn img {
    width: 24px;
    height: 24px;
    display: block;
}

.logos-container {
    width: 100%;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
}

.logos-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.logo-item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;    
    justify-content: center; 
    text-align: center;
}

.responsive-logo {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
    padding: 5px;
    max-height: 150px;
}

.policy-links {
    margin: 15px 0;
}

.privacy-link {
    color: #212121;
    font-size: 14px;
    text-decoration: none;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
    display: inline-block;
}

.privacy-link:hover {
    background-color: #f5f5f5;
    color: #1a73e8;
    text-decoration: underline;
}

.footer-text {
    font-size: 14px;
    line-height: 1.6;
    margin-top: 15px;
    color: #212121;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Modal/Dialog Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-overlay.active {
    display: flex;
}

.modal {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    max-width: 90%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
}

.modal-header {
    padding: 20px 24px 10px;
    border-bottom: 1px solid #e0e0e0;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #212121;
}

.modal-content {
    padding: 20px 24px;
    overflow-y: auto;
    max-height: 500px;
    flex: 1;
}

.modal-actions {
    padding: 8px 16px 16px;
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #e0e0e0;
}

.btn {
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.btn-primary {
    background-color: #1976d2;
    color: white;
}

.btn-primary:hover {
    background-color: #1565c0;
}

.btn-text {
    background: none;
    color: #1976d2;
}

.btn-text:hover {
    background-color: rgba(25, 118, 210, 0.08);
}

.policy-heading {
    text-align: left;
    font-weight: bold;
    margin: 16px 0 8px;
    color: #212121;
}

.modal-content p, .modal-content ul {
    margin-bottom: 12px;
    line-height: 1.6;
}

.modal-content ul {
    padding-left: 20px;
}

.modal-content strong {
    display: block;
    margin-top: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .logos-grid {
        flex-direction: column;
        align-items: center;
    }
    
    .logo-item {
        width: 100%;
        max-width: 250px;
    }
    
    .social-links {
        gap: 10px;
    }
    
    .title-footer {
        font-size: 20px;
    }
    
    .modal {
        width: 95%;
        max-height: 85vh;
    }
}

@media (max-width: 480px) {
    .footer-container {
        padding: 15px 10px;
    }
    
    .title-footer {
        font-size: 18px;
    }
    
    .contact-info {
        font-size: 14px;
    }
}
</style>
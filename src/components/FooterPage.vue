<template>
    <v-footer class="text-center d-flex flex-column mt-5" color="#FFCC00" aria-label="Site footer">
        <div class="footer">
            <div class="mt-2">
                <strong class="title-footer">Shaping the Future of Education</strong>
            </div>
            <div class="mt-2">
                <strong class="Contact"><span aria-label="Contact information">
                        Hot Line: 071 3 999 666 | Email: info@ccbe.lk
                    </span> </strong>
            </div>
            <div aria-label="Social media links">
                <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" variant="text" @click="navigate(icon.link)">
                    <v-icon>{{ icon.name }}</v-icon>
                </v-btn>
            </div>
            <div class="logof-container">
                <v-row justify="center" align="center" class="px-4">
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="" :src="logo" alt="CCBE Company Logo" width="200" height="150" />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="responsive-logo" :src="lable1" alt="Cambridge English Qualifications Logo" />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="responsive-logo" :src="lable2" alt="IELTS Logo" />
                    </v-col>
                    <v-col cols="12" sm="6" md="3" lg="2" class="text-center">
                        <img class="responsive-logo" :src="lable3" alt="Cambridge English School Logo" />
                    </v-col>
                </v-row>
            </div>
            <div class="pt-2">
                <a href="#" @click.prevent="showPrivacyPolicy = true" class="privacy-link">Privacy Policy</a> |
                <a href="#" @click.prevent="showTermsOfService = true" class="privacy-link">Terms of Service</a>
            </div>
            <div class="pt-0 mt-3">
                At Cambridge College of British English, we are committed to providing students with the tools they
                need to succeed academically and beyond.
                <br />Copyright © 2025 Cambridge College of British English. All rights reserved.
            </div>
        </div>
    </v-footer>
    <!-- Privacy Policy Dialog -->
    <v-dialog v-model="showPrivacyPolicy" max-width="800px" scrollable>
        <v-card>
            <v-card-title class="text-h5">Privacy Policy</v-card-title>
            <v-card-text style="max-height: 500px; overflow-y: auto;">
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
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" text @click="showPrivacyPolicy = false"  aria-label="Close terms of service dialog">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <!-- Terms of Service Dialog -->
    <v-dialog v-model="showTermsOfService" max-width="600px">
        <v-card>
            <v-card-title class="text-h5">Terms & Conditions</v-card-title>
            <v-card-text>
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
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" text @click="showTermsOfService = false">Close</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>

import lable2Img from '@/assets/IELTS_up.png'

export default {
    data() {
        return {
            logo: require('@/assets/Logo.png'),
            lable1: require('@/assets/WEP.png'),
            lable2: lable2Img,
            lable3: require('@/assets/CES.png'),
            icons: [
                { name: 'mdi-instagram', link: 'https://www.instagram.com/ccbeamb' },
                { name: 'mdi-facebook', link: 'https://www.facebook.com/ccbe.ambalangoda' },
                { name: 'mdi-youtube', link: 'https://www.youtube.com/@cambridgecollegeofbritishe9360' },
                { name: 'mdi-music-note', link: 'https://www.tiktok.com/@cambridgecollege9' },
            ],
            showPrivacyPolicy: false,
            showTermsOfService: false,
        };
    },
    methods: {
        navigate(link) {
            window.open(link, '_blank'); // Open the link in a new tab
        },
    },
};
</script>

<style>
.footer {
    justify-content: center;
}

.title-footer {
    font-size: 25px;
}

.logof-container {
    width: 100%;
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.responsive-logo {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
    padding: 5px;
}

.v-footer {
    padding-bottom: 20px;
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

.policy-heading {
    text-align: left;
    font-weight: bold;
    margin-bottom: 8px;
}
</style>

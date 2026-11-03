<template>
    <div>
        <!-- Footer -->
        <footer class="footer-container" aria-label="Site footer">

            <!-- Soft wave edge -->
            <div class="footer-wave" aria-hidden="true">
                <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
                    <path d="M0,50 C240,100 480,0 720,40 C960,80 1200,10 1440,50 L1440,90 L0,90 Z"></path>
                </svg>
            </div>

            <div class="footer-body">
                <div class="footer-content">

                    <div class="footer-grid">

                        <!-- Brand -->
                        <div class="footer-brand">
                            <strong class="title-footer">Shaping the Future of Education</strong>
                            <p class="footer-text">
                                At Cambridge College of British English, we are committed to providing students with the tools they
                                need to succeed academically and beyond.
                            </p>

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
                        </div>

                        <!-- Explore -->
                        <div class="footer-col">
                            <h3 class="footer-heading">Explore</h3>
                            <ul class="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/courses">Our Programmes</a></li>
                                <li><a href="/about">About CCBE</a></li>
                                <li><a href="/news">News &amp; Events</a></li>
                                <li><a href="/corevalues">Core Values</a></li>
                            </ul>
                        </div>

                        <!-- Contact -->
                        <div class="footer-col">
                            <h3 class="footer-heading">Contact us</h3>
                            <strong class="contact-info">
                                <span aria-label="Contact information">
                                    <!-- Hot Line: 071 3 999 666 | Email: info@ccbe.lk -->
                                    <p><a href="tel:+94713999666">+94 713 999 666</a> (Hot Line)</p>
                                    <p><a href="mailto:info@ccbe.lk">info@ccbe.lk</a></p>
                                </span>
                            </strong>
                            <a class="hotline-btn" href="tel:+94713999666">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Call the hot line
                            </a>
                        </div>
                    </div>

                    <!-- Logos -->
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
                </div>

                <!-- Bottom bar (soft charcoal) -->
                <div class="footer-bottom">
                    <div class="footer-bottom-inner">
                        <div class="copyright">
                            Copyright © {{ currentYear }} Cambridge College of British English. All rights reserved.
                        </div>
                        <div class="policy-links">
                            <a href="#" @click.prevent="showPrivacyPolicy = true" class="privacy-link">Privacy Policy</a>
                            <span class="policy-divider" aria-hidden="true"></span>
                            <a href="#" @click.prevent="showTermsOfService = true" class="privacy-link">Terms of Service</a>
                        </div>
                    </div>
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
                    <!-- <p>Email: info@ccbe.lk<br>Tel No: 071 3 999 666</p> -->
                    <p>Tel No:<a href="tel:+94713999666"> +94 713 999 666</a> (Hot Line)</p>
                    <p>Email:<a href="mailto:info@ccbe.lk"> info@ccbe.lk</a></p>
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
                        <li><p>Tel No:<a href="tel:+94713999666"> +94 713 999 666</a> (Hot Line)</p></li>
                        <li><p>Email:<a href="mailto:info@ccbe.lk"> info@ccbe.lk</a></p></li>
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
            currentYear: new Date().getFullYear(),
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
        },
        handleEscape(e) {
            if (e.key === 'Escape') {
                this.showPrivacyPolicy = false;
                this.showTermsOfService = false;
            }
        }
    },
    mounted() {
        // Add keyboard event listener for Escape key
        document.addEventListener('keydown', this.handleEscape);
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleEscape);
    }
};
</script>

<style scoped>
/*
  Eye-comfortable palette (soft, warm, no pure black / pure white glare)
  --butter : #FFF3D6   footer background
  --sand   : #FCE7B2   wave / dividers
  --amber  : #F4B942   soft yellow accent
  --apricot: #F2935A   soft orange accent
  --rust   : #B4561C   readable orange for text and hover
  --ink    : #3A332E   soft charcoal (text + bottom bar)
  --muted  : #6B6159   secondary text
*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* ══ Shell ════════════════════════════════════════════ */
.footer-container {
    margin-top: 60px;
    text-align: left;
    color: #3A332E;
}

.footer-wave { line-height: 0; margin-bottom: -1px; }
.footer-wave svg { display: block; width: 100%; height: 70px; }
.footer-wave path { fill: #FFF3D6; }

.footer-body {
    background: #FFF3D6;
    background-image:
        radial-gradient(circle at 8% 0%, rgba(244, 185, 66, 0.20), transparent 38%),
        radial-gradient(circle at 95% 100%, rgba(242, 147, 90, 0.16), transparent 40%);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 24px 36px;
}

/* ══ Grid ═════════════════════════════════════════════ */
.footer-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1.2fr;
    gap: 48px;
    padding-bottom: 36px;
}

.title-footer {
    display: block;
    margin-bottom: 12px;
    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
    font-weight: 800;
    line-height: 1.2;
    color: #3A332E;
}

.footer-text {
    max-width: 46ch;
    margin: 0 0 22px;
    font-size: 0.97rem;
    line-height: 1.75;
    color: #6B6159;
}

.footer-heading {
    margin: 0 0 16px;
    padding-left: 12px;
    border-left: 4px solid #F4B942;
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
    color: #3A332E;
}

/* Links */
.footer-links { list-style: none; margin: 0; padding: 0; }
.footer-links li { margin-bottom: 10px; }
.footer-links a {
    display: inline-block;
    font-size: 0.95rem;
    color: #5A5048;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
}
.footer-links a:hover { color: #B4561C; border-color: #F2935A; }

/* Contact */
.contact-info {
    display: block;
    margin-bottom: 14px;
    font-size: 0.95rem;
    font-weight: 500;
    color: #5A5048;
}
.contact-info p { margin: 0 0 8px; line-height: 1.5; }
.contact-info a {
    color: #3A332E;
    text-decoration: none;
    border-bottom: 1px dashed #F2935A;
    transition: color 0.2s ease;
}
.contact-info a:hover { color: #B4561C; }

.hotline-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 50px;
    background: #F4B942;
    color: #3A332E;
    font-size: 0.92rem;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 6px 16px rgba(244, 185, 66, 0.35);
    transition: background-color 0.25s ease, transform 0.25s ease;
}
.hotline-btn:hover { background: #F2935A; transform: translateY(-2px); }

/* Social */
.social-links { display: flex; flex-wrap: wrap; gap: 12px; }
.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    padding: 0;
    border: 2px solid #FCE7B2;
    border-radius: 50%;
    background: #FFFDF8;
    cursor: pointer;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.social-btn:hover {
    transform: translateY(-3px);
    border-color: #F2935A;
    box-shadow: 0 8px 18px rgba(242, 147, 90, 0.3);
}
.social-btn img { width: 24px; height: 24px; display: block; }

/* ══ Logos ════════════════════════════════════════════ */
.logos-container {
    width: 100%;
    padding: 20px;
    background: #FFFDF8;
    border: 1px solid #FCE7B2;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(58, 51, 46, 0.06);
}

.logos-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px 40px;
}

.logo-item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.logo-item img { max-height: 100px; width: auto; }

.responsive-logo {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
    padding: 5px;
    max-height: 100px;
}

/* ══ Bottom bar ═══════════════════════════════════════ */
.footer-bottom {
    background: #3A332E;
    border-top: 4px solid #F4B942;
}

.footer-bottom-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px 24px;
}

.copyright { font-size: 0.84rem; color: #E9DFD2; }

.policy-links { display: flex; align-items: center; gap: 8px; margin: 0; }
.policy-divider { width: 1px; height: 14px; background: rgba(233, 223, 210, 0.4); }

.privacy-link {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.86rem;
    font-weight: 500;
    color: #F6D488;
    text-decoration: none;
    transition: background-color 0.25s ease, color 0.25s ease;
}
.privacy-link:hover { background-color: rgba(244, 185, 66, 0.16); color: #FFE7A8; }

/* Keyboard focus */
.hotline-btn:focus-visible,
.social-btn:focus-visible,
.footer-links a:focus-visible,
.contact-info a:focus-visible,
.privacy-link:focus-visible {
    outline: 3px solid #F2935A;
    outline-offset: 3px;
}

/* ══ Modal / Dialog (same behaviour, softer colours) ══ */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(58, 51, 46, 0.55);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-overlay.active { display: flex; }

.modal {
    background-color: #FFFDF8;
    border-radius: 16px;
    border-top: 6px solid #F4B942;
    box-shadow: 0 20px 50px rgba(58, 51, 46, 0.25);
    max-width: 90%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: #3A332E;
}

.modal-header {
    padding: 20px 24px 12px;
    border-bottom: 1px solid #FCE7B2;
    background: #FFF3D6;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3A332E;
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
    border-top: 1px solid #FCE7B2;
}

.btn {
    padding: 9px 22px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.btn-primary { background-color: #F2935A; color: #3A332E; }
.btn-primary:hover { background-color: #E8814A; }

.btn-text { background: #F4B942; color: #3A332E; }
.btn-text:hover { background-color: #F2935A; }

.policy-heading {
    text-align: left;
    font-weight: bold;
    margin: 16px 0 8px;
    color: #B4561C;
}

.modal-content p, .modal-content ul {
    margin-bottom: 12px;
    line-height: 1.6;
}

.modal-content ul { padding-left: 20px; }

.modal-content strong {
    display: block;
    margin-top: 10px;
}

.modal-content a { color: #B4561C; font-weight: 600; text-decoration: none; }
.modal-content a:hover { text-decoration: underline; }

/* ══ Responsive ═══════════════════════════════════════ */
@media (max-width: 900px) {
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
    .footer-brand { grid-column: 1 / -1; }
}

@media (max-width: 768px) {
    .logos-grid {
        flex-direction: column;
        align-items: center;
    }

    .logo-item {
        width: 100%;
        max-width: 250px;
    }

    .modal {
        width: 95%;
        max-height: 85vh;
    }
}

@media (max-width: 480px) {
    .footer-content { padding: 16px 16px 28px; }
    .footer-grid { grid-template-columns: 1fr; }
    .footer-bottom-inner { flex-direction: column; align-items: flex-start; padding: 16px; }
    .footer-wave svg { height: 44px; }
}

/* Respect "reduce motion" */
@media (prefers-reduced-motion: reduce) {
    .hotline-btn,
    .social-btn,
    .footer-links a,
    .btn { transition: none; }
    .hotline-btn:hover,
    .social-btn:hover { transform: none; }
}
</style>
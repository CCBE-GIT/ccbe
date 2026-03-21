<template>
  <div>
    <NavBar></NavBar>

    <div class="pp-wrapper">
      <!-- Decorative background accents -->
      <div class="bg-accent bg-accent--1"></div>
      <div class="bg-accent bg-accent--2"></div>

      <div class="pp-container">

        <!-- Hero Header -->
        <div class="pp-hero" data-aos="fade-up" data-aos-duration="1000">
          <div class="pp-badge">Legal</div>
          <h1 class="pp-title">
            PRIVACY <span class="highlight">POLICY</span>
          </h1>
          <div class="title-rule"></div>
          <p class="pp-meta">
            Cambridge College of British English (CCBE) &nbsp;·&nbsp;
            Effective Date: <strong>01 January 2025</strong> &nbsp;·&nbsp;
            Last Updated: <strong>01 January 2026</strong>
          </p>
          <p class="pp-intro">
            At CCBE, your privacy is important to us. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your personal information when you visit our website or
            enrol in our programmes. Please read this policy carefully.
          </p>
        </div>

        <!-- Table of Contents -->
        <nav class="toc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" aria-label="Table of contents">
          <h2 class="toc-title">Contents</h2>
          <ol class="toc-list">
            <li v-for="section in sections" :key="section.id">
              <a :href="'#' + section.id" class="toc-link">{{ section.title }}</a>
            </li>
          </ol>
        </nav>

        <!-- Sections -->
        <div class="pp-content">
          <!-- 1. Information We Collect -->
          <section id="information-we-collect" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">01</div>
            <h2 class="section-title">Information We Collect</h2>
            <div class="section-body">
              <p>We may collect the following types of personal information:</p>

              <div class="info-cards">
                <div class="info-card">
                  <!-- <div class="info-card-icon">👤</div> -->
                  <div>
                    <h4>Personal Identification</h4>
                    <p>Full Name, Email Address, Phone Number and Address</p>
                  </div>
                </div>
                <div class="info-card">
                  <!-- <div class="info-card-icon">📬</div> -->
                  <div>
                    <h4>Contact Information</h4>
                    <p>Email address, phone number, home address, emergency contact details.</p>
                  </div>
                </div>
                <!-- <div class="info-card">
                  <div class="info-card-icon">🎓</div>
                  <div>
                    <h4>Academic Information</h4>
                    <p>Course enrolment details, assessment results, attendance records, and progress reports.</p>
                  </div>
                </div> -->
                <div class="info-card">
                  <!-- <div class="info-card-icon">💳</div> -->
                  <div>
                    <h4>Payment Information</h4>
                    <p>Fee payment records. We do not store full card details — payments are processed via secure third-party gateways.</p>
                  </div>
                </div>
                <div class="info-card">
                  <!-- <div class="info-card-icon">🌐</div> -->
                  <div>
                    <h4>Technical / Usage Data</h4>
                    <p>IP address, browser type, pages visited, time spent on pages, referring URLs, device information, and cookie data.</p>
                  </div>
                </div>
                <div class="info-card">
                  <!-- <div class="info-card-icon">📸</div> -->
                  <div>
                    <h4>Media</h4>
                    <p>Photos or videos taken at CCBE events, used for promotional and archival purposes with consent.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 2. How We Collect -->
          <section id="how-we-collect" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">02</div>
            <h2 class="section-title">How We Collect Your Information</h2>
            <div class="section-body">
              <p>We collect information through the following means:</p>
              <ul class="pp-list">
                <li><strong>Registration & Enrolment Forms</strong> : when you sign up for a course or programme.</li>
                <li><strong>Website Contact Forms</strong> : when you submit an enquiry or feedback via our website.</li>
                <li><strong>Cookies & Tracking Technologies</strong> : automatically when you browse our website (see Section 6 for details).</li>
                <li><strong>In-Person Interactions</strong> : at our branch offices, events, or assessments.</li>
                <!-- <li><strong>Cambridge English Registration</strong> : data shared during the Cambridge English examination registration process via the British Council.</li> -->
                <li><strong>Social Media</strong> : when you interact with our official social media pages.</li>
              </ul>
            </div>
          </section>

          <!-- 3. How We Use -->
          <section id="how-we-use" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">03</div>
            <h2 class="section-title">How We Use Your Information</h2>
            <div class="section-body">
              <p>CCBE uses your personal information to:</p>
              <ul class="pp-list">
                <li>Process and manage your course enrolment and registration.</li>
                <li>Communicate with you about classes, assessments, results, and events.</li>
                <li>Register you for Cambridge English examinations through the British Council.</li>
                <li>Process fee payments and issue receipts.</li>
                <li>Maintain accurate student and staff records.</li>
                <li>Improve our website, services, and teaching programmes.</li>
                <li>Send you newsletters, promotional offers, or event updates only with your consent.</li>
                <li>Comply with legal or regulatory obligations.</li>
                <li>Safeguard the welfare of students, particularly minors, under our Child Safeguarding Policy.</li>
              </ul>
              <div class="highlight-box">
                <span class="hb-icon">ℹ️</span>
                <p>We will never sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
              </div>
            </div>
          </section>

          <!-- 4. Sharing -->
          <section id="sharing" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">04</div>
            <h2 class="section-title">Sharing Your Information</h2>
            <div class="section-body">
              <p>We may share your information only in the following limited circumstances:</p>
              <ul class="pp-list">
                <!-- <li><strong>British Council / Cambridge Assessment English</strong> : for examination registration and result processing.</li> -->
                <li><strong>Payment Processors</strong> : to facilitate secure fee transactions.</li>
                <li><strong>IT & Platform Providers</strong> : third-party services that host or support our website and operations, bound by confidentiality agreements.</li>
                <li><strong>Legal Authorities</strong> : when required by Sri Lankan law, court order, or regulatory authority.</li>
                <li><strong>Safeguarding Authorities</strong> : if we have a legal obligation or genuine concern relating to child safety.</li>
              </ul>
              <p>All third parties we work with are required to handle your data securely and in accordance with applicable data protection laws.</p>
            </div>
          </section>

          <!-- 5. Data Retention -->
          <section id="data-retention" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">05</div>
            <h2 class="section-title">Data Retention</h2>
            <div class="section-body">
              <p>We retain personal information for as long as necessary to fulfil the purposes for which it was collected, including:</p>
              <ul class="pp-list">
                <li><strong>Student records</strong> : retained for a minimum of 7 years after the end of enrolment for academic and regulatory purposes.</li>
                <li><strong>Financial records</strong> : retained as required under Sri Lankan tax and financial regulations.</li>
                <li><strong>Marketing data</strong> : retained until you withdraw consent.</li>
                <li><strong>Website usage data (cookies)</strong> : retained per the cookie type (see Section 6).</li>
              </ul>
              <p>When data is no longer required, it is securely deleted or anonymised.</p>
            </div>
          </section>

          <!-- 6. Cookies -->
          <section id="cookies" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">06</div>
            <h2 class="section-title">Cookies Policy</h2>
            <div class="section-body">
              <p>
                Our website uses cookies small text files placed on your device to enhance your experience.
                You can manage your cookie preferences at any time using the cookie banner displayed on your first visit.
              </p>

              <div class="cookie-table-wrapper">
                <table class="cookie-table">
                  <thead>
                    <tr>
                      <th>Cookie Type</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                      <th>Can Be Declined?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><span class="badge badge--required">Strictly Necessary</span></td>
                      <td>Essential for the website to function (e.g. session, security).</td>
                      <td>Session / 1 year</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge--analytics">Analytics</span></td>
                      <td>Helps us understand how visitors interact with our site (e.g. Google Analytics).</td>
                      <td>Up to 2 years</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge--functional">Functional</span></td>
                      <td>Remembers your preferences (e.g. language, branch selection).</td>
                      <td>Up to 1 year</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td><span class="badge badge--marketing">Marketing</span></td>
                      <td>Used to show relevant advertisements on other platforms.</td>
                      <td>Up to 90 days</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>You can withdraw or change your cookie consent at any time by clearing your browser cookies and revisiting our site.</p>
            </div>
          </section>

          <!-- 7. Your Rights -->
          <section id="your-rights" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">07</div>
            <h2 class="section-title">Your Rights</h2>
            <div class="section-body">
              <p>You have the following rights regarding your personal data:</p>
              <div class="rights-grid">
                <div class="right-item">
                  <div class="right-icon">👁️</div>
                  <h4>Right to Access</h4>
                  <p>Request a copy of the personal data we hold about you.</p>
                </div>
                <div class="right-item">
                  <div class="right-icon">✏️</div>
                  <h4>Right to Rectification</h4>
                  <p>Ask us to correct inaccurate or incomplete data.</p>
                </div>
                <div class="right-item">
                  <div class="right-icon">🗑️</div>
                  <h4>Right to Erasure</h4>
                  <p>Request deletion of your data, subject to legal retention requirements.</p>
                </div>
                <div class="right-item">
                  <div class="right-icon">🚫</div>
                  <h4>Right to Object</h4>
                  <p>Object to processing of your data for marketing purposes.</p>
                </div>
                <div class="right-item">
                  <div class="right-icon">📦</div>
                  <h4>Right to Portability</h4>
                  <p>Receive your data in a structured, commonly used format.</p>
                </div>
                <div class="right-item">
                  <div class="right-icon">⏸️</div>
                  <h4>Right to Restrict</h4>
                  <p>Request that we limit how we use your data in certain circumstances.</p>
                </div>
              </div>
              <p>To exercise any of these rights, please contact us using the details in Section 9.</p>
            </div>
          </section>

          <!-- 8. Security -->
          <section id="security" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">08</div>
            <h2 class="section-title">Data Security</h2>
            <div class="section-body">
              <p>
                We implement appropriate technical and organisational measures to protect your personal information
                against unauthorised access, accidental loss, destruction, or disclosure. These include:
              </p>
              <ul class="pp-list">
                <li>Secure HTTPS encryption across our website.</li>
                <li>Password protected internal systems with role based access control.</li>
                <li>Regular staff training on data handling and confidentiality.</li>
                <li>Physical security measures at all branch locations.</li>
              </ul>
              <p>
                While we take all reasonable steps to protect your information, no transmission over the internet
                is 100% secure. If you believe your data has been compromised, please contact us immediately.
              </p>
            </div>
          </section>

          <!-- 9. Contact -->
          <section id="contact" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">09</div>
            <h2 class="section-title">Contact Us About This Policy</h2>
            <div class="section-body">
              <p>If you have any questions, concerns, or requests relating to this Privacy Policy, please contact us:</p>

              <div class="contact-block">
                <div class="contact-detail">
                  <span class="cd-label">Organisation</span>
                  <span class="cd-value">Cambridge College of British English (CCBE)</span>
                </div>
                <div class="contact-detail">
                  <span class="cd-label">Email</span>
                  <a href="mailto:info@ccbe.lk" class="cd-value cd-link">info@ccbe.lk</a>
                </div>
                <div class="contact-detail">
                  <span class="cd-label">Phone</span>
                  <a href="tel:+94912237373" class="cd-value cd-link">+94 91 223 7373</a>
                </div>
                <div class="contact-detail">
                  <span class="cd-label">Head Office</span>
                  <span class="cd-value">No 118, Old Matara Rd, Galle, 80000, Sri Lanka</span>
                </div>
                <div class="contact-detail">
                  <span class="cd-label">Website</span>
                  <a href="/" class="cd-value cd-link">www.ccbe.lk</a>
                </div>
              </div>

              <p style="margin-top:20px;">We aim to respond to all privacy related enquiries within <strong>10 business days</strong>.</p>
            </div>
          </section>

          <!-- 10. Changes -->
          <section id="changes" class="pp-section" data-aos="fade-up" data-aos-duration="800">
            <div class="section-number">10</div>
            <h2 class="section-title">Changes to This Policy</h2>
            <div class="section-body">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or for other operational reasons. When we do, we will revise the "Last Updated"
                date at the top of this page.
              </p>
              <p>
                We encourage you to review this policy periodically. Continued use of our website after any changes
                constitutes your acknowledgement of the updated policy.
              </p>
            </div>
          </section>
        </div>

        <!-- Back to Home -->
        <div class="pp-footer-nav" data-aos="fade-up" data-aos-duration="800">
          <a href="/" class="home-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            Back to Home
          </a>
          <a href="/contact" class="contact-btn">Contact Us</a>
        </div>

      </div>
    </div>

    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
import ArrowButton from './ArrowButton.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'PrivacyPolicy',
  components: { NavBar, FooterPage, ChatBot, ArrowButton },
  data() {
    return {
      sections: [
        { id: 'information-we-collect', title: '1. Information We Collect' },
        { id: 'how-we-collect',         title: '2. How We Collect Your Information' },
        { id: 'how-we-use',             title: '3. How We Use Your Information' },
        { id: 'sharing',                title: '4. Sharing Your Information' },
        { id: 'data-retention',         title: '5. Data Retention' },
        { id: 'cookies',                title: '6. Cookies Policy' },
        { id: 'your-rights',            title: '7. Your Rights' },
        { id: 'security',               title: '8. Data Security' },
        { id: 'contact',                title: '9. Contact Us About This Policy' },
        { id: 'changes',                title: '10. Changes to This Policy' },
      ]
    };
  },
  mounted() {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }
};
</script>

<style scoped>
/* ── Wrapper ──────────────────────────────────────────── */
.pp-wrapper {
  background: linear-gradient(160deg, #fffdf8 0%, #ffffff 60%, #fff8f2 100%);
  min-height: 100vh;
  padding: 60px 0 100px;
  position: relative;
  overflow: hidden;
}

/* ── Background Accents ───────────────────────────────── */
.bg-accent {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
.bg-accent--1 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(251,183,0,0.10) 0%, transparent 70%);
  top: -120px; left: -150px;
}
.bg-accent--2 {
  width: 420px; height: 420px;
  background: radial-gradient(circle, rgba(255,95,21,0.07) 0%, transparent 70%);
  bottom: 80px; right: -130px;
}

/* ── Container ────────────────────────────────────────── */
.pp-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

/* ── Hero ─────────────────────────────────────────────── */
.pp-hero {
  text-align: center;
  margin-bottom: 48px;
}

.pp-badge {
  display: inline-block;
  background: rgba(255,95,21,0.1);
  color: #FF5F15;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 5px 16px;
  border-radius: 30px;
  margin-bottom: 16px;
  border: 1px solid rgba(255,95,21,0.2);
}

.pp-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #FBB700;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin-bottom: 4px;
}

.highlight { color: #FF5F15; }

.title-rule {
  width: 70px;
  height: 4px;
  background: linear-gradient(90deg, #FBB700, #FF5F15);
  margin: 16px auto 20px;
  border-radius: 2px;
}

.pp-meta {
  font-size: 0.88rem;
  color: #888;
  margin-bottom: 20px;
}

.pp-intro {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  max-width: 720px;
  margin: 0 auto;
}

/* ── Table of Contents ────────────────────────────────── */
.toc {
  background: #fff;
  border: 1px solid #f0e8d0;
  border-left: 4px solid #FBB700;
  border-radius: 12px;
  padding: 24px 28px;
  margin-bottom: 52px;
  box-shadow: 0 4px 20px rgba(251,183,0,0.08);
}

.toc-title {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #FBB700;
  margin: 0 0 14px;
}

.toc-list {
  margin: 0;
  padding-left: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 24px;
}

.toc-link {
  font-size: 0.9rem;
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
  line-height: 1.5;
}

.toc-link:hover { color: #FF5F15; }

/* ── Section ──────────────────────────────────────────── */
.pp-section {
  margin-bottom: 52px;
  position: relative;
}

.section-number {
  font-size: 4rem;
  font-weight: 900;
  color: rgba(251,183,0,0.12);
  line-height: 1;
  position: absolute;
  top: -10px;
  right: 0;
  pointer-events: none;
  user-select: none;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f5e9cc;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #FBB700, #FF5F15);
}

.section-body {
  font-size: 1rem;
  color: #444;
  line-height: 1.75;
}

.section-body p { margin: 0 0 14px; }

/* ── List ─────────────────────────────────────────────── */
.pp-list {
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 14px 0;
}

.pp-list li {
  padding-left: 22px;
  position: relative;
  font-size: 0.97rem;
  color: #444;
  line-height: 1.65;
}

.pp-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FBB700, #FF5F15);
}

/* ── Info Cards ───────────────────────────────────────── */
.info-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin: 18px 0;
}

.info-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 16px;
  transition: box-shadow 0.3s, transform 0.3s;
}

.info-card:hover {
  box-shadow: 0 6px 20px rgba(251,183,0,0.12);
  transform: translateY(-2px);
}

.info-card-icon { font-size: 1.5rem; flex-shrink: 0; }

.info-card h4 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 5px;
}

.info-card p {
  font-size: 0.85rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

/* ── Highlight Box ────────────────────────────────────── */
.highlight-box {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: linear-gradient(135deg, rgba(251,183,0,0.08), rgba(255,95,21,0.06));
  border: 1px solid rgba(251,183,0,0.25);
  border-radius: 12px;
  padding: 16px 20px;
  margin-top: 16px;
}

.hb-icon { font-size: 1.3rem; flex-shrink: 0; }

.highlight-box p {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}

/* ── Cookie Table ─────────────────────────────────────── */
.cookie-table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}

.cookie-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.cookie-table thead tr {
  background: linear-gradient(90deg, #FBB700, #FF5F15);
  color: #fff;
}

.cookie-table th {
  padding: 13px 16px;
  text-align: left;
  font-weight: 700;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cookie-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #f5f5f5;
  color: #444;
  vertical-align: top;
}

.cookie-table tbody tr:last-child td { border-bottom: none; }

.cookie-table tbody tr:hover { background: #fef9f0; }

.badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge--required  { background: rgba(76,175,80,0.12);  color: #2e7d32; }
.badge--analytics { background: rgba(33,150,243,0.12); color: #1565c0; }
.badge--functional{ background: rgba(156,39,176,0.12); color: #6a1b9a; }
.badge--marketing { background: rgba(255,95,21,0.12);  color: #bf360c; }

/* ── Rights Grid ──────────────────────────────────────── */
.rights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 18px 0;
}

.right-item {
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 18px 16px;
  text-align: center;
  transition: box-shadow 0.3s, transform 0.3s;
}

.right-item:hover {
  box-shadow: 0 6px 20px rgba(251,183,0,0.12);
  transform: translateY(-3px);
}

.right-icon { font-size: 1.8rem; margin-bottom: 10px; }

.right-item h4 {
  font-size: 0.88rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 6px;
}

.right-item p {
  font-size: 0.8rem;
  color: #777;
  margin: 0;
  line-height: 1.4;
}

/* ── Contact Block ────────────────────────────────────── */
.contact-block {
  background: #fff;
  border: 1px solid #f0e8d0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  margin: 16px 0;
}

.contact-detail {
  display: flex;
  gap: 16px;
  padding: 14px 20px;
  border-bottom: 1px solid #f5f5f5;
  align-items: center;
}

.contact-detail:last-child { border-bottom: none; }

.cd-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #FBB700;
  min-width: 110px;
  flex-shrink: 0;
}

.cd-value {
  font-size: 0.95rem;
  color: #444;
}

.cd-link {
  color: #FF5F15;
  text-decoration: none;
  font-weight: 500;
}

.cd-link:hover { text-decoration: underline; }

/* ── Footer Nav ───────────────────────────────────────── */
.pp-footer-nav {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 20px;
  flex-wrap: wrap;
}

.home-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #FBB700;
  color: #fff;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(251,183,0,0.3);
}

.home-btn:hover {
  background: #e0a500;
  transform: translateY(-2px);
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: transparent;
  color: #FF5F15;
  border: 2px solid #FF5F15;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: #FF5F15;
  color: #fff;
  transform: translateY(-2px);
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 768px) {
  .pp-wrapper { padding: 40px 0 80px; }
  .pp-title   { font-size: 2rem; }
  .pp-intro   { font-size: 0.95rem; }

  .toc-list   { grid-template-columns: 1fr; }

  .info-cards  { grid-template-columns: 1fr; }
  .rights-grid { grid-template-columns: 1fr 1fr; }

  .section-number { font-size: 3rem; }
  .section-title  { font-size: 1.25rem; }

  .contact-detail { flex-direction: column; gap: 4px; }
  .cd-label       { min-width: unset; }
}

@media (max-width: 480px) {
  .pp-container { padding: 0 16px; }
  .pp-title     { font-size: 1.7rem; }
  .rights-grid  { grid-template-columns: 1fr; }
  .toc          { padding: 18px 20px; }

  .cookie-table th,
  .cookie-table td { padding: 10px 12px; font-size: 0.82rem; }
}
</style>
<template>
  <div>
    <NavBar></NavBar>
    <div class="container">

      <div class="logo-container" data-aos="zoom-in-up" data-aos-duration="2000">
        <img :src="logo" alt="Company Logo" width="200" height="150" id="logo">
      </div>

      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        CONTACT <span class="highlight">US</span>
      </h1>

      <h4 class="subtitle" data-aos="fade-up" data-aos-duration="2000">
        At the heart of our commitment to communication and service lies our dedication to ensuring every interaction is meaningful, responsive, and supportive.
      </h4>

      <!-- ── Contact Info Cards ── -->
      <div class="contact-info-grid" data-aos="fade-up" data-aos-duration="2000">
        <div class="contact-info-card">
          <!-- <div class="info-icon">📞</div> -->
          <div class="info-body">
            <h3 class="info-title">Call Us</h3>
            <p><a href="tel:+94713999666" class="info-link">+94 71 399 9666</a> (Hot Line)</p>
            <p><a href="tel:+94713999666" class="info-link">+94 91 223 7373</a> (Galle College)</p>
          </div>
        </div>
        <div class="contact-info-card">
          <!-- <div class="info-icon">✉️</div> -->
          <div class="info-body">
            <h3 class="info-title">Email Us</h3>
            <p><a href="mailto:info@ccbe.lk" class="info-link">info@ccbe.lk</a></p>
            <p class="info-note">We respond within 24 hours on business days.</p>
          </div>
        </div>
        <div class="contact-info-card">
          <!-- <div class="info-icon">🕘</div> -->
          <div class="info-body">
            <h3 class="info-title">Opening Hours</h3>
            <p><b>Mon – Fri :</b> 8:15 AM – 6:00 PM</p>
            <p><b>Sat & Sun :</b> 7:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div class="contact-info-card">
          <!-- <div class="info-icon">🌐</div> -->
          <div class="info-body">
            <h3 class="info-title">Follow Us</h3>
            <div class="social-links">
              <a href="https://www.facebook.com/ccbe.ambalangoda" target="_blank" rel="noopener" class="social-btn fb">Facebook</a>
              <a href="https://www.instagram.com/ccbeamb" target="_blank" rel="noopener" class="social-btn ig">Instagram</a>
              <a href="https://www.youtube.com/@ccbeinternational" target="_blank" rel="noopener" class="social-btn yt">YouTube</a>
              <a href="https://www.tiktok.com/@cambridgecollege9" target="_blank" rel="noopener" class="social-btn tk">TikTok</a>
            </div>
          </div>
        </div>
      </div>

      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        OUR <span class="highlight">BRANCH NETWORK</span>
      </h1>

      <div class="center-container-Branch">
        <!-- Image Container -->
        <div class="image-container">
          <!-- Main Image -->
          <img data-aos="zoom-out" data-aos-duration="2000" width="390" height="490" :src="branchNetworkImage" alt="Branch Network" class="branch-image">
          <!-- Interactive Points -->
          <div class="point" :style="{ top: '73%', left: '34%' }"
               @click="navigateTo('/about/ambalangoda')"
               @mouseenter="showTooltip('Ambalangoda College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Ambalangoda College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '80.5%', left: '40%' }"
               @click="navigateTo('/about/galle')"
               @mouseenter="showTooltip('Galle College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Galle College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '79%', left: '55%' }"
               @click="navigateTo('/about/matara')"
               @mouseenter="showTooltip('Matara College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Matara College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '63%', left: '35%' }"
               @click="navigateTo('/about/piliyandala')"
               @mouseenter="showTooltip('Piliyandala College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Piliyandala College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '63%', left: '28.5%' }"
               @click="navigateTo('/about/kalutara')"
               @mouseenter="showTooltip('Kalutara College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Kalutara College'">{{ tooltipText }}</div>
          </div>
          <div class="point" :style="{ top: '67%', left: '32.5%' }"
               @click="navigateTo('/about/horana')"
               @mouseenter="showTooltip('Horana College')"
               @mouseleave="hideTooltip">
            <div class="tooltip" v-if="tooltipVisible && tooltipText === 'Horana College'">{{ tooltipText }}</div>
          </div>
        </div>
      </div>

      <div v-if="selectedOffice" class="text-center">
        <h3>{{ selectedOffice.name }}</h3>
        <p>{{ selectedOffice.address }}</p>
        <p>{{ selectedOffice.phone }}</p>
      </div>

      <!-- ── Branch Cards ── -->
      <div class="branch-cards-grid" data-aos="fade-up" data-aos-duration="2000">
        <div
          v-for="(office, index) in offices"
          :key="index"
          class="branch-card"
          :class="{ 'branch-card--active': selectedOffice && selectedOffice.name === office.name }"
        >
          <!-- <div class="branch-card-icon">📍</div> -->
          <div class="branch-card-body">
            <h4 class="branch-card-name">{{ office.name }}</h4>
            <p class="branch-card-addr">{{ office.address }}</p>
            <a :href="'tel:' + office.phone.replace(/\s/g,'')" class="branch-card-phone" @click.stop>{{ office.phone }}</a>
          </div>
          <!-- <a
            :href="'https://maps.google.com/?q=' + encodeURIComponent(office.address)"
            target="_blank"
            rel="noopener"
            class="branch-map-btn"
            @click.stop
            aria-label="View on map"
          >🗺️</a> -->
        </div>
      </div>

      <!-- ── Feedback / Contact Form ── -->
      <!-- <div class="contact-form-section" data-aos="fade-up" data-aos-duration="2000">
        <h1 class="title">SEND US A <span class="highlight">MESSAGE</span></h1>
        <p class="form-subtitle">Have a question or want to enrol? Fill in the form below and we'll get back to you shortly.</p>

        <div class="form-wrapper">
          <form class="contact-form" @submit.prevent="submitForm" novalidate>
            <div class="form-row">
              <div class="form-group" :class="{ error: errors.name }">
                <label for="cf-name">Full Name <span class="required">*</span></label>
                <input
                  id="cf-name"
                  v-model="form.name"
                  type="text"
                  placeholder="e.g. Kamal Perera"
                  autocomplete="name"
                  @blur="validateField('name')"
                />
                <span class="error-msg" v-if="errors.name">{{ errors.name }}</span>
              </div>
              <div class="form-group" :class="{ error: errors.email }">
                <label for="cf-email">Email Address <span class="required">*</span></label>
                <input
                  id="cf-email"
                  v-model="form.email"
                  type="email"
                  placeholder="e.g. kamal@email.com"
                  autocomplete="email"
                  @blur="validateField('email')"
                />
                <span class="error-msg" v-if="errors.email">{{ errors.email }}</span>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group" :class="{ error: errors.phone }">
                <label for="cf-phone">Phone Number</label>
                <input
                  id="cf-phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="e.g. +94 77 123 4567"
                  autocomplete="tel"
                />
              </div>
              <div class="form-group">
                <label for="cf-branch">Branch of Interest</label>
                <select id="cf-branch" v-model="form.branch">
                  <option value="">Select a branch</option>
                  <option v-for="o in offices" :key="o.name" :value="o.name">{{ o.name }}</option>
                </select>
              </div>
            </div>

            <div class="form-group" :class="{ error: errors.subject }">
              <label for="cf-subject">Subject <span class="required">*</span></label>
              <input
                id="cf-subject"
                v-model="form.subject"
                type="text"
                placeholder="e.g. Enquiry about IELTS programme"
                @blur="validateField('subject')"
              />
              <span class="error-msg" v-if="errors.subject">{{ errors.subject }}</span>
            </div>

            <div class="form-group" :class="{ error: errors.message }">
              <label for="cf-message">Message <span class="required">*</span></label>
              <textarea
                id="cf-message"
                v-model="form.message"
                rows="5"
                placeholder="Write your message here..."
                @blur="validateField('message')"
              ></textarea>
              <span class="char-count">{{ form.message.length }} / 1000</span>
              <span class="error-msg" v-if="errors.message">{{ errors.message }}</span>
            </div> -->

            <!-- Success / Error Feedback -->
            <!-- <transition name="fade-msg">
              <div v-if="submitStatus === 'success'" class="form-feedback success" role="alert">
                ✅ Thank you, <strong>{{ form.name }}</strong>! Your message has been sent. We'll contact you soon.
              </div>
              <div v-else-if="submitStatus === 'error'" class="form-feedback error-feedback" role="alert">
                ❌ Something went wrong. Please try again or call us directly.
              </div>
            </transition> -->

            <!-- <div class="form-footer">
              <p class="form-note">Fields marked <span class="required">*</span> are required.</p>
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span v-if="isSubmitting">Sending…</span>
                <span v-else>Send Message</span>
                <svg v-if="!isSubmitting" class="send-icon" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
              </button>
            </div>
          </form>
        </div>
      </div> -->

      <!-- ── Back to Home Link ── -->
      <div class="home-link-section" data-aos="fade-up" data-aos-duration="1500">
        <p>Looking for something else?</p>
        <a href="/" class="home-link-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
          Back to Home
        </a>
        <div class="quick-nav-links">
          <a href="/courses" class="qnl">Our Programmes</a>
          <a href="/about" class="qnl">About CCBE</a>
          <a href="/news" class="qnl">News & Events</a>
          <a href="/corevalues" class="qnl">Core Values</a>
        </div>
      </div>

    </div>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import FooterPage from "./FooterPage.vue";
import ChatBot from "./ChatBot.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "ContactUs",
  components: {
    NavBar,
    FooterPage,
    ChatBot
  },
  data() {
    return {
      logo: require('@/assets/Logo.png'),
      branchNetworkImage: require('@/assets/Branch_Network.png'),
      offices: [
        { name: "Galle College",       address: "No 118, Old Matara Rd, Galle, 80000",                     phone: "+94 91 223 7373" },
        { name: "Ambalangoda College", address: "No 97, New Rd, Ambalangoda, 80300",                    phone: "+94 91 225 2452" },
        { name: "Matara College",      address: "No 352, Kumarathunga Mw, Matara, 81000",               phone: "+94 41 205 0200" },
        { name: "Piliyandala College", address: "No 119, Moratuwa Rd, Piliyandala, 10300",       phone: "+94 11 218 0008" },
        { name: "Horana College",      address: "No 149, Graceland Circular Rd, Horana, 12400",         phone: "+94 34 220 5503" }, 
        { name: "Kalutara College",    address: "No 85, Maha Waskaduwa, 12580",                         phone: "+94 34 212 1210" }, 
      ],
      selectedOffice: null,
      tooltipVisible: false,
      tooltipText: '',
      tooltipTimer: null,
      // Form
      form: { name: '', email: '', phone: '', branch: '', subject: '', message: '' },
      errors: {},
      isSubmitting: false,
      submitStatus: null
    };
  },
  methods: {
    navigateTo(route) { this.$router.push(route); },
    selectOffice(office) { this.selectedOffice = office; },
    showTooltip(text) {
      this.tooltipText = text;
      clearTimeout(this.tooltipTimer);
      this.tooltipVisible = true;
    },
    hideTooltip() {
      this.tooltipTimer = setTimeout(() => { this.tooltipVisible = false; }, 100);
    },
    validateField(field) {
      const v = this.form[field];
      if (field === 'name')    this.errors.name    = v.trim().length < 2 ? 'Please enter your full name.' : '';
      if (field === 'email')   this.errors.email   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email address.';
      if (field === 'subject') this.errors.subject = v.trim().length < 3 ? 'Please enter a subject.' : '';
      if (field === 'message') this.errors.message = v.trim().length < 10 ? 'Message must be at least 10 characters.' : '';
    },
    validateAll() {
      ['name', 'email', 'subject', 'message'].forEach(f => this.validateField(f));
      return !Object.values(this.errors).some(e => e);
    },
    async submitForm() {
      if (!this.validateAll()) return;
      this.isSubmitting = true;
      this.submitStatus = null;
      // Simulate network request (replace with actual API call)
      await new Promise(r => setTimeout(r, 1200));
      this.isSubmitting = false;
      this.submitStatus = 'success';
      this.form = { name: '', email: '', phone: '', branch: '', subject: '', message: '' };
      this.errors = {};
      setTimeout(() => { this.submitStatus = null; }, 6000);
    }
  },
  mounted() {
    AOS.init();
  },
  beforeUnmount() {
    clearTimeout(this.tooltipTimer);
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
}

.title {
  color: #FBB700;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
}

.highlight { color: #FF5F15; }

.subtitle {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin: 20px 0;
  line-height: 1.5;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

#logo { display: block; }

/* ── Contact Info Cards ─────────────────────────── */
.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 32px 0 40px;
}

.contact-info-card {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 14px;
  padding: 20px 18px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(251,183,0,0.14);
}

.info-icon { font-size: 1.8rem; flex-shrink: 0; }

.info-body { flex: 1; }

.info-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #FBB700;
  margin: 0 0 8px;
}

.info-body p {
  font-size: 0.85rem;
  color: #555;
  margin: 3px 0;
  line-height: 1.4;
}

.info-link {
  color: #FF5F15;
  text-decoration: none;
  font-weight: 500;
}

.info-link:hover { text-decoration: underline; }

.info-note {
  font-size: 0.78rem !important;
  color: #888 !important;
  font-style: italic;
}

.social-links { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px; }

.social-btn {
  padding: 5px 14px;
  border-radius: 30px;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s;
}

.social-btn.fb { background: #1877f2; color: #fff; }
.social-btn.fb:hover { background: #1565c0; }
.social-btn.ig { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: #fff; }
.social-btn.ig:hover { opacity: 0.88; }
.social-btn.yt { background: #dc2743; color: #fff; }
.social-btn.tk { background: #333; color: #fff; }

/* ── Branch Network Map ─────────────────────────── */
.center-container-Branch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 390px;
  height: 490px;
  margin: 30px auto;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.branch-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.point {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: rgb(255, 230, 0);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
  animation: pulse-grow 2s infinite;
  box-shadow: 0 0 10px rgba(255, 230, 0, 0.8);
  transition: transform 0.2s ease;
}

.point:hover {
  transform: translate(-50%, -50%) scale(1.3);
  box-shadow: 0 0 15px rgba(255, 230, 0, 1);
}

.point::before,
.point::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255, 243, 7, 0.889);
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: scale(1);
  animation: wave 2s infinite;
}

.point::after { animation-delay: 1s; }

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;
  margin-bottom: 8px;
  z-index: 20;
  pointer-events: none;
}

.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0,0,0,0.8) transparent transparent transparent;
}

/* ── Branch Cards ───────────────────────────────── */
.branch-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin: 24px 0 40px;
}

.branch-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #fff;
  border: 2px solid #f0f0f0;
  border-radius: 14px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.branch-card:hover,
.branch-card--active {
  border-color: #FBB700;
  box-shadow: 0 6px 20px rgba(251,183,0,0.16);
  transform: translateY(-2px);
}

.branch-card-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }

.branch-card-body { flex: 1; min-width: 0; }

.branch-card-name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 4px;
}

.branch-card-addr {
  font-size: 0.78rem;
  color: #888;
  margin: 0 0 4px;
  line-height: 1.3;
}

.branch-card-phone {
  font-size: 0.82rem;
  font-weight: 600;
  color: #FF5F15;
  text-decoration: none;
}

.branch-card-phone:hover { text-decoration: underline; }

.branch-map-btn {
  flex-shrink: 0;
  font-size: 1.2rem;
  padding: 4px;
  border-radius: 6px;
  transition: background 0.2s;
  text-decoration: none;
}

.branch-map-btn:hover { background: #fef9f0; }

/* ── Contact Form ───────────────────────────────── */
.contact-form-section {
  margin: 20px 0 40px;
}

.form-subtitle {
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin: 0 0 30px;
}

.form-wrapper {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  padding: 36px 40px;
  border: 1px solid #f0f0f0;
}

.contact-form { display: flex; flex-direction: column; gap: 20px; }

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
}

.form-group label {
  font-size: 0.88rem;
  font-weight: 600;
  color: #444;
}

.required { color: #FF5F15; }

.form-group input,
.form-group select,
.form-group textarea {
  padding: 11px 16px;
  border: 2px solid #e8e8e8;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background: #fafafa;
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #FBB700;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(251,183,0,0.12);
}

.form-group.error input,
.form-group.error textarea {
  border-color: #e74c3c;
}

.error-msg {
  font-size: 0.78rem;
  color: #e74c3c;
  margin-top: 2px;
}

.char-count {
  position: absolute;
  bottom: -18px;
  right: 0;
  font-size: 0.72rem;
  color: #bbb;
}

.form-group textarea { resize: vertical; min-height: 120px; }

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 4px;
}

.form-note { font-size: 0.8rem; color: #aaa; margin: 0; }

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 32px;
  background: #FF5F15;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 18px rgba(255,95,21,0.3);
}

.submit-btn:hover:not(:disabled) {
  background: #e04f0d;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255,95,21,0.35);
}

.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

.send-icon { flex-shrink: 0; }

.form-feedback {
  padding: 14px 20px;
  border-radius: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
}

.form-feedback.success {
  background: #e8f8f0;
  border: 1px solid #a3d9b1;
  color: #1e6b3e;
}

.form-feedback.error-feedback {
  background: #fdecea;
  border: 1px solid #f5c6c6;
  color: #922b21;
}

.fade-msg-enter-active,
.fade-msg-leave-active { transition: opacity 0.4s, transform 0.4s; }
.fade-msg-enter-from,
.fade-msg-leave-to { opacity: 0; transform: translateY(-6px); }

/* ── Back to Home ───────────────────────────────── */
.home-link-section {
  text-align: center;
  padding: 32px 0 16px;
}

.home-link-section > p {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 12px;
}

.home-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 28px;
  background: #FBB700;
  color: #fff;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(251,183,0,0.3);
}

.home-link-btn:hover {
  background: #e0a500;
  transform: translateY(-2px);
}

.quick-nav-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.qnl {
  font-size: 0.85rem;
  color: #FF5F15;
  text-decoration: none;
  font-weight: 500;
  padding: 5px 14px;
  border: 1px solid rgba(255,95,21,0.25);
  border-radius: 30px;
  transition: all 0.25s;
}

.qnl:hover {
  background: #FF5F15;
  color: #fff;
  border-color: #FF5F15;
}

.text-center {
  text-align: center;
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.text-center h3 { color: #FBB700; margin-bottom: 10px; }
.text-center p  { color: #555; margin: 5px 0; font-size: 1rem; }

/* ── Animations ─────────────────────────────────── */
@keyframes pulse-grow {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50%       { transform: translate(-50%, -50%) scale(1.2); }
}
@keyframes wave {
  0%   { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(3); }
}

/* ── Responsive ─────────────────────────────────── */
@media (max-width: 1024px) {
  .contact-info-grid { grid-template-columns: repeat(2, 1fr); }
  .branch-cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .container { padding: 15px; padding-top: 70px; }
  .title { font-size: 1.8rem; margin-top: 20px; }
  .subtitle { font-size: 1.1rem; padding: 0 10px; }
  .center-container-Branch { width: 300px; height: 380px; }
  .contact-info-grid { grid-template-columns: 1fr; }
  .branch-cards-grid { grid-template-columns: 1fr; }
  .form-wrapper { padding: 24px 20px; }
  .form-row { grid-template-columns: 1fr; }
  #logo { width: 180px; height: auto; }
}

@media (max-width: 480px) {
  .container { padding: 10px; padding-top: 60px; }
  .title { font-size: 1.6rem; }
  .subtitle { font-size: 1rem; }
  .center-container-Branch { width: 250px; height: 320px; }
  #logo { width: 150px; height: auto; }
  .point { width: 12px; height: 12px; }
  .tooltip { font-size: 12px; padding: 4px 8px; }
  .form-wrapper { padding: 20px 14px; }
  .submit-btn { width: 100%; justify-content: center; }
  .form-footer { flex-direction: column; align-items: flex-start; }
  .quick-nav-links { gap: 8px; }
}
</style>
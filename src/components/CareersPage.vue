<template>
  <div class="ccbe-page">
    <NavBar></NavBar>

    <!-- ═════════ HERO ═════════ -->
    <section class="ccbe-hero">
      <div class="ccbe-hero-shape ccbe-hero-shape--1"></div>
      <div class="ccbe-hero-shape ccbe-hero-shape--2"></div>
      <div class="ccbe-hero-inner" data-aos="fade-up">
        <span class="ccbe-eyebrow">Join Our Team</span>
        <h1 class="ccbe-hero-title">
          Build your <span class="ccbe-gradient-text">career</span><br />with CCBE
        </h1>
        <p class="ccbe-hero-text">
          <b>Cambridge College of British English (CCBE)</b> Careers is your gateway to a world of
          possibilities and a launchpad for your professional aspirations. Be part of a prestigious
          institution that prioritizes academic excellence and nurtures a thriving community of
          dedicated professionals. Together, we inspire confidence, build futures, and redefine what
          it means to succeed.
        </p>
        <div class="ccbe-hero-actions">
          <button class="ccbe-cta" @click="openApplicationForm">
            Apply Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <a href="#openings" class="ccbe-ghost">View Openings</a>
        </div>
      </div>
    </section>

    <!-- ═════════ WHY JOIN US ═════════ -->
    <section class="ccbe-wrapper ccbe-perks">
      <div class="ccbe-perk" v-for="(perk, i) in perks" :key="perk.title" data-aos="fade-up" :data-aos-delay="i * 100">
        <div class="ccbe-perk-icon" v-html="perk.icon"></div>
        <h3>{{ perk.title }}</h3>
        <p>{{ perk.text }}</p>
      </div>
    </section>

    <!-- ═════════ OPENINGS ═════════ -->
    <section id="openings" class="ccbe-wrapper ccbe-openings">
      <div class="ccbe-section-head" data-aos="fade-up">
        <span class="ccbe-eyebrow ccbe-eyebrow--dark">Current Vacancies</span>
        <h2 class="ccbe-section-title">Find your <span class="ccbe-highlight">perfect role</span></h2>
        <div class="ccbe-underline"></div>
        <p class="ccbe-section-sub">
          Explore our latest openings across our branches and take the next step in your professional journey.
        </p>
      </div>

      <div class="ccbe-careers-grid" aria-label="Available career positions">
        <article
          v-for="(career, index) in careers"
          :key="index"
          class="ccbe-career-card"
          data-aos="fade-up"
          :data-aos-delay="(index % 3) * 100"
        >
          <div class="ccbe-image-wrap" @click="openPreview(career.image)">
            <img
              :src="career.image"
              :alt="`Career opportunity at Cambridge College of British English - image ${index + 1}`"
              class="ccbe-career-image"
              loading="lazy"
            />
            <div class="ccbe-image-overlay">
              <span class="ccbe-zoom">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
                  <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
                View full poster
              </span>
            </div>
          </div>
          <div class="ccbe-card-actions">
            <h3 class="ccbe-image-title">Join Our Team</h3>
            <button
              @click="openApplicationForm"
              class="ccbe-apply-btn"
              :aria-label="`Apply now for career position ${index + 1}`"
            >
              Apply Now
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- ═════════ CTA BAND ═════════ -->
    <section class="ccbe-wrapper">
      <div class="ccbe-band" data-aos="zoom-in">
        <div>
          <h2>Don't see the right role?</h2>
          <p>Send us your details anyway — we're always happy to hear from passionate professionals.</p>
        </div>
        <button class="ccbe-cta ccbe-cta--light" @click="openApplicationForm">Apply Now</button>
      </div>
    </section>

    <!-- Back to Home Link -->
    <div class="home-link-section1" data-aos="fade-up" data-aos-duration="1500">
      <p>Looking for something else?</p>
      <a href="/" class="home-link-btn1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
        Back to Home
      </a>
      <div class="quick-nav-links1">
        <a href="/courses" class="qnl1">Our Programmes</a>
        <a href="/about" class="qnl1">About CCBE</a>
        <a href="/news" class="qnl1">News &amp; Events</a>
        <a href="/corevalues" class="qnl1">Core Values</a>
      </div>
    </div>

    <ChatBot></ChatBot>
    <FooterPage></FooterPage>

    <!-- ═════════ POSTER PREVIEW ═════════ -->
    <transition name="ccbe-fade">
      <div v-if="previewImage" class="ccbe-modal-overlay ccbe-preview" @click="closePreview">
        <button class="ccbe-preview-close" @click="closePreview" aria-label="Close preview">×</button>
        <img :src="previewImage" alt="Career poster preview" class="ccbe-preview-img" @click.stop />
        <button class="ccbe-cta ccbe-preview-apply" @click.stop="applyFromPreview">Apply Now</button>
      </div>
    </transition>

    <!-- ═════════ APPLICATION FORM MODAL ═════════ -->
    <transition name="ccbe-fade">
      <div v-if="showDialog" class="ccbe-modal-overlay" @click="closeDialog">
        <div class="ccbe-modal-box" role="dialog" aria-modal="true" aria-labelledby="application-form-title" @click.stop>
          <div class="ccbe-modal-head">
            <div>
              <h2 id="application-form-title">Application Form</h2>
              <p>Tell us a little about yourself</p>
            </div>
            <button class="ccbe-close-btn" @click="closeDialog" aria-label="Close application form">×</button>
          </div>
          <div class="ccbe-modal-body">
            <form @submit.prevent="sendInquiry" id="applicationForm">
              <div class="ccbe-form-grid">
                <div class="ccbe-form-group ccbe-full-width">
                  <label for="name">Your Name*</label>
                  <input type="text" id="name" v-model="formData.name" required class="ccbe-form-input" placeholder="Enter your full name" />
                </div>
                <div class="ccbe-form-group">
                  <label for="position">Apply For*</label>
                  <select id="position" v-model="formData.position" required class="ccbe-form-select">
                    <option value="" disabled>Select position</option>
                    <option value="Teaching">Teaching</option>
                    <option value="Administration">Administration</option>
                    <option value="Management">Management</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Development">Development</option>
                    <option value="Business Development">Business Development</option>
                  </select>
                </div>
                <div class="ccbe-form-group">
                  <label for="branch">Nearest Branch*</label>
                  <select id="branch" v-model="formData.branch" required class="ccbe-form-select">
                    <option value="" disabled>Select branch</option>
                    <option value="Ambalangoda">Ambalangoda</option>
                    <option value="Galle">Galle</option>
                    <option value="Horana">Horana</option>
                    <option value="Matara">Matara</option>
                    <option value="Piliyandala">Piliyandala</option>
                  </select>
                </div>
                <div class="ccbe-form-group">
                  <label for="qualifications">Highest Qualifications*</label>
                  <select id="qualifications" v-model="formData.qualifications" required class="ccbe-form-select">
                    <option value="" disabled>Select qualification</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="HND">HND</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Certificate">Certificate</option>
                  </select>
                </div>
                <div class="ccbe-form-group">
                  <label for="experience">Experience*</label>
                  <select id="experience" v-model="formData.experience" required class="ccbe-form-select">
                    <option value="" disabled>Select experience</option>
                    <option value="No Experience">No Experience</option>
                    <option value="Less than 2 Years">Less than 2 Years</option>
                    <option value="Less than 3 Years">Less than 3 Years</option>
                    <option value="Less than 4 Years">Less than 4 Years</option>
                    <option value="4+ Years">4+ Years</option>
                  </select>
                </div>
                <div class="ccbe-form-group ccbe-full-width">
                  <label for="source">How did you hear about us?*</label>
                  <select id="source" v-model="formData.source" required class="ccbe-form-select">
                    <option value="" disabled>Select source</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Website">Website</option>
                    <option value="Friend/Referral">Friend/Referral</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="ccbe-form-group">
                  <label for="contact">Contact Number</label>
                  <input type="tel" id="contact" v-model="formData.contact" class="ccbe-form-input" placeholder="Enter contact number" />
                </div>
                <div class="ccbe-form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="formData.email" class="ccbe-form-input" placeholder="Enter email address" />
                </div>
              </div>
              <div class="ccbe-required-note"><small>*indicates required field</small></div>
              <div class="ccbe-form-actions">
                <button type="button" class="ccbe-btn-secondary" @click="closeDialog" aria-label="Close application form">CLOSE</button>
                <button type="submit" class="ccbe-btn-primary" :disabled="sending" aria-label="Submit application">
                  {{ sending ? 'SENDING...' : 'APPLY' }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>

    <!-- ═════════ SUCCESS MODAL ═════════ -->
    <transition name="ccbe-fade">
      <div v-if="successDialog" class="ccbe-modal-overlay" @click="closeSuccessDialog">
        <div class="ccbe-modal-box ccbe-success-modal" @click.stop>
          <div class="ccbe-modal-body ccbe-text-center">
            <div class="ccbe-success-icon">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h2>Application Sent Successfully</h2>
            <p>Your application has been successfully sent. Thank you for applying!</p>
            <button class="ccbe-btn-primary" @click="closeSuccessDialog" aria-label="Close success message">Close</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
import AOS from 'aos';
import emailjs from 'emailjs-com';

export default {
  name: 'CareersPage',
  components: { NavBar, FooterPage, ChatBot },
  data() {
    return {
      showDialog: false,
      successDialog: false,
      previewImage: null,
      sending: false,
      formData: {
        name: '',
        position: '',
        branch: '',
        qualifications: '',
        experience: '',
        source: '',
        contact: '',
        email: '',
      },
      perks: [
        {
          title: 'Academic Excellence',
          text: 'Work in an institution that puts quality British English education first.',
          icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        },
        {
          title: 'Growth & Development',
          text: 'Continuous learning and clear pathways to grow your professional career.',
          icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 17l6-6 4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 7h6v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        },
        {
          title: 'Supportive Community',
          text: 'Join a team of dedicated professionals who inspire and support each other.',
          icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.5" stroke="currentColor" stroke-width="2"/><path d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.3c2 .7 3.5 2.6 3.5 5.7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        },
        {
          title: 'Island-wide Branches',
          text: 'Opportunities across Ambalangoda, Galle, Horana, Matara and Piliyandala.',
          icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="2"/></svg>',
        },
      ],
      careers: [
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C9.png' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C10.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C11.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C12.png' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C4.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C5.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C6.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C7.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C8.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/C2.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Assistant%20BM.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Careers%2018.jpeg' },
        { image: 'https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Careers/Careers%2017.jpeg' },
        { image: 'https://ik.imagekit.io/u3wbiya66/Careers/4.jpeg' },
        { image: 'https://ik.imagekit.io/u3wbiya66/Careers/10.jpeg' },
        { image: 'https://ik.imagekit.io/u3wbiya66/Careers/6.jpeg' },
        { image: 'https://ik.imagekit.io/u3wbiya66/Careers/8.jpeg' },
        { image: 'https://ik.imagekit.io/u3wbiya66/Careers/5.jpeg' },
      ],
    };
  },
  mounted() {
    AOS.init({ duration: 900, once: true, offset: 60 });
    window.addEventListener('keydown', this.onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
    document.body.style.overflow = 'auto';
  },
  methods: {
    onKeydown(e) {
      if (e.key !== 'Escape') return;
      if (this.previewImage) this.closePreview();
      else if (this.showDialog) this.closeDialog();
      else if (this.successDialog) this.closeSuccessDialog();
    },
    lockScroll(lock) {
      document.body.style.overflow = lock ? 'hidden' : 'auto';
    },
    openApplicationForm() {
      this.showDialog = true;
      this.lockScroll(true);
    },
    closeDialog() {
      this.showDialog = false;
      this.lockScroll(false);
    },
    closeSuccessDialog() {
      this.successDialog = false;
      this.lockScroll(false);
    },
    openPreview(src) {
      this.previewImage = src;
      this.lockScroll(true);
    },
    closePreview() {
      this.previewImage = null;
      this.lockScroll(false);
    },
    applyFromPreview() {
      this.previewImage = null;
      this.openApplicationForm();
    },
    async sendInquiry() {
      if (this.sending) return;
      this.sending = true;

      const experienceMap = {
        'Less than 2 Years': '<2 Years',
        'Less than 3 Years': '<3 Years',
        'Less than 4 Years': '<4 Years',
      };

      const emailData = {
        name: this.formData.name,
        position: this.formData.position,
        branch: this.formData.branch,
        qualifications: this.formData.qualifications,
        experience: experienceMap[this.formData.experience] || this.formData.experience,
        source: this.formData.source,
        contact: this.formData.contact,
        email: this.formData.email,
      };

      // Open the Google Form straight away (inside the click gesture) so popup blockers allow it
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSco34ONLHBhIu6kfET6PNMynrJ-R5x9qRLIfGrYSquXd9tmwQ/viewform?fbzx=5328050623112666009',
        '_blank'
      );

      await Promise.allSettled([
        emailjs.send('service_s33obqe', 'template_mz5d1yg', emailData, 'WIB0bG1OPslsktqa2')
          .then(r => console.log('First email sent successfully', r))
          .catch(e => console.error('Error sending first email', e)),
        emailjs.send('service_eypw2ip', 'template_ygw1cnq', emailData, 'sW9PkDNeVewlET9FF')
          .then(r => console.log('Second email sent successfully', r))
          .catch(e => console.error('Error sending second email', e)),
      ]);

      this.sending = false;
      this.showDialog = false;
      this.successDialog = true;
      this.clearForm();
    },
    clearForm() {
      this.formData = {
        name: '', position: '', branch: '', qualifications: '',
        experience: '', source: '', contact: '', email: '',
      };
    },
  },
};
</script>

<style scoped>
/* ───────── Tokens ───────── */
.ccbe-page {
  --orange: #FF5F15;
  --orange-dark: #cc4a12;
  --yellow: #FBB700;
  --ink: #1f2430;
  --muted: #667085;
  --soft: #fff7ef;
  overflow-x: hidden;
}

.ccbe-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ───────── Hero ───────── */
.ccbe-hero {
  position: relative;
  padding: 90px 20px 100px;
  text-align: center;
  background: linear-gradient(135deg, #fff7ef 0%, #ffffff 50%, #fff3d6 100%);
  overflow: hidden;
}

.ccbe-hero-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
  opacity: 0.35;
  pointer-events: none;
}
.ccbe-hero-shape--1 {
  width: 380px; height: 380px;
  top: -140px; left: -120px;
  background: radial-gradient(circle, var(--orange), transparent 70%);
}
.ccbe-hero-shape--2 {
  width: 440px; height: 440px;
  bottom: -200px; right: -140px;
  background: radial-gradient(circle, var(--yellow), transparent 70%);
}

.ccbe-hero-inner {
  position: relative;
  max-width: 860px;
  margin: 0 auto;
}

.ccbe-eyebrow {
  display: inline-block;
  padding: 7px 18px;
  border-radius: 50px;
  background: rgba(255, 95, 21, 0.1);
  color: var(--orange);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.ccbe-eyebrow--dark { background: rgba(251, 183, 0, 0.16); color: #a87800; }

.ccbe-hero-title {
  margin: 22px 0 18px;
  font-size: clamp(2.2rem, 5.5vw, 3.8rem);
  line-height: 1.12;
  font-weight: 800;
  color: var(--ink);
}

.ccbe-gradient-text {
  background: linear-gradient(90deg, var(--orange), var(--yellow));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ccbe-hero-text {
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  line-height: 1.75;
  color: #475467;
  max-width: 780px;
  margin: 0 auto 34px;
}

.ccbe-hero-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.ccbe-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 34px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90deg, var(--orange), #ff8a3d);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(255, 95, 21, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ccbe-cta:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(255, 95, 21, 0.45); }
.ccbe-cta--light { background: #fff; color: var(--orange); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18); }

.ccbe-ghost {
  display: inline-flex;
  align-items: center;
  padding: 14px 34px;
  border-radius: 50px;
  border: 2px solid var(--orange);
  color: var(--orange);
  font-weight: 700;
  text-decoration: none;
  transition: all 0.25s ease;
}
.ccbe-ghost:hover { background: var(--orange); color: #fff; transform: translateY(-3px); }

/* ───────── Perks ───────── */
.ccbe-perks {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-top: -50px;
  position: relative;
  z-index: 2;
}

.ccbe-perk {
  background: #fff;
  border-radius: 18px;
  padding: 28px 22px;
  text-align: center;
  box-shadow: 0 12px 34px rgba(31, 36, 48, 0.09);
  border-bottom: 4px solid transparent;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.ccbe-perk:hover { transform: translateY(-8px); border-color: var(--yellow); }

.ccbe-perk-icon {
  width: 62px; height: 62px;
  margin: 0 auto 16px;
  display: grid; place-items: center;
  border-radius: 18px;
  color: #fff;
  background: linear-gradient(135deg, var(--orange), var(--yellow));
  box-shadow: 0 8px 18px rgba(255, 95, 21, 0.3);
}
.ccbe-perk h3 { font-size: 1.1rem; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
.ccbe-perk p { font-size: 0.92rem; color: var(--muted); line-height: 1.6; margin: 0; }

/* ───────── Openings ───────── */
.ccbe-openings { padding-top: 90px; }

.ccbe-section-head { text-align: center; max-width: 640px; margin: 0 auto 50px; }
.ccbe-section-title { font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 800; color: var(--ink); margin: 18px 0 12px; }
.ccbe-highlight { color: var(--orange); }
.ccbe-underline { width: 70px; height: 4px; margin: 0 auto 16px; border-radius: 4px; background: linear-gradient(90deg, var(--orange), var(--yellow)); }
.ccbe-section-sub { color: var(--muted); font-size: 1.02rem; line-height: 1.7; }

.ccbe-careers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: start;
}

.ccbe-career-card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  box-shadow: 0 6px 22px rgba(31, 36, 48, 0.07);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.ccbe-career-card:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(255, 95, 21, 0.18); }

.ccbe-image-wrap { position: relative; cursor: zoom-in; overflow: hidden; background: #f7f7f7; }
.ccbe-career-image { display: block; width: 100%; height: auto; transition: transform 0.6s ease; }
.ccbe-career-card:hover .ccbe-career-image { transform: scale(1.04); }

.ccbe-image-overlay {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(to top, rgba(31, 36, 48, 0.65), rgba(31, 36, 48, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.ccbe-image-wrap:hover .ccbe-image-overlay { opacity: 1; }

.ccbe-zoom {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 20px;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.95);
  color: var(--ink);
  font-weight: 600; font-size: 0.9rem;
}

.ccbe-card-actions { padding: 20px; text-align: center; }
.ccbe-image-title { font-size: 1.25rem; font-weight: 700; color: var(--ink); margin: 0 0 12px; }

.ccbe-apply-btn {
  width: 100%;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90deg, var(--orange), #ff8a3d);
  color: #fff;
  font-size: 1rem; font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.ccbe-apply-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(255, 95, 21, 0.35); }

/* ───────── CTA band ───────── */
.ccbe-band {
  margin: 90px 0 20px;
  padding: 44px 48px;
  border-radius: 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 28px;
  color: #fff;
  background: linear-gradient(120deg, var(--orange), var(--yellow));
  box-shadow: 0 18px 40px rgba(255, 95, 21, 0.3);
}
.ccbe-band h2 { font-size: 1.8rem; font-weight: 800; margin: 0 0 8px; }
.ccbe-band p { margin: 0; font-size: 1.02rem; opacity: 0.95; }

/* ───────── Modals ───────── */
.ccbe-modal-overlay {
  position: fixed; inset: 0;
  display: flex; justify-content: center; align-items: center;
  padding: 20px;
  background: rgba(20, 24, 33, 0.6);
  backdrop-filter: blur(4px);
  z-index: 2000;
}

.ccbe-modal-box {
  width: 100%; max-width: 640px; max-height: 92vh;
  overflow-y: auto;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
  animation: ccbeSlideIn 0.35s ease;
}
@keyframes ccbeSlideIn {
  from { transform: translateY(24px) scale(0.97); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
}

.ccbe-modal-head {
  display: flex; align-items: flex-start; justify-content: space-between;
  padding: 24px 28px;
  background: linear-gradient(120deg, var(--orange), var(--yellow));
  color: #fff;
  border-radius: 20px 20px 0 0;
}
.ccbe-modal-head h2 { margin: 0; font-size: 1.5rem; font-weight: 800; color: #fff; }
.ccbe-modal-head p { margin: 4px 0 0; font-size: 0.9rem; opacity: 0.92; }

.ccbe-close-btn {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border: none; border-radius: 50%;
  background: rgba(255, 255, 255, 0.22);
  color: #fff; font-size: 26px; line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}
.ccbe-close-btn:hover { background: rgba(255, 255, 255, 0.4); transform: rotate(90deg); }

.ccbe-modal-body { padding: 26px 28px 28px; }

.ccbe-form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4px 18px; }
.ccbe-full-width { grid-column: 1 / -1; }
.ccbe-form-group { margin-bottom: 14px; }
.ccbe-form-group label { display: block; margin-bottom: 6px; font-size: 0.85rem; font-weight: 600; color: #344054; }

.ccbe-form-input,
.ccbe-form-select {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid #e4e7ec;
  border-radius: 10px;
  background-color: #fafafa;
  font-size: 0.95rem;
  box-sizing: border-box;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
}
.ccbe-form-input:focus,
.ccbe-form-select:focus {
  outline: none;
  background-color: #fff;
  border-color: var(--orange);
  box-shadow: 0 0 0 4px rgba(255, 95, 21, 0.12);
}

.ccbe-form-select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23667085' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;
}

.ccbe-required-note { margin: 4px 0 18px; color: var(--muted); }

.ccbe-form-actions { display: flex; justify-content: space-between; gap: 12px; }

.ccbe-btn-primary,
.ccbe-btn-secondary {
  padding: 13px 30px;
  border-radius: 50px;
  font-size: 0.95rem; font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}
.ccbe-btn-primary {
  border: none;
  background: linear-gradient(90deg, var(--orange), #ff8a3d);
  color: #fff;
  box-shadow: 0 8px 18px rgba(255, 95, 21, 0.3);
}
.ccbe-btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(255, 95, 21, 0.4); }
.ccbe-btn-primary:disabled { opacity: 0.7; cursor: not-allowed; }
.ccbe-btn-secondary { background: transparent; border: 1.5px solid #d0d5dd; color: #667085; }
.ccbe-btn-secondary:hover { background: #f5f5f5; color: #344054; }

/* Success */
.ccbe-success-modal { max-width: 440px; text-align: center; }
.ccbe-text-center { text-align: center; }
.ccbe-success-icon {
  width: 78px; height: 78px;
  margin: 8px auto 18px;
  display: grid; place-items: center;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(135deg, #34c759, #2ea44f);
  box-shadow: 0 10px 24px rgba(46, 164, 79, 0.4);
  animation: ccbePop 0.5s ease;
}
@keyframes ccbePop { 0% { transform: scale(0); } 70% { transform: scale(1.15); } 100% { transform: scale(1); } }
.ccbe-success-modal h2 { font-size: 1.35rem; font-weight: 800; color: var(--ink); margin-bottom: 10px; }
.ccbe-success-modal p { color: var(--muted); margin-bottom: 22px; }

/* Poster preview */
.ccbe-preview { flex-direction: column; gap: 16px; background: rgba(10, 12, 18, 0.88); }
.ccbe-preview-img { max-width: min(92vw, 720px); max-height: 78vh; border-radius: 14px; box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5); object-fit: contain; }
.ccbe-preview-close {
  position: absolute; top: 18px; right: 22px;
  width: 44px; height: 44px;
  border: none; border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  color: #fff; font-size: 30px; cursor: pointer;
}
.ccbe-preview-close:hover { background: rgba(255, 255, 255, 0.32); }
.ccbe-preview-apply { padding: 12px 36px; }

/* Transitions */
.ccbe-fade-enter-active, .ccbe-fade-leave-active { transition: opacity 0.25s ease; }
.ccbe-fade-enter-from, .ccbe-fade-leave-to { opacity: 0; }

/* ───────── Back to Home ───────── */
.home-link-section1 { text-align: center; padding: 50px 0 30px; }
.home-link-section1 > p { font-size: 0.95rem; color: #888; margin-bottom: 12px; }

.home-link-btn1 {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 11px 28px;
  background: #FBB700; color: #fff;
  border-radius: 50px;
  font-weight: 700; font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(251, 183, 0, 0.3);
}
.home-link-btn1:hover { background: #e0a500; transform: translateY(-2px); }

.quick-nav-links1 { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 16px; }
.qnl1 {
  font-size: 0.85rem; font-weight: 500;
  color: #FF5F15; text-decoration: none;
  padding: 5px 14px;
  border: 1px solid rgba(255, 95, 21, 0.25);
  border-radius: 30px;
  transition: all 0.25s;
}
.qnl1:hover { background: #FF5F15; color: #fff; border-color: #FF5F15; }

/* ───────── Responsive ───────── */
@media (max-width: 1024px) {
  .ccbe-perks { grid-template-columns: repeat(2, 1fr); }
  .ccbe-careers-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .ccbe-hero { padding: 64px 16px 84px; }
  .ccbe-hero-text { font-size: 1rem; }
  .ccbe-openings { padding-top: 64px; }
  .ccbe-band { flex-direction: column; text-align: center; padding: 34px 24px; }
  .ccbe-form-grid { grid-template-columns: 1fr; }
  .ccbe-form-actions { flex-direction: column-reverse; }
  .ccbe-btn-primary, .ccbe-btn-secondary { width: 100%; }
  .ccbe-modal-head, .ccbe-modal-body { padding-left: 20px; padding-right: 20px; }
}

@media (max-width: 600px) {
  .ccbe-perks { grid-template-columns: 1fr; margin-top: -40px; }
  .ccbe-careers-grid { grid-template-columns: 1fr; gap: 22px; }
  .ccbe-hero-actions { flex-direction: column; align-items: stretch; }
  .ccbe-cta, .ccbe-ghost { justify-content: center; }
}
</style>
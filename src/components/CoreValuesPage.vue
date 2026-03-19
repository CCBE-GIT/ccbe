<template>
    <NavBar></NavBar>

    <div class="core-values-wrapper">
        <!-- Decorative background elements -->
        <div class="bg-accent bg-accent--1"></div>
        <div class="bg-accent bg-accent--2"></div>
        <div class="bg-accent bg-accent--3"></div>

        <v-container class="cv-container">

            <!-- Header -->
            <div class="header-block" data-aos="fade-up" data-aos-duration="1000">
                <!-- <p class="section-eyebrow">Who We Are</p> -->
                <h1 class="title mt-5">
                    OUR <span class="highlight">CORE VALUES</span>
                </h1>
                <div class="title-rule"></div>
                <h4 class="mt-2 core-values-text">
                    At the heart of our institution lie the following core values, each meticulously cultivated to foster an
                    environment of academic excellence.
                </h4>
            </div>

            <!-- Cards Grid -->
            <v-row justify="center" class="mt-5 cards-row" data-aos="fade-up" data-aos-duration="3000">
                <v-col
                    v-for="(value, index) in coreValues"
                    :key="index"
                    cols="12" md="6" lg="4"
                    :class="{ 'zigzag-right': index % 2 === 1, 'zigzag-left': index % 2 === 0 }"
                >
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card
                            class="mx-auto cv-card"
                            :class="{ 'cv-card--hovered': isHovering }"
                            color="grey-lighten-4"
                            max-width="500"
                            v-bind="props"
                        >
                            <!-- Number badge -->
                            <div class="card-number">{{ String(index + 1).padStart(2, '0') }}</div>

                            <v-img :aspect-ratio="16 / 9" :src="value.image" cover>
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        class="d-flex transition-fast-in-fast-out bg-yellow-darken-2 v-card--reveal text-h6"
                                        style="height: 100%; display: flex; justify-content: center; align-items: center; text-align: center;"
                                    >
                                        {{ value.description }}
                                    </div>
                                </v-expand-transition>
                            </v-img>

                            <v-card-text class="pt-6 card-body">
                                <div class="card-title-bar"></div>
                                <h3 class="text-h5 font-weight-bold text-brown-darken-4 mb-2">
                                    {{ value.title }}
                                </h3>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

        </v-container>
    </div>
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
          <!-- <a href="/corevalues" class="qnl">Core Values</a> -->
        </div>
      </div>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
</template>


<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
import ArrowButton from './ArrowButton.vue';
// AOS Transition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'CoreValues',
    components: {
        NavBar,
        FooterPage,
        ChatBot,
        ArrowButton
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
    data() {
        return {
            coreValues: [
                {
                    image: require('@/assets/coreValues/CV1.jpg'),
                    title: 'State-of-the-Art Facilitated Classrooms',
                    description: 'Our commitment to providing a conducive learning atmosphere is reflected in our state-of-the-art classrooms equipped with cutting-edge technology and resources.'
                },
                {
                    image: require('@/assets/coreValues/CV2.jpg'),
                    title: 'Highly Qualified Lecture Panel',
                    description: 'We take pride in our team of exceptionally qualified educators who bring extensive expertise to the classroom, ensuring a robust and enriching learning experience for our students.'
                },
                {
                    image: require('@/assets/coreValues/CV3.jpg'),
                    title: 'Parent and Student Supportive Administrative Panel',
                    description: 'Our administrative team is dedicated to fostering strong partnerships with parents and students, offering unwavering support and guidance throughout their educational journey.'
                },
                {
                    image: require('@/assets/coreValues/CV4.jpg'),
                    title: 'Monthly Evaluation of Student Skills',
                    description: 'To track and enhance student progress, we conduct comprehensive evaluations of their skills on a monthly basis, enabling personalized development plans.'
                },
                {
                    image: require('@/assets/coreValues/CV5.jpg'),
                    title: 'Continuous Quality Audit',
                    description: 'We adhere to a rigorous system of continuous quality audits, reinforcing our commitment to maintaining the highest standards of education and service delivery.'
                },
                {
                    image: require('@/assets/coreValues/CV6.jpg'),
                    title: 'Student-Centric Classroom Environment',
                    description: 'Our classrooms are designed to be student-centric, with a focus on developing the four essential skills, ensuring a holistic approach to education.'
                },
                {
                    image: "https://ik.imagekit.io/u3wbiya66/CV7.jpg?updatedAt=1737780608594",
                    title: 'Excellent Student Results',
                    description: 'Our dedication to academic excellence is evidenced by the consistently outstanding results achieved by our students in various assessments and examinations.'
                },
                {
                    image: require('@/assets/coreValues/CV8.jpg'),
                    title: 'Child Safeguarding, First Aid Training, and Fire Safety',
                    description: 'We prioritize the safety and well-being of our students through the implementation of robust child safeguarding processes, a staff trained in first aid, and stringent fire safety measures to create a secure learning environment.'
                },
            ]
        };
    }
};
</script>


<style>

/* ── Page Wrapper ─────────────────────────────────────── */
.core-values-wrapper {
    background: linear-gradient(160deg, #fffdf8 0%, #ffffff 50%, #fff8f2 100%);
    min-height: 100vh;
    padding: 60px 0 100px;
    position: relative;
    overflow: hidden;
}

.core-values-text{
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ── Decorative background accents ───────────────────── */
.bg-accent {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
    z-index: 0;
}
.bg-accent--1 {
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(251, 183, 0, 0.12) 0%, transparent 70%);
    top: -120px; left: -150px;
}
.bg-accent--2 {
    width: 420px; height: 420px;
    background: radial-gradient(circle, rgba(255, 95, 21, 0.09) 0%, transparent 70%);
    bottom: 80px; right: -130px;
}
.bg-accent--3 {
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(251, 183, 0, 0.07) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%, -50%);
}

/* ── Container ────────────────────────────────────────── */
.cv-container {
    position: relative;
    z-index: 1;
}

/* ── Header Block ─────────────────────────────────────── */
.header-block {
    text-align: center;
    margin-bottom: 20px;
}

.section-eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: #FF5F15;
    margin-bottom: 0;
}

.title {
    /* font-family: 'Roboto', sans-serif; */
    color: #FBB700;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3px;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.highlight {
    color: #FF5F15;
}

/* Animated underline rule */
.title-rule {
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, #FBB700, #FF5F15);
    margin: 16px auto 20px;
    border-radius: 2px;
}

.subtitle {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
}

.name {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 10px 0;
}

.title-intro {
    /* font-family: "Arial", sans-serif; */
    font-weight: 400;
    font-style: normal;
    text-align: center;
}

.paragraph {
    /* font-family: "Roboto", sans-serif; */
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
}

#logo {
    justify-content: center;
}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.title-intro {
    /* font-family: "Anton", sans-serif; */
    font-weight: 400;
    font-style: normal;
    text-align: center;
}

.paragraph {
    /* font-family: "Roboto", sans-serif; */
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: justify;
}

h4 {
    justify-content: center;
    text-align: center;
    color: #555;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
}

.center-container {
    display: flex;
    justify-content: center;
    align-items: left;
    display: flex;
}

/* ── Core Values Card ─────────────────────────────────── */
.cv-card {
    border-radius: 18px !important;
    overflow: hidden !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.09) !important;
    transition: transform 0.38s cubic-bezier(0.165, 0.84, 0.44, 1),
                box-shadow 0.38s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
    position: relative;
    background: #ffffff !important;
}

.cv-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 18px;
    border: 2px solid transparent;
    background:
        linear-gradient(135deg, rgba(251, 183, 0, 0.45), rgba(255, 95, 21, 0.3) 60%, transparent) border-box;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 4;
}

.cv-card--hovered {
    transform: translateY(-10px) !important;
    box-shadow: 0 22px 48px rgba(251, 183, 0, 0.18) !important;
}

.cv-card--hovered::before {
    opacity: 1;
}

/* Number badge */
.card-number {
    position: absolute;
    top: 12px;
    right: 14px;
    z-index: 3;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: white;
    background: linear-gradient(135deg, #FBB700, #FF5F15);
    border-radius: 20px;
    padding: 3px 10px;
    line-height: 1.6;
    box-shadow: 0 3px 10px rgba(255, 95, 21, 0.35);
}

/* Card bottom content */
.card-body {
    padding: 20px 22px 22px !important;
}

/* Coloured accent bar above title */
.card-title-bar {
    width: 36px;
    height: 3px;
    background: linear-gradient(90deg, #FBB700, #FF5F15);
    border-radius: 2px;
    margin-bottom: 12px;
}

/* ── Hover reveal overlay (kept exactly as original) ──── */
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}

/* ── Zigzag stagger effect (original) ────────────────── */
.zigzag-left {
    margin-top: 20px;
}

.zigzag-right {
    margin-top: 60px;
}

/* ── Cards row spacing ────────────────────────────────── */
.cards-row {
    gap: 0;
    row-gap: 8px;
}

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

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 960px) {
    .zigzag-left,
    .zigzag-right {
        margin-top: 20px;
    }

    .title {
        font-size: 2rem;
    }
}

@media (max-width: 600px) {
    .core-values-wrapper {
        padding: 40px 0 70px;
    }

    .title {
        font-size: 1.7rem;
    }

    .section-eyebrow {
        font-size: 0.7rem;
    }
}

</style>
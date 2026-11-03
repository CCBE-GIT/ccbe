<template>
  <NavBar></NavBar>

  <!-- Award Popup (also opens when a marquee card is clicked) -->
  <div
    v-if="showAwardPopup"
    class="award-popup-overlay"
    @click.self="closeAwardPopup"
  >
    <div class="award-popup-card" role="dialog" aria-modal="true" aria-labelledby="award-popup-title">
      <button
        class="award-popup-close"
        @click="closeAwardPopup"
        aria-label="Close award popup"
      >
        &times;
      </button>

      <img
        :src="awardPopupData.src"
        :alt="awardPopupData.title"
        class="award-popup-image"
      />

      <div class="award-popup-content">
        <h2 id="award-popup-title" class="award-popup-title">
          {{ awardPopupData.title }}
        </h2>
        <p v-if="awardPopupData.subtitle" class="award-popup-subtitle">{{ awardPopupData.subtitle }}</p>
        <p class="award-popup-description">{{ awardPopupData.description }}</p>

        <div class="award-popup-meta">
          <span v-if="awardPopupData.year" class="award-popup-badge"
            >{{ awardPopupData.year }}</span
          >
          <span v-if="awardPopupData.category" class="award-popup-badge"
            >{{ awardPopupData.category }}</span
          >
        </div>

        <p v-if="awardPopupData.organization" class="award-popup-org">
          Issued by: <b>{{ awardPopupData.organization }}</b>
        </p>

        <a
          v-if="awardPopupData.link"
          :href="awardPopupData.link"
          target="_blank"
          rel="noopener noreferrer"
          class="award-popup-link"
        >
          Watch here
        </a>

        <img
          v-if="awardPopupData.organizationLogo"
          :src="awardPopupData.organizationLogo"
          alt="Organization Logo"
          class="award-popup-org-logo"
        />
      </div>
    </div>
  </div>

  <CaroselPage></CaroselPage>

  <!-- Logo Section -->

  <div class="logo-container" data-aos="zoom-in-up" data-aos-duration="3000">
    <img
      :src="logo"
      alt="CCBE Company Logo"
      width="210"
      height="170"
      id="logo"
    />
  </div>

  <h1 class="title mr-5 ml-5" data-aos="fade-up" data-aos-duration="3000">
    Welcome to
    <span class="highlight">Cambridge College of British English</span>
  </h1>

  <div class="content-wrapper mr-5 ml-5">
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
      <b>Cambridge College of British English (CCBE)</b> is renowned for its
      commitment to providing world-class English courses tailored to
      individuals of all ages, from 5-year-old children to adults. With a
      dedicated mission to foster proficiency in reading, writing, listening,
      and speaking English, CCBE stands as a beacon of excellence in language
      education. Through innovative teaching methods and a nurturing
      environment, students embark on a transformative journey towards
      linguistic mastery. Whether honing the basics or delving into advanced
      concepts, CCBE ensures that each learner receives personalized attention
      and support to achieve their language learning goals.
    </p>

    <p
      class="paragraph call-to-action"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <b>Join CCBE and unlock your potential for academic success!</b>
    </p>
  </div>

  <v-container>
    <section
      class="why-choose-us strength-section"
      ref="statsSection"
      aria-labelledby="strength-heading"
    >
      <h1
        class="title strength-title mt-1 text-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        OUR <span class="highlight">STRENGTH</span>
      </h1>

      <v-container>
        <v-row
          justify="center"
          align="center"
          class="stats-row"
          spacing="4"
          aria-label="Key statistics and strengths"
        >
          <!-- Card 1: Happy Students -->
          <v-col
            cols="12"
            sm="6"
            md="3"
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              aria-labelledby="happy-students-title"
            >
              <div class="text-overline mb-2">
                <p class="stat-label strength-label">
                  Happy Students
                </p>
              </div>
              <v-row justify="center">
                <v-col cols="auto mb-3">
                  <v-img
                    src="@/assets/icons/Student.png"
                    alt="Student icon representing happy students"
                    width="100"
                  ></v-img>
                </v-col>
              </v-row>
              <v-list-item-title class="text-h5 mb-1">
                <h3 class="stat-value strength-value">
                  {{ happyStudents }} +
                </h3>
              </v-list-item-title>
            </v-card>
          </v-col>

          <!-- Card 2: Qualified Teachers -->
          <v-col
            cols="12"
            sm="6"
            md="3"
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              aria-labelledby="teachers-title"
            >
              <div class="text-overline mb-2">
                <p class="stat-label strength-label">
                  Teachers
                </p>
              </div>
              <v-row justify="center">
                <v-col cols="auto mb-3">
                  <v-img
                    src="@/assets/icons/Teacher.png"
                    alt="Teacher icon representing qualified teachers"
                    width="100"
                  ></v-img>
                </v-col>
              </v-row>
              <v-list-item-title class="text-h5 mb-1">
                <h3 class="stat-value strength-value">
                  {{ qualifiedTeachers }} +
                </h3>
              </v-list-item-title>
            </v-card>
          </v-col>

          <!-- Card 3: Years In The Field -->
          <v-col
            cols="12"
            sm="6"
            md="3"
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              aria-labelledby="years-title"
            >
              <div class="text-overline mb-2">
                <p class="stat-label strength-label strength-label-sm">
                  Years In The Field
                </p>
              </div>
              <v-row justify="center">
                <v-col cols="auto mb-3">
                  <v-img
                    src="@/assets/icons/Year.png"
                    alt="Calendar icon representing years in the field"
                    width="100"
                  ></v-img>
                </v-col>
              </v-row>
              <v-list-item-title class="text-h5 mb-1">
                <h3 class="stat-value strength-value">
                  {{ yearsInField }} +
                </h3>
              </v-list-item-title>
            </v-card>
          </v-col>

          <!-- Card 4: Branches -->
          <v-col
            cols="12"
            sm="6"
            md="3"
            class="text-center"
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <v-card
              class="mx-auto"
              max-width="344"
              outlined
              aria-labelledby="branches-title"
            >
              <div class="text-overline mb-2">
                <p class="stat-label strength-label">
                  Branches
                </p>
              </div>
              <v-row justify="center">
                <v-col cols="auto mb-3">
                  <v-img
                    src="@/assets/icons/Building.png"
                    alt="Building icon representing branches"
                    width="100"
                  ></v-img>
                </v-col>
              </v-row>
              <v-list-item-title class="text-h5 mb-1">
                <h3 class="stat-value strength-value">
                  {{ branches }}
                </h3>
              </v-list-item-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-container>

  <!-- TWO MARQUEES: 1. Awards & Recognitions  2. Highlights -->
  <section
    v-for="sec in marqueeSections"
    :key="sec.key"
    :id="sec.key + '-section'"
    class="hm-section"
    :class="'is-' + sec.theme"
    :aria-labelledby="sec.key + '-heading'"
  >
    <span class="hm-glow hm-glow-a" aria-hidden="true"></span>
    <span class="hm-glow hm-glow-b" aria-hidden="true"></span>

    <div class="hm-head">
      <div class="hm-head-text">
        <h2 :id="sec.key + '-heading'" class="hm-title" data-aos="fade-up" data-aos-duration="1500">
          {{ sec.titleMain }} <span class="hm-title-accent">{{ sec.titleAccent }}</span>
        </h2>
        <p class="hm-sub">{{ sec.subtitle }}</p>
      </div>

      <button
        type="button"
        class="hm-toggle"
        :aria-pressed="paused[sec.key]"
        :aria-label="(paused[sec.key] ? 'Play ' : 'Pause ') + sec.titleMain + ' slider'"
        @click="paused[sec.key] = !paused[sec.key]"
      >
        <span class="hm-toggle-icon" aria-hidden="true">
          <i v-if="!paused[sec.key]" class="hm-bar"></i>
          <i v-if="!paused[sec.key]" class="hm-bar"></i>
          <i v-if="paused[sec.key]" class="hm-play"></i>
        </span>
        {{ paused[sec.key] ? "Play" : "Pause" }}
      </button>
    </div>

    <div class="hm-marquee" :class="{ 'is-paused': paused[sec.key] }">
      <div
        class="hm-track"
        :class="{ 'is-reverse': sec.reverse }"
        :style="{ animationDuration: sec.duration + 's' }"
      >
        <button
          v-for="(item, i) in sec.items"
          :key="sec.key + i"
          type="button"
          class="hm-card"
          :aria-hidden="i >= sec.count ? 'true' : null"
          :tabindex="i >= sec.count ? -1 : null"
          :aria-label="i >= sec.count ? null : `View details: ${item.title}`"
          @click="openItem(item)"
        >
          <span class="hm-card-photo">
            <img :src="item.src" :alt="i >= sec.count ? '' : item.title" loading="lazy" />
            <span class="hm-card-type" :class="'is-' + item.type.toLowerCase()">{{ item.type }}</span>
            <span class="hm-card-year">{{ item.year }}</span>
          </span>
          <span class="hm-card-body">
            <span class="hm-card-title">{{ item.title }}</span>
            <span class="hm-card-desc">{{ item.description }}</span>
            <span class="hm-card-foot">
              <span class="hm-card-org">{{ item.organization }}</span>
              <span class="hm-card-more">View</span>
            </span>
          </span>
        </button>
      </div>
    </div>

    <div v-if="sec.cta" class="hm-actions">
      <a :href="sec.cta.href" class="hm-btn">{{ sec.cta.label }}</a>
    </div>
  </section>

  <!-- 3. STUDENT TESTIMONIALS marquee -->
  <section id="testimonials-section" class="hm-section is-dark" aria-labelledby="testimonials-heading">
    <span class="hm-glow hm-glow-a" aria-hidden="true"></span>
    <span class="hm-glow hm-glow-b" aria-hidden="true"></span>

    <div class="hm-head">
      <div class="hm-head-text">
        <h2 id="testimonials-heading" class="hm-title" data-aos="fade-up" data-aos-duration="1500">
          What Our <span class="hm-title-accent">Students Say</span>
        </h2>
        <p class="hm-sub">
          Hear from our students about their learning experiences and the results they achieved with CCBE.
        </p>
      </div>

      <button
        type="button"
        class="hm-toggle"
        :aria-pressed="paused.testimonials"
        :aria-label="(paused.testimonials ? 'Play' : 'Pause') + ' testimonials slider'"
        @click="paused.testimonials = !paused.testimonials"
      >
        <span class="hm-toggle-icon" aria-hidden="true">
          <i v-if="!paused.testimonials" class="hm-bar"></i>
          <i v-if="!paused.testimonials" class="hm-bar"></i>
          <i v-if="paused.testimonials" class="hm-play"></i>
        </span>
        {{ paused.testimonials ? "Play" : "Pause" }}
      </button>
    </div>

    <div class="hm-marquee" :class="{ 'is-paused': paused.testimonials }">
      <div class="hm-track" :style="{ animationDuration: testimonialDuration + 's' }">
        <article
          v-for="(t, i) in studentStoryMarquee"
          :key="'story' + i"
          class="hm-quote"
          :aria-hidden="i >= studentStories.length ? 'true' : null"
        >
          <span class="hm-quote-mark" aria-hidden="true">&ldquo;</span>
          <p class="hm-quote-text">{{ t.text }}</p>

          <div class="hm-quote-person">
            <img
              class="hm-quote-avatar"
              :src="t.userAvatar"
              :alt="i >= studentStories.length ? '' : t.userName"
              loading="lazy"
            />
            <span class="hm-quote-who">
              <span class="hm-quote-name">{{ t.userName }}</span>
              <span class="hm-quote-role">{{ t.userRole }}</span>
            </span>
          </div>

          <a
            :href="t.link"
            target="_blank"
            rel="noopener noreferrer"
            class="hm-quote-btn"
            :tabindex="i >= studentStories.length ? -1 : null"
          >
            Watch video <span aria-hidden="true">&#9654;</span>
          </a>
        </article>
      </div>
    </div>
  </section>

  <!-- 4. WATCH THEIR STORIES (embedded videos) -->
  <section id="stories-section" class="hm-section is-light" aria-labelledby="stories-heading">
    <span class="hm-glow hm-glow-a" aria-hidden="true"></span>
    <span class="hm-glow hm-glow-b" aria-hidden="true"></span>

    <div class="hm-head">
      <div class="hm-head-text">
        <h2 id="stories-heading" class="hm-title" data-aos="fade-up" data-aos-duration="1500">
          Watch Their <span class="hm-title-accent">Stories</span>
        </h2>
        <p class="hm-sub">Experience the journey through their own words.</p>
      </div>
    </div>

    <div class="hm-videos">
      <div class="hm-video" v-for="(v, i) in videos" :key="'video' + i">
        <iframe
          :src="v.link"
          :title="`Student story video ${i + 1}`"
          loading="lazy"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>

  <ArrowButton></ArrowButton>
  <ChatBot></ChatBot>
  <FooterPage></FooterPage>
</template>

<script>
import CaroselPage from "./CaroselPage.vue";
import NavBar from "./NavBar.vue";
import FooterPage from "./FooterPage.vue";
import ChatBot from "./ChatBot.vue";
import StudentIcon from "@/assets/icons/User Ave.jpeg";
import ArrowButton from "./ArrowButton.vue";

export default {
  name: "HelloWorld",
  components: {
    CaroselPage,
    NavBar,
    FooterPage,
    ChatBot,
    ArrowButton,
  },
  data() {
    return {
      model: null,
      happyStudents: 0,
      qualifiedTeachers: 0,
      yearsInField: 9,
      branches: 8,
      showAwardPopup: false,
      // Pause state for each marquee
      paused: { awards: false, highlights: false, testimonials: false },
      awardPopupData: {
        src: "https://ik.imagekit.io/kp5tixhur/Awards/Linguaskill.jpeg",
        title: "Authorised for Cambridge Linguaskill",
        //subtitle: "Authorised for Cambridge Linguaskill by Cambridge English.",
        description: "Authorised Cambridge Linguaskill Provider & Cambridge English Exam Centre.",
        year: "2026",
        category: "Recognition",
        organization: "Cambridge English",
        // organizationLogo: "https://ik.imagekit.io/u3wbiya66/Logos/bc-logo.png?updatedAt=1757647128110"
      },

      // All content lives in this one list. The `type` decides which marquee it goes to:
      //   "Award" / "Recognition"            -> 1. Awards & Recognitions
      //   "Event" / "Milestone" / "Community" -> 2. Highlights
      // Newest first. Add `link` for a video or article (shown as "Watch here" in the popup).
      allItems: [
        {
          src: "https://ik.imagekit.io/kp5tixhur/BestWeb%202026/0-1.jpg",
          title: "BestWeb.LK 2026 Awards Ceremony",
          subtitle: "CCBE’s Educational Excellence | BestWeb.LK 2026",
          description: "Recognized as Sri Lanka’s Most Popular Education Website and a Bronze Winner for Best Education Website.",
          year: "Aug 2026",
          category: "Recognition",
          organization: "BestWeb.LK",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/0.1.jpg",
          title: "CCBE ONE - Grand Opening",
          subtitle: "Experience the Pulse of Cambrians !!",
          description: "The grand opening of CCBE One on 20th July 2026 marked the beginning of an exciting new journey for the CCBE family, reflecting our commitment to excellence, innovation and empowering future generations.",
          year: "Jul 2026",
          category: "Milestone",
          organization: "CCBE",
          type: "Milestone",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Cover%20Song/Cover3.jpeg",
          title: "♪ පැන මඩ කඩිති | Official Cover Song by CCBE Students",
          subtitle: "Teachers’ Day Special Gift from CCBE 2026",
          description: "ජීවිතයට දැනුම පමණක් නොව, නිවැරදි මඟ පෙන්වා දෙමින් ආදරණීය දුවා දරුවන්ගේ හෙට දවස ලස්සන කරන ආදරණීය ගුරුවරුන් වෙනුවෙන්...",
          year: "Oct 2026",
          category: "Cover song",
          organization: "CCBE Students",
          type: "Event",
          link: "https://youtu.be/XQeUIyJXFgc?si=yM6y7siukLDePVsk",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/7.jpeg",
          title: "Cambridge Awards 2026",
          subtitle: "Celebrating Outstanding Achievements of CCBE Students",
          description: "Nearly 1,000 students who completed Cambridge English Qualifications from Pre A1 Starters to C2 Proficiency were recognized and celebrated for their achievements.",
          year: "Jun 2026",
          category: "Student success",
          organization: "CCBE",
          type: "Event",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Cover%20Song/1000479548.jpg",
          title: "♪ දෙපිය නගලා... | Official Cover Song by CCBE Students",
          subtitle: "Celebrating the Father's Day 2026",
          description: "For the silent love of a father who makes many sacrifices but never shows it to his children, CCBE presents a song sung by our own children.",
          year: "Jun 2026",
          category: "Cover song",
          organization: "CCBE Students",
          type: "Event",
          link: "https://youtu.be/AC1pIXhzwcE?si=p8uRQGfczIaTPcz-",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Awards/Linguaskill.jpeg",
          title: "Authorised for Cambridge Linguaskill",
          subtitle: "Authorised for Cambridge Linguaskill by Cambridge English.",
          description: "Authorised Cambridge Linguaskill Provider & Cambridge English Exam Centre.",
          year: "2026",
          category: "Recognition",
          organization: "Cambridge English",
          type: "Recognition",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/LCME%20Test%20Center/2-edit.jpg",
          title: "LCME Approved Test Centre",
          subtitle: "Officially accepting CCBE as LCME Approved Test Centre.",
          description: "CCBE is officially accepted as an LCME Approved Test Centre.",
          year: "2026",
          category: "Recognition",
          organization: "LCME",
          type: "Recognition",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Awards/Trinity%20College-%20approval1.jpeg",
          title: "GESE Preparation Centre Approval",
          subtitle: "Authorized Preparation Centre",
          description: "Cambridge College of British English (CCBE) is now officially recognized as an Authorized Preparation Centre.",
          year: "2026",
          category: "Recognition",
          organization: "Trinity College London",
          type: "Recognition",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Awards/Certificate1.jpg",
          title: "Certificate - ISO 9001:2015",
          subtitle: "Quality Management System certification",
          description: "CCBE has been officially awarded the ISO 9001:2015 Quality Management System certification by Otabu Certification Pvt. Ltd.",
          year: "2026",
          category: "Certification",
          organization: "OTABU CERTIFICATION PVT.LTD.",
          type: "Recognition",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Awards/IMG_5899-copy5.jpg",
          title: "Highest Regional Contribution",
          subtitle: "Southern Province Recognition by the British Council for Cambridge English Registration Centres (2026)",
          description: "Recognized by the British Council for the highest regional contribution in Cambridge English registrations.",
          year: "2026",
          category: "Regional - 4th consecutive year",
          organization: "British Council",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Awards/IMG_5899-copy4.jpg",
          title: "Excellence Beyond Gold",
          subtitle: "British Council Platinum Category Recognition for Outstanding Performance (2026)",
          description: "Awarded by the British Council for outstanding performance and exclusivity as a Cambridge English registration centre.",
          year: "2026",
          category: "Platinum - 2nd consecutive year",
          organization: "British Council",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Cover%20Song/Cover%20Song.jpeg",
          title: "♪ අම්මේ, මං නුඹට ආදරෙයි... | Official Cover Song by CCBE Students",
          subtitle: "Celebrating the Mother's Day 2026",
          description: "For the never-ending, silent love of a mother, CCBE presents a song sung by our own children.",
          year: "May 2026",
          category: "Cover song",
          organization: "CCBE Students",
          type: "Event",
          link: "https://youtu.be/Cp0hjgMYsdI",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/3.jpeg",
          title: "Husma Fruit Plant Dansal 2026",
          subtitle: "Thank You for Being a Part of the Husma Project 2026",
          description: "CCBE & CCIT distributed 6,000 medicinal plants free of charge across our branches for the third consecutive year, promoting sustainability and a greener Sri Lanka.",
          year: "2026",
          category: "Community",
          organization: "CCBE & CCIT",
          type: "Community",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Galduwa%202026/WhatsApp%20Image%202026-04-20%20at%2011.57.24%20AM.jpeg",
          title: "Galdoowa Buddhist Monastery Program 2026",
          subtitle: "A Day of Meritorious Deeds & Unity",
          description: "On Madin Full Moon Poya Day, the staff and management of CCBE and CCIT organized our 2nd consecutive charity program at Kalyana Yogashramaya.",
          year: "Apr 2026",
          category: "Community",
          organization: "CCBE & CCIT",
          type: "Community",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/New%20Year/Aurudu%20Kumara%20-%20Kumariya.jpeg",
          title: "CCBE Digital Sigithi Awurudu Kumara & Kumariya 2026",
          subtitle: "Prize Giving Ceremony",
          description: "Prizes and scholarship vouchers for the next Cambridge Level course were presented to the little stars of the Sinhala & Tamil New Year competition.",
          year: "Apr 2026",
          category: "Event",
          organization: "CCBE",
          type: "Event",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Trinity%20College/GESE.jpeg",
          title: "Trinity College Sign Up",
          subtitle: "Opening Doors to Academic Excellence",
          description: "The Trinity College sign-up initiative gives students new opportunities to access world-class education pathways through trusted international programs.",
          year: "Apr 2026",
          category: "Milestone",
          organization: "Trinity College London",
          type: "Milestone",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/TopWeb/TopWeb%20-%20March.jpeg",
          title: "TopWeb - March 2026",
          subtitle: "Empowering Digital Innovation & Web Excellence",
          description: "Our website www.ccbe.lk was recognized with the TopWeb.lk Award for March 2026, highlighting our commitment to quality, innovation and digital excellence.",
          year: "Mar 2026",
          category: "Recognition",
          organization: "TopWeb.lk",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/IELTS%20Partner%20Forum%202026/ielts3.jpeg",
          title: "IELTS Partner Forum 2026",
          subtitle: "Strengthening Partnerships for Global Education",
          description: "Honored to take part in the IELTS Partner Forum 2026, an evening of partnership, dialogue and shared vision for the future.",
          year: "Mar 2026",
          category: "Event",
          organization: "IELTS",
          type: "Event",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/Cambridge%20English%20Awards%20Ceremony%202026/BC-South.jpeg",
          title: "British Council Awards Ceremony 2026",
          subtitle: "Celebrating Excellence in English Language Achievement",
          description: "CCBE is proud to receive the Southern Regional Award at the British Council Ceremony 2026, reflecting our excellence and strong presence in the region.",
          year: "Mar 2026",
          category: "Regional",
          organization: "British Council",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/post%203.jpeg",
          title: "International Women's Day 2026",
          subtitle: "International Women’s Day 2026 was celebrated at CCBE",
          description: "Celebrated at CCBE, honoring the strength and achievements of women and our commitment to empowering them through education and opportunity.",
          year: "Mar 2026",
          category: "Event",
          organization: "CCBE",
          type: "Event",
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/News&Events/NE6.jpeg",
          title: "Cambrians Day 2026",
          subtitle: "Celebrating Unity, Talent & the Spirit of Cambrians",
          description: "Staff from all branches came together to celebrate the true spirit of being a Cambrian through engaging activities that strengthened unity and teamwork.",
          year: "Jan 2026",
          category: "Event",
          organization: "CCBE",
          type: "Event",
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/Awards/AW1.jpeg",
          title: "CIPM HR Awards 2025",
          subtitle: "Certificate of Commendation at the CIPM HR Awards 2025",
          description: "Recognized by CIPM Sri Lanka, in collaboration with Mercer, for valuable contributions to human resource management at The Great HR Awards 2025.",
          year: "2025",
          category: "The Great HR Awards",
          organization: "CIPM Sri Lanka",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/Awards/Platinum.jpg?updatedAt=1757935994777",
          title: "Excellence Beyond Gold",
          subtitle: "British Council Platinum Category Recognition (2025)",
          description: "Awarded by the British Council for outstanding performance and exclusivity as a Cambridge English registration centre.",
          year: "2025",
          category: "Platinum",
          organization: "British Council",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/Highlights/2.jpg",
          title: "A Decade of Dedication",
          subtitle: "Ten years of redefining English education",
          description: "Marking ten years of excellence, our institute held a Pirith Chanting and Almsgiving ceremony with the blessings of the Maha Sangha.",
          year: "2025",
          category: "Milestone",
          organization: "CCBE",
          type: "Milestone",
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/Awards/Gold.jpg?updatedAt=1757647128110",
          title: "Excellence in Performance",
          subtitle: "Gold Category Recognition by the British Council (2024)",
          description: "Honoured by the British Council for exceptional achievements as a Cambridge English registration centre.",
          year: "2024",
          category: "Gold",
          organization: "British Council",
          type: "Award",
        },
        {
          src: "https://ik.imagekit.io/u3wbiya66/Awards/Star.jpg?updatedAt=1757937143732",
          title: "Emerging Star of the Year Award",
          subtitle: "Cambridge University Press & Assessment Recognition (2023)",
          description: "Recognized as an Emerging Star at the 2023 Annual Coordinators' Conference for outstanding growth in Cambridge English.",
          year: "2023",
          category: "Emerging",
          organization: "British Council",
          type: "Award",
        },
      ],

      // Student testimonials (shown in the "What Our Students Say" marquee)
      studentStories: [
        {
          text: "English became as natural to me as my mother tongue. Apart from the syllabus, they taught me many valuable life lessons and prepared me with the armor of English.",
          userName: "Thilina Chamod",
          userRole: "Key Intake",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Chamod.PNG?updatedAt=1751604750970",
          link: "https://www.youtube.com/watch?v=Xb9PO6GwpYE&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=1",
        },
        {
          text: "I was able to improve my language skills, including reading, writing, listening, and speaking. The practice exams helped us achieve good grades in the British Council exam.",
          userName: "Rishini Hansani",
          userRole: "IKEY002",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Rishini.PNG?updatedAt=1751604753387",
          link: "https://www.youtube.com/watch?v=QgsrB9n_EVQ&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=2",
        },
        {
          text: "Through the four-month course, we were able to improve the four essential language skills: reading, writing, listening, and speaking.",
          userName: "Hasanga Bingusara",
          userRole: "IKEY002",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Hasanga.PNG?updatedAt=1751604752950",
          link: "https://www.youtube.com/watch?v=X3URJtpSRNc&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=3",
        },
        {
          text: "The dedicated instructors, comprehensive study materials, and interactive learning environment helped me achieve my desired score. I highly recommend it to anyone looking to excel in the IELTS exam.",
          userName: "Ranmina Navoth",
          userRole: "IELTS",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Ranmina.PNG?updatedAt=1751604753181",
          link: "https://www.youtube.com/watch?v=5a-CoElEByk&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=4",
        },
        {
          text: "I prefer to recommend the IELTS Fast Track programme in Ambalangoda CCBE as the better place to boost the band for those who wish to sit the IELTS examination.",
          userName: "Prabhashini Chathurika",
          userRole: "IELTS",
          userAvatar: StudentIcon,
          link: "https://www.youtube.com/watch?v=16SXO8RDb4k&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=5",
        },
        {
          text: "During the course we were able to do a lot of activities in English and improve our four language skills: reading, writing, listening and speaking.",
          userName: "Kushani Umanda",
          userRole: "IKEY002",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Kushani.PNG?updatedAt=1751604753146",
          link: "https://www.youtube.com/watch?v=-nBqEGHpnQs&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=6",
        },
        {
          text: "I wanted to improve my speaking skills as I'm expecting to go abroad for my higher studies. At CCBE I was given the best guidance and we learn in a stress-free environment.",
          userName: "Jayani Bawathma",
          userRole: "IKF004",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Jayani.PNG?updatedAt=1751604753246",
          link: "https://www.youtube.com/watch?v=iN5WZINOmrk&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=7",
        },
        {
          text: "We could learn language skills through various academic activities, and being active in the classroom helped us improve our confidence in English.",
          userName: "Vinuji Mallawa Arachchi",
          userRole: "IPET002",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Vinuji.PNG?updatedAt=1751604753245",
          link: "https://www.youtube.com/watch?v=ZEyR-mUGTAs&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=8",
        },
        {
          text: "At the end of the course I faced the Cambridge assessment exams confidently, thanks to all the preparation sessions. I would really recommend CCBE to anyone, without hesitation.",
          userName: "Naduni Abeynayaka",
          userRole: "FCE Intake",
          userAvatar: "https://ik.imagekit.io/u3wbiya66/Testi/Naduni.PNG?updatedAt=1751604753158",
          link: "https://www.youtube.com/watch?v=Lsl_qzKhMjY&list=PLnra1_c-Y6TiQiBCk1clsy80PVAp9Z1q3&index=9",
        },
      ],

      // Embedded student story videos ("Watch Their Stories")
      videos: [
        { link: "https://www.youtube.com/embed/uSr4JjCtge4?si=64lVPGcTuj4s4C-K" },
        { link: "https://www.youtube.com/embed/V_riM5h2pOQ?si=LufQypwbQLuMPFF1" },
        { link: "https://www.youtube.com/embed/uTyP39sO-Q0?si=OvU_rVvdvIeGqNOV" },
      ],

      items: [
        {
          src: require("../assets/cards/11.jpg"),
          title: "Title",
          subtitle: "Master English with Confidence",
          description:
            "Empowering learners with world-class English language education for all ages.",
        },
        {
          src: require("../assets/cards/22.jpg"),
          subtitle: "Your Gateway to English Excellence",
          description:
            "Your partner in mastering English through expert guidance and innovative methods.",
        },
        {
          src: require("../assets/cards/33.jpg"),
          subtitle: "Transforming Lives Through Language",
          description:
            "Transforming language skills with personalized programs for academic and professional success.",
        },
        {
          src: require("../assets/cards/44.jpg"),
          subtitle: "Achieve Success with CCBE",
          description:
            "Unlock your potential in reading, writing, listening, and speaking at CCBE.",
        },
      ],
      testimonials: [
        {
          name: "Alice Johnson",
          message:
            "The courses at CCBE have greatly improved my confidence and skills in English. Highly recommend!",
          rating: 5,
          image: require("@/assets/cards/11.jpg"),
        },
        {
          name: "Michael Brown",
          message:
            "The teachers here are exceptional, and the learning environment is top-notch.",
          rating: 4,
          image: require("@/assets/cards/22.jpg"),
        },
        {
          name: "Sophia Lee",
          message:
            "I loved the personalized attention and innovative teaching methods at CCBE.",
          rating: 5,
          image: require("@/assets/cards/33.jpg"),
        },
      ],
      logo: require("@/assets/Logo.png"),
    };
  },
  computed: {
    // 1. Awards & Recognitions
    awardItems() {
      return this.allItems.filter((i) => i.type === "Award" || i.type === "Recognition");
    },
    // 2. Highlights
    highlightItems() {
      return this.allItems.filter((i) => i.type !== "Award" && i.type !== "Recognition");
    },
    // Testimonials marquee: list doubled for a seamless loop
    studentStoryMarquee() {
      return [...this.studentStories, ...this.studentStories];
    },
    testimonialDuration() {
      return Math.max(40, this.studentStories.length * 9);
    },
    // Both marquees share one template. Each list is doubled so the loop is seamless.
    marqueeSections() {
      const build = (list, seconds) => ({
        count: list.length,
        items: [...list, ...list],
        duration: Math.max(40, list.length * seconds),
      });
      return [
        {
          key: "awards",
          theme: "dark",
          titleMain: "Awards",
          titleAccent: "& Recognitions",
          subtitle: "Celebrating excellence and achievements in English education. Hover to pause, click a card for details.",
          reverse: false,
          cta: null,
          ...build(this.awardItems, 8),
        },
        {
          key: "highlights",
          theme: "light",
          titleMain: "Our",
          titleAccent: "Highlights",
          subtitle: "Celebrations, milestones and community moments from across the Cambrians family.",
          reverse: true,
          cta: { label: "View all news & events", href: "/news" },
          ...build(this.highlightItems, 8),
        },
      ];
    },
  },
  mounted() {
    // Show the award popup as soon as the page loads
    this.showAwardPopup = true;

    // Trigger the animations for numbers when the stats section comes into view
    const options = {
      root: null, // relative to the viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the element must be in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the counting animation when the section is in view
          this.animateCount("happyStudents", 10000, 2000);
          this.animateCount("qualifiedTeachers", 150, 1500);
          this.animateCount("yearsInField", 9, 1000); // Animate yearsInField
          this.animateCount("branches", 5, 800); // Animate branches
          observer.disconnect();
        }
      });
    }, options);

    // Start observing the "Why Choose Us" section
    observer.observe(this.$refs.statsSection);
  },
  methods: {
    closeAwardPopup() {
      this.showAwardPopup = false;
    },
    // Open the popup with the details of the clicked marquee card
    openItem(item) {
      this.awardPopupData = { ...item };
      this.showAwardPopup = true;
    },
    animateCount(property, target, duration) {
      const current = this[property];
      const step = (target - current) / (duration / 16); // Adjust step calculation based on target range
      const interval = setInterval(() => {
        if (this[property] < target) {
          this[property] = Math.min(this[property] + step, target);
          // Round the value to remove decimal points
          this[property] = Math.round(this[property]);
        } else {
          // Ensure the final value is set as an integer
          this[property] = Math.round(this[property]);
          clearInterval(interval);
        }
      }, 16); // 16ms for ~60 FPS
    },
  },
};
</script>

<style>
.title {
  text-align: center;
  font-size: 2 rem;
  font-weight: bold;
}

.highlight {
  color: #ff5f15;
  font-size: 2 rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #555;
  margin: 20px 0;
}

.professionals-grid {
  margin-top: 30px;
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

.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}

.horizontal-scroll::-webkit-scrollbar {
  display: none;
  /* For Chrome, Safari, and Opera */
}

.why-choose-us {
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.section-title {
  font-size: 2.5rem;
  color: #272643;
  /* font-family: "Arial", sans-serif; */
  margin-bottom: 20px;
}

.stats-row {
  margin-top: 20px;
}

.stat-item {
  padding: 20px;
}

.stat-value {
  font-size: 2rem;
  color: #120150;
  font-weight: bold;
  transition: all 0.3s ease-out;
}

.stat-label {
  font-size: 1.2rem;
  color: #6c757d;
}

.carousel-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
}

.carousel-image {
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
  border-radius: 10px;
}

.why-choose-us {
  padding: 50px 0;
  background-color: #111111;
}

.title {
  /* font-family: "Roboto", sans-serif; */
  color: #fbb700;
  text-transform: uppercase;
  font-weight: bold;
}

.stats-row .v-col {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.stats-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.stats-card-img {
  object-fit: cover;
  border-bottom: 3px solid #fbb700;
}

.card-content {
  padding: 20px;
}

.stat-value {
  font-size: 28px;
  color: #fbb700;
  font-weight: bold;
}

.stat-label {
  font-size: 18px;
  color: rgb(20, 10, 10);
  /* font-family: "Roboto", sans-serif; */
}

.v-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.stats-row .v-col:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* ===== "OUR STRENGTH" section =====
   These replace the old inline style="..." attributes so the page works
   under a strict Content Security Policy (no 'unsafe-inline' for styles).
   The extra class gives them higher specificity than the base rules above,
   so they win exactly like the inline styles used to. */
.why-choose-us.strength-section {
  background-color: white;
  padding: 50px 0;
}

.title.strength-title {
  color: #fbb700;
  font-size: 36px;
  font-weight: bold;
}

.stat-label.strength-label {
  color: #111111;
  font-weight: bold;
  font-size: 22px;
}

.stat-label.strength-label.strength-label-sm {
  font-size: 20px;
}

.stat-value.strength-value {
  font-size: 28px;
  color: #ff5f15;
  font-weight: bold;
}

/* Award Popup Styles */
.award-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: award-fade-in 0.25s ease;
}

.award-popup-card {
  position: relative;
  background: #fff;
  border-radius: 12px;
  max-width: 420px;
  width: 90%;
  max-height: 100vh;
  overflow-y: auto;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  animation: award-pop-in 0.3s ease;
}

.award-popup-close {
  position: absolute;
  top: 10px;
  right: 14px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  z-index: 2;
}

.award-popup-close:hover {
  background: rgba(0, 0, 0, 0.75);
}

.award-popup-image {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: block;
}

.award-popup-content {
  padding: 20px 22px 24px;
  text-align: center;
}

.award-popup-title {
  font-size: 20px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 8px;
}

.award-popup-subtitle {
  font-size: 15px;
  color: #333;
  margin-bottom: 10px;
}

.award-popup-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 14px;
}

.award-popup-meta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.award-popup-badge {
  background: #fbb700;
  color: #111111;
  font-weight: bold;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 20px;
}

.award-popup-org {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.award-popup-link {
  display: inline-block;
  margin: 4px 0 10px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background: #ff5f15;
  border-radius: 20px;
  text-decoration: none;
}

.award-popup-link:hover {
  background: #e04f0b;
}

.award-popup-org-logo {
  max-width: 120px;
  margin-top: 8px;
}

@keyframes award-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes award-pop-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

<style scoped>
/* ===== TWO MARQUEES (scoped, classes prefixed hm-) =====
   Theme: yellow #fbb700, orange #ff5f15, black #111111, white #ffffff
   .is-dark  = Awards & Recognitions (black section, white cards)
   .is-light = Highlights (white section, black cards) */

.hm-section {
  position: relative;
  overflow: hidden;
  padding: 80px 0 72px;
  --accent: #fbb700;
}

/* ---- Dark theme: Awards & Recognitions ---- */
.hm-section.is-dark {
  background: linear-gradient(180deg, #111111 0%, #1d1d1d 100%);
  --title: #ffffff;
  --title-accent: #fbb700;
  --sub: rgba(255, 255, 255, 0.78);
  --toggle-text: #ffffff;
  --toggle-line: rgba(255, 255, 255, 0.45);
  --toggle-bg: rgba(255, 255, 255, 0.08);
  --toggle-icon: #fbb700;
  --card-bg: #ffffff;
  --card-title: #111111;
  --card-desc: #555555;
  --card-line: #f0e3b8;
  --card-org: #b37f00;
  --card-more: #ff5f15;
  --card-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
  --glow-a: rgba(251, 183, 0, 0.22);
  --glow-b: rgba(255, 95, 21, 0.22);
}

/* ---- Light theme: Highlights ---- */
.hm-section.is-light {
  background: linear-gradient(180deg, #ffffff 0%, #fff6d6 100%);
  --title: #111111;
  --title-accent: #ff5f15;
  --sub: #555555;
  --toggle-text: #111111;
  --toggle-line: rgba(17, 17, 17, 0.5);
  --toggle-bg: rgba(17, 17, 17, 0.04);
  --toggle-icon: #ff5f15;
  --card-bg: #151515;
  --card-title: #ffffff;
  --card-desc: #cfcfcf;
  --card-line: #333333;
  --card-org: #fbb700;
  --card-more: #ff8a4d;
  --card-shadow: 0 16px 34px rgba(17, 17, 17, 0.28);
  --glow-a: rgba(251, 183, 0, 0.3);
  --glow-b: rgba(255, 95, 21, 0.18);
}

.hm-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.hm-glow-a {
  top: -120px;
  left: -80px;
  width: 340px;
  height: 340px;
  background: var(--glow-a);
}
.hm-glow-b {
  right: -100px;
  bottom: -120px;
  width: 360px;
  height: 360px;
  background: var(--glow-b);
}

.hm-head {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto 36px;
  padding: 0 max(20px, 4vw);
  box-sizing: border-box;
}
.hm-title {
  margin: 0 0 10px;
  font-size: clamp(1.7rem, 3.2vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--title);
  text-align: left;
}
.hm-title-accent {
  color: var(--title-accent);
}
.hm-sub {
  margin: 0;
  max-width: 56ch;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--sub);
}

.hm-toggle {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  padding: 10px 22px;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--toggle-text);
  background: var(--toggle-bg);
  border: 1.5px solid var(--toggle-line);
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.25s ease, background-color 0.25s ease;
}
.hm-toggle:hover {
  border-color: var(--toggle-icon);
}
.hm-toggle:focus-visible,
.hm-card:focus-visible,
.hm-btn:focus-visible {
  outline: 3px solid #ff5f15;
  outline-offset: 3px;
}
.hm-toggle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 14px;
  height: 14px;
}
.hm-bar {
  display: block;
  width: 4px;
  height: 14px;
  background: var(--toggle-icon);
  border-radius: 1px;
}
.hm-play {
  display: block;
  width: 0;
  height: 0;
  margin-left: 3px;
  border-left: 12px solid var(--toggle-icon);
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
}

/* The moving strip */
.hm-marquee {
  position: relative;
  overflow: hidden;
  padding: 18px 0 30px;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}
.hm-track {
  display: flex;
  align-items: stretch;
  width: max-content;
  will-change: transform;
  animation: hm-scroll-left 100s linear infinite;
}
.hm-track.is-reverse {
  animation-name: hm-scroll-right;
}
.hm-marquee:hover .hm-track,
.hm-marquee:focus-within .hm-track,
.hm-marquee.is-paused .hm-track {
  animation-play-state: paused;
}
@keyframes hm-scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes hm-scroll-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

/* Cards */
.hm-card {
  display: flex;
  flex-direction: column;
  flex: 0 0 clamp(250px, 24vw, 310px);
  margin: 0 20px 0 0;
  padding: 0;
  overflow: hidden;
  text-align: left;
  font: inherit;
  background: var(--card-bg);
  border: 0;
  border-radius: 20px;
  box-shadow: var(--card-shadow);
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.hm-card:hover,
.hm-card:focus-visible {
  transform: translateY(-8px);
}
.hm-card-photo {
  position: relative;
  display: block;
  height: 200px;
  overflow: hidden;
  background: #2a2a2a;
}
.hm-card-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}
.hm-card:hover .hm-card-photo img,
.hm-card:focus-visible .hm-card-photo img {
  transform: scale(1.08);
}
.hm-card-type {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 5px 12px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #111111;
  background: #fbb700;
  border-radius: 999px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
}
.hm-card-type.is-recognition,
.hm-card-type.is-milestone {
  color: #ffffff;
  background: #ff5f15;
}
.hm-card-type.is-event {
  color: #111111;
  background: #ffffff;
}
.hm-card-year {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 5px 12px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #ffffff;
  background: rgba(17, 17, 17, 0.72);
  border-radius: 999px;
}
.hm-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 18px 18px 16px;
}
.hm-card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--card-title);
}
.hm-card-desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--card-desc);
}
.hm-card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid var(--card-line);
}
.hm-card-org {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--card-org);
}
.hm-card-more {
  flex: 0 0 auto;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--card-more);
}
.hm-card:hover .hm-card-more {
  text-decoration: underline;
}

/* ---- Testimonial quote cards (inside the same marquee strip) ---- */
.hm-quote {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 0 0 clamp(280px, 28vw, 360px);
  margin: 0 20px 0 0;
  padding: 30px 26px 24px;
  background: var(--card-bg);
  border-radius: 20px;
  border-top: 5px solid #fbb700;
  box-shadow: var(--card-shadow);
  transition: transform 0.4s ease;
}
.hm-quote:hover {
  transform: translateY(-8px);
}
.hm-quote-mark {
  display: block;
  height: 38px;
  margin-bottom: 6px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 5rem;
  line-height: 0.9;
  color: #ff5f15;
}
.hm-quote-text {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
  margin: 0 0 20px;
  font-size: 0.98rem;
  line-height: 1.65;
  font-style: italic;
  color: var(--card-desc);
}
.hm-quote-person {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 16px;
  border-top: 1px solid var(--card-line);
}
.hm-quote-avatar {
  flex: 0 0 auto;
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fbb700;
  background: #f1f1f1;
}
.hm-quote-who {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 4px;
}
.hm-quote-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--card-title);
}
.hm-quote-role {
  align-self: flex-start;
  padding: 2px 10px;
  font-size: 0.74rem;
  font-weight: 700;
  color: #111111;
  background: #fbb700;
  border-radius: 999px;
}
.hm-quote-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
  padding: 11px 22px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #111111;
  text-decoration: none;
  background: #fbb700;
  border-radius: 999px;
  transition: background-color 0.25s ease, color 0.25s ease;
}
.hm-quote-btn:hover {
  color: #ffffff;
  background: #111111;
}
.hm-quote-btn:focus-visible {
  outline: 3px solid #ff5f15;
  outline-offset: 3px;
}

/* ---- Watch their stories (embedded videos) ---- */
.hm-videos {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 max(20px, 4vw);
  box-sizing: border-box;
}
.hm-video {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #151515;
  border: 3px solid #151515;
  border-radius: 20px;
  box-shadow: var(--card-shadow);
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.hm-video:hover {
  transform: translateY(-8px);
  border-color: #ff5f15;
}
.hm-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.hm-actions {
  position: relative;
  margin-top: 8px;
  text-align: center;
}
.hm-btn {
  display: inline-block;
  padding: 13px 30px;
  font-size: 0.95rem;
  font-weight: 700;
  color: #111111;
  text-decoration: none;
  background: #fbb700;
  border-radius: 999px;
  box-shadow: 0 8px 20px rgba(251, 183, 0, 0.4);
  transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
}
.hm-btn:hover {
  color: #ffffff;
  background: #111111;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hm-section {
    padding: 56px 0 52px;
  }
  .hm-head {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  .hm-card {
    margin-right: 14px;
    border-radius: 16px;
  }
  .hm-card-photo {
    height: 170px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hm-track {
    animation: none;
  }
  .hm-marquee {
    overflow-x: auto;
  }
  .hm-card,
  .hm-card-photo img,
  .hm-btn {
    transition: none;
  }
  .hm-card:hover,
  .hm-card:hover .hm-card-photo img,
  .hm-btn:hover {
    transform: none;
  }
}
</style>
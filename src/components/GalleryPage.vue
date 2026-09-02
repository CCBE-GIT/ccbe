<template>
  <div>
    <NavBar></NavBar>

    <div class="gallery-page">

      <div class="bg-blob bg-blob--1"></div>
      <div class="bg-blob bg-blob--2"></div>

      <!-- ── Hero Header ─────────────────────────── -->
      <div class="gallery-hero" data-aos="fade-up" data-aos-duration="1000">
        <div class="hero-eyebrow">
          <span class="eyebrow-line"></span>
          <v-icon size="18" color="#ff6b35">{{ mainSection === 'gallery' ? 'mdi-camera' : 'mdi-youtube' }}</v-icon>
          <span class="eyebrow-text">{{ mainSection === 'gallery' ? 'Visual Stories' : 'Video Highlights' }}</span>
          <span class="eyebrow-line"></span>
        </div>
        <h1 class="hero-title">
          <template v-if="mainSection === 'gallery'">OUR <span class="hero-highlight">GALLERY</span></template>
          <template v-else>CCBE <span class="hero-highlight">BUZZCAST</span></template>
        </h1>
        <div class="hero-rule"></div>
        <p class="hero-subtitle">
          {{ mainSection === 'gallery'
            ? 'Moments that define us from classrooms to celebrations, every picture tells our story.'
            : 'Catch every announcement, event recap, and behind-the-scenes moment on video.' }}
        </p>
      </div>

      <!-- ── Main Section Switcher ───────────────── -->
      <div class="section-tabs" data-aos="fade-up" data-aos-duration="800" data-aos-delay="80">
        <button
          class="section-tab"
          :class="{ 'section-tab--active': mainSection === 'gallery' }"
          @click="setMainSection('gallery')"
        >
          <span class="section-tab-icon">
            <v-icon size="20" :color="mainSection === 'gallery' ? '#ffffff' : '#ff6b35'">mdi-image-multiple</v-icon>
          </span>
          <span class="section-tab-text">
            <span class="section-tab-title">Gallery</span>
            <span class="section-tab-sub">Photos & moments</span>
          </span>
        </button>

        <button
          class="section-tab"
          :class="{ 'section-tab--active': mainSection === 'buzzcast' }"
          @click="setMainSection('buzzcast')"
        >
          <span class="section-tab-icon">
            <v-icon size="20" :color="mainSection === 'buzzcast' ? '#ffffff' : '#ff6b35'">mdi-youtube</v-icon>
          </span>
          <span class="section-tab-text">
            <span class="section-tab-title">BuzzCast</span>
            <span class="section-tab-sub">Watch the videos</span>
          </span>
        </button>
      </div>

      <!-- ══════════════════════ GALLERY SECTION ══════════════════════ -->
      <template v-if="mainSection === 'gallery'">

        <!-- Filter Tabs -->
        <div class="filter-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <button
            v-for="cat in categories"
            :key="cat.key"
            class="filter-btn"
            :class="{ 'filter-btn--active': activeCategory === cat.key }"
            @click="setCategory(cat.key)"
          >
            <v-icon size="16" class="filter-icon">{{ cat.icon }}</v-icon>
            {{ cat.label }}
            <span class="filter-count">{{ getCategoryCount(cat.key) }}</span>
          </button>
        </div>

        <!-- Gallery Groups -->
        <div class="gallery-container">

          <div
            v-for="(group, gIndex) in filteredGroups"
            :key="group.groupKey"
            class="event-group"
            data-aos="fade-up"
            :data-aos-delay="gIndex * 60"
            data-aos-duration="700"
          >
            <!-- Group Header -->
            <div class="group-header">
              <div class="group-header-left">
                <span class="group-icon-wrap">
                  <v-icon size="16" color="#ff6b35">{{ group.icon }}</v-icon>
                </span>
                <div>
                  <h2 class="group-title">{{ group.groupLabel }}</h2>
                  <span class="group-meta">
                    {{ group.year }} &nbsp;·&nbsp;
                    {{ group.items.length }} photo{{ group.items.length > 1 ? 's' : '' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Group Grid — shows max 3 images -->
            <div class="group-grid" :class="'group-grid--' + Math.min(group.items.length, 3)">

              <div
                v-for="item in group.items.slice(0, 2)"
                :key="item.id"
                class="gallery-card"
                @click="openLightbox(item, group.items)"
              >
                <img :src="item.src" :alt="item.title" class="gallery-img" loading="lazy" />
                <div class="gallery-overlay">
                  <div class="overlay-inner">
                    <h3 class="overlay-title">{{ item.title }}</h3>
                    <div class="overlay-icon-wrap">
                      <v-icon color="white" size="18">mdi-magnify-plus-outline</v-icon>
                    </div>
                  </div>
                </div>
              </div>

              <template v-if="group.items.length >= 3">
                <div
                  v-if="group.items.length === 3"
                  class="gallery-card"
                  @click="openLightbox(group.items[2], group.items)"
                >
                  <img :src="group.items[2].src" :alt="group.items[2].title" class="gallery-img" loading="lazy" />
                  <div class="gallery-overlay">
                    <div class="overlay-inner">
                      <h3 class="overlay-title">{{ group.items[2].title }}</h3>
                      <div class="overlay-icon-wrap">
                        <v-icon color="white" size="18">mdi-magnify-plus-outline</v-icon>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-else
                  class="gallery-card gallery-card--more"
                >
                  <img :src="group.items[2].src" :alt="group.items[2].title" class="gallery-img" loading="lazy" />
                  <div class="more-overlay">
                    <div class="more-overlay-inner">
                      <span class="more-count">+{{ group.items.length - 2 }}</span>
                      <span class="more-label">more photos</span>
                    </div>
                  </div>
                </div>
              </template>

            </div>
          </div>

          <!-- Empty State -->
          <div v-if="filteredGroups.length === 0" class="empty-state">
            <v-icon size="64" color="#e0e0e0">mdi-image-off-outline</v-icon>
            <p>No images in this category yet.</p>
          </div>
        </div>
      </template>

      <!-- ══════════════════════ BUZZCAST SECTION ═════════════════════ -->
      <template v-else>
        <div class="buzzcast-container">

          <div
            v-if="buzzcastVideos.length"
            class="buzzcast-grid"
          >
            <div
              v-for="(video, vIndex) in buzzcastVideos"
              :key="video.id"
              class="video-card"
              data-aos="fade-up"
              :data-aos-delay="vIndex * 60"
              data-aos-duration="700"
              @click="openVideoModal(video)"
            >
              <div class="video-thumb-wrap">
                <img
                  :src="video.thumbnail || ('https://img.youtube.com/vi/' + video.youtubeId + '/hqdefault.jpg')"
                  :alt="video.title"
                  class="video-thumb"
                  loading="lazy"
                />
                <div class="video-play-overlay">
                  <div class="video-play-btn">
                    <v-icon color="white" size="28">mdi-play</v-icon>
                  </div>
                </div>
                <span v-if="video.badge" class="video-badge">{{ video.badge }}</span>
              </div>
              <div class="video-card-info">
                <h3 class="video-card-title">{{ video.title }}</h3>
                <span v-if="video.date" class="video-card-date">{{ video.date }}</span>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="empty-state">
            <v-icon size="64" color="#e0e0e0">mdi-youtube</v-icon>
            <p>No videos published yet. Check back soon!</p>
          </div>
        </div>
      </template>

      <!-- ── Video Modal (BuzzCast) ──────────────── -->
      <transition name="lightbox-fade">
        <div
          v-if="videoModal"
          class="lightbox-backdrop"
          @click.self="closeVideoModal"
        >
          <div class="video-modal">
            <button class="lightbox-close" @click="closeVideoModal" aria-label="Close video">
              <v-icon color="white" size="28">mdi-close</v-icon>
            </button>
            <div class="video-modal-frame-wrap">
              <iframe
                :src="'https://www.youtube.com/embed/' + videoModal.youtubeId + '?autoplay=1&rel=0'"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="video-modal-iframe"
              ></iframe>
            </div>
            <div class="lightbox-caption">
              <span class="lightbox-cat">BuzzCast</span>
              <h3 class="lightbox-title">{{ videoModal.title }}</h3>
              <span v-if="videoModal.date" class="lightbox-year">{{ videoModal.date }}</span>
            </div>
          </div>
        </div>
      </transition>

      <!-- ── Group All-Photos Modal ──────────────── -->
      <transition name="modal-fade">
        <div
          v-if="groupModal"
          class="modal-backdrop"
          @click.self="closeGroupModal"
        >
          <div class="modal-panel">
            <div class="modal-header">
              <div class="modal-header-left">
                <span class="modal-icon-wrap">
                  <v-icon size="16" color="#ff6b35">{{ groupModal.icon }}</v-icon>
                </span>
                <div>
                  <h2 class="modal-title">{{ groupModal.groupLabel }}</h2>
                  <span class="modal-meta">{{ groupModal.year }} &nbsp;·&nbsp; {{ groupModal.items.length }} photos</span>
                </div>
              </div>
              <button class="modal-close" @click="closeGroupModal" aria-label="Close">
                <v-icon color="#2c3e50" size="22">mdi-close</v-icon>
              </button>
            </div>

            <div class="modal-grid">
              <div
                v-for="(item, idx) in groupModal.items"
                :key="item.id"
                class="modal-card"
                @click="openLightboxFromModal(item, groupModal.items)"
              >
                <img :src="item.src" :alt="item.title" class="modal-img" loading="lazy" />
                <div class="modal-card-overlay">
                  <div class="modal-card-inner">
                    <span class="modal-photo-num">{{ idx + 1 }}</span>
                    <h4 class="modal-card-title">{{ item.title }}</h4>
                    <v-icon color="white" size="16">mdi-magnify-plus-outline</v-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- ── Lightbox ────────────────────────────── -->
      <transition name="lightbox-fade">
        <div
          v-if="lightboxItem"
          class="lightbox-backdrop"
          @click.self="closeLightbox"
        >
          <div class="lightbox-modal">
            <button class="lightbox-close" @click="closeLightbox" aria-label="Close lightbox">
              <v-icon color="white" size="28">mdi-close</v-icon>
            </button>
            <button class="lightbox-nav lightbox-nav--prev" @click="lightboxPrev" aria-label="Previous image">
              <v-icon color="white" size="28">mdi-chevron-left</v-icon>
            </button>
            <div class="lightbox-image-wrap">
              <transition name="lb-slide" mode="out-in">
                <img
                  :key="lightboxItem.id"
                  :src="lightboxItem.src"
                  :alt="lightboxItem.title"
                  class="lightbox-image"
                />
              </transition>
            </div>
            <button class="lightbox-nav lightbox-nav--next" @click="lightboxNext" aria-label="Next image">
              <v-icon color="white" size="28">mdi-chevron-right</v-icon>
            </button>
            <div class="lightbox-caption">
              <span class="lightbox-cat">{{ lightboxItem.category }}</span>
              <h3 class="lightbox-title">{{ lightboxItem.title }}</h3>
              <span class="lightbox-year">{{ lightboxItem.year }}</span>
            </div>
            <div class="lightbox-counter">
              {{ lightboxIndex + 1 }} / {{ lightboxSet.length }}
            </div>
          </div>
        </div>
      </transition>

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
          <a href="/corevalues" class="qnl">Core Values</a>
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
  name: 'GalleryPage',
  components: { NavBar, FooterPage, ChatBot, ArrowButton },

  data() {
    return {
      mainSection: 'gallery', // 'gallery' | 'buzzcast'

      activeCategory: 'all',
      lightboxItem: null,
      lightboxIndex: 0,
      lightboxSet: [],
      groupModal: null,
      videoModal: null,

      categories: [
        { key: 'all', label: 'All', icon: 'mdi-view-grid' },
      ],

      // ── BuzzCast videos ──────────────────────────
      // Add your YouTube links here. `youtubeId` is just the ID portion
      // of the URL, e.g. for https://youtu.be/dQw4w9WgXcQ the ID is dQw4w9WgXcQ
      buzzcastVideos: [
      { id: 4, 
          youtubeId: 'Z84m-SgNOuQ?si=iOEF3DyBx_mhMUzD', 
          title: 'What Happened at CCBE in July 2026 ?', 
          date: '2026', 
          badge: 'New',
          thumbnail: 'https://ik.imagekit.io/kp5tixhur/BUZZCAST/BUZZCAST%20-%20July.jpeg'
        },
        { id: 3, 
          youtubeId: 'zkzzaA67Rns?si=6dRFofrupR-Epekj', 
          title: 'What Happened at CCBE in June 2026 ?', 
          date: '2026', 
          //badge: 'New',
          thumbnail: 'https://ik.imagekit.io/kp5tixhur/BUZZCAST/BUZZCAST%20-%20June.jpeg'
        },
        { id: 2, 
          youtubeId: 'lrEOsj3hMgI?si=qZ6M3wxr7sNUwQMA', 
          title: 'What Happened at CCBE in May 2026 ?', 
          date: '2026', 
          //badge: 'New',
          thumbnail: 'https://ik.imagekit.io/kp5tixhur/BUZZCAST/BUZZCAST%20-%20May.jpeg'
        },
        { id: 1, 
          youtubeId: 'oBKw8Vgznzg?si=sJs1vBb3GlvEq272', 
          title: 'What Happened at CCBE in April 2026 ?', 
          date: '2026', 
          //badge: 'New',
          thumbnail: 'https://ik.imagekit.io/kp5tixhur/BUZZCAST/BUZZCAST%20-%20April.jpeg'
        },
        // { id: 1, youtubeId: 'dQw4w9WgXcQ', title: 'CCBE ONE - Grand Opening Highlights', date: '2026', badge: 'New' },
      ],

      groups: [
        {
          groupKey: 'seththabhiwandana-2026',
          groupLabel: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: 'Aug 2026',
          icon: 'mdi-flower-outline',
          items: [
            { id: 5001, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/0.jpeg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5002, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/1.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5003, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/2.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5004, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/3.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5005, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/4.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5006, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/5.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5007, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/6.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5008, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/7.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5009, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/8.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5010, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/9.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5011, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/11.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5012, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/12.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },
            { id: 5013, src: 'https://ik.imagekit.io/kp5tixhur/Seththabiwandana2026/13.jpg', title: "CCBE සෙත්තාභිවන්දනා 2026 | ජයග්‍රහණයට ආශිර්වාදයක්", category: 'Events', year: 'Aug 2026' },

          ]
        },
        {
          groupKey: 'BestWeb-2026',
          groupLabel: "BestWeb.LK 2026 Awards Ceremony",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: 'Aug 2026',
          icon: 'mdi-trophy-award',
          items: [
            { id: 4001, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/7.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4002, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/3.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4003, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/1.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4004, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/5.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4005, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/4.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4006, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/8.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4007, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/10.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4008, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/9.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4009, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/6.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
            { id: 4010, src: 'https://ik.imagekit.io/kp5tixhur/BestWeb%202026/0-1.jpg', title: "BestWeb.LK 2026 Awards Ceremony", category: 'Events', year: 'Aug 2026' },
          ]
        },
        {
          groupKey: 'ccbe-one',
          groupLabel: "CCBE ONE - Grand Opening",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-storefront-outline',
          items: [
            { id: 3001, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/0.1.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3002, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/4.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3003, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/5.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3004, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/6.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3005, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/7.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3006, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/2.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3007, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/9.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3008, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/12.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3009, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/17.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3010, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/13.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3011, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/11.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3012, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/16.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3013, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/8.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3014, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/10.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3015, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/18.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3016, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/19.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3017, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/20.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },
            { id: 3018, src: 'https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/21.jpg', title: "CCBE ONE - Grand Opening", category: 'Events', year: '2026' },

          ]
        },
        {
          groupKey: 'husma-dansal-2026',
          groupLabel: "Husma Fruit Plant Dansal 2026",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-sprout',
          items: [
            { id: 2001, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/10.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2002, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/4.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2003, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/5.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2004, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/6.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2005, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/7.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2006, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/8.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2007, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/9.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2008, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/11.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2009, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/12.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2010, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/13.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2011, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/14.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2012, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/15.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
            { id: 2013, src: 'https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/3.jpeg', title: "Husma Fruit Plant Dansal 2026", category: 'Events', year: '2026' },
          ]
        },
        {
          groupKey: 'cambridge-awards-2026',
          groupLabel: "Cambridge Awards 2026",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-trophy-award',
          items: [
            { id: 1001, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/2.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1002, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/7.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1003, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/34.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1004, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/37.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1005, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/13.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1006, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/14.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1007, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/29.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1008, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/12.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1009, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/11.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1010, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/30.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1011, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/32.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1012, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/43.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1013, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/42.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1014, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/40.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1015, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/31.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1016, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/25.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1017, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/38.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1018, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/39.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1019, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/28.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1020, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/4.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1021, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/27.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
            { id: 1022, src: 'https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/44.jpeg', title: "Cambridge Awards 2026", category: 'Events', year: '2026' },
          ]
        },
        {
          groupKey: 'matugama-opening-2026',
          groupLabel: "CCBE Matugama Branch Grand Opening",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-office-building',
          items: [
            { id: 901, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s32.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 902, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s4.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 903, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s6.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 904, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s5.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 905, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/2.jpg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 906, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s8.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 907, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s12.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 908, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s13.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 909, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s14.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 910, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s9.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 911, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s30.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 912, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s35.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 913, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s33.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 914, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s36.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 915, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s23.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 916, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s38.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 917, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s26.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 918, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s24.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 919, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s22.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 920, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s29.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 921, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s19.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 922, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s25.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 923, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s20.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
            { id: 924, src: 'https://ik.imagekit.io/kp5tixhur/Matugama%20Opening/s31.jpeg', title: "CCBE Matugama Branch Grand Opening", category: 'Events', year: '2026' },
          ]
        },
        {
          groupKey: 'linguaskill-day-2026',
          groupLabel: "Authorised for Cambridge Linguaskill",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-check-decagram',
          items: [
            { id: 801, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill14.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 802, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill12.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 803, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill11.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 804, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill7.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 805, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill17.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 806, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill13.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 807, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill5.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 808, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill2.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 809, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill19.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 810, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill8.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 811, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill10.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 812, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill9.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 813, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill4.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 814, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill6.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 815, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill1.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 816, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill3.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 817, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill15.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 818, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill18.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 819, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill16.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
            { id: 820, src: 'https://ik.imagekit.io/kp5tixhur/Linguaskill%20Event/Linguaskill20.jpeg', title: "Authorised for Cambridge Linguaskill", category: 'Events', year: '2026' },
          ]
        },
        {
          groupKey: 'womens-day-2026',
          groupLabel: "INTERNATIONAL WOMEN'S DAY 2026",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-flower',
          items: [
            { id: 601, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_2489.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 602, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_4703.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 603, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1395.JPG', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 604, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1400.JPG', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 605, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1402.JPG', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 606, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_4790.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 607, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_4778.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 608, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1478.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 609, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1488.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 610, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1436.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 611, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1425.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 612, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_1428.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 612, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_4750.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 613, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_3433.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
            { id: 614, src: 'https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/IMG_4807.jpg', title: "INTERNATIONAL WOMEN'S DAY 2026", category: 'Events', year: '2026' },
          ]
        },
        {
          groupKey: 'galdoowa-day-2026',
          groupLabel: "Galdoowa Buddhist Monastery Program 2026",
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-meditation',
          items: [
            { id: 701, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja04.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 702, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja10.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 703, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja07.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 704, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja03.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 705, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja09.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 706, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja08.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 707, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja02.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 708, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja05.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 709, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja01.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
            { id: 710, src: 'https://ik.imagekit.io/kp5tixhur/Galduwa%202026/podipuja06.jpeg', title: "Galdoowa Buddhist Monastery Program 2026", category: 'Events', year: '2026' },
          ]
        },
        {
          groupKey: 'cambrians-day-2026',
          groupLabel: 'Cambrians Day 2026',
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2026',
          icon: 'mdi-party-popper',
          items: [
            { id: 101, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9732.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 102, src: 'https://ik.imagekit.io/u3wbiya66/News&Events/NE6.jpeg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 103, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9882.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 104, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9410.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 105, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9429.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 106, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0003.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 107, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410643.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 108, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D419664.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 109, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410494.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 110, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0301.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 111, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410017.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 112, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410292.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 113, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0047.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 114, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0859.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 115, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0904.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 116, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410295.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 117, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9853.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 118, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR0155.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 119, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D411555.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 120, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410469.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 121, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9910.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 122, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D410911.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 123, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D419741.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 124, src: 'https://ik.imagekit.io/kp5tixhur/gallery/5D419672.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },
            { id: 125, src: 'https://ik.imagekit.io/kp5tixhur/gallery/CONR9412.jpg', title: 'Cambrians Day 2026', category: 'Events', year: '2026' },

          ]
        },
        {
          groupKey: 'staff-wellness-2025',
          groupLabel: 'Staff Wellness & Medical Screening Program 2025',
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2025',
          icon: 'mdi-heart-pulse',
          items: [
            { id: 201, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/8.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 202, src: 'https://ik.imagekit.io/u3wbiya66/News&Events/NE4.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 203, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/5.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 204, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/10.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 205, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/3.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 206, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/4.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 207, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/7.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 208, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/9.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 209, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/WhatsApp%20Image%202026-02-23%20at%202.38.15%20PM.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 210, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/2.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 211, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/6.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },
            { id: 212, src: 'https://ik.imagekit.io/kp5tixhur/Staff%20Wellness/WhatsApp%20Image%202026-02-23%20at%203.03.59%20PM.jpeg', title: 'Staff Wellness Program', category: 'Events', year: '2025' },

        ]
        },
        {
          groupKey: 'decade-dedication-2025',
          groupLabel: 'A Decade of Dedication',
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2025',
          icon: 'mdi-medal',
          items: [
            { id: 301, src: 'https://ik.imagekit.io/u3wbiya66/Highlights/2.jpg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },
            { id: 302, src: 'https://ik.imagekit.io/kp5tixhur/Dedication/4.jpeg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },
            { id: 303, src: 'https://ik.imagekit.io/kp5tixhur/Dedication/WhatsApp%20Image%202026-02-23%20at%203.25.57%20PM.jpeg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },
            { id: 304, src: 'https://ik.imagekit.io/kp5tixhur/Dedication/6.jpeg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },
            { id: 305, src: 'https://ik.imagekit.io/kp5tixhur/Dedication/3.jpeg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },
            { id: 306, src: 'https://ik.imagekit.io/kp5tixhur/Dedication/2.jpeg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },
            { id: 307, src: 'https://ik.imagekit.io/kp5tixhur/Dedication/5.jpeg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },
            { id: 308, src: 'https://ik.imagekit.io/kp5tixhur/Dedication/7.jpeg', title: 'Pirith Chanting & Almsgiving', category: 'Events', year: '2025' },

          ]
        },
        // {
        //   groupKey: 'husma-dansal-2025',
        //   groupLabel: 'Husma Fluit Plant Dansal',
        //   categoryKey: 'events',
        //   categoryLabel: 'Events',
        //   year: '2025',
        //   icon: 'mdi-flower',
        //   items: [
        //     { id: 401, src: 'https://ik.imagekit.io/u3wbiya66/News&Events/WhatsApp%20Image%202025-06-08%20at%2010.12.15_fb599a49.jpg?updatedAt=1749452636230', title: 'Husma Fluit Plant Dansal', category: 'Events', year: '2025' },
        //   ]
        // },
        {
          groupKey: 'pirith-2025',
          groupLabel: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව',
          categoryKey: 'events',
          categoryLabel: 'Events',
          year: '2025',
          icon: 'mdi-candle',
          items: [
            { id: 501, src: 'https://ik.imagekit.io/u3wbiya66/News&Events/NE5.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 502, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/6.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 503, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/3.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 504, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/16.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 505, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/5.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 506, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/17.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 507, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/8.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 508, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/2.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 509, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/9.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 510, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/4.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 511, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/15.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 512, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/11.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
            { id: 513, src: 'https://ik.imagekit.io/kp5tixhur/Anuradhapura/1.jpeg', title: 'කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව', category: 'Events', year: '2025' },
          ]
        },
        // {
        //   groupKey: 'secret-santa-2024',
        //   groupLabel: 'Secret Santa Celebration',
        //   categoryKey: 'events',
        //   categoryLabel: 'Events',
        //   year: '2024',
        //   icon: 'mdi-gift',
        //   items: [
        //     { id: 601, src: 'https://ik.imagekit.io/u3wbiya66/News&Events/FB_IMG_1738984651465.jpg?updatedAt=1738985253696', title: 'Spreading Festive Cheer', category: 'Events', year: '2024' },
        //   ]
        // },
      ]
    };
  },

  computed: {
    filteredGroups() {
      if (this.activeCategory === 'all') return this.groups;
      return this.groups.filter(g => g.categoryKey === this.activeCategory);
    }
  },

  methods: {
    setMainSection(section) {
      this.mainSection = section;
      this.closeLightbox();
      this.closeGroupModal();
      this.closeVideoModal();
    },

    setCategory(key) {
      this.activeCategory = key;
      this.closeLightbox();
      this.closeGroupModal();
    },
    getCategoryCount(key) {
      if (key === 'all') return this.groups.reduce((sum, g) => sum + g.items.length, 0);
      return this.groups.filter(g => g.categoryKey === key).reduce((sum, g) => sum + g.items.length, 0);
    },

    // ── Group Modal ─────────────────────────────
    openGroupModal(group) {
      this.groupModal = group;
      document.body.style.overflow = 'hidden';
    },
    closeGroupModal() {
      this.groupModal = null;
      if (!this.lightboxItem && !this.videoModal) document.body.style.overflow = '';
    },

    // ── Lightbox ────────────────────────────────
    openLightbox(item, groupItems) {
      this.lightboxSet = groupItems;
      this.lightboxIndex = groupItems.findIndex(i => i.id === item.id);
      this.lightboxItem = item;
      document.body.style.overflow = 'hidden';
    },
    openLightboxFromModal(item, groupItems) {
      this.groupModal = null;
      this.$nextTick(() => {
        this.lightboxSet = groupItems;
        this.lightboxIndex = groupItems.findIndex(i => i.id === item.id);
        this.lightboxItem = item;
        document.body.style.overflow = 'hidden';
      });
    },
    closeLightbox() {
      this.lightboxItem = null;
      if (!this.groupModal && !this.videoModal) document.body.style.overflow = '';
    },
    lightboxNext() {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxSet.length;
      this.lightboxItem = this.lightboxSet[this.lightboxIndex];
    },
    lightboxPrev() {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxSet.length) % this.lightboxSet.length;
      this.lightboxItem = this.lightboxSet[this.lightboxIndex];
    },

    // ── BuzzCast Video Modal ─────────────────────
    openVideoModal(video) {
      this.videoModal = video;
      document.body.style.overflow = 'hidden';
    },
    closeVideoModal() {
      this.videoModal = null;
      if (!this.groupModal && !this.lightboxItem) document.body.style.overflow = '';
    },

    handleKeydown(e) {
      if (this.lightboxItem) {
        if (e.key === 'ArrowRight') this.lightboxNext();
        if (e.key === 'ArrowLeft')  this.lightboxPrev();
        if (e.key === 'Escape')     this.closeLightbox();
      } else if (this.videoModal) {
        if (e.key === 'Escape') this.closeVideoModal();
      } else if (this.groupModal) {
        if (e.key === 'Escape') this.closeGroupModal();
      }
    }
  },

  mounted() {
    AOS.init({ duration: 700, once: true, offset: 60 });
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
/* ── Page ─────────────────────────────────────────── */
.gallery-page { background: linear-gradient(160deg, #f8f9fa 0%, #ffffff 60%, #fff8f2 100%); min-height: 100vh; padding: 60px 0 100px; position: relative; overflow: hidden; }
.bg-blob { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; z-index: 0; }
.bg-blob--1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(255,107,53,0.09) 0%, transparent 70%); top: -100px; left: -160px; }
.bg-blob--2 { width: 440px; height: 440px; background: radial-gradient(circle, rgba(251,183,0,0.08) 0%, transparent 70%); bottom: 80px; right: -140px; }

/* ── Hero ─────────────────────────────────────────── */
.gallery-hero { text-align: center; padding: 0 20px; margin-bottom: 32px; position: relative; z-index: 1; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 18px; }
.eyebrow-line { width: 40px; height: 2px; background: linear-gradient(90deg, transparent, #ff6b35); border-radius: 2px; }
.eyebrow-line:last-child { background: linear-gradient(90deg, #ff6b35, transparent); }
.eyebrow-text { font-size: 0.75rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #ff6b35; }
.hero-title { font-size: 2.5rem; font-weight: 700; color: #FBB700; margin-bottom: 15px; letter-spacing: -0.5px; }
.hero-highlight { color: #ff6b35; position: relative; display: inline-block; }
.hero-highlight::after { content: ''; position: absolute; bottom: 4px; left: 0; width: 100%; height: 10px; background: rgba(255,107,53,0.15); z-index: -1; border-radius: 4px; }
.hero-rule { width: 60px; height: 4px; background: linear-gradient(90deg, #ff6b35, #FBB700); margin: 0 auto 20px; border-radius: 2px; }
.hero-subtitle { font-size: 1.1rem; color: #6c757d; max-width: 560px; margin: 0 auto; line-height: 1.7; }

/* ── Main Section Tabs ────────────────────────────── */
.section-tabs { display: flex; justify-content: center; gap: 16px; padding: 0 20px; margin-bottom: 40px; position: relative; z-index: 1; flex-wrap: wrap; }
.section-tab {
  display: flex; align-items: center; gap: 12px;
  padding: 12px 26px;
  border-radius: 16px;
  border: 2px solid #eee;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
  min-width: 210px;
}
.section-tab:hover { border-color: #ff6b35; box-shadow: 0 8px 24px rgba(255,107,53,0.14); transform: translateY(-1px); }
.section-tab--active { border-color: #ff6b35; background: linear-gradient(135deg, #ff6b35, #FBB700); box-shadow: 0 10px 30px rgba(255,107,53,0.3); }
.section-tab-icon {
  width: 40px; height: 40px; border-radius: 12px;
  background: rgba(255,107,53,0.10);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 0.3s ease;
}
.section-tab--active .section-tab-icon { background: rgba(255,255,255,0.22); }
.section-tab-text { display: flex; flex-direction: column; align-items: flex-start; text-align: left; }
.section-tab-title { font-size: 0.98rem; font-weight: 700; color: #2c3e50; }
.section-tab--active .section-tab-title { color: white; }
.section-tab-sub { font-size: 0.72rem; color: #6c757d; font-weight: 500; }
.section-tab--active .section-tab-sub { color: rgba(255,255,255,0.85); }

/* ── Filter Bar ───────────────────────────────────── */
.filter-bar { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 0 20px; margin-bottom: 48px; position: relative; z-index: 1; }
.filter-btn { display: inline-flex; align-items: center; gap: 6px; padding: 9px 20px; border-radius: 50px; border: 2px solid #e0e0e0; background: white; color: #6c757d; font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: all 0.28s ease; white-space: nowrap; }
.filter-btn:hover { border-color: #ff6b35; color: #ff6b35; box-shadow: 0 4px 14px rgba(255,107,53,0.15); }
.filter-btn--active { background: #ff6b35; border-color: #ff6b35; color: white; box-shadow: 0 6px 20px rgba(255,107,53,0.3); }
.filter-btn--active:hover { color: white; }
.filter-count { background: rgba(255,255,255,0.25); border-radius: 20px; font-size: 0.72rem; font-weight: 700; padding: 1px 7px; min-width: 22px; text-align: center; }
.filter-btn:not(.filter-btn--active) .filter-count { background: #f0f0f0; color: #6c757d; }

/* ── Gallery Container ────────────────────────────── */
.gallery-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; display: flex; flex-direction: column; gap: 40px; }

/* ── Event Group ──────────────────────────────────── */
.event-group { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.07); border: 1px solid rgba(255,107,53,0.08); transition: box-shadow 0.3s ease; }
.event-group:hover { box-shadow: 0 8px 36px rgba(255,107,53,0.12); }

.group-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid #f0f0f0; background: linear-gradient(90deg, #fff8f5 0%, #ffffff 100%); flex-wrap: wrap; gap: 10px; }
.group-header-left { display: flex; align-items: center; gap: 12px; }
.group-icon-wrap { width: 34px; height: 34px; border-radius: 10px; background: rgba(255,107,53,0.10); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.group-title { font-size: 0.95rem; font-weight: 700; color: #2c3e50; margin: 0 0 2px; line-height: 1.3; }
.group-meta { font-size: 0.73rem; color: #6c757d; font-weight: 500; }

.group-grid { display: grid; gap: 4px; padding: 4px; background: #ebebeb; }
.group-grid--1 { grid-template-columns: 1fr; grid-template-rows: 340px; }
.group-grid--2 { grid-template-columns: 1fr 1fr; grid-template-rows: 280px; }
.group-grid--3 { grid-template-columns: 2fr 1fr; grid-template-rows: 155px 155px; }
.group-grid--3 .gallery-card:first-child { grid-column: 1; grid-row: 1 / 3; }

.gallery-card { position: relative; overflow: hidden; cursor: pointer; border-radius: 8px; }
.gallery-card:hover .gallery-img { transform: scale(1.07); }
.gallery-card:hover .gallery-overlay { opacity: 1; }
.gallery-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s cubic-bezier(0.165,0.84,0.44,1); }
.gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,107,53,0.90) 0%, rgba(251,183,0,0.6) 55%, transparent 100%); opacity: 0; transition: opacity 0.35s ease; display: flex; align-items: flex-end; }
.overlay-inner { padding: 12px; width: 100%; color: white; display: flex; align-items: flex-end; justify-content: space-between; gap: 6px; }
.overlay-title { font-size: 0.85rem; font-weight: 700; line-height: 1.3; margin: 0; flex: 1; }
.overlay-icon-wrap { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

.gallery-card--more .gallery-img { filter: brightness(0.28); }
.gallery-card--more:hover .gallery-img { transform: scale(1.05); filter: brightness(0.22); }
.more-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.more-overlay-inner { display: flex; flex-direction: column; align-items: center; gap: 6px; color: white; text-align: center; }
.more-count { font-size: 2.6rem; font-weight: 800; line-height: 1; color: white; text-shadow: 0 2px 16px rgba(0,0,0,0.4); }
.more-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0.82; }

.empty-state { text-align: center; padding: 80px 20px; color: #ccc; font-size: 1rem; }

/* ── BuzzCast ─────────────────────────────────────── */
.buzzcast-container { max-width: 1280px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
.buzzcast-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; }

.video-card { background: white; border-radius: 16px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 20px rgba(0,0,0,0.07); border: 1px solid rgba(255,107,53,0.08); transition: box-shadow 0.3s ease, transform 0.3s ease; }
.video-card:hover { box-shadow: 0 12px 32px rgba(255,107,53,0.16); transform: translateY(-3px); }

.video-thumb-wrap { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; background: #111; }
.video-thumb { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
.video-card:hover .video-thumb { transform: scale(1.06); }
.video-play-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.18); display: flex; align-items: center; justify-content: center; transition: background 0.3s ease; }
.video-card:hover .video-play-overlay { background: rgba(0,0,0,0.32); }
.video-play-btn { width: 58px; height: 58px; border-radius: 50%; background: rgba(255,107,53,0.92); display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 20px rgba(0,0,0,0.35); transition: transform 0.25s ease; }
.video-card:hover .video-play-btn { transform: scale(1.1); }
.video-badge { position: absolute; top: 10px; left: 10px; background: #ff6b35; color: white; font-size: 0.65rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 3px 10px; border-radius: 20px; }

.video-card-info { padding: 14px 16px; }
.video-card-title { font-size: 0.92rem; font-weight: 700; color: #2c3e50; margin: 0 0 4px; line-height: 1.35; }
.video-card-date { font-size: 0.72rem; color: #6c757d; font-weight: 500; }

/* ── Video Modal ──────────────────────────────────── */
.video-modal { position: relative; max-width: 900px; width: 100%; display: flex; flex-direction: column; align-items: center; }
.video-modal-frame-wrap { width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,0.6); background: #111; }
.video-modal-iframe { width: 100%; height: 100%; border: none; display: block; }

/* ══ Group All-Photos Modal ═══════════════════════════ */
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.62); z-index: 8888; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(6px); }
.modal-panel { background: white; border-radius: 20px; width: 100%; max-width: 920px; max-height: 88vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,0.28); animation: modalIn 0.28s ease; }
@keyframes modalIn { from { opacity: 0; transform: translateY(18px) scale(0.98); } to { opacity: 1; transform: none; } }

.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid #f0f0f0; background: linear-gradient(90deg, #fff8f5, #ffffff); flex-shrink: 0; }
.modal-header-left { display: flex; align-items: center; gap: 12px; }
.modal-icon-wrap { width: 34px; height: 34px; border-radius: 10px; background: rgba(255,107,53,0.10); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.modal-title { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0 0 2px; line-height: 1.3; }
.modal-meta { font-size: 0.73rem; color: #6c757d; font-weight: 500; }
.modal-close { background: #f5f5f5; border: none; border-radius: 50%; width: 38px; height: 38px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; flex-shrink: 0; }
.modal-close:hover { background: #ffe0d6; }

.modal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; padding: 6px; overflow-y: auto; background: #ebebeb; flex: 1; }
.modal-grid::-webkit-scrollbar { width: 6px; }
.modal-grid::-webkit-scrollbar-track { background: #f0f0f0; }
.modal-grid::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
.modal-grid::-webkit-scrollbar-thumb:hover { background: #ff6b35; }

.modal-card { position: relative; overflow: hidden; border-radius: 8px; cursor: pointer; aspect-ratio: 4/3; }
.modal-card:hover .modal-img { transform: scale(1.06); }
.modal-card:hover .modal-card-overlay { opacity: 1; }
.modal-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
.modal-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,107,53,0.88) 0%, rgba(251,183,0,0.55) 55%, transparent 100%); opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: flex-end; }
.modal-card-inner { padding: 10px; width: 100%; color: white; display: flex; align-items: flex-end; justify-content: space-between; gap: 6px; }
.modal-photo-num { font-size: 0.62rem; font-weight: 800; background: rgba(255,255,255,0.2); border-radius: 20px; padding: 2px 7px; flex-shrink: 0; }
.modal-card-title { font-size: 0.78rem; font-weight: 700; line-height: 1.3; margin: 0; flex: 1; }

.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }

/* ══ Lightbox ════════════════════════════════════════ */
.lightbox-backdrop { position: fixed; inset: 0; background: rgba(10,10,10,0.94); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(8px); }
.lightbox-modal { position: relative; max-width: 1000px; width: 100%; display: flex; flex-direction: column; align-items: center; }
.lightbox-close { position: absolute; top: -50px; right: 0; background: rgba(255,255,255,0.1); border: none; border-radius: 50%; width: 44px; height: 44px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.25s; z-index: 2; }
.lightbox-close:hover { background: #ff6b35; }
.lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.1); border: none; border-radius: 50%; width: 52px; height: 52px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.25s; z-index: 2; }
.lightbox-nav:hover { background: #ff6b35; }
.lightbox-nav--prev { left: -70px; }
.lightbox-nav--next { right: -70px; }
.lightbox-image-wrap { width: 100%; border-radius: 12px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,0,0,0.6); max-height: 72vh; display: flex; align-items: center; justify-content: center; background: #111; }
.lightbox-image { max-width: 100%; max-height: 72vh; object-fit: contain; display: block; }
.lightbox-caption { text-align: center; margin-top: 20px; color: white; }
.lightbox-cat { font-size: 0.72rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: #ff6b35; display: block; margin-bottom: 6px; }
.lightbox-title { font-size: 1.4rem; font-weight: 700; margin: 0; color: white; }
.lightbox-year { font-size: 0.82rem; color: rgba(255,255,255,0.5); margin-top: 4px; display: block; }
.lightbox-counter { position: absolute; bottom: -36px; font-size: 0.8rem; color: rgba(255,255,255,0.45); letter-spacing: 1px; }
.lightbox-fade-enter-active, .lightbox-fade-leave-active { transition: opacity 0.3s ease; }
.lightbox-fade-enter-from, .lightbox-fade-leave-to { opacity: 0; }
.lb-slide-enter-active, .lb-slide-leave-active { transition: opacity 0.22s ease, transform 0.22s ease; }
.lb-slide-enter-from { opacity: 0; transform: scale(0.96); }
.lb-slide-leave-to { opacity: 0; transform: scale(1.04); }

/* ── Back to Home ───────────────────────────────── */
.home-link-section { text-align: center; padding: 32px 0 16px; }
.home-link-section > p { font-size: 0.95rem; color: #888; margin-bottom: 12px; }
.home-link-btn { display: inline-flex; align-items: center; gap: 8px; padding: 11px 28px; background: #FBB700; color: #fff; border-radius: 50px; font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease; box-shadow: 0 4px 16px rgba(251,183,0,0.3); }
.home-link-btn:hover { background: #e0a500; transform: translateY(-2px); }
.quick-nav-links { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 16px; }
.qnl { font-size: 0.85rem; color: #FF5F15; text-decoration: none; font-weight: 500; padding: 5px 14px; border: 1px solid rgba(255,95,21,0.25); border-radius: 30px; transition: all 0.25s; }
.qnl:hover { background: #FF5F15; color: #fff; border-color: #FF5F15; }

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .gallery-page { padding: 40px 0 80px; }
  .hero-title { font-size: 2rem; }
  .gallery-container { padding: 0 14px; gap: 28px; }
  .buzzcast-container { padding: 0 14px; }
  .group-header { flex-direction: column; align-items: flex-start; }
  .group-grid--1 { grid-template-rows: 240px; }
  .group-grid--2 { grid-template-rows: 200px; }
  .group-grid--3 { grid-template-columns: 2fr 1fr; grid-template-rows: 130px 130px; }
  .modal-grid { grid-template-columns: repeat(2, 1fr); }
  .lightbox-nav--prev { left: -8px; }
  .lightbox-nav--next { right: -8px; }
  .section-tab { min-width: 160px; padding: 10px 18px; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 1.8rem; }
  .filter-btn { padding: 7px 14px; font-size: 0.8rem; }
  .gallery-container { padding: 0 10px; gap: 20px; }
  .buzzcast-container { padding: 0 10px; }
  .buzzcast-grid { grid-template-columns: 1fr; }
  .group-header { padding: 12px 14px; }
  .group-grid--1 { grid-template-rows: 200px; }
  .group-grid--2 { grid-template-rows: 160px; }
  .group-grid--3 { grid-template-rows: 110px 110px; }
  .more-count { font-size: 2rem; }
  .modal-grid { grid-template-columns: repeat(2, 1fr); }
  .lightbox-nav { width: 40px; height: 40px; }
  .lightbox-nav--prev { left: -4px; }
  .lightbox-nav--next { right: -4px; }
  .lightbox-close { top: -44px; width: 38px; height: 38px; }
  .lightbox-title { font-size: 1.1rem; }
  .section-tabs { gap: 10px; }
  .section-tab { min-width: 140px; padding: 9px 14px; gap: 8px; }
  .section-tab-title { font-size: 0.85rem; }
}

@media (hover: none) and (pointer: coarse) {
  .gallery-overlay { opacity: 0.5; }
  .modal-card-overlay { opacity: 0.5; }
}
</style>
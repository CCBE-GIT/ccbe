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
          <v-icon size="18" color="#ff6b35">mdi-camera</v-icon>
          <span class="eyebrow-text">Visual Stories</span>
          <span class="eyebrow-line"></span>
        </div>
        <h1 class="hero-title">
          OUR <span class="hero-highlight">GALLERY</span>
        </h1>
        <div class="hero-rule"></div>
        <p class="hero-subtitle">
          Moments that define us from classrooms to celebrations, every picture tells our story.
        </p>
      </div>

      <!-- ── Filter Tabs ─────────────────────────── -->
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

      <!-- ── Gallery Groups ─────────────────────── -->
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
            <!-- <div class="group-header-right">
              <span class="group-category-tag">{{ group.categoryLabel }}</span>
              <button
                v-if="group.items.length > 3"
                class="view-all-btn"
                @click="openGroupModal(group)"
              >
                <v-icon size="14">mdi-view-grid</v-icon>
                View All {{ group.items.length }}
              </button>
            </div> -->
          </div>

          <!-- Group Grid — shows max 3 images -->
          <div class="group-grid" :class="'group-grid--' + Math.min(group.items.length, 3)">

            <!-- First 2 images always shown normally -->
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

            <!-- 3rd slot -->
            <template v-if="group.items.length >= 3">
              <!-- Exactly 3: show 3rd image normally -->
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

              <!-- 4+ items: "+N more" tile over 3rd image -->
              <div
                v-else
                class="gallery-card gallery-card--more"
                
              >
                <img :src="group.items[2].src" :alt="group.items[2].title" class="gallery-img" loading="lazy" />
                <div class="more-overlay">
                  <div class="more-overlay-inner">
                    <span class="more-count">+{{ group.items.length - 2 }}</span>
                    <span class="more-label">more photos</span>
                    <!-- <div class="more-icon">
                      <v-icon color="white" size="20">mdi-view-grid-outline</v-icon>
                    </div> -->
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

      <!-- ── Group All-Photos Modal ──────────────── -->
      <transition name="modal-fade">
        <div
          v-if="groupModal"
          class="modal-backdrop"
          @click.self="closeGroupModal"
        >
          <div class="modal-panel">
            <!-- Modal Header -->
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

            <!-- Modal Grid — ALL photos -->
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
      activeCategory: 'all',
      lightboxItem: null,
      lightboxIndex: 0,
      lightboxSet: [],
      groupModal: null,

      categories: [
        { key: 'all',      label: 'All',      icon: 'mdi-view-grid' },
        // { key: 'events',   label: 'Events',   icon: 'mdi-calendar-star' },
        // { key: 'students', label: 'Students', icon: 'mdi-account-group' },
      ],

      groups: [
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
      if (!this.lightboxItem) document.body.style.overflow = '';
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
      if (!this.groupModal) document.body.style.overflow = '';
    },
    lightboxNext() {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxSet.length;
      this.lightboxItem = this.lightboxSet[this.lightboxIndex];
    },
    lightboxPrev() {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.lightboxSet.length) % this.lightboxSet.length;
      this.lightboxItem = this.lightboxSet[this.lightboxIndex];
    },
    handleKeydown(e) {
      if (this.lightboxItem) {
        if (e.key === 'ArrowRight') this.lightboxNext();
        if (e.key === 'ArrowLeft')  this.lightboxPrev();
        if (e.key === 'Escape')     this.closeLightbox();
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
.gallery-hero { text-align: center; padding: 0 20px; margin-bottom: 48px; position: relative; z-index: 1; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 18px; }
.eyebrow-line { width: 40px; height: 2px; background: linear-gradient(90deg, transparent, #ff6b35); border-radius: 2px; }
.eyebrow-line:last-child { background: linear-gradient(90deg, #ff6b35, transparent); }
.eyebrow-text { font-size: 0.75rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #ff6b35; }
.hero-title { font-size: 2.5rem; font-weight: 700; color: #FBB700; margin-bottom: 15px; letter-spacing: -0.5px; }
.hero-highlight { color: #ff6b35; position: relative; display: inline-block; }
.hero-highlight::after { content: ''; position: absolute; bottom: 4px; left: 0; width: 100%; height: 10px; background: rgba(255,107,53,0.15); z-index: -1; border-radius: 4px; }
.hero-rule { width: 60px; height: 4px; background: linear-gradient(90deg, #ff6b35, #FBB700); margin: 0 auto 20px; border-radius: 2px; }
.hero-subtitle { font-size: 1.1rem; color: #6c757d; max-width: 560px; margin: 0 auto; line-height: 1.7; }

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

/* Group Header */
.group-header { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid #f0f0f0; background: linear-gradient(90deg, #fff8f5 0%, #ffffff 100%); flex-wrap: wrap; gap: 10px; }
.group-header-left { display: flex; align-items: center; gap: 12px; }
.group-icon-wrap { width: 34px; height: 34px; border-radius: 10px; background: rgba(255,107,53,0.10); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.group-title { font-size: 0.95rem; font-weight: 700; color: #2c3e50; margin: 0 0 2px; line-height: 1.3; }
.group-meta { font-size: 0.73rem; color: #6c757d; font-weight: 500; }
.group-header-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.group-category-tag { background: rgba(255,107,53,0.10); color: #ff6b35; font-size: 0.68rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 11px; border-radius: 20px; }
.view-all-btn { display: inline-flex; align-items: center; gap: 5px; padding: 6px 14px; border-radius: 50px; border: 1.5px solid #ff6b35; background: transparent; color: #ff6b35; font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 0.25s ease; white-space: nowrap; }
.view-all-btn:hover { background: #ff6b35; color: white; box-shadow: 0 4px 14px rgba(255,107,53,0.25); }

/* ── Group Grid — max 3 slots ─────────────────────── */
.group-grid { display: grid; gap: 4px; padding: 4px; background: #ebebeb; }
.group-grid--1 { grid-template-columns: 1fr; grid-template-rows: 340px; }
.group-grid--2 { grid-template-columns: 1fr 1fr; grid-template-rows: 280px; }
.group-grid--3 { grid-template-columns: 2fr 1fr; grid-template-rows: 155px 155px; }
.group-grid--3 .gallery-card:first-child { grid-column: 1; grid-row: 1 / 3; }

/* ── Gallery Card ─────────────────────────────────── */
.gallery-card { position: relative; overflow: hidden; cursor: pointer; border-radius: 8px; }
.gallery-card:hover .gallery-img { transform: scale(1.07); }
.gallery-card:hover .gallery-overlay { opacity: 1; }
.gallery-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s cubic-bezier(0.165,0.84,0.44,1); }
.gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(255,107,53,0.90) 0%, rgba(251,183,0,0.6) 55%, transparent 100%); opacity: 0; transition: opacity 0.35s ease; display: flex; align-items: flex-end; }
.overlay-inner { padding: 12px; width: 100%; color: white; display: flex; align-items: flex-end; justify-content: space-between; gap: 6px; }
.overlay-title { font-size: 0.85rem; font-weight: 700; line-height: 1.3; margin: 0; flex: 1; }
.overlay-icon-wrap { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.7); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

/* ── "+N more" tile ───────────────────────────────── */
.gallery-card--more .gallery-img { filter: brightness(0.28); }
.gallery-card--more:hover .gallery-img { transform: scale(1.05); filter: brightness(0.22); }
.more-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.more-overlay-inner { display: flex; flex-direction: column; align-items: center; gap: 6px; color: white; text-align: center; }
.more-count { font-size: 2.6rem; font-weight: 800; line-height: 1; color: white; text-shadow: 0 2px 16px rgba(0,0,0,0.4); }
.more-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; opacity: 0.82; }
.more-icon { width: 36px; height: 36px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.55); display: flex; align-items: center; justify-content: center; margin-top: 6px; transition: background 0.25s, border-color 0.25s; }
.gallery-card--more:hover .more-icon { background: #ff6b35; border-color: #ff6b35; }

/* ── Empty State ──────────────────────────────────── */
.empty-state { text-align: center; padding: 80px 20px; color: #ccc; font-size: 1rem; }

/* ══ Group All-Photos Modal ═══════════════════════════ */
.modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.62); z-index: 8888; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(6px); }
.modal-panel { background: white; border-radius: 20px; width: 100%; max-width: 920px; max-height: 88vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,0.28); animation: modalIn 0.28s ease; }
@keyframes modalIn { from { opacity: 0; transform: translateY(18px) scale(0.98); } to { opacity: 1; transform: none; } }

/* Modal Header */
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px; border-bottom: 1px solid #f0f0f0; background: linear-gradient(90deg, #fff8f5, #ffffff); flex-shrink: 0; }
.modal-header-left { display: flex; align-items: center; gap: 12px; }
.modal-icon-wrap { width: 34px; height: 34px; border-radius: 10px; background: rgba(255,107,53,0.10); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.modal-title { font-size: 1rem; font-weight: 700; color: #2c3e50; margin: 0 0 2px; line-height: 1.3; }
.modal-meta { font-size: 0.73rem; color: #6c757d; font-weight: 500; }
.modal-close { background: #f5f5f5; border: none; border-radius: 50%; width: 38px; height: 38px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; flex-shrink: 0; }
.modal-close:hover { background: #ffe0d6; }

/* Modal Photo Grid */
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

/* Modal transition */
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

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .gallery-page { padding: 40px 0 80px; }
  .hero-title { font-size: 2rem; }
  .gallery-container { padding: 0 14px; gap: 28px; }
  .group-header { flex-direction: column; align-items: flex-start; }
  .group-grid--1 { grid-template-rows: 240px; }
  .group-grid--2 { grid-template-rows: 200px; }
  .group-grid--3 { grid-template-columns: 2fr 1fr; grid-template-rows: 130px 130px; }
  .modal-grid { grid-template-columns: repeat(2, 1fr); }
  .lightbox-nav--prev { left: -8px; }
  .lightbox-nav--next { right: -8px; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 1.8rem; }
  .filter-btn { padding: 7px 14px; font-size: 0.8rem; }
  .gallery-container { padding: 0 10px; gap: 20px; }
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
}

@media (hover: none) and (pointer: coarse) {
  .gallery-overlay { opacity: 0.5; }
  .modal-card-overlay { opacity: 0.5; }
}
</style>
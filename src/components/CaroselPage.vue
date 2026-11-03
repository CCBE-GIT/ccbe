<template>
  <section
    class="ccbe-hero"
    aria-roledescription="carousel"
    aria-label="CCBE highlights"
    @mouseenter="pauseAutoPlay"
    @mouseleave="startAutoPlay"
    @focusin="pauseAutoPlay"
    @focusout="startAutoPlay"
  >
    <!-- Award badges -->
    <div class="badges">
      <a
        href="https://ebadge.bestweb.lk/api/v1/clicked/ccbe.lk/TopWeb/2026-March/Qualified"
        target="_blank"
        rel="noopener"
        class="badge-link"
      >
        <img
          src="https://ebadge.bestweb.lk/eBadgeSystem/domainNames/ccbe.lk/TopWeb/2026-March/Qualified/image.png"
          alt="BestWeb.lk Top Web 2026 badge"
          class="badge-img"
        />
      </a>
      <a href="#" target="_blank" rel="noopener" class="badge-link">
        <img
          src="https://ik.imagekit.io/kp5tixhur/Awards/BestWeb%20Award1%20removed.png"
          alt="BestWeb.lk Award badge"
          class="badge-img"
        />
      </a>
    </div>

    <!-- Slides (crossfade) -->
    <div class="slides">
      <article
        v-for="(item, i) in items"
        :key="i"
        class="slide"
        :class="{ active: currentSlide === i }"
        :aria-hidden="currentSlide !== i"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${i + 1} of ${items.length}`"
      >
        <div
          class="photo"
          role="img"
          :aria-label="item.title"
          :style="{ backgroundImage: `url(${item.src})`, backgroundPosition: item.pos || 'center' }"
        ></div>
        <div class="shade"></div>

        <div class="copy">
          <span class="category">{{ item.category }}</span>
          <h2 class="title">{{ item.title }}</h2>
          <p class="lede">{{ item.subtitle }}</p>

          <ul class="highlights" v-if="item.features">
            <li v-for="(feature, fIndex) in item.features" :key="fIndex">{{ feature }}</li>
          </ul>
        </div>
      </article>
    </div>

    <!-- Arrows -->
    <button class="arrow arrow-prev" @click="prev" aria-label="Previous slide">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button class="arrow arrow-next" @click="next" aria-label="Next slide">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <!-- Bottom strip: navigation + autoplay progress -->
    <nav class="strip" aria-label="Choose a slide">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="tab"
        :class="{ active: currentSlide === index }"
        :aria-current="currentSlide === index ? 'true' : null"
        @click="goTo(index)"
      >
        <span class="bar">
          <span
            v-if="currentSlide === index"
            :key="`bar-${index}-${cycle}`"
            class="bar-fill"
            :style="{ animationDuration: `${INTERVAL}ms` }"
          ></span>
        </span>
        <span class="tab-name">{{ item.tab }}</span>
        <span class="tab-region">{{ item.category }}</span>
      </button>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'CarouselPage',
  data() {
    return {
      currentSlide: 0,
      autoPlayTimer: null,
      INTERVAL: 8000,
      cycle: 0, // restarts the progress bar whenever autoplay restarts
      touchStartX: 0,
      items: [
        {
          src: 'https://ik.imagekit.io/a56urydbh7/PXL_202.jpg?updatedAt=1743228744356',
          pos: 'center',
          tab: 'Our Recognition',
          title: 'Our Recognition',
          subtitle: 'Celebrating Excellence Through the Years.',
          category: 'AWARDS & HONORS',
          features: ['Multiple British Council Awards', 'Platinum Category Recognition', 'Regional Excellence Awards']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/2.jpg?updatedAt=1737779121377',
          pos: 'center',
          tab: 'Learning Environment',
          title: 'Student-Centric Environment',
          subtitle: 'Empowering Active Participation and Engagement.',
          category: 'LEARNING ENVIRONMENT',
          features: ['Interactive Learning Spaces', 'Collaborative Activities', 'Modern Classroom Setup']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/3.jpg?updatedAt=1737779167089',
          pos: 'center',
          tab: 'Student Support',
          title: 'Individual Attention',
          subtitle: 'Personalized Support in a Safe Space.',
          category: 'STUDENT SUPPORT',
          features: ['One-on-One Mentoring', 'Safe Learning Environment', 'Personalized Progress Tracking']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/6.jpg?updatedAt=1737779168033',
          pos: 'center',
          tab: 'Personal Development',
          title: 'Personalized Support',
          subtitle: 'Empowering Confidence and Leadership.',
          category: 'PERSONAL DEVELOPMENT',
          features: ['Confidence Building Programs', 'Leadership Workshops', 'Personal Growth Plans']
        },
        {
          src: 'https://ik.imagekit.io/u3wbiya66/7.jpg?updatedAt=1737779166430',
          pos: 'center',
          tab: 'Innovation',
          title: 'Innovative Learning',
          subtitle: 'Blending Technology and Teaching for Growth.',
          category: 'INNOVATION & TECHNOLOGY',
          features: ['Digital Learning Platforms', 'Interactive Technology', 'Modern Teaching Methods']
        }
      ]
    };
  },
  methods: {
    goTo(index) {
      this.currentSlide = ((index % this.items.length) + this.items.length) % this.items.length;
      this.restartAutoPlay();
    },
    next() {
      this.goTo(this.currentSlide + 1);
    },
    prev() {
      this.goTo(this.currentSlide - 1);
    },
    startAutoPlay() {
      this.stopAutoPlay();
      this.cycle += 1;
      this.autoPlayTimer = setInterval(() => this.next(), this.INTERVAL);
    },
    stopAutoPlay() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
      }
    },
    pauseAutoPlay() {
      this.stopAutoPlay();
    },
    restartAutoPlay() {
      this.startAutoPlay();
    },
    handleKeydown(e) {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    },
    handleTouchStart(e) {
      this.touchStartX = e.touches[0].clientX;
    },
    handleTouchEnd(e) {
      const diff = this.touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
    }
  },
  mounted() {
    this.startAutoPlay();
    window.addEventListener('keydown', this.handleKeydown);
    this.$el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    this.$el.addEventListener('touchend', this.handleTouchEnd);
  },
  beforeUnmount() {
    this.stopAutoPlay();
    window.removeEventListener('keydown', this.handleKeydown);
    this.$el.removeEventListener('touchstart', this.handleTouchStart);
    this.$el.removeEventListener('touchend', this.handleTouchEnd);
  }
};
</script>

<style scoped>
/* ===== TOKENS ===== */
.ccbe-hero {
  --ink: #111111;
  --gold: #ffd700;
  --amber: #ff6b35;
  --white: #ffffff;
  --font: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;

  position: relative;
  width: 100%;
  height: clamp(520px, 86vh, 700px);
  overflow: hidden;
  background: var(--ink);
  color: var(--white);
  font-family: var(--font);
}

/* ===== BADGES ===== */
.badges {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.badge-link {
  display: block;
  line-height: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.badge-link:hover {
  transform: scale(1.05);
  opacity: 0.95;
}
.badge-img {
  width: 130px;
  height: 130px;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.35));
}

/* ===== SLIDES (crossfade) ===== */
.slides {
  position: absolute;
  inset: 0;
}
.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease, visibility 0s linear 1s;
}
.slide.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 1s ease, visibility 0s;
}

.photo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  transform: scale(1);
}
/* slow drift on the active photo */
.slide.active .photo {
  animation: drift 14s ease-out forwards;
}
@keyframes drift {
  from { transform: scale(1.08); }
  to   { transform: scale(1); }
}

/* darkens the text side and the strip at the bottom */
.shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0) 40%),
    linear-gradient(to right, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.3) 55%, rgba(0, 0, 0, 0.05) 85%);
}

/* ===== COPY ===== */
.copy {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 max(7%, 24px);
  max-width: 760px;
}

.category {
  display: inline-block;
  margin-bottom: 18px;
  padding: 5px 14px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: var(--white);
  background: var(--amber);
  border-radius: 3px;
}

.title {
  margin: 0 0 14px;
  font-size: clamp(2rem, 5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.01em;
  color: var(--white);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  text-wrap: balance;
}

.lede {
  margin: 0 0 24px;
  max-width: 52ch;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  font-weight: 500;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.92);
}

.highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
}
.highlights li {
  padding: 7px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #111;
  background: var(--gold);
  border-radius: 999px;
  transition: background-color 0.25s ease;
}
.highlights li:hover {
  background: var(--white);
}

/* entrance runs only when a slide becomes active */
.slide.active .copy > * {
  animation: rise 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both;
}
.slide.active .copy > :nth-child(2) { animation-delay: 0.08s; }
.slide.active .copy > :nth-child(3) { animation-delay: 0.16s; }
.slide.active .copy > :nth-child(4) { animation-delay: 0.24s; }

@keyframes rise {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== ARROWS ===== */
.arrow {
  position: absolute;
  top: 42%;
  z-index: 20;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  backdrop-filter: blur(6px);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.25s ease, transform 0.25s ease;
}
.ccbe-hero:hover .arrow,
.arrow:focus-visible {
  opacity: 1;
}
.arrow:hover {
  background: var(--amber);
  border-color: var(--amber);
  transform: scale(1.08);
}
.arrow-prev { left: 20px; }
.arrow-next { right: 20px; }

.arrow:focus-visible,
.tab:focus-visible,
.badge-link:focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 3px;
}

/* ===== BOTTOM STRIP ===== */
.strip {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 18px;
  padding: 0 max(7%, 24px) 28px;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
  padding: 0;
  text-align: left;
  color: rgba(255, 255, 255, 0.62);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.25s ease;
}
.tab:hover,
.tab.active {
  color: var(--white);
}

.bar {
  position: relative;
  display: block;
  width: 100%;
  height: 3px;
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.28);
  border-radius: 2px;
  overflow: hidden;
}
.bar-fill {
  position: absolute;
  inset: 0;
  background: var(--gold);
  transform-origin: left center;
  transform: scaleX(0);
  animation: fill linear forwards;
}
@keyframes fill {
  to { transform: scaleX(1); }
}

.tab-name {
  max-width: 100%;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tab-region {
  max-width: 100%;
  font-size: 0.68rem;
  letter-spacing: 0.6px;
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .badge-img { width: 110px; height: 110px; }
}

@media (max-width: 768px) {
  .ccbe-hero {
    height: clamp(520px, 84vh, 640px);
  }
  /* badges move to a row at the top so they never cover the text */
  .badges {
    top: 12px;
    left: 12px;
    right: 12px;
    flex-direction: row;
    justify-content: flex-end;
    gap: 6px;
  }
  .badge-img { width: 70px; height: 70px; }

  .copy {
    top: 80px;
    bottom: 96px;
    padding: 0 20px;
    max-width: 100%;
  }
  .shade {
    background:
      linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.35) 60%, rgba(0, 0, 0, 0.55) 100%);
  }
  .arrow {
    opacity: 0.85;
    width: 40px;
    height: 40px;
  }
  .arrow-prev { left: 10px; }
  .arrow-next { right: 10px; }
  .strip {
    gap: 8px;
    padding: 0 20px 20px;
  }
  .tab-name { font-size: 0.8rem; }
  .tab-region { display: none; }
  .highlights li:nth-child(n + 3) { display: none; }
}

@media (max-width: 480px) {
  .badge-img { width: 58px; height: 58px; }
  .category { font-size: 0.62rem; margin-bottom: 12px; }
  .lede { margin-bottom: 16px; }
  .highlights li { font-size: 0.72rem; padding: 6px 12px; }
  .strip { gap: 6px; }
  .tab-name { font-size: 0.62rem; }
}

@media (max-width: 768px) and (orientation: landscape) {
  .ccbe-hero { height: 420px; }
  .copy { top: 64px; }
  .highlights { display: none; }
}

/* ===== REDUCED MOTION ===== */
@media (prefers-reduced-motion: reduce) {
  .slide,
  .slide.active { transition: none; }
  .slide.active .photo,
  .slide.active .copy > * { animation: none; }
  .bar-fill { animation-duration: 0.01ms !important; transform: scaleX(1); }
}
</style>
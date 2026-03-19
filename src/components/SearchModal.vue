<template>
  <div>
    <!-- Search Trigger Button -->
    <button class="search-trigger" @click="openSearch" aria-label="Open search">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- Search Overlay -->
    <transition name="search-fade">
      <div v-if="isOpen" class="search-overlay" @click.self="closeSearch" role="dialog" aria-modal="true" aria-label="Search">
        <div class="search-modal">
          <!-- Search Input -->
          <div class="search-input-wrapper">
            <svg class="search-icon" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="#FBB700" stroke-width="2.5"/>
              <path d="M21 21L16.65 16.65" stroke="#FBB700" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <input
              ref="searchInput"
              v-model="query"
              type="text"
              placeholder="Search courses, news, events..."
              class="search-input"
              @keyup.esc="closeSearch"
              @input="performSearch"
              autocomplete="off"
            />
            <button v-if="query" class="clear-btn" @click="clearSearch" aria-label="Clear search">✕</button>
            <button class="close-btn" @click="closeSearch" aria-label="Close search">✕</button>
          </div>

          <!-- Quick Tags -->
          <div class="quick-tags" v-if="!query">
            <span class="tags-label">Quick Search:</span>
            <button
              v-for="tag in quickTags"
              :key="tag"
              class="quick-tag"
              @click="setQuery(tag)"
            >{{ tag }}</button>
          </div>

          <!-- Results -->
          <div class="search-results" v-if="query">
            <div v-if="filteredResults.length === 0" class="no-results">
              <div class="no-results-icon">🔍</div>
              <p>No results found for "<strong>{{ query }}</strong>"</p>
              <span>Try searching for courses, IELTS, news, or events</span>
            </div>

            <div v-else>
              <!-- Group: Programmes -->
              <div v-if="grouped.programmes.length" class="result-group">
                <div class="group-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
                  Programmes
                </div>
                <a
                  v-for="result in grouped.programmes"
                  :key="result.id"
                  :href="result.link"
                  class="result-item"
                  @click="closeSearch"
                >
                  <div class="result-icon" :style="{ background: result.color }">{{ result.icon }}</div>
                  <div class="result-info">
                    <span class="result-title" v-html="highlight(result.title)"></span>
                    <span class="result-desc">{{ result.description }}</span>
                  </div>
                  <svg class="result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>

              <!-- Group: News & Events -->
              <div v-if="grouped.news.length" class="result-group">
                <div class="group-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
                  News & Events
                </div>
                <a
                  v-for="result in grouped.news"
                  :key="result.id"
                  :href="result.link"
                  class="result-item"
                  @click="closeSearch"
                >
                  <div class="result-icon" :style="{ background: result.color }">{{ result.icon }}</div>
                  <div class="result-info">
                    <span class="result-title" v-html="highlight(result.title)"></span>
                    <span class="result-desc">{{ result.description }}</span>
                  </div>
                  <svg class="result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>

              <!-- Group: Pages -->
              <div v-if="grouped.pages.length" class="result-group">
                <div class="group-label">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 9L12 2L21 9V20a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
                  Pages
                </div>
                <a
                  v-for="result in grouped.pages"
                  :key="result.id"
                  :href="result.link"
                  class="result-item"
                  @click="closeSearch"
                >
                  <div class="result-icon" :style="{ background: result.color }">{{ result.icon }}</div>
                  <div class="result-info">
                    <span class="result-title" v-html="highlight(result.title)"></span>
                    <span class="result-desc">{{ result.description }}</span>
                  </div>
                  <svg class="result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Default empty state -->
          <div class="search-empty" v-if="!query">
            <p class="empty-hint">Start typing to search across all CCBE content</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SearchModal',
  data() {
    return {
      isOpen: false,
      query: '',
      quickTags: ['IELTS', 'Young Learners', 'O/L', 'A/L', 'Pre School', 'News', 'Events', 'Branches'],
      allContent: [
        // Programmes
        { id: 'p1', type: 'programmes', title: 'Pre Schoolers', description: 'English programme for children aged 3–5 who know their ABCs.', link: '/courses/preschool', icon: '🎒', color: 'rgba(255,183,77,0.15)', keywords: ['pre school', 'preschool', 'kids', 'children', '3-5', 'abc'] },
        { id: 'p2', type: 'programmes', title: 'Young Learners', description: 'Interactive English for children aged 6–12.', link: '/courses/younglearners', icon: '📚', color: 'rgba(129,199,132,0.15)', keywords: ['young learners', 'children', '6-12', 'kids', 'interactive'] },
        { id: 'p3', type: 'programmes', title: 'For Schools', description: 'Academic English programme for school students aged 13–18.', link: '/courses/forschool', icon: '🏫', color: 'rgba(100,181,246,0.15)', keywords: ['school', 'students', 'teens', '13-18', 'academic'] },
        { id: 'p4', type: 'programmes', title: 'English Skills For O/L\'s', description: 'Targeted English mastery for O/Level students.', link: '/courses/ol', icon: '📝', color: 'rgba(240,98,146,0.15)', keywords: ['ol', 'o/l', 'ordinary level', 'secondary', 'exam'] },
        { id: 'p5', type: 'programmes', title: 'English Skills For A/L\'s', description: 'Advanced English for A/Level students.', link: '/courses/al', icon: '🎓', color: 'rgba(206,147,216,0.15)', keywords: ['al', 'a/l', 'advanced level', 'higher', 'exam'] },
        { id: 'p6', type: 'programmes', title: 'IELTS', description: 'Comprehensive IELTS preparation for international success.', link: '/courses/ielts', icon: '🌍', color: 'rgba(255,138,101,0.15)', keywords: ['ielts', 'international', 'band', 'preparation', 'exam', 'cambridge'] },
        // News & Events
        { id: 'n1', type: 'news', title: "International Women's Day 2026", description: 'Celebrated at CCBE, honouring the strength of women.', link: '/news', icon: '🌸', color: 'rgba(255,107,53,0.12)', keywords: ["women's day", 'women', '2026', 'celebration', 'iwd'] },
        { id: 'n2', type: 'news', title: 'Cambrians Day 2026', description: 'Unity, talent and spirit across all CCBE branches.', link: '/news', icon: '🎉', color: 'rgba(251,183,0,0.12)', keywords: ['cambrians day', 'staff', 'unity', 'celebration', '2026'] },
        { id: 'n3', type: 'news', title: 'Cambrians Fit to Fight 2025', description: 'Supporting flood-affected communities island-wide.', link: '/news', icon: '💪', color: 'rgba(100,181,246,0.12)', keywords: ['fit to fight', 'flood', 'charity', 'humanitarian', '2025'] },
        { id: 'n4', type: 'news', title: 'Husma Fruit Plant Dansal 2025', description: 'Island-wide green initiative — 5,000 plants.', link: '/news', icon: '🌿', color: 'rgba(129,199,132,0.12)', keywords: ['husma', 'plants', 'green', 'environment', '2025'] },
        { id: 'n5', type: 'news', title: 'Cambrians Awrudu Udanaya 2025', description: 'Traditional games, festivities and cultural celebrations.', link: '/news', icon: '🎊', color: 'rgba(255,183,77,0.12)', keywords: ['awrudu', 'new year', 'sinhala', 'tamil', 'festival', '2025'] },
        { id: 'n6', type: 'news', title: 'Staff Wellness & Medical Screening 2025', description: 'Promoting health and wellbeing across all branches.', link: '/news', icon: '🏥', color: 'rgba(206,147,216,0.12)', keywords: ['wellness', 'medical', 'health', 'staff', '2025'] },
        // Pages
        { id: 'pg1', type: 'pages', title: 'About CCBE', description: 'Our history, vision, mission and branch network.', link: '/about', icon: '🏛️', color: 'rgba(120,144,156,0.12)', keywords: ['about', 'history', 'vision', 'mission', 'cambridge'] },
        { id: 'pg2', type: 'pages', title: 'Contact Us', description: 'Get in touch with any of our 6 branches.', link: '/contact', icon: '📞', color: 'rgba(255,138,101,0.12)', keywords: ['contact', 'phone', 'address', 'branch', 'location'] },
        { id: 'pg3', type: 'pages', title: 'Core Values', description: 'Our commitment to quality education and student success.', link: '/corevalues', icon: '⭐', color: 'rgba(251,183,0,0.12)', keywords: ['core values', 'quality', 'commitment', 'education'] },
        { id: 'pg4', type: 'pages', title: 'News & Events', description: 'Latest events, achievements and happenings at CCBE.', link: '/news', icon: '📰', color: 'rgba(100,181,246,0.12)', keywords: ['news', 'events', 'latest', 'updates'] },
      ]
    };
  },
  computed: {
    filteredResults() {
      if (!this.query.trim()) return [];
      const q = this.query.toLowerCase().trim();
      return this.allContent.filter(item => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some(k => k.includes(q))
        );
      });
    },
    grouped() {
      return {
        programmes: this.filteredResults.filter(r => r.type === 'programmes'),
        news: this.filteredResults.filter(r => r.type === 'news'),
        pages: this.filteredResults.filter(r => r.type === 'pages')
      };
    }
  },
  methods: {
    openSearch() {
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.searchInput?.focus();
      });
      document.body.style.overflow = 'hidden';
    },
    closeSearch() {
      this.isOpen = false;
      this.query = '';
      document.body.style.overflow = '';
    },
    clearSearch() {
      this.query = '';
      this.$refs.searchInput?.focus();
    },
    setQuery(tag) {
      this.query = tag;
      this.performSearch();
      this.$refs.searchInput?.focus();
    },
    performSearch() {
      // reactive — computed handles it
    },
    highlight(text) {
      if (!this.query) return text;
      const escaped = this.query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
    }
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.closeSearch();
      // Ctrl+K or Cmd+K shortcut
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.isOpen ? this.closeSearch() : this.openSearch();
      }
    });
  }
};
</script>

<style scoped>
/* ── Trigger Button ───────────────────────────────── */
.search-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.search-trigger:hover {
  background: rgba(255, 183, 0, 0.15);
  color: #fb0000;
}

/* ── Overlay ──────────────────────────────────────── */
.search-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  z-index: 10000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 80px;
  padding-left: 16px;
  padding-right: 16px;
}

/* ── Modal ────────────────────────────────────────── */
.search-modal {
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 680px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  max-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
}

/* ── Input Area ───────────────────────────────────── */
.search-input-wrapper {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-bottom: 1px solid #f0f0f0;
  gap: 12px;
  flex-shrink: 0;
}

.search-icon {
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  background: transparent;
}

.search-input::placeholder {
  color: #aaa;
}

.clear-btn,
.close-btn {
  background: none;
  border: none;
  font-size: 1rem;
  color: #999;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s, color 0.2s;
}

.close-btn {
  background: #f0f0f0;
  color: #666;
  font-size: 0.85rem;
}

.clear-btn:hover,
.close-btn:hover {
  background: #FF5F15;
  color: white;
}

/* ── Quick Tags ───────────────────────────────────── */
.quick-tags {
  padding: 14px 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}

.tags-label {
  font-size: 0.78rem;
  color: #aaa;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 4px;
}

.quick-tag {
  padding: 5px 14px;
  border-radius: 30px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  font-size: 0.82rem;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Roboto', sans-serif;
}

.quick-tag:hover {
  background: #FBB700;
  border-color: #FBB700;
  color: #fff;
}

/* ── Results ──────────────────────────────────────── */
.search-results {
  overflow-y: auto;
  padding: 12px 0 8px;
  flex: 1;
}

.result-group {
  margin-bottom: 4px;
}

.group-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  padding: 8px 20px 4px;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 20px;
  text-decoration: none;
  color: inherit;
  transition: background 0.15s ease;
  cursor: pointer;
}

.result-item:hover {
  background: #fef9f0;
}

.result-item:hover .result-arrow {
  color: #FF5F15;
  transform: translateX(3px);
}

.result-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
}

.result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.result-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2c3e50;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

:deep(mark) {
  background: rgba(251, 183, 0, 0.3);
  color: inherit;
  border-radius: 2px;
  padding: 0 2px;
}

.result-desc {
  font-size: 0.8rem;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-arrow {
  color: #ccc;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

/* ── No Results ───────────────────────────────────── */
.no-results {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.no-results-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.no-results p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 6px;
}

.no-results span {
  font-size: 0.85rem;
}

/* ── Empty State ──────────────────────────────────── */
.search-empty {
  padding: 16px 20px 20px;
  flex-shrink: 0;
}

.empty-hint {
  font-size: 0.85rem;
  color: #bbb;
  text-align: center;
  margin: 0;
  padding-top: 4px;
}

/* ── Transition ───────────────────────────────────── */
.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.25s ease;
}

.search-fade-enter-active .search-modal,
.search-fade-leave-active .search-modal {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 0.25s ease;
}

.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
}

.search-fade-enter-from .search-modal,
.search-fade-leave-to .search-modal {
  transform: translateY(-20px);
  opacity: 0;
}

/* ── Responsive ───────────────────────────────────── */
@media (max-width: 768px) {
  .search-trigger {
    color: #fff;
  }
  .search-trigger:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #FBB700; 
  }
  .search-overlay {
    padding-top: 60px;
    padding-left: 12px;
    padding-right: 12px;
    align-items: flex-start;
  }

  .search-modal {
    max-height: calc(100vh - 80px);
    border-radius: 16px;
  }

  .search-input {
    font-size: 1rem;
  }
}
</style>
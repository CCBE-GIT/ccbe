<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        News <span class="highlight">& Events</span>
      </h1>
      <br />
      <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>At Cambridge College of British English (CCBE)</b>, we are constantly evolving to offer our students the best learning experiences. Our upcoming events include language workshops, cultural exchange programs, and exciting new course launches designed to meet the needs of learners of all ages. Whether you're interested in expanding your vocabulary, improving your accent, or exploring advanced language techniques, our events offer unique opportunities for growth. Stay tuned for announcements on our seasonal events, student achievements, and exciting collaborations with language experts. At CCBE, every moment is a chance to learn, connect, and celebrate the joy of mastering English.
      </p>
      <br />

      <!-- ══════════ MARQUEE: Recent Moments ══════════ -->
      <section
        v-if="marqueeItems.length"
        class="ne-mq"
        aria-labelledby="ne-mq-heading"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div class="ne-mq-head">
          <div class="ne-mq-head-text">
            <h2 id="ne-mq-heading" class="ne-mq-title">
              Recent <span class="ne-mq-accent">Moments</span>
            </h2>
            <p class="ne-mq-sub">
              A quick look at our latest news and events. Hover to pause, click a card to read the full story.
            </p>
          </div>

          <button
            type="button"
            class="ne-mq-toggle"
            :aria-pressed="marqueePaused"
            :aria-label="marqueePaused ? 'Play slider' : 'Pause slider'"
            @click="marqueePaused = !marqueePaused"
          >
            <span class="ne-mq-toggle-icon" aria-hidden="true">
              <i v-if="!marqueePaused" class="ne-mq-bar"></i>
              <i v-if="!marqueePaused" class="ne-mq-bar"></i>
              <i v-if="marqueePaused" class="ne-mq-play"></i>
            </span>
            {{ marqueePaused ? 'Play' : 'Pause' }}
          </button>
        </div>

        <div class="ne-mq-marquee" :class="{ 'is-paused': marqueePaused }">
          <div class="ne-mq-track" :style="{ animationDuration: marqueeDuration + 's' }">
            <button
              v-for="(item, i) in marqueeLoop"
              :key="'mq-' + i"
              type="button"
              class="ne-mq-card"
              :aria-hidden="i >= marqueeItems.length ? 'true' : null"
              :tabindex="i >= marqueeItems.length ? -1 : null"
              :aria-label="i >= marqueeItems.length ? null : 'Read more: ' + item.title"
              @click="openFromMarquee(item.index)"
            >
              <img
                :src="item.image"
                :alt="i >= marqueeItems.length ? '' : item.title"
                loading="lazy"
                class="ne-mq-img"
              />
              <span class="ne-mq-overlay">
                <span class="ne-mq-card-title">{{ item.title }}</span>
                <span class="ne-mq-card-sub">{{ item.subtitle }}</span>
                <span class="ne-mq-card-more">Read more</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <div class="cards-grid">
        <!-- Loop through the cards array -->
        <div v-for="(card, index) in cards" :key="index" :id="'news-card-' + index" class="card-col">
          <div class="card">
            <div class="card-media">
              <img :src="card.image" class="card-image" alt="News & Events image">
              <span v-if="card.link" class="card-badge">▶ Video</span>
            </div>
            
            <div class="card-title">{{ card.title }}</div>
            
            <div class="card-subtitle">{{ card.subtitle }}</div>
            
            <div class="card-actions">
              <div class="spacer"></div>
              
              <button
                class="toggle-btn"
                :aria-expanded="card.show ? 'true' : 'false'"
                @click="toggleCard(index)"
              >
                <span class="toggle-label">{{ card.show ? 'Show less' : 'Read more' }}</span>
                <span class="icon">{{ card.show ? '▲' : '▼' }}</span>
              </button>
            </div>

            <div class="expand-transition" :style="{ maxHeight: card.show ? '1200px' : '0' }">
              <div class="divider"></div>
              
              <div class="card-content">
                {{ card.content }}
                <a v-if="card.link" :href="card.link" target="_blank" rel="noopener noreferrer" class="card-link">▶ Watch here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <!-- <a href="/news" class="qnl">News & Events</a> -->
          <a href="/corevalues" class="qnl">Core Values</a>
        </div>
      </div>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue'
import ArrowButton from './ArrowButton.vue';

export default {
  name: 'NewsEventPage',
  components: {
    NavBar,
    FooterPage,
    ChatBot,
    ArrowButton
  },
  data() {
    return {
      // Marquee pause state
      marqueePaused: false,

      // Array of card data
      cards: [
              {
          image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Cover%20Song/Cover3.jpeg",
          title: "♪ පැන මඩ කඩිති | Official Cover Song by CCBE Students",
          subtitle: "Teachers’ Day Special Gift from CCBE 2026",
          content: "ජීවිතයට දැනුම පමණක් නොව, නිවැරදි මඟ පෙන්වා දෙමින්  ආදරණීය දුවා දරුවන්ගේ හෙට දවස ලස්සන කරන ආදරණීය ගුරුවරුන් වෙනුවෙන්... ❤️",
          link: "https://youtu.be/XQeUIyJXFgc?si=yM6y7siukLDePVsk",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/CCBE%20ONE%20Opening/0.1.jpg",
          title: "CCBE ONE - Grand Opening",
          subtitle: "Experience the Pulse of Cambrians !!",
          content: "The grand opening of CCBE One on 20th July 2026 marked the beginning of an exciting new journey for the CCBE family. From inspiring moments to unforgettable celebrations, this milestone reflects our commitment to excellence, innovation, and empowering future generations.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/Husma%20Project%202026/3.jpeg",
          title: "🌿 Husma Fruit Plant Dansal 2026",
          subtitle: "Thank You for Being a Part of the Husma Project 2026",
          content: "CCBE & CCIT are proud to distribute 6,000 medicinal plants free of charge across our branches for the third consecutive year. Through this initiative, we aim to inspire communities to protect nature, promote sustainability, and contribute to a greener Sri Lanka. Together, let's plant today for a healthier tomorrow.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/Cambridge%20Awards%20-%202026/7.jpeg",
          title: "Cambridge Awards 2026",
          subtitle: "Celebrating Outstanding Achievements of CCBE Students",
          content: "Nearly 1,000 students who successfully completed Cambridge English Qualifications from Pre A1 Starters to C2 Proficiency were recognized and celebrated for their outstanding achievements.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Cover%20Song/1000479548.jpg",
          title: "♪ දෙපිය නගලා... | Official Cover Song by CCBE Students",
          subtitle: "Celebrating the Father's Day 2026",
          content: "For the silent love of a father who makes a lot of sacrifices but never shows it to his children, CCBE presents to you, දෙපිය නගලා..!!, a song sung by our own children. ",
          link: "https://youtu.be/AC1pIXhzwcE?si=p8uRQGfczIaTPcz-",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/CCBE%20-%20Cover%20Song/Cover%20Song.jpeg",
          title: "♪ අම්මේ, මං නුඹට ආදරෙයි... | Official Cover Song by CCBE Students",
          subtitle: "Celebrating the Mother's Day 2026",
          content: "For the never-ending, silent love of a mother, CCBE presents to you, අම්මේ, මං නුඹට ආදරෙයි..!!, a song sung by our own children.",
          link: "https://youtu.be/Cp0hjgMYsdI",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/New%20Year/Aurudu%20Kumara%20-%20Kumariya.jpeg",
          title: "CCBE Digital Sigithi Awurudu Kumara & Kumariya 2026",
          subtitle: "Prize Giving Ceremony",
          content: "The prize giving ceremony of the CCBE Digital Sigithi Awurudu Kumara and Kumari Competition 2026 was successfully held, celebrating the joy and traditions of the Sinhala & Tamil New Year.During the ceremony, prizes were presented to the little stars who participated in this wonderful celebration,along with scholarship vouchers for their next Cambridge Level course, encouraging and supporting their continued learning journey.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/NE8.jpeg",
          title: "INTERNATIONAL WOMEN'S DAY 2026",
          subtitle: "International Women’s Day 2026 was celebrated at CCBE",
          content: "International Women’s Day 2026 was proudly celebrated at CCBE, honoring the strength, achievements, and inspiration of women everywhere. The occasion highlighted our commitment to empowering women through education, opportunity, and a supportive learning environment that encourages growth and success.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/WOMENS%20DAY%202026/post%203.jpeg",
          title: "INTERNATIONAL WOMEN'S DAY 2026",
          subtitle: "International Women’s Day 2026 was celebrated at CCBE",
          content: "International Women’s Day 2026 was proudly celebrated at CCBE, honoring the strength, achievements, and inspiration of women everywhere. The occasion highlighted our commitment to empowering women through education, opportunity, and a supportive learning environment that encourages growth and success.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/NE7.jpeg",
          title: "INTERNATIONAL WOMEN'S DAY 2026",
          subtitle: "International Women’s Day 2026 was celebrated at CCBE",
          content: "International Women’s Day 2026 was proudly celebrated at CCBE, honoring the strength, achievements, and inspiration of women everywhere. The occasion highlighted our commitment to empowering women through education, opportunity, and a supportive learning environment that encourages growth and success.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/kp5tixhur/Galduwa%202026/WhatsApp%20Image%202026-04-20%20at%2011.57.24%20AM.jpeg",
          title: "Galdoowa Buddhist Monastery Program 2026",
          subtitle: "A Day of Meritorious Deeds & Unity",
          content: "On this Madin Full Moon Poya Day, the staff and management of CCBE and CCIT came together to successfully organize our 2nd consecutive Charity Program at Kalyana Yogashramaya. \n\n Together, we were honored to conduct: \n ◾ Sathbudu Wandanawa Bodhi Poojawa \n ◾ Heel Daane (Breakfast) and Dahawal Daane (Lunch) offered to 50 venerable monks \n ◾ Meals and refreshments for over 750 Sil observers \n\n This meaningful initiative was made possible through the dedication, generosity, and collective effort of our team. \n A heartfelt thank you to everyone who contributed their time, support, and kindness to make this meritorious event a success.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/NE1.jpeg",
          title: "CAMBRIANS DAY 2026",
          subtitle: "Celebrating Unity, Talent & the Spirit of Cambrians",
          content: " Cambrians Day 2026 was a vibrant celebration that brought together staff members from all branches to honor the true spirit of being a Cambrian. The day was filled with engaging activities, inspiring moments, and unforgettable memories that strengthened our sense of unity and teamwork. This event highlighted the strong bond and collaboration that connects the entire CCBE staff community. Thank you to everyone who contributed to making Cambrians Day 2026 a meaningful and joyful celebration. Together, we continue to grow stronger as one team.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/NE2.jpeg",
          title: "Staff Wellness & Medical Screening Program 2025",
          subtitle: "Caring for Our Team, Building a Healthier CCBE",
          content: "The Staff Wellness & Medical Screening Program 2025 was organized to promote the health and well-being of our dedicated staff members across all branches. This initiative aimed to encourage a healthier lifestyle and early detection of health concerns. At CCBE, we believe that a strong institution begins with a healthy team. We extend our sincere appreciation to all medical professionals and staff who took part in making this program a meaningful step towards a healthier and happier working environment.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/NE3.jpeg",
          title: "Cambrians Fit to Fight 2025",
          subtitle: "Standing Together to Support Flood-Affected Communities",
          content: "Cambrians Fit to Fight 2025 was a meaningful humanitarian initiative organized by CCBE and CCIT to support families affected by recent floods. Through collective effort and compassion, our Cambrians community: including students, parents, and all staff members from every branch came together to provide essential aid and extend a helping hand to those facing difficult times. This project reflects our commitment to social responsibility and the power of unity in moments of need. We sincerely thank everyone who contributed their time, effort, and support to make this initiative a success. Together, we stand strong with our communities.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/NE5.jpeg",
          title: "කංචුක පූජාව, කිරිපිඬු දානය හා අෂ්ඨපාන පූජාව 2025",
          subtitle: "ස්වර්ණමාලි මහා සෑය – අනුරාධපුරය",
          content: " 2025 වසරේදී අනුරාධපුර ශ්‍රී ස්වර්ණමාලි මහා සෑය වෙත කංචුක පූජාව, කිරිපිඬු දානය සහ අෂ්ඨපාන පූජාව භක්තිසම්පන්නව පැවැත්වුණි.",
          show: false,
        },
        // {
        //   image: "https://ik.imagekit.io/u3wbiya66/News&Events/WhatsApp%20Image%202025-06-08%20at%2010.12.15_fb599a49.jpg?updatedAt=1749452636230",
        //   title: "🌿 Husma Fruit Plant Dansal 2025",
        //   subtitle: "Thank You for Being a Part of the Husma Project 2025",
        //   content: "The Husma Project, first launched by our CCBE Galle branch in 2024 with just 500 plants, has grown into a beautiful island-wide movement. In 2025, thanks to the amazing support from all our branches, the project has flourished reaching 5,000 plants across the country. This initiative reflects our shared commitment to a greener tomorrow and the strength of working together as one. Thank you for being a part of this journey. Together, we breathe life into the future.",
        //   show: false,
        // },
        {
          image: "https://ik.imagekit.io/u3wbiya66/_MG_9895.jpg?updatedAt=1745842133941",
          title: "Cambrians Awrudu Udanaya",
          subtitle: "The Cambrians Awurudu Udanaya 2025",
          content: "A vibrant day filled with traditional games, colorful festivities, cultural performances, and joyful togetherness awaits. Let's come together to honor our rich heritage and create unforgettable memories.",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/481082092_601994946155124_2299747182221281091_n.jpg?updatedAt=1745841751881",
          title: "MasterChef Kitchen in Action!",
          subtitle: "Culinary Creations, Teamwork, and Speaking Skills",
          content: "MasterChef Kitchen in Action! 👨‍🍳🍴\n\nOur talented students stepped into the spotlight to showcase their favorite meals in an exciting culinary event! This wasn't just about cooking—it was an opportunity to blend creativity, teamwork, and communication skills.\n\nFrom sharing their unique recipes to presenting their culinary masterpieces with confidence, the event was a flavorful journey of learning, collaboration, and fun. Students worked together seamlessly, demonstrating their ability to combine flavors and ideas while honing their public speaking skills.\n\nIt was inspiring to witness their passion, teamwork, and creativity come to life in the kitchen. Here's to more delicious moments and skill-building adventures in the future!\n\nStay tuned for highlights, photos, and recipes from this vibrant event! 🌟✨",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/IMG_6630.JPG?updatedAt=1745842202604",
          title: "Welcoming 2025 with Warmth and Positivity",
          subtitle: "A Heartfelt New Year Celebration Marking New Beginnings",
          content: "✨ As we step into 2025, our Galle branch hosted a celebration that radiated warmth and positivity. The event was more than just a New Year gathering—it was a heartfelt occasion filled with joy, reflection, and a shared vision for the year ahead. 🌟\n\nThe team came together to embrace the opportunities and challenges that 2025 will bring. With a sense of unity and optimism, we reflected on the accomplishments of the past year while setting our sights on continued growth and success. This celebration was a reminder of the strong bonds that connect us, and the meaningful impact we aim to make as we move forward, together.\n\nHere's to embracing new opportunities, pursuing excellence, and creating a year filled with meaningful moments. Cheers to a fantastic 2025! 🌱",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/FB_IMG_1738984651465.jpg?updatedAt=1738985253696",
          "title": "Spreading Festive Cheer with a Secret Santa Celebration",
          "subtitle": "A Joyful Day of Togetherness at Cambridge College of British English",
          "content": "🎅✨ We brought the festive cheer to Cambridge College of British English with a delightful Secret Santa celebration! 🎁❤️ Our team shared laughter, exchanged thoughtful gifts, and created heartwarming memories that truly captured the spirit of togetherness. \n\nIt was a day filled with joy, surprises, and the magic of giving! 🎄🎉",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/FB_IMG_1738984743534.jpg?updatedAt=1738985253864",
          "title": "Throwback to Unforgettable Moments from Our Annual Trip",
          "subtitle": "Breathtaking Views, Adventures, and Team Bonding",
          "content": "Throwback to the unforgettable moments from our annual trip! 🌟 From breathtaking views and laughter-filled adventures to team bonding and endless joy, every memory is a treasure we'll cherish forever. \n\nHere's to more journeys, stronger connections, and creating magic together! 🏞️✨",
          show: false,
        },
        // {
        //   image: "https://ik.imagekit.io/u3wbiya66/News&Events/FB_IMG_1738984882674.jpg?updatedAt=1738985253221",
        //   "title": "Celebrating Success at Cambridge College of British English",
        //   "subtitle": "Congratulations to Our Students on Achieving A2 Flyers Level!",
        //   "content": "🎉 Exciting News from Cambridge College of British English 📚\n\nA big congratulations to our incredible students for achieving the Cambridge English Assessment A2 Flyers Level! 🏆✨ Your hard work and dedication continue to inspire us every day. This milestone is just the beginning of your amazing language-learning journey! 🌟🙌\n\nKeep aiming high and chasing your dreams! 🚀✨",
        //   show: false,
        // },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/FB_IMG_1738984825665.jpg?updatedAt=1738985254002",
          title: "Fit to Fight 2025",
          subtitle: "Our 9th Annual Event a Huge Success!",
          content: "Heartfelt thanks to everyone who contributed to and supported our 9th annual Fit to Fight event! Your unwavering generosity and dedication have once again demonstrated the power of community and compassion.\n\nThis year's event was a remarkable success, with participants, sponsors, and volunteers coming together to support a noble cause. The funds raised during this event will directly benefit the Cancer Hospital in Karapitiya, providing vital resources for patients and their families.\n\nTogether, we have shown that strength lies in unity, and with your support, we have made a meaningful difference in the lives of those who need it most.\n\nThank you for being a part of this incredible journey. Here's to continuing the fight and spreading hope, one step at a time!\n\nStay tuned for updates, photos, and highlights from the event!",
          show: false,
        },
      ],
    };
  },
  computed: {
    // Marquee shows the latest 12 stories. Change 12 to show more or fewer.
    marqueeItems() {
      return this.cards
        .map((card, index) => ({
          index,
          image: card.image,
          title: card.title,
          subtitle: card.subtitle,
        }))
        .slice(0, 12);
    },
    // List doubled so the loop is seamless
    marqueeLoop() {
      return [...this.marqueeItems, ...this.marqueeItems];
    },
    // Higher number = slower scroll
    marqueeDuration() {
      return Math.max(40, this.marqueeItems.length * 6);
    },
  },
  methods: {
    toggleCard(index) {
      this.cards[index].show = !this.cards[index].show;
    },
    exploreCard(card) {
      alert(`Exploring: ${card.title}`);
    },
    // Marquee click: open that story's card and scroll to it
    openFromMarquee(index) {
      this.cards[index].show = true;
      this.$nextTick(() => {
        const el = document.getElementById('news-card-' + index);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    },
  },
  mounted() {
    AOS.init();
  }
};
</script>

<style scoped>
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 80px;
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #FBB700;
  text-transform: uppercase;
  margin-top: 40px;
}

.highlight {
  color: #FF5F15;
}

.paragraph {
  font-family: "Roboto", sans-serif;
  font-weight: 14px;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  line-height: 1.6;
  color: #333;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 40px 0;
  align-items: start;
}

.card-col {
  width: 100%;
  /* keeps the card clear of the sticky navbar when the marquee scrolls to it */
  scroll-margin-top: 110px;
}

.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  white-space: normal;
  line-height: 1.4;
  text-align: center;
  padding: 16px 16px 8px;
  color: #333;
}

.card-subtitle {
  font-size: 1rem;
  font-weight: 500;
  white-space: normal;
  line-height: 1.4;
  color: #555;
  text-align: center;
  padding: 0 16px 16px;
}

.card-actions {
  padding: 8px 16px;
  display: flex;
  align-items: center;
}

.card-link {
  display: inline-block;
  margin-top: 8px;
  color: #FF5F15;
  font-weight: 600;
  text-decoration: none;
}

.card-link:hover {
  text-decoration: underline;
}

.spacer {
  flex: 1;
}

.toggle-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 1.5rem;
  color: #666;
  line-height: 1;
}

.expand-transition {
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.divider {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
  margin: 0 16px;
}

.card-content {
  padding: 16px;
  font-family: "Roboto", sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  white-space: pre-line;
}

/* ══ MARQUEE: Recent Moments (soft, eye-comfortable palette) ══
   butter #FFF3D6 / sand #FCE7B2 / amber #F4B942 / apricot #F2935A
   rust #B4561C / charcoal #3A332E / muted #6B6159            */
.ne-mq {
  position: relative;
  overflow: hidden;
  margin: 0 0 24px;
  padding: 36px 0 22px;
  background: linear-gradient(135deg, #fff3d6 0%, #fce7b2 100%);
  border: 1px solid #f3dda0;
  border-radius: 24px;
  box-shadow: 0 10px 28px rgba(58, 51, 46, 0.08);
}

.ne-mq-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding: 0 max(20px, 3vw);
  margin-bottom: 18px;
}
.ne-mq-title {
  margin: 0 0 6px;
  font-family: 'Roboto', sans-serif;
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
  font-weight: 800;
  line-height: 1.2;
  color: #3A332E;
  text-align: left;
}
.ne-mq-accent { color: #B4561C; }
.ne-mq-sub {
  margin: 0;
  max-width: 58ch;
  font-size: 0.95rem;
  line-height: 1.55;
  color: #6B6159;
}

.ne-mq-toggle {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
  padding: 9px 20px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #3A332E;
  background: #FFFDF8;
  border: 1.5px solid #F3DDA0;
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.25s ease, background-color 0.25s ease;
}
.ne-mq-toggle:hover { border-color: #F2935A; }
.ne-mq-toggle:focus-visible,
.ne-mq-card:focus-visible {
  outline: 3px solid #F2935A;
  outline-offset: 3px;
}
.ne-mq-toggle-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  width: 14px;
  height: 14px;
}
.ne-mq-bar {
  display: block;
  width: 4px;
  height: 14px;
  background: #B4561C;
  border-radius: 1px;
}
.ne-mq-play {
  display: block;
  width: 0;
  height: 0;
  margin-left: 3px;
  border-left: 12px solid #B4561C;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
}

/* Moving strip */
.ne-mq-marquee {
  position: relative;
  overflow: hidden;
  padding: 10px 0 14px;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
}
.ne-mq-track {
  display: flex;
  align-items: stretch;
  width: max-content;
  will-change: transform;
  animation: ne-mq-scroll 90s linear infinite;
}
.ne-mq-marquee:hover .ne-mq-track,
.ne-mq-marquee:focus-within .ne-mq-track,
.ne-mq-marquee.is-paused .ne-mq-track {
  animation-play-state: paused;
}
@keyframes ne-mq-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* Cards */
.ne-mq-card {
  position: relative;
  flex: 0 0 clamp(220px, 21vw, 280px);
  height: clamp(190px, 17vw, 230px);
  margin: 0 16px 0 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 18px;
  background: #E9DFD2;
  box-shadow: 0 8px 20px rgba(58, 51, 46, 0.18);
  cursor: pointer;
  text-align: left;
  font: inherit;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.ne-mq-card:hover,
.ne-mq-card:focus-visible {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(242, 147, 90, 0.32);
}
.ne-mq-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}
.ne-mq-card:hover .ne-mq-img,
.ne-mq-card:focus-visible .ne-mq-img { transform: scale(1.07); }

.ne-mq-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 3px;
  padding: 14px 14px 12px;
  background: linear-gradient(to top, rgba(58, 51, 46, 0.88) 0%, rgba(58, 51, 46, 0.45) 45%, transparent 75%);
}
.ne-mq-card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.3;
  color: #FFFFFF;
}
.ne-mq-card-sub {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.78rem;
  color: #F3E8D8;
}
.ne-mq-card-more {
  align-self: flex-start;
  margin-top: 4px;
  padding: 3px 12px;
  font-size: 0.74rem;
  font-weight: 700;
  color: #3A332E;
  background: #F4B942;
  border-radius: 999px;
  transition: background-color 0.25s ease;
}
.ne-mq-card:hover .ne-mq-card-more { background: #F2935A; }

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

/* Responsive Design */
@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 12px;
    padding-top: 60px;
  }
  
  .title {
    font-size: 1.8rem;
    margin-top: 30px;
  }
  
  .paragraph {
    font-size: 18px;
  }
  
  .card-image {
    height: 300px;
  }

  .ne-mq { padding: 28px 0 16px; border-radius: 18px; }
  .ne-mq-head { flex-direction: column; align-items: flex-start; }
  .ne-mq-card { margin-right: 12px; border-radius: 14px; }
}

@media (max-width: 480px) {
  .container {
    padding: 0 8px;
    padding-top: 50px;
  }
  
  .title {
    font-size: 1.6rem;
    margin-top: 20px;
  }
  
  .paragraph {
    font-size: 16px;
  }
  
  .card-image {
    height: 250px;
  }
  
  .card-title {
    font-size: 1.1rem;
    padding: 12px 12px 6px;
  }
  
  .card-subtitle {
    font-size: 0.9rem;
    padding: 0 12px 12px;
  }
  
  .card-content {
    padding: 12px;
    font-size: 0.9rem;
  }
}

/* ══ NEWS CARDS: soft card design ══
   butter #FFF3D6 / amber #F4B942 / apricot #F2935A / rust #B4561C / charcoal #3A332E */
.cards-grid { gap: 28px; }

.card {
  background: #FFFDF8;
  border: 1px solid #F6E4B0;
  border-radius: 20px;
  box-shadow: 0 8px 22px rgba(58, 51, 46, 0.08);
}
.card:hover {
  transform: translateY(-6px);
  border-color: #F2935A;
  box-shadow: 0 16px 32px rgba(242, 147, 90, 0.22);
}

/* Same photo shape on every card */
.card-media {
  position: relative;
  overflow: hidden;
  background: #E9DFD2;
}
.card-image {
  height: auto;
  aspect-ratio: 4 / 3;
  transition: transform 0.6s ease;
}
.card:hover .card-image { transform: scale(1.05); }

.card-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 12px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #3A332E;
  background: #F4B942;
  border-radius: 999px;
  box-shadow: 0 3px 8px rgba(58, 51, 46, 0.25);
}

/* Left-aligned text, with room for two lines so cards line up in a row */
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(2.7em + 22px);
  padding: 16px 18px 6px;
  font-size: 1.05rem;
  line-height: 1.35;
  text-align: left;
  color: #3A332E;
}
.card-subtitle {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(2.9em + 8px);
  padding: 0 18px 8px;
  font-size: 0.92rem;
  font-weight: 500;
  line-height: 1.45;
  text-align: left;
  color: #6B6159;
}

/* Read more button */
.card-actions {
  padding: 6px 18px 16px;
  justify-content: flex-start;
}
.card-actions .spacer { display: none; }
.toggle-btn {
  gap: 8px;
  padding: 8px 18px;
  font: 600 0.85rem 'Roboto', sans-serif;
  color: #B4561C;
  background: #FFF3D6;
  border: 1px solid #F3DDA0;
  border-radius: 999px;
  transition: background-color 0.25s ease, color 0.25s ease;
}
.toggle-btn:hover {
  color: #3A332E;
  background: #F4B942;
}
.toggle-btn:focus-visible {
  outline: 3px solid #F2935A;
  outline-offset: 3px;
}
.toggle-btn .icon {
  font-size: 0.7rem;
  color: inherit;
}

/* Expanded story */
.divider { display: none; }
.card-content {
  margin: 0 18px 18px;
  padding: 14px 16px;
  font-size: 0.93rem;
  line-height: 1.65;
  color: #3A332E;
  background: #FFF8E6;
  border-left: 4px solid #F4B942;
  border-radius: 0 12px 12px 0;
}
.card-link { color: #B4561C; }

/* Respect "reduce motion": stop the animation and let people scroll by hand */
@media (prefers-reduced-motion: reduce) {
  .ne-mq-track { animation: none; }
  .ne-mq-marquee { overflow-x: auto; }
  .ne-mq-card,
  .ne-mq-img { transition: none; }
  .ne-mq-card:hover,
  .ne-mq-card:hover .ne-mq-img { transform: none; }
}
</style>
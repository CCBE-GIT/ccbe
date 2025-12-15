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

      <div class="cards-grid">
        <!-- Loop through the cards array -->
        <div v-for="(card, index) in cards" :key="index" class="card-col">
          <div class="card">
            <img :src="card.image" class="card-image" alt="News & Events image">
            
            <div class="card-title">{{ card.title }}</div>
            
            <div class="card-subtitle">{{ card.subtitle }}</div>
            
            <div class="card-actions">
              <div class="spacer"></div>
              
              <button class="toggle-btn" @click="toggleCard(index)">
                <span v-if="card.show" class="icon">▲</span>
                <span v-else class="icon">▼</span>
              </button>
            </div>

            <div class="expand-transition" :style="{ maxHeight: card.show ? '500px' : '0' }">
              <div class="divider"></div>
              
              <div class="card-content">{{ card.content }}</div>
            </div>
          </div>
        </div>
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
      // Array of card data
      cards: [
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/WhatsApp%20Image%202025-06-08%20at%2010.12.15_fb599a49.jpg?updatedAt=1749452636230",
          title: "🌿 Husma Fluit Plant Dansal 2025",
          subtitle: "Thank You for Being a Part of the Husma Project 2025",
          content: "The Husma Project, first launched by our CCBE Galle branch in 2024 with just 500 plants, has grown into a beautiful island-wide movement. In 2025, thanks to the amazing support from all our branches, the project has flourished reaching 5,000 plants across the country. This initiative reflects our shared commitment to a greener tomorrow and the strength of working together as one. Thank you for being a part of this journey. Together, we breathe life into the future.",
          show: false,
        },
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
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/FB_IMG_1738984882674.jpg?updatedAt=1738985253221",
          "title": "Celebrating Success at Cambridge College of British English",
          "subtitle": "Congratulations to Our Students on Achieving A2 Flyers Level!",
          "content": "🎉 Exciting News from Cambridge College of British English 📚\n\nA big congratulations to our incredible students for achieving the Cambridge English Assessment A2 Flyers Level! 🏆✨ Your hard work and dedication continue to inspire us every day. This milestone is just the beginning of your amazing language-learning journey! 🌟🙌\n\nKeep aiming high and chasing your dreams! 🚀✨",
          show: false,
        },
        {
          image: "https://ik.imagekit.io/u3wbiya66/News&Events/FB_IMG_1738984825665.jpg?updatedAt=1738985254002",
          title: "Fit to Fight 2024",
          subtitle: "Our 9th Annual Event a Huge Success!",
          content: "Heartfelt thanks to everyone who contributed to and supported our 9th annual Fit to Fight event! Your unwavering generosity and dedication have once again demonstrated the power of community and compassion.\n\nThis year's event was a remarkable success, with participants, sponsors, and volunteers coming together to support a noble cause. The funds raised during this event will directly benefit the Cancer Hospital in Karapitiya, providing vital resources for patients and their families.\n\nTogether, we have shown that strength lies in unity, and with your support, we have made a meaningful difference in the lives of those who need it most.\n\nThank you for being a part of this incredible journey. Here's to continuing the fight and spreading hope, one step at a time!\n\nStay tuned for updates, photos, and highlights from the event!",
          show: false,
        },
      ],
    };
  },
  methods: {
    toggleCard(index) {
      this.cards[index].show = !this.cards[index].show;
    },
    exploreCard(card) {
      alert(`Exploring: ${card.title}`);
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
}

.card-col {
  width: 100%;
}

.card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
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
</style>
<template>
  <div>
    <NavBar />
    
    <v-container>
      <div>
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
          OUR <span class="highlight">CORE VALUES</span>
        </h1>

        <h4 class="mt-2 text-center" data-aos="fade-up" data-aos-duration="2000">
          At the heart of our institution lie the following core values, each meticulously cultivated to foster an
          environment of academic excellence.
        </h4>

        <v-row justify="center" class="mt-5" data-aos="fade-up" data-aos-duration="3000">
          <v-col 
            v-for="(value, index) in coreValues" 
            :key="index" 
            cols="12" 
            md="6" 
            lg="4"
            :class="{ 'zigzag-right': index % 2 === 1, 'zigzag-left': index % 2 === 0 }"
          >
            <v-hover v-slot="{ isHovering, props }">
              <v-card 
                class="mx-auto" 
                color="grey-lighten-4" 
                max-width="500" 
                v-bind="props"
              >
                <v-img 
                  :aspect-ratio="16/9" 
                  :src="value.image" 
                  cover
                >
                  <v-expand-transition>
                    <div 
                      v-if="isHovering"
                      class="d-flex transition-fast-in-fast-out bg-yellow-darken-2 v-card--reveal text-h6 text-white"
                      style="height: 100%;"
                    >
                      <div class="pa-4">
                        {{ value.description }}
                      </div>
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-6">
                  <h3 class="text-h5 font-weight-bold text-brown-darken-4 mb-2">
                    {{ value.title }}
                  </h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-container>
    
    <ArrowButton />
    <ChatBot />
    <FooterPage />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavBar from './NavBar.vue'
import FooterPage from './FooterPage.vue'
import ChatBot from './ChatBot.vue'
import ArrowButton from './ArrowButton.vue'

// Import local images
import cv1 from '@/assets/coreValues/CV1.jpg'
import cv2 from '@/assets/coreValues/CV2.jpg'
import cv3 from '@/assets/coreValues/CV3.jpg'
import cv4 from '@/assets/coreValues/CV4.jpg'
import cv5 from '@/assets/coreValues/CV5.jpg'
import cv6 from '@/assets/coreValues/CV6.jpg'
import cv8 from '@/assets/coreValues/CV8.jpg'

const coreValues = ref([
  {
    image: cv1,
    title: 'State-of-the-Art Facilitated Classrooms',
    description: 'Our commitment to providing a conducive learning atmosphere is reflected in our state-of-the-art classrooms equipped with cutting-edge technology and resources.'
  },
  {
    image: cv2,
    title: 'Highly Qualified Lecture Panel',
    description: 'We take pride in our team of exceptionally qualified educators who bring extensive expertise to the classroom, ensuring a robust and enriching learning experience for our students.'
  },
  {
    image: cv3,
    title: 'Parent and Student Supportive Administrative Panel',
    description: 'Our administrative team is dedicated to fostering strong partnerships with parents and students, offering unwavering support and guidance throughout their educational journey.'
  },
  {
    image: cv4,
    title: 'Monthly Evaluation of Student Skills',
    description: 'To track and enhance student progress, we conduct comprehensive evaluations of their skills on a monthly basis, enabling personalized development plans.'
  },
  {
    image: cv5,
    title: 'Continuous Quality Audit',
    description: 'We adhere to a rigorous system of continuous quality audits, reinforcing our commitment to maintaining the highest standards of education and service delivery.'
  },
  {
    image: cv6,
    title: 'Student-Centric Classroom Environment',
    description: 'Our classrooms are designed to be student-centric, with a focus on developing the four essential skills, ensuring a holistic approach to education.'
  },
  {
    image: "https://ik.imagekit.io/u3wbiya66/CV7.jpg?updatedAt=1737780608594",
    title: 'Excellent Student Results',
    description: 'Our dedication to academic excellence is evidenced by the consistently outstanding results achieved by our students in various assessments and examinations.'
  },
  {
    image: cv8,
    title: 'Child Safeguarding, First Aid Training, and Fire Safety',
    description: 'We prioritize the safety and well-being of our students through the implementation of robust child safeguarding processes, a staff trained in first aid, and stringent fire safety measures to create a secure learning environment.'
  }
])

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
.title {
  font-family: 'Roboto', sans-serif;
  color: #FBB700;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3px;
  font-size: 2.5rem;
}

.highlight {
  color: #FF5F15;
}

h4 {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
  display: flex;
}

.zigzag-left {
  margin-top: 20px;
}

.zigzag-right {
  margin-top: 60px;
}

/* Card hover effects */
.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.v-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
}

.v-img {
  transition: transform 0.5s ease;
}

.v-card:hover .v-img:not(:has(.v-card--reveal)) {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .zigzag-left,
  .zigzag-right {
    margin-top: 20px;
  }
  
  .title {
    font-size: 2rem;
  }
  
  h4 {
    font-size: 1.1rem;
    padding: 0 0.5rem;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 1.8rem;
  }
  
  h4 {
    font-size: 1rem;
  }
  
  :deep(.text-h5) {
    font-size: 1.1rem !important;
  }
  
  :deep(.v-card--reveal .text-h6) {
    font-size: 0.9rem !important;
  }
}

/* Ensure proper image display */
:deep(.v-img__img) {
  object-fit: cover;
}

/* Card text styling */
:deep(.v-card-text) {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}

:deep(.text-brown-darken-4) {
  color: #4e342e !important;
  min-height: 60px;
  display: flex;
  align-items: center;
}
</style>
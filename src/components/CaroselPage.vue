<template>
    <div class="parallax-carousel-container">

      <div class="snowflakes">
        <div 
          v-for="i in 50" 
          :key="i" 
          class="snowflake" 
          :style="generateSnowflakeStyle(i)"
        ></div>
      </div>

      <div class="up-floating-images">
        <div 
          v-for="i in 20" 
          :key="'up' + i" 
          class="floating-up" 
          :style="generateUpImageStyle(i)"
        ></div>
      </div>
  
      <v-carousel v-if="items.length" cycle interval="10000" data-aos="zoom-in" data-aos-duration="2000" height="500" show-arrows="hover" hide-delimiter-background>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <div class="parallax-item" :style="{ backgroundImage: `url(${item.src})` }">
            <div class="parallax-overlay">
              <h2 class="carousel-title">{{ item.title }}</h2>
              <p class="carousel-subtitle">{{ item.subtitle }}</p>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        snowflakeImages: [
          
        ],
        upImages: [
          require('@/assets/festivel/vesak-1.png'),
          require('@/assets/festivel/vesak-2.png'),
        ],
      };
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        this.items = [
          {
            src: "https://ik.imagekit.io/a56urydbh7/PXL_202.jpg?updatedAt=1743228744356",
            title: "Our Recognition",
            subtitle: "Celebrating Excellence Through the Years.",
          },
          {
            src: "https://ik.imagekit.io/u3wbiya66/2.jpg?updatedAt=1737779121377",
            title: "Students Centric Classroom Environment",
            subtitle: "Empowering Active Participation and Engagement.",
          },
          {
            src: "https://ik.imagekit.io/u3wbiya66/3.jpg?updatedAt=1737779167089",
            title: "Individual Attention with Safeguarding Environment",
            subtitle: "Personalized Support in a Safe Space.",
          },
          {
            src: "https://ik.imagekit.io/u3wbiya66/6.jpg?updatedAt=1737779168033",
            title: "Personalized Support in a Safe Space",
            subtitle: "Empowering Confidence and Leadership.",
          },
          {
            src: "https://ik.imagekit.io/u3wbiya66/7.jpg?updatedAt=1737779166430",
            title: "Innovative Learning Experiences",
            subtitle: "Blending Technology and Teaching for Growth.",
          },
        ];
        console.log("Parallax carousel images loaded:", this.items);
      },
  
      generateSnowflakeStyle() {
        const size = Math.random() * 20 + 30; // Random size between 35px and 60px
        const positionX = Math.random() * 100; // Random X position from 0 to 100%
        const animationDuration = Math.random() * 5 + 5; // Random duration between 5 and 10 seconds
        const animationDelay = Math.random() * 5; // Random delay
  
        const randomImage = this.snowflakeImages[Math.floor(Math.random() * this.snowflakeImages.length)];
  
        return {
          left: `${Math.min(positionX, 80)}vw`,  // Constrain to 95% to avoid overflowing
          width: `${size}px`,
          height: `${size}px`,
          backgroundImage: `url(${randomImage})`,
          backgroundSize: "contain",
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          transform: "translateX(-50%)", // Ensure snowflakes are centered horizontally
        };
      },

      generateUpImageStyle() {
  const size = Math.random() * 20 + 40; // 40px to 60px
  const positionX = Math.random() * 90;
  const duration = Math.random() * 5 + 7; // 7s to 12s
  const delay = Math.random() * 5;
  const randomImage = this.upImages[Math.floor(Math.random() * this.upImages.length)];

  return {
    left: `${positionX}vw`,
    bottom: '-60px',
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${randomImage})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    transform: 'translateX(-50%)',
  };
},
    },
  };
  </script>
  
  <style scoped>
  .parallax-carousel-container {
    padding-top: 0;
    width: 100%;
    position: relative;
  }
  
  .snowflakes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  
  .snowflake {
    position: absolute;
    top: -10px;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.7;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  @keyframes fall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 0.7;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  .parallax-item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    width: 100%; /* Ensure the container doesn't exceed screen width */
    overflow: hidden; /* Hide overflow images */
  }
  
  .parallax-overlay {
    background: rgba(0, 0, 0, 0.4);
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
  }
  
  .carousel-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .carousel-subtitle {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    .carousel-title {
      font-size: 1.8rem;
    }
  
    .carousel-subtitle {
      font-size: 1rem;
    }
  
    .parallax-item {
      background-attachment: scroll; /* Fix for parallax effect on mobile */
      background-size: cover; /* Ensure the image doesn't overflow */
    }
    
    .snowflake {
      animation-duration: 7s; /* Slower snowflake animation on mobile */
      animation-iteration-count: infinite;
    }
  }
  
  @media (max-width: 480px) {
    /* Additional fixes for very small screen sizes */
    .snowflake {
      width: 30px;
      height: 30px;
    }
  }

  .up-floating-images {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-up {
  position: absolute;
  background-color: transparent;
  opacity: 0.8;
  animation-name: floatUp;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.9;
  }
  100% {
    transform: translateY(-100vh) rotate(-360deg);
    opacity: 0;
  }
}
  </style>
  
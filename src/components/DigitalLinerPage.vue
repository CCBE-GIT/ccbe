<template>
    <div class="marquee-container" style="max-width: 450px;">
      <!-- The running text -->
      <div class="marquee" :style="{ animationDuration: animationSpeed + 's' }">
        <span>{{ message }}</span>
        <!-- Duplicate the message for seamless looping -->
        <span>{{ message }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message:
          "THE GOLD PARTNER FOR THE BRITISH COUNCIL & THE LARGEST CAMBRIDGE ENGLISH QUALIFICATIONS PREPARATION NETWORK IN SRI LANKA.",
        animationSpeed: 35, // Adjust this to control the speed (in seconds)
      };
    },
  };
  </script>
  
  <style>
 /* Marquee container */
.marquee-container {
  width: 100%; /* Full width on larger screens */
  max-width: 700px; /* Limit width on larger screens */
  overflow: hidden;
  white-space: nowrap;
  background-color: #ffffff;
  color: #ff5f15;
  padding: 10px 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

/* Responsive width adjustments */
@media (max-width: 768px) {
  .marquee-container {
    max-width: 90%; /* Adjust width for tablets and smaller screens */
  }
}

@media (max-width: 480px) {
  .marquee-container {
    max-width: 100%; /* Full width on small mobile devices */
  }
}

/* Marquee animation */
.marquee {
  display: flex;
  will-change: transform;
  animation: marquee linear infinite;
}

.marquee span {
  flex-shrink: 0;
  padding-right: 50px;
}

/* Keyframes for marquee */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
  </style>
  
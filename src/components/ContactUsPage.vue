<template>
<NavBar></NavBar>
<v-container>

    <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
        <img :src="logo" alt="Company Logo" width="200" height="150" id="logo">
    </div>

    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        CONTACT <span class="highlight">US</span>
    </h1>

    <h4 class="mt-2 subtitle" data-aos="fade-up" data-aos-duration="2000">
        At the heart of our commitment to communication and service lies our dedication to ensuring every interaction is meaningful, responsive, and supportive.
    </h4>

    <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
        OUR <span class="highlight mt-3">BRANCH NETWORK</span>
    </h1>

    <div class="center-container-Branch mt-3">
        <!-- Image Container -->
        <div class="image-container">
            <!-- Main Image -->
            <v-img data-aos="zoom-out" data-aos-duration="2000" width="390" height="490" src="@/assets/Branch_Network.png" alt="Branch Network"></v-img>
            <!-- Ambalangoda Branch -->
            <div class="point" v-tooltip:start="'Ambalangoda College'" :style="{ top: '72%', left: '34%' }" @click="navigateTo('/about/ambalangoda')"></div>
            <!-- Galle Branch -->
            <div class="point" v-tooltip:start="'Galle College'" :style="{ top: '80%', left: '40%' }" @click="navigateTo('/about/galle')"></div>
            <!-- Matara Branch -->
            <div class="point" v-tooltip:start="'Matara College'" :style="{ top: '79%', left: '55%' }" @click="navigateTo('/about/matara')"></div>
            <!-- Piliyandala Branch -->
            <div class="point" v-tooltip:start="'Piliyandala College'" :style="{ top: '63%', left: '35%' }" @click="navigateTo('/about/piliyandala')"></div>
            <!-- Kalutara Branch -->
            <div class="point" v-tooltip:start="'Kalutara College'" :style="{ top: '63%', left: '28%' }" @click="navigateTo('/about/kalutara')"></div>
            <!-- Horana Branch -->
            <div class="point" v-tooltip:start="'Horana College'" :style="{ top: '67%', left: '32%' }" @click="navigateTo('/about/horana')"></div>
        </div>
    </div>
    <div v-if="selectedOffice" class="text-center mt-5">
        <h3>{{ selectedOffice.name }}</h3>
        <p>{{ selectedOffice.address }}</p>
        <p>{{ selectedOffice.phone }}</p>
    </div>
    <div>
    </div>

</v-container>
<ChatBot></ChatBot>
<FooterPage></FooterPage>
</template>

<script>
import NavBar from "./NavBar.vue";
import FooterPage from "./FooterPage.vue";
import ChatBot from "./ChatBot.vue";

// Import AOS for animations
import AOS from "aos";
import "aos/dist/aos.css";

export default {
    name: "ContactUs",
    components: {
        NavBar,
        FooterPage,
        ChatBot
    },
    mounted() {
        AOS.init(); // Initialize AOS animations when the component is mounted
    },
    methods: {
        formatPhone(phone) {
            // Format the phone number in a readable format
            return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "+$1 $2 $3 $4");
        },
        navigateTo(route) {
        this.$router.push(route);
    }
    },
    data() {
        return {
            logo: require('@/assets/Logo.png'),
            offices: [{
                    name: "Galle College",
                    address: "118, Old Matara Rd, Galle, 80000",
                    phone: "+94 91 22 37373"
                },
                {
                    name: "Ambalangoda College",
                    address: "No 97, New Rd, Ambalangoda, 80300",
                    phone: "+94 91 2252 452"
                },
                {
                    name: "Matara College",
                    address: "No 352, Kumarathunga Mw, Matara, 81000",
                    phone: "+94 41 2050 200"
                },
                {
                    name: "Piliyandala College",
                    address: "No Moratuwa Rd, Suwarapola, Piliyandala, 10300",
                    phone: "+94 11 2 180 008"
                },
                {
                    name: "Horana College",
                    address: "No 149, Graceland Circular Rd, Horana, 12400",
                    phone: "+94 2 180 008"
                },
                {
                    name: "Kalutara College",
                    address: "No 85, Maha Waskaduwa, 12580",
                    phone: "+342 121 210"
                },
            ],
            points: [{
                    x: 34,
                    y: 73,
                    label: "AmbalangodaBranch",
                    link: "/courses"
                },
                {
                    x: 40,
                    y: 80.5,
                    label: "Galle",
                    link: ""
                },
                {
                    x: 55,
                    y: 79,
                    label: "Matara",
                    link: ""
                },
                {
                    x: 32,
                    y: 67,
                    label: "Piliyandala",
                    link: ""
                },
                {
                    x: 35,
                    y: 63,
                    label: "Horana",
                    link: ""
                },
            ],
            selectedOffice: null,
        };
    },
};
</script>

<style>
.title {
    color: #FBB700;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}

.highlight {
    color: #FF5F15;
}

.subtitle {
    font-size: 1.2rem;
    color: #555;
    margin: 20px 0;
}

.title-intro {
    font-family: "Anton", sans-serif;
    font-weight: 400;
    font-style: normal;
    text-align: center;
}

.paragraph {
    font-family: "Roboto", sans-serif;
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: justify;
}

#logo {
    justify-content: center;
}

h4 {
    justify-content: center;
    text-align: center;
}

.logo-container {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    margin-top: 20px;
}

@media (max-width: 960px) {

    /* For smaller screens, remove zigzag effect to keep a clean layout */
    .zigzag-left,
    .zigzag-right {
        margin-top: 20px;
    }
}

.branch {
    margin: 20px 0;
    text-align: center;
}

.whatsapp-button {
    display: inline-flex;
    align-items: center;
    background-color: #25d366;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.whatsapp-button img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.whatsapp-button:hover {
    background-color: #1ebf57;
}

.small {
    font-size: 12px;
    color: #d4f1dc;
}

.image-container {
    position: relative;
    width: auto;
    height: auto;
}

.point {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: rgb(255, 230, 0);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 10;
    animation: pulse-grow 2s infinite;
    box-shadow: 0 0 10px rgba(255, 230, 0, 0.8);
}

.point::before,
.point::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 243, 7, 0.889);
    border-radius: 50%;
    top: 0;
    left: 0;
    transform: scale(1);
    animation: wave 2s infinite;
}

.point::after {
    animation-delay: 1s;
}

@keyframes pulse-grow {

    0%,
    100% {
        transform: translate(-50%, -50%) scale(1);
    }

    50% {
        transform: translate(-50%, -50%) scale(1.2);
    }
}

@keyframes wave {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(3);
    }
}

.center-container-Branch {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 300px;
    /* Match the image width */
    height: 400px;
    /* Match the image height */
    margin: 0 auto;
}
</style>

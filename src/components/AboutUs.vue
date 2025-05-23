<template>
<NavBar></NavBar>
<v-container>
    <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
        <img :src="logo" alt="Company Logo" width="200" height="150" id="logo">
    </div>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">ABOUT <span class="highlight">CCBE</span>
    </h1>
    <br>
    <div class="center-container">
        <v-row>
            <v-img data-aos="zoom-out" data-aos-duration="2000" src="https://ik.imagekit.io/u3wbiya66/Board.jpg?updatedAt=1737883142390" align="center"></v-img>
            <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
                Established on September 3rd, 2015, our institution proudly functions as a distinguished
                Cambridge English
                Exam Preparation Centre (CELA Centre). Recognized as a designated Cambridge Qualifications
                registration
                center for the esteemed British Council in Colombo, Sri Lanka, we specialize in facilitating
                University of
                Cambridge Examinations.
                With a steadfast commitment to academic excellence, we provide comprehensive and tailored
                preparatory
                programs to empower individuals seeking success in Cambridge English exams. Our longstanding
                association
                with the British Council underscores our dedication to upholding the highest standards in
                education,
                ensuring that our students are well-equipped to excel in their academic pursuits.
            </p>
        </v-row>
    </div>

    <v-divider></v-divider>

    <div class="center-container">
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
            <span class="highlight">OUR VISION</span> & <span class="highlight">OUR MISSION</span>
        </h1>
    </div>
</v-container>
<v-parallax class="parallax" src='@/assets/BC1.jpg' style="align-items: center;">
    <div class="content">
        <p class="paragraph mt-2 ml-1 mr-1" data-aos="fade-up" data-aos-duration="3000">
            <b>Our Mission </b>is to excel as a premier Cambridge English Assessment preparation center in Sri Lanka. We are dedicated to providing an exceptional learning experience, fostering language proficiency, critical thinking, and global awareness. Through innovative teaching and a commitment to student success, we aim to be the preferred choice for effective Cambridge English Assessment preparation, making a lasting impact on our students' academic and personal growth.
        </p>
        <br>

        <div class="content">
            <p class="paragraph mt-2 ml-1 mr-1" data-aos="fade-up" data-aos-duration="3000">
                <b>Our Vision </b>is to lead as the top Cambridge English Assessment preparation center in Sri Lanka, dedicated to fostering excellence in language proficiency and academic success. We aim to provide an inspiring learning environment, utilizing innovative teaching methods and resources to empower students for success in a globalized world.
            </p>
        </div>
    </div>
</v-parallax>
<v-container>
    <v-divider></v-divider>
    <!-- Existing content -->
    <br>
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
            <!-- Horana Branch -->
            <div class="point" v-tooltip:start="'Horana College'" :style="{ top: '67%', left: '32%' }" @click="navigateTo('/about/horana')"></div>
            <!-- Kalutara Branch -->
            <div class="point" v-tooltip:start="'Kalutara College'" :style="{ top: '63%', left: '28%' }" @click="navigateTo('/about/kalutara')"></div>
        </div>
    </div>
    <div v-if="selectedOffice" class="text-center mt-5">
        <h3>{{ selectedOffice.name }}</h3>
        <p>{{ selectedOffice.address }}</p>
        <p>{{ selectedOffice.phone }}</p>
    </div>
    <div>
        <v-row justify="center" class="my-3 mb-3">
            <v-btn data-aos="zoom-out" data-aos-duration="2000" rounded="xl" size="large" class="ml-1 mr-1 mb-1" color="#FBB700" v-for="(office, index) in offices" :key="index" outlined @click="selectOffice(office)">
                {{ office.name }}
            </v-btn>
        </v-row>
    </div>
    <v-divider></v-divider>

</v-container>
<ArrowButton></ArrowButton>
<ChatBot></ChatBot>
<FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterPage from './FooterPage.vue'
import ChatBot from './ChatBot.vue';
import ArrowButton from './ArrowButton.vue';
//AOS Trasnsition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'HelloWorld',
    components: {
        NavBar,
        FooterPage,
        ChatBot,
        ArrowButton
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
    methods: {
        selectOffice(office) {
            this.selectedOffice = office;
        },
        navigateTo(link) {
            console.log('Navigating to:', link); // Log the link
            if (link) {
                this.$router.push(link); // Navigate to the provided route
            } else {
                console.warn("No link provided for this point.");
            }
        },
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
                    phone: "0342 121 210"
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
                    x: 63,
                    y: 28,
                    label: "Kalutara",
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
        }
    },

}
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

.logo-container {
    display: flex;
    justify-content: center;
    /* Center horizontally */
    align-items: center;
    margin-top: 20px;
}

.center-container {
    display: flex;
    justify-content: center;
    align-items: left;
    display: flex;
}

.content {
    position: relative;
    z-index: 1;
    /* Make sure content is above the image */
    text-align: center;
    color: white;
    /* Adjust for visibility over the image */
}

.content h1,
.content p {
    padding: 20px;
    background-color: rgba(89, 79, 0, 0.452);
    /* Semi-transparent background for readability */
    border-radius: 5px;
}

.parallax {
    height: 550px;
}

.paragraph {
    font-size: 1.2rem;
    line-height: 1.5;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .content {
        display: block;
        /* Ensures both Mission and Vision texts are displayed */
    }

    .paragraph {
        font-size: 1rem;
        /* Adjust the font size for mobile screens */
        line-height: 1.4;
    }
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

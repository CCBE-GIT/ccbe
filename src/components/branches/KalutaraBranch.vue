<template>
    <NavBar></NavBar>
    <v-container>
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
            Welcome to <span class="highlight">Kalutara College</span>
        </h1>
        <br />
    
        <h2 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Contact</h2>
        <v-row justify="center" class="fill-height">
    
            <v-col cols="12" class="branch-card mt-3" style="text-align: center;">
                <div class="branch-info">
                    <p>
                        <v-icon class="icon">mdi-map-marker</v-icon>
                        No 85, Maha Waskaduwa, 12580
                    </p>
                    <p>
                        <v-icon color="blue" @click="openGoogleMaps" style="cursor: pointer;">mdi-map-marker</v-icon>
                        Google Map
                    </p>
                    <p>
                        <v-icon class="icon">mdi-phone</v-icon>
                        <a href="tel:091 2 252 452">0342 121 210</a>
                    </p>
                    <p>
                        <v-icon class="icon">mdi-email</v-icon>
                        <a>kalutaraccbe@gmail.com</a>
                    </p>
                    <p>
                        <a href="https://www.facebook.com/profile.php?id=61575104380343" target="_blank" rel="noopener noreferrer">
                            <v-icon class="icon mr-1" color="blue">mdi-facebook</v-icon>
                        </a>
                        <a href="https://www.youtube.com/@cambridgecollegeofbritishe9360" target="_blank" rel="noopener noreferrer">
                            <v-icon class="icon mr-1" color="red">mdi-youtube</v-icon>
                        </a>
                        <a href="https://www.instagram.com/ccbeamb" target="_blank" rel="noopener noreferrer">
                            <v-icon class="icon mr-1" color="pink">mdi-instagram</v-icon>
                        </a>
                        <a href="https://www.tiktok.com/@cambridgecollege9" target="_blank" rel="noopener noreferrer">
                            <v-icon class="icon mr-1" color="orange">mdi-music-note</v-icon>
                        </a>
                    </p>
                    <a href="https://wa.me/+94711715666?text=Hello%20Branch%201" target="_blank" class="whatsapp-button">
                        <img :src="require('@/assets/icons/whatsapp.jpg')" alt="WhatsApp" />
                        <strong>Chat Via WhatsApp</strong>
                    </a>
                </div>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    
        <h2 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">Gallery</h2>
    
        <div>
            <v-row>
                <!-- Loop through all items (images and iframes) -->
                <v-col v-for="(item, index) in contentItems" :key="index" cols="12" sm="6" md="4" lg="4" xl="2">
                    <v-card class="pa-3" v-if="item.iframeSrc">
                        <iframe width="100%" height="200px" frameborder="0" :src="item.iframeSrc" allowfullscreen></iframe>
                        <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">
                            {{ item.subtitle }}
                        </v-card-subtitle>
                        <v-card-text>
                            <div>{{ item.description }}</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(image, index) in images" :key="index" class="d-flex child-flex" cols="12" sm="6" md="4" lg="4" xl="2">
                    <v-img :lazy-src="image.lazySrc" :src="image.src" aspect-ratio="1" class="bg-grey-lighten-2" cover>
                        <template v-slot:placeholder>
                            <v-row align="center" class="fill-height ma-0" justify="center">
                                <v-progress-circular color="grey-lighten-5" indeterminate></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </div>
    </v-container>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
    </template>
    
    <script>
    import NavBar from '../NavBar.vue';
    import FooterPage from '../FooterPage.vue';
    import ChatBot from '../ChatBot.vue'
    import ArrowButton from '../ArrowButton.vue';
    
    export default {
    
        name: 'KalutaraBranch',
        components: {
            NavBar,
            FooterPage,
            ChatBot,
            ArrowButton
        },
        data() {
            return {
                contentItems: [{
                    iframeSrc: "https://momento360.com/e/u/4e0567c60ff04f2399663f0331bf84d5?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
                    subtitle: "Explore Kalutara Branch in 360",
                    description: "Immerse yourself in a virtual tour of our vibrant learning spaces at the Kalutara Branch.",
                }, 
                {
                    iframeSrc: "https://momento360.com/e/u/494aacf6a10642b983445a4a13f7e490?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=98&size=medium&display-plan=true",
                    subtitle: "360° Virtual Tour of Smart Classroom",
                    description: "Explore the innovative learning environment equipped with cutting-edge technology for interactive education.",
                }, 
                {
                    iframeSrc: "https://momento360.com/e/u/e31cd13a27db483d8795e8ce1f822f30?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true",
                    subtitle: "360° Virtual Tour of the Auditorium",
                    description: "Experience every angle of our state-of-the-art auditorium from the comfort of your screen.",
                }, 
            ],
                images: [{
                        lazySrc: 'https://picsum.photos/10/6?image=15',
                        src: 'https://ik.imagekit.io/u3wbiya66/Ambalangoda/Kalutara.jpg?updatedAt=1746770889100',
                    },
                    {
                        lazySrc: 'https://picsum.photos/10/6?image=10',
                        src: 'https://ik.imagekit.io/u3wbiya66/PXL_20250117_094732824.jpg?updatedAt=1737789273936',
                    },
                    {
                        lazySrc: 'https://picsum.photos/10/6?image=15',
                        src: 'https://ik.imagekit.io/u3wbiya66/Ambalangoda/CV8.jpg?updatedAt=1737874746020',
                    },
                    {
                        lazySrc: 'https://picsum.photos/10/6?image=15',
                        src: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/471703751_546176895088360_9175928756161747081_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGiSCSGunP-KzLjK45Ai6G-te88Jlt6ybO17zwmW3rJsyW_Pj9U4VsT7GlwOBa1aVMjMhUroRJ4hzRJDmmHnHZO&_nc_ohc=fEcBOlz1MpcQ7kNvgFzaMO8&_nc_oc=AdgM2Zon6pAlxiVENhg_USGWflctjTdGS4ttG-Mr2gMMxy5CZWyz5gDrcF0ejUOnov8&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=A674B8Au4cLJjOOhP9zkPtE&oh=00_AYCrSs8fc6EEADe-lWvGNl0HSEEZGFHJVHbTDkKOX5zZ4Q&oe=679CF9FE',
                    },
                ],
                fullscreenDialog: false, // Control for the fullscreen image dialog
            };
        },
        mounted() {
            window.scrollTo(0, 0);
        },
        methods: {
            openGoogleMaps() {
                window.open('https://maps.app.goo.gl/XyQqiD5g3hwMpMtXA?g_st=com.google.maps.preview.copy', '_blank');
            },
        },
    };
    </script>
    
    <style>
    .title {
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
    
    .professionals-grid {
        margin-top: 30px;
    }
    
    .name {
        font-weight: bold;
        font-size: 1.1rem;
        margin: 10px 0;
    }
    
    .title-intro {
        font-family: "Arial", sans-serif;
        font-weight: 400;
        font-style: normal;
        text-align: center;
    }
    
    .paragraph {
        font-family: "Roboto", sans-serif;
        font-weight: 14px;
        font-size: 20px;
        font-style: normal;
        text-align: center;
    }
    
    .horizontal-scroll {
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
        padding: 10px;
        scrollbar-width: none;
        /* For Firefox */
        -ms-overflow-style: none;
        /* For Internet Explorer and Edge */
    }
    
    .horizontal-scroll::-webkit-scrollbar {
        display: none;
        /* For Chrome, Safari, and Opera */
    }
    
    .why-choose-us {
        padding: 40px 20px;
        background-color: #f9f9f9;
    }
    
    .section-title {
        font-size: 2.5rem;
        color: #272643;
        font-family: "Arial", sans-serif;
        margin-bottom: 20px;
    }
    
    .stats-row {
        margin-top: 20px;
    }
    
    .stat-item {
        padding: 20px;
    }
    
    .stat-value {
        font-size: 2rem;
        color: #120150;
        font-weight: bold;
        transition: all 0.3s ease-out;
    }
    
    .stat-label {
        font-size: 1.2rem;
        color: #6c757d;
    }
    
    .carousel-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
    }
    
    .carousel-image {
        max-width: 120px;
        max-height: 120px;
        object-fit: cover;
        border-radius: 10px;
    }
    
    .why-choose-us {
        padding: 50px 0;
        background-color: #5E0000;
    }
    
    .title {
        font-family: 'Roboto', sans-serif;
        color: #FBB700;
        text-transform: uppercase;
        font-weight: bold;
    }
    
    .stats-row .v-col {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .stats-card {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        overflow: hidden;
    }
    
    .stats-card-img {
        object-fit: cover;
        border-bottom: 3px solid #FBB700;
    }
    
    .card-content {
        padding: 20px;
    }
    
    .stat-value {
        font-size: 28px;
        color: #FBB700;
        font-weight: bold;
    }
    
    .stat-label {
        font-size: 18px;
        color: rgb(20, 10, 10);
        font-family: 'Roboto', sans-serif;
    }
    
    .v-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    }
    
    .stats-row .v-col:hover {
        transform: scale(1.05);
        opacity: 0.9;
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
    </style>
    
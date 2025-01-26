<template>
<NavBar></NavBar>
<v-container>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        Welcome to <span class="highlight">Ambalangoda College Gallery</span>
    </h1>
    <br />

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

    name: 'AmbalangodaBranch',
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
                subtitle: "Explore Ambalangoda Branch in 360",
                description: "Immerse yourself in a virtual tour of our vibrant learning spaces at the Ambalangoda Branch.",
            }, ],
            images: [{
                    lazySrc: 'https://picsum.photos/10/6?image=15',
                    src: 'https://ik.imagekit.io/u3wbiya66/Ambalangoda/BC2.jpg?updatedAt=1737874746112',
                },
                {
                    lazySrc: 'https://picsum.photos/10/6?image=10',
                    src: 'https://ik.imagekit.io/u3wbiya66/PXL_20250117_094732824.jpg?updatedAt=1737789273936',
                },
                {
                    lazySrc: 'https://picsum.photos/10/6?image=15',
                    src: 'https://ik.imagekit.io/u3wbiya66/Ambalangoda/CV8.jpg?updatedAt=1737874746020',
                },
            ],
            fullscreenDialog: false, // Control for the fullscreen image dialog
        };
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    methods: {

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
</style>

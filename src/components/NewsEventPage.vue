<template>
<NavBar></NavBar>
<v-container>
    <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
        News <span class="highlight">& Events</span>
    </h1>
    <br />
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000" style="text-align: center;">
        <b>At Cambridge College of British English (CCBE)</b>, we are constantly evolving to offer our students the best learning experiences. Our upcoming events include language workshops, cultural exchange programs, and exciting new course launches designed to meet the needs of learners of all ages. Whether you're interested in expanding your vocabulary, improving your accent, or exploring advanced language techniques, our events offer unique opportunities for growth. Stay tuned for announcements on our seasonal events, student achievements, and exciting collaborations with language experts. At CCBE, every moment is a chance to learn, connect, and celebrate the joy of mastering English.
    </p>
    <br />

    <v-row>
        <!-- Loop through the cards array -->
        <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4">
            <v-card class="mx-auto" max-width="400">
                <v-img :src="card.image" height="200px" cover></v-img>

                <v-card-title>{{ card.title }}</v-card-title>

                <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>

                <v-card-actions>

                    <v-spacer></v-spacer>

                    <v-btn :icon="card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="toggleCard(index)"></v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="card.show">
                        <v-divider></v-divider>

                        <v-card-text>{{ card.content }}</v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </v-col>
    </v-row>
</v-container>
<ArrowButton></ArrowButton>
<ChatBot></ChatBot>
<FooterPage></FooterPage>
</template>

<script>
import AOS from 'aos';
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
            cards: [{
                    image: "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/465372919_513859018302051_3617960307939103914_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHql3iVvW_yiW6XHJwr-b1PC3N21Ij1BVQLc3bUiPUFVJjWmZMKQTtHGfmwKI7VQ__po6FJPcESvMq_qYcBWzvs&_nc_ohc=-rQ_qEx9JFYQ7kNvgFekbFm&_nc_oc=Adh0erDzhnoYqlhkV26C-uvQPBwufIFYM7P9vW1wJ_oPL_zXLZfBzye6FVpcTTW7hNU&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=AwsGIY7No3il2gIwbQ4yfAx&oh=00_AYCS9b4D_Y7NuKs--_pADgHVQIeJ6GT1la8DLy5aefYXuw&oe=679E618B",
                    title: "Fit to Fight 2025",
                    subtitle: "Our 9th Annual Event a Huge Success!",
                    content: "Heartfelt thanks to everyone who contributed to and supported our 9th annual Fit to Fight event! Your unwavering generosity and dedication have once again demonstrated the power of community and compassion.\n\nThis year’s event was a remarkable success, with participants, sponsors, and volunteers coming together to support a noble cause. The funds raised during this event will directly benefit the Cancer Hospital in Karapitiya, providing vital resources for patients and their families.\n\nTogether, we have shown that strength lies in unity, and with your support, we have made a meaningful difference in the lives of those who need it most.\n\nThank you for being a part of this incredible journey. Here’s to continuing the fight and spreading hope, one step at a time!\n\nStay tuned for updates, photos, and highlights from the event!",
                    show: false,
                },
                {
                    image: "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/470141244_539068675781085_4567727395866267891_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHaehsNLVCaQ3OC-ctS-gGGzIfLX3XMvALMh8tfdcy8AiD2l9J_vsNSfrgt0dh_ExWGxRBRJ4jzbL5qBEas-av2&_nc_ohc=y1BnWnhmWrgQ7kNvgFi3ocr&_nc_oc=AdhXxKkH3T1F_kQcPgfPhkwiYAP2Jzb-9SlifoZ6QP8XqZM4GIXRvCu-7Bccov0MK7E&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=Ae1q5Al0vRq-YZXLDKMm1WF&oh=00_AYBwCaL6jNorQDU_dNmfT1Nyc9faLRXKaP7NtCpZZFqmqA&oe=679E5421",
                    title: "MasterChef Kitchen in Action!",
                    subtitle: "Culinary Creations, Teamwork, and Speaking Skills",
                    content: "MasterChef Kitchen in Action! 👨‍🍳🍴\n\nOur talented students stepped into the spotlight to showcase their favorite meals in an exciting culinary event! This wasn’t just about cooking—it was an opportunity to blend creativity, teamwork, and communication skills.\n\nFrom sharing their unique recipes to presenting their culinary masterpieces with confidence, the event was a flavorful journey of learning, collaboration, and fun. Students worked together seamlessly, demonstrating their ability to combine flavors and ideas while honing their public speaking skills.\n\nIt was inspiring to witness their passion, teamwork, and creativity come to life in the kitchen. Here's to more delicious moments and skill-building adventures in the future!\n\nStay tuned for highlights, photos, and recipes from this vibrant event! 🌟✨",
                    show: false,
                },
                {
                    image: "https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/471795866_555532950801324_1557217071306803796_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFvrjrUNacx8oMH4RcubnD7WqKCYNOGxVJaooJg04bFUmizW-ioZ7UWIkGO5Ek5-Dg1rInsAkbXL5Oi5TGFdHXH&_nc_ohc=G5em6TDsDSgQ7kNvgF9hlZ6&_nc_oc=Adi08SMVNu5l8EDSkOTXLzOqkxlffnPDxvOAHAvRRLs26eIMNg0FUi4ywpk3nuYzrTY&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=Amty-4Jf4Lz7BwxF_JKAyUz&oh=00_AYAXSYps6JRWE0OGlin57T8TfMbz3p18-A0k9-Rame3EHw&oe=679E4C53",
                    title: "Welcoming 2025 with Warmth and Positivity",
                    subtitle: "A Heartfelt New Year Celebration Marking New Beginnings",
                    content: "✨ As we step into 2025, our Galle branch hosted a celebration that radiated warmth and positivity. The event was more than just a New Year gathering—it was a heartfelt occasion filled with joy, reflection, and a shared vision for the year ahead. 🌟\n\nThe team came together to embrace the opportunities and challenges that 2025 will bring. With a sense of unity and optimism, we reflected on the accomplishments of the past year while setting our sights on continued growth and success. This celebration was a reminder of the strong bonds that connect us, and the meaningful impact we aim to make as we move forward, together.\n\nHere’s to embracing new opportunities, pursuing excellence, and creating a year filled with meaningful moments. Cheers to a fantastic 2025! 🌱",
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
};
AOS.init();
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

.paragraph {
    font-family: "Roboto", sans-serif;
    font-weight: 14px;
    font-size: 20px;
    font-style: normal;
    text-align: center;
}

.title {
    font-family: 'Roboto', sans-serif;
    color: #FBB700;
    text-transform: uppercase;
    font-weight: bold;
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

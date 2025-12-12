<template>
    
    <NavBar></NavBar>

    <v-container>
        <h1 class="title mt-5" data-aos="fade-up" data-aos-duration="3000">
            OUR <span class="highlight">PROGRAMMES</span>
        </h1>
        <br>
        <v-row>
            <v-col cols="12" lg="4">
                <v-card class="mx-auto" max-width="400" height="450" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250117_094732824.jpg?updatedAt=1737789273936" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>Pre Schoolers</b></h3>
                        <div>This program is for children who know their ABCs and are just starting to read or have some familiarity with English.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-4" variant="outlined" color="teal-darken-4" to="/courses/preschool">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" lg="4">
                <v-card class="mx-auto" max-width="400" height="450" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250128_092657658-EDIT.jpg?updatedAt=1738392311029" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>Young Learners (Age 6-12)</b></h3>
                        <div>Want to customize Elementor image box height? Here we have the Solution!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/courses/younglearners">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
    
            <v-col cols="12" lg="4">
                <v-card class="mx-auto" max-width="400" height="450" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://ik.imagekit.io/u3wbiya66/IMG-20250127-WA0071.jpg?updatedAt=1737967718437" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>For Schools (Age 13-18)</b></h3>
                        <div>Want to customize Elementor image box height? Here we have the Solution!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-5" variant="outlined" color="teal-darken-4" to="/courses/forschool">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" lg="4">
                <v-card class="mx-auto" max-width="400" height="430" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250131_073049442-EDIT.jpg?updatedAt=1738389378296" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>English Skills For O/L's</b></h3>
                        <div>Trying to add image box to your WordPress sites? No worries!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/courses/ol">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>


 
            <v-col cols="12" lg="4">
                <v-card class="mx-auto" max-width="400" height="430" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://ik.imagekit.io/u3wbiya66/PXL_20250127_083713735-EDIT.jpg?updatedAt=1738393428664" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>English Skills For A/L's</b></h3>
                        <div>Want to customize Elementor image box height? Here we have the Solution!</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/courses/al">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col cols="12" lg="4">
                <v-card class="mx-auto" max-width="400" height="430" data-aos="fade-up" data-aos-duration="3000" elevation="23">
                    <v-img class="align-end text-white image-pop-up" height="200" src="https://ik.imagekit.io/u3wbiya66/IELTS.jpg?updatedAt=1738050317311" cover></v-img>
                    <v-card-subtitle class="pt-4"></v-card-subtitle>
                    <v-card-text class="cardtext">
                        <h3><b>IELTS</b></h3>
                        <div>Do you know how to add Elementor image box with button?</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="custom-btn mt-3" variant="outlined" color="teal-darken-4" to="/courses/ielts">Learn More -></v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import ChatBot from './ChatBot.vue';
import ArrowButton from './ArrowButton.vue';

// AOS Transition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'CoursePage',
    components: {
        NavBar,
        FooterPage,
        ChatBot,
        ArrowButton
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
    data() {
        return {

        };
    }
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

.cardtext {
    color: #d37400;
    font-size: 15px;
    text-align: justify;
}

.image-pop-up {
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.v-card:hover .image-pop-up {
    transform: scale(1.1); /* Pop-up effect */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* Shadow for more depth */
}

.v-card {
    position: relative;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

.v-card:hover {
    transform: translateY(-5px); /* Slight lift for the card */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Card shadow */
}
</style>
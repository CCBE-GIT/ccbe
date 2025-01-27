<template>
<div class="parallax-carousel-container">
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
        };
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            this.items = [
                {
                    src: "https://i.imghippo.com/files/aRy9749Zww.gif",
                    title: "Celebrating 77 Years of Freedom",
                    subtitle: "Honoring Freedom, Unity, and the Pride of Sri Lanka.",
                },
                {
                    src: "https://ik.imagekit.io/u3wbiya66/1.png?updatedAt=1737779114828",
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
    },
};
</script>

<style scoped>
.parallax-item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    /* Creates the parallax effect */
    position: relative;
}

.parallax-overlay {
    background: rgba(0, 0, 0, 0.4);
    /* Add a dark overlay for better text readability */
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
}
.parallax-carousel-container {
  padding-top: 0; /* Prevent extra space */
  width: 100%;
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
}

</style>

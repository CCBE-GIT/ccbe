<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
        <h1 class="title" data-aos="fade-up" data-aos-duration="3000"><span class="highlight">PRE SCHOOL</span>
        </h1>
        <br>
        <h1 class="title" data-aos="fade-up" data-aos-duration="3000">Course Overview</h1>
        <br>
        <div class="center-container">
            <div class="content-row">
                <div class="content-col image-col">
                    <img 
                        data-aos="zoom-out" 
                        data-aos-duration="2000" 
                        src="https://ik.imagekit.io/u3wbiya66/PXL_20250117_094732824.jpg?updatedAt=1737789273936" 
                        alt="Preschool Classroom" 
                        class="content-image"
                    />
                </div>
                <div class="content-col">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        Our institution boasts an exceptional team of experienced teaching staff dedicated to nurturing
                        the academic and personal growth of every student. Comprising seasoned educators with diverse
                        backgrounds and expertise, our faculty brings a wealth of knowledge and passion to the
                        classroom.

                        With years of teaching experience under their belts, they possess a deep understanding of
                        pedagogical principles and best practices, ensuring that each lesson is tailored to meet the
                        unique needs of every learner.

                        Beyond delivering curriculum content, our instructors serve as mentors, guiding students on
                        their educational journey and instilling in them a lifelong love for learning. Through their
                        unwavering commitment to excellence, our teaching staff inspires students to reach their full
                        potential and achieve academic success.
                    </p>
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <h1 class="title" data-aos="fade-up" data-aos-duration="3000">Learning Outcomes</h1>
        <br>
        <div class="center-container">
            <div class="content-row reverse">
                <div class="content-col">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        Our learning outcomes are carefully designed to lay a strong foundation for future academic
                        success and personal development of pre schoolers. Through our curriculum, young learners engage
                        in a variety of activities aimed at promoting cognitive, social, and emotional growth. By the
                        end of the program, preschoolers will have developed essential pre-reading and pre-writing
                        skills, including letter recognition, phonemic awareness, and basic letter formation.

                        Additionally, they will have acquired foundational math concepts such as counting, sorting, and
                        basic shapes. Furthermore, our curriculum fosters social skills such as cooperation,
                        communication, and empathy through interactive play and group activities. Overall, our goal is
                        to nurture a love for learning and provide preschoolers with the skills and confidence they need
                        to thrive in kindergarten and beyond.
                    </p>
                </div>
                <div class="content-col image-col">
                    <img 
                        data-aos="zoom-out" 
                        data-aos-duration="2000" 
                        src="https://ik.imagekit.io/u3wbiya66/PXL_20250127_113510947.jpg?updatedAt=1738306054283" 
                        alt="Preschool Activities" 
                        class="content-image"
                    />
                </div>
            </div>
        </div>

        <div class="divider"></div>

        <section class="why-choose-us" style="background-color: white !important;">
            <h2 class="title" style="color: #FF5F15" data-aos="fade-up" data-aos-duration="3000">Course Details</h2>
            <div class="course-details-container">
                <div class="stats-row">
                    <div class="stats-col">
                        <div class="custom-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div class="card-content">
                                <img 
                                    data-aos="zoom-out" 
                                    :src="require('@/assets/animation/timer.gif')"
                                    alt="Timer Animation"
                                    class="card-image"
                                />
                                <h5 class="card-title"><b>Course Duration</b></h5>
                                <p class="card-text">Contact us to find out</p>
                            </div>
                        </div>
                    </div>
                    <div class="stats-col">
                        <div class="custom-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div class="card-content">
                                <img 
                                    data-aos="zoom-out" 
                                    :src="require('@/assets/animation/calender.gif')"
                                    alt="Calendar Animation"
                                    class="card-image"
                                />
                                <h5 class="card-title"><b>Class Duration</b></h5>
                                <p class="card-text">Contact us to find out</p>
                            </div>
                        </div>
                    </div>
                    <div class="stats-col">
                        <div class="custom-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div class="card-content">
                                <img 
                                    data-aos="zoom-out" 
                                    :src="require('@/assets/animation/fee.gif')"
                                    alt="Fee Animation"
                                    class="card-image"
                                />
                                <h5 class="card-title"><b>Course Fee</b></h5>
                                <p class="card-text">Contact us to find out</p>
                            </div>
                        </div>
                    </div>
                    <div class="stats-col">
                        <!-- Updated Age Card with Animation -->
                        <div class="custom-card age-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div class="card-content">
                                <!-- Age Animation Container -->
                                <div class="age-animation-container">
                                    <!-- Age Text Display -->
                                    <div class="age-display">
                                        <div class="age-number age-5">5</div>
                                        <div class="age-dash">-</div>
                                        <div class="age-number age-6">6</div>
                                    </div>
                                </div>
                                
                                <h5 class="card-title"><b>Age Group</b></h5>
                                <p class="card-text">Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="button-container">
            <a href="/contact" class="custom-btn-contact">
                Contact Us
            </a>
        </div>

        <div class="important-notice">
            <div class="important-header">
                <h1 style="color: red;">IMPORTANT</h1>
            </div>
            <div class="important-text">
                <h5>Before enrolling, All children will take a Placement Test to determine which course is best-suited to their level of English language proficiency.</h5>
            </div>
        </div>
    </div>
    <ArrowButton></ArrowButton>
    <ChatBot></ChatBot>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import NavBar from '../NavBar.vue'
import FooterPage from '../FooterPage.vue'
import ChatBot from '../ChatBot.vue';
import ArrowButton from '../ArrowButton.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'PreschoolPage',
    components: {
        NavBar,
        FooterPage,
        ChatBot,
        ArrowButton
    },
    mounted() {
        window.scrollTo(0, 0);
        AOS.init();
    },
    data() {
        return {
            logo: require('@/assets/Logo.png'),
        }
    }
}
</script>

<style scoped>
/* All existing styles remain the same until the Age Card section */

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 80px;
}

.title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    color: #FBB700;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.highlight {
    color: #FF5F15;
}

.center-container {
    width: 100%;
}

.content-row {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 20px 0;
}

.content-col {
    flex: 1;
    min-width: 300px;
    text-align: justify;
}

.image-col {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.content-image {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.paragraph {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    color: #333;
}

.divider {
    height: 2px;
    background-color: #e0e0e0;
    margin: 40px 0;
    width: 100%;
}

.why-choose-us {
    margin: 40px 0;
}

.course-details-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.stats-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.stats-col {
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-card {
    width: 200px;
    height: 200px;
    border: 2px solid #FF5F15;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Age Card Specific Styles */
.age-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.age-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(255, 95, 21, 0.2);
}

.age-card:hover .rotating-blocks {
    animation-play-state: paused;
}

.age-card:hover .age-display {
    animation: ageBounce 0.8s ease;
}

.age-card:hover .balloon-5 {
    animation: floatUp 3s ease-in-out infinite;
}

.age-card:hover .balloon-6 {
    animation: floatUp 3s ease-in-out infinite 0.5s;
}

.age-animation-container {
    position: relative;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

/* Rotating Blocks Animation */
.rotating-blocks {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 5px;
    animation: rotateBlocks 10s linear infinite;
}

@keyframes rotateBlocks {
    0%, 100% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    25% {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    50% {
        transform: translate(-50%, -50%) rotate(180deg);
    }
    75% {
        transform: translate(-50%, -50%) rotate(270deg);
    }
}

.block {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 6px;
    font-size: 14px;
}

.block-5 {
    background: linear-gradient(135deg, #FF5F15 0%, #FF8A00 100%);
    color: white;
    animation: colorShift5 4s infinite alternate;
}

.block-6 {
    background: linear-gradient(135deg, #FBB700 0%, #FFD700 100%);
    color: black;
    animation: colorShift6 4s infinite alternate 0.5s;
}

.block-year {
    background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%);
    color: white;
    font-size: 10px;
    animation: pulseYear 2s infinite;
}

@keyframes colorShift5 {
    0% {
        background: linear-gradient(135deg, #FF5F15 0%, #FF8A00 100%);
        transform: scale(1);
    }
    100% {
        background: linear-gradient(135deg, #FF8A00 0%, #FF5F15 100%);
        transform: scale(1.1);
    }
}

@keyframes colorShift6 {
    0% {
        background: linear-gradient(135deg, #FBB700 0%, #FFD700 100%);
        transform: scale(1);
    }
    100% {
        background: linear-gradient(135deg, #FFD700 0%, #FBB700 100%);
        transform: scale(1.1);
    }
}

@keyframes pulseYear {
    0%, 100% {
        opacity: 0.8;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.1);
    }
}

/* Balloons Animation */
.balloons-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.balloon {
    position: absolute;
    width: 20px;
    height: 30px;
    border-radius: 50%;
    opacity: 0;
}

.balloon-5 {
    top: 10px;
    left: 30px;
    background: linear-gradient(135deg, #FF5F15, #FF8A00);
    animation: balloonFloat 4s ease-in-out infinite;
}

.balloon-6 {
    top: 20px;
    right: 30px;
    background: linear-gradient(135deg, #FBB700, #FFD700);
    animation: balloonFloat 4s ease-in-out infinite 0.5s;
}

@keyframes balloonFloat {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-20px) rotate(10deg);
        opacity: 0.7;
    }
}

@keyframes floatUp {
    0%, 100% {
        transform: translateY(0);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-30px);
        opacity: 0.8;
    }
}

/* Age Display Animation */
.age-display {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 28px;
    font-weight: bold;
    z-index: 2;
}

.age-number {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    animation: numberGlow 2s infinite alternate;
}

.age-5 {
    background: linear-gradient(135deg, #FF5F15 0%, #FF8A00 100%);
    color: white;
    animation-delay: 0s;
}

.age-6 {
    background: linear-gradient(135deg, #FBB700 0%, #FFD700 100%);
    color: black;
    animation-delay: 0.5s;
}

.age-dash {
    color: #FF5F15;
    font-weight: bold;
    animation: dashPulse 2s infinite;
}

@keyframes numberGlow {
    0% {
        box-shadow: 0 0 5px rgba(255, 95, 21, 0.3);
        transform: scale(1);
    }
    100% {
        box-shadow: 0 0 15px rgba(255, 95, 21, 0.6);
        transform: scale(1.1);
    }
}

@keyframes dashPulse {
    0%, 100% {
        opacity: 0.7;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}

@keyframes ageBounce {
    0%, 100% {
        transform: translate(-50%, -50%) scale(1);
    }
    30% {
        transform: translate(-50%, -50%) scale(1.1);
    }
    50% {
        transform: translate(-50%, -50%) scale(0.95);
    }
    70% {
        transform: translate(-50%, -50%) scale(1.05);
    }
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.card-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 10px;
}

.card-title {
    font-size: 1rem;
    color: #333;
    margin: 8px 0;
}

.card-text {
    font-size: 0.9rem;
    color: #666;
    margin: 4px 0;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
}

.custom-btn-contact {
    background-color: #FBB700;
    color: black;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 30px;
    border-radius: 25px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    border: none;
    cursor: pointer;
}

.custom-btn-contact:hover {
    background-color: #FFCC00;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
}

.important-notice {
    text-align: center;
    margin: 40px 0;
    padding: 20px;
    background-color: #fff8e1;
    border-radius: 10px;
    border-left: 4px solid red;
}

.important-header {
    margin-bottom: 15px;
}

.important-text h5 {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 15px;
        padding-top: 70px;
    }
    
    .title {
        font-size: 1.8rem;
    }
    
    .paragraph {
        font-size: 18px;
        text-align: justify;
    }
    
    .content-row {
        flex-direction: column;
    }
    
    .content-row.reverse {
        flex-direction: column-reverse;
    }
    
    .content-col {
        min-width: 100%;
        text-align: justify;
    }
    
    .content-image {
        max-height: 300px;
    }
    
    .stats-row {
        gap: 15px;
    }
    
    .custom-card {
        width: 160px;
        height: 160px;
        padding: 15px;
    }
    
    .age-animation-container {
        height: 80px;
    }
    
    .rotating-blocks {
        gap: 3px;
    }
    
    .block {
        width: 25px;
        height: 25px;
        font-size: 12px;
    }
    
    .block-year {
        font-size: 9px;
    }
    
    .age-display {
        font-size: 22px;
        gap: 8px;
    }
    
    .age-number {
        width: 35px;
        height: 35px;
    }
    
    .balloon {
        width: 15px;
        height: 25px;
    }
    
    .balloon-5 {
        left: 20px;
    }
    
    .balloon-6 {
        right: 20px;
    }
    
    .card-image {
        width: 80px;
        height: 80px;
    }
    
    .card-title {
        font-size: 0.9rem;
    }
    
    .card-text {
        font-size: 0.8rem;
    }
    
    .custom-btn-contact {
        font-size: 16px;
        padding: 10px 25px;
    }
    
    .important-text h5 {
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
        padding-top: 60px;
    }
    
    .title {
        font-size: 1.6rem;
    }
    
    .paragraph {
        font-size: 16px;
        text-align: justify;
    }
    
    .content-image {
        max-height: 250px;
    }
    
    .stats-row {
        gap: 10px;
    }
    
    .custom-card {
        width: 140px;
        height: 170px;
        padding: 10px;
    }
    
    .age-animation-container {
        height: 70px;
        margin-bottom: 5px;
    }
    
    .rotating-blocks {
        gap: 2px;
    }
    
    .block {
        width: 22px;
        height: 22px;
        font-size: 11px;
    }
    
    .block-year {
        font-size: 8px;
    }
    
    .age-display {
        font-size: 18px;
        gap: 6px;
    }
    
    .age-number {
        width: 30px;
        height: 30px;
    }
    
    .balloon {
        width: 12px;
        height: 20px;
    }
    
    .balloon-5 {
        left: 15px;
        top: 5px;
    }
    
    .balloon-6 {
        right: 15px;
        top: 10px;
    }
    
    .card-image {
        width: 70px;
        height: 70px;
    }
    
    .card-title {
        font-size: 0.85rem;
    }
    
    .custom-btn-contact {
        font-size: 14px;
        padding: 8px 20px;
    }
    
    .important-text h5 {
        font-size: 0.9rem;
    }
}

@media (max-width: 360px) {
    .stats-row {
        justify-content: center;
    }
    
    .custom-card {
        width: 130px;
        height: 150px;
    }
    
    .age-animation-container {
        height: 60px;
    }
    
    .block {
        width: 20px;
        height: 20px;
        font-size: 10px;
    }
    
    .age-display {
        font-size: 16px;
        gap: 5px;
    }
    
    .age-number {
        width: 28px;
        height: 28px;
    }
    
    .card-image {
        width: 60px;
        height: 60px;
    }
}
</style>
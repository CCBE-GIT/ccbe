<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
        <h1 class="title" data-aos="fade-up" data-aos-duration="3000">For Schools
            <span class="highlight">(Age 13-18)</span>
        </h1>
        <br />
        <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
            Course Overview
        </h1>
        <br />
        <div class="center-container">
            <div class="content-row">
                <div class="content-col-full">
                    <img 
                        data-aos="zoom-out" 
                        data-aos-duration="2000" 
                        :src="require('@/assets/course/PS1.jpg')" 
                        alt="For Schools Course Overview" 
                        class="content-image"
                    />
                </div>
                <div class="content-col-full">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        This programme is suitable for secondary school students and provides better academic, social and career opportunities through English mastery. We provide learners with a friendly learning space where they can improve their language abilities through the four core skills of reading, writing, speaking and listening. This programme teaches learners to discover their own voices to communicate effortlessly.

                        We use materials which provide learners with the language, vocabulary, grammar and the skills to do well in the Cambridge English examinations. We also encourage plenty of speaking practice in order to increase the learner's confidence in their English skills.
                    </p>
                </div>
            </div>
        </div>

        <div class="full-width-text">
            <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
                Learners can take the Cambridge English exams as they progress through this programme and upon passing, will be awarded valuable certificates that will help open doors to the best colleges, universities and careers worldwide. Starting from a basic English skill level to the highest level, these courses train students on the use of language in real life through meaningful communication. At the end of this programme, students will be able to read, write, listen and speak at a high level of English fluency.
            </p>
        </div>

        <div class="divider"></div>

        <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
            Learning Outcomes
        </h1>
        <br />
        <div class="center-container">
            <div class="content-row reverse">
                <div class="content-col">
                    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
                        For secondary schoolers studying English, our learning outcomes are structured to cultivate a comprehensive proficiency in the language across multiple dimensions. Through a diverse curriculum encompassing literature analysis, writing proficiency, oral communication skills, and critical thinking, students develop a deep understanding of the English language and its application in various contexts.

                        students will have demonstrated mastery in reading comprehension, literary analysis, and effective written expression. Moreover, they will have honed their verbal communication skills through presentations, discussions, and debates.
                    </p>
                </div>
                <div class="content-col image-col">
                    <img 
                        data-aos="zoom-out" 
                        data-aos-duration="2000" 
                        :src="require('@/assets/course/PS3.jpg')" 
                        alt="Learning Outcomes" 
                        class="content-image"
                    />
                </div>
            </div>
        </div>

        <br />

        <div class="divider"></div>

        <section class="why-choose-us" style="background-color: white !important;">
            <h2 class="title" style="color: #FBB700" data-aos="fade-up" data-aos-duration="3000">
                Course Details
            </h2>
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
                        <div class="custom-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div class="card-content">
                                <img 
                                    data-aos="zoom-out" 
                                    :src="require('@/assets/animation/exam.gif')" 
                                    alt="Exam Animation"
                                    class="card-image"
                                />
                                <h5 class="card-title"><b>Exams</b></h5>
                                <p class="card-text">A2,B1,B2,C1,C2 Proficiency</p>
                            </div>
                        </div>
                    </div>
                    <div class="stats-col">
                        <div class="custom-card age-card" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <div class="card-content">
                                <!-- Age animation section (13-18) -->
                                <div class="age-range-animation">
                                    <div class="age-number age-13">13</div>
                                    <div class="age-progression">
                                        <div class="progression-line"></div>
                                        <div class="progression-dots">
                                            <div class="progression-dot"></div>
                                            <div class="progression-dot"></div>
                                            <div class="progression-dot"></div>
                                            <div class="progression-dot"></div>
                                            <div class="progression-dot"></div>
                                        </div>
                                    </div>
                                    <div class="age-number age-18">18</div>
                                </div>
                                <h5 class="card-title"><b>Age Group</b></h5>
                                <p class="card-text">Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="divider"></div>

        <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
            Programme Levels
        </h1>
        <br />
        
        <div class="program-levels">
            <div class="level-card level-card-style" data-aos="fade-left" data-aos-duration="1500">
                <div class="level-header level-header-style1" >
                    <h3>Elementary Level (A2 Key)</h3>
                </div>
                <div class="level-body">
                    <p><b>This course is for beginners with basic English skills who are able to communicate in simple situations and is designed to prepare learners for the A2 KEY exam. By the end of this course,</b></p>
                    <br>
                    students will be able to:
                    <ul class="bullet-list">
                        <li>Understand straightforward information and begin to express oneself in familiar topics</li>
                        <li>Understand basic sentences about relevant topics: family, shopping, local geography, etc.</li>
                        <li>Communicate regarding simple and routine tasks.</li>
                        <li>Describe in simple terms his/her background, environment and immediate needs.</li>
                    </ul>
                </div>
            </div>
            
            <div class="level-card level-card-style1" data-aos="fade-right" data-aos-duration="2000">
                <div class="level-header level-header-style2">
                    <h3>Pre-Intermediate Level (B1 Preliminary)</h3>
                </div>
                <div class="level-body">
                    <p><b>This course is for learners who have fully mastered basic English and have practical language skills for everyday use. By the end of this course, learners will be taking the B1 Preliminary exam.</b></p>
                    <br>
                    By the end of this course, students will be able to:
                    <ul class="bullet-list">
                        <li>Express oneself in a simple and general way in familiar situations.</li>
                        <li>Understand the main points of familiar matters (e.g. school, family, leisure).</li>
                        <li>Deal with most situations related to travelling in English speaking countries.</li>
                        <li>Describe experiences and events, dreams, hopes & ambitions with explanations.</li>
                    </ul>
                </div>
            </div>
            
            <div class="level-card level-card-style2" data-aos="fade-left" data-aos-duration="2500">
                <div class="level-header level-header-style3">
                    <h3>Upper-Intermediate Level (B2 First)</h3>
                </div>
                <div class="level-body">
                    <p><b>This course is for learners who know how to use English in a variety of situations in the real world and are able to take a course of study in English. This level effectively prepares them for the B2 First exam.</b></p>
                    <br>
                    By the end of this course, students will be able to:
                    <ul class="bullet-list">
                        <li>Understand the main ideas of complex texts on concrete and abstract concepts</li>
                        <li>Interact and socialise with native English speakers smoothly</li>
                        <li>Produce clear, detailed texts on a wide range of subjects</li>
                    </ul>
                </div>
            </div>
            
            <div class="level-card level-card-style3" data-aos="fade-right" data-aos-duration="3000">
                <div class="level-header level-header-style4">
                    <h3>Advanced Level (C1 Advanced)</h3>
                </div>
                <div class="level-body">
                    <p><b>This course is for learners who wish to use English for professional or higher education study purposes. By the end of this course, learners can take the C1 Advanced exam that meets the English language entrance requirements for many colleges, universities and companies worldwide.</b></p>
                    <br>
                    By the end of this course, students will be able to:
                    <ul class="bullet-list">
                        <li>Understand a wide range of demanding and lengthy texts</li>
                        <li>Recognise meanings that are not straightforward</li>
                        <li>Express himself/herself spontaneously and fluently</li>
                        <li>Use language flexibly for social, academic or professional purposes</li>
                    </ul>
                </div>
            </div>
            
            <div class="level-card level-card-style4" data-aos="fade-left" data-aos-duration="3000">
                <div class="level-header level-header-style5">
                    <h3>Proficient Level (C2 Proficiency)</h3>
                </div>
                <div class="level-body">
                    <p><b>This course is designed to prepare students for the final level of the Cambridge English exams, C2 Proficiency, where learners will reach the highest level of English proficiency. Universities and colleges throughout the world accept C2 Proficiency as a suitable English language entry requirement to courses of higher education or post-graduate study. It is also internationally recognised by many companies as an indication of a high level of competence in English. At this level, learners are approaching a standard of English similar to that of an educated native speaker.</b></p>
                    <br>
                    By the end of this course, students will be able to:
                    <ul class="bullet-list">
                        <li>Understand virtually everything heard or read with ease</li>
                        <li>Read, write, understand and speak at native English speakers' level</li>
                        <li>Express himself/herself spontaneously and fluently</li>
                    </ul>
                </div>
            </div>
        </div>

        <br />
        <div class="divider"></div>

        <h1 class="title" data-aos="fade-up" data-aos-duration="3000">
            Learners Exams
        </h1>
        <br />
        
        <div class="accordion-container">
            <div class="accordion" @click="toggleAccordion('a2')" :class="{ active: activeAccordion === 'a2' }">
                <div class="accordion-header">
                    <span class="accordion-title"><b>A2 Key Exam</b></span>
                    <span class="accordion-icon">{{ activeAccordion === 'a2' ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content" v-if="activeAccordion === 'a2'">
                    <p>The A2 Key examination is an elementary-level exam that tests learner ability to deal with basic written and spoken communications in simple situations.</p>
                    <p>An A2 certificate demonstrates that the learner can:</p>
                    <ul>
                        <li>Understand and use basic phrases and expressions</li>
                        <li>Understand basic written English</li>
                        <li>Communicate with English speakers at a basic level</li>
                    </ul>
                    <p>A2 Key has 3 components:</p>
                    <ul>
                        <li>Reading and Writing (60 Minutes)</li>
                        <li>Listening (30 Minutes)</li>
                        <li>Speaking(8-10 Minutes)</li>
                    </ul>
                    <p>Each component contributes to a profile which defines the candidate's overall communicative language ability at this level.</p>
                </div>
            </div>
            
            <div class="accordion" @click="toggleAccordion('b1')" :class="{ active: activeAccordion === 'b1' }">
                <div class="accordion-header">
                    <span class="accordion-title"><b>B1 Preliminary Exam</b></span>
                    <span class="accordion-icon">{{ activeAccordion === 'b1' ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content" v-if="activeAccordion === 'b1'">
                    <p>The B1 Preliminary examination is for candidates who can use every day written and spoken English at an intermediate level.</p>
                    <p>A B1 Preliminary certificate demonstrates that the learner can:</p>
                    <ul>
                        <li>Read simple textbooks and articles in English</li>
                        <li>Write emails & articles on real-life subjects</li>
                        <li>Understand factual information</li>
                        <li>Show awareness of opinions and mood in spoken and written English.</li>
                    </ul>
                    <p>B1 Preliminary has 4 components:</p>
                    <ul>
                        <li>Reading (45 Minutes)</li>
                        <li>Writing (45 Minutes)</li>
                        <li>Listening (30 Minutes)</li>
                        <li>Speaking (12 Minutes)</li>
                    </ul>
                    <p>Each of the four test components contributes to a profile which defines the candidate's overall communicative language ability at this level.</p>
                </div>
            </div>
            
            <div class="accordion" @click="toggleAccordion('b2')" :class="{ active: activeAccordion === 'b2' }">
                <div class="accordion-header">
                    <span class="accordion-title"><b>B2 First Exam</b></span>
                    <span class="accordion-icon">{{ activeAccordion === 'b2' ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content" v-if="activeAccordion === 'b2'">
                    <p>The B2 First examination is for candidates who has practical language skills for everyday written and spoken situations.</p>
                    <p>With a B2 First qualification, learners will be prepared to:</p>
                    <ul>
                        <li>Start working in an English-speaking environment</li>
                        <li>Study at an upper-intermediate level, such as foundation or pathway courses</li>
                        <li>Live independently in an English-speaking country</li>
                    </ul>
                    <p>B2 First has 4 components:</p>
                    <ul>
                        <li>Reading and Use of English (75 Minutes)</li>
                        <li>Writing (80 Minutes)</li>
                        <li>Listening (40 Minutes)</li>
                        <li>Speaking(14 Minutes)</li>
                    </ul>
                    <p>Each of the four test components contributes to a profile which defines the candidate's overall communicative language ability at this level.</p>
                </div>
            </div>
            
            <div class="accordion" @click="toggleAccordion('c1')" :class="{ active: activeAccordion === 'c1' }">
                <div class="accordion-header">
                    <span class="accordion-title"><b>C1 Advanced Exam</b></span>
                    <span class="accordion-icon">{{ activeAccordion === 'c1' ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content" v-if="activeAccordion === 'c1'">
                    <p>The C1 Advanced examination is for candidates who can communicate in English at an advanced level and wish to pursue a managerial or professional career, or to follow a course of academic study.</p>
                    <p>C1 Advanced is aimed at learners who need to show that they can:</p>
                    <ul>
                        <li>Enrol for an academic course at university level</li>
                        <li>Effectively interact with people at managerial or professional level</li>
                        <li>Conduct challenging research</li>
                    </ul>
                    <p>C1 Advanced has 4 components:</p>
                    <ul>
                        <li>Reading and Use of English (90 Minutes)</li>
                        <li>Writing (90 Minutes)</li>
                        <li>Listening (40 Minutes)</li>
                        <li>Speaking(15 Minutes)</li>
                    </ul>
                    <p>Each of the four test components contributes to a profile which defines the candidate's overall communicative language ability at this level.</p>
                </div>
            </div>
            
            <div class="accordion" @click="toggleAccordion('c2')" :class="{ active: activeAccordion === 'c2' }">
                <div class="accordion-header">
                    <span class="accordion-title"><b>C2 Proficiency Exam</b></span>
                    <span class="accordion-icon">{{ activeAccordion === 'c2' ? '−' : '+' }}</span>
                </div>
                <div class="accordion-content" v-if="activeAccordion === 'c2'">
                    <p>The C2 Proficiency examination is for candidates who have an appropriate level of educational and personal maturity and can use English for study or professional purposes. Success at this very advanced level exam represents a significant personal achievement.</p>
                    <p>C2 Proficiency is aimed for learners who need to show that they can:</p>
                    <ul>
                        <li>Follow a high level academic course and participate confidently in seminars and tutorials related to it</li>
                        <li>Lead and conduct research.</li>
                        <li>Partake in negotiation and persuasion at managerial and professional levels.</li>
                    </ul>
                    <p>C2 Proficiency has 4 components:</p>
                    <ul>
                        <li>Reading and Use of English (90 Minutes)</li>
                        <li>Writing (90 Minutes)</li>
                        <li>Listening (40 Minutes)</li>
                        <li>Speaking (16 Minutes)</li>
                    </ul>
                    <p>Each test components contributes to a profile which defines the candidate's overall communicative language ability at this level.</p>
                </div>
            </div>
        </div>

        <div class="full-width-text">
            <p class="paragraph mt-2" data-aos="fade-up" data-aos-duration="3000">
                By preparing for and successfully completing these exams, young learners not only gain a sense of accomplishment but also develop essential language skills that will serve them well in future academic and professional pursuits.
            </p>
        </div>

        <div class="button-container">
            <a href="/contact" class="custom-btn-contact">
                <!-- <span class="btn-icon">📞</span> -->
                Contact Us
            </a>
        </div>

        <div class="important-notice">
            <div class="important-header">
                <h1 style="color: red;">IMPORTANT</h1>
            </div>
            <div class="important-text">
                <h5>Before enrolling, all children will take a Placement Test to determine which course is best-suited to their level of English language proficiency.</h5>
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
    name: 'ForSchoolPage',
    components: {
        NavBar,
        FooterPage,
        ChatBot,
        ArrowButton
    },
    data() {
        return {
            logo: require('@/assets/Logo.png'),
            activeAccordion: null
        }
    },
    methods: {
        toggleAccordion(panel) {
            this.activeAccordion = this.activeAccordion === panel ? null : panel;
        }
    },
    mounted() {
        window.scrollTo(0, 0);
        AOS.init();
    }
}
</script>

<style scoped>
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

.content-row.reverse {
    flex-direction: row-reverse;
}

.content-col {
    flex: 1;
    min-width: 300px;
}

.content-col-full {
    flex: 100%;
    min-width: 100%;
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

.full-width-text {
    margin: 20px 0;
}

.divider {
    height: 2px;
    background-color: #e0e0e0;
    margin: 40px 0;
    width: 100%;
}

/* Course Details */
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

.age-card {
    cursor: pointer;
    transition: all 0.3s ease;
}

.age-range-animation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin-bottom: 10px;
}

.age-number {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FF5F15 0%, #FBB700 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
    animation: pulseAge 2s infinite;
}

.age-13 {
    animation-delay: 0s;
}

.age-18 {
    animation-delay: 0.5s;
}



@keyframes pulseAge {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 rgba(255, 95, 21, 0.4);
    }
    50% {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba(255, 95, 21, 0.6);
    }
}

.age-progression {
    position: relative;
    width: 80px;
    height: 20px;
    margin: 5px 0;
}

.progression-line {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #FF5F15, #FBB700);
    transform: translateY(-50%);
}

.progression-dots {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

.progression-dot {
    width: 8px;
    height: 8px;
    background: #FF5F15;
    border-radius: 50%;
    animation: dotBounce 1.5s infinite;
}

.progression-dot:nth-child(1) { animation-delay: 0s; }
.progression-dot:nth-child(2) { animation-delay: 0.3s; }
.progression-dot:nth-child(3) { animation-delay: 0.6s; }
.progression-dot:nth-child(4) { animation-delay: 0.9s; }
.progression-dot:nth-child(5) { animation-delay: 1.2s; }

@keyframes dotBounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
        background: #FBB700;
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
    width: 80px;
    height: 80px;
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

/* Programme Levels */
.program-levels {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 30px 0;
}

.level-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
}

.level-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.level-card-style{
    border-left: 4px solid #FBB700;
}

.level-card-style1{
    border-left: 4px solid #FF9800;
}

.level-card-style2{
    border-left: 4px solid #4CAF50;
}

.level-card-style3{
    border-left: 4px solid #2196F3;
}

.level-card-style4{
    border-left: 4px solid #E91E63;
}


.level-header {
    padding: 20px;
    color: black;
}

.level-header h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
}

.level-header-style1{
    background: linear-gradient(135deg, #FBB700, #FFCC00);
}

.level-header-style2{
    background: linear-gradient(135deg, #FF9800, #FFB74D);
}

.level-header-style3{
    background: linear-gradient(135deg, #4CAF50, #81C784);
}

.level-header-style4{
    background: linear-gradient(135deg, #2196F3, #64B5F6);
}

.level-header-style5{
    background: linear-gradient(135deg, #E91E63, #F48FB1);
}

.level-body {
    padding: 20px;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    text-align: justify;
}

.bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 10px 0;
}

.bullet-list li {
    margin-bottom: 8px;
    line-height: 1.5;
}

/* Accordion */
.accordion-container {
    margin: 30px 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.accordion {
    border-bottom: 1px solid #e0e0e0;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.accordion:last-child {
    border-bottom: none;
}

.accordion.active {
    background: #f9f9f9;
}

.accordion-header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 500;
}

.accordion-title {
    color: #5E0000;
    font-weight: bold;
}

.accordion-icon {
    font-size: 1.5rem;
    font-weight: bold;
    color: #FF5F15;
}

.accordion-content {
    padding: 0 20px 20px 20px;
    animation: slideDown 0.3s ease-out;
    text-align: justify;
}

.accordion-content p {
    margin-bottom: 10px;
    line-height: 1.6;
}

.accordion-content ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 10px 0;
}

.accordion-content li {
    margin-bottom: 8px;
    line-height: 1.5;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Button and Notice */
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

.btn-icon {
    font-size: 20px;
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
@media (max-width: 992px) {
    .stats-row {
        gap: 15px;
    }
    
    .custom-card {
        width: 180px;
        height: 180px;
    }
    
    .card-image {
        width: 70px;
        height: 70px;
    }
}

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
    
    .card-image {
        width: 60px;
        height: 60px;
    }
    
    .card-title {
        font-size: 0.9rem;
    }
    
    .card-text {
        font-size: 0.8rem;
    }
    
    .age-number {
        width: 40px;
        height: 40px;
        font-size: 16px;
    }
    
    .age-progression {
        width: 70px;
    }
    
    .progression-dot {
        width: 6px;
        height: 6px;
    }
    
    .level-header h3 {
        font-size: 1.1rem;
    }
    
    .accordion-header {
        padding: 15px;
        font-size: 1rem;
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
        height: 160px;
        padding: 10px;
    }
    
    .card-image {
        width: 50px;
        height: 50px;
    }
    
    .card-title {
        font-size: 0.85rem;
    }
    
    .age-number {
        width: 35px;
        height: 35px;
        font-size: 14px;
    }
    
    .age-progression {
        width: 60px;
        height: 15px;
    }
    
    .progression-dot {
        width: 5px;
        height: 5px;
    }
    
    .level-header {
        padding: 15px;
    }
    
    .level-header h3 {
        font-size: 1rem;
    }
    
    .level-body {
        padding: 15px;
        font-size: 0.9rem;
    }
    
    .custom-btn-contact {
        font-size: 14px;
        padding: 8px 20px;
    }
    
    .important-text h5 {
        font-size: 0.9rem;
    }
}
</style>
import { createRouter, createWebHistory } from 'vue-router'

// ── Main Pages ────────────────────────────────────────────────────────────
const HomePage       = () => import(/* webpackChunkName: "home"    */ '../components/HomePage.vue')
const AboutUs        = () => import(/* webpackChunkName: "about"   */ '../components/AboutUs.vue')
const CoursePage     = () => import(/* webpackChunkName: "courses" */ '../components/CoursePage.vue')
const CoreValuesPage = () => import(/* webpackChunkName: "pages"   */ '../components/CoreValuesPage.vue')
const ContactUsPage  = () => import(/* webpackChunkName: "pages"   */ '../components/ContactUsPage.vue')
const NewsEventPage  = () => import(/* webpackChunkName: "pages"   */ '../components/NewsEventPage.vue')
const CareersPage    = () => import(/* webpackChunkName: "pages"   */ '../components/CareersPage.vue')
const GalleryPage    = () => import(/* webpackChunkName: "pages"   */ '../components/GalleryPage.vue')
const PrivacyPolicy  = () => import(/* webpackChunkName: "pages"   */ '../components/PrivacyPolicy.vue')

// ── Courses ───────────────────────────────────────────────────────────────
const PreschoolPage          = () => import(/* webpackChunkName: "courses" */ '../components/courses/PreschoolPage.vue')
const YoungLearnersPage      = () => import(/* webpackChunkName: "courses" */ '../components/courses/YoungLearnersPage.vue')
const ForSchoolPage          = () => import(/* webpackChunkName: "courses" */ '../components/courses/ForSchoolPage.vue')
const EnglishskillsforOLPage = () => import(/* webpackChunkName: "courses" */ '../components/courses/EnglishskillsforOLPage.vue')
const EnglishskillsforALPage = () => import(/* webpackChunkName: "courses" */ '../components/courses/EnglishskillsforALPage.vue')
const IELTSPage              = () => import(/* webpackChunkName: "courses" */ '../components/courses/IELTSPage.vue')

// ── Branches ──────────────────────────────────────────────────────────────
const AmbalangodaBranch = () => import(/* webpackChunkName: "branches" */ '../components/branches/AmbalangodaBranch.vue')
const GalleBranch       = () => import(/* webpackChunkName: "branches" */ '../components/branches/GalleBranch.vue')
const MataraBranch      = () => import(/* webpackChunkName: "branches" */ '../components/branches/MataraBranch.vue')
const PiliyandalaBranch = () => import(/* webpackChunkName: "branches" */ '../components/branches/PiliyandalaBranch.vue')
const HoranaBranch      = () => import(/* webpackChunkName: "branches" */ '../components/branches/HoranaBranch.vue')
const KalutaraBranch    = () => import(/* webpackChunkName: "branches" */ '../components/branches/KalutaraBranch.vue')

// ─────────────────────────────────────────────────────────────────────────
const BASE_URL = 'https://www.ccbe.lk'

const routes = [

  // ── Main Pages ──────────────────────────────────────────────────────────
  {
    path: '/', name: 'HomePage', component: HomePage,
    meta: {
      title: 'Home | Cambridge College of British English',
      description: 'Cambridge College of British English (CCBE) — Sri Lanka\'s premier Cambridge English exam preparation centre. English courses for all ages across 6 branches island-wide.',
      canonical: `${BASE_URL}/`
    }
  },
  {
    path: '/about', name: 'AboutUs', component: AboutUs,
    meta: {
      title: 'About Us | CCBE',
      description: 'Learn about CCBE — established in 2015 as a designated Cambridge Qualifications registration centre for the British Council in Sri Lanka. Our vision, mission, and branch network.',
      canonical: `${BASE_URL}/about`
    }
  },
  {
    path: '/courses', name: 'CoursePage', component: CoursePage,
    meta: {
      title: 'Our Programmes | CCBE',
      description: 'Explore CCBE\'s English programmes — Pre-Schoolers, Young Learners, For Schools, O/L English, A/L English, and IELTS preparation. Expert-led courses for every age group.',
      canonical: `${BASE_URL}/courses`
    }
  },
  {
    path: '/corevalues', name: 'CoreValuesPage', component: CoreValuesPage,
    meta: {
      title: 'Core Values | CCBE',
      description: 'Discover the core values that define CCBE — state-of-the-art classrooms, qualified teachers, monthly skill evaluations, child safeguarding, and a student-centric environment.',
      canonical: `${BASE_URL}/corevalues`
    }
  },
  {
    path: '/contact', name: 'contact', component: ContactUsPage,
    meta: {
      title: 'Contact Us | CCBE',
      description: 'Get in touch with Cambridge College of British English. Find our 6 branch locations across Sri Lanka — Galle, Ambalangoda, Matara, Piliyandala, Horana, and Kalutara.',
      canonical: `${BASE_URL}/contact`
    }
  },
  {
    path: '/news', name: 'NewsEventPage', component: NewsEventPage,
    meta: {
      title: 'News & Events | CCBE',
      description: 'Stay up to date with the latest news, events, achievements, and community initiatives from Cambridge College of British English.',
      canonical: `${BASE_URL}/news`
    }
  },
  {
    path: '/careers', name: 'CareersPage', component: CareersPage,
    meta: {
      title: 'Careers | CCBE',
      description: 'Join the CCBE team. Explore career opportunities at Cambridge College of British English — one of Sri Lanka\'s leading English language institutions.',
      canonical: `${BASE_URL}/careers`
    }
  },
  {
    path: '/gallery', name: 'GalleryPage', component: GalleryPage,
    meta: {
      title: 'Gallery | CCBE',
      description: 'Browse photos and highlights from CCBE events, student activities, award ceremonies, and community programmes across all our branches.',
      canonical: `${BASE_URL}/gallery`
    }
  },
  {
    path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy | CCBE',
      description: 'Read the Cambridge College of British English Privacy Policy — how we collect, use, and protect your personal information.',
      canonical: `${BASE_URL}/privacy-policy`
    }
  },

  // ── Courses ─────────────────────────────────────────────────────────────
  {
    path: '/courses/preschool', name: 'PreschoolPage', component: PreschoolPage,
    meta: {
      title: 'Pre Schoolers English Programme | CCBE',
      description: 'CCBE\'s Pre-Schoolers programme introduces children aged 3–5 to English in a fun, nurturing environment. Building foundational reading and speaking skills from day one.',
      canonical: `${BASE_URL}/courses/preschool`
    }
  },
  {
    path: '/courses/younglearners', name: 'YoungLearnersPage', component: YoungLearnersPage,
    meta: {
      title: 'Young Learners English Programme | CCBE',
      description: 'Engaging English programme for children aged 6–12. CCBE\'s Young Learners course builds confidence and fluency through interactive activities and Cambridge-aligned content.',
      canonical: `${BASE_URL}/courses/younglearners`
    }
  },
  {
    path: '/courses/forschool', name: 'ForSchoolPage', component: ForSchoolPage,
    meta: {
      title: 'English For Schools Programme | CCBE',
      description: 'CCBE\'s For Schools programme supports students aged 13–18 with academic English, communication skills, and Cambridge exam preparation tailored for school curricula.',
      canonical: `${BASE_URL}/courses/forschool`
    }
  },
  {
    path: '/courses/ol', name: 'EnglishskillsforOLPage', component: EnglishskillsforOLPage,
    meta: {
      title: "English Skills for O/L Students | CCBE",
      description: "Prepare for your O/Level English exam with CCBE. Our targeted programme builds reading, writing, listening, and speaking skills to maximise your exam results.",
      canonical: `${BASE_URL}/courses/ol`
    }
  },
  {
    path: '/courses/al', name: 'EnglishskillsforALPage', component: EnglishskillsforALPage,
    meta: {
      title: "English Skills for A/L Students | CCBE",
      description: "Advance your English proficiency for A/Levels and beyond. CCBE's A/L programme prepares students for academic success and future career opportunities.",
      canonical: `${BASE_URL}/courses/al`
    }
  },
  {
    path: '/courses/ielts', name: 'IELTSPage', component: IELTSPage,
    meta: {
      title: 'IELTS Preparation Course | CCBE',
      description: 'Achieve your target IELTS band score with CCBE\'s comprehensive preparation course. Expert coaching across all four modules — Listening, Reading, Writing, and Speaking.',
      canonical: `${BASE_URL}/courses/ielts`
    }
  },

  // ── Branches ────────────────────────────────────────────────────────────
  {
    path: '/about/ambalangoda', name: 'AmabalngodaBranch', component: AmbalangodaBranch,
    meta: {
      title: 'CCBE Ambalangoda Branch',
      description: 'Cambridge College of British English Ambalangoda — No 97, New Rd, Ambalangoda 80300. Call: +94 91 2252 452. Enrol in English courses near you.',
      canonical: `${BASE_URL}/about/ambalangoda`
    }
  },
  {
    path: '/about/galle', name: 'GalleBranch', component: GalleBranch,
    meta: {
      title: 'CCBE Galle Branch',
      description: 'Cambridge College of British English Galle — 118, Old Matara Rd, Galle 80000. Call: +94 91 22 37373. English courses and Cambridge exam preparation in Galle.',
      canonical: `${BASE_URL}/about/galle`
    }
  },
  {
    path: '/about/matara', name: 'MataraBranch', component: MataraBranch,
    meta: {
      title: 'CCBE Matara Branch',
      description: 'Cambridge College of British English Matara — No 352, Kumarathunga Mw, Matara 81000. Call: +94 41 2050 200. Quality English education in Matara.',
      canonical: `${BASE_URL}/about/matara`
    }
  },
  {
    path: '/about/piliyandala', name: 'PiliyandalaBranch', component: PiliyandalaBranch,
    meta: {
      title: 'CCBE Piliyandala Branch',
      description: 'Cambridge College of British English Piliyandala — Moratuwa Rd, Suwarapola, Piliyandala 10300. Call: +94 11 2 180 008. English courses in Piliyandala.',
      canonical: `${BASE_URL}/about/piliyandala`
    }
  },
  {
    path: '/about/horana', name: 'HoranaBranch', component: HoranaBranch,
    meta: {
      title: 'CCBE Horana Branch',
      description: 'Cambridge College of British English Horana — No 149, Graceland Circular Rd, Horana 12400. English language courses and Cambridge exam preparation in Horana.',
      canonical: `${BASE_URL}/about/horana`
    }
  },
  {
    path: '/about/kalutara', name: 'KalutaraBranch', component: KalutaraBranch,
    meta: {
      title: 'CCBE Kalutara Branch',
      description: 'Cambridge College of British English Kalutara — No 85, Maha Waskaduwa, Kalutara 12580. Quality Cambridge English courses now available in Kalutara.',
      canonical: `${BASE_URL}/about/kalutara`
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

// ── On every navigation: update <title>, <meta description>,
//    <link canonical>, and Open Graph tags dynamically ─────────────────────
router.afterEach((to) => {
  const title       = to.meta?.title       || 'Cambridge College of British English | CCBE Sri Lanka'
  const description = to.meta?.description || 'Cambridge College of British English (CCBE) — Sri Lanka\'s premier Cambridge English exam preparation centre.'
  const canonical   = to.meta?.canonical   || `${BASE_URL}${to.path}`

  // Title
  document.title = title

  // Meta description
  let descTag = document.querySelector('meta[name="description"]')
  if (!descTag) {
    descTag = document.createElement('meta')
    descTag.setAttribute('name', 'description')
    document.head.appendChild(descTag)
  }
  descTag.setAttribute('content', description)

  // Canonical
  let canonicalTag = document.querySelector('link[rel="canonical"]')
  if (!canonicalTag) {
    canonicalTag = document.createElement('link')
    canonicalTag.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalTag)
  }
  canonicalTag.setAttribute('href', canonical)

  // Open Graph — URL, title, description
  const ogMap = {
    'og:url':         canonical,
    'og:title':       title,
    'og:description': description,
  }
  Object.entries(ogMap).forEach(([prop, val]) => {
    let tag = document.querySelector(`meta[property="${prop}"]`)
    if (tag) tag.setAttribute('content', val)
  })
})

export default router
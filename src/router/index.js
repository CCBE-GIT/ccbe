import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'


// Import your components
const HomePage = () => import('../components/HomePage.vue');
const AboutUs = () => import('../components/AboutUs.vue');
const CoursePage = () => import('../components/CoursePage.vue');
const CoreValuesPage = () => import('../components/CoreValuesPage.vue');
const ContactUsPage = () => import('../components/ContactUsPage.vue');
const NewsEventPage = () => import('../components/NewsEventPage.vue');
const CareersPage = () => import('../components/CareersPage.vue');

//Cources
const PreschoolPage = () => import('../components/courses/PreschoolPage.vue');
const YoungLearnersPage = () => import('../components/courses/YoungLearnersPage.vue');
const ForSchoolPage = () => import('../components/courses/ForSchoolPage.vue');
const EnglishskillsforOLPage = () => import('../components/courses/EnglishskillsforOLPage.vue');
const EnglishskillsforALPage = () => import('../components/courses/EnglishskillsforALPage.vue');
const IELTSPage = () => import('../components/courses/IELTSPage.vue');

//Branches
const AmbalangodaBranch = () => import('../components/branches/AmbalangodaBranch.vue');
const GalleBranch = () => import('../components/branches/GalleBranch.vue');
const MataraBranch = () => import('../components/branches/MataraBranch.vue');
const PiliyandalaBranch = () => import('../components/branches/PiliyandalaBranch.vue');
const HoranaBranch = () => import('../components/branches/HoranaBranch.vue');
const KalutaraBranch = () => import('../components/branches/KalutaraBranch.vue');

const routes = [
  {path: '/', name: 'HomePage',component: HomePage},
  {path: '/about',name: 'AboutUs',component: AboutUs},
  {path: '/courses',name: 'CoursePage',component: CoursePage,},
  {path: '/corevalues',name: 'CoreValuesPage',component: CoreValuesPage,},
  {path: '/contact',name: 'contact',component: ContactUsPage,},
  {path: '/news',name: 'NewsEventPage',component: NewsEventPage ,},
  {path: '/careers',name: 'CareersPage',component: CareersPage ,},


  {path: '/courses/preschool',name: 'PreschoolPage',component: PreschoolPage,},
  {path: '/courses/younglearners',name: 'YoungLearnersPage',component: YoungLearnersPage,},
  {path: '/courses/forschool',name: 'ForSchoolPage',component: ForSchoolPage,},
  {path: '/courses/ol',name: 'EnglishskillsforOLPage',component: EnglishskillsforOLPage,},
  {path: '/courses/al',name: 'EnglishskillsforALPage',component: EnglishskillsforALPage,},
  {path: '/courses/ielts',name: 'IELTSPage',component: IELTSPage,},

  {path: '/about/ambalangoda',name: 'AmabalngodaBranch',component: AmbalangodaBranch,},
  {path: '/about/galle',name: 'GalleBranch',component: GalleBranch,},
  {path: '/about/matara',name: 'MataraBranch',component: MataraBranch,},
  {path: '/about/piliyandala',name: 'PiliyandalaBranch',component: PiliyandalaBranch,},
  {path: '/about/horana',name: 'HoranaBranch',component: HoranaBranch,},
  {path: '/about/kalutara',name: 'KalutaraBranch',component: KalutaraBranch,},
/*
  {path: '/contact/ambalangoda',name: 'AmabalngodaBranch',component: AmbalangodaBranch,},
  {path: '/contact/galle',name: 'GalleBranch',component: GalleBranch,},
  {path: '/contact/matara',name: 'MataraBranch',component: MataraBranch,},
  {path: '/contact/piliyandala',name: 'PiliyandalaBranch',component: PiliyandalaBranch,},
  {path: '/contact/horana',name: 'HoranaBranch',component: HoranaBranch,},*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;

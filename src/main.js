import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// AOS for animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
})

// Load fonts
loadFonts()

// Create and mount the app
createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
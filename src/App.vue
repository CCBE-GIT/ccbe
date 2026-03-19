<template>
  <div id="app">
    <router-view></router-view> <!-- This is where routed components will be shown -->
    <CookieConsent /> 
  </div>
</template>

<script>
import CookieConsent from '@/components/CookieConsent.vue';

export default {
  name: 'App',
  components: { CookieConsent }

}
</script>

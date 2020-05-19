<template>
  <v-app>
    <Toolbar id='margern'/>
    <router-view/>
    <Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'

export default Vue.extend({
  name: 'App',
  components: {
    Toolbar,
    Footer
  }
})
</script>
<style scoped>
  #margern{
    margin-bottom:35px;
  }
</style>

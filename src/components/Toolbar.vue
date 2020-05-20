<template>
<v-div>
  <v-system-bar fixed color="primary darken-1"></v-system-bar>

  <v-app-bar
      color="primary"
      dark
      fixed
      flat
      id='paraversystembar'
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon
          size="50px" id="iconologo"
        >
          mdi-chef-hat
        </v-icon>
      </v-toolbar-title>
      <v-toolbar-title>
        <v-img :src="require('../assets/logo.png')" width='240px'></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-col
        cols="3"
        md="3"
      >
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-col>

      <v-btn icon>
        <v-icon>mdi-cart-arrow-down</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>

    </v-app-bar>

  <v-progress-linear
    :active="loading"
    :indeterminate="loading"
    absolute
    bottom
    color="deep-purple accent-4"
  ></v-progress-linear>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >

      <v-img :aspect-ratio="16/9" :src="require('../assets/comida.jpg')">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subheading">Yasniel Fajardo Egues</div>
            <div class="body-1">yasnielfajardo@nauta.cu</div>
          </v-col>
        </v-row>
      </v-img>

        <v-list rounded>
          <v-subheader>ACCIONES</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon >mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title >INICIO</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="/about">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon >mdi-book-information-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title >SOBRE NOSOTROS</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
            <router-link to="/contact">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon >mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title >CONTÁCTO</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
  </v-div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiAccount } from '@mdi/js'

export default Vue.extend({
  name: 'Toolbar',
  components: {
  },
  props: ['drawer'],
  data: () => ({
    drawer: true,
    loading: false,
    svgPath: mdiAccount,
    width: 300,
    item: 1,
    items: [
      { text: 'Home', icon: 'mdi-home', route: '/' },
      { text: 'About', icon: 'insert_drive_file', route: '/abaut' },
      { text: 'Contact', icon: 'people_outline', route: '/contact' },
      { text: 'Login', icon: 'mdi-flag', route: '/' }
    ]
  }),
  watch: {
    loading (val) {
      if (!val) return
      setTimeout(() => (this.loading = false), 3000)
    }
  }
})
</script>
<style scoped>
  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
  #paraversystembar{
    top:22px;
  }
  #iconologo{
    position: fixed !important;
    top:2px !important;
    left: 50px !important;
  }
</style>

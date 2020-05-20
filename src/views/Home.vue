<template>
  <div class="home">
    <Carousels/>
    <Info/>

    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn id="botonvermas" dark v-on="on"><strong>VER MÁS <v-icon>mdi-more</v-icon></strong></v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <v-subheader>User Controls</v-subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Content filtering</v-list-item-title>
                <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-subheader>General</v-subheader>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="notifications"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="widgets"></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>

    <Cards id="cadsdestacados"/>
    <Platosnuevos/>
    <Info3/>
    <Parallax/>
    <Info2/>
    <Dialogregistro/>
  </div>
</template>

<script>import Vue from 'vue'
import Cards from '@/components/Cards.vue'
import Carousels from '@/components/Carousels'
import Info from '@/components/Info'
import Info2 from '@/components/Info2'
import Info3 from '@/components/Info3'
import Platosnuevos from '@/components/Platosnuevos'
import Parallax from '@/components/Parallax'
import Dialogregistro from '@/components/Dialogregistro'
export default {
  name: 'Home',
  components: {
    Cards,
    Info,
    Info2,
    Info3,
    Carousels,
    Platosnuevos,
    Dialogregistro,
    Parallax
  },
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  }
}
</script>
<style>
  #botonvermas{
    background: #12a300 !important;
    position: absolute !important;
    color: white;
    top: 390px;
    left: 10%;
    width: 160px;
    height: 50px;
    font-style: inherit;
    border-radius: 8px !important;
    transition: 0.9s;
    animation-duration: 1.5s;
    animation-name: qwer;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes qwer {
    from {
      background: #af0500;
    }
    to {
    }
  }
  #botonvermas:hover{
    background: #af0500 !important;
    position: absolute !important;
    top: 390px;
    left: 10%;
    width: 160px;
    height: 50px;
    color: white;
    font-style: inherit;
    border-radius: 8px !important;
    border: solid;
    transition: 0.9s;
  }
  #cadsdestacados{
    margin-top: 5px;
    margin-bottom: 10px;
  }
</style>

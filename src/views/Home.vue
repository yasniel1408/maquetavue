<template>
  <div class="home">
     <Carousels/>
     <Info/>
     <v-btn id="botonvermas"><strong>VER MÁS</strong></v-btn>
     <Cards id="cadsdestacados"/>
    <Platosnuevos/>
    <Parallax/>
  </div>
</template>

<script>import Vue from 'vue'
import Cards from '@/components/Cards.vue'
import Carousels from '@/components/Carousels'
import Info from '@/components/Info'
import Platosnuevos from '@/components/Platosnuevos'
import Parallax from '@/components/Parallax'
export default {
  name: 'Home',
  components: {
    Cards,
    Info,
    Carousels,
    Platosnuevos,
    Parallax
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
  }
  #botonvermas:hover{
    background: #8919a3 !important;
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

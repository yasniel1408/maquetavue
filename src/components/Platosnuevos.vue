<template>
  <v-container id="platosextreno">
    <v-container>
      <h1 id="textoplatosextreno">Platos en extreno</h1>
    </v-container>
      <v-row>
        <Cardlimpio/>
        <Cardlimpio/>
        <Cardlimpio/>
        <Cardlimpio/>
        <Cardlimpio/>
        <Cardlimpio/>
        <Cardlimpio/>
        <Cardlimpio/>
      </v-row>
  </v-container>
</template>
<script>
import Cardlimpio from '@/components/Cardlimpio.vue'
export default {
  components: {
    Cardlimpio
  }
}
</script>
<style>

  #textoplatosextreno{
    font-size: 50px;
    text-align: center !important;
    margin-left: 20px;
    margin-bottom: 10px;
  }
  #platosextreno{
    margin-bottom: 150px;
  }

</style>

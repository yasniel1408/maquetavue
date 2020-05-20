<template>
  <v-container id="platosextreno">
    <v-container>
      <h1 id="textoplatosextreno">Platos en extreno</h1>
    </v-container>
      <v-row>
        <Cardsextreno/>
      </v-row>
  </v-container>
</template>
<script>
import Cardsextreno from '@/components/Cardsextreno.vue'
export default {
  components: {
    Cardsextreno
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
    margin-bottom: 80px;
  }

</style>

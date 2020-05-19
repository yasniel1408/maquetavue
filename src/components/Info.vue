<template>
  <v-card
    class="mx-auto white--text"
    max-width="344"
    outlined
    id="cardtransparenteinfo"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4 white--text">LA SENSACIÓN DEL MOMENTO</div>
        <v-list-item-title class="headline mb-1 white--text" id="sensacion">Más Sabor</v-list-item-title>
        <v-list-item-subtitle class="white--text" id="textodesc">Los mejores productos echos para ti</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ><v-img :src="require('../assets/search1.jpg')" width='240px'></v-img></v-list-item-avatar>
    </v-list-item>

  </v-card>
</template>

<style>
  #cardtransparenteinfo{
    position: absolute;
    top: 220px;
    height: 200px !important;
    left: 9%;
    background: transparent;
    color:white !important;
    border-color: transparent !important;
  }

  #sensacion{
    font-size: 40px !important;
  }

  #textodesc{
    font-size: 20px !important;
    font-style: italic;
  }
</style>

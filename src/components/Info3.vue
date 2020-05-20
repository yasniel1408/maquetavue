<template>
  <v-container>
  <v-card
    class="mx-auto"
    max-width="100%"
    outlined
    id="cardtransparenteinfo3"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">EXPERIMENTE UN SABOR ÚNICO Y VERDADERAMENTE INCREIBLE</v-list-item-title>
        <v-list-item-subtitle>Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="120"
        color="grey"
      >
        <v-img :src="require('../assets/ffff.png')"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text color="secondary">COMPARTIR</v-btn>
      <v-btn text color="primary">VER MÁS</v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<style>
  #cardtransparenteinfo3{
    margin-bottom: 70px;
  }

  #sensacion{
    font-size: 40px !important;
  }

  #textodesc{
    font-size: 20px !important;
    font-style: italic;
  }
</style>

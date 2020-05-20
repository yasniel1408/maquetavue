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
        <v-list-item-title class="headline mb-1 white--text" id="sensacion">DELÉITATE</v-list-item-title>
        <v-list-item-subtitle class="white--text" id="textodesc">Los mejores productos echos para ti</v-list-item-subtitle>
      </v-list-item-content>
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
    font-size: 20px !important;
  }

  #textodesc{
    font-size: 30px !important;
    font-style: oblique;
  }
</style>

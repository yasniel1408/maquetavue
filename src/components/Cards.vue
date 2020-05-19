<template id="destacados" xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container >

      <v-row>
        <v-container>
        <h1 id="textoproductosdestacados">Productos Destacados</h1>
        </v-container>
        <v-banner two-line id="textodescripcion">
          <v-avatar
            slot="icon"
            color="primary accent-4"
            size="40"
          >
            <v-icon
              icon="mdi-heart"
              color="white"
            >
              mdi-heart
            </v-icon>
          </v-avatar>
          Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.
          <template v-slot:actions>
            <v-btn text color="primary">VER TODOS</v-btn>
          </template>
        </v-banner>
      </v-row>

      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'Dulces', src: require('../assets/cookies.jpg'), flex: 8 },
      { title: 'Bebidas', src: require('../assets/cafe.png'), flex: 4 },
      { title: 'Frutas', src: require('../assets/caprese.jpg'), flex: 6 },
      { title: 'Carnes', src: require('../assets/ropa-vieja-04.jpg'), flex: 6 }
    ]
  })
}
</script>
<style>

  #destacados{
    margin-top: 90px !important;
  }

  #textoproductosdestacados{
    font-size: 50px;
    text-align: center !important;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  #textodescripcion{
    margin-bottom: 30px;
  }

</style>

<template>
  <v-container >

    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="6"
        md="3"
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
      { title: '$50.00', src: require('../assets/hj.png'), flex: 3 },
      { title: '$20.00', src: require('../assets/home-3.jpg'), flex: 3 },
      { title: '$15.00', src: require('../assets/ghjg.jpg'), flex: 3 },
      { title: '$78.00', src: require('../assets/fdas.jpg'), flex: 3 }
    ]
  })
}
</script>
<style>

</style>

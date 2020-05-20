<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined id="cardtransparenteinfo2"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">LA SENSACIÓN DEL MOMENTO</div>
        <v-list-item-title class="headline mb-1">Todo Sabroso</v-list-item-title>
        <v-list-item-subtitle>No dude en contactarnos y compartirnos con sus amigos!</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img :src="require('../assets/search1.jpg')" width='240px'></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn color="secondary"><v-icon>mdi-contact-mail</v-icon>Contactar</v-btn>
      <div class="text-center">
        <v-btn
          :disabled="dialog"
          :loading="dialog"
          class="white--text"
          color="primary"
          @click="dialog = true"
        >
          <v-icon>mdi-share-variant</v-icon>Compartir
        </v-btn>
        <v-dialog
          v-model="dialog"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            color="primary"
            dark
          >
            <v-card-text>
              Please stand by
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  watch: {
    dialog (val) {
      if (!val) return
      setTimeout(() => (this.dialog = false), 4000)
    }
  }
}
</script>

<style>
  #cardtransparenteinfo2{
    position: absolute;
    top: 82%;
    height: 200px !important;
    right: 9%;
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

<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="primary darken-3 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Yasniel Fajardo Egues</strong>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-youtube</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-snapchat</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-google</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-pinterest</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete'
    ],
    items: [
      'default',
      'absolute',
      'fixed'
    ],
    padless: false,
    variant: 'default'
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>

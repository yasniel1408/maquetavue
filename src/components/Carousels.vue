<template>
  <v-carousel
    continuous="false"
    cycle="false"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: require('../assets/hdbgf.jpg')
        },
        {
          src: require('../assets/dfg.jpg')
        },
        {
          src: require('../assets/comidacubana11_800.jpg')
        },
        {
          src: require('../assets/tamal-en-cazuela-cuban-tradition_hero.jpg')
        }
      ]
    }
  }
}
</script>

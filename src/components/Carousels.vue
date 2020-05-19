<template>
  <v-carousel
    continuous="false"
    cycle="false"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: require('../assets/1.jpg')
        },
        {
          src: require('../assets/2.jpg')
        },
        {
          src: require('../assets/3.jpg')
        },
        {
          src: require('../assets/4.jpg')
        }
      ]
    }
  }
}
</script>

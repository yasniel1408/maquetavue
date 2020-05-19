<template>
  <div class="home">
     <Carousels/>
     <Card/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Carousels from '@/components/Carousels'
export default {
  name: 'Home',
  components: {
    Card,
    Carousels
  }
}
</script>

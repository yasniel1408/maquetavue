import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    themes: {
      light: {
        primary: '#5900bf',
        secondary: '#b0bec5',
        anchor: '#8c9eff'
      }
    }
  }
})

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  NavigationPlugin from './plugins/navigation.js'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme', // Nama tema default
    themes: {
      myCustomTheme: {
        dark: false, // Tema terang
        colors: {
          primary: '#61acc0', // Warna utama
          secondary: '#8cc061', // Warna sekunder
          background: '#f7f7f7', // Warna latar belakang
          surface: '#e1f4f6', // Warna untuk elemen permukaan
          error: '#e63946', // Warna error
          info: '#5aa5c8', // Warna info
          success: '#41b883', // Warna sukses
          warning: '#f4a261', // Warna peringatan
        },
      },
      myDarkTheme: {
        dark: true, // Tema gelap
        colors: {
          primary: '#61acc0', // Warna utama tetap
          secondary: '#c0618b', // Warna sekunder yang lebih gelap
          background: '#121212', // Warna latar belakang gelap
          surface: '#1E1E1E', // Warna untuk elemen permukaan gelap
          error: '#CF6679', // Warna error gelap
          info: '#81D4FA', // Warna info gelap
          success: '#41b883', // Warna sukses tetap
          warning: '#FB8C00', // Warna peringatan gelap
        },
      },
    },
  },

})

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(NavigationPlugin)
app.mount('#app');

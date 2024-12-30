import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Vuetify and styles
import 'vuetify/styles' 
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' 

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', 
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#8B0000', // Dark red
          'primary-darken-1': '#660000', // Darker red
          'primary-lighten-1': '#A52A2A', // Lighter red
          background: '#F5F5F1', // Warm light gray
          surface: '#F5F5F1',    // Match background color
        },
      },
    },
  },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

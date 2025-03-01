// import './assets/main.css'

import { createApp } from 'vue'

import axios from 'axios'
import { Oruga } from '@oruga-ui/oruga-next'

import '@oruga-ui/theme-oruga/dist/oruga.css'
import '@mdi/font/css/materialdesignicons.min.css'

import './css/main.css'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

// axios
app.config.globalProperties.$axios = axios
window.axios = axios

// oruga - router
app.use(Oruga).use(router)

app.mount('#app')

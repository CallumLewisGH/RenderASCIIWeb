import './assets/styles/tailwind.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './src/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

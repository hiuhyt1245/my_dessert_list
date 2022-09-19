import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/global.scss'
import "./assets/reset.scss"
import router from './router'

createApp(App).use(createPinia()).use(router).mount('#app')

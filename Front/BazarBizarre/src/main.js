import { createApp } from 'vue'
import store from './store/main.js'
import App from './App.vue'
import router from './router'
import "./style.css"

createApp(App).use(store).use(router).mount('#app')

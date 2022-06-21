import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './components/index123'
import router from './router'
import { createPinia } from 'pinia'
import i18n from './i18n'

const app = createApp(App)
app.use(i18n)
  .use(createPinia)
  .use(router)
  .mount('#app')
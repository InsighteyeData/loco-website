import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import quasarUserOptions from './quasar-user-option'

// 創建 Vue 應用
const app = createApp(App)

app.use(Quasar, quasarUserOptions)

app.mount('#app')

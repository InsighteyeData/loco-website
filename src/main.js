import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';
import quasarUserOptions from './quasar-user-option'

//fontawesome 套件
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLine, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faLine, faYoutube, faEnvelope)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Quasar, quasarUserOptions)

app.mount('#app')

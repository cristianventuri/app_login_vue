import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

/* Default VUE */
import './assets/styles/base.css'

/* PrimeVue */
// import "primevue/resources/themes/viva-light/theme.css";     
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import './assets/styles/theme.css'

/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

/* jQuery */
import $ from "jquery";
window.$ = $;

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
export default app;


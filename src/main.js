import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './theme/styles.css';

const app = createApp(App)

// app.config.globalProperties.axios =  { ...axiosInstance }
app.config.globalProperties.axios = axios //
// app.component('font-awesome-icon', FontAwesomeIcon)

app
    // .use(store)
    .use(router)

    // .use(VueAnalytics, { id: 'green_google_id', router })
    // .mixin(mixins)
    .mount('#app') // ija musi yizindi zose

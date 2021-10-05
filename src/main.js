import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import "./assets/css/styles.css"

import { VueReCaptcha } from 'vue-recaptcha-v3'

createApp(App).use(
    router, 
    VueReCaptcha,  
    { siteKey: "6Lcnk5QcAAAAAKzQKtyttTgnvTdc9xKt4CEJvgSs" }
).mount('#app')

import { createApp } from 'vue'
import App from '/App.vue'
import './assets/fonts/font.css'
import 'element-plus/es/components/message/style/css'
import router from './router'
import {createPinia} from 'pinia';

const Store = createPinia();

createApp(App).use(Store).use(router).mount('#app')


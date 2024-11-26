import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import "vue3-toastify/dist/index.css";
import 'vue3-carousel/dist/carousel.css'
import Vue3Toastify from 'vue3-toastify';
import Vue3Marquee from 'vue3-marquee'

createApp(App).use(Vue3Toastify).use(Vue3Marquee).mount('#app')
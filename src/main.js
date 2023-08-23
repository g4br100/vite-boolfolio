import { createApp } from 'vue'
import './style.css'
import 'bootstrap'
import router from './routes'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.vue'


createApp(App).use(router).mount('#app')

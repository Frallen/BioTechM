import { createApp } from 'vue'
import App from './App.vue'
import "sweetalert2/dist/sweetalert2.min.css"
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

createApp(App).component('v-select', vSelect).mount('#app')

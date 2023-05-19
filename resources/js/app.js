import { createApp } from 'vue/dist/vue.esm-bundler'
import AppComponent from './components/App.vue'
import router from './router/index.js'
import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let app = createApp({
    components: {
        AppComponent,
    }
});

app.use(router);
app.mount('#app')
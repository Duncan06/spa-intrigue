import { createApp } from 'vue/dist/vue.esm-bundler'
import AppComponent from './components/App.vue'
import router from './router/index.js'

let app = createApp({
    components: {
        AppComponent,
    }
});

app.use(router);
app.mount('#app')
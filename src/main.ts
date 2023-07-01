import {createApp} from '@vue/runtime-dom';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
import './style.css';
import './awesome.css';
import {useRegisterSW} from 'virtual:pwa-register/vue';
useRegisterSW({immediate: true});

const app = createApp(App);
app.use(router);
app.mount('#app');

import {createApp} from '@vue/runtime-dom';
import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
import './style.css';
import './awesome.css';
import '@fontsource/be-vietnam-pro';

const app = createApp(App);
app.use(router);
app.mount('#app');

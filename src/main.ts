import { createApp } from 'vue';
import App from './App.vue';
import elementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'virtual:windi.css';
import router from '@/router';
import store from '@/store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App)
  .use(elementPlus, { size: 'default' })
  .use(router)
  .use(store);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount('#app');

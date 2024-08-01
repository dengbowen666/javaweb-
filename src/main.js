//import './assets/main.css' 就是这个导致了网页显示不全
import '@/assets/app.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import eventBus from './plugins/eventBus'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入轮播图插件库
import EasySlider from "vue-easy-slider";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import Element from 'element-plus'  
const app = createApp(App)
app.use(ElementPlus)
app.use(Element)
app.use(createPinia())
//向所有组件提供总线
app.provide('eventBus', eventBus);
app.use(EasySlider)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')

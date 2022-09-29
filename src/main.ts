/*
 * @Description: 
 * @Author: shizhe
 * @Date: 2022-09-18 17:07:56
 * @LastEditTime: 2022-09-29 11:06:16
 * @LastEditors: shizhe
 * @Reference: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/main.scss'
import router from './router/router'

createApp(App).use(router).mount('#app')

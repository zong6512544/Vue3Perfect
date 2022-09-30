/*
 * @Description:
 * @Author: shizhe
 * @Date: 2022-09-29 15:26:08
 * @LastEditTime: 2022-09-30 14:21:55
 * @LastEditors: shizhe
 * @Reference:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue') // 注意这里要带上 文件后缀.vue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

/*
 * @Description:
 * @Author: shizhe
 * @Date: 2022-09-29 15:26:08
 * @LastEditTime: 2022-10-13 14:14:35
 * @LastEditors: shizhe
 * @Reference:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Documents',
    component: () => import('@/views/docs/index.vue') // 注意这里要带上 文件后缀.vue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

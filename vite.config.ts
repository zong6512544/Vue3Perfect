/*
 * @Description: 
 * @Author: shizhe
 * @Date: 2022-09-18 17:07:56
 * @LastEditTime: 2022-09-18 19:46:01
 * @LastEditors: shizhe
 * @Reference: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // 添加全局scss使用
  css:{
    preprocessorOptions:{
      scss:{
        // additionalData:'@import "@/assets/style/main.scss";'
      }
    }
  },
})

/*
 * @Description: 
 * @Author: shizhe
 * @Date: 2022-09-29 11:29:19
 * @LastEditTime: 2022-09-29 11:31:42
 * @LastEditors: shizhe
 * @Reference: 
 */
import { defineStore } from 'pinia'

export default defineStore('user',{
  state: () => ({
    name: '用户',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data:string){
      // 可以做异步
      // await doAjaxRequest(data);
      this.name = data;
    }
  },
})
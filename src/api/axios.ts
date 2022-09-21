/*
 * @Description: 
 * @Author: shizhe
 * @Date: 2022-09-20 10:32:58
 * @LastEditTime: 2022-09-21 16:00:06
 * @LastEditors: shizhe
 * @Reference:  axios请求封装
 */
import axios, { AxiosInstance }  from "axios";

class HTTP {
  // axios实例
  instance:AxiosInstance | undefined;
  constructor(baseURL='/api'){
    this.instance=axios.create({
      baseURL,
      timeout:10000
    })
    this.interceptors()
  }

  interceptors(){
    /* 
     * 请求拦截  
     */
    this.instance?.interceptors.request.use(config =>{
      
    },error=>{})
    
    /* 
     * 响应拦截  
     */
    this.instance?.interceptors.response.use(response =>{
      
    },error=>{})
  }
}
export default new HTTP()
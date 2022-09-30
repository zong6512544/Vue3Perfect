/*
 * @Description:
 * @Author: shizhe
 * @Date: 2022-09-20 10:32:58
 * @LastEditTime: 2022-09-29 15:57:19
 * @LastEditors: shizhe
 * @Reference:  axios请求封装
 */
import axios, { AxiosInstance } from 'axios'

class HTTP {
  // axios实例
  instance: AxiosInstance
  constructor(baseURL = '/api') {
    this.instance = axios.create({
      baseURL,
      timeout: 10000
    })
    this.interceptors()
  }

  interceptors() {
    /*
     * 请求拦截
     */
    this.instance.interceptors.request.use(
      (config): void => {
        console.log(config)
      },
      error => {}
    )

    /*
     * 响应拦截
     */
    this.instance.interceptors.response.use(
      response => {},
      error => {}
    )
  }
}
export default function (baseURL?: string) {
  return new HTTP(baseURL)
}

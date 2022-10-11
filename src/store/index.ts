/*
 * @Description:
 * @Author: shizhe
 * @Date: 2022-09-29 11:25:09
 * @LastEditTime: 2022-09-30 15:11:56
 * @LastEditors: shizhe
 * @Reference:
 */

import useUserStore from './modules/userStore'
export default function useStore() {
  return {
    userStore: useUserStore
  }
}

/*
 * @Author: your name
 * @Date: 2020-05-08 12:01:17
 * @LastEditTime: 2020-05-09 13:10:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\home.js
 */
import {request} from './request'

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page ){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
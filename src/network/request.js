/*
 * @Author: your name
 * @Date: 2020-05-08 10:56:48
 * @LastEditTime: 2020-05-09 13:27:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\request.js
 */
import axios from 'axios'

export function request(config){
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  //2 网络拦截器
  //2.1 请求拦截
  instance.interceptors.request.use((config) => {
    //对参数config处理
    
    //将处理后的config返回  继续网络请求
    return config
  },(err) => {
    //处理错误
    console.log('网络请求拦截错误：',err)
  })
  //2.2 响应拦截
  instance.interceptors.response.use((res) => {
    //对请求到的数据res处理
    
    //将处理后的数据返回  
    return res.data
  },(err) => {
    //处理错误
    console.log('网络响应拦截错误：',err)
  })

  //3. 正真发送网络请求  ----- instance(config)本身的返回值是一个promise对象  所以在此处不需要再包装成promise对象返回
  return instance(config)
} 
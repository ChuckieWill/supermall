import Vue from 'vue'
import Vuex, { Store } from 'vuex'

//1 安装插件
Vue.use(Vuex)

//2 创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload){
      state.cartList.push(payload)
    }
  }
})

//3 导出store
export default store
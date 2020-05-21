import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutations_types'

export default {
  addCart(context, payload){
    return new Promise((resolve, reject) => {
      //1 判断cartList中是否已有传入的商品
      let oldCart = context.state.cartList.find((item) => {
        return item.iid === payload.iid
      })
      //2 更新cartList
      if(oldCart){
        context.commit(ADD_COUNT, oldCart)
        resolve('当前商品数量+1')
      }else{
        payload.count = 1
        payload.checked = false
        context.commit(ADD_TO_CART, payload)
        resolve('添加了新商品')
      }  
    })
  }
}
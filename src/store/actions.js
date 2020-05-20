import {
  ADD_COUNT,
  ADD_TO_CART
} from './mutations_types'

export default {
  addCart(context, payload){
    //1 判断cartList中是否已有传入的商品
    let oldCart = context.state.cartList.find((item) => {
      return item.iid === payload.iid
    })
    //2 更新cartList
    if(oldCart){
      context.commit(ADD_COUNT, oldCart)
    }else{
      payload.count = 1
      payload.checked = false
      context.commit(ADD_TO_CART, payload)
    }  
  }
}
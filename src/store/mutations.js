import {
  ADD_COUNT,
  ADD_TO_CART,
  CHANGE_CKECKED
} from './mutations_types'

export default {
  //1 已存在cart的count+1
  [ADD_COUNT](state, payload){
    payload.count++
  },
  //2 cart不存在则加入列表
  [ADD_TO_CART](state, payload){
    state.cartList.push(payload)
  },
  [CHANGE_CKECKED](state, iid){
    const currentCart = state.cartList.find((item) => {
      return item.iid === iid
    })
    currentCart.checked = !currentCart.checked
  }
}
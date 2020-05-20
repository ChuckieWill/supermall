<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <CheckButton @click.native="onCheck" :isCheck="cart.checked"></CheckButton>
    </div>
    <div class="cart-left">
      <img :src="cart.image" alt="">
    </div>
    <div class="cart-right">
      <div class="title">{{cart.title}}</div>
      <div class="desc">商品描述：{{cart.desc}}</div>
      <div class="other-info">
        <div class="price">￥{{cart.price}}</div>
        <div class="count">x{{cart.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  export default {
    name: 'CartListItem',
    components:{
      CheckButton 
    },
    props: {
      cart: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      onCheck(){
        this.cart.checked = !this.cart.checked
        // this.$store.commit('CHANGE_CKECKED', this.cart.iid)
      }
    }
  }
</script>

<style scoped>
  .cart-list-item{
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart-left{
    padding: 5px;
  }

  .cart-left img{
    width: 80px;
    height: 100px;
    border-radius: 5px;
    display: block;

  }

  .cart-right{
    padding: 10px;
    width: 100%;
  }

  .title, .desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .cart-right{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .other-info{
    display: flex;
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .other-info div{
    flex: 1;
  }

  .count{
    text-align: right;
  }

  .price{
    color: orangered;
  }
</style>
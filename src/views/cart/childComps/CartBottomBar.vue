<template>
  <div class="cart-bottom-bar">
    <div class="check-all">
      <check-button :is-check="isSelectAll" @click.native="onCheckAll"/>
      <div class="check-text">全选</div>
    </div>
    <div class="price-all">
      合计：￥{{totalPrice}}
    </div>
    <div class="caculate" @click="onCaculate">
      去计算({{checkCount}})
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    data(){
      return {
        fullPrice: 0,
        selectNum: 0
      }
    },
    computed: {
      totalPrice(){
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((pre, item) => {
          return pre + item.price * item.count
        }, 0).toFixed(2)
      },
      checkCount(){
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).length
      },
      isSelectAll(){
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)
        if(this.$store.state.cartList.length === 0) return false
        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      //全选点击
      onCheckAll(){
        if(this.isSelectAll){
          this.$store.state.cartList.forEach(item => item.checked = false)
        }else{
          this.$store.state.cartList.forEach(item => item.checked = true)
        }
      },
      //计算点击
      onCaculate(){
        const flag = !(this.$store.state.cartList.find(item => item.checked == true))
        if(flag){
          this.$toast.show('请选择商品', 2000)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar{
    width: 100%;
    height: 38px;
    background-color: #eee;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #888;
    padding-left: 20px;
  }

  .check-all{
    display: flex;
    align-items: center;
    width: 70px;
  }

  .check-all .check-text{
    margin-left: 6px;
  }

  .price-all{
    /* margin-left: 15px; */
    font-size: 16px;
    color: #666;
    flex: 1;
  }

  .caculate{
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 38px;
    line-height: 38px;
    text-align: center;
  }
</style>
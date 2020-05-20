<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar class="cart-bottom-bar"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  
  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed: {
      //1 不改别名
      ...mapGetters(['cartLength']),
      //2 改别名
      // ...mapGetters({
      //   length: 'cartLength'
      // })
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
    position: relative;
  }

  .cart-nav{
    background-color: var(--color-tint);
    color: #fff;
  }

  .scroll{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 87px;
  }

  .cart-bottom-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
  }
</style>
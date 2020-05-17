<template>
  <div id="detail">
    <detail-nav-bar/>
    <scroll class="scroll" :probe-type="3">
      <detail-swiper :swipers="swipers"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>

</template>

<script scoped>
  import Scroll from 'components/common/scroll/Scroll'
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'

  import {getDetail, Goods, Shop} from 'network/detail.js'
  export default {
    name: 'Detail',
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    data(){
      return {
        iid: null,
        swipers: [],
        goods: {},
        shop: {}
      }
    },
    created(){
      //1 保存请求数据id
      this.iid = this.$route.query.iid
      //2 发送网络请求
      getDetail(this.iid).then((res) => {
        console.log(res)
        const data = res.result
        //2.1 保存轮播图
        this.swipers = data.itemInfo.topImages
        //2.2 保存商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //2.3 保存店铺信息
        this.shop = new Shop(data.shopInfo)
      })
    }
  }
</script>

<style scoped>
  /* #detail{
    height: 100vh;
    position: relative;
    z-index: 99;
    background-color: #fff; 
  } */

  .scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    /* bottom: 0; */
    left: 0;
    right: 0;
  }
</style>
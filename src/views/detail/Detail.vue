<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :swipers="swipers"/>
    <detail-base-info :goods="goods"/>
  </div>

</template>

<script scoped>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'

  import {getDetail, Goods} from 'network/detail.js'
  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data(){
      return {
        iid: null,
        swipers: [],
        goods: {}
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
      })
    }
  }
</script>

<style>

</style>
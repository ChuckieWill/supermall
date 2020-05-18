<template>
  <div id="detail">
    <detail-nav-bar/>

    <scroll class="scroll" :probe-type="3" ref="scroll">
      <detail-swiper :swipers="swipers"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoadDone="imgLoadDone"/>
      <detail-param-info :param-info="paramInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends" class="gooods-list"/>
    </scroll>
  </div>
</template>

<script scoped>
  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail.js'

  import {debounce} from 'common/utils'

  export default {
    name: 'Detail',
    components: {
      Scroll,
      GoodsList,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo
    },
    data(){
      return {
        iid: null,
        swipers: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
      }
    },
    created(){
      //1 保存请求数据id
      this.iid = this.$route.query.iid
      //2 发送网络请求 获取商品详情信息
      getDetail(this.iid).then((res) => {
        // console.log(res)
        const data = res.result
        //2.1 保存轮播图
        this.swipers = data.itemInfo.topImages
        //2.2 保存商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //2.3 保存店铺信息
        this.shop = new Shop(data.shopInfo)
        //2.4 保存商品详情
        this.detailInfo = data.detailInfo
        //2.5 保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //2.6 保存评论信息
        if(data.rate.list){
          this.commentInfo = data.rate.list[0]
        }
      })
      //3 发送网络请求 获取商品推荐信息
      getRecommend().then((res) => {
        console.log(res)
        this.recommends = res.data.list
      })
    },
    methods: {
      //图片加载完成刷新scroll 重新计算高度
      imgLoadDone(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 99;
    background-color: #fff; 
  }

  .scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    /* bottom: 0; */
    left: 0;
    right: 0;
  }

  .gooods-list{
    margin-top: 15px;
  }
</style>
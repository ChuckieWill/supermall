<template>
  <div id="detail">
    <detail-nav-bar @navBarIndex="onNavBar" ref="detailNavBar"/>
    <scroll class="scroll" 
            :probe-type="3"
            ref="scroll"
            @scroll="scrollPosition">
      <detail-swiper :swipers="swipers"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoadDone="imgLoadDone"/>
      <detail-param-info :param-info="paramInfo" ref="param"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" class="gooods-list" ref="recommend"/>
    </scroll>
    <detail-bottom-bar class="bottom-bar" @onAddCart="onAddCart"/>
    <back-top @click.native="onTapClick" v-show="isShowBackTop"/>
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
  import DetailBottomBar from './childComps/DetailBottomBar'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail.js'

  import {debounce} from 'common/utils'
  import {backTopMixin} from 'common/mixin'

  export default {
    name: 'Detail',
    mixins: [backTopMixin],
    components: {
      Scroll,
      GoodsList,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar
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
        recommends: [],
        themeTopYs: [],
        setThemeTopYs: null,
        navBarCurrentIndex: 0
      }
    },
    created(){
      //1 保存请求数据id
      this.iid = this.$route.query.iid
      //2 发送网络请求 获取商品详情信息
      this.getDetail(this.iid)
      //3 发送网络请求 获取商品推荐信息
      this.getRecommend()
      //4 定义设置导航栏跳转Y值的函数
      this.setThemeTopYs = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        console.log(this.themeTopYs)
      }, 300)
    },
    mounted(){
      // 监听商品数据图片加载 
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('detailImgLoadDone', () => {
        // console.log('详情页图片加载完成')
        refresh()
      })
    },
    methods: {
      /**
       * 网络请求函数
       */
      //请求商品详情信息
      getDetail(iid){
        getDetail(iid).then((res) => {
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
      },
      //请求商品推荐信息
      getRecommend(){
        getRecommend().then((res) => {
          // console.log(res)
          this.recommends = res.data.list
        })
      },

      /**
       * 事件监听函数
       */
      //图片加载完成刷新scroll 重新计算高度
      imgLoadDone(){
        console.log('详情页imgLoadDone')
        this.$refs.scroll.refresh()
        this.setThemeTopYs()
      },
      //navbar点击事件监听
      onNavBar(index){
        // console.log(index)
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      //监听scroll滚动位置
      scrollPosition(position){
        // console.log(position)
        const y = -position.y
        // 1 实现滚动与导航的联动
        for(let i = 0; i < this.themeTopYs.length-1; i++){
          if(this.navBarCurrentIndex != i  && (y >= this.themeTopYs[i] && y < this.themeTopYs[i+1])){
            this.navBarCurrentIndex = i
            this.$refs.detailNavBar.currentIndex = this.navBarCurrentIndex
          }
        }
        // 2 控制回到顶部icon的显示
        this.showBackTop(y)
      },
      //加入购物车
      onAddCart(){
        //1 整理提交给购物车的数据
        const cart = {}
        cart.iid = this.iid
        cart.image = this.swipers[0]
        cart.title = this.goods.title
        cart.desc = this.goods.desc
        cart.price = this.goods.nowPrice
        //2 将商品添加到购物车
        this.$store.commit('addCart', cart)
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

  .bottom-bar{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
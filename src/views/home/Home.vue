<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" 
                  @tabClick="onTabClick"
                  ref="tabControl1"
                  class="tab-control"
                  v-show="isTabFixed"/>

    <scroll class="scroll" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="onScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @imgLoadDone="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']" 
                  @tabClick="onTabClick"
                  ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="onTapClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {debounce} from 'common/utils'
  import {backTopMixin} from 'common/mixin'

  export default {
    name: 'Home',
    mixins: [backTopMixin],
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    data(){
      return{
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        tabOffstTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      // 1 加载轮播图等数据
      this.getHomeMultidata()

      // 2 加载goods数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')   
    },
    mounted(){
      // 监听商品数据图片加载 
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('homeImgLoadDone', () => {
        // console.log('首页图片加载完成')
        refresh()
      })
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()
    },
    methods: {
      /**
       * 网络请求函数
       */
      getHomeMultidata(){
        getHomeMultidata().then((res) => {
          // console.log('home-multidata',res)
          this.banners = res.data.banner.list
          this.recommends =  res.data.recommend.list
        })
      },

      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then((res) => {
          // console.log('home-goods',res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      },

      /**
       * 事件监听函数
       */ 
      onTabClick(index){
        switch(index){
          case 0: 
            this.currentType = 'pop'
            break
          case 1 : 
            this.currentType = 'new'
            break
          case 2 : 
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index

      },

      onScroll(position){
        // 1 监听是否显示回到顶部按钮的显示
        this.showBackTop(-position.y)
        // 2 监听是否tab-control是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffstTop
      },

      loadMore(){
        this.getHomeGoods(this.currentType)
      },

      swiperImgLoad(){
        this.tabOffstTop = this.$refs.tabControl2.$el.offsetTop
      }
     
    },
  }
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 8;
  } */

  .tab-control{
    position: relative;
    z-index: 9;
  }

  .scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
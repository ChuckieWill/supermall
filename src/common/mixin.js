import BackTop from 'components/content/backTop/BackTop'

/**
使用：
1 引入backTopMixin
2 <back-top @click.native="onTapClick" v-show="isShowBackTop"/>
3 this.showBackTop(positionY) 
 */
export const backTopMixin = {
  components: {
    BackTop
  },
  data(){
    return {
      isShowBackTop: false
    }
  },
  methods: {
    /**
    通过Y轴位置控制回到顶部icon是否显示  
    需在组件内的监听滑动位置的函数中调用
    调用需传入y轴位置
     */
    showBackTop(positionY){
      this.isShowBackTop = positionY > 1000
    },
    // 监听回到顶部的点击
    onTapClick(){
      this.$refs.scroll.scrollTo(0, 0, 200)
    },
  }
}
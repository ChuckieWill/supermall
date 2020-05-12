<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        bscroll: null,
      }
    },
    mounted(){
      this.bscroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //监听滚动位置
      this.bscroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })

      //监听上拉加载更多
      this.bscroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time=500){
        this.bscroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.bscroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>>
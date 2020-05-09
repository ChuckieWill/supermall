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
    data(){
      return {
        bscroll: null
      }
    },
    mounted(){
      this.bscroll = new BScroll(this.$refs.wrapper, {
        click: true,
        mouseWheel: true
      })
    }
  }
</script>

<style scoped>

</style>>
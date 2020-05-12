<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="loadDone">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper , SwiperItem} from 'components/common/swiper/index'

  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      loadDone(){
        if(!this.isLoad){
          console.log('swiper-img-load')
          this.$emit('imgLoadDone')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="backicon" @click="onBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <span v-for="(item, index) in titles" :key="index"
              class="titles-item"
              :class="{active: currentIndex === index}"
              @click="onTileItem(index)">
          {{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'Detail',
    components: {
      NavBar
    },
    data(){
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      onTileItem(index){
        this.currentIndex = index
      },
      onBack(){
        this.$router.back()
      }
    },

  }
</script>

<style scoped>
  .titles{
    display: flex;
  }
  .titles-item{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: var(--color-high-text);
  }
  .backicon{
    margin-top: 7px;
  }
</style>
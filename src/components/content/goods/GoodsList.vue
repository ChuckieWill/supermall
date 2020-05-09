<!--
 * @Author: your name
 * @Date: 2020-05-09 14:46:24
 * @LastEditTime: 2020-05-09 19:55:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\goods\GoodsList.vue
 -->
<template>
  <div class="goods">
    <goods-list-item v-for="(item, index) in goods" 
        :key="index" 
        :goods-item = "item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: 'GoodsList',
    components:{
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
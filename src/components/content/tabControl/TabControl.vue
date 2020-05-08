<!--
 * @Author: your name
 * @Date: 2020-05-08 17:56:04
 * @LastEditTime: 2020-05-08 18:09:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\tabControl\TabControl.vue
 -->
<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item{
    flex: 1;
  }
</style>
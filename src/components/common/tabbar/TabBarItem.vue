<!--
 * @Author: your name
 * @Date: 2020-05-06 17:57:10
 * @LastEditTime: 2020-05-09 19:55:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\tabbar\TabBarItem.vue
 -->
<template>
    <div class="tab-bar-item" @click="onClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
  export default {
    name : 'TabBarItem',
    props:{
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data(){
        return {

        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
            return this.isActive ? {color : this.activeColor} : {}
        }
    },
    methods:{
        onClick(){
            this.$router.replace(this.path)
        }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
      height: 24px;
      width: 24px;
      margin-top: 3px;
      margin-bottom: 2px;
      vertical-align: middle;
  }

  .active{
      color:red;
  }
</style>

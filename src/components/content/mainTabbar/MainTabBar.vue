<!--
 * @Author: your name
 * @Date: 2020-05-06 17:57:10
 * @LastEditTime: 2020-05-09 19:55:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\mainTabbar\MainTabBar.vue
 -->
<template>
    <tab-bar>
      <tab-bar-item path="/home" >
         <img slot = "item-icon" src="~assets/img/tabbar/home.svg" alt=""/>
         <img slot = "item-icon-active" src="~assets/img/tabbar/home_active.svg" alt=""/>
         <div slot = "item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
         <img slot = "item-icon" src="~assets/img/tabbar/category.svg" alt=""/>
         <img slot = "item-icon-active" src="~assets/img/tabbar/category_active.svg" alt=""/>
         <div slot = "item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
         <img slot = "item-icon" src="~assets/img/tabbar/shopcart.svg" alt=""/>
         <img slot = "item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt=""/>
         <div slot = "item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
         <img slot = "item-icon" src="~assets/img/tabbar/profile.svg" alt=""/>
         <img slot = "item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt=""/>
         <div slot = "item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from 'components/common/tabbar/TabBar'
    import TabBarItem from 'components/common/tabbar/TabBarItem'

    export default {
        name : 'MainTabBar',
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>
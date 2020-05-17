<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-left middle-item">
        <div class="shop-sells">
          <div class="scells-num">{{shop.sells | sellCount(shop.scells)}}</div>
          <div class="scells">总销量</div>
        </div>
        <div class="shop-goods middle-item">
          <div class="goods-num">{{shop.goods}}</div>
          <div class="goods">全部宝贝</div>
        </div>
      </div>
      <div class="middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="in-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script >
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      sellCount(sell){
        if(sell < 10000) return sell
        return (sell/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top{
    line-height: 45px;
    display: flex;
    align-items: center;
  }

  .shop-top img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
  } 

  .shop-top span{
    margin-left: 10px;
    vertical-align: center;
  }

  .shop-middle{
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  .middle-item{
    flex: 1;
  }

  .middle-left{
    display: flex;
    justify-content: space-around;
    color: #333;
    text-align: center;
    border-right: 2px solid rgba(0, 0, 0, .1);
    padding-right: 20px;
    margin-left:  20px;
  }

  /* .shop-sells{
    display: flex;
    flex-direction: column;  
  }

  .shop-goods{
    display: flex;
    flex-direction: column;
  } */

  .scells-num, .goods-num{
    font-size: 18px;
  } 

  .scells, .goods{
    margin-top: 10px;
    font-size: 12px;
  }

  .middle-right{
    font-size: 13px;
    color: #333;
    margin: 0 30px;
  }

  .middle-right table{
    width: 120px;
    /* margin-left: 30px; */
  }

  .middle-right table td{
    padding: 5px 0;
  }

  .middle-right .score{
    color: #5ea732;
  }

  .middle-right .score-better{
    color: #f13e3a;
  }

  .middle-right .better span{
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom{
    text-align: center;
    margin-top: 10px;
  }

  .in-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
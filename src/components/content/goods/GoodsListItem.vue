
<template>
  <div class="goods-item" @click="onGoodsItem">
    <img v-lazy="showImage" alt="" @load="loadDone">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      loadDone(){ 
        if(this.$route.path.indexOf('/home') >= 0){
          this.$bus.$emit('homeImgLoadDone')
        }else if(this.$route.path.indexOf('/detail') >= 0){
          this.$bus.$emit('detailImgLoadDone')
        }
      },
      onGoodsItem(){
        this.$router.push({
          path: '/detail',
          query: {iid: this.goodsItem.iid}
        })
      }
    },
  }
</script>

<style scoped>
  .goods-item{
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    right: 0;
    left: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect{
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
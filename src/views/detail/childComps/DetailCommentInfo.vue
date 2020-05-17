<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多<span class="more-icon">  ></span></div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="detail-other">
        <span class="other-time">{{commentInfo.created | showDate}}</span>
        <span class="other-style">{{commentInfo.style}}</span>
      </div>
      <div class="detail-img">
        <img v-for="(item, index) in commentInfo.images" :src="item" alt="" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
 
  export default {
    name: 'DetailCommentInfo',
    props: {
      commentInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showDate(value){
        const date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title{
    float: left;
    font-size: 15px;
  }

  .header-more{
    float: right;
    font-size: 13px;
    margin-right: 10px;
  }

  .more-icon{
    font-size: 22px;
    position: relative;
    top: 2px;
  }

  .info-user{
    padding: 10px 0 5px;
  }

  .info-user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .info-user span{
    font-size: 15px;
    position: relative;
    top: -15px;
    margin-left: 10px;
  }

  .info-detail {
    padding: 0 5px 15px;
  }

  .info-detail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }

  .detail-other{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }

  .other-time{
    margin-right: 8px;
  }
  
  .detail-img{
    margin-top: 10px;
  }

  .detail-img img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
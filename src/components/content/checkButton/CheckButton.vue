<template>
  <div class="check-button" :class="{check : isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      isCheck: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .check-button{
    border: 2px solid #aaa;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .check{
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>
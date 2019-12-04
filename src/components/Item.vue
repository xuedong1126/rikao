<template>
  <div class="item">
      <div class="left"></div>
      <div class="main">
          <h4>{{items.title}}</h4>
          <span>{{items.cont}}</span>
      </div>
      <div class="right">
          <span>{{items.timers}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:["items"]

}
</script>

<style lang="scss" scoped>
    .item{
        width: 100%;
        height: 100px;
        display: flex;
    }
    .left,.right{
        width: 15%;
        height: 100%;
    }
    .main{
        flex: 1;
    }
</style>
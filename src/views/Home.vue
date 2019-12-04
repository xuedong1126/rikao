<template>
  <div class="home">
    <div class="main">
        <router-view/>
    </div>
    <div class="nav">
      <router-link to="/homes" tag="span">Homes</router-link> |
      <router-link to="/about" tag="span">About</router-link>
    </div>
  </div>
</template>

<style lang="scss" secped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .main{
    width: 100%;
    flex:1;
    overflow: auto;
  }
  .nav{
    width: 100%;
    height: 50px;
    background: #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .router-link-active{
      color: aquamarine;
    }
  }
</style>


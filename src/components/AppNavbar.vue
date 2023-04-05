<template>
  <div class="navbar">
    <div class="navbar-left">
      <div @click="$router.push('/register')">免费注册</div>
      <div @click="$router.push('/login')">登录</div>
    </div>
    <div class="navbar-right">
      <div  @click="$router.push('/')">返回首页</div>
      <div @click="$router.push('/orders')">我的订单</div>
      <div @click="$router.push('/')">购物车</div>
      <div @click="$router.push('/')">消费者权益</div>
    </div>
  </div>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: black;
  color: white;
  padding: 0 20px;
}

.navbar div {
  margin-right: 20px;
  display: inline;
  cursor: pointer;
}

.navbar-left a:first-child {
  margin-right: auto;
}
</style>
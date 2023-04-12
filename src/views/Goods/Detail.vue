<template>
  <div>
    <div style="display: flex;height: 600px;margin-left: 20px;margin-top: 20px;">
      <img style="width: 50%;height: 80%" src="../../assets/u34.png">
      <div style="display: flex;flex-direction: column;margin-top: 50px">
        <div style="font-size: 30px;font-weight: bold;margin-bottom: 30px;">
          dasdasdddddddddddd
        </div>
        <div style="display: flex;">
          <div style="margin-right: 5px">原价：</div>
          <div style="text-decoration:line-through">1500</div>
        </div>
        <div style="display: flex;align-items: center;margin-top: 30px">
          <div style="margin-right: 5px;">易购价：</div>
          <img style="height: 25px;width: 25px" src="../../assets/money.png">
          <div style="color: red;font-size: 30px;margin-left: 3px;font-weight: bold">1198</div>
        </div>
        <div style="display: flex;align-items: center;margin-top: 30px">
          <div style="margin-right: 5px;">数量：</div>
          <el-input-number v-model="num"  :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div style="display: flex;margin-top: 40px;">
         <el-button type="primary">
           立即购买
         </el-button>

          <button class="shopping-cart-btn">
            <img src="../../assets/shop-cart.png"  class="shopping-cart-icon">
            加入购物车
          </button>
        </div>
      </div>
    </div>
    <div class="detail">
      XXXXXXXXXXX
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      itemId: '',
      num:1
    }
  },
  mounted() {
    this.itemId = this.$route.query.id;
  },
}
</script>

<style scoped>
.detail{
  font-weight: bold;
  font-size: 25px;
  margin-left: 100px;
}
.shopping-cart-btn {
  background-color: orange; /* 橘色背景 */
  color: white; /* 白色字体 */
  border: none;
  padding: 10px 20px; /* 设置内边距 */
  border-radius: 5px; /* 圆角 */
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.shopping-cart-icon {
  display: inline-block; /* 将图片设置为行内元素 */
  width: 25px; /* 设置图片宽度 */
  height:25px; /* 设置图片高度 */
  margin-right: 8px; /* 图片右侧留出一定间距 */
}
</style>
<template>
  <div style="margin-left: 150px;">
    <div style="display: flex;width: 80%;align-items: center;justify-content: space-between;margin-top: 20px;
         ">
      <div style="font-size: 35px;font-weight: bold">情人节</div>
      <div style="color:gray;cursor: pointer;margin-left:50px;">
        查看更多<i class="el-icon-d-arrow-right"></i></div>
    </div>
    <div style="display: flex;width: 100%;margin-top: 20px">
      <div>
<!--        <div style="margin-left: 80px;font-size: 25px">this is a name</div>-->
        <img :src="data[0].showUrl" style="height: 750px;width: 700px"  @click="$router.push({
          path:'/detail',
          query:{
            itemId:'1'
          }
        })">
      </div>
      <div style="display: flex;flex-flow:wrap;align-items: center">
        <div v-for="item in data.slice(0,4)" style="cursor: pointer">
<!--          <div style="font-size: 25px;color:gray;text-align: center">{{item.name}}</div>-->
          <img :src="item.showUrl" style="height: 350px;width: 300px"  @click="$router.push({
          path:'/detail',
          query:{
            itemId:item.id
          }
        })">
        </div>
      </div>

    </div>
    <div style="display: flex;width: 80%;align-items: center;justify-content: space-between;margin-top: 20px;
         ">
      <div style="font-size: 35px;font-weight: bold">热卖中</div>
      <div style="color:gray;cursor: pointer">查看更多<i class="el-icon-d-arrow-right"></i></div>
    </div>
    <div style="display: flex;width: 100%;margin-top: 20px">
      <div>
<!--        <div style="margin-left: 80px;font-size: 25px">this is a name</div>-->
        <img :src="data[0].showUrl" style="height: 750px;width: 700px" @click="$router.push({
          path:'/detail',
          query:{
            itemId:data[0].id
          }
        })">
      </div>
      <div style="display: flex;flex-flow:wrap;align-items: center">
        <div v-for="item in data.slice(4,8)" @click="$router.push({
          path:'/detail',
          query:{
            itemId:item.id
          }
        })">
<!--          <div style="font-size: 25px;color:gray;text-align: center">Name</div>-->
          <img :src="item.showUrl" style="height: 350px;width: 300px">
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "HotGoods",
  props:['data']
}
</script>

<style scoped>

</style>
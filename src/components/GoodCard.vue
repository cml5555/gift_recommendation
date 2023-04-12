<template>
  <div style="width: 300px;height: 390px;border-radius: 5px;margin: 5px;background-color: white;
cursor: pointer" @click="$router.push({
   path:'/detail',
   query:{
     id:data.id
   }
})">
   <img :src="data.showUrl" style="width: 100%;height: 70%">
    <div style="margin-left: 20px;">
      <div style="margin-bottom: 10px;font-size: 20px">
        {{ data.name }}
      </div>
      <div style="display: flex; margin-bottom: 10px">
        <el-tag >{{ data.discountRate }}折</el-tag>
        <el-tag v-show="data.discountPrice"  type="info" style="margin-left: 5px">限时降价</el-tag>
<!--        <el-tag>包邮</el-tag>-->
      </div>
      <div style="display:flex;align-items: center">
        <img style="height: 25px;width: 25px" src="../assets/money.png">
        <div style="color: red;font-size: 20px">
          {{ data.realPrice }}
        </div>
        <el-tag type="danger" style="margin-left: 10px">到手价</el-tag>
<!--        <div style="background-color: orange;color: coral;margin-left: 10px">-->
<!--          到手价-->
<!--        </div>-->
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "GoodCard",
  props:['data']
}
</script>

<style scoped>

</style>
<template>
  <el-carousel indicator-position="outside" height="630px" >
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <img :src="item.src" height="auto" width="100%" >
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props:{
    imgList:{
      type:Array
    }
  }
}
</script>

<style scoped>

</style>
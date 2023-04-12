<template>
  <div style="display: flex;width:60%;justify-content: left;margin-top: 40px">
    <div style="display: flex;flex-direction: column;align-items: center">
      <div style="display: flex;align-items: center">
        <img src="../assets/u34.png" style="width: 80px;height: 80px">
        <span style="font-size: 30px;font-weight: bold;">礼品易购</span>
      </div>
      <div style="font-size: 15px;font-weight: bold;letter-spacing: 4px">
        送礼真的很简单
      </div>
    </div>
    <div style="display: flex;align-items: center;margin-left: 30px">
      <el-input placeholder="输入商品名来搜索"
                @keyup.enter.native="search()"
                v-model="commodityName" style="width: 600px"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
  data(){
    return{
      commodityName:'',
    }
  },
  methods:{
     search(){
       // console.log("in");
        this.$emit('getInfo', this.commodityName);
     }
  },
}
</script>

<style scoped>

</style>
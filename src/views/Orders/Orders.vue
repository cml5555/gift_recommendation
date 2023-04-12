<template>
<div>
  <div style="display: flex;margin:60px 0 0 100px">
    <div @click="clickAll"
        style="font-size: 20px;font-weight: bold;cursor: pointer"
        :class="{ 'text-item': true, 'text-active': activeIndex === 0 }">
        所有订单
      <div :class="{ 'line-item': true, 'line-active': activeIndex === 0 }"
          style="height: 2px;width: 100%;margin-top: 5px;padding-right: 30px">
      </div>
    </div>
    <div @click="clickF"
        style="font-size: 20px;font-weight: bold;cursor: pointer;margin-left: 30px"
        :class="{ 'text-item': true, 'text-active': activeIndex === 1 }">
        待发货订单
      <div :class="{ 'line-item': true, 'line-active': activeIndex === 1 }"
          style="height: 2px;width: 100%;margin-top: 5px;padding-right: 30px">
      </div>
    </div>
    <div @click="clickS"
        style="font-size: 20px;font-weight: bold;cursor: pointer;margin-left: 30px"
        :class="{ 'text-item': true, 'text-active': activeIndex === 2 }">
        待收货
      <div :class="{ 'line-item': true, 'line-active': activeIndex === 2 }"
          style="height: 2px;width: 100%;margin-top: 5px;padding-right: 20px">
      </div>
    </div>
  </div>

  <div style="margin-top: 50px;width: 80%;margin-left: 100px">
    <el-table :data="tableData.slice((currentpage1-1)*pagesize,currentpage1*pagesize)"  border
              style="width: 100%">
      <el-table-column prop="name" label="宝贝"></el-table-column>
      <el-table-column  prop="unitPrice" label="单价"></el-table-column>
      <el-table-column  prop="count" label="数量"></el-table-column>
      <el-table-column prop="totalPrice" label="实付款"></el-table-column>
      <el-table-column prop="orderStatus" label="交易状态"></el-table-column>
    </el-table>

    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentpage1"
        :page-sizes="[10,20,30]"
        :page-size="pagesize"
        layout="total, prev, pager, next"
        :total="this.tableData.length"
        align="center">
    </el-pagination>
  </div>
</div>
</template>

<script>
import {orders_data} from "@/data";

export default {
  name: "Orders",
  data(){
    return{
      activeIndex:0,
      total: 0,
      currentpage1: 1,
      pagesize: 9,
      searchmap: {},
      //表格高度 window.innerHeight窗口文档显示高度
      // tableHeight: window.innerHeight,
      //表格数据绑定
      tableData: [],
    }
  },
  // mounted() {
  //   this.tableData = orders_data;
  // },
  methods:{
    clickAll(){
      this.activeIndex = 0;
    },
    clickF(){
      this.activeIndex = 1;
    },
    clickS(){
      this.activeIndex = 2;
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentpage1 = val;
    }
  }
}
</script>

<style scoped>
.text-item {
  color: black;
  cursor: pointer;
}

.text-active {
  color: orange;
}

.line-item{
  background-color: #AAAAAA;
  cursor: pointer;
}
.line-active{
  background-color: orange;
}

</style>
<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 90%"
        @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column
          prop="name"
          label="商品信息"
          width="300">
        <template slot-scope="scope">
          <div  style="display: flex;">
            <img class="my_img" src="../../assets/u34.png">
            <div style="margin-left: 5px;">
              {{ scope.row.date }}

            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
          prop="address"
          label="规格"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="address"
          label="单价（元）"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="address"
          label="数量"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="address"
          label="小计（元）"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="address"
          label="操作"
          show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>


</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style scoped>
.my_img{
  height: 50px;
  width: 50px;
}
</style>
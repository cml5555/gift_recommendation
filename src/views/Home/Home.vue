<template>
  <div class="container">
    <SearchHeader @getInfo="getInfo"></SearchHeader>
    <el-carousel indicator-position="none"
                 style=";width: 1000px;height: 400px;margin-top: 100px">
      <el-carousel-item v-for="item in lunbo" :key="item.id">
        <img :src="item.showUrl"
             style="width: auto;
             height: 100%;
             position: absolute;
             left:50%;
             transform: translate(-50%,0);">
      </el-carousel-item>
    </el-carousel>

    <HotGoods v-show="showHotGoods" :data="hotGoods.slice(0,4)"></HotGoods>
    <GoodList v-show="showTableGoods"></GoodList>


  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import SearchHeader from "@/components/SearchHeader.vue";
import HotGoods from "@/components/HotGoods.vue";
import GoodList from "@/components/GoodsList.vue";
import GoodCard from "@/components/GoodCard.vue";
import {getGoodsListRequest} from "@/api/goods";

export default {
  components: {GoodCard, GoodList, HotGoods, SearchHeader, Carousel},
  data() {
    return {
      imgList: [
        '@/assets/logo.png',
        '@/assets/logo.png',
        '@/assets/logo.png',
        '@/assets/logo.png',
        '@/assets/logo.png',
      ],

      commodityName: '',
      tableData: "",
      showHotGoods: true,
      showTableGoods: false,
      hotGoods: [],
      lunbo: [
        {
          id: 1,
          src: require("../../assets/u34.png")
        },
        {
          id: 2,
          src: require("../../assets/u34.png")
        },
        {
          id: 3,
          src: require("../../assets/u34.png")
        },
        {
          id: 4,
          src: require("../../assets/u34.png")
        },
      ],
      activeIndex: 0
    };
  },
  mounted() {
    this.getShowData();
  },
  methods: {
    getInfo(data) {
      console.log(data);
      this.showHotGoods = false;
      this.showTableGoods = true;
      this.tableData = data;
    },
    getShowData() {
      getGoodsListRequest({
        "currentPage": 1,
        "highPrice": 800,
        "lowPrice": 0,
        "name": "",
        "pageSize": 12,
        "sort": 0,
        "type": "DESC"
      }).then(res => {
        if (res.status === 200 && res.data.code === 200) {
          const li = res.data.data.data;
          // console.log(li);
          this.lunbo = li.slice(0, 4);
          // todo
          this.hotGoods = li.slice(0, 12);

        }

      })
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
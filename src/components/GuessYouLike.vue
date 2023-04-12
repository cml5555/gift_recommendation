<template>
  <div style="margin-left: 100px;margin-top: 20px;background-color: white;width: 80%">
      <div style="font-weight: bold">
        猜你喜欢
      </div>
    <GoodList></GoodList>

  </div>
</template>

<script>
import GoodCard from "@/components/GoodCard.vue";
import GoodsList from "@/components/GoodsList.vue";
import GoodList from "@/components/GoodsList.vue";

export default {
  name: "GuessYouLike",
  components: {GoodList, GoodCard,GoodsList},
  data(){
    return{
      data:{
        "id": 5, //商品id
        "uuid": "b1335301-4078-4800-84a7-363215ea48b4", //商品的uuid
        "name": "鞋子", //商品名
        "price": 100, //商品原价
        "discountRate": 0.1, //商品打折力度(小于1,且先计算减价再计算打折)
        "discountPrice": 10, //商品减价力度
        "stock": 199, //库存
        "showUrl": "https://m.360buyimg.com/babel/jfs/t1/176871/36/33803/104877/6434104dF4800248d/b09a78e87057a941.jpg.webp", //商品展示缩略图
        "createTime": "2023-02-21 10:47:55", //数据创建时间
        "updateTime": "2023-02-21 14:18:04", //数据更新时间
        "introduceHtml": "富文本", //商品介绍页
        "count": 1, //商品销量
        "realPrice": 10, //商品现价
        "festivalNameList": [
          "劳动节"
        ] //商品所关联的节日
      },
    }
  }
}
</script>

<style scoped>

</style>
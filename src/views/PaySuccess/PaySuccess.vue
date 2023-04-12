<template>
  <div style="background-color: lightgray;height: 100vh">
    <div style="height: 80%;display: flex;align-items: center;flex-direction: column">
      <img src="../../assets/paySuccess.png" style="margin-top: 180px;">
      <div style="font-size: 30px;font-weight: bold;margin-top: 50px;">
        支付成功
      </div>
      <div style="color: dodgerblue;cursor: pointer;margin-top: 10px;;font-size:20px;text-decoration:underline"
           @click="$router.push('/')">
        返回首页
      </div>

    </div>
    <GuessYouLike></GuessYouLike>
<!--    <div style="background-color: white;height: 20px;width: 20px">-->

<!--    </div>-->

  </div>
</template>

<script>
import GuessYouLike from "@/components/GuessYouLike.vue";

export default {
  name: "PaySuccess",
  components: {GuessYouLike}
}
</script>

<style scoped>

</style>
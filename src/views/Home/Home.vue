<template>
  <div class="page">

   <carousel :img-list="lunbo"></carousel>

<!--    <div class="layout-a">-->
<!--      <div class="big-image">-->
<!--        <img src="@/assets/logo.png" alt="big-image" />-->
<!--        <div class="description">这是一段说明文字</div>-->
<!--      </div>-->
<!--      <div class="grid">-->
<!--        <div class="item">-->
<!--          <img src="@/assets/logo.png" alt="image1" />-->
<!--          <div class="title">标题1</div>-->
<!--          <div class="subtitle">副标题1</div>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <img src="@/assets/logo.png" alt="image2" />-->
<!--          <div class="title">标题2</div>-->
<!--          <div class="subtitle">副标题2</div>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <img src="@/assets/logo.png" alt="image3" />-->
<!--          <div class="title">标题3</div>-->
<!--          <div class="subtitle">副标题3</div>-->
<!--        </div>-->
<!--        <div class="item">-->
<!--          <img src="@/assets/logo.png" alt="image4" />-->
<!--          <div class="title">标题4</div>-->
<!--          <div class="subtitle">副标题4</div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  components: {Carousel},
  data() {
    return {
      imgList: [
        '@/assets/logo.png',
        '@/assets/logo.png',
        '@/assets/logo.png',
        '@/assets/logo.png',
        '@/assets/logo.png',
      ],
      lunbo:[
        {
          id:1,
          src:"@/assets/logo.png"
        },
        {
          id:2,
          src:"@/assets/logo.png"
        },
        {
          id:3,
          src:"@/assets/logo.png"
        },
        {
          id:4,
          src:"@/assets/logo.png"
        },
        {
          id:5,
          src:"@/assets/logo.png"
        },
      ],
      activeIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imgList.length;
    }, 3000);
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.carousel {position: relative;
  width: 90%;
  height: 90%;
  margin-top: 50px;
}

.carousel img {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1s;
}

.carousel img.active {
  opacity: 1;
}

.layout-a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 50px;
}

.big-image {
  position: relative;
}

.big-image img {
  width: 60%;
  height: auto;
}

.description {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  margin-left: 30px;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;}

.item img {
  width: 80%;
  height: auto;
}

.title {
  font-size: 20px;
  margin-top: 20px;
}

.subtitle {
  font-size: 16px;
  color: gray;
  margin-top: 10px;
}
</style>
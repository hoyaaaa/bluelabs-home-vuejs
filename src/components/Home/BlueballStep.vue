<template>
  <swiper class="blueball-step-slider" :options="swiperOptions">
    <swiper-slide>
      <img src="@/assets/blueball-step/step1.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/blueball-step/step2.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/blueball-step/step3.png" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/blueball-step/step4.png" />
    </swiper-slide>

    <!-- pagination -->
    <div class="swiper-pagination" slot="pagination"></div>

    <!-- navigation -->
    <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
    <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
  </swiper>
</template>
<script>
// import 'swiper/css/swiper.css'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        // loop: true,
        // autoplay:{
        //   delay:1000
        // },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.blueball-step-slider {
  width: 100%;
  height: 100%;
  --swiper-navigation-size: 20px;
  --swiper-navigation-color: #007bc7;
}

.swiper-pagination-progressbar,
.swiper-button-prev,
.swiper-button-next {
  top: 10%;
  right: auto;
}

.swiper-container {
  margin-left: inherit;
}

.swiper-pagination-progressbar {
  width: 220px;
  height: 2px;
  left: 270px;
}

.swiper-button-prev {
  left: 510px;
}

.swiper-button-next {
  left: 540px;
}

.swiper {
  width: 100%;
  height: 100%;
}
</style>

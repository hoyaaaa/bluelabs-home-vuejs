<template>
  <swiper class="main-slider" :options="swiperOptions">
    <swiper-slide
      class="barlow text-h1 text-uppercase"
      :key="index"
      v-for="(element, index) in elements"
    >
      {{ element }}
    </swiper-slide>

    <!-- pagination -->
    <div class="swiper-pagination" slot="pagination"></div>

    <!-- navigation -->
    <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
    <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import 'swiper/css/swiper.css'

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        loop: false,
        autoplay: {
          delay: 3000
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      elements: ['Safer filter for a bluer planet.']
    }
  }
}
</script>

<style scoped>
.barlow {
  font-family: 'Barlow' !important;
  font-weight: 600 !important;
  font-stretch: condensed !important;
  line-height: 0.43 !important;
}

.main-slider {
  width: 100%;
  height: 100%;
  --swiper-navigation-size: 5rem;
  --swiper-navigation-color: #ffffff;
  --swiper-theme-color: #00a0e9;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  color: white;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-pagination {
  bottom: 5%;
}

.swiper-button-prev {
  left: 15%;
}

.swiper-button-next {
  right: 15%;
}
</style>

<style>
.main-slider .swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  background: #ffffff;
  opacity: 1;
  margin: 0 10px !important;
}

.main-slider .swiper-pagination-bullet-active {
  background: #00a0e9;
}
</style>

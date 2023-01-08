<template>
  <swiper ref="swiper" class="blueball-step-slider" :options="swiperOptions">
    <swiper-slide :key="index" v-for="(step, index) in steps">
      <img :src="getImageSrc(step)" v-bind:alt="step" />
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
  props: {
    play: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    play() {
      if (this.play) {
        this.playSlider()
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          pauseOnMouseEnter: true
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      steps: [
        'blueball-step/step1.png',
        'blueball-step/step2.png',
        'blueball-step/step3.png',
        'blueball-step/step4.png'
      ]
    }
  },
  mounted: function () {
    this.$refs.swiper.$swiper.autoplay.stop()
  },
  methods: {
    getImageSrc(path) {
      return require('@/assets/' + path)
    },
    playSlider() {
      this.$refs.swiper.$swiper.autoplay.start()
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

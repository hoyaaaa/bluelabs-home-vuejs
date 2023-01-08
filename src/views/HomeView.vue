<template>
  <div>
    <v-row align="center" justify="center">
      <v-img :aspect-ratio="1920 / 1000" src="@/assets/home/row1-sea.png">
        <v-layout class="flex-column fill-height mx-16">
          <v-row align="center" justify="center">
            <v-col class="pa-0" cols="12">
              <the-app-bar absolute dark v-bind:color="'transparent'" />
            </v-col>
            <v-col class="flex-column fill-height pa-0" cols="12">
              <main-slider />
            </v-col>
          </v-row>
        </v-layout>
      </v-img>
    </v-row>
    <v-responsive :aspect-ratio="1920 / 1548">
      <div
        class="row2"
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        "
      >
        <div></div>
        <div align="center" justify="center">
          <v-col class="text-center py-2" cols="12">
            <img src="@/assets/home/row2-oyster-icon.png" />
            <div class="pretendard font-bold font-black text-h3 mt-4">
              연 평균 굴 생산 과정에서 발생하는 굴 패각량
              <span class="font-blue">약 28만 톤</span>
            </div>
            <div class="pretendard text-h5 mt-4">
              연 평균 야적 및 방치되는 굴 패각량
              <span class="font-bold font-blue">약 18만 톤</span>
            </div>
          </v-col>
        </div>
        <div>
          <v-col class="py-2" cols="10" offset="2">
            <v-img src="@/assets/home/row2-oyster.png" />
          </v-col>
        </div>
        <div class="d-flex">
          <v-col class="py-2" cols="4" offset="2">
            <v-img src="@/assets/home/row2-graph.png" />
          </v-col>
          <v-col class="py-2" cols="6" style="align-self: flex-end">
            <div class="pb-10">
              <span class="pretendard font-bold font-black text-h3">
                지자체에서
                <br />
                해양배출에 쏟는 비용
              </span>
            </div>
            <div class="pt-10">
              <span class="pretendard text-h5">연간</span>
              <br />
              <br />
              <count-number
                id="count"
                class="barlow font-blue text-h1 text-right"
                v-bind:to="4500000000"
                v-bind:play="start.count"
                style="
                  width: 30rem;
                  display: inline-block;
                  letter-spacing: -2.51px;
                "
              />
              <span
                class="pretendard font-bold text-h2"
                style="font-size: 5.25rem !important"
              >
                원
              </span>
            </div>
            <v-responsive :aspect-ratio="14 / 1" />
          </v-col>
        </div>
        <div></div>
      </div>
    </v-responsive>
    <div class="row3">
      <v-row>
        <v-col class="pa-0" cols="5">
          <v-img src="@/assets/home/row3-product.png" />
        </v-col>
        <v-col class="py-0" cols="6" offset="1">
          <div class="d-flex flex-column justify-space-between fill-height">
            <div />
            <div class="pl-8">
              <img src="@/assets/home/row3-blueball.png" />
            </div>
            <div class="pretendard text-h6 font-black pl-8">
              <span class="font-blue font-bold">블루랩스</span>는
              <br />
              <span class="font-bold">대량의 굴 껍데기를 자원화</span>하여
              <br />
              사회적 문제를 해결과 동시에 완벽한 업사이클링을
              <br />
              실현하고자 합니다.
            </div>
            <div id="slider">
              <blueball-step v-bind:play="start.slider" />
            </div>
            <div />
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="row4">
      <v-img :aspect-ratio="1920 / 720" src="@/assets/home/row4-sea.png">
        <div
          class="
            d-flex
            flex-column
            justify-space-between
            align-center
            fill-height
          "
        >
          <div />
          <div>
            <div
              class="pretendard font-white text-h3 font-bold mb-4 text-center"
              style="text-shadow: 0 0 6.6px rgba(77, 127, 166, 0.36)"
            >
              <span class="font-blue">성능</span> 또한
              <span class="font-green">친환경성</span> 만큼 중요합니다.
            </div>
            <div class="d-flex">
              <v-img src="@/assets/home/row4-chip1.png" class="ma-2" />
              <v-img src="@/assets/home/row4-chip2.png" class="ma-2" />
            </div>
          </div>
          <div class="text-center">
            <v-img src="@/assets/home/row4-btn.png" class="ma-2" />
          </div>
          <div />
        </div>
      </v-img>
    </div>
    <the-footer />
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue'
import CountNumber from '@/components/CountNumber.vue'
import TheFooter from '@/components/TheFooter.vue'
import MainSlider from '@/components/Home/MainSlider.vue'
import BlueballStep from '@/components/Home/BlueballStep.vue'

export default {
  name: 'Home',
  components: {
    TheAppBar,
    CountNumber,
    TheFooter,
    MainSlider,
    BlueballStep
  },
  data() {
    return {
      start: {
        count: false,
        slider: false
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.elementOnView('count'))
    window.addEventListener('scroll', this.elementOnView('slider'))
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.elementOnView('count'))
    window.addEventListener('scroll', this.elementOnView('slider'))
  },
  methods: {
    elementOnView(id) {
      const that = this
      return function (e) {
        const docViewTop = document.documentElement.scrollTop
        const docViewBottom = docViewTop + document.documentElement.clientHeight
        const elem = document.getElementById(id)
        const bodyRect = document.body.getBoundingClientRect()
        const elemRect = elem.getBoundingClientRect()
        const elemTop = elemRect.top - bodyRect.top
        const elemBottom = elemTop + elem.offsetHeight
        that.start[id] =
          that.start[id] ||
          (elemBottom <= docViewBottom && elemTop >= docViewTop)
      }
    }
  }
}
</script>

<style scoped>
.pretendard {
  font-family: Pretendard !important;
}

.barlow {
  font-family: 'Barlow' !important;
  font-weight: 600 !important;
  font-stretch: condensed !important;
  line-height: 0.43 !important;
}

.font-bold {
  font-weight: bold !important;
}

.row4 .font-blue {
  color: #007bc7 !important;
}

.font-green {
  color: #108753 !important;
}

.font-blue {
  color: #004ea2 !important;
}

.font-black {
  color: #131313 !important;
}

.font-white {
  color: #ffffff !important;
}

.row3 {
  background-color: rgb(247, 248, 251);
}
</style>

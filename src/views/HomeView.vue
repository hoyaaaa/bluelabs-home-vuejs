<template>
  <div>
    <v-row align="center" justify="center">
      <v-img :aspect-ratio="1920 / 1000" src="@/assets/home/sea-top.png">
        <v-layout class="flex-column fill-height mx-16">
          <v-row align="center" justify="center">
            <v-col class="pa-0" cols="12">
              <the-app-bar absolute dark v-bind:color="'transparent'" />
            </v-col>
            <v-col class="flex-column fill-height pa-0" cols="12">
              <slider />
            </v-col>
          </v-row>
        </v-layout>
      </v-img>
    </v-row>
    <v-responsive :aspect-ratio="1920 / 1548">
      <div
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
            <img src="@/assets/home/oyster-icon.png" />
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
            <v-img src="@/assets/home/oyster.png" />
          </v-col>
        </div>
        <div class="d-flex">
          <v-col class="py-2" cols="4" offset="2">
            <v-img src="@/assets/home/graph.png" />
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
              <count-number
                class="barlow font-blue text-h1 text-right"
                v-bind:to="4500000000"
                style="width: 30rem; display: inline-block"
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
    <v-row class="row3">
      <v-col class="text-center pa-0" cols="5">
        <v-img src="@/assets/home/product.png" />
      </v-col>
      <v-col class="text-center pa-0" cols="7">
        <v-row class="row3">
          <v-col class="text-center pa-0" cols="12">
            <div>BLUE BALL</div>
            <div>
              블루 랩스는
              <br />
              대량의 굴 껍데기를 자원화하여
              <br />
              사회적 문제를 해결과 동시에 완벽한 업사이클링을
              <br />
              실현하고자 합니다.
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-img :aspect-ratio="1920 / 720" src="@/assets/home/sea-bottom.png">
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
          fill-height
        >
          <v-row align="center" justify="center">
            <div class="text-center">
              <h1 class="text-h3 font-weight-bold mb-4">
                성능 또한 친환경성 만큼 중요합니다.
              </h1>
              <v-chip class="ma-2">#활성탄 대비 3배 높은 중금속 흡착력</v-chip>
              <v-chip class="ma-2"
                >#기존 활성탄이 흡착할 수 없는 니켈 (Ni), 아연 (Zn) 흡착
                가능</v-chip
              >
            </div>
          </v-row>
          <v-row align="center" justify="center">
            <div class="text-center">
              <v-btn outlined rounded> View more </v-btn>
            </div>
          </v-row>
        </v-layout>
      </v-img>
    </v-row>
    <the-footer />
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar'
import CountNumber from '@/components/CountNumber'
import TheFooter from '@/components/TheFooter'
import Slider from '@/components/Slider'

export default {
  name: 'Home',

  components: {
    TheAppBar,
    CountNumber,
    TheFooter,
    Slider
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
}

.font-bold {
  font-weight: bold !important;
}

.font-blue {
  color: #004ea2 !important;
}

.font-black {
  color: #131313 !important;
}

.row3 {
  background-color: rgb(247, 248, 251);
}
</style>

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
    <v-row align="center" justify="center">
      <v-responsive :aspect-ratio="1548 / 1920">
        <v-row class="my-16" align="center" justify="center">
          <v-col class="text-center py-2" cols="12">
            <img src="@/assets/home/oyster-icon.png" />
          </v-col>
          <v-col class="text-center py-2" cols="12">
            <h2>연 평균 굴 생산 과정에서 발생하는 굴 패각량 약 28만 톤</h2>
          </v-col>
          <v-col class="text-center py-2" cols="12">
            <h5>연 평균 야적 및 방치되는 굴 패각량 약 18만 톤</h5>
          </v-col>
        </v-row>
        <v-row class="my-16" align="end" justify="center">
          <v-col class="py-2" cols="10" offset="2">
            <v-img src="@/assets/home/oyster.png" />
          </v-col>
        </v-row>
        <v-row class="my-16" align="end" justify="center">
          <v-col class="py-2" cols="4" offset="2">
            <v-img src="@/assets/home/graph.png" />
          </v-col>
          <v-col class="py-2 mb-10" cols="6">
            <h2>지자체에서 <br />해양배출에 쏟는 비용</h2>
            <h5>연간</h5>
            <h1><count-number v-bind:to="4500000000" /> 원</h1>
          </v-col>
        </v-row>
      </v-responsive>
    </v-row>
    <v-row>
      <v-col class="text-center pa-0" cols="5">
        <v-img src="@/assets/home/product.png" />
      </v-col>
      <v-col class="text-center pa-0" cols="7"> </v-col>
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

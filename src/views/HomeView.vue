<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
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
          <v-col class="py-2" cols="5" offset="2">
            <v-img src="@/assets/home/graph.png" />
          </v-col>
          <v-col class="py-2 mb-10" cols="5">
            <h2>지자체에서 <br />해양배출에 쏟는 비용</h2>
            <h5>연간</h5>
            <h1>4,500,000,000 원</h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="text-center pa-0" cols="5">
        <v-img
          src="https://live.staticflickr.com/4529/26697577659_7e5d841da7_c.jpg"
        />
        <!-- <v-img
          src="@/assets/home/white-grain.png"
          srcset="@/assets/home/white-grain@2x.png 2x,
              @/assets/home/white-grain@3x.png 3x"
        /> -->
      </v-col>
      <v-col class="text-center pa-0" cols="7"> </v-col>
      <v-row align="center" justify="center">
        <v-col class="text-center pa-0" cols="12">
          <v-parallax src="@/assets/home/sea.png">
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="text-h3 font-weight-bold mb-4">
                  성능 또한 친환경성 만큼 중요합니다.
                </h1>
                <v-chip class="ma-2"
                  >#활성탄 대비 3배 높은 중금속 흡착력</v-chip
                >
                <v-chip class="ma-2"
                  >#기존 활성탄이 흡착할 수 없는 니켈 (Ni), 아연 (Zn) 흡착
                  가능</v-chip
                >
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <v-btn outlined rounded> View more </v-btn>
              </v-col>
            </v-row>
          </v-parallax>
        </v-col>
      </v-row>
    </v-row>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter'

export default {
  name: 'Home',

  components: {
    TheFooter
  }
}
</script>

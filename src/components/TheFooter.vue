<template>
  <v-footer padless>
    <v-img
      src="../assets/footer/background.png"
      srcset="../assets/footer/background@2x.png 2x,
              ../assets/footer/background@3x.png 3x"
      height="300"
    >
      <v-card height="50" color="transparent" class="px-16">
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          class="my-2 px-0 mr-4"
        >
          {{ link }}
        </v-btn>
      </v-card>
      <v-divider style="border-color: rgba(255, 255, 255, 0.5)"></v-divider>
      <!-- <v-container class="fill-height">
        <v-row>
          <v-col class="white--text" cols="12"> -->
      <v-card
        color="transparent"
        height="250"
        class="px-16 py-10 d-flex justify-space-between align-end"
      >
        <div
          class="
            d-flex
            flex-column
            justify-space-between
            fill-height
            white--text
          "
        >
          <div>
            대표자 : 정상호 사업자등록번호 : 748-81-02676 E-Mail :
            contact@bluelabs.kr 대표전화 : 02-953-6601
            <br />
            본사 : 서울특별시 서초구 성촌길 56 삼성전자 서울R&D캠퍼스
            <br />
            연구센터 : 서울시 성북구 안암로 145 고려대학교 R&D센터 641B호
            <br />
            통영공장 : 경상남도 통영시 도산면 법송3길 54-25
          </div>
          <div>Copyright ⓒ 2022 BLUELABS. ALL RIGHTS RESERVED.</div>
        </div>
        <div>
          <v-img
            src="../assets/footer/white-logo.png"
            srcset="../assets/footer/white-logo@2x.png 2x,
                    ../assets/footer/white-logo@3x.png 3x"
            height="49"
            width="187"
          />
        </div>
      </v-card>
      <!-- </v-col>
        </v-row>
      </v-container> -->
    </v-img>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    links: ['About us', 'Product', 'PR Center', 'Contact us']
  })
}
</script>

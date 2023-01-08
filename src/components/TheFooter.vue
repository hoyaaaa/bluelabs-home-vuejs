<template>
  <v-footer padless>
    <v-img :aspect-ratio="1920 / 389" src="@/assets/footer/background.png">
      <div class="d-flex flex-column fill-height">
        <v-col
          cols="8"
          offset="2"
          class="my-0 py-0"
          style="max-height: 100px; vertical-align: middle"
        >
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            height="100"
            class="my-0 py-0 px-4 barlow text-body-1 text-none"
          >
            {{ link }}
          </v-btn>
        </v-col>
        <v-divider style="border-color: rgba(255, 255, 255, 0.5)"></v-divider>
        <v-col
          cols="8"
          offset="2"
          class="my-0 py-16 d-flex justify-space-between align-end flex-grow-1"
          style="vertical-align: middle"
        >
          <div class="d-flex flex-column fill-height white--text text-body-2">
            <template v-for="(line, index1) in contents">
              <span class="pb-1" :key="index1">
                <template v-for="(content, index2) in line">
                  <template v-if="index2 > 0"
                    >&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</template
                  >
                  <span class="notosans" :key="index1 + index2">
                    <span class="font-bold"> {{ content.key }} </span>:
                    {{ content.value }}
                  </span>
                </template>
              </span>
            </template>
            <div class="notosans text-body-2" style="margin-top: auto">
              COPYRIGHT ⓒ 2022 BLUELABS. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div>
            <v-img src="@/assets/footer/white-logo.png" />
          </div>
        </v-col>
      </div>
    </v-img>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
    links: ['About us', 'Product', 'PR Center', 'Contact us'],
    contents: [
      [
        {
          key: '대표자',
          value: '정상호'
        },
        {
          key: '사업자등록번호',
          value: '748-81-02676'
        },
        { key: 'E-Mail', value: 'contact@bluelabs.kr' },
        { key: '대표전화', value: '02-953-6601' }
      ],

      [
        {
          key: '본사',
          value: '서울특별시 서초구 성촌길 56 삼성전자 서울R&D캠퍼스'
        }
      ],
      [
        {
          key: '연구센터',
          value: '서울시 성북구 안암로 145 고려대학교 R&D센터 641B호'
        }
      ],
      [
        {
          key: '통영공장',
          value: '경상남도 통영시 도산면 법송3길 54-25'
        }
      ]
    ]
  })
}
</script>

<style scoped>
.barlow {
  font-family: 'Barlow' !important;
  font-weight: 600 !important;
  font-stretch: condensed !important;
  letter-spacing: -0.45px !important;
}

.notosans {
  font-family: NotoSansKR !important;
  letter-spacing: -0.75px !important;
}

.font-bold {
  font-weight: bold !important;
}

span.v-btn__content {
  padding: 0;
}
</style>

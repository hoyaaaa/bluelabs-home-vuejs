<template>
  <v-app-bar
    outlined
    :color="color"
    :dark="dark"
    :absolute="absolute"
    height="100"
    elevation="0"
    class="app-bar px-14"
  >
    <div class="fill-height">
      <v-btn href="#" text class="btn barlow font-link text-body-1 px-8">
        <img src="@/assets/footer/white-logo.png" height="30" />
      </v-btn>
    </div>
    <v-spacer />
    <div class="fill-height">
      <v-btn
        v-for="link in links"
        :key="link"
        text
        href="#"
        class="btn barlow font-link text-body-1 px-8"
      >
        {{ link }}
      </v-btn>
    </div>
    <v-spacer />
    <div class="fill-height">
      <v-btn class="btn barlow font-login text-body-1 px-8" text> LOGIN </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheAppBar',
  props: {
    color: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    },
    absolute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    links: ['About us', 'Product', 'PR Center', 'Contact us']
  })
}
</script>

<style scoped>
.app-bar {
  border-bottom-color: rgba(255, 255, 255, 0.3) !important;
  z-index: 10 !important;
}

.barlow {
  font-family: Barlow !important;
  font-weight: 600 !important;
  font-stretch: condensed !important;
}

.btn {
  height: 100% !important;
}

.font-link {
  line-height: 1.5 !important;
  letter-spacing: normal !important;
  color: #ffffff !important;
}

.font-login {
  line-height: 2.28 !important;
  letter-spacing: -0.45px !important;
  color: #979797 !important;
  right: 300px;
}
</style>

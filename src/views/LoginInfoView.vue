<template>
  <div class="main">
    <v-card>
      <v-card-title>
        Google Login View
      </v-card-title>
      <v-card-text>
        <v-badge v-if="loginResult.status === 'SUCCESS'" variant="success">로그인 성공</v-badge>
        <v-badge v-else-if="loginResult.status === 'FAIL'" variant="danger">로그인 실패</v-badge>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import SocialLogin from '@/plugins/sociallogin'

export default {
  name: 'GoogleLogin',
  mixins: [SocialLogin],
  created() {
    this.doSocialLogin('GOOGLE')
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

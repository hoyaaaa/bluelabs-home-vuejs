const socialLogin = {
  data() {
    return {
      loginResult: {
        status: ''
      }
    }
  },
  methods: {
    doSocialLogin(socialType) {
      this.$axios.post('/api/token', {
        code: this.$route.query.code
      }).then(response => {
        this.$cookie.setCookie('USER_ACCESS_TOKEN', response.data.access_token)
        this.$axios.get('/api/user-info').then(response => {
          this.loginResult.status = 'SUCCESS'
          this.$cookie.setCookie('USER_KEY', response.data.id)
          this.$cookie.setCookie('USER_NAME', response.data.name)
          this.$cookie.setCookie('USER_EMAIL', response.data.email)
          this.$cookie.setCookie('USER_PICTURE', response.data.picture)
          window.opener.location.replace('/')
          window.close()
        })
      }).catch(error => {
        this.loginResult.status = 'FAIL'
        console.log('error', error)
      })
    }
  }
}
export default socialLogin

<template>
  <div>
    <hello-world />
    <the-footer />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import TheFooter from '../components/TheFooter'

export default {
  name: 'Home',

  components: {
    HelloWorld,
    TheFooter
  }
}
</script>

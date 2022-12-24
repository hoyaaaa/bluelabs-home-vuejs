<template>
  <number
    :from="0"
    :to="to"
    :format="theFormat"
    :duration="3"
    ref="count"
    animationPaused
    easing="Power1.easeOut"
    @complete="completed"
  />
</template>

<script>
export default {
  name: 'CountNumber',
  props: {
    to: {
      type: Number,
      required: true
    },
    play: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    play() {
      if (this.play) {
        this.playCount()
      }
    }
  },
  methods: {
    theFormat(number) {
      return number
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    completed() {
      console.log('Count ends!')
    },
    playCount() {
      console.log('Count starts!')
      this.$refs.count.play()
    }
  }
}
</script>

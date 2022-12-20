<template>
  <number
    :from="0"
    :to="to"
    :format="theFormat"
    :duration="10"
    easing="Power1.easeInOut"
  />
</template>

<script>
export default {
  name: 'CountNumber',
  props: {
    to: {
      type: Number,
      required: true
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
      console.log('Animation ends!')
    }
  }
}
</script>

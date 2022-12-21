<template>
  <v-app-bar
    outlined
    :color="color"
    :dark="dark"
    :absolute="absolute"
    style="border-bottom-color: rgba(255, 255, 255) !important"
    elevation="0"
    height="100"
  >
    <img src="@/assets/footer/white-logo.png" />
    <v-spacer></v-spacer>

    <v-card color="transparent" class="px-16" elevation="0">
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

    <v-spacer></v-spacer>
    <v-card color="transparent" class="px-16" elevation="0">
      <v-btn color="white" text class="my-2 px-0 mr-4"> LOGIN </v-btn>
    </v-card>
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

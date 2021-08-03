<template>
  <v-app-bar
      app
      color="white"
      flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
      ></v-avatar>

      <v-btn
          v-for="link in links"
          :key="link"
          text
      >
        {{ link }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
        ></v-text-field>
      </v-responsive>
      <i class="fas fa-shopping-cart fa-2x"></i>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
  }),
}
</script>

<style scoped>

</style>
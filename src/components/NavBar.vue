<template>
  <v-app-bar
      app
      color="white"
      flat
  >
    <v-container class="py-0 fill-height">
      <v-col
          class="text-h4"
          color="grey darken-1"
          size="60"
      >Simple Store</v-col>

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
        ><template v-slot:label>
          Search for products <v-icon style="vertical-align: middle" size="20">
          fas fa-search
        </v-icon>
        </template></v-text-field>
      </v-responsive>
      <v-spacer></v-spacer>
      <v-icon>
        fas fa-shopping-cart fa-2x
      </v-icon>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: [
      'Home',
      'Info',
      'Contacts',
    ],
  }),
}
</script>

<style scoped>

</style>
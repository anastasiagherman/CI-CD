<template>
  <v-col cols="2">
    <v-sheet rounded="lg">
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ link }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  name: "Categories",
  data: () => ({
    links: [
      'Laptops',
      'Phones',
      'Printers',
    ],
  }),
}
</script>

<style scoped>

</style>
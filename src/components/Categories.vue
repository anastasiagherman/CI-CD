<template>
  <v-col cols="2">
    <v-expansion-panels focusable>
      <v-expansion-panel
        v-for="link in $store.getters['categories/getList']"
        :key="link"
      >
        <div v-if="!link.parentLink">
          <v-expansion-panel-header>{{ link.name }}</v-expansion-panel-header>
          <div
            v-for="linkChild in $store.getters['categories/getList']"
            :key="linkChild"
          >
            <v-expansion-panel-content
              v-if="linkChild.parentLink === link.link"
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="text-wrap">
                    {{ linkChild.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-content>
          </div>
        </div>
      </v-expansion-panel>
    </v-expansion-panels>
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
  mounted() {
    this.$store.dispatch('categories/fetchCategories');
  }
}
</script>

<style scoped>

</style>
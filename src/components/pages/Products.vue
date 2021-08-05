<template>
  <v-main>
    <v-container>
      <v-row
        class="text-h2"
      >
        Products
      </v-row>
      <v-row>
        <v-col
          v-for="n in 24"
          :key="n"
          cols="4"
        >
          <ProductsItem />
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <Pagination />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Pagination from "./Pagination";
import ProductsItem from "./ProductsItem";
export default {
name: "Products",
  components: {ProductsItem, Pagination},
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {

  },
}
</script>

<style scoped>

</style>
<template>
  <v-main>
    <v-container
      v-if="$store.getters['products/getIsLoading']"
    >
      <v-row
        class="text-h2"
      >
        Products
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-skeleton-loader
            class="mb-6"
            :boilerplate="true"
            :elevation="2"
            type="card-avatar, actions"
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-skeleton-loader
            class="mb-6"
            :boilerplate="true"
            :elevation="2"
            type="card-avatar, actions"
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-skeleton-loader
            class="mb-6"
            :boilerplate="true"
            :elevation="2"
            type="card-avatar, actions"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row
        class="text-h2"
      >
        Products
      </v-row>
      <v-row key="products">
        <v-col
          v-for="(item, i) in $store.getters['products/getList']"
          :key="item.link + i"
          cols="4"
        >
          <ProductsItem :item="item" />
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
  props: {
  link: {
    required: false,
    default: () => '',
    type: String
  }
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  watch: {
    link: {
      immediate: true,
      handler() {
        this.$store.dispatch('products/loadProducts', this.link);
      }
    },
  },
  mounted() {
  this.$store.dispatch('products/loadProducts', this.link);
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
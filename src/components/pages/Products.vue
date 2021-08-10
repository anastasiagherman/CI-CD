<template>
  <v-main>
    <v-container>
      <v-row
        class="text-h2"
      >
        Products
      </v-row>
      <div
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="$store.getters['products/getIsLoading']"
        infinite-scroll-distance="10"
      >
        <v-row>
          <v-col
            v-for="(item, i) in $store.getters['products/getList']"
            :key="item.link + i"
            cols="4"
          >
            <ProductsItem :item="item" />
          </v-col>
        </v-row>
        <v-row class="justify-center" />
        <v-row v-if="$store.getters['products/getIsLoading']">
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
      </div>
    </v-container>
  </v-main>
</template>

<script>
import ProductsItem from "./ProductsItem";
export default {
name: "Products",
  components: {ProductsItem},
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
    page: 1,
  }),
  watch: {
    link: {
      immediate: true,
      handler() {
        this.page = 1;
        this.$store.dispatch('products/loadProducts', {
          link: this.link,
          page: this.page
        });
      }
    },
  },
  methods: {
  loadMore: function() {
    console.log(1);
    this.$store.dispatch('products/loadProducts', {
      link: this.link,
      page: ++this.page
    });
  }
  }
}
</script>

<style scoped>

</style>
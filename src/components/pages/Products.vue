<template>
  <v-main>
    <v-container>
      <v-row
        class="text-h2"
      >
        Products
      </v-row>
      <Categories class="hidden-lg-and-up col-md-12 col-12" />
      <div
        v-infinite-scroll="loadMore"
        :infinite-scroll-disabled="$store.getters['products/getIsLoading']"
        infinite-scroll-distance="10"
      >
        <v-row>
          <v-col
            v-for="(item, i) in $store.getters['products/getList']"
            :key="item.link + i"
            cols="12"
            sm="6"
            md="4"
          >
            <ProductsItem :item="item" />
          </v-col>
        </v-row>
        <v-row class="justify-center" />
        <v-row v-if="$store.getters['products/getIsLoading']">
          <v-col
            v-for="index in 80"
            :key="index"
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
import {mapActions} from 'vuex';
import Categories from "./../Categories";
export default {
name: "Products",
  components: {ProductsItem, Categories},
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
        this.loadProducts({
          link: this.link,
          page: this.page
        });
      }
    },
  },
  methods: {
  loadMore: function() {
    this.loadProducts({
      link: this.link,
      page: ++this.page
    });
  },
    ...mapActions({
      loadProducts: 'products/loadProducts'
    }),
  }
}
</script>

<style scoped>

</style>
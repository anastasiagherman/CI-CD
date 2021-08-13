<template>
  <v-responsive max-width="260">
    <v-autocomplete
      v-model="value"
      dense
      flat
      hide-details
      rounded
      solo-inverted
      :items="$store.getters['products/getSearchSuggestions']"
      :loading="$store.getters['products/getIsSearchLoading']"
      :search-input.sync="search"
      color="white"
      hide-no-data
      hide-selected
      item-text="title"
      item-value="url"
      return-object
      @change="onChange"
      @keydown.enter="onSubmit"
    >
      <template v-slot:label>
        <v-icon
          style="vertical-align: middle"
          size="20"
        >
          fas fa-search
        </v-icon>
        Search for products
      </template>
    </v-autocomplete>
  </v-responsive>
</template>

<script>
export default {
name: "Search",
  data: () => ({
    search: null,
    value: {}
  }),
  watch: {
    search () {
      this.$store.dispatch('products/searchProducts', this.search);
    },
  },
  methods: {
  onSubmit(e) {
    e.preventDefault();
    this.$router.push({
      path: '/products',
      query: {
        link: `/ru/search?query=${this.search}`
      }
    })
  },
    onChange() {
    if(this.value){
      this.$router.push({
        path: '/products',
        query: {
          link: this.value.url
        }
      })
    }
    }
  }
}
</script>

<style scoped>

</style>
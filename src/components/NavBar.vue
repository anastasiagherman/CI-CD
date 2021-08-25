<template>
  <div>
    <v-app-bar
      app
      class="navbar"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-toolbar-items class="hidden-lg-and-up">
          <v-app-bar-nav-icon @click="toggle = !toggle" />
        </v-toolbar-items>
        <v-col>
          <v-btn
            key="/"
            class="text-h5 hidden-sm-and-down"
            color="grey darken-1"
            to="/"
            text
          >
            Simple Store
          </v-btn>
        </v-col>
        <v-btn
          v-for="link in links"
          :key="link.route"
          class="hidden-md-and-down"
          :to="link.route"
          text
        >
          {{ link.title }}
        </v-btn>

        <v-spacer />
        <Search
          v-model="search"
          :items="$store.getters['products/getSearchSuggestions']"
          :loading="$store.getters['products/getIsSearchLoading']"
          @onSubmit="onSubmit"
          @onChange="onChange"
        />
        <v-spacer />
        <v-icon class="hidden-md-and-down">
          fas fa-shopping-cart fa-2x
        </v-icon>
        <v-badge
          class="hidden-md-and-down"
          color="yellow darken-3"
          content="6"
          offset-x="10"
          offset-y="20"
          bordered
          bottom
        />
        <v-spacer />
        <div class="text-center hidden-md-and-down">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-avatar
                color="grey lighten-1"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dark>
                  mdi-account-circle
                </v-icon>
              </v-avatar>
            </template>
            <Account />
          </v-menu>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="toggle"
      fixed
      temporary
    >
      <Categories class="col-md-12 col-12" />
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Search from "./pages/Search";
import Categories from "./Categories";
import Account from "./pages/Account";

export default {
  name: "NavBar",
  components: {Account, Categories, Search},
  data: () => ({
    inputData: '',
    search: '',
    toggle: false,
    links: [
      {title: 'Home', route: '/', icon: 'mdi-home'},
      {title: 'Info', route: '/info', icon: 'mdi-information-outline'},
      {title: 'Contacts', route: '/contacts', icon: 'mdi-book-open-blank-variant'},
    ],
  }),
  watch: {
    search() {
        this.searchProducts(this.search);
    },
  },
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/products',
        query: {
          link: `/ru/search?query=${this.search}`
        }
      })
    },
    onChange(e) {
      if(this.search) {
        this.$router.push({
          path: '/products',
          query: {
            link: e.url
          }
        })
      }
    },
    ...mapActions({
      searchProducts: 'products/searchProducts',
    }),
  }
}
</script>

<style scoped>

</style>
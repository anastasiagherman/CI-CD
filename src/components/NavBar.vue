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
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
              <v-divider class="my-2" />
              <v-sheet class="pa-5">
                <v-switch
                  v-model="$vuetify.theme.dark"
                  inset
                  :label="`Dark mode`"
                  @change="changeDarkMode"
                />
              </v-sheet>
            </v-list>
          </v-menu>
        </div>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="toggle"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in mobileLinks"
            :key="link.route + i"
            :to="link.route"
            text
          >
            <v-list-item-icon><v-icon>{{ link.icon }}</v-icon></v-list-item-icon>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex';
import Search from "./pages/Search";
export default {
  name: "NavBar",
  components: {Search},
  data: () => ({
    inputData: '',
    search: '',
    toggle: false,
    links: [
      {title: 'Home', route: '/', icon: 'mdi-home'},
      {title: 'Info', route: '/info', icon: 'mdi-information-outline'},
      {title: 'Contacts', route: '/contacts', icon: 'mdi-book-open-blank-variant'},
    ],
    items: [
      { title: 'Sign in', icon: 'fas fa-sign-in-alt', route: ''},
      { title: 'Register', icon: 'fas fa-sign-in-alt', route: ''},
      { title: 'Logout', icon: 'fas fa-sign-out-alt', route: ''},
    ],
  }),
  computed: {
    mobileLinks() {
      return this.links.concat(this.items, [{title: 'Cart', icon: 'mdi-cart', route: ''}]);
    },
    ...mapGetters({
    isDarkModeEnabled: 'settings/getIsDarkModeEnabled'
  })},
  watch: {
    isDarkModeEnabled: {
      handler() {
        this.$vuetify.theme.dark = this.isDarkModeEnabled
      },
      immediate: true
    },
    search() {
      this.searchProducts(this.search);
    },
  },
  methods: {
    changeDarkMode() {
      this.mutateIsDarkModeEnabled(!this.isDarkModeEnabled);
    },
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
      searchProducts: 'products/searchProducts'
    }),
    ...mapMutations({
      mutateIsDarkModeEnabled: 'settings/mutateIsDarkModeEnabled'
    })
  }
}
</script>

<style scoped>

</style>
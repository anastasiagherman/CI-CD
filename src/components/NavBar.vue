<template>
  <v-app-bar
    app
    class="navbar"
    flat
  >
    <v-container class="py-0 fill-height">
      <v-col>
        <v-btn
          key="/"
          class="text-h5"
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
        :to="link.route"
        text
      >
        {{ link.title }}
      </v-btn>

      <v-spacer />

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
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
        </v-text-field>
      </v-responsive>
      <v-spacer />
      <v-icon>
        fas fa-shopping-cart fa-2x
      </v-icon>
      <v-badge
        color="yellow darken-3"
        content="6"
        offset-x="10"
        offset-y="20"
        bordered
        bottom
      />
      <v-spacer />
      <div class="text-center">
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
                v-model="isDarkMode"
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
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "NavBar",
  data: () => ({
    isDarkMode: () => this.$store.getters['settings/getIsDarkModeEnabled'],
    links: [
      {title: 'Home', route: '/'},
      {title: 'Info', route: '/info'},
      {title: 'Contacts', route: '/contacts'},
    ],
    items: [
      { title: 'Sign in', icon: 'fas fa-sign-in-alt'},
      { title: 'Register', icon: 'fas fa-sign-in-alt'},
      { title: 'Logout', icon: 'fas fa-sign-out-alt'},
    ],
  }),
  computed: mapGetters({
    isDarkModeEnabled: 'settings/getIsDarkModeEnabled'
  }),
  watch: {
    isDarkModeEnabled: {
      handler() {
        this.$vuetify.theme.dark = this.isDarkModeEnabled
      },
      immediate: true
    }
  },
  methods: {
    changeDarkMode() {
      this.$store.commit('settings/mutateIsDarkModeEnabled', !this.isDarkModeEnabled);
    }
  }
}
</script>

<style scoped>

</style>
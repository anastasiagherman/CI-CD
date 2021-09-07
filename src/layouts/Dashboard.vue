<template>
  <v-app id="inspire">
    <NavBar />
    <v-main class="app">
      <v-container
        fluid
      >
        <v-row>
          <Categories class="hidden-md-and-down" />
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <Content />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
      <BottomNavigationMobile class="hidden-lg-and-up" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";
import Content from "../components/Content";
import BottomNavigationMobile from "../components/pages/BottomNavigationMobile";
import {mapGetters} from "vuex";
export default {
  components: {BottomNavigationMobile, Content, Categories, NavBar},
  data: () => ({

  }),
  computed: {
    ...mapGetters({
      isDarkModeEnabled: 'settings/getIsDarkModeEnabled'
    })
  },
  mounted() {
    this.$vuetify.theme.dark = this.isDarkModeEnabled
  }
}
</script>
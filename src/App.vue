<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <Categories/>
          <v-col>
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
export default {
  components: {Categories, NavBar},
  data: () => ({

  }),
}
</script>
<template>
  <v-app id="inspire">
    <NavBar />
    <v-main class="app">
      <v-container>
        <v-row>
          <Categories />
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
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import Content from "./components/Content";
export default {
  components: {Content, Categories, NavBar},
  data: () => ({

  }),
}
</script>
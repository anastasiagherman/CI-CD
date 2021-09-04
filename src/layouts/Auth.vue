<template>
  <v-app>
    <v-container
      grid-list-xl
      text-xs-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs4
          offset-xs4
        >
          <router-view />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
name: "Auth",
}
</script>

<style scoped>

</style>
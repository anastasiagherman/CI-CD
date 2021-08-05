<template>
  <div class="text-center mb-3">
    <v-pagination
      v-model="page"
      :length="6"
    />
  </div>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped>

</style>
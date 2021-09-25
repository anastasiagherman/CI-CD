<template>
  <div>
    <div>
      <RouterView />
      <ErrorMessage />
    </div>
  </div>
</template>

<script>
import ErrorMessage from "./ErrorMessage";
export default {
  name: "Content",
  components: {ErrorMessage}
}
</script>

<style scoped>

</style>
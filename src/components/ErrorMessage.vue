<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      rounded="pill"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import eventBus from "../eventBus";
import {ERROR_MESSAGE} from "../constants/eventBus";

export default {
name: "ErrorMessage",
  data: () => ({
    multiLine: true,
    snackbar: false,
    text: '',
  }),
  mounted() {
  let timeOutId;
  eventBus.$on(ERROR_MESSAGE, (e) => {
    clearTimeout(timeOutId);
    this.snackbar = true;
    this.text = e.response.data.message;
    timeOutId = setTimeout(() => {
      this.snackbar = false
    }, 5000);
  })
  }
}
</script>

<style scoped>

</style>
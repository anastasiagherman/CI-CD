<template>
  <v-responsive max-width="260">
    <form
      @submit="onSubmit"
    >
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
        :value="value"
        @keypress="$emit('input', $event.target.value)"
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
    </form>
  </v-responsive>
</template>

<script>
export default {
name: "Search",
  props: {
  value: {
    type: String,
    required: false,
    default: ''
  }
  },
  methods: {
  onSubmit(e) {
    e.preventDefault();
    this.$emit('onEnterPress', this.value);
  }
  }
}
</script>

<style scoped>

</style>
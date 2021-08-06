<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      />
    </template>

    <div v-if="item.img.length !== 0">
      <v-img
        height="250"
        :src="item.img[0]"
      />
    </div>
    <div v-else>
      <v-img
        height="250"
        :src="require('../../assets/defaultImg.jpg')"
      />
    </div>

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <div
        v-if="item.noPrice"
        class="my-4 text-subtitle-1"
      >
        Договорная
      </div>
      <div
        v-else
        class="my-4 text-subtitle-1"
      >
        ${{ item.price }}
      </div>

      <div>{{ item.description.substring(0, 45) }}</div>
    </v-card-text>

    <v-divider class="mx-4" />
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "ProductsItem",
  props: {
  item: {
    required: true,
    type: Object
  }
  }
}
</script>

<style scoped>

</style>
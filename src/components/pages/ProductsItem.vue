<template>
  <router-link
    class="item"
    :to="{
      name: 'item',
      params: {
        id: itemId
      }
    }"
  >
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

      <div v-if="item.img.length === 0 || item.img[0].endsWith('.gif')">
        <v-img
          height="250"
          :src="require('../../assets/defaultImg.jpg')"
        />
      </div>
      <div v-else>
        <v-img
          height="250"
          :src="item.img[0]"
        />
      </div>
      <div
        class="scroll-y"
        style="height: 300px"
      >
        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-text>
          <div
            v-if="item.noPrice || item.price === null"
            class="my-4 text-subtitle-1"
          >
            Договорная
          </div>
          <div
            v-else
            class="my-4 text-subtitle-1"
          >
            {{ item.price }} {{ item.currency }}
          </div>

          <div>{{ item.description.substring(0, 100) }}</div>
        </v-card-text>
      </div>

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
  </router-link>
</template>

<script>
export default {
name: "ProductsItem",
  props: {
  item: {
    required: true,
    type: Object
  }
  },
  computed: {
  itemId: function() {
    let link = this.item.link.split('/');
    return link[link.length - 1];
  }
  }
}
</script>

<style scoped>
.item {
  text-decoration: none;
}
</style>
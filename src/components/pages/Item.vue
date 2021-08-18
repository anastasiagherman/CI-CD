<template>
  <v-card
    class="mx-auto"
  >
    <div v-if="item.img">
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows-on-hover
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <v-carousel-item
          v-for="(image, i) in item.img"
          :key="i"
          :src="image"
        />
      </v-carousel>
    </div>
    <v-card-title>{{ item.title }}</v-card-title>


    <v-card-subtitle class="pb-0">
      <div v-if="item.noPrice || item.price === null">
        Договорная
      </div>
      <div v-else>
        {{ item.price }} $
      </div>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ item.description }}</div>
      Основные характеристики:
      <div
        v-for="(characteristic, i) in item.mainFeatures"
        :key="i"
      >
        {{ formatCharacteristics(characteristic.name) }}{{ characteristic.value }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
name: "Item",
  props: {
  id: {
    type: String,
    required: true,
  },
  },
  computed: {
    ...mapGetters({
      item: 'item/getItem'
    }),
  },
  created() {
  this.loadItem(this.id);
  },
  methods: {
  ...mapActions({
    loadItem: 'item/loadItem'
  }),
    formatCharacteristics(string) {
    return string.padEnd(30 - string.length, '.');
    }
  }
}
</script>

<style scoped>

</style>
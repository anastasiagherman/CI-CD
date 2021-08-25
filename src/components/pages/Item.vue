<template>
  <v-container>
    <v-sheet
      rounded="lg"
      elevation="3"
      outlined
    >
      <div v-if="isLoading">
        <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        />
      </div>
      <div v-else>
        <v-card
          class="mx-auto"
        >
          <div v-if="item.img.length">
            <v-carousel
              cycle
              hide-delimiter-background
              show-arrows-on-hover
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
            <div style="white-space: pre-wrap">
              {{ item.description }}
            </div>
            <div v-if="item.mainFeatures.length">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Основные характеристики:</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-list-item
                        v-for="(characteristic, i) in item.mainFeatures"
                        :key="i"
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            v-if="characteristic.value"
                          >
                            <div class="feature">
                              <div>{{ characteristic.name }}</div>
                              <div class="dotted hidden-xs-only" />
                              <v-spacer class="hidden-sm-and-up" />
                              <div>{{ characteristic.value }}</div>
                            </div>
                          </v-list-item-title>
                          <v-list-item-title
                            v-else
                            v-text="characteristic.name"
                          />
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <div v-if="item.secondaryFeatures.length">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Свойства</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-list>
                      <v-list-item
                        v-for="(characteristic, i) in item.secondaryFeatures"
                        :key="i"
                      >
                        <v-list-item-content>
                          <v-list-item-title
                            v-if="characteristic.value"
                          >
                            <div class="feature">
                              <div>{{ characteristic.name }}</div>
                              <div class="dotted hidden-xs-only" />
                              <v-spacer class="hidden-sm-and-up" />
                              <div>{{ characteristic.value }}</div>
                            </div>
                          </v-list-item-title>
                          <v-list-item-title
                            v-else
                            v-text="characteristic.name"
                          />
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <div v-if="item.location">
              Регион: {{ location }}
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
      </div>
    </v-sheet>
  </v-container>
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
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2,
    },
  }),
  computed: {
    ...mapGetters({
      item: 'item/getItem',
      isLoading: 'item/getIsLoading'
    }),
    location() {
      return this.item.location
      .map(({name}) => name)
      .join(', ')
    }
  },
  created() {
  this.loadItem(this.id);
  },
  mounted() {
  window.scroll(0, 0);
  },
  methods: {
  ...mapActions({
    loadItem: 'item/loadItem'
  }),
    formatCharacteristics(string) {
    return string.padEnd(70 - string.length, '.');
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 500px) {
  .feature {
    font-size: 12px;
    white-space: pre-wrap;
  }
}
div .dotted {
  width: 100%;
  border-bottom: 2px dotted;
  margin: 0 10px;
  position: relative;
  top: -3px;
}
div .feature {
  display: flex;
}


</style>
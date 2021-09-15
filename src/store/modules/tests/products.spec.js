import Vue from "vue";
import Vuex from "vuex";
import products from "../products";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        products
    }
})

describe('products', () => {
    it('should be an empty array', () => {
        expect(store.getters['products/getList']).toHaveLength(0);
        expect(store.getters['products/getSearchSuggestions']).toHaveLength(0);
        expect(store.getters['products/getIsLoading']).toBeFalsy();
        expect(store.getters['products/getIsSearchLoading']).toBeFalsy();
    })
    it('should change to true', () => {
        store.commit('products/mutateIsLoading', true);
        expect(store.getters['products/getIsLoading']).toBeTruthy();
        store.commit('products/mutateIsSearchLoading', true);
        expect(store.getters['products/getIsSearchLoading']).toBeTruthy();
    })
    it('should receive an array of products and isLoading to be false', async () => {
        await store.dispatch('products/loadProducts', {
            link: '/ru/list/transport/cars'
        }).then(() => {
            expect(store.getters['products/getList']).toHaveLength(83);
            expect(store.getters['products/getIsLoading']).toBeFalsy();
        })
    })
    it('should receive an array of products and isLoading to be false when page is 2', async () => {
        await store.dispatch('products/loadProducts', {
            link: '/ru/list/transport/cars',
            page: 2
        }).then(() => {
            expect(store.getters['products/getList']).toHaveLength(166);
            expect(store.getters['products/getIsLoading']).toBeFalsy();
        })
    })
    it('should receive an array of search suggestions and isSearchLoading to be false', async () => {
      await store.dispatch('products/searchProducts', 'mercedes').then(() => {
          expect(store.getters['products/getSearchSuggestions']).toHaveLength(10);
          expect(store.getters['products/getSearchSuggestions'][0].title).toContain('mercedes');
          expect(store.getters['products/getIsSearchLoading']).toBeFalsy();
      })
    })
})
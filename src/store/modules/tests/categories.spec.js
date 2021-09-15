import Vue from "vue";
import Vuex from "vuex";
import categories from "../categories";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        categories
    }
})

describe('categories', () => {
    it('should have default value false', () => {
        expect(store.getters['categories/getIsLoading']).toBeFalsy();
        expect(store.getters['categories/getList']).toHaveLength(0);
    })
    it('should change to true', () => {
        store.commit('categories/mutateLoading', true);
        expect(store.getters['categories/getIsLoading']).toBeTruthy();
    })
    it('should receive an array of categories and isLoading should be false', async () => {
        await store.dispatch('categories/fetchCategories', ). then(() => {
            expect(store.getters['categories/getList']).toHaveLength(533);
            expect(store.getters['categories/getList'][0].name).toBe('Транспорт');
            expect(store.getters['categories/getIsLoading']).toBeFalsy();
        });
    })
})
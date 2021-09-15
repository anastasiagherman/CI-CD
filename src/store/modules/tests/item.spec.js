import Vue from "vue";
import Vuex from "vuex";
import item from "../item";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        item
    }
})

describe('item', () => {
    it('should have default value', () => {
        expect(store.getters['item/getIsLoading']).toBeFalsy();
        expect(Object.keys(store.getters['item/getItem'])).toHaveLength(0);
    })
    it('should change to true', () => {
        store.commit('item/mutateIsLoading', true);
        expect(store.getters['item/getIsLoading']).toBeTruthy();
    })
    it('should receive an object and isLoading should be false', async () => {
        await store.dispatch('item/loadItem', '71654315').then(() => {
            expect(store.getters['item/getItem'].title).toBe('Opel Zafira');
            expect(store.getters['item/getIsLoading']).toBeFalsy();
        })
    })
})
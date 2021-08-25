import {fetchItem} from "../../api/999";

export default {
    namespaced: true,
    state: {
        item: {},
        isLoading: false,
    },
    getters: {
        getItem: ({item}) => item,
        getIsLoading: (state) => state.isLoading
    },
    actions: {
        async loadItem(store, payload) {
            store.commit('mutateIsLoading', true);
            const result = await fetchItem('/ru/' + payload);
            store.commit('mutateItemInfo', await result.data);
            store.commit('mutateIsLoading', false);
        }
    },
    mutations: {
        mutateItemInfo(state, payload) {
            state.item = payload;
        },
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        }
    }
}
import { encode } from 'js-base64';
export default {
    namespaced: true,
    state: {
        list: [],
        isLoading: false,
        search: {},
        isSearchLoading: false,
    },
    getters: {
        getList: (state) =>state.list,
        getIsLoading: (state) => state.isLoading,
        getSearchSuggestions: (state) => state.search?.suggestions ?? [],
        getIsSearchLoading: (state) => state.isSearchLoading
    },
    actions: {
        async loadProducts(store, {link, page}) {
            store.commit('mutateIsLoading', true);
            let result;
            let querySymbol = link.includes('?') ? '&' : '?';
            const params = encode(`${link}${querySymbol}page=${page}`);
            result = await fetch(`/api/products?linkBase64=${params}`);
            if(page > 1) {
                store.commit('mutateAddList', await result.json());
            } else {
                store.commit('mutateList',await result.json());
            }
            store.commit('mutateIsLoading', false);
        },
        async searchProducts(store, payload) {
            store.commit('mutateIsSearchLoading', true);
            let result = await fetch(`/api/suggestions?query=${payload}`);
            store.commit('mutateSearchList', await result.json());
            store.commit('mutateIsSearchLoading', false);
        }

    },
    mutations: {
        mutateList(state, payload) {
            state.list = payload
        },
        mutateIsLoading(state, payload) {
            state.isLoading = payload;
        },
        mutateAddList(state, payload) {
            state.list = state.list.concat(payload);
        },
        mutateIsSearchLoading(state, payload) {
            state.isSearchLoading = payload;
        },
        mutateSearchList(state, payload) {
            state.search = payload;
        }
    }
}
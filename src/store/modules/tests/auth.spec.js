import Vue from "vue";
import Vuex from "vuex";
import auth from "../auth";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth
    }
})

describe('auth', () => {
    it('should have default value false', () => {
        expect(store.getters['auth/getIsAuthorised']).toBeFalsy();
        expect(store.getters['auth/getUsername']).toBe('');
    })
    it('should change isAuthorised to true and username to test', () => {
        store.dispatch('auth/login', {username: 'test'});
        expect(store.getters['auth/getUsername']).toBe('test');
        expect(store.getters['auth/getIsAuthorised']).toBeTruthy();
    })
    it('should change isAuthorised to false and username to null', () => {
        store.dispatch('auth/logout');
        expect(store.getters['auth/getUsername']).toBeNull();
        expect(store.getters['auth/getIsAuthorised']).toBeFalsy();
    })
})
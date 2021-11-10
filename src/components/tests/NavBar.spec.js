import {createLocalVue,shallowMount} from "@vue/test-utils";
import NavBar from "../NavBar";
import Vuex from "vuex";
import Vuetify from 'vuetify';
import VueRouter from "vue-router";
import Vue from 'vue'

// const localVue = createLocalVue();
Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(VueRouter);


const store = new Vuex.Store({
    getters: {
        'products/getSearchSuggestions': jest.fn(),
        'products/getIsSearchLoading': jest.fn()
    }
})

describe('NavBar', () => {
    it('should match snapshot', () => {
        const component = shallowMount(NavBar, {
            store,
            Vue,
            vuetify: new Vuetify({
                icons: {
                    iconfont: 'fa',
                },
            })
        })
        expect(component.element).toMatchSnapshot();
    })
})
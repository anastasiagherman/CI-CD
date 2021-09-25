import {createLocalVue, mount} from "@vue/test-utils";
import NavBar from "../NavBar";
import Vuex from "vuex";
import Vuetify from 'vuetify';
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);
localVue.use(VueRouter);
// localVue.component('VIcon', {
//
// })

const store = new Vuex.Store({
    getters: {
        'products/getSearchSuggestions': jest.fn(),
        'products/getIsSearchLoading': jest.fn()
    }
})

describe('NavBar', () => {
    it('should match snapshot', () => {
        const component = mount(NavBar, {
            store,
            localVue,
            vuetify: new Vuetify({
                icons: {
                    iconfont: 'fa',
                },
            })
        })
        expect(component.element).toMatchSnapshot();
    })
})
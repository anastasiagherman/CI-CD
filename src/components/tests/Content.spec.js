import Content from "../Content";
import {createLocalVue, mount, shallowMount} from "@vue/test-utils";
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

localVue.component('RouterView', {
    functional: true,
    render: () => 'test',
})

describe('Content', () => {
    it('should match snapshot', () => {
        const component = shallowMount(Content, {
            localVue
        });
        expect(component.element).toMatchSnapshot();
    })
})
import React from 'react';
import {shallow} from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';
describe('pruebas en <GifExpertApp />', () => {
    test('ok', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar una lista de categorias', () => {
        const categorias = ['One Punch', 'Dragon'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categorias}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categorias.length);
    })
    
    
})

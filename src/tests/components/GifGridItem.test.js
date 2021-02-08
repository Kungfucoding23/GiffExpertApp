import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifExpertApp from "../../components/GifExpertApp"

describe('Pruebas en componente GifGridItem', () => {
    test('debe mostrar el componente correctamente', () => {
        let wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})

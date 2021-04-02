import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifExpertApp from "../../components/GifExpertApp"

describe('Pruebas en componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    test('debe mostrar el componente correctamente', () => {
        let wrapper = shallow(<GifExpertApp title={title} url={url}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})

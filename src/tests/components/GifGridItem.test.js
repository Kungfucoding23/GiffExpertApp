import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifExpertApp from "../../components/GifExpertApp"

describe('Pruebas en componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    let wrapper = shallow(<GifExpertApp title={title} url={url}/>);

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener animate__animated', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__animated')).toBe(true);
    })

})

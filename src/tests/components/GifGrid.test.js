import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import {shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../components/GifGrid');


describe('pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('debe mostrarse ok', () => {
        // const gifs = [{
        //     id: 'ABC',
        //     url: 'https://localhost/cualquier/cosa.jpg',
        //     title: 'Cualquier cosa'
        // }];
        // useFetchGifs.mockReturnValue({
        //     data: gifs,
        //     loading: true
        // });
        const wrapper = shallow(<GifGrid category={category}/> );
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category}/> );
        expect(wrapper).toMatchSnapshot();

    })
    
    
})

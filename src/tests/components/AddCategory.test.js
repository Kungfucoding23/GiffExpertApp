import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Ale';
        input.simulate('change', { target: {value} });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('no debe de postear la info con submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        //simular el inputChange
        const input = wrapper.find('input');
        const value = 'Ale';
        input.simulate('change', { target: {value} });
        //simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        //setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //el valor del input debe estar vacio
        expect(wrapper.find('input').prop('value')).toBe('');        
    })    
})
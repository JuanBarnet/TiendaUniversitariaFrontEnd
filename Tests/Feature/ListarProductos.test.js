import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext'
import { Authenticator } from '../../components/Authenticator'
import { FormListaProductos } from "../../components/FormListaProductos"

import Home from '../../pages/index'

Enzyme.configure({ adapter: new Adapter() });

describe("Identificacion de elementos:", () => {
  test("Se identifica el Field nombre.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find({ 'name': 'buscador' });
    expect(field.exists()).toEqual(true);
  });

  test("Se identifica el boton acceder a la venta.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find({ 'type': 'submit' });
    expect(field.exists()).toEqual(true);
  });

  test("Se carga correctamente el numero de columnas.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="header_lista"]');
    console.log(field.length);
    // expect(true).toEqual(true);
    expect(field).toHaveLength(8);
  });
});

describe("Identificacion de elementos de la tabla:", () => {
  test("Se identifica la columna Nombre.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(1);
    expect(field.text()).toEqual("Nombre");
  });
  test("Se identifica la columna Código Interno.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(2);
    expect(field.text()).toEqual("Código Interno");
  });
  test("Se identifica la columna Código de Barras.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(3);
    expect(field.text()).toEqual("Código de Barras");
  });
  test("Se identifica la columna Precio.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(4);
    expect(field.text()).toEqual("Precio");
  });
  test("Se identifica la columna Stock Actual.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(5);
    expect(field.text()).toEqual("Stock Actual");
  });
  test("Se identifica la columna Estado.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(6);
    expect(field.text()).toEqual("Estado");
  });
  test("Se identifica la columna Modificar Stock.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(7);
    expect(field.text()).toEqual("Modificar Stock");
  });
  test("Se identifica la columna Vender.", () => {
    const wrapper = mount(<FormListaProductos />);
    const field = wrapper.find('[id="text_lista"]').at(8);
    expect(field.text()).toEqual("Vender");
  });
});
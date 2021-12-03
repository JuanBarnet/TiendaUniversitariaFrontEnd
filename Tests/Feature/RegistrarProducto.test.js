import React from 'react';
import {render, screen, waitFor} from '@testing-library/react'
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext'
import { Authenticator } from '../../components/Authenticator'
import { FormAddProducto } from "../../components/Registrar/Producto/FormAddProducto"

import Home from '../../pages/index'

Enzyme.configure({ adapter: new Adapter() });

describe("Identificacion de elementos del formulario:", ()=> {
  test("Se identifica el Field nombre.", () => {
    const wrapper= mount(<FormAddProducto />);
    const field= wrapper.find({'name':'nombre'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field precio.", () => {
    const wrapper= mount(<FormAddProducto />);
    const field= wrapper.find({'name':'precio'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field stockActual.", () => {
    const wrapper= mount(<FormAddProducto />);
    const field= wrapper.find({'name':'stockActual'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field stockCritico.", () => {
    const wrapper= mount(<FormAddProducto />);
    const field= wrapper.find({'name':'stockCritico'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field categoria.", () => {
    const wrapper= mount(<FormAddProducto />);
    const field= wrapper.find({'name':'categoria'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field descripcion.", () => {
    const wrapper= mount(<FormAddProducto />);
    const field= wrapper.find({'name':'descripcion'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el boton submit.", () => {
    const wrapper= mount(<FormAddProducto />);
    const field= wrapper.find("#boton_registrar");
    expect(field.exists()).toEqual(true);
 });
});

test('Se comprueba los campos requeridos del formulario.', async () => {
  const handleSubmit = jest.fn()
  render(<FormAddProducto functionTest={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/Nombre:/i), 'Goma de borrar negra')
  userEvent.type(screen.getByLabelText(/Precio:/i), '1000')
  userEvent.type(screen.getByLabelText(/Stock Actual:/i), '100')
  userEvent.type(screen.getByLabelText(/Stock Crítico:/i), '10')
  userEvent.selectOptions(screen.getByLabelText(/Categoría:/i), '001')
  userEvent.type(screen.getByLabelText(/Descripción/i), 'Esta es una bonita goma de borrar negra')
  userEvent.click(screen.getByRole('button', {name: /Registrar/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalled(),
  )
})

test('Se comprueba el funcionamiento del formulario.', async () => {
  const handleSubmit = jest.fn()
  render(<FormAddProducto functionTest={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/Nombre:/i), 'Goma de borrar negra')
  userEvent.type(screen.getByLabelText(/Precio:/i), '1000')
  userEvent.selectOptions(screen.getByLabelText(/Categoría:/i), '001')
  userEvent.type(screen.getByLabelText(/Stock Actual:/i), '100')
  userEvent.type(screen.getByLabelText(/Stock Crítico:/i), '10')
  userEvent.type(screen.getByLabelText(/Descripción/i), 'Esta es una bonita goma de borrar negra')

  userEvent.click(screen.getByRole('button', {name: /Registrar/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      nombre: "Goma de borrar negra",
      precio: "1000",
      stockActual: "100",
      stockCritico: "10",
      categoria: "001",
      descripcion: "Esta es una bonita goma de borrar negra",
    }),
  )
})
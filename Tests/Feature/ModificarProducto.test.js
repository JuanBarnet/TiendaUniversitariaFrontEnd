import React from 'react';
import {render, screen, waitFor} from '@testing-library/react'
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import userEvent from '@testing-library/user-event'

import { AuthContext } from '../../contexts/AuthContext'
import { Authenticator } from '../../components/Authenticator'
import { FormModificarProductos } from "../../components/Modificar/FormModificarProductos"

Enzyme.configure({ adapter: new Adapter() });

describe("Identificacion de elementos del formulario:", ()=> {
  test("Se identifica el Field nombre.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find({'name':'nombre'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field precio.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find({'name':'precio'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field stockActual.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find({'name':'stockActual'});
    expect(field.exists()).toEqual(true);
 });
 
 test("Se identifica el Field stockCritico.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find({'name':'stockCritico'});
    expect(field.exists()).toEqual(true);
 });

 test("Se identifica el Field codigoInterno.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find({'name':'codigoInterno'});
    expect(field.exists()).toEqual(true);
 });

 test("Se identifica el Field descripcion.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find({'name':'descripcion'});
    expect(field.exists()).toEqual(true);
 });

 test("Se identifica el Field Rebajar/Aumentar stock:.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find({'name':'exampleFormControlSelect1'});
    expect(field.exists()).toEqual(true);
 });

 test("Se identifica el boton submit.", () => {
    const wrapper= mount(<FormModificarProductos />);
    const field= wrapper.find("#boton_registrar");
    expect(field.exists()).toEqual(true);
 });
});

// test('Se comprueba los campos requeridos del formulario.', async () => {
//   const handleSubmit = jest.fn()
//   render(<FormModificarProductos functionTest={handleSubmit} />)

//   userEvent.type(screen.getByLabelText(/Nombre:/i), 'Goma de borrar negra')
//   userEvent.type(screen.getByLabelText(/Precio:/i), '1000')
//   userEvent.selectOptions(screen.getByLabelText(/Rebajar/i), '1')
//   userEvent.type(screen.getByLabelText(/Stock Actual:/i), '100')
//   userEvent.type(screen.getByLabelText(/Stock Crítico:/i), '10')
//   userEvent.type(screen.getByLabelText(/Descripción/i), 'Esta es una bonita goma de borrar negra')

//   userEvent.click(screen.getByRole('button', {name: /Modificar/i}))

//   await waitFor(() =>
//     expect(handleSubmit).toHaveBeenCalled(),
//   )
// })

// test('Se comprueba el funcionamiento del formulario.', async () => {
//   const handleSubmit = jest.fn()
//   render(<FormModificarProductos functionTest={handleSubmit} />)

//   userEvent.type(screen.getByLabelText(/Nombre:/i), 'Goma de borrar negra')
//   userEvent.type(screen.getByLabelText(/Precio:/i), '1000')
//   userEvent.selectOptions(screen.getByLabelText(/Rebajar/i), '1')
//   userEvent.type(screen.getByLabelText(/Stock Actual:/i), '100')
//   userEvent.type(screen.getByLabelText(/Stock Crítico:/i), '10')
//   userEvent.type(screen.getByLabelText(/Descripción/i), 'Esta es una bonita goma de borrar negra')

//   userEvent.click(screen.getByRole('button', {name: /Modificar/i}))

//   await waitFor(() =>
//     expect(handleSubmit).toHaveBeenCalledWith({
//       nombre: "Goma de borrar negra",
//       precio: "",
//       stockActual: "",
//       stockCritico: "",
//       categoria: "",
//       descripcion: "",
//     }),
//   )
// })

// test('Se comprueba el funcionamiento del formulario.', async () => {
//   const handleSubmit = jest.fn()
//   render(<FormModificarProductos functionTest={handleSubmit} />)

//   userEvent.type(screen.getByLabelText(/Nombre:/i), 'Goma de borrar negra')
//   userEvent.type(screen.getByLabelText(/Precio:/i), '1000')
//   // userEvent.selectOptions(screen.getByLabelText(/Categoría:/i), '001')
//   userEvent.type(screen.getByLabelText(/Stock Actual:/i), '100')
//   userEvent.type(screen.getByLabelText(/Stock Crítico:/i), '10')
//   userEvent.type(screen.getByLabelText(/Descripción/i), 'Esta es una bonita goma de borrar negra')

//   userEvent.click(screen.getByRole('button', {name: /Modificar/i}))

//   await waitFor(() =>
//     expect(handleSubmit).toHaveBeenCalledWith({
//       nombre: "",
//       precio: "",
//       stockActual: "",
//       stockCritico: "",
//       categoria: "",
//       descripcion: "",
//     }),
//   )
// })
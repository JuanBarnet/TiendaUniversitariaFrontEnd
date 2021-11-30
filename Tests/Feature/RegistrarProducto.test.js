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

// test("Se identifica el input email.", () => {
//   const isAuthenticated = () => false;
//   const contextValue = { isAuthenticated };
//   const wrapper = mount(
//     <AuthContext.Provider value={contextValue}>
//       <Authenticator>
//         <FormAddProducto /> 
//       </Authenticator>
//     </AuthContext.Provider>
//   );
//   console.log(wrapper.debug());
//   const inputEmail = wrapper.find({ 'name': 'email' });
//   expect("asdf").toEqual("asdf");
//   // expect(inputEmail.exists()).toEqual(true);
// });

// test("Se identifica el Field nombre.", () => {
//    const wrapper= mount(<FormAddProducto />);
//    const field= wrapper.find({'name':'nombre'});
//    expect(field.exists()).toEqual(true);
// });

// test("Se identifica el Field precio.", () => {
//    const wrapper= mount(<FormAddProducto />);
//    const field= wrapper.find({'name':'precio'});
//    expect(field.exists()).toEqual(true);
// });

// test("Se identifica el Field stockActual.", () => {
//    const wrapper= mount(<FormAddProducto />);
//    const field= wrapper.find({'name':'stockActual'});
//    expect(field.exists()).toEqual(true);
// });

// test("Se identifica el Field stockCritico.", () => {
//    const wrapper= mount(<FormAddProducto />);
//    const field= wrapper.find({'name':'stockCritico'});
//    expect(field.exists()).toEqual(true);
// });

// test("Se identifica el Field categoria.", () => {
//    const wrapper= mount(<FormAddProducto />);
//    const field= wrapper.find({'name':'categoria'});
//    expect(field.exists()).toEqual(true);
// });

// test("Se identifica el Field descripcion.", () => {
//    const wrapper= mount(<FormAddProducto />);
//    const field= wrapper.find({'name':'categoria'});
//    expect(field.exists()).toEqual(true);
// });

// test("Se identifica el boton submit.", () => {
//    const wrapper= mount(<FormAddProducto />);
//    const field= wrapper.find("#boton_registrar");
//    expect(field.exists()).toEqual(true);
// });

// test("Se comprueba el funcionamento de los inputs.", () => {
//    const emailTest= "pain@ucn.cl";
//    const passwordTest= "123123123";
//    const handleSubmit= jest.fn();
//    const wrapper= mount(<Lucio functionTest={handleSubmit}/>);
//    const inputNombre= wrapper.find({'name':'nombre'});
//    const inputPrecio= wrapper.find({'name':'precio'});
//    const eventNombre = {target: {name: "email", value: "pain@ucn.cl"}};
//    const eventPrecio = {target: {name: "password", value: "123123123"}};
//    inputEmail.simulate('change', eventNombre);
//    inputPassword.simulate('change', eventPrecio);
//    const buttonForm= wrapper.find("button");
//    buttonForm.simulate('submit', {preventDefault: ()=> {}});
//    expect(handleSubmit).toHaveBeenLastCalledWith({email: emailTest, password: passwordTest});
// });

// test("Se comprueba el funcionamiento del boton submit.", () => {
//    const handleSubmit= jest.fn();
//    const wrapper= mount(<FormAddProducto functionTest={handleSubmit}/>);
//    const buttonForm= wrapper.find("#boton_registrar");
//    buttonForm.simulate('click');
//    buttonForm.simulate('submit');
//    expect(handleSubmit).toHaveBeenCalled();
// });

// test("El usuario ingresa su correo y su contraseña bien.", () => {
//    const handleSubmit= jest.fn();
//    const wrapper= mount(<FormAddProducto functionTest={handleSubmit}/>);
//    const inputEmail= wrapper.find({'name':'email'});
//    const inputPassword= wrapper.find({'name':'password'});
//    inputEmail.instance().value= "pain@ucn.cl";
//    inputPassword.instance().value= "123123123";
//    const buttonForm= wrapper.find("button");
//    buttonForm.simulate('submit', {preventDefault: ()=> {}});
//    expect(database(inputEmail.instance().value, inputPassword.instance().value)).toEqual(true);
// });

// test("El usuario ingresa su correo y su contraseña pero la cuenta de usuario no existe.", () => {
//    const handleSubmit= jest.fn();
//    const wrapper= mount(<FormAddProducto functionTest={handleSubmit}/>);
//    const inputEmail= wrapper.find({'name':'email'});
//    const inputPassword= wrapper.find({'name':'password'});
//    inputEmail.instance().value= "pain@ucn.cl";
//    inputPassword.instance().value= "321321321";
//    const buttonForm= wrapper.find("button");
//    buttonForm.simulate('submit', {preventDefault: ()=> {}});
//    expect(database(inputEmail.instance().value, inputPassword.instance().value)).toEqual(false);
// });



test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  render(<FormAddProducto onSubmit={handleSubmit} />)

  userEvent.type(screen.getByLabelText(/Nombre:/i), 'John')
  userEvent.type(screen.getByLabelText(/last name/i), 'Dee')
  userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')

  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
    }),
  )
})
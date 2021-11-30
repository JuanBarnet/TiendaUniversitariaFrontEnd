import React from 'react';
import { render, screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { AuthContext } from '../../contexts/AuthContext'
import { Authenticator } from '../../components/Authenticator'

import Home from '../../pages/index'

Enzyme.configure({ adapter: new Adapter() });

const database = (email, password) => {
  if (email == "pain@ucn.cl" && password == "123123123") {
    return true;
  } else {
    return false;
  }
}

test("Se identifica el input email.", () => {
  const isAuthenticated = () => false;
  const contextValue = { isAuthenticated };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Authenticator>
        <Home />
      </Authenticator>
    </AuthContext.Provider>
  );
  const inputEmail = wrapper.find({ 'name': 'email' });
  expect(inputEmail.exists()).toEqual(true);
});

test("Se identifica el input password.", () => {
  const isAuthenticated = () => false;
  const contextValue = { isAuthenticated };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Authenticator>
        <Home />
      </Authenticator>
    </AuthContext.Provider>
  );
  const inputPassword = wrapper.find({ 'name': 'password' });
  expect(inputPassword.exists()).toEqual(true);
});

test("Se identifica el boton submit.", () => {
  const isAuthenticated = () => false;
  const contextValue = { isAuthenticated };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Authenticator>
        <Home />
      </Authenticator>
    </AuthContext.Provider>
  );
  const buttonForm = wrapper.find("button");
  expect(buttonForm.exists()).toEqual(true);
});

test("Se comprueba el funcionamento de los inputs.", () => {
  const emailTest = "pain@ucn.cl";
  const passwordTest = "123123123";
  const handleSubmit = jest.fn();
  const isAuthenticated = () => false;
  const contextValue = { isAuthenticated };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Authenticator>
        <Home functionTest={handleSubmit} />
      </Authenticator>
    </AuthContext.Provider>
  );
  const inputEmail = wrapper.find({ 'name': 'email' });
  const inputPassword = wrapper.find({ 'name': 'password' });
  const eventEmail = { target: { name: "email", value: "pain@ucn.cl" } };
  const eventPassword = { target: { name: "password", value: "123123123" } };
  inputEmail.simulate('change', eventEmail);
  inputPassword.simulate('change', eventPassword);
  const buttonForm = wrapper.find("button");
  buttonForm.simulate('submit', { preventDefault: () => { } });
  expect(handleSubmit).toHaveBeenLastCalledWith({ email: emailTest, password: passwordTest });
});

test("Se comprueba el funcionamiento del boton submit.", () => {
  const handleSubmit = jest.fn();
  const isAuthenticated = () => false;
  const contextValue = { isAuthenticated };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Authenticator>
        <Home functionTest={handleSubmit} />
      </Authenticator>
    </AuthContext.Provider>
  );
  const buttonForm = wrapper.find("button");
  buttonForm.simulate('submit', { preventDefault: () => {} });
  expect(handleSubmit).toHaveBeenCalled();
});

test("El usuario ingresa su correo y su contraseña bien.", () => {
  const handleSubmit = jest.fn();
  const isAuthenticated = () => false;
  const contextValue = { isAuthenticated };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Authenticator>
        <Home functionTest={handleSubmit} />
      </Authenticator>
    </AuthContext.Provider>
  );
  const inputEmail = wrapper.find({ 'name': 'email' });
  const inputPassword = wrapper.find({ 'name': 'password' });
  inputEmail.instance().value = "pain@ucn.cl";
  inputPassword.instance().value = "123123123";
  const buttonForm = wrapper.find("button");
  buttonForm.simulate('submit', { preventDefault: () => { } });
  expect(database(inputEmail.instance().value, inputPassword.instance().value)).toEqual(true);
});

test("El usuario ingresa su correo y su contraseña pero la cuenta de usuario no existe.", () => {
  const handleSubmit = jest.fn();
  const isAuthenticated = () => false;
  const contextValue = { isAuthenticated };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <Authenticator>
        <Home functionTest={handleSubmit} />
      </Authenticator>
    </AuthContext.Provider>
  );
  const inputEmail = wrapper.find({ 'name': 'email' });
  const inputPassword = wrapper.find({ 'name': 'password' });
  inputEmail.instance().value = "pain@ucn.cl";
  inputPassword.instance().value = "321321321";
  const buttonForm = wrapper.find("button");
  buttonForm.simulate('submit', { preventDefault: () => { } });
  expect(database(inputEmail.instance().value, inputPassword.instance().value)).toEqual(false);
});


// test("Debe probar el context", ()=> {
//    const user= {
//       name: "Eren",
//       email: "eren@gmail.com",
//       rol: "vendedord",
//       estado: "1"
//    }

//    const isAuthenticated= ()=> false;

//    const contextValue= {user, isAuthenticated};
//    const wrapper= mount(
//       <AuthContext.Provider value={contextValue}>
//          <Authenticator>
//             <RegistrarUsuario/>
//          </Authenticator>
//       </AuthContext.Provider>
//    );

//    const header_tittle= wrapper.find("#header_tittle");
//    console.log(wrapper.debug());
//    expect(wrapper.text().includes("administrador")).toBe(true);
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

// // test("Se comprueba el funcionamento de los inputs.", () => {
// //    const emailTest= "pain@ucn.cl";
// //    const passwordTest= "123123123";
// //    const handleSubmit= jest.fn();
// //    const wrapper= mount(<Lucio functionTest={handleSubmit}/>);
// //    const inputNombre= wrapper.find({'name':'nombre'});
// //    const inputPrecio= wrapper.find({'name':'precio'});
// //    const eventNombre = {target: {name: "email", value: "pain@ucn.cl"}};
// //    const eventPrecio = {target: {name: "password", value: "123123123"}};
// //    inputEmail.simulate('change', eventNombre);
// //    inputPassword.simulate('change', eventPrecio);
// //    const buttonForm= wrapper.find("button");
// //    buttonForm.simulate('submit', {preventDefault: ()=> {}});
// //    expect(handleSubmit).toHaveBeenLastCalledWith({email: emailTest, password: passwordTest});
// // });

// test("Se comprueba el funcionamiento del boton submit.", () => {
//    const handleSubmit= jest.fn();
//    const wrapper= mount(<FormAddProducto functionTest={handleSubmit}/>);
//    const buttonForm= wrapper.find("#boton_registrar");
//    buttonForm.simulate('click');
//    buttonForm.simulate('submit');
//    expect(handleSubmit).toHaveBeenCalled();
// });

// // test("El usuario ingresa su correo y su contraseña bien.", () => {
// //    const handleSubmit= jest.fn();
// //    const wrapper= mount(<FormAddProducto functionTest={handleSubmit}/>);
// //    const inputEmail= wrapper.find({'name':'email'});
// //    const inputPassword= wrapper.find({'name':'password'});
// //    inputEmail.instance().value= "pain@ucn.cl";
// //    inputPassword.instance().value= "123123123";
// //    const buttonForm= wrapper.find("button");
// //    buttonForm.simulate('submit', {preventDefault: ()=> {}});
// //    expect(database(inputEmail.instance().value, inputPassword.instance().value)).toEqual(true);
// // });

// // test("El usuario ingresa su correo y su contraseña pero la cuenta de usuario no existe.", () => {
// //    const handleSubmit= jest.fn();
// //    const wrapper= mount(<FormAddProducto functionTest={handleSubmit}/>);
// //    const inputEmail= wrapper.find({'name':'email'});
// //    const inputPassword= wrapper.find({'name':'password'});
// //    inputEmail.instance().value= "pain@ucn.cl";
// //    inputPassword.instance().value= "321321321";
// //    const buttonForm= wrapper.find("button");
// //    buttonForm.simulate('submit', {preventDefault: ()=> {}});
// //    expect(database(inputEmail.instance().value, inputPassword.instance().value)).toEqual(false);
// // });
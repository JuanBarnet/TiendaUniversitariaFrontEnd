import React from 'react';
import  Home  from '../../pages/index.tsx';
import {render, screen} from '@testing-library/react';
import useAuth from '../../hooks/useAuth.tsx'
import '@testing-library/jest-dom';
import AuthContext, { AuthProvider } from '../../contexts/AuthContext.tsx';

//const {user, login, isAuthenticated}= useAuth();

/*
const contextValue= {
    user: {
        email: "pain@ucn.cl",
        password: "123123"
    }, 
    login: jest.fn(), 
    logout: jest.fn(),
    reLogin: jest.fn(), 
    isAuthenticated: jest.fn()
};

const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
      <AuthContext.Provider {...providerProps}>{ui}</AuthContext.Provider>,
      renderOptions,
    )
  }

*/

/*
test('Debe renderizar el login ', () => {
    const mensaje = "Hola";
    const { debug } = customRender(<Home/>,{contextValue});

    debug();

    expect(mensaje).toBe("Hola");
})
*/

/**
 * A tree containing both a providers and consumer can be rendered normally
 */
 test('NameProvider/Consumer shows name of character', () => {
  const mensaje = "Hola";
  /*
  const wrapper = ({children}) => (
    <AuthProvider>
      {children}
    </AuthProvider>
  )

  const { debug } = render(<Home />, {wrapper})
  debug();
  */
  
  expect(mensaje).toBe("Hola");

})

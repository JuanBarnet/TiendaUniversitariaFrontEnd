import React from 'react';
import { FormAddUsuario } from '../../components/Registrar/Usuario/FormAddUsuario.tsx';
import validationSchema from "../../components/Registrar/Usuario/validationSchema";
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

/**
* A tree containing both a providers and consumer can be rendered normally
*/

test('Debe renderizar el formulario de registro de usuario', () => {
  const { debug, container } = render(<FormAddUsuario />)
  
  debug();
  
  expect(container).toMatchSnapshot();

})

test('Envio de formulario', async () => {
    //falta el envio del formulario
    const handleSubmit = jest.fn();
    render(<FormAddUsuario onSubmit={handleSubmit} validationSchema={validationSchema} />)
  
    /*
    //cambia valores de los inputs
    act(() =>{
        userEvent.type(screen.getByPlaceholderText("Nombre"), 'Luciano');
        userEvent.type(screen.getByPlaceholderText("Apellido"), 'Larama');
        userEvent.type(screen.getByPlaceholderText("correo@gmail.com"), 'luciano@ucn.cl');
        userEvent.type(screen.getByPlaceholderText("Seleccione un rol"), 'administrador');
    })

    userEvent.click(screen.getByRole('button', {name: /submit/i}));  
    */

    //cambia valores de los inputs
    /*
    userEvent.type(screen.getByPlaceholderText("Nombre"), 'Luciano');
    userEvent.type(screen.getByPlaceholderText("Apellido"), 'Larama');
    userEvent.type(screen.getByPlaceholderText("correo@gmail.com"), 'luciano@ucn.cl');
    userEvent.type(screen.getByPlaceholderText("Seleccione un rol"), 'administrador');
    */

    
    userEvent.click(screen.getByRole('button', {name: /submit/i}));  

    await waitFor(() =>
    
      expect(handleSubmit).toHaveBeenCalledWith({
        nombre: 'Luciano',
        apellido: 'Larama',
        email: 'luciano@ucn.cl',
        //contrasenia: "123123123",
        //confirmContrasenia: "123123123",
        contrasenia: "",
        confirmContrasenia: "",
        rol: 'administrador',
      }),
    )
    
})
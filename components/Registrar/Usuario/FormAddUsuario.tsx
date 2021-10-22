import React from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";
import { registerUserAPI } from "../../../api/user";
import Swal from 'sweetalert2'

interface FormValues {
  nombre: string;
  apellido: string;
  email: string;
  contrasenia: string;
  confirmContrasenia: string;
  rol: string;
}
export const FormAddUsuario = (): JSX.Element => {
  const initialValues: FormValues = {
    nombre: "",
    apellido: "",
    email: "",
    contrasenia: "",
    confirmContrasenia: "",
    rol: "",
  };  

  const onSubmit = async (values: FormValues) => {
    try{
    const resp = await registerUserAPI(values.nombre, values.apellido, values.email, values.contrasenia, values.confirmContrasenia, values.rol);
    console.log(resp);

      if(resp.message == "Creado exitosamente"){
        Swal.fire(
          '¡Listo!',
          'Se ha registrado correctamente.',
          'success'
        )
        .then(function() {
          window.location.href = "/tienda/index";
      });

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos inválidos al registrarse, intente de nuevo.'
        })
      }
    } catch(error: any){

    }
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form id="registrar">
          <div className="row" id="fila2">
          </div>
          <div className="row" id="fila">
            <div id="register_user_left">  
              <div className="col-12">
                <label htmlFor="nombre" id="text">Nombre:</label>
                <Field className="form-control" name="nombre" type="text" placeholder="Nombre"/>
              </div>          
            </div>
            <div id="register_user_right">
              <div className="col-12">
                <label htmlFor="apellido" id="text">Apellido:</label>
                <Field className="form-control" name="apellido" type="text" placeholder="Apellido"/>
              </div>
            </div>
          </div>
          <div className="row" id="fila2">
            <div id="fila_unidad">  
              <div className="col-12">
                <ErrorMessage name="nombre" component="span" className="form__error"/>
              </div>          
            </div>
            <div id="fila_unidad">
              <div className="col-12">
                <ErrorMessage name="apellido" component="span" className="form__error"/>
              </div>
            </div>
          </div>
          <div className="row" id="fila">
            <div id="register_user_left">  
              <div className="col-12">
                <label htmlFor="email" id="text">Correo Electrónico:</label>
                <Field className="form-control" name="email" type="text" placeholder="correo@gmail.com"/>
              </div>          
            </div>
            <div id="register_user_right">
              <div className="col-12">
              <label id="text">Rol:</label>
                <Field as="select" name="rol" className="form-control" placeholder="Seleccione un rol">
                  <option>Seleccione un rol</option>
                  <option value="administrador">Administrador</option>
                  <option value="vendedor">Vendedor</option>
                </Field>
              </div>
            </div>
          </div>
          <div className="row" id="fila2">
            <div id="fila_unidad">  
              <div className="col-12">
                <ErrorMessage name="email" component="span" className="form__error"/>
              </div>          
            </div>
            <div id="fila_unidad">
              <div className="col-12">
                <ErrorMessage name="rol" component="span" className="form__error"/>
              </div>
            </div>
          </div>
          <div className="row" id="fila">
            <div id="register_user_left">     
              <div className="col-12">
                <label htmlFor="contrasenia" id="text">Contraseña:</label>
                <Field className="form-control" name="contrasenia" type="password" placeholder="********"/>
              </div>
            </div>
            <div id="register_user_right">
              <div className="col-12">
                <label htmlFor="confirmContrasenia" id="text">Confirmar Contraseña:</label>
                <Field className="form-control" name="confirmContrasenia" type="password" placeholder="********"/>                   
              </div>
            </div>
          </div>
          <div className="row" id="fila2">
            <div id="fila_unidad">  
              <div className="col-12">
                <ErrorMessage name="contrasenia" component="span" className="form__error"/>
              </div>          
            </div>
            <div id="fila_unidad">
              <div className="col-12">
                <ErrorMessage name="confirmContrasenia" component="span" className="form__error"/>
              </div>
            </div>
          </div>
          <div className="container-fluid" id="contenedor_boton">
            <button type="submit" id="boton_registrar" className="btn btn-primary btn-block btn-lg">Registrar</button>    
          </div>
        </Form>
      </Formik>
    </>
  );
};



import React from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";

interface FormValues {
  nombre: string;
  precio: string;
  stockActual: string;
  stockCritico: string;
  categoria: string;
  descripcion: string;
}
export const FormAddProducto = (): JSX.Element => {
  const initialValues: FormValues = {
    nombre: "",
    precio: "",
    stockActual: "",
    stockCritico: "",
    categoria: "",
    descripcion: "",
  };  

  const onSubmit = (values: FormValues) => {
    setTimeout( () => {
      alert(JSON.stringify(values, null, 2));
    }, 500)
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form id="registrar">
          <div className="row" id="fila2_p">
          </div>
          <div className="row" id="fila_p">
            <div id="register_user_left_p">  
              <div className="col-12">
                <label htmlFor="nombre" id="text">Nombre:</label>
                <Field className="form-control" name="nombre" type="text" placeholder="Nombre del producto"/>
              </div>          
            </div>
            <div id="register_user_right_p">
              <div className="col-12">
              <label htmlFor="precio" id="text">Precio:</label>
                <Field className="form-control" name="precio" type="text" placeholder="0"/>
              </div>
            </div>
          </div>
          <div className="row" id="fila2_p">
            <div id="fila_unidad_p">  
              <div className="col-12">
                <ErrorMessage name="nombre" component="span" className="form__error"/>
              </div>          
            </div>
            <div id="fila_unidad_p">
              <div className="col-12">
                <ErrorMessage name="precio" component="span" className="form__error"/>
              </div>
            </div>
          </div>
          <div className="row" id="fila_p">
            <div id="register_user_left_p">  
              <div className="col-12">
                <label htmlFor="stockActual" id="text">Stock Actual:</label>
                <Field className="form-control" name="stockActual" type="text" placeholder="0"/>
              </div>          
            </div>
            <div id="register_user_right_p">
              <div className="col-12">
                <label htmlFor="stockCritico" id="text">Stock Crítico:</label>
                <Field className="form-control" name="stockCritico" type="text" placeholder="0"/>
              </div>
            </div>
          </div>
          <div className="row" id="fila2_p">
            <div id="fila_unidad_p">  
              <div className="col-12">
                <ErrorMessage name="stockActual" component="span" className="form__error"/>
              </div>          
            </div>
            <div id="fila_unidad_p">
              <div className="col-12">
                <ErrorMessage name="stockCritico" component="span" className="form__error"/>
              </div>
            </div>
          </div>
          <div className="row" id="fila_p">
            <div id="register_user_left_p">     
              <div className="col-12">
              <label id="text">Categoría:</label>
                  <Field as="select" name="categoria" className="form-control" placeholder="seleccione un rol">
                    <option selected>Seleccione una categoría</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Field>
              </div>
            </div>
            <div id="register_user_right_p">
              <div className="col-12">
              </div>
            </div>
          </div>
          <div className="row" id="fila2_p">
            <div id="fila_unidad_p">  
              <div className="col-12">
                <ErrorMessage name="categoria" component="span" className="form__error"/>
              </div>          
            </div>
            <div id="fila_unidad_p">
              <div className="col-12">
              </div>
            </div>
          </div>
          <div className="container-fluid" id="contenedor_descripcion">
            <div className="col-12">
              <label htmlFor="descripcion" id="text">Descripción</label>
              <Field name="descripcion" as="textarea" className="form-control" rows="3" placeholder="Ingrese una descripción del producto"></Field>
            </div>
          </div>
          <div className="row" id="fila2_p">
            <div id="fila_unidad_p">  
              <div className="col-12">
                <ErrorMessage name="descripcion" component="span" className="form__error"/>
              </div>          
            </div>
            <div id="fila_unidad_p">
              <div className="col-12">
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



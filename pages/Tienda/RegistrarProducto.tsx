import Link from "next/link";
import React from "react";
import { FormAddProducto } from "../../components/Registrar/Producto/FormAddProducto"


const RegistrarProducto = () => {
  return (
    <>
      <div className="container-fluid">
        <section className="jumbotron" id="register_user2">
          <div className="col" id="columna">
            <div className="container-fluid" id="header">
                <h3 id="header_tittle">
                  Registrar Producto
                </h3>
            </div>   
            <FormAddProducto />  
          </div>         
        </section>      
      </div>
    </>
  );
};

export default RegistrarProducto;
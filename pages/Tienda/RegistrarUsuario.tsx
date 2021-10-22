import Link from "next/link";
import React from "react";
import { FormAddUsuario } from "../../components/Registrar/Usuario/FormAddUsuario"


const RegistrarUsuario = () => {
  return (
    <>
      <div className="container-fluid">
        <section className="jumbotron" id="register_user">
          <div className="col" id="columna">
            <div className="container-fluid" id="header">
                <h3 id="header_tittle">
                  Registrar Usuario
                </h3>
            </div>   
            <FormAddUsuario />  
          </div>         
        </section>      
      </div>
    </>
  );
};

export default RegistrarUsuario;

export async function getStaticProps(context:any) {
  return {
     props: {
        protected: true,
        permissions: ["administrador"]
     }
  };
}

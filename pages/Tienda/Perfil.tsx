import Link from "next/link";
import React from "react";
import { PerfilForm } from "../../components/PerfilForm"


const Perfil = () => {
  return (
    <>
      <div className="container-fluid">
        <section className="jumbotron" id="perfil">
          <div className="col" id="columna">
            <div className="container-fluid" id="header">
                <h3 id="header_tittle">
                  Perfil de usuario
                </h3>
            </div>   
             <PerfilForm></PerfilForm>
          </div>         
        </section>      
      </div>
    </>
  );
};

export default Perfil;

export async function getStaticProps(context:any) {
  return {
     props: {
        protected: true,
        permissions: ["administrador", "vendedor"]
     }
  };
}
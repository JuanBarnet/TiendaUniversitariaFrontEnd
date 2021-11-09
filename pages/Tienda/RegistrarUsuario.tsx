import Link from "next/link";
import React from "react";
import { FormAddUsuario } from "../../components/Registrar/Usuario/FormAddUsuario"


const RegistrarUsuario = () => {
  return (
    <> 
      <FormAddUsuario />  
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

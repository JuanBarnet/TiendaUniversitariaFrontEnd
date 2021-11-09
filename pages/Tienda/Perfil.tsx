import Link from "next/link";
import React from "react";
import { PerfilForm } from "../../components/PerfilForm"


const Perfil = () => {
  return (
    <>  
      <PerfilForm></PerfilForm>          
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
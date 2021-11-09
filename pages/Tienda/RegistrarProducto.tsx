import Link from "next/link";
import React from "react";
import { FormAddProducto } from "../../components/Registrar/Producto/FormAddProducto"


const RegistrarProducto = () => {
  return (
    <>  
      <FormAddProducto />  
    </>
  );
};

export default RegistrarProducto;

export async function getStaticProps(context:any) {
  return {
     props: {
        protected: true,
        permissions: ["administrador"]
     }
  };
}
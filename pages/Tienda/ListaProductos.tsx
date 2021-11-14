import Link from "next/link";
import React from "react";
import { FormListaProductos } from "../../components/FormListaProductos"


const ListaProductos = () => {
  return (
    <> 
      <FormListaProductos />  
    </>
  );
};

export default ListaProductos;

export async function getStaticProps(context:any) {
  return {
     props: {
        protected: true,
        permissions: ["administrador", "vendedor"]
     }
  };
}
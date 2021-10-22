import React, { useEffect } from 'react'
import { HeaderPerfil } from '../../components/HeaderPerfil';

const AgregarProducto= ()=> {

   return(
      <>
      <HeaderPerfil />
      <h1>AgregarProducto</h1>
      </>
   );
}

export default AgregarProducto;

export async function getStaticProps(context:any) {
   return {
      props: {
         protected: true,
         permissions: ["administrador"]
      }
   };
}
import React, { useEffect } from 'react'
import { HeaderPerfil } from '../../components/HeaderPerfil';

const RealizarVenta= ()=> {
   return(
      <>
      <HeaderPerfil/>
      <h1>Realizar Venta</h1>
      </>
   );
}

export default RealizarVenta;

export async function getStaticProps(context:any) {
   return {
      props: {
         protected: true,
         permissions: ["administrador","vendedor"]
      }
   };
}
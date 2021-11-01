import React from 'react'
import { useRouter } from 'next/router';
import { HeaderPerfil } from '../../components/HeaderPerfil';

const Pn= ()=> {
   const Router = useRouter();
   return(
      <>
      <HeaderPerfil />
      <button onClick={(e)=>{Router.push('/tienda/agregar-producto')}}>Agregar Producto (administrador)</button>
      <button onClick={(e)=>{Router.push('/tienda/realizar-venta')}}>Realizar Venta (vendedor)</button>
      </>
   );
}

export default Pn;

export async function getStaticProps(context:any) {
   return {
      props: {
         protected: true,
         permissions: ['administrador', "vendedor"]
      }
   };
}
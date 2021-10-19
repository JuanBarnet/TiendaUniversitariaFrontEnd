import React, {useEffect} from 'react'

import useAuth from '../hooks/useAuth';
import { useRouter } from "next/router";

export const HeaderPerfil= ()=> {
   const {user, logout, reLogin}= useAuth();
   const Router = useRouter();

   const handleLogout= async (e: any)=> {
      await logout();
      Router.push("/");
   }

   return(
      <>
      <h2>Tienda universitaria</h2>
      <h5>Nombre: {user?.name}</h5>
      <h5>Email: {user?.email}</h5>
      <h5>Rol: {user?.rol}</h5>
      <button onClick={handleLogout}>SALIR</button>
      <hr/>
      </>
   );
}

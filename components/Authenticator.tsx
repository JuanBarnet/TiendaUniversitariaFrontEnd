import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import router, { useRouter } from 'next/router';

export const Authenticator= ({children}: any)=> {
   console.log("Authentication");

   const {user, isAuthenticated}= useAuth(); 
   const Router = useRouter();

   const isProtected= children.props.protected;
   const permissions= children.props.permissions;

   if(isProtected){ // pagina privada
      if(isAuthenticated()){ // credenciales de usuario
         if(permissions.includes(user.rol)){ // permisos suficientes
            return children;
         }else{ // permisos insuficientes
            Router.push("/pn");
         }
      }else{ // sin credenciales de usuario
         Router.push("/");
      }
   }else{ //pagina publica
      return children;
   }
   return null;
}
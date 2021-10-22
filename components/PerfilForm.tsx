import React from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

export const PerfilForm = (): JSX.Element => {
  const {user} = useAuth();

  return (
    <>
    <div className="container-fluid">
        <div className="row h-100" id="fila2">
            <div id="register_user_left">
                <div className="text-center mt-5">
                    <img
                    src={"/images/icon.png" as any}
                    width="80%"
                    height="80%"
                    alt="Logo Perfil"  
                    object-fit= "contain"
                    />
                </div>
            </div>           
            <div id="register_user_right" className="mt-5">               
                <div className="row form-group mt-5">
                    <div className="col-lg-12 h5">
                        <span className="font-weight-bold"> Nombre: </span> <span className="text-muted"> {user.name} </span>
                    </div>
                </div>              
                <div className="row form-group mt-4">
                    <div className="col-lg-12 h5">
                    <span className="font-weight-bold"> Correo: </span> <span className="text-muted"> {user.email} </span>
                    </div>
                </div>
                <div className="row form-group mt-4">
                    <div className="col-lg-12 h5">
                    <span className="font-weight-bold"> Rol: </span> <span className="text-muted"> {user.rol} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
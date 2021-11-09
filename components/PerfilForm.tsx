import React from "react";
import router from "next/router";
import Image from "next/image";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

function useWindowDimensions() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);
  
    const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  
    React.useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
    });
  
    return {
      width,
      height,
    }
  }

export const PerfilForm = (): JSX.Element => {
    const {user} = useAuth();

    const { width, height } = useWindowDimensions()
    const limite = 1033;

    return (
    <>
        <div className="container-fluid" id="contenedor" style={(width > limite)? (height > 500)? {height: height - 100, display:'flex', alignItems:'center'}: {height: 400, display:'flex', alignItems:'center'} : {} }>
            <section className="jumbotron" id={(width > limite)? "perfil" : "perfil_responsive"}>
                <div className="col" style={(width > limite)? {maxHeight:'370px', paddingLeft:'0', paddingRight:'0'} : {height:'500px', paddingLeft:'0', paddingRight:'0'}}>
                    <div className="container-fluid" id="header">
                        <h3 id="header_tittle">
                        Perfil de usuario
                        </h3>
                    </div>  
                    <div className="container-fluid" style={(width > limite)? {height:'305px'} : {height:'435px', display:'flex', alignItems:'center'}}>
                        <div className={(width > limite)? "row" : "col"} id={(width > limite)? "fila_perfil" : "columna_perfil"}>
                            <div id={(width > limite)? "perfil_user" : "perfil_user_responsive"}>
                                <div className="text-center mt-4">
                                    <img
                                        src={"/images/icon.png" as any}
                                        width={(width > limite)? "200" : "150"}
                                        height={(width > limite)? "200" : "150"}
                                        alt="Logo Perfil"  
                                        object-fit= "contain"
                                    />
                                </div>
                            </div>           
                            <div id={(width > limite)? "perfil_user" : "perfil_user_responsive"} className="mt-5">               
                                <div className="row form-group mt-3">
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
                </div>         
            </section>      
        </div>
    </>
  );
};
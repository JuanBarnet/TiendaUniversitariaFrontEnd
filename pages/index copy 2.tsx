import React, { useState } from 'react'
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import styles from '../styles/Home.module.css';
import { FaAddressBook, FaBox, FaBoxes } from "react-icons/fa"
import { FaLock, FaUser, FaAt } from 'react-icons/fa';

// fuente del form: https://bootsnipp.com/snippets/a6Pdk

const Home= ()=> {
   const Router = useRouter();
   const {user, login, isAuthenticated}= useAuth();
   const [alerta, setAlerta]= useState(false);

   const formInitialValues= {
      email: "",
      password: ""
   }
   const [formValues, setFormValues]= useState(formInitialValues);
   const {email, password}= formValues;

   const handleChangeForm= (e:any)=> {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value
      });
   }

   const handleSubmit= async (e:any)=> {
      e.preventDefault();
      const resp= await login(email, password);
      
      if(resp){
         console.log("user authenticated");
         setAlerta(false);
      }else{
         console.log("invalid credentials");
         setAlerta(true);
      }
   }

   const pene= (
      <>
      <div className="background-image"></div>
      <div className="container-fluid">
            <div className="row justify-content-center">
               <div className="col-md-3">
                  <div className="card">
                     <div className="card-header p-2 text-center">
                        Tienda Universitaria UCN
                     </div>
                     <div className="card-body p-1">
                        <img id="profile-img" className="profile-img-card" src="/images/logo-ucn.png"/>
                        <form
                           onSubmit={handleSubmit}
                           autoComplete="off"
                        >
                           <div className="form-group px-3">
                              <div className="input-group mb-2 mt-3">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text"><FaUser/></span>
                                 </div>
                                 <input type="text" className="form-control" name="email" placeholder="Correo electronico" value={email} onChange={handleChangeForm} />
                              </div>
                              <div className="input-group mb-2">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text"><FaLock/></span>
                                 </div>
                                 <input type="password" className="form-control" name="password" placeholder="Contraseña" value={password} onChange={handleChangeForm}/>
                              </div>
                              <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                              {
                                 alerta ? 
                                 <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                                 <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                 <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={(e)=> {setAlerta(false)}}>
                                   <span aria-hidden="true">&times;</span>
                                 </button>
                                 </div> 
                                 : 
                                 null
                              }
                              
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );

   if(isAuthenticated()){
      Router.replace("/pn");
   }else{
      return pene;
   }
   return null;
}

export default Home;

export async function getStaticProps(context:any) {
   return {
      props: {
         protected: false,
         permissions: []
      }
   };
}